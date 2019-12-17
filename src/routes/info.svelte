<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
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
  <title>Informacje</title>
  <meta name="description" content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r.">
  <meta name="keywords" content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline, online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent, rada ministrów, sejm, senat">
  <meta name="konstytucja" content="website">
</svelte:head>

<Nav segment={'info'}/>

<div in:fly={{ y: 100, duration: 1000 }}>
<h3>Konstytucja jako akt prawny</h3>
  <p>
    Konstytucja Rzeczypospolitej Polskiej <a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19970780483'>(Dz.U. 1997 nr 78 poz. 483</a>) z dnia 2 kwietnia 1997 r. uchwalona przez Zgromadzenie Narodowe w dniu 2 kwietnia 1997 r., przyjęta przez Naród w referendum konstytucyjnym w dniu 25 maja 1997 r., podpisana przez Prezydenta Rzeczypospolitej Polskiej w dniu 16 lipca 1997 r.</p>
  <p>Akty zmieniające:</p>
  <ol>
    <li>Obwieszczenie Prezesa Rady Ministrów z dnia 26 marca 2001 r. o sprostowaniu błędów <a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20010280319'>(Dz.U. 2001 nr 28 poz. 319)</a></li>
    <li>Ustawa z dnia 8 września 2006 r. o zmianie Konstytucji Rzeczypospolitej Polskiej <a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20062001471'>(Dz.U. 2006 nr 200 poz. 1471)</a></li>
    <li>Ustawa z dnia 7 maja 2009 r. o zmianie Konstytucji Rzeczypospolitej Polskiej <a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20091140946'>(Dz.U. 2009 nr 114 poz. 946)</a></li>
  </ol>
</div>