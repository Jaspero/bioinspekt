<script lang="ts">
	import Header from '$lib/Header.svelte';
  import './styles.css';
  import Footer from '../lib/Footer.svelte';
</script>

<a href="#sadrzaj" class="skip-link">Preskoči na sadržaj</a>

<Header />

<main id="sadrzaj" tabindex="-1" data-sveltekit-prefetch>
	<slot />
</main>

<Footer />
