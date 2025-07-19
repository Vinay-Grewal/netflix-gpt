// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTnhx1Vbm6CUy1b5b65o6IZfKdmKHS5U8",
  authDomain: "netflixgpt-5e65e.firebaseapp.com",
  projectId: "netflixgpt-5e65e",
  storageBucket: "netflixgpt-5e65e.firebasestorage.app",
  messagingSenderId: "459097978195",
  appId: "1:459097978195:web:fee6a5da40d2cbdc4b1da6",
  measurementId: "G-RWPJXKD52D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
