// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAmDUVMJ-FFT7Yvm7bFfjAg392c7hL3d8",
  authDomain: "shoppingapp-e17ad.firebaseapp.com",
  projectId: "shoppingapp-e17ad",
  storageBucket: "shoppingapp-e17ad.appspot.com",
  messagingSenderId: "1041252892138",
  appId: "1:1041252892138:web:88127fcd04627ca35b8693"
  }

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
