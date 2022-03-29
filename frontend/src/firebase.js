// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPYYu4K6VYJ9M5d37zR35cdvog9Yiv1z0",
  authDomain: "react-quora-clone-9f08d.firebaseapp.com",
  projectId: "react-quora-clone-9f08d",
  storageBucket: "react-quora-clone-9f08d.appspot.com",
  messagingSenderId: "480707979831",
  appId: "1:480707979831:web:2cb2a5550c8edf89022db2",
  measurementId: "G-2HXK6P9LT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}