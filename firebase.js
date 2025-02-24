// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBULeUdhaSmh4_uGH5EYXHSJW0szvAMg_o",
  authDomain: "streamsphere-f9197.firebaseapp.com",
  projectId: "streamsphere-f9197",
  storageBucket: "streamsphere-f9197.firebasestorage.app",
  messagingSenderId: "239280131986",
  appId: "1:239280131986:web:ea9ec3f44ee5405bdc3b4b",
  measurementId: "G-6PQ9SW51F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);