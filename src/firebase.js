import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDvigurQJHlGFoOsjIGgjNEia-pZufuR84',
    authDomain: 'twitter-clone-2b320.firebaseapp.com',
    projectId: 'twitter-clone-2b320',
    storageBucket: 'twitter-clone-2b320.appspot.com',
    messagingSenderId: '868696154114',
    appId: '1:868696154114:web:b2af69a7cf1af65ec7c71b',
    measurementId: 'G-YTC9TSGHS0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
