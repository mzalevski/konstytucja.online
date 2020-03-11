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
  .search input:focus,
  .search input:focus + .counter,
  .chapter-pick select:focus {
    color: black
  }
  .counter {
    color: rgba(0, 0, 0, 0.2);
    padding: 0;
    margin: 0;
    position: absolute;
    top: 13px;
    right: 5px;
  }
  .chapter-pick select,
  .search input {
    box-sizing: content-box;
    margin: 12px 0px 16px 8px;
    border: solid 1px;
    border-radius: 5px;
    min-width: 12em;
    height: 2em;
    outline: none;
    padding: 0 0px 0 30px;
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
  :global(body.dark-mode) .search input {
    border-color: rgba(255, 255, 255, 0.05);
  }
  :global(body.dark-mode) .chapter-pick select {
    border-color: rgba(255, 255, 255, 0.05);
  }

  .search input {
    background-image: url("/images/search.png");
    color: #333333;
  }
  :global(body.dark-mode) .search input {
    background-image: url("/images/search-dark.png");
  }
  .chapter-pick select {
    background-image: url("/images/chapter.png");
    cursor: pointer;
    max-width: 24em;
    -webkit-appearance: none;
    color: #333333;
  }
  :global(body.dark-mode) .chapter-pick select {
    background-image: url("/images/chapter-dark.png");
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

  :global(body.dark-mode) .down-svg {
    fill: #FFFFFF
  }

  .down-svg {
    fill: #333333;
    width: 1rem;
    height: 1rem;
  }

  .search-bar {
    display: flex;
    justify-content: flex-end;
  }
  .arrow-helper-div {
    position: relative;
  }
  :global(body.dark-mode) .search input,
  :global(body.dark-mode) .chapter-pick select,
  :global(body.dark-mode) .counter {
    background-color: #1d3040;
    color: #FFFFFF;
  }
  :global(body.dark-mode) .counter {
    color: #48749b;
  }
  :global(body.dark-mode) .chapter-pick select:focus,
  :global(body.dark-mode) .search input:focus,
  :global(body.dark-mode) .search input:focus + .counter {
    color: white;
  }
  @media (max-width: 1100px) {
    .counter {
      top: 4px;
      right: 10px;
    }
    .search-bar {
      display: block;
    }

    .chapter-pick,
    .search {
      display: flex;
    }
    .chapter-pick select,
    .search input {
      margin: 0.2em 0;
      width: 100%;
      max-width: none;
    }
    .chapter-pick:after,
    .chapter-pick:before {
      top: 2px;
    }
    .chapter-pick:before {
      right: 27px;
    }
  }
  @media (max-width: 500px) {
    .counter {
      top: 8px;
    }
    .chapter-pick:after,
    .chapter-pick:before {
      top: 1px;
    }
    .chapter-pick:before {
      right: 26px;
    }
  }
</style>

<div class="search-bar" in:fly={{ y: -100, duration: 1000 }}>
  <div class="search">
    <input bind:value={searchedText} on:input={sendChoice} />
    <div class="counter" title="liczba wyświetlonych artykułów">{count}</div>
  </div>
  <div class="arrow-helper-div">
    <div class="chapter-pick">
      <select bind:value={selectedChapter} on:change={sendChoice}>
        <option value="_">
          Wszystkie rozdziały
        </option>
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
        <svg class="down-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  </div>

</div>
