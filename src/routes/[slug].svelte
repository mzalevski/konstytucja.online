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

  export let article;

  const { page } = stores();

  let isDescriptionVisible = false;
  let isDisqusVisible = false;

  const showDisqus = () => {
    let d = document,
      s = d.createElement("script");
    s.src = "https://konstytucja.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);

    isDisqusVisible = true;
  };

  onMount(() => {
    const observer = new MutationObserver(mutations => {
      for (let mut of mutations) {
        if (mut.removedNodes[0] == undefined) {
          continue;
        }
        if (mut.removedNodes[0].dir === "ltr") {
          window.scrollTo(0, document.body.scrollHeight);
          observer.disconnect();
        }
      }
    });

    observer.observe(document.getElementById("extra-info"), {
      attributes: false,
      childList: true,
      subtree: true
    });

    if (sessionStorage.getItem("fromDyskusja")) {
      sessionStorage.removeItem("fromDyskusja");
      showDisqus();
    }

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
<div>
  <div class="flex justify-between h-8">
    <a
      class="w-24 font-thin sm:text-lg sm:text-xl hover:text-red-new"
      rel="prefetch"
      href={$page.params.slug > 1 ? '#' + ($page.params.slug - 1) : '/'}>
      powrót
    </a>
    <h3 class="font-thin text-center sm:text-lg sm:text-xl">
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
            viewBox="0 0 20 20">
            <path
              d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
              c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
              z" />
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
            class="w-5 h-5 h-6 ml-3 text-gray-900 fill-current sm:w-6"
            viewBox="0 0 20 20">
            <path
              d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
              c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z" />
          </svg>
        </a>
      {/if}
    </div>
  </div>

  <h1
    class="pt-8 text-xl font-thin text-center sm:pt-10 md:pt-12 lg:pt-16 sm:text-4xl">
    {article.title}
  </h1>
  <div class="py-4">
    <div
      in:fade={{ duration: 1000 }}
      class="max-w-3xl mx-auto leading-relaxed text-justify sm:text-xl">
      {@html article.html}
    </div>
    <div
      id="extra-info"
      class="max-w-3xl mx-auto mt-8 border-t border-gray-200">
      {#if article.desc != ``}
        <div class="pt-8">
          <button
            on:click={() => (isDescriptionVisible = !isDescriptionVisible)}>
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
</div>
