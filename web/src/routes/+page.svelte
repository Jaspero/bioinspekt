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
        <Text tag="h2" size="huge" weight="bold">O nama</Text>
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
  <TextImage src="images/eu-parlament.jpeg" srcset="images/eu-parlament-640.webp 640w, images/eu-parlament-960.webp 960w, images/eu-parlament-1024.webp 1024w" inverted>
    <Text tag="h2" size="huge" weight="bold" align="center">Uredba (EU) 2018/848 Europskog parlamenta i vijeća</Text>
    <Margin size="1" />
    <Text size="large" max="48" align="center">
      o ekološkoj proizvodnji i označivanju ekoloških proizvoda te stavljanju izvan snage
      <br>Uredbe Vijeća (EZ) br. 834/2007
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="https://firebasestorage.googleapis.com/v0/b/jp-bioinspekt.appspot.com/o/obrasci%2FUredba%202018_848_konsolidirana%20verzija.docx?alt=media&token=4b6aaa66-d281-4518-a787-a11ef6dcf916" width="256">Preuzmi dokumentaciju<span class="sr-only">&nbsp;(Uredba 2018/848, DOCX)</span></Button>
    </div>
  </TextImage>
  <TextImage src="images/globe.jpg" srcset="images/globe-640.webp 640w, images/globe-960.webp 960w, images/globe-1280.webp 1280w, images/globe-1920.webp 1920w">
    <Text tag="h2" size="huge" weight="bold" align="center">Bio Suisse Standard</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Ukoliko ste naš klijent i imate mogućnost izvoza Vaših visokovrijednih proizvoda na zahtjevno Švicarsko tržište, u mogućnosti ste to izvesti uz kontrolu i certifikaciju prema ovom standardu.
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/bio-suisse-standard" width="256">Saznaj više<span class="sr-only">&nbsp;o certifikaciji Bio Suisse</span></Button>
    </div>
  </TextImage>
  <TextImage src="images/harvest.jpg" srcset="images/harvest-640.webp 640w, images/harvest-960.webp 960w, images/harvest-1280.webp 1280w, images/harvest-1920.webp 1920w" inverted>
    <Text tag="h2" size="huge" weight="bold" align="center">Dunav Soja Standard</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Dunav Soja organizacija podržava i promovira održivu proizvodnju genetski nemodificirane soje u Europi, s ciljem smanjenja zavisnosti od uvoza i podrške domaćim proizvođačima.
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/dunav-soja-standard" width="256">Saznaj više<span class="sr-only">&nbsp;o certifikaciji Dunav Soja</span></Button>
    </div>
  </TextImage>
  <TextImage src="images/farm.jpg" srcset="images/farm-640.webp 640w, images/farm-960.webp 960w, images/farm-1280.webp 1280w, images/farm-1920.webp 1920w">
    <Text tag="h2" size="huge" weight="bold" align="center">BEZ GMO Standard</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Certifikatom "BEZ GMO Standard" garantira se da životinje nisu hranjene GM stočnom hranom, kao da ni u cijelom proizvodnom procesu nije bilo dodira sa GM sastojcima.
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/bez-gmo-standard" width="256">Saznaj više<span class="sr-only">&nbsp;o certifikaciji BEZ GMO</span></Button>
    </div>
  </TextImage>
  <TextImage src="images/cow.jpg" srcset="images/cow-640.webp 640w, images/cow-960.webp 960w, images/cow-1280.webp 1280w, images/cow-1920.webp 1920w" inverted>
    <Text tag="h2" size="huge" weight="bold" align="center">Certifikacija ZOI i ZOZP</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Ova certifikacija potrošačima jamči kupnju autentičnog i kontroliranog proizvoda, priznate kvalitete i lokalnog podrijedla
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/zoi-i-zozp" width="256">Saznaj više<span class="sr-only">&nbsp;o certifikaciji ZOI i ZOZP</span></Button>
    </div>
  </TextImage>
  <TextImage src="images/apples.jpg" srcset="images/apples-640.webp 640w, images/apples-960.webp 960w, images/apples-1280.webp 1280w, images/apples-1920.webp 1920w">
    <Text tag="h2" size="huge" weight="bold" align="center">Dokazana kvaliteta Hrvatska</Text>
    <Margin size="1" />
    <Text size="large" max="64" align="center">
      Dokazana kvaliteta radi postizanja još veće prepoznatljivosti i promidžbe domaćih poljoprivrednih i prehrambenih proizvoda i to putem jedne, jedinstvene prepoznatljive oznake.
    </Text>
    <Margin size="2" />
    <div class="ta-center">
      <Button href="/certifikacije/dokazana-kvaliteta-hrvatska" width="256">Saznaj više<span class="sr-only">&nbsp;o certifikaciji Dokazana kvaliteta</span></Button>
    </div>
  </TextImage>
</div>

<Cta>
  <Text max="42" size="large" align="center" weight="bold">
    Imamo vješte, kvalificirane ljude koji su uvijek spremni pomoći i predstaviti svoje uvide
  </Text>

  <Margin size="2" />

  <Button href="/kontakt" appearance="filled" color="primary-l">Kontaktirajte nas</Button>
</Cta>

<div class="grid p-y-xl">
  <div class="col-12">
    <h2 class="ta-center m-b-l" style="font-size: 2rem">Korisni linkovi</h2>
    <a href="https://fis.mps.hr/fis/javna-trazilica-szb/" target="_blank" rel="noreferrer" class="block ta-center">
      <u>
        FIS tražilica
      </u>
    </a>
    <div class="m-y-s"></div>
    <a href="https://poljoprivreda.gov.hr/istaknute-teme/poljoprivreda-173/poljoprivreda-175/ekoloska/baza-ekoloskog-poljoprivrednog-reprodukcijskog-materijala/3672" target="_blank" rel="noreferrer" class="block ta-center">
      <u>
        MINISTARSTVO POLJOPRIVREDE – Baza ekološkog poljoprivrednog reprodukcijskog materijala
      </u>
    </a>
  </div>
</div>

<svelte:head>
  <title>Bioinspekt - kontrola i certifikacija ekološke proizvodnje</title>
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