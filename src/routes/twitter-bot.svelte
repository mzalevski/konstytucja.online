<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
  <title>Twitter Bot</title>
  <meta
    name="description"
    content="Twitter Bot, który linkuje do artykułów Konstytucji RP z dnia 2
    kwietnia 1997 r." />
  <meta
    name="keywords"
    content="konstytucja, informacje, bot, twitter, info, konstytucjarp,
    konstytucjaonline, online, prawo, konstytucja art, trybunał konstytucyjny,
    sądownictwo, trybunał, prezydent, rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={'info'} />

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}>
  Twitter Bot
</h1>

<div in:fade={{ duration: 3000 }}>
  <div className="mt-4 text-2xl text-justify">
    <a
      className="text-red-new hover:text-yellow-700"
      style="color: blue"
      target="_blank"
      href="https://konstytucja.link">
      konstytucja.link
    </a>
    to bot, który co kilkanaście minut przeszukuje polskiego twittera, pod kątem
    powoływania się na Konstytucję. Gdy bot znajdzie tweet, który powołuje
    się na Konstytucję, komentuje taki tweet, podając link do odpowiedniego
    artykułu na stronie konstytucja.online. Konto bota na tweeterze to:
    <a
      className="text-red-new hover:text-yellow-700"
      style="color: blue"
      target="_blank"
      href="https://twitter.com/_konstytucja">
      @_konstytucja
    </a>
  </div>
</div>
