<script>
  import Text from '../../lib/Text.svelte';
  import Banner from '../../lib/Banner.svelte';
</script>

<Banner>
  Zakonske regulative
</Banner>

<div class="grid">
  <div class="col-6">
    <a href="/uredbe-ekoloske-proizvodnje" class="card">
      <span class="card-content">
        <Text size="large">Uredbe ekološke proizvodnje</Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-content-icon">
      </span>
    </a>
  </div>

  <div class="col-6">
    <a href="/poticaji" class="card">
      <span class="card-content">
        <Text size="large">Poticaji</Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-content-icon">
      </span>
    </a>
  </div>

  <div class="col-6">
    <a href="/eko-znak-eu" class="card">
      <span class="card-content">
        <Text size="large">Eko znak EU</Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-content-icon">
      </span>
    </a>
  </div>

  <div class="col-6">
    <a href="/eko-znak-hr" class="card">
      <span class="card-content">
        <Text size="large">Eko znak HR</Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-content-icon">
      </span>
    </a>
  </div>
</div>

<style lang="scss">
  .grid {
    max-width: 900px;
    padding: 6rem 0;
  }

  .card {
    display: flex;
    overflow: hidden;
    background-color: var(--bg);
    border-radius: .5rem;
    border: 1px solid rgba(0,0,0,.08);

    &:hover {
      .card-content-icon {
        transform: translateX(1rem);
      }
    }

    &-content {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;

      &-icon {
        transition: .25s;
      }
    }
  }
</style>

<svelte:head>
  <title>Zakonske regulative - Bioinspekt</title>
</svelte:head>