<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
</script>

<style>
  .signature {
    text-align: right;
    font-style: italic;
  }

  h2 {
    text-align: center;
  }

  img {
    width: 100%;
  }
  a {
    text-decoration: none;
  }

  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }
</style>

<svelte:head>
  <title>Informacje</title>
</svelte:head>
<nav>
  <ul>
    <li>
      <a href="preambula">Preambuła</a>
    </li>
    <li>
      <a rel="prefetch" href=".">Artykuły</a>
    </li>
    <li>
      <a class="selected" href="info">Informacje</a>
    </li>
    <!-- <li><a href="https://github.com/mzalevski/konstytucja.online"><img src="github-brands.svg" alt=""/></a></li>
		<li><a href="mailto:konstytucja.online@gmail.com"><img src="envelope-regular.svg" alt=""/></a></li> -->
  </ul>
</nav>
<h2>Manifest</h2>
<p>
  Niniejszy czytnik jest odpowiedzią na niewystarczający dostęp do tekstu prawa
  oraz do informacji o prawie. Obywatele Rzeczpospolitej powinni znać
  Konstytucję, która stanowi podstawę ich republiki - państwa prawa, które staje
  w ich obronie przed arbitralną i nieograniczoną władzą.
</p>
<p class="signature">
  <a
    href="http://maciej-zalewski.pl/"
    rel="nofollow"
    target="_blank"
    class="signature">
    Maciej Zalewski
  </a>
</p>

<h3>Aplikacja mobilna</h3>

<p>
  Do Państwa dyspozycji jest nie tylko niniejsza strona internetowa, ale także
  aplikacja mobilna, która działa w trybie offline.
</p>

<h3>Chrome (i inne przeglądarki oparte na Chromium)</h3>
<p>
  Po wejściu na stronę konstytucja.online na dole ekranu pojawi się komenda
  "Dodaj aplikację Konstytucja do ekranu głównego". Po kliknięciu tejże komendy,
  potwierdzamy klikając "Dodaj". Jak widać udało się dodać aplikację.
  Konstytucja powinna pojawić się w spisie aplikacji
</p>
<!-- <img src="instrukcja_cala.png" alt="" srcset="" /> -->
