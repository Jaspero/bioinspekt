<script lang="ts">
  import Text from './Text.svelte';
  import Margin from './Margin.svelte';

  const year = new Date().getFullYear();
</script>

<footer aria-label="Podnožje">
  <div class="grid">
    <!--<div class="col-12 flex jc-center fw-wrap">
      <img src="logo.png" alt="" class="logo">
      <div class="w-full">
        <Margin size="4" />
      </div>
    </div>-->

    <div class="col-3 col-xs-6">
      <h2 class="fs-small fw-bold primary-c">Vanjski linkovi</h2>
      <Margin size=".5" />
      <a href="https://www.apprrr.hr/" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Agencija za plaćanje u poljoprivredi</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
      </a>
      <a href="http://preglednik.arkod.hr/ARKOD-Web/#layers=OSNOVNI%20PROSTORNI%20PODACI,DOF-client,ZU-client,LPIS_FILTERED,LPIS_200,LPIS_210,LPIS_310,LPIS_320,LPIS_321,LPIS_410,LPIS_421,LPIS_422,LPIS_430,LPIS_450,LPIS_451,LPIS_490,LPIS_900,LPIS,SLOPE05,SLOPE510,SLOPE1015,SLOPE15,SLOPEnull,POP,POVS,GAEC7,Zasticena%20podrucja,Ptice,Leptiri,Kontinentalna%20regija,Mediteranska%20regija,Brdsko-planinska%20regija,3m%20Vodoza%C5%A1titni%20pojas,10m%20Vodoza%C5%A1titni%20pojas,Obiljezja%20krajobraza,Tocke,Linije,Poligoni,TT%202015,RP,GPP,BFO,SPEC&map_x=500000&map_y=4925000&map_sc=3657142" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>ARKOD preglednik</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
      </a>
      <a href="https://eur-lex.europa.eu/homepage.html" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>EUR-lex</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
      </a>
      <a href="https://poljoprivreda.gov.hr/pristup-informacijama/zakoni-i-propisi/ekoloska-4510/4510" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Ministarstvo poljoprivrede - ekološka proizvodnja</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
      </a>
      <a href="https://www.nn.hr/" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Narodne novine</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
      </a>
      <a href="https://commission.europa.eu/select-language?destination=/node/3192" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Organic farming - European Commission</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
      </a>
      <a href="https://en.wikipedia.org/wiki/Organic_farming" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Wiki - Ekološka poljoprivreda (EN)</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
      </a>
    </div>

    <div class="col-3 col-xs-6">
      <h2 class="fs-small fw-bold primary-c">Zakonske regulative</h2>
      <Margin size=".5" />
      <a href="/zakonske-regulative/uredbe-ekoloske-proizvodnje">
        <Text size="small" weight="bold" color="primary-c"><u>Uredbe ekološke proizvodnje</u></Text>
      </a>
      <a href="/zakonske-regulative/poticaji">
        <Text size="small" weight="bold" color="primary-c"><u>Poticaji</u></Text>
      </a>
      <a href="/zakonske-regulative/eko-znak-eu">
        <Text size="small" weight="bold" color="primary-c"><u>Eko znak EU</u></Text>
      </a>
      <a href="/zakonske-regulative/eko-znak-hr">
        <Text size="small" weight="bold" color="primary-c"><u>Eko znak HR</u></Text>
      </a>
    </div>

    <div class="col-3 col-xs-6">
      <h2 class="fs-small fw-bold primary-c">Certifikacije</h2>
      <Margin size=".5" />
      <a href="/certifikacije/bio-suisse-standard">
        <Text size="small" weight="bold" color="primary-c"><u>Bio Suisse standard</u></Text>
      </a>
      <a href="/certifikacije/dunav-soja-standard">
        <Text size="small" weight="bold" color="primary-c"><u>Dunav Soja standard</u></Text>
      </a>
      <a href="/certifikacije/bez-gmo-standard">
        <Text size="small" weight="bold" color="primary-c"><u>BEZ GMO standard</u></Text>
      </a>
      <a href="/certifikacije/zoi-i-zozp">
        <Text size="small" weight="bold" color="primary-c"><u>ZOI i ZOZP</u></Text>
      </a>
      <a href="/certifikacije/dokazana-kvaliteta-hrvatska">
        <Text size="small" weight="bold" color="primary-c"><u>Dokazana kvaliteta</u></Text>
      </a>
    </div>

    <div class="col-3 col-xs-6">
      <h2 class="fs-small fw-bold primary-c">Koraci do eko znaka</h2>
      <Margin size=".5" />
      <a href="/kontrola-i-certifikacija">
        <Text size="small" weight="bold" color="primary-c"><u>Obavijesti za klijente - kontrola i certifikacija</u></Text>
      </a>
      <a href="/docs/obavijest-1.pdf" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Obavijesti klijentima (1)</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
      </a>
      <a href="/docs/obavijest-2.pdf" target="_blank" rel="noreferrer">
        <Text size="small" weight="bold" color="primary-c"><u>Obavijesti klijentima (2)</u><span class="sr-only"> (otvara se u novom prozoru)</span></Text>
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
      © {year} Bioinspekt d.o.o. Sva prava pridržana. Za bilo kakva pitanja javite nam se na
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
      /* at least 24px tall touch targets (WCAG 2.5.8); was 15.8px + 4px gap */
      display: flex;
      align-items: center;
      min-height: 24px;
      margin-top: 0.125rem;
    }

    :global(:focus-visible) {
      outline-color: var(--primary-c);
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
