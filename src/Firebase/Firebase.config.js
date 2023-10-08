// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCdNfHw4yiomZlKkxddCYlq7IS-fUzGGiQ",
  authDomain: "wedxpertes.firebaseapp.com",
  projectId: "wedxpertes",
  storageBucket: "wedxpertes.appspot.com",
  messagingSenderId: "576716106366",
  appId: "1:576716106366:web:28c73aa264c8b80dc5c62f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;