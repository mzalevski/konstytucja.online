<script>
  import { fly, fade } from "svelte/transition";
</script>

<style>
  #back-to-the-top-btn {
    position: fixed;
    right: 17.5px;
    bottom: 17.5px;
    color: #333333;
    height: 30px;
    width: 30px;
  }

  svg {
    fill: currentColor;
    height: 30px;
    width: 30px;
  }
  button:hover {
    opacity: 0.5;
  }
  :global(body.dark-mode) #back-to-the-top-btn {
    color: #cccccc;
  }
</style>

<button
  id="back-to-the-top-btn"
  transition:fly={{ y: 200, duration: 2000 }}
  on:click={() => window.scroll(0, 0)}>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">

    <path
      style="fill:currentColor;stroke-width:1.19472098"
      d="m 1.6861659,11.603015 c -0.304848,0.341313 -0.79462226,0.341313
      -1.09722878,0 -0.30260653,-0.341313 -0.30372729,-0.892764 0,-1.234077 L
      9.4519459,0.39698501 c 0.3026066,-0.34131335 0.7923811,-0.34131335
      1.0972291,0 l 8.863009,9.97195299 c 0.302607,0.341313 0.302607,0.892764
      0,1.234077 -0.303728,0.341313 -0.794623,0.341313 -1.096109,0 L
      10,2.5085429 Z" />
    <path
      style="fill:currentColor;stroke-width:1.19472098"
      d="m 1.6858154,19.603015 c -0.304848,0.341313 -0.79462229,0.341313
      -1.09722879,0 -0.3026065,-0.341313 -0.3037273,-0.892764 0,-1.234077 L
      9.4515955,8.3969852 c 0.302607,-0.3413133 0.7923815,-0.3413133 1.0972295,0
      l 8.863009,9.9719528 c 0.302607,0.341313 0.302607,0.892764 0,1.234077
      -0.303728,0.341313 -0.794623,0.341313 -1.096109,0 L 9.9996495,10.508543 Z" />
  </svg>

</button>
