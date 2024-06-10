<script>
  import { signOut } from "@firebase/auth";
  import { auth } from '$lib/firebase.js';
  import { db } from '$lib/db.js';
  import { user } from '$lib/stores/userStore.js'; // Assuming you have a user store

  async function handleLogout() {
    try {
      await signOut(auth);
      console.log("User signed out");
      await db.currUser.clear();
      console.log("User data cleared from IndexedDB");

      // Update the user store
      user.set(null);
    } catch (error) {
      console.error("Error during sign out:", error);
      alert(error.message);
    }
  }
</script>

<button on:click={handleLogout}>Logout</button>