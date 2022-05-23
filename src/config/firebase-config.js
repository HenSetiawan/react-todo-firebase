import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJsop6qKCYbas3QovfNs5PD5Wa9k6S3QQ",
  authDomain: "react-todo-bb2a2.firebaseapp.com",
  projectId: "react-todo-bb2a2",
  storageBucket: "react-todo-bb2a2.appspot.com",
  messagingSenderId: "63055398984",
  appId: "1:63055398984:web:18636ae234a0c96b92307d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);