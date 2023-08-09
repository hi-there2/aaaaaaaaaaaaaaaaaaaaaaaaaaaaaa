import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyArWSPRXBRpID8n6_ZfcmsT3c-114BM9pE",
    authDomain: "abcdefthijklmnopqrstuvwx-dce8c.firebaseapp.com",
    projectId: "abcdefthijklmnopqrstuvwx-dce8c",
    storageBucket: "abcdefthijklmnopqrstuvwx-dce8c.appspot.com",
    messagingSenderId: "68696515949",
    appId: "1:68696515949:web:e07726e6a977071745e664"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
