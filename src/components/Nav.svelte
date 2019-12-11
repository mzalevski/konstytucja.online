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
    width: calc(100% - 1em);
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
  @media (max-width: 1000px) {
    ul {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid rgba(160, 40, 40, 0.1);
      margin-bottom: 0.5em;
    }
    li a {
      margin: 0em 0;
      padding: 0.2em 0.5em;
      text-align: center;
    }
    nav {
      display: block;
      border-bottom: none;
      margin-bottom: 0.5em;
    }
  }
</style>

<nav>
  <ul>
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
      <a class:selected={segment === 'info'} rel="prefetch" href="info">
        Informacje
      </a>
    </li>
  </ul>
  <slot />
</nav>
