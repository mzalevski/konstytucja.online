<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="mx-auto mt-32 md:mt-56 text-center">
  <h1 class="mt-4 text-6xl font-bold">{status} 💔</h1>
  <p class="mt-2 text-md md:text-xl">Och nie! Nie ma takiej podstrony! 😔</p>
  <a class="text-lg underline" rel="prefetch" href="/">
    <p>wróć na stronę główną</p>
  </a>
  {#if dev && error.stack}
    <p>{error.message}</p>
    <pre>{error.stack}</pre>
  {/if}
</div>
