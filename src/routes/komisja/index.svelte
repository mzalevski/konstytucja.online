<script>
  import { stores } from "@sapper/app";
  import { fly, fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Komisja Konstytucyjna</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r." />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={'info'} />

<h1 class="text-2xl font-thin" in:fly={{ x: -50, duration: 1000 }}>
  Komisja Konstytucyjna
</h1>
<div in:fade={{ duration: 3000 }}>
  <p>
    <a
      class="text-sm font-bold text-gray-500 uppercase tracking-wider"
      href="https://www.wikiwand.com/pl/Komisja_Konstytucyjna_Zgromadzenia_Narodowego"
      rel="nofollow"
      target="_blank">
      Komisja Konstytucyjna ZN
    </a>
    <svg
      class="inline-block mb-1 w-4 h-4 fill-current text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path
        d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1
        0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2
        2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" />
    </svg>
  </p>
  <div class="mt-4">
    <p>
      Komisja Konstytucyjna
      <a
        href="https://www.wikiwand.com/pl/Zgromadzenie_Narodowe_w_Polsce"
        rel="nofollow"
        target="_blank">
        Zgromadzenia Narodowego
      </a>
      <svg
        class="inline-block mb-1 w-4 h-4 fill-current text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1
          1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2
          2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" />
      </svg>
      została utworzona przez ustawę konstytucyjną z dnia 23 kwietnia 1992 r. o
      trybie przygotowania i uchwalenia Konstytucji Rzeczypospolitej Polskiej (
      <a
        href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19920670336"
        rel="nofollow"
        target="_blank">
        Dz.U. z 1992 r. nr 67, poz. 336
      </a>
      <svg
        class="inline-block mb-1 w-4 h-4 fill-current text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1
          1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2
          2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" />
      </svg>
      zm.:
      <a
        href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19940610251"
        rel="nofollow"
        target="_blank">
        Dz.U. z 1994 r. nr 61, poz. 251
      </a>
      <svg
        class="inline-block mb-1 w-4 h-4 fill-current text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path
          d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1
          1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2
          2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" />
      </svg>
      ).
    </p>

    <div class="flex justify-between">
      <div>
        <h2 class="mt-4 text-xl font-thin">Skorowidz</h2>
        <p>
          <a
            class="text-xs font-bold text-gray-500 uppercase tracking-wider"
            href="https://drive.google.com/open?id=1HZL7xpnoqeRuZOSmU1LsJo_8Xaqwhaqr"
            rel="nofollow"
            target="_blank">
            skorowidz
          </a>
          <svg
            class="inline-block mb-1 w-3 h-3 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1
              0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2
              2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0
              2H5v12h12v-5z" />
          </svg>
        </p>

        <h2 class="mt-4 text-xl font-thin">Biuletyny</h2>
        <p>
          <a
            class="text-xs font-bold text-gray-500 uppercase tracking-wider"
            href="https://bs.sejm.gov.pl/F?func=find-b&request=000007248&find_code=SYS&local_base=BIS01"
            rel="nofollow"
            target="_blank">
            lista biuletynów
          </a>
          <svg
            class="inline-block mb-1 w-3 h-3 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1
              0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2
              2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0
              2H5v12h12v-5z" />
          </svg>
        </p>

        <ul class="mt-2 list-disc pl-5">
          <li>
            <a rel="prefetch" href="komisja/13">Biuletyn nr 13</a>
          </li>
          <li>
            <a rel="prefetch" href="komisja/14">Biuletyn nr 14</a>
          </li>
        </ul>
        <h3
          class="mt-4 uppercase tracking-wider text-sm font-bold text-gray-400">
          Prace w toku:
        </h3>
        <ul class="mt-2 list-disc pl-5">
          <li class="text-gray-500">
            <a rel="prefetch" href="komisja">Biuletyn nr 15</a>
          </li>
        </ul>
      </div>

      <svg
        in:fly={{ x: 20, duration: 1500, delay: 800 }}
        class="pt-20 w-2/3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 742.01392 447.68385">
        <defs id="defs2561" />
        <path
          style="fill:#e6e6e6"
          id="path2452"
          d="m 593.29375,0 a 3.18216,3.18216 0 0 0 -3.17882,3.178819 V 127.78401
          a 3.18216,3.18216 0 0 0 3.17882,3.17881 H 738.83509 A 3.18216,3.18216
          0 0 0 742.0139,127.784 V 3.178849 A 3.18216,3.18216 0 0 0
          738.83509,3e-5 Z" />
        <path
          style="fill:#ffffff"
          id="path2454"
          d="m 613.47862,75.000582 a 1.39761,1.39761 0 0 0 0,2.739 h 106.48039 a
          1.39761,1.39761 0 0 0 0,-2.739 z" />
        <path
          style="fill:#ffffff"
          id="path2456"
          d="m 612.16984,91.274062 a 1.39761,1.39761 0 0 0 0,2.739 h 106.48039 a
          1.39761,1.39761 0 0 0 0,-2.739 z" />
        <path
          style="fill:#ffffff"
          id="path2458"
          d="m 613.47862,107.54754 a 1.39761,1.39761 0 0 0 0,2.739 h 106.48039 a
          1.39761,1.39761 0 0 0 0,-2.739 z" />
        <path
          style="fill:#ffffff"
          id="path2460"
          d="m 613.47862,20.676268 a 1.39808,1.39808 0 0 0 0,2.7398 h 106.48039
          a 1.39808,1.39808 0 0 0 0,-2.7398 z" />
        <path
          style="fill:#ffffff"
          id="path2462"
          d="m 612.16984,36.949759 a 1.39807,1.39807 0 0 0 0,2.739791 h
          106.48039 a 1.39807,1.39807 0 0 0 0,-2.739791 z" />
        <path
          style="fill:#ffffff"
          id="path2464"
          d="m 613.47862,53.223252 a 1.39807,1.39807 0 0 0 0,2.73979 h 106.48039
          a 1.39807,1.39807 0 0 0 0,-2.73979 z" />
        <path
          style="fill:#a02828"
          id="path2466"
          d="m 528.24057,50.954172 a 3.18216,3.18216 0 0 0 -3.17882,3.17881 V
          178.73816 a 3.18216,3.18216 0 0 0 3.17882,3.17882 h 145.54132 a
          3.18216,3.18216 0 0 0 3.17881,-3.17882 V 54.132982 a 3.18216,3.18216 0
          0 0 -3.17881,-3.17881 z" />
        <path
          style="fill:#ffffff"
          id="path2468"
          d="m 548.42542,125.95472 a 1.39761,1.39761 0 0 0 0,2.73899 h 106.48039
          a 1.39761,1.39761 0 0 0 0,-2.73899 z" />
        <path
          style="fill:#ffffff"
          id="path2470"
          d="m 547.11665,142.22819 a 1.39761,1.39761 0 0 0 0,2.739 h 106.48038 a
          1.39761,1.39761 0 0 0 0,-2.739 z" />
        <path
          style="fill:#ffffff"
          id="path2472"
          d="m 548.42542,158.50167 a 1.39761,1.39761 0 0 0 0,2.739 h 106.48039 a
          1.39761,1.39761 0 0 0 0,-2.739 z" />
        <path
          style="fill:#ffffff"
          id="path2474"
          d="m 548.42542,71.630442 a 1.39807,1.39807 0 0 0 0,2.73979 h 106.48039
          a 1.39807,1.39807 0 0 0 0,-2.73979 z" />
        <path
          style="fill:#ffffff"
          id="path2476"
          d="m 547.11665,87.903922 a 1.39807,1.39807 0 0 0 0,2.73979 h 106.48038
          a 1.39807,1.39807 0 0 0 0,-2.73979 z" />
        <path
          style="fill:#ffffff"
          id="path2478"
          d="m 548.42542,104.17741 a 1.39807,1.39807 0 0 0 0,2.73978 h 106.48039
          a 1.39807,1.39807 0 0 0 0,-2.73978 z" />
        <path
          style="fill:#e6e6e6"
          id="path2508"
          d="m 78.35194,197.15543 a 1.99183,1.99183 0 0 0 -1.98974,1.98974 v
          152.01646 a 1.99159,1.99159 0 0 0 1.98974,1.98975 h 347.0114 a
          1.99159,1.99159 0 0 0 1.98975,-1.98975 V 199.14517 a 1.99184,1.99184 0
          0 0 -1.98975,-1.98974 z" />
        <path
          style="fill:#ffffff"
          id="path2510"
          d="M 378.40538,227.14616 H 125.30991 a 2.3877,2.3877 0 1 1 0,-4.77539
          h 253.09547 a 2.3877,2.3877 0 0 1 0,4.77539 z" />
        <path
          style="fill:#ffffff"
          id="path2512"
          d="M 378.40538,246.2477 H 125.30991 a 2.38769,2.38769 0 1 1 0,-4.77538
          h 253.09547 a 2.38769,2.38769 0 1 1 0,4.77538 z" />
        <path
          style="fill:#ffffff"
          id="path2514"
          d="M 378.40538,265.34925 H 125.30991 a 2.3877,2.3877 0 1 1 0,-4.77539
          h 253.09547 a 2.3877,2.3877 0 0 1 0,4.77539 z" />
        <path
          style="fill:#ffffff"
          id="path2516"
          d="M 378.40538,284.30622 H 125.30991 a 2.38769,2.38769 0 1 1
          0,-4.77538 h 253.09547 a 2.38769,2.38769 0 1 1 0,4.77538 z" />
        <path
          style="fill:#ffffff"
          id="path2518"
          d="M 378.40538,303.40781 H 125.30991 a 2.3877,2.3877 0 1 1 0,-4.77539
          h 253.09547 a 2.387695,2.387695 0 0 1 0,4.77539 z" />
        <path
          style="fill:#ffffff"
          id="path2520"
          d="m 314.16192,319.30231 a 0.68249,0.68249 0 0 0 -0.68178,0.68177 v
          18.074 a 0.68249,0.68249 0 0 0 0.68178,0.68177 h 63.22313 a
          0.68249,0.68249 0 0 0 0.68177,-0.68177 v -18.074 a 0.68249,0.68249 0 0
          0 -0.68177,-0.68177 z" />
        <path
          style="fill:#ffb9b9"
          id="path2536"
          d="m 71.3342,282.19704 1.12077,23.53628 c 0,0 4.4831,43.71022
          -4.4831,62.76339 v 10.087 c 0,0 -2.24155,25.77782 -13.4493,24.65705
          -11.20775,-1.12077 3.36233,-36.98557 3.36233,-36.98557 L
          55.64335,316.9411 53.4018,288.92172 Z" />
        <path
          style="fill:#a02828"
          id="path2540"
          d="M 1.98975,245.12653 A 1.99184,1.99184 0 0 0 0,247.11627 v 152.01647
          a 1.99159,1.99159 0 0 0 1.98975,1.98974 h 347.0114 a 1.99158,1.99158 0
          0 0 1.98974,-1.98974 V 247.11627 a 1.99183,1.99183 0 0 0
          -1.98974,-1.98974 z" />
        <path
          style="fill:#ffffff"
          id="path2542"
          d="M 302.04321,275.11726 H 48.94775 a 2.3877,2.3877 0 0 1 0,-4.77539 h
          253.09546 a 2.387695,2.387695 0 1 1 0,4.77539 z" />
        <path
          style="fill:#ffffff"
          id="path2544"
          d="M 302.04321,294.21881 H 48.94775 a 2.3877,2.3877 0 0 1 0,-4.77539 h
          253.09546 a 2.387695,2.387695 0 1 1 0,4.77539 z" />
        <path
          style="fill:#ffffff"
          id="path2546"
          d="M 302.04321,313.32035 H 48.94775 a 2.3877,2.3877 0 0 1 0,-4.77539 h
          253.09546 a 2.3877,2.3877 0 1 1 0,4.77539 z" />
        <path
          style="fill:#ffffff"
          id="path2548"
          d="M 302.04321,332.27733 H 48.94775 a 2.3877,2.3877 0 0 1 0,-4.77539 h
          253.09546 a 2.3877,2.3877 0 1 1 0,4.77539 z" />
        <path
          style="fill:#ffffff"
          id="path2550"
          d="M 302.04321,351.37887 H 48.94775 a 2.38769,2.38769 0 1 1 0,-4.77538
          h 253.09546 a 2.38769,2.38769 0 1 1 0,4.77538 z" />
        <path
          style="fill:#ffffff"
          id="path2552"
          d="m 237.79975,367.27341 a 0.68249,0.68249 0 0 0 -0.68177,0.68177 v
          18.074 a 0.68249,0.68249 0 0 0 0.68177,0.68177 h 63.22313 a
          0.68249,0.68249 0 0 0 0.68177,-0.68177 v -18.074 a 0.68249,0.68249 0 0
          0 -0.68177,-0.68177 z" />
        <path
          id="path2452-3"
          d="m 568.6058,315.7514 a 2.3078113,2.3078113 0 0 0 -2.30539,2.30539 v
          90.36797 a 2.3078113,2.3078113 0 0 0 2.30539,2.30538 h 105.55155 a
          2.3078113,2.3078113 0 0 0 2.30538,-2.30539 v -90.36794 a
          2.3078113,2.3078113 0 0 0 -2.30538,-2.30538 z"
          style="fill:#e6e6e6;stroke-width:0.72523421" />
        <path
          id="path2454-6"
          d="m 583.24456,370.14439 a 1.0135946,1.0135946 0 0 0 0,1.98642 h
          77.2232 a 1.0135946,1.0135946 0 0 0 0,-1.98642 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2456-7"
          d="m 582.29539,381.94647 a 1.0135946,1.0135946 0 0 0 0,1.98642 h
          77.22318 a 1.0135946,1.0135946 0 0 0 0,-1.98642 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2458-5"
          d="m 583.24456,393.74857 a 1.0135946,1.0135946 0 0 0 0,1.98641 h
          77.2232 a 1.0135946,1.0135946 0 0 0 0,-1.98641 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2460-3"
          d="m 583.24456,330.74654 a 1.0139354,1.0139354 0 0 0 0,1.987 h 77.2232
          a 1.0139354,1.0139354 0 0 0 0,-1.987 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2462-5"
          d="m 582.29539,342.54863 a 1.0139282,1.0139282 0 0 0 0,1.98699 h
          77.22318 a 1.0139282,1.0139282 0 0 0 0,-1.98699 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2464-6"
          d="m 583.24456,354.35073 a 1.0139282,1.0139282 0 0 0 0,1.98699 h
          77.2232 a 1.0139282,1.0139282 0 0 0 0,-1.98699 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2466-2"
          d="m 521.42701,352.70511 a 2.3078113,2.3078113 0 0 0 -2.30539,2.30538
          v 90.36797 a 2.3078113,2.3078113 0 0 0 2.30539,2.30539 h 105.55154 a
          2.3078113,2.3078113 0 0 0 2.30538,-2.30539 v -90.36797 a
          2.3078113,2.3078113 0 0 0 -2.30538,-2.30538 z"
          style="fill:#a02828;stroke-width:0.72523421" />
        <path
          id="path2468-9"
          d="m 536.06575,407.09809 a 1.0135946,1.0135946 0 0 0 0,1.98642 h
          77.22322 a 1.0135946,1.0135946 0 0 0 0,-1.98642 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2470-1"
          d="m 535.11659,418.90018 a 1.0135946,1.0135946 0 0 0 0,1.98642 h
          77.22321 a 1.0135946,1.0135946 0 0 0 0,-1.98642 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2472-2"
          d="m 536.06575,430.70227 a 1.0135946,1.0135946 0 0 0 0,1.98641 h
          77.22322 a 1.0135946,1.0135946 0 0 0 0,-1.98641 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2474-7"
          d="m 536.06575,367.70025 a 1.0139282,1.0139282 0 0 0 0,1.98699 h
          77.22322 a 1.0139282,1.0139282 0 0 0 0,-1.98699 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2476-0"
          d="m 535.11659,379.50233 a 1.0139282,1.0139282 0 0 0 0,1.98699 h
          77.22321 a 1.0139282,1.0139282 0 0 0 0,-1.98699 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2478-9"
          d="m 536.06575,391.30443 a 1.0139282,1.0139282 0 0 0 0,1.98698 h
          77.22322 a 1.0139282,1.0139282 0 0 0 0,-1.98698 z"
          style="fill:#ffffff;stroke-width:0.72523421" />
        <path
          id="path2508-3"
          d="m 150.04379,36.602352 a 1.1820589,1.1820589 0 0 0 -1.18082,1.180819
          v 90.214699 a 1.1819164,1.1819164 0 0 0 1.18082,1.18082 h 205.93519 a
          1.1819164,1.1819164 0 0 0 1.18083,-1.18082 V 37.783171 a
          1.1820648,1.1820648 0 0 0 -1.18083,-1.180819 z"
          style="fill:#e6e6e6;stroke-width:0.59345371" />
        <path
          id="path2510-6"
          d="M 328.11161,54.400465 H 177.91117 a 1.4169894,1.4169894 0 1 1
          0,-2.833973 h 150.20044 a 1.4169894,1.4169894 0 0 1 0,2.833973 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2512-0"
          d="M 328.11161,65.736344 H 177.91117 a 1.4169835,1.4169835 0 1 1
          0,-2.833967 h 150.20044 a 1.4169835,1.4169835 0 1 1 0,2.833967 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2514-6"
          d="M 328.11161,77.072229 H 177.91117 a 1.4169894,1.4169894 0 1 1
          0,-2.833972 h 150.20044 a 1.4169894,1.4169894 0 0 1 0,2.833972 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2516-2"
          d="M 328.11161,88.322313 H 177.91117 a 1.4169835,1.4169835 0 1 1
          0,-2.833967 h 150.20044 a 1.4169835,1.4169835 0 1 1 0,2.833967 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2518-6"
          d="M 328.11161,99.658222 H 177.91117 a 1.4169894,1.4169894 0 1 1
          0,-2.833973 h 150.20044 a 1.4169865,1.4169865 0 0 1 0,2.833973 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2520-1"
          d="m 289.98609,109.09086 a 0.40502621,0.40502621 0 0 0 -0.40461,0.4046
          v 10.72607 a 0.40502621,0.40502621 0 0 0 0.40461,0.4046 h 37.52 a
          0.40502621,0.40502621 0 0 0 0.4046,-0.4046 v -10.72607 a
          0.40502621,0.40502621 0 0 0 -0.4046,-0.4046 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2536-8"
          d="m 145.87908,87.070612 0.66513,13.967688 c 0,0 2.66051,25.93996
          -2.66051,37.24712 v 5.98617 c 0,0 -1.33026,15.29794 -7.98154,14.63282
          -6.65128,-0.66513 1.99539,-21.94922 1.99539,-21.94922 l
          -1.33026,-29.2656 -1.33025,-16.628191 z"
          style="fill:#ffb9b9;stroke-width:0.59345371" />
        <path
          id="path2540-7"
          d="m 104.72636,65.070982 a 1.1820648,1.1820648 0 0 0 -1.18082,1.180818
          v 90.21469 a 1.1819164,1.1819164 0 0 0 1.18082,1.18082 h 205.9352 a
          1.1819105,1.1819105 0 0 0 1.18082,-1.18082 V 66.2518 a
          1.1820589,1.1820589 0 0 0 -1.18082,-1.180818 z"
          style="fill:#a02828;stroke-width:0.59345371" />
        <path
          id="path2542-9"
          d="M 282.7942,82.869091 H 132.59376 a 1.4169894,1.4169894 0 0 1
          0,-2.833973 H 282.7942 a 1.4169865,1.4169865 0 1 1 0,2.833973 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2544-2"
          d="M 282.7942,94.204976 H 132.59376 a 1.4169894,1.4169894 0 0 1
          0,-2.833973 H 282.7942 a 1.4169865,1.4169865 0 1 1 0,2.833973 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2546-0"
          d="M 282.7942,105.54085 H 132.59376 a 1.4169894,1.4169894 0 0 1
          0,-2.83397 H 282.7942 a 1.4169894,1.4169894 0 1 1 0,2.83397 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2548-2"
          d="M 282.7942,116.79092 H 132.59376 a 1.4169894,1.4169894 0 0 1
          0,-2.83396 H 282.7942 a 1.4169894,1.4169894 0 1 1 0,2.83396 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2550-3"
          d="M 282.7942,128.12679 H 132.59376 a 1.416985,1.416985 0 1 1
          0,-2.83396 H 282.7942 a 1.416985,1.416985 0 1 1 0,2.83396 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
        <path
          id="path2552-7"
          d="m 244.66868,137.55945 a 0.40502621,0.40502621 0 0 0 -0.4046,0.4046
          v 10.72608 a 0.40502621,0.40502621 0 0 0 0.4046,0.4046 h 37.52 a
          0.40502621,0.40502621 0 0 0 0.4046,-0.4046 v -10.72608 a
          0.40502621,0.40502621 0 0 0 -0.4046,-0.4046 z"
          style="fill:#ffffff;stroke-width:0.59345371" />
      </svg>
    </div>
  </div>
</div>
