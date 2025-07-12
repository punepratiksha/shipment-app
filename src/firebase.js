// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Important
import { getFirestore } from "firebase/firestore"; // Optional: if you use Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCz-I3yEYjlaT0xbZD8-bXsO8QgepeqbIY",
  authDomain: "shipment-delivery-app-ba067.firebaseapp.com",
  projectId: "shipment-delivery-app-ba067",
  storageBucket: "shipment-delivery-app-ba067.appspot.com",
  messagingSenderId: "724909122205",
  appId: "1:724909122205:web:8c575bcc5b3ffd1c8f2a74",
  measurementId: "G-56KYMK1JDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export auth and db to use in other files
export { auth, db };
