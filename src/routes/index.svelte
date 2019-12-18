<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(articles => {
        return { articles };
      });
  }
</script>

<script>
  import { fly, fade } from "svelte/transition";
  import { searchedText, selectedChapter } from "../stores";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Search from "../components/Search.svelte";
  import Article from "../components/Article.svelte";
  import ToTheTopBtn from "../components/ToTheTopBtn.svelte";
  let yAxisPosition;
  export let articles;
</script>

<svelte:head>
  <title>Konstytucja</title>
  <link rel="canonical" href="https://konstytucja.online" />
  <meta
    name="description"
    content="Czytnik Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia
    1997 r." />
  <meta
    name="keywords"
    content="konstytucja, konstytucjarp, konstytucjaonline, online, prawo,
    konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent,
    rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<svelte:window bind:scrollY={yAxisPosition} />

<Nav>
  <Search />
</Nav>

<div in:fly={{ y: 100, duration: 1000 }}>
  {#each articles as article}
    {#if $selectedChapter === '_' && $searchedText === ''}
      <Article {...article}/>
    {:else if article.chapter['id'] === $selectedChapter || $selectedChapter === '_'}
      {#if article.html.toLowerCase().includes(` ${$searchedText.toLowerCase()}`)}
        <Article html={article.html.replace(/href='#/g, `href='\/`)} slug={article.slug} title={article.title} chapter={article.chapter}/>
      {:else if article.title.toLowerCase().includes($searchedText.toLowerCase())}
        <Article html={article.html.replace(/href='#/g, `href='\/`)} slug={article.slug} title={article.title} chapter={article.chapter}/>
      {/if}
    {/if}
  {/each}
</div>

{#if yAxisPosition > 300}
  <ToTheTopBtn />
{/if}

<Footer />