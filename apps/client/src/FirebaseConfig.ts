// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfAifn9P8u3ApyaSBwTsYfS2ikmPG0nlY",
  authDomain: "tennistlv-f7c57.firebaseapp.com",
  projectId: "tennistlv-f7c57",
  storageBucket: "tennistlv-f7c57.firebasestorage.app",
  messagingSenderId: "178105563366",
  appId: "1:178105563366:web:2acaa67aca0168e9b86327",
  measurementId: "G-0VLH1EV4FQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
