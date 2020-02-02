<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
  import Footer from "../../components/Footer.svelte";
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
  h3 {
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
  <title>Komisja Konstytucyjna</title>
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

  <h3>Komisja Konstytucyjna</h3>
  <h5>
    <a
      href="https://www.wikiwand.com/pl/Komisja_Konstytucyjna_Zgromadzenia_Narodowego"
      rel="nofollow"
      target="_blank">
      Komisja Konstytucyjna ZN
    </a>
    <img class="ext-link" src="images/external-link.svg" alt="">
  </h5>

  <p>
    Komisja Konstytucyjna
    <a
      href="https://www.wikiwand.com/pl/Zgromadzenie_Narodowe_w_Polsce"
      rel="nofollow"
      target="_blank">
      Zgromadzenia Narodowego
    </a>
    <img class="ext-link" src="images/external-link.svg" alt="">
    została utworzona przez ustawę konstytucyjną z dnia 23 kwietnia 1992 r. o
    trybie przygotowania i uchwalenia Konstytucji Rzeczypospolitej Polskiej (
    <a
      href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19920670336"
      rel="nofollow"
      target="_blank">
      Dz.U. z 1992 r. nr 67, poz. 336
    </a>
    <img class="ext-link" src="images/external-link.svg" alt="">
    zm.:
    <a
      href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940610251"
      rel="nofollow"
      target="_blank">
      Dz.U. z 1994 r. nr 61, poz. 251
    </a>
    <img class="ext-link" src="images/external-link.svg" alt="">
    ).
  </p>
  <h3>Skorowidz</h3>
  <h5>
    <a
      href="https://drive.google.com/open?id=1HZL7xpnoqeRuZOSmU1LsJo_8Xaqwhaqr"
      rel="nofollow"
      target="_blank">
      skorowidz
    </a>
    <img class="ext-link" src="images/external-link.svg" alt="">
  </h5>

  <h3>Biuletyny</h3>
  <h5>
    <a
      href="https://bs.sejm.gov.pl/F?func=find-b&request=000007248&find_code=SYS&local_base=BIS01"
      rel="nofollow"
      target="_blank">
      lista biuletynów
    </a>
    <img class="ext-link" src="images/external-link.svg" alt="">
  </h5>

  <ul>

    <li>
      <a rel="prefetch" href="komisja/13">Biuletyn nr 13</a>
    </li>
    <li>
      <a rel="prefetch" href="komisja/14">Biuletyn nr 14</a>
    </li>
    <li>
      <a rel="prefetch" href="komisja">Biuletyn nr 15</a>
      Prace w toku... 🧰🔨
    </li>
  </ul>

</div>

<Footer />
