<script>
  import { EventManager } from "mjolnir.js";
  import { onDestroy, onMount } from "svelte";

  import { fly, fade } from "svelte/transition";

  export let segment;
  export let showDropdown = false;

  let eventManager;

  let dropdownTransitionConfig =
    window.outerWidth > 1024
      ? { y: -30, duration: 600 }
      : { y: 30, duration: 600 };

  const onSwipeRight = () => (showDropdown = false);

  onMount(() => {
    eventManager = new EventManager(document.documentElement, {
      touchAction: "pan-y",
    });
    eventManager.on({ swiperight: onSwipeRight });
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      eventManager.off({ swiperight: onSwipeRight });
    }
  });
</script>

<nav class="items-center mt-2 mb-2 border-b border-gray-200 sm:pb-2 sm:flex">
  <div
    class="flex items-center justify-between w-full px-1 mb-2 sm:px-0 sm:mb-px sm:justify-start sm:w-2/3 lg:w-1/2 xl:w-2/5"
  >
    <a
      class:active={segment === undefined}
      class="mr-2 sm:mr-0 sm:ml-3"
      rel="prefetch"
      href="/"
    >
      <img class="h-6 sm:h-8" id="logo" alt="logo" />
    </a>
    <a
      class:active={segment === "preambula"}
      class="self-end pb-px ml-3 sm:ml-4 md:ml-6 hover:text-red-new"
      rel="prefetch"
      href="preambula"
    >
      Preambuła
    </a>
    <a
      class:active={segment === undefined}
      class="self-end pb-px ml-2 md:ml-4 hover:text-red-new"
      rel="prefetch"
      href="/"
    >
      Artykuły
    </a>
    <div
      class="relative self-end pb-px"
      on:mouseleave={() => (showDropdown = false)}
    >
      <p
        class:active={segment === "info"}
        on:mouseenter={() => (showDropdown = true)}
        on:click={e => {
          if (/(android)/i.test(navigator.userAgent)) {
            e.target.click();
          }
          showDropdown = !showDropdown;
        }}
        class="self-end ml-2 cursor-default md:ml-4 hover:text-red-new"
      >
        Informacje
      </p>

      <!-- crawl helper div start -->
      <div class="hidden">
        <a href="/komisja">_</a>
        <a href="/legislacja">_</a>
        <a href="/dyskusja">_</a>
        <a href="/odpowiedzi">_</a>
        <a href="/slownik">_</a>
        <a href="/app-mobile">_</a>
        <a href="/app-desktop">_</a>
        <a href="/inicjatywa">_</a>
        <a href="/skroty">_</a>
        <a href="/twitter-bot">_</a>
        <a href="/nauka">_</a>
        <a href="/nauka/ktory-artykul">_</a>
      </div>
      <!-- crawl helper div end -->

      {#if showDropdown}
        <div
          in:fly={dropdownTransitionConfig}
          class="fixed top-0 left-0 z-10 w-screen h-screen pt-16 mt-px text-center bg-white border-gray-200 rounded shadow-lg cursor-default sm:absolute sm:left-auto sm:top-auto sm:pt-0 sm:text-left sm:p-2 sm:w-48 sm:h-auto"
        >
          <a
            class="block text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/komisja"
          >
            Komisja Konstytucyjna
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/legislacja"
          >
            Proces legislacyjny
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/slownik"
          >
            Słownik pojęć
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/dyskusja"
          >
            Dyskusja
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/odpowiedzi"
          >
            Odpowiedzi
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/app-mobile"
          >
            Aplikacja - mobile
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/app-desktop"
          >
            Aplikacja - desktop
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/inicjatywa"
          >
            Inicjatywa
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/skroty"
          >
            Skróty klawiszowe
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/twitter-bot"
          >
            Twitter Bot
          </a>
          <a
            class="block pt-3 text-xl sm:pt-1 md:ml-2 sm:text-base hover:text-red-new"
            rel="prefetch"
            href="/nauka/ktory-artykul"
          >
            Nauka
          </a>
          {#if showDropdown}
            <div
              class="fixed top-0 right-0 p-4 rounded cursor-pointer sm:hidden hover:bg-gray-100"
              on:click={() => (showDropdown = false)}
            >
              <svg
                class="w-8 h-8 text-gray-900 stroke-current"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>

  <div class="z-0 w-full sm:w-1/3 lg:w-1/2 xl:w-3/5">
    <slot />
  </div>
</nav>
