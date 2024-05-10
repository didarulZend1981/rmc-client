// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtDkbVjYltjHAhFdiXHI-l52xdcLP3ogo",
  authDomain: "rmcd-49ebe.firebaseapp.com",
  projectId: "rmcd-49ebe",
  storageBucket: "rmcd-49ebe.appspot.com",
  messagingSenderId: "773917228229",
  appId: "1:773917228229:web:8928e25c8359c9d03cc4ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;