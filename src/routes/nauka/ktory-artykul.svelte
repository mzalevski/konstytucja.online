<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(articles => {
        return { articles };
      });
  }
</script>

<script>
  import Nav from "../../components/Nav.svelte";
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  export let articles;
  let answer = null;
  let randomArticle = null;
  let points = 0;
  let hearts = 3;
  let selectedChapters = ["I"];
  let showErrorModal = false;
  let showOptionsModal = false;
  let showSuccessModal = false;
  let showEndModal = false;
  $: allChaptersSelected = selectedChapters.length === 13;
  let importantOnlyMode = false;

  const chapters = [
    ["I", "Rozdział I - Rzeczpospolita"],
    ["II", "Rozdział II - Wolności, prawa i obowiązki człowieka i obywatela"],
    ["III", "Rozdział III - Źródła prawa"],
    ["IV", "Rozdział IV - Sejm i Senat"],
    ["V", "Rozdział V - Prezydent Rzeczypospolitej Polskiej"],
    ["VI", "Rozdział VI - Rada Ministrów i administracja rządowa"],
    ["VII", "Rozdział VII - Samorząd terytorialny"],
    ["VIII", "Rozdział VIII - Sądy i Trybunały"],
    ["IX", "Rozdział IX - Organy kontroli państwowej i ochrony prawa"],
    ["X", "Rozdział X - Finanse publiczne"],
    ["XI", "Rozdział XI - Stany nadzwyczajne"],
    ["XII", "Rozdział XII - Zmiana Konstytucji"],
    ["XIII", "Rozdział XIII - Przepisy końcowe"],
  ];

  const importantArticlesIdx = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    // "74",
    // "75",
    // "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "90",
    "91",
    "92",
    "93",
    "94",
    "99",
    "100",
    "101",
    "105",
    "118",
    "119",
    "120",
    "121",
    "122",
    "123",
    "127",
    "128",
    "129",
    "130",
    "144",
    "146",
    "147",
    "164",
    "165",
    "163",
    "171",
    "175",
    "179",
    "187",
    "188",
    "189",
    "194",
    "228",
    "229",
    "230",
    "231",
    "232",
    "235",
  ];

  const getRandomArticle = chapterRange => {
    if (importantOnlyMode) {
      const randomIdx = Math.floor(Math.random() * importantArticlesIdx.length);
      const theImportantArticleIdx = importantArticlesIdx[randomIdx];
      return articles.find(a => a.slug === theImportantArticleIdx);
    } else {
      const arts = articles.filter(a => chapterRange.includes(a.chapter.id));
      return arts[Math.floor(Math.random() * arts.length)];
    }
  };

  onMount(() => {
    showOptionsModal = true;
  });
</script>

<svelte:head>
  <title>Nauka Konstytucji</title>

  <link rel="canonical" href="https://konstytucja.online" />

  <meta
    name="description"
    content="Czytnik Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia
    1997 r."
  />

  <meta
    name="keywords"
    content="konstytucja, konstytucjarp, konstytucja online, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat"
  />

  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment="info" />

{#if showErrorModal}
  <div
    id="error-modal"
    transition:fade={{ duration: 400 }}
    class="fixed inset-0 z-50 flex flex-col items-center justify-end sm:justify-center h-full
      bg-dark-overlay"
  >
    <button
      aria-label="error-modal-btn"
      id="error-modal-btn"
      on:click={() => {
        if (showErrorModal) showErrorModal = false;
        if (hearts === 0) {
          showEndModal = true;
          setTimeout(() => {
            document.getElementById("next-round").focus();
          }, 150);
        } else {
          randomArticle = getRandomArticle(selectedChapters);
          setTimeout(() => {
            document.getElementById("art-input").focus();
          }, 100);
        }
      }}
      class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mb-16 sm:mb-0"
    >
      <div class="">
        <h2 class="text-2xl font-thin text-center sm:text-4xl">
          Błędna odpowiedź! 😿<br />To był art.
          <span class="font-bold">{randomArticle.slug}</span>
        </h2>
      </div>
    </button>
  </div>
{/if}

{#if showSuccessModal}
  <div
    id="success-modal"
    aria-label="success-modal"
    transition:fade={{ duration: 400 }}
    class="fixed inset-0 z-50 flex flex-col items-center justify-end sm:justify-center h-full
      bg-dark-overlay"
  >
    <button
      id="success-modal-btn"
      aria-label="success-modal-btn"
      on:click={() => {
        if (showSuccessModal) showSuccessModal = false;
        randomArticle = getRandomArticle(selectedChapters);
        setTimeout(() => {
          document.getElementById("art-input").focus();
        }, 100);
      }}
      class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mb-16 sm:mb-0"
    >
      <div class="">
        <h2 class="text-2xl font-thin text-center sm:text-4xl">
          Dobra odpowiedź! 🎉<br />To w istocie był art.
          <span class="font-bold">{randomArticle.slug}</span>
        </h2>
      </div>
    </button>
  </div>
{/if}

{#if showOptionsModal}
  <div
    id="options-modal"
    transition:fade={{ duration: 400 }}
    class="fixed inset-0 z-50 flex flex-col items-center justify-center h-full
      bg-dark-overlay"
  >
    <div
      class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3"
    >
      <h2 class="text-2xl font-thin sm:text-4xl">Wybierz zakres pytań:</h2>

      <div class="mt-2 mb-4 font-light text-gray-900 flex flex-col space-y-2">
        <label class="flex space-x-3 cursor-pointer">
          <input
            type="checkbox"
            class="w-4 h-4 mt-1 mb-px"
            bind:checked={importantOnlyMode}
            on:click={() => {
              selectedChapters = [];
            }}
          />
          <div>Tylko najważniejsze artykuły (subiektywny zbiór)</div>
        </label>
        <hr />
        <label class="flex space-x-3 cursor-pointer">
          <input
            type="checkbox"
            class="w-4 h-4 mt-1 mb-px"
            bind:checked={allChaptersSelected}
            on:click={() => {
              importantOnlyMode = false;
              if (allChaptersSelected) {
                selectedChapters = [];
              } else {
                selectedChapters = [
                  "I",
                  "II",
                  "III",
                  "IV",
                  "V",
                  "VI",
                  "VII",
                  "VIII",
                  "IX",
                  "X",
                  "XI",
                  "XII",
                  "XIII",
                ];
              }
            }}
          />
          <div>Wszystkie rozdziały</div>
        </label>

        {#each chapters as chapter}
          <label class="flex space-x-3 cursor-pointer">
            <input
              type="checkbox"
              class="w-4 h-4 mt-1 mb-px"
              bind:group={selectedChapters}
              value={chapter[0]}
              on:click={() => {
                importantOnlyMode = false;
              }}
            />
            <div>
              {chapter[1]}
            </div>
          </label>
        {/each}
      </div>

      <div class="">
        <div class="flex justify-around mt-4">
          <button
            aria-label="cancel"
            on:click={() => {
              showOptionsModal = false;
              goto("/nauka");
            }}
            class="w-full px-4 py-2 mr-2 border border-gray-100 rounded shadow
            hover:bg-gray-100"
          >
            Anuluj
          </button>
          <button
            aria-label="ok"
            on:click={() => {
              if (selectedChapters.length === 0 && !importantOnlyMode) {
                alert("Wybierz zakres pytań!");
                return;
              }
              randomArticle = getRandomArticle(selectedChapters);
              showOptionsModal = false;
            }}
            class="w-full px-4 py-2 ml-2 border border-gray-100 rounded shadow
            hover:bg-gray-100"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

{#if showEndModal}
  <div
    id="options-modal"
    in:fade={{ duration: 400 }}
    class="fixed inset-0 z-50 flex flex-col items-center justify-end sm:justify-center h-full
      bg-dark-overlay"
  >
    <div
      class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mb-16 sm:mb-0"
    >
      <h2 class="text-2xl font-thin sm:text-4xl">Koniec! Kolejna runda?</h2>

      <div class="">
        <div class="flex justify-around mt-4">
          <button
            aria-label="reject"
            on:click={() => {
              goto("/nauka");
            }}
            class="w-full px-4 py-2 mr-2 border border-gray-100 rounded shadow
            hover:bg-gray-100"
          >
            Nie 😿
          </button>
          <button
            aria-label="accept"
            on:click={() => {
              hearts = 3;
              points = 0;
              randomArticle = getRandomArticle(selectedChapters);
              setTimeout(() => {
                document.getElementById("art-input").focus();
              }, 100);
              showEndModal = false;
            }}
            class="w-full px-4 py-2 ml-2 border border-gray-100 rounded shadow
            hover:bg-gray-100"
            id="next-round"
          >
            Tak 🔥</button
          >
        </div>
      </div>
    </div>
  </div>
{/if}

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}
>
  Który to artykuł?
</h1>
{#if randomArticle}
  <div class="mt-4" in:fade={{ duration: 3000 }}>
    <div
      style="hyphens: auto;"
      class="max-w-3xl mx-auto text-base leading-relaxed text-justify sm:text-xl"
    >
      <div class="w-4/5 sm:w-3/5 md:w-2/5 mx-auto my-12">
        <div class="flex justify-between mb-4">
          <div class="">Punkty: {points}</div>

          <div class="">
            <span>
              {#each Array.from({ length: hearts }, (v, k) => k) as heart}
                ❤️
              {/each}

              {#each Array.from({ length: Math.abs(hearts - 3) }, (v, k) => k) as heart}
                <span class={`-mt-3 ${heart ? "" : "-ml-1"}`}>💔</span>
              {/each}
            </span>
          </div>
        </div>
        <label aria-label="art input">
          <input
            id="art-input"
            min="1"
            max="243"
            placeholder="Twoja odpowiedź"
            on:keydown={e => {
              if (
                e.target.value.length === 3 &&
                ![
                  "Backspace",
                  "ArrowDown",
                  "ArrowUp",
                  "ArrowLeft",
                  "ArrowRight",
                ].includes(e.code)
              ) {
                e.preventDefault();
              }
              if (["Enter"].includes(e.key)) {
                if (!answer) return;
                if (answer === parseInt(randomArticle.slug)) {
                  points = points + 1;
                  showSuccessModal = true;
                  setTimeout(() => {
                    document.getElementById("success-modal-btn").focus();
                  }, 100);
                } else {
                  hearts = hearts - 1;
                  showErrorModal = true;
                  setTimeout(() => {
                    document.getElementById("error-modal-btn").focus();
                  }, 100);
                }
                answer = null;
              }
            }}
            class="h-12 text-center placeholder-gray-300 rounded border outline-none appearance-none w-full"
            bind:value={answer}
            type="number"
            autofocus
          />
        </label>
      </div>

      {@html randomArticle.html}
    </div>
  </div>
{:else}
  ...
{/if}

<style>
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
