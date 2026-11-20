<script lang="ts">
  import {BASE_TITLE, DELIMITER, URL} from '$lib/consts/title.const.ts';
  import {browser} from '$app/environment';
  import Banner from '$lib/Banner.svelte';

  export let page: any = {};

  /** CMS pages without a title (e.g. the 404 page) get a readable title and heading */
  $: heading = page?.meta?.title || page?.title || 'Stranica nije pronađena';
  $: title = heading + (BASE_TITLE ? ` ${DELIMITER} ${BASE_TITLE}` : '');
  $: hasH1 = /<h1[\s>]/i.test(page?.content || '');

  $: if (page?.scripts && browser) {
    (page.scripts || []).forEach((s: string) => {
      const script = document.createElement('script');

      script.setAttribute('async', 'true');
      script.setAttribute('defer', 'true');
      script.setAttribute('type', 'module');

      script.src = s;

      document.head.appendChild(script);
    });
  }
</script>

{#if !hasH1}
  <Banner>{heading}</Banner>
{/if}

{#if page?.content}
  {@html page.content}
{:else}
  <div class="grid p-y-xl">
    <div class="col-12 ta-center">
      <p>Tražena stranica ne postoji ili je premještena.</p>
      <p class="m-t-s"><a href="/"><u>Natrag na početnu stranicu</u></a></p>
    </div>
  </div>
{/if}

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content="{title}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="{URL + (page?.id || '')}" />
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="{URL + (page?.id || '')}" />
  {#if page?.meta?.description}
    <meta name="description" content={page.meta.description} />
    <meta property="og:description" content="{page.meta.description}" />
    <meta name="twitter:description" content={page.meta.description} />
  {/if}
  {#if page?.meta?.image}
    <meta property="og:image" content="{page.meta.image}" />
    <meta name="twitter:image" content={page.meta.image} />
  {/if}
</svelte:head>
