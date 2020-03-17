<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  p {
    text-align: justify;
  }

  img {
    width: 100%;
  }
  h3 {
    padding-top: 16px;
  }
</style>

<svelte:head>
  <title>Aplikacja desktopowa</title>
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
  <h3>Aplikacja desktopowa</h3>

  <p>
    <strong>Chrome</strong>
    (i inne przeglądarki oparte na Chromium, np. Opera, Brave). Po wejściu na
    stronę konstytucja.online na komputerze w prawym górnym rogu ekranu, w pasku
    url, pojawi się ikonka z plusem w środku. Po kliknięciu ikonki i po
    potwierdzeniu przez kliknięcie "Zezwalaj" Konstytucja powinna pojawić się w
    spisie aplikacji lub na pulpicie. Aplikacja działa także bez dostępu do
    internetu. Jeżeli część treści nie będzie się ładować w trybie offline, to
    należy włączyć internet i przeładować stronę; przy następnym podejściu te
    treści będą widoczne także w trybie offline.
  </p>
  <img src="images/chrome-desktop-guide.png" alt="" srcset="" />
</div>
