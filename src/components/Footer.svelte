<script>
  import { fly } from "svelte/transition";
</script>

<style>
  footer {
    display: flex;
    border-top: 1px solid rgba(160, 40, 40, 0.1);
    font-weight: 300;
    padding: 0;
    margin: 1rem 0 0 0;
    justify-content: center;
    text-align: center;
  }
  a {
    padding: 1.15em 0.5em 1em 0em;
    color: inherit;
    font-style: italic;
  }
  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }
  img {
    height: 0.8rem;
  }
</style>

<footer in:fly={{ y: 100, duration: 2000 }}>
  <p>
    z miłości
    <img src="images/heart.png" alt="" />
    do Polski ~
    <a href="https://maciej-zalewski.pl" rel="nofollow" target="_blank">
      Maciej Zalewski
    </a>
  </p>
</footer>
