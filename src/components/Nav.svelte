<script>
  export let segment;
  let showDropdown = false;
</script>

<nav class="sm:flex items-baseline border-b border-gray-200 mb-2 sm:mb-4">
  <div
    class="w-full flex justify-center sm:justify-start items-baseline sm:w-2/3
    lg:w-1/2 xl:w-2/5">
    <a
      class:active={segment === undefined}
      class="logo sm:pl-1 font-bold text-3xl sm:text-4xl text-red"
      rel="prefetch"
      href="/">
      Konstytucja
    </a>
    <a
      class:active={segment === 'preambula'}
      class="pl-3 sm:pl-4 md:pl-6 hover:text-red"
      rel="prefetch"
      href="preambula">
      Preambuła
    </a>
    <a
      class:active={segment === undefined}
      class="pl-2 md:pl-4 hover:text-red"
      rel="prefetch"
      href="/">
      Artykuły
    </a>

    <div class="relative" on:mouseleave={() => (showDropdown = false)}>
      <a
        href="/"
        class:active={segment === 'info'}
        on:mouseenter={() => (showDropdown = true)}
        class="pl-2 cursor-default md:pl-4 hover:text-red">
        Informacje
      </a>
      {#if showDropdown}
        <div
          class="absolute w-screen sm:w-48 p-2 cursor-default shadow-lg rounded
          border-gray-200 bg-white z-10">
          <a
            class="block sm:pl-2 hover:text-red"
            rel="prefetch"
            href="/komisja">
            Komisja Konstytucyjna
          </a>
          <a
            class="block sm:pl-2 pt-1 hover:text-red"
            rel="prefetch"
            href="/legislacja">
            Proces legislacyjny
          </a>
          <a
            class="block sm:pl-2 pt-1 hover:text-red"
            rel="prefetch"
            href="/slownik">
            Słownik pojęć
          </a>
          <a
            class="block sm:pl-2 pt-1 hover:text-red"
            rel="prefetch"
            href="/app-mobile">
            Aplikacja - mobile
          </a>
          <a
            class="block sm:pl-2 pt-1 hover:text-red"
            rel="prefetch"
            href="/app-desktop">
            Aplikacja - desktop
          </a>
          <a
            class="block sm:pl-2 pt-1 hover:text-red"
            rel="prefetch"
            href="/inicjatywa">
            Inicjatywa
          </a>
        </div>
      {/if}
    </div>
  </div>

  <div class="w-full sm:w-1/3 lg:w-1/2 xl:w-3/5 z-0">
    <slot />
  </div>
</nav>
