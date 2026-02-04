'use client';
import {
  initializeApp,
  getApp,
  getApps,
  type FirebaseApp,
} from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, type Auth } from 'firebase/auth';

import { getFirebaseConfig } from './config';

export function initializeFirebase(): {
  firebaseApp: FirebaseApp;
  firestore: Firestore;
  auth: Auth;
} {
  const firebaseConfig = getFirebaseConfig();
  const appName = firebaseConfig.projectId;
  const apps = getApps();
  const existingApp = apps.find((app) => app.name === appName);
  const firebaseApp = existingApp || initializeApp(firebaseConfig, appName);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return { firebaseApp, firestore, auth };
}

export * from './provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './auth/use-user';
