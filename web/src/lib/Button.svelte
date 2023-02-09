<script lang="ts">
  export let id: string | null = null;
  export let size: 'tiny' | 'small' | 'normal' | 'medium' | 'large' = 'normal';
  export let type: 'button' | 'submit' = 'button';
  export let appearance: 'filled' | 'ghost' | 'outlined' | 'underlined' = 'filled';
  export let color: 'accent' | 'primary' | 'contrast' | 'primary-l' | '' = '';
  export let alignment: 'center' | 'between' = 'center';
  export let href: string = '';
  export let target: '_blank' | '_self' | '_parent' | '_top' | '' = '';
  export let rel:
    | 'alternate'
    | 'author'
    | 'bookmark'
    | 'external'
    | 'help'
    | 'license'
    | 'next'
    | 'nofollow'
    | 'noopener'
    | 'noreferrer'
    | 'prev'
    | 'search'
    | 'tag'
    | '' = '';
  export let loading = false;
  export let nowrap = false;
  export let width: string | null = null;
  export let wfull = false;
  export let disabled = false;

  $: properties = {
    id,
    class: [
      size == 'tiny' && 'fs-tiny',
      size == 'small' && 'fs-small',
      size == 'normal' && 'fs-normal',
      size == 'medium' && 'fs-medium',
      size == 'large' && 'fs-large',
      size == 'huge' && 'fs-huge',
      appearance == 'filled' && 'filled',
      appearance == 'ghost' && 'ghost',
      appearance == 'outlined' && 'outlined',
      appearance == 'underlined' && 'underlined',
      nowrap == true && 'ws-nw',
      color == 'accent' && 'accent',
      color == 'primary' && 'primary',
      color == 'primary-l' && 'primary-l',
      color == 'contrast' && 'contrast',
      wfull == true && 'w-full',
      alignment == 'center' && 'center',
      alignment == 'between' && 'between',
      loading == true && 'loading'
    ]
      .filter(Boolean)
      .join(' '),
    style: [width ? 'width: ' + width + 'px;' : undefined].join(' ')
  };
</script>

{#if href}
  <a
    {...properties}
    {href}
    {target}
    {rel}
    on:click>
    <span class="content">
      {#if $$slots.prefix}
        <span class="prefix">
          <slot name="prefix" />
        </span>
      {/if}

      <slot />

      {#if $$slots.suffix}
      <span class="suffix">
        <slot name="suffix" />
      </span>
    {/if}
    </span>
  </a>
{:else}
  <button
    {...properties}
    {type}
    {disabled}
    on:click>
    <span class="content">
      {#if $$slots.prefix}
        <span class="prefix">
          <slot name="prefix" />
        </span>
      {/if}

      <slot />

      {#if $$slots.suffix}
      <span class="suffix">
        <slot name="suffix" />
      </span>
    {/if}
    </span>
  </button>
{/if}

<style lang="scss">
  button,
  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    text-align: center;
    user-select: none;
    border-radius: 4px;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    transition: 0.25s;

    // Appearance: 'filled' | 'ghost' | 'outlined' | 'underlined'
    &.filled {
      background-color: var(--accent);
      color: var(--accent-c);

      &.primary {
        background-color: var(--primary);
        color: var(--primary-c);
      }
      &.accent {
        background-color: var(--accent);
        color: var(--accent-c);
      }
      &.primary-l {
        background-color: var(--primary-l);
        color: var(--primary-l-c)
      }

      &:hover {
        filter: grayscale(.35);
      }
    }
    &.ghost {
      background-color: transparent;
      color: var(--primary);
      opacity: 0.75;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        opacity: 1;
      }

      &.primary {
        color: var(--primary);
      }
      &.accent {
        color: var(--accent);
      }
      &.contrast {
        color: var(--accent-c);
      }
    }
    &.outlined {
      background-color: var(--accent-c);
      color: var(--accent);
      box-shadow: 0 0 0 2px var(--accent) inset;

      &:hover {
        background-color: var(--accent);
        color: var(--accent-c);
      }
    }
    &.underlined {
      color: var(--accent);
      background-color: transparent;
      padding: 0.75rem 0.5rem;

      &::before {
        content: '';
        position: absolute;
        bottom: 0.25rem;
        border-bottom: 2px solid var(--accent);
        width: calc(100% - 1rem);
      }

      &:hover {
        background-color: var(--accent);
        color: var(--accent-c);
      }
    }

    // Alignment: 'center' | 'between'
    &.center {
      justify-content: center;
      text-align: center;
    }
    &.between {
      justify-content: space-between;
      text-align: left;
    }

    // Button text
    .content {
      z-index: 1;
      position: relative;
      font-weight: 700;
      display: flex;
      line-height: 100%;
      align-items: center;
    }
  }

  // Prefix
  .prefix {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.75rem;
  }

  // Prefix
  .suffix {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.75rem;
  }
</style>
