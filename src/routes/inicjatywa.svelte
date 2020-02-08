<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  .signature {
    text-align: right;
    font-style: italic;
  }
  p {
    text-align: justify;
  }

  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }
</style>

<svelte:head>
  <title>Inicjatywa</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r." />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={'info'} />

<div in:fly={{ y: 100, duration: 1000 }}>

  <h3>Inicjatywa</h3>

  <p>Niniejszy czytnik jest odpowiedzią na niewystarczający dostęp do tekstu prawa oraz do informacji o prawie. Obywatele Rzeczpospolitej powinni znać Konstytucję, która stanowi podstawę ich republiki - państwa prawa, które staje w ich obronie przed arbitralną i nieograniczoną władzą.</p>

  <p>Chciałbym, żeby ta strona była otwartym i przystępnym źródłem wiedzy o Konstytucji. Dotychczas dostępne strony internetowe, na których można było przeczytać Konstytucję, np. <a href="https://www.prezydent.pl/prawo/konstytucja-rp/">strona Prezydenta</a> <img class="ext-link" src="images/external-link.svg" alt="">, <a href="https://www.sejm.gov.pl/prawo/konst/polski/kon1.htm">strona Sejmu</a> <img class="ext-link" src="images/external-link.svg" alt="">, nie są wystarczająco czytelne i nie umożliwiają swobodnego przeglądania artykułów.</p>

  <p>W trakcie tworzenia czytnika, starałem się, aby był on przejrzysty, łatwy w obsłudze, wydajny, responsywny (przystosowany do korzystania na smartfonie), pozbawiony reklam, natomiast zawierający tryb offline, aplikację mobilną, a także możliwość sprawnej nawigacji,  filtrowania i wyszukiwania treści oraz prowadzenia dyskusji dotyczącej poszczególnych artykułów.</p>

  <p>Obecnie pracuję nad dodaniem wyjaśnień treści przepisów i słownikiem pojęć. Myślę, że warto byłoby stworzyć przystępny i ogólnodostępny komentarz do całej Konstytucji, ale oczywiście jest to duże przedsięwzięcie.</p>

  <p>Marzy mi się otwarty, wygodny i darmowy dostęp do całego prawa, a także do informacji o prawie i jego zmianach. Marzy mi się transparentny dla opinii publicznej model tworzenia i konsultowania nowego prawa oraz poprawiania tego już istniejącego. Chciałbym wykorzystać swoje umiejętności techniczne, aby krok po kroku tworzyć takie rozwiązania. Konstytucja.online to mój pierwszy krok.</p>

  <p>Jeżeli uważasz, że ten projekt jest ważny i potrzebny to istnieje kilka sposobów wsparcia. Po pierwsze, zachęcam do korzystania z czytnika i udostępniania go znajomym. Po drugie, jeżeli masz wiedzę o Konstytucji, którą możesz się podzielić, np. pisząc wyjaśnienia do artykułów albo definicję pojęcia z zakresu prawa konstytucyjnego do słownika pojęć, to napisz do mnie na <a href="mailto:konstytucja.online@gmail.com">ten adres</a>.</p>

  <p>Chciałbym podziękować prof. Marcinowi Matczakowi i prof. Ryszardowi Piotrowskiemu za wsparcie merytoryczne projektu.</p>

  <p class="signature">
    <a
      href="http://maciej-zalewski.pl/"
      rel="nofollow"
      target="_blank"
      class="signature">
      Maciej Zalewski
    </a>
    <img class="ext-link" src="images/external-link.svg" alt="">
  </p>
</div>

<Footer />
