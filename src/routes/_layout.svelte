<style>
  main {
    width: 55vw;
    background-color: white;
    padding: 0;
    margin: 1rem;
    box-sizing: border-box;
  }
  @media (max-width: 1800px) {
    main {
      width: 60vw;
    }
  }
  @media (max-width: 1700px) {
    main {
      width: 65vw;
    }
  }
  @media (max-width: 1600px) {
    main {
      width: 70vw;
    }
  }
  @media (max-width: 1500px) {
    main {
      width: 75vw;
    }
  }
  @media (max-width: 1400px) {
    main {
      width: 80vw;
    }
  }
  @media (max-width: 1240px) {
    main {
      width: 90vw;
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
