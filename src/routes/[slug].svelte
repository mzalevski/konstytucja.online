<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { article: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { stores, goto } from "@sapper/app";
  import Nav from "../components/Nav.svelte";
  import Tooltip from "../components/Tooltip.svelte";

  export let article;

  const { page } = stores();

  let isDescriptionVisible = false;
  let isDisqusVisible = false;
  let isFindVisible = false;
  let findDestination;
  let timestamp = 0;

  const showDisqus = () => {
    timestamp = Date.now();
    let d = document,
      s = d.createElement("script");
    s.src = "https://konstytucja.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);

    isDisqusVisible = true;
  };

  const handleKeydown = e => {
    if (e.code === "ArrowLeft" && $page.params.slug > 1) {
      isDescriptionVisible = false;
      isDisqusVisible = false;
      goto(`/${parseInt($page.params.slug) - 1}`);
    } else if (e.code === "ArrowRight" && $page.params.slug < 243) {
      isDescriptionVisible = false;
      isDisqusVisible = false;
      goto(`/${parseInt($page.params.slug) + 1}`);
    } else if (e.code === "Escape") {
      document.getElementById("back-btn").click();
    } else if (e.code === "KeyW") {
      isDescriptionVisible = !isDescriptionVisible;
    } else if (e.code === "KeyQ") {
      if (!isDisqusVisible) {
        showDisqus();
      } else {
        isDisqusVisible = false;
      }
    } else if (e.code === "KeyF") {
      isFindVisible = !isFindVisible;
      if (isFindVisible) findDestination = undefined;
      setTimeout(() => {
        if (isFindVisible) document.getElementById("find").focus();
      }, 100);
    } else if (e.code === "Enter") {
      if (!isFindVisible) return;
      if (!findDestination) return;
      goto(`/${findDestination}`);
      isDescriptionVisible = false;
      isDisqusVisible = false;
      isFindVisible = false;
    }
  };

  onMount(() => {
    let body = document.querySelector("body");
    let html = document.querySelector("html");
    let rightChevron = document.getElementById("right-chevron");

    const observer = new MutationObserver(mutations => {
      let scrolledBefore = false;
      for (let mut of mutations) {
        if (body.scrollHeight > window.innerHeight + 100 && !scrolledBefore) {
          html.style.scrollBehavior = "smooth";
          window.scrollTo(0, document.body.scrollHeight);
          html.style.scrollBehavior = "";
        }
      }
    });

    observer.observe(document.getElementById("extra-info"), {
      attributes: true,
      childList: true,
      subtree: true
    });

    setTimeout(() => observer.disconnect(), 3000);

    if (sessionStorage.getItem("fromDyskusja")) {
      sessionStorage.removeItem("fromDyskusja");
      showDisqus();
    }
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
  <title>{article.title} Konstytucji RP</title>
  <link rel="canonical" href="https://konstytucja.online/{article.slug}" />
  <meta name="description" content="{article.title} Konstytucji RP" />
  <meta
    name="keywords"
    content="{article.title} konstytucji rp, konstytucja {article.slug}, art {article.slug},
    art. {article.title}, konstytucja, konstytucjarp, konstytucjaonline, online,
    prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał,
    prezydent, rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={'articles'} />
<div>
  <div class="flex justify-between h-8">
    <!-- <Tooltip text={'Powrót do listy artykułów.'} pos={'b'}> -->
    <a
      id="back-btn"
      class="w-24 font-thin sm:text-xl hover:text-red-new"
      rel="prefetch"
      href={$page.params.slug > 1 ? '#' + ($page.params.slug - 1) : '/'}
      on:click={() => {
        isDescriptionVisible = false;
        isDisqusVisible = false;
      }}>
      powrót
    </a>
    <!-- </Tooltip> -->
    <h3 class="font-thin text-center sm:text-xl">
      {article.chapter['id']} {article.chapter['title']}
    </h3>
    <div class="flex justify-end w-24 pt-px mt-px">
      {#if $page.params.slug > 1}
        <Tooltip text={'Poprzedni artykuł.'} pos={'b'}>

          <a
            class="flex flex-col justify-center"
            rel="prefetch"
            href="/{parseInt($page.params.slug) - 1}"
            transition:fade={{ duration: 1000 }}
            on:click={() => {
              isDescriptionVisible = false;
              isDisqusVisible = false;
            }}>
            <svg
              class="w-5 h-6 mr-1 text-gray-900 fill-current sm:w-6"
              viewBox="0 0 20 20">
              <path
                d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
                c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
                z" />
            </svg>
          </a>
        </Tooltip>
      {/if}
      {#if $page.params.slug < 243}
        <Tooltip text={'Następny artykuł.'} pos={'b'}>
          <a
            id="right-chevron"
            class="flex flex-col justify-center"
            rel="prefetch"
            href="/{parseInt($page.params.slug) + 1}"
            transition:fade={{ duration: 1000 }}
            on:click={() => {
              isDescriptionVisible = false;
              isDisqusVisible = false;
            }}>
            <svg
              class="w-5 h-6 ml-1 text-gray-900 fill-current sm:w-6"
              viewBox="0 0 20 20">
              <path
                d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z" />
            </svg>
          </a>
        </Tooltip>
      {/if}
    </div>
  </div>
  {#if isFindVisible}
    <div
      id="feedback-modal"
      transition:fade={{ duration: 400 }}
      class="fixed inset-0 z-50 flex flex-col items-center justify-center h-full
      bg-dark-overlay">
      <div
        class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner
        sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <div class="">
          <h2 class="text-2xl font-thin text-center sm:text-4xl">
            Przejdź do artykułu
          </h2>
        </div>

        <div class="relative inline-block w-full pt-4">
          <div
            class="absolute inset-y-0 left-0 flex items-center justify-center
            w-auto ml-2 text-gray-500 pointer-events-none">
            <!-- <svg class="w-4 h-4 fill-current sm:w-5 sm:h-5" viewBox="0 0 20 20">
              <path
                d="M18.405 4.799c-.111-.44-.655-.799-1.21-.799h-6.814c-.554
                0-1.33-.318-1.722-.707l-.596-.588C7.671 2.316 6.896 2 6.342
                2H3.087c-.555 0-1.059.447-1.12.994L1.675
                6h16.931l-.201-1.201zM19.412 7H.588c-.342
                0-.61.294-.577.635l.923 9.669c.037.394.369.696.766.696h16.6c.397
                0 .728-.302.766-.696l.923-9.669c.033-.341-.235-.635-.577-.635z" />
            </svg> -->
          </div>
          <input
            bind:value={findDestination}
            type="number"
            min="1"
            max="243"
            name="find"
            id="find"
            class="w-full p-px text-xl font-light text-center text-gray-900
            bg-white border border-gray-100 rounded shadow appearance-none
            cursor-pointer sm:text-4xl" />
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2
            text-gray-900 pointer-events-none">
            <!-- <svg class="w-4 h-4 fill-current sm:w-5 sm:h-5" viewBox="0 0 20 20">
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757
                6.586 4.343 8z" />
            </svg> -->
          </div>
        </div>

      </div>
    </div>
  {/if}
  <h1
    class="pt-8 text-xl font-thin text-center sm:pt-10 md:pt-12 lg:pt-16
    sm:text-4xl">
    {article.title}
  </h1>
  <div class="py-4">
    <div
      in:fade={{ duration: 1000 }}
      style="hyphens: auto;"
      class="max-w-3xl mx-auto leading-relaxed text-justify sm:text-xl">
      {@html article.html}
    </div>
    <div
      id="extra-info"
      class="max-w-3xl mx-auto mt-8 border-t border-gray-200">
      {#if article.desc != ``}
        <div class="pt-8">
          <button
            on:click={() => (isDescriptionVisible = !isDescriptionVisible)}>
            {#if !isDescriptionVisible}
              <span class="pt-2 text-gray-600">
                wyjaśnienie treści artykułu | pokaż
              </span>
            {:else}
              <span class="pt-2 text-gray-600">
                wyjaśnienie treści artykułu | schowaj
              </span>
            {/if}
          </button>
          {#if isDescriptionVisible}
            <div
              class="text-justify"
              in:fly|fade={{ y: -15, duration: 800 }}
              out:fly|fade={{ y: -15, duration: 400 }}>
              <h3 class="pt-2 font-thin sm:text-xl">
                Wyjaśnienie treści artykułu
              </h3>
              <div class="pt-2">
                {@html article.desc}
              </div>
            </div>
          {/if}
        </div>
      {/if}

      <div class="pt-4">
        <button>
          {#if !isDisqusVisible}
            <span class="pt-2 text-gray-600" on:click={() => showDisqus()}>
              dyskusja nad artykułem | pokaż
            </span>
          {:else}
            <span
              class="pt-2 text-gray-600"
              on:click={() => {
                isDisqusVisible = false;
                timestamp = 0;
              }}>
              dyskusja nad artykułem | schowaj
            </span>
          {/if}
        </button>
      </div>

      {#if isDisqusVisible}
        <div
          class="pt-4"
          id="disqus_thread"
          in:fly={{ y: -40, duration: 1000 }}
          out:fly={{ y: -40, duration: 200 }} />
      {/if}
    </div>
  </div>
</div>
