import { browser } from "$app/environment";
import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_MEASUREMENTID,

};

// Initialize Firebase only if no app exists
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  console.log("Firebase app initialized:", app); 
} else {
  app = getApps()[0]; // Get the existing app
  console.log("Firebase app already initialized:", app);
}

if (browser) {
  getAnalytics(app);
}
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);