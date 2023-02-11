<script lang="ts">
  export let align: 'left' | 'center' | 'right' = 'left';
  export let size: 'tiny' | 'small' | 'normal' | 'medium' | 'large' | 'huge' = 'normal';
  export let weight: 'normal' | 'bold' = 'normal';
  export let color:
    | 'default'
    | 'default-lighter'
    | 'primary'
    | 'primary-contrast'
    | 'accent'
    | 'accent-contrast'
    | 'accent-c'
    | 'success'
    | 'error' = 'default';
  export let max: string | null = null;
  export let lineHeight: string | null = null;

  $: properties = {
    class: [
      weight == 'normal' && 'fw-normal',
      weight == 'bold' && 'fw-bold',
      align == 'left' && 'ta-left',
      align == 'right' && 'ta-right',
      align == 'center' && 'ta-center m-x-a',
      size == 'tiny' && 'fs-tiny',
      size == 'small' && 'fs-small',
      size == 'normal' && 'fs-normal',
      size == 'medium' && 'fs-medium',
      size == 'large' && 'fs-large',
      size == 'huge' && 'fs-huge',
      color == 'default' && 'c-default',
      color == 'default-lighter' && 'c-default-l',
      color == 'primary' && 'c-primary',
      color == 'primary-c' && 'primary-c',
      color == 'accent' && 'c-accent',
      color == 'accent-contrast' && 'c-accent-c',
      color == 'success' && 'success',
      color == 'error' && 'error'
    ]
      .filter(Boolean)
      .join(' '),
    style: [
      max ? 'max-width:' + max + 'ch;' : undefined,
      lineHeight ? 'line-height:' + lineHeight + ';' : undefined
    ].join(' ')
  };
</script>

<p {...properties}>
  <slot />
</p>
