// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6SJYj-uLAL_kW8YeRZMczuuJY5OfaXs4",
  authDomain: "verduras-31975.firebaseapp.com",
  projectId: "verduras-31975",
  storageBucket: "verduras-31975.appspot.com",
  messagingSenderId: "1087366645809",
  appId: "1:1087366645809:web:d4a5def6a3b07bb21ced10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);