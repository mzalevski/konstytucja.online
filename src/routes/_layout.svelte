<script>
  import { onMount } from "svelte";
  import DarkMode from "../components/DarkMode.svelte";
  import Feedback from "../components/Feedback.svelte";
  import Tutorial from "../components/Tutorial.svelte";
  import ToTheTopBtn from "../components/ToTheTopBtn.svelte";
  import Footer from "../components/Footer.svelte";
  import { stores } from "@sapper/app";
  import { fly, fade } from "svelte/transition";

  const { page } = stores();

  let yAxisPosition;
  let showModal = false;

  function handleModalTrigger(e) {
    showModal = e.detail.msg;
    console.log("odbiornik");
    console.log(showModal);
  }

  function visitCount() {
    let visits = Number(localStorage.getItem("visitCount")) || 0;
    let current = Boolean(sessionStorage.getItem("session")) || false;

    if (!current) visits++;

    localStorage.setItem("visitCount", visits);
    sessionStorage.setItem("session", true);

    if (visits === 10) {
      console.log("Feedback prompt.");
    }

    console.log(visits);
    console.log(current);

    return visits;
  }

  async function handleSubmit(e) {
    const formData = new FormData(e.target);

    await fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: "form-name=feedbackForm&" + new URLSearchParams(formData)
    }).then(() => console.log("asdasd"));

    showModal = false;
  }

  onMount(() => visitCount());
</script>

<svelte:window bind:scrollY={yAxisPosition} />

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Alex+Brush&text=Konstytucja"
    rel="stylesheet" />
</svelte:head>

<main
  class="container flex flex-col min-h-screen px-4 py-2 mx-auto overflow-hidden text-xs antialiased font-light text-gray-900 sm:px-1 sm:px-2 md:px-3 xl:px-16 sm:text-base">

  <div
    class="fixed bottom-0 left-0 flex flex-col justify-between w-16 h-40 pb-6 sm:w-20 sm:h-48">
    <Feedback {showModal} on:triggerModal={handleModalTrigger} />
    <Tutorial />
    <DarkMode />
  </div>

  {#if showModal}
    <div
      transition:fade={{ duration: 400 }}
      class="fixed inset-0 z-50 flex flex-col items-center justify-center h-full bg-dark-overlay">
      <div
        class="w-11/12 p-12 mx-auto bg-white border rounded-lg shadow-inner sm:w-4/5 md:w-3/4 lg:w-1/2">
        <h2 class="text-4xl font-thin">Zgłoś błąd</h2>
        <form
          on:submit|preventDefault={handleSubmit}
          class="mt-4"
          name="feedbackForm"
          id="feedbackForm"
          method="POST"
          data-netlify="true">
          <div class="relative inline-block w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center justify-center w-auto ml-2 text-gray-500 pointer-events-none">
              <svg
                class="w-4 h-4 fill-current sm:w-5 sm:h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path
                  d="M18.405 4.799c-.111-.44-.655-.799-1.21-.799h-6.814c-.554
                  0-1.33-.318-1.722-.707l-.596-.588C7.671 2.316 6.896 2 6.342
                  2H3.087c-.555 0-1.059.447-1.12.994L1.675
                  6h16.931l-.201-1.201zM19.412 7H.588c-.342
                  0-.61.294-.577.635l.923
                  9.669c.037.394.369.696.766.696h16.6c.397 0
                  .728-.302.766-.696l.923-9.669c.033-.341-.235-.635-.577-.635z" />
              </svg>
            </div>
            <select
              name="topic"
              class="w-full px-10 py-1 font-light text-gray-900 bg-white border border-gray-100 rounded-md shadow-sm appearance-none cursor-pointer">
              <option selected="true">
                obecna strona: {$page.host}{$page.path === '/' ? '' : $page.path}
              </option>
              <option class="font-light" value="głowna">strona główna</option>
              <option class="font-light" value="preambula">
                strona preambuła
              </option>
              <option class="font-light" value="komisja">strona komisja</option>
              <option class="font-light" value="mobilna">
                aplikacja mobilna
              </option>
              <option class="font-light" value="desktop">
                aplikacja desktop
              </option>
              <option class="font-light" value="inne">inne</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-900 pointer-events-none sm:hidden lg:flex">

              <svg
                class="w-4 h-4 fill-current sm:w-5 sm:h-5"
                viewBox="0 0 20 20">
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757
                  6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <textarea
            name="message"
            class="block w-full h-32 p-2 mt-4 text-lg rounded shadow resize-none"
            type="text" />
          <div class="flex justify-around mt-4">
            <button
              on:click={e => {
                e.preventDefault();
                showModal = false;
                document
                  .querySelector('html')
                  .classList.remove('overflow-y-hidden');
              }}
              class="w-full px-4 py-2 mr-2 shadow hover:bg-gray-100">
              Annuluj
            </button>
            <button
              type="submit"
              class="w-full px-4 py-2 ml-2 shadow hover:bg-gray-100">
              Wyślij
            </button>
          </div>
        </form>

      </div>
    </div>
  {/if}

  {#if yAxisPosition > 300}
    <ToTheTopBtn />
  {/if}

  <div class="flex-1">
    <slot />
  </div>

  <Footer />

</main>
