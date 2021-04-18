<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";
  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 600 && window.innerHeight <= 800;
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
  <title>Komisja Konstytucyjna</title>
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
  Komisja Konstytucyjna
</h1>
<div in:fade={{ duration: 3000 }}>
  <p>
    <a
      class="text-sm font-bold tracking-wider text-gray-500 uppercase hover:text-red-new"
      href="https://www.wikiwand.com/pl/Komisja_Konstytucyjna_Zgromadzenia_Narodowego"
      rel="nofollow"
      target="_blank"
    >
      Komisja Konstytucyjna ZN
    </a>
    <svg
      class="inline-block w-4 h-4 mb-1 text-gray-500 fill-current"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1
        0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2
        2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
      />
    </svg>
  </p>
  <div class="mt-4 text-xl">
    <p class="max-w-3xl text-justify">
      Komisja Konstytucyjna
      <a
        class="hover:text-red-new"
        href="https://www.wikiwand.com/pl/Zgromadzenie_Narodowe_w_Polsce"
        rel="nofollow"
        target="_blank"
      >
        Zgromadzenia Narodowego
      </a>
      <svg
        class="inline-block w-4 h-4 mb-1 text-gray-500 fill-current"
        viewBox="0 0 24 24"
      >
        <path
          d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1
          1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2
          2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
        />
      </svg>
      została utworzona przez ustawę konstytucyjną z dnia 23 kwietnia 1992 r. o trybie
      przygotowania i uchwalenia Konstytucji Rzeczypospolitej Polskiej (
      <a
        class="hover:text-red-new"
        href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19920670336"
        rel="nofollow"
        target="_blank"
      >
        Dz.U. 1992 nr 67, poz. 336
      </a>
      <svg
        class="inline-block w-4 h-4 mb-1 text-gray-500 fill-current"
        viewBox="0 0 24 24"
      >
        <path
          d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1
          1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2
          2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
        />
      </svg>
      zm.:
      <a
        class="hover:text-red-new"
        href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940610251"
        rel="nofollow"
        target="_blank"
      >
        Dz.U. 1994 nr 61, poz. 251
      </a>
      <svg
        class="inline-block w-4 h-4 mb-1 text-gray-500 fill-current"
        viewBox="0 0 24 24"
      >
        <path
          d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1
          1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2
          2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
        />
      </svg>
      ).
    </p>

    <div class="flex justify-between">
      <div>
        <h2 class="mt-4 text-xl font-thin">Skorowidz</h2>
        <p>
          <a
            class="text-xs font-bold tracking-wider text-gray-500 uppercase hover:text-red-new"
            href="https://drive.google.com/open?id=1HZL7xpnoqeRuZOSmU1LsJo_8Xaqwhaqr"
            rel="nofollow"
            target="_blank"
          >
            skorowidz
          </a>
          <svg
            class="inline-block w-3 h-3 mb-1 text-gray-500 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1
              0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2
              2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0
              2H5v12h12v-5z"
            />
          </svg>
        </p>

        <h2 class="mt-4 text-xl font-thin">Biuletyny</h2>
        <p>
          <a
            class="text-xs font-bold tracking-wider text-gray-500 uppercase hover:text-red-new"
            href="https://bs.sejm.gov.pl/F?func=find-b&request=000007248&find_code=SYS&local_base=BIS01"
            rel="nofollow"
            target="_blank"
          >
            lista biuletynów
          </a>
          <svg
            class="inline-block w-3 h-3 mb-1 text-gray-500 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1
              0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2
              2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0
              2H5v12h12v-5z"
            />
          </svg>
        </p>

        <ul class="pl-5 mt-2 list-disc">
          <li>
            <a class="hover:text-red-new" rel="prefetch" href="komisja/13">
              Biuletyn nr 13
            </a>
          </li>
          <li>
            <a class="hover:text-red-new" rel="prefetch" href="komisja/14">
              Biuletyn nr 14
            </a>
          </li>
        </ul>
        <h3
          class="mt-4 text-sm font-bold tracking-wider text-gray-400 uppercase"
        >
          Prace w toku:
        </h3>
        <ul class="pl-5 mt-2 list-disc">
          <li class="text-gray-500">
            <a class="hover:text-red-new" rel="prefetch" href="komisja">
              Biuletyn nr 15
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
