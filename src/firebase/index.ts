'use client';
import {
  initializeApp,
  getApp,
  getApps,
  type FirebaseApp,
} from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

import { getFirebaseConfig } from './config';

export function initializeFirebase(): {
  firebaseApp: FirebaseApp;
  firestore: Firestore;
} {
  const firebaseConfig = getFirebaseConfig();
  const appName = firebaseConfig.projectId;
  const apps = getApps();
  const existingApp = apps.find((app) => app.name === appName);
  const firebaseApp = existingApp || initializeApp(firebaseConfig, appName);
  const firestore = getFirestore(firebaseApp);

  return { firebaseApp, firestore };
}

export * from './provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
