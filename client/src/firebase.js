// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-c50ac.firebaseapp.com",
  projectId: "blog-app-c50ac",
  storageBucket: "blog-app-c50ac.appspot.com",
  messagingSenderId: "142750304535",
  appId: "1:142750304535:web:f91a6cf369570796468f52",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
