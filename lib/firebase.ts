// Firebase client initialization and Firestore export
// Use this file to import `db` where you need Firestore in client code.
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxSmZwkU0Xy0MvxjaqJgVpBpZdnqJkYo4",
  authDomain: "test-crud-44b9e.firebaseapp.com",
  projectId: "test-crud-44b9e",
  storageBucket: "test-crud-44b9e.firebasestorage.app",
  messagingSenderId: "154875113292",
  appId: "1:154875113292:web:1bae678829bd9a38c269e9",
};

// Prevent re-initializing in dev/hot-reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore instance
const db = getFirestore(app);

export { app, db, firebaseConfig };
