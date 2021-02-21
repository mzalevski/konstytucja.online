<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";

  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => goto("/");

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
  <title>Aplikacja mobilna</title>
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
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}
>
  Aplikacja mobilna
</h1>

<div in:fade={{ duration: 3000 }}>
  <p class="mt-4 text-center text-justify">
    <strong>Chrome</strong>
    (i inne przeglądarki oparte na Chromium, np. Opera, Brave). Po wejściu na stronę
    konstytucja.online na smartfonie na dole ekranu pojawi się komenda "Dodaj aplikację
    Konstytucja do ekranu głównego". Po kliknięciu tej komendy, potwierdzamy klikając
    "Dodaj". Konstytucja powinna pojawić się w spisie aplikacji. Aplikacja działa
    także bez dostępu do internetu. Jeżeli część treści nie będzie się ładować w
    trybie offline, to należy włączyć internet i przeładować stronę; przy następnym
    podejściu te treści będą widoczne także w trybie offline.
  </p>
  <img class="w-full mt-6" src="images/chrome-app-guide.png" alt="" srcset="" />
  <p class="mt-6 text-center text-justify">
    <strong>Firefox.</strong>
    Po wejściu na stronę konstytucja.online na smartfonie u góry ekranu pojawi się
    ikonka domu z plusem w środku. Po kliknięciu ikonki potwierdzamy klikając "Dodaj
    do ekranu głównego". Konstytucja powinna pojawić się w spisie aplikacji. Aplikacja
    działa także bez dostępu do internetu. Jeżeli część treści nie będzie się ładować
    w trybie offline, to należy włączyć internet i przeładować stronę; przy następnym
    podejściu te treści będą widoczne także w trybie offline.
  </p>
  <img class="w-full mt-6" src="images/ff-app-guide.png" alt="" srcset="" />
</div>
