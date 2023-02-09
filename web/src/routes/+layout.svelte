<script lang="ts">
	import Header from '$lib/Header.svelte';
  import './styles.css';
  import Footer from '../lib/Footer.svelte';
</script>

<Header />

<main data-sveltekit-prefetch>
	<slot />
</main>

<Footer />
