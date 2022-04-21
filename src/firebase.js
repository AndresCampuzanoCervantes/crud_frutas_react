
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig  = {
  apiKey: "AIzaSyAL34wzt2yzxRIfQT3NCLAA7GzrF6ubqlE",
  authDomain: "crub-basico-react.firebaseapp.com",
  projectId: "crub-basico-react",
  storageBucket: "crub-basico-react.appspot.com",
  messagingSenderId: "1033692304465",
  appId: "1:1033692304465:web:95c5096563f663420a9470"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}