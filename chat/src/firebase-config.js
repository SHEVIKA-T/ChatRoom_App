// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBzzvpZWP7nKsM50MQciSbVtFs8YY363Y",
  authDomain: "chatapp-36c6f.firebaseapp.com",
  projectId: "chatapp-36c6f",
  storageBucket: "chatapp-36c6f.appspot.com",
  messagingSenderId: "977800959332",
  appId: "1:977800959332:web:5e6025370b5a056ff55671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export  const db=getFirestore(app);