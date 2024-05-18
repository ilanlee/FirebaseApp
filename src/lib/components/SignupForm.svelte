<script>
  import { auth, db } from '$lib/firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { setDoc, doc } from 'firebase/firestore';

  let email = "";
  let password = "";
  let confirmPassword = "";

  async function handleSignup() {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        UID: user.uid,
        firstName: "",
        lastName: "",
        signUpDate: new Date(),
      });

      email = "";
      password = "";
      confirmPassword = "";
    } catch (error) {
      alert(error.message);
    }
  }
</script>

<form on:submit|preventDefault={handleSignup}>
  <div>
    <label for="signup-email">Email:</label>
    <input type="email" id="signup-email" bind:value={email} required autocomplete="username"/>
  </div>
  <div>
    <label for="signup-password">Password:</label>
    <input type="password" id="signup-password" bind:value={password} required autocomplete="current-password"/>
  </div>
  <div>
    <label for="confirm-password">Confirm Password:</label>
    <input type="password" id="confirm-password" bind:value={confirmPassword} required />
  </div>
  <button type="submit" class="italic">Signup</button>
</form>