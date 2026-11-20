<script lang="ts">
  import {page} from '$app/stores';
  import { fly } from 'svelte/transition';


  import { tick } from 'svelte';

  let menu: boolean = false;
  let y
  let menuButton: HTMLButtonElement;
  let menuEl: HTMLElement;

  const links = [
    { href: '/', label: 'Početna' },
    { href: '/certifikacije', label: 'Certifikacije' },
    { href: '/zakonske-regulative', label: 'Regulative' },
    { href: '/obrasci', label: 'Obrasci' },
    { href: '/kontakt', label: 'Kontakt' }
  ];

  async function closeMenu(returnFocus = false) {
    menu = false;
    if (returnFocus) {
      await tick();
      menuButton?.focus();
    }
  }

  function onKeydown(e: KeyboardEvent) {
    if (menu && e.key === 'Escape') {
      closeMenu(true);
    }
  }

  /** Close the overlay menu when keyboard focus leaves the button and the menu, so focus never sits behind it */
  function onFocusOut(e: FocusEvent) {
    const next = e.relatedTarget as Node | null;
    if (menu && next && !menuEl?.contains(next) && !menuButton?.contains(next)) {
      closeMenu();
    }
  }
</script>

<div class="grid desktop">
  <div class="col-12 flex jc-center">
    <a href="/" aria-label="Bioinspekt - početna">
      <img src="/logo.png" srcset="/logo-200.webp 200w, /logo-300.webp 300w, /logo.png 811w" sizes="(max-width: 600px) 100px, 144px" alt="Bioinspekt" class="logo">
    </a>
  </div>
</div>

<header class="nav">
  <div class="grid jc-center h-full">
    <nav class="flex jc-center" aria-label="Glavna navigacija">
      {#each links as link}
        <a href={link.href} class:active={$page.url.pathname === link.href} aria-current={$page.url.pathname === link.href ? 'page' : undefined}>{link.label}</a>
      {/each}
    </nav>
  </div>
</header>

<div class="nav-mobile" class:shadow={y > 0}>
  <a href="/" aria-label="Bioinspekt - početna">
    <img src="/logo.png" srcset="/logo-200.webp 200w, /logo-300.webp 300w, /logo.png 811w" sizes="(max-width: 600px) 100px, 144px" alt="Bioinspekt" class="logo">
  </a>

  <button bind:this={menuButton} on:click={() => menu = !menu} on:focusout={onFocusOut} aria-label={menu ? 'Zatvori izbornik' : 'Otvori izbornik'} aria-expanded={menu} aria-controls="mobilni-izbornik">
    <img src={menu ? '/icons/close.svg' : '/icons/menu.svg'} alt="" height="40">
  </button>
</div>

{#if menu}
  <nav id="mobilni-izbornik" class="menu" aria-label="Glavna navigacija" bind:this={menuEl} on:focusout={onFocusOut} in:fly="{{ y: -200, duration: 200 }}">
    {#each links as link}
      <a href={link.href} class:active={$page.url.pathname === link.href} aria-current={$page.url.pathname === link.href ? 'page' : undefined} on:click={() => closeMenu()}>{link.label}</a>
    {/each}
  </nav>
{/if}

<svelte:window bind:scrollY={y} on:keydown={onKeydown} />

<style lang="scss">
  .logo {
    height: 144px;

    @media (max-width: 600px) {
      height: 100px;
    }
  }

  .desktop {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .nav {
    z-index: 5;
    position: sticky;
    top: 0;
    background-color: var(--primary);
    height: 4rem;
    width: 100%;

    @media (max-width: 600px) {
      display: none;
    }

    nav {
      height: 100%;

      a {
        display: flex;
        align-items: center;
        color: var(--primary-c);
        /* .75 gave 3.73:1 on the olive bar; .9 gives 4.58:1 (WCAG 1.4.3) */
        opacity: .9;
        font-size: 1.25rem;
        padding: 0 2rem;
        height: 100%;
        transition: .25s;

        @media (max-width: 900px) {
          font-size: 1rem;
        }

        &:hover {
          opacity: 1;
        }

        &:focus-visible {
          outline-color: var(--primary-c);
          outline-offset: -5px;
        }

        &.active {
          background-color: var(--primary-c);
          color: var(--primary);
          opacity: 1;

          &:focus-visible {
            outline-color: var(--primary);
          }
        }
      }
    }
  }

  .nav-mobile {
    z-index: 5;
    position: sticky;
    top: 0;
    display: none;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-c);
    padding: 1rem;

    @media (max-width: 600px) {
      display: flex;
    }

    &.shadow {
      box-shadow: 0 3px 6px rgba(0,0,0,.12);
    }

    button {
      padding: 1rem;
      background-color: var(--primary-l);
      border: none;
      cursor: pointer;
      border-radius: 1rem;
    }
  }

  .menu {
    z-index: 4;
    position: fixed;
    top: 124px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 124px);
    padding: 1rem;
    background-color: white;

    a {
      font-size: 3rem;
      transition: .35s;

      &.active {
        transform: translateX(2rem);
        color: var(--primary);
        text-decoration: underline;
      }
    }
  }
</style>