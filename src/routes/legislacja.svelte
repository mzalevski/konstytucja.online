<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  p {
    text-align: justify;
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
  h3, h4 {
    padding-top: 16px;
  }

  @media (max-width: 1100px) {
    li a {
      margin: 0em 0;
      padding: 0.2em 0.5em;
      text-align: center;
    }
    ol li {
      text-align: justify;
    }
  }
</style>

<svelte:head>
  <title>Legislacja</title>
  <meta name="description" content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r.">
  <meta name="keywords" content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline, online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent, rada ministrów, sejm, senat">
  <meta name="konstytucja" content="website">
</svelte:head>

<Nav segment={'info'}/>

<div in:fly={{ y: 100, duration: 1000 }}>

  <h3>Uchwalenie Konstytucji</h3>
  <h5><a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19970780483' rel="nofollow" target="_blank">Dz.U. 1997 nr 78 poz. 483</a> <img class="ext-link" src="images/external-link.svg" alt=""></h5>

  <p>Konstytucja Rzeczypospolitej Polskiej została uchwalona przez Zgromadzenie Narodowe w dniu 2 kwietnia 1997 r., przyjęta przez Naród w referendum konstytucyjnym w dniu 25 maja 1997 r., a następnie podpisana przez Prezydenta Rzeczypospolitej Polskiej w dniu 16 lipca 1997 r. i ogłoszona tego samego dnia. Zgodnie z <a rel="prefetch" href="/243">art. 243</a> nowej konstytucji po 3 miesiącach od daty jej ogłoszenia, tj. 17 października 1997 roku weszła ona w życie. Jednocześnie straciły moc obowiązujące nadal niektóre przepisy Konstytucji PRL z 22 lipca 1952 roku, „mała konstytucja” (Ustawa Konstytucyjna z 17 października 1992 roku o wzajemnych stosunkach między władzą ustawodawczą i wykonawczą Rzeczypospolitej Polskiej oraz o samorządzie terytorialnym) i Ustawa Konstytucyjna z dnia 23 kwietnia 1992 roku o trybie przygotowania i uchwalenia Konstytucji Rzeczypospolitej Polskiej (<a rel="prefetch" href="/242">art. 242</a> nowej konstytucji).</p>

  <h3>Sprostowanie błędów</h3>
  <h5><a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20010280319' rel="nofollow" target="_blank">Dz.U. z 2001 r. nr 28, poz. 319</a> <img class="ext-link" src="images/external-link.svg" alt=""></h5>

  <p>W pierwotnym tekście Konstytucji, znalazły się dwa błędy, które zgodnie z art. 17 ust. 3 ustawy z dnia 20 lipca 2000 r. o ogłaszaniu aktów normatywnych i niektórych innych aktów prawnych (<a href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20000620718" rel="nofollow" target="_blank">Dz.U. 2000 nr 62 poz. 718</a> <img class="ext-link" src="images/external-link.svg" alt="">) zostały sprostowane w dniu 26 marca 2001 r. obwieszczeniem Prezesa Rady Ministrów:</p>

  <ol>
    <li>w <a rel="prefetch" href="/31">art. 31</a> w ust. 3 zamiast wyrazu „by” miał być wyraz „być”,</li>
    <li>w <a rel="prefetch" href="/93">art. 93</a> w ust. 1 zamiast wyrazu „organizacyjne” miał być wyraz „organizacyjnie”.</li>
  </ol>

  <h3>Nowelizacje Konstytucji</h3>

  <h4>Nowelizacja z 2006</h4>
  <h5><a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20062001471' rel="nofollow" target="_blank">Dz.U. 2006 nr 200 poz. 1471</a> <img class="ext-link" src="images/external-link.svg" alt=""></h5>

  <p>8 września 2006 Sejm uchwalił ustawę o zmianie <a rel="prefetch" href="/55">art. 55</a> Konstytucji, wprowadzającą możliwość ekstradycji obywatela polskiego na wniosek innego państwa lub sądowego organu międzynarodowego w związku z popełnieniem za granicą czynu, który stanowi przestępstwo zarówno za granicą, jak i w Polsce, jeżeli ekstradycję taką dopuszcza ratyfikowana umowa międzynarodowa lub ustawa wykonująca akt prawa stanowionego przez instytucję międzynarodową, której Polska jest członkiem. Nowelizacja umożliwiła dokonywanie ekstradycji między innymi na podstawie europejskiego nakazu aresztowania.</p>

  <p>W <a href="http://orka.sejm.gov.pl/SQL.nsf/glosowania?OpenAgent&5&24&23" rel="nofollow" target="_blank">głosowaniu</a>, <img class="ext-link" src="images/external-link.svg" alt=""> wzięło udział 421 posłów, za głosowało 344, przeciw 48, wstrzymało się 29, nie głosowało 39 posłów. Tekst ustawy został przekazany następnie do Senatu, który 14 września 2006 – na podstawie art. 235 ust. 2 in fine konstytucji – uchwalił ustawę w brzmieniu uchwalonym przez Sejm. 6 listopada 2006 Prezydent RP Lech Kaczyński <a href="https://www.prezydent.pl/archiwum-lecha-kaczynskiego/ustawy/ustawy-podpisane/art,33,listopad-2006-r-.html" rel="nofollow" target="_blank">podpisał nowelę</a> <img class="ext-link" src="images/external-link.svg" alt=""> którą opublikowano 7 listopada 2006; zgodnie z art. 2 ustawy o zmianie Konstytucji, nowelizacja weszła w życie z dniem ogłoszenia.</p>

  <h4>Nowelizacja z 2009</h4>
  <h5><a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20091140946' rel="nofollow" target="_blank">Dz.U. 2009 nr 114 poz. 946</a> <img class="ext-link" src="images/external-link.svg" alt=""></h5>

  <p>7 maja 2009 Sejm VI kadencji uchwalił ustawę o zmianie <a rel="prefetch" href="/99">art. 99</a> Konstytucji (dodano ust. 3), dotyczącą rozszerzenia przesłanek biernego prawa wyborczego. Dodany przepis art. 99 ust. 3 Konstytucji stanowi, że „wybraną do Sejmu lub do Senatu nie może być osoba skazana prawomocnym wyrokiem na karę pozbawienia wolności za przestępstwo umyślne, ścigane z oskarżenia publicznego”.</p>

  <p> W <a href="http://orka.sejm.gov.pl/SQL.nsf/glosowania?OpenAgent&6&41&8" rel="nofollow" target="_blank">głosowaniu</a> <img class="ext-link" src="images/external-link.svg" alt=""> wzięło udział 413 posłów, za głosowało 404, przeciw 0, wstrzymało się 9, nie głosowało 47. Ustawa została 1 lipca 2009 uchwalona przez Senat, a następnie <a href="https://www.prezydent.pl/archiwum-lecha-kaczynskiego/ustawy/ustawy-podpisane/art,1,lipiec-2009-r-.html" rel="nofollow" target="_blank">podpisana</a> <img class="ext-link" src="images/external-link.svg" alt=""> 9 lipca 2009 przez Prezydenta RP Lecha Kaczyńskiego i opublikowana 20 lipca 2009. Zmiana weszła w życie 21 października 2009, mając jednak zastosowanie dopiero począwszy od kolejnych kadencji Sejmu i Senatu (tj. od VII kadencji Sejmu i VIII kadencji Senatu).</p>

</div>

<Footer />