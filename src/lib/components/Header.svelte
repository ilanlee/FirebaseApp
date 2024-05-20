<script>
    import { user } from "$lib/stores/userStore.js";
</script>

{#if user}
 <span>Welcome, {$user.email}</span>
{/if}