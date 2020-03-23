<script>
  import { fly } from "svelte/transition";
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

<div in:fly={{ y: 100, duration: 1000 }}>
  <h3>Slownik pojęć</h3>
  <h4>Prace w toku... 🧰🔨</h4>
</div>
