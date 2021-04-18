<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 800 && window.innerHeight <= 600;
  };
  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/");
  };

  onMount(() => {
    prefetch("/");
    if (isMobile()) {
      eventManager = new EventManager(document.documentElement, {
        touchAction: "pan-y",
      });
      eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });

  onDestroy(() => {
    if (isMobile()) {
      eventManager.off({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });
</script>

<svelte:head>
  <title>Słownik pojęć</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r."
  />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat"
  />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl xl:text-3xl"
  in:fly={{ x: -50, duration: 1000 }}
>
  Słownik pojęć
</h1>

<div in:fade={{ duration: 3000 }}>
  <h2 class="text-lg font-bold tracking-wider text-gray-500 uppercase">
    Prace w toku
  </h2>
  <ul>
    <li>dobro wspólne</li>
    <li>demokratyczne państwo prawa</li>
    <li>zasady sprawiedliwości społecznej</li>
    <li>państwo jednolite</li>
    <li>prawa człowieka i obywatela</li>
    <li>narodowe dziedzictwo kulturalne</li>
    <li>działanie na podstawie i w granicach prawa</li>
    <li>władza ustawodawcza</li>
    <li>władza wykonawcza</li>
    <li>władza sądownicza</li>
    <li>decentralizacja władzy publicznej</li>
    <li>wspólnota samorządowa</li>
    <li>samorząd terytorialny</li>
    <li>samorząd zawodowy</li>
    <li>zawód zaufania publicznego</li>
    <li>interes publiczny</li>
    <li>działalność gospodarcza</li>
    <li>społeczna gospodarka rynkowa</li>
    <li>gospodarstwo rodzinne</li>
    <li>ciężary i daniny publiczne</li>
    <li>podatek</li>
    <li>godność</li>
    <li>konstytucyjne wolności i prawa</li>
    <li>cudzoziemiec</li>
    <li>ochrona życia</li>
    <li>nietykalność osobista</li>
    <li>wolność osobista</li>
    <li>czyn zabroniony</li>
    <li>prawomocny wyrok sądu</li>
    <li>właściwy, niezależny, bezstronny, niezawisły sąd</li>
    <li>wolność sumienia i religii</li>
    <li>wolność wyrażania poglądów</li>
    <li>ekstradycja</li>
    <li>status uchodźcy</li>
    <li>pokojowe zgromadzenia</li>
    <li>związek zawodowy</li>
    <li>strajk</li>
    <li>protest</li>
    <li>prawa publiczne</li>
    <li>służba publiczna</li>
    <li>kolegialne obrady władzy publicznej</li>
    <li>referendum</li>
    <li>własność</li>
    <li>zabezpieczenie społeczne</li>
    <li>Trybunał Konstytucyjny</li>
    <li>rozporządzenie</li>
    <li>Skarb Państwa</li>
    <li>wojewoda</li>
    <li>ratyfikacja umowy międzynarodowej</li>
    <li>bezwzględna więkoszość głosów</li>
    <li>funkcje publiczne</li>
    <li>mandat poselski</li>
    <li>postępowanie karne</li>
    <li>komisja śledcza</li>
    <li>zapytanie poselskie</li>
    <li>zgodność ustawy z konstytucją</li>
    <li>nieważność wyborów</li>
    <li>projekt ustawy</li>
    <li>pilny projekt ustawy</li>
    <li>naród</li>
    <li>Rada Polityki Pieniężnej</li>
    <li>powszechność, równość, bezpośredniość, tajność wyborów</li>
    <li>Zgromadzenie Narodowe</li>
    <li>Trybunał Stanu</li>
    <li>Siły Zbrojne Rzeczypospolitej</li>
    <li>Rada Bezpieczeństwa Narodowego</li>
    <li>prawo łaski</li>
    <li>orędzie</li>
    <li>Rada Gabinetowa</li>
    <li>Kancelaria Prezydenta</li>
    <li>inicjatywa ustawodawcza</li>
    <li>Najwyższa Izba Kontroli</li>
    <li>Trybunał Konstytucyjny</li>
    <li>Sąd Najwyższy</li>
    <li>Naczelny Sąd Administracyjny</li>
    <li>zadania publiczne</li>
    <li>zadania zlecone</li>
    <li>spór kompetencyjny</li>
    <li>subwencje</li>
    <li>opłata lokalna</li>
    <li>stan spoczynku</li>
    <li>spór kompetencyjny</li>
    <li>gorący uczynek</li>
    <li>Rzecznik Praw Obywatelskich</li>
    <li>Krajowa Rada Radiofoni i telewizji</li>
    <li>wotum zafunia</li>
    <li>dwuinstancyjność postępowania</li>
    <li>niezawisłość sędziowska</li>
    <li>Krajowa Rada Sądownictwa</li>
    <li>papiery wartościowe</li>
    <li>monopol</li>
    <li>stan spoczynku</li>
    <li>spór kompetencyjny</li>
    <li>gorący uczynek</li>
    <li>Rzecznik Praw Obywatelskich</li>
    <li>Preambuła</li>
    <li>dług publiczny</li>
    <li>produkt krajowy brutto</li>
    <li>prowizorium budżetowe</li>
    <li>Narodowy Bank Polski</li>
    <li>stan nadzwyczajny</li>
    <li>stan klęski żywiołowej</li>
    <li>stan wojenny</li>
    <li>stan wyjątkowy</li>
    <li>pracownik</li>
    <li>Rzeczpospolita</li>
    <li>zmiana Konstytucji</li>
    <li>Prezydent (RP)</li>
    <li>kontrola administracji publicznej</li>
    <li>sądownictwo administracyjne</li>
    <li>prawa dziecka</li>
    <li>Rzecznik Praw Dziecka</li>
    <li>
      ochrona dziecka przed przemocą, okrucieństwem, wyzyskiem i demoralizacją
    </li>
    <li>uzwzględnianie zdania dziecka</li>
    <li>
      prawo stanowione organizacji międzynarodowej, której członkiem jest Polska
    </li>
    <li>Stolica</li>
    <li>prawo Rzeczypospolitej Polskiej</li>
  </ul>
</div>
