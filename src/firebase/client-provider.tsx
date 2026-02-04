'use client';

import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';
import { getAuth } from 'firebase/auth';

const { firebaseApp, firestore } = initializeFirebase();
const auth = getAuth(firebaseApp);

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FirebaseProvider value={{ firebaseApp, firestore, auth }}>
      {children}
    </FirebaseProvider>
  );
}
