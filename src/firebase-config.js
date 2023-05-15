// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS2yYSdhYpdQ6fTn6d4vGqYkmAzOBTnFQ",
  authDomain: "flock-99a84.firebaseapp.com",
  projectId: "flock-99a84",
  storageBucket: "flock-99a84.appspot.com",
  messagingSenderId: "422645667697",
  appId: "1:422645667697:web:4147bba3e732fa2f7388d0",
  measurementId: "G-H1GN2XYYDW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
