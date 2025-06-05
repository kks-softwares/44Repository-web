// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase/app'
// import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeQUf_HrAgWDQfQycw95SmDlrV7gBFj_g",
  authDomain: "resources-89138.firebaseapp.com",
  projectId: "resources-89138",
  storageBucket: "resources-89138.appspot.com",
  messagingSenderId: "613576054120",
  appId: "1:613576054120:web:e942a664b613c9c382f2dd",
  measurementId: "G-L4P4V8KQRL"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;