import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB5AGiSVEkocQcREJw0xBZ4dQOT96BEN1E",
  authDomain: "discord-59ab2.firebaseapp.com",
  databaseURL: "https://discord-59ab2.firebaseio.com",
  projectId: "discord-59ab2",
  storageBucket: "discord-59ab2.appspot.com",
  messagingSenderId: "887471416799",
  appId: "1:887471416799:web:aa3bef22db788f62c8d06a",
  measurementId: "G-149W02JKNP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
