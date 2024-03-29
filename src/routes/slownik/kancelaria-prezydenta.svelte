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
  <title>Słownik - Kancelaria Prezydenta</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
      2 kwietnia 1997 r."
  />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
      online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
      trybunał, prezydent, rada ministrów, sejm, senat, kancelaria, kancelaria prezydenta"
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

<div class="flex justify-between h-8">
  <div>
    <br />
    powiązane z:<br />
    <a
      id="back-btn"
      class="w-24 font-thin sm:text-xl hover:text-red-new underline"
      rel="prefetch"
      href="/slownik/szef-kprp"
    >
      Szef Kancelarii Prezydenta
    </a>
  </div>
  <div class="flex justify-center w-24" />
  <div class="flex justify-end w-24" />
</div>

<div class="sm:pt-10 md:pt-12 lg:pt-16">
  <h1 class="text-3xl font-thin text-center sm:text-5xl leading-tight">
    KANCELARIA PREZYDENTA
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
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Ogólna charakterystyka</h2>
    <div>
      Zgodnie z literalnym brzmieniem <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/143"
        rel="prefetch">art. 143</a
      >
      Konstytucji RP stanowi organ pomocniczy Prezydenta Rzeczypospolitej Polskiej.
      Sformułowanie to budzi jednak kontrowersje. Kancelaria Prezydenta RP jest bowiem
      tak naprawdę urzędem, a więc aparatem pomocniczym organu (w tym przypadku –
      głowy państwa), nieposiadającym własnych uprawnień, wyłącznie wspomagającym
      organ w wykonywaniu jego kompetencji<sup
        title="Tak np. P. Czarny, komentarz do art. 143 [w:] P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. WKP 2019; pkt 1."
        >1</sup
      >. To jedyny urząd sensu stricto wprost przewidziany przepisami ustawy
      zasadniczej. Ze względu na charakter prawny KPRP (jako właśnie urzędu),
      czynności jej pracowników są dokonywane w imieniu Prezydenta RP – tym
      samym to głowa państwa ponosi za nie odpowiedzialność<sup
        title="Zob. B. Banaszak, komentarz do art. 143 [w:] Konstytucja Rzeczypospolitej Polskiej. Komentarz, wyd. 2., Warszawa 2012."
        >2</sup
      >.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Ramy prawne</h2>
    <div class="pt-2">
      KPRP funkcjonuje na podstawie statutu nadawanego w pełni samodzielnie
      przez Prezydenta RP, tj. poprzez skorzystanie z prerogatywy, bez
      konieczności uzyskania kontrasygnaty Prezesa Rady Ministrów (<a
        class="underline hover:text-red-new focus:text-red-new"
        href="/144"
        rel="prefetch"
      >
        art. 144 ust. 3 pkt 28
      </a>
      Konstytucji RP). Dokument ten przybiera postać załącznika do prezydenckiego
      zarządzenia<sup
        title="Obecnie: Zarządzenie Prezydenta Rzeczypospolitej Polskiej z dnia 7 sierpnia 2015 r. w sprawie nadania statutu Kancelarii Prezydenta Rzeczypospolitej Polskiej; M.P. 2015 poz. 762 ze zm."
        >3</sup
      >. Jest on w związku z tym aktem prawa wewnętrznego, o którym wspomina
      <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/93"
        rel="prefetch">art. 93</a
      >
      Konstytucji, wiążącym wyłącznie jednostki podległe organowi wydającemu. Zarządzenie
      takie ogłasza się w Dzienniku Urzędowym Rzeczypospolitej Polskiej „Monitor
      Polski” (vide: art. 10 ust. 2 pkt 4 lit. l ustawy z dnia 20 lipca 2000 r. o
      ogłaszaniu aktów normatywnych i niektórych innych aktów prawnych<sup
        title="Dz.U. z 2019 r. poz. 1461.">4</sup
      >).
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Struktura organizacyjna</h2>
    <div class="pt-2">
      Statut Kancelarii określa jej strukturę. Aparat pomocniczy głowy państwa
      składa się z wielu komórek organizacyjnych, m.in. Biura Szefa Kancelarii,
      Biura Gabinetu Prezydenta, Biura Odznaczeń i Nominacji czy Archiwum
      Prezydenta Rzeczypospolitej Polskiej (vide: § 5 Statutu). Szczegóły
      działania urzędu precyzuje regulamin organizacyjny, wydawany przez Szefa
      Kancelarii (§ 6 ust. 1).
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Zadania Kancelarii</h2>
    <div class="pt-2">
      Podstawowym celem KPRP jest wspomaganie Prezydenta RP w korzystaniu z
      posiadanych uprawnień. Na podstawie Statutu Kancelarii, wykonuje więc ona
      zadania wynikające z kompetencji Prezydenta określonych w Konstytucji i
      ustawach (§ 1 ust. 2 Statutu), a także „zapewnia obsługę merytoryczną,
      organizacyjną, prawną i techniczną” nie tylko Prezydenta, lecz także Szefa
      Kancelarii, Zastępcy Szefa Kancelarii, Szefa Gabinetu Prezydenta oraz
      sekretarzy i podsekretarzy stanu w KPRP (§ 1 ust. 4).
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Zasada niepołączalności</h2>
    <div class="pt-2">
      Na czele Kancelarii Prezydenta stoi Szef Kancelarii Prezydenta. Zarówno
      jego, jak i inne osoby zatrudnione w KPRP, obejmuje zasada
      niepołączalności (<italic class="italic">incompatibilitas</italic>;
      <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/103"
        rel="prefetch">art. 103</a
      >
      Konstytucji RP). Oznacza ona, w tym przypadku, zakaz łączenia stanowisk w Kancelarii
      z wykonywaniem mandatu posła lub senatora. Regulacja ta służy realizacji celu
      konstytucjonalizacji Kancelarii Prezydenta RP, a więc zagwarantowaniu wykonywania
      zadań głowy państwa w sposób niezależny od pozostałych organów władzy<sup
        title="Por. K. Kozłowski, komentarz do art. 143 [w:] M. Safjan, L. Bosek (red.), Konstytucja RP. Tom II. Komentarz do art. 87-243, wyd. 1., Warszawa 2016; nb. 9-10."
        >5</sup
      >.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Bibliografia</h2>

    <ul class="pt-1 pb-4 pl-3 text-left text-base">
      <li>
        1. B. Banaszak, "Konstytucja Rzeczypospolitej Polskiej. Komentarz", wyd.
        2., Warszawa 2012.
      </li>
      <li>
        2. M. Safjan, L. Bosek (red.), "Konstytucja RP. Tom II. Komentarz do
        art. 87-243", wyd. 1., Warszawa 2016.
      </li>
      <li>
        3. P. Tuleja (red.), "Konstytucja Rzeczypospolitej Polskiej. Komentarz",
        opubl. WKP 2019.
      </li>
    </ul>
  </div>
</div>
