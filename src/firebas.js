// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFAkLZYDDgJX1EpT_KnG8bIWBU3IY7RpA",
  authDomain: "pbpi-ddbf8.firebaseapp.com",
  projectId: "pbpi-ddbf8",
  storageBucket: "pbpi-ddbf8.appspot.com",
  messagingSenderId: "355418128277",
  appId: "1:355418128277:web:f3e0f81a7561728e96409c",
};

// Initialize Firebase
const auth = initializeApp(firebaseConfig);
const app = getAuth(auth);
export default app;
