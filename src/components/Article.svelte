<script>
  export let slug;
  export let title;
  export let chapter;
  export let html;
  export let desc;
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
  :global(body.dark-mode) .desc-helper {
    color: rgba(255, 255, 255, 0.6);
  }
  .desc-helper {
    color: rgba(0, 0, 0, 0.6);
    cursor: help;
    padding-left: 10px;
  }
  .desc-svg {
    height: 1rem;
    fill: currentColor;
  }
  .flex-helper {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1100px) {
    .article {
      margin: 0.5em 0em;
    }
  }
</style>

<a rel="prefetch" href="/{slug}">
  <div id={slug} class="article">
    <div class="flex-helper">
      <div>
        <strong>{title}</strong>
        <span>(Rozdział {chapter['id']} - {chapter['title']})</span>
      </div>
      {#if desc}
        <span class="desc-helper" title="artykuł posiada wyjaśnienie">
          <svg
            class="desc-svg"
            aria-hidden="true"
            focusable="false"
            data-icon="graduation-cap"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512">
            <path
              fill="currentColor"
              d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66
              153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67
              13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78
              5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94
              448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85
              96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3
              20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79
              0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53
              8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192
              64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
          </svg>
        </span>
      {/if}
    </div>
    {@html html}
  </div>
</a>
