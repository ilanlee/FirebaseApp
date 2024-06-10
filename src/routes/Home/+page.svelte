<script>
    import { user } from "$lib/stores/userStore.js";
    import LogoutButton from "$lib/components/LogoutButton.svelte"; 
    import ImageUpload from "../../lib/components/ImageUpload.svelte"
    import NewArchive from "../../lib/components/NewArchive.svelte";
    import UserStoreInfo from "../../lib/components/UserStoreInfo.svelte";
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