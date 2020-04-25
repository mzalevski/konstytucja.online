<script>
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import { fly, fade } from "svelte/transition";
  import DarkMode from "../components/DarkMode.svelte";
  import Feedback from "../components/Feedback.svelte";
  // import Tutorial from "../components/Tutorial.svelte";
  import ToTheTopBtn from "../components/ToTheTopBtn.svelte";
  import Footer from "../components/Footer.svelte";
  import Tooltip from "../components/Tooltip.svelte";

  const { page } = stores();

  let yAxisPosition;
  let showFeedbackModal = false;
  let showTutorialModal = false;
  let darkMode;

  function handleFeedbackModalTrigger(e) {
    showFeedbackModal = e.detail.msg;
  }

  async function handleTutorialModalTrigger(e) {
    showTutorialModal = e.detail.msg;
  }

  async function handleDarkModeToggle(e) {
    darkMode = e.detail.msg;
    window.document.body.classList.toggle("dark-mode");
  }

  function visitCount() {
    let visits = Number(localStorage.getItem("visitCount")) || 0;
    let current = Boolean(sessionStorage.getItem("session")) || false;

    if (!current) visits++;

    localStorage.setItem("visitCount", visits);
    sessionStorage.setItem("session", true);

    if (visits === 10) {
      // console.log("Feedback prompt.");
    }

    // console.log(visits);
    // console.log(current);

    return visits;
  }

  async function handleSubmit(e) {
    const formData = new FormData(e.target);

    let msgInput = document.getElementById("feedbackMessage");
    let errorMsg = document.getElementById("errorMessage");

    if (msgInput.value.length < 20) {
      msgInput.style.backgroundColor = "#fff5f5";
      errorMsg.classList.remove("opacity-0");

      setTimeout(() => {
        msgInput.style.backgroundColor = "";
        errorMsg.classList.add("opacity-0");
      }, 3000);

      return null;
    }

    await fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: "form-name=feedbackForm&" + new URLSearchParams(formData)
    });

    msgInput.style.backgroundColor = "#f0fff4";
    setTimeout(() => (showFeedbackModal = false), 1000);
  }

  onMount(() => {
    visitCount();
    darkMode = document.body.classList.contains("dark-mode");
  });
</script>

<svelte:window bind:scrollY={yAxisPosition} />

<main
  class="container flex flex-col min-h-screen px-4 py-2 mx-auto overflow-hidden text-xs antialiased font-light text-gray-900 bg-white sm:px-1 sm:px-2 md:px-3 xl:px-16 sm:text-base">

  <div
    class="fixed bottom-0 left-0 flex flex-col justify-between w-16 h-24 pt-2 pb-4 sm:py-6 sm:w-20 sm:h-32">

    <Tooltip text={'Zgłoś błąd.'} pos={'r'}>
      <Feedback
        {showFeedbackModal}
        on:triggerFeedbackModal={handleFeedbackModalTrigger} />
    </Tooltip>

    <!-- <Tooltip text={'Zobacz instrukcję.'} pos={'r'}>
      <Tutorial
        {showTutorialModal}
        on:triggerTutorialModal={handleTutorialModalTrigger} />
    </Tooltip> -->

    <Tooltip text={`Zmień na ${darkMode ? 'jasny' : 'ciemny'} tryb.`} pos={'r'}>
      <DarkMode {darkMode} on:toggleDarkMode={handleDarkModeToggle} />
    </Tooltip>

  </div>

  {#if showFeedbackModal}
    <div
      transition:fade={{ duration: 400 }}
      class="fixed inset-0 z-50 flex flex-col items-center justify-center h-full bg-dark-overlay">
      <div
        class="w-11/12 p-4 mx-auto bg-white border rounded-lg shadow-inner sm:p-6 md:p-8 lg:p-12 sm:w-4/5 md:w-3/4 lg:w-1/2">
        <div class="flex justify-between">
          <h2 class="w-1/2 text-2xl font-thin sm:text-4xl">Zgłoś błąd</h2>
          <span
            id="errorMessage"
            class="self-center w-1/2 text-right transition-opacity duration-1000 ease-in-out opacity-0">
            Opis powinien zawierać co najmniej 20 znaków.
          </span>
        </div>
        <form
          id="feedbackForm"
          name="feedbackForm"
          method="POST"
          class="mt-4"
          on:submit|preventDefault={handleSubmit}
          data-netlify="true">
          <div class="relative inline-block w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center justify-center w-auto ml-2 text-gray-500 pointer-events-none">
              <svg
                class="w-4 h-4 fill-current sm:w-5 sm:h-5"
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
              class="w-full px-8 py-1 font-light text-gray-900 bg-white border border-gray-100 rounded shadow appearance-none cursor-pointer">
              <option selected value={$page.path}>
                obecna strona: {$page.host}{$page.path === '/' ? '' : $page.path}
              </option>
              <option class="font-light" value="głowna">strona główna</option>
              <option class="font-light" value="preambula">preambuła</option>
              <option class="font-light" value="komisja">
                komisja konstytucyjna
              </option>
              <option class="font-light" value="mobilna">
                aplikacja mobilna
              </option>
              <option class="font-light" value="desktop">
                aplikacja desktopowa
              </option>
              <option class="font-light" value="inne">inne</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-900 pointer-events-none">
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
            placeholder="opis błędu"
            id="feedbackMessage"
            name="message"
            class="block w-full h-32 p-2 mt-4 text-lg transition-colors duration-1000 ease-in-out border border-gray-100 rounded shadow resize-none"
            type="text" />
          <input
            class="hidden"
            type="text"
            name="platform"
            value={navigator.platform} />
          <input
            class="hidden"
            type="text"
            name="browser"
            value={navigator.appCodeName} />

          <div class="flex justify-around mt-4">
            <button
              on:click={e => {
                e.preventDefault();
                showFeedbackModal = false;
              }}
              class="w-full px-4 py-2 mr-2 border border-gray-100 rounded shadow hover:bg-gray-100">
              Anuluj
            </button>
            <button
              type="submit"
              class="w-full px-4 py-2 ml-2 border border-gray-100 rounded shadow hover:bg-gray-100">
              Wyślij
            </button>
          </div>
        </form>

      </div>
    </div>
  {/if}

  {#if showTutorialModal}
    <div
      transition:fade={{ duration: 400 }}
      class="fixed inset-0 z-50 flex flex-col items-center justify-center h-full bg-dark-overlay">
      <button
        class="absolute top-0 right-0 w-12 h-12"
        on:click={e => {
          e.preventDefault();
          showTutorialModal = false;
        }}>
        <svg class="text-gray-100 fill-current" viewBox="0 0 20 20">
          <path
            d="M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651
            3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229
            0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228
            0-1.697s1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469
            1.697 0s.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469
            1.229 0 1.698z" />
        </svg>
      </button>
      <div
        class="absolute top-0 w-64 h-6 bg-gray-100 rounded-lg rounded-t-none" />
      <div
        class="absolute bottom-0 w-64 h-6 rounded-lg rounded-b-none bg-red-new" />
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
