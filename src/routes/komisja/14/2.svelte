<script>
  import { fly } from "svelte/transition";
  import Nav from "../../../components/Nav.svelte";
  import Footer from "../../../components/Footer.svelte";
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
  <title>Dzień 2 - Biuletyn nr 14</title>
</svelte:head>

<Nav segment={'info'} />

<div class="flex justify-between pt-4 pb-8 border-b mb-8">
  <div>
    <h1 class="text-2xl font-thin" in:fly={{ x: -50, duration: 1000 }}>
      Obrady w dniu 22 lutego 1995 r.
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
    <a rel="prefetch" href="/komisja/14/1">
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
    <a rel="prefetch" href="/komisja/14/3">
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
        src="/images/kk-speakers/PastuszkaStefan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Senator Stefan Pastuszka (PSL):</strong>
        Rozpoczynamy drugi dzień posiedzenia Komisji Konstytucyjnej. Witam
        wszystkich jej członków, ekspertów, a także dziennikarzy. Zanim
        przyjdzie poseł R. Bugaj, chcę poinformować, że podkomisja podstaw
        ustroju politycznego i społeczno-gospodarczego nie zakończyła prac nad
        art, 15. Doszło do dużych rozbieżności w obrębie: po pierwsze, treści i
        zakresu podstawowych pojęć określających regulację stosunków między
        państwem a kościołem, między obywatelami a kościołami; chodzi o pojęcia
        typu: „autonomia”, „niezależność ”, „rozdział”, po drugie — podejścia do
        sprawy konkordatu. Szczególnie dużą polemikę wzbudził zapis zawarty w
        propozycji posła T. Mazowieckiego. Na tle tego zapisu powstał dylemat,
        czy konkordat musi być zawarty, czy też nie. Rozbieżności w tym zakresie
        wystąpiły również wśród ekspertów. Sądzę, że problemy, o których przed
        chwilą wspomniałem, dokładnie omówi poseł R. Bugaj, przewodniczący
        podkomisji ustroju politycznego i społeczno-gospodarczego. Po relacji
        posła R. Bugaja rozpatrzymy propozycje, które zostały zgłoszone przez
        przedstawicieli kościołów i wyznań religijnych. Odbędziemy nad nimi
        dyskusję i ewentualnie poddamy je pod głosowanie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krzysztof Kamiński (KPN):</strong>
        Pragnę przypomnieć jako szef podkomisji redakcyjnej, że w sprawozdaniu
        tejże podkomisji zapis art. 15 był przedstawiony w kilku wariantach.
        Mandat podkomisji posła R. Bugaja został spełniony przed przekazaniem
        podkomisji redakcyjnej odpowiedniego fragmentu projektu Konstytucji RP.
        Jaki był mandat dzisiejszego, czy też planowanego na wczoraj,
        posiedzenia podkomisji podstaw ustroju politycznego i
        społeczno-gospodarczego? O ile pamiętam mandat ten był następujący: na
        poprzednim posiedzeniu Komisji Konstytucyjnej zaistniała możliwość
        stworzenia kompromisowego zapisu art. 15. Nie po to podkomisja posła R.
        Bugaja miała się zebrać, aby mnożyć warianty, tylko po to, aby je
        redukować. Miała to być próba dogadania się w węższym gronie co do
        treści art. 15. Skoro przewodniczący S. Pastuszka poinformował nas, że
        podkomisja nie doszła do porozumienia, to w moim przekonaniu, jej mandat
        wygasł. My, jako Komisja Konstytucyjna in corpore, musimy się zająć na
        nowo sprawą art. 15.
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
        Uprzejmie proszę posła R. Bugaja o złożenie relacji z prac podkomisji
        podstaw ustroju politycznego i społeczno-gospodarczego.
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
        Zajmowaliśmy się dzisiaj dwoma kwestiami: jedną — incydentalną i drugą —
        dość obszerną. Obie wynikają z wcześniejszych prac Komisji
        Konstytucyjnej. Sprawa incydentalna to sprawa zapisu dotyczącego kwestii
        równouprawnienia sektorów. Na ten temat zostały tylko wstępnie
        wymienione poglądy. Jednak propozycja ekspertów w tym zakresie powinna
        być przedmiotem naszej dzisiejszej dyskusji. Jeśli chodzi o główną
        sprawę, tzn. kwestię art. 15, pragnę powiedzieć, że dyskusja na ten
        temat była długa i interesująca. Niestety, nie została ona zakończona. W
        związku z tym nadal nie dysponujemy konkluzją. Wszystkie warianty treści
        art. 15 zostały omówione. Myślę, że istnieje perspektywa ich dalszej
        modyfikacji. Wszyscy członkowie podkomisji zgodzili się z tym, że nad
        treścią art. 15 należy się jeszcze zatrzymać. Wolą całej Komisji
        Konstytucyjnej należy albo zaakceptować taki stan rzeczy, albo
        przystąpić do pracy nad art. 15 na posiedzeniu plenarnym.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        W nawiązaniu do wypowiedzi posła K. Kamińskiego, przyłączam się do tego
        samego tenoru dyskusji, że już otrzymaliśmy kilka propozycji rozwiązań
        wariantowych podkomisji, które znajdują się w jednolitym projekcie
        Konstytucji RP. Dodatkowy mandat dla podkomisji wią- że się z potrzebą
        poszukiwania rozwiązania kompromisowego, którego możliwość przyjęcia
        pojawiła się w trakcie jej poprzedniego posiedzenia w oparciu, jak
        rozumiem, o inicjatywę posła T. Mazowieckiego i wystąpienia
        przedstawicieli kościołów, a także w oparciu o ogólny przebieg dyskusji.
        Dlatego też zwracam się z zapytaniem do posła R. Bugaja, czy w sytuacji,
        gdy rozwiązanie kwestii art. 15 jest bardzo istotne — opinia publiczna
        jest poinformowana, że właśnie nad tym artykułem pracujemy i oczekuje,
        że jutro będzie podjęta jakaś decyzja — nie byłoby rzeczą racjonalną
        poproszenie podkomisji, aby w ciągu najbliższych 3-4 godzin zechciała
        spróbować dojść do jakiegoś rozwiązania po to, żebyśmy mogli o godz. 15
        zebrać się in gremio, zapoznać ze stanem prac i przygotować dojrzałe
        rozwiązania do głosowania w dniu jutrzejszym. Wydaje się, że odroczenie
        tej sprawy albo nawet jej zatrzymanie nie będzie służyło postępowi prac,
        gdyż art. 15 jest jednym z kluczowych problemów konstytucyjnych,
        wzbudzającym duże emocje. Nie możemy tutaj stosować metody opóźniania
        prac. Swoje pytanie kieruję do przewodniczącego podkomisji podstaw
        ustroju politycznego i społeczno-gospodarczego, jednocześnie sugerując —
        o ile podkomisja mogłaby się podjąć trudu wykorzystania najbliższych
        godzin — odroczenie posiedzenia in gre Obrady w dniu 22.02.1995 r. (20)
        mio do godz. 15. Stwórzmy podkomisji szansę dokończenia pracy, którą
        rozpoczęła.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        W wypowiedzi posła R. Bugaja odczytałem gotowość dalszej pracy
        podkomisji, która przygotowałaby pewną konkluzję albo propozycję pewnej
        konkluzji. Nie można sprawy tak stawiać, że podkomisja, która
        przygotowała konkretne propozycje w formie gotowych zapisów, może
        zmienić zdanie, zanim jej propozycje zostaną rozpatrzone. Uważam, że
        podkomisja nadal posiada swój mandat, gdyż wszystko, co ona ustali, i
        tak będzie rozstrzygnięte przez Komisję Konstytucyjną. Moim zdaniem, na
        poparcie zasługuje propozycja, aby w tej chwili dać szanse podkomisji
        dojścia do konkluzji decyzyjnej w obszarze regulacji statusu kościoła
        oraz związków wyznaniowych w państwie. Opowiadam się za zarządzeniem
        przerwy do godz. 14. Horyzont czasowy mamy dzisiaj ograniczony. Nadal
        nie przystąpiliśmy do pracy nad rozdziałem II Konstytucji RP. Wczoraj
        toczyła się bardzo poważna dyskusja nad tytułem tego rozdziału. Stąd
        proszę przewodniczącego S$. Pastuszkę — nie musi on w tej sprawie
        przeprowadzać głosowania — o zarządzenie przerwy w obradach do godz. 14
        lub 15, chyba że z sali padnie inny wniosek. Wtedy mielibyśmy szansę na
        zakończenie prac nad art. 15. Jego brzmienie rozstrzygnęlibyśmy jutro w
        głosowaniu. Tym samym o godz. 15 moglibyśmy rozpocząć dyskusję na temat
        przepisów rozdziału II Konstytucji RP.
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
        Podkomisja może oczywiście podjąć próbę dojścia do porozumienia. Chcę
        jednak zaznaczyć, że będzie to próba trochę ryzykowna. Rozglądam się
        właśnie po sali. Widzę w tej chwili 5 członków podkomisji podstaw
        ustroju politycznego i społeczno-gospodarczego. Jeżeli będę zbierał
        pojedynczo przedstawicieli podkomisji, to nie mam pewności, czy będziemy
        mogli skutecznie procedować. Myślę, że projekt zapisu art. 15, który
        został złożony przez posła T. Mazowieckiego w porozumieniu z
        przedstawicielami kościołów, spotkał się z dużym zainteresowaniem.
        Jednak opinie prawne ujawniły pewne niedoskonałości tego projektu. W
        związku z tym, nie jestem pewien, czy podkomisja może pewne sprawy
        rozwiązać „od ręki”. Jeżeli jednak jest to wolą Komisji Konstytucyjnej,
        to dostosujemy się do niej.
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
        Jak słyszymy, podkomisji brakuje quorum. Sprawa jest na tyle poważna, że
        pozwolę sobie zgłosić pewną propozycję. Po pierwsze, proponuję, abyśmy
        dzisiaj przeszli do rozpatrywania rozdziału II Konstytucji RP, który
        zaczęliśmy wczoraj omawiać. Po drugie, proponuję nie zwoływać na
        początku marca posiedzenia Komisji Kon stytucyjnej, tylko posiedzenie
        podkomisji podstaw ustroju politycznego i społeczno-gospodarczego. Chcę,
        aby wszyscy członkowie tej podkomisji byli powiadomieni, że na początku
        marca tylko ona się zbierze. W jej pracach mogliby brać udział
        zainteresowani członkowie Komisji Konstytucyjnej, nie będący członkami
        podkomisji, gdyż sprawa, która będzie rozpatrywana wydaje się ważna z
        punktu widzenia przyszłego ustroju naszego państwa. Marcowe posiedzenie
        podkomisji byłoby posiedzeniem 3-dniowym. Jak dzisiaj zdążyłam się
        zorientować, jesteśmy dopiero na początku drogi do wypracowania konsensu
        w sprawie brzmienia art. 15.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Chcę poprzeć, a jednocześnie uzupełnić wniosek o odroczenie dzisiejszych
        obrad do godz. 15. Podkomisja podstaw ustroju politycznego i
        społeczno-gospodarczego powinna w tym czasie dokonać próby znalezienia
        rozwiązania kompromisowego w sprawie treści art. 15. Jeżeli podkomisji
        nie uda się tego dokonać, to powinna ona zakończyć swe prace
        stwierdzeniem, że w swoim składzie nie osiągnęła porozumienia co do
        treści art. 15. W ten sposób powinniśmy załatwić pewien epizod naszej
        pracy. Rozwiązanie przyjęte w sprawie art. 15 musi być kompromisowe.
        Jest to zupełnie jasne. Jeżeli chcemy szukać kompromisu, to może warto
        sięgnąć do rozwiązań, które już były przedmiotem tego kompromisu, który
        przez dziesiątki lat nie budził wątpliwości. Chcę odwołać się do
        kompromisu, który został przyjęty po bardzo burzliwych, żmudnych pracach
        w Sejmie Ustawodawczym w 1921 r. Wyraz tego kompromisu znajduje się w
        stosownej poprawce do art. 15, którą miałem zaszczyt złożyć osobiście.
        Chcę przypomnieć, że kompromis, o którym mówię, był niewątpliwie
        kompromisem także w pierwszych latach PRL, ponieważ został on, jako
        przepis konstytucyjny, uznany za obowiązujący zarówno w okresie KRN, jak
        i pod rządami małej konstytucji z 1947 r. Jeśli jakiś przepis
        obowiązywał nieprzerwanie, również po wojnie, do 1952 r., to nie sądzę,
        że był to przepis — biorąc pod uwagę klimat czasu — który by w
        czymkolwiek dawał przewagę kościołowi. Raczej było przeciwnie. Myślę, że
        dążenie do powtórzenia tego kompromisu powinno przyświecać pracom
        podkomisji. Jeżeli tak się nie stanie, to wówczas okaże się, że nawet
        to, co było uznawane do 1952 r., dzisiaj nie może być uznane. Widocznie
        poszliśmy jeszcze dalej w niektórych kwestiach niż miało to miejsce w
        latach czterdziestych i pięćdziesiątych.
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
        Poseł R. Bugaj ma pytanie do posła L. Moczulskiego.
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
        Czegoś tutaj nie rozumiem. Mówiliśmy wcześniej, że osiągnęliśmy pewien
        postęp, gdyż udało się uzgodnić stanowisko między wszystkimi kościołami.
        Art. 15 ust. ] proponowany przez posła L. Moczuiskiego, jak rozumiem,
        brzmi następująco: „Wyznanie rzymskokatolickie będące religią
        przeważającej większości narodu zajmuje w Rzeczypospolitej naczelne
        stanowisko wśród równoprawnych wyznań”. Nie chciałbym zabierać głosu w
        kwestii terminu: obowiązywania tego zapisu. Nie jest to chyba żadna
        rekomendacja, że w komunistycznej Polsce coś obowiązywało, gdyż było to
        obowiązywanie szczególne. Myślę, że nie jest to baza, która może być
        zaakceptowana jako konsens między kościołami. Nie rozumiem propozycji
        posła L. Moczulskiego.
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
        Chcę zakomunikować, iż przedstawiciele kościołów oraz wyznań religijnych
        zaproponowali, żeby dzisiaj odbyć wspólne posiedzenie, w którym
        uczestniczyliby wnioskodawcy propozycji do art. 15: reprezentanci
        kościołów, poseł T. Mazowiecki, którego propozycja jest osią dyskusji,
        poseł W. Cimoszewicz, który w pewnym sensie złożył zbliżony projekt oraz
        przedstawiciele Prezydenta RP. Jeżeli taka propozycja spotkania
        zostałaby przyjęta, to w drugiej części przerwy zebrałaby się podkomisja
        podstaw ustroju politycznego i społeczno-gospodarczego, która odbyłaby
        dyskusję nad ustaloną już wersją przepisu dotyczącego relacji pomiędzy
        kościołem a państwem. Mam pytanie do członków Komisji Konstytucyjnej,
        czy przyjmują taki tok procedowania? Za chwilę ogłosilibyśmy przerwę.
        Ponownie spotkalibyśmy się o godz. 15. Rzeczywiście, opinia publiczna
        oczekuje na wynik prac Komisji Konstytucyjnej, dlatego nie możemy ich
        przedłużać, gdyż moglibyśmy spotkać się z zarzutem ich niepoważnego
        traktowania.
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
        Sprawdźmy przynajmniej, czy jest quorum. Jak ogłosimy przerwę, może się
        okazać, że nie ma wystarczającej liczby członków podkomisji. Byłoby to
        najgorsze z możliwych rozwiązań.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Rozumiem obawę przewodniczącego R. Bugaja, czy podkomisja będzie miała
        quorum. W tej chwili do quorum brakuje jednej osoby. Proponuję
        zaapelować do przedstawicieli klubów parlamentarnych, aby po ogłoszeniu
        przerwy podjęli działania dyscyplinujące, tak żeby członkowie podkomisji
        podstaw ustroju politycznego i społeczno-gospodarczego przybyli na
        posiedzenie, któremu będzie przewodniczył poseł R. Bugaj. Jest to sprawa
        kluczowa I nie możemy tolerować sytuacji niemożności uzyskania quorum.
        Klub SLD deklaruje, że takie działania dyscyplinujące podejmie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/BentkowskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Bentkowski (PSL):</strong>
        Chciałem uczulić członków podkomisji, która będzie pracowała nad
        brzmieniem art. 15, że Polskie Stronnictwo Ludowe na ostatnim kongresie
        przyjęło bardzo wy | raźny zapis w Swoim programie — wiążący nas
        wszystkich jako członków PSL — który jest iden tyczny z treścią
        konkordatu. Określa on stosunek kościoła do państwa. Chcę, aby wszyscy
        zdali sobie sprawę, jakie będzie stanowisko PSL w tej materii. Od tego
        stanowiska nie możemy odejść.
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
        Skoro nie ma głosów przeciwnych, zarządzę przerwę. Może spra wdźmy
        przedtem obecność. Prosi o to poseł Łybacka.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Jeżeli przewodniczący S. Pastuszka zarządzi przerwę do godz. 15, to
        sprawdzanie w tej chwili obecności nie jest potrzebne. Będzie ono
        potrzebne na posiedzeniu podkomisji, która będzie obradowała pod
        przewodnictwem posła R. Bugaja. Zadbajmy o to, aby było tam quorum.
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
        W dzisiejsze obrady wkradł się pewien chaos. Oczywiście że możemy
        sprawdzić obecność, żeby się zorientować, ilu nas dokładnie jest. Od
        tego mamy listę obecności. Czy poseł K. Łybacka podtrzymuje wniosek o
        sprawdzenie obecności?
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
        Jeżeli wniosek ten spotyka się z tak zgodnym sprzeciwem, to jestem
        skłonna go natychmiast wycofać.
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
        Informuję, że przerwa w obradach Komisji Konstytucyjnej będzie trwała do
        godz. 15. O tej właśnie godzinie ponownie spotykamy się w sali plenamej
        Senatu. Na godz. 12.30 zaplanowane jest posiedzenie podkomisji podstaw
        ustroju politycznego i społeczno-gospodarczego. Przyjmujemy propozycję
        posła J. Jaskierni, że kluby parlamentarne powinny zdyscyplinować swoich
        członków uczestniczących w pracach podkomisji, której przewodniczy poseł
        R. Bugaj. [Po przerwie]
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
        Czekamy na przybycie posła R. Bugaja, który przedstawi sprawozdanie z
        posiedzenia podkomisji podstaw ustroju politycznego i
        społeczno-gospodarczego. Może sam zrelacjonuję przebieg tego
        posiedzenia, a poseł R. Bugaj uzupełni moją wypowiedź.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Czy jest jakaś przyczyna usprawiedliwiająca nieobecność przewodniczącego
        R. Bugaja?
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
        Przewodniczący R. Bugaj doskonale wiedział, że wznawiamy obrady o godz.
        15.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Byłoby dobrze, aby to poseł R. Bugaj przedstawiał nam sprawozdanie
        podkomisji.
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
        Może zróbmy krótką przerwę. W tym czasie dotrze do nas zapewne poseł R.
        Bugaj. Poseł Sławomir Szatkowski (PSL): Przedyskutujmy w tym czasie
        sprawę zupełnie inną. Czy powinniśmy dalej pracować w takim tempie? Nie
        możemy pracować w tzw. terenie, gdyż co tydzień jesteśmy w Warszawie.
        Mamy przecież jakieś zobowiązania wobec swoich wyborców.
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
        Harmonogram prac Komisji Konstytucyjnej będzie dyskutowany dopiero
        jutro. Na każdy miesiąc są planowane po dwa spotkania 3-dniowe. Moim
        zdaniem, powinniśmy się jednak koncentrować na tak ważnym akcie, jakim
        jest Konstytucja RP po to, aby do końca roku powstał jej jednolity
        tekst, który przedłożymy Zgromadzeniu Narodowemu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krzysztof Kamiński (KPN):</strong>
        Rozumiem, że przewodniczący S. Pastuszka otworzył po przerwie
        posiedzenie Komisji Konstytucyjnej.
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
        W tej chwili oczekujemy jeszcze na posła R. Bugaja.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krzysztof Kamiński (KPN):</strong>
        Jeśli nieobecność posła R. Bugaja jest jedyną przyczyną rażącego
        nieprzestrzegania ustaleń Komisji Konstytucyjnej Zgromadzenia
        Narodowego, to w tym momencie protestuję. Jesteśmy Komisją
        Konstytucyjną. Ustaliliśmy pewien porządek. Dwukrotnie złeciliśmy
        podkomisji podstaw ustroju politycznego i społeczno-gospodarczego próbę
        znalezienia kompromisowego zapisu. W związku z tym oczekiwałem, że o
        godz. 15 będę już miał wydrukowany tekst zawierający pięć, osiem czy
        piętnaście wariantów art. 15, nad którymi in gremio rozpocznie się
        dyskusja, zakończona jutro rano głosowaniem. Tymczasem okazuje się, że
        mamy tylko wysłuchać jakiegoś omówienia przebiegu prac podkomisji.
        Podkomisja nie jest miejscem, gdzie podejmuje się decyzje. Do tego jest
        uprawniona wyłącznie Komisja Konstytucyjna. Jeśli dalej będzie tak
        przebiegała praca, to rzeczywiście głos posła S. Szatkowskiego jest
        słuszny; powinniśmy wrócić do pracy poselskiej i senatorskiej w tzw.
        terenie, skoro nie potrafimy zorganizować pracy nad konstytucją.
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
        Pozwolę sobie odpowiedzieć posłowi K. Kamińskiemu. Podkomisja zakończyła
        obrady o godz. 14.45. Rozeszliśmy się w przekonaniu, iż o godz. 15,
        zgodnie z ustaleniami, rozpoczniemy ponownie posiedzenie m ami nn Mi w +
        Komisji Konstytucyjnej. W tej chwili brakuje tylko posła R. Bugaja.
        Jednocześnie chcę wyjaśnić, że podkomisja otrzymała od Komisji
        Konstytucyjnej zlecenie znalezienia kompromisowej formuły art. 15.
        Dyskusja nad taką formułą toczyła się rano od godz. 9 do 11. Jaki był
        zakres tej dyskusji, wszyscy wiedzą. Po południu do osiągnięcia
        kompromisu było bardzo blisko. Pozostały rozbieżności właściwie co do
        dwóch kwestii. Z tego też względu podkomisja nie była w stanie
        przedłożyć członkom Komisji Konstytucyjnej odpowiednich dokumentów na
        piśmie. Nie chciałbym wyręczać posła R. Bugaja, który ponosi
        odpowiedzialność za pracę podkomisji. Mam jednak nadzieję, że
        przewodniczący podkomisji podstaw ustroju politycznego i
        społeczno-gospodarczego przedstawi członkom Komisji Konstytucyjnej tok i
        efekt pracy kierowanego przez siebie zespołu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Gdyby nieobecność posła R. Bugaja stała się dłuższa niż wcześniej
        zakładaliśmy — przypominam, że praca Komisji Konstytucyjnej ma się
        dzisiaj zakończyć ok. godz. 16 — to przyłączyłbym się do wyjściowej
        propozycji senatora S. Pastuszki, że albo on jako zastępca
        przewodniczącego Komisji Konstytucyjnej, albo inny upoważniony
        przedstawiciel podkomisji poinfornowałby nas o rozwoju wydarzeń.
        Jesteśmy tutaj indagowani przez dziennikarzy i jest duże zainteresowanie
        opinii publicznej. Z tego względu chcielibyśmy wiedzieć, do jakich
        ustaleń doszła podkomisja i z jakich przyczyn nie mamy rzeczywistego
        efektu jej pracy w postaci pisemnych przedłożeń do art. 15, które
        mieliśmy przedyskutować po to, aby nad nimi jutro głosować. Jeśli
        przewodniczącego R. Bugaja w dalszym ciągu nie będzie, to prosiłbym,
        żeby przewodniczący S. Pastuszka albo inny członek podkomisji,
        ewentualnie któryś z ekspertów, poinformował nas o rozwoju wydarzeń 1 o
        przyczynach zaistniałych trudności.
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
        Jeśli do godz. 15.15 nie będzie posła R. Bugaja, przewodniczącego
        podkomisji podstaw ustroju politycznego i społeczno-gospodarczego, kto
        inny przedstawi sprawozdanie z jej dzisiejszych prac. Być może będę to
        ja oraz główni wnioskodawcy propozycji brzmienia art. 15: poseł T.
        Mazowiecki i poseł W. Cimoszewicz.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Nie znam powodów nieobecności posła R. Bugaja. Komisja Konstytucyjna nie
        może dalej „grzęznąć” I nie pracować. Jeżeli do godz. 15.15 nie pojawi
        się poseł R. Bugaj, możemy przystąpić do rozpatrywania przepisów
        rozdziału II Konstytucji RP. Wczoraj odbyliśmy długą dyskusję nad
        tytułem tego rozdziału, natomiast nie rozpoczęliśmy pracy merytorycznej.
        Jutro o godz. 9, kiedy wznowi obrady Komisja Konstytucyjna, można
        zrekapitulować stan prac podkomisji i ewentualnie podjąć
        rozstrzygnięcia, ocz wiście po krótkim referacie przewodniczącego R.
        Bugaja i po wymianie poglądów. Gdy minie godz. 15.15 bardzo proszę o to,
        żebyśmy rozpoczęli prace nad przepisami rozdziału II Konstytucji RP.
        Prośbę tę wystosuję do przewodniczącego S. Pastuszki.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krzysztof Kamiński (KPN):</strong>
        Jest tylko pewien problem; nieobecny jest poseł J. Gwiżdż,
        przewodniczący podkomisji praw i obowiązków obywateli. Widzę, że z
        frekwencją jest coraz gorzej. Powinno nas być 56 posłów i senatorów,
        tymczasem obecnych jest tylko kilku, czy kilkunastu. Dzieje się coś
        niedobrego.
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
        Pragnę wyjaśnić, że nieobecność posła J. Gwiżdża jest usprawiedliwiona
        ze względu na stan zdrowia.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Rozumiem, że za minutę podejmiemy ostateczną decyzję. Gdyby poseł R.
        Bugaj w tym czasie nie dotarł, chętnie wysłuchalibyśmy — był już taki
        precedens w pracach Komisji Konstytucyjnej — innego przedstawiciela
        podkomisji podstaw ustroju politycznego i społeczno-gospodarczego. Wiem,
        że nie ma formalnie funkcji zastępcy przewodniczącego podkomisji; są za
        to jej członkowie. Chodzi tylko o zreferowanie rozwoju wydarzeń.
        Dlaczego uważam, że powinniśmy dzisiaj dokończyć dyskusję w tej sprawie?
        Nie wiemy np., z jakich przyczyn podkomisja nie dokończyła swych prac.
        Gdyby jedyną przyczyną okazał się brak czasu spowodowany trwającymi
        dyskusjami, to wnosiłbym, aby po zakończeniu obrad Komisji
        Konstytucyjnej w dniu dzisiejszym, tzn. o godz. 16, zaprosić podkomisję
        podstaw ustroju politycznego i społeczno-gospodarczego, aby kontynuowała
        swoje prace — jest dzisiaj jeszcze kilka godzin do wykorzystania — po
        to, żeby jutro uzyskać ostateczne sprawozdanie. Nie powinniśmy odwlekać
        podejmowania decyzji. Na dziś ich podjęcie jest bardzo trudne. Jeśli
        chodzi o art. 15, było kilka przedłożeń podkomisji. Słyszę, że jest
        także wariant kompromisowy. Są też inne modyfikacje tego przepisu.
        Uważam, że powinniśmy stworzyć przesłanki dla podkomisji, żeby zamknęła
        prace w tej jednej konkretnej sprawie i żebyśmy jutro mogli decydować.
        Rozumiem, że minęła godz. 15.15, zatem wnoszę o poinformowanie nas, co
        było przedmiotem obrad podkomisji.
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
        Są dwa wnioski formalne: — wniosek posła J. Szymańskiego o przystąpienie
        do rozpatrywania przepisów rozdziału HH Konstytucji RP, mówiącego o
        wolnościach, prawach i obowiązkach obywateli oraz — wniosek posła J.
        Jaskierni.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Czy mogę zmodyfikować swój wniosek?
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
        Proszę bardzo.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Mój wniosek wcale nie jest przeciwstawny do wniosku posła J. Jaskierni.
        Chciałbym, aby po przedstawieniu informacji na temat przebiegu prac
        podkomisji ustroju politycznego i społeczno-gospodarczego przystąpić do
        rozpatrywania przepisów rozdziału II Konstytucji RP. Z uwagi na to, że
        dzisiaj rytm pracy Komisji Konstytucyjnej był nieco inny niż zwykle,
        straciliśmy sporo czasu. Należałoby zatem pracować efektywniej.
        Prosiłbym, aby po wspomnianej sekwencji informacji, przystąpić do
        realizacji mojego postulatu. Tylko pod takim warunkiem modyfikuję swój
        wniosek.
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
        W takiej sytuacji przystępuję do zrelacjonowania przebiegu posiedzenia
        podkomisji. W czasie przerwy w obradach Komisji Konstytucyjnej
        przedstawiciele kościołów i wyznań religijnych opracowali kompromisową
        formułę przepisu konstytucyjnego, dotyczącego stosunków kościół-pań-
        stwo. Ta formuła stała się przedmiotem dyskusji. Dodatkowo były
        dyskutowane propozycje przedłożone przez posła W. Cimoszewicza i posła
        T. Mazowieckiego. Główny spór dotyczył następujących kwestii: —- po
        pierwsze zapisu, czy konkordat „może regulować , czy „reguluje ...”
        Widzę, że przybył już poseł R. Bugaj, który jest bardziej ode mnie
        kompetentny w zakresie referowania przebiegu prac podkomisji. Przekazuję
        więc mu głos.
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
        Przepraszam za małe spóźnienie. Pierwsza wiadomość, którą muszę
        przekazać, nie jest bynajmniej optymistyczna. Wydawało się, że jesteśmy
        bardzo bliscy osiągnięcia konsensu, jednak po szczegółowej dyskusji
        okazało się, że konsens nie został osiągnięty. Podkomisja nie mogła
        dalej procedować, dlatego że podczas dzisiejszego posiedzenia powstały
        nowe warianty art. 15. Wobec zgłoszenia ich w takim trybie, są one
        własnością plenarnego posiedzenia Komisji Konstytucyjnej. Nie mieliśmy,
        jak sądzę, mandatu, aby dalej się nimi zajmować. Chcę pokrótce
        zreferować przebieg posiedzenia podkomisji. Mimo że nie osiągnęliśmy
        konsensu, osiągnęliśmy spory postęp. Została przedstawiona, uzgodniona
        przez przedstawicieli kościołów, nowa wersja art. 15. Poprzednia, którą
        przedstawił poseł T. Mazowiecki, miała również akceptację reprezentantów
        kościołów. Nowa wersja art. 15 wypłynęła jako wersja wyraźnie bliższa
        konsensowi. Miała ona treść następującą: Władze i instytucje publiczne w
        Rzeczypospolitej Polskiej zachowują neutralność w sprawach przekonań
        religijnych, światopoglądowych i ideologicznych. 2. Kościoły i związki
        wyznaniowe są równouprawnione. 3. Kościoły i związki wyznaniowe są
        oddzielone od Państwa oraz korzystają z autonomii i niezależności w
        wykonywaniu swoich zadań. 4. Sytuację prawną kościołów i związków
        wyznaniowych określają ustawy uchwalone po porozumieniu się z ich
        właściwymi przedstawicielami, a w odniesieniu do Kościoła katolickiego
        również umowa międzynarodowa ze Stolicą Apostolską ratyfikowana na
        podstawie upoważnienia wyrażonego w ustawie. 5. W celu realizacji praw
        człowieka i potrzeb obywateli Państwo współdziała z kościołami i
        związkami wyznaniowymi . W toku dyskusji przedmiotem szczególnie spornym
        stało się kiłka rzeczy. W ust. 1 zakwestionowano określenie „władze i
        instytucje publiczne”, a właściwie tylko „instytucje publiczne”, w
        następstwie czego zgłoszono inną propozycję tego określenia: „władze
        publiczne i instytucje wykonujące zadania Państwa '. Owa propozycja,
        poza krytyczną uwagą ze strony przedstawicieli Kościoła katolickiego
        uzyskała, jak mi się wydaje, wsparcie. Z.godzóno się rozdzielić ust. 4,
        tak by osobno zapisać kwestie dotyczące pozycji Kościoła katolickiego i
        osobno — kwestie pozycji pozostałych kościołów i związków wyznaniowych.
        Kolejnym przedmiotem sporu, który przesądził, że konsens się jednak nie
        pojawił, były dwie rzeczy. Bardzo proszę członków podkomisji, aby mnie
        poprawili, jeśli coś nieprecyzyjnie zrelacjonuję. Pierwsza rzecz sporna
        była związana z zapisem ust. 3, który brzmi następująco: „Kościoły i
        związki wyznaniowe są oddziełone od Państwa oraz korzystają z autonomii
        i niezależności w wykonywaniu swoich zadań”. Pojawił się pogląd, że
        „zadania” powinny zostać bardziej doprecyzowane. Został jednak zgłoszony
        sprzeciw wobec dalej idącego doprecyzowania. Drugą rzeczą sporną było
        użycie spójnika „oraz” w zapisie dotyczącym Kościoła katolickiego, gdzie
        mówi się: „ustawy ... oraz umowa międzynarodowa”. Jeśli dobrze
        relacjonuję, to spór o te dwie sprawy czy też sprzeciw wobec tych dwóch
        spraw ze strony części członków podkomisji, niestety, uniemożliwił nam
        osiągnięcie konsensu.
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
        Chcę zgłosić drobną uwagę do wypowiedzi posła R. Bugaja. Rzeczywiście
        nie osiągnięto porozumienia co do formuły określającej zakres autonomii
        i niezależności kościołów i związków wyznaniowych, w zakresie swoich
        zadań, czy też zadań bardziej doprecyzowa m 0 o a TE —— a — o a: nych.
        Proponowano np. określenie „zadań religijnych i organizacyjnych. W
        drugiej kwestii, mam wrażenie, spór miał nieco inny wymiar. Nie chodziło
        o to, czy umowa międzynarodowa, która określa sytuację prawną Kościoła
        katolickiego, ma zostać w art. 15 wymieniona, czy nie wymieniona, tylko
        czy ma być ona wymieniona przy użyciu formuły sugerującej, że zawarcie
        tej umowy jest niezbędne, obowiązkowe, czy też przy użyciu formuły
        stwierdzającej dopuszczalność tego typu umowy. Tylko tego dotyczyła
        różnica poglądów.
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
        Potwierdzam to, co powiedział poseł W. Cimoszewicz. Wydawało mi się, że
        precyzyjnie wyraziłem, iż w tym drugim przypadku zaistniał spór o
        spójnik „oraz”. Nie było sporu o to, czy wymienić i ustawy, 1 umowę
        międzynarodową. Osiągnięto w tym zakresie konsens. Spierano się jednak,
        czy można się tu posłużyć spójnikiem „oraz, Według ocen niektórych
        ekspertów wyraz „„oraz” zawierał swego rodzaju przymus zawarcia umowy
        międzynarodowej — konkordatowej. Inni eksperci uważali, że ów spójnik
        takiego przymusu nie implikuje. Nie zdołaliśmy jednak tego uzgodnić.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krzysztof Kamiński (KPN):</strong>
        Chcę wyjaśnić jedną sprawę. Poprzednio mieliśmy do czynienia z
        przedłożeniem zaproponowanym przez posła T. Mazowieckiego, które, jak
        zrozumiałem, było odzwierciedleniem poglądów kościołów. Ponieważ mamy
        nową wersję zapisu art. 15 zaproponowaną przez reprezentantów kościołów,
        chcę zapytać, co z inicjatywą posła T. Mazowieckiego? Na ile wyraża on
        zgodę na przyjęcie nowej wersji zapisu art. 15? Jeśli zapis ten
        składający się z 5 ustępów ma być przedmiotem naszych dalszych prac, to
        co z pozostałymi wersjami zapisów art. 15?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Rozumiem, że intencją zachęcenia podkomisji do dalszej pracy było
        znalezienie formuły kompromisowej, która mogłaby być zaaprobowana przez
        całą Komisję Konstytucyjną. W związku ze sprawozdaniem przedłożonym
        przez posła R. Bugaja nasuwa się następująca refleksja: rozumiem, że nie
        udało się osiągnąć konsensu, ale ów brak konsensu nie dotyczy
        wszystkiego, co w nowej wersji art. 15 zostało zawarte. Uważam, że nasze
        postępowanie powinno być następujące: te ustępy, w których osiągnięto
        konsens, powinno się zachować w takiej wersji, w jakiej obecnie są.
        Ustępy, w których pojawiły się rozbieżności, powinniśmy rozpisać na
        ujęcia wariantowe, współ - działając z Biurem Legislacyjnym i
        zainteresowanymi wnioskodawcami. Jeśli nawet podkomisja nie będzie tych
        propozycji firmowała, to i tak chciałbym, żebyśmy w dniu jutrzejszym
        mieli do dyspozycji rozpisane ujęcia wariantowe, które umożliwią nam
        podjęcie decyzji, gdyby okazało się, że w toku dyskusji nie osiągniemy
        porozumienia co do jednolitego wariantu. Dlatego też, niezależnie od
        tego, czy podkomisja będzie to firmowała, czy nie, każdy z posłów i
        senatorów może się przecież pod jakimś wariantem podpisać i później go
        rekomendować. Ważne jest, abyśmy w jutrzejszych dokumentach otrzymali
        zapis art. 15 w takiej wersji, że ustępy objęte konsensem wystąpią w
        formie jednolitej, stanowiąc wyraz uzgodnień członków Komisji
        Konstytucyjnej, przedstawicieli kościołów, a także ekspertów, natomiast
        ustępy, co do których są rozbieżności — których nie da się przezwyciężyć
        nawet po wyjaśnieniach — będą ujęte wariantowo. Mielibyśmy wtedy
        czytelne pole opcyjne przed podjęciem decyzji.
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
        Wyrażam gwałtowny i stanowczy sprzeciw wobec takiego rozumienia
        konsensu. Albo się dochodzi wspólnie do pewnej uzgodnionej formuły
        całościowej, albo nie. Zgodzimy się na pewne ustępstwa, a wy
        przegłosujecie później na posiedzeniu Komisji Konstytucyjnej to, co
        myśmy kwestionowali. Przepraszam bardzo, ale to nie ma nic wspólnego z
        konsensem. Proszę nie posługiwać się sformułowaniem „konsens” w
        odniesieniu do prac podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Chcę, abyśmy się dobrze zrozumieli z senatorem K. Kozłowskim. Nie
        sugeruję wcale konsensu selektywnego. Nie wiem nawet, w jakim trybie
        będziemy dalej pracowali. Mamy przed sobą pewien tekst; wysłuchaliśmy
        także sprawozdania posła R. Bugaja. Wątki wypływające z tego
        sprawozdania nie są uwidocznione w tekście, co bardzo utrudnia
        zorientowanie się, gdzie tak naprawdę tkwi spór i czy ma on charakter
        legislacyjny, czy też merytoryczny. Była już dzisiaj eksponowana rola
        spójnika „oraz ; spójnik ten może znaczyć to, a może też znaczyć coś
        innego. Ta sprawa wymaga wyjaśnienia. Być może, jest to problem natury
        legislacyjnej, który da się wyjaśnić i nie będzie wtedy stanowił bariery
        dla osiągnięcia konsensu. Chciałbym, abyśmy przyjęłi następujące
        stwierdzenie: w tym, co zostało nam przedłożone, są obszary, w których
        osiągnięto konsens. Zdaję sobie sprawę, że senator K. Kozłowski ma prawo
        powiedzieć: „albo będzie całość, albo nic”. Chcielibyśmy, jako
        członkowie Komisji Konstytucyjnej, widzieć jednak te rozbieżności, nawet
        w postaci tekstu. Zupełnie czym innym jest, czy taki tekst zaaprobujemy.
        Dopóty nie widzimy innych propozycji choćby w ujęciu wariantowym, nie
        bardzo wiemy, na czym właściwie polega spór. Członkowie podkomisji
        obradowali nad art. 15 kilka godzin, my natomiast mamy jednolity tekst
        oraz sprawozdanie posła R. Bugaja, które jest ulotne.
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
        Proponuję, aby szybko nanieść do tekstu, który otrzymali członkowie Ko
        Fosiedzenia Komisji Konstytucyjnej ZN misji Konstytucyjnej poprawki —
        nawet te, które zostały przyjęte w ostatnim momencie. Myślę, że zaraz
        będzie to zrobione. Gotowe przedłożenie podkomisji zostanie dostarczone
        zainteresowanym do ręki. Będzie w nim uwidocznione, do jakich zapisów
        zgłoszono Sprzeciw.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Rozumiem, że tekst, który wcześniej otrzymaliśmy, nie jest ostatecznym
        efektem pracy podkomisji podstaw rozwoju politycznego i
        społeczno-gospodarczego.
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
        Jest to tylko punkt wyjściowy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        I to jest właśnie mylące. W czasie obrad członkowie podkomisji doszli do
        konsensu, który okazuje się, brzmiał nieco inaczej. Tego ostatecznego
        brzmienia jak do tej pory nie widzimy.
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
        Jeżeli zgadzamy się na sformułowanie: „oddzielone od państwa, ale w
        autonomii wykonujące swoje zadania”, to w takim razie przyjęcie naszej
        zgody na wyraz „oddzielone” i jednoczesne zakwestionowanie wyrazu
        „zadań” jest niczym innym jak pogrzebaniem konsensu. Konsens wówczas
        przestaje po prostu istnieć. Godzę się na pierwszy fragment zapisu;
        jednocześnie większość członków podkomisji kwestionuje drugi fragment
        tego samego zapisu. W takim wypadku raczej nie ma mowy o konsensie.
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
        Dla informacji powiem, że mój projekt zapisu art. 15 — właściwie nie był
        to tylko mój projekt; był on jedynie przeze mnie zgłoszony i został
        uzgodniony przez przedstawicieli kościołów — który otrzymali członkowie
        Komisji Konstytucyjnej, był niewątpliwie wyjściem naprzeciw różnym
        dyskutantom. W niektórych punktach nie całkiem podzielałem owo wyjście.
        Wszystkie punkty zostały przedyskutowane i odniosłem wtedy wrażenie, że
        pod koniec dyskusji byliśmy rzeczywiście bliscy uzgodnień pewnego
        tekstu. Jednak na skutek sprzeciwu posła W. Cimoszewicza i poseł K.
        Łybackiej — od tych właśnie posłów poseł J. Jaskiernia mógł się bliżej
        dowiedzieć, o co tak naprawdę chodziło — do konsensu nie doszło,
        ponieważ nasze ustępstwa zostały potraktowane nie tak, jak należało.
        Żądano od nas następnych ustępstw. W całej rozciągłości podzielam zdanie
        senatora K. Kozłowskiego, że można by oczywiście przedstawić to, do
        czego już doszliśmy, a co nie zostało zaaprobowane przez poseł K.
        Łybacką i posła W. Cimoszewicza. | Jeżeli dalej będzie prowadzona
        dyskusja nad brzmieniem art. 15, my również będziemy musieli wycofać się
        z wcześniejszych kompromisowych uzgodnień. Obrady w dniu 22.02.1995 r.
        (20)
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
        Mam prośbę do posła T. Mazowieckiego, aby zechciał się wycofać ze
        stwierdzenia, że nie zaakceptowałam jakiegoś zapisu. Po prostu nie
        miałam jeszcze jasności. Cały czas oczekiwaliśmy wyjaśnienia, co należy
        rozumieć przez określenie „zadania”. Jest to jednak dalekie od
        niezaakceptowania jakiegoś zapisu.
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
        Wydaje mi się, że w dyskusji powinniśmy się raczej skoncentrować nad
        różnicami. Czy powinno być sformułowanie „określa konkordat , czy też
        wyrażenie „może określać umowa międzynarodowa ze Stolicą Apostolską”?
        Podałem to jako przykład. Najpierw musimy rozstrzygnąć tego typu
        pytania, sformułowane m.in. przez posła W. Cimoszewicza.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Wydaje mi się, że propozycja wskazania obszarów zgody, a także niezgody
        w przedłożeniu przygotowanym przez podkomisję zasługuje na poparcie.
        Proszę zauważyć, że cały czas pracujemy z myślą uzyskania pewnego
        konsensu. Nie udaje się nam jednak go wypracować przy bardzo wielu
        przepisach. Stąd pojawiają się poprawki i kolejne głosowania. Ujęcie
        graficzne propozycji zapisów na pewno przybliżałoby obszary zgody, a
        także niezgody. Wymaga rozstrzygnięcia także kilka innych poprawek
        dotyczących tej samej materii regulacji. Chciałbym postawić pytanie: czy
        biorąc pod uwagę przedłożenie podkomisji — to uzupełnienie graficznie
        wskazujące obszary porozumienia i braku porozumienia odnośnie do
        konkretnych przepisów — aktualne są nadal warianty art. 15 z projektu
        jednolitego Konstytucji RP — warianty I, II i III? Chcę w tej sprawie
        uzyskać całkowitą pewność. Wcześniej sądziłem, że po to są prowadzone
        prace podkomisji, aby został zmieniony pewien stan przeszły i że jest to
        próba szukania konsensu. O wyjaśnienie tej sytuacji proszę posła R.
        Bugaja.
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
        Naszą intencją było osiągnięcie konsensu. W sytuacji, gdy go nie
        osiągnęliśmy musimy uznać, że wszystkie warianty zapisu art. 15 są nadal
        aktualne. Poprosiłem o ich przepisanie. Podam treść art. 15, którą
        uzgodniliśmy: „l. Władze publiczne i instytucje wykonujące zadania
        państwa w Rzeczyposplitej Polskiej zachowują neutralność w sprawach
        przekonań religijnych, Światopoglądowych i ideologicznych. 2. Kościoły i
        związki wyznaniowe są równouprawnione. 3. Kościoły i związki wyznaniowe
        są oddzielone od państwa oraz korzystają z autonomii i niezależności w
        wykonywaniu swoich zadań”. Nie rozstrzygnęliśmy, czy nie należy
        uzupełnić tego ustępu o wyrazy „religijnych i organizacyjnych . Padały
        głosy popierające taką propozycję oraz głosy przeciwne. EN NEN Nie było
        sporów co do tego, że ari. 15 ust. 4 powinien być podzielony na dwie
        części. Część pierwsza dotyczyłaby sytuacji Kościoła katolickiego:
        „Sytuację prawną Kościoła Katolickiego określają ustawy oraz umowa
        międzynarodowa ze Stolicą Apostolską ratyfikowana na podstawie
        upoważnienia wyrażonego w ustawie . Druga część miałaby brzmienie:
        „Sytuację prawną innych kościołów i związków wyznaniowych określają
        ustawy uchwalone po porozumieniu się z ich właściwymi przedstawicielami
        ”. Do ust. 5 nie zgłoszono poprawek. Spór dotyczył wyrazu „Oraz . Poseł
        Włodzimierz Cimoszewicz: Mam wrażenie, że informacja dotycząca sporu
        wokół treści art. 15 ust. 4 nie jest w pełni precyzyjna. Chodzi o to,
        jakiego użyć spójnika. Członkowie podkomisji wyrazili zgodę, aby treść
        tego ustępu uregulować w dwóch punktach — dwóch postanowieniach,
        niekoniecznie w dwóch ustępach. W moim przekonaniu, mogą to być dwa
        zdania tego samego ustępu. Nie rozstrzygnięta pozostała kwestia, czy w
        pierwszym punkcie — lub w pierwszym zdaniu — należy określić, co
        reguluje sytuację prawną Kościoła katolickiego, czy też określić, co
        jest ogólną zasadą regulowania sytuacji prawnej kościołów i związków
        wyznaniowych. W pierwszej wersji zapis ten brzmiałby w ten sposób, jak
        to zaprezentował poseł R. Bugaj. W drugiej wersji przepis byłby
        następujący: „Sytuację prawną kościołów i związków wyznaniowych
        określają ustawy uchwalone po porozumieniu się z ich właściwymi
        przedstawicielami”. Jest to treść zgodna z pierwszą częścią zdania
        przedstawionego podkomisji. W drugiej części tego przepisu, w zależności
        od kolejności, byłaby albo reguła dotycząca wszystkich kościołów, albo
        formuła dotycząca Kościoła katolickiego. Mogłaby ona brzmieć
        następująco: „Sytuację prawną Kościoła Katolickiego może również
        określać umowa międzynarodowa ze Stolicą Apostolską ratyfikowana na
        podstawie upoważnienia wyrażonego w ustawie”. Nie chodzi tylko o to, czy
        powyższa kwestia ma być rozstrzygnięta w jednym zdaniu przy użyciu
        wyrazu „oraz” bądź „lub”. Chodzi o to, czy nie należy zapisać wprost, iż
        konkordat jest dopuszcza|- ną formą uregulowania sytuacji prawnej
        Kościoła katolickiego. Przedstawiciel pełnomocnika obywatelskiego
        projektu konstytucji, Michał Drozdek: Chcę uzupełnić wypowiedź posła R.
        Bugaja. Mój głos, jako przedstawiciela obywatelskiego projektu
        Konstytucji RP, nie ma znaczenia przy wypracowywaniu konsensu, ponieważ
        nie jestem członkiem Komisji Konstytucyjnej, a tym bardziej podkomisji.
        Niemniej jednak myślę, iż reprezentuję znaczący odłam opinii publicznej,
        W związku z tym, chcę podkreślić, że jeżeli chodzi o art. 15 ust. 3, to
        my ze swej strony nie możemy zaakceptować — dyskutowaliśmy ten problem
        na posiedzeniach Społecznej Komisji Konstytucyjnej — oddzielenia
        kościoła od państwa. Na takim stanowisku stoimy nieprzerwanie. Zwróciłem
        też uwagę, że w art. 15 ust. 1 zbędny jest wyraz „instytucje”. Możemy
        zaakceptować neutralność światopoglądową państwa, choć, moim zdaniem,
        pojęcie to nie jest koniecznie potrzebne, bowiem kryje się pod nim pewna
        oczywistość wynikająca z praw człowieka i konstrukcji państwa
        demokratycznego. Skoro komuś na tym zależy, to nie jest to sformułowanie
        szkodliwe. Instytucje mogą wspomagać różne światopoglądy. W związku z
        tym myślę, iż byłoby szkodliwym społecznie umieszczanie nakazu ich
        neutralności Światopoglądowej. Zupełnie nie do przyjęcia jest
        oddzielenie kościoła od państwa, gdyż państwo to nie tylko instytucja,
        choć można to różnie interpretować. Gdyby było wyraźnie zapisane, iż
        chodzi tylko o instytucje, to rzecz wyglądałaby inaczej. Pragnę również
        zabrać głos w sprawie zadań — art. 15 ust. 3 — czy mają one być
        religijne, czy jakiekolwiek inne oraz co oznaczają „swoje zadania” w
        odniesieniu do kościołów. Wydaje mi się, że rolą państwa nie powinno być
        wyznaczanie zadań kościołom. Jest to relikt dawnego myślenia. Mam
        nadzieję, że propozycja taka występowała w charakterze pytania, a nie
        postulatu. Kościoły powinny same wyznaczać sobie zadania. Jeżeli nie są
        one sprzeczne z prawami człowieka ani z ogólnymi zasadami współżycia
        społecznego, to państwo nie może w nie ingerować. Kościoły są
        instytucjami obywatelskimi i jako takie mogą realizować potrzeby
        obywateli. Państwo nie powinno reglamentować zakresu działalności
        kościoła, gdyż wrócimy do czasów, kiedy mówiono: „To wolno kościołowi,
        tamtego nie wolno, tu nie mieszajcie się”. Moim zdaniem, nie byłoby
        racjonalne ze strony samych kościołów ich uczestnictwo w bezpośredniej
        działalności politycznej. W tej chwili kościoły na całym świecie
        wycofują się z takiej działalności, gdyż nie wystawiają swoich posłów,
        nie tworzą partii, starają się zachować w tym zakresie pewną wstrzemięź-
        liwość, ewentualnie — nauczać o zasadach. Jest to jednakże sprawa
        kościoła, a nie państwa. Państwo nie powinno w nią ingerować, bowiem
        mówimy o państwie demokratycznym, przestrzegającym praw człowieka, a nie
        o totalitarnym, próbującym narzucić swoje reguły obywatelom 1 wyznaczać
        im zakres działania. Chodzi nam o konstrukcję państwa „oddalonego”".
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SiemiatkowskiZbigniew.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Zbigniew Siemiątkowski (SLD):</strong>
        Pragnę zabrać głos ad vocem do ostatniej wypowiedzi. Szanując
        obywatelski projekt Konstytucji RP oraz nie kwestionując znaczących sił
        społecznych stojących za tym projektem, proszę o umożliwienie
        wypowiedzenia się na temat zadań kościoła i związków wyznaniowych
        obecnym na sali przedstawicielom kościoła i związków wyznaniowych.
        Sądzę, że mogą oni powiedzieć nam w sposób bardziej kompetentny i
        uprawomocniony o owych zadaniach i rozumieniu omawianego zapisu. Proszę
        o udzielenie głosu przedstawicielom kościoła i związków wyznaniowych.
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
        Pragnę wyjaśnić, że wszyscy zaproszeni goście mają prawo do zabierania
        głosu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krzysztof Kamiński (KPN):</strong>
        Mój wniosek jest prosty i oczywisty. W żadnym wypadku nie możemy
        kontynuować dyskusji w tak chaotyczny sposób. Myślę, że skończyliśmy
        fazę wstępnych uwag na temat propozycji brzmienia art. 15. Proszę o
        rozpoczęcie omawiania jego kolejnych ustępów. Zaczęliśmy od dyskusji nad
        ust. 4, teraz rozważamy ust. 3. Wymieniamy luźne poglądy bez określonego
        porządku. Mój wniosek jest następujący: proszę rozważać art. 15 ustęp po
        ustępie. Jeśli ma to być ostatnia próba zawarcia kompromisu bądź
        osiągnięcia konsensu, to podejmijmy ją. Jeżeli okaże się, że takiej
        możliwości nie ma, proszę stwierdzić, iż metoda kompromisowa zawiodła i
        w związku z tym powracamy do omawiania przedłożenia podkomisji — trzy
        warianty — i przedłożeń poselskich, których zdaje się, że jest osiem.
        Trudno, nie ma kompromisu; rozstrzygajmy w głosowaniach, zamiast brnąć w
        semi naryjne dysputy.
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
        Wyjaśnię, iż próbowaliśmy znaleźć kompromis w zakresie dwóch
        zasadniczych kwestii. Nasza dyskusja szła właśnie w tym kierunku.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Krzysztof Kamiński (KPN):</strong>
        Czy ust. 1 jest kompromisowy, czy nie?
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
        Zostało tylko 14 minut do zakończenia dzisiejszego posiedzenia.
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
        Chcę krótko wyjaśnić, iż spór dotyczący konkordatu jest sporem pozornym.
        Nie istnieje on, ponieważ zdanie: „Sytuację prawną Kościoła Katolickiego
        określają ustawy oraz umowa międzynarodowa ze Stolicą Apostolską
        ratyfikowana na podstawie upoważnienia wyrażonego w ustawie”, nie
        stwarza przymusu Zawarcia takiej umowy. Są tego dwie przyczyny. Po
        pierwsze, umowa międzynarodowa jest dobrowolnym porozumieniem się dwóch
        podmiotów prawa międzynarodowego. Po drugie, musi na nią wyrazić zgodę
        Sejm w ustawie. Suwerenny przedstawiciel narodu, Sejmu, nie może być w
        żaden sposób zmuszany do podejmowania decyzji w tej sprawie. Spór na
        temat istnienia jakiegoś przymusu jest sporem bezprzedmiotowym.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Wracając do pozornej polemiki z senatorem K. Kozłowskim, chcę
        powiedzieć, że po dodatkowych wyjaśnieniach ze strony posła R. Bugaja
        mamy w tej chwili bardziej Obrady w dniu 22.02.1995 r. (20 klarowny
        obraz. Wszystko to, o czym mówiłem, oraz to co błędnie zrozumiał senator
        K. Kozłowski, związane było z wyjaśnieniem, na czym polega spór. Okazuje
        się, że otrzymaliśmy tekst art. 15, który był tekstem wyjściowym, a nie
        tym, który w efekcie podkomisja wypracowała. W sumie nie było wiadomo, o
        co toczy się cały spór. Pytanie o ustalenia wcale nie jest jednoznaczne
        z sugerowaniem kompromisu lub konsensu pozornego, koślawego bądź
        jakiegokolwiek innego. Chodzi o to, aby członkowie Komisji
        Konstytucyjnej znali efekt prac podkomisji. Po drugie, mam pytanie do
        posła R. Bugaja. Czy jest możliwe, aby podkomisja podjęła jeszcze jedną
        próbę, kolejny krok, gdyż, być może, z powodu braku czasu przerwała
        rozmyślania w pewnym punkcie? Czy jest możliwe, aby po zakończeniu prac
        Komisji Konstytucyjnej jeszcze raz zwołać posiedzenie podkomisji,
        ponieważ nawet ta dyskusja, która miała miejsce w tej chwili wskazuje,
        że pewne rzeczy są, być może, pozorne, a inne wynikają z niezrozumienia?
        Być może istnieje szansa osiągnięcia konsensu. Mamy określoną metodę
        procedowania. Mamy cztery wersje zaproponowane przez podkomisję oraz
        wiele wniosków poselskich. Uważam, że w tak delikatnej sprawie
        powinniśmy podjąć dalsze próby wypracowania kompromisu. Chyba że
        podkomisja w pewnym momencie stwierdzi, iż więcej już nic nie może
        zrobić, gdyż natrafiła na nieprzezwyciężalne przeszkody. Dlatego też
        zapytuję posła R. Bugaja, czy istnieje możliwość, aby podkomisja
        spotkała się dziś po raz kolejny wraz z przedstawicielami kościołów i
        ekspertów po to, by jutro przedstawić rozwiązanie stanowiące element
        konsensu? W omawianej sprawie taki konsens miałby wymiar wręcz
        historyczny. Mocno zachęcam do jego wypracowania ze względu na los całej
        Konstytucji RP i jej społecznej percepcji.
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
        Myślę, iż możemy podjąć kolejną próbę dyskusji, tylko że stosunek do
        omawianej kwestii może się zmienić przez to, że zmieni się skład tych,
        którzy będą obecni na posiedzeniu podkomisji. Rezultat dyskusji może być
        wtedy wątpliwy. Myślę, iż zrobiliśmy już pewien postęp. Proponuję inną
        procedurę naszych prac. Chciałbym wnieść indywidualnie tekst art. 15 w
        zaprezentowanym kształcie na posiedzenie Komisji Konstytucyjnej. Wszyscy
        wiedzą, o co chodzi i mogą to przez chwilę przemyśleć. Wydaje mi się, iż
        jest nadzieja, że kształt art. 15, jaki podkomisja wypracowała w pewnym
        momencie, zostanie zaakceptowany. Zwołanie posiedzenia podkomisji w tej
        sprawie nie uważam w obecnej chwili za celowe i stwarzające szanse na
        jakiś postęp.
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
        Proponuję zebranie się klubu SLD w celu dojścia do konsensu we własnym
        gronie. Słyszymy bardzo daleko idące i otwarte wypowiedzi oraz sprzeciw,
        z jakim zetknęliśmy się już w podkomisji. Może klub SLD uzgodni wspólne
        stanowisko, a dopiero potem zwołamy posiedzenie podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Pragnę zwrócić uwagę na dwie, moim zdaniem, kluczowe kwestie. Po
        pierwsze, pragnę podzielić pogląd, który zaprezentował prof. L.
        Wiśniewski, iż zapis dotyczący konkordatu mówi jedynie o możliwości jego
        zawarcia. Nie wynika z tego żaden obowiązek. Myślę, że w sumie
        prowadzimy spór pozorny. Chcę tę tezę podkreślić bardzo wyraźnie. Pragnę
        przestrzec przed wchodzeniem na — moim zdaniem — ślepy tor dyskusji, co
        już zaprezentował przedstawiciel obywatelskiego projektu Konstytucji RP.
        Nasuwa się pytanie, jakie przepisy skrytykował pan M. Drozdek? Myślę, że
        w poszczególnych propozycjach nie ma takich przepisów. W związku z tym
        proponuję prowadzić rozmowę konstruktywną. Podzielam pogląd mojego
        kolegi klubowego, posła R. Bugaja, iż zwoływanie posiedzenia podkomisji
        w obecnym stanie rzeczy właściwie niczego nie zmieni. Uważam, że
        potrzebne jest wyspecyfikowanie — co już podkreślałem wcześniej —
        obszarów zgody, czyli efektów pracy podkomisji oraz obszarów braku
        porozumienia. Wydaje mi się, że cenna była propozycja posła W.
        Cimoszewicza, dotycząca wyspecyfikowania na trzech poziomach
        rozbieżności, jeśli chodzi o ust. 4. Mam prośbę do sekretariatu Komisji
        Konstytucyjnej, aby przygotował specyfikacje zgodnie z powyższą
        propozycją, abyśmy jutro w głosowaniu mogli przystąpić do rozstrzygnięć.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Myślę, że przynajmniej część naszej dyskusji wynika z pewnych
        nieporozumień związanych z użytymi terminami i określeniami. Zastanawiam
        się, w jakiej mierze chodzi tutaj o nieporadności w posługiwaniu się
        tymi terminami, a w jakiej — o pewną manipulację słowną. Jeżeli pewne
        terminy sprowadzimy do ich istotnej treści, wyniki mogą być zaskakujące.
        W art. 15 ust. 3 czytamy: „Kościoły i związki wyznaniowe są oddzielone
        od Państwa... — „„Państwo” jest napisane z dużej litery. W innych
        artykułach rozdziału I czytamy: „Rzeczpospolita Polska jest państwem...
        ' Jest położony bardzo wyraźny znak równości pomiędzy Rzecząpospolitą
        Polską a Państwem. Jeżeli posługujemy się wyrazem „Państwo” pisanym z
        dużej litery, to najwyraźniej nie chodzi tu o względy stylistyczne, ale
        o względy merytoryczne. Treść art. 15 ust. 3, zgodnie z zamysłem
        wnioskodawców, powinna być następująca: „Kościoły i związki wyznaniowe
        są oddzielone od Rzeczypospolitej Polskiej ...', ale przecież nikt nie
        odważy się postawić tego rodzaju tezy. Jeżeli przyjmiemy, że
        Rzeczpospolita Polska jest wspólnotą — wspólnym dobrem obywateli — to ów
        wspólnotowy charakter państwa nie pozwala na stwierdzenie, że coś, co
        jest częścią wspólnoty państwowej, jest od tego państwa oddzielone.
        Możemy najwyżej mówić o oddzieleniu kościołów i związków wyznaniowych od
        władz państwowych bądź władz publicznych. Wówczas należałoby użyć
        jednego z tych określeń, bowiem w przeciwnym razie w kontekście art. 8,
        przyjętego już przez Komisję Konstytucyjną i stwierdzającego, że
        przepisy Konstytucji RP stosuje się bezpośrednio, przepis art. 15 ust.
        3, gdzie używa się pojęcia „Państwo” pisanego z dużej litery — stosowany
        bezpośrednio — wyłączałby ze wspólnoty, jaką jest Rzeczpospolita Polska,
        kościoły i związki wyznaniowe. Mam nadzieję, że nie jest to niczyją
        intencją, chociaż nie jestem tego w zupełności pewien. Rozważmy art. 15
        ust, 5: „W celu realizacji praw człowieka i potrzeb obywatełi Państwo
        współdziała z kościołami i związkami wyznaniowymi”. Jeśli Państwo jest
        Rzecząpospolitą Polską, to nie może współdziałać. Mogą to robić władze
        państwowe. Jest to to samo zagadnienie, o którym przed chwilą mówiłem.
        Jeżeli zgodzimy się, że to organa państwowe współdziałają z kościołami i
        związkami wyznaniowymi, to i tak powstaje zastrzeżenie, które — moim
        zdaniem — jest niedopuszczalne bez akapitu: „W celu realizacji praw
        człowieka i potrzeb obywateli... ”". Konstytucja RP dopuszcza
        współdziałanie, co oznaczałoby, że w innych zakresach nie dopuszcza
        takiego współdziałania. Nie dopuszcza współdziałania np. w dziedzinie
        obrony narodowej. Obrona narodowa jest czymś innym niż prawa człowieka
        lub potrzeby obywateli. Obrona narodowa to nie tylko potrzeby obywateli.
        Jak pamiętamy z historii, np. z czasów konfederacji targowickiej, i nie
        tylko, potrzeby niektórych obywateli mogą być sprzeczne z potrzebami
        Rzeczypospolitej Polskiej. Ostatnia kwestia, na którą chcę zwrócić
        uwagę, nie wynika z manipulacji słownej, lecz z akademickiego charakteru
        użytych terminów. Nikt nie ma wątpliwości co do zasady zapisanej w art.
        15 ust. 2: „Kościoły i związki wyznaniowe są równouprawnione . Jest to
        prawda. Konstytucja RP, która działa bezpośrednio — nie ma tu żadnego
        odwołania do ustawy — będzie tworzyła pewne realne sytuacje. Wiemy, że z
        powodu możliwości wykorzystywania okazji, jakie stwarza Prawo celne bądź
        inne akty prawne, powstają związki wyznaniowe, które nadużywają tej
        nazwy. Niedawno w Krakowie powstał związek wyznaniowy, który posiadał
        pełną doktrynę religijną, a ponieważ jakiś urzędnik zakwestionował jej
        fragment, to na drugi dzień zmienił on kanony swojej wiary po to tylko,
        aby być zarejestrowanym jako związek wyznaniowy. Zdaje się, że pierwszą
        czynnością, jaką wykonał, było wystąpienie o sprowadzenie z zagranicy
        samochodu bez cła dla głowy kościoła. Jeżeli mówimy, że kościoły i
        związki wyznaniowe są równouprawnione, to generalnie jest to prawdą.
        Jeśli jednak nie wyjaśnimy, co jest kościołem, a co związkiem
        wyznaniowym, a przepisy konstytucyjne będą działać bezpośrednio, to
        Konstytucja RP może stać się źródłem istotnych nadużyć.
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
        Poseł L. Moczulski jest posłem bardzo odkrywczym i zwrócił uwagę na
        możliwą interpretację propozycji brzmienia art. 15. Jednym z
        podstawowych celów obywateli jest mieć bezpieczne państwo.
        Współdziałanie państwa z kościołem w celu zaspokojenia potrzeb obywateli
        nie wyklucza możliwości ich współdziałania w zakresie obrony państwa.
        Proponuję, aby jako ostatni wypowiedział się prof. W. Osiatyński, a
        potem ewentualnie wysłuchamy końcowych wniosków.
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
        Myślę, że znajdujemy się blisko wypracowania konsensu. Jedyną wyraźną
        różnicę poglądów stwarza zapis art. 15 ust. 3 dotyczący autonomii i
        niezależności kościoła i związków wyznaniowych w wykonywaniu swoich
        zadań. Myślę, że zapis ten we wszystkich propozycjach właściwie wyróżnia
        dwa nakładające się rodzaje działalności kościołów i związków
        wyznaniowych. Jeden rodzaj to te działania, w których kościoły miałyby
        autonomię i niezależność, tzn. takie, w które państwo nie może ingerować
        w żaden sposób. W gruncie rzeczy chodzi tu o zakres wolności kościoła.
        Drugi rodzaj działalności kościołów i związków wyznaniowych dotyczyłby
        sfery, o której mówi się w ust. 5, tzn. realizacji praw człowieka i
        potrzeb obywateli. W tym wypadku kościoły nie musiałyby zachowywać
        pełnej autonomii. W ramach zapisu ust. 5 mogłyby one wykraczać poza
        działania zawarowane do sfery autonomicznej, poprzez współdziałanie z
        władzami publicznymi. Myślę, że w zapisie powyższego ustępu doskonale
        mieszczą się działania charytatywne i inne, które nie wymagają
        autonomii, a o których mówił przedstawiciel solidarnościowego projektu
        Konstytucji RP. Jak już powiedziałem, wydaje mi się, że jesteśmy o krok
        od stworzenia kompromisowej formuły. Podzielam pogląd, iż można ją
        określić mianem historycznej. Interesuje mnie wypowiedź obecnych na sali
        przedstawicieli kościołów i związków wyznaniowych na temat tego, jak
        rozumieją pojęcie swoich zadań na tle art. 15 ust. 3, zgodnie z którym
        kościoły i związki wyznaniowe powinny korzystać z autonomii i
        niezależności. Ma to zasadnicze znaczenie dla potwierdzenia, czy
        znajdujemy się blisko osiągnięcia konsensu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Nie brałam udziału w posiedzeniu podkomisji, dlatego pewne sprawy wydają
        mi się niezrozumiałe. Pragnę nawiązać do wypowiedzi posła J.
        Szymańskiego. Jeżeli z dobrą wolą interpretujemy zapis, który miał się
        stać podstawą konsensu, to jest rzeczą oczywistą, że Konstytucja RP nie
        nakłada na inne pod Obrady w dniu 22.02.1995 r. (20) mioty
        międzynarodowe prawa zawierania umów z naszym krajem. Z, drugiej strony
        interpretacja, którą przedstawił poseł J. Szymański — rozumiem, że
        również przejawiając dążenie do wypracowania konsensu — że zdanie drugie
        w art. 15 ust. 4 nie będzie miało żadnego znaczenia prawnego i nie
        będzie nakładało w tym zakresie żadnych obowiązków, wydaje mi się
        nieporozumieniem. Po stronie podmiotów, które mają za zadanie stosowanie
        prawa i wykonywanie postanowień Konstytucji RP, pojawia się wówczas
        obowiązek dążenia do uregulowania statusu prawnego poprzez konkordat,
        czyli umowę międzynarodową ze Stolicą Apostolską, co jednak nie nakłada
        podobnego obowiązku na Stolicę Apostolską. O ile dobrze sobie
        przypominam, to żaden z klubów poselskich w czasie debaty sejmowej nie
        wykluczał i nie zaprzeczał takiej możliwości. W tej chwili jest dla mnie
        rzeczą niezrozumiałą, dlaczego proponowane sformułowanie miałoby budzić
        sprzeCiW, Próba dopisywania dodatkowych określeń do wyrazu „zadań” w
        ust. 3, który, jak wiemy, był fragmentem konsensu dzięki dodaniu — na
        życzenie posłów klubu SLD — wyrazów „oddzielone od Państwa”, niweczy
        dobrą wolę dojścia do porozumienia. Podzielam pogląd senatora K.
        Kozłowskiego, że jest to raczej kwestia zrezygnowania z pewnych lęków
        lub nadwrażliwości i rozstrzygnięcia powstałego problemu wewnątrz klubu
        SLD. Poseł Włodzimierz Cimoszewicz (SLD): Pozwalam sobie zabrać głos
        tylko dlatego, że widzę, iż został rozdany tekst mojej propozycji
        brzmienia art. 15, który zawiera błąd już w ust. 1, gdzie powinno być
        „władze publiczne”, a nie „władza publiczna”. Chcę jednocześnie
        ustosunkować się do dwóch tez, które pojawiły się w wystąpieniu poseł I.
        Lipowicz. Formuła oddzielenia kościoła od państwa nie jest formułą
        proponowaną wyłącznie przez klub SLD i jego przedstawicieli. Znajdowała
        się ona także w jednym z wariantów propozycji opracowanych przez
        podkomisję już kilka tygodni temu. Nie była ona najbardziej radykalną
        spośród formuł przedłożonych przez podkomisję. Po drugie, proszę zarówno
        poseł I. Lipowicz, jak i senatora K. Kozłowskiego, o zrozumienie, że w
        klubie SLD panują obyczaje, zgodnie z którymi każdy z jego członków
        ponosi osobistą odpowiedzialność za udział w pracach Komisji
        Konstytucyjnej Zgromadzenia Narodowego. W związku z tym proszę nie
        apelować o uzgadnianie jakiegokolwiek stanowiska w omawianym zakresie.
        Być może, gdzie indziej obowiązuje dyscyplina partyjna, my natomiast
        ponosimy osobistą odpowiedzialność za to, za czym się opowiadamy,
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Rozumiem, że kluczowym elementem, który na obecnym etapie dyskusji
        stanowi barierę w dojściu do konsensu, są razy „zadań religijnych i
        organizacyjnych” w odróżnieniu od określenia „swoich zadań”, które
        mogłoby się stać podstawą porozumienia. Dlatego też, w nawiązaniu do
        tego, co mówiła poseł 1. Lipowicz, opowiadam się za określeniem
        czytelnej różnicy, gdyż w dalszym ciągu nie wiem, na ile nasz spór jest
        pozorny, a na ile rzeczywisty. Być może, posługiwanie się pojęciami
        ogólnymi ma to do siebie, że nie bardzo wiadomo, o co chodzi. W związku
        z powyższym, zwracam się do ekspertów z prośbą o udzielenie odpowiedzi
        na kilka pytań. Jakie inne zadania poza religijnymi i organizacyjnymi
        mają kościoły? Proszę o dokonanie egzemplifikacji, gdyż będzie wtedy
        klarowna różnica pomiędzy tym, co jest. Dopóki nie nazwiemy tych zadań,
        dopóty rozmawiamy w pewnym stopniu w abstrakcyjny sposób. Drugie moje
        pytanie brzmi następująco: jak należy interpretować pojęcia „autonomii”
        i „niezależności ”? Czym się różni autonomia od niezależności? Skąd
        bierze się przeciwstawienie pojęć „„autonomia” 1 „niezależność ”? Po
        trzecie, jaką praktyczną przekładnię ma pojęcie „autonomia i
        niezależność” na kwestię wykonywania zadań? Gdy chodzi o zadania
        religijne, to sprawa jest oczywista. Bez względu na to, jakiego się
        użyje określenia, trudno sobie wyobrazić, aby ktoś mógł ingerować w
        zadania religijne kościołów i związków wyznaniowych. Jeżeli chodzi o
        innego typu zadania, bezpośrednio związane z istnieniem państwa, to
        powstaje pytanie, co tego typu autonomia i niezależność może realnie
        oznaczać? Nie wiem, czy chodzi o politykę finansową, fiskalną, czy
        jeszcze jakąś inną. Podobne, różne podejrzenia zaciemniają nam obraz.
        Jeżeli przewodniczący senator S. Pastuszka zezwoli na odpowiedź na
        postawione pytania, to będziemy wiedzieli, na czym polega spór.
        Rozumiem, że nie jest to tylko spór stylistyczno-legislacyjny.
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
        Jest już po godz. 16. Przewodniczący S. Pastuszka powinien zapowiedzieć
        zamknięcie obrad, ponieważ w dyskusji wciąż podnoszone są sprawy, które
        były już wielokrotnie wyjaśniane i omawiane jak na przykład co znaczy
        „niezależność”, „autonomia”. Apeluję, aby przewodniczący S. Pastuszka
        zamknął dzisiejsze posiedzenie Komisji Konstytucyjnej i pozwolił posłom
        SLD ponoszącym osobistą odpowiedzialność za wypowiedzi wygłaszane na
        forum naszej Komisji porozumieć się ze sobą do dnia jutrzejszego.
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
        Poseł J. Jaskiernia pragnie zabrać głos ad vocem.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="rounded-lg shadow-lg w-32 h-32"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="mt-8 p-10 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Szacunek dła posła T. Mazowieckiego każe mi domyślać się, że jego
        propozycja nie jest próbą uniemożliwienia ekspertom odpowiedzenia na
        bardzo konkretne pytania. Chcielibyśmy podjąć decyzję w sposób uczciwy.
        Jeżeli „swoje zadania” kościoła różnią się od „zadań religijnych i
        organizacyjnych”, to wydaje mi się, że pytanie członka Komisji
        Konstytucyjnej o wyjaśnienie, czym te zadania się różnią oraz prośba o
        egzemplifikację innych zadań kościoła, jest rzeczą uprawnioną. Moim
        zdaniem, odpowiedź na te pytania bardzo ułatwi nam to, do czego zachęca
        poseł T. Mazowiecki, czyli podejmowanie decyzji — ko legialnych,
        indywidualnych, klubowych, jest to w tej chwili bez znaczenia.
        Chcielibyśmy poznać precyzyjną różnicę pomiędzy powyższymi zadaniami.
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
        Do których ekspertów poseł J. Jaskiernia kieruje swoje pytanie? Czy
        ekspertów-prawników, czy do ekspertów od zadań kościoła?
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
        Zostały zgłoszone dwa wnioski formalne. Ustaliliśmy, że dzisiejsze
        obrady kończymy o godz. 16, ponieważ pracują inne komisje. Dzisiejsze
        posiedzenie zakończymy następującymi wnioskami. Po pierwsze, jutro
        rozpatrzymy główne różnice; według mnie, jesteśmy bardzo blisko od
        osiągnięcia kompromisu i zapewne jutro go znajdziemy. Po drugie, należy
        rozwiewać wszystkie wątpliwości. Wydaje mi się, że pytania postawione
        przez posła J. Jaskiernię w pełni zasługują na rzeczową, merytoryczną
        odpowiedź. Ponieważ dzisiaj nie ma na to czasu, sądzę, że osoby
        kompetentne w tym zakresie odpowiedzą nam na nie jutro, na posiedzeniu
        Komisji Konstytucyjnej, które rozpoczynamy o godz. 9. Zamykam drugi
        dzień posiedzenia Komisji Konstytucyjnej Zgromadzenia Narodowego.
      </p>
    </div>
  </div>
</div>
