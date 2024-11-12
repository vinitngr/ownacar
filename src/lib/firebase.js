import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ownacarimg.firebaseapp.com",
  projectId: "ownacarimg",
  storageBucket: "ownacarimg.firebasestorage.app",
  messagingSenderId: "95974210215",
  appId: "1:95974210215:web:e734f76a97492ec7267982",
  measurementId: "G-RFYPEVY2CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
