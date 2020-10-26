import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQbR4aX8bErhC2-Le14MfR7L9rEq1Rswo",
    authDomain: "keep-notes-f3306.firebaseapp.com",
    databaseURL: "https://keep-notes-f3306.firebaseio.com",
    projectId: "keep-notes-f3306",
    storageBucket: "keep-notes-f3306.appspot.com",
    messagingSenderId: "472231002742",
    appId: "1:472231002742:web:073f119935ab7166c05557"
})

const db = firebaseApp.firestore();

export {db};