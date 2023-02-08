<script lang="ts">
  import { fly } from 'svelte/transition';
  import {browser} from '$app/environment';

  export let menu = false;
  export let pathname: string;
  const links = [
    {
      href: '/o-nama',
      label: 'O nama',
      type: 'link'
    },
    {
      label: 'Certifikacije',
      type: 'nested',
      inner: [
        {
          label: 'Dunav Soja',
          href: '/dunav-soja',
        },
        {
          label: 'Bez GMO',
          href: '/bez-gmo',
        },
        {
          label: 'ZOI i ZOZP',
          href: '/zoi-i-zdzp',
        },
        {
          label: 'Dokazana kvaliteta',
          href: '/dokazana-kvaliteta'
        }
      ]
    },
    {
      label: 'Regulative',
      type: 'nested',
      inner: [
        {
          label: 'Uredbe ekološke proizvodnje',
          href: '/uredbe-ekoloske-proizvodnje',
        },
        {
          label: 'Poticaji',
          href: '/poticaji',
        },
        {
          label: 'Eko znak EU',
          href: '/eko-znak-eu',
        },
        {
          label: 'Eko znak HR',
          href: '/eko-znak-hr',
        },
      ]
    },
    {
      href: '/obrasci',
      label: 'Obrasci',
      type: 'link'
    },
    {
      href: '/kontakt',
      label: 'Kontakt',
      type: 'link'
    }
  ];

  let nested: null | Array<{
    label: string;
    href: string;
  }>;
  let subMenuEl: HTMLDivElement;
  let link:
    | {
    href: string | RegExp;
    label?: string;
    type?: string;
    color?: string;
    hidden?: boolean;
  }
    | undefined;
  let open: boolean;

  function windowClick(event: PointerEvent) {
    if (!subMenuEl) {
      return;
    }

    if (!subMenuEl.contains(event.target as HTMLElement)) {
      nested = null;
    }
  }

  $: if (browser) {
    if (open) {
      document.body.classList.add('o-y-hidden');
      window.scrollTo(0, 0);
    } else if (open === false) {
      document.body.classList.remove('o-y-hidden');
    }
  }

  function closeMenu() {
    if (menu == true) {
      menu = false;
    }
  }
</script>

<header>
  <div class="nav-grid">
    <a href="/" class="logo-wrapper" on:click={closeMenu}>
      <span class="logo">Bioinspekt</span>
    </a>

    <nav>
      {#each links as link}
        {#if !link.hidden}
          {#if link.type === 'link'}
            <a href={link.href} class:active={pathname === link.href}>
              <span>
                {link.label}
              </span>
            </a>
          {:else}
            <button class="menu-toggle" on:click|stopPropagation={() => (nested = link.inner)}>
              <span>
                {link.label}
              </span>
            </button>
          {/if}
        {/if}
      {/each}
    </nav>
  </div>
</header>

{#if nested}
  <div class="nested-menu" bind:this={subMenuEl} transition:fly="{{ x: 200, duration: 250 }}">
    <div class="nested-menu-grid">
      <nav>
        {#each nested as link}
          <a href={link.href} on:click={() => (nested = null)}>
            {link.label}
          </a>
        {/each}
      </nav>
    </div>
  </div>
{/if}

<svelte:window on:click={windowClick} />

<style lang="scss">
  header {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    color: var(--primary-c);

    .nav-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      max-width: 1400px;
      width: 100%;
      height: 100%;
      padding: 1rem .75rem;

      .logo {
        font-family: 'Cinzel', serif !important;
        font-weight: 600;
        font-size: 2rem;
        letter-spacing: 3px;
        /*border-radius: 50%;
        height: 100%;

        &-wrapper {
          background-color: white;
          padding: .5rem;
          height: 100%;
          border-radius: 50%;
        }*/
      }
    }

    nav {
      display: flex;
      align-items: center;

      a, button {
        position: relative;
        display: inline-block;
        font-size: 1.25rem;
        padding: 1rem 1.5rem;
        margin: 0;
        background-color: transparent;
        border: none;
        color: var(--primary-c);
        cursor: pointer;
        font-family: 'Cinzel', serif;
        font-weight: 600;

        &:hover span::after {
          transform: translateX(-50%);
        }

        span {
          position: relative;
          display: block;
          overflow: hidden;

          &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(150%);
            width: 100%;
            border-bottom: 4px solid var(--primary-c);
            transition: .35s;
          }
        }
      }
    }
  }

  .nested-menu {
    display: flex;
    z-index: 2;
    position: fixed;
    top: 94px;
    width: 100%;

    &-grid {
      display: flex;
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;

      nav {
        display: flex;
        margin-left: auto;
        padding: 1rem;
        background-color: white;
        border-radius: 1rem;

        a {
          font-family: 'Cinzel', serif;
          border-radius: .5rem;
          padding: 1rem 1rem;
          font-weight: 600;
          background-color: transparent;
          transition: .25s;

          &:hover {
            background-color: rgba(0,0,0,.04);
          }
        }
      }
    }
  }
</style>
