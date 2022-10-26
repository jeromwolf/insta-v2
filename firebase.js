// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBF7R5e0RuFmTHRv3kEFH_Q8wvGBqFrDo",
  authDomain: "insta-9e1aa.firebaseapp.com",
  projectId: "insta-9e1aa",
  storageBucket: "insta-9e1aa.appspot.com",
  messagingSenderId: "341675655442",
  appId: "1:341675655442:web:b3ede6f165b49f615e73cb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };