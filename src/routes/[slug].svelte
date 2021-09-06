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
  import { isMobile } from "./_helpers";
  import Head from "../components/Head.svelte";

  export let article;

  let eventManager;

  let showDropdown = false;

  const { page } = stores();

  let mounted = true;
  let xDelta = 30;
  let isDescriptionVisible = false;
  let isDisqusVisible = false;
  let isFindVisible = false;
  let findDestination;
  let timestamp = 0;
  let currentPage = parseInt($page.params.slug);
  let currentFavorites = [];
  $: inFavorites = currentFavorites.includes(article.slug);

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
    setTimeout(() => {
      isDescriptionVisible = false;
      isDisqusVisible = false;
    }, 1000);
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
    goto(`/${currentPage + 1}`);
  };

  const onSwipeRight = () => {
    if (currentPage === 1) return null;
    mounted = false;
    goto(`/${currentPage - 1}`);
  };

  const onDoubleTap = () => {
    findDestination = null;
    isFindVisible = true;
    setTimeout(() => {
      if (isFindVisible) document.getElementById("find").focus();
    }, 100);
  };

  const onPinch = () => {
    if (!showDropdown) showDropdown = true;
  };

  onMount(() => {
    let body = document.querySelector("body");
    let html = document.querySelector("html");

    currentFavorites =
      JSON.parse(window.localStorage.getItem("favorites")) || [];

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

    if (isMobile()) {
      eventManager = new EventManager(document.documentElement, {
        touchAction: "pan-y",
      });

      eventManager.on({
        swipeleft: onSwipeLeft,
        swiperight: onSwipeRight,
        doubletap: onDoubleTap,
        pinch: onPinch,
      });
    }
  });

  onDestroy(() => {
    if (isMobile()) {
      eventManager.off({
        swipeleft: onSwipeLeft,
        swiperight: onSwipeRight,
        doubletap: onDoubleTap,
        pinch: onPinch,
      });
    }
  });
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<Head
  title={article.title + " Konstytucji RP"}
  path={article.slug}
  keywords={`art ${article.path}, art. ${article.title}`}
/>

<Nav {showDropdown} segment={"articles"} />

<div>
  <div class="flex justify-between h-8">
    <div class="flex justify-start w-24 pt-px mt-px">
      <Tooltip text={"Powrót do listy."} pos={"b"}>
        <a
          id="back-btn"
          class="flex flex-col justify-center"
          rel="prefetch"
          href={`/?fromArticle=${$page.params.slug}`}
          on:click={() => {
            isDescriptionVisible = false;
            isDisqusVisible = false;
          }}
        >
          <div class="flex">
            <svg
              class="w-5 h-6 ml-1 text-gray-900 fill-current sm:w-6"
              viewBox="0 0 20 20"
            >
              <path
                d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
            c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
            z"
              />
            </svg>
            <svg
              class="w-5 h-6 -ml-2 text-gray-900 fill-current sm:w-6"
              viewBox="0 0 20 20"
            >
              <path
                d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
          c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
          z"
              />
            </svg>
          </div>
        </a>
      </Tooltip>
    </div>

    <h3 class="font-thin text-center sm:text-xl">
      {article.chapter["id"]}
      {article.chapter["title"]}
    </h3>

    <div
      in:fly={{ x: -50, duration: 1000 }}
      class="fixed left-0 bottom-15 sm:bottom-18 md:bottom- justify-center w-16 sm:w-20"
    >
      <Tooltip
        text={inFavorites ? "Usuń z ulubionych." : "Dodaj do ulubionych."}
        pos={"r"}
      >
        <button
          aria-label="toggle favorite"
          tabindex="-1"
          class="flex justify-center w-8 h-8 mx-auto hover:opacity-50"
          on:click={() => {
            if (inFavorites) {
              currentFavorites = currentFavorites.filter(
                (f) => f !== article.slug
              );
            } else {
              currentFavorites = [...currentFavorites, article.slug];
            }
            window.localStorage.setItem(
              "favorites",
              JSON.stringify(currentFavorites)
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-gray-700 sm:w-8 sm:h-8"
            fill={inFavorites ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </Tooltip>
    </div>

    <div class="flex justify-end w-24 pt-px mt-px">
      {#if $page.params.slug > 1}
        <Tooltip text={"Poprzedni artykuł."} pos={"b"}>
          <a
            class="flex flex-col justify-center"
            rel="prefetch"
            href="/{parseInt($page.params.slug) - 1}"
            on:click={() => {
              mounted = false;
              isDescriptionVisible = false;
              isDisqusVisible = false;
            }}
          >
            <svg
              class="w-5 h-6 mr-1 text-gray-900 fill-current sm:w-6"
              viewBox="0 0 20 20"
            >
              <path
                d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
                c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
                z"
              />
            </svg>
          </a>
        </Tooltip>
      {/if}
      {#if $page.params.slug < 243}
        <Tooltip text={"Następny artykuł."} pos={"b"}>
          <a
            id="right-chevron"
            class="flex flex-col justify-center"
            rel="prefetch"
            href="/{parseInt($page.params.slug) + 1}"
            on:click={() => {
              mounted = false;
              isDescriptionVisible = false;
              isDisqusVisible = false;
            }}
          >
            <svg
              class="w-5 h-6 ml-1 text-gray-900 fill-current sm:w-6"
              viewBox="0 0 20 20"
            >
              <path
                d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"
              />
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
      class="fixed inset-0 z-50 flex flex-col items-center justify-center h-full bg-dark-overlay"
    >
      <div
        class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3"
      >
        <div class="">
          <h2 class="text-2xl font-thin text-center sm:text-4xl">
            Przejdź do artykułu
          </h2>
        </div>

        <div class="relative inline-block w-full pt-4">
          <div
            class="absolute inset-y-0 left-0 flex items-center justify-center w-auto ml-2 text-gray-500 pointer-events-none"
          />
          <div class="flex justify-center space-x-2">
            <label aria-label="go to article">
              <input
                on:keydown={(e) => {
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
                  if (
                    e.key === "Enter" &&
                    parseInt(e.target.value) <= 243 &&
                    parseInt(e.target.value) >= 1
                  ) {
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
                class="w-full px-2 py-px text-xl font-light text-center text-gray-900 bg-white border border-gray-100 rounded shadow appearance-none cursor-pointer sm:text-4xl"
              /></label
            >

            <Tooltip text={"Naciśnij enter."} pos={"b"}>
              <button
                class="w-full px-2 py-px text-xl font-light text-center text-gray-900 bg-white border border-gray-100 rounded shadow appearance-none cursor-pointer sm:text-4xl"
                on:click={() => {
                  if (!findDestination) return;
                  if (
                    parseInt(findDestination) < 1 ||
                    parseInt(findDestination) > 243
                  ) {
                    findDestination = null;
                    return;
                  }
                  currentPage = findDestination;
                  goto(`/${findDestination}`);
                  isDescriptionVisible = false;
                  isDisqusVisible = false;
                  isFindVisible = false;
                }}
              >
                ok
              </button>
            </Tooltip>
            <Tooltip text={"Zamknij."} pos={"b"}>
              <button
                class="w-full px-2 py-px text-xl font-light text-center text-gray-900 bg-white border border-gray-100 rounded shadow appearance-none cursor-pointer sm:text-4xl"
                on:click={() => {
                  isDescriptionVisible = false;
                  isDisqusVisible = false;
                  isFindVisible = false;
                }}
              >
                x
              </button>
            </Tooltip>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-900 pointer-events-none"
          />
        </div>
      </div>
    </div>
  {/if}

  {#if Math.abs($page.params.slug - currentPage) > 1}
    <div
      id="feedback-modal"
      transition:fade={{ duration: 400 }}
      class="fixed inset-0 z-50 flex flex-col items-center justify-center h-full bg-dark-overlay"
    >
      <div
        class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner sm:p-6 md:p-8 lg:p-12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3"
      >
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
      in:fly|fade={{ x: xDelta, duration: 100 }}
      class="pt-8 text-xl font-thin text-center sm:pt-10 md:pt-12 lg:pt-16 sm:text-4xl"
    >
      {article.title}
    </h1>
    <div class="py-4" in:fly|fade={{ x: xDelta, duration: 100 }}>
      <div
        on:click={(e) => {
          if (e.target.pathname) {
            currentPage = parseInt(e.target.pathname.slice(1));
          }
        }}
        in:fade={{ duration: 1000 }}
        style="hyphens: auto;"
        class="max-w-3xl mx-auto text-base leading-relaxed text-justify sm:text-xl"
      >
        {@html article.html}
      </div>
      <div
        id="extra-info"
        class="max-w-3xl mx-auto mt-8 border-t border-gray-200"
      >
        {#if article.desc != ``}
          <div class="pt-8">
            <button
              aria-label="wyjaśnienie treści artykułu | schowaj"
              class="text-sm text-gray-600"
              on:click={() => (isDescriptionVisible = !isDescriptionVisible)}
            >
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
                out:fly|fade={{ y: -15, duration: 400 }}
              >
                <h3 class="pt-2 text-base font-thin sm:text-xl">
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
          <button
            aria-label="dyskusja nad artykułem | pokaż"
            class="text-sm text-gray-600"
          >
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
                }}
              >
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
            out:fly={{ y: -40, duration: 200 }}
          />
        {/if}
      </div>
    </div>
  {/if}
</div>
