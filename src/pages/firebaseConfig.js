// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV0nEvR-dkLJ4aSHTRydPIYJH728-Og6I",
  authDomain: "tontine-b2cb3.firebaseapp.com",
  projectId: "tontine-b2cb3",
  storageBucket: "tontine-b2cb3.firebasestorage.app",
  messagingSenderId: "97008297106",
  appId: "1:97008297106:web:3386dcc25a57958ce1724b",
  measurementId: "G-7LKT0M47ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);