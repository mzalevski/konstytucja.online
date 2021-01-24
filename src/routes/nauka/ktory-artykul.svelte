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
          document.getElementById("art-input").focus();
        }, 100);
      }}
      class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mb-16 sm:mb-0">
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
          document.getElementById("art-input").focus();
        }, 100);
      }}
      class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mb-16 sm:mb-0">
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
      <div class="relative inline-block w-full my-4 sm:w-8 lg:w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500
      pointer-events-none sm:justify-center sm:w-full lg:w-auto sm:px-0 lg:px-2"
        >
          <svg class="w-4 h-4 fill-current sm:w-5 sm:h-5" viewBox="0 0 20 20">
            <g fill-rule="evenodd">
              <g>
                <path
                  d="M2,1.99079514 C2,0.891309342 2.89706013,0 4.00585866,0
            L14.9931545,0 C15.5492199,0 16,0.443864822 16,1 L16,2
            L5.00247329,2 C4.44882258,2 4,2.44386482 4,3 C4,3.55228475
            4.44994876,4 5.00684547,4 L16.9931545,4 C17.5492199,4
            18,4.44463086 18,5.00087166 L18,18.0059397 C18,19.1072288
            17.1054862,20 16.0059397,20 L3.99406028,20 C2.8927712,20
            2,19.1017876 2,18.0092049 L2,1.99079514 Z M6,4 L10,4 L10,12 L8,10
            L6,12 L6,4 Z"
                />
              </g>
            </g>
          </svg>
        </div>
        <select
          autofocus
          class="w-full px-8 py-1 font-light text-gray-900 bg-white border
    border-gray-100 rounded-md shadow-sm appearance-none cursor-pointer sm:w-8
    lg:w-full sm:px-0 lg:px-10 sm:text-transparent lg:text-gray-900"
          bind:value={selectedChapter}>
          <option class="font-light text-gray-900" value="_">
            Wszystkie rozdziały
          </option>
          <option class="font-light text-gray-900" value="I">
            Rozdział I - Rzeczpospolita
          </option>
          <option class="font-light text-gray-900" value="II">
            Rozdział II - Wolności, prawa i obowiązki człowieka i obywatela
          </option>
          <option class="font-light text-gray-900" value="III">
            Rozdział III - Źródła prawa
          </option>
          <option class="font-light text-gray-900" value="IV">
            Rozdział IV - Sejm i Senat
          </option>
          <option class="font-light text-gray-900" value="V">
            Rozdział V - Prezydent Rzeczypospolitej Polskiej
          </option>
          <option class="font-light text-gray-900" value="VI">
            Rozdział VI - Rada Ministrów i administracja rządowa
          </option>
          <option class="font-light text-gray-900" value="VII">
            Rozdział VII - Samorząd terytorialny
          </option>
          <option class="font-light text-gray-900" value="VIII">
            Rozdział VIII - Sądy i Trybunały
          </option>
          <option class="font-light text-gray-900" value="IX">
            Rozdział IX - Organy kontroli państwowej i ochrony prawa
          </option>
          <option class="font-light text-gray-900" value="X">
            Rozdział X - Finanse publiczne
          </option>
          <option class="font-light text-gray-900" value="XI">
            Rozdział XI - Stany nadzwyczajne
          </option>
          <option class="font-light text-gray-900" value="XII">
            Rozdział XII - Zmiana Konstytucji
          </option>
          <option class="font-light text-gray-900" value="XIII">
            Rozdział XIII - Przepisy przejściowe i końcowe
          </option>
        </select>
        <div
          class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-900
    pointer-events-none sm:hidden lg:flex"
        >
          <svg class="w-4 h-4 fill-current sm:w-5 sm:h-5" viewBox="0 0 20 20">
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
      4.343 8z"
            />
          </svg>
        </div>
      </div>
      <div class="">
        <div class="flex justify-around mt-4">
          <button
            on:click={() => {
              showOptionsModal = false;
              goto("/");
            }}
            class="w-full px-4 py-2 mr-2 border border-gray-100 rounded shadow
            hover:bg-gray-100">
            Anuluj
          </button>
          <button
            on:click={() => {
              randomArticle = getRandomArticle(selectedChapter);
              showOptionsModal = false;
            }}
            class="w-full px-4 py-2 ml-2 border border-gray-100 rounded shadow
            hover:bg-gray-100">
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
              goto("/");
            }}
            class="w-full px-4 py-2 mr-2 border border-gray-100 rounded shadow
            hover:bg-gray-100">
            Nie 😿
          </button>
          <button
            on:click={() => {
              hearts = 3;
              points = 0;
              randomArticle = getRandomArticle(selectedChapter);
              setTimeout(() => {
                document.getElementById("art-input").focus();
              }, 100);
              showEndModal = false;
            }}
            class="w-full px-4 py-2 ml-2 border border-gray-100 rounded shadow
            hover:bg-gray-100"
            id="next-round"> Tak 🔥</button
          >
        </div>
      </div>
    </div>
  </div>
{/if}

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}
>Który to artykuł?</h1>
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
