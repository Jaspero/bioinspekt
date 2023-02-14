<script lang="ts">
	import type { PageData } from './$types';
  import Banner from '../../../lib/Banner.svelte';

	export let data: PageData;
  const page = data.page;
</script>

<Banner>
  {page.title}
</Banner>

<div class="grid content-selector">
  <div class="col-12">
    {@html page.content}
  </div>
</div>

<style lang="scss">
  .grid {
    max-width: 900px;
    padding: 6rem 0;
  }

  .content-selector {
    :global(a) {
      text-decoration: underline;

      &:hover {
        color: var(--primary);
      }
    }
  }
</style>