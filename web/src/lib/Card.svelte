<div class="card">
  <slot></slot>
</div>

<style>
  .card {
    background-color: var(--bg);
    padding: 1rem;
    border-radius: .5rem;
    border: 1px solid rgba(0,0,0,.06);
    box-shadow: 0 3px 6px rgba(0,0,0,.16);
  }
</style>