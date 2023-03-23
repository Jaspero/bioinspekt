<script lang="ts">
  import Banner from '$lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';
</script>

<Banner>
  Obavijest klijentima - Kontrola i certifikacija
</Banner>

<div class="grid content-selector">
  <div class="col-12">
    <Text size="medium">
      Poštovani svi,
      <br><br>
      U cilju poboljšanja provedbe Programa ruralnog razvoja Republike Hrvatske za razdoblje 2014-2020, Ministarstvo poljoprivrede provodi anketu o informiranosti proizvođača o provedbi tipa operacije 3.2.1 „Potpora za aktivnosti informiranja i promoviranja“.
      <br><br>
      Molimo Vas da pogledate anketu dostupnu na <a href="https://docs.google.com/forms/d/e/1FAIpQLScVecp8o69xXX0ziKbJ2X1RqxFDPsnT_9xL2_CfJuLAOwoU6Q/viewform?usp=sf_link" target="_blank" rel="noreferrer"><u>poveznici</u></a>
      <br><br>
      S poštovanjem,
      <br>
      Vaš BIOINSPEKT
    </Text>

    <Margin size="3" />

    <Text size="medium">
      Dobili smo obavijest od strane Ministarstva poljoprivrede da u okviru Programa ruralnog razvoja Republike Hrvatske za razdoblje 2014. – 2020. postoji mogućnost sufinanciranja postupka certifikacije ekoloških poljoprivrednih proizvoda. Kroz Mjeru 3. »Sustavi kvalitete za poljoprivredne i prehrambene proizvode«, Podmjeru 3.1. »Potpora za novo sudjelovanje u sustavima kvalitete« omogućena je dodjela potpore za nove proizvođače koji se uključe u sustav ekološke poljoprivrede, kao i za one koji već sudjeluju u sustavu ekološke poljoprivrede do 5 godina.
      <br><br>
      Za nove proizvođače koji tek ulaze u sustav ekološke proizvodnje potpora se odobrava na razdoblje do pet godina u maksimalnom iznosu do 15.000 eura, odnosno maksimalno do 3.000 eura godišnje u kunskoj protuvrijednosti.
      <br><br>
      Za proizvođače koji već sudjeluju u sustavima kvalitete prije podnošenja Zahtjeva za potporu, maksimalno trajanje do 5 godina smanjuje se za broj godina koje su protekle od početka sudjelovanja u sustavu kvalitete do trenutka podnošenja zahtjeva za potporu. Početak sudjelovanja u sustavu kvalitete smatra se datum provođenja prve stručne kontrole u ekološkoj proizvodnji.
      <br><br>
      Zahtjev za potporu može se popunjavati i podnositi u AGRONET-u od 20. kolovoza 2018. godine od 12:00 sati do 30. rujna 2020. godine do 12:00 sati ili do iskorištenja raspoloživih sredstava.
      <br><br>
      Svi detalje vezani uz prijavu na Natječaj za provedbu Podmjere 3.1. »Potpora za novo sudjelovanje u sustavima kvalitete« - provedba tipa operacije 3.1.1. »Potpora za sudjelovanje poljoprivrednika u sustavima kvalitete« dostupni su na stranicama Agencije za plaćanja u poljoprivredi, ribarstvu i ruralnom razvoju:
      <a href="https://www.apprrr.hr/podmjera-3-1-potpore-za-novo-sudjelovanje-u-sustavima-kvalitete/" target="_blank" rel="noreferrer"><u>Natječaj</u></a>
    </Text>

    <Margin size="3" />

    <Text size="medium">
      <b>Troškovi stručne kontrole i certifikacije</b>
      <br><br>
      Troškovi kontrole i certifikacije definirani su službenim Cjenikom tvrtke BIOINSPEKT d.o.o. Klijenti, korisnici naših usluga se o troškovima upoznaju prilikom potpisivanja ugovora o obavljanju stručne kontrole i certifikacije u ekološkoj proizvodnji.
      Potencijalnim klijentima certifikacijsko tijelo na pisani zahtjev izrađuje ponudu za provedbu stručne kontrole i certifikacije.
      <br><br>
      <a href="docs/cjenik-usluga.pdf"><u>Cjenik usluga</u></a>
    </Text>

    <Margin size="3" />

    <Text size="medium">
      <b>Postupanje s prizivima i prigovorima</b>
      <br><br>
      Certifikacijsko tijelo BIOINSPEKT d.o.o. ima dokumentirano i definirano postupanje po pitanju rješavanja zaprimljenih priziva. Priziv možete uputiti pisanim putem u roku od 14 dana nakon zaprimanja zapisnika o stručnoj kontroli, odluke o certifikaciji, te certifikata. Postupak rješavanja priziva i prigovora (PS) dostupan je na zahtjev svim zainteresiranim stranama.
    </Text>

    <Margin size="3" />

    <Text size="medium">
      <b>Registar certificiranih subjekata</b>
      <br><br>
      Certifikacijsko tijelo BIOINSPEKT d.o.o. vodi registar certificiranih klijenata (subjekata) a isti je dostupan na službenim stranicama Nadležnog tijela (Ministarstva poljoprivrede).
    </Text>

    <Margin size="3" />

    <Text size="medium">
      <a href="https://poljoprivreda.gov.hr/istaknute-teme/poljoprivreda-173/poljoprivreda-175/ekoloska/popis-subjekata-u-ekoloskoj-poljoprivredi/208" target="_blank" rel="noreferrer"><u>Popis subjekata</u></a>
<!--      <br><br>
      <a href="https://poljoprivreda.gov.hr/istaknute-teme/poljoprivreda-173/poljoprivreda-175/ekoloska/popis-subjekata-u-ekoloskoj-poljoprivredi/208" target="_blank" rel="noreferrer"><u>Popis certifikata</u></a>-->
    </Text>

    <Margin size="3" />

    <Text size="medium" weight="bold">
      Tvrtka BIOINSPEKT d.o.o. obavlja svoje aktivnosti sukladno propisanoj certifikacijskoj shemi koju je moguće dobiti na uvid na pisani zahtjev klijenta. Svi dijelovi certifikacijske sheme propisani su također u Obavijesti klijentima.
    </Text>
  </div>
</div>

<svelte:head>
  <title>Kontrola i certifikacija - Bioinspekt</title>
</svelte:head>

<style>
  .grid {
    max-width: 900px;
    padding: 6rem 0;
  }
</style>