<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../components/Nav.svelte";
</script>

<style>
  .signature {
    text-align: right;
    font-style: italic;
  }
  p {
    text-align: justify;
  }

  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }
</style>

<svelte:head>
  <title>Inicjatywa</title>
  <meta name="description" content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r.">
  <meta name="keywords" content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline, online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo, trybunał, prezydent, rada ministrów, sejm, senat">
  <meta name="konstytucja" content="website">
</svelte:head>

<Nav segment={'info'}/>

<div in:fly={{ y: 100, duration: 1000 }}>
  <h3>Inicjatywa</h3>
  <p>
    Niniejszy czytnik jest odpowiedzią na niewystarczający dostęp do tekstu prawa
    oraz do informacji o prawie. Obywatele Rzeczpospolitej powinni znać
    Konstytucję, która stanowi podstawę ich republiki - państwa prawa, które staje
    w ich obronie przed arbitralną i nieograniczoną władzą.
  </p>
  <p class="signature">
    <a
      href="http://maciej-zalewski.pl/"
      rel="nofollow"
      target="_blank"
      class="signature">
      Maciej Zalewski
    </a>
  </p>
</div>