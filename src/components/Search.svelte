<script>
  import { fly, fade } from "svelte/transition";
  import { searchedText, selectedChapter } from "../stores";
</script>

<style>
  .chapter-pick select,
  .search input {
    box-sizing: content-box;
    margin: 12px 0px 16px 8px;
    border: solid 1px;
    border-radius: 5px;
    min-width: 12em;
    min-height: 2em;
    outline: none;
    padding: 0 0px 0 30px;
    border-color: rgba(0, 0, 0, 0.1);
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
  .search input:focus,
  .chapter-pick select:focus {
    border: 1px solid black;
    /* box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.15); */
  }

  .chapter-pick select {
    background-image: url("/images/chapter.png");
    cursor: pointer;
    max-width: 24em;
    -webkit-appearance: none;
  }
  .chapter-pick:after {
    content: "-";
    color: transparent;
    position: absolute;
    right: 20px;
    top: 11px;
    height: 48px;
    border-right: 1px dotted;
    border-bottom: 1px dotted;
    border-top: 2px double;
    border-color: rgba(0, 0, 0, 0.3);
    background-position-x: 100px;
    background-position-y: 10px;
    background-size: 20px;
    background-color: rgb(160, 40, 40);
  }
  .chapter-pick:before {
    content: "-";
    color: transparent;
    position: absolute;
    right: 27px;
    top: 11px;
    height: 48px;
    border-left: 1px dotted;
    border-bottom: 1px dotted;
    border-top: 2px double;
    border-color: rgba(0, 0, 0, 0.3);
    background-position-x: 10px;
    background-position-y: 10px;
    background-size: 20px;
    background-color: rgb(255, 255, 255);
  }

  .search-bar {
    display: flex;

    justify-content: flex-end;
  }
  .arrow-helper-div {
    position: relative;
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
    .chapter-pick:after,
    .chapter-pick:before {
      top: 2px;
    }
    .chapter-pick:before {
      right: 27px;
    }
  }
  @media (max-width: 500px) {
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
    <input bind:value={$searchedText} />
  </div>
  <div class="arrow-helper-div">
    <div class="chapter-pick">
      <select bind:value={$selectedChapter}>
        <option value="_">
          Wszystkie rozdziały
          <img src="images/search.png" alt="" />
        </option>
        <option value="I">Rozdział I Rzeczpospolita</option>
        <option value="II">
          Rozdział II Wolności, prawa i obowiązki człowieka i obywatela
        </option>
        <option value="III">Rozdział III Źródła prawa</option>
        <option value="IV">Rozdział IV Sejm i Senat</option>
        <option value="V">
          Rozdział V Prezydent Rzeczypospolitej Polskiej
        </option>
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
        <option value="XIII">
          Rozdział XIII Przepisy przejściowe i końcowe
        </option>
      </select>
    </div>
  </div>
</div>
