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

  <!-- ten transition się buguje transition:fly={{ y: 200, duration: 2000 }} -->
  <button id="back-to-the-top-btn" on:click={() => window.scroll(0, 0)}>
    <img src="images/angle-double-up-solid.svg" alt="" />
  </button>