<script>
  import Banner from '../../lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';
</script>

<Banner>
  Bez GMO Standard
</Banner>

<div class="grid">
  <div class="col-12">
    <Text size="medium" weight="bold">
      Zašto se certificirati prema BEZ GMO standardu?
    </Text>

    <Margin size="1" />

    <Text>
      Meso, mlijeko, jaja i drugi proizvodi dobiveni od životinja koje se svakodnevno hrane genetski modificiranom stočnom hranom, nigdje u svijetu, pa ni kod nas, ne označavaju se kao GMO. U Europi je više od 85% ovakvih proizvoda, a u našu regiju se uvoze u velikim količinama
    </Text>

    <Margin size=".5" />

    <Text>
      Kako bi znali što kupujemo i jedemo, na inicijativu potrošača širom Europe su kreirani standardi za proizvodnju, kontrolu, certifikaciju i označavanje BEZ GMO prehrambenih proizvoda. Navedeni standardi garantiraju da u cijelom proizvodnom procesu nisu korišteni GMO sastojci. Danas, preko 10 000 proizvoda u Austriji, Njemačkoj, Švicarskoj i drugim Europskim zemljama certificirano je i označeno kao BEZ GMO, čime se garantira da životinje nisu hranjene GM stočnom hranom, kao da ni u cijelom proizvodnom procesu nije bilo dodira sa GM sastojcima.
    </Text>

    <Margin size=".5" />

    <Text>
      Na kraju, proizvodnja genetski modificiranih biljaka je prema brojnim znanstvenim istraživanjima neodrživa sa brojnim negativnim posljedicama za cijeli eko sustav i cijelu planetu.
    </Text>

    <Margin size=".5" />

    <Text>
      Da bi se certificirali prema ovom standardu, ekološki certifikat nije uvjet.
    </Text>

    <Margin size="2" />

    <Text>
      Za više informacije posjetite:
    </Text>

    <a href="https://www.donausoja.rs//en.html" target="_blank" rel="noreferrer">
      <Text>
        https://www.donausoja.rs/
      </Text>
    </a>

    <Margin size="3" />

    <img src="images/bez-gmo.png" alt="biosuisse organic" height="100">
  </div>
</div>

<style>
  .grid {
    max-width: 900px;
    padding: 6rem 0;
  }

  a {
    text-decoration: underline;
  }
</style>

<svelte:head>
  <title>Bez GMO Standard - Bioinspekt</title>
</svelte:head>