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
  <title>Słownik - Spór kompetencyjny</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
      2 kwietnia 1997 r."
  />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
      online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
      trybunał, prezydent, rada ministrów, sejm, senat, stolica, spór, kompetencje, spór kompetencyjny"
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
    SPÓR KOMPETENCYJNY
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
      Rodzaje sporów kompetencyjnych
    </h2>

    <div class="pt-2">
      Pojęcie to pojawia się w <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/166"
        rel="prefetch">art. 166 ust. 3</a
      >
      oraz
      <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/189"
        rel="prefetch">art. 189</a
      >
      Konstytucji RP. Spór kompetencyjny występuje, kiedy co najmniej dwa organy
      mają rozbieżne stanowiska w zakresie swej kompetencji do rozstrzygnięcia określonej
      sprawy lub wykonania konkretnego zadania. Nie chodzi zatem o spór w odniesieniu
      do stanu prawnego czy faktycznego danej sprawy, lecz wyłącznie problem umocowania
      konkretnej instytucji do zajęcia się nią<sup
        title="Tak P. Czarny, uwaga 4. do art. 166 [w:] P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. WKP 2019."
        >1</sup
      >. Konflikt taki może przybrać postać pozytywną albo negatywną. Spór
      pozytywny jest sytuacją, w której obydwa organy uważają się za właściwe w
      danej sprawie lub już ją niezależnie rozpoznały. Spór negatywny występuje
      z kolei wtedy, gdy żaden z nich nie uważa się za właściwy.
    </div>

    <div class="pt-2">
      Obowiązująca Konstytucja RP wyróżnia dwa rodzaje sporów kompetencyjnych:
      pomiędzy centralnymi konstytucyjnymi organami państwa (<a
        class="underline hover:text-red-new focus:text-red-new"
        href="/189"
        rel="prefetch"
      >
        art. 189</a
      >) oraz pomiędzy organami samorządu terytorialnego a organami
      administracji rządowej (<a
        class="underline hover:text-red-new focus:text-red-new"
        href="/166"
        rel="prefetch">art. 166 ust. 3</a
      >).
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Spory kompetencyjne z art. 189 Konstytucji
    </h2>

    <div class="pt-2">
      Spory pomiędzy centralnymi konstytucyjnymi organami państwa są
      rozstrzygane przez Trybunał Konstytucyjny (<a
        class="underline hover:text-red-new focus:text-red-new"
        href="/189"
        rel="prefetch">art. 189</a
      >) – na wniosek, nigdy z urzędu. Z wnioskiem takim mogą zwrócić się:
      Prezydent RP, Marszałek Sejmu, Marszałek Senatu, Prezes Rady Ministrów,
      Pierwszy Prezes Sądu Najwyższego, Prezes Naczelnego Sądu Administracyjnego
      lub Prezes Najwyższej Izby Kontroli (<a
        class="underline hover:text-red-new focus:text-red-new"
        href="/189"
        rel="prefetch">art. 189</a
      >). Jest to węższy krąg niż w przypadku wniosku o dokonanie kontroli
      hierarchicznej zgodności norm z
      <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/189"
        rel="prefetch">art. 189 pkt 1-3</a
      >
      (vide:
      <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/191"
        rel="prefetch">art. 191</a
      >). Organy, pomiędzy którymi dochodzi do sporu, muszą spełniać dwa
      warunki: pojawiać się bezpośrednio w tekście Konstytucji (organy
      konstytucyjne) oraz obejmować zakresem terytorialnym swego działania cały
      kraj (organy centralne). Zdaniem A. Mączyńskiego i J. Podkowika, istnieje
      ponadto konieczność określenia przez Konstytucję „przynajmniej zrębowo”
      kompetencji konkretnej instytucji<sup
        title="A. Mączyński, J. Podkowik, komentarz do art. 189 [w:] M. Safjan, L. Bosek (red.), Konstytucja RP. Tom II. Komentarz do art. 87-243, wyd. 1., Warszawa 2016; nb. 27."
        >2</sup
      >. Inaczej twierdzi B. Naleziński<sup
        title="B. Naleziński, uwaga 2. do art. 189 [w:] P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. WKP 2019."
        >3</sup
      >. Przykładami organów niewątpliwie spełniających wszystkie ww. wymogi są:
      Prezydent RP, Prezes Rady Ministrów, Sejm czy Senat.
    </div>

    <div class="pt-2">
      Szczegóły procedury rozstrzygnięcia takiego sporu określa ustawa z dnia 30
      listopada 2016 r. o organizacji i trybie postępowania przed Trybunałem
      Konstytucyjnym<sup title="Dz.U. z 2019 r. poz. 2393.">4</sup> (dalej jako „u.o.p.TK”).
      Zgodnie z art. 86 u.o.p.TK, wszczęcie postępowania przed Trybunałem skutkuje
      zawieszeniem procedur toczących się przed skonfliktowanymi organami (ust. 1),
      zaś sam TK może wydać postanowienie o tymczasowym uregulowaniu kwestii spornych,
      „jeżeli jest to konieczne dla zapobieżenia poważnym szkodom lub podyktowane
      szczególnie ważnym interesem społecznym” (ust. 2). Rozstrzygnięcie sporu kompetencyjnego
      następuje w formie postanowienia (art. 103 ust. 2 pkt 1 u.o.p.TK). Trybunał
      Konstytucyjny rozpoznaje sprawę w pełnym składzie (art. 37 ust. 1 pkt 1 lit.
      a u.o.p.TK).
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Spory kompetencyjne z art. 166 ust. 3 Konstytucji
    </h2>

    <div class="pt-2">
      Spory kompetencyjne pomiędzy organami samorządu terytorialnego a organami
      administracji rządowej rozstrzygają z kolei sądy administracyjne. Przez
      „organ samorządu terytorialnego” ustawa z dnia 25 lipca 2002 r. – Prawo o
      ustroju sądów administracyjnych<sup title="Dz.U. z 2021 r. poz. 137."
        >5</sup
      >
      („PUSA”) pośrednio nakazuje rozumieć zarówno organy jednostek samorządu terytorialnego
      (np. wójtów, burmistrzów, prezydentów miast), jak i samorządowe kolegia odwoławcze<sup
        title="Por. A. Skoczylas, W. Piątek, komentarz do art. 166 [w:] M. Safjan, L. Bosek, Konstytucja RP. Tom II. Komentarz do art. 87-243, wyd. 1., Warszawa 2016; nb. 19."
        >6</sup
      >
      (art. 1 § 1 PUSA). Należy zaznaczyć, że
      <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/166"
        rel="prefetch">art. 166 ust. 3</a
      >
      Konstytucji RP nie określa zakresu terytorialnego działania organów administracji
      rządowej, co oznacza, iż pojęcie to obejmuje zarówno organy rządowej administracji
      centralnej, jak i terenowej<sup
        title="Zob. P. Czarny, uwaga 4. do art. 166 [w:] P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. WKP 2019."
        >7</sup
      >.
    </div>

    <div class="pt-2">
      Szczegóły postępowania w tej kwestii określa ustawa z dnia 30 sierpnia
      2002 r. – Prawo o postępowaniu przed sądami administracyjnymi<sup
        title="Dz.U. z 2019 r. poz. 2325 ze zm.">8</sup
      >
      („PPSA”). Instytucją rozstrzygającą przedmiotowe konflikty jest – jako jedyna
      instancja – Naczelny Sąd Administracyjny (art. 15 § 1 pkt 4 w zw. z art. 4
      PPSA). Werdykt zapada na posiedzeniu niejawnym w składzie trzech sędziów. Przybiera
      formę postanowienia, w którym wskazuje się organ właściwy do rozpoznania określonej
      sprawy, nie zaś – typu spraw. Rozstrzygnięcia sporu dokonuje się wyłącznie
      na wniosek legitymowanego podmiotu (art. 15 § 2 PPSA), który uprawnia ustawa
      z dnia 14 czerwca 1960 r. – Kodeks postępowania administracyjnego<sup
        title="Dz.U. z 2020 r. poz. 256 ze zm.">9</sup
      > („KPA”). Na podstawie art. 22 § 3 KPA, z wnioskiem takim mogą zwrócić się:
      strona postępowania, w którym zaistniał spór, organ pozostający w sporze, minister
      właściwy ds. administracji publicznej (obecnie: Minister Spraw Wewnętrznych
      i Administracji), Minister Sprawiedliwości, Prokurator Generalny lub Rzecznik
      Praw Obywatelskich.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">
      Spór kompetencyjny a spór o właściwość
    </h2>

    <div class="pt-2">
      Pojęciem, które ustawodawca odróżnia od sporu kompetencyjnego, jest spór o
      właściwość. Określenie to nie występuje na gruncie Konstytucji RP,
      niemniej jednak pojawia się np. w treści KPA. Jego art. 22 nazywa „sporami
      o właściwość” większość konfliktów dot. możności załatwienia określonej
      sprawy, z wyłączeniem toczących się pomiędzy administracją rządową a
      samorządem terytorialnym. Te, zgodnie z normą konstytucyjną, tworzą
      kategorię sporów kompetencyjnych. Dopóki zatem w sporze pozostają organy
      tego samego rodzaju (tj. albo rządowe, albo samorządowe), dopóty występuje
      spór o właściwość, zasadniczo rozstrzygany przez wspólny organ wyższego
      stopnia lub inny wyznaczony przez ustawodawcę na zasadach opisanych w art.
      22 § 1 KPA (gdy zaś takiego brakuje, sprawę rozpoznaje sąd
      administracyjny).
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Bibliografia</h2>

    <ul class="pt-1 pb-4 pl-3 text-left text-base">
      <li>
        1. M. Safjan, L. Bosek (red.), "Konstytucja RP. Tom II. Komentarz do
        art. 87-243", wyd. 1., Warszawa 2016.
      </li>
      <li>
        2. P. Tuleja (red.), "Konstytucja Rzeczypospolitej Polskiej. Komentarz",
        opubl. WKP 2019.
      </li>
    </ul>
  </div>
</div>
