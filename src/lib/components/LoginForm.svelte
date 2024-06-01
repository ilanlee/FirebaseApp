<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from '$lib/firebase.js';
  import { goto } from '$app/navigation';

  //flowbite
  import { Label, Input } from 'flowbite-svelte';
  import { EnvelopeSolid, LockSolid } from 'flowbite-svelte-icons';

  export let email;
  export let password;
  let error = '';


  async function handleSubmit() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Successful login, redirect to /Home
      goto('/Home'); 
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