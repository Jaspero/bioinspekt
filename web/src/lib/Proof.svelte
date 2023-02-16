<script>
  import Button from './Button.svelte';
  import Text from './Text.svelte';
</script>

<div class="grid ai-center">
  <div class="card-container col-4">
    <div class="card">
      <div class="content">
        <img src="/icons/ucinkovitost.svg" alt="">
        <h2 style="line-height: 1.25">Učinkovitost</h2>

        <Text align="center" max="32">
          Obećani rezultati se ostvaruju dokazanim radnjama i procesima
        </Text>
      </div>
    </div>
  </div>

  <div class="card-container col-4">
    <div class="card">
      <div class="content">
        <img src="/icons/racionalnost.svg" alt="">
        <h2 style="line-height: 1.25">Racionalnost</h2>

        <Text align="center" max="32">
          Razumno i smireno pristupamo rješavanju vaših problema
        </Text>
      </div>
    </div>
  </div>

  <div class="card-container col-4">
    <div class="card">
      <div class="content">
        <img src="/icons/brzina.svg" alt="">
        <h2 style="line-height: 1.25">Brzina</h2>

        <Text align="center" max="32">
          Naše uslugu se isporučuju neusporedivim tempom
        </Text>
      </div>
    </div>
  </div>

  <div class="card-container col-4">
    <div class="card">
      <div class="content">
        <img src="/icons/upornost.svg" alt="">
        <h2 style="line-height: 1.25">Upornost</h2>

        <Text align="center" max="20">
          Nikad ne odustajemo od vas i vaših ciljeva
        </Text>
      </div>
    </div>
  </div>

  <div class="card-container col-4">
    <div class="card">
      <div class="content">
        <img src="/icons/dostupnost.svg" alt="">
        <h2 style="line-height: 1.25">Dostupnost</h2>

        <Text align="center" max="22">
          Na vašem raspolaganju u bilo koje doba dana
        </Text>
      </div>
    </div>
  </div>

  <div class="card-container col-4">
    <div class="card">
      <div class="content">
        <img src="/icons/dokazano.svg" alt="">
        <h2 style="line-height: 1.25">Dokazano</h2>

        <Text align="center" max="32">
          <a href="/docs/akreditacija.pdf" target="_blank" rel="noreferrer" class="fw-normal"><u>Preuzmi</u> odobrenu akreditaciju tvrtke Bioinspekt</a>
        </Text>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .card-container {
    text-align: center;

    @media (max-width: 600px) {
      text-align: left;
    }

    .card {
      display: block;
      border: 1px solid var(--primary-l);
      border-radius: 24px;
      padding: 2.5rem 2rem;

      @media (max-width: 900px) {
        padding: 2rem 0.5rem;
      }

      .content {
        h2 {
          max-width: 16ch;
          margin: 0 auto 0.75rem;

          @media (max-width: 600px) {
            position: relative;
            padding-left: 1.5rem;
            margin: 0 0 8px;
            width: 100%;
            max-width: 18ch;
            font-weight: 700;

            &::before {
              content: '';
              position: absolute;
              border-top: 3px solid var(--accent);
              top: 0.95rem;
              left: 0;
              width: 0.875rem;
            }
          }
        }

        h4 {
          max-width: 24ch;
          margin: 0 auto;

          @media (max-width: 600px) {
            padding-left: 1.5rem;
            margin: 0;
            font-size: 1rem;
          }
        }

        a {
          transition: .25s;

          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
</style>
