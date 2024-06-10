<script>
  import Dexie from 'dexie'; // Import Dexie
  import { db } from '$lib/db.js'; // Assuming your db.js file sets up Dexie
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { auth } from '$lib/firebase.js';
  import { user } from '$lib/stores/userStore.js';

  let loggedInUser = null;
  let isEditing = false;

  let userEmail;
  let userId;
  let displayName;
  let photoURL; 

  // Create a listener variable
  const unsubscribe = user.subscribe((firebaseUser) => {
    if (firebaseUser) {
      userEmail = firebaseUser.email;
      userId = firebaseUser.uid;
      displayName = firebaseUser.displayName;
      photoURL = firebaseUser.photoURL;
    } else {
      userEmail = 'Not Logged In';
      userId = '';
      displayName = '';
      photoURL = '';
    }
  });

  onMount(async () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        loggedInUser = user;
        isEditing = true;
      } else {
        loggedInUser = null;
        isEditing = false;
      }
    });

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Update the user data in Dexie
      const id = await db.currUser.update(loggedInUser.uid, { 
        displayName: displayName,
        photoURL: photoURL 
      });
      alert('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Failed to update user data. Please try again.');
    }
  };
</script>

{#if isEditing}
  <form on:submit={handleSubmit}>
    <h2>--Update Profile--</h2>
    <p class="font-semibold">uid: {userId}</p>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder={loggedInUser.email} disabled />
    </div>
    <div>
      <label for="displayName">Display Name:</label>
      <input type="text" id="displayName" bind:value={displayName} /> 
    </div>
    <div>
      <label for="photoURL">Photo URL:</label>
      <input type="text" id="photoURL" bind:value={photoURL} />
    </div>
    <button type="submit">Save Changes</button>
  </form>
{/if}