<script>
  import { fly, fade } from "svelte/transition";

  export let segment;

  let showDropdown = false;

  let dropdownTransitionConfig =
    window.outerWidth > 1024
      ? { y: -30, duration: 600 }
      : { x: 30, duration: 600 };
</script>

<nav class="items-baseline mb-2 border-b border-gray-200 sm:flex sm:mb-4">
  <div
    class="flex items-baseline justify-center w-full sm:justify-start sm:w-2/3 lg:w-1/2 xl:w-2/5">
    <a
      class:active={segment === undefined}
      class="text-3xl font-bold logo sm:ml-1 sm:text-4xl text-red-new"
      rel="prefetch"
      href="/">
      Konstytucja
    </a>
    <a
      class:active={segment === 'preambula'}
      class="ml-3 sm:ml-4 md:ml-6 hover:text-red-new"
      rel="prefetch"
      href="preambula">
      Preambuła
    </a>
    <a
      class:active={segment === undefined}
      class="ml-2 md:ml-4 hover:text-red-new"
      rel="prefetch"
      href="/">
      Artykuły
    </a>

    <div class="relative" on:mouseleave={() => (showDropdown = false)}>
      <p
        class:active={segment === 'info'}
        on:mouseenter={() => (showDropdown = true)}
        class="ml-2 cursor-default md:ml-4 hover:text-red-new">
        Informacje
      </p>
      {#if showDropdown}
        <div
          in:fly={dropdownTransitionConfig}
          class="absolute z-10 w-24 p-2 bg-white border-gray-200 rounded shadow-lg cursor-default sm:w-48">
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
        </div>
      {/if}
    </div>
  </div>

  <div class="z-0 w-full sm:w-1/3 lg:w-1/2 xl:w-3/5">
    <slot />
  </div>
</nav>
