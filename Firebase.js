// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getDatabase } from 'firebase/database';
import { get, ref, set, update } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_N0sUmbF2j417xH09YLzBRHKzhMy4IF4",
  authDomain: "be-healthy-9643b.firebaseapp.com",
  projectId: "be-healthy-9643b",
  storageBucket: "be-healthy-9643b.appspot.com",
  messagingSenderId: "792560950302",
  appId: "1:792560950302:web:20d28f8d7bc87e88fca20f",
  measurementId: "G-2LM9B46KGN"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
export const database = getDatabase(firebase);
export const auth =getAuth(firebase);
//const analytics = getAnalytics(app);
