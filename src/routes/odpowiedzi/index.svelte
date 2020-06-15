<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
</script>

<svelte:head>
  <title>Odpowiedzi</title>
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

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}>
  Odpowiedzi
</h1>
<div class="mt-4" in:fade={{ duration: 3000 }}>
  <div class="flex space-x-4 text-lg">
    <a class="w-1/12 hover:text-red-new" href="/91">Art. 91</a>
    <a
      class="w-9/12 hover:text-red-new underline"
      href="/odpowiedzi/czy-umowa-miedzynarodowa-moze-stac-wyzej-od-konstytucji">
      Czy ratyfikowana umowa międzynarodowa może stać wyżej od Konstytucji?
    </a>
    <a class="w-2/12 hover:text-red-new" href="">adw. Michał Chodorek</a>
  </div>
</div>
