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
  import Nav from "../components/Nav.svelte";
  import Search from "../components/Search.svelte";
  import Article from "../components/Article.svelte";

  export let articles;

  let selectedArticles = articles;
  let searchedText;
  let selectedChapter;

  function handleSearch(e) {
    selectedChapter = e.detail.chapter;
    searchedText = e.detail.text;

    let parsedSearchedText = searchedText.replace(
      /[\?\)\(\.\\\*\+]/g,
      match => `\\${match}`
    );

    let allChapters = selectedChapter === "_";

    selectedArticles = articles.filter(article => {
      let chapterHit = article.chapter["id"] === selectedChapter || allChapters;

      let parsedArticleHtml = article.html.replace(
        new RegExp(
          `<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/\\d+'>`,
          "g"
        ),
        ""
      );
      console.log(parsedArticleHtml);

      let textHit = new RegExp(`[ >]${parsedSearchedText}`, "gi").test(
        parsedArticleHtml
      );

      let titleHit = article.title
        .replace(/\./g, "")
        .toLowerCase()
        // zawiera to i tamto
        .includes(searchedText.replace(/\./g, "").toLowerCase());

      return (chapterHit && textHit) || (titleHit && searchedText);
    });
  }
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

<Nav>
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
                match => `\\${match}`
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
                )}<span style="background-color: rgb(255, 155, 155); border-radius: 3px;">${match.slice(
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
