// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdEieP7z6aX4LjwlzLxYfQJu5qh8faqkE",
  authDomain: "marketplace-26c62.firebaseapp.com",
  projectId: "marketplace-26c62",
  storageBucket: "marketplace-26c62.appspot.com",
  messagingSenderId: "224110799462",
  appId: "1:224110799462:web:312fb9cb4c42e365e81ba7",
  measurementId: "G-N07P1B0926"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
