import { writable } from "svelte/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "$lib/firebase.js";
import { loadUserFromLocalStorage, saveUserToLocalStorage, removeUserFromLocalStorage } from "$lib/stores/localStorage.js";

export const user = writable(null);

// Load user data from local storage on app startup
const initialUser = loadUserFromLocalStorage();
if (initialUser) {
  user.set(initialUser); 
  console.log("User loaded from local storage:", initialUser);
  //redirect to /Home
}

onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    user.set(firebaseUser); 
    saveUserToLocalStorage(firebaseUser); 
    console.log("User signed in:", firebaseUser);
  } else {
    user.set(null); 
    removeUserFromLocalStorage(); 
    console.log("User signed out.");
  }
});