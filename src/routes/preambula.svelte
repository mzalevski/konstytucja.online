<script>
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  p {
    text-align: center;
    font-size: 1.5em;
    margin-top: 0;
  }
  .decor-border {
    min-height: 100vh;
    padding: 3em;
    border: double 2px rgb(160, 40, 40);
  }
  .bc1 {
    border-color: rgba(160, 40, 40, 0.2);
  }
  .bc2 {
    border-color: rgba(160, 40, 40, 0.35);
  }
  .bc3 {
    border-color: rgba(160, 40, 40, 0.5);
  }
  .bc4 {
    border-color: rgba(160, 40, 40, 0.65);
  }
  @media (max-width: 1100px) {
    p {
      font-size: 1.25rem;
    }
    .decor-border {
      padding: 2rem;
    }
  }
  @media (max-width: 600px) {
    p {
      font-size: 1rem;
    }
    .decor-border {
      padding: 1rem;
    }
    .bc1 {
      border-color: rgba(160, 40, 40, 0.025);
    }
    .bc2 {
      border-color: rgba(160, 40, 40, 0.05);
    }
    .bc3 {
      border-color: rgba(160, 40, 40, 0.1);
    }
    .bc4 {
      border-color: rgba(160, 40, 40, 0.2);
    }
  }
</style>

<svelte:head>
  <title>Preambuła</title>
  <link rel="canonical" href="https://konstytucja.online/preambula" />
  <meta
    name="description"
    content="Preambuła Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia
    1997 r." />
  <meta
    name="keywords"
    content="preambuła, konstytucja, konstytucjarp, preambuła konstytucji,
    preambulakonstytucja, preambula, konstytucjaonline, online, prawo,
    konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent,
    rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={'preambula'} />

<div class="decor-border bc1" in:fly={{ y: 40, duration: 400, delay: 100 }}>
  <div class="decor-border bc2" in:fly={{ y: 100, duration: 1000, delay: 200 }}>
    <div class="decor-border bc3" in:fly={{ y: 140, duration: 1400, delay: 300 }}>
      <div class="decor-border bc4" in:fly={{ y: 200, duration: 2000, delay: 400 }}>
        <p>W trosce o byt i przyszłość naszej Ojczyzny,</p>
        <p>
          odzyskawszy w 1989 roku możliwość suwerennego i demokratycznego
          stanowienia o Jej losie,
        </p>
        <p>my, Naród Polski - wszyscy obywatele Rzeczypospolitej,</p>
        <p>
          zarówno wierzący w Boga będącego źródłem prawdy, sprawiedliwości,
          dobra i piękna,
        </p>
        <p>jak i nie podzielający tej wiary,</p>
        <p>a te uniwersalne wartości wywodzący z innych źródeł,</p>
        <p>równi w prawach i w powinnościach wobec dobra wspólnego - Polski,</p>
        <p>
          wdzięczni naszym przodkom za ich pracę, za walkę o niepodległość
          okupioną ogromnymi ofiarami, za kulturę zakorzenioną w chrześcijańskim
          dziedzictwie Narodu i ogólnoludzkich wartościach,
        </p>
        <p>
          nawiązując do najlepszych tradycji Pierwszej i Drugiej
          Rzeczypospolitej,
        </p>
        <p>
          zobowiązani, by przekazać przyszłym pokoleniom wszystko, co cenne z
          ponad tysiącletniego dorobku,
        </p>
        <p>
          złączeni więzami wspólnoty z naszymi rodakami rozsianymi po świecie,
        </p>
        <p>
          świadomi potrzeby współpracy ze wszystkimi krajami dla dobra Rodziny
          Ludzkiej,
        </p>
        <p>
          pomni gorzkich doświadczeń z czasów, gdy podstawowe wolności i prawa
          człowieka były w naszej Ojczyźnie łamane,
        </p>
        <p>
          pragnąc na zawsze zagwarantować prawa obywatelskie, a działaniu
          instytucji publicznych zapewnić rzetelność i sprawność,
        </p>
        <p>
          w poczuciu odpowiedzialności przed Bogiem lub przed własnym sumieniem,
        </p>
        <p>ustanawiamy Konstytucję Rzeczypospolitej Polskiej</p>
        <p>jako prawa podstawowe dla państwa</p>
        <p>
          oparte na poszanowaniu wolności i sprawiedliwości, współdziałaniu
          władz, dialogu społecznym oraz na zasadzie pomocniczości
        </p>
        <p>umacniającej uprawnienia obywateli i ich wspólnot.</p>
        <p>
          Wszystkich, którzy dla dobra Trzeciej Rzeczypospolitej tę Konstytucję
          będą stosowali,
        </p>
        <p>
          wzywamy, aby czynili to, dbając o zachowanie przyrodzonej godności
          człowieka,
        </p>
        <p>jego prawa do wolności i obowiązku solidarności z innymi,</p>
        <p>
          a poszanowanie tych zasad mieli za niewzruszoną podstawę
          Rzeczypospolitej Polskiej.
        </p>
      </div>
    </div>
  </div>
</div>

<Footer />
