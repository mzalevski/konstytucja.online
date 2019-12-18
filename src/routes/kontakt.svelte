<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  .signature {
    text-align: right;
    font-style: italic;
  }
  p {
    text-align: justify;
  }
  h3 {
    padding-top: 16px;
  }

  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }
</style>

<svelte:head>
  <title>Kontakt</title>
  <meta name="description" content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r.">
  <meta name="keywords" content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline, online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent, rada ministrów, sejm, senat">
  <meta name="konstytucja" content="website">
</svelte:head>

<Nav segment={'info'}/>

<div in:fly={{ y: 100, duration: 1000 }}>
  <h3>Kontakt</h3>
  <h4>
    Prace w toku... 🧰🔨
  </h4>
</div>

<!-- <Footer /> -->