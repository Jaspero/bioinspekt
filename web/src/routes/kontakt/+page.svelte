<script>
  import Card from '../../lib/Card.svelte';
  import Banner from '../../lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';
</script>

<Banner>
  Kontakt
</Banner>

<div class="grid ai-start p-y-l">
  <div class="col-6 col-s-9 col-xs-12">
    <Card>
      <Text weight="bold">Direktor</Text>
      <Text>Mr. Sc. Berislav Vrkljan</Text>
      <a href="tel:++385911123462" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 91 112 3462
      </a>

      <Margin size="1" />

      <Text weight="bold">Direktor - sustav upravljanja certifikacijskog tijela</Text>
      <Text>Dubravko Kupčinovac, mag. ing. agr.</Text>
      <a href="tel:++385911123461" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 91 112 3461
      </a>

      <Margin size="1" />

      <Text weight="bold">Voditelj odjela za vrednovanje:</Text>
      <Text>Marko Grgošević, mag. ing. agr.</Text>
      <a href="tel:++385911123465" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 91 112 3465
      </a>

      <Margin size="1" />

      <Text weight="bold">Kontrolor</Text>
      <Text>Tomislav Bošnjak, dipl. ing. agr.</Text>
      <a href="tel:++385996003546" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 99 600 3546
      </a>

      <Margin size="1" />

      <Text weight="bold">Kontrolor</Text>
      <Text>Dražen Kraus, mag. ing. agr.</Text>
      <a href="tel:++385993676938" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 99 367 6938
      </a>

      <Margin size="1" />

      <Text weight="bold">Kontrolor</Text>
      <Text>Mario Štrok, mag. ing. agr.</Text>
      <a href="tel:++385993676939" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 99 367 6939
      </a>

      <Margin size="1" />

      <Text weight="bold">Kontrolor</Text>
      <Text>Davor Lamešić, mag. ing. agr.</Text>
      <a href="tel:++385995898100" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 99 589 8100
      </a>

      <Margin size="1" />

      <Text weight="bold">Kontrolor</Text>
      <Text>Mario Zlatarić, mag. ing. agr.</Text>
      <a href="tel:++385995260366" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 99 526 0366
      </a>

      <Margin size="1" />

      <Text weight="bold">Kontrolor</Text>
      <Text>Viktor Tomeš, mag. ing. agr.</Text>
      <a href="tel:++385995260377" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 99 526 0377
      </a>

      <Margin size="1" />

      <Text weight="bold">Poslovna administratorica</Text>
      <Text>Melita Cvitan</Text>
    </Card>
  </div>

  <div class="col-6 col-s-9 col-xs-12 sticky">
    <Card>
      <Text size="large" weight="bold">O firmi</Text>

      <Margin size="1" />

      <Text weight="bold">Lokacija</Text>
      <a href="images/lokacija.jpeg" class="flex ai-center" target="_blank" rel="noreferrer">
        <img src="icons/location.svg" alt="" height="20" class="m-r-s">
        Đakovština 2, Osječko-baranjska županija, 31000 Osijek, Hrvatska
      </a>

      <Margin size="1" />

      <Text weight="bold">Telefon</Text>
      <a href="tel:++38531204620" class="flex ai-center">
        <img src="icons/phone.svg" alt="" height="20" class="m-r-s">
        ++385 31 204 620
      </a>

      <Margin size="1" />

      <Text weight="bold">Fax</Text>
      <a href="fax:++38531213659" class="flex ai-center">
        <img src="icons/fax.svg" alt="" height="20" class="m-r-s">
        ++385 31 213 659
      </a>

      <Margin size="1" />

      <Text weight="bold">E-mail</Text>
      <a href="mailto:info.bioinspekt@gmail.com" class="flex ai-center">
        <img src="icons/mail.svg" alt="" height="20" class="m-r-s">
        info.bioinspekt@gmail.com
      </a>
    </Card>
  </div>
</div>

<style>
  .sticky {
    position: sticky;
    top: 3rem;
  }
</style>

<svelte:head>
  <title>Kontakt - Bioinspekt</title>
</svelte:head>