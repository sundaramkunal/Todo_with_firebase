import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAAjDCbOR6dijuFnsW_Yg-vppMcn5cK0HU",
    authDomain: "todoapp-4d202.firebaseapp.com",
    projectId: "todoapp-4d202",
    storageBucket: "todoapp-4d202.appspot.com",
    messagingSenderId: "1012944705625",
    appId: "1:1012944705625:web:f99c025bc7528d6ca87948"
};
firebase.intializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;


//// Initialize Firebase
// const app = initializeApp(firebaseConfig);