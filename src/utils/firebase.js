// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-f8e94.firebaseapp.com",
  projectId: "blog-f8e94",
  storageBucket: "blog-f8e94.appspot.com",
  messagingSenderId: "360164977707",
  appId: "1:360164977707:web:2a4bd4a8f1b2ccf1cdce6e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);