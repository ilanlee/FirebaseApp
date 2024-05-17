<script>
  import { createEventDispatcher } from 'svelte'; // Import createEventDispatcher

  export let email;
  export let password;

  let error = '';

  const dispatch = createEventDispatcher();

  async function handleSubmit() {
    dispatch('login'); 
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required autocomplete="username"/>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required autocomplete="current-password"/>
  </div>
  <button type="submit">Login</button>

  {#if error}
    <p class="error">{error}</p>
  {/if}
</form>