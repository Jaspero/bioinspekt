<script lang="ts">
  import Text from '$lib/Text.svelte';
  import Banner from '$lib/Banner.svelte';

  export let data: any[];

  console.log(data)
</script>

<Banner>
  Obrasci
</Banner>

<div class="grid">
  {#each data.forms as form}
    <div class="col-12">
      <a href={form.url} target="_blank" rel="noreferrer" class="card">
        <Text size="large">{form.title}</Text>
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
</svelte:head>