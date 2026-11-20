<script lang="ts">
  export let inverted: boolean = false;
  export let src: string = '';
  export let alt: string = '';
  /** Optional responsive sources, e.g. WebP variants: "images/a-640.webp 640w, ..." */
  export let srcset: string | undefined = undefined;
</script>

<div class="container" class:inverted={inverted}>
  <div class="content">
    <slot></slot>
  </div>
  <div class="image">
    <img {src} {srcset} sizes="50vw" {alt} loading="lazy" decoding="async">
  </div>
</div>

<style lang="scss">
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    &:not(:first-child) {
      border-top: 1px solid var(--primary-l);
    }

    &.inverted {
      flex-direction: row-reverse;
    }

    .content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 50%;
      padding: 6rem 1rem;
      background-color: var(--primary-c);

      @media (max-width: 900px) {
        width: 100%;
        padding: 4rem 2rem;
      }
    }

    .image {
      position: relative;
      width: 50%;

      @media (max-width: 900px) {
        display: none;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>