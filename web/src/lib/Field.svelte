<script lang="ts">
  export let type:
    | 'text'
    | 'number'
    | 'date'
    | 'checkbox'
    | 'email'
    | 'password'
    | 'search'
    | 'select' = 'text';
  export let name = '';
  export let label: string;
  export let placeholder: string = '';
  export let autocomplete: string = '';
  export let required = false;
  export let value = '';
</script>

<div>
  {#if label}
    <div class="label">
      <span>{label}</span>
    </div>
  {/if}

  {#if $$slots.description}
    <div class="description">
      <slot name="description" />
    </div>
  {/if}

  {#if $$slots.textarea}
    <div
      class:flex={$$slots.suffix}
      class="field textarea"
    >
      <textarea rows="6" {name} />
    </div>
  {:else if type === 'date'}
    <div
      class:flex={$$slots.suffix}
      class="field"
    >
      <input
        type="date"
        {name}
        {placeholder}
        {required}
        {autocomplete}
        on:input
        bind:value
      />
      <slot name="suffix" />
    </div>
  {:else if type === 'checkbox'}
    <div
      class:flex={$$slots.suffix}
      class="field"
    >
      <input
        type="checkbox"
        {name}
        {placeholder}
        {required}
        {autocomplete}
        on:input
        bind:value
      />
      <slot name="suffix" />
    </div>
  {:else if type === 'email'}
    <div
      class:flex={$$slots.suffix}
      class="field"
    >
      <input
        type="email"
        {name}
        {placeholder}
        {required}
        {autocomplete}
        on:input
        bind:value
      />
      <slot name="suffix" />
    </div>
  {:else if type === 'password'}
    <div
      class:flex={$$slots.suffix}
      class="field"
    >
      <input
        type="password"
        {name}
        {placeholder}
        {required}
        {autocomplete}
        on:input
        bind:value
      />
      <slot name="suffix" />
    </div>
  {:else if type === 'search'}
    <div
      class:flex={$$slots.suffix}
      class="field"
    >
      <input
        type="search"
        {name}
        {placeholder}
        {required}
        {autocomplete}
        on:input
        on:change
        bind:value
      />
      <slot name="suffix" />
    </div>
  {:else}
    <div
      class:flex={$$slots.suffix}
      class="field"
    >
      <input
        type="text"
        {name}
        {placeholder}
        {required}
        {autocomplete}
        on:input
        bind:value
      />
      <slot name="suffix" />
    </div>
  {/if}

  {#if $$slots.descriptionSuffix}
    <div class="description">
      <slot name="descriptionSuffix" />
    </div>
  {/if}
</div>

<style lang="scss">
  .label {
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 0.25rem;
  }

  .description {
    font-size: 0.875rem;
    padding-bottom: 0.25rem;
  }

  .field {
    display: inline-block;
    border: 1px solid var(--primary-l);
    border-radius: 4px;
    height: 3rem;
    overflow: hidden;
    background-color: #EBF3E1;
    transition: border 0.25s;

    @media (max-width: 600px) {
      width: 100%;
    }

    &.flex {
      display: flex;
      height: 100%;

      input {
        height: unset;
      }
    }

    &.textarea {
      display: flex;
      flex: 1;
      height: unset;
      width: 100%;

      textarea {
        padding: 1rem;
      }
    }

    &:hover {
      border-color: var(--primary);
    }

    &:focus-within {
      border-color: var(--accent);
      outline: 2px dashed var(--accent);
      outline-offset: 4px;
    }

    input,
    textarea {
      font-family: 'Sen', sans-serif;
      font-size: 1rem;
      margin: 0;
      padding: 0 1rem;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
    }
  }
</style>
