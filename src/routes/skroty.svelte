<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";
  import { isMobile } from "./_helpers";
  import Key from "../components/Key.svelte";

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
  <title>Skróty klawiszowe</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r."
  />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat, skróty klawiszowe,
    shortcuts"
  />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl xl:text-3xl"
  in:fly={{ x: -50, duration: 1000 }}
>
  Skróty klawiszowe
</h1>

<div class="mt-4 flex flex-col space-y-4" in:fade={{ duration: 3000 }}>
  <h2 class="pt-4 text-xl font-thin">Wszędzie</h2>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key>D</Key>

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">
        Zmiana trybu tryb ciemny / tryb jasny
      </span>
    </div>
  </div>

  <h2 class="pt-4 text-xl font-thin">Strona główna</h2>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key>/</Key>

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">
        Przejdź do wyszukiwania tekstowego. ten sam klawisz co <span
          class="inline-block w-2"
        /><Key small>?</Key>
      </span>
    </div>
  </div>

  <h2 class="pt-4 text-xl font-thin">Podstrona artykułu</h2>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg></Key
    >

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">
        Przejdź do następnego artykułu (przytrzymaj, aby przejść o więcej
        artykułów)
      </span>
    </div>
  </div>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg></Key
    >

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">
        Przejdź do poprzedniego artykułu (przytrzymaj, aby przejść o więcej
        artykułów)
      </span>
    </div>
  </div>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key>F</Key>

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">
        Szybko przejdź do innego artykułu
      </span>
    </div>
  </div>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key>Q</Key>

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">
        Pokaż / schowaj dyskusję dot. artykułem
      </span>
    </div>
  </div>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key>W</Key>

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">
        Pokaż / schowaj wyjaśnienie artykułu
      </span>
    </div>
  </div>

  <h2 class="pt-4 text-xl font-thin">Ogólne</h2>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key>enter</Key>

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">
        Przejdź dalej / zaakceptuj
      </span>
    </div>
  </div>

  <div class="flex text-lg sm:space-x-4 border rounded p-4">
    <Key>esc</Key>

    <div class="h-16 flex flex-col justify-center">
      <span class="p-2 pt-2 sm:pt-3 text-base sm:text-lg">powrót / anuluj</span>
    </div>
  </div>
</div>
