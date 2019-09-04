import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFmX9pWAhQBHpnb-wQzLwEc3xBGEvG1G8",
    authDomain: "shop-db-acb85.firebaseapp.com",
    databaseURL: "https://shop-db-acb85.firebaseio.com",
    projectId: "shop-db-acb85",
    storageBucket: "",
    messagingSenderId: "980158497475",
    appId: "1:980158497475:web:3f09e3bddc6291af3e1876"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;