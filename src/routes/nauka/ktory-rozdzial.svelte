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
  let selectedChapter = "_";
  let showErrorModal = false;
  let showOptionsModal = false;
  let showSuccessModal = false;
  let showEndModal = false;

  const chapterMap = {
    I: [1, "1 - 29"],
    II: [2, "30 - 86"],
    III: [3, "87 - 94"],
    IV: [4, "95 - 125"],
    V: [5, "126 - 145"],
    VI: [6, "146 - 162"],
    VII: [7, "163 - 172"],
    VIII: [8, "173 - 201"],
    IX: [9, "202 - 215"],
    X: [10, "216 - 227"],
    XI: [11, "228 - 234"],
    XII: [12, "235 - 235"],
    XIII: [13, "236 - 243"],
  };

  const getRandomArticle = chapter => {
    const arts = articles.filter(
      a => a.chapter.id === chapter || chapter === "_"
    );
    return arts[Math.floor(Math.random() * arts.length)];
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
      id="error-modal-btn"
      on:click={() => {
        if (showErrorModal) showErrorModal = false;
        randomArticle = getRandomArticle(selectedChapter);
        if (hearts === 0) {
          showEndModal = true;
          setTimeout(() => {
            document.getElementById("next-round").focus();
          }, 150);
        }
        setTimeout(() => {
          document.getElementById("chapter-input").focus();
        }, 100);
      }}
      class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mb-16 sm:mb-0"
    >
      <div class="">
        <h2 class="text-2xl font-thin text-center sm:text-4xl">
          Błędna odpowiedź! 😿<br />To był rozdział
          <span class="font-bold"
            >{chapterMap[randomArticle.chapter.id][0]}</span
          >
        </h2>
        <div class="font-bold text-2xl">
          <div>{randomArticle.chapter.title}</div>
          <div>
            zakres: {chapterMap[randomArticle.chapter.id][1]}
          </div>
        </div>
      </div>
    </button>
  </div>
{/if}

{#if showSuccessModal}
  <div
    id="success-modal"
    transition:fade={{ duration: 400 }}
    class="fixed inset-0 z-50 flex flex-col items-center justify-end sm:justify-center h-full
      bg-dark-overlay"
  >
    <button
      id="success-modal-btn"
      on:click={() => {
        if (showSuccessModal) showSuccessModal = false;
        randomArticle = getRandomArticle(selectedChapter);
        setTimeout(() => {
          document.getElementById("chapter-input").focus();
        }, 100);
      }}
      class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mb-16 sm:mb-0"
    >
      <div class="">
        <h2 class="text-2xl font-thin text-center sm:text-4xl">
          Dobra odpowiedź! 🎉<br />To w istocie był rozdział
          <span class="font-bold"
            >{chapterMap[randomArticle.chapter.id][0]}</span
          >
        </h2>

        <div class="font-bold text-2xl">
          <div>{randomArticle.chapter.title}</div>
          <div>
            zakres: {chapterMap[randomArticle.chapter.id][1]}
          </div>
        </div>
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
      <h2 class="text-2xl font-thin sm:text-4xl">Rozpocząć?</h2>

      <div class="">
        <div class="flex justify-around mt-4">
          <button
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
            autofocus
            on:click={() => {
              randomArticle = getRandomArticle(selectedChapter);
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
            on:click={() => {
              goto("/nauka");
            }}
            class="w-full px-4 py-2 mr-2 border border-gray-100 rounded shadow
            hover:bg-gray-100"
          >
            Nie 😿
          </button>
          <button
            on:click={() => {
              hearts = 3;
              points = 0;
              randomArticle = getRandomArticle(selectedChapter);
              setTimeout(() => {
                document.getElementById("chapter-input").focus();
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
  Który to rozdział?
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

        <input
          id="chapter-input"
          min="1"
          max="13"
          placeholder="Twoja odpowiedź"
          on:keydown={e => {
            if (
              e.target.value.length === 2 &&
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
              if (answer === chapterMap[randomArticle.chapter.id][0]) {
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
      </div>
      <h1 class="py-2 sm:py-4 text-xl font-thin text-center sm:text-4xl">
        {randomArticle.title}
      </h1>
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
