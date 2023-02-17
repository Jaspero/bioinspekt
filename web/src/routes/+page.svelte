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

<div class="certificates">
  <TextImage src="images/hero1.jpg">
    <Text size="huge" weight="bold" align="center">Bio Suisse Standard</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Ukoliko ste naš klijent i imate mogućnost izvoza Vaših visokovrijednih proizvoda na zahtjevno Švicarsko tržište, u mogućnosti ste to izvesti uz kontrolu i certifikaciju prema ovom standardu.
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/bio-suisse-standard" width="256">Saznaj više</Button>
    </div>
  </TextImage>
  <TextImage src="images/hero1.jpg" inverted>
    <Text size="huge" weight="bold" align="center">Dunav Soja Standard</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Dunav Soja organizacija podržava i promovira održivu proizvodnju genetski nemodificirane soje u Europi, s ciljem smanjenja zavisnosti od uvoza i podrške domaćim proizvođačima.
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/dunav-soja-standard" width="256">Saznaj više</Button>
    </div>
  </TextImage>
  <TextImage src="images/hero1.jpg">
    <Text size="huge" weight="bold" align="center">BEZ GMO Standard</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Certifikatom "BEZ GMO Standard" garantira se da životinje nisu hranjene GM stočnom hranom, kao da ni u cijelom proizvodnom procesu nije bilo dodira sa GM sastojcima.
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/bez-gmo-standard" width="256">Saznaj više</Button>
    </div>
  </TextImage>
  <TextImage src="images/hero1.jpg" inverted>
    <Text size="huge" weight="bold" align="center">Certifikacija ZOI i ZOZP</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Ova certifikacija potrošačima jamči kupnju autentičnog i kontroliranog proizvoda, priznate kvalitete i lokalnog podrijedla
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/zoi-i-zozp" width="256">Saznaj više</Button>
    </div>
  </TextImage>
  <TextImage src="images/hero1.jpg">
    <Text size="huge" weight="bold" align="center">Dokazana kvaliteta Hrvatska</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Dokazana kvaliteta radi postizanja još veće prepoznatljivosti i promidžbe domaćih poljoprivrednih i prehrambenih proizvoda i to putem jedne, jedinstvene prepoznatljive oznake.
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/dokazana-kvaliteta-hrvatska" width="256">Saznaj više</Button>
    </div>
  </TextImage>
</div>

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

  .certificates {
    border-top: 1px solid var(--primary-l);
  }
</style>