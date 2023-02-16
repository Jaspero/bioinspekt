<script>
  import Text from '../../lib/Text.svelte';
</script>

<div class="grid">
  <div class="col-12">
    <Text>
      Dragi budući ekolozi!!!

      U želji da Vam olakšamo snalaženje u području ekološke proizvodnje, napravili smo nekoliko smjernica, koje obilježavaju ovakav vid proizvodnje.

      Za sve nejasnoće i pitanja sa kojima se možete susresti prelaskom na ekološku proizvodnju, možete potražiti odgovor na našim stranicama:
      kako se upisati u Upisnik ekoloških proizvođača, komu se obratiti, sve smo Vam što jednostavnije, a opet dovoljno jasno naveli u koracima do eko znaka?

      Jasno, bude li potrebe za dodatnim savjetima, možete nas također kontaktirati na tel.:

      031/204-620 i 031/213-658 ured tvrtke (sve osoblje)

      091/11234-65 voditelj odjela za vrednovanje (kontrolu) -
      Marko Grgošević

      099/600-35-46 kontrolor – Tomislav Bošnjak

      099/367-69-38 kontrolor – Dražen Kraus

      099/367-69-39 kontrolor – Mario Štrok

      099/589-81-00 kontrolor – Davor Lamešić

      099/526-03-66 kontrolor – Mario Zlatarić

      099/526-03-77 kontrolor – Viktor Tomeš

      091/11234-62 direktor-voditelj certifikacijske sheme -
      Berislav Vrkljan

      091/11234-61 direktor sustava upravljanja certifikacijskog tijela -
      Dubravko Kupčinovac

      ili nas pak posjetiti na adresi:
      Bioinspekt d.o.o., Đakovština 2, 31 000 Osijek.

      Ako se budete pridržavali svega navedenog, pred nama slijedi vrlo ugodna suradnja!!!


    </Text>
  </div>
</div>

<svelte:head>
  <title>O nama - Bioinspekt</title>
</svelte:head>

<style lang="scss">
  .grid {
    max-width: 900px;
    padding: 6rem 0;
  }

  .card {
    display: flex;
    overflow: hidden;
    background-color: var(--bg);
    border-radius: .5rem;
    border: 1px solid rgba(0,0,0,.08);

    &:hover {
      .card-content-icon {
        transform: translateX(1rem);
      }
    }

    &-image {
      height: 75px;
    }

    &-content {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;

      &-icon {
        transition: .25s;
      }
    }
  }
</style>