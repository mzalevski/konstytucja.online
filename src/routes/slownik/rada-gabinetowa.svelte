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
  <title>Słownik - Rada Gabinetowa</title>
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
    RADA GABINETOWA
  </h1>
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
      Jest to Rada Ministrów obradująca w sprawach szczególnej wagi pod
      przewodnictwem Prezydenta Rzeczypospolitej Polskiej (zamiast Prezesa Rady
      Ministrów, który jednak – jako członek Rady Ministrów – uczestniczy w jej
      posiedzeniach). Określenie tematu spotkania tego organu jako „sprawy
      szczególnej wagi” należy do głowy państwa, ponieważ ustrojodawca nie
      zdecydował się na ustanowienie wykazu kwestii mogących stać się
      przedmiotem obrad Rady Gabinetowej. Wobec tego, to Prezydent RP stwierdza,
      czy zaistniała sytuacja wymagająca zwołania posiedzenia omawianego gremium<sup
        title="Tak P. Czarny, komentarz do art. 141 [w:] P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. WKP 2019; pkt 2."
        >1</sup
      >.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Skład Rady Gabinetowej</h2>
    <div class="pt-2">
      W skład Rady Gabinetowej, obok Prezydenta Rzeczypospolitej, wchodzą
      wszyscy aktualnie pełniący swe funkcje członkowie Rady Ministrów. Jeżeli
      wymaga tego przedmiot posiedzenia RG, dopuszcza się zaproszenie innych
      organów państwa, takich jak Prezes Narodowego Banku Polskiego. Regularnie
      w posiedzeniach Rady biorą udział osoby z zaplecza politycznego głowy
      państwa oraz premiera, tj. sekretarze i podsekretarze stanu w –
      odpowiednio – Kancelarii Prezydenta RP lub Kancelarii Prezesa Rady
      Ministrów<sup
        title="Zob. K. Kozłowski, komentarz do art. 141 [w:] M. Safjan, L. Bosek (red.), Konstytucja RP. Tom II. Komentarz do art. 87-243, wyd. 1., Warszawa 2016; nb. 20."
        >2</sup
      >.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Charakter prawny</h2>
    <div class="pt-2">
      Jak wynika z <a
        class="underline hover:text-red-new focus:text-red-new"
        rel="prefetch"
        href="/141">art. 141 ust. 2</a
      >
      Konstytucji RP, Rada Gabinetowa nie posiada kompetencji Rady Ministrów. Oznacza
      to, że w praktyce stanowi zaledwie forum dyskusyjne, miejsce omawiania kluczowych
      spraw dla państwa. Instytucja ta służy zatem dialogowi pomiędzy obydwoma ośrodkami
      władzy wykonawczej. B. Banaszak określa Radę mianem organu opiniodawczo-doradczego<sup
        title="B. Banaszak, komentarz do art. 141 [w:] tenże, Konstytucja Rzeczypospolitej Polskiej. Komentarz, wyd. 2., Warszawa 2012; nb. 1-2."
        >3</sup
      >. Warto nadmienić, że nie istnieje żaden regulamin posiedzeń RG. W
      literaturze podkreśla się, że wydanie takiego aktu samodzielnie przez
      Prezydenta RP mogłoby budzić wątpliwości z punktu widzenia konstytucyjnego
      katalogu źródeł prawa<sup title="Zob. P. Czarny, op.cit.; pkt 4.">4</sup>.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Zwołanie Rady Gabinetowej
    </h2>
    <div class="pt-2">
      Posiedzenia tego organu państwa zwołuje jego przewodniczący – Prezydent
      RP. Jest to w pełni samodzielnie realizowane uprawnienie (prerogatywa),
      bez konieczności uzyskania kontrasygnaty Prezesa Rady Ministrów (<a
        class="underline hover:text-red-new focus:text-red-new"
        rel="prefetch"
        href="/144">art. 144</a
      >
      ust. 3 pkt 15 ustawy zasadniczej). Prezydent prowadzi także posiedzenia RG,
      co oznacza, że do niego należy udzielanie głosu członkom Rady czy też zadawanie
      im pytań<sup title="Por. B. Banaszak, op.cit.; nb. 1.">5</sup>.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Ustalenia Rady Gabinetowej
    </h2>
    <div class="pt-2">
      Zapadłe podczas posiedzenia Rady Gabinetowej ustalenia nie mają charakteru
      wiążącego. Wymagają one późniejszego potwierdzenia przez „zwykłą” Radę
      Ministrów, kierowaną już przez Prezesa Rady Ministrów<sup
        title="Zob. W. Skrzydło, komentarz do art. 141 [w:] tenże, Konstytucja Rzeczypospolitej Polskiej. Komentarz, wyd. 7., opubl. LEX 2013."
        >6</sup
      >. Nie istnieje żadna sankcja niezrealizowania decyzji RG.
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
        3. W. Skrzydło, "Konstytucja Rzeczypospolitej Polskiej. Komentarz", wyd.
        7., opubl. LEX 2013.
      </li>
      <li>
        4. P. Tuleja (red.), "Konstytucja Rzeczypospolitej Polskiej. Komentarz",
        opubl. WKP 2019.
      </li>
    </ul>
  </div>
</div>
