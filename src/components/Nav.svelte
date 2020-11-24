<script>
  import { fly, fade } from "svelte/transition";

  export let segment;

  let showDropdown = false;

  let dropdownTransitionConfig =
    window.outerWidth > 1024
      ? { y: -30, duration: 600 }
      : { x: 30, duration: 600 };
</script>

<nav class="items-center mt-2 mb-2 border-b border-gray-200 sm:pb-2 sm:flex">
  <div
    class="flex items-center justify-center w-full mb-2 sm:mb-px
    sm:justify-start sm:w-2/3 lg:w-1/2 xl:w-2/5">
    <a
      class:active={segment === undefined}
      class="sm:ml-3"
      rel="prefetch"
      href="/">
      <img class="h-6 sm:h-8" id="logo" alt="logo" />
    </a>
    <a
      class:active={segment === 'preambula'}
      class="self-end pb-px ml-3 sm:ml-4 md:ml-6 hover:text-red-new"
      rel="prefetch"
      href="preambula">
      Preambuła
    </a>
    <a
      class:active={segment === undefined}
      class="self-end pb-px ml-2 md:ml-4 hover:text-red-new"
      rel="prefetch"
      href="/">
      Artykuły
    </a>
    <div
      class="relative self-end pb-px"
      on:mouseleave={() => (showDropdown = false)}>
      <p
        class:active={segment === 'info'}
        on:mouseenter={() => (showDropdown = true)}
        on:click={e => {
          if (/(android)/i.test(navigator.userAgent)) {
            e.target.click();
          }
          showDropdown = !showDropdown;
        }}
        class="self-end ml-2 cursor-default md:ml-4 hover:text-red-new">
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
      </div>
      <!-- crawl helper div end -->

      {#if showDropdown}
        <div
          in:fly={dropdownTransitionConfig}
          class="absolute z-10 w-24 p-2 bg-white border-gray-200 rounded
          shadow-lg cursor-default sm:w-48">
          <a
            class="block md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/komisja">
            Komisja Konstytucyjna
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/legislacja">
            Proces legislacyjny
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/slownik">
            Słownik pojęć
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/dyskusja">
            Dyskusja
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/odpowiedzi">
            Odpowiedzi
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/app-mobile">
            Aplikacja - mobile
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/app-desktop">
            Aplikacja - desktop
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/inicjatywa">
            Inicjatywa
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/skroty">
            Skróty klawiszowe
          </a>
          <a
            class="block pt-1 md:ml-2 hover:text-red-new"
            rel="prefetch"
            href="/twitter-bot">
            Twitter Bot
          </a>
        </div>
      {/if}
    </div>
  </div>

  <div class="z-0 w-full sm:w-1/3 lg:w-1/2 xl:w-3/5">
    <slot />
  </div>
</nav>
