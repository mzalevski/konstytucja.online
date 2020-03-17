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
        class="search-svg"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="cursor" fill-rule="evenodd">
          <g>
            <path
              d="M12.9056439,14.3198574 C11.5509601,15.3729184 9.84871145,16
              8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0
              C12.418278,0 16,3.581722 16,8 C16,9.84871145 15.3729184,11.5509601
              14.3198574,12.9056439 L19.6568542,18.2426407
              L18.2426407,19.6568542 L12.9056439,14.3198574 Z M8,14
              C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2
              C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z" />
          </g>
        </g>
      </svg>
    </div>
  </div>
  <div class="arrow-helper-div">
    <div class="book-icon">
      <svg
        class="book-svg"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="none"
          stroke-width="1"
          fill="currentColor"
          fill-rule="evenodd">
          <g>
            <path
              d="M2,1.99079514 C2,0.891309342 2.89706013,0 4.00585866,0
              L14.9931545,0 C15.5492199,0 16,0.443864822 16,1 L16,2
              L5.00247329,2 C4.44882258,2 4,2.44386482 4,3 C4,3.55228475
              4.44994876,4 5.00684547,4 L16.9931545,4 C17.5492199,4
              18,4.44463086 18,5.00087166 L18,18.0059397 C18,19.1072288
              17.1054862,20 16.0059397,20 L3.99406028,20 C2.8927712,20
              2,19.1017876 2,18.0092049 L2,1.99079514 Z M6,4 L10,4 L10,12 L8,10
              L6,12 L6,4 Z" />
          </g>
        </g>
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
