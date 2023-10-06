// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAblkxfTzOwas3E7DVLI9Gb28CwhCCQJik",
  authDomain: "react-dragon-news-auth-e2917.firebaseapp.com",
  projectId: "react-dragon-news-auth-e2917",
  storageBucket: "react-dragon-news-auth-e2917.appspot.com",
  messagingSenderId: "774185862115",
  appId: "1:774185862115:web:bb4fa5f6d23862c8fb16d6",
  measurementId: "G-S3PP6X8GDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
