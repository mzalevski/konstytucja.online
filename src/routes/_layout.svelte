<script>
  import { onMount } from "svelte";
  import DarkMode from "../components/DarkMode.svelte";
  import Feedback from "../components/Feedback.svelte";
  import Tutorial from "../components/Tutorial.svelte";
  import ToTheTopBtn from "../components/ToTheTopBtn.svelte";
  import Footer from "../components/Footer.svelte";

  let yAxisPosition;

  function visitCount() {
    let visits = Number(localStorage.getItem("visitCount")) || 0;
    let current = Boolean(sessionStorage.getItem("session")) || false;

    if (!current) visits++;

    localStorage.setItem("visitCount", visits);
    sessionStorage.setItem("session", true);

    if (visits === 10) {
      console.log("Feedback prompt.");
    }

    console.log(visits);
    console.log(current);

    return visits;
  }

  onMount(() => visitCount());
</script>

<svelte:window bind:scrollY={yAxisPosition} />

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Alex+Brush&text=Konstytucja"
    rel="stylesheet" />
</svelte:head>

<main
  class="container flex flex-col min-h-screen px-4 py-2 mx-auto overflow-hidden text-xs antialiased font-light text-gray-900 sm:px-1 sm:px-2 md:px-3 xl:px-16 sm:text-base">

  <div
    class="fixed bottom-0 left-0 flex flex-col justify-around w-16 h-40 sm:w-20 sm:h-48">
    <Feedback />
    <Tutorial />
    <DarkMode />
  </div>

  {#if yAxisPosition > 300}
    <ToTheTopBtn />
  {/if}

  <div class="flex-1">
    <slot />
  </div>

  <Footer />

</main>
