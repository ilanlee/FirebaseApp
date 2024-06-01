import { writable } from "svelte/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "$lib/firebase.js";

export const user = writable(null); 

onAuthStateChanged(auth, (firebaseUser) => {
  user.set(firebaseUser);
  if (firebaseUser) {
    console.log('User is signed in to the store:', firebaseUser);
  } else {
    console.log('User is signed out of the store.');
  }
});