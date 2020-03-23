<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>Aplikacja mobilna</title>
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
  <h1 class="text-xl font-bold">Aplikacja mobilna</h1>

  <p class="text-center text-justify">
    <strong>Chrome</strong>
    (i inne przeglądarki oparte na Chromium, np. Opera, Brave). Po wejściu na
    stronę konstytucja.online na smartfonie na dole ekranu pojawi się komenda
    "Dodaj aplikację Konstytucja do ekranu głównego". Po kliknięciu tej komendy,
    potwierdzamy klikając "Dodaj". Konstytucja powinna pojawić się w spisie
    aplikacji. Aplikacja działa także bez dostępu do internetu. Jeżeli część
    treści nie będzie się ładować w trybie offline, to należy włączyć internet i
    przeładować stronę; przy następnym podejściu te treści będą widoczne także w
    trybie offline.
  </p>
  <img class="pt-2 w-full" src="images/chrome-app-guide.png" alt="" srcset="" />
  <p class="pt-2 text-center text-justify">
    <strong>Firefox.</strong>
    Po wejściu na stronę konstytucja.online na smartfonie u góry ekranu pojawi
    się ikonka domu z plusem w środku. Po kliknięciu ikonki potwierdzamy
    klikając "Dodaj do ekranu głównego". Konstytucja powinna pojawić się w
    spisie aplikacji. Aplikacja działa także bez dostępu do internetu. Jeżeli
    część treści nie będzie się ładować w trybie offline, to należy włączyć
    internet i przeładować stronę; przy następnym podejściu te treści będą
    widoczne także w trybie offline.
  </p>
  <img class="pt-2 w-full" src="images/ff-app-guide.png" alt="" srcset="" />
</div>
