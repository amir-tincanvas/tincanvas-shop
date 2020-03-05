import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJbdO7wggbpZMQJZB3-_3gnwHLeXjDX2A",
    authDomain: "tincanvas-shop-db.firebaseapp.com",
    databaseURL: "https://tincanvas-shop-db.firebaseio.com",
    projectId: "tincanvas-shop-db",
    storageBucket: "tincanvas-shop-db.appspot.com",
    messagingSenderId: "655303615773",
    appId: "1:655303615773:web:e428f61269b357b287adf4",
    measurementId: "G-154BL6EGCD"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;