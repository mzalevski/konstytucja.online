<script>
  import DarkMode from "../components/DarkMode.svelte";
  import ToTheTopBtn from "../components/ToTheTopBtn.svelte";
  import Footer from "../components/Footer.svelte";
  let yAxisPosition;
</script>

<svelte:window bind:scrollY={yAxisPosition} />

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Alex+Brush&text=Konstytucja"
    rel="stylesheet" />
</svelte:head>

<main
  class="container flex flex-col min-h-screen px-4 py-2 mx-auto overflow-hidden text-xs antialiased font-light text-gray-900 sm:px-1 sm:px-2 md:px-3 xl:px-16 sm:text-base">

  <DarkMode />

  {#if yAxisPosition > 300}
    <ToTheTopBtn />
  {/if}

  <div class="flex-1">
    <slot />
  </div>

  <Footer />

</main>
