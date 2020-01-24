<script>
  import { fly, fade } from "svelte/transition";
</script>

<style>
  #back-to-the-top-btn {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 2.5em;
    height: 2.5em;
    margin: 2em 1em;
    opacity: 0.5;
  }
  #back-to-the-top-btn img {
    size: 50%;
  }
  #back-to-the-top-btn {
    height: 25px;
    width: 25px;
  }
</style>

  <button id="back-to-the-top-btn"
    in:fly={{ y: 200, duration: 2000 }}
    on:click={() => window.scroll(0, 0)}>

    <img src="images/angle-double-up-solid.svg" alt="" />

  </button>