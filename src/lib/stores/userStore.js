import { writable } from "svelte/store";
import { onAuthStateChanged } from "@firebase/auth";

export const user = writable(null);

onAuthStateChanged(user => {
  user.set(user);
});