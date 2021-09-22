import { firebase } from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcUx21XbkaUACcY8K1jDHwFNKskqsk4D0",
  authDomain: "airline-reservation-syst-ab05b.firebaseapp.com",
  databaseURL: "https://airline-reservation-syst-ab05b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "airline-reservation-syst-ab05b",
  storageBucket: "airline-reservation-syst-ab05b.appspot.com",
  messagingSenderId: "979963414651",
  appId: "1:979963414651:web:5ad7b97118f5cb97657ade",
  measurementId: "G-SGTJ2Q1571"
};
firebase.initalizeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();
  export default database;