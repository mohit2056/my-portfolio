import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxMgWeGu9avc9usVz-8hfXTuHBD56BfQA",
  authDomain: "mohit-portfolio-reviews.firebaseapp.com",
  projectId: "mohit-portfolio-reviews",
  storageBucket: "mohit-portfolio-reviews.firebasestorage.app",
  messagingSenderId: "1077250422466",
  appId: "1:1077250422466:web:8b1de5b4f5e3975bcded5b",
  measurementId: "G-2SSJ2DMEH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore (Database) export karein
export const db = getFirestore(app);
