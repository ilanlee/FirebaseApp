<script>
  import Logo from "./Logo.svelte";
  import { auth } from "$lib/firebase.js";
  import { signOut } from "firebase/auth"; 

  async function logOut() {
    try {
        await signOut(auth);
            window.location.href = '/';
            console.log('User signed out!'); 
        } catch (error) {
            console.error("Error signing out:", error);
    }
  }
</script>

<header class="sticky bg-slate-50 top-0 left-0 flex items-center justify-between">
    <Logo/>
    <div class="flex gap-5 items-center">
        <button on:click={logOut} variant="ghost" class="button">Sign out</button>
    </div>
</header>