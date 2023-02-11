<script>
  import Banner from '../../lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';
</script>

<Banner>
  Zaštićena oznaka izvornosti i oznaka zemljopisnog podrijetla
</Banner>

<div class="grid">
  <div class="col-12">
    <Text>
      Europska unija još je devedesetih godina uspostavila jedinstven sustav koji omogućuje zaštitu naziva tradicionalnih proizvoda čija kvaliteta i posebne značajke nastaju pod utjecajem ljudskih ili prirodnih čimbenika specifičnih za određeno zemljopisno područje ili su pak proizvedeni prema tradicionalnim recepturama ili metodama proizvodnje. Takvi proizvodi označeni su znakom za zaštićenu oznaku izvornosti, zaštićenu oznaku zemljopisnog podrijetla ili zajamčeno tradicionalni specijalitet. Upravo taj znak na ambalaži proizvoda, neposredno uz naziv, potrošaču jamči kupnju autentičnog i kontroliranog proizvoda, priznate kvalitete i lokalnog podrijetla.
    </Text>

    <Margin size="2" />

    <Text size="medium" weight="bold">
      Kako dobiti oznaku izvornosti i/ili zemljopisnog podrijetla?
    </Text>

    <Margin size="1" />

    <Text>
      Prvo treba proći nacionalni postupak zaštite naziva. Prvi korak u zaštiti naziva poljoprivrednog ili prehrambenog proizvoda jednom od oznaka iz sustava kvalitete je udruživanje proizvođača i sastavljanje zajedničke Specifikacije proizvoda koja čini sastavni dio zahtjeva za zaštitu naziva. Postupak zaštite provodi se prvo na nacionalnoj razini, a započinje podnošenjem zahtjeva Ministarstvu poljoprivrede koje nakon uspješno provedenog postupka donosi Rješenje o prijelaznoj nacionalnoj zaštiti naziva poljoprivrednog ili prehrambenog proizvoda kao ZOI, ZOZP ili ZTS. Nakon donošenja spomenutog Rješenja, naziv proizvoda zaštićen je na području Republike Hrvatske, a registracija oznake na razini Europske unije nastavlja se podnošenjem zahtjeva za registraciju oznake Europskoj komisiji.
    </Text>

    <Margin size="1" />

    <Text>
      Cijeli postupak možete pročitati na stranicama Ministarstva poljoprivrede pod linkom:
    </Text>

    <Margin size=".5" />

    <a href="https://poljoprivreda.gov.hr/istaknute-teme/hrana-111/oznake-kvalitete/zoi-zozp-zts-poljoprivrednih-i-prehrambenih-proizvoda/nacionalni-postupak-zastite-naziva-zoi-zozp-i-zts/254" target="_blank" rel="noreferrer">
      <Text>
        https://poljoprivreda.gov.hr/istaknute-teme/hrana-111/oznake-kvalitete/zoi-zozp-zts-poljoprivrednih-i-prehrambenih-proizvoda/nacionalni-postupak-zastite-naziva-zoi-zozp-i-zts/254
      </Text>
    </a>

    <Margin size="2" />

    <Text>
      Drugi korak je registracija naziva pod znakom oznake izvornosti ili zemljopisnog podrijetla:
    </Text>

    <Margin size=".5" />

    <Text>
      Nakon donošenja Rješenja o prijelaznoj nacionalnoj zaštiti naziva poljoprivrednog ili prehrambenog proizvoda kao ZOI, ZOZP ili ZTS, podnositelj zahtjeva Ministarstvu dostavlja dokumentaciju koja čini zahtjev za registraciju naziva ZOI, ZOZP ili ZTS na razini Europske unije. Ovu dokumentaciju Ministarstvo prosljeđuje Europskoj komisiji čime započinje postupak registracije oznake na razini Europske unije. Uspješno proveden postupak registracije oznake završava donošenjem Provedbene Uredbe o upisu naziva u registar zaštićenih oznaka izvornosti i zaštićenih oznaka zemljopisnog podrijetla ili registar zajamčeno tradicionalnih specijaliteta, čime je naziv proizvoda zaštićen na području cijele Europske unije.
    </Text>

    <Margin size="1" />

    <Text>
      Svu zakonsku regulativu za pokretanje postupka te potrebitu dokumentaciju možete potražiti na stranicama Ministarstva poljoprivrede pod linkom:
    </Text>

    <Margin size=".5" />

    <a href="https://poljoprivreda.gov.hr/istaknute-teme/hrana-111/oznake-kvalitete/zoi-zozp-zts-poljoprivrednih-i-prehrambenih-proizvoda/228" target="_blank" rel="noreferrer">
      <Text>
        https://poljoprivreda.gov.hr/istaknute-teme/hrana-111/oznake-kvalitete/zoi-zozp-zts-poljoprivrednih-i-prehrambenih-proizvoda/nacionalni-postupak-zastite-naziva-zoi-zozp-i-zts/254
      </Text>
    </a>

    <Margin size="2" />

    <Text size="medium" weight="bold">
      Znak (simbol) za ZOI/ZOZP
    </Text>

    <Margin size="1" />

    <Text>
      Nacionalnim znakom i EU znakom za ZOI, ZOZP i ZTS dozvoljeno je označavati samo one proizvode za koje proizvođač posjeduje <b>Potvrdu o sukladnosti proizvoda sa Specifikacijom, izdanu od strane ovlaštenog kontrolnog tijela</b>.
    </Text>

    <Margin size="1" />

    <Text weight="bold">
      Dakle, potrebito je izvršiti kontrolu i certifikaciju kod nas kako biste mogli dobiti Potvrdu (Certifikat) za traženu oznaku.
    </Text>

    <Margin size="3" />

    <div class="flex">
      <img src="images/zoi-i-zozp-4x.png" alt="" height="300">
    </div>
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
  <title>ZOI i ZOZP Standardi - Bioinspekt</title>
</svelte:head>