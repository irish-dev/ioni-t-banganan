// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA28MvwecK6bcDqpdtjYVgzfQciPwAmrQM",
  authDomain: "it35-banganan-a2cd9.firebaseapp.com",
  projectId: "it35-banganan-a2cd9",
  storageBucket: "it35-banganan-a2cd9.appspot.com",
  messagingSenderId: "191073036130",
  appId: "1:191073036130:web:928b810b9d433db7bd6e3b",
  measurementId: "G-2RD6KJ2HNN"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export{db}

