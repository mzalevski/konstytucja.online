<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let showTutorialModal;

  function triggerTutorialModal() {
    showTutorialModal = !showTutorialModal;
    dispatch("triggerTutorialModal", {
      msg: showTutorialModal
    });
  }
</script>

<div>
  <button
    class="flex justify-center w-8 h-8 mx-auto hover:opacity-50"
    on:click={triggerTutorialModal}>

    <svg
      class="w-6 h-6 text-gray-700 fill-current sm:w-8 sm:h-8"
      viewBox="0 0 20 20">
      <path
        d="M14.09 2.233C12.95 1.411 11.518 1 9.794 1c-1.311
        0-2.418.289-3.317.868C5.05 2.774 4.292 4.313 4.2
        6.483h3.307c0-.633.185-1.24.553-1.828.369-.586.995-.879 1.878-.879.898 0
        1.517.238 1.854.713.339.477.508 1.004.508 1.582 0 .504-.252.965-.557
        1.383-.167.244-.387.469-.661.674 0 0-1.793 1.15-2.58 2.074-.456.535-.497
        1.338-.538 2.488-.002.082.029.252.315.252h2.571c.256 0
        .309-.189.312-.274.018-.418.064-.633.141-.875.144-.457.538-.855.979-1.199l.91-.627c.822-.641
        1.477-1.166
        1.767-1.578.494-.676.842-1.51.842-2.5-.001-1.615-.571-2.832-1.711-3.656zM9.741
        14.924c-1.139-.035-2.079.754-2.115 1.99-.035 1.234.858 2.051 1.998 2.084
        1.189.035 2.104-.727 2.141-1.963.034-1.236-.834-2.076-2.024-2.111z" />
    </svg>
  </button>
</div>
