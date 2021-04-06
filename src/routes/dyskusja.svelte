<script>
  import { onMount, onDestroy } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Spinner from "../components/Spinner.svelte";
  import threads from "./_threads.js";
  import { EventManager } from "mjolnir.js";
  import { goto, prefetch } from "@sapper/app";

  let eventManager;
  let showDropdown = false;

  async function assembleComments(threads) {
    let rawComments = await fetch("/.netlify/functions/rawComments")
      .then(response => response.json())
      .then(json => json.msg.response);

    let comments = rawComments.map(rc => {
      const found = threads.find(thread => thread.id === rc.thread);
      rc.link = found.slug;
      return rc;
    });

    return comments;
  }

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/");
  };

  onMount(() => {
    prefetch("/");
    eventManager = new EventManager(document.documentElement, {
      touchAction: "pan-y",
    });
    eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      eventManager.off({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });
</script>

<svelte:head>
  <title>Dyskusja</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r."
  />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat"
  />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl xl:text-3xl"
  in:fly={{ x: -50, duration: 1000 }}
>
  Dyskusja
</h1>

<div in:fade={{ duration: 3000 }}>
  <h2 class="mt-4 text-xl font-thin">Lista komentarzy:</h2>

  <div class="py-4">
    {#await assembleComments(threads)}
      <div class="w-20 mx-auto mt-32">
        <Spinner size="70" speed="750" thickness="2" gap="40" />
      </div>
    {:then comments}
      {#each comments as comment}
        <a
          on:click={() => sessionStorage.setItem("fromDyskusja", true)}
          href="/{comment.link}"
        >
          <div
            in:fly={{ y: 100, duration: 1000 }}
            class="p-4 my-4 rounded shadow sm:p-8 hover:bg-gray-100"
          >
            <strong>Art. {comment.link}</strong>
            -
            {new Date(comment.createdAt).toLocaleString("pl-PL")}
            -
            {comment.author.name}:
            <br />
            {comment.raw_message.substr(0, 120)}
            ...
          </div>
        </a>
      {/each}
    {:catch}
      Błąd serwera. Odśwież stronę.
    {/await}
  </div>
</div>
