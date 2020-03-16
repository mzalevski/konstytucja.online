<script>
  import { fly, fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let count;

  const dispatch = createEventDispatcher();

  let selectedChapter;
  let searchedText = "";

  function sendChoice() {
    dispatch("searchMessage", {
      text: searchedText,
      chapter: selectedChapter
    });
  }
</script>

<style>
  .search {
    position: relative;
  }
  .search input:focus,
  .chapter-pick select:focus {
    border: 1px solid black;
  }

  .counter {
    position: absolute;
    cursor: help;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .chapter-pick select,
  .search input {
    box-sizing: content-box;
    margin: 12px 0px 10px 8px;
    border: solid 1px;
    border-radius: 5px;
    min-width: 11em;
    height: 2rem;
    font-size: 1rem;
    outline: none;
    padding: 0 0 0 30px;
    border-color: rgba(0, 0, 0, 0.05);
    background-position-x: 0.2em;
    background-position-y: 0.2em;
    background-size: 20px;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(255, 255, 255);
  }

  :global(body.dark-mode) .chapter-pick select,
  :global(body.dark-mode) .search input {
    border-color: rgba(255, 255, 255, 0.05);
  }

  .search input {
    color: #333333;
    padding-right: 35px;
    max-width: 14rem;
  }

  .chapter-pick select {
    cursor: pointer;
    max-width: 16rem;
    -webkit-appearance: none;
    color: #333333;
    padding-right: 30px;
  }

  .down {
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  :global(body.dark-mode) .down {
    color: #ffffff;
  }

  .down-svg {
    fill: currentColor;
    width: 1rem;
    height: 1rem;
  }
  .search-icon,
  .book-icon {
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 1rem;
    color: rgba(0, 0, 0, 0.3);
  }
  :global(body.dark-mode) .search-icon,
  :global(body.dark-mode) .book-icon {
    color: rgba(255, 255, 255, 0.4);
  }

  .book-icon,
  .search-icon {
    bottom: 0;
  }

  .search-svg,
  .book-svg {
    fill: currentColor;
    width: 1rem;
    height: 1rem;
  }
  .search-bar {
    display: flex;
    justify-content: flex-end;
  }
  .arrow-helper-div,
  .search-helper-div {
    position: relative;
  }
  :global(body.dark-mode) .search input,
  :global(body.dark-mode) .chapter-pick select {
    background-color: #1d3040;
    color: white;
  }

  :global(body.dark-mode) .chapter-pick select:focus,
  :global(body.dark-mode) .search input:focus,
  :global(body.dark-mode) .search input:focus + .counter {
    border-color: white;
  }
  @media (max-width: 1100px) {
    .search-bar {
      display: block;
    }

    .chapter-pick,
    .search {
      display: flex;
    }
    .chapter-pick select,
    .search input {
      margin: 0.2rem 0;
      padding-left: 2.8rem;
      width: 100%;
      max-width: none;
    }
  }
  @media (max-width: 500px) {
    .chapter-pick select,
    .search input {
      font-size: 12px;
      padding-left: 2rem;
    }
    .search-icon,
    .book-icon {
      padding-left: 0.1rem;
      padding-right: 2rem;
    }
    .search-svg,
    .book-svg {
      height: 0.9rem;
      width: 0.9rem;
    }
  }
</style>

<div class="search-bar" in:fly={{ y: -100, duration: 1000 }}>
  <div class="search-helper-div">
    <div class="search">
      <input bind:value={searchedText} on:input={sendChoice} />
      <div class="counter" title="liczba wyświetlonych artykułów">{count}</div>
    </div>
    <div class="search-icon">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="search"
        class="search-svg"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
          44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0
          92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4
          33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
          0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0
          70.7-57.2 128-128 128z" />
      </svg>
    </div>
  </div>
  <div class="arrow-helper-div">
    <div class="book-icon">
      <svg
        class="book-svg"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="book"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96
          96 96h328c13.3 0 24-10.7
          24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3
          8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0
          3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0
          6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4
          250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9
          46.9 0 64z" />
      </svg>
    </div>
    <div class="chapter-pick">
      <select bind:value={selectedChapter} on:change={sendChoice}>
        <option value="_">Wszystkie rozdziały</option>
        <option value="I">Rozdział I - Rzeczpospolita</option>
        <option value="II">
          Rozdział II - Wolności, prawa i obowiązki człowieka i obywatela
        </option>
        <option value="III">Rozdział III - Źródła prawa</option>
        <option value="IV">Rozdział IV - Sejm i Senat</option>
        <option value="V">
          Rozdział V - Prezydent Rzeczypospolitej Polskiej
        </option>
        <option value="VI">
          Rozdział VI - Rada Ministrów i administracja rządowa
        </option>
        <option value="VII">Rozdział VII - Samorząd terytorialny</option>
        <option value="VIII">Rozdział VIII - Sądy i Trybunały</option>
        <option value="IX">
          Rozdział IX - Organy kontroli państwowej i ochrony prawa
        </option>
        <option value="X">Rozdział X - Finanse publiczne</option>
        <option value="XI">Rozdział XI - Stany nadzwyczajne</option>
        <option value="XII">Rozdział XII - Zmiana Konstytucji</option>
        <option value="XIII">
          Rozdział XIII - Przepisy przejściowe i końcowe
        </option>
      </select>
      <div class="down">
        <svg
          class="down-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
            4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
</div>
