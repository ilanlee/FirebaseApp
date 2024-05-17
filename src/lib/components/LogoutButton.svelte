<script>
    import { signOut } from "$lib/firebase.js";
  
    async function handleLogout() {
      try {
        await signOut();
      } catch (error) {
        alert(error.message);
      }
    }
  </script>
  
  <button on:click={handleLogout}>Logout</button>