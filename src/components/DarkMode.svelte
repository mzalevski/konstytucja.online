<script>
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<style>
  button {
    position: fixed;
    left: 20px;
    bottom: 20px;
  }
  button img {
    width: 25px;
  }
  button:hover {
    opacity: 0.8;
  }
  :global(body.dark-mode) button:hover {
    color: black;
  }
</style>

<button on:click={toggle}>
  <img src="images/dark-light.png" alt="switch light mode" />
</button>
