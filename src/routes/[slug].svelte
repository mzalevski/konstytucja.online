<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { article: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { fly, fade } from "svelte/transition";
  import { stores } from "@sapper/app";
  const { page } = stores();
  let showComment = false;
  export let article;
</script>

<style>
  .back {
    width: 60px;
  }
  h3 {
    /* padding-bottom: 1em; */
    margin-top: 0.2em;
  }

  .big-article-nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
  }

  .small-article-nav {
    text-align: right;
    width: 60px;
  }

  .small-article-nav a img {
    width: 25px;
    height: 25px;
  }

  .content :global(p, li) {
    text-align: justify;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
    @media (max-width: 450px) {
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
    h3 {
      word-wrap: break-word;
      width: 200px;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>{article.title}</title>
</svelte:head>
<nav>
  <ul>
    <li>
      <a href="preambula">Preambuła</a>
    </li>
    <li>
      <a class="selected" rel="prefetch" href=".">Artykuły</a>
    </li>
    <li>
      <a href="info">Informacje</a>
    </li>
    <!-- <li><a href="https://github.com/mzalevski/konstytucja.online"><img src="github-brands.svg" alt=""/></a></li>
		<li><a href="mailto:konstytucja.online@gmail.com"><img src="envelope-regular.svg" alt=""/></a></li> -->
  </ul>
</nav>
<div class="big-article-nav">
  <a class="back" rel="prefetch" href="#{$page.params.slug}">powrót</a>
  <h3 class="chapter-name">
    {article.chapter['id']} {article.chapter['title']}
  </h3>
  <div class="small-article-nav">
    {#if $page.params.slug > 1}
      <a
        href="/{parseInt($page.params.slug) - 1}"
        transition:fade={{ duration: 1000 }}
        on:click={() => (showComment = false)}>
        <img src="angle-left-solid.svg" alt="" />
      </a>
    {/if}
    {#if $page.params.slug < 243}
      <a
        href="/{parseInt($page.params.slug) + 1}"
        transition:fade={{ duration: 1000 }}
        on:click={() => (showComment = false)}>
        <img src="angle-right-solid.svg" alt="" />
      </a>
    {/if}
  </div>
</div>

<h1>{article.title}</h1>

<div class="content">
  {@html article.html}

  {#if article.desc != ``}
    <button on:click={() => (showComment = !showComment)}>
      {#if !showComment}
        <span class="low-opacity">pokaż komentarz</span>
      {:else}
        <span class="low-opacity">schowaj komentarz</span>
      {/if}
    </button>
    {#if showComment}
      <div in:fly={{ y: 100, duration: 2000 }}
          out:fly={{ y: 100, duration: 1000 }}>
        <br />
        <br />
        <h3>Komentarz</h3>
        {@html article.desc}
      </div>
    {/if}
  {/if}
</div>
