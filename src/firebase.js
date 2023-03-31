// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDB6ECgmOtg-27g6N1NhoH3YiRWEZFQL6c",
    authDomain: "jobcrop-f80a0.firebaseapp.com",
    projectId: "jobcrop-f80a0",
    storageBucket: "jobcrop-f80a0.appspot.com",
    messagingSenderId: "794559361590",
    appId: "1:794559361590:web:2aa2e7feea6619c9de5e97",
    measurementId: "G-SEZEV627SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;