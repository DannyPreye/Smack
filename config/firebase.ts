// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "smark-18dc5.appspot.com",
  messagingSenderId: "199817344621",
  appId: process.env.NEXT_APP_FIREBASE_APP_ID,
  measurementId: "G-GVMRWY209K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
