<div class="cta">
  <div class="image">
    <img src="images/field.jpg" alt="polje">
  </div>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style lang="scss">
  .cta {
    position: relative;

    .image {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 30%;

      @media (max-width: 900px) {
        padding-bottom: 50%;
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.35);
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 75%;
      }
    }

    .content {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      color: var(--primary-c);
    }
  }
</style>