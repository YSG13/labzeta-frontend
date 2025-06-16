// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM1SiDAY9QvYziBSMfDX3k7qPGNVL4TVU",
  authDomain: "labzeta-52492.firebaseapp.com",
  projectId: "labzeta-52492",
  storageBucket: "labzeta-52492.firebasestorage.app",
  messagingSenderId: "673765432859",
  appId: "1:673765432859:web:3d34a4817e5b753bcfa2be"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
