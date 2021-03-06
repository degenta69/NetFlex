// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSVsxGCdX05UuwFBfAkvCD_Z8Ln3FDdOk",
    authDomain: "netflex-b7b1c.firebaseapp.com",
    projectId: "netflex-b7b1c",
    storageBucket: "netflex-b7b1c.appspot.com",
    messagingSenderId: "887801762070",
    appId: "1:887801762070:web:db7b9b09190e119ddfc037",
    measurementId: "G-2PWNXN830F"
  };

const firebaseApp = firebase.initializeApp({...firebaseConfig})
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { auth } ;
export default db;