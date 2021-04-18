<script>
  import { fly } from "svelte/transition";
  import Nav from "../../../../components/Nav.svelte";
  import Utterance from "../../../../components/Utterance.svelte";
  import { EventManager } from "mjolnir.js";
  import { onDestroy, onMount } from "svelte";
  import { goto, prefetch } from "@sapper/app";

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 700 && window.innerHeight <= 900;
  };
  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => {
    if (showDropdown) showDropdown = false;
    else goto("/komisja/14/podkomisja/2");
  };

  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/komisja/14/podkomisja");
  };

  onMount(() => {
    const protocol = window.document.getElementById("protocol");

    let arr = [...protocol.children];

    for (let nodeIdx in arr) {
      if (nodeIdx % 2 !== 0) {
        // odd idx utterances
        arr[nodeIdx].classList.add("justify-end"); // whole
        arr[nodeIdx].lastChild.classList.add("order-1"); // text
        arr[nodeIdx].firstChild.classList.add("order-2"); // img
        if (window.outerWidth > 640) {
          arr[nodeIdx].firstChild.classList.add("-ml-4"); // img
        }
      } else {
        // even idx utterances
        if (window.outerWidth > 640) {
          arr[nodeIdx].firstChild.classList.add("-mr-4"); // img
        }
      }
    }
    prefetch("/komisja/14/podkomisja");
    prefetch("/komisja/14/podkomisja/2");
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
  <title>Podkomisja cz. I - Biuletyn nr 14</title>
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<div class="flex justify-between pt-4 pb-8 mb-8 border-b">
  <div>
    <h1
      class="text-lg font-thin sm:text-xl lg:text-2xl xl:text-3xl"
      in:fly={{ x: -50, duration: 1000 }}
    >
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

  <div class="flex justify-between">
    <a rel="prefetch" href="/komisja/14/3">
      <svg
        class="w-5 h-5 ml-3 text-gray-900 fill-current sm:w-6"
        viewBox="0 0 20 20"
      >
        <path
          d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
          c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
          z"
        />
      </svg>
    </a>
    <a rel="prefetch" href="/komisja/14/podkomisja/2">
      <svg
        class="w-5 h-5 ml-3 text-gray-900 fill-current sm:w-6"
        viewBox="0 0 20 20"
      >
        <path
          d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
          c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"
        />
      </svg>
    </a>
  </div>
</div>

<div in:fly={{ y: 100, duration: 1000 }}>
  <div
    id="protocol"
    class="text-xs leading-relaxed text-justify sm:text-base md:text-md lg:text-lg xl:text-xl"
  >
    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Witam wszystkim przybyłych i otwieram posiedzenie podkomisji.
      Proponuję na wstępie powrócić do kwestii dotyczącej formuły
      równouprawnienia sektorów. Może uda nam się wypracować jakieś
      sformułowanie. Próbowałem intuicyjnie opracować propozycję, która szłaby w
      kierunku deklarowania zasady o niedyskryminacji i nieuprzywilejowaniu
      sektorów. Czy nie byłoby odpowiednie sformułowanie, że uprawnienia i
      obowiązki podmiotów gospodarczych są równe bez względu na ich
      przynależność do różnych sektorów własnościowych w gospodarce? Taka
      propozycja oznaczałaby, że można różnicować warunki funkcjonowania
      podmiotów gospodarczych, ale ze względu na inne cechy, jak np. ze względu
      na położenie terytorialne, przynależność branżową i wielkość. Otwierałoby
      to drogę do specyficznych uregulowań w rolnictwie. Może takie rozwiązanie
      dostarczyłoby satysfakcji wnioskodawcom punktu dotyczącego gospodarki
      rodzinnej. Prosiłbym państwa o skorzystanie z chwili czasu i wymienienie
      poglądów na ten temat. Szczególnie zwracam się do ekspertów. Czy możemy
      deklarować równość sektorów w odniesieniu do tego aspektu sprawy?"
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Mógłbym skomentować tylko propozycję przedstawioną przez pana
      przewodniczącego, jeżeli potrafimy zdecydować, co to jest sektor
      własnościowy. Zakaz uprzywilejowania i zakaz dyskryminacji mieści się w
      ogólnej formule równości. Niewątpliwie w konstytucji znajdzie się zasada
      równości, z której będzie można wydedukować odpowiednie konsekwencje dla
      różnych podmiotów gospodarczych."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Chcemy dopuścić nierówność podmiotów gospodarczych w pewnych
      aspektach. Z pewnością chcielibyśmy, żeby polityka gospodarcza stwarzała
      szczególnie przychylne warunki dla drobnych przedsiębiorstw."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Zasada równości dopuszcza preferencje dla najsłabszych. W
      orzecznictwie Trybunału Konstytucyjnego jest to bardzo wyraźnie
      eksponowane."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Pan profesor zakłada, że najmniejsze podmioty gospodarcze są
      najsłabsze. Niekoniecznie tak jest. Możemy chcieć preferować podmioty z
      innych ważnych powodów, np. ze wzęględu na regionalne bezrobocie. Czy
      eksperci skłaniają się do poglądu, że nie ma potrzeby podejmowania tego
      problemu?"
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Leszek Wiśniewski"
      imgPath="/images/kk-speakers/WisniewskiLeszek.png"
      text="Zasada równości obywateli rzutuje na zasadę równości wszystkich
      zrzeszeń obywateli, w tym także zrzeszeń gospodarczych. Nie potrzeba
      wymieniać zasady równości np. stowarzyszeń, partii, fundacji itd. Wynika
      to z generalnej zasady. Niepokoiły mnie preferencje dla gospodarstw
      rodzinnych. Mielibyśmy do czynienia z nierównością podmiotów
      gospodarczych, gdybyśmy chcieli szczególnie preferować rodzinne
      gospodarstwa chłopskie."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Piotr Winczorek"
      imgPath="/images/kk-speakers/WinczorekPiotr.png"
      text="Mamy problem form własności. Kodeks cywilny zniósł zróżnicowanie
      form własności i wszystkie traktowane są na równych zasadach. Istnieje
      jednak własność spółdzielcza czy własność komunalna, własność publiczna
      różnych podmiotów gospodarczych i własność prywatna. Dlatego przedstawiam
      następującą propozycję przepisu: „Podmioty gospodarcze, niezależnie od
      form własności, działają na równych zasadach prawnych”. Poseł Włodzimierz
      Cimoszewicz (SLD): Czy zasada równości rzeczywiście w pełni odnosi się do
      zagadnienia, o którym mówimy? Ona przede wszystkim odnosi się do praw
      ludzkich i obywatelskich. Nie mamy chyba wątpliwości, że do relacji
      państwo-kościół, o której będziemy mówili za chwilę, chcemy wpisać zasadę
      równouprawnienia. Byłoby to niepotrzebne, gdybyśmy tak szeroko rozumieli
      zasadę równości wpisaną do konstytucji. Mnie osobiście =p kn AE NAA
      Podkomisja podstaw ustroju politycznego... 77 odpowiada propozycja
      wprowadzenia zasady równości odnośnie do działalności gospodarczej i
      uważam, że powinniśmy poszukiwać odpowiedniego przepisu. Może powinniśmy
      pójść w kierunku sugerowanym przez prof. P. Winczorka, żeby ominąć
      kontrowersje, które były wczoraj sygnalizowane odnośnie do pojęcia
      „podmiot gospodarczy”. Można wprowadzić pojęcie każdego prowadzącego
      działalność gospodarczą. Uważam, że taki powinien być kierunek naszych
      poszukiwań."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Proponuję zawiesić w tej chwili ten wątek. Możemy przejść już do
      omó- wienia głównej sprawy, dla której się zebraliśmy, ponieważ nie
      powinniśmy absorbować licznych gości sprawą będącą przedmiotem ich
      mniejszego zainteresowania. Należy rozstrzygnąć pewien problem
      proceduralny. Chodzi o to, jaki posiadamy rodzaj mandatu. Podkomisja nasza
      przedstawiła cztery warianty, pracowała również podkomisja redakcyjna,
      która sporządziła tekst jednolity projektu konstytucji. Po wstępnej
      dyskusji na posiedzeniu Komisji Konstytucyjnej dramatycznie przyrosła
      liczba wariantów. Jak rozumiem, intencją przewodniczącego, który prosił o
      zebranie się podkomisji jest poszukiwanie kompromisu, co oznacza
      zredukowanie liczby wariantów. Kłopot wynika z faktu, że nie są w tej
      chwili obecni autorzy niektórych propozycji zgłoszonych na posiedzeniu
      Komisji. Mam całą listę wniosków, ale nie są obecni ich sygnatariusze. Na
      początku chciałbym się poradzić, jaki powinniśmy przyjąć tryb postępowania
      z tymi wnioskami. Uważam, że nie możemy ich ubezwłasnowolnić, możemy tylko
      wypracować i rekomendować Komisji jakieś warianty. Czy macie państwo w tej
      sprawie opinie?"
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="O jakich mówimy wariantach? Czy o tych, które mamy w projekcie
      jednolitym, czy o innych?"
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Mamy jeszcze wnioski poseł L. Błądek, poseł M. Kumatowskiej oraz
      senatora Orzechowskiego, prof. M. Pietrzaka i dra W. Kuleszy, którzy
      zgłosili wniosek w imieniu prezydenta, a także propozycje senator A.
      Grześkowiak, senatora P. Andrzejewskiego, posła L. Moczulskiego, posła T.
      Mazowieckiego, a także senatora S. Pastuszki, posła J. Wojciechowskiego i
      posła A. Bentkowskiego. Wpłynęła też propozycja posła P. Ikonowicza. Nie
      są to wnioski mniejszości, nie mają one takiego statusu, bo Komisja
      jeszcze nie głosowała nad tym przepisem, więc wnioski mniejszości nie
      mogły być zgłoszone. Proponuję przyznać podkomisji mandat dość szeroki i
      zobaczymy, co wyniknie na posiedzeniu Komisji po przedłożeniu
      sprawozdania."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Przedstawiłem projekt art. 15, który został zaakceptowany przez EAZA
      p a RT w NN, EO a w w O ATZ DAT p AT zr wszystkich obecnych
      przedstawicieli kościołów. Dlatego projekt ten jest bezprecedensowy,
      aczkolwiek nie twierdzę, że jest dla podkomisji decydujący. Jest on na
      pewno bardzo ważny, skoro zaprasza się na posiedzenia przedstawicieli
      wszystkich kościołów. Wydaje mi się, że odpowiada on wypowiadanym
      wcześniej zasadom. Mówię o neutralności władz publicznych,
      równouprawnieniu kościołów i związków wyznaniowych i wreszcie o wzajemnej
      autonomii i niezależności. Rozumiem, że w tej dyskusji toczy się spór o
      słowa. Poseł R. Bugaj przekonywał mnie swego czasu, że boi się tzw. szarej
      strefy, strefy nie uregulowanej. W moim przekonaniu jest to probłem
      demokratycznego obyczaju politycznego, który będzie się kształtował w
      naszym kraju, a nie problem uregulowania przepisem prawnym wszelkich
      niejasności w tym zakresie. Nie jest możliwe wykluczenie jednym przepisem
      wszelkich naruszeń niezależności. Powinniśmy zwracać uwagę na wzajemne
      uczulenia, na historyczne i aktualne znaczenie poszczególnych pojęć.
      Zwracam się o to, żeby nie upierać się przy tej wojnie słów i proponuję
      przyjąć projekt art. 15 w brzmieniu: „Ust. 1. Władze publiczne w
      Rzeczypospolitej Polskiej zachowują neutralność w sprawach przekonań
      religijnych, światopoglądowych i filozoficznych. Kościoły i związki
      wyznaniowe są równouprawnione. Ust. 2. Stosunki między państwem a
      kościołami i związkami wyznaniowymi są kształtowane na zasadach
      poszanowania wzajemnej autonomii i niezależności każdego w swoim zakresie,
      jak również współdziałania dla dobra wspólnego osoby ludzkiej. Ust. 3.
      Stosunki między państwem a Kościołem katolickim określa umowa
      międzynarodowa zawarta ze Stolicą Apostolską. Ust. 4. Stosunek państwa do
      innych kościołów oraz związków wyznaniowych określa ustawa uchwalona na
      podstawie umowy zawartej przez rząd z ich właściwymi przedstawicielami”.
      Boję się, że jest to sprawa, która przy innych sformułowaniach może stać
      się zasadniczym elementem referendum konstytucyjnego."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Spodziewałem się autopoprawki."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Jest ona w ust. 3: „Stosunki między państwem a Kościołem katolickim
      określa umowa międzynarodowa ze Stolicą Apostolską i ustawy”."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Czy oznacza to przymus zawarcia konkordatu? Przedstawiciel Polskiego
      Autokefalicznego Kościoła Prawosławnego, ks. bp Jeremiasz: Mam uwagę
      redakcyjną do ust. 4. Dobrze byłoby w tym ustępie zastosować liczbę mnogą
      do sformułowania „określają ustawy”. W przeciwnym razie może to być
      zrozumiane jako jedna ustawa dla wszystkich kościołów."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Trzeba zapytać się ekspertów, czy zachodzi takie niebezpieczeństwo."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Nie przesądzając własnego stosunku do tej propozycji chciałbym
      prosić o pewne wyjaśnienia. Jest sformułowanie, że stosunek państwa do
      innych kościołów określają ustawy uchwalone na podstawie umowy. Może jest
      to pytanie do ekspertów. Co to oznacza, że zawarcie umowy jest koniecznym
      warunkiem wydania ustawy? Byłoby to coś dziwnego, tym bardziej że mówimy o
      kościołach i związkach wyznaniowych. Małe związki wyznaniowe mogłyby swoją
      postawą uniemożliwić uregulowanie sposobu ich funkcjonowania. One mają być
      sędziami we własnej sprawie, co jest dziwne. Przedstawiciel Kościoła
      Zborów Chrystusowych, ks. Henryk Sacewicz: Chciałbym serdecznie
      podziękować posłowi T. Mazowieckiemu za podjęcie się autoryzacji tekstu,
      który został wypracowany w gronie siedzącym po tej stronie stołu. Celowo o
      tym przypominam, by poprosić podkomisję, żeby zechciała preferować tę
      wersję. Powstała ona bowiem w gronie tych, którzy są jak najbardziej
      zainteresowani omawianym przepisem. Nasze stanowiska prezentowane
      pojedynczo były różne, a w wielu wypadkach dość drastycznie odbiegały od
      przedstawionej teraz wersji. My potrafiliśmy się ze sobą porozumieć,
      potrafiliśmy znaleźć nadrzędny i priorytetowy cel oraz stworzyć taki
      przepis, który — w naszym odbiorze — jest jak najmniej kontrowersyjny. Po
      dodaniu w ust. 3 pojęcia ustawy i po sugestii ks. bpa Jeremiasza, by w
      ust. 4 ustawy byty określone w liczbie mnogiej, bardzo gorąco proszę
      podkomisję o przyjęcie dla dobra sprawy tej wersji, która byłaby
      przedstawiona całej Komisji Konstytucyjnej."
    />

    <Utterance
      speaker="Przedstawiciel Kościoła Adwentystów Dnia Siódmego, ks. prof.
      Zachariasz Łyko"
      imgPath="/images/kk-speakers/LykoZachariasz.png"
      text="Tekst, który mamy przed sobą jest uzgodniony w gronie przedstawicied
      kościołów. Było to wydarzenie dużej miary, o charakterze ekumenicznym. Tak
      się złożyło, że dokonano tego w czasie miesiąca ekumenicznego, co jest
      sympatycznym kontekstem tej sprawy. Chciałbym scharakteryzować
      przedstawioną propozycję. Jest ona optymalna, odpowiada nie tylko stronie
      kościelnej, bo co do tego nie ma żadnych wątpliwości, ale także
      orientacjom pozakościelnym, afideistycznym. Jest tutaj mowa o autonomii,
      co jest bardzo cennym stwierdzeniem, które odpowiada tendencjom wyrażanym
      przez różne koła. Na ten temat wypowiadał się Episkopat Polski i
      przedstawiciele innych kościołów. Kościoły mniejszościowe były bardzo
      zainteresowane zawarciem w tym artykule sformułowania o równouprawnieniu.
      Dlaczego? Dotychczas jest to zasada konstytucyjna, która występuje również
      w ustawie o gwarancjach wolności sumienia i wy Posiedzenia podkomisji
      stałych Komisji Konstytucyjnej ZN znania. Ma ona dla mniejszości
      wyznaniowych kapitalne znaczenie. Zasada ta potwierdza, że prawa, które
      otrzymuje największy kościół są identyczne z prawami mniejszości, mimo że
      kościół większości jest szczególnego rodzaju z uwagi na autorytet
      międzynarodowy i możność dokonywania regulacji przy pomocy umowy
      międzynarodowej, bo dysponuje podmiotowością prawa narodów. Zasada
      równouprawnienia modyfikuje to zagadnienie na polskim gruncie i jest
      wysoko ceniona przez mniejszości wyznaniowe, a także — jak się orientuję —
      przez Kościół katolicki. Znam na ten temat bardzo interesujące wypowiedzi
      Nuncjatury Apostolskiej w Warszawie. Te zagadnienia przedstawiałem jako
      ekspert w komisji sejmowej zajmującej się konkordatem. Ust. 2 mówi o
      autonomii, niezależności i współ- działaniu. Autonomia i niezależność to w
      istocie rzeczy jest rozdział kościoła i państwa, albo państwa i kościołów,
      tylko rozdział nie obciążony otoczką ideologiczną, polityczną,
      totalitarną, Jest to rozdział w ujęciu bardzo nowoczesnym, pozytywnym.
      Jeżeli to sformułowanie znalazłoby się w konstytucji, to byłaby ona
      wzorcową i modelową dla innych państw naszego regionu Świata. Z drugiej
      strony, z autonomią i niezależnośŚcią wią- żą się niebezpieczeństwa. Co to
      znaczy autonomia, co to znaczy niezależność? Ta kwestia na pozór może
      sprawiać problemy, tym bardziej że nie mamy do czynienia z dwoma
      terytoriami i z podwójną populacją. Jest jedno terytorium i ta sama
      populacja większości chrześcijańskiej, która jest reprezentowana przez
      największy kościół 1 mniejsze kościoły. Gdybyśmy tylko wprowadzili zasadę
      autonomii i niezależności bez bliższego jej określenia, to w pewnych
      kołach mogłyby powstać zastrzeżenia. Zostają one autornatycznie rozwiane,
      jeśli dodamy stwierdzenie: „Każdego w swoim zakresie”, czyli każdego w
      swojej domenie. Domeną kościoła nie jest polityka, a domeną państwa nie są
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
      jest to rozdział ujęty nowocześnie, pozytywnie, ze Ściśle określoną sferą
      tego rozdziału. Nie ma sfery ciemnej, czamej, bo sfera wspólnych zagadnień
      jest uregulowana przez ustawy, jak również układ międzynarodowy. Na tym
      polega sens regulacji prawnych, bo wytycza się linię demarkacyjną
      zagadnień wspólnych. Współdziałanie oznacza sepa Podkomisja podstaw
      ustroju politycznego... 79 rację pozytywną, separację kooperatywną. Jest
      tu autonomia i niezależność domeny pryncypiów działań i wreszcie
      współdziałanie dla dobra wspólnego osoby ludzkiej. Ust. 4 mówi, że
      stosunek państwa do innych kościołów oraz związków wyznaniowych określają
      ustawy uchwalone na podstawie umowy zawartej przez rząd z ich właściwymi
      przedstawicielami. Jest to instytucja nowa i nienowa. Nowa w tym
      znaczeniu, że większy jest jej zakres, a nienowa, bo prawo o szkolnictwie
      wyższym i ustawa o gwarancjach wolności sumienia i wyznania zna umowy
      między rządem a Episkopatem jak np. ustawa o stosunku państwa do Kościoła
      katolickiego. Znane są umowy między rządem a Episkopatem albo umowy między
      poszczególnymi resortami a kościołami. Chodzi np. o resort edukacji
      narodowej. Jest pewien zaczątek, ale ta umowa byłaby szersza, bo będzie
      dotyczyć całokształtu stosunków. Czy występuje precedens na arenie
      międzynarodowej? Takie praktyki występują w republice włoskiej. Po drugim
      konkordacie pierwsza regulacja prawna dotyczyła Kościoła Metodystycznego i
      Kościoła Waldensów. Była to umowa wewnętrzna zawarta między rządem a
      kościołem, ratyfikowana przez parlament. W gruncie rzeczy ta regulacja
      została dokonana w drodze ustawy, ale na podstawie umowy. Drugą była umowa
      między rządem a Kościołem Adwentystów Dnia Siódmego zawarta w 1986 r., a
      ratyfikowana przez parlament w 1989 r. Była to regulacja w drodze ustawy
      na podstawie umowy. Gdybyście państwo zwrócili uwagę na wyjaśnienia
      dotyczące tych zawiłości, to byłbym bardzo szczęśliwy. Mam serdeczną
      prośbę o poparcie i łaskawe uwzględnienie tego projektu także ze strony
      kościoła, który mam zaszczyt reprezentować."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Do dyskusji mam zapisanych pięciu mówców: posła W. Cimoszewicza, bpa
      Jeremiasza, senatora S$. Pastuszkę, siebie i ks. prof. J. Krukowskiego.
      Apelowałbym do ekspertów o wypowiedzi w sprawie skutków wynikających z
      użycia wyrazów: oddzielenie i autonomia. Czy jest tak, jak twierdził to
      przed chwilą mówca, że wyraz „autonomia jest równoznaczny z terminem
      „rozdzielenie”? Mam w tej sprawie wątpliwości. Gdybym ich nie miał, to bym
      się nie upierał przy określonym brzmieniu przepisu. Poseł Włodzimierz
      Cimoszewicz (SLD): Chciałbym zinterpretować stojące przed nami zadanie. W
      swoim czasie nasza podkomisja zakończyła prace I zaprezentowała Komisji
      Konstytucyjnej cztery warianty. Rozumiem, że oczekuje się od nas
      przedstawienia jednej propozycji albo też rozstrzygnięć w sprawie
      zgłoszonych nowych wniosków. Ciągle możliwe jest poszukiwanie nie tylko
      argumentów za jedną z propozycji i przeciw innym, ale także poszukiwanie
      rozwiązań o możliwie największym poparciu, które bazowałyby na
      propozycjach zawartych w poszczególnych wariantach. YE OZ PA GEE RE EA R.
      0 A EE Z y Bardzo ważne jest porozumienie osiągnięte przez przedstawicieli
      kościołów i związków wyznaniowych w sprawie formuły zaprezentowanej przez
      posła T. Mazowieckiego. Jest to fakt bardzo znaczący, ale nie może być on
      traktowany w ten sposób, że wiążąca się z tym propozycja swym charakterem
      wykracza poza pozostałe warianty. Poseł T. Mazowiecki ma rację
      przypominając cały czas, że konstytucja musi być zatwierdzona w
      referendum. Każdy przepis i każde rozwiązanie zawarte w konstytucji będzie
      miało swoje znaczenie z punktu widzenia uzyskania poparcia w referendum.
      Rozumiem, że poseł T. Mazowiecki niczego więcej w tej tezie nie zawarł,
      zwłaszcza gdy wygłaszana jest ona w kontekście rozstrzygnięcia zasad
      dotyczących stosunków państwo—koś- ciół. Chciałbym poszukiwać takiego
      rozwiązania, które mogłoby być zaakceptowane przez możliwie najbardziej
      znaczącą większość. W tym przepisie chcemy jednocześnie uregulować kilka
      kwestii. Poza jedną sprawą jesteśmy zgodni albo bliscy osiągnięcia
      porozumienia. W tym przepisie chcemy określić zasadę neutralności władzy
      publicznej czy to przez użycie sformułowania, że państwo jest neutralne
      światopoglądowo, czy też przez użycie pojęcia „władze publiczne”, czy też
      — jak w propozycji profesorów M. Pietrzaka, A. Rzeplińskiego i dra W.
      Kuleszy — sformułowanie, że „organy, instytucje państwowe oraz
      samorządowe” są neutralne w kwestiach Światopoglądowych, filozoficznych i
      religijnych. Chcemy określić formułę stosunków między państwem a
      kościołem, formułę oddzielenia, autonomii i niezależności. Chcemy także
      wpisać zasadę równości kościołów i związków wyznaniowych oraz określić
      podstawę prawnej regulacji stosunków między państwem i kościołami oraz
      związkami wyznaniowymi i wpisać zasadę współdziałania państwa z
      kościołami. Mam nadzieję, że nie ma żadnych wątpliwości co do zasady
      współdziałania państwa z kościołami. Jeśli chodzi o zasadę równości
      kościołów i związków wyznaniowych, to również nie ma żadnych wątpliwości.
      Formuła neutralności władzy publicznej jest — jak sądzę — niezbyt trudna
      do wynegocjowania. Osobiście byłbym gotów zaakceptować propozycję zawartą
      we wniosku prof. M. Pietrzaka, prof. A. Rzepliń- skiego i dra W. Kuleszy.
      Jest to coś mniej od zasady, że państwo jest neutralne w kwestiach
      światopoglądowych i coś więcej od tego, że organy władzy publicznej są
      neutralne. Wprowadzenie pojęcia instytucji państwowych idzie nieco dalej
      niż formuła władzy publicznej. Może w tym miejscu będzie można się
      spotkać. Takie rozwiązanie jest bardzo bliskie propozycji przedstawicieli
      kościołów, zgłoszonej przez posła T. Mazowieckiego. W drugim zdaniu można
      ją uzupełnić o zasadę równości kościołów i związków wyznaniowych. Nieco
      trudniejsza jest kwestia podstaw prawnych stosunków między państwem a
      kościołami i związkami wyznaniowymi. Osobiście opowiadałbym się za użyciem
      sformułowania z wariantu I podkomisji mówiącego o tym, że sytuację prawną
      kościołów i związków wyznaniowych określają na zasadach równouprawnienia
      ustawy uchwalone po porozumieniu się z ich właściwymi przedstawicielami
      lub umowa międzynarodowa ratyfikowana na podstawie upoważnienia zawartego
      w ustawie. Dlaczego opowiadam się za tym rozwiązaniem? Mam wątpliwości,
      czy do konstytucji powinniśmy wpisywać szczególną umowę między władzą
      publiczną a kościołami, nawet jeśli jesteśmy w stanie wskazać przykłady
      osiągnięcia tego typu porozumienia w przeszłości. Trzeba zwrócić uwagę na
      fakt, że taka umowa miałaby być podstawą do wydania ustawy. Jest to
      sformułowanie ograniczające uprawnienia parlamentu do stanowienia prawa.
      Nie sądzę, żeby istniały dostateczne argumenty przemawiające za takim
      uregulowaniem. Jednocześnie rozumiejąc poważny i uzasadniony 1nteres
      kościołów i związków wyznaniowych, który polega na tym, by wywierać wpływ
      na kształtowanie tych regulacji, wydaje mi się, iż właściwa jest formuła
      porozumienia. Z jednej strony nie ogranicza ona uprawnień parlamentu w
      sposób bezwzględny, a z drugiej -— daje gwarancje kościołom i związkom
      wyznaniowym, że owo porozumienie musi być osiągnięte przed uchwaleniem
      prawa. Za właściwą uważam również formułę „lub umowa międzynarodowa . W
      konstytucji powinna być stworzona możliwość zawarcia umowy
      międzynarodowej, ale jestem przekonany, że nie powinien pojawić się
      przepis nakazujący jej zawarcie. Jeżeli przyjęto by powyższe argumenty, to
      mielibyśmy rozstrzygnięty kolejny problem. Na koniec zostawiłem to, co
      jest najtrudniejsze, tzn. formułę oddzielenia i autonomii. Sugerowałbym
      poszukiwanie rozwiązania wyc hodzącego naprzeciw różnym problemom. Żeby
      nie upierać się przy czymkolwiek, co dotychczas proponowano, sięgnątbym do
      propozycji przedstawicieli Prezydenta RP, którzy w ust. 2 napisali:
      „Kościoły i związki wyznaniowe korzystają z autonomii przy wykonywaniu
      swych funkcji religijnych i organizacyjnych”. Chciałbym, żeby ta formuła
      była uzupełniona o trzy wyrazy i brzmiała: „Kościoły i związki wyznaniowe
      są Oddzielone od państwa i korzystają z autonomii przy wykonywaniu swych
      funkcji religijnych i organizacyjnych”. Formuła zaproponowana przez
      profesorów jest bardzo bliska propozycji posła T. Mazowieckiego. Mnie
      bardziej odpowiada wyraźne stwierdzenie, że autonomia odnosi się do
      funkcji religijnych i organizacyjnych niż określenie: „w swoim zakresie”.
      Jest to pojęcie nie do końca określone i zawsze mogą pojawić się problemy
      interpretacyjne, co to oznacza i kto jest upoważniony do interpretowania
      treści pojęcia: „w swoim zakresie”. Przyjmując tak niedookreślone pojęcie
      od razu wprowadzamy do konstytucji przepis mogący sprzyjać
      nieporozumieniom, jeśli pojawiłyby się problemy w stosunkach między
      państwem a jakimkolwiek z kościołów. Posiedzenia podkomisji stałych
      Komisji Konstytucyjnej ZN Zdaję sobie sprawę, że jest to najdelikatniejsza
      kwestia, ale to co proponuję gwarantuje z jednej strony kościołom i
      związkom wyznaniowym autonomię przy wykonywaniu funkcji religijnych i
      organizacyjnych, a z drugiej — przez wprowadzenie elementu, że kościoły i
      związki wyznaniowe są oddzielone od państwa wychodzi się naprzeciw tym,
      którzy są przekonani, że istotą państwa demokracji parlamentarnej jest
      oddzielenie instytucji państwowych od kościołów i związków wyznaniowych.
      Jest to jedno cześnie gwarancja równości praw i wolności obywatelskich.
      Przedstawiciel Polskiego Autokefalicznego Kościoła Prawosławnego, ks. bp
      Jeremiasz: Chciałbym podziękować posłowi T. Mazowieckiemu za zgłoszoną
      propozycję. Jesteśmy w tej komfortowej sytuacji, że nie musimy podejmować
      decyzji. Mam nadzieję, że zapadnie ona w tym duchu, może przy
      wykorzystaniu propozycji przedstawionej przez prof. M. Pietrzaka, prof. A.
      Rzeplińskiego i dra W. Kuleszę. Mój komentarz do projektu posła T.
      Mazowieckiego będzie dotyczył dwóch spraw. Uważam, że ta propozycja nie
      wynika z teoretycznych przesłanek, tylko z doświadczeń historycznych.
      Właśnie na tle doświadczeń historycznych jest to rewolucja. Jako
      prawosławny pamiętam, kiedy we Lwowie arcybiskup łaciński określał, kto ma
      być prawosławnym biskupem. W XVIII wieku polscy królowie często cofali
      uznanie dla prawosławnych duchownych ze względu na wywierany nacisk. /,
      własnego doświadczenia znam następującą sytuację. Musiałem deklarować, że
      jestem obywatelem państwa, ale nie mogę zgodzić się na ateizm. W latach
      siedemdziesiątych musiałem na tern temat napisać długi elaborat. Trzeba
      było się tłumaczyć, że film pokazany młodzieży był o pielgrzymce na
      Grabarkę i nie walczył z ateizmem. Jako wierzący musiałem powiedzieć, że
      zostanę wierzącym, mimo że oficjalna doktryna państwowa była inna. Istniał
      taki problem, który chwiał określonymi odcinkami życia kościelnego.
      Formuła o władzach publicznych zachowujących neutralność jest dla nas
      pełna treści. Pragniemy, żeby była podkreślona autonomia i niezależność.
      To pragnienie nie jest teoretyczne, tylko wynika z codzienności życia
      kościelnego mającego różne formy. Mógłbym przytaczać wiele innych
      przykładów z minionego okresu i z czasów historycznych. Druga uwaga
      dotyczy umowy. Sądzę, że można znaleźć kompromisowe rozwiązanie i
      stwierdzić jak w wariancie I, Że ,,..ustawy uchwalone po porozumieniu...
      Podkreślam, że nam zależy na porozumieniu czy konsultacji. Nie tak dawno,
      bo w maju 1989 r., Sejm chciał przyjąć ustawę o stosunku państwa do
      Kościoła katolickiego, na mocy której mój kościół straciłby 60 proc.
      cerkwi, ponieważ taka była możliwość interpretacji tej ustawy. Ówczesny
      kierownik Urzędu do Spraw Wyznań przyznał na posiedzeniu komisji
      obradującej pod przewodnictwem K. Barcikowskiego, że ustawa da możliwość
      składa Podkomisja podstaw ustroju politycznego... 81 nia odpowiednich
      wniosków sądowych. Zależy nam na tym, by mocno podkreślić, iż ustawa o
      stosunku państwa do danego kościoła nie może być narzucona. W konstytucji
      należy wyraźnie określić, że chodzi o porozumienie, a w jakiej ma to
      nastąpić formie, to już jest problem dla ekspertów."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Chciałbym podzielić się swoimi refleksjami. Rozumiem, że propozycja
      przepisu posła T. Mazowieckiego w pełni odpowiada wszystkim wyznaniom. Mam
      pewne wątpliwości dotyczące ust. 1. Prosiłbym o wypowiedź w tej materii
      ekspertów i przedstawicieli kościołów, bo być może błędnie interpretuję
      przepis, na który patrzę jako historyk przez tradycję okresu
      międzywojennego i wczesnych lat powojennych. Ust. 1 brzmi: „Władze
      publiczne w Rzeczypospolitej Polskiej zachowują neutralność w sprawach
      przekonań religijnych, Światopo glądowych i filozoficznych. Kościoły i
      związki wyznaniowe są równouprawnione”. Moje wątpliwości dotyczą
      pierwszego zdania. Jak wiemy, samorząd jest władzą publiczną, która od i
      stycznia 1996 r. obligatoryjnie przejmie szkoły podstawowe. Jednocześnie
      ustawa przewiduje możliwość tworzenia przez samorządy własnych szkół.
      Powieszenie krzyża jest — przynajmniej ja tak to interpretuję — wyrazem
      moich uczuć religijnych, przekonań filozoficznych itp. Stawiam pytanie:
      jeśli samorząd gminy zdecyduje, że należy powiesić w szkole krzyż, to czy
      będzie to zgodne z tym przepisem konstytucyjnym? Nie należy tego
      manifestować, gdyż w danej gminie nie wszyscy są ludźmi wierzącymi i
      praktykującymi. To jest jedna wątpliwość. Z autopsji wiem, że w jednej
      szkole prowadzi się naukę dwóch lub trzech wyznań religijnych. Ten przepis
      pięknie brzmi, idea jest wspaniała, ale obawiam się, żeby ten przepis nie
      był konfliktogenny. Chciałbym bronić wspólnej propozycji zgłoszonej przez
      posła J. Wojciechowskiego, posła A. Bentkowskiego i mnie. Wydaje mi się,
      że nasza propozycja zawiera idee, które są we wniosku posła T.
      Mazowieckiego."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Zwracam się do posła W. Cimoszewicza. Jeśli proponuje pan nową
      formułę, to proszę ją przedstawić na piśmie. Chciałbym bronić artykułu w
      wariancie I projektu przedstawionego przez podkomisję i zgłosić kilka
      uwag. Z całą pewnością jest tak, jak mówi to poseł T. Mazowiecki, że
      niesłychanie ważną sprawą przy przyjmowaniu określonej formuły powinien
      być kontekst świadomości społecznej i aspiracji społeczeństwa w tym
      zakresie. Ta formuła jest przedmiotem sporu. Mamy dzisiaj obecnych gości
      reprezentujących różne kościoły. Poprzednio w pracach podkomisji
      uczestniczyli przedstawiciele stowarzyszeń I ruchów, które za cel stawiają
      sobie zabieganie o ortodoksyjnie laicką formę państwa 1 ortodoksyjne,
      twarde rozdzielenie kościoła od państwa. Dzisiaj ich O z A WWO z różnych
      powodów organizacyjnych nie ma. Uważam, że musimy pamiętać, 1ż taki punkt
      widzenia jest także reprezentowany. Z najświeższych sondaży wynika, że 70
      proc. obywateli wyraża pogląd, iż rola kościołów w życiu publicznym jest
      raczej za duża niż za mała. Jest to także pewien wskaźnik Świadomości
      społecznej i ocen, który powinien być wzięty pod uwagę w kontekście
      referendum nad konstytucją, bo z pewnością się ono odbędzie. Tyle tytułem
      tła. Sądzę, że formuła przyjęta w art. 15, w wersji podkomisji jest dość
      daleko idącym kompromisem, ignorującym punkt widzenia Środowisk i
      ugrupowań zabiegających o bardzo rygorystyczny rozdział kościoła od
      państwa. Sama zasada akceptująca konkordat na pewno odrzuca rygorystyczną
      koncepcję rozdziału kościoła od państwa i stawia wielki problem
      równouprawnienia kościołów. W wariancie posła T. Mazowieckiego został on
      przezwyciężony w sposób, o którym powiem za chwilę. Sam zgłaszałem
      akceptację dla zasady konkordatu. Oznacza to, że jest pewna grupa
      obywateli Rzeczypospolitej, której interesy rozumiane tutaj jako interesy
      osób wierzących i członków jednego z kościołów są zabezpieczone nieco
      lepiej niż interesy innych. Pojawia się zawsze przy tym delikatny problem
      równości. Został on przezwyciężony w wersji przedstawionej przez posła T.
      Mazowieckiego poprzez zasadę zastąpienia jak gdyby Stolicy Apostolskiej
      przez reprezentację kościołów mniejszościowych w Polsce — nie jest to z
      pewnością określenie obraźliwe — w bezpośredniej relacji do władzy. Chodzi
      o relację negocjacyjną przed uregulowaniem ustawowym. Mogłoby się to
      zmienić, gdyby ta formuła znalazła się w wariancie podkornisii, gdzie się
      o tym mówi, ale przy zapisaniu zasady: ,„po porozumieniu”. W wariancie
      posła T. Mazowieckiego porozumienie jest warunkiem — jak rozumiem —
      wydania aktu ustawowego, co jest zupełnie odmienną sytuacją o daleko
      idących implikacjach. W wariancie I podkomisji zawarliśmy szeroką tormułę
      współdziałania kościołów i związków wyznaniowych z państwem w realizacji
      praw i potrzeb obywateli. Jest to formuła szeroka, ignorująca stanowisko
      środowisk domagających się rygorystycznego rozdziału. W tej sprawie
      poszliśmy bardzo daleko. Kluczowe pytanie dotyczy wyboru między rozdziałem
      a autonomią. Mnie pojęcie „rozdział” i „autonomia” kojarzy się z innym
      stanem prawnym. Pojęcie „autonomia kojarzy mi się z tym wszystkim, co w
      potocznym języku oznacza niepełną niezależność obu instytucji. Przeciętny
      obywatel pojmuje to przez pryzmat opozycji autonomii do suwerenności.
      Autonomia daje pewne prawa do niezależnego działania, ale nie wszystkie. W
      tym sensie ta formuła podtrzymuje w stosunkach między państwem i kościołem
      coś, co określam jako „szarą strefę , która będzie przedmiotem — jak
      słusznie mówił poseł T. Mazowiecki — zwyczaju, ale także pewnego
      konfliktu, być może nawet bardzo ostrego. Jeżeli deklarujemy oddzielenie i
      zaraz dalej współudział, to sądzę, Że deklarujemy formułę gwarantującą
      najmniejszą potencjalną dawkę konfliktów, jakie mogłyby się tutaj pojawić.
      Bardzo mi zależy na wypowiedziach ekspertów na ten temat. Nie pamiętam,
      czy w poprawce do wariantu posła T. Mazowieckiego w ust. 3 ma być
      określenie „lub ustawy” czy „i ustawy”. To oznacza także swego rodzaju
      przymus podpisania konkordatu. Jeżeli napisano „lub”, to dopuszcza się
      możliwość jego podpisania. Jeżeli jest „i”, to zakłada się, że takie
      uregulowanie musi istnieć, bo konstytucja obliguje do zawarcia umowy. To
      są niuanse prawne, więc bardzo bym prosił o wyjaśnienia. Zachęcam
      ekspertów do wyjaśnienia sensu i tradycji tych wyrazów w języku
      konstytucyjnym. Przedstawiciel Sekretariatu Konferencji Episkopatu Polski,
      ks. prof. Józef Krukowski: Niewątpliwie stosunki kościół-państwo zakładają
      z góry istnienie dwóch typów społeczności. Jedną jest społeczność
      polityczno-państwowa, a drugą — kościół. Używam nazwy zbiorczej, bo
      praktycznie istnieje pluralizm religijny, a więc nie jeden kościół. W
      czasie debaty nad konstytucją i konkordatem zaistniało nieporozumienie
      wynikające z niezrozumienia wielu spraw. Między Kościołem katolickim a
      kościołami mniejszościowymi był reżyserowany konflikt. Konflikt ten był
      sztuczny, ponieważ Kościół katolicki jako niewątpliwie kościół
      większościowy nie chce żadnych przywilejów. Dobrze się stało, że
      przedstawiciele kościołów biorących udział w obradach wypracowali pojemną
      formułę, która uwzględnia pozytywne elementy zawarte we wszystkich
      zgłoszonych wartantach, od pierwszego do ostatniego. Chodziło o
      doprecyzowanie pojęć, bo z powodu niedoprecyzowania w stosowaniu danego
      aktu, w tym wypadku konstytucji, powstają wątpliwości, które nigdy nie
      zostaną całkowicie wyeliminowane. Możemy temu przynajmniej zapobiec.
      Dlatego to, co wypracowaliśmy odpowiada wymogom państwa demokratycznego,
      które uwzględnia opinie i stanowiska różnych grup społecznych. W tym
      wypadku chodziło o stanowisko grup społecznych, jakimi są wykazujące
      żywotność kościoły. Dlatego też uwzględnienie naszej opinii przez
      parlamentarzystów byłoby znakiem poszanowania zasad demokracji w wymiarze
      społecznym. W celu doprecyzowania przepisów chciałbym odnieść się do
      wątpliwości zgłoszonej przez senatora S. Pastuszkę. Uważam, że nasza
      propozycja zapobiega tego rodzaju nieporozumieniom, ponieważ jest
      powiedziane, że władze publiczne szanują przekonania. Czyje? Przekonania
      obywateli. O tym, czy będzie nauka religii w szkole, czy znak religijny
      będzie zamieszczony w obiekcie publicznym, w tym wypadku w szkole,
      decydują korzystający z tego obiektu, czyli rodzice w imieniu swoich
      dzieci. Jeżeli przyjmiemy zasadę poszanowania wolności religijnej jako
      prawa przynależnego człowiekowi, jeżeli przyjmiemy pry Posiedzenia
      podkomisji stałych Komisji Konstytucyjnej ZN mat poszanowania wolności,
      najpierw w wymiarze indywidualnym, przysługującej każdemu człowiekowi, w
      tym wypadku rodzicom, to takie niebezpieczeństwo zostanie wyeliminowane. W
      dyskusji pojawiła się kwestia metody regulacji stosunków między państwem i
      kościołem. Czy ma to być konwencja międzynarodowa, czy ustawa, czy inne
      porozumienie? Żeby to wszystko zrozumieć, to trzeba wziąć pod uwagę fakt,
      iż w pierwszej kolejności chodzi nam o to, by sytuacja prawna, czyli
      zakres gwarancji wolnościowych przysługujących człowiekowi jako
      obywatelowi i wspólnotom religijnym, była możliwie identyczna. Chodzi o
      to, żeby nie było różnic w sytuacji prawnej między Kościołem katolickim a
      innymi wspólnotami religijnymi, kościołami i związkami wyznaniowymi. Tego
      nie można utożsamiać z metodą regulacji wzajemnych stosunków. Metoda ta
      wynika ze zdolności prawnej każdego podmiotu. Istnieją różnice co do tej
      zdolności, ponieważ Kościół katolicki w ciągu wieków uzyskał osobowość
      publicznoprawną i może regulować stosunki z państwem w drodze umowy
      międzynarodowej. Inne kościoły i związki wyznaniowe takiej możliwości nie
      posiadają. Nie jest to wina Kościoła katolickiego ant państwa, jest to
      zasada, którą cywilizowane państwo polskie powinno respektować. Uważam, że
      jest to nakaz historyczny, a nie tylko doraźna wola polityczna. Wydaje mi
      się, że tu jest źródło nieporozumienia. Dlatego uważam, że gwarancje,
      które zostają wpisane do umowy powinny być rozszerzone na inne kościoły i
      związki wyznaniowe, żeby nie było różnic i nierówności. To chcieliśmy
      uwzględnić w propozycji, którą przedstawił poseł T. Mazowiecki. Chodziło
      nam o to, żeby zapobiec tego rodzaju nieporozumieniom w przyszłości.
      Uważam, że w samym przepisie wyraz „Jlub” jest zbędny. Lepszy jest spójnik
      „i”, ponieważ umowa międzynarodowa ze Stolicą Apostolską, jak każda inna
      umowa i ustawa, to nie są Źródła rozłączne, przeciwstawne, tylko się
      uzupełniające. Konwencja staje się źródłem prawa w drodze transformacji w
      prawo ustawowe krajowe, Używanie „Jub” zamiast „1” byłoby niezręczne i
      logicznie niepoprawne. Lepszy jest spójnik „1 również z tego powodu, że w
      drodze konwencji nie uregulujemy wszystkiego. Ustawy regulują szerszy
      zakres spraw niż konwencja. Można byłoby rozwijać jeszcze wiele wątków.
      Mnie się wydaje, że zostały one wpisane do wariantu zgłoszonego przez
      posła T. Mazowieckiego. Elementy te uwzględniają zgłoszone uwagi i są dość
      pojemne. Uwzględniają one możliwości regulacji stosunków z innymi
      kościołami w drodze umowy. Jaka będzie to umowa? Nie będzie ona
      międzynarodowa, tylko krajowa. Sama z siebie nie jest źródłem prawa, tylko
      z chwilą ratyfikacji, ponieważ taka umowa nie jest wpisana do Źródeł
      prawa. Jest ona oznaką poszanowania autonomii. Powiedziano, że staje się
      źródłem prawa dopiero na podstawie ratyfikacji przez Sejm. Zarówno w
      wypadku umowy ze Stolicą Apostolską, jak i z przedstawicielami
      poszczególnych kośPodkomisja podstaw ustroju politycznego... 83 ciołów nie
      jest naruszona zasada suwerenności parlamentu czy państwa. W każdym
      konkretnym przypadku parlament dokonując ratyfikacji, korzysta w pełni ze
      swojej suwerenności. Przepis konstytucyjny tego nie narusza, tylko ustala,
      że właściwy sposób regulacji stosunków między państwem i Kościołem
      katolickim następuje w drodze umowy międzynarodowej. Niczego nie narzuca,
      nie stwarza przymusu, tylko uznaje istnienie takiego Środka wzajemnej
      regulacji stosunków. W Polsce jest on może więcej niż możliwy, bo
      właściwy. Wyraz „nadto”, jak niektórzy sugerują, nie jest odpowiedni, bo
      wskazywałby, że umowa jest źródłem prawa niższego rzędu od ustawy. Takich
      nieporozumień nie należałoby wprowadzać do konstytucji."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Otrzymaliście państwo propozycję posła W. Cimoszewicza, proszę więc
      o zapoznanie się z nią. Proszę posła T. Mazowieckiego, żeby dopracował
      ostatecznie swój wariant, bo w pewnym momencie będziemy musieli przejść do
      podjęcia decyzji. Inaczej nie wywiążemy się z nałożonego zadania. Nie
      wiem, czy <strong>poseł TI. Mazowiecki chciałby</strong> zmienić formułę:
      „na podstawie umowy zawartej przez rząd z ich właściwymi
      przedstawicielami” na sformułowanie: „po porozumieniu”. Byłaby to bardzo
      istotna różnica. Chciałbym, by wariant ten był dokładnie sprecyzowany,
      żebyśmy wiedzieli, do czego się odnosimy."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Chciałabym podzielić się swoimi wątpliwościami odnośnie do
      niektórych propozycji. Podzielam przede wszystkim wątpliwości posła W.
      Cimoszewicza odnośnie do tego, czy do konstytucji powinniśmy wpisać
      konkordat jako odrębną umowę, zwłaszcza że przyjęliśmy już art. 9, który
      stanowi: „Rzeczpospolita Polska przestrzega wiążącego Ją prawa
      międzynarodowego”. W związKU z tym prosiłabym ekspertów o opinię na ten
      temat. O opinię prosiłabym również przedstawiciela rządu, prof. S.
      Gebethnera oraz prof. H. Groszyka, długoletniego sędziego Trybunału
      Konstytucyjnego. Czy art. 9 nie konsumuje tej problematyki? Wątpliwości
      rodzą się również z tego powodu, że propozycja wpisania konkordatu do
      konstytucji stanowi, że ta umowa ma regulować stosunki między państwem a
      Kościołem katolickim. Jeżeli przyjmiemy takie określenie, to czy konkordat
      w wersji znajdującej się obecnie w Sejmie będzie można ratyfikować,
      ponieważ, jak wiemy, ten konkordat, w odróżnieniu od umowy obowiązującej w
      okresie międzywojennym, reguluje nie tylko stosunki państwo-kościół, ale
      również problematykę praw i wolności, jak chociażby problem zawierania
      małżeństw, na co nie pozwolono sobie nawet w okresie międzywojennym. Nie
      stwierdziłabym, jak to ksiądz profesor powiedział, że sytuacja wokół
      konkordatu jest konfliktowa. Ona nie jest konfliktowa, tylko musimy
      wyjaśnić wszystkie wątpliwości. Konstytucję stanowimy nie tylko dla części
      katolickiej społeczeństwa, ale dla całego społeczeństwa, dla przyszłych
      pokoleń. W sposób bardzo poważny i odpowiedzialny powinniśmy podejść do
      tych problemów. Nie będę omawiała wszystkich kwestii wiążących się z
      konkordatem. W jednej z audycji radiowych zadano mi pytanie: czy po
      ratyfikacji konkordatu, jeżeli ktoś zawrze małżeństwo w trybie z niego
      wynikającym, będzie mógł w przyszłości ubiegać się o rozwód? Konkordat
      mówi, że małżeństwo zawiera się w kościele. Ksiądz w terminie kilkudniowym
      zawiadamia urząd stanu cywilnego o zawarciu małżeństwa. Z kolei urząd
      wpisuje to małżeństwo do rejestru. Uważam, że małżeństwo nie zawarte w
      trybie cywilnym nie może być rozwiązane. Czym innym jest zawiadomienie o
      zawarciu małżeństwa, a czym innym jest zawarcie małżeństwa w urzędzie
      stanu cywilnego. Nasuwać się będą inne poważne problemy. Nie unikajmy
      trudnych tematów, lecz zwróćmy się do naszych ekspertów o pomoc. Nad
      konstytucją się jeszcze pracuje. Proszę odpowiedzieć, czy przyjęty art. 9
      nie konsumuje tego problemu. Jeżeli wpiszemy autonomię, nie określając jej
      zakresu w konstytucji, to pojawią się konflikty o ten zakres w praktyce.
      Musimy w wyważony sposób podejść do tego zagadnienia. Jeżeli zdecydujemy
      się na wpisanie autonomii, to czy nie należałoby zapisać, że ma ona być
      tylko przy wykonywaniu przez kościoły swych funkcji religijnych. Różne
      mogą być dylematy. Problematyka dotycząca stosunków państwo-kościoł ma być
      uregulowana w rozdziale o zasadach naczelnych. Zaproponowaliśmy więc
      uregulowanie tego problemu w sposób bardzo zwięzły. W imieniu
      wnioskodawców podtrzymuję następującą propożzy - cję: „Ust. 1.
      Rzeczpospolita Polska jest państwem neutralnym światopoglądowo”. Wydaje mi
      się, że tutaj nie trzeba pisać, jakie organy władzy i administracji mają
      być neutralne, bo państwo jest neutralne. „Ust. 2. Stosunki między
      państwem a kościołami oparte są na zasadzie niezależności i wzajemnego
      poszanowania”. Z tego wynika równoprawne traktowanie wszystkich kościołów,
      jak również niezależność kościołów przy wykonywaniu swych funkcji,
      wzajemne poszanowanie w stosunkach państwo-kościół. Ta propozycja wychodzi
      naprzeciw właściwemu uregulowaniu omawianej problematyki, tym bardziej że
      uzgodniliśmy już, iż w tym rozdziale będą tylko zasady ustrojowe."
    />

    <Utterance
      speaker="Poseł Wojciech Borowik (UP)"
      imgPath="/images/kk-speakers/BorowikWojciech.png"
      text="Na wstępie chciałbym powiedzieć, że najbardziej odpowiadają mi
      przepisy w wariancie I art. 15 projektu konstytucji i propozycja posła W.
      Cimoszewicza. Uważam, że są to najzgrabniejsze propozycje. Naszym
      ekspertom chciałbym zadać kilka pytań dotyczących propozycji
      przygotowanych przez posła T. Mazowieckiego. Mając na uwadze różne
      doświadczenia, które mieliśmy O R z ŻY = YE 0 z W z W z 0 z prawem w
      ostatnim czasie warto uzyskać jednoznaczne odpowiedzi co do pewnych
      faktów, które będą wynikały z przepisów art. 15 ust. 3. Chodzi mi o
      przymus zawarcia konkordatu. Jeżeli przepis zostanie sformułowany w ten
      sposób, jak to proponuje poseł T. Mazowiecki, to czy w momencie
      nieratyfikowania konkordatu Sejm złamie konstytucję, czy nie? Czy wynika z
      tego przepisu przymus ratyfikacji, czy nie? Jeżeli nie wynika, to jaki
      stan prawny będzie obowiązywał Kościół katolicki? Jaka może być
      interpretacja tego konkretnego przepisu? Czy w związku z takim
      sformułowaniem Stolica Apostolska może wypowiedzieć konkordat? Jakie to
      rodzić będzie skutki prawne dla Kościoła katolickiego w Polsce? Czy w
      związku z tym konstytucyjnym przepisem państwo polskie będzie
      ubezwłasnowolnione w sprawie wypowiedzenia konkordatu? Chciałbym uzyskać
      na te pytania konkretne odpo wiedzi, bo sądzę, że będą ore rzutowały na
      naszą ocenę przedstawionej propozycji."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Piotr Winczorek"
      imgPath="/images/kk-speakers/WinczorekPiotr.png"
      text="Zadano całą masę pytań. Mam nadzieję, że moi koledzy przyłączą się
      do próby udzielenia na nie odpowiedzi. Jest to problem bardziej
      polityczno-filozoficzno-wyznaniowy niż prawny. Zabieranie głosu w tej
      materii przychodzi mi z pewną trudnością, ponieważ uniemożliwia zachowanie
      neutralności Światopoglądowej. Próbując odpowiedzieć na pytania chciałbym
      odnieść się do problemu autonomii i niezależności w ujęciu art. 15
      zredagowanego przez posła T. Mazowieckiego, z udziałem przedstawicieli
      kościołów. W moim przekonaniu trzeba ten przepis czytać łącznie. Nie jest
      to tylko autonomia albo tylko niezależność. Te dwa pojęcia połączone są
      spójnikiem „1”, stanowią pewną całość. Jest to bliskie temu, co w innych
      konstytucjach określane było systemem rozdziału. Niezależność czy rozdział
      sprowadza się do tego, że każda z tych struktur jest autonomiczna i
      niezależna. Na gruncie języka prawnego autonomia znaczy tyle, co prawo do
      stanowienia norm na własny użytek. Jeżeli przyjmie się, że związki
      wyznaniowe rządzą się własnym prawem dotyczącym stosunków wewnątrz
      struktury organizacyjnej, to wszystko jest w porządku i tego nikt nie
      zaneguje. Nikt nie odbiera Kościołowi katolickiemu prawa do rządzenia się
      przepisami ujętymi w Kodeks prawa kanonicznego. Nikt nie neguje, by
      związki wyznaniowe rządziły się statutami lub innymi aktami
      wewnątrzorganizacyjnego porządku normatywnego. Z.gadzam się z postem W.
      Cimoszewiczem w sprawie interpretacji tego, co oznacza wyraz „zakres” w
      sformułowaniu: „każdego w swoim zakresie”. Czy to chodzi tylko o problemy
      religijne, czy jakieś inne? Niewątpliwie chodzi o kwestie religijne, bo są
      to podmioty mające za zadanie pełnienie misji religijnej, ale i
      organizacyjne do tego stopnia, do jakiego są one tworami organizacyjnymi.
      Można to ująć szerzej w znaczeniu funkcji religijnych i organizacyj
      Posiedzenia podkomisji stałych Komisji Konstytucyjnej ZN nych. To
      zagadnienie ujęte jest jednym słowem i tak je rozumiem, a nie w ten
      sposób, że przez regulację autonomiczną wchodzi się na pole zajęte przez
      działanie ustawodawcze państwa. Problem może się pojawić w sprawie
      interpretacji kwestii, czy pojęcie autonomii i niezależności odnosi się
      oddzielnie do państwa jako tworu organizacyjnego i oddzielnie do
      kościołów. Moim zdaniem — nie, bo gdyby pójść w tym kierunku to można by
      sądzić, że państwo polskie nie jest ani suwerenne, ani niepodległe, tylko
      autonomiczne i niezależne. Byłby to absurdalny wniosek w Świetle innych
      przepisów tej samej konstytucji. Tego czytać w ten sposób nie należy. Ja
      tak widzę te problemy i dlatego się zastrzegłem, że mogą oddziaływać
      względy osobiste. Moim zdaniem, chodzi tu o autonomię i niezależność w sto
      sunkach między państwem i kościołem, a nie o autonomiczność 1 niezależność
      państwa. Zakres autonomii i niezależności jest tylko na tym obszarze."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Pojęcie autonomii i niezależności odniósł pan profesor w stosunku do
      kościoła. Mówił pan wyraźnie o prawie stanowienia własnych norm. Inaczej
      traktuje pan to pojęcie w stosunku do państwa."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Piotr Winczorek"
      imgPath="/images/kk-speakers/WinczorekPiotr.png"
      text="Państwo jest tworem suwerennym. Mowa jest o tym w pierwszych
      artykułach konstytucji, które stwierdzają, że państwo jest wspólnym dobrem
      obywateli, jest jednolite i niepodzielne, władza zwierzchnia należy do
      narodu. Łącznie te przepisy należy tak czytać, że dają one państwu
      polskiemu nie autonomię, czy tylko niezależność, lecz niepodległość i i
      suwerenność. Zwłaszcza art. 4 tak rozumiem. Mogą być oczywiście inne
      interpretacje tego pojęcia. Stosunek przyjętego już art. 9 do konkordatu.
      Moim zdaniem są to dwie różne materie, bo art. 9 dotyczy aktów prawa
      międzynarodowego już przez Polskę przyjętych. Czy wśród tych aktów
      znajdzie się konkordat, to już jest inna sprawa. Najpierw musi być
      konkordat, a dopiero potem zadziała art. 9, a nie odwrotnie. Jeżeli
      przyjmie się, że konkordat ma być formą regulacji stosunków między
      państwem i Kościołem katolickim, który obok ustawy będzie te stosunki
      określał, to nic nie stoi na przeszkodzie, żeby ten przepis zawrzeć w
      konstytucji. Wprowadzenie znaku równości między art. 9 a dopuszczeniem lub
      nakazem regulacji konkordatowej, jest nieporozumieniem. Oczywiście w
      kierunku nakazu nie poszedłbym. Może moi koledzy odpowiedzą na dalsze
      pytania. Teraz od siebie chciałbym zgłosić pewne uwagi do art. 15 w ujęciu
      przedstawionym przez posła T. Mazowieckiego. Zdanie drugie w ust. 1
      powinno być oddzielone i wyodrębnione w nowy ustęp, bo jest to inna
      materia. Tak jak w projekcie posła W. Cimoszewicza ten fragment artykułu
      powinien zaczynać się od regulacji normatywnej stosunków między pań- stwem
      a kościołem. Podkomisja podstaw ustroju politycznego... 3% W ust. 2 użyte
      jest określenie „osoba ludzka”. Rozumiem, że źródłem tego pojęcia jest
      filozofia personalizmu, ale to się kłóci z tym, co jest powiedziane w
      pierwszym ustępie. Skoro władze publiczne mają być neutralne
      światopoglądowo, to do tekstu konstytucji nie powinno się wprowadzać
      pojęć, które są charakterystyczne dla określonej filozofii. Gdyby ustęp
      ten kończył się zwrotem „,...dla dobra wspólnego”, to nie miałbym uwag. W
      obecnym brzmieniu idzie on o jeden krok za daleko. Nie mam nic przeciwko
      temu pojęciu, ale ono pojawia się jedynie w tym rniejscu. Może pojawić się
      pytanie, jak ma się osoba ludzka w stosunku do pojęć „obywatel ”, „każdy
      człowiek”, które są używane w dalszych fragmentach tekstu. Moją radą jest
      skreślenie tego pojęcia w tym fragmencie artykułu i z tego powodu nie
      będzie żadnego nieszczęścia. Kolejny problem dotyczy użycia określeń „na
      podstawie umowy”, czy „po porozumieniu . Jest tutaj dość delikatna
      różnica. Co to znaczy „po porozumieniu”? Najpierw musi być porozumienie, a
      czym ono jest? Jest jakiegoś rodzaju umową, traktatem lub kontraktem. Tak
      czy inaczej kolejność wydarzeń jest następująca: porozumienie — ustawa,
      umowa — ustawa. Czy ustawa mogłaby być nie wydana? Tak, bo to wynika z
      suwerenności państwa. Umowa zawierana jest z rządem. Jeśli zawarł on umowę
      niezgodną z wolą suwerena reprezentowanego w parlamencie, to parlament nie
      jest związany obowiązkiem wydania takiej ustawy. Nie mógłby wydać ustawy o
      innej treści niż ta, która wynika z zawartego porozumienia czy umowy."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Może być taka sytuacja, że jeden rząd zawiera porozumienie. Następny
      parlament jest związany takim porozumieniem, albo musi od początku
      zawierać umowę."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Prosiłam o bardzo szczegółową odpowiedź. Stosunki między państwem a
      kościołem w Polsce reguluje ustawa z 1989 r., która określa wszelkie prawa
      Kościoła rzymskokatolickiego w Polsce. Dla mnie konkordat jest tylko umową
      międzynarodową między dwoma państwami, więc dlaczego mówi pan profesor, że
      art. 9 nie konsumuje tego zagadnienia? Czy dobrze zrozumiałam?"
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Piotr Winczorek"
      imgPath="/images/kk-speakers/WinczorekPiotr.png"
      text="Zawierane w ostatnich dziesięcioleciach umowy międzynarodowe nie są
      tylko umowami międzypaństwowymi. Wchodzą one w stosunki wewnętrzne państw
      i jest to masowe zjawisko. Ta umowa należy do tego gatunku, bo w pewnym
      zakresie wchodzi w stosunki wewnętrzne. Dawniej może było inaczej, być
      może wspólnota międzynarodowa nie bardzo interesowała się położeniem
      obywateli, osób fizycznych żyjących w poszczególnych państwach. Dzisiaj
      tym się interesuje i reguluje te sprawy w formie umów międzynarodowych.
      Konkordat nie musi dotyczyć tylko stosunków między państwem i Stolicą
      Apostolską jako podmiotem prawa międzynarodowego, ale może — jeśli zechce
      — wejść w stosunki wewnętrzne głębiej niż z samej nazwy „umowa
      międzynarodowa” czy „umowa międzypaństwowa” by to wynikało."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/SarneckiPawel.png"
      text="Chciałbym nawiązać do wczorajszej dyskusji, kiedy długo
      debatowaliśmy nad rozmaitymi zrzeszeniami pod wspólnym hasłem
      społeczeństwa obywatelskiego. Zamierzamy budować społeczeństwo
      obywatelskie. Z tego wynikają dopuszczalne w konstytucji ograniczenia dla
      ustawodawcy, w szczególności ograniczenie wydawania ustaw po porozumieniu
      z innymi podmiotami reprezentującymi społeczeństwo obywatelskie. Chciałbym
      się odnieść do zakresu pojęć autonomia i rozdział. Do tego, co powiedział
      prof. P, Winczorek, chciałbym dodać, że mówiąc o autonomii mamy na myśli
      strukturę. Podmiot jest autonomiczny w obrębie szerszej struktury. Nie ma
      samej autonomii, ona istnieje w obrębie szerszej struktury. Możemy więc
      mówić o autonomii terytorialnej, narodowościowej i wyznaniowej.
      Sformułowania: „oddzielenie” i „„rozdział” idą znacznie dalej niż
      określenie „autonomia”. Jeżeli reprezentantom kościołów odpowiada
      ograniczenie się do formuły „autonomił”, to jest to bardzo właściwe, bo w
      ten sposób demonstruje się postawę w żaden sposób niekontrowersyjną wobec
      państwa. Jest to tym samym uznanie istnienia szerszej struktury, „dachu” i
      niekontestowanie tego „dachu ”. Przechodzę do omówienia zakresu autonomii,
      czyli zakresu funkcji kościołów i związków wyznaniowych. Padło określenie,
      że jest to w zakresie funkcji religijnych i organizacyjnych. Widziałbym
      szerzej to zagadnienie. Trudno rzeczywiście oderwać się od neutralności
      Światopoglądowej. Kościoły chrześcijańskie, jak to widzę, nie są
      ograniczone do funkcji religijnych i organizacyjnych. Weźmy pod uwagę
      funkcję charytatywną i inne funkcje społeczne. Na terenie mojej parafii w
      Krakowie ksiądz proboszcz powołał klub sportowy. Jaka to jest funkcja? Na
      pewno nie religijna ani organizacyjna. Czy zakazać kościołowi tej
      działalności? Chyba nie. Dlatego nie precyzowałbym, o jakie tutaj funkcje
      chodzi, tym bardziej że występuje tu określenie „w wykonywaniu swych
      funkcji”. Jest tu pewne niebezpieczeństwo, ale mamy przecież cały
      pozostały system prawny, w tym prawo kame i administracyjne, które pozwala
      na ingerencję państwa w sytuacji, gdy działalność kościołów wykracza poza
      pewne granice."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Co pan profesor rozumie pod pojęciem „swych funkcji”? Jak będzie
      należało to interpretować?"
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/SarneckiPawel.png"
      text="Jest to bardzo trudne pytanie. Zostawiłbym w przepisie autonomię.
      Niech kościół rozwija swoją działalność, a państwo będzie się temu
      przyglądało. Dopóki działalność kościoła nie narusza ustaw państwowych, d
      póty kościół może rozwijać te funkcje, skoro uznaje je za swoje. Czy
      istnieje przymus zawarcia konkordatu w przypadku sformułowania zawartego w
      ust. 3 propozycji posła T. Mazowieckiego? Prof. P. Winczorek wyjaś- nił,
      że takiego przymusu nie ma. Chciałbym zwrócić uwagę, że w tekstach
      ustawodawczych użycie gramatycznego trybu jest obojętne. Obojętne jest,
      czy użyjemy trybu przypuszczającego, rozkazującego, czy oznajmującego.
      Jako norma prawna oznacza to, w zależności od wykładni, albo możliwość,
      albo przymus. Na ogół odnosi się ta sprawa do przyszłości. Rzadko używamy
      gramatycznego czasu przyszłego, ale przepisy prawa ze swej istoty odnoszą
      się do przyszłości, a nie do teraźniejszości. Tak więc strona gramatyczna
      jest trochę mniej ważna."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Czy pan profesor odniósł swoją uwagę do ust. 3 uzupełnionego już o
      wyrazy „I ustawy?"
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="W sprawie formalnej. Nie ma wszystkich ekspertów, więc prosiłabym,
      żeby pozostali wypowiedzieli się na ten temat na piśmie."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Musimy naszych ekspertów chronić przed zadaniami zbyt daleko
      idącymi."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Ekspertyzy na ten właśnie temat są złożone w Komisji Konstytucyjnej.
      Jest także synteza ekspertyz w zakresie stosunków państwo-kościół.
      Ekspertyz bardzo poważnych jest pięć. Wiem, że nie wszyscy byli zadowoleni
      z doboru ekspertów, ale w tych ekspertyzach reprezentowane są wszystkie
      opcje prawnicze i światopoglądowe. Proszę nam teraz nie kazać pisać czegoś
      w trybie doraźnym, trzeba te dokumenty przeczytać."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/SarneckiPawel.png"
      text="Zostało postawione pytanie: czy Polska mogłaby wypowiedzieć
      konkordat? Jak każda umowa międzynarodowa konkordat podlega ogólnym
      zasadom prawa międzynarodowego, skodyfikowanym zasadom prawa traktatowego.
      Wypowiedzenie konkordatu jest do pomyślenia i możliwe."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Wątpliwości biorą się z tego, że wiele umów międzynarodowych zawiera
      warunki ich wypowiedzenia, a konkordat — nie. Rozumiem, że obowiązujące
      ogólne zasady to umożliwiają. Jeżeli nie zakończymy obrad decyzją, to
      pójdziemy na posiedzenie Komisji Konstytucyjnej i oświadczymy, że nie
      doszliśmy do żadnych konkluzji. Tak możemy zrobić, jeżeli będzie taka wola
      podkomisji."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/OsiatynskiWiktor.png"
      text="Może zacznę od odpowiedzi na pytanie poseł L. Błądek, którą cenię i
      szanuję. Jest to bardzo ważne pytanie, ale uważam, że nie jest ono
      specjalnie trafne przy tym problemie, ponieważ w zasądach naczelnych
      konstytucji, jak i w całej konstytucji, pewne kwestie mogą się powtarzać,
      Przepis, nad którym pracujemy, dotyczy stosunku państwa do ważnego
      elementu społeczeństwa cywilnego, społeczeństwa obywatelskiego, jakim są
      kościoły i związki wyznaniowe. Niezależnie od art. 9 umowy mogą występować
      w konstytucji w innym kontekście. Chcę się powołać na autorytet prof. L.
      Falandysza, ponieważ nauczył on nas, że mamy tak napisać konstytucję, by
      była w niej precyzja. Prof. Falandysz ma prawo używać partactwa
      konstytucyjnego do swoich celów. Całe opasłe tomy konstytucjonalizmu
      amerykańskiego wynikają z tego, że po każdej stronie konfliktu między
      organami władzy był jakiś prof. Falandysz. Oczywiste i zrozumiałe jest to,
      że konstytucją będziemy się posługiwać w sporach i w konfliktach między
      instytucjami państwowymi. Dlatego precyzja jest ważna i będę do niej
      zmierzał. Problem, który mamy do rozwiązania w tym artykule, dotyczy w
      gruncie rzeczy dwóch odmiennych, zmierzających często w przeciwnych
      kierunkach zjawisk: udzielenia praw i gwarancji kościołom jako elementowi
      życia zbiorowego i społeczeństwa cywilnego — praw tych kościoły były
      pozbawione —— oraz konstytucyjnej ochrony jednostek i ich praw, ochrony
      mniejszości liczących czasem jedną osobę i określenia granic dla woli
      większości oraz woli ustawodawcy. W społeczeństwie o przeważającej jednej
      religii jest to bardzo trudne. Z tej perspektywy artykuł znajdujący się w
      przepisach ogólnych musi współgrać z artykułami, które będą w rozdziale o
      prawach i wolnościach obywatelskich. Zgadzam się z tym, co powiedzieli
      eksperci odnośnie do pojęcia rozdziału i autonomii. Rozdział jest pojęciem
      szerszym i daje więcej uprawnień związkom wyznaniowym niż autonomia.
      Rozdział czy separacja kościoła i państwa, to pojęcia nieprecyzyjne,
      ponieważ we współczesnych demokracjach w doktrynie konstytucyjnej istnieją
      trzy modele koncepcji separacji kościoła od państwa, które są zupełnie
      odmienne. Chodzi o koncepcję separacji pełnej, czy neutralnej typu
      amerykańskiego, separacji wrogiej wobec kościoła typu francuskiego i
      separacji przyjaznej typu niemieckiego. Obowiązuje tam rozdział koś- cioła
      od państwa, ale państwo zbiera podatki na rzecz kościołów, a więc jest to
      separacja przyjazna. Obawiam się, że różnię się z intencją poprawki
      zaproponowanej przez posła W. Cimoszewicza. Jeżeli użyjerny pojęcia
      „rozdział” bez wyjaśnienia czy uzupełnienia, z jakim rozdziałem mamy do
      czynienia, to mogłoby to być niebezpieczne. Mamy bowiem trzy modele
      rozdziału kościoła od państwa i powinniśmy się zastanowić, jaki model
      chcemy wybrać. Rozumiem, że chodziłoby o model pierwszy, w Polsce raczej
      niemożliwy do wprowadzenia lub o model trzeci. Czy w odczuciu
      indywidualnym, a także w interpretacji prawnej nie będzie on traktowany
      jako wrogi? Tego nie jestem pewien. Ust. 5 wyjaśnia, że stosunki te
      kształtują się na zasadzie współdziałania. Skoro jest ust. 5, to może nie
      jest konieczny ust. 1 mówiący o rozdziale. Odpowiada mi formuła autonomii,
      ale nie autonomii obustronnej. Mam duży problem z ust. 2 propozycji posła
      T. Mazowieckiego. Nie widzę żadnego powodu, żeby konstytucja w przepisie
      mówiącym o stosunku kościoła do państwa gwarantowała państwu autonomię
      albo niezależność. Państwo ma autonomię i niezależność przedkonstytucyjną,
      przed tym przepisem i rozdziałem. Mnie się wydaje, że intencją i celem
      takiego przepisu, potwierdzonego przez naszą historię, jest zapewnienie
      autonomii kościołom. Kościoły mają być autonomiczne, bo posiadają taką
      sferę swojego działania, do której państwo nie może się mieszać — jest ona
      wewnętrzna. Dlatego ust. 2 przepisu zaproponowanego przez przedstawicieli
      prezydenta wydaje mi się trafniejszy, bo autonomię daje kościołom. Przepis
      konstytucyjny nie powinien dawać państwu autonomii w tym zakresie. Problem
      zakresu autonomii. Sformułowanie „„każdego w swoim zakresie” jest dawaniem
      bardzo silnych argumentów, mówię to symbolicznie, profesorowi L.
      Falandyszowi czy komuś, kto chciałby wykorzystywać nieprecyzyjność 1
      niejednoznaczność. Chodzi przede wszystkim o to, żeby kościoły nie miały
      autonomii, gdyby wkraczały w inne niż religijne funkcje publiczne albo
      państwowe. To jest oczywistę i ważne. Uważam, że funkcje religijne i
      organizacyjne są ważne i wyczerpują wszystkie działania. W moim
      przekonaniu, jeżeli będzie ostatni ustęp o współdziałaniu dla dobra
      wspólnego, to tam zmieści się działalność charytatywna i inna kościołów, o
      której mówił prof. P. Samecki. W tych funkcjach kościoły współdziałają.
      Zakładając klub sportowy kościół współdziała z władzami publicznymi,
      samorządowymi dla dobra wspólnego. W tym mieści się szersza działalność
      niż ta autonomiczna w zakresie funkcji religijnych i organizacyjnych.
      Uważam, że w konstytucji mogłoby być pojęcie rozdziału, ale nie jest ono
      konieczne. Ważniejsza jest autonomia ustanowiona jako autonomia
      jednostronna kościoła, ograniczona do funkcji religijnych i
      organizacyjnych. Do tego dochodzi współdziałanie dla dobra wspólnego.
      Ostatnia sprawa dotyczy ustawy, umowy i równości kościołów. Potrzeba czy
      duża chęć zawarcia konkordatu stawia rzeczywiście Kościół katolicki w
      sytuacji uprzywilejowanej. Konkordat w gruncie rzeczy dotyczy stosunków
      między Polską a Stolicą Apostolską. Ustawa, która regulowałaby stosunki
      wyznaniowe w Polsce, dotyczyłaby stosunków w państwie i stosunku do
      kościoła. W przypadku konkordatu jest specyfika ze względu na to, że
      Stolica Apostolska ma „interesy” w Polsce i one się pokrywają z interesami
      kościoła, ponieważ działa tutaj Kościół katolicki. Po zawarciu konkordatu
      powinna zostać wydana ustawa mówiąca o stosunku do Kościoła
      rzymskokatolickiego. Ratyfikacja konkordatu jest jego przekształceniem w
      prawo wewnętrzne. Można zaproponować następujące brzmienie ust. 2 wariantu
      I zawartego w tekście podkomisji: „Sytuację prawną kościołów i związków
      wyznaniowych określają ustawy uchwalone na podstawie umów zawartych z ich
      właściwymi przedstawicielami lub umowy międzynarodowej”. Mamy wtedy
      większą dozę równości innych Kościołów z Kościołem katolickim. Jest też
      element oparcia się na ustawie bazującej na umowie. Niezależnie od tego,
      co mówił prof. P. Winczorek, że porozumienie jest formą umowy, w interesie
      kościołów i związków wyznaniowych powinno leżeć zawarcie tego typu umowy.
      Dopiero na podstawie umowy będą one miały w stosunku do państwa status
      kościołów. Bez takiej umowy będą posiadały status stowarzyszeń, ze
      wszystkimi różnicami, na które wskazano przynajmniej w dwóch spośród
      pięciu złożonych do Komisji Konstytucyjnej ekspertyz w tej sprawie. Wydaje
      mi się, że nie jest konieczne dodanie neutralności w sprawach
      filozoficznych. Neutralność państwa w sprawach filozoficznych gwarantuje
      przepis z rozdziału o prawach obywatelskich mówiący o wolności sumienia i
      wyznania. Nie jest konieczne uwzględnienie kwestii filozoficznych w tym
      artykule. W ust. 2 projektu posła T. Mazowieckiego też postawiłbym kropkę
      po zwrocie „...dla dobra wspólnego”."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Podstawowym wątkiem dyskusji jest sprawa wzajemnego stosunku między
      pojęciem „rozdziału państwa i kościoła” a proponowaną w kilku projektach,
      w tym w projekcie posła T. Mazowieckiego formułą „poszanowania wzajemnej
      autonomii i niezależności”. Nie widzę tak ostrego przeciwstawienia tych
      formuł, one nie są tak antagonistyczne, jak zdawałoby się to wynikać z
      dyskusji. Termin „rozdział leksykalnie nic nie znaczy, chyba że odniesiemy
      to określenie do konkretnego kraju, jak mówił o tym prof. W. Osiatyński.
      Decyduje o tym ukształtowana praktyka. Jeżeli mówimy o rozdziale kościoła
      od państwa w ujęciu francuskim czy amerykańskim, to coś to oznacza. Sam
      termin nie zakłada z góry niczego zdecydowanego. Autonomia i niezależność
      jako zasady kształtowania wzajemnych stosunków między państwem i kościołem
      zawierają istotne elementy rozdziału. Powiedziałbym nawet, że z tych dwóch
      wyrazów wynika więcej niż z określenia „rozdział”. Wszystko zależy od
      interpretacji tych pojęć przez ustawodawstwo i praktykę. Samo założenie
      nie decyduje o tym, co te formuły będą oznaczały w praktyce. Niepokoi mnie
      też pewien zlepek pojęciowy „autonomia i niezależność”. Nie wiadomo, czy
      odnosi się to do obydwu podmiotów, tzn. państwa i kościoła, czy też chodzi
      o autonomię kościoła, a niezależność lub — inaczej — suwerenność państwa.
      Kto co ma mieć w poszanowaniu względem drugiego z tych podmiotów? Czy
      państwo ma szanować autonomiękościołów, a kościoły niezależność i
      suwerenność państwa, czy też oba podmioty jedno i drugie? Jest to zlepek
      pojęciowy, którego nie potrafię do końca rozszyfrować. Wiem, co oznacza ta
      formuła w dokumentach kościoła, ale na gruncie Świeckiego dokumentu, jakim
      jest konstytucja, nie potrafię tego wyjaśnić. Nie ma podstaw do stawiania
      zasadniczej bariery między formułą oddzielenia oraz autonomii i rozdziału.
      Proponowane są różne formuły prawnego regulowania stosunków między
      państwem | 1 kościołem oraz związkami wyznaniowymi. Trzeba zdawać sobie
      sprawę z ich znaczenia. Umowa międzynarodowa może być zawarta tylko z
      innym podmiotem prawa międzynarodowego, w tym wypadku wchodzi w grę tylko
      Kościół katolicki, a dokładniej — Stolica Apostolska mająca podmiotowość
      prawno-międzynarodową. Dlatego trzeba wyraźnie powiedzieć, że ta forma
      regulacji stosunków państwo—kościół odnosi Się tylko do jednego kościoła.
      Nie można tego formułować w sposób zakamuflowany, jakby ta zasada mogła
      odnosić się również do innych kościołów. Konkordat czy umowa
      międzynarodowa ze Stolicą Apostolską a możliwość regulacji stosunków w
      drodze ustawowej. Z propozycji posła T. Mazowieckiego wynika obowiązek
      zawarcia konkordatu, bo użyty jest tryb orzekający — „określa”. Jeżeli
      ustawa używa trybu orzekającego, to oznacza istnienie obowiązku, w tym
      obowiązku zgodności ustaw w zakresie materii regulowanych umową
      konkordatową. Pewne ustawy będą mogły być wydane jak gdyby w wykonaniu
      konkordatu, co nie oznacza, że całe ustawodawstwo w dziedzinie stosunków
      państwo-kościół będzie pochionięte przez treść konkordatu. Możliwe są nie
      zdeterminowane treścią konkordatu ustawy regulujące stosunek państwa do
      kościoła w zakresie wychodzącym poza przedruiot umowy międzynarodowej.
      Widzę taki obowiązek, bo ustęp ten nie jest sformułowany fakultatywnie.
      Nakaz zawarcia umowy międzynarodowej wyrażony jest obligatoryjnie. Nie
      oznacza to, że w każdym wypadku będzie ona wiązać. Wiązać będzie dopiero
      po ratyfikacji, która musi być w zgodzie z konstytucją. Nie można zawrzeć
      umowy międzynarodowej czy jej ratyfikować, jeśli naruszałaby ona zasady
      konstytucji, np. zasadę równouprawnienia sośŚciołów i wyznań. Drugą
      możliwą formą regulacji stosunków państwa z kościołem jest umowa społeczna
      i ustawa. W porządku prawnym państwa proponuje się zasadniczą zmianę,
      wprowadza się nowy rodzaj Źródła prawa — umowę społeczną. Zgadzam się z
      profesorami W. Osiatyńskim i P. Sarneckim, że wychodzi to naprzeciw
      formuły państwa obywatelskiego, ale w systemie źródeł prawa jest to nowy
      element, który trzeba będzie bliżej określić. Formuła, aby ustawy
      regulujące stosunki państwa ze związkami wyznaniowymi były wydawane po
      wcześniejszym porozumieniu nie odbiega w sposób istotny od formuły umów
      społecznych. Według przyjętej wykładni, m.in. w orzecznictwie Trybunału
      Konstytucyjnego, wydać akt po porozumieniu lub w porozumieniu oznacza
      procedurę negocjacyjną, która musi doprowadzić do pozytywnego rezultatu.
      Jeżeli porozumienia się nie osiągnie, to nie można wydać aktu prawnego,
      który zależy od wcześniejszego osiągnięcia zgody. Nie jest to po
      zasięgnięciu opinii czy konsultacji, tylko po porozumieniu, a to wymaga
      zgody obydwu pertraktujących stron. Ustawa byłaby możliwa po osiągnię- ciu
      pełnego porozumienia, a więc wynik byłby taki sam, jak w przypadku formuły
      umowy społecznej. Nie byłoby podstawowej różnicy. Ostatnia uwaga. W
      projektach pojawia się państwo, władze publiczne, organy i instytucje
      państwowe i samorządowe. Trzymajmy się porządku pojęć, któ- ry na gruncie
      projektów konstytucji został już wypracowany. Nie ma nic gorszego niż
      chaos pojęciowy. W artykułach przyjętych już przez Komisję Konstytucyjną
      użyliśmy formuły „władze publiczne” na oznaczenie wszystkich podmiotów w
      aktywności państwowej i samorządowej. Nie wiem, czy trzeba to zastępować
      innym określeniem. Rozumiem, że dodanie pojęcia „instytucje państwowe”
      wychodzi poza pojęcie „władzy publicznej”, np. szkoły. Może pro
      jektodawcom tej formuły chodzi o to, żeby obowiązek zachowania
      neutralności odnieść nie tylko do władz publicznych, ałe także do
      instytucji państwowych lub samorządowych, co na gruncie prawa
      administracyjnego jest nieco innym pojęciem. Apeluję o porządek pojęć.
      Dotychczas posługiwaliśmy się formułą władzy publicznej. Na pewno nie
      można domagać się obowiązku przestrzegania rieutralności Światopoglądowej
      od Rzeczypospolitej jako całości, bo Rzeczpospolita, to nie tylko władze
      państwowe czy władze publiczne, to są różne formy aktywności społecznej, a
      od tych form np. związków wyznaniowych nie możeiny domagać się
      neutralności religijnej. Ekspert, prof. Henryk Groszyk: W związku z
      pytaniem poseł L. Błądek o zakres dwóch regulacji, tj. ust. 3 propozycji
      posła T, Mazowieckiego: „Stosunki między państwem a Kościołem katolickim
      określa umowa międzynarodowa zawarta ze Stolicą Apostolską” i przyjętym
      już art. 9 w brzmieniu: „Rzeczpospolita Polska przestrzega wiążącego Ją
      prawa międzynarodowego” chciałbym powiedzieć, że mają one dwa różne
      zakresy. Art. 9 zawiera nakaz przestrzegania wiążącego Polskę prawa
      międzynarodowego. Ust. 3 propozycji posła T. Mazowieckiego zawiera inny
      nakaz, a mianowicie nakaz zawarcia umowy międzynarodowej regulującej
      stosunki między państwem a Kościołem katolickim. Tak trzeba interpretować
      wyraz „określa”. Ci, którzy w terminie „określa” chcieliby widzieć coś
      innego są w błędzie. Jeżeli wyraz „określa” zostanie zachowany, to musimy
      zdawać sobie sprawę, że oznacza to nakaz, a więc przymus zawarcia takiej
      umowy."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Uważam, że nasza dyskusja rozwinęła nowe wątki, także natury intelek
      Podkomisja podstaw ustroju politycznego... (22.02.1995 r. — 14) 89
      tualnej. Sugerowałbym, żebyśmy zaproponowali Komisji Konstytucyjnej, by
      nasza podkomisja pracowała jeszcze nad tym problemem. Materiału do
      sprawozdania jeszcze nie mamy, a już jesteśmy opóźnieni."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Uważam, że nie jest uprawniona interpretacja pana profesora o
      przymusie zawarcia konkordatu. Taką interpretacją sugeruje pan, że polska
      konstytucja może do tego zobowiązać również Stolicę Apostolską. Nie może
      konstytucja nakazać Stolicy Apostolskiej zawarcia konkordatu. Zwracam
      uwagę, że konstytucja marcowa z 1921 r. zawierała dokładnie taki sam wyraz
      „określa”, a konkordat został zawarty 5 lat później. Mógłby nie zostać w
      ogóle zawarty."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Nie mamy czasu na wymianę zdań, bo musimy wrócić na plenarne
      posiedzenie Komisji Konstytucyjnej. Czy państwo się zgodzicie, żeby nasza
      podkomisja jeszcze raz zebrała się w celu omówienia tej sprawy? Nie ma
      sprzeciwów. Zamykam posiedzenie."
    />
  </div>
</div>
