<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";

  const paragraphs = [
    "W trosce o byt i przyszłość naszej Ojczyzny,",
    "odzyskawszy w 1989 roku możliwość suwerennego i demokratycznego stanowienia o Jej losie,",
    "my, Naród Polski - wszyscy obywatele Rzeczypospolitej,",
    "zarówno wierzący w Boga będącego źródłem prawdy, sprawiedliwości, dobra i piękna,",
    "jak i nie podzielający tej wiary,",
    "a te uniwersalne wartości wywodzący z innych źródeł,",
    "równi w prawach i w powinnościach wobec dobra wspólnego - Polski,",
    "wdzięczni naszym przodkom za ich pracę, za walkę o niepodległość okupioną ogromnymi ofiarami, za kulturę zakorzenioną w chrześcijańskim dziedzictwie Narodu i ogólnoludzkich wartościach,",
    "nawiązując do najlepszych tradycji Pierwszej i Drugiej Rzeczypospolitej,",
    "zobowiązani, by przekazać przyszłym pokoleniom wszystko, co cenne z ponad tysiącletniego dorobku,",
    "złączeni więzami wspólnoty z naszymi rodakami rozsianymi po świecie,",
    "świadomi potrzeby współpracy ze wszystkimi krajami dla dobra Rodziny Ludzkiej,",
    "pomni gorzkich doświadczeń z czasów, gdy podstawowe wolności i prawa człowieka były w naszej Ojczyźnie łamane,",
    "pragnąc na zawsze zagwarantować prawa obywatelskie, a działaniu instytucji publicznych zapewnić rzetelność i sprawność,",
    "w poczuciu odpowiedzialności przed Bogiem lub przed własnym sumieniem,",
    "ustanawiamy Konstytucję Rzeczypospolitej Polskiej",
    "jako prawa podstawowe dla państwa",
    "oparte na poszanowaniu wolności i sprawiedliwości, współdziałaniu władz, dialogu społecznym oraz na zasadzie pomocniczości",
    "umacniającej uprawnienia obywateli i ich wspólnot.",
    "Wszystkich, którzy dla dobra Trzeciej Rzeczypospolitej tę Konstytucję będą stosowali,",
    "wzywamy, aby czynili to, dbając o zachowanie przyrodzonej godności człowieka,",
    "jego prawa do wolności i obowiązku solidarności z innymi,",
    "a poszanowanie tych zasad mieli za niewzruszoną podstawę Rzeczypospolitej Polskiej.",
  ];
</script>

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

<div
  class="px-5 py-5 bg-red-100 rounded-lg shadow-xl sm:py-8 md:py-10 sm:px-10 md:px-12 lg:py-12 lg:px-16"
  in:fade={{ duration: 1000 }}>
  <div
    class="flex flex-col space-y-6 px-5 py-5 text-base leading-snug text-center bg-white rounded-lg shadow-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl sm:py-8 md:py-10 sm:px-10 md:px-12 lg:py-12 lg:px-16"
    in:fly={{ y: 100, duration: 1000 }}>
    {#each paragraphs as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</div>
