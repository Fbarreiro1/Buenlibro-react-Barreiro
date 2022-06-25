// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpnmlnkskSuopNCbNbhYONGP-C74gTPTg",
  authDomain: "buenlibro-coder-react.firebaseapp.com",
  projectId: "buenlibro-coder-react",
  storageBucket: "buenlibro-coder-react.appspot.com",
  messagingSenderId: "262129448769",
  appId: "1:262129448769:web:7d388fb64df36f34dfd3c0",
  measurementId: "G-2ZNRDBH220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)