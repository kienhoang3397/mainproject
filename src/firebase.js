// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBplmhxAVgHXwal7NGEbpPIbJjYsTAmxLY",
  authDomain: "mainproject-6f463.firebaseapp.com",
  projectId: "mainproject-6f463",
  storageBucket: "mainproject-6f463.appspot.com",
  messagingSenderId: "392195202727",
  appId: "1:392195202727:web:e79b84189bef622a1ac582",
  measurementId: "G-ELVS5L52MR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const signIn = signInWithEmailAndPassword
export const signOutt = signOut 


