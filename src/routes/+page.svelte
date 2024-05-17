<script>
  import { user } from "$lib/stores/userStore.js";
  import LoginForm from "$lib/components/LoginForm.svelte";
  import SignupForm from "$lib/components/SignupForm.svelte";
  import LogoutButton from "$lib/components/LogoutButton.svelte"; 
</script>

{#if $user}
  <p>Welcome, {$user.email}!</p>
  <LogoutButton />
{:else}
  <h2>Login</h2>
  <LoginForm />

  <h2>Signup</h2>
  <SignupForm />
{/if}