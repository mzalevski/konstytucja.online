<script>
  export let small = false;
</script>

<div
  class={`flex flex-col justify-center ${
    small ? "min-h-4 sm:h-10 inline-flex px-3" : "min-h-10 sm:h-16 px-6"
  } text-2xl font-extrabold text-center text-gray-800 bg-gray-100 border rounded-lg shadow-xl cursor-default hover:shadow-inner transition`}
>
  <slot />
</div>
