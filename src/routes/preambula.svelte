<script>
  import { fly } from "svelte/transition";
</script>

<style>
  p {
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  .preamble {
    padding: 1em 3em;
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
  <title>Preambuła</title>
  <meta name="description" content="Preambuła Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r.">
  <meta name="keywords" content="preambuła, konstytucja, konstytucjarp, preambuła konstytucji, preambulakonstytucja, preambula, konstytucjaonline, online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent, rada ministrów, sejm, senat">
  <meta name="konstytucja" content="website">
</svelte:head>
<nav>
  <ul>
    <li>
      <a class="selected" rel="prefetch" href="preambula">Preambuła</a>
    </li>
    <li>
      <a rel="prefetch" href=".">Artykuły</a>
    </li>
    <li>
      <a rel="prefetch" href="info">Informacje</a>
    </li>
  </ul>
</nav>
<div class="preamble" in:fly={{ y: 100, duration: 1000 }}>
  <p>W trosce o byt i przyszłość naszej Ojczyzny,</p>
  <p>
    odzyskawszy w 1989 roku możliwość suwerennego i demokratycznego stanowienia
    o Jej losie,
  </p>

  <p>my, Naród Polski - wszyscy obywatele Rzeczypospolitej,</p>

  <p>
    zarówno wierzący w Boga będącego źródłem prawdy, sprawiedliwości, dobra i
    piękna,
  </p>

  <p>jak i nie podzielający tej wiary,</p>

  <p>a te uniwersalne wartości wywodzący z innych źródeł,</p>

  <p>równi w prawach i w powinnościach wobec dobra wspólnego - Polski,</p>

  <p>
    wdzięczni naszym przodkom za ich pracę, za walkę o niepodległość okupioną
    ogromnymi ofiarami, za kulturę zakorzenioną w chrześcijańskim dziedzictwie
    Narodu i ogólnoludzkich wartościach,
  </p>

  <p>
    nawiązując do najlepszych tradycji Pierwszej i Drugiej Rzeczypospolitej,
  </p>

  <p>
    zobowiązani, by przekazać przyszłym pokoleniom wszystko, co cenne z ponad
    tysiącletniego dorobku,
  </p>

  <p>złączeni więzami wspólnoty z naszymi rodakami rozsianymi po świecie,</p>

  <p>
    świadomi potrzeby współpracy ze wszystkimi krajami dla dobra Rodziny
    Ludzkiej,
  </p>

  <p>
    pomni gorzkich doświadczeń z czasów, gdy podstawowe wolności i prawa
    człowieka były w naszej Ojczyźnie łamane,
  </p>

  <p>
    pragnąc na zawsze zagwarantować prawa obywatelskie, a działaniu instytucji
    publicznych zapewnić rzetelność i sprawność,
  </p>

  <p>w poczuciu odpowiedzialności przed Bogiem lub przed własnym sumieniem,</p>

  <p>ustanawiamy Konstytucję Rzeczypospolitej Polskiej</p>

  <p>jako prawa podstawowe dla państwa</p>

  <p>
    oparte na poszanowaniu wolności i sprawiedliwości, współdziałaniu władz,
    dialogu społecznym oraz na zasadzie pomocniczości
  </p>
  <p>umacniającej uprawnienia obywateli i ich wspólnot.</p>

  <p>
    Wszystkich, którzy dla dobra Trzeciej Rzeczypospolitej tę Konstytucję będą
    stosowali,
  </p>

  <p>
    wzywamy, aby czynili to, dbając o zachowanie przyrodzonej godności
    człowieka,
  </p>

  <p>jego prawa do wolności i obowiązku solidarności z innymi,</p>

  <p>
    a poszanowanie tych zasad mieli za niewzruszoną podstawę Rzeczypospolitej
    Polskiej.
  </p>
</div>
