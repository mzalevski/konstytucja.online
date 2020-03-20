<script>
  import { fly } from "svelte/transition";
</script>

<style>
  footer {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    font-weight: 300;
    margin-top: auto;
    justify-content: center;
    text-align: center;
  }
  a {
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
  @media (max-width: 500px) {
    img {
      height: 0.6rem;
    }
  }
</style>

<footer>
  <p>
    z miłości
    <img src="images/heart.png" alt="" />
    do Polski ~
    <a href="https://maciej-zalewski.pl" rel="nofollow" target="_blank">
      Maciej Zalewski
    </a>
  </p>
</footer>
