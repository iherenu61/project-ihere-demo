import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDMepG1g4dvDLpHp8ZlIeOUA2f-E7eyiMI",
    authDomain: "ihere-fd762.firebaseapp.com",
    projectId: "ihere-fd762",
    storageBucket: "ihere-fd762.appspot.com",
    messagingSenderId: "576234806534",
    appId: "1:576234806534:web:442debe49554206ccb1287",
    measurementId: "G-E2Q37YCVDQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebaseApp;