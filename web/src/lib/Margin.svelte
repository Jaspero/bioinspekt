<script lang="ts">
  export let size: string;
</script>

<div style={size ? 'height:' + size + 'rem;' : undefined} />
