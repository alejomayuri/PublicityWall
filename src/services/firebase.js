import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCK-SYqc2T77R6L625uPkUO2HZ_mURiqpk",
    authDomain: "publicity-wall.firebaseapp.com",
    projectId: "publicity-wall",
    storageBucket: "publicity-wall.appspot.com",
    messagingSenderId: "946029420518",
    appId: "1:946029420518:web:2e506a344f8cda67898027",
    measurementId: "G-NDZG6JQL46"
});

export const auth = firebase.auth();

export function getFirestore() {
    return firebase.firestore(app)
}

export function getStorage(){
    return firebase.storage(app)
}

export const analytics = getAnalytics(app);

export default app;
