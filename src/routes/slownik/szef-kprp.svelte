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
  <title>Słownik - Szef KPRP</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
      2 kwietnia 1997 r."
  />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
      online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
      trybunał, prezydent, rada ministrów, sejm, senat, kancelaria, kancelaria prezydenta, szef kancelarii prezydenta"
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
      href="/slownik/kancelaria-prezydenta"
    >
      Kancelaria Prezydenta
    </a>
  </div>
  <div class="flex justify-center w-24" />
  <div class="flex justify-end w-24" />
</div>

<div class="sm:pt-10 md:pt-12 lg:pt-16">
  <h1 class="text-3xl font-thin text-center sm:text-5xl leading-tight">
    SZEF KANCELARII PREZYDENTA<br />RZECZYPOSPOLITEJ POLSKIEJ
  </h1>
  <h2 class="mt-2 text-lg font-thin text-center sm:text-2xl text-gray-700">
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
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Charakter prawny</h2>
    <div>
      Podmiot stojący na czele aparatu pomocniczego głowy państwa, jakim jest
      Kancelaria Prezydenta Rzeczypospolitej Polskiej, przewidziana w <a
        class="underline hover:text-red-new focus:text-red-new"
        href="/143"
        rel="prefetch">art. 143</a
      >
      Konstytucji RP. W związku z takim charakterem, nie może być on uznany za konstytucyjny
      organ państwa; z kolei, jako niezatrudniony w administracji rządowej, nie stanowi
      członka korpusu służby cywilnej<sup
        title="Zob. P. Czarny, Art. 143. Kancelaria Prezydenta [w:] P. Tuleja (red.), Konstytucja Rzeczypospolitej Polskiej. Komentarz, opubl. WKP 2019; pkt 3."
        >1</sup
      >.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Powołanie i odwołanie</h2>
    <div class="pt-2">
      Sposób jego powoływania oraz odwoływania określa <a
        class="underline hover:text-red-new focus:text-red-new"
        rel="prefetch"
        href="/144">art. 144 ust. 3 pkt 28</a
      >
      ustawy zasadniczej. Dzieje się to w drodze skorzystania przez Prezydenta z
      prerogatywy, w pełni samodzielnie. Decyzja głowy państwa przybiera – jako akt
      indywidualno-konkretny – formę postanowienia (a nie zarządzenia; vide: Postanowienie
      Prezydenta Rzeczypospolitej Polskiej z dnia 7 października 2020 r. nr 1131.29.2020
      o powołaniu Szefa Kancelarii Prezydenta Rzeczypospolitej Polskiej<sup
        title="M.P. 2020 poz. 963.">2</sup
      >). Nie podlega ono kontroli sądowoadministracyjnej, ponieważ nie stanowi
      przejawu wykonywania zadań z zakresu administracji publicznej<sup
        title="Por. uchwała NSA (7) z 9 listopada 1998 r., sygn. akt OPS 4/98, opubl. ONSA 1999, nr 1, poz. 6."
        >3</sup
      >.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Zasada niepołączalności</h2>
    <div class="pt-2">
      Stanowisko to objęto zasadą niepołączalności (<italic class="italic"
        >incompatibilitas</italic
      >;
      <a
        class="underline hover:text-red-new focus:text-red-new"
        rel="prefetch"
        href="/103">art. 103</a
      > Konstytucji). Oznacza ona, w tym przypadku, zakaz jednoczesnego wykonywania
      mandatu posła lub senatora.
    </div>

    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Kompetencje</h2>
    <div class="pt-2">
      Zakres kompetencji Szefa KPRP wynika z treści Statutu Kancelarii
      Prezydenta Rzeczypospolitej Polskiej, stanowiącego załącznik do
      prezydenckiego zarządzenia (obecnie: Zarządzenie Prezydenta
      Rzeczypospolitej Polskiej z dnia 7 sierpnia 2015 r. w sprawie nadania
      statutu Kancelarii Prezydenta Rzeczypospolitej Polskiej<sup
        title="M.P. 2015 poz. 762 ze zm.">4</sup
      >). Akt ten przewiduje, że Szef Kancelarii, kierując jej pracami, działa
      przede wszystkim poprzez wydawanie zarządzeń, decyzji oraz poleceń (§ 2
      ust. 1 i 3 Statutu). To on określa zakres, w jakim pracami KPRP kierują
      inni urzędnicy Kancelarii: Zastępca Szefa KPRP, Szef Gabinetu Prezydenta
      RP, Dyrektor Generalny KPRP oraz podrzędni sekretarze i podsekretarze
      stanu (§ 2 ust. 2). Może on ponadto imiennie upoważniać te podmioty do
      działania w jego imieniu (§ 4 ust. 1). Szef KPRP legitymuje się poza tym
      uprawnieniem do powoływania specjalnych zespołów w Kancelarii,
      przeznaczonych do wykonywania konkretnych zadań, określając ich nazwę,
      zakres, sposób tudzież okres działania czy skład osobowy (§ 4 ust. 2).
      Nadaje również regulamin organizacyjny Kancelarii Prezydenta RP, normujący
      organizację wewnętrzną urzędu, w tym poszczególnych komórek w KPRP (§ 6
      ust. 1). Zatwierdza także regulamin wewnętrzny konkretnej komórki
      organizacyjnej (§ 6 ust. 3). Szef KPRP ustala, za zgodą Prezydenta RP,
      liczbę etatów w Kancelarii na dany rok budżetowy; dokonuje ponadto – już
      samodzielnie – ich podziału pomiędzy poszczególne komórki organizacyjne (§
      3 ust. 4-5).
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Biuro Szefa Kancelarii</h2>
    <div class="pt-2">
      Zaplecze Szefa Kancelarii Prezydenta RP stanowi Biuro Szefa Kancelarii,
      będące jedną z komórek organizacyjnych KPRP (§ 5 pkt 1).
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Zastępowanie Szefa KPRP</h2>
    <div class="pt-2">
      Pod nieobecność Szefa KPRP jego obowiązki wykonuje Zastępca Szefa KPRP.
      Gdyby jednak także on nie był obecny, zadania te przejmuje wyznaczony
      przez Szefa Kancelarii sekretarz lub podsekretarz stanu w KPRP.
    </div>
    <h2 class="mt-8 text-lg font-thin sm:text-2xl">Odpowiedzialność prawna</h2>
    <div class="pt-2">
      Odpowiedzialność za działania Szefa Kancelarii Prezydenta RP, jako
      urzędnika swojego aparatu pomocniczego, ponosi Prezydent Rzeczypospolitej
      Polskiej<sup
        title="Zob. B. Banaszak, komentarz do art. 143 [w:] tenże, Konstytucja Rzeczypospolitej Polskiej. Komentarz, wyd. 2., Warszawa 2012."
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
