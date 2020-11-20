import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyD-NSNO6i1Y5O9U1kL1cwG8RNNNQLX_WVQ",
    authDomain: "facebook-messenger-clone-d41d9.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-d41d9.firebaseio.com",
    projectId: "facebook-messenger-clone-d41d9",
    storageBucket: "facebook-messenger-clone-d41d9.appspot.com",
    messagingSenderId: "584241181935",
    appId: "1:584241181935:web:7cd84478c6b44f457d171a",
    measurementId: "G-275X24CRJF"

});

const db = firebaseApp.firestore();

export default db;