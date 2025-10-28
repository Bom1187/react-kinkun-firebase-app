import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.REACT_FIREBASE_APP_ID,
};

const app = !getApps().length? initializeApp(firebaseConfig): getApp;
export const firestoreDB = getFirestore(app) 