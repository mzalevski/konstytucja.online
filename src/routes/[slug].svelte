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
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { stores, goto } from "@sapper/app";
  import Nav from "../components/Nav.svelte";
  const { page } = stores();
  let isDescriptionVisible = false;
  let isDisqusVisible = false;
  export let article;

  const showDisqus = () => {
    let d = document,
      s = d.createElement('script');
    s.src = 'https://konstytucja.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    isDisqusVisible = true;
  }

  onMount(() => {
    document.onkeydown = e => {
      if (e.keyCode === 37 && $page.params.slug > 1) {
        isDescriptionVisible = false;
        isDisqusVisible = false;
        goto(`/${parseInt($page.params.slug) - 1}`);
      } else if (e.keyCode === 39 && $page.params.slug < 243) {
        isDescriptionVisible = false;
        isDisqusVisible = false;
        goto(`/${parseInt($page.params.slug) + 1}`);
      }
    };

  });
</script>

<style>
  .low-opacity {
    color: rgba(0, 0, 0, 0.35);
  }
  :global(body.dark-mode) .low-opacity {
    color: rgba(255, 255, 255, 0.35);
  }
  .no-dots :global(li) {
      list-style-type: none;
  }
  h1 {
    font-size: 2em;
    text-align: center;
    margin: 1em;
  }
  .back {
    width: 60px;
  }
  h3 {
    margin-top: 0.2em;
  }

  .big-article-nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
  }

  .small-article-nav {
    width: 40px;
    padding-left: 20px;
    display: flex;
    justify-content: flex-end;
  }

  .small-article-nav a svg {
    width: 12.5px;
    height: 25px;
  }
  .left {
    padding-right: 10px;
  }
  .right {
    padding-left: 10px;
  }

  .content {
    border-bottom: 1px solid rgba(160, 40, 40, 0.1);
    padding-bottom: 1em;
    margin-bottom: 1em;
  }

  .content :global(div) {
    margin: 2em 0 2em 0;
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
  .content :global(a) {
    text-decoration: underline;
  }
  .content :global(.desc-author) {
    text-align: right;
    font-style: italic;
  }

  :global(body.dark-mode) svg {
    fill: white;
  }

  @media (max-width: 1100px) {
    .chapter-name {
      word-wrap: break-word;
      width: 200px;
      text-align: center;
    }
  }
</style>

<noscript>Włącz działanie skryptów, aby skorzystać ze strony.</noscript>

<svelte:head>
  <title>{article.title} Konstytucji RP</title>
  <link rel="canonical" href="https://konstytucja.online/{article.slug}" />
  <meta name="description" content="{article.title} Konstytucji RP" />
  <meta
    name="keywords"
    content="{article.title} konstytucji rp, konstytucja {article.slug}, art {article.slug},
    art. {article.title}, konstytucja, konstytucjarp, konstytucjaonline, online,
    prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał,
    prezydent, rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav />

<div class="big-article-nav">
  <a class="back" rel="prefetch" href="#{$page.params.slug}">powrót</a>
  <h3 class="chapter-name">
    {article.chapter['id']} {article.chapter['title']}
  </h3>
  <div class="small-article-nav">
    {#if $page.params.slug > 1}
      <a class="left"
        rel="prefetch"
        href="/{parseInt($page.params.slug) - 1}"
        transition:fade={{ duration: 1000 }}
        on:click={() => {
          isDescriptionVisible = false;
          isDisqusVisible = false;
        }}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
      </a>
    {/if}
    {#if $page.params.slug < 243}
      <a class="right"
        rel="prefetch"
        href="/{parseInt($page.params.slug) + 1}"
        transition:fade={{ duration: 1000 }}
        on:click={() => {
          isDescriptionVisible = false;
          isDisqusVisible = false;
        }}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
      </a>
    {/if}
  </div>
</div>

<h1>{article.title}</h1>

<div in:fade={{ duration: 1000 }} class="content no-dots">
  {@html article.html}
</div>


{#if article.desc != ``}
  <div class="content">
    <button on:click={() => (isDescriptionVisible = !isDescriptionVisible)}>
      {#if !isDescriptionVisible}
        <span class="low-opacity">wyjaśnienie treści artykułu | pokaż</span>
      {:else}
        <span class="low-opacity">wyjaśnienie treści artykułu | schowaj</span>
      {/if}
    </button>
    {#if isDescriptionVisible}
      <div style="art-desc" in:fade={{ duration: 1000 }} out:fade={{ duration: 500 }}>
        <h3>Wyjaśnienie treści artykułu</h3>
        {@html article.desc}
      </div>
    {/if}
  </div>
{/if}

{#if !isDisqusVisible}
  <button class="low-opacity" on:click={() => showDisqus()}>dyskusja nad artykułem | pokaż</button>
{:else}
  <button class="low-opacity" on:click={() => isDisqusVisible = false}>dyskusja nad artykułem | schowaj</button>
{/if}

{#if isDisqusVisible}
  <div id="disqus_thread" in:fly={{ y: 200, duration: 1000 }} out:fly={{ y: 100, duration: 500 }} />
{/if}
