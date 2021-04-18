<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 800 && window.innerHeight <= 600;
  };
  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/");
  };

  onMount(() => {
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
  <title>Odpowiedzi</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r."
  />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat"
  />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl xl:text-3xl"
  in:fly={{ x: -50, duration: 1000 }}
>
  Odpowiedzi
</h1>
<div class="mt-4" in:fade={{ duration: 3000 }}>
  <div class="flex flex-col text-lg sm:flex-row sm:space-x-4">
    <a class="sm:w-1/12 hover:text-red-new" href="/91">Art. 91</a>
    <a
      class="underline sm:w-9/12 hover:text-red-new"
      href="/odpowiedzi/czy-umowa-miedzynarodowa-moze-stac-wyzej-od-konstytucji"
    >
      Czy ratyfikowana umowa międzynarodowa może stać wyżej od Konstytucji?
    </a>
    <a
      class="sm:w-2/12 hover:text-red-new"
      href="https://twitter.com/MichalChodorek"
    >
      adw. Michał Chodorek
    </a>
  </div>
</div>
