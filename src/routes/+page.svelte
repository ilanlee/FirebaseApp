<script>
  import LoginForm from "$lib/components/LoginForm.svelte";
  import SignupForm from "$lib/components/SignupForm.svelte";
  import LogoutButton from "$lib/components/LogoutButton.svelte";
  import { user } from "$lib/firebase.js";
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