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
  <title>Komisja Konstytucyjna</title>
  <meta name="description" content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r.">
  <meta name="keywords" content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline, online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent, rada ministrów, sejm, senat">
  <meta name="konstytucja" content="website">
</svelte:head>

<Nav segment={'info'}/>

<div in:fly={{ y: 100, duration: 1000 }}>

  <h3>Komisja Konstytucyjna</h3>
  <h5><a href='http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19970780483' rel="nofollow" target="_blank">Dz.U. 1997 nr 78 poz. 483</a> nie wiem co tu</h5>

  <p>Komisja Konstytucyjna <a href="https://www.wikiwand.com/pl/Zgromadzenie_Narodowe_w_Polsce" rel="nofollow" target="_blank">Zgromadzenia Narodowego</a> została utworzona przez ustawę konstytucyjną z dnia 23 kwietnia 1992 r. o trybie przygotowania i uchwalenia Konstytucji Rzeczypospolitej Polskiej (<a href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19920670336" rel="nofollow" target="_blank">Dz.U. z 1992 r. nr 67, poz. 336</a>; zm.: <a href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940610251" rel="nofollow" target="_blank">Dz.U. z 1994 r. nr 61, poz. 251).</a></p>

  <h3>Biuletyny</h3>
  <h5><a href='https://bs.sejm.gov.pl/F?func=find-b&request=000007248&find_code=SYS&local_base=BIS01' rel="nofollow" target="_blank">biuletyny lista</a></h5>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repudiandae ab cumque est minus quis earum, dignissimos sed aperiam. Autem, cum. Omnis autem voluptas error iusto. Eum laudantium officia rem dolore quis, dolor unde suscipit accusantium repudiandae quas, temporibus architecto earum atque qui ducimus repellendus aut tempore animi harum, nam modi quasi iure ab consectetur. Saepe ipsam in corrupti molestias voluptatum expedita, omnis, illo odio, nobis reiciendis vitae ea vero.</p>

  <ol>
    <li>w <a rel="prefetch" href="/31">art. 31</a> w ust. 3 zamiast wyrazu „by” miał być wyraz „być”,</li>
    <li>w <a rel="prefetch" href="/93">art. 93</a> w ust. 1 zamiast wyrazu „organizacyjne” miał być wyraz „organizacyjnie”.</li>
  </ol>

</div>

<Footer />