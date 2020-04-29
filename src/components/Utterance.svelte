<script>
  export let speaker;
  export let imgPath;
  export let text;
</script>

<div class="flex mt-4">
  <img
    class="w-16 h-16 rounded-lg shadow-xl sm:w-24 sm:h-24 lg:w-32 lg:h-32"
    src={imgPath}
    alt={speaker}
    loading="lazy" />
  <p
    class="px-2 py-2 mt-8 rounded-lg shadow-lg sm:px-12 sm:py-6 lg:px-16 xl:py-8">
    <strong>{speaker}:</strong>
    {text}
  </p>
</div>
