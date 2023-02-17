<script>
  import Text from '../../lib/Text.svelte';
  import Banner from '../../lib/Banner.svelte';
</script>

<Banner>
  Obrasci
</Banner>

<div class="grid">
  <div class="col-12">
    <a href="/certifikacije/bio-suisse-standard" class="card">
      <img src="images/biosuisse-organic.jpeg" alt="" class="card-image">

      <span class="card-content">
        <Text size="large">Biosuisse organic standard</Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-content-icon">
      </span>
    </a>
  </div>

  <div class="col-12">
    <a href="/certifikacije/dunav-soja-standard" class="card">
      <img src="images/dunav-soja.png" alt="" class="card-image">

      <span class="card-content">
        <Text size="large">Dunav Soja standard</Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-content-icon">
      </span>
    </a>
  </div>

  <div class="col-12">
    <a href="/certifikacije/bez-gmo-standard" class="card">
      <img src="images/bez-gmo.png" alt="" class="card-image">

      <span class="card-content">
        <Text size="large">BEZ GMO standard</Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-content-icon">
      </span>
    </a>
  </div>

  <div class="col-12">
    <a href="/certifikacije/zoi-i-zozp" class="card">
      <img src="images/zoi-i-zozp.png" alt="" class="card-image">

      <span class="card-content">
        <Text size="large">ZOI i ZOZP</Text>
        <img src="icons/arrow-right.svg" alt="" height="24" class="card-content-icon">
      </span>
    </a>
  </div>

  <div class="col-12">
    <a href="/certifikacije/dokazana-kvaliteta-hrvatska" class="card">
      <img src="images/dokazana-kvaliteta.jpeg" alt="" class="card-image">

      <span class="card-content">
        <Text size="large">Dokazana Kvaliteta Hrvatska</Text>
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

    &-image {
      height: 75px;
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
  <title>Certifikacije - Bioinspekt</title>
</svelte:head>