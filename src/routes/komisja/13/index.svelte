<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../../../components/Nav.svelte";
  import Footer from "../../../components/Footer.svelte";
</script>

<style>
  p {
    text-align: justify;
  }
  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }

  ol li a {
    padding: 0;
  }
  h3,
  h4 {
    padding-top: 16px;
  }
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  @media (max-width: 1100px) {
    li a {
      margin: 0em 0;
      padding: 0.2em 0.5em;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>Biuletyn nr 13</title>
</svelte:head>

<Nav segment={'info'} />

<div in:fly={{ y: 100, duration: 1000 }}>

  <h3>Posiedzenia Komisji Konstytucyjnej ZN (7, 8 i 9.02.1995 r.)</h3>
  <h5>
    <a
      href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19970780483"
      rel="nofollow"
      target="_blank">
      Dz.U. 1997 nr 78 poz. 483
    </a>
    nie wiem co tu
  </h5>
  <p>
    W dniach 7, 8 i 9 lutego 1995 r., Komisja Konstytucyjna Zgromadzenia
    Narodowego, obradująca pod przewodnictwem posła Aleksandra Kwaśniewskiego
    (SLD), rozpatrzyła: projekt jednolity Konstytucji Rzeczypospolitej Polskiej
    (w ujęciu wariantowym), sprawy różne.
  </p>

  <ul>

    <li>
      <a rel="prefetch" href="komisja/13/1">Dzień 1 (7 lutego)</a>
    </li>
    <li>
      <a rel="prefetch" href="komisja/13/2">Dzień 2 (8 lutego)</a>
    </li>
    <li>
      <a rel="prefetch" href="komisja/13/3">Dzień 3 (9 lutego)</a>
    </li>
  </ul>

</div>

<Footer />
