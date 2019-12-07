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
  @media (max-width: 1000px) {
    ul {
      display: flex;
      justify-content: center;
    }
    li a {
      margin: 0em 0;
      padding: 0.2em 0.5em;
      text-align: center;
    }
    nav {
      display: block;
    }
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
<!-- <h2>Manifest</h2> -->
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

<!-- <h3>Chrome (i inne przeglądarki oparte na Chromium)</h3> -->
<p>
  <strong>Chrome</strong> (i inne przeglądarki oparte na Chromium, np. Brave). Po wejściu na stronę konstytucja.online na smartfonie na dole ekranu pojawi się komenda "Dodaj aplikację Konstytucja do ekranu głównego". Po kliknięciu tej komendy, potwierdzamy klikając "Dodaj". Konstytucja powinna pojawić się w spisie aplikacji. Aplikacja działa także bez dostępu do internetu. Jeżeli część treści nie będzie się ładować w trybie offline, to należy włączyć internet i przeładować stronę; przy następnym podejściu te treści będą widoczne także w trybie offline.
</p>
<img src="chrome-app-guide.png" alt="" srcset="" />
<p>
  <strong>Firefox.</strong> Po wejściu na stronę konstytucja.online na smartfonie u góry ekranu pojawi się ikonka domu z plusem w środku. Po kliknięciu ikonki potwierdzamy klikając "Dodaj do ekranu głównego". Konstytucja powinna pojawić się w spisie aplikacji. Aplikacja działa także bez dostępu do internetu. Jeżeli część treści nie będzie się ładować w trybie offline, to należy włączyć internet i przeładować stronę; przy następnym podejściu te treści będą widoczne także w trybie offline.
</p>
<img src="ff-app-guide.png" alt="" srcset="" />
<!-- <p>
  <strong>Safari (do zrobienia).</strong> Po wejściu na stronę konstytucja.online na smartfonie u góry ekranu pojawi się komenda "Dodaj aplikację Konstytucja do ekranu głównego". Po kliknięciu tejże komendy, potwierdzamy klikając "Dodaj". Konstytucja powinna pojawić się w spisie aplikacji. Aplikacja działa także bez dostępu do internetu.
</p>
<img src="ff-app-guide.png" alt="" srcset="" /> -->

