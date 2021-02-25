<script>
  import { EventManager } from "mjolnir.js";
  import { onDestroy, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Nav from "../../../../components/Nav.svelte";
  import { goto, prefetch } from "@sapper/app";

  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/komisja/14");
  };

  onMount(() => {
    prefetch("/komisja/14");
    eventManager = new EventManager(document.documentElement, {
      touchAction: "pan-y",
    });
    eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      eventManager.off({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });
</script>

<svelte:head>
  <title>Biuletyn nr 14</title>
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<div in:fly={{ y: 100, duration: 1000 }}>
  <h1 class="text-sm font-thin sm:text-xl lg:text-2xl">
    Posiedzenia Komisji Konstytucyjnej ZN (21, 22 i 23.02.1995 r.)
  </h1>
  <!-- <h5>
    <a
      href="https://drive.google.com/file/d/1awtjblaTcKfacOyLZwlw_y9ki_226um_/view?usp=sharing"
      rel="nofollow"
      target="_blank">
      ORYGINAŁ BIULETYNU
    </a>
  </h5> -->

  <p class="max-w-2xl pt-6 text-justify">
    Dnia 22 lutego 1995 r. podkomisja podstaw ustroju politycznego i
    społeczno-gospodarczego, obradująca pod przewodnictwem posła Ryszarda Bugaja
    (UP), rozpatrzyła: —— propozycje przepisów konstytucyjnych dotyczących
    stosunków państwo—kościół. W posiedzeniu udział wzięli: przedstawiciel
    Prezydenta RP, prof. Andrzej Rzepliński, przedstawiciele kościołów 1
    związków wyznaniowych oraz eksperci konstytucjonaliści.
  </p>

  <ul class="flex flex-wrap flex-grow py-8">
    <a
      class="w-24 py-4 my-1 mr-4 text-center text-gray-800 rounded-lg shadow-lg sm:p-4 sm:text-lg sm:w-40 hover:bg-gray-100"
      rel="prefetch"
      href="komisja/14/podkomisja/1"
    >
      <li>
        <p class="font-semibold">Podkomisja - cz. I</p>
        <p class="font-thin">22 lutego</p>
      </li>
    </a>
    <a
      class="w-24 py-4 my-1 mr-4 text-center text-gray-800 rounded-lg shadow-lg sm:p-4 sm:text-lg sm:w-40 hover:bg-gray-100"
      rel="prefetch"
      href="komisja/14/podkomisja/2"
    >
      <li>
        <p class="font-semibold">Podkomisja - cz. II</p>
        <p class="font-thin">22 lutego</p>
      </li>
    </a>
  </ul>
</div>
