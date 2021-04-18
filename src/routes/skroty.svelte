<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";
  import { isMobile } from "./_helpers";

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

<div class="mt-4" in:fade={{ duration: 3000 }}>
  <h2 class="mt-4 text-xl font-thin">Wszędzie</h2>
  <div class="flex text-lg sm:space-x-4">
    <img class="w-10 h-10 sm:w-16 sm:h-16" src="/images/keys/D.png" alt="" />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      zmiana trybu tryb ciemny / tryb jasny
    </span>
    <span
      class="hidden md:block pt-2 sm:pt-3 text-sm sm:text-base sm:w-4/12
      hover:text-red-new"
    >
      (D)arkmode (en. ciemny tryb)
    </span>
  </div>

  <h2 class="mt-4 text-xl font-thin">Strona główna</h2>
  <div class="flex text-lg sm:space-x-4">
    <img
      class="w-10 h-10 sm:w-16 sm:h-16"
      src="/images/keys/slash.png"
      alt=""
    />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      przejdź do wyszukiwania tekstowego
    </span>
    <span class="hidden md:block pt-2 sm:w-4/12 hover:text-red-new">
      ten sam klawisz co
      <img class="w-10 h-10 inline" src="/images/keys/question.png" alt="" />
    </span>
  </div>

  <h2 class="mt-4 text-xl font-thin">Podstrona artykułu</h2>

  <div class="flex text-lg sm:space-x-4">
    <img
      class="w-10 h-10 sm:w-16 sm:h-16"
      src="/images/keys/right.png"
      alt=""
    />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      przejdź do następnego artykułu
    </span>
    <span
      class="hidden md:block pt-2 sm:pt-3 text-sm sm:text-base sm:w-4/12
      hover:text-red-new"
    >
      strzałka w prawo (przytrzymaj, aby przejść o więcej artykułów)
    </span>
  </div>

  <div class="flex text-lg sm:space-x-4">
    <img class="w-10 h-10 sm:w-16 sm:h-16" src="/images/keys/left.png" alt="" />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      przejdź do poprzedniego artykułu
    </span>
    <span
      class="hidden md:block pt-2 sm:pt-3 text-sm sm:text-base sm:w-4/12
      hover:text-red-new"
    >
      strzałka w lewo (przytrzymaj, aby przejść o więcej artykułów)
    </span>
  </div>

  <div class="flex text-lg sm:space-x-4">
    <img class="w-10 h-10 sm:w-16 sm:h-16" src="/images/keys/F.png" alt="" />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      szybko przejdź do innego artykułu
    </span>
    <span
      class="hidden md:block pt-2 sm:pt-3 text-sm sm:text-base sm:w-4/12
      hover:text-red-new"
    >
      (F)ind (en. znajdź)
    </span>
  </div>

  <div class="flex text-lg sm:space-x-4">
    <img class="w-10 h-10 sm:w-16 sm:h-16" src="/images/keys/Q.png" alt="" />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      pokaż / schowaj dyskusję dot. artykułem
    </span>
    <span
      class="hidden md:block pt-2 sm:pt-3 text-sm sm:text-base sm:w-4/12
      hover:text-red-new"
    >
      (Q)&A (en. pytania i odpowiedzi)
    </span>
  </div>

  <div class="flex text-lg sm:space-x-4">
    <img class="w-10 h-10 sm:w-16 sm:h-16" src="/images/keys/W.png" alt="" />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      pokaż / schowaj wyjaśnienie artykułu
    </span>
    <span
      class="hidden md:block pt-2 sm:pt-3 text-sm sm:text-base sm:w-4/12
      hover:text-red-new"
    >
      (W)yjaśnienie
    </span>
  </div>

  <h2 class="mt-4 text-xl font-thin">Ogólne</h2>
  <div class="flex text-lg sm:space-x-4">
    <img
      class="w-10 h-10 sm:w-16 sm:h-16"
      src="/images/keys/enter.png"
      alt=""
    />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      przejdź dalej / zaakceptuj
    </span>
    <span
      class="pt-2 sm:pt-3 text-sm sm:text-base sm:w-4/12 hover:text-red-new"
    />
  </div>

  <div class="flex text-lg sm:space-x-4">
    <img
      class="w-10 h-10 sm:w-16 sm:h-16"
      src="/images/keys/escape.png"
      alt=""
    />
    <span
      class="pl-2 pt-2 sm:pt-3 text-sm sm:text-base sm:w-7/12 hover:text-red-new"
    >
      powrót / anuluj
    </span>
    <span
      class="pt-2 sm:pt-3 text-sm sm:text-base sm:w-4/12 hover:text-red-new"
    />
  </div>
</div>
