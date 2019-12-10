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
    border: dotted 1px;
    border-color: rgba(0, 0, 0, 0.3);
  }
  a {
    text-decoration: none;
  }
  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }
  @media (max-width: 1000px) {
    .article {
      margin: 0.5em 0em;
    }
  }
</style>

<a rel="prefetch" href="/{slug}">
  <div id={slug} class="article">
    <strong>{title}</strong>
    <span>({chapter['id']} {chapter['title']})</span>
    {@html html}
  </div>
</a>
