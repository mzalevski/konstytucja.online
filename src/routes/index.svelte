<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(articles => {
        return { articles };
      });
  }
</script>

<script>
  import { fly, fade } from "svelte/transition";
  let y;
  let searchValue = "";
  let selectedChapter = "_";
  export let articles;
</script>

<style>
  .article {
    margin: 1em 0em;
    padding: 1em;
    border: dotted 1px;
    border-color: rgba(0, 0, 0, 0.3);
  }
  a {
    text-decoration: none;
  }

  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }

  #back-to-the-top-btn {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 2.5em;
    height: 2.5em;
    margin: 2em 1em;
    opacity: 0.5;
  }
  #back-to-the-top-btn img {
    size: 50%;
  }

  .chapter-pick select,
  .search input {
    box-sizing: content-box;
    margin: 12px 0px 16px 8px;
    border: dotted 1px;
    min-width: 15em;
    min-height: 2em;
    outline: none;
    padding: 0 15px 0 30px;
    border-color: rgba(0, 0, 0, 0.3);
    background-position-x: 0.2em;
    background-position-y: 0.2em;
    background-size: 20px;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(255, 255, 255);
  }

  .search input {
    background-image: url("/images/search.png");
  }

  .chapter-pick select {
    background-image: url("/images/chapter.png");
    cursor: pointer;
  }

  .search-bar {
    display: flex;
    justify-content: flex-end;
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
    .search-bar {
      display: block;
    }
    #back-to-the-top-btn {
      height: 25px;
      width: 25px;
    }
    .chapter-pick, .search {
      display: flex;
    }
    .chapter-pick select,
    .search input {
      margin: 0.2em 0;
      width: 100%;
    }
    .article {
      margin: 0.5em 0em;
    }
  }
</style>

<svelte:head>
  <title>Konstytucja</title>
</svelte:head>

<svelte:window bind:scrollY={y} />
<nav>
  <ul>
    <li>
      <a rel="prefetch" href="preambula">Preambuła</a>
    </li>
    <li>
      <a class="selected" rel="prefetch" href=".">Artykuły</a>
    </li>
    <li>
      <a rel="prefetch" href="info">Informacje</a>
    </li>
  </ul>
  <div class="search-bar">
    <div class="search">
      <input bind:value={searchValue} />
    </div>
    <div class="chapter-pick">
      <select bind:value={selectedChapter}>
        <option value="_">Wszystkie rozdziały</option>
        <option value="I">Rozdział I Rzeczpospolita</option>
        <option value="II">
          Rozdział II Wolności, prawa i obowiązki człowieka i obywatela
        </option>
        <option value="III">Rozdział III Źródła prawa</option>
        <option value="IV">Rozdział IV Sejm i Senat</option>
        <option value="V">
          Rozdział V Prezydent Rzeczypospolitej Polskiej
        </option>
        <option value="VI">
          Rozdział VI Rada Ministrów i administracja rządowa
        </option>
        <option value="VII">Rozdział VII Samorząd terytorialny</option>
        <option value="VIII">Rozdział VIII Sądy i Trybunały</option>
        <option value="IX">
          Rozdział IX Organy kontroli państwowej i ochrony prawa
        </option>
        <option value="X">Rozdział X Finanse publiczne</option>
        <option value="XI">Rozdział XI Stany nadzwyczajne</option>
        <option value="XII">Rozdział XII Zmiana Konstytucji</option>
        <option value="XIII">
          Rozdział XIII Przepisy przejściowe i końcowe
        </option>
      </select>
    </div>
  </div>
</nav>

{#each articles as article}
  {#if article.html.toLowerCase().includes(` ${searchValue.toLowerCase()}`)}
    {#if article.chapter['id'] === selectedChapter || selectedChapter === '_'}
      <a rel="prefetch" href="/{article.slug}">
        <div id={article.slug} class="article">
          <strong>{article.title}</strong>
          <span>({article.chapter['id']} {article.chapter['title']})</span>
          {@html article.html}
        </div>
      </a>
    {/if}
  {:else if article.title.toLowerCase().includes(searchValue.toLowerCase())}
    <a rel="prefetch" href="/{article.slug}">
      <div id={article.slug} class="article">
        <strong>{article.title}</strong>
        <span>({article.chapter['id']} {article.chapter['title']})</span>
        {@html article.html}
      </div>
    </a>
  {/if}
{/each}

{#if y > 300}
  <!-- ten transition się buguje -->
  <!-- transition:fly={{ y: 200, duration: 2000 }} -->
  <button id="back-to-the-top-btn" on:click={() => window.scroll(0, 0)}>
    <img src="angle-double-up-solid.svg" alt="" />
  </button>
{/if}
