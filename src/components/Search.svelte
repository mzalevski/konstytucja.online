<script>
  import { fly, fade } from "svelte/transition";
  import { searchedText, selectedChapter } from "../stores";
</script>

<style>
  .chapter-pick select,
  .search input {
    box-sizing: content-box;
    margin: 12px 0px 16px 8px;
    border: dotted 1px;
    min-width: 12em;
    min-height: 2em;
    outline: none;
    padding: 0 0px 0 30px;
    border-color: rgba(0, 0, 0, 0.3);
    background-position-x: 0.2em;
    background-position-y: 0.2em;
    background-size: 20px;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(255, 255, 255);
  }

  .search input {
    background-image: url("/images/search.png");
  }

  .chapter-pick select {
    background-image: url("/images/chapter.png");
    cursor: pointer;
    max-width: 24em;
    -webkit-appearance: none;
  }

  .search-bar {
    display: flex;
    justify-content: flex-end;
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
      margin: 0.2em 0;
      width: 100%;
      max-width: none;
    }
  }
</style>

<div class="search-bar" in:fly={{ y: -100, duration: 1000 }}>
  <div class="search">
    <input bind:value={$searchedText} />
  </div>
  <div class="chapter-pick">
    <select bind:value={$selectedChapter}>
      <option value="_">Wszystkie rozdziały</option>
      <option value="I">Rozdział I Rzeczpospolita</option>
      <option value="II">
        Rozdział II Wolności, prawa i obowiązki człowieka i obywatela
      </option>
      <option value="III">Rozdział III Źródła prawa</option>
      <option value="IV">Rozdział IV Sejm i Senat</option>
      <option value="V">Rozdział V Prezydent Rzeczypospolitej Polskiej</option>
      <option value="VI">
        Rozdział VI Rada Ministrów i administracja rządowa
      </option>
      <option value="VII">Rozdział VII Samorząd terytorialny</option>
      <option value="VIII">Rozdział VIII Sądy i Trybunały</option>
      <option value="IX">
        Rozdział IX Organy kontroli państwowej i ochrony prawa
      </option>
      <option value="X">Rozdział X Finanse publiczne</option>
      <option value="XI">Rozdział XI Stany nadzwyczajne</option>
      <option value="XII">Rozdział XII Zmiana Konstytucji</option>
      <option value="XIII">Rozdział XIII Przepisy przejściowe i końcowe</option>
    </select>
  </div>
</div>
