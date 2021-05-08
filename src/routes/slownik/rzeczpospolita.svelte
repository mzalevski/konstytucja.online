<script>
  import { fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";
  import { isMobile } from "../_helpers";

  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/slownik");
  };

  onMount(() => {
    prefetch("/slownik");
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
  <title>Słownik - Rzeczpospolita</title>
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

<div class="flex justify-between h-8">
  <a
    id="back-btn"
    class="w-24 font-thin sm:text-xl hover:text-red-new"
    rel="prefetch"
    href="/slownik"
  >
    powrót
  </a>
  <h3 class="font-thin text-center sm:text-xl">9 kwietnia 2021 r.</h3>
  <div class="flex justify-end w-24" />
</div>

<div class="sm:pt-10 md:pt-12 lg:pt-16">
  <h1 class="text-3xl font-thin text-center sm:text-5xl leading-tight">
    RZECZPOSPOLITA
  </h1>
  <h2 class="mt-1 text-base font-thin text-center sm:text-xl text-gray-700">
    autor: <a class="hover:text-red-new" href="https://twitter.com/DNWysocki">
      Dawid Wysocki
    </a>
  </h2>
</div>
<div
  in:fade={{ duration: 1000 }}
  class="max-w-3xl mx-auto leading-relaxed text-justify sm:text-xl"
>
  <div in:fade={{ duration: 3000 }}>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      <!-- Może jakiś subtitle tutaj -->
    </h2>
    <div>
      Pojęcie to odgrywa dwie role: z jednej strony stanowi tradycyjny element
      nazwy państwa polskiego, z drugiej zaś – określenie republikańskiej formy
      ustroju Polski.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Element tradycji</h2>
    <div class="pt-2">
      W pierwszym znaczeniu pojawia się ono w <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/preambula"
        rel="prefetch">Preambule</a
      >
      Konstytucji RP, gdzie ma za zadanie podkreślić ciągłość polskiej państwowości
      (vide: wzmianka o I oraz II Rzeczypospolitej przy jednoczesnej swoistej proklamacji
      III RP). Jak zaznaczają M. Zubik i W. Sokolewicz, określenie „Rzeczpospolita
      Polska”, to „tradycyjny atrybut państwowości niezależnej, niepodległej i suwerennej,
      skorelowany z wolnościowymi aspiracjami narodu”<sup
        title="W. Sokolewicz, M. Zubik, uwaga 4. do art. 1 [w:] L. Garlicki, M. Zubik (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, t. I, Warszawa 2016."
        >1</sup
      >. Z tego właśnie względu, ustrojodawca posłużył się sformułowaniem
      powszechnie znanym, w domyśle – dobrze kojarzonym w społeczeństwie. Warto
      w tym miejscu zaznaczyć, że nawet w stalinowskiej Konstytucji PRL z 1952
      roku<sup title="Dz.U. 1952 Nr 33, poz. 232.">2</sup> powstrzymano się od wprowadzenia
      utartej nazwy krajów satelickich ZSRR, tj. „republika ludowa”, zamiast tego
      używając tradycyjnej dla polskiej państwowości „Rzeczypospolitej”, jednocześnie
      dodając do niej ideologiczne określenie „Ludowa”.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Rzeczpospolita jako republika
    </h2>
    <div class="pt-2">
      Druga funkcja pojęcia „Rzeczpospolita” wynika głównie z kontekstu
      historycznego oraz językowego. Przede wszystkim, Konstytucja marcowa z
      1921 roku<sup title="Dz.U. 1921 Nr 44, poz. 267.">3</sup> wprost
      utożsamiła terminy „Rzeczpospolita” i „republika”, stanowiąc w swym art.
      1, iż „Państwo Polskie jest Rzecząpospolitą”, co należy rozumieć jako
      oznaczenie szczególnej cechy ustroju – republikańskiego systemu rządów.
      Trudno o inną ocenę, szczególnie że dalsze przepisy pierwszej „pełnej”
      międzywojennej ustawy zasadniczej nie zawierają pojęcia „republika”.
      Wnioski te wydają się zachowywać aktualność także w odniesieniu do obecnie
      obowiązującej Konstytucji RP, również w żadnym miejscu nieokreślającej
      polskiego państwa mianem republiki<sup
        title="W. Sokolewicz, M. Zubik, uwaga 5. do art. 1 [w:] L. Garlicki, M. Zubik (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, t. I, Warszawa 2016."
        >4</sup
      >.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Znaczenie słownikowe pojęcia
    </h2>
    <div class="pt-2">
      Z kolei z punktu widzenia stricte językowego, „Rzeczpospolita” stanowi
      przetłumaczony na język polski wyraz „republika”<sup
        title="Zob. np. hasło „republika” [w:] J. Tokarski (red.), Słownik wyrazów obcych PWN, Warszawa 1980, s. 644; por. także hasło „republika” [w:] L. Wiśniakowska (red.), Słownik wyrazów bliskoznacznych PWN, Warszawa 2006, s. 472, gdzie wprost określono „rzeczpospolitą” jako synonim „republiki”."
        >5</sup
      >
      (łac. <italic class="italic">res publica</italic>). Wprawdzie w okresie I
      RP, tzw. Rzeczypospolitej Obojga Narodów, słowo to niewątpliwie nie miało
      tak wyraźnie republikańskich konotacji, jak obecnie, niemniej jednak
      zawsze było kojarzone z państwem obywatelskim, którego władcy – pod
      względem pozycji ustrojowej – bliżej było do modelu demokratycznego
      aniżeli tradycyjnie monarchicznego.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Bibliografia</h2>

    <ul class="pt-1 pb-4 pl-3 text-left text-base">
      <li>
        1. L. Garlicki, M. Zubik (red.), "Konstytucja Rzeczypospolitej Polskiej.
        Komentarz", t. I, Warszawa 2016.
      </li>
      <li>
        2. J. Tokarski (red.), "Słownik wyrazów obcych PWN", Warszawa 1980.
      </li>
      <li>
        3. L. Wiśniakowska (red.), "Słownik wyrazów bliskoznacznych PWN",
        Warszawa 2006.
      </li>
    </ul>
  </div>
</div>
