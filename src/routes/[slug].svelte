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
  import { onMount, onDestroy } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { stores, goto } from "@sapper/app";
  import Nav from "../components/Nav.svelte";
  import Tooltip from "../components/Tooltip.svelte";
  import { EventManager } from "mjolnir.js";
  export let article;

  let eventManager;
  const { page } = stores();
  let mounted = true;
  let xDelta = 30;
  let isDescriptionVisible = false;
  let isDisqusVisible = false;
  let isFindVisible = false;
  let findDestination;
  let timestamp = 0;
  let currentPage = parseInt($page.params.slug);
  const showDisqus = () => {
    timestamp = Date.now();
    let d = document,
      s = d.createElement("script");
    s.src = "https://konstytucja.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
    isDisqusVisible = true;
  };

  page.subscribe(({ path }) => {
    if (currentPage > parseInt(path.slice(1))) xDelta = -30;
    else if (currentPage < parseInt(path.slice(1))) xDelta = 30;
    else xDelta = 0;
    currentPage = parseInt(path.slice(1));
    mounted = true;
  });

  const handleKeydown = (e) => {
    if (
      e.code === "ArrowLeft" &&
      $page.params.slug > 1 &&
      currentPage > 1 &&
      !window.document.getElementById("find")
    ) {
      isDescriptionVisible = false;
      isDisqusVisible = false;
      currentPage = currentPage - 1;
    } else if (
      e.code === "ArrowRight" &&
      $page.params.slug < 243 &&
      currentPage < 243 &&
      !window.document.getElementById("find")
    ) {
      isDescriptionVisible = false;
      isDisqusVisible = false;
      currentPage = currentPage + 1;
    } else if (e.code === "Escape") {
      if (!isFindVisible) {
        document.getElementById("back-btn").click();
      } else {
        isFindVisible = false;
      }
    } else if (e.code === "KeyW") {
      isDescriptionVisible = !isDescriptionVisible;
    } else if (e.code === "KeyQ") {
      if (!isDisqusVisible) {
        showDisqus();
      } else {
        isDisqusVisible = false;
      }
    } else if (e.code === "KeyF") {
      findDestination = null;
      isFindVisible = !isFindVisible;
      setTimeout(() => {
        if (isFindVisible) document.getElementById("find").focus();
      }, 100);
    } else if (e.code === "Enter") {
      if (!isFindVisible) return;
    }
  };

  const handleKeyup = (e) => {
    if (
      e.code === "ArrowLeft" &&
      $page.params.slug > 1 &&
      !window.document.getElementById("find")
    ) {
      mounted = false;
      goto(`/${currentPage}`);
    } else if (
      e.code === "ArrowRight" &&
      $page.params.slug < 243 &&
      !window.document.getElementById("find")
    ) {
      mounted = false;
      goto(`/${currentPage}`);
    } else {
      return null;
    }
  };

  const onSwipeLeft = () => {
    if (currentPage === 243) return null;
    mounted = false;
    isDescriptionVisible = false;
    isDisqusVisible = false;
    // currentPage = currentPage + 1;
    goto(`/${currentPage + 1}`);
  };

  const onSwipeRight = () => {
    if (currentPage === 1) return null;
    mounted = false;
    isDescriptionVisible = false;
    isDisqusVisible = false;
    // currentPage = currentPage - 1;
    goto(`/${currentPage - 1}`);
  };

  onMount(() => {
    let body = document.querySelector("body");
    let html = document.querySelector("html");

    const observer = new MutationObserver((mutations) => {
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
      subtree: true,
    });

    setTimeout(() => observer.disconnect(), 3000);

    if (sessionStorage.getItem("fromDyskusja")) {
      sessionStorage.removeItem("fromDyskusja");
      showDisqus();
    }

    eventManager = new EventManager(document.documentElement, {
      touchAction: "pan-y",
    });

    eventManager.on({
      swipeleft: onSwipeLeft,
      swiperight: onSwipeRight,
    });
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      eventManager.off({
        swipeleft: onSwipeLeft,
        swiperight: onSwipeRight,
      });
    }
  });
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

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
    <div class="flex justify-start w-24 pt-px mt-px">
      <Tooltip text={'Powrót do listy.'} pos={'b'}>
        <a
          id="back-btn"
          class="flex flex-col justify-center"
          rel="prefetch"
          href={$page.params.slug > 1 ? '#' + ($page.params.slug - 1) : '/'}
          on:click={() => {
            isDescriptionVisible = false;
            isDisqusVisible = false;
          }}>
          <div class="flex">
            <svg
              class="w-5 h-6 ml-1 text-gray-900 fill-current sm:w-6"
              viewBox="0 0 20 20">
              <path
                d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
            c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
            z" />
            </svg>
            <svg
              class="w-5 h-6 -ml-2 text-gray-900 fill-current sm:w-6"
              viewBox="0 0 20 20">
              <path
                d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
          c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
          z" />
            </svg>
          </div>
        </a>
      </Tooltip>
    </div>

    <h3 class="font-thin text-center sm:text-xl">
      {article.chapter['id']}
      {article.chapter['title']}
    </h3>
    <div class="flex justify-end w-24 pt-px mt-px">
      {#if $page.params.slug > 1}
        <Tooltip text={'Poprzedni artykuł.'} pos={'b'}>
          <a
            class="flex flex-col justify-center"
            rel="prefetch"
            href="/{parseInt($page.params.slug) - 1}"
            on:click={() => {
              mounted = false;
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
            on:click={() => {
              mounted = false;
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
            w-auto ml-2 text-gray-500 pointer-events-none" />
          <div class="flex">
            <input
              on:keydown={(e) => {
                if (e.target.value.length === 3 && !['Backspace', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                  e.preventDefault();
                }
                if (e.code === 'Enter' && parseInt(e.target.value) <= 243 && parseInt(e.target.value) >= 1) {
                  if (!findDestination) return;
                  currentPage = findDestination;
                  goto(`/${findDestination}`);
                  isDescriptionVisible = false;
                  isDisqusVisible = false;
                  isFindVisible = false;
                }
              }}
              bind:value={findDestination}
              placeholder="nr artykułu"
              type="number"
              min="1"
              max="243"
              name="find"
              id="find"
              class="w-full p-px text-xl font-light text-center text-gray-900
              bg-white border border-gray-100 rounded shadow appearance-none
              cursor-pointer sm:text-4xl" />

            <Tooltip text={'Naciśnij enter.'} pos={'b'}>
              <svg
                class="w-16 h-16 mx-2 text-gray-700 rounded fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path d="M256 0v32h224v448H32V32h64V0H0v512h512V0z" />
                <path
                  d="M128 0h32v32h-32zM192 0h32v32h-32zM148.688 196.688L73.376
                  272l75.312 75.312 22.624-22.624L134.624
                  288H432V176h-32v80H134.624l36.688-36.688zM400 112h32v32h-32z" />
              </svg>
            </Tooltip>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2
            text-gray-900 pointer-events-none" />
        </div>
      </div>
    </div>
  {/if}

  {#if Math.abs($page.params.slug - currentPage) > 1}
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
            Przejdź do art.
            <span class="font-bold">{currentPage}</span>
          </h2>
        </div>
      </div>
    </div>
  {/if}
  {#if mounted}
    <h1
      in:fly|fade={{ x: xDelta, duration: 300 }}
      class="pt-8 text-xl font-thin text-center sm:pt-10 md:pt-12 lg:pt-16
    sm:text-4xl">
      {article.title}
    </h1>
    <div class="py-4" in:fly|fade={{ x: xDelta, duration: 300 }}>
      <div
        on:click={(e) => {
          if (e.target.pathname) {
            currentPage = parseInt(e.target.pathname.slice(1));
          }
        }}
        in:fade={{ duration: 1000 }}
        style="hyphens: auto;"
        class="max-w-3xl mx-auto leading-relaxed text-justify text-base sm:text-xl">
        {@html article.html}
      </div>
      <div
        id="extra-info"
        class="max-w-3xl mx-auto mt-8 border-t border-gray-200">
        {#if article.desc != ``}
          <div class="pt-8">
            <button
              class="text-gray-600 text-sm"
              on:click={() => (isDescriptionVisible = !isDescriptionVisible)}>
              {#if !isDescriptionVisible}
                <span class="pt-2"> wyjaśnienie treści artykułu | pokaż </span>
              {:else}
                <span class="pt-2">
                  wyjaśnienie treści artykułu | schowaj
                </span>
              {/if}
            </button>
            {#if isDescriptionVisible}
              <div
                class="text-justify"
                in:fly|fade={{ y: -15, duration: 800 }}
                out:fly|fade={{ y: -15, duration: 400 }}>
                <h3 class="pt-2 font-thin text-base sm:text-xl">
                  Wyjaśnienie treści artykułu
                </h3>
                <div class="pt-2 text-sm">
                  {@html article.desc}
                </div>
              </div>
            {/if}
          </div>
        {/if}

        <div class="pt-4">
          <button class="text-gray-600 text-sm">
            {#if !isDisqusVisible}
              <span class="pt-2" on:click={() => showDisqus()}>
                dyskusja nad artykułem | pokaż
              </span>
            {:else}
              <span
                class="pt-2"
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
  {/if}
</div>
