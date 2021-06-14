<script async src="https://plausible.io/js/embed.host.js">
  import Nav from "../components/Nav.svelte";
  import { darkMode } from "../stores";

  let mode;

  darkMode.subscribe((value) => (mode = value));
</script>

<svelte:head>
  <title>Statystyki</title>
  <link rel="canonical" href="https://konstytucja.online/statystyki" />
  <meta
    name="description"
    content="Statystyki dot. Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia
    1997 r."
  />
  <meta
    name="keywords"
    content="statystyki, stats, popularność, liczba wejść, wejścia, 
    liczba użytkowników, ostatnie 3 miesiące, ostatnie pół roku, ostatni tydzień, ostatni rok, 
    preambuła, konstytucja, konstytucjarp, preambuła konstytucji,
    preambula, konstytucja, konstytucjaonline, online, prawo,
    konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent,
    rada ministrów, sejm, senat"
  />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={"info"} />

<h1
  class="my-12 text-3xl font-thin text-center lg:text-5xl sm:text-4xl xl:text-6xl"
>
  Statystyki
</h1>

<iframe
  title="stats"
  plausible-embed
  src={`https://plausible.io/share/konstytucja.online?auth=EK6pFDnmiSnhDN-RqALWK&embed=true&theme=${
    mode ? "dark" : "light"
  }&background=transparent`}
  scrolling="no"
  frameborder="0"
  loading="lazy"
  style="width: 1px; min-width: 100%; height: 2300px;"
  class="lg:-mb-162"
/>
