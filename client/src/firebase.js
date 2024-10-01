// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7eeab.firebaseapp.com",
  projectId: "mern-estate-7eeab",
  storageBucket: "mern-estate-7eeab.appspot.com",
  messagingSenderId: "820423086026",
  appId: "1:820423086026:web:72a241f8ca51f76a800933",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
