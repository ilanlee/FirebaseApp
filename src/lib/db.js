import Dexie from 'dexie';

// Define your IndexedDB database schema
const db = new Dexie('yourDatabaseName'); // Replace 'yourDatabaseName' with a suitable name
db.version(1).stores({
  users: '++id, email, uid' // Define your user table
});

// Export the database instance
export { db };