<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({fetch}) => {
		const {headerLinks} = await (await fetch('/settings')).json();
		return {
			props: {
				links: headerLinks
			}
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import Header from '$lib/Header.svelte';
  import './styles.css';

	export let data: LayoutData;

	$: mainClass = $page.url.pathname.slice(1) ? $page.url.pathname.slice(1) : 'home';
</script>

<Header link={data.links} />

<main data-sveltekit-prefetch class={mainClass}>
	<slot />
</main>

<style>
  main {
    padding-top: 94px;
  }
</style>
