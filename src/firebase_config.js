import { initializeApp } from "firebase/app";
// import firebase from "firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCS7q2t8WqsikaVww1loqZyssMEcFRDblc",
  authDomain: "todoapp-1d2da.firebaseapp.com",
  projectId: "todoapp-1d2da",
  storageBucket: "todoapp-1d2da.appspot.com",
  messagingSenderId: "73645276860",
  appId: "1:73645276860:web:01089a3ac029cab2571ab9",
};
// const app=initializeApp(firebaseConfig);
// const d =db.firestore(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

//// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

// const settings = {timestampsInSnapshots: true};

// const config = {
//     apiKey: "AIzaSyCS7q2t8WqsikaVww1loqZyssMEcFRDblc",
//     authDomain: "todoapp-1d2da.firebaseapp.com",
//     projectId: "todoapp-1d2da",
//     storageBucket: "todoapp-1d2da.appspot.com",
//     messagingSenderId: "73645276860",
//     appId: "1:73645276860:web:01089a3ac029cab2571ab9"
// };
// firebase.initializeApp(config);

// firebase.firestore().settings(settings);

// export default firebase;
