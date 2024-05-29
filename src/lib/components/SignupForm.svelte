<script>
  import { auth, db } from '$lib/firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { setDoc, doc } from 'firebase/firestore';

  //flowbite
  import { Label, Input } from 'flowbite-svelte';
  import { EnvelopeSolid, LockSolid } from 'flowbite-svelte-icons';

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
    <Label for="signup-email" class="block mb-2">Email:</Label>
    <Input type="email" id="signup-email" bind:value={email} required autocomplete="username" >
      <EnvelopeSolid slot="left" class="w-4 h-4" />
    </Input>
  </div>
  <div>
    <Label for="signup-password">Password:</Label>
    <Input type="password" id="signup-password" bind:value={password} required autocomplete="current-password">
      <LockSolid slot="left" class="w-4 h-4" />
    </Input>
  </div>
  <div>
    <Label for="confirm-password">Confirm Password:</Label>
    <Input type="password" id="confirm-password" bind:value={confirmPassword} required >
      <LockSolid slot="left" class="w-4 h-4" />
    </Input>
  </div>
  <button type="submit" class="italic">Signup</button>
</form>