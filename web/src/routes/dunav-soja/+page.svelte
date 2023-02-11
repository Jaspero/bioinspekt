<script>
  import Banner from '../../lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';
</script>

<Banner>
  Dunav Soja Standard
</Banner>

<div class="grid">
  <div class="col-12">
    <Text>
      Od 2018. godine, Bioinspekt je postao član Dunav Soja organizacije. Dunav Soja organizacija podržava i promovira održivu proizvodnju genetski nemodificirane soje u Europi, s ciljem smanjenja zavisnosti od uvoza i podrške domaćim proizvođačima. Istovremeno našim potrošačima pružamo mogućnost da izaberu domaće proizvode bez genetske modifikacije.
    </Text>

    <Margin size=".5" />

    <Text>
      Da bi se certificirali prema ovom standardu, ekološki certifikat nije uvjet. Usluge koje nudimo kao ovlašteni partneri su kontrola i certifikacija Dunav Soja soje i označavanje prehrambenih proizvoda prema BEZ GMO standardu.
    </Text>

    <Margin size="2" />

    <Text size="medium" weight="bold">
      Zašto se certificirati prema Dunav Soja standardu?
    </Text>

    <Margin size="1" />

    <Text>
      Čovjek u danu indirektno pojede 160 g soje. Pitate se kako? Soja je izuzetno važan izvor proteina i više od 80% soje se koristi za ishranu životinja. Tim putem, kroz mlijeko, meso i jaja kao i druge proizvode životinjskog podrijetla, soja dolazi do nas te je zbog tog iznimno važno da je soja BEZ GMO i da je domaća. Više od 85% soje dolazi iz Brazila, Argentine, SAD gdje se najviše uzgaja GMO soja. Sa uvozom soje uvozimo i brojne probleme. Proizvodnja GM soje se odvija na neodrživ način, na velikim površinama u monokulturi koja iscrpljuje zemljište i dovodi do brojnih bolesti zbog kojih se koriste toksični pesticidi koji su vrlo često zabranjeni u Europi. Neodrživa proizvodnja soje povezana je sa uništavanjem kišnih šuma i brojnim negativnim posljedicama za našu planetu. Nažalost, ovakvom sojom se hrane životinje čije proizvode i mi svakodnevno konzumiramo.
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

    <img src="images/dunav-soja.png" alt="biosuisse organic" height="100">
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
  <title>Dunav Soja Standard - Bioinspekt</title>
</svelte:head>