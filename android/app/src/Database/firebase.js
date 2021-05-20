import * as firebase from 'firebase'
import firestore from 'firebase/firestore'


const firebaseConfig = {
    
    apiKey: "AIzaSyAz-cMx4HmLHr4saocK71Q-AQ1FRA2wEUM",
    authDomain: "demoapp-5912b.firebaseapp.com",
    projectId: "demoapp-5912b",
    storageBucket: "demoapp-5912b.appspot.com",
    messagingSenderId: "449641591418",
    appId: "1:449641591418:web:f97173eb6c1d6f2c8c41c3"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });
firebase.firestore();


export default firebase;

