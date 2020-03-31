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

<Nav segment={'articles'} />

<div class="flex justify-between">
  <a
    class="w-24 text-lg font-thin sm:text-xl hover:text-red-new"
    rel="prefetch"
    href={$page.params.slug > 1 ? '#' + ($page.params.slug - 1) : '/'}>
    powrót
  </a>
  <h3 class="text-lg font-thin sm:text-xl">
    {article.chapter['id']} {article.chapter['title']}
  </h3>
  <div class="flex justify-end w-24">
    {#if $page.params.slug > 1}
      <a
        class="flex flex-col justify-center"
        rel="prefetch"
        href="/{parseInt($page.params.slug) - 1}"
        transition:fade={{ duration: 1000 }}
        on:click={() => {
          isDescriptionVisible = false;
          isDisqusVisible = false;
        }}>
        <svg
          class="w-5 h-5 h-6 text-gray-900 fill-current sm:w-6"
          viewBox="0 0 256 512">
          <path
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4
            24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7
            409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
        </svg>
      </a>
    {/if}
    {#if $page.params.slug < 243}
      <a
        class="flex flex-col justify-center"
        rel="prefetch"
        href="/{parseInt($page.params.slug) + 1}"
        transition:fade={{ duration: 1000 }}
        on:click={() => {
          isDescriptionVisible = false;
          isDisqusVisible = false;
        }}>
        <svg
          class="w-5 h-5 h-6 text-gray-900 fill-current sm:w-6"
          viewBox="0 0 256 512">
          <path
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
            0l-22.6-22.6c-9.4-9.4-9.4-24.6
            0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4
            24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
        </svg>
      </a>
    {/if}
  </div>
</div>

<h1
  class="pt-8 text-xl font-thin text-center sm:pt-10 md:pt-12 lg:pt-16
  sm:text-4xl">
  {article.title}
</h1>
<div class="py-4">
  <div
    in:fade={{ duration: 1000 }}
    class="max-w-3xl mx-auto leading-relaxed text-justify sm:text-xl">
    {@html article.html}
  </div>
  <div class="max-w-3xl mx-auto mt-8 border-t border-gray-200">
    {#if article.desc != ``}
      <div class="pt-8">
        <button on:click={() => (isDescriptionVisible = !isDescriptionVisible)}>
          {#if !isDescriptionVisible}
            <span class="pt-2 text-gray-600">
              wyjaśnienie treści artykułu | pokaż
            </span>
          {:else}
            <span class="pt-2 text-gray-600">
              wyjaśnienie treści artykułu | schowaj
            </span>
          {/if}
        </button>
        {#if isDescriptionVisible}
          <div
            class="text-justify"
            in:fly|fade={{ y: -40, duration: 1000 }}
            out:fly|fade={{ y: -40, duration: 200 }}>
            <h3>Wyjaśnienie treści artykułu</h3>
            {@html article.desc}
          </div>
        {/if}
      </div>
    {/if}

    <div class="pt-4">
      {#if !isDisqusVisible}
        <button class="pt-2 text-gray-600" on:click={() => showDisqus()}>
          dyskusja nad artykułem | pokaż
        </button>
      {:else}
        <button
          class="pt-2 text-gray-600"
          on:click={() => (isDisqusVisible = false)}>
          dyskusja nad artykułem | schowaj
        </button>
      {/if}
    </div>

    {#if isDisqusVisible}
      <div
        class="pt-4"
        id="disqus_thread"
        in:fly={{ y: -40, duration: 1000 }}
        out:fly={{ y: -40, duration: 200 }} />
    {/if}
  </div>
</div>
