<style>
  main {
    width: 65vw;
    background-color: white;
    padding: 0;
    margin: 1rem;
    box-sizing: border-box;
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
      width: 100vw;
    }
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Alex+Brush&text=Konstytucja"
    rel="stylesheet" />
</svelte:head>

<main>
  <slot />
</main>
