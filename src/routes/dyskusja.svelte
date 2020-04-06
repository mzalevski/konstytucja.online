<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Spinner from "../components/Spinner.svelte";

  const secretKey =
    "Tc85moOTfiKX7wkqafJ4wJ4dXAKkoAdjGxrAmuny9Da1BNT9iAaTb7lR3miMn6pS";

  async function getAllComments() {
    let comments = [];

    await fetch(`/disqus/listPosts.json?forum=konstytucja&api_key=${secretKey}`)
      .then(response => response.json())
      .then(json => {
        comments = json.response;
      });

    return comments;
  }

  async function getRelThreadSlugs(relThreadIds) {
    let hrefs = [];

    for (const id of relThreadIds) {
      await fetch(
        `/disqus/listThreads.json?forum=konstytucja&thread=${id}&api_key=${secretKey}`
      )
        .then(response => response.json())
        .then(json => {
          let link = json.response[0].link;
          let ostLink =
            link.split("/").pop() !== ""
              ? link.split("/").pop()
              : link
                  .substr(0, link.length - 1)
                  .split("/")
                  .pop();

          hrefs.push(ostLink);
        });
    }

    return hrefs;
  }

  async function getOstComments() {
    let ostThreads = [];

    let ostComments = await getAllComments();
    ostComments.forEach(element => {
      ostThreads.push(element.thread);
    });

    let ostLinks = await getRelThreadSlugs(ostThreads);

    ostComments.forEach((comm, idx) => {
      comm["link"] = ostLinks[idx];
    });

    return ostComments;
  }
</script>

<svelte:head>
  <title>Dyskusja</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r." />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={'info'} />

<h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}>
  Dyskusja
</h1>

<div in:fade={{ duration: 3000 }}>
  <h2 class="mt-4 text-xl font-thin">Lista komentarzy:</h2>

  <div class="py-4">
    {#await getOstComments()}
      <div class="w-8 mx-auto mt-64">
        <Spinner size="50" speed="750" color="#A82124" thickness="2" gap="40" />
      </div>

    {:then ostComments}
      {#each ostComments as comment}
        <a
          on:click={() => sessionStorage.setItem('fromDyskusja', true)}
          href="/{comment.link}">
          <div
            in:fly={{ y: 100, duration: 1000 }}
            class="p-8 my-4 rounded shadow hover:bg-gray-100">
            <strong>Art. {comment.link}</strong>
            - {new Date(comment.createdAt).toLocaleString('pl-PL')} - {comment.author.name}:
            <br />
            {comment.raw_message.substr(0, 100)} ...
          </div>
        </a>
      {/each}
    {:catch}
      Błąd serwera. Odśwież stronę.
    {/await}
  </div>

</div>
