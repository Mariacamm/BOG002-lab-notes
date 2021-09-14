import firebase from "firebase/app";
// eslint-disable-next-line 
import { auth } from "./FirebaseConfig";

export const registerUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    let errorMessage = error.message;
    console.log(errorMessage);
  });
}

export const loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    let errorMessage = error.message;
    console.log(errorMessage);
  });
}

