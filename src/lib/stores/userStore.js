import { writable } from "svelte/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "$lib/firebase.js";

export const user = writable(null);

onAuthStateChanged(auth, (firebaseUser) => { // Rename to firebaseUser for clarity
  user.set(firebaseUser);  // Update the Svelte store
  console.log("AuthStateChange. user:", user);
});