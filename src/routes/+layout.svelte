<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import { db } from '$lib/db.js'; // Import the database
</script>

<Header/>
<slot />