<script>
  import Card from '../../lib/Card.svelte';
  import Banner from '../../lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';

  const data = {
    name: '',
    email: '',
    message: ''
  };

  let loading = false;
  let submitted = false;
  let error = false;

  async function submit() {
    if (loading) {
      return;
    }

    loading = true;

    const fields = {
      createdOn: {
        integerValue: Date.now().toString()
      },
      name: {
        stringValue: data.name
      },
      email: {
        stringValue: data.email
      },
      message: {
        stringValue: data.message
      },
      status: {
        stringValue: 'received'
      }
    };

    try {
      await fetch(`https://firestore.googleapis.com/v1/projects/bioinspekt/databases/(default)/documents/contacts`, {
        method: 'POST',
        body: JSON.stringify({fields})
      });

      submitted = true;
      data.name = '';
      data.email = '';
      data.message = '';
    } catch (e) {
      error = true;
    }

    loading = false;
  }
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

    <Margin size="2" />

    <Card>
      <form class="contact-form m-t-l" on:submit|preventDefault={submit}>
        <label for="name" class="field">
          <input id="name" class="input-field" placeholder="Vaše ime" name="name" bind:value={data.name} required />
          <span class="label">Vaše ime</span>
        </label>
        <label for="mail" class="field">
          <input id="mail" class="input-field" placeholder="Vaš e-mail" name="email" type="email" bind:value={data.email} required />
          <span class="label">Vaš e-mail</span>
        </label>
        <label for="message" class="field">
          <textarea id="message" class="input-field" placeholder="Vaša poruka" name="message" rows="10" bind:value={data.message} required ></textarea>
          <span class="label">Vaša poruka</span>
        </label>
        <div class="m-t-m">
          <button type="submit" {loading}>Pošalji</button>
        </div>

        {#if submitted}
          <p class="m-t-s">Vaša poruka je uspješno zaprimljena. Hvala vam na javljanju. Odgovoriti ćemo vam u najkraćemo mogućem roku.</p>
        {/if}

        {#if error}
          <p class="m-t-s">Došlo je do greške. Molim vas probajte ponovno.</p>
        {/if}
      </form>
    </Card>
  </div>
</div>

<style>
  .sticky {
    position: sticky;
    top: 3rem;
  }

  a {
    text-decoration: underline;
    font-weight: normal;
  }
</style>

<svelte:head>
  <title>Kontakt - Bioinspekt</title>
</svelte:head>