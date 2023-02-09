<div class="hero">
  <img src="images/hero1.jpg" alt="">
</div>

<style lang="scss">
  .hero {
    position: relative;
    min-height: calc(100vh - 18rem);

    &::after {
      content: '';
      z-index: 1;
      position: absolute;
      background-color: rgba(0,0,0,.15);
      width: 100%;
      height: 100%;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>