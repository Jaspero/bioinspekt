<script lang="ts">
  import Hero from '../lib/Hero.svelte';
  import TextImage from '../lib/TextImage.svelte';
  import Text from '../lib/Text.svelte';
  import Cta from '../lib/Cta.svelte';
  import Button from '../lib/Button.svelte';
  import Margin from '../lib/Margin.svelte';
  import About from '../lib/About.svelte';
  import Proof from '../lib/Proof.svelte';
</script>

<Hero />

<About>
  <slot slot="title">
    <div class="grid">
      <div class="col-12">
        <Text size="huge" weight="bold">O nama</Text>
        <Margin size="2" />
        <Text size="large">
          Bioinspekt d.o.o. je <b>PRVA TVRTKA U HRVATSKOJ</b> koja je proizvođačima bioloških proizvoda omogućila pristup ekološkim certifikatima.
        </Text>
        <Margin size=".75" />
        <Text size="large">
          <b>Kvalitetu garantiramo</b> upravljanjem i provođenjem naših usluga <b>s maksimalnom efikasnošću</b> u svakom trenutku i svakom dijelu poslovnog sustava tvrtke.
        </Text>
        <Margin size=".75" />
        <Text size="large">
          Naša rješenja dostupna su svim našim klijentima pri čemu uvijek imamo na umu neovisnost, nepristranost i poštenje. Naše usluge <b>kompletno izbjegavaju sve</b> trgovačke i druge poslovne aktivnosti zbog kojih bi moglo doći do sukoba interesa te utjecati na bitne odluke vezane uz procese stručne kontrole i potvrđivanja.
        </Text>
        <Margin size=".75" />
        <Text size="large">
          Svi podaci prikupljeni tijekom stručne kontrole i potvrđivanja strogo su povjerljive prirode i kao takvi čuvaju se na način propisan našim Priručnikom kvalitete.
        </Text>
      </div>
    </div>
  </slot>
  <slot slot="content">
    <Proof />
  </slot>
</About>

<Cta>
  <Text max="42" size="medium" align="center" weight="bold">
    Imamo vješte, kvalificirane, i kvalitetne ljude
    koji su uvijek spremni pomoći i ponuditi savjete.
  </Text>

  <Margin size="2" />

  <Button href="/kontakt" appearance="filled" color="primary-l">Kontaktirajte nas</Button>
</Cta>

<svelte:head>
  <title>Bioinspekt</title>
  <meta
    name="description"
    content="Bioinspekt d.o.o. - Nadzor u ekološkoj proizvodnji"
  />
  <meta
    name="keywords"
    content="bioinspekt, eko, eko proizvodnja, ekoloska proizvodnja, eko proizvod"
  />
</svelte:head>

<style>
  section {
    background-color: var(--bg);
  }
</style>