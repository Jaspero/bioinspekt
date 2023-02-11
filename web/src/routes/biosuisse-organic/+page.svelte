<script>
  import Banner from '../../lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';
</script>

<Banner>
  Bio Suisse Standard
</Banner>

<div class="grid">
  <div class="col-12">
    <Text>
      U cilju razvoja i unapređivanja naših kvaliteta i usluga, Bioinspekt je od 2017. godine ovlašten za kontrolu i certifikaciju prema Švicarskom Bio Suisse standardu, te ukoliko ste zainteresirani za izvoz u tu zemlju, obratite nam se sa povjerenjem. U nastavku možete saznati više informacija o uvjetima kontrole i certifikacije.
    </Text>

    <Margin size="1" />

    <a href="https://www.bio-suisse.ch/en.html" target="_blank" rel="noreferrer">
      <Text>
        https://www.bio-suisse.ch/en.html
      </Text>
    </a>

    <Margin size="2" />

    <Text size="medium" weight="bold">
      Zašto se certificirati prema Bio Suisse standardu?
    </Text>

    <Margin size="1" />

    <Text>
      Ukoliko ste naš klijent i imate mogućnost izvoza Vaših visokovrijednih proizvoda na zahtjevno Švicarsko tržište, u mogućnosti ste to izvesti uz kontrolu i certifikaciju prema ovom standardu. To nije obaveza ukoliko se bavite ekološkom proizvodnjom prema EU regulativi već je odluka i odabir svakog od naših postojećih ili novih klijenata da krenu u tom smjeru, da bi mogli ostvariti veću korist od dodavanja vrijednosti na svoje ekološke proizvode. Time Švicarska pruža mogućnost klijentima koji imaju ekološku proizvodnju da svoje proizvode trže na njihovom tržištu a u konačnici postizanje bolje i veće cijene za ekološke proizvode ukoliko su certificirani prema tom dodatnom standardu.
    </Text>

    <Margin size="4" />

    <img src="images/biosuisse-organic.jpeg" alt="biosuisse organic" height="200">
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

  @media (max-width: 600px) {
    img {
      width: 100%;
      height: unset;
    }
  }
</style>

<svelte:head>
  <title>Bio Suisse Standard - Bioinspekt</title>
</svelte:head>