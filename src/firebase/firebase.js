// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
// signInWithEmailAndPassword funksiyasini import qildik
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Firebase sozlamalaringizni bu yerga joylashtiring
const firebaseConfig = {
  apiKey: "AIzaSyAztEHddpYMU9pthv58fSqf5jUJSaHSnxg",
  authDomain: "turontec.firebaseapp.com",
  projectId: "turontec",
  storageBucket: "turontec.firebasestorage.app",
  messagingSenderId: "985857856238",
  appId: "1:985857856238:web:fd799b486572d3251d99ff",
  databaseURL: "https://turontec-default-rtdb.firebaseio.com/"
};

// Firebase'ni ishga tushirish
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Logout funksiyasi
const logOut = async () => {
    try {
        await signOut(auth);
        console.log("User signed out successfully.");
    } catch (error) {
        console.error("Error signing out: ", error);
    }
};

// Yangi funksiyani eksport qilish
export { app, auth, db, createUserWithEmailAndPassword, doc, setDoc, logOut, getDoc, signInWithEmailAndPassword };