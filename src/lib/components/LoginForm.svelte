<script>
  import { createEventDispatcher } from 'svelte'; // Import createEventDispatcher
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  export let email;
  export let password;

  let error = '';


  async function handleSubmit() {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the desired page after successful login   
    } catch (err) {
      error = err.message;
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="login-email" bind:value={email} required autocomplete="username"/>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="login-password" bind:value={password} required autocomplete="current-password"/>
  </div>
  <button type="submit" class="italic">Login</button>

  {#if error}
    <p class="error">{error}</p>
  {/if}
</form>