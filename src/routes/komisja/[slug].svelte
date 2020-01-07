<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`komisja/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;

  import Nav from "../../components/Nav.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }
  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }
  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }
  .content :global(ul) {
    line-height: 1.5;
  }
  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .content :global(.rep-statement) {
    margin: 1em 0em;
    padding: 1em;
    border: dotted 1px;
    border-color: rgba(0, 0, 0, 0.3);
  }
  .content :global(.page-break) {
    text-align: center;
  }
  .content :global(p) {
    text-align: justify;
  }
  .content :global(.last) {
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(160, 40, 40, 0.1);
    margin-bottom: 2rem;
  }
  p {
    text-align: justify;
  }
  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }

  ol {
    padding-left: 2em;
  }
  ol li {
    list-style-type: decimal;
  }
  ol li a {
    padding: 0;
  }
  h3,
  h4 {
    padding-top: 16px;
  }

  @media (max-width: 1100px) {
    li a {
      margin: 0em 0;
      padding: 0.2em 0.5em;
      text-align: center;
    }
    ol li {
      text-align: justify;
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
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

<h3>{post.title}</h3>

<div class="content">
  {@html post.html}
</div>

<Footer />
