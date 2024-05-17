import { writable } from "svelte/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "$lib/firebase.js";

export const user = writable(null);

// Check if running in the browser
if (typeof window !== 'undefined') {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      user.set(user);
    }
  });
}