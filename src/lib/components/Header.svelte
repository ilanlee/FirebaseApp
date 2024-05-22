<script>
    import Logo from "./Logo.svelte";
    import { signOut } from 'firebase/auth';
    async function logOut() {
		await fetch('/', {
			method: 'DELETE'
		});
		await signOut(auth);
		goto('/');
	}
</script>

<header class="sticky top-0 left-0 flex items-center justify-between">
    <Logo/>
    <div class="flex gap-5 items-center">
        <button on:click={logOut} variant="ghost" class="">Sign out</button>
    </div>
</header>