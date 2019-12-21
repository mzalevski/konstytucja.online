<script>
  export let segment;
</script>

<style>
  a {
    /* otherwise the color is blue */
    text-decoration: none;
    color: inherit;
  }
  nav {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(160, 40, 40, 0.1);
    font-weight: 300;
    padding: 0 0em;
    margin: 0 auto;
    margin-bottom: 1em;
    max-width: 65em;
  }
  ul {
    flex-shrink: 0;
    margin: 0;
    padding: 0;
  }

  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }
  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;

    content: "";
    width: calc(100% - 0.9em);
    height: 2px;
    background-color: rgb(160, 40, 40);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 1em 1em 0em;
    display: block;
  }
  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }
  .logo-letter {
    font-family: "Alex Brush", cursive;
    font-size: 2.3em;
    font-weight: 700;
    padding: 0px 0.85em 0px 0.1em;
    color: rgb(160, 40, 40);
  }
  li {
    display: block;
    transition-duration: 0.5s;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    left: -2.8em;
    top: 3.3em;
    background-color: rgba(255, 255, 255, 0.9);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-bottom: solid 1.5px;
    border-color: rgb(160, 40, 40);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    text-align: center;
    display: block;
  }
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover,
  .dropdown-content a:focus {
    color: rgb(160, 40, 40);
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  @media (max-width: 1100px) {
    ul {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid rgba(160, 40, 40, 0.1);
      margin-bottom: 0.5em;
    }
    li a {
      text-align: center;
    }
    nav {
      display: block;
      border-bottom: none;
      margin-bottom: 0.5em;
    }
    .dropdown-content {
      left: -2.8em;
    }
  }
  @media (max-width: 500px) {
    .dropdown-content {
      left: -3.6em;
    }
    .logo-letter {
      padding-left: 4px;
      padding-right: 0.5em;
      padding-top: 0.24em;
      font-size: 1.8em;
    }
    a {
      padding-right: 4px;
      padding-left: 1px;
    }
    .selected::after {
      width: calc(100% - 0.35em);
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a class="logo-letter" rel="prefetch" href="/">Konstytucja</a>
    </li>
    <li>
      <a
        class:selected={segment === 'preambula'}
        rel="prefetch"
        href="preambula">
        Preambuła
      </a>
    </li>
    <li>
      <a class:selected={segment === undefined} rel="prefetch" href=".">
        Artykuły
      </a>
    </li>
    <li>
      <div class="dropdown">
        <a class:selected={segment === 'info'}>
          Informacje
        </a>
        <div class="dropdown-content">
          <a rel="prefetch" href="/legislacja">Proces legislacyjny</a>
          <a rel="prefetch" href="/slownik">Słownik pojęć</a>
          <a rel="prefetch" href="/app-mobile">Aplikacja - mobile</a>
          <a rel="prefetch" href="/app-desktop">Aplikacja - desktop</a>
          <a rel="prefetch" href="/inicjatywa">Inicjatywa</a>
          <a rel="prefetch" href="/patroni">Patroni</a>
        </div>
      </div>

    </li>
  </ul>
  <slot />
</nav>
