// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBumesPAw1bGARkvaELizTPc2QHQ-sD4Q0",
  authDomain: "brandquest-14.firebaseapp.com",
  projectId: "brandquest-14",
  storageBucket: "brandquest-14.appspot.com",
  messagingSenderId: "903606256675",
  appId: "1:903606256675:web:ed4962eac8c33d1c2c5d96"               
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);         
const auth = getAuth(app)
export default auth;                