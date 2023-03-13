import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf09l0uh3i5DbqBs-kUXQjBY1ZBUosubM",
  authDomain: "portfolio-b4e8d.firebaseapp.com",
  projectId: "portfolio-b4e8d",
  storageBucket: "portfolio-b4e8d.appspot.com",
  messagingSenderId: "774717264954",
  appId: "1:774717264954:web:61670e85c9cb047f1b1103",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
