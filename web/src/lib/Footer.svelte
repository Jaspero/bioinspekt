<script lang="ts">
  import Text from './Text.svelte';
  import Margin from './Margin.svelte';
</script>

<footer>
  <div class="grid">
    <!--<div class="col-12 flex jc-center fw-wrap">
      <img src="logo.png" alt="" class="logo">
      <div class="w-full">
        <Margin size="4" />
      </div>
    </div>-->

    <div class="col-3 col-xs-6">
      <Text size="small" weight="bold" color="primary-c">Vanjski linkovi</Text>
      <Margin size=".5" />
      <a href="https://www.apprrr.hr/" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Agencija za plaćanje u poljoprivredi</u></Text>
      </a>
      <a href="http://preglednik.arkod.hr/ARKOD-Web/#layers=OSNOVNI%20PROSTORNI%20PODACI,DOF-client,ZU-client,LPIS_FILTERED,LPIS_200,LPIS_210,LPIS_310,LPIS_320,LPIS_321,LPIS_410,LPIS_421,LPIS_422,LPIS_430,LPIS_450,LPIS_451,LPIS_490,LPIS_900,LPIS,SLOPE05,SLOPE510,SLOPE1015,SLOPE15,SLOPEnull,POP,POVS,GAEC7,Zasticena%20podrucja,Ptice,Leptiri,Kontinentalna%20regija,Mediteranska%20regija,Brdsko-planinska%20regija,3m%20Vodoza%C5%A1titni%20pojas,10m%20Vodoza%C5%A1titni%20pojas,Obiljezja%20krajobraza,Tocke,Linije,Poligoni,TT%202015,RP,GPP,BFO,SPEC&map_x=500000&map_y=4925000&map_sc=3657142" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>ARKOD preglednik</u></Text>
      </a>
      <a href="https://eur-lex.europa.eu/homepage.html" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>EUR-lex</u></Text>
      </a>
      <a href="https://poljoprivreda.gov.hr/pristup-informacijama/zakoni-i-propisi/ekoloska-4510/4510" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Ministarstvo poljoprivrede - ekološka proizvodnja</u></Text>
      </a>
      <a href="https://www.nn.hr/" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Narodne novine</u></Text>
      </a>
      <a href="https://commission.europa.eu/select-language?destination=/node/3192" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Organic farming - European Commission</u></Text>
      </a>
      <a href="https://en.wikipedia.org/wiki/Organic_farming" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Wiki - Ekološka poljoprivreda (EN)</u></Text>
      </a>
    </div>

    <div class="col-3 col-xs-6">
      <Text size="small" weight="bold" color="primary-c">Zakonske regulative</Text>
      <Margin size=".5" />
      <a href="/dunav-soja-standard">
        <Text size="small" weight="bold" color="primary-c"><u>Uredbe ekološke proizvodnje</u></Text>
      </a>
      <a href="/bez-gmo-standard">
        <Text size="small" weight="bold" color="primary-c"><u>Poticaji</u></Text>
      </a>
      <a href="/zoi-i-zozp">
        <Text size="small" weight="bold" color="primary-c"><u>Eko znak EU</u></Text>
      </a>
      <a href="/dokazana-kvaliteta">
        <Text size="small" weight="bold" color="primary-c"><u>Eko znak HR</u></Text>
      </a>
      <Margin size="1.5" />
      <Text size="small" weight="bold" color="primary-c">Koraci do eko znaka</Text>
      <Margin size=".5" />
      <a href="/dokazana-kvaliteta">
        <Text size="small" weight="bold" color="primary-c"><u>Obavijesti za klijente - kontrola i certifikacija</u></Text>
      </a>
      <a href="/dokazana-kvaliteta">
        <Text size="small" weight="bold" color="primary-c"><u>Obavijesti klijentima (1)</u></Text>
      </a>
      <a href="/dokazana-kvaliteta">
        <Text size="small" weight="bold" color="primary-c"><u>Obavijesti klijentima (2)</u></Text>
      </a>
    </div>

    <div class="col-3 col-xs-6">
      <Text size="small" weight="bold" color="primary-c">Certifikacije</Text>
      <Margin size=".5" />
      <a href="/biosuisse-organic">
        <Text size="small" weight="bold" color="primary-c"><u>Bio Suisse standard</u></Text>
      </a>
      <a href="/dunav-soja">
        <Text size="small" weight="bold" color="primary-c"><u>Dunav Soja standard</u></Text>
      </a>
      <a href="/bez-gmo">
        <Text size="small" weight="bold" color="primary-c"><u>BEZ GMO standard</u></Text>
      </a>
      <a href="/zoi-i-zozp">
        <Text size="small" weight="bold" color="primary-c"><u>ZOI i ZOZP</u></Text>
      </a>
      <a href="/dokazana-kvaliteta">
        <Text size="small" weight="bold" color="primary-c"><u>Dokazana kvaliteta</u></Text>
      </a>
    </div>

    <div class="col-3 col-xs-6">
      <Text size="small" weight="bold" color="primary-c">O Bioinspekt d.o.o.</Text>
      <Margin size=".5" />
      <a href="/o-nama">
        <Text size="small" weight="bold" color="primary-c"><u>O nama</u></Text>
      </a>
      <a href="/misija-vizija-i-ciljevi">
        <Text size="small" weight="bold" color="primary-c"><u>Misija, vizija i ciljevi</u></Text>
      </a>
    </div>
  </div>
</footer>

<div class="subfooter">
  <div class="grid">
    <!--
        <div class="col-6 col-xs-12 flex jc-end ta-center legal">
          <a href="/legal/cookies-policy">
            <Text size="small" weight="bold" color="primary-c" align="center"><u>Cookies Policy</u></Text>
          </a>
          <div class="m-x-s" />
          <a href="/legal/privacy-statement">
            <Text size="small" weight="bold" color="primary-c" align="center"
            ><u>Privacy Statement</u></Text
            >
          </a>
        </div>

        <div class="col-6 col-xs-12 flex jc-start ta-center legal">
          <a href="/legal/terms-and-conditions">
            <Text size="small" weight="bold" color="primary-c" align="center"
            ><u>Terms & Conditions</u></Text
            >
          </a>
          <div class="m-x-s" />
          <a href="/legal/consent">
            <Text size="small" weight="bold" color="primary-c" align="center"><u>Consent</u></Text>
          </a>
        </div>
    -->

    <div class="col-12 ta-center">
      © 2023 Bioinspekt d.o.o. Sva prava pridržana. Za bilo kakva pitanja javite nam se na
      <a href="mailto:info.bioinspekt@gmail.com" style="display: inline-block">
        <u>info.bioinspekt@gmail.com</u>
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  footer {
    background-color: var(--primary);
    padding: 4rem 0;

    button {
      border: none;
      background: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
    a,
    button {
      display: block;
      margin-top: 0.25rem;
    }
  }

  .subfooter {
    padding: 1.5rem 0;

    img {
      width: 1.5rem;
    }
  }

  .legal {
    @media (max-width: 600px) {
      justify-content: center;
    }
  }
</style>
