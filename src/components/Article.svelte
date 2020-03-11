<script>
  export let slug;
  export let title;
  export let chapter;
  export let html;
</script>

<style>
  .article {
    margin: 1em 0em;
    padding: 1em;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    text-align: justify;
  }
  :global(body.dark-mode) .article {
    border-color: rgba(255, 255, 255, 0.05);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
  :global(.ext-link) {
    width: 0.6rem;
  }
  .article :global(li) {
      list-style-type: none;
  }

  .article:hover {
    color: rgb(160, 40, 40);
  }
  a:focus .article {
    border-color: rgb(160, 40, 40);
  }

  @media (max-width: 1100px) {
    .article {
      margin: 0.5em 0em;
    }
  }
</style>

<a rel="prefetch" href="/{slug}">
  <div id={slug} class="article">
    <strong>{title}</strong>
    <span>(Rozdział {chapter['id']} - {chapter['title']})</span>
    {@html html}
  </div>
</a>
