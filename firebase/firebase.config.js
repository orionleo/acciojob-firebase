// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqAFTyjCEU6fBp1cOSXor85yMjkA_3ya8",
  authDomain: "acciojob-6af77.firebaseapp.com",
  projectId: "acciojob-6af77",
  storageBucket: "acciojob-6af77.appspot.com",
  messagingSenderId: "304829180286",
  appId: "1:304829180286:web:b4b1fc2d329b809154eb2f",
  measurementId: "G-8CLRJ1TLLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
