<script lang="ts">
	import type { PageData } from './$types';
  import Banner from '$lib/Banner.svelte';
  import {a11yContent} from '$lib/a11yContent';

	export let data: PageData;

  const {page} = data;
</script>

<Banner>
  {page.title}
</Banner>

<div class="grid content-selector">
  <div class="col-12">
    {@html a11yContent(page.content)}
  </div>
</div>

<svelte:head>
  <title>{page.title} - Bioinspekt</title>
  <meta name="description" content={page.meta?.description || `${page.title} - Bioinspekt d.o.o., kontrola i certifikacija ekološke proizvodnje.`}>
</svelte:head>

<style lang="scss">
  .grid {
    max-width: 900px;
    padding: 6rem 0;
  }

  .content-selector {
    /* long unbroken strings (e.g. ____ separator lines) wrap instead of widening the page */
    overflow-wrap: break-word;

    /* images and tables from the CMS must not be wider than the screen (WCAG 1.4.10) */
    :global(img) {
      max-width: 100%;
      height: auto;
    }

    :global(.table-scroll) {
      max-width: 100%;
      overflow-x: auto;
    }

    :global(th) {
      font-weight: inherit;
      text-align: inherit;
    }

    /* headings moved up one level keep their original size */
    :global(h2[data-level='3']) {
      font-size: 1.125rem;
    }

    :global(h3[data-level='4']) {
      font-size: 1rem;
    }

    :global(a) {
      text-decoration: underline;

      &:hover {
        color: var(--primary);
      }
    }
  }
</style>