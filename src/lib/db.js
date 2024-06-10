import Dexie from 'dexie';

export const db = new Dexie('myAppDatabase');
db.version(1).stores({
  currUser: 'uid, email, displayName, photoURL' // Primary key and indexed props
});

/*
let db; // Initialize db as undefined

// Check if the code is running in the browser
if (typeof window !== 'undefined') {
  db = new Dexie('myAppDatabase');
  db.version(1).stores({
    currUser: 'uid, email, displayName, photoURL'
  });

  // Use await to wait for the database to open
  try {
    await db.open();
    console.log('IndexedDB opened successfully');
  } catch (error) {
    console.error('Error opening IndexedDB:', error);
  }
}

console.log('IndexedDB:', db);
export { db };*/