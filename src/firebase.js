import firebase from "firebase";


  var firebaseConfig = {
    apiKey: "AIzaSyDckQYDPPKQbjnT9WEymVZab9uLPRIKu-g",
    authDomain: "stopsmoking-567c6.firebaseapp.com",
    projectId: "stopsmoking-567c6",
    storageBucket: "stopsmoking-567c6.appspot.com",
    messagingSenderId: "939963038018",
    appId: "1:939963038018:web:2e8177266de2a4e69bf0db",
    measurementId: "G-P12SCN1N2P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// const fire = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

// configure the google signIn
const GoogleSignIn = new firebase.auth.GoogleAuthProvider();

export {  db, auth, GoogleSignIn };