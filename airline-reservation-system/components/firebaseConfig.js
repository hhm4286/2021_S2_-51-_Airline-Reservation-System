import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase is already initialised
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); // Initialise Firebase with firebaseConfig
}

// Firebase functions to export
const db = firebase.firestore();
const auth = firebase.auth();

export {
  db,
  auth
}
export default firebase;