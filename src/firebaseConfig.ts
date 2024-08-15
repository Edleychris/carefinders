// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    //   apiKey: "YOUR_API_KEY",
    //   authDomain: "YOUR_AUTH_DOMAIN",
    //   projectId: "YOUR_PROJECT_ID",
    //   storageBucket: "YOUR_STORAGE_BUCKET",
    //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    //   appId: "YOUR_APP_ID",
    apiKey: "AIzaSyA0UbZaI7w58xrCYi5bPOXg3v-TpVwjkhY",
    authDomain: "carefinder-a732a.firebaseapp.com",
    projectId: "carefinder-a732a",
    storageBucket: "carefinder-a732a.appspot.com",
    messagingSenderId: "72910782765",
    appId: "1:72910782765:web:6d8d9a761c4d7a3b0093a4",
    measurementId: "G-3BRB7PEZXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
// Initialize Firebase
// const analytics = getAnalytics(app);