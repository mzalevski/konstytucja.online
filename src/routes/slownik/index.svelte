<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";

  let eventManager;
  let showDropdown = false;

  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/");
  };

  const onSwipeLeft = () => (showDropdown = true);

  onMount(() => {
    prefetch("/");
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
  <title>Słownik pojęć</title>
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
  Słownik pojęć
</h1>

<div
  class="flex flex-col mt-4 space-y-2 text-justify md:text-lg lg:text-xl"
  in:fade={{ duration: 3000 }}
>
  <a
    href="/slownik/kancelaria-prezydenta"
    class="flex flex-col max-w-xs p-2 border rounded cursor-pointer hover:bg-gray-100 sm:flex-row sm:space-x-4"
    >Kancelaria Prezydenta</a
  >

  <a
    href="/slownik/prawo-rzeczypospolitej-polskiej"
    class="flex flex-col max-w-xs p-2 border rounded cursor-pointer hover:bg-gray-100 sm:flex-row sm:space-x-4"
    >Prawo Rzeczypospolitej Polskiej</a
  >

  <a
    href="/slownik/rada-gabinetowa"
    class="flex flex-col max-w-xs p-2 border rounded cursor-pointer hover:bg-gray-100 sm:flex-row sm:space-x-4"
    >Rada Gabinetowa</a
  >

  <a
    href="/slownik/rzeczpospolita"
    class="flex flex-col max-w-xs p-2 border rounded cursor-pointer hover:bg-gray-100 sm:flex-row sm:space-x-4"
    >Rzeczpospolita</a
  >

  <a
    href="/slownik/stolica"
    class="flex flex-col max-w-xs p-2 border rounded cursor-pointer hover:bg-gray-100 sm:flex-row sm:space-x-4"
    >Stolica</a
  >

  <a
    href="/slownik/szef-kprp"
    class="flex flex-col max-w-xs p-2 border rounded cursor-pointer hover:bg-gray-100 sm:flex-row sm:space-x-4"
    >Szef KPRP</a
  >
</div>
