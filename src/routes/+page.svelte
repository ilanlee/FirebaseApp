<script>
  import { user } from "$lib/stores/userStore.js";
  import LoginForm from "$lib/components/LoginForm.svelte";
  import SignupForm from "$lib/components/SignupForm.svelte";
  import LogoutButton from "$lib/components/LogoutButton.svelte"; 
  import ImageUpload from "../lib/components/ImageUpload.svelte";
  import ImageForm from "../lib/components/ImageInformation.svelte";
  import { imageStore } from "$lib/stores/ImageUploadStore.js";
  import NewArchive from "../lib/components/NewArchive.svelte";

  let email = '';
  let password = '';

</script>

{#if $user}
  <ImageUpload />
    <div>
      <NewArchive/>
    </div>
  <LogoutButton />
{:else}
  <h2 class="underline">Login</h2>
  <LoginForm /> 

  <h2 class="underline">Signup</h2>
  <SignupForm />
{/if}