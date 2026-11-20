<script>
  import Margin from './Margin.svelte';
</script>

<div class="hero">
  <img
    src="images/hero1.jpg"
    srcset="images/hero1-640.webp 640w, images/hero1-960.webp 960w, images/hero1-1280.webp 1280w, images/hero1-1920.webp 1920w"
    sizes="100vw"
    alt=""
    fetchpriority="high"
    decoding="async"
  >
  <div class="grid ai-center">
    <div class="col-9 col-s-12">
      <div class="hero-topic ff-cinzel">
        BIOINSPEKT D.O.O.
      </div>
      <h1 class="hero-title ff-cinzel">
        PRVI U HRVATSKOJ ZA KONTROLU I CERTIFICIRANJE EKOLOŠKIH PROIZVODA
      </h1>
      <Margin size="1" />
      <div class="hero-subtitle">
        Postanite jedni od rijetkih sa ekološkom certifikacijom u Hrvatskoj
      </div>
      <Margin size="1.25" />
      <div class="hero-cta">
        <a href="/kontakt">KONTAKTIRAJTE NAS</a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .grid {
    z-index: 2;
    position: relative;
    min-height: calc(100vh - 239px);

    @media (max-width: 1280px) {
      min-height: calc(100vh - 227px);
    }
  }

  .hero {
    position: relative;
    min-height: calc(100vh - 239px);

    @media (max-width: 1280px) {
      min-height: calc(100vh - 227px);
    }

    &::after {
      content: '';
      top: 0;
      z-index: 1;
      position: absolute;
      /* .4 -> .5: text over the photo is at least 3.39:1 (large text) measured from pixels (WCAG 1.4.3) */
      background-color: rgba(0,0,0,.5);
      width: 100%;
      height: 100%;
    }

    &-topic {
      color: #c1ff5b;
      font-weight: bold;
      /* at least 19px bold (large text, 3:1) at every width; was 15px on phones */
      font-size: max(1.25rem, 19px);
      letter-spacing: 4px;
    }

    &-title {
      color: #c1ff5b;
      font-weight: bold;
      font-size: 2.5rem;
      line-height: 1.25;
    }

    &-subtitle {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 1.75rem;
      max-width: 36ch;
    }

    &-cta {
      a:focus-visible {
        outline-color: #FFFFFF;
      }

      a {
        display: inline-block;
        font-size: 1.5rem;
        background-color: var(--primary-l);
        padding: 1rem 3rem;
        cursor: pointer;
        border-radius: .5rem;
        transition: .25s;

        &:hover {
          background-color: var(--primary);
          color: var(--primary-c);
        }
      }
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>