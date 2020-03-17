<script>
  import { fly, fade } from "svelte/transition";
</script>

<style>
  #back-to-the-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  svg {
    fill: currentColor;
    height: 20px;
  }
  button:hover {
    opacity: 0.8;
  }
  :global(body.dark-mode) #back-to-the-top-btn svg {
    fill: white;
  }
</style>

<button
  id="back-to-the-top-btn"
  transition:fly={{ y: 200, duration: 2000 }}
  on:click={() => window.scroll(0, 0)}>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    enable-background="0 0 20 20">
    <path
      fill="currentColor"
      d="M2.582,13.891c-0.272,0.268-0.709,0.268-0.979,0s-0.271-0.701,0-0.969l7.908-7.83
      c0.27-0.268,0.707-0.268,0.979,0l7.908,7.83c0.27,0.268,0.27,0.701,0,0.969c-0.271,0.268-0.709,0.268-0.978,0L10,6.75L2.582,13.891z
      " />
  </svg>

</button>
