<script>
    import { signInWithEmailAndPassword } from "$lib/firebase.js";
  
    let email = "";
    let password = "";
  
    async function handleLogin() {
      try {
        await signInWithEmailAndPassword(email, password);
        email = "";
        password = "";
      } catch (error) {
        alert(error.message);
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleLogin}>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={email} required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} required />
    </div>
    <button type="submit">Login</button>
  </form>