<script lang="ts">
  import Text from '$lib/Text.svelte';
  import Banner from '$lib/Banner.svelte';

  export let data: any;

  /** File type shown to screen readers, from the file name in the link (e.g. PDF, DOC, DOCX, XLSX) */
  function fileType(url: string = ''): string {
    const m = decodeURIComponent(url.split('?')[0]).match(/\.([a-z0-9]{2,5})$/i);
    return m && ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'odt'].includes(m[1].toLowerCase()) ? m[1].toUpperCase() : '';
  }
</script>

<Banner>
  Obrasci
</Banner>

<div class="grid">
  {#each data.forms as form}
    <div class="col-12">
      <a href={form.file || form.url} target="_blank" rel="noreferrer" class="card">
        <Text size="large">{form.title}<span class="sr-only"> ({fileType(form.file || form.url) ? fileType(form.file || form.url) + ', ' : ''}otvara se u novom prozoru)</span></Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-icon">
      </a>
    </div>
  {/each}
</div>

<style lang="scss">
  .grid {
    max-width: 900px;
    padding: 6rem 0;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    overflow: hidden;
    background-color: var(--bg);
    border-radius: .5rem;
    border: 1px solid rgba(0,0,0,.08);

    &-icon {
      transition: .25s;
    }

    &:hover {
      .card-icon {
        transform: translateX(1rem);
      }
    }

    &-image {
      height: 75px;
    }
  }
</style>

<svelte:head>
  <title>Obrasci - Bioinspekt</title>
  <meta name="description" content="Obrasci za kontrolu i certifikaciju ekološke proizvodnje koje Bioinspekt d.o.o. daje subjektima u kontroli.">
</svelte:head>