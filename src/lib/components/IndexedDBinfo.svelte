<script>
    import { db } from '$lib/db.js';
    import { onMount } from 'svelte';
    import { auth } from '$lib/firebase.js'; // Assuming you have a firebase.js file with auth setup
    import { user } from '$lib/stores/userStore.js'
  
    let userData = {};
  
    onMount(async () => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            userData = await db.currUser.get(user.uid);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }
      });
  
      // Cleanup the listener when the component is unmounted
      return () => unsubscribe();
    });
  </script>
  
  <h2>Your IndexedDB Profile</h2>
  
  {#if Object.keys(userData).length > 0}
    <p><strong>Email:</strong> {userData.email}</p>
    <p><strong>Display Name:</strong> {userData.displayName}</p>
    <p><strong>Photo URL:</strong> {userData.photoURL}</p>
  {:else}
    <p>No data found in IndexedDB.</p>
  {/if}
  