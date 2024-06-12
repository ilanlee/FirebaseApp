import { writable } from "svelte/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "$lib/firebase.js";
import { db } from '$lib/db.js'; // Import the database

export const user = writable(null); 

onAuthStateChanged(auth, (firebaseUser) => {
  user.set(firebaseUser);

  if (firebaseUser) {
    console.log('User is signed in to the store:', firebaseUser);
    // Store user data in IndexedDB (using uid as the key)
    db.currUser.put({
      uid: firebaseUser.uid,
      token: firebaseUser.accessToken,
      email: firebaseUser.email
    }, firebaseUser.uid) // Specify uid as the key
      .then(() => {
        console.log('User data saved to IndexedDB:', db);
      })
      .catch(err => {
        console.error('Error saving user data to IndexedDB:', err);
      });
  } else {
    console.log('User is signed out of the store.');
  }
});