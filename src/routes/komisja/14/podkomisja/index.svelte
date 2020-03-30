<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../../../../components/Nav.svelte";
  import Footer from "../../../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Biuletyn nr 14</title>
</svelte:head>

<Nav segment={'info'} />

<div in:fly={{ y: 100, duration: 1000 }}>

  <h3>Posiedzenia Komisji Konstytucyjnej ZN (21, 22 i 23.02.1995 r.)</h3>
  <!-- <h5>
    <a
      href="https://drive.google.com/file/d/1awtjblaTcKfacOyLZwlw_y9ki_226um_/view?usp=sharing"
      rel="nofollow"
      target="_blank">
      ORYGINAŁ BIULETYNU
    </a>
  </h5> -->

  <p>
    Dnia 22 lutego 1995 r. podkomisja podstaw ustroju politycznego i
    społeczno-gospodarczego, obradująca pod przewodnictwem posła Ryszarda Bugaja
    (UP), rozpatrzyła: —— propozycje przepisów konstytucyjnych dotyczących
    stosunków państwo—kościół. W posiedzeniu udział wzięli: przedstawiciel
    Prezydenta RP, prof. Andrzej Rzepliński, przedstawiciele kościołów 1
    związków wyznaniowych oraz eksperci konstytucjonaliści.
  </p>

  <ul class="days">

    <a rel="prefetch" href="komisja/14/podkomisja/p1">
      <li>
        <p>Podkomisja - cz. I</p>
        <p>(22 lutego)</p>
      </li>
    </a>
    <a rel="prefetch" href="komisja/14/podkomisja/p2">
      <li>
        <p>Podkomisja - cz. II</p>
        <p>(22 lutego)</p>
      </li>
    </a>
  </ul>

</div>
