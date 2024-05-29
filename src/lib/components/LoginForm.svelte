<script>
  import { createEventDispatcher } from 'svelte'; // Import createEventDispatcher
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  //flowbite
  import { Label, Input } from 'flowbite-svelte';
  import { EnvelopeSolid, LockSolid } from 'flowbite-svelte-icons';

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
    <Label for="email">Email:</Label>
    <Input type="email" id="login-email" bind:value={email} required autocomplete="username">
      <EnvelopeSolid slot="left" class="w-4 h-4" />
    </Input>
  </div>
  <div>
    <Label for="password">Password:</Label>
    <Input type="password" id="login-password" bind:value={password} required autocomplete="current-password">
      <LockSolid slot="left" class="w-4 h-4" />
    </Input>
  </div>
  <button type="submit" class="italic">Login</button>

  {#if error}
    <p class="error">{error}</p>
  {/if}
</form>