<div class="cta">
  <div class="image">
    <img
      src="images/field.jpg"
      srcset="images/field-640.webp 640w, images/field-960.webp 960w, images/field-1280.webp 1280w, images/field-1920.webp 1920w"
      sizes="100vw"
      alt=""
      loading="lazy"
      decoding="async"
    >
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
        /* .35 -> .55: white text at least 4.5:1 over the photo, measured from pixels (WCAG 1.4.3) */
        background-color: rgba(0,0,0,.55);
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

      :global(:focus-visible) {
        outline-color: #FFFFFF;
      }
    }
  }
</style>