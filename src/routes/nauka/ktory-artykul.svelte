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
  const getRandomArticle = () => articles[Math.floor(Math.random() * 243) + 1];

  onMount(() => {
    randomArticle = getRandomArticle();
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

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}
>Który to artykuł?</h1>

{#if randomArticle}
  <div>pop: {randomArticle.slug}</div>

  <div class="mt-4" in:fade={{ duration: 3000 }}>
    <div
      style="hyphens: auto;"
      class="max-w-3xl mx-auto text-base leading-relaxed text-justify sm:text-xl"
    >
      <div class="w-2/5 mx-auto mb-8">
        <div class="flex justify-between mb-4">
          <div class="">Punkty: {points}</div>

          <div class="">
            <span>
              {#each Array.from({ length: hearts }, (v, k) => k) as heart}
                ❤️
              {/each}

              {#each Array.from({ length: Math.abs(hearts - 3) }, (v, k) => k) as heart}
                💔
              {/each}
            </span>
          </div>
        </div>

        <input
          placeholder="Twoja odpowiedź"
          on:keydown={e => {
            if (e.code === "Enter") {
              if (answer === parseInt(randomArticle.slug)) {
                points = points + 1;
                alert("poprawna odpowiedz!");
              } else {
                hearts = hearts - 1;
                alert("zla odpowiedz!");
                if (hearts === 0) {
                  const more = confirm("koniec gry! jeszcze raz?");
                  if (more) {
                    points = 0;
                    hearts = 3;
                  } else {
                    goto("/");
                  }
                }
              }
              answer = null;
              randomArticle = getRandomArticle();
            }
          }}
          class="h-12 text-center placeholder-gray-300 border outline-none appearance-none"
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
