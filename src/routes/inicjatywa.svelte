<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 700 && window.innerHeight <= 900;
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
  <title>Inicjatywa</title>
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
  Inicjatywa
</h1>

<div class="text-lg text-justify" in:fade={{ duration: 3000 }}>
  <p class="mt-4">
    Niniejszy czytnik jest odpowiedzią na niewystarczający dostęp do tekstu
    prawa oraz do informacji o prawie. Obywatele Rzeczpospolitej powinni znać
    Konstytucję, która stanowi podstawę ich republiki - państwa prawa, które
    staje w ich obronie przed arbitralną i nieograniczoną władzą.
  </p>

  <p class="pt-2">
    Chciałbym, żeby ta strona była otwartym i przystępnym źródłem wiedzy o
    Konstytucji. Dotychczas dostępne strony internetowe, na których można było
    przeczytać Konstytucję, np.
    <a
      class="underline hover:text-red-new focus:text-red-new"
      href="https://www.prezydent.pl/prawo/konstytucja-rp/"
      target="_blank"
    >
      strona Prezydenta
    </a>
    <svg class="inline w-3 h-3 ml-px fill-current" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9
        2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
      />
    </svg>
    ,
    <a
      class="underline hover:text-red-new focus:text-red-new"
      href="https://www.sejm.gov.pl/prawo/konst/polski/kon1.htm"
      target="_blank"
    >
      strona Sejmu
    </a>
    <svg class="inline w-3 h-3 ml-px fill-current" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9
        2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
      />
    </svg>
    , nie są wystarczająco czytelne i nie umożliwiają swobodnego przeglądania artykułów.
  </p>

  <p class="pt-2">
    W trakcie tworzenia czytnika, starałem się, aby był on przejrzysty, łatwy w
    obsłudze, wydajny, responsywny (przystosowany do korzystania na smartfonie),
    pozbawiony reklam, natomiast zawierający tryb offline, aplikację mobilną, a
    także możliwość sprawnej nawigacji, filtrowania i wyszukiwania treści oraz
    prowadzenia dyskusji dotyczącej poszczególnych artykułów.
  </p>

  <p class="pt-2">
    Obecnie pracuję nad dodaniem wyjaśnień treści przepisów i słownikiem pojęć.
    Myślę, że warto byłoby stworzyć przystępny i ogólnodostępny komentarz do
    całej Konstytucji, ale oczywiście jest to duże przedsięwzięcie.
  </p>

  <p class="pt-2">
    Marzy mi się otwarty, wygodny i darmowy dostęp do całego prawa, a także do
    informacji o prawie i jego zmianach. Marzy mi się transparentny dla opinii
    publicznej model tworzenia i konsultowania nowego prawa oraz poprawiania
    tego już istniejącego. Chciałbym wykorzystać swoje umiejętności techniczne,
    aby krok po kroku tworzyć takie rozwiązania. Konstytucja.online to mój
    pierwszy krok.
  </p>

  <p class="pt-2">
    Jeżeli uważasz, że ten projekt jest ważny i potrzebny to istnieje kilka
    sposobów wsparcia. Po pierwsze, zachęcam do korzystania z czytnika i
    udostępniania go znajomym. Po drugie, jeżeli masz wiedzę o Konstytucji,
    którą możesz się podzielić, np. pisząc wyjaśnienia do artykułów albo
    definicję pojęcia z zakresu prawa konstytucyjnego do słownika pojęć, to
    napisz do mnie na
    <a
      class="underline hover:text-red-new focus:text-red-new"
      href="mailto:konstytucja.online@gmail.com"
      target="_blank"
    >
      ten adres
    </a>
    .
  </p>

  <p class="pt-2">
    Chciałbym podziękować prof. Marcinowi Matczakowi i prof. Ryszardowi
    Piotrowskiemu za wsparcie merytoryczne projektu.
  </p>

  <div>
    <p class="pt-2">Przygotowaniem słownika zajmował/li się:</p>
    <ul>
      <li>
        - <a target="_blank" href="https://twitter.com/DNWysocki"
          >Dawid Wysocki</a
        >
      </li>
    </ul>
  </div>

  <p class="flex items-center justify-end pt-4">
    <a
      class="underline hover:text-red-new focus:text-red-new"
      href="https://mzalevski.pl/"
      target="_blank"
    >
      Maciej Zalewski
    </a>
    <svg class="inline w-4 h-4 ml-px fill-current" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9
        2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
      />
    </svg>
  </p>
</div>
