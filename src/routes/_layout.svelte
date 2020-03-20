<script>
  import DarkMode from "../components/DarkMode.svelte";
  import ToTheTopBtn from "../components/ToTheTopBtn.svelte";
  import Footer from "../components/Footer.svelte";
  let yAxisPosition;
</script>

<style>
  :global(body) {
    background-color: #ffffff;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #ffffff;
  }
  main {
    width: 60vw;
    margin: 0 1rem;
    padding: 0.5rem 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  @media (max-width: 1800px) {
    main {
      width: 70vw;
    }
  }
  @media (max-width: 1700px) {
    main {
      width: 75vw;
    }
  }
  @media (max-width: 1600px) {
    main {
      width: 80vw;
    }
  }
  @media (max-width: 1500px) {
    main {
      width: 85vw;
    }
  }
  @media (max-width: 1400px) {
    main {
      width: 90vw;
    }
  }
  @media (max-width: 1240px) {
    main {
      width: 98vw;
    }
  }
  @media (max-width: 600px) {
    main {
      width: 91vw;
    }
  }
</style>

<svelte:window bind:scrollY={yAxisPosition} />

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Alex+Brush&text=Konstytucja"
    rel="stylesheet" />
</svelte:head>

<main>
  <DarkMode />
  {#if yAxisPosition > 300}
    <ToTheTopBtn />
  {/if}
  <slot />
  <Footer />

</main>
