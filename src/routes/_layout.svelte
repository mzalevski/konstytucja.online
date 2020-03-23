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
  class="container min-h-screen flex flex-col mx-auto px-1 sm:px-2 md:px-3
  xl:px-16 py-2 antialiased text-gray-900 text-xs font-light sm:text-base
  overflow-hidden">
  <DarkMode />
  {#if yAxisPosition > 300}
    <ToTheTopBtn />
  {/if}
  <div class="flex-1">
    <slot />
  </div>
  <Footer />

</main>
