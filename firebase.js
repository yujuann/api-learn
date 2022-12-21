// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJzcE6SFBFTVWbbiWZ0IBbbIIE6pZ13ss",
  authDomain: "xp-1-21790.firebaseapp.com",
  projectId: "xp-1-21790",
  storageBucket: "xp-1-21790.appspot.com",
  messagingSenderId: "817833453157",
  appId: "1:817833453157:web:84a9bb92814144baa3488c",
  measurementId: "G-EKCRE9EQ8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
