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
  <title>Słownik - Prawo Rzeczypospolitej Polskiej</title>
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
    PRAWO RZECZYPOSPOLITEJ<br />POLSKIEJ
  </h1>
</div>

<div
  in:fade={{ duration: 1000 }}
  class="max-w-3xl mx-auto leading-relaxed text-justify sm:text-xl"
>
  <div in:fade={{ duration: 3000 }}>
    <!-- <h2 class="mt-8 text-lg font-thin sm:text-2xl">Rola pojęcia</h2>
    <div>
      Pojęcie to pojawia się w art. 83 Konstytucji RP, zlokalizowanym w
      fundamentalnym dla statusu jednostki Rozdziale II ustawy zasadniczej.
      Przepis ten nakłada na „każdego”, tj. każdą osobę podlegającą jurysdykcji
      Rzeczypospolitej Polskiej, obowiązek przestrzegania jej prawa. Adresatem
      przymusu są osoby przebywające na terytorium naszego kraju: obywatele
      polscy, cudzoziemcy oraz bezpaństwowcy (apatrydzi). Obciąża on także osoby
      prawne oraz jednostki organizacyjne nieposiadające osobowości prawnej.
      Nakaz, zasadniczo, znajduje zastosowanie również względem obywateli
      Rzeczypospolitej znajdujących się poza granicami Polski.
    </div> -->
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Zakres znaczeniowy</h2>
    <div class="pt-2">
      Poprzez określenie „prawo” należy z pewnością rozumieć akty normatywne,
      które noszą przymiot prawa powszechnie obowiązującego. Jego źródła
      wskazują art. 87 oraz art. 91 ust. 3 ustawy zasadniczej. Są to zatem:
      Konstytucja RP, ustawy, ratyfikowane umowy międzynarodowe, rozporządzenia,
      akty prawa miejscowego (na obszarze działania organów, które je
      ustanowiły) oraz prawo stanowione przez organizację międzynarodową, jeżeli
      jego obowiązywanie wynika z ratyfikowanej przez Polskę umowy
      międzynarodowej (vide: prawo wtórne/pochodne Unii Europejskiej).
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Problem aktów prawa wewnętrzego
    </h2>
    <div class="pt-2">
      Akty prawa wewnętrznego, o których wspomina art. 93 Konstytucji,
      obowiązują jedynie jednostki organizacyjnie podległe podmiotowi wydającemu
      dany akt (np. zarządzenie ministra adresowane jest wyłącznie do
      pracowników ministerstwa lub innej kierowanej przez niego struktury). Taki
      charakter prawa wewnętrznego podkreśla art. 93 ust. 2, precyzując, że nie
      może ono stanowić podstawy decyzji wobec jednostek niezwiązanych
      stosunkiem podległości. Zdaniem K. Działochy oraz A. Łukaszczuk, w
      odniesieniu do „podległych jednostek” prawo wewnętrzne również mieści się
      w pojęciu „prawo” z art. 83 Konstytucji<sup
        title="K. Działocha, A. Łukaszczuk, uwaga 2. do art. 83 [w:] L. Garlicki, M. Zubik (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, t. II, Warszawa 2016."
        >1</sup
      >. Inaczej twierdzi M. Florczak-Wątor, wymieniająca tylko prawo
      powszechnie obowiązujące<sup
        title="M. Florczak-Wątor, komentarz do art. 83 [w:] P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. WKP 2019; pkt 1 i 4."
        >2</sup
      >.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Prawo zwyczajowe</h2>
    <div class="pt-2">
      Należy podkreślić, że w zakres omawianego pojęcia nie wchodzi prawo
      zwyczajowe<sup
        title="Zob. A. Sakowicz, komentarz do art. 83 [w:] M. Safjan, L. Bosek, Konstytucja RP. Tom I. Komentarz do art. 1-86, wyd. 1., Warszawa 2016; nb. 15."
        >3</sup
      >. Nie należy jednak mylić „prawa zwyczajowego” ze „zwyczajem”.
      Poszczególne ustawy niejednokrotnie przyznają bowiem moc obowiązującą tzw.
      ustalonym zwyczajom (vide: art. 56 czy art. 354 § 1 Kodeksu cywilnego) czy
      zwyczajom miejscowym (np. art. 908 § 1 KC). Wynika ona jednak nie z samego
      faktu istnienia powszechnie uznanej, spójnej praktyki, lecz wyraźnej woli
      ustawodawcy<sup
        title="Zob. np. A. Brzozowski, J. Jastrzębski, M. Kaliński, E. Skowrońska-Bocian, Zobowiązania. Część ogólna, wyd. 3., Warszawa 2019; s. 29."
        >4</sup
      >.
    </div>

    <div class="pt-2">
      Poprzez pojęcie „prawo Rzeczypospolitej Polskiej” należy rozumieć także
      różne zasady czy normy pozaprawne, do których odsyłają poszczególne
      przepisy, otwierając tym samym system prawny na prawo naturalne. Chodzi w
      szczególności o klauzulę „zasad współżycia społecznego” czy „względy
      słuszności”, znane głównie z przepisów prawa cywilnego<sup
        title="Zob. M. Haczkowska, uwaga 3. do art. 83 [w:] M. Haczkowska (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. LexisNexis 2014."
        >5</sup
      >.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Wymogi formalne</h2>
    <div class="pt-2">
      „Prawo”, o którym mowa w art. 83 Konstytucji RP, musi także obowiązywać,
      tzn. zostać prawidłowo uchwalone/wydane, a następnie urzędowo
      opublikowane, oraz wejść w życie. Uchylone akty – o ile przepisy
      szczególne, np. międzyczasowe (intertemporalne) nie stanowią inaczej – nie
      wiążą obywateli. Prawo nie musi być znane konkretnej jednostce, jeżeli
      spełnia ww. wymogi, zgodnie z zasadą wynikającą z uznanej w naszym kręgu
      cywilizacyjnym paremii „ignorantia iuris nocet” („nieznajomość prawa
      szkodzi”). Teoretycznie każdy ma bowiem szansę zapoznać się z istniejącymi
      regulacjami, czemu służy instytucja ogłaszania (promulgacji) aktów
      normatywnych<sup
        title="Zob. w tym zakresie M. Florczak-Wątor, op. cit., pkt 3.">6</sup
      >.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Bibliografia</h2>

    <ul class="pt-1 pb-4 pl-3 text-left text-base">
      <li>
        1. A. Brzozowski, J. Jastrzębski, M. Kaliński, E. Skowrońska-Bocian,
        "Zobowiązania. Część ogólna", wyd. 3., Warszawa 2019.
      </li>
      <li>
        2. L. Garlicki, M. Zubik (red.), "Konstytucja Rzeczypospolitej Polskiej.
        Komentarz", t. I, Warszawa 2016.
      </li>
      <li>
        3. M. Haczkowska (red.), "Konstytucja Rzeczypospolitej Polskiej.
        Komentarz", opubl. LexisNexis 2014.
      </li>
      <li>
        4. M. Safjan, L. Bosek (red.), "Konstytucja RP. Tom I. Komentarz do art.
        1-86", wyd. 1., Warszawa 2016.
      </li>
      <li>
        5. P. Tuleja (red.), "Konstytucja Rzeczypospolitej Polskiej. Komentarz",
        opubl. WKP 2019.
      </li>
    </ul>
  </div>
</div>
