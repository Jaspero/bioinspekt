<script lang="ts">
  import {page} from '$app/stores';
  import { fly } from 'svelte/transition';


  let menu: boolean = false;
  let y
</script>

<div class="grid desktop">
  <div class="col-12 flex jc-center">
    <a href="/">
      <img src="/logo.png" alt="" class="logo">
    </a>
  </div>
</div>

<header class="nav">
  <div class="grid jc-center h-full">
    <nav class="flex jc-center">
      <a href="/" class:active={$page.url.pathname === '/'}>Početna</a>
      <a href="/certifikacije" class:active={$page.url.pathname === '/certifikacije'}>Certifikacije</a>
      <a href="/zakonske-regulative" class:active={$page.url.pathname === '/zakonske-regulative'}>Regulative</a>
      <a href="/obrasci" class:active={$page.url.pathname === '/obrasci'}>Obrasci</a>
      <a href="/kontakt" class:active={$page.url.pathname === '/kontakt'}>Kontakt</a>
    </nav>
  </div>
</header>

<div class="nav-mobile" class:shadow={y > 0}>
  <a href="/">
    <img src="/logo.png" alt="" class="logo">
  </a>

  <button on:click={() => menu = !menu}>
    <img src={menu ? '/icons/close.svg' : '/icons/menu.svg'} alt="" height="40">
  </button>
</div>

{#if menu}
  <div class="menu" in:fly="{{ y: -200, duration: 200 }}">
    <a href="/" class:active={$page.url.pathname === '/'} on:click={() => menu = false}>Početna</a>
    <a href="/certifikacije" class:active={$page.url.pathname === '/certifikacije'} on:click={() => menu = false}>Certifikacije</a>
    <a href="/zakonske-regulative" class:active={$page.url.pathname === '/zakonske-regulative'} on:click={() => menu = false}>Regulative</a>
    <a href="/obrasci" class:active={$page.url.pathname === '/obrasci'} on:click={() => menu = false}>Obrasci</a>
    <a href="/kontakt" class:active={$page.url.pathname === '/kontakt'} on:click={() => menu = false}>Kontakt</a>
  </div>
{/if}

<svelte:window bind:scrollY={y} />

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
        opacity: .75;
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

        &.active {
          background-color: var(--primary-c);
          color: var(--primary);
          opacity: 1;
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