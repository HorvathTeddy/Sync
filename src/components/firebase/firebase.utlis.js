import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDH25OUm9TrBBgfpi7IWYWiyKTTlAiKyy0",
  authDomain: "sync-30506.firebaseapp.com",
  projectId: "sync-30506",
  storageBucket: "sync-30506.appspot.com",
  messagingSenderId: "449536941548",
  appId: "1:449536941548:web:3aeb172e6decd8f1f134c9",
  measurementId: "G-DLS65DRB8H"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt:'Select a Account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;