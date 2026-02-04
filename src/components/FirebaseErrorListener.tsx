'use client';
import { useEffect } from 'react';

import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      // This will be caught by Next.js's development error overlay.
      throw error;
    };

    errorEmitter.on('permission-error', handlePermissionError);

    // It's unconventional to not have a cleanup, but here we want the listener to be active
    // for the entire lifecycle of the app. If this component were to unmount and remount,
    // you might get duplicate listeners.
  }, []);

  return null;
}
