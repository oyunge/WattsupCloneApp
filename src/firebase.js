import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';   //for cloud firestore

const firebaseConfig = {
    apiKey: "AIzaSyBgU4RCAaVn1UnQGfMAOhTUyS3TE_-gavQ",
    authDomain: "wattsupclone-f9552.firebaseapp.com",
    projectId: "wattsupclone-f9552",
    storageBucket: "wattsupclone-f9552.appspot.com",
    messagingSenderId: "540604883859",
    appId: "1:540604883859:web:d340945207248e14993e66"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  export const auth = firebase.auth()
  export const provider = new firebase.auth.GoogleAuthProvider();

  export default db