<script>
  import { stores } from "@sapper/app";
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

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

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}>
  Aplikacja desktopowa
</h1>

<div in:fade={{ duration: 3000 }}>

  <p class="mt-4 text-justify">
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
  <img class="w-full mt-6" src="images/chrome-desktop-guide.png" alt="" />
</div>
