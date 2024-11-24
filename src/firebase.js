import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJDXGUMPPgWRhxZJSLBhCwEEiIFHPTuOw",
  authDomain: "portfolio-b5975.firebaseapp.com",
  projectId: "portfolio-b5975",
  storageBucket: "portfolio-b5975.appspot.com",
  messagingSenderId: "823368006072",
  appId: "1:823368006072:web:d8c5c8b98c9e8c70e9d5c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Enable offline persistence
try {
  enableIndexedDbPersistence(db);
} catch (err) {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support persistence.');
  }
}

export { db };
