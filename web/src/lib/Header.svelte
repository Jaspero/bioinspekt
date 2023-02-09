<script>
  import {page} from '$app/stores';
</script>
<div class="grid">
  <div class="col-12 flex jc-center">
    <img src="logo.png" alt="" class="logo">
  </div>
</div>

<header>
  <div class="grid jc-center h-full">
    <nav class="flex jc-center">
      <a href="/" class:active={$page.url.pathname === '/'}>Početna</a>
      <a href="/o-nama" class:active={$page.url.pathname === '/o-nama'}>O nama</a>
      <a href="/certifikacije" class:active={$page.url.pathname === '/certifikacije'}>Certifikacije</a>
      <a href="/regulative" class:active={$page.url.pathname === '/regulative'}>Regulative</a>
      <a href="/obrasci" class:active={$page.url.pathname === '/obrasci'}>Obrasci</a>
      <a href="/kontakt" class:active={$page.url.pathname === '/kontakt'}>Kontakt</a>
    </nav>
  </div>
</header>

<style lang="scss">
  .logo {
    height: 144px;
  }

  header {
    z-index: 5;
    position: sticky;
    top: 0;
    background-color: var(--primary);
    height: 2.5rem;
    width: 100%;

    nav {
      height: 100%;

      a {
        display: flex;
        align-items: center;
        color: var(--primary-c);
        opacity: .75;
        padding: 0 1rem;
        height: 100%;
        transition: .25s;

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
</style>