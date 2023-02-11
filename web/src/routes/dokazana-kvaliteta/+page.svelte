<script>
  import Banner from '../../lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';
</script>

<Banner>
  Dokazana Kvaliteta Hrvatska
</Banner>

<div class="grid">
  <div class="col-12">
    <Text>
      Ministarstvo poljoprivrede uspostavlja dobrovoljni nacionalni sustav kvalitete poljoprivrednih i prehrambenih proizvoda - Dokazana kvaliteta radi postizanja još veće prepoznatljivosti i promidžbe domaćih poljoprivrednih i prehrambenih proizvoda i to putem jedne, jedinstvene prepoznatljive oznake
    </Text>

    <Margin size=".5" />

    <Text>
      Nacionalni sustav kvalitete osmišljen je kako bi se dodatno označilo poljoprivredne i prehrambene proizvode više kvalitete odnosno proizvode s posebnim karakteristikama unutar pojedinih sektora, između ostalih, mlijeka, mesa, voća, i njihovih proizvoda. Naglasak sustava je na označavanju proizvoda sa dodanom vrijednosti temeljenoj na dodanoj kvaliteti proizvoda koja proizlazi iz različitih čimbenika koji se odnose na način proizvodnje, prerade, kvalitetu sirovine ili konačnog proizvoda, a temelje se na objektivnim i mjerljivim i kriterijima. Osim informiranja potrošača o dodanoj vrijednosti proizvoda ovaj sustav štiti i proizvođače od nepoštenih praksi.
    </Text>

    <Margin size="2" />

    <Text weight="bold">
      Za certifikaciju svojih proizvoda nacionalnom oznakom Dokazana kvaliteta ispunite obrazac
    </Text>

    <Margin size=".5" />

    <a href="docs/ZAH-PV-Z-2-050721_Obr_Zah_kont_i_cert_ZOI_ZOZP_DK.doc">
      <Text>
        Kliknite tu da bi ste preuzeli obrazac
      </Text>
    </a>

    <Margin size="2" />

    <Text>
      Za više informacije posjetite:
    </Text>

    <a href="https://poljoprivreda.gov.hr/istaknute-teme/hrana-111/oznake-kvalitete/dokazana-kvaliteta/4226" target="_blank" rel="noreferrer">
      <Text>
        https://poljoprivreda.gov.hr/istaknute-teme/hrana-111/oznake-kvalitete/dokazana-kvaliteta/4226
      </Text>
    </a>

    <Margin size="3" />

    <img src="images/dokazana-kvaliteta.jpeg" alt="biosuisse organic" height="100">
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
  <title>Dokazana Kvaliteta Hrvatska - Bioinspekt</title>
</svelte:head>