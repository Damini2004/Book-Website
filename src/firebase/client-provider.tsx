'use client';

import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';

const { firebaseApp, firestore } = initializeFirebase();

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FirebaseProvider value={{ firebaseApp, firestore }}>
      {children}
    </FirebaseProvider>
  );
}
