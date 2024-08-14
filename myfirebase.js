// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzeG147eOiGWyXeZ7fE7-5bMCfa61rey4",
  authDomain: "inventory-management-d2d25.firebaseapp.com",
  projectId: "inventory-management-d2d25",
  storageBucket: "inventory-management-d2d25.appspot.com",
  messagingSenderId: "860151636767",
  appId: "1:860151636767:web:7f43cb058a7b36b453062a",
  measurementId: "G-54SJRX9JLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}