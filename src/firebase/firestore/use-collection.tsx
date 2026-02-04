'use client';
import {
  type DocumentData,
  type FirestoreError,
  onSnapshot,
  type Query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export function useCollection<T extends DocumentData>(query: Query<T> | null) {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  useEffect(() => {
    if (query === null) {
      setData(null);
      setIsLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      query,
      (querySnapshot) => {
        const data = querySnapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id }) as T
        );
        setData(data);
        setIsLoading(false);
      },
      async (err) => {
        const permissionError = new FirestorePermissionError({
          // Note: path is not available on query object in JS SDK v9
          path: `collection query`,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(err);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(query)]);

  return { data, isLoading, error };
}
