// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF2TkK4gDrWIPIQAPzQ20H0AKlhxMLz8w",
  authDomain: "authornek-6bf3b.firebaseapp.com",
  projectId: "authornek-6bf3b",
  storageBucket: "authornek-6bf3b.appspot.com",
  messagingSenderId: "237239002274",
  appId: "1:237239002274:web:dabb5a9ce07d27b14223fb"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}


const auth = firebase.auth();
const fireStore = firebase.firestore();
export { auth, fireStore };
