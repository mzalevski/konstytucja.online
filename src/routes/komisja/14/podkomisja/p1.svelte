<script>
  import { fly } from "svelte/transition";
  import Nav from "../../../../components/Nav.svelte";
  import Footer from "../../../../components/Footer.svelte";
</script>

<style>
  .protocol .speaker:nth-child(even) {
    justify-content: flex-end;
  }

  .protocol .speaker:nth-child(odd) img {
    margin: 0 1em 0 0;
    order: 0;
  }

  .protocol .speaker:nth-child(odd) p {
    order: 1;
  }

  .protocol .speaker:nth-child(even) img {
    margin: 0 0 0 1em;
    order: 1;
  }

  .protocol .speaker:nth-child(even) p {
    order: 0;
  }
</style>

<svelte:head>
  <title>Dzień 3 - Biuletyn nr 14</title>
</svelte:head>

<Nav segment={'info'} />

<!--<hr><p class="page-break">strona 3</p><hr>-->
<div class="flex justify-between pt-4 pb-8 border-b mb-8">
  <div>
    <h1 class="text-2xl font-thin" in:fly={{ x: -50, duration: 1000 }}>
      Obrady w dniu 22 lutego 1995 r. - podkomisja cz. I
    </h1>
    <!-- <h5>
      <a
        href="https://drive.google.com/file/d/1Ts4ETnD5wGc3hV2Vluy2yX7RoIcR7ZHn/view?usp=sharing"
        rel="nofollow"
        target="_blank">
        ORYGINAŁ BIULETYNU x
      </a>
    </h5> -->
  </div>
  <div class="small-article-nav">
    <a rel="prefetch" href="/komisja/14/3">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-left"
        class="svg-inline--fa fa-angle-left fa-w-8"
        role="img"
        viewBox="0 0 256 512">
        <path
          fill="currentColor"
          d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4
          24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4
          9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
      </svg>
    </a>
    <a rel="prefetch" href="/komisja/14/podkomisja/p2">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="angle-right"
        class="svg-inline--fa fa-angle-right fa-w-8"
        role="img"
        viewBox="0 0 256 512">
        <path
          fill="currentColor"
          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
          0l-22.6-22.6c-9.4-9.4-9.4-24.6
          0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4
          24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
      </svg>
    </a>
  </div>
</div>
<div in:fly={{ y: 100, duration: 1000 }}>
  <div class="text-xl leading-relaxed text-justify protocol">

    <div class="flex speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Witam wszystkim przybyłych i otwieram posiedzenie podkomisji. Proponuję
        na wstępie powrócić do kwestii dotyczącej formuły równouprawnienia
        sektorów. Może uda nam się wypracować jakieś sformułowanie. Próbowałem
        intuicyjnie opracować propozycję, która szłaby w kierunku deklarowania
        zasady o niedyskryminacji i nieuprzywilejowaniu sektorów. Czy nie byłoby
        odpowiednie sformułowanie, że uprawnienia i obowiązki podmiotów
        gospodarczych są równe bez względu na ich przynależność do różnych
        sektorów własnościowych w gospodarce? Taka propozycja oznaczałaby, że
        można różnicować warunki funkcjonowania podmiotów gospodarczych, ale ze
        względu na inne cechy, jak np. ze względu na położenie terytorialne,
        przynależność branżową i wielkość. Otwierałoby to drogę do specyficznych
        uregulowań w rolnictwie. Może takie rozwiązanie dostarczyłoby
        satysfakcji wnioskodawcom punktu dotyczącego gospodarki rodzinnej.
        Prosiłbym państwa o skorzystanie z chwili czasu i wymienienie poglądów
        na ten temat. Szczególnie zwracam się do ekspertów. Czy możemy
        deklarować równość sektorów w odniesieniu do tego aspektu sprawy?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Mógłbym skomentować tylko propozycję przedstawioną przez pana
        przewodniczącego, jeżeli potrafimy zdecydować, co to jest sektor
        własnościowy. Zakaz uprzywilejowania i zakaz dyskryminacji mieści się w
        ogólnej formule równości. Niewątpliwie w konstytucji znajdzie się zasada
        równości, z której będzie można wydedukować odpowiednie konsekwencje dla
        różnych podmiotów gospodarczych.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Chcemy dopuścić nierówność podmiotów gospodarczych w pewnych aspektach.
        Z pewnością chcielibyśmy, żeby polityka gospodarcza stwarzała
        szczególnie przychylne warunki dla drobnych przedsiębiorstw.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Zasada równości dopuszcza preferencje dla najsłabszych. W orzecznictwie
        Trybunału Konstytucyjnego jest to bardzo wyraźnie eksponowane.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Pan profesor zakłada, że najmniejsze podmioty gospodarcze są najsłabsze.
        Niekoniecznie tak jest. Możemy chcieć preferować podmioty z innych
        ważnych powodów, np. ze wzęględu na regionalne bezrobocie. Czy eksperci
        skłaniają się do poglądu, że nie ma potrzeby podejmowania tego problemu?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Zasada równości obywateli rzutuje na zasadę równości wszystkich zrzeszeń
        obywateli, w tym także zrzeszeń gospodarczych. Nie potrzeba wymieniać
        zasady równości np. stowarzyszeń, partii, fundacji itd. Wynika to z
        generalnej zasady. Niepokoiły mnie preferencje dla gospodarstw
        rodzinnych. Mielibyśmy do czynienia z nierównością podmiotów
        gospodarczych, gdybyśmy chcieli szczególnie preferować rodzinne
        gospodarstwa chłopskie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Mamy problem form własności. Kodeks cywilny zniósł zróżnicowanie form
        własności i wszystkie traktowane są na równych zasadach. Istnieje jednak
        własność spółdzielcza czy własność komunalna, własność publiczna różnych
        podmiotów gospodarczych i własność prywatna. Dlatego przedstawiam
        następującą propozycję przepisu: „Podmioty gospodarcze, niezależnie od
        form własności, działają na równych zasadach prawnych”. Poseł
        Włodzimierz Cimoszewicz (SLD): Czy zasada równości rzeczywiście w pełni
        odnosi się do zagadnienia, o którym mówimy? Ona przede wszystkim odnosi
        się do praw ludzkich i obywatelskich. Nie mamy chyba wątpliwości, że do
        relacji państwo-kościół, o której będziemy mówili za chwilę, chcemy
        wpisać zasadę równouprawnienia. Byłoby to niepotrzebne, gdybyśmy tak
        szeroko rozumieli zasadę równości wpisaną do konstytucji. Mnie osobiście
        =p kn AE NAA Podkomisja podstaw ustroju politycznego... 77 odpowiada
        propozycja wprowadzenia zasady równości odnośnie do działalności
        gospodarczej i uważam, że powinniśmy poszukiwać odpowiedniego przepisu.
        Może powinniśmy pójść w kierunku sugerowanym przez prof. P. Winczorka,
        żeby ominąć kontrowersje, które były wczoraj sygnalizowane odnośnie do
        pojęcia „podmiot gospodarczy”. Można wprowadzić pojęcie każdego
        prowadzącego działalność gospodarczą. Uważam, że taki powinien być
        kierunek naszych poszukiwań.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Proponuję zawiesić w tej chwili ten wątek. Możemy przejść już do omó-
        wienia głównej sprawy, dla której się zebraliśmy, ponieważ nie
        powinniśmy absorbować licznych gości sprawą będącą przedmiotem ich
        mniejszego zainteresowania. Należy rozstrzygnąć pewien problem
        proceduralny. Chodzi o to, jaki posiadamy rodzaj mandatu. Podkomisja
        nasza przedstawiła cztery warianty, pracowała również podkomisja
        redakcyjna, która sporządziła tekst jednolity projektu konstytucji. Po
        wstępnej dyskusji na posiedzeniu Komisji Konstytucyjnej dramatycznie
        przyrosła liczba wariantów. Jak rozumiem, intencją przewodniczącego,
        który prosił o zebranie się podkomisji jest poszukiwanie kompromisu, co
        oznacza zredukowanie liczby wariantów. Kłopot wynika z faktu, że nie są
        w tej chwili obecni autorzy niektórych propozycji zgłoszonych na
        posiedzeniu Komisji. Mam całą listę wniosków, ale nie są obecni ich
        sygnatariusze. Na początku chciałbym się poradzić, jaki powinniśmy
        przyjąć tryb postępowania z tymi wnioskami. Uważam, że nie możemy ich
        ubezwłasnowolnić, możemy tylko wypracować i rekomendować Komisji jakieś
        warianty. Czy macie państwo w tej sprawie opinie?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        O jakich mówimy wariantach? Czy o tych, które mamy w projekcie
        jednolitym, czy o innych?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Mamy jeszcze wnioski poseł L. Błądek, poseł M. Kumatowskiej oraz
        senatora Orzechowskiego, prof. M. Pietrzaka i dra W. Kuleszy, którzy
        zgłosili wniosek w imieniu prezydenta, a także propozycje senator A.
        Grześkowiak, senatora P. Andrzejewskiego, posła L. Moczulskiego, posła
        T. Mazowieckiego, a także senatora S. Pastuszki, posła J.
        Wojciechowskiego i posła A. Bentkowskiego. Wpłynęła też propozycja posła
        P. Ikonowicza. Nie są to wnioski mniejszości, nie mają one takiego
        statusu, bo Komisja jeszcze nie głosowała nad tym przepisem, więc
        wnioski mniejszości nie mogły być zgłoszone. Proponuję przyznać
        podkomisji mandat dość szeroki i zobaczymy, co wyniknie na posiedzeniu
        Komisji po przedłożeniu sprawozdania.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Przedstawiłem projekt art. 15, który został zaakceptowany przez EAZA p a
        RT w NN, EO a w w O ATZ DAT p AT zr wszystkich obecnych przedstawicieli
        kościołów. Dlatego projekt ten jest bezprecedensowy, aczkolwiek nie
        twierdzę, że jest dla podkomisji decydujący. Jest on na pewno bardzo
        ważny, skoro zaprasza się na posiedzenia przedstawicieli wszystkich
        kościołów. Wydaje mi się, że odpowiada on wypowiadanym wcześniej
        zasadom. Mówię o neutralności władz publicznych, równouprawnieniu
        kościołów i związków wyznaniowych i wreszcie o wzajemnej autonomii i
        niezależności. Rozumiem, że w tej dyskusji toczy się spór o słowa. Poseł
        R. Bugaj przekonywał mnie swego czasu, że boi się tzw. szarej strefy,
        strefy nie uregulowanej. W moim przekonaniu jest to probłem
        demokratycznego obyczaju politycznego, który będzie się kształtował w
        naszym kraju, a nie problem uregulowania przepisem prawnym wszelkich
        niejasności w tym zakresie. Nie jest możliwe wykluczenie jednym
        przepisem wszelkich naruszeń niezależności. Powinniśmy zwracać uwagę na
        wzajemne uczulenia, na historyczne i aktualne znaczenie poszczególnych
        pojęć. Zwracam się o to, żeby nie upierać się przy tej wojnie słów i
        proponuję przyjąć projekt art. 15 w brzmieniu: „Ust. 1. Władze publiczne
        w Rzeczypospolitej Polskiej zachowują neutralność w sprawach przekonań
        religijnych, światopoglądowych i filozoficznych. Kościoły i związki
        wyznaniowe są równouprawnione. Ust. 2. Stosunki między państwem a
        kościołami i związkami wyznaniowymi są kształtowane na zasadach
        poszanowania wzajemnej autonomii i niezależności każdego w swoim
        zakresie, jak również współdziałania dla dobra wspólnego osoby ludzkiej.
        Ust. 3. Stosunki między państwem a Kościołem katolickim określa umowa
        międzynarodowa zawarta ze Stolicą Apostolską. Ust. 4. Stosunek państwa
        do innych kościołów oraz związków wyznaniowych określa ustawa uchwalona
        na podstawie umowy zawartej przez rząd z ich właściwymi
        przedstawicielami”. Boję się, że jest to sprawa, która przy innych
        sformułowaniach może stać się zasadniczym elementem referendum
        konstytucyjnego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Spodziewałem się autopoprawki.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Jest ona w ust. 3: „Stosunki między państwem a Kościołem katolickim
        określa umowa międzynarodowa ze Stolicą Apostolską i ustawy”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Czy oznacza to przymus zawarcia konkordatu? Przedstawiciel Polskiego
        Autokefalicznego Kościoła Prawosławnego, ks. bp Jeremiasz: Mam uwagę
        redakcyjną do ust. 4. Dobrze byłoby w tym ustępie zastosować liczbę
        mnogą do sformułowania „określają ustawy”. W przeciwnym razie może to
        być zrozumiane jako jedna ustawa dla wszystkich kościołów.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Trzeba zapytać się ekspertów, czy zachodzi takie niebezpieczeństwo.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie przesądzając własnego stosunku do tej propozycji chciałbym prosić o
        pewne wyjaśnienia. Jest sformułowanie, że stosunek państwa do innych
        kościołów określają ustawy uchwalone na podstawie umowy. Może jest to
        pytanie do ekspertów. Co to oznacza, że zawarcie umowy jest koniecznym
        warunkiem wydania ustawy? Byłoby to coś dziwnego, tym bardziej że mówimy
        o kościołach i związkach wyznaniowych. Małe związki wyznaniowe mogłyby
        swoją postawą uniemożliwić uregulowanie sposobu ich funkcjonowania. One
        mają być sędziami we własnej sprawie, co jest dziwne. Przedstawiciel
        Kościoła Zborów Chrystusowych, ks. Henryk Sacewicz: Chciałbym serdecznie
        podziękować posłowi T. Mazowieckiemu za podjęcie się autoryzacji tekstu,
        który został wypracowany w gronie siedzącym po tej stronie stołu. Celowo
        o tym przypominam, by poprosić podkomisję, żeby zechciała preferować tę
        wersję. Powstała ona bowiem w gronie tych, którzy są jak najbardziej
        zainteresowani omawianym przepisem. Nasze stanowiska prezentowane
        pojedynczo były różne, a w wielu wypadkach dość drastycznie odbiegały od
        przedstawionej teraz wersji. My potrafiliśmy się ze sobą porozumieć,
        potrafiliśmy znaleźć nadrzędny i priorytetowy cel oraz stworzyć taki
        przepis, który — w naszym odbiorze — jest jak najmniej kontrowersyjny.
        Po dodaniu w ust. 3 pojęcia ustawy i po sugestii ks. bpa Jeremiasza, by
        w ust. 4 ustawy byty określone w liczbie mnogiej, bardzo gorąco proszę
        podkomisję o przyjęcie dla dobra sprawy tej wersji, która byłaby
        przedstawiona całej Komisji Konstytucyjnej.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LykoZachariasz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>
          Przedstawiciel Kościoła Adwentystów Dnia Siódmego, ks. prof.
          Zachariasz Łyko:
        </strong>
        Tekst, który mamy przed sobą jest uzgodniony w gronie przedstawicied
        kościołów. Było to wydarzenie dużej miary, o charakterze ekumenicznym.
        Tak się złożyło, że dokonano tego w czasie miesiąca ekumenicznego, co
        jest sympatycznym kontekstem tej sprawy. Chciałbym scharakteryzować
        przedstawioną propozycję. Jest ona optymalna, odpowiada nie tylko
        stronie kościelnej, bo co do tego nie ma żadnych wątpliwości, ale także
        orientacjom pozakościelnym, afideistycznym. Jest tutaj mowa o autonomii,
        co jest bardzo cennym stwierdzeniem, które odpowiada tendencjom
        wyrażanym przez różne koła. Na ten temat wypowiadał się Episkopat Polski
        i przedstawiciele innych kościołów. Kościoły mniejszościowe były bardzo
        zainteresowane zawarciem w tym artykule sformułowania o
        równouprawnieniu. Dlaczego? Dotychczas jest to zasada konstytucyjna,
        która występuje również w ustawie o gwarancjach wolności sumienia i wy
        Posiedzenia podkomisji stałych Komisji Konstytucyjnej ZN znania. Ma ona
        dla mniejszości wyznaniowych kapitalne znaczenie. Zasada ta potwierdza,
        że prawa, które otrzymuje największy kościół są identyczne z prawami
        mniejszości, mimo że kościół większości jest szczególnego rodzaju z
        uwagi na autorytet międzynarodowy i możność dokonywania regulacji przy
        pomocy umowy międzynarodowej, bo dysponuje podmiotowością prawa narodów.
        Zasada równouprawnienia modyfikuje to zagadnienie na polskim gruncie i
        jest wysoko ceniona przez mniejszości wyznaniowe, a także — jak się
        orientuję — przez Kościół katolicki. Znam na ten temat bardzo
        interesujące wypowiedzi Nuncjatury Apostolskiej w Warszawie. Te
        zagadnienia przedstawiałem jako ekspert w komisji sejmowej zajmującej
        się konkordatem. Ust. 2 mówi o autonomii, niezależności i współ-
        działaniu. Autonomia i niezależność to w istocie rzeczy jest rozdział
        kościoła i państwa, albo państwa i kościołów, tylko rozdział nie
        obciążony otoczką ideologiczną, polityczną, totalitarną, Jest to
        rozdział w ujęciu bardzo nowoczesnym, pozytywnym. Jeżeli to
        sformułowanie znalazłoby się w konstytucji, to byłaby ona wzorcową i
        modelową dla innych państw naszego regionu Świata. Z drugiej strony, z
        autonomią i niezależnośŚcią wią- żą się niebezpieczeństwa. Co to znaczy
        autonomia, co to znaczy niezależność? Ta kwestia na pozór może sprawiać
        problemy, tym bardziej że nie mamy do czynienia z dwoma terytoriami i z
        podwójną populacją. Jest jedno terytorium i ta sama populacja większości
        chrześcijańskiej, która jest reprezentowana przez największy kościół 1
        mniejsze kościoły. Gdybyśmy tylko wprowadzili zasadę autonomii i
        niezależności bez bliższego jej określenia, to w pewnych kołach mogłyby
        powstać zastrzeżenia. Zostają one autornatycznie rozwiane, jeśli dodamy
        stwierdzenie: „Każdego w swoim zakresie”, czyli każdego w swojej
        domenie. Domeną kościoła nie jest polityka, a domeną państwa nie są
        sprawy sakralne. Na tym samym terytorlum, w tej samej populacji mamy
        znakomicie rozdzielone sfery działania. Nie jest tak, że kościoły są
        autonomiczne i niezależne od prawa. Nie jest tak, że kościoły są
        niezależne i autonomiczne od obowiązków ogólnonarodowych. Nie znaczy to
        także, że państwo jest niezależne i autonomiczne w stosunku do kościoła,
        także i w sprawach sakralnych. Mamy znakomity rozdział, Ściśle określone
        sfery działania, w jakich domenach jest ta autonomia. Kościoły mają
        autonomię w sprawach sakralnych, a państwo — autonomię szeroko pojętego
        profanum, a więc w sprawach porządku, ładu itd. Bardzo ważne jest
        stwierdzenie: „każdego w swoim zakresie”, bo oznacza ono domenę. Zatem
        jest to rozdział ujęty nowocześnie, pozytywnie, ze Ściśle określoną
        sferą tego rozdziału. Nie ma sfery ciemnej, czamej, bo sfera wspólnych
        zagadnień jest uregulowana przez ustawy, jak również układ
        międzynarodowy. Na tym polega sens regulacji prawnych, bo wytycza się
        linię demarkacyjną zagadnień wspólnych. Współdziałanie oznacza sepa
        Podkomisja podstaw ustroju politycznego... 79 rację pozytywną, separację
        kooperatywną. Jest tu autonomia i niezależność domeny pryncypiów działań
        i wreszcie współdziałanie dla dobra wspólnego osoby ludzkiej. Ust. 4
        mówi, że stosunek państwa do innych kościołów oraz związków wyznaniowych
        określają ustawy uchwalone na podstawie umowy zawartej przez rząd z ich
        właściwymi przedstawicielami. Jest to instytucja nowa i nienowa. Nowa w
        tym znaczeniu, że większy jest jej zakres, a nienowa, bo prawo o
        szkolnictwie wyższym i ustawa o gwarancjach wolności sumienia i wyznania
        zna umowy między rządem a Episkopatem jak np. ustawa o stosunku państwa
        do Kościoła katolickiego. Znane są umowy między rządem a Episkopatem
        albo umowy między poszczególnymi resortami a kościołami. Chodzi np. o
        resort edukacji narodowej. Jest pewien zaczątek, ale ta umowa byłaby
        szersza, bo będzie dotyczyć całokształtu stosunków. Czy występuje
        precedens na arenie międzynarodowej? Takie praktyki występują w
        republice włoskiej. Po drugim konkordacie pierwsza regulacja prawna
        dotyczyła Kościoła Metodystycznego i Kościoła Waldensów. Była to umowa
        wewnętrzna zawarta między rządem a kościołem, ratyfikowana przez
        parlament. W gruncie rzeczy ta regulacja została dokonana w drodze
        ustawy, ale na podstawie umowy. Drugą była umowa między rządem a
        Kościołem Adwentystów Dnia Siódmego zawarta w 1986 r., a ratyfikowana
        przez parlament w 1989 r. Była to regulacja w drodze ustawy na podstawie
        umowy. Gdybyście państwo zwrócili uwagę na wyjaśnienia dotyczące tych
        zawiłości, to byłbym bardzo szczęśliwy. Mam serdeczną prośbę o poparcie
        i łaskawe uwzględnienie tego projektu także ze strony kościoła, który
        mam zaszczyt reprezentować.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Do dyskusji mam zapisanych pięciu mówców: posła W. Cimoszewicza, bpa
        Jeremiasza, senatora S$. Pastuszkę, siebie i ks. prof. J. Krukowskiego.
        Apelowałbym do ekspertów o wypowiedzi w sprawie skutków wynikających z
        użycia wyrazów: oddzielenie i autonomia. Czy jest tak, jak twierdził to
        przed chwilą mówca, że wyraz „autonomia jest równoznaczny z terminem
        „rozdzielenie”? Mam w tej sprawie wątpliwości. Gdybym ich nie miał, to
        bym się nie upierał przy określonym brzmieniu przepisu. Poseł
        Włodzimierz Cimoszewicz (SLD): Chciałbym zinterpretować stojące przed
        nami zadanie. W swoim czasie nasza podkomisja zakończyła prace I
        zaprezentowała Komisji Konstytucyjnej cztery warianty. Rozumiem, że
        oczekuje się od nas przedstawienia jednej propozycji albo też
        rozstrzygnięć w sprawie zgłoszonych nowych wniosków. Ciągle możliwe jest
        poszukiwanie nie tylko argumentów za jedną z propozycji i przeciw innym,
        ale także poszukiwanie rozwiązań o możliwie największym poparciu, które
        bazowałyby na propozycjach zawartych w poszczególnych wariantach. YE OZ
        PA GEE RE EA R. 0 A EE Z y Bardzo ważne jest porozumienie osiągnięte
        przez przedstawicieli kościołów i związków wyznaniowych w sprawie
        formuły zaprezentowanej przez posła T. Mazowieckiego. Jest to fakt
        bardzo znaczący, ale nie może być on traktowany w ten sposób, że wiążąca
        się z tym propozycja swym charakterem wykracza poza pozostałe warianty.
        Poseł T. Mazowiecki ma rację przypominając cały czas, że konstytucja
        musi być zatwierdzona w referendum. Każdy przepis i każde rozwiązanie
        zawarte w konstytucji będzie miało swoje znaczenie z punktu widzenia
        uzyskania poparcia w referendum. Rozumiem, że poseł T. Mazowiecki
        niczego więcej w tej tezie nie zawarł, zwłaszcza gdy wygłaszana jest ona
        w kontekście rozstrzygnięcia zasad dotyczących stosunków państwo—koś-
        ciół. Chciałbym poszukiwać takiego rozwiązania, które mogłoby być
        zaakceptowane przez możliwie najbardziej znaczącą większość. W tym
        przepisie chcemy jednocześnie uregulować kilka kwestii. Poza jedną
        sprawą jesteśmy zgodni albo bliscy osiągnięcia porozumienia. W tym
        przepisie chcemy określić zasadę neutralności władzy publicznej czy to
        przez użycie sformułowania, że państwo jest neutralne światopoglądowo,
        czy też przez użycie pojęcia „władze publiczne”, czy też — jak w
        propozycji profesorów M. Pietrzaka, A. Rzeplińskiego i dra W. Kuleszy —
        sformułowanie, że „organy, instytucje państwowe oraz samorządowe” są
        neutralne w kwestiach Światopoglądowych, filozoficznych i religijnych.
        Chcemy określić formułę stosunków między państwem a kościołem, formułę
        oddzielenia, autonomii i niezależności. Chcemy także wpisać zasadę
        równości kościołów i związków wyznaniowych oraz określić podstawę
        prawnej regulacji stosunków między państwem i kościołami oraz związkami
        wyznaniowymi i wpisać zasadę współdziałania państwa z kościołami. Mam
        nadzieję, że nie ma żadnych wątpliwości co do zasady współdziałania
        państwa z kościołami. Jeśli chodzi o zasadę równości kościołów i
        związków wyznaniowych, to również nie ma żadnych wątpliwości. Formuła
        neutralności władzy publicznej jest — jak sądzę — niezbyt trudna do
        wynegocjowania. Osobiście byłbym gotów zaakceptować propozycję zawartą
        we wniosku prof. M. Pietrzaka, prof. A. Rzepliń- skiego i dra W.
        Kuleszy. Jest to coś mniej od zasady, że państwo jest neutralne w
        kwestiach światopoglądowych i coś więcej od tego, że organy władzy
        publicznej są neutralne. Wprowadzenie pojęcia instytucji państwowych
        idzie nieco dalej niż formuła władzy publicznej. Może w tym miejscu
        będzie można się spotkać. Takie rozwiązanie jest bardzo bliskie
        propozycji przedstawicieli kościołów, zgłoszonej przez posła T.
        Mazowieckiego. W drugim zdaniu można ją uzupełnić o zasadę równości
        kościołów i związków wyznaniowych. Nieco trudniejsza jest kwestia
        podstaw prawnych stosunków między państwem a kościołami i związkami
        wyznaniowymi. Osobiście opowiadałbym się za użyciem sformułowania z
        wariantu I podkomisji mówiącego o tym, że sytuację prawną kościołów i
        związków wyznaniowych określają na zasadach równouprawnienia ustawy
        uchwalone po porozumieniu się z ich właściwymi przedstawicielami lub
        umowa międzynarodowa ratyfikowana na podstawie upoważnienia zawartego w
        ustawie. Dlaczego opowiadam się za tym rozwiązaniem? Mam wątpliwości,
        czy do konstytucji powinniśmy wpisywać szczególną umowę między władzą
        publiczną a kościołami, nawet jeśli jesteśmy w stanie wskazać przykłady
        osiągnięcia tego typu porozumienia w przeszłości. Trzeba zwrócić uwagę
        na fakt, że taka umowa miałaby być podstawą do wydania ustawy. Jest to
        sformułowanie ograniczające uprawnienia parlamentu do stanowienia prawa.
        Nie sądzę, żeby istniały dostateczne argumenty przemawiające za takim
        uregulowaniem. Jednocześnie rozumiejąc poważny i uzasadniony 1nteres
        kościołów i związków wyznaniowych, który polega na tym, by wywierać
        wpływ na kształtowanie tych regulacji, wydaje mi się, iż właściwa jest
        formuła porozumienia. Z jednej strony nie ogranicza ona uprawnień
        parlamentu w sposób bezwzględny, a z drugiej -— daje gwarancje kościołom
        i związkom wyznaniowym, że owo porozumienie musi być osiągnięte przed
        uchwaleniem prawa. Za właściwą uważam również formułę „lub umowa
        międzynarodowa . W konstytucji powinna być stworzona możliwość zawarcia
        umowy międzynarodowej, ale jestem przekonany, że nie powinien pojawić
        się przepis nakazujący jej zawarcie. Jeżeli przyjęto by powyższe
        argumenty, to mielibyśmy rozstrzygnięty kolejny problem. Na koniec
        zostawiłem to, co jest najtrudniejsze, tzn. formułę oddzielenia i
        autonomii. Sugerowałbym poszukiwanie rozwiązania wyc hodzącego naprzeciw
        różnym problemom. Żeby nie upierać się przy czymkolwiek, co dotychczas
        proponowano, sięgnątbym do propozycji przedstawicieli Prezydenta RP,
        którzy w ust. 2 napisali: „Kościoły i związki wyznaniowe korzystają z
        autonomii przy wykonywaniu swych funkcji religijnych i organizacyjnych”.
        Chciałbym, żeby ta formuła była uzupełniona o trzy wyrazy i brzmiała:
        „Kościoły i związki wyznaniowe są Oddzielone od państwa i korzystają z
        autonomii przy wykonywaniu swych funkcji religijnych i organizacyjnych”.
        Formuła zaproponowana przez profesorów jest bardzo bliska propozycji
        posła T. Mazowieckiego. Mnie bardziej odpowiada wyraźne stwierdzenie, że
        autonomia odnosi się do funkcji religijnych i organizacyjnych niż
        określenie: „w swoim zakresie”. Jest to pojęcie nie do końca określone i
        zawsze mogą pojawić się problemy interpretacyjne, co to oznacza i kto
        jest upoważniony do interpretowania treści pojęcia: „w swoim zakresie”.
        Przyjmując tak niedookreślone pojęcie od razu wprowadzamy do konstytucji
        przepis mogący sprzyjać nieporozumieniom, jeśli pojawiłyby się problemy
        w stosunkach między państwem a jakimkolwiek z kościołów. Posiedzenia
        podkomisji stałych Komisji Konstytucyjnej ZN Zdaję sobie sprawę, że jest
        to najdelikatniejsza kwestia, ale to co proponuję gwarantuje z jednej
        strony kościołom i związkom wyznaniowym autonomię przy wykonywaniu
        funkcji religijnych i organizacyjnych, a z drugiej — przez wprowadzenie
        elementu, że kościoły i związki wyznaniowe są oddzielone od państwa
        wychodzi się naprzeciw tym, którzy są przekonani, że istotą państwa
        demokracji parlamentarnej jest oddzielenie instytucji państwowych od
        kościołów i związków wyznaniowych. Jest to jedno cześnie gwarancja
        równości praw i wolności obywatelskich. Przedstawiciel Polskiego
        Autokefalicznego Kościoła Prawosławnego, ks. bp Jeremiasz: Chciałbym
        podziękować posłowi T. Mazowieckiemu za zgłoszoną propozycję. Jesteśmy w
        tej komfortowej sytuacji, że nie musimy podejmować decyzji. Mam
        nadzieję, że zapadnie ona w tym duchu, może przy wykorzystaniu
        propozycji przedstawionej przez prof. M. Pietrzaka, prof. A.
        Rzeplińskiego i dra W. Kuleszę. Mój komentarz do projektu posła T.
        Mazowieckiego będzie dotyczył dwóch spraw. Uważam, że ta propozycja nie
        wynika z teoretycznych przesłanek, tylko z doświadczeń historycznych.
        Właśnie na tle doświadczeń historycznych jest to rewolucja. Jako
        prawosławny pamiętam, kiedy we Lwowie arcybiskup łaciński określał, kto
        ma być prawosławnym biskupem. W XVIII wieku polscy królowie często
        cofali uznanie dla prawosławnych duchownych ze względu na wywierany
        nacisk. /, własnego doświadczenia znam następującą sytuację. Musiałem
        deklarować, że jestem obywatelem państwa, ale nie mogę zgodzić się na
        ateizm. W latach siedemdziesiątych musiałem na tern temat napisać długi
        elaborat. Trzeba było się tłumaczyć, że film pokazany młodzieży był o
        pielgrzymce na Grabarkę i nie walczył z ateizmem. Jako wierzący musiałem
        powiedzieć, że zostanę wierzącym, mimo że oficjalna doktryna państwowa
        była inna. Istniał taki problem, który chwiał określonymi odcinkami
        życia kościelnego. Formuła o władzach publicznych zachowujących
        neutralność jest dla nas pełna treści. Pragniemy, żeby była podkreślona
        autonomia i niezależność. To pragnienie nie jest teoretyczne, tylko
        wynika z codzienności życia kościelnego mającego różne formy. Mógłbym
        przytaczać wiele innych przykładów z minionego okresu i z czasów
        historycznych. Druga uwaga dotyczy umowy. Sądzę, że można znaleźć
        kompromisowe rozwiązanie i stwierdzić jak w wariancie I, Że ,,..ustawy
        uchwalone po porozumieniu... Podkreślam, że nam zależy na porozumieniu
        czy konsultacji. Nie tak dawno, bo w maju 1989 r., Sejm chciał przyjąć
        ustawę o stosunku państwa do Kościoła katolickiego, na mocy której mój
        kościół straciłby 60 proc. cerkwi, ponieważ taka była możliwość
        interpretacji tej ustawy. Ówczesny kierownik Urzędu do Spraw Wyznań
        przyznał na posiedzeniu komisji obradującej pod przewodnictwem K.
        Barcikowskiego, że ustawa da możliwość składa Podkomisja podstaw ustroju
        politycznego... 81 nia odpowiednich wniosków sądowych. Zależy nam na
        tym, by mocno podkreślić, iż ustawa o stosunku państwa do danego
        kościoła nie może być narzucona. W konstytucji należy wyraźnie określić,
        że chodzi o porozumienie, a w jakiej ma to nastąpić formie, to już jest
        problem dla ekspertów.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/PastuszkaStefan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Stefan Pastuszka (PSL):</strong>
        Chciałbym podzielić się swoimi refleksjami. Rozumiem, że propozycja
        przepisu posła T. Mazowieckiego w pełni odpowiada wszystkim wyznaniom.
        Mam pewne wątpliwości dotyczące ust. 1. Prosiłbym o wypowiedź w tej
        materii ekspertów i przedstawicieli kościołów, bo być może błędnie
        interpretuję przepis, na który patrzę jako historyk przez tradycję
        okresu międzywojennego i wczesnych lat powojennych. Ust. 1 brzmi:
        „Władze publiczne w Rzeczypospolitej Polskiej zachowują neutralność w
        sprawach przekonań religijnych, Światopo glądowych i filozoficznych.
        Kościoły i związki wyznaniowe są równouprawnione”. Moje wątpliwości
        dotyczą pierwszego zdania. Jak wiemy, samorząd jest władzą publiczną,
        która od i stycznia 1996 r. obligatoryjnie przejmie szkoły podstawowe.
        Jednocześnie ustawa przewiduje możliwość tworzenia przez samorządy
        własnych szkół. Powieszenie krzyża jest — przynajmniej ja tak to
        interpretuję — wyrazem moich uczuć religijnych, przekonań filozoficznych
        itp. Stawiam pytanie: jeśli samorząd gminy zdecyduje, że należy powiesić
        w szkole krzyż, to czy będzie to zgodne z tym przepisem konstytucyjnym?
        Nie należy tego manifestować, gdyż w danej gminie nie wszyscy są ludźmi
        wierzącymi i praktykującymi. To jest jedna wątpliwość. Z autopsji wiem,
        że w jednej szkole prowadzi się naukę dwóch lub trzech wyznań
        religijnych. Ten przepis pięknie brzmi, idea jest wspaniała, ale obawiam
        się, żeby ten przepis nie był konfliktogenny. Chciałbym bronić wspólnej
        propozycji zgłoszonej przez posła J. Wojciechowskiego, posła A.
        Bentkowskiego i mnie. Wydaje mi się, że nasza propozycja zawiera idee,
        które są we wniosku posła T. Mazowieckiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Zwracam się do posła W. Cimoszewicza. Jeśli proponuje pan nową formułę,
        to proszę ją przedstawić na piśmie. Chciałbym bronić artykułu w
        wariancie I projektu przedstawionego przez podkomisję i zgłosić kilka
        uwag. Z całą pewnością jest tak, jak mówi to poseł T. Mazowiecki, że
        niesłychanie ważną sprawą przy przyjmowaniu określonej formuły powinien
        być kontekst świadomości społecznej i aspiracji społeczeństwa w tym
        zakresie. Ta formuła jest przedmiotem sporu. Mamy dzisiaj obecnych gości
        reprezentujących różne kościoły. Poprzednio w pracach podkomisji
        uczestniczyli przedstawiciele stowarzyszeń I ruchów, które za cel
        stawiają sobie zabieganie o ortodoksyjnie laicką formę państwa 1
        ortodoksyjne, twarde rozdzielenie kościoła od państwa. Dzisiaj ich O z A
        WWO z różnych powodów organizacyjnych nie ma. Uważam, że musimy
        pamiętać, 1ż taki punkt widzenia jest także reprezentowany. Z
        najświeższych sondaży wynika, że 70 proc. obywateli wyraża pogląd, iż
        rola kościołów w życiu publicznym jest raczej za duża niż za mała. Jest
        to także pewien wskaźnik Świadomości społecznej i ocen, który powinien
        być wzięty pod uwagę w kontekście referendum nad konstytucją, bo z
        pewnością się ono odbędzie. Tyle tytułem tła. Sądzę, że formuła przyjęta
        w art. 15, w wersji podkomisji jest dość daleko idącym kompromisem,
        ignorującym punkt widzenia Środowisk i ugrupowań zabiegających o bardzo
        rygorystyczny rozdział kościoła od państwa. Sama zasada akceptująca
        konkordat na pewno odrzuca rygorystyczną koncepcję rozdziału kościoła od
        państwa i stawia wielki problem równouprawnienia kościołów. W wariancie
        posła T. Mazowieckiego został on przezwyciężony w sposób, o którym
        powiem za chwilę. Sam zgłaszałem akceptację dla zasady konkordatu.
        Oznacza to, że jest pewna grupa obywateli Rzeczypospolitej, której
        interesy rozumiane tutaj jako interesy osób wierzących i członków
        jednego z kościołów są zabezpieczone nieco lepiej niż interesy innych.
        Pojawia się zawsze przy tym delikatny problem równości. Został on
        przezwyciężony w wersji przedstawionej przez posła T. Mazowieckiego
        poprzez zasadę zastąpienia jak gdyby Stolicy Apostolskiej przez
        reprezentację kościołów mniejszościowych w Polsce — nie jest to z
        pewnością określenie obraźliwe — w bezpośredniej relacji do władzy.
        Chodzi o relację negocjacyjną przed uregulowaniem ustawowym. Mogłoby się
        to zmienić, gdyby ta formuła znalazła się w wariancie podkornisii, gdzie
        się o tym mówi, ale przy zapisaniu zasady: ,„po porozumieniu”. W
        wariancie posła T. Mazowieckiego porozumienie jest warunkiem — jak
        rozumiem — wydania aktu ustawowego, co jest zupełnie odmienną sytuacją o
        daleko idących implikacjach. W wariancie I podkomisji zawarliśmy szeroką
        tormułę współdziałania kościołów i związków wyznaniowych z państwem w
        realizacji praw i potrzeb obywateli. Jest to formuła szeroka, ignorująca
        stanowisko środowisk domagających się rygorystycznego rozdziału. W tej
        sprawie poszliśmy bardzo daleko. Kluczowe pytanie dotyczy wyboru między
        rozdziałem a autonomią. Mnie pojęcie „rozdział” i „autonomia” kojarzy
        się z innym stanem prawnym. Pojęcie „autonomia kojarzy mi się z tym
        wszystkim, co w potocznym języku oznacza niepełną niezależność obu
        instytucji. Przeciętny obywatel pojmuje to przez pryzmat opozycji
        autonomii do suwerenności. Autonomia daje pewne prawa do niezależnego
        działania, ale nie wszystkie. W tym sensie ta formuła podtrzymuje w
        stosunkach między państwem i kościołem coś, co określam jako „szarą
        strefę , która będzie przedmiotem — jak słusznie mówił poseł T.
        Mazowiecki — zwyczaju, ale także pewnego konfliktu, być może nawet
        bardzo ostrego. Jeżeli deklarujemy oddzielenie i zaraz dalej
        współudział, to sądzę, Że deklarujemy formułę gwarantującą najmniejszą
        potencjalną dawkę konfliktów, jakie mogłyby się tutaj pojawić. Bardzo mi
        zależy na wypowiedziach ekspertów na ten temat. Nie pamiętam, czy w
        poprawce do wariantu posła T. Mazowieckiego w ust. 3 ma być określenie
        „lub ustawy” czy „i ustawy”. To oznacza także swego rodzaju przymus
        podpisania konkordatu. Jeżeli napisano „lub”, to dopuszcza się możliwość
        jego podpisania. Jeżeli jest „i”, to zakłada się, że takie uregulowanie
        musi istnieć, bo konstytucja obliguje do zawarcia umowy. To są niuanse
        prawne, więc bardzo bym prosił o wyjaśnienia. Zachęcam ekspertów do
        wyjaśnienia sensu i tradycji tych wyrazów w języku konstytucyjnym.
        Przedstawiciel Sekretariatu Konferencji Episkopatu Polski, ks. prof.
        Józef Krukowski: Niewątpliwie stosunki kościół-państwo zakładają z góry
        istnienie dwóch typów społeczności. Jedną jest społeczność
        polityczno-państwowa, a drugą — kościół. Używam nazwy zbiorczej, bo
        praktycznie istnieje pluralizm religijny, a więc nie jeden kościół. W
        czasie debaty nad konstytucją i konkordatem zaistniało nieporozumienie
        wynikające z niezrozumienia wielu spraw. Między Kościołem katolickim a
        kościołami mniejszościowymi był reżyserowany konflikt. Konflikt ten był
        sztuczny, ponieważ Kościół katolicki jako niewątpliwie kościół
        większościowy nie chce żadnych przywilejów. Dobrze się stało, że
        przedstawiciele kościołów biorących udział w obradach wypracowali
        pojemną formułę, która uwzględnia pozytywne elementy zawarte we
        wszystkich zgłoszonych wartantach, od pierwszego do ostatniego. Chodziło
        o doprecyzowanie pojęć, bo z powodu niedoprecyzowania w stosowaniu
        danego aktu, w tym wypadku konstytucji, powstają wątpliwości, które
        nigdy nie zostaną całkowicie wyeliminowane. Możemy temu przynajmniej
        zapobiec. Dlatego to, co wypracowaliśmy odpowiada wymogom państwa
        demokratycznego, które uwzględnia opinie i stanowiska różnych grup
        społecznych. W tym wypadku chodziło o stanowisko grup społecznych,
        jakimi są wykazujące żywotność kościoły. Dlatego też uwzględnienie
        naszej opinii przez parlamentarzystów byłoby znakiem poszanowania zasad
        demokracji w wymiarze społecznym. W celu doprecyzowania przepisów
        chciałbym odnieść się do wątpliwości zgłoszonej przez senatora S.
        Pastuszkę. Uważam, że nasza propozycja zapobiega tego rodzaju
        nieporozumieniom, ponieważ jest powiedziane, że władze publiczne szanują
        przekonania. Czyje? Przekonania obywateli. O tym, czy będzie nauka
        religii w szkole, czy znak religijny będzie zamieszczony w obiekcie
        publicznym, w tym wypadku w szkole, decydują korzystający z tego
        obiektu, czyli rodzice w imieniu swoich dzieci. Jeżeli przyjmiemy zasadę
        poszanowania wolności religijnej jako prawa przynależnego człowiekowi,
        jeżeli przyjmiemy pry Posiedzenia podkomisji stałych Komisji
        Konstytucyjnej ZN mat poszanowania wolności, najpierw w wymiarze
        indywidualnym, przysługującej każdemu człowiekowi, w tym wypadku
        rodzicom, to takie niebezpieczeństwo zostanie wyeliminowane. W dyskusji
        pojawiła się kwestia metody regulacji stosunków między państwem i
        kościołem. Czy ma to być konwencja międzynarodowa, czy ustawa, czy inne
        porozumienie? Żeby to wszystko zrozumieć, to trzeba wziąć pod uwagę
        fakt, iż w pierwszej kolejności chodzi nam o to, by sytuacja prawna,
        czyli zakres gwarancji wolnościowych przysługujących człowiekowi jako
        obywatelowi i wspólnotom religijnym, była możliwie identyczna. Chodzi o
        to, żeby nie było różnic w sytuacji prawnej między Kościołem katolickim
        a innymi wspólnotami religijnymi, kościołami i związkami wyznaniowymi.
        Tego nie można utożsamiać z metodą regulacji wzajemnych stosunków.
        Metoda ta wynika ze zdolności prawnej każdego podmiotu. Istnieją różnice
        co do tej zdolności, ponieważ Kościół katolicki w ciągu wieków uzyskał
        osobowość publicznoprawną i może regulować stosunki z państwem w drodze
        umowy międzynarodowej. Inne kościoły i związki wyznaniowe takiej
        możliwości nie posiadają. Nie jest to wina Kościoła katolickiego ant
        państwa, jest to zasada, którą cywilizowane państwo polskie powinno
        respektować. Uważam, że jest to nakaz historyczny, a nie tylko doraźna
        wola polityczna. Wydaje mi się, że tu jest źródło nieporozumienia.
        Dlatego uważam, że gwarancje, które zostają wpisane do umowy powinny być
        rozszerzone na inne kościoły i związki wyznaniowe, żeby nie było różnic
        i nierówności. To chcieliśmy uwzględnić w propozycji, którą przedstawił
        poseł T. Mazowiecki. Chodziło nam o to, żeby zapobiec tego rodzaju
        nieporozumieniom w przyszłości. Uważam, że w samym przepisie wyraz
        „Jlub” jest zbędny. Lepszy jest spójnik „i”, ponieważ umowa
        międzynarodowa ze Stolicą Apostolską, jak każda inna umowa i ustawa, to
        nie są Źródła rozłączne, przeciwstawne, tylko się uzupełniające.
        Konwencja staje się źródłem prawa w drodze transformacji w prawo
        ustawowe krajowe, Używanie „Jub” zamiast „1” byłoby niezręczne i
        logicznie niepoprawne. Lepszy jest spójnik „1 również z tego powodu, że
        w drodze konwencji nie uregulujemy wszystkiego. Ustawy regulują szerszy
        zakres spraw niż konwencja. Można byłoby rozwijać jeszcze wiele wątków.
        Mnie się wydaje, że zostały one wpisane do wariantu zgłoszonego przez
        posła T. Mazowieckiego. Elementy te uwzględniają zgłoszone uwagi i są
        dość pojemne. Uwzględniają one możliwości regulacji stosunków z innymi
        kościołami w drodze umowy. Jaka będzie to umowa? Nie będzie ona
        międzynarodowa, tylko krajowa. Sama z siebie nie jest źródłem prawa,
        tylko z chwilą ratyfikacji, ponieważ taka umowa nie jest wpisana do
        Źródeł prawa. Jest ona oznaką poszanowania autonomii. Powiedziano, że
        staje się źródłem prawa dopiero na podstawie ratyfikacji przez Sejm.
        Zarówno w wypadku umowy ze Stolicą Apostolską, jak i z przedstawicielami
        poszczególnych kośPodkomisja podstaw ustroju politycznego... 83 ciołów
        nie jest naruszona zasada suwerenności parlamentu czy państwa. W każdym
        konkretnym przypadku parlament dokonując ratyfikacji, korzysta w pełni
        ze swojej suwerenności. Przepis konstytucyjny tego nie narusza, tylko
        ustala, że właściwy sposób regulacji stosunków między państwem i
        Kościołem katolickim następuje w drodze umowy międzynarodowej. Niczego
        nie narzuca, nie stwarza przymusu, tylko uznaje istnienie takiego Środka
        wzajemnej regulacji stosunków. W Polsce jest on może więcej niż możliwy,
        bo właściwy. Wyraz „nadto”, jak niektórzy sugerują, nie jest odpowiedni,
        bo wskazywałby, że umowa jest źródłem prawa niższego rzędu od ustawy.
        Takich nieporozumień nie należałoby wprowadzać do konstytucji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Otrzymaliście państwo propozycję posła W. Cimoszewicza, proszę więc o
        zapoznanie się z nią. Proszę posła T. Mazowieckiego, żeby dopracował
        ostatecznie swój wariant, bo w pewnym momencie będziemy musieli przejść
        do podjęcia decyzji. Inaczej nie wywiążemy się z nałożonego zadania. Nie
        wiem, czy
        <strong>poseł TI. Mazowiecki chciałby</strong>
        zmienić formułę: „na podstawie umowy zawartej przez rząd z ich
        właściwymi przedstawicielami” na sformułowanie: „po porozumieniu”.
        Byłaby to bardzo istotna różnica. Chciałbym, by wariant ten był
        dokładnie sprecyzowany, żebyśmy wiedzieli, do czego się odnosimy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BladekLidia.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Lidia Błądek (PSL):</strong>
        Chciałabym podzielić się swoimi wątpliwościami odnośnie do niektórych
        propozycji. Podzielam przede wszystkim wątpliwości posła W. Cimoszewicza
        odnośnie do tego, czy do konstytucji powinniśmy wpisać konkordat jako
        odrębną umowę, zwłaszcza że przyjęliśmy już art. 9, który stanowi:
        „Rzeczpospolita Polska przestrzega wiążącego Ją prawa międzynarodowego”.
        W związKU z tym prosiłabym ekspertów o opinię na ten temat. O opinię
        prosiłabym również przedstawiciela rządu, prof. S. Gebethnera oraz prof.
        H. Groszyka, długoletniego sędziego Trybunału Konstytucyjnego. Czy art.
        9 nie konsumuje tej problematyki? Wątpliwości rodzą się również z tego
        powodu, że propozycja wpisania konkordatu do konstytucji stanowi, że ta
        umowa ma regulować stosunki między państwem a Kościołem katolickim.
        Jeżeli przyjmiemy takie określenie, to czy konkordat w wersji
        znajdującej się obecnie w Sejmie będzie można ratyfikować, ponieważ, jak
        wiemy, ten konkordat, w odróżnieniu od umowy obowiązującej w okresie
        międzywojennym, reguluje nie tylko stosunki państwo-kościół, ale również
        problematykę praw i wolności, jak chociażby problem zawierania
        małżeństw, na co nie pozwolono sobie nawet w okresie międzywojennym. Nie
        stwierdziłabym, jak to ksiądz profesor powiedział, że sytuacja wokół
        konkordatu jest konfliktowa. Ona nie jest konfliktowa, tylko musimy
        wyjaśnić wszystkie wątpliwości. Konstytucję stanowimy nie EW AA "A a A
        WTA tylko dla części katolickiej społeczeństwa, ale dla całego
        społeczeństwa, dla przyszłych pokoleń. W sposób bardzo poważny i
        odpowiedzialny powinniśmy podejść do tych problemów. Nie będę omawiała
        wszystkich kwestii wiążących się z konkordatem. W jednej z audycji
        radiowych zadano mi pytanie: czy po ratyfikacji konkordatu, jeżeli ktoś
        zawrze małżeństwo w trybie z niego wynikającym, będzie mógł w
        przyszłości ubiegać się o rozwód? Konkordat mówi, że małżeństwo zawiera
        się w kościele. Ksiądz w terminie kilkudniowym zawiadamia urząd stanu
        cywilnego o zawarciu małżeństwa. Z kolei urząd wpisuje to małżeństwo do
        rejestru. Uważam, że małżeństwo nie zawarte w trybie cywilnym nie może
        być rozwiązane. Czym innym jest zawiadomienie o zawarciu małżeństwa, a
        czym innym jest zawarcie małżeństwa w urzędzie stanu cywilnego. Nasuwać
        się będą inne poważne problemy. Nie unikajmy trudnych tematów, lecz
        zwróćmy się do naszych ekspertów o pomoc. Nad konstytucją się jeszcze
        pracuje. Proszę odpowiedzieć, czy przyjęty art. 9 nie konsumuje tego
        problemu. Jeżeli wpiszemy autonomię, nie określając jej zakresu w
        konstytucji, to pojawią się konflikty o ten zakres w praktyce. Musimy w
        wyważony sposób podejść do tego zagadnienia. Jeżeli zdecydujemy się na
        wpisanie autonomii, to czy nie należałoby zapisać, że ma ona być tylko
        przy wykonywaniu przez kościoły swych funkcji religijnych. Różne mogą
        być dylematy. Problematyka dotycząca stosunków państwo-kościoł ma być
        uregulowana w rozdziale o zasadach naczelnych. Zaproponowaliśmy więc
        uregulowanie tego problemu w sposób bardzo zwięzły. W imieniu
        wnioskodawców podtrzymuję następującą propożzy - cję: „Ust. 1.
        Rzeczpospolita Polska jest państwem neutralnym światopoglądowo”. Wydaje
        mi się, że tutaj nie trzeba pisać, jakie organy władzy i administracji
        mają być neutralne, bo państwo jest neutralne. „Ust. 2. Stosunki między
        państwem a kościołami oparte są na zasadzie niezależności i wzajemnego
        poszanowania”. Z tego wynika równoprawne traktowanie wszystkich
        kościołów, jak również niezależność kościołów przy wykonywaniu swych
        funkcji, wzajemne poszanowanie w stosunkach państwo-kościół. Ta
        propozycja wychodzi naprzeciw właściwemu uregulowaniu omawianej
        problematyki, tym bardziej że uzgodniliśmy już, iż w tym rozdziale będą
        tylko zasady ustrojowe.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BorowikWojciech.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Wojciech Borowik (UP):</strong>
        Na wstępie chciałbym powiedzieć, że najbardziej odpowiadają mi przepisy
        w wariancie I art. 15 projektu konstytucji i propozycja posła W.
        Cimoszewicza. Uważam, że są to najzgrabniejsze propozycje. Naszym
        ekspertom chciałbym zadać kilka pytań dotyczących propozycji
        przygotowanych przez posła T. Mazowieckiego. Mając na uwadze różne
        doświadczenia, które mieliśmy O R z ŻY = YE 0 z W z W z 0 z prawem w
        ostatnim czasie warto uzyskać jednoznaczne odpowiedzi co do pewnych
        faktów, które będą wynikały z przepisów art. 15 ust. 3. Chodzi mi o
        przymus zawarcia konkordatu. Jeżeli przepis zostanie sformułowany w ten
        sposób, jak to proponuje poseł T. Mazowiecki, to czy w momencie
        nieratyfikowania konkordatu Sejm złamie konstytucję, czy nie? Czy wynika
        z tego przepisu przymus ratyfikacji, czy nie? Jeżeli nie wynika, to jaki
        stan prawny będzie obowiązywał Kościół katolicki? Jaka może być
        interpretacja tego konkretnego przepisu? Czy w związku z takim
        sformułowaniem Stolica Apostolska może wypowiedzieć konkordat? Jakie to
        rodzić będzie skutki prawne dla Kościoła katolickiego w Polsce? Czy w
        związku z tym konstytucyjnym przepisem państwo polskie będzie
        ubezwłasnowolnione w sprawie wypowiedzenia konkordatu? Chciałbym uzyskać
        na te pytania konkretne odpo wiedzi, bo sądzę, że będą ore rzutowały na
        naszą ocenę przedstawionej propozycji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Zadano całą masę pytań. Mam nadzieję, że moi koledzy przyłączą się do
        próby udzielenia na nie odpowiedzi. Jest to problem bardziej
        polityczno-filozoficzno-wyznaniowy niż prawny. Zabieranie głosu w tej
        materii przychodzi mi z pewną trudnością, ponieważ uniemożliwia
        zachowanie neutralności Światopoglądowej. Próbując odpowiedzieć na
        pytania chciałbym odnieść się do problemu autonomii i niezależności w
        ujęciu art. 15 zredagowanego przez posła T. Mazowieckiego, z udziałem
        przedstawicieli kościołów. W moim przekonaniu trzeba ten przepis czytać
        łącznie. Nie jest to tylko autonomia albo tylko niezależność. Te dwa
        pojęcia połączone są spójnikiem „1”, stanowią pewną całość. Jest to
        bliskie temu, co w innych konstytucjach określane było systemem
        rozdziału. Niezależność czy rozdział sprowadza się do tego, że każda z
        tych struktur jest autonomiczna i niezależna. Na gruncie języka prawnego
        autonomia znaczy tyle, co prawo do stanowienia norm na własny użytek.
        Jeżeli przyjmie się, że związki wyznaniowe rządzą się własnym prawem
        dotyczącym stosunków wewnątrz struktury organizacyjnej, to wszystko jest
        w porządku i tego nikt nie zaneguje. Nikt nie odbiera Kościołowi
        katolickiemu prawa do rządzenia się przepisami ujętymi w Kodeks prawa
        kanonicznego. Nikt nie neguje, by związki wyznaniowe rządziły się
        statutami lub innymi aktami wewnątrzorganizacyjnego porządku
        normatywnego. Z.gadzam się z postem W. Cimoszewiczem w sprawie
        interpretacji tego, co oznacza wyraz „zakres” w sformułowaniu: „każdego
        w swoim zakresie”. Czy to chodzi tylko o problemy religijne, czy jakieś
        inne? Niewątpliwie chodzi o kwestie religijne, bo są to podmioty mające
        za zadanie pełnienie misji religijnej, ale i organizacyjne do tego
        stopnia, do jakiego są one tworami organizacyjnymi. Można to ująć
        szerzej w znaczeniu funkcji religijnych i organizacyj Posiedzenia
        podkomisji stałych Komisji Konstytucyjnej ZN nych. To zagadnienie ujęte
        jest jednym słowem i tak je rozumiem, a nie w ten sposób, że przez
        regulację autonomiczną wchodzi się na pole zajęte przez działanie
        ustawodawcze państwa. Problem może się pojawić w sprawie interpretacji
        kwestii, czy pojęcie autonomii i niezależności odnosi się oddzielnie do
        państwa jako tworu organizacyjnego i oddzielnie do kościołów. Moim
        zdaniem — nie, bo gdyby pójść w tym kierunku to można by sądzić, że
        państwo polskie nie jest ani suwerenne, ani niepodległe, tylko
        autonomiczne i niezależne. Byłby to absurdalny wniosek w Świetle innych
        przepisów tej samej konstytucji. Tego czytać w ten sposób nie należy. Ja
        tak widzę te problemy i dlatego się zastrzegłem, że mogą oddziaływać
        względy osobiste. Moim zdaniem, chodzi tu o autonomię i niezależność w
        sto sunkach między państwem i kościołem, a nie o autonomiczność 1
        niezależność państwa. Zakres autonomii i niezależności jest tylko na tym
        obszarze.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Pojęcie autonomii i niezależności odniósł pan profesor w stosunku do
        kościoła. Mówił pan wyraźnie o prawie stanowienia własnych norm. Inaczej
        traktuje pan to pojęcie w stosunku do państwa.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Państwo jest tworem suwerennym. Mowa jest o tym w pierwszych artykułach
        konstytucji, które stwierdzają, że państwo jest wspólnym dobrem
        obywateli, jest jednolite i niepodzielne, władza zwierzchnia należy do
        narodu. Łącznie te przepisy należy tak czytać, że dają one państwu
        polskiemu nie autonomię, czy tylko niezależność, lecz niepodległość i i
        suwerenność. Zwłaszcza art. 4 tak rozumiem. Mogą być oczywiście inne
        interpretacje tego pojęcia. Stosunek przyjętego już art. 9 do
        konkordatu. Moim zdaniem są to dwie różne materie, bo art. 9 dotyczy
        aktów prawa międzynarodowego już przez Polskę przyjętych. Czy wśród tych
        aktów znajdzie się konkordat, to już jest inna sprawa. Najpierw musi być
        konkordat, a dopiero potem zadziała art. 9, a nie odwrotnie. Jeżeli
        przyjmie się, że konkordat ma być formą regulacji stosunków między
        państwem i Kościołem katolickim, który obok ustawy będzie te stosunki
        określał, to nic nie stoi na przeszkodzie, żeby ten przepis zawrzeć w
        konstytucji. Wprowadzenie znaku równości między art. 9 a dopuszczeniem
        lub nakazem regulacji konkordatowej, jest nieporozumieniem. Oczywiście w
        kierunku nakazu nie poszedłbym. Może moi koledzy odpowiedzą na dalsze
        pytania. Teraz od siebie chciałbym zgłosić pewne uwagi do art. 15 w
        ujęciu przedstawionym przez posła T. Mazowieckiego. Zdanie drugie w ust.
        1 powinno być oddzielone i wyodrębnione w nowy ustęp, bo jest to inna
        materia. Tak jak w projekcie posła W. Cimoszewicza ten fragment artykułu
        powinien zaczynać się od regulacji normatywnej stosunków między pań-
        stwem a kościołem. Podkomisja podstaw ustroju politycznego... 3% W ust.
        2 użyte jest określenie „osoba ludzka”. Rozumiem, że źródłem tego
        pojęcia jest filozofia personalizmu, ale to się kłóci z tym, co jest
        powiedziane w pierwszym ustępie. Skoro władze publiczne mają być
        neutralne światopoglądowo, to do tekstu konstytucji nie powinno się
        wprowadzać pojęć, które są charakterystyczne dla określonej filozofii.
        Gdyby ustęp ten kończył się zwrotem „,...dla dobra wspólnego”, to nie
        miałbym uwag. W obecnym brzmieniu idzie on o jeden krok za daleko. Nie
        mam nic przeciwko temu pojęciu, ale ono pojawia się jedynie w tym
        rniejscu. Może pojawić się pytanie, jak ma się osoba ludzka w stosunku
        do pojęć „obywatel ”, „każdy człowiek”, które są używane w dalszych
        fragmentach tekstu. Moją radą jest skreślenie tego pojęcia w tym
        fragmencie artykułu i z tego powodu nie będzie żadnego nieszczęścia.
        Kolejny problem dotyczy użycia określeń „na podstawie umowy”, czy „po
        porozumieniu . Jest tutaj dość delikatna różnica. Co to znaczy „po
        porozumieniu”? Najpierw musi być porozumienie, a czym ono jest? Jest
        jakiegoś rodzaju umową, traktatem lub kontraktem. Tak czy inaczej
        kolejność wydarzeń jest następująca: porozumienie — ustawa, umowa —
        ustawa. Czy ustawa mogłaby być nie wydana? Tak, bo to wynika z
        suwerenności państwa. Umowa zawierana jest z rządem. Jeśli zawarł on
        umowę niezgodną z wolą suwerena reprezentowanego w parlamencie, to
        parlament nie jest związany obowiązkiem wydania takiej ustawy. Nie
        mógłby wydać ustawy o innej treści niż ta, która wynika z zawartego
        porozumienia czy umowy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Może być taka sytuacja, że jeden rząd zawiera porozumienie. Następny
        parlament jest związany takim porozumieniem, albo musi od początku
        zawierać umowę.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BladekLidia.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Lidia Błądek (PSL):</strong>
        Prosiłam o bardzo szczegółową odpowiedź. Stosunki między państwem a
        kościołem w Polsce reguluje ustawa z 1989 r., która określa wszelkie
        prawa Kościoła rzymskokatolickiego w Polsce. Dla mnie konkordat jest
        tylko umową międzynarodową między dwoma państwami, więc dlaczego mówi
        pan profesor, że art. 9 nie konsumuje tego zagadnienia? Czy dobrze
        zrozumiałam?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Zawierane w ostatnich dziesięcioleciach umowy międzynarodowe nie są
        tylko umowami międzypaństwowymi. Wchodzą one w stosunki wewnętrzne
        państw i jest to masowe zjawisko. Ta umowa należy do tego gatunku, bo w
        pewnym zakresie wchodzi w stosunki wewnętrzne. Dawniej może było
        inaczej, być może wspólnota międzynarodowa nie bardzo interesowała się
        położeniem obywateli, osób fizycznych żyjących w poszczególnych
        państwach. Dzisiaj tym się interesuje i reguluje te sprawy w formie umów
        międzynarodowych. Konkordat nie musi dotyczyć tylko stosunków między
        państwem i Stolicą Apostolską jako podmiotem prawa międzynarodowego, ale
        może — jeśli zechce — wejść w stosunki wewnętrzne głębiej niż z samej
        nazwy „umowa międzynarodowa” czy „umowa międzypaństwowa” by to wynikało.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Chciałbym nawiązać do wczorajszej dyskusji, kiedy długo debatowaliśmy
        nad rozmaitymi zrzeszeniami pod wspólnym hasłem społeczeństwa
        obywatelskiego. Zamierzamy budować społeczeństwo obywatelskie. Z tego
        wynikają dopuszczalne w konstytucji ograniczenia dla ustawodawcy, w
        szczególności ograniczenie wydawania ustaw po porozumieniu z innymi
        podmiotami reprezentującymi społeczeństwo obywatelskie. Chciałbym się
        odnieść do zakresu pojęć autonomia i rozdział. Do tego, co powiedział
        prof. P, Winczorek, chciałbym dodać, że mówiąc o autonomii mamy na myśli
        strukturę. Podmiot jest autonomiczny w obrębie szerszej struktury. Nie
        ma samej autonomii, ona istnieje w obrębie szerszej struktury. Możemy
        więc mówić o autonomii terytorialnej, narodowościowej i wyznaniowej.
        Sformułowania: „oddzielenie” i „„rozdział” idą znacznie dalej niż
        określenie „autonomia”. Jeżeli reprezentantom kościołów odpowiada
        ograniczenie się do formuły „autonomił”, to jest to bardzo właściwe, bo
        w ten sposób demonstruje się postawę w żaden sposób niekontrowersyjną
        wobec państwa. Jest to tym samym uznanie istnienia szerszej struktury,
        „dachu” i niekontestowanie tego „dachu ”. Przechodzę do omówienia
        zakresu autonomii, czyli zakresu funkcji kościołów i związków
        wyznaniowych. Padło określenie, że jest to w zakresie funkcji
        religijnych i organizacyjnych. Widziałbym szerzej to zagadnienie. Trudno
        rzeczywiście oderwać się od neutralności Światopoglądowej. Kościoły
        chrześcijańskie, jak to widzę, nie są ograniczone do funkcji religijnych
        i organizacyjnych. Weźmy pod uwagę funkcję charytatywną i inne funkcje
        społeczne. Na terenie mojej parafii w Krakowie ksiądz proboszcz powołał
        klub sportowy. Jaka to jest funkcja? Na pewno nie religijna ani
        organizacyjna. Czy zakazać kościołowi tej działalności? Chyba nie.
        Dlatego nie precyzowałbym, o jakie tutaj funkcje chodzi, tym bardziej że
        występuje tu określenie „w wykonywaniu swych funkcji”. Jest tu pewne
        niebezpieczeństwo, ale mamy przecież cały pozostały system prawny, w tym
        prawo kame i administracyjne, które pozwala na ingerencję państwa w
        sytuacji, gdy działalność kościołów wykracza poza pewne granice.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BladekLidia.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Lidia Błądek (PSL):</strong>
        Co pan profesor rozumie pod pojęciem „swych funkcji”? Jak będzie
        należało to interpretować?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Jest to bardzo trudne pytanie. Zostawiłbym w przepisie autonomię. Niech
        kościół rozwija swoją działalność, a państwo będzie się temu
        przyglądało. Dopóki działalność kościoła nie narusza ustaw państwowych,
        d póty kościół może rozwijać te funkcje, skoro uznaje je za swoje. Czy
        istnieje przymus zawarcia konkordatu w przypadku sformułowania zawartego
        w ust. 3 propozycji posła T. Mazowieckiego? Prof. P. Winczorek wyjaś-
        nił, że takiego przymusu nie ma. Chciałbym zwrócić uwagę, że w tekstach
        ustawodawczych użycie gramatycznego trybu jest obojętne. Obojętne jest,
        czy użyjemy trybu przypuszczającego, rozkazującego, czy oznajmującego.
        Jako norma prawna oznacza to, w zależności od wykładni, albo możliwość,
        albo przymus. Na ogół odnosi się ta sprawa do przyszłości. Rzadko
        używamy gramatycznego czasu przyszłego, ale przepisy prawa ze swej
        istoty odnoszą się do przyszłości, a nie do teraźniejszości. Tak więc
        strona gramatyczna jest trochę mniej ważna.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Czy pan profesor odniósł swoją uwagę do ust. 3 uzupełnionego już o
        wyrazy „I ustawy?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BladekLidia.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Lidia Błądek (PSL):</strong>
        W sprawie formalnej. Nie ma wszystkich ekspertów, więc prosiłabym, żeby
        pozostali wypowiedzieli się na ten temat na piśmie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Musimy naszych ekspertów chronić przed zadaniami zbyt daleko idącymi.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Ekspertyzy na ten właśnie temat są złożone w Komisji Konstytucyjnej.
        Jest także synteza ekspertyz w zakresie stosunków państwo-kościół.
        Ekspertyz bardzo poważnych jest pięć. Wiem, że nie wszyscy byli
        zadowoleni z doboru ekspertów, ale w tych ekspertyzach reprezentowane są
        wszystkie opcje prawnicze i światopoglądowe. Proszę nam teraz nie kazać
        pisać czegoś w trybie doraźnym, trzeba te dokumenty przeczytać.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Zostało postawione pytanie: czy Polska mogłaby wypowiedzieć konkordat?
        Jak każda umowa międzynarodowa konkordat podlega ogólnym zasadom prawa
        międzynarodowego, skodyfikowanym zasadom prawa traktatowego.
        Wypowiedzenie konkordatu jest do pomyślenia i możliwe.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Wątpliwości biorą się z tego, że wiele umów międzynarodowych zawiera
        warunki ich wypowiedzenia, a konkordat — nie. Rozumiem, że obowiązujące
        ogólne zasady to umożliwiają. Jeżeli nie zakończymy obrad decyzją, to
        pójdziemy na posiedzenie Komisji Konstytucyjnej i oświadczymy, że nie
        doszliśmy do żadnych konkluzji. Tak możemy zrobić, jeżeli będzie taka
        wola podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Może zacznę od odpowiedzi na pytanie poseł L. Błądek, którą cenię i
        szanuję. Jest to bardzo ważne pytanie, ale uważam, że nie jest ono
        specjalnie trafne przy tym problemie, ponieważ w zasądach naczelnych
        konstytucji, jak i w całej konstytucji, pewne kwestie mogą się
        powtarzać, Przepis, nad którym pracujemy, dotyczy stosunku państwa do
        ważnego elementu społeczeństwa cywilnego, społeczeństwa obywatelskiego,
        jakim są kościoły i związki wyznaniowe. Niezależnie od art. 9 umowy mogą
        występować w konstytucji w innym kontekście. Chcę się powołać na
        autorytet prof. L. Falandysza, ponieważ nauczył on nas, że mamy tak
        napisać konstytucję, by była w niej precyzja. Prof. Falandysz ma prawo
        używać partactwa konstytucyjnego do swoich celów. Całe opasłe tomy
        konstytucjonalizmu amerykańskiego wynikają z tego, że po każdej stronie
        konfliktu między organami władzy był jakiś prof. Falandysz. Oczywiste i
        zrozumiałe jest to, że konstytucją będziemy się posługiwać w sporach i w
        konfliktach między instytucjami państwowymi. Dlatego precyzja jest ważna
        i będę do niej zmierzał. Problem, który mamy do rozwiązania w tym
        artykule, dotyczy w gruncie rzeczy dwóch odmiennych, zmierzających
        często w przeciwnych kierunkach zjawisk: udzielenia praw i gwarancji
        kościołom jako elementowi życia zbiorowego i społeczeństwa cywilnego —
        praw tych kościoły były pozbawione —— oraz konstytucyjnej ochrony
        jednostek i ich praw, ochrony mniejszości liczących czasem jedną osobę i
        określenia granic dla woli większości oraz woli ustawodawcy. W
        społeczeństwie o przeważającej jednej religii jest to bardzo trudne. Z
        tej perspektywy artykuł znajdujący się w przepisach ogólnych musi
        współgrać z artykułami, które będą w rozdziale o prawach i wolnościach
        obywatelskich. Zgadzam się z tym, co powiedzieli eksperci odnośnie do
        pojęcia rozdziału i autonomii. Rozdział jest pojęciem szerszym i daje
        więcej uprawnień związkom wyznaniowym niż autonomia. Rozdział czy
        separacja kościoła i państwa, to pojęcia nieprecyzyjne, ponieważ we
        współczesnych demokracjach w doktrynie konstytucyjnej istnieją trzy
        modele koncepcji separacji kościoła od państwa, które są zupełnie
        odmienne. Chodzi o koncepcję separacji pełnej, czy neutralnej typu
        amerykańskiego, separacji wrogiej wobec kościoła typu francuskiego i
        separacji przyjaznej typu niemieckiego. Obowiązuje tam rozdział koś-
        cioła od państwa, ale państwo zbiera podatki na rzecz kościołów, a więc
        jest to separacja przyjazna. Obawiam się, że różnię się z intencją
        poprawki zaproponowanej przez posła W. Cimoszewicza. Jeżeli użyjerny
        pojęcia „rozdział” bez wyjaśnienia czy uzupełnienia, z jakim rozdziałem
        mamy do czynienia, to mogłoby to być niebezpieczne. Mamy bowiem trzy
        modele rozdziału kościoła od państwa i powinniśmy się zastanowić, jaki
        model chcemy wybrać. Rozumiem, że chodziłoby o model pierwszy, w Polsce
        raczej niemożliwy do wprowadzenia lub o model trzeci. Czy w odczuciu
        indywidualnym, a także w interpretacji prawnej nie będzie on traktowany
        jako wrogi? Tego nie jestem pewien. Ust. 5 wyjaśnia, że stosunki te
        kształtują się na zasadzie współdziałania. Skoro jest ust. 5, to może
        nie jest konieczny ust. 1 mówiący o rozdziale. Odpowiada mi formuła
        autonomii, ale nie autonomii obustronnej. Mam duży problem z ust. 2
        propozycji posła T. Mazowieckiego. Nie widzę żadnego powodu, żeby
        konstytucja w przepisie mówiącym o stosunku kościoła do państwa
        gwarantowała państwu autonomię albo niezależność. Państwo ma autonomię i
        niezależność przedkonstytucyjną, przed tym przepisem i rozdziałem. Mnie
        się wydaje, że intencją i celem takiego przepisu, potwierdzonego przez
        naszą historię, jest zapewnienie autonomii kościołom. Kościoły mają być
        autonomiczne, bo posiadają taką sferę swojego działania, do której
        państwo nie może się mieszać — jest ona wewnętrzna. Dlatego ust. 2
        przepisu zaproponowanego przez przedstawicieli prezydenta wydaje mi się
        trafniejszy, bo autonomię daje kościołom. Przepis konstytucyjny nie
        powinien dawać państwu autonomii w tym zakresie. Problem zakresu
        autonomii. Sformułowanie „„każdego w swoim zakresie” jest dawaniem
        bardzo silnych argumentów, mówię to symbolicznie, profesorowi L.
        Falandyszowi czy komuś, kto chciałby wykorzystywać nieprecyzyjność 1
        niejednoznaczność. Chodzi przede wszystkim o to, żeby kościoły nie miały
        autonomii, gdyby wkraczały w inne niż religijne funkcje publiczne albo
        państwowe. To jest oczywistę i ważne. Uważam, że funkcje religijne i
        organizacyjne są ważne i wyczerpują wszystkie działania. W moim
        przekonaniu, jeżeli będzie ostatni ustęp o współdziałaniu dla dobra
        wspólnego, to tam zmieści się działalność charytatywna i inna kościołów,
        o której mówił prof. P. Samecki. W tych funkcjach kościoły
        współdziałają. Zakładając klub sportowy kościół współdziała z władzami
        publicznymi, samorządowymi dla dobra wspólnego. W tym mieści się szersza
        działalność niż ta autonomiczna w zakresie funkcji religijnych i
        organizacyjnych. Uważam, że w konstytucji mogłoby być pojęcie rozdziału,
        ale nie jest ono konieczne. Ważniejsza jest autonomia ustanowiona jako
        autonomia jednostronna kościoła, ograniczona do funkcji religijnych i
        organizacyjnych. Do tego dochodzi współdziałanie dla dobra wspólnego.
        Ostatnia sprawa dotyczy ustawy, umowy i równości kościołów. Potrzeba czy
        duża chęć zawarcia konkordatu stawia rzeczywiście Kościół katolicki w
        sytuacji uprzywilejowanej. Konkordat w gruncie rzeczy dotyczy stosunków
        między Polską a Stolicą Apostolską. Ustawa, która regulowałaby stosunki
        wyznaniowe w Polsce, dotyczyłaby stosunków w państwie i stosunku do
        kościoła. W przypadku konkordatu jest specyfika ze względu na to, że
        Stolica Apostolska ma „interesy” w Polsce i one się pokrywają z
        interesami kościoła, ponieważ działa tutaj Kościół katolicki. Po
        zawarciu konkordatu powinna zostać wydana ustawa mówiąca o stosunku do
        Kościoła rzymskokatolickiego. Ratyfikacja konkordatu jest jego
        przekształceniem w prawo wewnętrzne. Można zaproponować następujące
        brzmienie ust. 2 wariantu I zawartego w tekście podkomisji: „Sytuację
        prawną kościołów i związków wyznaniowych określają ustawy uchwalone na
        podstawie umów zawartych z ich właściwymi przedstawicielami lub umowy
        międzynarodowej ". Mamy wtedy większą dozę równości innych Kościołów z
        Kościołem katolickim. Jest też element oparcia się na ustawie bazującej
        na umowie. Niezależnie od tego, co mówił prof. P. Winczorek, że
        porozumienie jest formą umowy, w interesie kościołów i związków
        wyznaniowych powinno leżeć zawarcie tego typu umowy. Dopiero na
        podstawie umowy będą one miały w stosunku do państwa status kościołów.
        Bez takiej umowy będą posiadały status stowarzyszeń, ze wszystkimi
        różnicami, na które wskazano przynajmniej w dwóch spośród pięciu
        złożonych do Komisji Konstytucyjnej ekspertyz w tej sprawie. Wydaje mi
        się, że nie jest konieczne dodanie neutralności w sprawach
        filozoficznych. Neutralność państwa w sprawach filozoficznych gwarantuje
        przepis z rozdziału o prawach obywatelskich mówiący o wolności sumienia
        i wyznania. Nie jest konieczne uwzględnienie kwestii filozoficznych w
        tym artykule. W ust. 2 projektu posła T. Mazowieckiego też postawiłbym
        kropkę po zwrocie ,,...dla dobra wspólnego”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Podstawowym wątkiem dyskusji jest sprawa wzajemnego stosunku między
        pojęciem „rozdziału państwa i kościoła” a proponowaną w kilku
        projektach, w tym w projekcie posła T. Mazowieckiego formułą
        „poszanowania wzajemnej autonomii i niezależności”. Nie widzę tak
        ostrego przeciwstawienia tych formuł, one nie są tak antagonistyczne,
        jak zdawałoby się to wynikać z dyskusji. Termin „rozdział leksykalnie
        nic nie znaczy, chyba że odniesiemy to określenie do konkretnego kraju,
        jak mówił o tym prof. W. Osiatyński. Decyduje o tym ukształtowana
        praktyka. Jeżeli mówimy o rozdziale kościoła od państwa w ujęciu
        francuskim czy amerykańskim, to coś to oznacza. Sam termin nie zakłada z
        góry niczego zdecydowanego. Autonomia i niezależność jako zasady
        kształtowania wzajemnych stosunków między państwem i kościołem zawierają
        istotne elementy rozdziału. Powiedziałbym nawet, że z tych dwóch wyrazów
        wynika więcej niż z określenia „rozdział”. Wszystko zależy od
        interpretacji tych pojęć przez ustawodawstwo i praktykę. Samo założenie
        nie decyduje o tym, co te formuły będą oznaczały w praktyce. Niepokoi
        mnie też pewien zlepek pojęciowy „autonomia i niezależność”. Nie
        wiadomo, czy odnosi się to do obydwu podmiotów, tzn. państwa i kościoła,
        czy też chodzi o autonomię kościoła, a niezależność lub — inaczej —
        suwerenność państwa. Kto co ma mieć w poszanowaniu względem drugiego z
        tych podmiotów? Czy państwo ma szanować autonomiękościołów, a kościoły
        niezależność i suwerenność państwa, czy też oba podmioty jedno i drugie?
        Jest to zlepek pojęciowy, którego nie potrafię do końca rozszyfrować.
        Wiem, co oznacza ta formuła w dokumentach kościoła, ale na gruncie
        Świeckiego dokumentu, jakim jest konstytucja, nie potrafię tego
        wyjaśnić. Nie ma podstaw do stawiania zasadniczej bariery między formułą
        oddzielenia oraz autonomii i rozdziału. Proponowane są różne formuły
        prawnego regulowania stosunków między państwem | 1 kościołem oraz
        związkami wyznaniowymi. Trzeba zdawać sobie sprawę z ich znaczenia.
        Umowa międzynarodowa może być zawarta tylko z innym podmiotem prawa
        międzynarodowego, w tym wypadku wchodzi w grę tylko Kościół katolicki, a
        dokładniej — Stolica Apostolska mająca podmiotowość
        prawno-międzynarodową. Dlatego trzeba wyraźnie powiedzieć, że ta forma
        regulacji stosunków państwo—kościół odnosi Się tylko do jednego
        kościoła. Nie można tego formułować w sposób zakamuflowany, jakby ta
        zasada mogła odnosić się również do innych kościołów. Konkordat czy
        umowa międzynarodowa ze Stolicą Apostolską a możliwość regulacji
        stosunków w drodze ustawowej. Z propozycji posła T. Mazowieckiego wynika
        obowiązek zawarcia konkordatu, bo użyty jest tryb orzekający —
        „określa”. Jeżeli ustawa używa trybu orzekającego, to oznacza istnienie
        obowiązku, w tym obowiązku zgodności ustaw w zakresie materii
        regulowanych umową konkordatową. Pewne ustawy będą mogły być wydane jak
        gdyby w wykonaniu konkordatu, co nie oznacza, że całe ustawodawstwo w
        dziedzinie stosunków państwo-kościół będzie pochionięte przez treść
        konkordatu. Możliwe są nie zdeterminowane treścią konkordatu ustawy
        regulujące stosunek państwa do kościoła w zakresie wychodzącym poza
        przedruiot umowy międzynarodowej. Widzę taki obowiązek, bo ustęp ten nie
        jest sformułowany fakultatywnie. Nakaz zawarcia umowy międzynarodowej
        wyrażony jest obligatoryjnie. Nie oznacza to, że w każdym wypadku będzie
        ona wiązać. Wiązać będzie dopiero po ratyfikacji, która musi być w
        zgodzie z konstytucją. Nie można zawrzeć umowy międzynarodowej czy jej
        ratyfikować, jeśli naruszałaby ona zasady konstytucji, np. zasadę
        równouprawnienia sośŚciołów i wyznań. Drugą możliwą formą regulacji
        stosunków państwa z kościołem jest umowa społeczna i ustawa. W porządku
        prawnym państwa proponuje się zasadniczą zmianę, wprowadza się nowy
        rodzaj Źródła prawa — umowę społeczną. Zgadzam się z profesorami W.
        Osiatyńskim i P. Sarneckim, że wychodzi to naprzeciw formuły państwa
        obywatelskiego, ale w systemie źródeł prawa jest to nowy element, który
        trzeba będzie bliżej określić. Formuła, aby ustawy regulujące stosunki
        państwa ze związkami wyznaniowymi były wydawane po wcześniejszym
        porozumieniu nie odbiega w sposób istotny od formuły umów społecznych.
        Według przyjętej wykładni, m.in. w orzecznictwie Trybunału
        Konstytucyjnego, wydać akt po porozumieniu lub w porozumieniu oznacza
        procedurę negocjacyjną, która musi doprowadzić do pozytywnego rezultatu.
        Jeżeli porozumienia się nie osiągnie, to nie można wydać aktu prawnego,
        który zależy od wcześniejszego osiągnięcia zgody. Nie jest to po
        zasięgnięciu opinii czy konsultacji, tylko po porozumieniu, a to wymaga
        zgody obydwu pertraktujących stron. Ustawa byłaby możliwa po osiągnię-
        ciu pełnego porozumienia, a więc wynik byłby taki sam, jak w przypadku
        formuły umowy społecznej. Nie byłoby podstawowej różnicy. Ostatnia
        uwaga. W projektach pojawia się państwo, władze publiczne, organy i
        instytucje państwowe i samorządowe. Trzymajmy się porządku pojęć, któ-
        ry na gruncie projektów konstytucji został już wypracowany. Nie ma nic
        gorszego niż chaos pojęciowy. W artykułach przyjętych już przez Komisję
        Konstytucyjną użyliśmy formuły „władze publiczne” na oznaczenie
        wszystkich podmiotów w aktywności państwowej i samorządowej. Nie wiem,
        czy trzeba to zastępować innym określeniem. Rozumiem, że dodanie pojęcia
        „instytucje państwowe” wychodzi poza pojęcie „władzy publicznej”, np.
        szkoły. Może pro jektodawcom tej formuły chodzi o to, żeby obowiązek
        zachowania neutralności odnieść nie tylko do władz publicznych, ałe
        także do instytucji państwowych lub samorządowych, co na gruncie prawa
        administracyjnego jest nieco innym pojęciem. Apeluję o porządek pojęć.
        Dotychczas posługiwaliśmy się formułą władzy publicznej. Na pewno nie
        można domagać się obowiązku przestrzegania rieutralności
        Światopoglądowej od Rzeczypospolitej jako całości, bo Rzeczpospolita, to
        nie tylko władze państwowe czy władze publiczne, to są różne formy
        aktywności społecznej, a od tych form np. związków wyznaniowych nie
        możeiny domagać się neutralności religijnej. Ekspert, prof. Henryk
        Groszyk: W związku z pytaniem poseł L. Błądek o zakres dwóch regulacji,
        tj. ust. 3 propozycji posła T, Mazowieckiego: „Stosunki między państwem
        a Kościołem katolickim określa umowa międzynarodowa zawarta ze Stolicą
        Apostolską” i przyjętym już art. 9 w brzmieniu: „Rzeczpospolita Polska
        przestrzega wiążącego Ją prawa międzynarodowego” chciałbym powiedzieć,
        że mają one dwa różne zakresy. Art. 9 zawiera nakaz przestrzegania
        wiążącego Polskę prawa międzynarodowego. Ust. 3 propozycji posła T.
        Mazowieckiego zawiera inny nakaz, a mianowicie nakaz zawarcia umowy
        międzynarodowej regulującej stosunki między państwem a Kościołem
        katolickim. Tak trzeba interpretować wyraz „określa”. Ci, którzy w
        terminie „określa” chcieliby widzieć coś innego są w błędzie. Jeżeli
        wyraz „określa” zostanie zachowany, to musimy zdawać sobie sprawę, że
        oznacza to nakaz, a więc przymus zawarcia takiej umowy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Uważam, że nasza dyskusja rozwinęła nowe wątki, także natury intelek
        Podkomisja podstaw ustroju politycznego... (22.02.1995 r. — 14) 89
        tualnej. Sugerowałbym, żebyśmy zaproponowali Komisji Konstytucyjnej, by
        nasza podkomisja pracowała jeszcze nad tym problemem. Materiału do
        sprawozdania jeszcze nie mamy, a już jesteśmy opóźnieni.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Uważam, że nie jest uprawniona interpretacja pana profesora o przymusie
        zawarcia konkordatu. Taką interpretacją sugeruje pan, że polska
        konstytucja może do tego zobowiązać również Stolicę Apostolską. Nie może
        konstytucja nakazać Stolicy Apostolskiej zawarcia konkordatu. Zwracam
        uwagę, że konstytucja marcowa z 1921 r. zawierała dokładnie taki sam
        wyraz „określa”, a konkordat został zawarty 5 lat później. Mógłby nie
        zostać w ogóle zawarty.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie mamy czasu na wymianę zdań, bo musimy wrócić na plenarne posiedzenie
        Komisji Konstytucyjnej. Czy państwo się zgodzicie, żeby nasza podkomisja
        jeszcze raz zebrała się w celu omówienia tej sprawy? Nie ma sprzeciwów.
        Zamykam posiedzenie.
      </p>
    </div>
    <p class="mt-8 p-10 rounded-lg shadow-lg">
      Dnia 22 lutego 1995 r. podkomisja podstaw ustroju politycznego i
      społeczno-gospodarczego, obradująca pod przewodnictwem posła Ryszarda
      Bugaja (UP), rozpatrzyła: — propozycje przepisów konstytucyjnych
      dotyczących stosunków państwo-kościół.
    </p>

    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Otwieram drugie w dniu dzisiejszym posiedzenie podkomisji. Rozumiem, że
        nasza poprzednia dyskusja ujawniła dwie kwestie, które powinny sprzyjać
        znalezieniu wspólnej formuły. Po pierwsze, sądzę, że wyjaśnienia naszych
        ekspertów zasługiwały na uwagę, bo pokazywały, że formuły „rozdział” i
        „autonomia” nie są określeniami, do których można sporządzić
        jednoznaczną wykładnię semantyczną. Z drugiej strony — powstały pewne
        problemy w związku z omówionym projektem posła T. Mazowieckiego.
        Związane są one Z kwestią rozgraniczenia pojęcia „autonomia” i ze
        zwrotem „na podstawie umowy zawartej...'. Określenie to może być formułą
        bardzo wymagającą i przy splocie niekorzystnych okoliczności mogłoby
        prowadzić do impasu w uregulowaniach. Większe niebezpieczeństwo jest
        związane nie tyle z kościołami, co ze związkami wyznaniowymi.
        Proponowałbym skupić się nad tymi problemami. Można szukać możliwości
        zastąpienia określenia „rozdział” innym sformułowaniem, np. o odrębności
        struktur państwa i kościoła, chociaż — przyznaję — nie mam gotowej
        propozycji. Można szukać możliwości przyjęcia formuły o autonomii i
        mocno deklarować, że dotyczy ona funkcji religijnych i organizacyjnych
        kościoła oraz precyzować, że pełnienie przez kościoły szerszych funkcji
        społecznych tak roZumianą autonomią nie byłoby obejmowane. W obu
        kierunkach moglibyśmy zmierzać i może pojawiłaby się jakaś
        satysfakcjonująca propozycja. Czy są już konkretne pomysły i czy są
        potrzebne dodatkowe wyjaśnienia ze strony ekspertów? Pewnego
        doprecyzowania w tej fazie wymaga propozycja posła T. Mazowieckiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Nie uważam, że ust. 3 zawierający zwrot: „określa umowa międzynarodowa”
        obliguje państwo do jej zawarcia. Może wyjaśnimy sobie ten problem. Mnie
        odpowiada interpretacja prof. P. Winczorka, który mówił, że z zasady
        suwerenności państwa nie wynika żadna obligatoryjność. Jeżeli podstawą
        procedowania będzie projekt, który zgłosiłem, to może będziemy omawiali
        poszczególne ustępy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Do tej fazy proponowałbym przejść jeszcze nie teraz. Chciałbym
        zaproponować pewne sformułowanie, ale po dyskusji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Rozumiejąc różne urazy historyczne i inne starałem się wyjść im
        naprzeciw. Nie może być takie wychodzenie naprzeciw, które niweluje sens
        starań drugiej strony. Dlaczego nie może być osobny ustęp w tym artykule
        poświęcony stosunkom między Kościołem katolickim a państwem? Dla nikogo
        nie jest to obrazą, a poza tym inne kościoły zgadzały się na
        uregulowanie tych kwestii w dwóch ustępach. Nie można nie widzieć
        słonia, nie można zamykać oczu na fakt, że jest to najpoważniejsza
        instytucja kościelna w naszym kraju.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Mnie się wydaje, że nie spotkało się to ze sprzeciwem. Nie pamiętam,
        żeby propozycja wyodrębnienia dwóch ustępów spotkała się z
        zastrzeżeniami. Problem polegał tylko na tym, że w pierwotnej wersji
        napisano wyłącznie o umowie międzynarodowej i tego dotyczyła różnica
        zdań.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        O ile pamiętam, to w projekcie posła W. Cimoszewicza sprawy te są
        umieszczone w jednym ustępie, są one ukryte.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie ma zasadniczego sprzeciwu wobec uwzględnienia w osobnym ustępie
        tylko Kościoła katolickiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Otrzymałem przed chwilą od prof. Z. Łyki projekt art. 15 w nowej wersji.
        Odpowiada on propozycji posła T. Mazowieckiego, z tym że dokonana
        została pewna korekta. Ust. 1 brzmi: „Władze i instytucje publiczne
        Rzeczypospolitej Polskiej zachowują neutralność w sprawach przekonań
        religijnych, światopoglądowych i ideologicznych”. Zostawiłbym tylko
        „władze publiczne”, ponieważ umieszczenie w tym miejscu również
        „instytucji” oznaczałoby obowiązek zachowania neutralności religijnej
        przez wojsko, publiczne szpitale, szkoły itd., co byłoby nie do
        przyjęcia. Proponuję więc w tym ustępie zostawić tylko „władze
        publiczne”. „Ust. 2. Kościoły i związki wyznaniowe są równouprawnione.
        Ust. 3. Kościoły i związki wyznaniowe są oddzielone od państwa oraz
        korzystają z autonomii i niezależności w wykonywaniu swoich zadań. Ust.
        4. Sytuację prawną kościołów i związków wyznamiowych określają ustawy
        uchwalone po porozumieniu się z ich właściwymi przedstawicielami, a w
        odniesieniu do Kościoła katolickiego również umowa międzynarodowa ze
        Stolicą Apostolską ratyfikowana na podstawie upoważnienia wyrażonego w
        ustawie. Ust. 5. W celu realizacji praw człowieka i potrzeb obywateli
        państwo współdziała z kościołami i związkami wyznaniowymi . Chyba w tej
        propozycji jest wszystko, co wynika z projektu posła T. Mazowieckiego, a
        także z wariantu I art. 15 przyjętego przez podkomisję posła R. Bugaja.
        Pewne elementy są wspólne z projektem posła W. Cimoszewicza. Moim
        zdaniem byłaby to propozycja, nad którą można głosować.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Powinniśmy zachowywać się pragmatycznie. Zakładam, że wszyscy mamy wolę
        osiągnięcia porozumienia. Dlatego bądźmy bardziej powściągłiwi w
        poszukiwaniu nowych formuł i starajmy się raczej zawężać pole
        rozbieżności. Wychodząc z tego punktu widzenia uważam, że propozycja
        prof. Z. Łyki idzie w tym właśnie kierunku. Jest ona bardzo bliska temu,
        co mógłbym bez większych zastrzeżeń zaakceptować. Gdyby pozostali
        członkowie Komisji, a także przedstawiciele kościołów i związków
        wyznaniowych akceptowali przedstawiony projekt, to być może
        zbliżylibyśmy się do porozumienia. Posiedzenia podkomisji stałych
        Komisji Konstytucyjnej ZN Miałbym kilka uwag. W swoim projekcie,
        uwzględniając m.in. argumenty prof. W. Osiatyńskiego, gotów jestem
        zrezygnować w ust. 1 z ostatniego elementu, tzn. wyrazu
        „filozoficznych”. Rzeczywiście jest to problem, który powinien być
        uregulowany w rozdziale dotyczącym praw ludzkich i obywatelskich.
        Sugerowałbym konsekwentnie zakończyć ten przepis na wyrazach
        „religijnych i światopoglądowych”. Po drugie, Świadomie opowiadałbym się
        za pozostawieniem w tym przepisie sformułowania: „władze i instytucje
        publiczne zachowują neutralność światopoglądową”. W moim przekonaniu
        neutralność Światopoglądowa wojska czy szpitala oznacza tylko i
        wyłącznie tyle, że wszyscy powinni być jednakowo traktowani. Neutralność
        wyraża się w tym, że mamy ordynariat polowy katolicki i prawosławny.
        Dopuszcza się możliwość wyznawania innych religii i ich praktykowania,
        nikogo nie zmusza się do jakichkolwiek praktyk religijnych. Do ustępów 2
        i 3 nie zgłaszałbym obiekcji, dostrzegając, że formuła ust. 3 jest
        rozszerzona w porównaniu z moją propozycją, ale zachowuje podstawowe i
        niezbędne elementy. W ustępie 4 pojawia się problem dyskutowany również
        przy propozycji posła T. Mazowieckiego. Sformułowanie, że stosunki czy
        sytuację prawną Kościoła katolickiego określa umowa międzynarodowa,
        zawiera nakaz adresowany do władz państwa polegający przynajmniej na
        podjęciu starań w celu zawarcia takiej umowy. Rozumiem, że nie jest to
        intencją posła T. Mazowieckiego, bo inaczej interpretuje on to
        sformułowanie. Można wprost o tym stwierdzić, posługując się tekstem
        przedstawionym przez prof. Z. Łykę. Widziałbym możliwość dokonania
        bardzo prostej operacji redakcyjnej polegającej na tym, że zdanie, z
        którego złożony jest ten przepis, rozbiłoby się na dwa zdania w
        brzmieniu: „Sytuację prawną kościołów i związków wyznaniowych określają
        ustawy uchwalone po porozumieniu z ich właściwymi przedstawicielami.
        Sytuację prawną Kościoła katolickiego może również określać umowa
        międzynarodowa ze Stolicą Apostolską ratyfikowana na podstawie
        upoważnienia wyrażonego w ustawie”. W ten sposób stwarzamy w konstytucji
        możliwość i podstawę do zawarcia takiej umowy międzynarodowej.
        Jednocześnie nie wpisujemy powinności, której zrealizowanie nie zależy
        wyłącznie od władz państwa polskiego. W poprzedniej fazie naszej
        dyskusji słusznie pytano, czy tego typu sformułowanie mogłoby być
        interpretowane jako powinność Stolicy Apostolskiej. Oczywiście że nie,
        ale wykonanie takiego zobowiązania nie zależy wyłącznie od stanowiska
        władz państwowych. Formuła, że stosunki między państwem i Kościołem
        katolickim może również regulować umowa międzynarodowa wychodziłaby
        naprzeciw tym uwagom. Po uwzględnieniu tych uwag bylibyśmy bardzo blisko
        porozumienia.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LykoZachariasz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>
          Przedstawiciel Kościoła Adwentystów Dnia Siódmego, ks. prof.
          Zachariasz Łyko:
        </strong>
        Chciałbym wyjaśnić, skąd wziął się dokument, który jest przedmiotem
        debaty. Po ogłoszeniu przerwy obecni tutaj przedstawiciele kościołów
        podjęli jeszcze jedną próbę uzgodnienia przepisu i osiągnięcia konsensu.
        Taką próbę podjęliśmy już w swoim czasie, teraz ponownie, by wypracować
        kompromisową formułę uwzględniającą różne aspekty, a w szczególności
        propozycje posła W. Cimoszewicza i posła T. Mazowieckiego. Wydawało się
        nam, że wypracowaliśmy kompromisową formułę. W pracach tych uczestniczył
        ks. prof. J. Krukowski jako przedstawiciel Episkopatu Polski, ks. bp
        Jeremiasz jako przedstawiciel Kościoła prawosławnego, moja skromna
        osoba, jak również moi przyjaciele z Kościoła Zielonoświątkowego i z
        Kościoła Zborów Chrystusowych. Chcielibyśmy naszą propozycję poddać pod
        ocenę podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Czy mam rozumieć, że ust. 3 w brzmieniu: „Kościoły i związki wyznaniowe
        są oddzielone od państwa” jest także przedmiotem konsensu?
        Przedstawiciel Kościoła Adwentystów Dnia Siódmego, ks. prof. Zachariasz
        Łyko: Tak jest. Nie jest to mój dokument, bo jest to efekt konsensu
        wypracowanego między przedstawicielami kościołów w czasie prywatnego
        spotkania po ogłoszeniu przerwy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Myślę, że znaleźliśmy się w nowej, korzystniejszej sytuacji, bo spór,
        który toczyliśmy wobec pojęć „autonomia i oddzielenie” został
        zredukowany i tego problemu nie mamy. Muszę zapytać posła T.
        Mazowieckiego, czy jest to dobry punkt wyjścia? Ja chętnie taką
        propozycję akceptuję.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Optowałbym przeciwko uwzględnieniu w przepisie instytucji publicznych.
        Sądzę, że zamiast wyjaśniać sytuację, tylko ją komplikujemy. Możliwe są
        różne interpretacje, dlatego uważam, że zobowiązanie bardzo różnych
        instytucji do określonych zachowań nie jest dobre. Władze można
        zobowiązać do takich zachowań. Słyszałem przed chwilą interpretację
        posła W. Cimoszewicza, ale nie jest to jedyna możliwa interpretacja tego
        przepisu. Polityka władz państwowych powinna być jasna. Przy
        skomplikowanej strukturze instytucji publicznych możemy popaść w ogromną
        liczbę konfliktów przy zachowaniu takiego brzmienia przepisu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Rozumiem, że wszyscy z państwa mają ten tekst. Czy zastrzeżenie
        dotyczące ust. 1 jest jedynym zastrzeżeniem, czy są inne uwagi?
        Proponowałbym stworzyć rejestr zastrzeżeń, co nie oznacza, że zachęcam
        do ich wymyślania.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Chciałbym poprzeć propozycję, żeby wykreślić z tego przepisu instytucje,
        ale nie ze względu na religijne prze konania. Jeżeli przyjąć, że
        instytucja jest instytutem naukowym, albo uniwersytetem, albo katedrą na
        uni wersytecie, gdzie jest szerzony pogląd filozoficzny, jest szkoła
        filozoficzna uprawiana przez tego lub in nego profesora, to czy przepis
        ten miałby oznaczać, że profesor musiałby zrezygnować z szerzenia swoich
        przekonań? Określenie „instytucje publiczne” nie jest zdefiniowane, jego
        granice są niejasne, czy chodziłoby tylko o państwowe instytucje, czy
        również o działające na niwie publicznej? Dlatego w tym przepisie
        powinno chodzić o władze publiczne, a nie o instytucje publiczne?
        Publiczność może się wyrażać również w działaniu na forum publicznym. W
        takiej sytuacji pojawiłby się problem, czy działanie na polu publicznym
        czyni instytucję publiczną, czy jest ona prywatna, ale działa na forum
        publicznym. Chyba że przyjmiemy, że chodzi o instytucje noszące w nazwie
        określenie państwowe, posługujące się pieczęciami z godłem państwowym,
        czy państwowe jednostki organizacyjne, jak słusznie podpowiada prof. K.
        Działocha. Z tych powodów opowiadam się za wykreśleniem tego określenia.
        Uważam, że w konstytucji należy się trzymać tego, co już sprecyzowano.
        Chodzi więc o władze publiczne działające w formie imperium władczego.
        Nie na rzucajmy przez nakaz poparty prawem takich czy innych przekonań.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Mam jedno zastrzeżenie dotyczące rozszerzenia przekonań również o
        przekonania ideologiczne. Gdyby w ust. 1 postawić kropkę po wyrazie
        „Światopoglądowych”, to wówczas zwrot dotyczący władz i instytucji
        publicznych mógłby pozostać. Rzeczywiście rodzą się wątpliwości co do
        sfery przekonań ideologicznych. Podzielam zastrzeżenia prof. P.
        Winczorka. Przepis w brzmieniu: „Władze i instytucje publiczne
        Rzeczypospolitej Polskiej zachowują neutralność w sprawie przekonań
        religijnych i światopoglądowych” jest w miarę czytelny. Uważam, że
        przekonania ideologiczne są o podłożu filozoficznym. Nie wiem, czy przy
        szerzeniu przekonań faszyzujących lub skrajnie nacjonalistycznych
        wypływających z określonych filozofii ma być zachowana neutralność.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Rozumiem, że wniosek polegałby na skreśleniu ostatniego wyrazu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Ta propozycja powstała jak gdyby na szkielecie mojego projektu. Uważam,
        że w ust. I powinny być wymienione władze publiczne, bez instytucji.
        Argumenty już zostały przedstawione. Zachowałbym wyraz „ideologicznych”,
        ponieważ neutralność wobec spraw ideologicznych jest potrzebą bardzo
        Świeżą. Może by konstytucja demokratycznego państwa to uszanowała. Pani
        <strong>poseł podała przykład nacjonalistycznych i</strong>
        faszystowskich ideologii. Uważam, że będą one zakazywane z innych
        artykułów. BÓR O O Z, A 0 A m 4 REA CZ. A EWC AAAA EA. Jeśli ust. 3
        miałby być w takiej wersji, jak to zostało przedstawione w nowej
        propozycji, to należałoby się zastanowić nad tym, czy kościoły
        korzystają, czy są oddzielone od państwa oraz autonomiczne i niezależne
        w wykonywaniu swoich zadań. Proponowałbym jako ust. 4 zamieścić ust. 5.
        Mówi się tutaj o oddzieleniu, ale i o współdziałaniu. Ust. 4 można
        rozbić na dwa, zgodnie z poprzednią propozycją: „Stosunki między
        państwem a Kościołem katolickim określa umowa międzynarodowa zawarta ze
        Stolicą Apostolską i ustawy”. Jest jeden podmiot prawa mię-
        dzynarodowego i nie ma co udawać, że są inne. „Stosunek państwa do
        innych kościołów oraz związków wyznaniowych określają ustawy uchwalone
        na podstawie porozumienia zawartego przez rząd z ich właściwymi
        przedstawicielami ". Nie mogę zgodzić się z propozycją posła W.
        Cimoszewicza, bo przy takiej interpretacji następuje odwrócenie
        problemów. Cały czas dyskutowaliśmy o tym, aby sytuacja innych kościołów
        była równouprawniona i zmierzała do takiej samej sytuacji, w jakiej jest
        Kościół katolicki przy zawarciu konkordatu. Chodzi o obligo państwa do
        porozumienia i uzgodnienia zasad ustawy regulującej stosunki z danym
        kościołem. Przy interpretacji nadanej przez posła W. Cimoszewicza
        sytuacja jest odwrócona. Byłoby zobowiązanie do porozumienia z innymi
        Kościołami, natomiast żadnego zobowiązania w stosunku do Kościoła
        katolickiego. Określenie „może być” użyte jest tylko w stosunku do
        Kościoła katolickiego i konkordatu, jeśli dobrze to zrozumiałem.
        Przedstawiciel Sekretariatu Konferencji Episkopatu Polski, ks. prof.
        Józef Krukowski: W dużej mierze podzielam poglądy zawarte w najnowszym
        projekcie z korektami posła T. Mazowieckiego i prof. L. Wiśniewskiego.
        Sądzę, że za szerokie jest rozumienie pojęcia „władze publiczne”. W
        związku z wypowiedzią poseł K. Łybackiej trzeba uświadomić sobie, że nie
        chodzi o zachowania, tylko o przekonania. Mogą być zachowania niezgodne
        z porządkiem moralnym i publicznym i wtedy władze nie będą wobec nich
        neutralne. Przepis mówi o przekonaniach religijnych i światopoglądowych.
        Neutralność może być pozytywna i negatywna. Zakładamy, że tutaj chodzi o
        neutralność pozytywną, a nie negatywną. Ważny jest ust. 2, który
        stwierdza, że kościoły i związki wyznaniowe są równouprawnione. Nie ma
        kościoła uprzywilejowanego. Kościół katolicki w żadnym wypadku nie ma
        takich roszczeń, bo uprzywilejowana pozycja wskazywałaby na nadanie
        państwu charakteru wyznaniowego. Z całą pewnością przedstawiciele
        Kościoła katolickiego nie chcą państwa wyznaniowego, dlatego jest tutaj
        poparta ta radykalna zasada. „Kościoły i związki wyznaniowe są
        oddzielone od państwa oraz autonomiczne i niezależne w wykonywaniu
        swoich zadań”. Sądzę, że byłoby to małżeństwo dwóch propozycji:
        oddzielenia oraz poszanowa Posiedzenia podkomisji stałych Komisji
        Konstytucyjnej ZN nia autonomii i niezależności. Obawy ze strony Koś-
        cioła katolickiego płyną stąd, że oddzielenie w minionym okresie było
        wrogie, zmierzające nie tyle do oddzielenia, co do zniszczenia elementów
        religijnych. Dlatego potrzebne jest nam oddzielenie pozytywne czy
        przyjazne, polegające na poszanowaniu autonomii i niezależności. Dlatego
        trzeba dodać: „„..autonomii i niezależności w wykonywaniu swoich zadań”.
        Każda instytucja, w tym wypadku kościół i państwo, ma swoje zadania.
        Niech ona te zadania realizuje. Trudno definiować, co należy do zadań
        państwa, a co do zadań kościoła, bo to wynika z natury każdej
        społeczności. „Sytuację prawną kościołów i związków wyznaniowych
        określają ustawy uchwalone po porozumieniu się z ich właściwymi
        przedstawicielami . Ta propozycja bez zastrzeżeń zasługuje na przyjęcie.
        „Sytuację prawną Kościoła katolickiego określa również umowa
        międzynarodowa ze Stolicą Apostolską”. Jeżeli przyjmiemy równość
        kościołów, jak to było powiedziane, to taką samą formułę trzeba przyjąć
        w sprawie regulacji wzajemnych stosunków. Oczywiście że sytuację prawną
        Kościoła katolickiego regulują też ustawy, ale istnieje możliwość, nie
        tylko możliwość, bo w państwach europejskich przyjęta jest metoda
        określania tych stosunków w konkordacie, zawarcia umowy międzynarodowej.
        Nie sądzę, żeby stawiało to inne kościoły w gorszej sytuacji, bo chodzi
        tutaj o poszanowanie każdego zgodnie z tym, kim jest. Tylko Kościół
        katolicki cieszy się podmiotowością publicznoprawną. Wpisywanie umowy
        międzynarodowej tylko jako hipotezy do konstytucji trochę dyskryminuje
        instytucję, która jest w Polsce od ponad tysiąca lat. Dlatego jestem za
        propozycją posła T. Mazowieckiego, który uważa, że należy przyjąć
        formułę, iż stosunek państwa do Kościoła katolickiego określa umowa
        międzynarodowa ze Stolicą Apostolską ratyfikowana na podstawie
        upoważnienia wyrażonego w ustawie i ustawy. Można na czwarte miejsce
        przesunąć ust. 5, ponieważ dotyczy on wzajemnych stosunków, a ust. 4
        znalazłby się na piątym miejscu, bo dotyczy metod regulacji tych
        stosunków.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Miałem w pewnym momencie nadzieję, że jesteśmy bliżsi porozumieniu, a w
        tej chwili znowu pojawiają się wątpliwości. Będę starał się nie
        powtarzać argumentów, ale odnoszę wrażenie, że albo zostały one Źle
        zrozumiane, albo poprzednio źle przeze mnie wyartykułowane. Bazuję na
        projekcie zaproponowanym przez prof. Z. Łykę w uzgodnieniu z
        przedstawicielami innych kościołów. Zgłasza się uwagi, że pojęcie
        zachowania neutralności przez władze i instytucje publiczne może być
        różnie interpretowane. Być może, bo różnice w interpretacji są zawsze
        niewykluczone, ale należy przeprowadzać najprostszą interpretację. Skoro
        zachowują neutralność, to nie zajmują jednej postawy religijnej czy
        światopoglądowej. Jeżeli z tej formuły usu Podkomisja podstaw ustroju
        politycznego... (22.02.1995 r. — 14) 93 niemy wszystko to, co wykracza
        poza pojęcie „władz publicznych”, to oznacza że co najmniej dopuszczamy,
        iż nie będą się zachowywały neutralnie w kwestiach wyznaniowych i
        religijnych. Chcę otwarcie powiedzieć, że jest to sprzeczne z moimi
        poglądami. Nie wyobrażam sobie, żeby instytucje publiczne takie jak
        wojsko, czy szkoła nie zachowywały neutralności w kwestiach
        Światopoglądowych i religijnych. W państwie demokratycznym respektującym
        równość praw obywatelskich powinny zachowywać neutralnośćw tych
        sprawach. Dlatego trudno mi się zgodzić na usunięcie sformułowania,
        które znalazło się w uzgodnionej propozycji przedstawicieli kościołów.
        Być może, pojęcie „instytucje publiczne” wymaga doprecyzowania. Nie
        chodzi o upieranie się przy konkretnym określeniu, ale na pewno
        ograniczenie się do władz publicznych nie wyczerpuje problemu, jeśli
        Świadomie pomniejszymy zakres owej powinności zachowania neutralności
        Światopoglądowej. Rozumiem, że ust. 2 nie budzi żadnych zastrzeżeń.
        Propozycja przeniesienia tego, co jest w ust. 5 do ust. 4 jest słuszna i
        będzie miała pewne znaczenie w interpretowaniu tego, co będzie zawarte w
        ust. 3. Na razie świadomie pomijam analizę ust. 3. Jeśli chodzi o ustęp
        4, to nie mogę przyjąć argumentacji posła T. Mazowieckiego, według
        której moja propozycja ma dyskryminować Kościół katolicki. Nie
        dostrzegam podstaw do takiego stwierdzenia. Pierwsze zdanie w brzmieniu:
        „Sytuację prawną kościołów i związków wyznaniowych określają ustawy
        uchwalone po porozumieniu się z ich właściwymi przedstawicielami”
        dotyczy wszystkich kościołów ti związków wyznaniowych. Nie ma więc
        żadnego elementu dyskryminującego. Gdyby nawet doszło do takiej
        sytuacji, w której stosunki z Kościołem katolickim nie byłyby
        uregulowane umową międzynarodową, to byłyby określone ustawą po
        porozumieniu się z właściwym przedstawicielem tego kościoła, a więc na
        identycznych zasadach, jak w przypadku innych kościołów. Propozycja, aby
        drugie zdanie brzmiało: „Sytuacja prawna Kościoła katolickiego może być
        również regulowana przez umowę międzynarodową” jedynie poszerza
        możliwości tej regulacji. W żadnym wypadku nie jest to wyraz
        dyskryminowania, wręcz przeciwnie, zgoda na tego typu sformułowanie
        oznacza wprowadzenie do konstytucji specjalnego przepisu dotyczącego
        uregulowania sytuacji prawnej Kościoła katolickiego, wymienionego tutaj
        z nazwy. Tak naprawdę chodzi o to, jak interpretujemy wyrazy: „może
        określać i „określa”. W moim przekonaniu wyraz „określa” oznacza
        powinność zawarcia takiej umowy międzynarodowej. Wyrażam wątpliWość, czy
        takie powinnościowe sformułowanie jest prawidłowe. Właściwsze jest
        określenie dopuszczające czy sugerujące taką możliwość. W ust. 3 problem
        wiąże się z formułą: „wykonywania swoich zadań”. Pozostawałbym przy tym,
        co proponowałem i co było również zawarte w in | NN EE ET A OE YO Z A Z
        nych projektach, a więc przy sformułowaniu o wykonywaniu funkcji
        religijnych i organizacyjnych. W czasie wcześniejszej fazy naszej
        dyskusji m.in. eksperci podnosili zastrzeżenia, co będzie, jeśli
        proboszcz organizuje kółko sportowe. W moim przekonaniu to się w sposób
        oczywisty mieści i daje zinterpretować na tle zasady współdziałania
        państwa I kościołów w celu realizacji potrzeb obywateli. Jest to
        określenie tak szerokie, że obejmuje zarówno dziatalność charytatywną,
        opiekuńczą, jak i sportową, kulturalną i jakąkolwiek jeszcze inną.
        Podtrzymuję swoje wątpliwości co do ścisłości pojęcia „swoich zadań .
        Nie wprowadzajmy do konstytucji pojęć niejasnych, nieostrych, które mogą
        stać się w przyszłości polem rozbieżnych interpretacji. Próbujmy
        zachować precyzję.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Nawiązując do ostatnich słów posła W. Cimoszewicza, które trafiają mi do
        przekonania, stanowczo oponuję przeciw zamieszczeniu w tym przepisie
        instytucji. Nie chcę wchodzić w spory dotyczące tego, czy kościoły są
        instytucjami publicznymi, czy fundacje są instytucjami publicznymi, czy
        stowarzyszenia wyższej użyteczności publicznej są, czy nie są,
        instytucjami publicznymi. Takie określenie prowadzi do licznych
        wątpliwości i z tego powodu starałbym się uniknąć zamieszczenia tego
        pojęcia, zgodnie z tezą, która była konkluzją wywodów posła W.
        Cimoszewicza. Jestem przeciwny sformułowaniu o funkcjach religijnych i
        organizacyjnych. Jego brzmienie zgrzyta. Zadania nie dają się tak łatwo
        określić. Wreszcie jest problem związany z pojęciem „oddzielenie”. Mnie
        nie razi ani nie przeszkadza ten wyraz i sądzę, że w odczuciu innych
        osób jest podobnie. Nie wyraz „oddzielone” tylko zwrot „od państwa”
        wywołuje wątpliwości. Konstytucja w art. 1 głosi, że państwo polskie
        jest Rzecząpospolitą. Oddzielenie od Rzeczypospolitej jest niepokojącym
        akcentem. Gdyby chodziło o oddzielenie od organów państwowych, to proszę
        bardzo. Wzajemne niewtrącanie się jest dla mnie oczywiste I jasne.
        Problem stanowi oddzielenie od Rzeczypospolitej i dlatego unikałbym
        takiego sformułowania.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Wracam do ust. 1. Uważam, że instytucje publiczne muszą mieć
        zagwarantowaną neutralność w sprawach religijnych i światopoglądowych.
        Nie upieram się, aczkolwiek nadal twierdzę, że sprawa wolności przekonań
        1deologicznych jest regulowana w artykułach mówiących o prawach i
        wolnościach obywatelskich, np. w art. 38 Ii niekoniecznie musi być ona
        uregulowana w art. 15 odnoszącym się do stosunków państwo-kościół. Ust.
        4 dotyczy sytuacji prawnej kościołów i związków wyznaniowych.
        Sformułowanie w ostatnim tekście obliguje do zawarcia umowy
        konkordatowej. Propozycja posła W. Cimoszewicza dopuszcza taką
        możliwość, tzn. nie wyklucza zawarcia konkordatu, natomiast tego nie
        nakazuje. JĄ W celu argumentacji chcę się posłużyć przykładem
        konstytucji Hiszpanii, kraju na wskroś katolickiego, który zawarł
        konkordat. Proszę posłuchać, jak brzmią przepisy konstytucji Hiszpanii
        dotyczące stosunków państwo—kościół. „Ust. 1. Zapewnia się jednostkom i
        wspólnotom wolność w sferze ideologii, religii i kultu. Korzystanie z
        tych wolności podlega tylko takim ograniczeniom, jakie są konieczne dla
        utrzymania ładu publicznego chronionego przez ustawę. Ust. 2. Nikt nie
        może być zobowiązany do składania oświadczeń co do swej ideologii,
        religii lub swych przekonań. Ust. 3. Żadne wyznanie nie ma charakteru
        państwowego. Władze publiczne uwzględniają przekonania religijne
        społeczeństwa hiszpańskiego i utrzymują wynikające z tego stosunki
        współpracy z Kościołem katolickim i pozostałymi wyznaniami”. Nie ma
        tutaj ani słowa o konieczności zawarcia dodatkowych umów. Uważam, że
        jeżeli piszemy „lub umowa międzynarodowa , to dopuszczamy możliwość jej
        zawarcia. Jest to i tak bardzo wyraźny gest mówiący o tym, że bardzo
        poważnie traktujemy zawarcie umowy między Watykanem a Rzecząpos politą.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Konstytucja ta była napisana wówczas, kiedy Hiszpania miała konkordat.
        Nie jestem pewien, czy nie ma tam innych artykułów regulujących sytuację
        prawną kościołów i związków wyznaniowych. Nie mam nic przeciwko
        przepisaniu tych artykułów z konstytucji hiszpańskiej.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Nie chcę ich przepisywać.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Mamy szansę na dokonanie przełomu i osiągnięcie porozumienia.
        Nawoływałbym do poszukiwania pragmatycznego wyjścia z różnych sytuacji.
        W ust. 1 są potencjalne dwie pułapki. Nie powiem, żebym wiedział, jak z
        nich wyjść, ale chciałbym je przedstawić. Z, jednej strony boję się
        trochę sformułowania, które mówi o instytucjach publicznych, bo nie
        chciałbym przy pomocy tego przepisu zamknąć drogi np. wykładowcom
        filozofii na uniwersytetach do głoszenia doktryn religijnych. Z drugiej
        strony nie chciałbym także, by po skreśleniu wyrazu „instytucje” okazało
        się, że np. struktury obronne, które zawsze działają według przymusu i
        dyscypliny, funkcjonowały doktrynalnie, nie były światopoglądowo
        neutralne i wymuszały na młodych ludziach uczestnictwo w ceremoniach
        religijnych. To są dwie skrajności, których powinniśmy uniknąć.
        Apelowałbym do poszukiwania formuły, która mogłaby zrealizować ten
        postulat. Sądzę, że nie należy się bać określenia „ideologicznych”, bo
        rzeczywiście jest tak, że zabezpieczenie przed działaniami inspirowanymi
        ideologicznie znajduje się w innych częściach konstytucji. Sugerował-
        bym to pozostawić. Posiedzenia podkomisji stałych Komisji Konstytucyjnej
        ZN mm „r Do ust. 2 nie mam uwag. Przy omawianiu ust. 3 chciałbym poddać
        pod rozwagę następującą propozycję. Prof. P. Winczorek wymyślił
        określenie, które wcześniej było przedmiotem ostrego sporu, to znaczy
        „oddzielone”. Możemy tutaj użyć sformułowania, że kościoły i związki
        wyznaniowe są odrębne od państwa. Jednocześnie można zaakceptować
        sugestię posła W. Cimoszewicza, że są autonomiczne i niezależne w
        wykonywaniu swych zadań religijnych. Może taką propozycję moglibyśmy
        wspólnie zaakceptować. W ust. 4 szukałbym kompromisu polegającego na
        tym, żeby przyjąć wniosek posła T. Mazowieckiego w sprawie wyodrębnienia
        ustępu dotyczącego Kościoła katolickiego, mówiącego zarówno o ustawach,
        jak i o konkordacie, o umowie międzynarodowej. Osobny ustęp dotyczyłby
        tworzenia prawa dla innych kościołów i związków wyznaniowych. Nie sądzę,
        żeby kościoły niekatolickie wyodrębnienie tego zagadnienia w dwa ustępy
        traktowały jako dyskryminację. Oddalibyśmy ukłon w kierunku realnej
        sytuacji i bardzo silnej pozycji Kościoła katolickiego. Zrobilibyśmy
        również skromny ukłon historyczny. Pozostaje poważny problem, którym
        nadal jestem zatroskany. Nie boję się formuły „po porozumieniu”, jeśli
        chodzi o główne kościoły i związki wyznaniowe. Nasze uregulowania są i
        powinny pozostać liberalne. Oznacza to, że na marginesach mogą powstać
        patologie i wtedy formuła „po uzgodnieniu” może stać się przyczyną
        różnych konfliktów i zahamowania uregulowań prawnych. Apelowałbym o
        znalezienie przepisu bardziej „miękkiego” lub zawierającego wyjątek.
        Propozycja przedłożona przez przedstawicieli prezydenta jest przykładem
        tego typu poszukiwań, chociaż nie jest fortunna pod względem językowym.
        Przedstawiciel Polskiego Autokefalicznego Kościoła Prawosławnego, ks. bp
        Jeremiasz: Wiele z moich obaw przedstawił pan przewodniczący. Jest
        pułapka w przypadku instytucji publicznych, o której nie myślałem.
        Chrześcijańska Akademia Teologiczna i Akademia Teologii Katolickiej są
        instytucjami pań- stwowymi, a więc jest problem. Czy ust. 4 oznacza, że
        państwo musi uznać każdy związek wyznaniowy? W interesie państwa może
        leżeć nieuznanie jakiegoś związku wyznaniowego. lakie problemy występują
        w wielu krajach, ponieważ pojawiają się organizacje i związki
        parareligijne, które są zagrożeniem dla porządku publicznego. Taki
        problem jest w Niemczech, gdzie obowiązuje cała procedura uznania danego
        związku wyznaniowego. Jeżeli przepisy prawne są bardzo liberalne i musi
        automatycznie być uznany każdy związek wyznaniowy, to mogą powstać duże
        zagrożenia dla państwa. Można wprowadzić jakąś kategorię ograniczającą,
        np. zwrot: „sytuację prawną kościołów i związków wyznaniowych uznanych
        przez państwo”. Element porozumienia musi pozostać, bo nie można
        decydować o kimś bez zainteresowanego. Nie Podkomisja podstaw ustroju
        politycznego... (22.02.1995 r. — 14) 95 wiem, czy konstytucja musi
        określać tok uznaniowy. Może jest to pytanie pod adresem ekspertów.
        Przedstawiciel pełnomocnika obywatelskiego projektu konstytucji, Michał
        Drozdek: Bardzo dziękuję pani
        <strong>poseł za przytoczenie fragmentu konstytucji</strong>
        hiszpańskiej. Co prawda, nie akcentowałbym katolickości Hiszpanii, co
        socjalistyczny parlament, który uchwalał konstytucję. Nie ma w niej
        żadnych przepisów o potrzebie neutralności Światopoglądowej, o
        oddzieleniu kościoła od państwa. Wprost przeciwnie, władze publiczne
        uwzględniają przekonania religijne swoich obywateli. Sądzę, że jest to
        słuszna filozofia. Władze publiczne powinny być na usługach swoich
        obywateli, bo taka jest filozofia państwa demokratycznego. Nie są one
        osobnym podmiotem, drugą stroną barykady w stosunku do własnych
        obywateli, bo są instytucjami tych obywateli. W związku z tym
        uwzględniają ich potrzeby i Światopogląd. Władze nie muszą się bać tych
        poglądów i oddzielać się od obywateli. W tym kontekście wydaje mi się,
        że ust. 1 jest niepotrzebny. Dlatego w projekcie obywatelskim on się nie
        znalazł. Przepis ten ma bronić wolności sumienia mniejszości przed
        ewentualną zaborczością ze strony większości, która chciałaby nadużyć
        instytucje państwa. Do tego są wszystkie artykuły dotyczące praw
        człowieka, a w szczególności art. 3/ projektu podkomisji, mówiący o
        wolności sumienia. Nie upieram się przy tym, żeby nie było ust. 1.
        Zdecydowanie trzeba wyeliminować instytucje publiczne, ponieważ nie ma
        żadnego powodu, dla którego nie miałyby powstawać instytucje publiczne
        wspierające różne dobre inicjatywy o Światopoglądowym charakterze,
        chociażby takie, jak Akademia Teologii Katolickiej czy Chrześcijańska
        Akademia Teologiczna. Mnóstwo innych inicjatyw może być wspieranych
        przez demokratyczne państwo, bo są dobre, nie zagrażają obywatelom,
        niczyim prawom. Państwo ma wspierać rzeczy dobre, a nie można zakładać,
        że religia jest zła, Światopogląd obywateli jest zły i państwo nie może
        tego wspierać. Religia i humanizm, niekoniecznie religijny, bo nawet
        ateistyczny niosą wartości dla obywateli i państwo może wspierać tego
        typu motywacje. Nie zamykajmy tego przepisem o neutralności instytucji
        państwowych. Co innego jest z władzami, które mają stać na straży
        neutralności, a więc rozwoju wszystkich w równej mierze. Władze nie
        powinny posiadać charakteru Światopoglądowego. Neutralność też jest
        stosunkiem do Światopoglądu. Władze powinny odzwierciedlać poglądy
        obywateli, bo do tego one służą przy zachowaniu praw człowieka, Co
        prawda wojsko nie jest wyliczane w klasycznych definicjach ani jako
        władza ustawodawcza, ani wykonawcza, ani sądownicza. Jednak przymus
        stosowany przez wojsko jest przymusem władzy pańStwowej, a nie
        stosowanym przez instytucję państwową. Zagrożenie dla wolności sumienia
        jest tam, gdzie pojawia się przymus. Jest on stosowany przez pań- | me M
        M — „ aan stwo w swoich instytucjach na zasadzie władzy państwowej.
        Pozostawienie w przepisie władz publicznych bez instytucji załatwia
        sprawę obrony wolności sumienia, Jeżeli w wojsku pojawia się zagrożenie
        dla wolności sumienia, to na zasadzie nadużywanego przymusu władzy
        państwowej, do czego nie można dopuścić. Nie można również dopuścić do
        sytuacji odwrotnej, w której obywatele służący dla dobra ojczyzny
        mieliby ograniczone prawa obywatelskie dotyczące wolności sumienia i nie
        mieliby możliwości korzystania z posługi duszpasterskiej. Myślę, że co
        do tego jest absolutna zgoda. Wyrażam duże zastrzeżenia do sformułowania
        dotyczącego problemu oddzielenia kościoła od państwa. Ono może być
        niejasne, różnie interpretowane i wywoływać kontrowersje, jak powiedział
        poseł W. Cimoszewicz. To sformułowanie może być nadużywane w celu
        wyeliminowania z życia publicznego, z życia państwowego wpływów religii,
        jak mamy to w projekcie Parlamentarnej Grupy Kobiet, zgodnie z którym z
        motywacji religijnych nie można tworzyć prawa. Tego rodzaju
        interpretacja w sposób drastyczny naraża na niebezpieczeństwo olność
        sumienia i samą ideę demokratycznego państwa, w którym każdy
        współkształtuje to państwo z motywacjł takich, jakie posiada, ale pod
        warunkiem, że są to motywacje nie zagrażające prawom innych obywateli.
        Nie da się oddzielić kościołów od państwa, dlatego że kościoły
        współstanowią to państwo. Słusznie zwrócono uwagę, że państwo jest
        Rzecząpospolitą, jest dobrem nas wszystkich. Nie są to tylko władze
        państwowe, ale w skład państwa wchodzą rozmaite elementy. Kościoły
        współstanowiące państwo nie mogą być od niego oddzielone. Byłby to
        przepis absurdalny i niezrozumiały. Dlatego opowiadałbym się za
        zlikwidowaniem tego przepisu i zachowaniem wzajemnej autonomii 1
        niezależności. Biskup Jeremiasz wyraził niepokój w sprawie
        niebezpieczeństwa dla porządku publicznego wypływającego z niektórych
        związków wyznaniowych czy parakościołów. W naszym projekcie jest to
        rozwiązane w następujący sposób: „Państwo gwarantuje autonomię i
        niezależność kościołów oraz związków wyznaniowych uznanych przez prawo”.
        Przy takim przepisie problem jest rozwiązany. Jeżeli nie będzie go w
        konstytucji, to pojawi się hipoteza, że wszystkie kościoły i związki
        wyznaniowe muszą mieć uregulowane stosunki za pomocą ustawy. Jeśli będą
        nieuznawane przez prawo, to wówczas takie uprawnienie im by nie
        przysługiwało. W sprawie konkordatu nie ma chyba niepokoju, a jeśli
        jest, to nie wiem, skąd się on bierze, skoro nigdy w historii nie
        zdarzyło się tak, żeby Stolica Apostolska nie chciała zawrzeć
        konkordatu. Może nie znam dobrze historii prawa i ks. J. Krukowski
        zechce to sprostować. Stolica Apostolska w takim trybie załatwia umowy
        międzypaństwowe. Myślę, że na tej sali nie ma osób przeciwnych zawarciu
        konkordatu, a są tylko osoby, które uważają, że jego Posiedzenia
        podkomisji stałych Komisji Konstytucyjnej ZN ratyfikacja powinna
        nastąpić po pojawieniu się nowej konstytucji. Skoro nie ma takich
        kontrowersji, to strach przed wpisywaniem do konstytucji konkordatu w
        zaproponowanej formie nie jest uzasadniony.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Rzeczywiście spór nie toczy się o to, czy dopuszczamy zawarcie
        konkordatu, czy nie, choć są i takie poglądy. Konkordat ma określony
        kształt, więc nie możemy powiedzieć, że każda tego typu umowa
        międzynarodowa będzie entuzjastycznie ratyfikowana przez wszystkich.
        Przed tym problemem właśnie stoimy. Nakłaniałbym państwa do tego, żeby
        wypowiedzi nie były ogólne, ponieważ powinniśmy zbliżać się do
        określonej formuły, wokół której mielibyśmy szansę osiągnąć konsens, bo
        po to się zebraliśmy. Przedstawiciel Kościoła Zborów Chrystusowych, ks.
        Henryk Sacewicz: Chciałbym wrócić do kilku wątków poruszonych w
        dyskusji. Wyrażano obawy w sprawie ujęcia w przepisach instytucji. Padła
        sugestia, żeby wprowadzić pojęcie służby. Mój przedmówca wspomniał o
        rozumieniu wojska jako władzy państwowej. Mam prośbę do osób
        decydujących o tekście, by szpitale, szkoły i wojsko znalazły właściwe
        określenie, które zapewniałoby neutralność tych instytucji. W moim
        rozumieniu neutralność nie oznacza, że w tych instytucjach nie mogą być
        prezentowane różne postawy. Chodzi o to, żeby nie były one narzucane.
        Każda osoba znajdująca się w tej instytucji powinna mieć zapewnione
        prawo wyboru i w tym sensie mówimy o neutralności. Przyznam się
        szczerze, że jestem zaskoczony reakcją państwa na ust. 3. Tekst, nad
        którym pracujemy był redagowany m.in. przez ks. prof. J. Krukowskiego.
        Nie miał on zastrzeżeń do użycia w ust. 3 określenia „oddzielone od
        państwa”, oczywiście złagodzonego dodatkowymi elementami znajdującymi
        się w zwrocie: „oraz korzystają z autonomii i niezależności . Jestem
        zaskoczony, że niektórzy z państwa mają w tej sprawie zastrzeżenia.
        Czyżby państwo byli bardziej papiescy niż sam papież? Słuszna była
        propozycja przesunięcia ust. 5 z powodu potrzeby zapewnienia ciągłości
        myśli zawartych w tym artykule. W sprawie dotychczasowego ust. 4
        zarysowały się dwa stanowiska. Pojawiły się głosy optujące za
        podzieleniem tego ustępu na dwa. W jednym regulowane byłyby sprawy
        Kościoła katolickiego, a w drugim innych kościołów i związków
        wyznaniowych. Nie upierałbym się za określeniem tego problemu w jednym
        ustępie, chociaż jestem za sformułowaniem zawartym w jednym punkcie.
        Jeżeli miałby być wprowadzony podział na dwa ustępy, io ustęp mówiący
        ogólnie o wszystkich kościołach powinien być na pierwszym miejscu,
        natomiast w następnym mogłaby być uregulowana kwestia statusu prawnego
        Kościoła katolickiego. Nie chodzi tutaj o szykanowanie Kościoła
        katolickiego, tylko o to, że od elementów ogólniejszych przechodzi się
        do bardziej szczegóło wych. Ujęcie w jednym ustępie wszystkich tych
        problemów wynika z brzmienia ust. 2. Jeżeli mówi się o równouprawnieniu
        wyznań, to wszystkie regulacje prawne dotyczące kościołów zawieramy w
        jednym punkcie. Umieszczenie w ustępie rozwiązania charakterystycznego
        dla Kościoła katolickiego jest swego rodzaju uprzywilejowaniem tego
        kościoła. Słusznie poseł K. Łybacka powiedziała, że można by tego w
        ogóle nie zapisywać, a i tak z charakteru Kościoła katolickiego i zasad
        ogólnie przyjętych wynika, że kościół ten ma prawo zawrzeć umowę
        konkordatową. Nie widzimy przeszkód, żeby to zaakcentować, ale w taki
        sposób, by rozumieć to jako możliwość, a nie nakaz dla każdej ze stron.
        Rozumiem, że pojęcie „po porozumieniu” zawiera w sobie
        niebezpieczeństwa, na które wskazano w dyskusji. Może być jakiś związek
        religijny, który stwarzałby niebezpieczeństwa dla innych ludzi. Z takim
        związkiem nie byłoby porozumienia, a więc nie uzyskałby on legalizacji.
        Uważam, że pojęcie „po porozumieniu” konsumuje legalizację tego związku.
        Nie ma potrzeby wprowadzać dodatkowego przepisu mówiącego o prawnie
        uznanych związkach wyznaniowych. Porozumienie zawiera drogę legalizacji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Zachęcałbym dyskutantów do zwięzłych wypowiedzi. Przedstawiciel
        Polskiego Autokefalicznego Kościoła Prawosławnego, ks. bp Jeremiasz:
        Chciałbym bronić ust. 3 w obecnym kształcie, bo jest on wynikiem
        uzgodnień w gronie przedstawicieli kościołów oraz — jak mi się wydawało
        — również w podkomisji i Komisji Konstytucyjnej. Istnieje
        komplementarność między pojęciami oddzielenie oraz autonomia i
        niezależność. Chyba na ten temat nie ma sensu więcej mówić. Jeśli
        niektórzy z państwa uważają, że trzeba podzielić ust. 4, to nie widzę
        przeszkód, nawet przy podkreśleniu szczególnej roli Kościoła
        katolickiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Przed paroma godzinami zgłosiłem wersję tego przepisu, poszukując
        formuły, która godziłaby możliwie najwięcej propozycji zawartych w
        różnych projektach. Wszystkie ustępy występują w propozycjach wcześ-
        niej zgłoszonych. Dlatego uważałem, że będzie to w miarę szczęśliwe
        wyjście z sytuacji. Możemy osiągnąć pozytywny rezultat naszych prac w
        postaci uzgodnionego stanowiska tylko i wyłącznie wtedy, kiedy będziemy
        dyskutowali na podstawie merytorycznych argumentów, przy założeniu, że
        wszyscy chcą osiągnąć porozumienie i gotowi są na kompromis. Z tego
        powodu niektóre wypowiedzi w tej dyskusji muszę uznać za swoiste
        nieporozumienie, nie sprzyjające osiągnięciu kompromisowego rezultatu.
        Jeżeli argumenty są dopasowywane do sytuacji związanej z ostatecznym
        autorstwem tej układanki, to jest to nieporozumienie. Jeżeli w wypowie
        dzi przedstawiciela obywatelskiego projektu w sposób zasadniczy
        dyskwalifikuje się sformułowania za Podkomisja podstaw ustroju
        politycznego... (22.02.1995 r. — 14) 97 warte m.in. w ust. 1 mówiące o
        neutralności, to nie na tym etapie dyskusji. Chciałbym do ust. 1
        zaproponować poprawkę, która być może wyjdzie naprzeciw oczekiwaniom czy
        obawom różnych osób. Zwracam uwagę, że dotychczasowa wersja o
        instytucjach publicznych została przedstawiona w projekcie uzgodnionym
        przez przedstawicieli kościołów. Proponowałbym zapis z projektu prof. M.
        Pietrzaka, prof. A. Rzeplińskiego idra W. Kuleszy w brzmieniu: „organy i
        instytucje państwowe oraz samorządowe . Wersja ta nie stwarza
        niebezpieczeństwa, o którym wspomniał poseł R. Bugaj, mówiąc, że nie
        chciałby zakazu głoszenia przez profesora uniwersytetu swoich poglądów
        filozoficznych. Byłoby to zobowiązanie dotyczące instytucji publicznej,
        a więc uniwersytetu, którego powinnością powinno być zachowanie
        neutralności, a więc stworzenie równych warunków do wykładania różnych
        filozofii i różnych przekonań Światopoglądowych, a nie konkretnego
        profesora, bo nie jest on instytucją publiczną. Chyba zasadnie można
        uważać, że ten przepis dotyczyłby działalności fundacji i instytucji
        podobnego typu. Być może właściwsze byłoby sformułowanie: „Władze
        publiczne i instytucje wykonujące zadania państwa zachowują neutralność
        w sprawach przekonań religijnych i Światopoglądowych”. Rozumiem, że na
        jednym uniwersytecie wykładane są różnego rodzaju poglądy. Neutralność
        polega na tym, że dopuszcza się prezentację różnych stanowisk i różnych
        koncepcji filozoficznych. Z tej propozycji wynika, że instytucja nawet
        publiczna, ale nie wykonująca zadań państwa nie miałaby takiej
        powinności. Proszę zauważyć, że ust. 3 posługujący się określeniem
        „wykonywania swoich zadań” albo pojęciem „wykonywania funkcji
        religijnych i organizacyjnych” był w drugiej wersji przedłożonej przez
        przedstawicieli prezydenta. Według mnie nie jest to zawę$1enie zakresu
        autonomii i niezależności kościołów i związków wyznaniowych, jeżeli po
        tym ustępie będzie przepis dotyczący współdziałania państwa z koś-
        ciołami w realizacji praw i potrzeb obywateli. Jeżeli mamy dobrą wolę
        rozwiązania tej kwestii, to nie proponujmy niejasnych i nieostrych
        określeń. Jeżeli już je proponujemy, to stwórzmy definicję, która
        znajdzie się w materiałach Komisji Konstytucyjnej, a potem Zgromadzenia
        Narodowego i będzie stanowiła wątłą podstawę interpretacyjną w znaczeniu
        kontekstu tworzenia tych przepisów. Co proponujący formułę „swoich
        zadań” rozumieją pod tym pojęciem?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Odpowiadając na wątpliwości posła R. Bugaja w sprawie wojska Ii np.
        występowania elementów przymusu zwracam uwagę, że dotyczy to władz
        publicznych, władz w wojsku. To one powinny reagować na elementy
        przymusu, jeśli takie występują i do niego nie dopuszczać. Poseł W.
        Cimoszewicz nawoływał przed chwilą do precyzji. Nie bardzo rozumiem, co
        można uznać za instytucję wykonującą zadania państwa poza władzami
        publicznymi. Nie jest to ostre określenie, lecz umowne. Wydaje mi się,
        że w ust. I „władze publiczne” załatwiają problem. Szukanie dodatkowych
        elementów jest przejawem pewnego przeczulenia.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jeżeli są nowe argumenty, to proszę je zgłaszać, a jeżeli nie, to
        spróbowałbym przedstawić spisane przeze mnie warianty, które zgłoszono w
        dyskusji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Propozycja posła W. Cimoszewicza, żeby posłużyć się określeniem
        „instytucje wykonujące zadania państwa” wzbudziła zastrzeżenia posła T.
        Mazowieckiego. Jako prawnik, nie tylko teoretyk, ale jako ten, który
        przez wiele lat parał się praktyką prawniczą chciałbym powiedzieć, że
        pojęcie „instytucji wykonujących zadania państwa” lub dodatkowe
        określenie „zadania zlecone przez państwo” czy „funkcje państwa zlecone”
        jest pojęciem ustawowym, doktrynalnym, znanym w naszym orzecznictwie
        sądowym, w tym w orzecznictwie Trybunału Konstytucyjnego. Oznacza to
        takie twory, które nie są częścią aparatu państwowego, np. różnego
        rodzaju organizacje Społeczne, którym państwo w drodze ustawy zleca
        pewne zadania, zazwyczaj ze swej natury należące do zadań państwa.
        Instytucje i organizacje wykonujące zlecone zadania posługują się
        formami prawnymi charakterystycznymi dla władzy państwowej. To są np.
        samorządy zawodowe, różne organizacje kombatanckie zastępujące państwo
        przy przyznawaniu lub stwierdzeniu uprawnień do Świadczeń wynikających z
        ustawy kombatanckiej. Nie można tego mylić z takimi tworami jak
        uniwersytet. Tu, że jakaś jednostka organizacyjna została ustanowiona
        przez państwo I jest przez nie finansowana nie oznacza jeszcze, że jest
        to instytucja wykonująca zadania zlecone przez państwo w takim
        znaczeniu, jak to się w prawie rozumie. To jest pierwsze moje
        wyjaśnienie w Sprawie terminologii. Pojawił się problem władzy w wojsku,
        gdzie neutralność tych władz powinna być zachowana lub widoczna. Posłużę
        się tekstem art. 35 małej konstytucji, w którym jest mowa, że prezydent
        ma uprawnienia w stosunku do określonych organów. Władzą w wojsku czy w
        stosunku do wojska jako całości jest minister obrony narodowej, szef
        Sztabu Generalnego Wojska Polskiego i jego zastępcy, dowódcy rodzajów
        sił zbrojnych oraz dowódcy okręgów. To są władze publiczne, które
        powinny zachować neutralność. Niepokoi niektórych dyskutantów formuła z
        ust. 3 mówiąca o tym, że kościoły i związki wyznaniowe są oddzielone od
        państwa. Trzeba to interpretować w ten sposób, że państwo nie jest
        równorzędne z Rzecząpospolitą Polską i państwo nie jest w tym znaczeniu,
        ale w rozumieniu aparatu państwowego lub organów władz publicznych.
        Rzeczpospolita nie — ——— naa oznacza tylko władzy państwowej, ponieważ
        jest to zorganizowane państwo obywatelskie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Mnie nie razi propozycja wykreślenia z przepisu instytucji publicznych,
        ale mam alternatywny projekt z użyciem tego określenia, chociaż —
        podkreślam — nic złego by się nie stało, gdyby skreślono instytucje
        publiczne. Jeżeli miałyby one pozostać, to rzecz można by ująć w
        następujący sposób: „Władze i instytucje publiczne działające w formach
        władczych...”. Druga możliwość: „Władze publiczne i instytucje
        posługujące się środkami władztwa publicznego”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jest to język niekomunikatywny dla szerszej publiczności.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Przeciwko tej propozycji protestowałbym, dlatego że działanie w sposób
        władczy czy przy pomocy aktów władczych jest tylko jedną z cech
        instytucji wykonujących zadania zlecone przez państwo. Do tego konieczny
        jest jeszcze inny element, a mianowicie upoważnienie ustawy, co oznacza
        zlecenie zadań przez ustawę. Jest to język zbyt doktrynalny.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Szczególnie jak na rozdział I konstytucji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Jeżeli mielibyśmy rozstrzygać, to chciałabym usłyszeć odpowiedź na
        pytanie: nad czym będziemy głosować, bo nie widzę tekstu jednolitego? Ta
        dyskusja nie wykazała różnic co do podstawowych założeń takich, jak
        neutralność Światopoglądowa państwa, równouprawniony status kościołów i
        związków wyznaniowych. Sądzę, że wariantem w najwyższym stopniu
        konsumującym generalne założenia jest wariant I podkomisji. Proponuję
        poddać ponownemu głosowaniu ten właśnie wariant.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        W głosowaniu możemy o wszystkim rozstrzygnąć, ale mieliśmy ambicję
        osiągnięcia konsensu, co jest trochę inną sprawą. Wydaje mi się, że
        jesteśmy bardzo bliscy porozumienia w następujących sprawach. Chodzi mi
        o tekst, który został przedstawiony jako uzgodniony między
        przedstawicielami kościołów. Jesteśmy bliscy konsensu co do podziału
        ust. 4 na dwa ustępy. Brzmiałyby one w sposób następujący: „Sytuację
        prawną Kościoła katolickiego określa ustawa oraz umowa mię- dzynarodowa
        ze Stolicą Apostolską ratyfikowana na podstawie upoważnienia wyrażonego
        w ustawie”. Ustęp drugi: „Sytuację prawną innych kościołów i związków
        wyznaniowych określają ustawy uchwalone po porozumieniu z ich właściwymi
        przedstawicielami”. Gdyby była zgoda, to ust. 4 mógłby być ujęty w
        postaci dwóch ustępów. Odniosłem wrażenie, że byliśmy bliscy
        porozumienia. Przedmiotem sporu był ust. 3, który koresponduje z
        dotychczasowym przepisem. Mamy dwie poten Posiedzenia podkomisji stałych
        Komisji Konstytucyjnej ZN cjalne możliwości. Pierwsza polega na
        przyjęciu formuły sugerowanej przez posła W. Cimoszewicza. Wtedy ust. 3
        brzmiałby w sposób następujący: ,„Władze publiczne i instytucje
        wykonujące zadania państwa w Rzeczypospolitej Polskiej zachowują
        neutralność w sprawach przekonań religijnych, Światopoglądowych i
        ideologicznych”. Dotychczasowy ust. 3 pozostałby bez zmian. Jeżeli
        zgodzimy się, że istnieje iunctim między ust. 1 i ust. 3, to
        proponowałbym następującą formułę: „Władze publiczne w Rzeczypospolitej
        Polskiej zachowują neutralność w sprawach przekonań religijnych,
        światopoglądowych i ideologicznych”. Skreślamy więc z tego przepisu
        instytucje. Ust. 3 proponowałbym w brzmieniu: „Kościoły i związki
        wyznaniowe są oddzielone od państwa i autonomiczne, niezależne w
        wykonywaniu swoich zadań religijnych. Poprzez wprowadzenie wyrazu
        „„religijnych” doprecyzowujemy przepis i stwarzamy skromną przeciwwagę w
        stosunku do decyzji usuwającej z przepisu instytucje. Jeżeli państwo
        zgodziliby się na taką propozycję, to moglibyśmy zmierzać w tym właśnie
        kierunku. Jeśli nie, to myślę, że tylko w drodze głosowania istnieje
        możliwość dokonania rozstrzygnięć.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Nie jestem przekonany co do potrzeby dodania instytucji wykonujących
        zadania państwa. Gotów jestem to przyjąć, ale uważam, że wprowadzamy
        nieprecyzyjne określenie. Nie jestem skłonny przyjąć w ust. 3 zamiany
        „swoich zadań” na „zadania religijne". Kto określa zadania religijne?
        Przez czterdzieści parę lat pod hasłem, że kościół ma być ograniczony
        wyłącznie do zadań religijnych spychano wszelkie wystąpienia kościelne w
        sprawach publicznych. Nie zamierzam prowadzić polemiki historycznej, ale
        uważam, że w takiej sytuacji trzeba bardzo precyzyjnie określić, co
        oznaczają zadania religijne. Czy katolicka nauka społeczna jest
        wykroczeniem poza zadania religijne? To już przeżywaliśmy. Dlatego
        skłonny jestem zgodzić się na formułę posła W. Cimoszewicza, aczkolwiek
        jest ona mało precyzyjna.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Chcę wyjaśnić, że było to nie w kontekście umniejszania zadań kościoła i
        zamykania go w funkcjach religijnych, tylko w kontekście autonomicznego
        i niezależnego wykonywania swoich zadań religijnych. Właśnie w takim
        kontekście pada określenie „religijnych, a nie w znaczeniu tego, co
        kościoły w ogóle mogą robić. Rozumiem, że możemy skłaniać się w kierunku
        formuły przedstawionej przez posła W. Cimoszewicza. Uważam, że jesteśmy
        już bardzo blisko przyjęcia całego artykułu. Formuła oddzielenia od
        państwa była uzgodniona z przedstawicielami kościołów.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Zgłaszam wątpliwość. Konstytucja, którą uchwalamy określa w art. l co to
        jest państwo. Państwo jest Rzecząpospolitą Polską. Jeśli tak, to możliwe
        jest oddzielenie Podkomisja podstaw ustroju politycznego... mma m a — —
        m M od organów państwa, czy od organów Rzeczypospolitej, a nie od
        Rzeczypospolitej, bo wydaje mi się to absurdalne.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        O ile wiem, to sprawa ta w rozdziale I została inaczej zapisana. Proszę
        o wnioski. Próbuję znaleźć konsens, a jeżeli go nie będzie, to trudno.
        Jeżeli są wnioski, to proszę je zgłosić. Przedstawiciel Kościoła Zborów
        Chrystusowych, ks. Henryk Sacewicz: Mam nadzieję, że nie ma o co kruszyć
        tutaj kopii, bo gdy mówimy o kościele lub o związku wyznaniowym, to nie
        mówimy o tłumie, tylko o władzach tegoż kościoła lub związku
        wyznaniowego. W taki sam sposób odnosimy się do państwa.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Na razie jesteśmy bliscy konsensu, jeżeli porozumienie nie zostanie
        zburzone w ostatnim momencie. Odczytam propozycję. „Ust. 1. Władze
        publiczne i instytucje wykonujące zadania państwa w Rzeczypospolitej
        Polskiej zachowują neutralność w sprawach przekonań religijnych,
        światopoglądowych i ideologicznych. Ust. 2. Kościoły I związki
        wyznaniowe są równouprawnione. Ust. 3. Sytuację prawną Kościoła
        katolickiego określa ustawa oraz umowa międzynarodowa ze Stolicą
        Apostolską ratyfikowana na podstawie upoważnienia wyrażonego w ustawie.
        Ust. 4. Sytuację prawną innych kościołów i związków wyznaniowych
        określają ustawy uchwalone po porozumieniu się z ich właściwymi
        przedstawicielami. Ust. 5. Kościoły i związki wyznaniowe są oddzielone
        od państwa i autonomiczne oraz niezależne w wykonywaniu swoich zadań.
        Ust. 6. W celu realizacji praw człowieka i potrzeb obywateli państwo
        współdziała z kościołami i związKami wyznaniowymi”. Wydaje mi się, że
        jesteśmy bliscy konsensu. Przedstawiciel Sekreatariatu Konferencji
        Episkopatu Polski, ks. prof. Józef Krukowski: Oponowałbym przeciwko
        wpisywaniu instytucji wykonujących zadania państwa. Wystarczy, że władze
        publiczne w Rzeczypospolitej...
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Przepraszam bardzo, ale w poprzednim tekście, który został nam
        rekomendowany jako uzgodniony przez przedstawicieli kościołów, napisano:
        „władze i instytucje publiczne”. Przedstawiciel Sekretariatu Konferencji
        Episkopa tu Polski, ks. prof. Józef Krukowski: Mam prawo do
        autopoprawki.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Rozumiem, że jest to zgłoszone w trybie autopoprawki. (22.02.1995 r. —
        14) 99 Przedstawiciel Sekretariatu Konferencji Episkopatu Polski, ks.
        prof. Józef Krukowski: „Kościoły i związki wyznaniowe oddzielone są od
        państwa oraz autonomiczne i niezależne w wykonywaniu swoich zadań”. Z
        natury rzeczy kościoły I związki wyznaniowe mają zadania religijne, więc
        byłaby to tautologia. Wykonują swoje zadania, prowadząc działalność
        charytatywną, naukową itp. Wiadomo, że zadania te były historycznie
        szeroko realizowane. W Polsce też tak są realizowane, mimo próby zawężeń
        w minionym okresie. Uważam, że taka próba zawężenia byłaby z poprzedniej
        epoki.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie użyłem określenia „zadań religijnych”. Przedstawiciel Sekretariatu
        Konferencji Episkopatu Polski, ks. prof. Józef Krukowski: Tak. Dziękuję
        bardzo. W takim razie pana popieram.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        W stosunku do pierwotnego zapisu zmieniłem tylko jeden element.
        Pierwotnie napisano: „Kościoły I związki wyznaniowe są oddzielone od
        państwa oraz korzystają... '. Wszystkie wnioski zmierzały do innego
        sformułowania redakcyjnego. „„Kościoły i związki wyznaniowe są
        oddzielone od państwa i autonomiczne oraz niezależne w wykonywaniu...
        Przedstawiciel Sekretariatu Konferencji Episkopatu Polski, ks. prof.
        Józef Krukowski: Stylistycznie jest to samo.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Rozumiem, że zastrzeżenie księdza profesora dotyczy tylko formuły: „I
        instytucje wykonujące zadania państwa”. Przedstawiciel Sekretariatu
        Konferencji Episkopatu Polski, ks. prof. Józef Krukowski: Co do metod
        regulacji stosunków w ujęciu posła R. Bugaja nie widzę zastrzeżeń, skoro
        wpisano na zasadzie równości form ustawy i umowę międzynarodową. W
        poprzednim ujęciu umowa była jak gdyby czymś dodatkowym, a ona
        oczywiście nie jest dodatkowym elementem, chociażby z punktu widzenia
        historii źródeł prawa. Byłbym za tym, żeby ust. 5 przesunąć na czwarte
        miejsce ze względów merytorycznych.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Co się uważa za wniosek czy projekt poprawki? Upierałbym się przy
        oddzieleniu od organów państwa, a nie od państwa.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jest teraz ten wniosek zgłoszony.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Ja to wyraziłem kilkadziesiąt minut temu. 100 m
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Uwagę przyjmuję z pokorą.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Naprawdę o tym już mówiłem.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jak brzmiałaby ta poprawka?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        ,,...oddzielone od organów państwa... .
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Prosiłbym o opinię panów profesorów. Jaka jest różnica między
        oddzieleniem od państwa, a oddzieleniem od organów państwa?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        W kwestii formalnej. Prosiłabym o sprecyzowanie, czy jesteśmy w fazie
        ustalania końcowej wersji artykułu, która będzie poddana pod głosowanie,
        czy w fazie dyskusji, czy w fazie wyboru jednego z wariantów? Prosiłabym
        o sprecyzowanie tego z powodów czasowych.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jestem w trudnej sytuacji. O godz. 11 wiele osób mówiło, że niesłychanie
        pożądane byłoby osiągnięcie w tej sprawie konsensu w podkomisji. Głównie
        mówił o tym poseł J. Jaskiernia. Nie mając do tego stosunku
        merytorycznego, przyjąłem to zadanie, które próbuję realizować, ponieważ
        wydawało mi się, że Komisja Konstytucyjna tego od nas oczekuje.
        Poszukuję możliwości przedstawienia formuły, która nie byłaby projektem
        przyjętym w drodze głosowania. Może okazać się to niemożliwe. Na razie
        nie chciałbym z tego rezygnować. Jeżeli pani
        <strong>poseł przedłoży wniosek formalny,</strong>
        to poddam go pod ocenę podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Składam wniosek formalny, aby przejść do fazy głosowania w momencie
        pojawienia się wypracowanego przez podkomisję projektu artykułu. Ze słów
        pana przewodniczącego zrozumiałam, że byliśmy bliscy konsensu. Kiedy pan
        przewodniczący udzielił głusu, to okazało się, że porozumienie się
        oddala. Każdy mówca wprowadza nowe elementy, co powoduje, że jesteśmy
        dalej, a nie bliżej wspólnego projektu. Wobec tego proszę o tekst, nad
        którym moglibyśmy pracować.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Sądzę, że sprawa nie jest całkowicie przegrana, ale jeśli pani poseł
        pozwoli, to za chwileczkę się przekonamy, po wyjaśnieniu poprawki
        przedstawionej przed chwilą przez senatora K. Kozłowskiego. Będziemy
        mogli ocenić, czy w tej sprawie jesteśmy zgodni, czy nie. Rozumiem, że
        jest uwaga krytyczna ze strony przedstawiciela Kościoła katolickiego,
        która została przedłożona jako autopoprawka do sformułowania: „i
        instytucje wykonujące zadania państwa”. Ta uwaga jest dyskusyjna i
        zobaczymy, czy w gronie człon Posiedzenia podkomisji stałych Komisji
        Konstytucyjnej ZN ków podkomisji ten sprzeciw się potwierdzi. Jeśli tak,
        to pozostanie nam tylko rozstrzygnięcie w trybie głosowania, co zresztą
        będzie mało realne, bo będziemy musieli wówczas wrócić do wszystkich
        innych wariantów tutaj przedstawionych. Prawdopodobnie Komisji
        Konstytucyjnej będziemy musieli wówczas przedstawić konkluzję, że nie
        osiągnęliśmy postawionego przed nami celu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Apeluję do przewodniczącego, żeby się nie poddawał. Wariant
        przedstawiony przez pana ze względu na zawarte w nim nowe pomysły
        niekoniecznie zbliża nas do konsensu. Myślę o dwóch elementach tej
        propozycji. Po pierwsze, o wytwarzanie związków pomiędzy róż.- nymi
        przepisami. W moim przekonaniu związków merytorycznych nie ma. Być może
        chodzi o rozumowanie w kategoriach przetargu, ale wówczas trzeba by
        powiedzieć, że jest to propozycja wynikająca z taktyki negocjacyjnej, a
        nie z argumentów merytorycznych. Nie są najszczęśliwsze propozycje
        dotyczące przesunięć redakcyjnych. Kolejność dyskutowanych ustępów ma
        swoją logikę. W ust. 3 proponuje się ogólną formułę relacji między
        państwem a kościołem oraz autonomii i niezależności kościołów w
        wykonywaniu tak czy inaczej określonych zadań, które muszą znajdować
        odzwierciedlenie m.in. w ustawach ustalających sytuację prawną. Dlatego
        ta formuła powinna poprzedzać przepis mówiący o sytuacji prawnej I nie
        należy tego zmieniać. Już wcześniej powiedzieliśmy sobie, że z istotnych
        względów warto ust. 5 przesunąć na czwartą pozycję, bo on dopełnia
        formułę oddzielenia, autonomii, niezależności i współpracy, rozumianą
        jako zasadę konstruującą relacje między kościołem i państwem. Dopiero na
        tym tle powstają inne regulacje prawne ustawowe lub umowne. Ostatnia
        uwaga. Większość osób, jeśli nie wszystkie, akceptuje ideę dwóch ustępów
        odnoszących się do prawnych źródeł regulacji sytuacji kościołów i
        wyznań, co nie oznacza, że wszyscy mają identyczny pogląd na treść tych
        ustępów. W moim przekonaniu najpierw powinien być ustęp odnoszący się do
        wszystkich kościołów i wyznań, a więc konstruujący zasadę ogólną.
        Chodziłoby o to, że sytuację prawną kościołów określają ustawy uchwalone
        po porozumieniu. Dopiero sytuacją szczególną, bo dotyczącą jednego
        kościoła jest umowa międzynarodowa, która powinna być umieszczona w
        drugim zdaniu tego samego ustępu, żeby pokazać łączność tego
        zagadnienia. Różnimy się między sobą w interpretacji użytego
        sformułowania. Forma orzekająca w interpretacji wielu osób, także mojej,
        jest niemal równoznaczna z nakazem zawarcia umowy międzynarodowej. Drugą
        jest formuła dopuszczająca umowę międzynarodową dla uregulowania tej
        kwestii. Obawiam się, że różnice zdań nadal występują.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie poddawałem się w poszukiwaniu konsensu aż do momentu tej wypowiedzi.
        Jeśli sprawa kolejności zdań jest tak zasadnicza, że jej nie możemy
        przesądzić, to z pewnością sobie nie poradzimy. Formuła, że sytuację
        prawną Kościoła katolickiego określają ustawy oraz umowa międzynarodowa,
        dopuszcza ewentualność nieuregulowania tych stosunków umową
        międzynarodową. Wówczas będą to regulowały ustawy i nie ma przymusu w
        tym przypadku. Gdyby użyty był zwrot: „tylko umowa międzynarodowa”, to
        taki przymus byłby implikowany. Były różne prawne interpretacje. Wydaje
        mi się, że istnieje możliwość zachowania formuły „oraz ”, która nie
        zburzy całej konstrukcji. Gdyby było inaczej, to byłbym otwarty na
        argumenty. Przed ostateczną rezygnacją z wysiłków chciałbym prosić
        naszych ekspertów o wypowiedź w sprawie wniosku senatora K.
        Kozłowskiego, który proponował użycie zwrotu „organy państwa. Jak
        moglibyśmy semantycznie interpretować to pojęcie? Co by ono zmieniało w
        stosunku do proponowanego przepisu?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Ciężki obowiązek zrzuca na mnie pan poseł.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie pierwszy raz.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Muszę powiedzieć, że nie podoba mi się formuła „władze państwowe”, czy
        „organy państwowe”. Przepis w wynegocjowanym ujęciu rozumiem w ten
        sposób, że chodzi o organy państwa lub instytucje działające w imieniu
        państwa. Chodzi tutaj o państwo nie tylko w znaczeniu piramidy urzędów,
        ale również o jego formy działania. Jest to coś więcej niż same organy
        władzy publicznej, czy organy władzy państwowej. Chodzi chyba także o
        ich działalność, ale na pewno nie o państwo rozumiane w socjologicznym
        ujęciu, jako wspólnota obywatelska. Od tego związki wyznaniowe
        oddzielone być nie mogą. Gdyby do tego przepisu wprowadzić władze
        publiczne czy władze państwowe zamiast państwa, to stworzy się dziwna
        nierównowaga. Nie wiadomo, czy kościoły i związki wyznaniowe ujmowane Są
        jako instytucje władzy kościelnej, czy też jako kongregacje wiernych.
        Rozumiałbym to jako kongregację wiernych, a państwo raczej jako jego
        organy oraz działalność tych organów. Na pewno nie chodzi tu 0 państwo
        jako wspólnotę obywatelską.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Potwierdzam, że chodzi tu o państwo w rozumieniu struktury politycznej,
        a nie socjologicznej. Jeśli to razi, to proponowałbym użycie tej samej
        formuły, którą zastosowano w ust. 1: „Kościoły i związki wyznaniowe są
        oddzielone od władz publicznych”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Czy ta formuła jest zachęcająca dla senatora K. Kozłowskiego” Jest pan
        właścicielem wniosku, więc jaka jest pańska konkluzja? Jeśli
        zastrzeżenia podniesione przez senatora K. Kozłowskiego i posła W.
        Cimoszewicza są podtrzymywane, to sądzę, że o godz. 15 powinniśmy
        powiedzieć, iż konsensu nie osiągnęliśmy i trzeba wrócić do normalnej
        procedury. Przestrzeń poszukiwań została już wyczerpana. My nie możemy
        dzisiaj rozstrzygać w drodze głosowania, bo nie możemy powiedzieć, że
        nie ma wniosków senatorów A. Grześkowiak i P. Andrzejewskiego, że nie ma
        wniosków posłów L. Moczulskiego i K. Kamińskiego. Będziemy musieli
        wrócić do rozpatrywania tego zagadnienia od początku.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Wycofuję swoją propozycję.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Mogę zrezygnować z jakiejkolwiek próby poszukiwania kompromisu, ale
        wówczas będę popierał wariant I zawarty w projekcie podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Panie pośle, pytam jeszcze raz: czy jest konsens w stosunku do tekstu
        sześcioustępowego? Możemy jeszcze zastanowić się nad kolejnością tych
        ustępów. Ponownie czytam tekst. „Ust. 1. Władze publiczne i instytucje
        wykonujące zadania państwa w Rzeczypospolitej Polskiej zachowują
        neutralność w sprawach przekonań religijnych, Światopoglądowych 1
        ideologicznych. Ust. 2. Kościoły I związki wyznaniowe są
        równouprawnione. Ust. 3. Kościoły i związki wyznaniowe są oddzielone od
        państwa i autonomiczne oraz niezależne w wykonywaniu swoich zadań. Ust.
        4. Sytuację prawną Kościoła katolickiego określają ustawy oraz umowa
        międzynarodowa ze Stolicą Apostolską ratyfikowana na podstawie
        upoważnienia wyrażonego w ustawie. Ust. 5. Sytuacja prawna innych
        kościołów i związków wyznaniowych jest określona w ustawie uchwalonej po
        porozumieniu się z ich właściwymi przedstawicielami. Ust. 6. W celu
        realizacji praw człowieka i potrzeb obywateli państwo współdziała z
        kościołami i związkami wyznaniowyrni . Jeśli nie byłoby poprawek, a
        tylko występowałby problem kolejności ustępów, to myślę, że mamy szansę
        na porozumienie. Jeżeli są poprawki, to sądzę, że konsensu na pewno nie
        osiągniemy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Poza pewnymi sprawami, które zarysowały się jako spome, pojawiają się
        nowe sformułowania. Nie wiem, czy są one przypadkowe. Czy uwagi do
        dodatkowych sformułowań będą miarą osiągnięcia kompromisu, czy nie? Na
        przykład w wersji teraz odczytanej w ust. 4 mowa jest o tym, że sytuację
        prawną kościołów i związków wyznaniowych określa ustawa. Dotychczas
        mówiliśmy, że tę sytuację określają ustawy. 102
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Chodzi o ustawy. Przepraszam, to było moje przejęzyczenie. Moją intencją
        było tylko podzielenie ust. 4 na dwa, bez wprowadzania żadnych zmian w
        stosunku do wersji przedłożonej przez przedstawicieli kościołów.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Na jedno pytanie nie uzyskałem jeszcze odpowiedzi. Czy proponujący
        użycie sformułowania „swoich zadań” w odniesieniu do kościołów 4
        związków wyznaniowych zechcieliby je jednoznacznie i precyzyjnie zde
        finiować?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jest to pytanie skierowane do przedstawicieli kościołów. Obawiam się, że
        odpowiedź na to pytanie nie może paść tak szybko. Poseł Włodzimierz
        Cimoszewicz (SLD): Ktoś jest autorem rozpatrywanej propozycji. Adresuję
        pytanie do pana przewodniczącego jako formułującego propozycję będącą
        przedmiotem ewentualnego konsensu. Co pan rozumie pod pojęciem „swoich
        zadań”? Po uzyskaniu odpowiedzi będziemy w stanie o czymś rozstrzygać.
        Nie rozumiem tego pojęcia.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Moim niefachowym umysłem rozumiem, że trzeba to czytać w kontekście
        uregulowań dotyczących sytuacji prawnej kościołów. W tych uregulowaniach
        znajdą się podstawowe elementy określające zadania, które kościoły
        realizują. Zakładam także, że ten problem będzie kształtował się m.in.
        poprzez orzecznictwo dotyczące wykładni konstytucji. W ten sposób utrze
        się pewna praktyka. Tak rozumiem to pojęcie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Mam również pytanie do wnioskodawców tekstu, który rzekomo jest tekstem
        uzgodnionym z przedstawicielami kościołów. Jeżeli tak bardzo
        wnioskodawcy obstają przy przepisie, aby autonomia i niezależność
        dotyczyły wykonywania zadań, a nie wykonywania funkcji religijnych i
        organizacyjnych, to czy należy domniemywać, że zadania wykraczają poza
        funkcje religijne i organizacyjne?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Oczywiście, że są pewne zadania społeczne. W tej sprawie mamy pewność,
        bo zadań społecznych nigdy nie kwestionowaliśmy, jak myślę. Osobiście
        miałem nadzieję, że niektóre zadania społeczne, charytatywne itp. będą
        pełnione szerzej. Przedstawiciel Sekretariatu Konferencji Episkopatu
        Polski, ks. prof. Józef Krukowski: Niewątpliwie zadania wynikają z
        natury tych społeczności. Uważam, że całkowicie prawdziwa jest opinia
        posła R. Bugaja, iż zadania te będą dokładnie sprecyzowane w ustawach i
        umowach, czyli w źródłach prawa. Ustawa o stosunku państwa do Kościoła
        katolickiego i ustawa o gwarancjach wolności sumienia i wyzna
        Posiedzenia podkomisji stałych Komisji Konstytucyjnej ZN nia
        doprecyzowują zadania kościołów. Jest ich cały katalog, który trudno w
        tej chwili powtarzać.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jeżeli ktoś bardzo chciałby zabrać głos, to go udzielę, ale teraz po raz
        ostatni chciałbym zapytać, czy mam prawo na plenarnym posiedzeniu
        Komisjii Konstytucyjnej przedstawić ten tekst z zaznaczeniem, że nie
        została uzgodniona kolejność ustępów? Jeżeli są zastrzeżenia do treści
        ustępów, to proszę je zgłosić. Wówczas nie będę miał prawa powiedzieć,
        że podkomisja esiągnęła konsens.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Zastrzeżenia są do trzech kwestii. Zastrzeżenie pierwsze dotyczy zadań,
        Uważam, że jest to zbyt szerokie określenie. Sprawa druga — występują
        dwa ustępy zamiast jednoustępowego przepisu dotyczącego sytuacji prawnej
        kościołów. Sprawa trzecia — użycie słowa „oraz” nie jest formą
        alternatywną.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Chciałbym zaproponować rozwiązanie, które może być przyjęte przez
        Komisję Konstytucyjną. Wydaje mi się, że możemy stwierdzić, iż w tym
        gronie istnieje zgoda niemal do całości przepisów. Komisja powinna
        rozstrzygnąć dwa problemy merytoryczne, a nie sformułowania. Czy zasada
        autonomii i niezależności kościołów i związków wyznaniowych ma być
        precyzowana przez określenie zadań, których dotyczy, czy ma się oprzeć
        na formule ogólnej? Na to pytanie łatwo uzyskać odpowiedź. Po drugie,
        czy umowa między państwem i Stolicą Apostolską powinna znaleźć się w
        formule sugerującej konieczność jej zawarcia, czy dopuszczalność
        zawarcia konkordatu?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Taki jest walor konsensu, że obejmuje on wszystkie elementy, nawet jeśli
        niektóre z nich nie są w sposób oczywisty doprecyzowane. Myślę, że z
        konsensem jest tak, jak z innymi rzeczami — albo on jest, albo go nie
        ma. Nie możemy mieć sytuacji przejściowej. Rozumiem, że w związku z
        zastrzeżeniami zgłoszonymi przez poseł K. Łybacką mogę Komisji
        Konstytucyjnej przedstawić tylko przebieg pracy, nie mogę natomiast
        powiedzieć, że osiągnęliśmy konsens w sprawie art. 15.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Chcę wrócić do propozycji posła W. Cimoszewicza. O dwóch kwestiach niech
        rozstrzygnie Komisja Konstytucyjna, bo w pozostałych jest konsens.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Pewnie moim błędem było to, że uległem perswazji przewodniczącego
        Komisji Konstytucyjnej w sprawie poszukiwania formuły kompromisowej.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Zgadzam się z panem przewodniczącym, że albo konsens jest, al Podkomisja
        podstaw ustroju politycznego... (22.02.1995 r. —- 14) 103 bo go nie ma.
        Państwo chcecie ten problem przenieść na ogólne zebranie Komisji, gdzie
        macie większość. Proszę bardzo. My to będziemy przenosić na referendum.
        Przed chwilą poseł K. Łybacka — która zabierała głos co chwila, ja
        czekałem cierpliwie — mówiła, że nie można tego uzgodnić. Proszę więc,
        przegłosujcie to państwo. Wykazaliśmy maksimum dobrej woli, przyjęliśmy
        zasadę neutralności władzy publicznej, przyjęliśmy zasadę oddzielenia ód
        organów państwa. Chcecie nie w ustawie, tylko w konstytucji precyzować,
        co to jest działalność religijna. Przeczytajcie sobie konstytucję
        soborową.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Myślę, że spróbowaliśmy zrobić to, co mogliśmy. Wracamy na posiedzenie
        plenarme Komisji Konstytucyjnej, bo musimy mieć chociaż kilka minut
        przerwy. Dziękuję bardzo za uczestnictwo. Zamykam posiedzenie.
      </p>
    </div>
  </div>
</div>
