// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnH-tefBTCG7bvcrFaoxpKMr30uA1hhcU",
  authDomain: "balloon-shop-al.firebaseapp.com",
  projectId: "balloon-shop-al",
  storageBucket: "balloon-shop-al.appspot.com",
  messagingSenderId: "699608128979",
  appId: "1:699608128979:web:40ee03c0ed14b993cf6326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )