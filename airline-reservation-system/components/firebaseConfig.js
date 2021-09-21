import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey:  "AIzaSyBpcAPk6e3JqXN7dxZV40pWJsZVR504FMM",
    authDomain: "skyhub-8c268.firebaseapp.com",
    projectId: "skyhub-8c268",
    storageBucket: "skyhub-8c268.appspot.com",
    messagingSenderId: "239635786799",
    appId: "1:239635786799:web:33f3cc47112a2ffe8feada",
    measurementId: "G-0RBYTCJNXX",
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