import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWFd5HpT9rntHSPOk9a7-meW5QshqpKVU",
    authDomain: "nic-delivery.firebaseapp.com",
    projectId: "nic-delivery",
    storageBucket: "nic-delivery.appspot.com",
    messagingSenderId: "936817032978",
    appId: "1:936817032978:web:40dcdcfdac4cc8e3f47dcb"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt:'Select a Account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;