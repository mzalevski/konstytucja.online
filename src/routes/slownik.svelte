<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
  <title>Słownik pojęć</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r." />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={'info'} />

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}>
  Słownik pojęć
</h1>

<div in:fade={{ duration: 3000 }}>
  <h2 class="text-lg font-bold tracking-wider text-gray-500 uppercase">
    Prace w toku
  </h2>
</div>
