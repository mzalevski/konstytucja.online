<script>
  export let title;
  export let desc;
  export let path;
  export let keywords;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href="https://konstytucja.online/{path}" />
  <meta name="description" content={desc ? desc : title} />
  <meta
    name="keywords"
    content="{title} konstytucji rp, konstytucja {title}, konstytucja, konstytucjarp, konstytucjaonline, online,
    prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał,
    prezydent, rada ministrów, sejm, senat, {keywords}"
  />
  <meta name="konstytucja" content="website" />
</svelte:head>
