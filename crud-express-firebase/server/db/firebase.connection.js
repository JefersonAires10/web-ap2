// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM34W8qQUs-RxDdcLOt962tWezv_gl4Og",
  authDomain: "crud-web-1092c.firebaseapp.com",
  projectId: "crud-web-1092c",
  storageBucket: "crud-web-1092c.appspot.com",
  messagingSenderId: "712565880652",
  appId: "1:712565880652:web:22c6aeadb392e1ac2681e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get firestore service
const db = getFirestore(app)

export default db