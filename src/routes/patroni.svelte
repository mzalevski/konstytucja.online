<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  h3 {
    padding-top: 16px;
  }
  .low-opacity {
    color: rgba(0, 0, 0, 0.3);
  }
</style>

<svelte:head>
  <title>Patroni</title>
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
  <h3>Lista wspierających projekt przez portal <a href="https://patronite.pl/maciejzalewski" rel="nofollow" target="_blank">Patronite</a>:</h3>
  <h3>Mecenasi 💎</h3>
  <p class="low-opacity">brak</p>
  <h3>Patroni 3.0 🥇</h3>
  <p class="low-opacity">brak</p>
  <h3>Patroni 2.0 🥈</h3>
  <p class="low-opacity">brak</p>
  <h3>Patroni 1.0 🥉</h3>
  <p class="low-opacity">Karolina Król, ... </p>
</div>

<Footer />
