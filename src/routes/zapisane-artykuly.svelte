<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((articles) => {
        return { articles };
      });
  }
</script>

<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";
  import { isMobile } from "./_helpers";
  import Article from "../components/Article.svelte";

  export let articles;

  let eventManager;
  let showDropdown = false;
  let favoriteArticles = [];

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/");
  };

  const getFavoritesFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("favorites") || []);
  };

  onMount(() => {
    favoriteArticles = articles.filter((a) =>
      getFavoritesFromLocalStorage().includes(a.slug)
    );

    prefetch("/");
    if (isMobile()) {
      eventManager = new EventManager(document.documentElement, {
        touchAction: "pan-y",
      });
      eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });

  onDestroy(() => {
    if (isMobile()) {
      eventManager.off({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });
</script>

<svelte:head>
  <title>Zapisane artykuły</title>
  <meta
    name="description"
    content="Ulubione o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r."
  />
  <meta
    name="keywords"
    content="konstytucja, ulubione, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat"
  />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<div class="mt-4" in:fade={{ duration: 3000 }}>
  {#if favoriteArticles.length > 0}
    <h1
      class="text-lg font-thin sm:text-xl lg:text-2xl xl:text-3xl"
      in:fly={{ x: -50, duration: 1000 }}
    >
      Zapisane artykuły
    </h1>
    {#each favoriteArticles as article}
      <Article {...article} />
    {/each}
  {:else}
    <div
      in:fly={{ y: 50, duration: 1000 }}
      class="flex flex-col justify-center text-center h-162 font-bold text-gray-400 text-3xl"
    >
      Brak zapisanych artykułów
    </div>
  {/if}
</div>
