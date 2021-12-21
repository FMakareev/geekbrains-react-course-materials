import firebase from "firebase";

const firebaseConfig = {
    apiKey: 'AIzaSyDUnPy61qVvEr9kzC8gQLHbSfuWSnVY5X4',
    authDomain: 'geekbrains-lesson-9.firebaseapp.com',
    databaseURL: 'https://geekbrains-lesson-9-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'geekbrains-lesson-9',
    storageBucket: 'geekbrains-lesson-9.appspot.com',
    messagingSenderId: '545293650430',
    appId: '1:545293650430:web:37e402fbfad8b8459d58af'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref("root");
export const todosRef = db.ref("todos");
