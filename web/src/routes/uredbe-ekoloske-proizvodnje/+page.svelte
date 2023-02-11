<script>
  import Banner from '../../lib/Banner.svelte';
  import Text from '../../lib/Text.svelte';
  import Margin from '../../lib/Margin.svelte';
</script>

<Banner>
  Uredbe ekološke proizvodnje
</Banner>

<div class="grid">
  <div class="col-12">
    <Text>
      Poštovani Klijenti,
      <br><br>
      Obavještavamo Vas da nova izdanja Uredbi i izmjene možete naći u pročišćenim tekstovima ispod. Na prvoj stranici pročišćenih tekstova podebljanim slovima (npr. <b>M22</b>) označen je promijenjeni dio Uredbe a nadalje u pročišćenom testu ispred svakog članka ili dijela Uredbe koji je mijenjan nalazi se ta ista oznaka aktualne promjene.
    </Text>

    <Margin size=".5" />

    <Text>
      Ova informacija dana Vam je radi lakšeg snalaženja unutar pročišćenog teksta Uredbe,
    </Text>

    <Margin size=".5" />

    <Text>
      S poštovanjem,
    </Text>

    <Text>
      Vaš <b>Bioinspekt</b>
    </Text>

    <Margin size="2" />

    <Text>
      <a href="docs/uredbe-ekoloske-proizvodnje/uredba-2018-848.docx">
        UREDBA (EU) 2018/848 EUROPSKOG PARLAMENTA I VIJEĆA
      </a>
      od 30. svibnja 2018. o ekološkoj proizvodnji i označivanju ekoloških proizvoda te stavljanju izvan snage Uredbe Vijeća(EZ) br. 834/2007
    </Text>

    <Margin size="1" />

    <Text>
      <a href="docs/uredbe-ekoloske-proizvodnje/provedbena-uredba-komisije-eu-2020-464.pdf" target="_blank" rel="noreferrer">
        PROVEDBENA UREDBA KOMISIJE (EU) 2020/464
      </a>
      оd 26. ožujka 2020. o utvrđivanju određenih pravila za primjenu Uredbe (EU) 2018/848 Europskog parlamenta i Vijeća u pogledu dokumenata potrebnih za retroaktivno priznavanje prijelaznog razdoblja u svrhu prelaska na ekološku proizvodnju, proizvodnje ekoloških proizvoda i informacija koje trebaju pružati države članice
    </Text>

    <Margin size="1" />

    <Text>
      <a href="docs/uredbe-ekoloske-proizvodnje/delegirana-uredba-komisije-eu-2020-1794.pdf" target="_blank" rel="noreferrer">
        DELEGIRANA UREDBA KOMISIJE (EU) 2020/1794
      </a>
      оd 16. rujna 2020. o izmjeni dijela I. Priloga II. Uredbi (EU) 2018/848 Europskog parlamenta i Vijeća u pogledu upotrebe biljnog reprodukcijskog materijala iz prijelaznog razdoblja i neekološkog biljnog reprodukcijskog materijala
    </Text>

    <Margin size="1" />

    <Text>
      <a href="docs/uredbe-ekoloske-proizvodnje/delegirana-uredba-komisije-eu-2020-427.pdf" target="_blank" rel="noreferrer">
        DELEGIRANA UREDBA KOMISIJE (EU) 2020/427
      </a>
      оd 13. siječnja 2020. o izmjeni Priloga II. Uredbi (EU) 2018/848 Europskog parlamenta i Vijeća u pogledu određenih detaljnih pravila proizvodnje za ekološke proizvode
    </Text>

    <Margin size="1" />

    <Text>
      <a href="docs/uredbe-ekoloske-proizvodnje/delegirana-uredba-komisije-eu-2020-2146.pdf" target="_blank" rel="noreferrer">
        DELEGIRANA UREDBA KOMISIJE (EU) 2020/2146
      </a>
      оd 24. rujna 2020. o dopuni Uredbe (EU) 2018/848 Europskog parlamenta i Vijeća u pogledu pravila proizvodnje u izvanrednim slučajevima u ekološkoj proizvodnji
    </Text>

    <Margin size="1" />

    <Text>
      <a href="docs/uredbe-ekoloske-proizvodnje/provedbena-uredba-komisije-eu-2021-279.pdf" target="_blank" rel="noreferrer">
        PROVEDBENA UREDBA KOMISIJE (EU) 2021/279
      </a>
      оd 22. veljače 2021. kojom se utvrđuju detaljna pravila za provedbu Uredbe (EU) 2018/848 Europskog parlamenta i Vijeća o kontrolama i drugim mjerama kojima se osiguravaju sljedivost i sukladnost u ekološkoj proizvodnji i označavanju ekoloških proizvoda
    </Text>

    <Margin size="1" />

    <Text>
      <a href="docs/uredbe-ekoloske-proizvodnje/delegirana-uredba-komisije-eu-2021-642.pdf" target="_blank" rel="noreferrer">
        DELEGIRANA UREDBA KOMISIJE (EU) 2021/642
      </a>
      оd 30. listopada 2020. o izmjeni Priloga III. Uredbi (EU) 2018/848 Europskog parlamenta i Vijeća u pogledu određenih informacija koje je potrebno navesti pri označivanju ekoloških proizvoda
    </Text>
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
  <title>Uredbe ekološke proizvodnje - Bioinspekt</title>
</svelte:head>