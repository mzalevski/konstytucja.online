<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Tooltip from "../components/Tooltip.svelte";

  export let count;

  const dispatch = createEventDispatcher();

  let selectedChapter;
  let searchedText = "";

  let searchTransitionConfig =
    window.outerWidth > 1024
      ? { y: -100, duration: 1000 }
      : { x: 100, duration: 1000 };

  function sendChoice() {
    dispatch("searchMessage", {
      text: searchedText,
      chapter: selectedChapter
    });
  }
</script>

<div
  class="relative -mt-px mb-2 sm:flex sm:justify-end sm:mb-0"
  in:fly={searchTransitionConfig}>
  <div class="relative">

    <input
      id="text-search"
      class="w-full px-8 py-1 font-light border border-gray-100 rounded-md
      shadow-sm sm:w-40 md:w-56 lg:w-64 lg:pl-10 md:pr-10"
      bind:value={searchedText}
      on:input={sendChoice} />
    <div
      class="absolute inset-y-0 right-0 flex flex-col justify-center px-2
      cursor-default">
      <Tooltip text={'Liczba wyświetlonych artykułów.'} pos={'b'}>
        <span>{count}</span>
      </Tooltip>
    </div>
    <div
      class="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500
      pointer-events-none">
      <svg class="w-4 h-4 fill-current sm:w-5 sm:h-5" viewBox="0 0 20 20">
        <g fill-rule="evenodd">
          <g>
            <path
              d="M12.9056439,14.3198574 C11.5509601,15.3729184 9.84871145,16
              8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0
              C12.418278,0 16,3.581722 16,8 C16,9.84871145 15.3729184,11.5509601
              14.3198574,12.9056439 L19.6568542,18.2426407
              L18.2426407,19.6568542 L12.9056439,14.3198574 Z M8,14
              C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2
              C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z" />
          </g>
        </g>
      </svg>
    </div>
  </div>

  <div
    class="relative inline-block w-full mt-1 sm:mt-0 sm:w-8 lg:w-full sm:ml-1
    md:ml-2">
    <div
      class="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500
      pointer-events-none sm:justify-center sm:w-full lg:w-auto sm:px-0 lg:px-2">
      <svg class="w-4 h-4 fill-current sm:w-5 sm:h-5" viewBox="0 0 20 20">
        <g fill-rule="evenodd">
          <g>
            <path
              d="M2,1.99079514 C2,0.891309342 2.89706013,0 4.00585866,0
              L14.9931545,0 C15.5492199,0 16,0.443864822 16,1 L16,2
              L5.00247329,2 C4.44882258,2 4,2.44386482 4,3 C4,3.55228475
              4.44994876,4 5.00684547,4 L16.9931545,4 C17.5492199,4
              18,4.44463086 18,5.00087166 L18,18.0059397 C18,19.1072288
              17.1054862,20 16.0059397,20 L3.99406028,20 C2.8927712,20
              2,19.1017876 2,18.0092049 L2,1.99079514 Z M6,4 L10,4 L10,12 L8,10
              L6,12 L6,4 Z" />
          </g>
        </g>
      </svg>
    </div>
    <select
      class="w-full px-8 py-1 font-light text-gray-900 bg-white border
      border-gray-100 rounded-md shadow-sm appearance-none cursor-pointer sm:w-8
      lg:w-full sm:px-0 lg:px-10 sm:text-transparent lg:text-gray-900"
      bind:value={selectedChapter}
      on:blur={sendChoice}>

      <option class="font-light text-gray-900" value="_">
        Wszystkie rozdziały
      </option>
      <option class="font-light text-gray-900" value="I">
        Rozdział I - Rzeczpospolita
      </option>
      <option class="font-light text-gray-900" value="II">
        Rozdział II - Wolności, prawa i obowiązki człowieka i obywatela
      </option>
      <option class="font-light text-gray-900" value="III">
        Rozdział III - Źródła prawa
      </option>
      <option class="font-light text-gray-900" value="IV">
        Rozdział IV - Sejm i Senat
      </option>
      <option class="font-light text-gray-900" value="V">
        Rozdział V - Prezydent Rzeczypospolitej Polskiej
      </option>
      <option class="font-light text-gray-900" value="VI">
        Rozdział VI - Rada Ministrów i administracja rządowa
      </option>
      <option class="font-light text-gray-900" value="VII">
        Rozdział VII - Samorząd terytorialny
      </option>
      <option class="font-light text-gray-900" value="VIII">
        Rozdział VIII - Sądy i Trybunały
      </option>
      <option class="font-light text-gray-900" value="IX">
        Rozdział IX - Organy kontroli państwowej i ochrony prawa
      </option>
      <option class="font-light text-gray-900" value="X">
        Rozdział X - Finanse publiczne
      </option>
      <option class="font-light text-gray-900" value="XI">
        Rozdział XI - Stany nadzwyczajne
      </option>
      <option class="font-light text-gray-900" value="XII">
        Rozdział XII - Zmiana Konstytucji
      </option>
      <option class="font-light text-gray-900" value="XIII">
        Rozdział XIII - Przepisy przejściowe i końcowe
      </option>
    </select>
    <div
      class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-900
      pointer-events-none sm:hidden lg:flex">

      <svg class="w-4 h-4 fill-current sm:w-5 sm:h-5" viewBox="0 0 20 20">
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
          4.343 8z" />
      </svg>
    </div>
  </div>
</div>
