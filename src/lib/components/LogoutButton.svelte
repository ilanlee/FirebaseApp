<script>
    import { signOut } from "@firebase/auth";
    import { auth } from '$lib/firebase.js'
  
    async function handleLogout() {
      try {
        await signOut(auth);
        console.log("User signed out");
      } catch (error) {
        console.error("Error during sign out:", error);
        alert(error.message);
      }
    }
  </script>
  
  <button on:click={handleLogout}>Logout</button>