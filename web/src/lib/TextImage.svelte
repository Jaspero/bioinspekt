<script lang="ts">
  export let inverted: boolean = false;
  export let src: string = '';
  export let alt: string = '';
</script>

<div class="container" class:inverted={inverted}>
  <div class="content">
    <slot></slot>
  </div>
  <div class="image">
    <img {src} {alt}>
  </div>
</div>

<style lang="scss">
  .container {
    width: 100%;
    display: flex;
    align-items: stretch;

    &.inverted {
      flex-direction: row-reverse;
    }

    .content {
      width: 50%;
      background-color: var(--primary-c);
    }

    .image {
      position: relative;
      width: 50%;
      height: 0;
      padding-bottom: 50%;

      img {
        position: absolute;
        width: 100%;
        height: 100% ;
      }
    }
  }
</style>