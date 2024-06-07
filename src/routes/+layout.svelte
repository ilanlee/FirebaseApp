<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import { db } from '$lib/db.js'; // Import the database

// Check if IndexedDB is already open
const isIndexedDBOpen = () => {
    try {
      // Attempt to access a property of the database instance
      // If this throws an error, the database is not open
      db.version;
      return true;
    } catch (err) {
      return false;
    }
  };

  // Initialize IndexedDB if not already open
  if (!isIndexedDBOpen()) {
    db.open().then(() => {
      console.log('IndexedDB opened successfully!');
    }).catch(err => {
      console.error('Error opening IndexedDB:', err);
      console.log('IndexedDB encountered and error:', err);
    });
  } else {
    console.log('IndexedDB is already running!');
  }

</script>

<Header/>
<slot />