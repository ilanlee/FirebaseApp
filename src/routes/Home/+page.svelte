<script>
    import { user } from "$lib/stores/userStore.js";
    import LoginForm from "$lib/components/LoginForm.svelte";
    import SignupForm from "$lib/components/SignupForm.svelte";
    import LogoutButton from "$lib/components/LogoutButton.svelte"; 
    import ImageUpload from "../../lib/components/ImageUpload.svelte"
    import ImageForm from "../../lib/components/ImageInformation.svelte";
    import { imageStore } from "$lib/stores/ImageUploadStore.js";
    import NewArchive from "../../lib/components/NewArchive.svelte";
    import UserStoreInfo from "../../lib/components/UserStoreInfo.svelte";
  
    let email = '';
    let password = '';
  
  </script>
  
  {#if $user}
    <ImageUpload/>
      <div>
        <NewArchive/>
      </div>
    <LogoutButton />
  {:else}
    <h2 class="grid justify-center">You are not logged in</h2>
  {/if}
<div class="float-right">
  <UserStoreInfo />
</div>