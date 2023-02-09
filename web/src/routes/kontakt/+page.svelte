<script>
  import Card from '../../lib/Card.svelte';
  import Banner from '../../lib/Banner.svelte';
</script>

<Banner>
  Kontakt
</Banner>

<div class="grid">
  <div class="col-6">
    <Card>
    </Card>
  </div>

  <div class="col-6 sticky">
    <Card>
    </Card>
  </div>
</div>

<style>
  .grid {
    align-content: flex-start;
  }
  .sticky {
    position: sticky;
    top: 3rem;
  }
</style>

<svelte:head>
  <title>Kontakt - Bioinspekt</title>
</svelte:head>