
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBnH-tefBTCG7bvcrFaoxpKMr30uA1hhcU",
  authDomain: "balloon-shop-al.firebaseapp.com",
  projectId: "balloon-shop-al",
  storageBucket: "balloon-shop-al.appspot.com",
  messagingSenderId: "699608128979",
  appId: "1:699608128979:web:40ee03c0ed14b993cf6326"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )