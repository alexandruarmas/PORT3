import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs, deleteDoc } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpMULa1cRhstwfeJRg8MVJAWr0uzeOBdA",
  authDomain: "portofoliu-b2ce8.firebaseapp.com",
  projectId: "portofoliu-b2ce8",
  storageBucket: "portofoliu-b2ce8.firebasestorage.app",
  messagingSenderId: "290214818196",
  appId: "1:290214818196:web:99bce1478553a3b1bf9f81",
  measurementId: "G-LYLS18JGRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc };