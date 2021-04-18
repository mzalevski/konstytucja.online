<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";
  import { isMobile } from "../_helpers";

  let eventManager;
  let showDropdown = false;

  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/");
  };

  const onSwipeLeft = () => (showDropdown = true);

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
  <title>Nauka</title>
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
  Nauka
</h1>
<div
  class="flex flex-col mt-4 space-y-2 text-justify md:text-lg lg:text-xl"
  in:fade={{ duration: 3000 }}
>
  <a
    href="/nauka/ktory-artykul"
    class="flex flex-col max-w-xs p-2 border rounded cursor-pointer hover:bg-gray-100 sm:flex-row sm:space-x-4"
  >
    Który artykuł?</a
  >
  <a
    href="/nauka/ktory-rozdzial"
    class="flex flex-col max-w-xs p-2 border rounded cursor-pointer hover:bg-gray-100 sm:flex-row sm:space-x-4"
  >
    Który rozdział?</a
  >
</div>
