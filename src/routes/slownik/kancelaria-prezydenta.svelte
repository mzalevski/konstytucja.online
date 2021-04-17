<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";

  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/slownik");
  };

  onMount(() => {
    prefetch("/slownik");
    eventManager = new EventManager(document.documentElement, {
      touchAction: "pan-y",
    });
    eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
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
    <a class="hover:text-red-new" href="https://twitter.com/DawidWysocki">
      Dawid Wysocki
    </a>
  </h2>
  <!-- <h2 class="font-thin text-center text-md sm:text-lg">
    Definicja skonsultowana z konstytucjonalistą, prof. X
  </h2> -->
  <h1 class="text-3xl font-thin text-center sm:text-5xl leading-tight">
    KANCELARIA PREZYDENTA
  </h1>
</div>

<div
  in:fade={{ duration: 1000 }}
  class="max-w-3xl mx-auto leading-relaxed text-justify sm:text-xl"
>
  <div in:fade={{ duration: 3000 }}>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Ogólna charakterystyka</h2>
    <div>
      Zgodnie z literalnym brzmieniem art. 143 Konstytucji RP stanowi organ
      pomocniczy Prezydenta Rzeczypospolitej Polskiej. Sformułowanie to budzi
      jednak kontrowersje. Kancelaria Prezydenta RP jest bowiem tak naprawdę
      urzędem, a więc aparatem pomocniczym organu (w tym przypadku – głowy
      państwa), nieposiadającym własnych uprawnień, wyłącznie wspomagającym
      organ w wykonywaniu jego kompetencji. To jedyny urząd sensu stricto wprost
      przewidziany przepisami ustawy zasadniczej. Ze względu na charakter prawny
      KPRP (jako właśnie urzędu), czynności jej pracowników są dokonywane w
      imieniu Prezydenta RP – tym samym to głowa państwa ponosi za nie
      odpowiedzialność.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Ramy prawne</h2>
    <div class="pt-2">
      KPRP funkcjonuje na podstawie statutu nadawanego w pełni samodzielnie
      przez Prezydenta RP, tj. poprzez skorzystanie z prerogatywy, bez
      konieczności uzyskania kontrasygnaty Prezesa Rady Ministrów (art. 144 ust.
      3 pkt 28 Konstytucji RP). Dokument ten przybiera postać załącznika do
      prezydenckiego zarządzenia. Jest on w związku z tym aktem prawa
      wewnętrznego, o którym wspomina art. 93 Konstytucji, wiążącym wyłącznie
      jednostki podległe organowi wydającemu. Zarządzenie takie ogłasza się w
      Dzienniku Urzędowym Rzeczypospolitej Polskiej „Monitor Polski” (vide: art.
      10 ust. 2 pkt 4 lit. l ustawy z dnia 20 lipca 2000 r. o ogłaszaniu aktów
      normatywnych i niektórych innych aktów prawnych).
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
      niepołączalności (incompatibilitas; art. 103 Konstytucji RP). Oznacza ona,
      w tym przypadku, zakaz łączenia stanowisk w Kancelarii z wykonywaniem
      mandatu posła lub senatora. Regulacja ta służy realizacji celu
      konstytucjonalizacji Kancelarii Prezydenta RP, a więc zagwarantowaniu
      wykonywania zadań głowy państwa w sposób niezależny od pozostałych organów
      władzy.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Bibliografia</h2>

    <ul class="pt-1 pb-4 pl-3 text-left text-base">
      <li>
        1) B. Banaszak, Konstytucja Rzeczypospolitej Polskiej. Komentarz, wyd.
        2., Warszawa 2012.
      </li>
      <li>
        2) M. Safjan, L. Bosek (red.), Konstytucja RP. Tom II. Komentarz do art.
        87-243, wyd. 1., Warszawa 2016.
      </li>
      <li>
        3) P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz,
        opubl. WKP 2019.
      </li>
    </ul>
  </div>
</div>
