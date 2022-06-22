import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import firebase from "firebase";
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDXxBGCDYbvtmoLSpl6qatkL19x990qH5s",
    authDomain: "onlineshoppingapp-1c0b1.firebaseapp.com",
    projectId: "onlineshoppingapp-1c0b1",
    storageBucket: "onlineshoppingapp-1c0b1.appspot.com",
    messagingSenderId: "301053064567",
    appId: "1:301053064567:web:51b0df16eb708abfa09d72",
    measurementId: "G-D42PXCL3HH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };