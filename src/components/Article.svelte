<script>
  export let slug;
  export let title;
  export let chapter;
  export let html;
  export let desc;
</script>

<a class="cursor-pointer" rel="prefetch" href="/{slug}">
  <div
    id={slug}
    class="px-4 py-6 mb-2 text-justify border border-gray-100 rounded-md shadow-sm md:mb-3 lg:mb-4 hover:shadow-lg">
    <div class="flex justify-between">
      <div>
        <strong>{title}</strong>
        <span>(Rozdział {chapter['id']} - {chapter['title']})</span>
      </div>
      {#if desc}
        <span class="pl-3 cursor-help" title="artykuł posiada wyjaśnienie">
          <svg class="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="M3.302,12.238c0.464,1.879,1.054,2.701,3.022,3.562c1.969,0.86,2.904,1.8,3.676,1.8
              c0.771,0,1.648-0.822,3.616-1.684c1.969-0.861,1.443-1.123,1.907-3.002L10,15.6L3.302,12.238z
              M19.511,7.336l-8.325-4.662
              c-0.652-0.365-1.72-0.365-2.372,0L0.488,7.336c-0.652,0.365-0.652,0.963,0,1.328l8.325,4.662c0.652,0.365,1.72,0.365,2.372,0
              l5.382-3.014l-5.836-1.367C10.506,9,10.259,9.031,10,9.031c-1.052,0-1.904-0.506-1.904-1.131c0-0.627,0.853-1.133,1.904-1.133
              c0.816,0,1.51,0.307,1.78,0.734l6.182,2.029l1.549-0.867C20.162,8.299,20.162,7.701,19.511,7.336z
              M16.967,16.17
              c-0.065,0.385,1.283,1.018,1.411-0.107c0.579-5.072-0.416-6.531-0.416-6.531l-1.395,0.781C16.567,10.312,17.75,11.438,16.967,16.17z" />
          </svg>
        </span>
      {/if}
    </div>
    <div class="pt-3">
      {@html html}
    </div>
  </div>
</a>
