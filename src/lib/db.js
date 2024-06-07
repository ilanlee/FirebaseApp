import Dexie from 'dexie';

// Function to check if IndexedDB is already open
const isIndexedDBOpen = () => {
  try {
    // Attempt to access a property of a Dexie instance
    // If this throws an error, the database is not open
    new Dexie('yourDatabaseName').version; 
    return true;
  } catch (err) {
    return false;
  }
};

// Define your IndexedDB database schema
let db; 

// Initialize the database if not already open
if (!isIndexedDBOpen()) {
  db = new Dexie('yourDatabaseName'); // Replace 'yourDatabaseName' with a suitable name
  db.version(1).stores({
    users: '++id, email, uid' // Define your user table
  });

  // Open the database connection
  db.open().then(() => {
    console.log('IndexedDB opened successfully!');
  }).catch(err => {
    console.error('Error opening IndexedDB:', err);
  });
} else {
  console.log('IndexedDB is already running!');
}

// Export the database instance
export { db };