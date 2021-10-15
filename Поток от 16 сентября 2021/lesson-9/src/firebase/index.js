import firebase from "firebase";

const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref("teacher");
console.log(rootRef.toString());

export const chatsRef = rootRef.child("chats");
console.log(chatsRef.toString());
