// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDICuT10_RwpMS1564lwmVrQxAFf5XtBAc",
  authDomain: "netflixgpt-82e77.firebaseapp.com",
  projectId: "netflixgpt-82e77",
  storageBucket: "netflixgpt-82e77.appspot.com",
  messagingSenderId: "483215707845",
  appId: "1:483215707845:web:f030a78bda5c591762eaac",
  measurementId: "G-XBV6CG9S2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();