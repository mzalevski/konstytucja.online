<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  let ostComments = [];
  let ostThreads = [];
  let ostSlugTable = [];

  const secretKey =
    "Tc85moOTfiKX7wkqafJ4wJ4dXAKkoAdjGxrAmuny9Da1BNT9iAaTb7lR3miMn6pS";

  async function getAllComments() {
    let comments = [];
    await fetch(
      `https://disqus.com/api/3.0/forums/listPosts.json?forum=konstytucja&api_key=${secretKey}`
    )
      .then(response => response.json())
      .then(json => {
        comments = json.response;
      });
    return comments;
  }
  function getRelThreadSlugs(relThreadIds) {
    let hrefs = [];
    for (const id of relThreadIds) {
      fetch(
        `https://disqus.com/api/3.0/forums/listThreads.json?forum=konstytucja&thread=${id}&api_key=${secretKey}`
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

  onMount(async () => {
    ostComments = await getAllComments();
    ostComments.forEach(element => {
      ostThreads.push(element.thread);
    });

    let ostLinks = getRelThreadSlugs(ostThreads);
    // let calosc = new Map([[ostLinks, ostComments[0]]]);
    console.log(ostLinks);
    // let calosc = ostLinks.map((el, i) => {
    //   return [el, ostComments[i]];
    // });
    // console.log(calosc.keys());
  });
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

<div in:fly={{ y: 100, duration: 1000 }}>
  <h3>Dyskusja</h3>
  <br />
  <h4>Lista komentarzy:</h4>
  <br />
  {#each ostComments as comment}
    <div>
      {new Date(comment.createdAt).toLocaleString('pl-PL')} - {comment.author.name}:
      <br />
      {comment.raw_message.substr(0, 100)}
    </div>
    <br />
    <br />
  {/each}
</div>
