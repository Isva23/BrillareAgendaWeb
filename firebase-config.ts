// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbFpzw9h4jpbyx5X68oxjasVn5ypKeLZc",
  authDomain: "lubeautydb.firebaseapp.com",
  projectId: "lubeautydb",
  storageBucket: "lubeautydb.firebasestorage.app",
  messagingSenderId: "1029094337126",
  appId: "1:1029094337126:web:495a75a7918be057de1ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y Storage
const db = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);

export  { db, storage, collection, addDoc, ref, uploadBytesResumable, getDownloadURL };

