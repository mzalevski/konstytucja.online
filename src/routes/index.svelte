<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((articles) => {
        return { articles };
      });
  }
</script>

<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Search from "../components/Search.svelte";
  import Article from "../components/Article.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto } from "@sapper/app";

  export let articles;

  let selectedArticles = articles;
  let searchedText;
  let selectedChapter;
  let eventManager;
  let showDropdown = false;

  function handleSearch(e) {
    selectedChapter = e.detail.chapter;
    searchedText = e.detail.text;

    let parsedSearchedText = searchedText.replace(
      /[\?\)\(\.\\\*\+]/g,
      (match) => `\\${match}`
    );

    let allChapters = selectedChapter === "_";

    selectedArticles = articles.filter((article) => {
      let chapterHit = article.chapter["id"] === selectedChapter || allChapters;

      let parsedArticleHtml = article.html.replace(
        new RegExp(
          `<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/\\d+'>`,
          "g"
        ),
        ""
      );

      let textHit = new RegExp(`[ >]${parsedSearchedText}`, "gi").test(
        parsedArticleHtml
      );

      let titleHit = article.title
        .replace(/\./g, "")
        .toLowerCase()
        .includes(searchedText.replace(/\./g, "").toLowerCase());

      return (chapterHit && textHit) || (titleHit && searchedText);
    });
  }

  const onSwipeLeft = () => (showDropdown = true);

  const onSwipeRight = () => () => {
    if (showDropdown) showDropdown = false;
    else goto("/preambula");
  };

  onMount(() => {
    eventManager = new EventManager(document.documentElement, {
      touchAction: "pan-y",
    });
    eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      eventManager.off({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });
</script>

<svelte:head>
  <title>Konstytucja Rzeczypospolitej Polskiej</title>

  <link rel="canonical" href="https://konstytucja.online" />

  <meta
    name="description"
    content="Czytnik Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia
    1997 r." />

  <meta
    name="keywords"
    content="konstytucja, konstytucjarp, konstytucja online, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat" />

  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav {showDropdown}>
  <Search on:searchMessage={handleSearch} count={selectedArticles.length} />
</Nav>

<div in:fly={{ y: 100, duration: 1000 }}>
  {#if selectedArticles.length === articles.length}
    {#each selectedArticles as article}
      <Article
        html={article.html.replace(/href='\//g, `href='#`)}
        slug={article.slug}
        title={article.title}
        chapter={article.chapter}
        desc={article.desc} />
    {/each}
  {:else}
    {#each selectedArticles as article}
      {#if searchedText === ''}
        <!-- because there is also a chapter select -->
        <Article {...article} />
      {:else}
        <!-- if there is some search text -->
        <Article
          html={article.html.replace(
            new RegExp(
              `[ >]${searchedText.replace(
                /[\<\>\?\)\(\.\\\*\+]/g,
                (match) => `\\${match}`
              )}`,
              'gi'
            ),
            (match, offset, string) => {
              if (
                !['href', 'clas', 'rel='].includes(
                  string.slice(offset + 1, offset + 5)
                )
              ) {
                return `${match.slice(
                  0,
                  1
                )}<span class="py-px pl-px bg-red-300 rounded">${match.slice(
                  1
                )}</span>`;
              }
            }
          )}
          slug={article.slug}
          title={article.title}
          chapter={article.chapter}
          desc={article.desc} />
      {/if}
    {/each}
  {/if}
</div>
