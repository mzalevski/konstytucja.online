<script>
  import { EventManager } from "mjolnir.js";
  import { onDestroy, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Nav from "../../../components/Nav.svelte";
  import { goto, prefetch } from "@sapper/app";
import { isMobile } from "../../_helpers";

  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => (showDropdown = true);
  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/komisja");
  };

  onMount(() => {
    prefetch("/komisja");
    if (isMobile()) {
      eventManager = new EventManager(document.documentElement, {
        touchAction: "pan-y",
      });
      eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });

  onDestroy(() => {
    if (isMobile()) {
      eventManager.off({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });
</script>

<svelte:head>
  <title>Biuletyn nr 14</title>
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<div in:fly={{ y: 100, duration: 1000 }}>
  <h1 class="text-sm font-thin sm:text-xl lg:text-2xl">
    Posiedzenia Komisji Konstytucyjnej ZN (21, 22 i 23.02.1995 r.)
  </h1>
  <!-- <h5>
    <a
      href="https://drive.google.com/file/d/1awtjblaTcKfacOyLZwlw_y9ki_226um_/view?usp=sharing"
      rel="nofollow"
      target="_blank">
      ORYGINAŁ BIULETYNU
    </a>
  </h5> -->
  <p class="max-w-2xl pt-6 text-justify">
    W dniach 21, 22 i 23 lutego 1995 r. Komisja Konstytucyjna Zgromadzenia
    Narodowego, obradująca pod przewodnictwem posła Aleksandra Kwaśniewskiego
    (SLD), rozpatrywała: projekt jednolity Konstytucji Rzeczypospolitej Polskiej
    (w ujęciu wariantowym), przyjęcie harmonogramu posiedzeń Komisji
    Konstytucyjnej w II kwartale 1995 r., sprawy różne.
  </p>

  <ul class="flex flex-wrap flex-grow py-8">
    <a
      class="w-24 py-4 my-1 mr-4 text-center text-gray-800 rounded-lg shadow-lg sm:p-4 sm:text-lg sm:w-40 hover:bg-gray-100"
      rel="prefetch"
      href="komisja/14/1"
    >
      <li>
        <p class="font-semibold">Dzień 1</p>
        <p class="font-thin">21 lutego</p>
      </li>
    </a>
    <a
      class="w-24 py-4 my-1 mr-4 text-center text-gray-800 rounded-lg shadow-lg sm:p-4 sm:text-lg sm:w-40 hover:bg-gray-100"
      rel="prefetch"
      href="komisja/14/2"
    >
      <li>
        <p class="font-semibold">Dzień 2</p>
        <p class="font-thin">22 lutego</p>
      </li>
    </a>
    <a
      class="w-24 py-4 my-1 mr-4 text-center text-gray-800 rounded-lg shadow-lg sm:p-4 sm:text-lg sm:w-40 hover:bg-gray-100"
      rel="prefetch"
      href="komisja/14/3"
    >
      <li>
        <p class="font-semibold">Dzień 3</p>
        <p class="font-thin">23 lutego</p>
      </li>
    </a>
    <a
      class="w-24 py-4 my-1 mr-4 text-center text-gray-800 rounded-lg shadow-lg sm:p-4 sm:text-lg sm:w-40 hover:bg-gray-100"
      rel="prefetch"
      href="komisja/14/podkomisja"
    >
      <li>
        <p class="font-semibold">Podkomisja</p>
        <p class="font-thin">22 lutego</p>
      </li>
    </a>
    <!-- <a rel="prefetch" href="komisja/14/prasa">
      <li>Prasa</li>
    </a> -->
  </ul>

  <div>
    <h3 class="mt-3 text-xl font-thin">
      Skład komisji konstytucyjnej zgromadzenia narodowego
    </h3>

    <h5 class="text-xs font-bold tracking-wide text-gray-500 uppercase">
      (po zmianach z dnia 25 marca, 26 sierpnia i 16 września 1994 r.)
    </h5>

    <ul class="py-8 three-col rep-list">
      <li>1. Poseł Aleksander Kwaśniewski (SLD) — przewodniczący</li>
      <li>2. Senator Stefan Pastuszka (PSL) — zastępca przewodniczącego</li>
      <li>3. Senator Piotr Andrzejewski (NSZZ „S”)</li>
      <li>4. Poseł Aleksander Bentkowski (PSL)</li>
      <li>5. Poseł Lidia Błądek (PSL)</li>
      <li>6. Poseł Jan Borkowski (PSL)</li>
      <li>7. Poseł Wojciech Borowik (UP)</li>
      <li>8. Poseł Ryszard Bugaj (UP)</li>
      <li>9. Poseł Piotr Chojnacki (PSL)</li>
      <li>10. Poseł Jerzy Ciemniewski (UW)</li>
      <li>11. Poseł Włodzimierz Cimoszewicz (SLD)</li>
      <li>12. Senator Adam Daraż (PSL)</li>
      <li>13. Poseł Henryk Dyrda (PKR)</li>
      <li>14. Poseł Ryszard Grodzicki (SLD)</li>
      <li>15. Senator Alicja Grześkowiak (NSZZ „S”)</li>
      <li>16. Poseł Jerzy Gwiżdż (BBWR)</li>
      <li>17. Poseł Piotr Ikonowicz (PPS)</li>
      <li>18. Poseł Tadeusz Iwiński (SLD)</li>
      <li>19. Senator Paweł Jankiewicz (SLD)</li>
      <li>20. Poseł Jerzy Jaskiernia (SLD)</li>
      <li>21. Poseł Seweryn Jurgielaniec (SLD)</li>
      <li>22. Poseł Krzysztof Kamiński (KPN)</li>
      <li>23. Senator Krzysztof Kozłowski (KD)</li>
      <li>24. Poseł Henryk Kroll (MN)</li>
      <li>25. Poseł Marian Król (PSL)</li>
      <li>26. Poseł Maria Kurnatowska (PSL)</li>
      <li>27. Poseł Irena Lipowicz (UW)</li>
      <li>28. Poseł Aleksander Łuczak (PSL)</li>
      <li>29. Poseł Krystyna Łybacka (SLD)</li>
      <li>30. Senator Jerzy Madej (KD)</li>
      <li>31. Poseł Wit Majewski (SLD)</li>
      <li>32. Poseł Tadeusz Mazowiecki (UW)</li>
      <li>33. Poseł Marek Mazurkiewicz (SLD)</li>
      <li>34. Poseł Leszek Moczulski (KPN)</li>
      <li>35. Senator Jan Mulak (SLD)</li>
      <li>36. Senator Jan Orzechowski (PSL)</li>
      <li>37. Poseł Longin Pastusiak (SLD)</li>
      <li>38. Poseł Andrzej Pomirski (PSL)</li>
      <li>39. Poseł Stanisław Rogowski (UP)</li>
      <li>40. Poseł Marek Rojszyk (SLD)</li>
      <li>41. Poseł Jan Rokita (UW)</li>
      <li>42. Senator Henryk Rot (SLD)</li>
      <li>43. Poseł Władysław Serafin (PSL)</li>
      <li>44. Poseł Zbigniew Siemiątkowski (SLD)</li>
      <li>45. Poseł Hanna Suchocka (UW)</li>
      <li>46. Poseł Sławomiw Szatkowski (PSL)</li>
      <li>47. Poseł Jan Szczepaniak (PSL)</li>
      <li>48. Poseł Adam Szczęsny (PSL)</li>
      <li>49. Poseł Jerzy Szteliga (SLD)</li>
      <li>50. Poseł Janusz Szymański (UP)</li>
      <li>51. Poseł Czesław Sleziak (SLD)</li>
      <li>52. Poseł Jacek Taylor (UW)</li>
      <li>53. Poseł Danuta Waniek (SLD)</li>
      <li>54. Poseł Jerzy Wiatr (SLD)</li>
      <li>55. Poseł Janusz Wojciechowski (PSL)</li>
      <li>56. Poseł Jerzy Zdrada (UW)</li>
    </ul>
    <p class="mt-3 text-lg font-thin">
      W posiedzeniu udział wzięli przedstawiciele:
      <br />
      Prezydenta RP — prof. Michał Pietrzak i prof. Andrzej Rzepliński,
      <br />
      Rady Ministrów — prof. Stanisław Gebethner i prof. Andrzej Gwiżdż, a także
      <br />
      przedstawiciele kościołów i związków zawodowych oraz organizacji politycznych
      i społecznych.
    </p>
  </div>
</div>
