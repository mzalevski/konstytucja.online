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
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Search from "../components/Search.svelte";
  import Article from "../components/Article.svelte";
  import { onDestroy, onMount } from "svelte";
  import { EventManager } from "mjolnir.js";
  import { goto, stores } from "@sapper/app";
  import { isMobile } from "./_helpers";

  export let articles;

  const { page } = stores();

  let scrollY;
  let selectedArticles = articles;
  let articlesToShow = selectedArticles.slice(0, 10);
  let searchedText;
  let selectedChapter;
  let eventManager;
  let showDropdown = false;

  function handleScroll() {
    if (scrollY / (document.documentElement.scrollHeight - 1000) > 0.9) {
      if (articlesToShow.length < articles.length) {
        articlesToShow = [
          ...articlesToShow,
          ...selectedArticles.slice(
            articlesToShow.length,
            articlesToShow.length + 10
          ),
        ];
      }
    }
  }

  function handleSearch(e) {
    selectedChapter = e.detail.chapter;
    searchedText = e.detail.text;

    let parsedSearchedText = searchedText.replace(
      /[\?\)\(\.\\\*\+]/g,
      (match) => `\\${match}`
    );

    let allChapters = selectedChapter === "_";

    selectedArticles = articles.filter((article) => {
      const chapterHit =
        article.chapter["id"] === selectedChapter || allChapters;

      const parsedArticleHtml = article.html.replace(
        new RegExp(
          `<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/\\d+'>`,
          "g"
        ),
        ""
      );

      const textHit = new RegExp(
        `[ >]${parsedSearchedText.replace(/\w /g, () => "\\w{0,6} ")}`,
        "gi"
      ).test(parsedArticleHtml);

      const titleHit = article.title
        .replace(/\./g, "")
        .toLowerCase()
        .includes(searchedText.replace(/\./g, "").toLowerCase());

      return (chapterHit && textHit) || (titleHit && searchedText);
    });
  }

  const onSwipeLeft = () => (showDropdown = true);

  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/preambula");
  };

  onMount(() => {
    if ($page.query.fromArticle) {
      articlesToShow = [
        ...articlesToShow,
        ...selectedArticles.slice(
          articlesToShow.length,
          parseInt($page.query.fromArticle) + 10
        ),
      ];

      setTimeout(() => {
        document.documentElement
          .querySelector(`#art-${$page.query.fromArticle}`)
          .scrollIntoViewIfNeeded();
      }, 50);
    }

    if (isMobile()) {
      eventManager = new EventManager(document.documentElement, {
        touchAction: "pan-y",
      });
      eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      if (isMobile()) {
        eventManager.off({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
      }
    }
  });
</script>

<svelte:head>
  <title>Konstytucja Rzeczypospolitej Polskiej</title>

  <link rel="canonical" href="https://konstytucja.online" />

  <meta
    name="description"
    content="Czytnik Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia
    1997 r."
  />

  <meta
    name="keywords"
    content="konstytucja, konstytucjarp, konstytucja online, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat"
  />

  <meta name="konstytucja" content="website" />
</svelte:head>

<svelte:window bind:scrollY on:scroll={handleScroll} />

<Nav {showDropdown}>
  <Search on:searchMessage={handleSearch} count={selectedArticles.length} />
</Nav>

<div in:fly={{ y: 100, duration: 1000 }}>
  {#if selectedArticles.length === articles.length}
    {#each articlesToShow as article}
      <Article {...article} />
    {/each}
  {:else}
    {#each selectedArticles as article}
      {#if searchedText === ""}
        <!-- because there is also a chapter select -->
        <Article {...article} />
      {:else}
        <!-- if there is some search text -->
        <Article
          html={article.html.replace(
            new RegExp(
              `[ >]${searchedText
                .replace(/[\<\>\?\)\(\.\\\*\+]/g, (match) => `\\${match}`)
                .replace(/\w /g, () => "\\w{0,6} ")}`,
              "gi"
            ),
            (match, offset, str) => {
              if (
                !["href", "clas", "rel="].includes(
                  str.slice(offset + 1, offset + 5)
                )
              ) {
                const classes = "py-px pl-px bg-red-300 rounded";
                const txt = `<span class="${classes}">${match.slice(1)}</span>`;
                return `${match.slice(0, 1)}${txt}`;
              }
            }
          )}
          slug={article.slug}
          title={article.title}
          chapter={article.chapter}
          desc={article.desc}
        />
      {/if}
    {/each}
  {/if}
</div>
