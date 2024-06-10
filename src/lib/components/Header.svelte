<script>
  import Logo from "./Logo.svelte";
  import { auth } from "$lib/firebase.js";
  import { browserLocalPersistence, signOut } from "firebase/auth";
  import { page } from "$app/stores"
  import { ArchiveSolid, HomeSolid } from "flowbite-svelte-icons";
  import LogoutButton from "$lib/components/LogoutButton.svelte";
</script>

<header class="sticky bg-slate-50 top-0 left-0 flex items-center justify-between">
    <Logo/>
    <div class="flex gap-5 items-center">
        <a href="/"><ArchiveSolid/></a>
        <a href="/Home"><HomeSolid/></a>
        <LogoutButton />
    </div>
</header>