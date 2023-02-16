<script lang="ts">
  import Text from './Text.svelte';
</script>

<main>
  <div class="container">
    {#if $$slots.subtitle}
      <b>
        <slot name="subtitle" />
      </b>
    {/if}
    {#if $$slots.title}
      <div class="col-12">
        <Text size="huge" weight="bold">
          <slot name="title" />
        </Text>
      </div>
    {/if}
    {#if $$slots.content}
      <div class="content">
        <slot name="content" />
      </div>
    {/if}
  </div>
</main>

<style lang="scss">
  main {
    position: relative;
    display: flex;
    justify-content: center;

    .container {
      position: relative;
      padding-top: 3rem;
      padding-bottom: 3rem;
      text-align: left;

      b {
        display: block;
        text-align: center;

        @media (max-width: 600px) {
          padding-left: 24px;
          padding-right: 64px;
        }
      }
    }
  }
</style>
