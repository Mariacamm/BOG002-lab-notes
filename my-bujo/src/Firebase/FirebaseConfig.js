import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD9GjuTvrq8JBzuMGJ0IHZomsdRwKDUyTo",
    authDomain: "mybujo-51994.firebaseapp.com",
    projectId: "mybujo-51994",
    storageBucket: "mybujo-51994.appspot.com",
    messagingSenderId: "218839955546",
    appId: "1:218839955546:web:4ffe1f4f8db80ac9718063"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore();

