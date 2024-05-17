<script>
    import { signOut } from "@firebase/auth";
  
    async function handleLogout() {
      try {
        await signOut();
      } catch (error) {
        alert(error.message);
      }
    }
  </script>
  
  <button on:click={handleLogout}>Logout</button>