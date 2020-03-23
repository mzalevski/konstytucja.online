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
      s = d.createElement("script");
    s.src = "https://konstytucja.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
    isDisqusVisible = true;
  };

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
      <a
        class="left"
        rel="prefetch"
        href="/{parseInt($page.params.slug) - 1}"
        transition:fade={{ duration: 1000 }}
        on:click={() => {
          isDescriptionVisible = false;
          isDisqusVisible = false;
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path
            fill="currentColor"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4
            24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7
            409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
        </svg>
      </a>
    {/if}
    {#if $page.params.slug < 243}
      <a
        class="right"
        rel="prefetch"
        href="/{parseInt($page.params.slug) + 1}"
        transition:fade={{ duration: 1000 }}
        on:click={() => {
          isDescriptionVisible = false;
          isDisqusVisible = false;
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path
            fill="currentColor"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
            0l-22.6-22.6c-9.4-9.4-9.4-24.6
            0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4
            24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
        </svg>
      </a>
    {/if}
  </div>
</div>

<h1>{article.title}</h1>
<div class="art-body">
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
        <div
          style="art-desc"
          in:fade={{ duration: 1000 }}
          out:fade={{ duration: 500 }}>
          <h3>Wyjaśnienie treści artykułu</h3>
          {@html article.desc}
        </div>
      {/if}
    </div>
  {/if}

  {#if !isDisqusVisible}
    <button class="low-opacity" on:click={() => showDisqus()}>
      dyskusja nad artykułem | pokaż
    </button>
  {:else}
    <button class="low-opacity" on:click={() => (isDisqusVisible = false)}>
      dyskusja nad artykułem | schowaj
    </button>
  {/if}

  {#if isDisqusVisible}
    <div
      id="disqus_thread"
      in:fly={{ y: 200, duration: 1000 }}
      out:fly={{ y: 100, duration: 500 }} />
  {/if}
</div>
