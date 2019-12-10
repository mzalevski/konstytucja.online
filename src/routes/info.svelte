<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  const { page } = stores();
</script>

<style>
  .signature {
    text-align: right;
    font-style: italic;
  }
  .cnstttn-act-info {
    border-bottom: 1px solid rgba(160, 40, 40, 0.1);
    padding-bottom: 1em;
    margin-bottom: 2em;
    margin-top: 2em;
  }
  img {
    width: 100%;
  }

  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }

  ol {
    padding-left: 2em;
  }
  ol li {
    list-style-type: decimal;
  }
  ol li a {
    padding: 0;
  }

  @media (max-width: 1000px) {
    nav ul {
      display: flex;
      justify-content: center;
    }
    li a {
      margin: 0em 0;
      padding: 0.2em 0.5em;
      text-align: center;
    }
    ol li {
      text-align: justify;
    }
    nav {
      display: block;
    }
  }
</style>

<svelte:head>
  <title>Informacje</title>
  <meta name="description" content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r.">
  <meta name="keywords" content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline, online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent, rada ministrów, sejm, senat">
  <meta name="konstytucja" content="website">
</svelte:head>
<nav>
  <ul>
    <li>
      <a rel="prefetch" href="preambula">Preambuła</a>
    </li>
    <li>
      <a rel="prefetch" href=".">Artykuły</a>
    </li>
    <li>
      <a class="selected" rel="prefetch" href="info">Informacje</a>
    </li>
  </ul>
</nav>
<div in:fly={{ y: 100, duration: 1000 }}>
  <div class="cnstttn-act-info">
    <p>
      Konstytucja Rzeczypospolitej Polskiej (<a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19970780483'>Dz.U. 1997 nr 78 poz. 483</a>) z dnia 2 kwietnia 1997 r. uchwalona przez Zgromadzenie Narodowe w dniu 2 kwietnia 1997 r., przyjęta przez Naród w referendum konstytucyjnym w dniu 25 maja 1997 r., podpisana przez Prezydenta Rzeczypospolitej Polskiej w dniu 16 lipca 1997 r.</p>
    <p>Akty zmieniające:</p>
    <ol>
      <li><a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20010280319'>Obwieszczenie Prezesa Rady Ministrów z dnia 26 marca 2001 r. o sprostowaniu błędów (Dz.U. 2001 nr 28 poz. 319)</a></li>
      <li><a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20062001471'>Ustawa z dnia 8 września 2006 r. o zmianie Konstytucji Rzeczypospolitej Polskiej (Dz.U. 2006 nr 200 poz. 1471)</a></li>
      <li><a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20091140946'>Ustawa z dnia 7 maja 2009 r. o zmianie Konstytucji Rzeczypospolitej Polskiej (Dz.U. 2009 nr 114 poz. 946)</a></li>
    </ol>
  </div>
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
    <strong>Chrome</strong> (i inne przeglądarki oparte na Chromium, np. Opera, Brave). Po wejściu na stronę konstytucja.online na smartfonie na dole ekranu pojawi się komenda "Dodaj aplikację Konstytucja do ekranu głównego". Po kliknięciu tej komendy, potwierdzamy klikając "Dodaj". Konstytucja powinna pojawić się w spisie aplikacji. Aplikacja działa także bez dostępu do internetu. Jeżeli część treści nie będzie się ładować w trybie offline, to należy włączyć internet i przeładować stronę; przy następnym podejściu te treści będą widoczne także w trybie offline.
  </p>
  <img src="images/chrome-app-guide.png" alt="" srcset="" />
  <p>
    <strong>Firefox.</strong> Po wejściu na stronę konstytucja.online na smartfonie u góry ekranu pojawi się ikonka domu z plusem w środku. Po kliknięciu ikonki potwierdzamy klikając "Dodaj do ekranu głównego". Konstytucja powinna pojawić się w spisie aplikacji. Aplikacja działa także bez dostępu do internetu. Jeżeli część treści nie będzie się ładować w trybie offline, to należy włączyć internet i przeładować stronę; przy następnym podejściu te treści będą widoczne także w trybie offline.
  </p>
  <img src="images/ff-app-guide.png" alt="" srcset="" />
</div>