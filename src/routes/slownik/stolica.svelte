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
  <title>Słownik - Stolica</title>
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
  <h2 class="mt-4 text-xl font-thin text-center sm:text-2xl">
    <a class="hover:text-red-new" href="https://twitter.com/DNWysocki">
      Dawid Wysocki
    </a>
  </h2>
  <!-- <h2 class="font-thin text-center text-md sm:text-lg">
    Definicja skonsultowana z konstytucjonalistą, prof. X
  </h2> -->
  <h1 class="text-3xl font-thin text-center sm:text-5xl leading-tight">
    STOLICA
  </h1>
</div>

<div
  in:fade={{ duration: 1000 }}
  class="max-w-3xl mx-auto leading-relaxed text-justify sm:text-xl"
>
  <div in:fade={{ duration: 3000 }}>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Funkcje stolicy</h2>
    <div>
      Stolicą Rzeczypospolitej Polskiej, w konstytucyjnym rozumieniu tego
      pojęcia, jest miejscowość stanowiąca siedzibę najwyższych władz RP, jej
      innych centralnych organów, a także placówek dyplomatycznych obcych państw
      czy przedstawicielstw organizacji międzynarodowych<sup
        title="Tak K. Kubuj, komentarz do art. 29 [w:] M. Safjan, L. Bosek (red.), Konstytucja RP. Tom I. Komentarz do art. 1-86, wyd. 1., Warszawa 2016; nb. 1."
        >1</sup
      >. Szczególnie w kontekście
      <a
        class="underline hover:text-red-new focus:text-red-new"
        rel="prefetch"
        href="/3">art. 3</a
      >
      ustawy zasadniczej, proklamującego jednolitość państwa, jawi się ona jako najważniejsze
      miejsce na mapie polityczno-ustrojowej Polski. P. Tuleja podkreśla, że to właśnie
      w Warszawie powinny znajdować się siedziby centralnych i naczelnych organów
      państwa, aczkolwiek zarazem dodaje, iż z Konstytucji nie wynika zakaz lokowania
      niektórych spośród nich poza stolicą<sup
        title="P. Tuleja, Art. 29. Stolica Rzeczypospolitej Polskiej [w:] P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. WKP 2019."
        >2</sup
      >. Tak też stało się w przypadku np. Prezesa Wyższego Urzędu Górniczego
      (Katowice) czy Głównego Inspektora Rybołówstwa Morskiego (Słupsk). Warto
      jednak pamiętać o ich wyspecjalizowanym charakterze, przejawiającym się
      m.in. ścisłym powiązaniem z konkretnymi regionami kraju.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">"Ustawa warszawska"</h2>
    <div class="pt-2">
      Zgodnie z art. 1 ustawy z dnia 15 marca 2002 r. o ustroju miasta
      stołecznego Warszawy<sup title="Dz.U. z 2018 r. poz. 1817.">3</sup>, przez
      pojęcie „Warszawa” należy rozumieć miasto stołeczne Warszawę, tj. miasto
      na prawach powiatu, obejmujące obszar wskazany w art. 13 tego aktu
      normatywnego. Z punktu widzenia zawierającego wyraz „stolica”
      <a
        class="underline hover:text-red-new focus:text-red-new"
        rel="prefetch"
        href="/29">art. 29</a
      >
      Konstytucji RP, najważniejszy wydaje się być art. 3 tzw. „ustawy warszawskiej”,
      wskazujący jako dodatkowe zadania m.st. Warszawy te „wynikające ze stołecznego
      charakteru miasta”. Składa się na nie głównie (jest to bowiem katalog otwarty)
      zapewnianie warunków niezbędnych do funkcjonowania w mieście naczelnych i centralnych
      organów państwa, obcych przedstawicielstw dyplomatycznych tudzież urzędów konsularnych
      oraz organizacji międzynarodowych, przyjmowania delegacji zagranicznych, a
      także funkcjonowania urządzeń publicznych o charakterze infrastrukturalnym,
      mających znaczenie dla stołecznych funkcji miasta.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Inne przejawy stołeczności
    </h2>
    <div class="pt-2">
      P. Sarnecki uważa, że istotnym elementem stołeczności jest ponadto
      konieczność umieszczania w mieście „szczególnych symboli (…)
      państwowości”, posługując się przykładem Grobu Nieznanego Żołnierza z
      warszawskiego pl. Piłsudskiego<sup
        title="Zob. P. Sarnecki, uwaga 2. do art. 29 [w:] L. Garlicki, M. Zubik (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, t. I, Warszawa 2016."
        >4</sup
      >.
    </div>

    <div class="pt-2">
      Ten sam autor podaje, iż ustrój stolicy może być, dzięki konstytucyjnemu
      wyróżnieniu Warszawy, ukształtowany odmiennie względem organizacji
      funkcjonowania innych polskich miejscowości<sup title="Ibidem, uwaga 3."
        >5</sup
      >. Znalazło to zresztą wyraz w treści wspomnianej „ustawy warszawskiej”.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Ustawy proceduralne</h2>
    <div class="pt-2">
      Istotne przykłady szczególnej funkcji Warszawy to także przepisy ustaw
      proceduralnych, m.in. art. 32 § 3 Kodeksu postępowania karnego<sup
        title="Dz.U. z 2021 r. poz. 534.">6</sup
      >
      czy art. 21 § 2 Kodeksu postępowania administracyjnego<sup
        title="Dz.U. z 2020 r. poz. 256 ze zm.">7</sup
      >. Gdy bowiem zawodzą standardowe reguły wyznaczania organu odpowiedniego
      do rozpoznania danej sprawy (sądowej lub administracyjnej), przejmuje ją
      instytucja właściwa dla dzielnicy Śródmieście m.st. Warszawy.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Bibliografia</h2>

    <ul class="pt-1 pb-4 pl-3 text-left text-base">
      <li>
        1. L. Garlicki, M. Zubik (red.), "Konstytucja Rzeczypospolitej Polskiej.
        Komentarz", t. I, Warszawa 2016.
      </li>
      <li>
        2. M. Safjan, L. Bosek (red.), "Konstytucja RP. Tom I. Komentarz do art.
        1-86", wyd. 1., Warszawa 2016.
      </li>
      <li>
        3. P. Tuleja (red.), "Konstytucja Rzeczypospolitej Polskiej. Komentarz",
        opubl. WKP 2019.
      </li>
    </ul>
  </div>
</div>
