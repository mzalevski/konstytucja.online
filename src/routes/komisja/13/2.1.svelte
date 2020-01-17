<script>
  import { fly } from "svelte/transition";
  import Nav from "../../../components/Nav.svelte";
  import Footer from "../../../components/Footer.svelte";
  import ToTheTopBtn from "../../../components/ToTheTopBtn.svelte";

  let yAxisPosition;
</script>

<style>
  p {
    text-align: justify;
  }
  h3 {
    margin: 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(160, 40, 40, 0.1);
    margin-bottom: 2rem;
  }

  .speaker {
    display: flex;
  }
  .speaker img {
    min-width: 110px;
  }

  .speaker p {
    padding: 2.5rem;
    border: dotted 1px;
    border-color: rgba(0, 0, 0, 0.3);
  }
  .protocol .speaker:nth-child(odd) img {
    margin: 0 1em 0 0;
    box-shadow: -4px 4px 2px 1px rgba(0, 0, 0, 0.15);
    order: 0;
  }
  .protocol .speaker:nth-child(even) {
    justify-content: flex-end;
  }
  .protocol .speaker:nth-child(odd) p {
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.15);
    order: 1;
  }
  .protocol .speaker:nth-child(even) img {
    margin: 0 0 0 1em;
    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.15);
    order: 1;
  }
  .protocol .speaker:nth-child(even) p {
    box-shadow: -4px 4px 4px 2px rgba(0, 0, 0, 0.15);
    order: 0;
  }
  .small-article-nav {
    text-align: right;
    width: 60px;
  }

  .small-article-nav a img {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 500px) {
    .speaker img {
      height: 60px;
      width: 60px;
      min-width: 60px;
    }
    .protocol .speaker:nth-child(odd) img {
      margin: 0 0.5rem 0 0;
    }
    .protocol .speaker:nth-child(even) img {
      margin: 0 0 0 0.5rem;
    }
    .speaker p {
      padding: 0.5rem;
      font-size: 12px;
    }
  }
</style>

<svelte:head>
  <title>Dzień 2 - Biuletyn nr 13</title>
</svelte:head>

<Nav segment={'info'} />

<svelte:window bind:scrollY={yAxisPosition} />

{#if yAxisPosition > 300}
  <ToTheTopBtn/>
{/if}

<div in:fly={{ y: 100, duration: 1000 }}>
  <div class="header">
  <div>
    <h3>Obrady w dniu 8 lutego 1995 r. - część I</h3>
      <h5>
    <a
      href="https://drive.google.com/file/d/1G4mGATMKIpJhEEK67nL4msrsMc6UQICx/view?usp=sharing"
      rel="nofollow"
      target="_blank">
      ORYGINAŁ BIULETYNU
    </a>
  </h5>
  </div>
      <div class="small-article-nav">
    <a rel="prefetch" href="/komisja/13/1">
      <img src="images/angle-left-solid.svg" alt="" />
    </a>
    <a rel="prefetch" href="/komisja/13/2.2">
      <img src="images/angle-right-solid.svg" alt="" />
    </a>
</div>
  </div>

  <div class="protocol">
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wznawiam obrady Komisji Konstytucyjnej Zgromadzenia Narodowego. Wczoraj
        po wielogodzinnej pracy osiągnęliśmy istotny postęp. Zanim przejdziemy
        do realizacji porządku obrad, chciałbym poinformować, że o godz. 15
        dzięki uprzejmości marszałka Senatu będziemy mogli przenieść nasze
        obrady do sali Senatu i dysponować kartami do głosowania
        elektronicznego. Usprawni to naszą pracę i przyspieszy procedurę.
        Chciałbym wyrazić słowa podziękowania obecnemu tutaj ministrowi W.
        Sawickiemu. Jutro będziemy również obradowali w sali posiedzeń Senatu.
        Prosiłbym o zachowanie kart do głosowania na czas pracy Komisji
        Konstytucyjnej. Mamy do rozstrzygnięcia art. 3, który dotyczy obowiązków
        państwa, strzeżenia niepodległości I gwarancji praw człowieka Na
        podstawie zgłoszonych wniosków rysują się trzy opcje. Poseł J. Szymański
        wnioskował, żeby artykuł ten mówił o władztwie. Kolejną propozycję
        zawiera wniosek przedstawicieli prezydenta, którzy proponowali podnieść
        kwestię niepodzielności i jednolitości państwa. Ponadto mamy propozycję
        senator A. Grześkowiak I posła L. Moczulskiego. Jaka ze strony ekspertów
        byłaby rada na temat tego, co należałoby umieścić w art. 3?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Dwa pierwsze artykuły dotyczą generalnej charakterystyki państwa. Może
        warto byłoby rozważyć teraz to, co jest zawarte w art. 4. Następnie
        można umieścić art. 3 z przedłożonego projektu, który dotyczy celów
        państwa. Wpierw powinna być jednak charakterystyka generalna państwa,
        potem jego cele i następnie kwestie dotyczące struktury władzy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        W podkomisji redakcyjnej przesunęliśmy z rozdziału o prawach człowieka
        do art. 3 fragment mówiący o gwarancji praw człowieka. Wczoraj pojawiły
        się propozycje, żeby ta kwestia powróciła do rozdziału o prawach
        obywatelskich. Proszę, by ten problem nie zniknął, albo niech będzie on
        uwzględniony w art. 3 albo w rozdziale o prawach obywatelskich. Nie
        wiem, czy trafne jest określenie dotyczące strzeżenia dziedzictwa
        kultury i języka narodu. Art. 6 definiuje pojęcie narodu politycznego.
        Byłbym za tym, żeby użyć określenia: „kultury narodowej i języka”,
        ponieważ nie powinniśmy wynaradawiać Polonii.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Jaka z trzech merytorycznych kwestii powinna znaleźć się w art. 3?
        Rozumiem, że opinia prof. P. Winczorka jest taka, że z uwagi na logikę i
        systematykę powinna w tym miejscu znaleźć się zawartość merytoryczna
        art. 4 projektu przygotowanego przez podkomisję, czyli „Rzeczpospolita
        Polska jest państwem jednolitym i niepodzielnym”. Pozostałe treści
        merytoryczne na pewno znajdą się w tekście, ale pierwszeństwo powinien
        uzyskać przepis o jednolitości i niepodzielności państwa. Czy w tej
        sprawie są inne zdania?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Chciałbym przypomnieć, że w rozdziale I zawarta jest zasada samorządu
        terytorialnego, która ustala terytoriaIny ustrój państwa. Może
        należałoby się zastanowić nad celowością art. 4, o czym wczoraj
        mówiliśmy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Pamiętam opinię w tej sprawie. Pytanie do przegłosowania brzmi: czy
        uważamy, że przepis „Rzeczpospolita Polska jest państwem jednolitym 1
        niepodzielpowinien znaleźć się w art. 3, czy też — zgodnie z opinią
        prof. P. Sameckiego — wystarczy, że ta regulacja znajdzie się we
        fragmencie konstytucji dotyczącym samorządu?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Czy pominięcie obecnego art. 4 stanowi jakieś zagrożenie dla
        jednolitości Polski? Czy bez tego przepisu Polska stanie się państwem
        federacyjnym?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Analiza programu różnych stowarzyszeń proponujących rozwiązania
        dotyczące samorządu regionalnego potwierdza, że poważnie dyskutowano nad
        wprowadzeniem autonomicznych samorządów regionalnych, które miałyby
        prawo stanowienia ustaw, prawo do własnego pieniądza i polityki
        zagranicznej. Pojawiły się takie propozycje. Dlatego uważam, że ta
        sprawa jest ważna i powinna być uwzględniona w art. 3.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Czy propozycja alternatywna złożona na podstawie projektu obywatelskiego
        NSZZ, „Solidarność” w brzmieniu: „Rzeczpospolita zapewnia i gwarantuje
        prawa człowieka oraz ich nienaruszalność, strzeże niepodległości i
        całości swojego terytorium, dziedzictwa kultury, języka narodu oraz
        zapewnia ochronę i rozwój środowiska”, byłaby tożsama ze sformułowaniem
        o jednolitości i niepodzielności państwa? Taką poprawkę zgłosiłem, ale
        chciałbym wiedzieć, czy przepis ten jest tożsamy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Poprawka pana senatora jest zbieżna z tym, co jest w art. 3 projektu
        wypracowanego przez podkomisję: „„Rzeczpospolita Polska gwarantuje prawa
        człowieka, strzeże niepodległości i całości swojego terytorium, strzeże
        dziedzictwa kultury i języka Narodu (kultury narodowej i języka) oraz
        zapewnia ochronę środowiska przyrodniczego”. Czy art. 3 nie jest zawarty
        w treści artykułu z projektu obywatelskiego?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Nie, chociaż propozycja senatora P. Andrzejewskiego jest cenna, ale mowa
        jest w niej o strzeżeniu niepodległości, co raczej dotyczy stosunków
        zewnętrznych. W tym przypadku chodzi o stosunki wewnętrzne, by Polska
        była państwem unitarnym, a nie złożonym z jednostek o charakterze
        autonomicznym, czy takich, które noszą pewne cechy suwerenności.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OrzechowskiJan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jan Orzechowski (PSL):</strong>
        W chwili obecnej nie możemy mówić, że grozi podział Polski na
        samodzielne księstwa. Niemniej jednak konstytucję uchwałamy nie tylko na
        dziś, ale i na przyszłe lata. Wobec tego przepis o jednolitości i
        niepodzielności państwa polskiego powinien być uwzględniony. W art. 3
        będzie podkreślona kwestia wolności i praw człowieka, strzeżenia
        dziedzictwa kultury. Uważam, że art. 4 powinien być zachowany.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Proszę o opinię odnośnie do umiejscowienia tego przepisu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Samorząd terytorialny będący podstawowym elementem ustroju
        terytorialnego wyklucza, aby pod nazwą „samorząd terytorialny” mogło
        powstać federacyjne czy reglonalne województwo, nie mówiąc o gminach.
        Samorząd terytorialny jest formą zdecentralizowanego państwa
        jednolitego. Co do tego nie ma sporu. Przepis ten może być umieszczony
        przy regulacji dotyczącej samorządu terytorialnego, który ma dość jasno
        określoną treść znaczeniową.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy w ogóle uwzględnimy ten przepis, a jeśli tak, to czy w art. 3?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PastuszkaStefan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Stefan Pastuszka (PSL):</strong>
        Nie podzielam poglądu prof. P. Sameckiego, bo samorząd terytorialny może
        istnieć również w ramach poszczególnych struktur federacyjnych.
        Przykładem mogą być chociażby Stany Zjednoczone. Uważam, że w
        konstytucji powinien być zamieszczony artykuł stwierdzający, że państwo
        jest jednolite 1 niepodzielne. W art. 11 oraz w art. 197 i następnych
        nie stwierdzono, że państwo polskie ma charakter jednolity i
        niepodzielny. Jest to tylko interpretacja.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KuleszaWladyslaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Przedstawiciel Prezydenta RP dr. Władysław Kulesza:</strong>
        Argumentacji prof. P. Sarneckiego z punktu widzenia jurydycznego nie
        można nic zarzucić. Ma on rację, ale biorąc pod uwagę dydaktykę, która
        jest niezbędna w pewnych artykułach konstytucji, przychylałbym się do
        konkluzji senatorów S$. Pastuszki i J. Orzechowskiego. W ostatnich
        latach trochę zamieszało się w głowach na temat samorządu
        terytorialnego, autonomii i regionalizacji. Uporządkowanie trochę
        rozchwianej debaty jest obowiązkiem konstytucji. Formuła ta nawiązuje
        wyraźnie do francuskich tradycji republikańskich, jest elementem
        myślenia o państwie demokratycznym 1 nie zawiera żadnych pierwiastków
        szowinistycznych. Jest to próba uporządkowania myślenia o państwie,
        które zbliżając się do Europy musi zachować własną tożsamość. Jeżeli
        przypomnimy sobie fakty, nie tylko prasowe, ale potwierdzone przez
        poważne źródła, że w niektórych samorządach Śląska Opolskiego jedną z
        pierwszych decyzji podejmowanych w formie uchwały była decyzja o zdjęciu
        ze Ściany godła pa stwowego, bo w siedzibie samorządu terytorialnego
        jest ono niepotrzebne, to odwołanie się do tej racji ma sens
        konstytucyjny.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wydaje się, że argumenty zostały przedstawione z obu stron. Nie
        popełnimy wielkiego błędu, jeśli ta kwestia będzie uwzględniona i nie
        popełnimy wielkiego błędu, jeśli jej nie będzie. Przedłużanie tej
        dyskusji zużywa cenny czas, ale nie mam prawa ograniczać wypowiedzi.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Czy należy rozumieć, że podda pan pod głosowanie art. 4, ale poza tym
        będzie jeszcze debata nad art. 3, ewentualnie w zmienionym kształcie?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mówimy o trzech kwestiach merytorycznych, które muszą znaleźć się w
        konstytucji, choć akurat w kwestii obecnie omawianej są różne
        stanowiska. Prof. P. Sarnecki uważa, że ta sprawa nie musi znaleźć się w
        przepisach konstytucyjnych. Niewątpliwie obowiązki państwa muszą być
        uwzględnione, podobnie jak kwestia władzy zwierzchniej. Na razie nie
        było propozycji połączenia art. 3 z art. 4. Moim zdaniem, byłoby to
        niepotrzebne rozbudowanie artykułu, bo mówimy o dwóch normach
        merytorycznych. Inną kwestią jest Posiedzenia Komisji Konstytucyjnej ZN
        jednolitość i niepodzielność państwa. Argumentacje już przytoczono. Czym
        innym są gwarancje państwa wobec praw człowieka, niepodległości,
        dziedzictwa kultury, języka, zapewnienia ochrony Środowiska,
        harmonijnego i zrównoważonego rozwoju. Art. 3 będzie jeszcze
        rozpatrywany.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Wprowadzenie do konstytucji pojęcia „niepodzielność państwa” było
        uzasadnione bezpośrednio po odzyskaniu przez Rzeczpospolitą Polską
        niepodległości po I wojnie światowej. Taki przepis odzwierciedla lęki i
        kompleksy. Lęki po zaborach i dramatycznym podziale państwa były
        zrozumiałe. Takie lęki obecnie wskazywałyby tylko na nasze narodowe
        kompleksy. Podstawy ustroju samorządu terytorialnego w zespole do spraw
        samorządu terytorialnego nie budziły różnic. W żadnym projekcie ani w
        dyskusji nie było propozycji wprowadzenia ustroju federacyjnego. Ani
        ustrój samorządowy, ani ustrój z uwzględnieniem jednostek regionalnych
        nie narusza unitarnego charakteru państwa. Uważam, że taki przepis jest
        zbędny, bo odzwierciedlałby tylko niczym nie uzasadnione kompleksy i źle
        by o nas świadczył.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Poseł I. Lipowicz podniosła nowy argument, a mianowicie narodowych
        kompleksów.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PastusiakLongin.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Longin Pastusiak (SLD):</strong>
        Logicznie rzecz biorąc przepis o jednolitym 1 niepodzielnym charakterze
        państwa pasowałby raczej do rozdziału dotyczącego samorządów, ale
        abstrahując od historycznych kompleksów chciałbym zwrócić uwagę, że
        wczoraj rząd Słowacji sprzeciwił się przystąpieniu siedmiu powiatów do
        euroregionów z tego powodu, że Słowacja jest państwem jednolitym. Jeżeli
        przepis o jednolitym i niepodzielnym charakterze państwa zawierałby
        czynnik zewnętrzny, to — moim zdaniem — powinien się znaleźć w
        konstytucji, ale bliżej rozdziału dotyczącego samorządu terytorialnego.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Pan poseł jest zdania, że w tym miejscu nie powinien on być
        uwzględniony.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie jest tak, że tylko kompleksy wychodzą przy tej sprawie. W programie
        Kongresu Liberalno-Demokratycznego znalazła się zasada federalizmu,
        która przewidywała osobne legislatywy dla dużych regionów i osobne
        ustawowe uregulowania. Czy tego chcemy? Uważam, że pewną wartością jest
        homogeniczna struktura, którą mamy w Polsce. Powinniśmy stworzyć barierę
        dla zbyt łatwego przekroczenia tej granicy. Konstytucja nie jest barierą
        bezwzględną, bo też podlega zmianie. Chodzi o to, żeby zmiana taka była
        utrudniona. Byłbym zaniepokojony, gdyby ktoś interpretował zasadę
        państwa jednolitego i niepodzielnego w ten sposób, że uniemożliwia ona
        udział w euroregionach. W podkomisji nie pojawiły się tego typu obawy,
        bo tak tej zasady zinterpretować nie można. Czy taka interpretacja jest
        możliwa? Czy przepis ten byłby przeszkodą przy przystępowaniu do
        euroregionu w takim znaczeniu, jak to jest określone w Unii
        Europejskiej?
      </p>
    </div>

    <!--<hr><p class="page-break">strona 29      </p>
    </div><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Nie sądzę, że przepis ten byłby przeszkodą, chyba że powstanie
        euroregionu oznaczałoby oderwanie jakiegoś obszaru od państwa polskiego
        i przyłączenie do innego państwa, czy też do jednostki ponadnarodowej,
        ale o to nie chodzi w euroregionach.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Musimy zgodzić się z opinią prof. P. Winczorka. Podobna kwestia mogłaby
        stanąć na porządku dnia w momencie podpisywania umowy z Unią Europejską.
        Rozumiem, że poglądy zostały wymienione. Możemy być uspokojeni, bo żadna
        z tych decyzji nie będzie błędem w rozumieniu konstrukcji konstytucji.
        Jeżeli przepis będzie uwzględniony w tym miejscu, to będzie spełniał
        rolę edukacyjną, o której mówił dr T. Kulesza. Jeżeli zostanie on
        wyeliminowany, to normy te są wypowiedziane w artykułach dotyczących
        samorządu terytorialnego.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Głosujemy nad następującą kwestią merytoryczną. Czy w artykułach
        wstępnych konstytucji ma znaleźć się przepis mówiący o tym, że
        Rzeczpospolita Polska jest państwem jednolitym 1 niepodzielnym? Kto jest
        za uwzględnieniem tego przepisu w art. 3? Za wnioskiem głosowało 14
        członków Komisji, przeciw — 11 i 2 wstrzymało się od głosu. Nie mamy
        quorum, więc nie możemy podejmować rozstrzygających decyzji. W tej
        sytuacji głosowania rozpoczniemy od godz. 15 w sali obrad Senatu.
        Apeluję o obecność w czasie obrad Komisji Konstytucyjnej. Powracamy do
        dyskusji. Zostały zgłoszone wnioski dotyczące obowiązków państwa.
        Pierwszy brzmi jak art. 3 zamieszczony w projekcie podkomisji. Jaki
        artykuł powinien mieć pierwszeństwo, czy dotyczący zasady władztwa, czy
        obowiązków państwa?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Zaproponowaliśmy wewnętrzny porządek tego rozdziału. Wczoraj nastąpiło
        pewne przesunięcie, ale uważam, że kolejności trzeba pilnować, bo z niej
        wynika spójność całego rozdziału. Proszę popatrzeć na nasz materiał, w
        którym proponujemy, żeby pierwszą grupę w rozdziale I stanowiły przepisy
        określające podstawowe cechy państwa polskiego. To są przepisy uchwalone
        wczoraj. Proponowaliśmy następującą kolejność: art. 2, art. 4 i art. 5
        według projektu podkomisji. Następną grupę powinny stanowić przepisy
        określające społeczno-polityczne podstawy władzy publicznej w państwie.
        Chodzi o zasadę zwierzchnictwa narodu. Z tym wiąże się kwestia
        instytucjonalizacji partii politycznych, potrzeba określenia ich roli w
        państwie oraz zasada wolności tworzenia partii politycznych. W trzeciej
        grupie powinny być przepisy określające cele i zadania Rzeczypospolitej.
        Może najpierw Komisja przesądzi artykuły dotyczące zwierzchnictwa
        narodu, wolności tworzenia partii politycznych oraz ich roli w
        kształtowaniu i wyrażaniu woli obywateli.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Podjęte przez nas decyzje mogą być jeszcze zweryfikowane przez
        Zgromadzenie Narodowe. Art. 4 w systematyce ekspertów powinien dotyczyć
        władztwa. Czy może on dotyczyć obowiązków państwa?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Powinien dotyczyć tylko władztwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Eksperci proponują, aby art. 4 był oparty na art. 6 projektu podkomisji.
        Czy w sprawie kolejności artykułów chciałby ktoś zabrać głos? Dopóki
        Komisja nie skończy pracy, wszystko jest możliwe. Wyciągając wnioski z
        wątpliwości, które zrodziły się wczoraj wieczorem, proponuję nieco inną
        procedurę. Wpierw wysłuchajmy ekspertów, a później podejmować będziemy
        decyzje. Eksperci uważają, że art. 4 powinien dotyczyć władztwa. Czy w
        tej sprawie członkowie Komisji mają uwagi?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Jeżeli obecny art. 3 przesuniemy dalej, to znajdzie się on dopiero po
        art. 11, dotyczącym samorządu terytorialnego. Chyba byłoby to trochę za
        daleko. Uważam, że zasada zrównoważonego rozwoju powinna być
        wyeksponowana w rozdziale I.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Gdzie znalazłby się dotychczasowy art. 3, mówiący o obowiązkach państwa?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Najpierw trzeba określić, do kogo władza należy, a potem dopiero, jakie
        ma ona realizować cele.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że artykuł o celach państwa umieszczony byłby przed kwestiami
        dotyczącymi własności i działalności gospodarczej.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Odnoszę wrażenie, że logika zaproponowana przez prof. K. Działochę jest
        następująca. Wpierw jest władztwo, które należy do narodu, następnie
        partie polityczne, które są niezbędnym pośrednikiem między narodem a
        realizacją władztwa. Z kolei zamieszczone będą cele państwa, a potem
        organizacja struktury władzy. Po celach państwa należy umieścić przepis,
        że władza może działać tylko z upoważnienia i w granicach prawa. Jest to
        ogólne ograniczenie właPosiedzenia Komisji Konstytucyjnej ZN dzy.
        Następnie trzeba przesądzić o tym, jak jest ona podzielona w strukturze
        organów władzy, między władzę ogólną a samorząd terytorialny. Nie
        prowadziłoby to do przeniesienia artykułu o celach władzy za artykuł o
        strukturze władzy, tylko cele władzy byłyby za zasadą władztwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Trzymałbym się uparcie innego sposobu systematyzacji konstytucji.
        Najpierw należy uwzględnić artykuły dotyczące charakteru, zadań i celów
        państwa jako odrębnego bytu. Potem — źródła pochodzenia władzy i
        wszystko to, co z tej władzy wynika. Cele państwa i cele władzy nie są
        identyczne. Władza państwowa powinna realizować cele państwa, ale
        przecież nie wszystkie. Znaczną część celów państwa realizuje się poza
        władzą państwową. Państwo jest bowiem wspólnotą obywateli i wszyscy
        powinni realizować jego cele. Jeżeli uwzględnimy tego typu kolejność, to
        będzie oznaczało, że władzę państwa sytuujemy powyżej państwa i
        obywateli, a nie odwrotnie. Dlatego najpierw trzeba uwzględnić wszystko
        to, co dotyczy państwa, jego charakteru i zadań. Dopiero później trzeba
        napisać o władzy. Chętnie zgodziłbym się z tym, co przed chwilą
        powiedział prof. W. Osiatyński, że w momencie dojŚcia do władzy należy
        umieścić partie polityczne jako organ pośredniczący. Nawiązuję do
        przepisu, który jest w naszym projekcie konstytucji, chociaż jest on
        znacznie dalej uwzględniony.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że jedno głosowanie będzie dotyczyło tego, czy kolejne
        artykuły powinny uwzględniać problemy władzy i sposoby jej sprawowania,
        a dopiero po nich powinny znaleźć się przepisy określające cele państwa,
        czyli art. 3. Jest to propozycja ekspercka popierana przez kilku
        członków Komisji. Odrębną propozycję zgłosił poseł L. Moczulski, który
        proponuje, żeby najpierw uwzględnić przepis o celach państwa, a
        następnie o władztwie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GrodzickiRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Ryszard Grodzicki (SLD):</strong>
        W dyskusji padają stwierdzenia, że jeśli jest coś bliżej początku, to
        jest ważniejsze, a jeśli dalej jest umieszczone, to mniej ważne. Nawet
        jeżeli nie jest to wypowiadane wprost, to w podtekŚcie wyraźnie taka
        teza jest formułowana. W związku z tym proszę ekspertów, żeby
        wypowiedzieli się na temat tego, czy kolejność umieszczenia w rozdziale
        I poszczególnych zasad będzie rzutowała przy interpretacji konstytucji
        na ich hierarchizowanie, czy też nie. Jeśli dbamy tylko o poetykę
        tekstu, to jest to inny problem od hierarchizowania konstytucyjnych
        zasad.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Systematyka tekstu ma pewne znaczenie, chociaż wszystkie przepisy
        konstytucji mają taką samą moc obowiązywania. Ich usytuowanie może być
        uznane jako istotne w trakcie wykładni konstytucji. Chodzi także o to,
        Posiedzenia Komisji Konstytucyjnej ZN żeby problemy jednogatunkowe były
        ujęte w jedną całość, a nie, by konstytucja była tekstem, w którym
        mieszają się różne zagadnienia. Taka jest idea uporządkowania treści
        konstytucji w bloki tematyczne.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/RotHenryk.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Henryk Rot (SLD):</strong>
        Szedłbym tropem wskazanym przez eksperta. Skoro konstytucję zaczęliśmy
        od aksjologii państwa, to dalsze artykuły powinny rozwijać to, o czym
        przesądziliśmy na samym wstępie. Przyjęte dwa pierwsze artykuły to
        oszczędne minimum aksjologii państwa. Opowiadałbym się za tym, żeby na
        początku dopisać również to, co jest uwzględnione w art. 3. Idee zawarte
        w tym przepisie powinny znaleźć się na czele konstytucji. Elementy
        aksjologiczne byłyby szerzej uwzględnione w preambule konstytucji.
        Przyjęliśmy, że preambuły nie będzie, więc minimum zawarte w art. 3
        powinno znaleźć się w początkowych fragmentach konstytucji, przed
        charakterystyką państwa 1 strukturą władzy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Drugie głosowanie będzie dotyczyło tego, czy cele państwa mają znaleźć
        się przed władztwem, czy odwrotnie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Rozumiem, że poseł R. Grodzicki nawiązywał do mojej wypowiedzi. Mnie nie
        chodziło o nic innego, tylko o to, że pierwsze artykuły mają bardzo
        ogólny charakter.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KuleszaWladyslaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Przedstawiciel Prezydenta RP dr. Władysław Kulesza:</strong>
        Nawiązując do wypowiedzi prof. W. Osiatyńskiego chciałbym zapytać, czy
        art. 3 powędruje między art. 1l a art. 12?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Byłby artykułem 5.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        W art. 1, który już przyjęliśmy, charakteryzujemy państwo tylko przez
        dwa czynniki, prawny i społeczny. Takie kwestie, jak dziedzictwo
        kulturowe, czy coś, co w XIX wieku nazwano by realizacją ducha narodu,
        zostanie przesunięte dalej. Jest to niczym nie uzasadniona dysproporcja.
        Sądzę, że już tak powstaje dysproporcja, która powoduje, że czynnik
        prawny jest wtórny. Konstytucja jest aktem prawnym, ale jest to tylko
        kształt prawny nadany ustaleniu, które nie ma znaczenia prawnego, lecz
        społeczne. Jeżeli wysuwamy element prawa i element socjalny i
        równocześnie pomijamy inne, to tworzymy kaleki potworek typu połowicznej
        aborcji. Proponuję, żeby unikać takich rozwiązań.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Doszliśmy już do sformułowania dylematu do głosowania. Przypominam, że
        według propozycji prof. W. Osiatyńskiego przepis o władztwie ma
        pierwszeństwo. Kolejność artykułów byłaby następująca: władza, partie
        polityczne i cele państwa. Proponuję przejść do art. 3 zawartego w
        projekcie podkomisji. Mamy następujący dylemat: czy używamy
        sformułowania „strzeże dziedzictwa kultury i języka Narodu” czy też
        „kultury narodowej i języka”. Jest to pierwszy dylemat do
        rozstrzygnięcia. Drugi wynika z wniosku m.in. senatora J. Madeja, żeby
        uwzględnić ochronę środowiska poprzez stosowanie zasady zrównoważonego
        rozwoju. Trzecia propozycja wynika z projektu obywatelskiego. Artykuł
        ten brzmiałby następująco: ,„Rzeczpospolita zapewnia i gwarantuje prawa
        człowieka oraz ich nienaruszalność, strzeże niepodległości swego
        terytorium, dziedzictwa kultury, języka narodu oraz zapewnia ochronę i
        rozwój Śśrodowiska”. Różnica jest tylko w pierwszej części artykułu.
        Senator P. Andrzejewski proponuje, żeby Rzeczpospolita nie tylko
        gwarantowała, ale i zapewniała prawa człowieka i ich nienaruszalność.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Proszę wziąć pod uwagę złożoną przeze mnie propozycję art. 14. OkreŚliem
        go jako art. 14 nie dlatego, że uważałem, iż powinien on być w takiej
        kolejności umieszczony, tylko dopasowałem do zaproponowanego schematu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Za chwilę ten artykuł przeczytam. Otwieram dyskusję przed głosowaniem
        nad wyborem sformułowania dotyczącego kultury narodowej i języka.
        Następnie musimy przesądzić sprawę zrównoważonego rozwoju i inne
        brzmienie pierwszej części art. 3. Kolejną propozycję przedstawia KPN.
        Wczoraj poseł L. Moczulski zgłosił cały kompleks wniosków.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Art. 3 mówi o celach państwa. Celem państwa jest ochrona niepodległości
        i całości terytorium, ale także zagwarantowanie bezpieczeństwa
        obywateli. Był to cel nie tylko XVII-wiecznej umowy społecznej. Tego
        celu nie kwestionowała żadne teoria państwa i prawa od tamtego czasu.
        Tego celu nie określono w art. 3. Eksperci proponują, żeby dopisać
        sformułowanie: „gwarantuje bezpieczeństwo obywateli”. Wczoraj
        przedstawiciel prezydenta zgłosił wniosek, żeby dopisać, iż państwo
        gwarantuje wolności i prawa człowieka. Jest to bardzo ważne, ponieważ
        same prawa człowieka prowadzą do zawężenia tej formuły. Jeżeli użyjemy
        określenia „wolności i prawa człowieka , to wówczas ani czasownik
        „gwarantuje”, ani czasownik „zapewnia” nie będzie właściwy. W związku z
        tym proponuję następujące sformułowanie: „Rzeczpospolita Polska chroni
        wolności i prawa człowieka”. Wolności nie zapewnia się, bo one są, a
        obowiązkiem państwa jest ich ochrona. „Rzeczpospolita Polska chroni
        wolności i prawa człowieka, gwarantuje bezpieczeństwo obywateli >strzeże
        niepodległości i całości swojego terytorium... Tyle na temat
        zasadniczych celów państwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Trzeba przyznać, że jedna sprawa umknęła naszej uwadze. Sformułowanie
        przedstawione przez prof. W. Osiatyńskiego jest dobre i wnoszę
        propozycję z tym zgodną.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Traktu jemy to jako kolejny wniosek. Czy nie byłby on wyczerpaniem
        merytorycznej zawartości propozycji senatora P. Andrzejewskiego?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Dostrzegam pewne różnice, ale chętnie przedyskutuję projekt z prof.
        W. Osiatyńskim. Propozycja pojawiła się nagle i wymaga przemyślenia.
        Jest problem gwarancji i obowiązków państwa, które zapewnia
        niepodległość w formie obrony. Określamy cele państwa, a nie Środki
        działania. „Broni” jest to funkcja czasownikowa, a „gwarantuje” oznacza
        obowiązek wpisany do konstytucji. Nie można jednego wyrazu zestawiać w
        oderwaniu od innych, proszę więc o czas na przedyskutowanie tego
        sformułowania z prof. w. Osiatyńskim.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mamy cztery propozycje zmiany art. 3, które przegłosujemy o godz. 15.
        Rozumiem, że propozycja art. 12 zgłoszona przez posła Moczulskiego jest
        następująca: „Ust. 1. Dziedzictwo narodowe, ziemia, środowisko
        przyrodnicze, krajobraz, zabytki przeszłości, tradycja, kultura, wspólny
        majątek są pod szczególną ochroną Rzeczypospolitej. Ust. 2. Tworzenie
        nowych wartości kulturowych, artystycznych i intelektualnych otrzymuje
        pomoc i wsparcie ze strony państwa”. Rozumiem, że pod głosowanie mam
        poddać ust. I, bo ust. 2 znajduje się w dalszych częściach projektu
        przygotowanego przez podkomisję.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jestem zwolennikiem sformułowania mówiącego o wspieraniu kultury
        narodowej, ale nie powinno ono znajdować się w tym rozdziale, tylko
        dalej, gdzie zadania państwa będą określone bardziej konkretnie.
        Gdybyśmy umieścili ten problem na wstępie, to z katalogu różnych
        zwybralibyśmy tylko to jedno. Dlaczego pan poseł uważa, że akurat ten
        problem należy umieścić w tym miejscu?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Sądzę, że kultura narodowa zasługuje na taką samą ochronę jak
        bezpieczeństwo socjalne obywateli. Na pewno nie jest to wartość
        mniejsza. W ustawach będą rozwijane sprawy bezpieczeństwa socjalnego,
        podobnie jak kwestie kultury. Uważam, że kultura powinna być
        uwzględniona wśród głównych zpaństwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PastuszkaStefan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Stefan Pastuszka (PSL):</strong>
        W art. 3 powinien znaleźć się przepis, iż państwo realizuje zasady
        trwałego i zrównoważonego rozwoju.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Ten wniosek jest już zgłoszony i będzie przegłosowany. Rozumiem, że już
        wszystkie poglądy na ten temat zostały wymienione.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/ZdradaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Zdrada (UW):</strong>
        Chciałbym odnieść się do wypowiedzi posła L. Moczulskiego. Jeżeli
        umieścilibyśmy sformułowanie: „strzeże dziedzictwa narodowego , to
        wyczerpalibyśmy zarówno kulturę, jak i język. Do tych spraw można wrócić
        w innym miejscu. Dziedzictwo narodowe wyczerpuje wszystkie warunki, o
        których była mowa. Zrodziła się wątpliwość, czy kolejność nie powinna
        być taka: Rzeczpospolita Polska strzeże niepodległości i całości
        terytorium, chroni wolności i prawa człowieka, gwarantuje bezpieczeństwo
        obywateli itd. Składam tego rodzaju propozycję.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy eksperci uważają, że tego rodzaju logika byłaby słuszna? Jeśli tak,
        to rozumiem, że pod głosowanie poddane byłyby następujące propozycje:
        wstępnie musielibyśmy rozstrzygnąć, czy chcemy używać sformułowania:
        „dziedzictwa kultury i języka narodu” czy też „kultury narodowej i
        języka”. „Rzeczpospolita Polska strzeże niepodległości i całości swojego
        terytorium, chroni prawa i wolności człowieka, gwarantuje bezpieczeństwo
        obywateli, strzeże dziedzictwa narodowego, zapewnia ochronę środowiska
        poprzez zrównoważony rozwój”. Czy tak miałby brzmieć ten artykuł?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Chciałbym skierować pytanie do prof. Osiatyńskiego, bo mam wątpliwości,
        czy przy wolnościach i prawach człowieka można mówić o ochronie, a przy
        bezpieczeństwie obywateli o gwarantowaniu? Prawa człowieka muszą być
        zagwarantowane, więc wyraz „chrosłabia to sformułowanie. Możemy napisać,
        że gwarantuje wolności i prawa człowieka oraz bezpieczeństwo obywateli.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Bałbym się użyć spójnika „oraz ', bo wyglądałoby to na to, że jest to
        tożsama forma działalności. Z, konstytucji w ostatnich latach została
        Świadomie — jak rozumiem —- usunięta zasada tzw. horyzontalnego
        działania praw, która była w projekcie poznańskim i w pierwszym
        projekcie sejmowym z 1991 r. Rozumiem, że prawa i wolności obywatelskie
        dotyczą stosunków obywatel-państwo, a nie stosunków horyzontalnych:
        obywatel-drugi obywatel. Połączenie tego spójnikiem „oraz” oznaczałoby
        połączenie dwóch różnych obowiązków państwa: obowiązku ochrony czy
        zapewnienia praw i wolności obywatelskich i obowiązku zapewnienia
        bezpieczeństwa obywateli przed innymi zagrożeniami niż te, które płyną
        ze strony państwa. Użyłbym tego sformułowania w osobnym członie
        artykułu. Można powiedzieć: „,,...gwarantuje wolności i prawa człowieka,
        gwarantuje bezpieczeństwo obywateli, strzeże niepodległości . Wyraz
        „gwarantdotyczy pozytywnej działalności państwa w celu zapewnienia i
        realizacji praw i wolności. Jeżeli wolności dodajemy do praw, to istotą
        wolności jest to, że państwo ma stworzyć tylko tarczę, która jest
        ochroną. Natomiast nie powinno podejmować działań i nie powinno myśleć,
        że ma uprawnienia do działań pozytywnych w celu ochrony wolności, innych
        niż tarcza. Jest to pierwszy element, który Świadczy o tym, że czasownik
        „chront” bardziej mnie przekonuje niż wyraz „zapewnia bądź „gwarantuje”.
        W projekcie konstytucji będzie uwzględniona kwestia praw socjalnych, z
        których nie wszystkie będą miały roszczeniowy i wymagalny charakter. W
        projekcie przyjętym przez podkomisję część tradycyjnych praw socjalnych
        jest sformułowana w kategorii zadań państwa, a część jest określona tak,
        że ostateczną jurysdykcję nad nimi pozostawi się parlamentowi. Wówczas
        gwarantowanie praw byłoby niespójnością w stosunku do tej koncepcji.
        Ochrona jest słabszym elementem, ale bardziej spójnym i logicznym w myśl
        przyjętej koncepcji w rozdziale o prawach i obowiązkach obywateli. W obu
        przypadkach najważniejsze nie będzie to, co w artykule dotyczy celów
        państwa, tylko jak ta ochrona jest określona w rozdziale o prawach i
        obowiązkach obywatelskich.
      </p>
    </div>

    <!--<hr><p class="page-break">strona 33      </p>
    </div><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Zgodziłbym się z argumentacją posła T. Mazowieckiego, który ma
        doświadczenia z Jugosławii, ale nie tylko. W podkomisji proponowaliśmy
        wyraz „gwarancja”, ponieważ jest to pojęcie szersze. Nie chodzi tylko o
        ochronę praw i wolności osobistych i politycznych, ale również o prawa
        socjalne. Pojęcie „gwaranodnosiłoby się do praw socjalnych. W związku z
        tym dobrze byłoby je zachować, Kwestia horyzontalnego działania praw. W
        podkomisji przepis ten został wyeliminowany, ale nie byłem do końca
        przekonany, przy pełnym zrozumieniu istoty horyzontalnego działania praw
        obywatelskich. Konstytucja jako akt fundamentalny dla państwa powinna
        zawierać wolności i prawa funkcjonujące nie tylko w relacji wertykalnej,
        to znaczy państwo—samorządy-—jednostka, ale także między jednostkami.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Przy wolnościach i prawach człowieka optowałbym za wyrazem „gwarantuje”,
        bo konstytucja powinna prawa gwarantować, a nie tylko chronić.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że we wniosku będzie formuła: „Rzeczpospolita Polska
        gwarantuje wolności i prawa człowieka oraz zapewnia bezpieczeństwo
        obywateli”. Jest prośba do posła T. Mazowieckiego, aby przedstawił swoją
        propozycję na piśmie. Omawiany artykuł brzmiałby: „Rzeczpospolita Polska
        strzeże niepodległości i całości swojego terytorium, gwarantuje prawa i
        wolności człowieka, zapewnia bezpieczeństwo obywateli, strzeże
        dziedzictwa narodowego, zapewnia ochronę środowiska przyrodniczego
        poprzez zrównoważony rozwój”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OrzechowskiJan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jan Orzechowski (PSL):</strong>
        Uważam, że do podstawowych obowiązków państwa należy ochrona mm ar nA ma
        na bezpieczeństwa obywateli. Dlatego sądzę, że jeśli piszemy, Iż państwo
        gwarantuje prawa i wolności człowieka, to również należy napisać, że
        gwarantuje bezpieczeństwo obywateli, a nie zapewnia, bo jest to zbyt
        słabe określenie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Piotr Andrzejewski (NSZZ S”):</strong>
        o skonsultowaniu i wysłuchaniu ważkich argumentów prof. W. Osiatyńskiego
        przychylam się do zdania posła T. Mazowieckiego, które jest zbieżne z
        intencją projektu obywatelskiego NSZZ, „Solidarność ”. Propozycja
        zapisania tylko „ochrony” nie jest obowiązkiem zapewnienia jej
        właściwego rezultatu. W tej sytuacji państwo nie ponosi
        odpowiedzialności za jakość, bo wystarczy, że formalnie dokona czynności
        ochronnych. W projekcie obywatelskim NSZZ „„Solidarność popartym przez
        posła T. Mazowieckiego, odnośnie do istoty obowiązków państwa jest
        przepis o zapewnieniu i gwarancji rezultatu, a także o nienaruszalności,
        co wychodzi naprzeciw wyeliminowanemu horyzontalnemu ujęciu tej sprawy.
        Nie wystarczy tylko dopełnienie obowiązku. Jednocześnie te trzy
        sformułowania dają najmocniejszą ochronę przedmiotu ochrony. Obstaję
        przy zapisie: „Rzeczpospolita zapewnia i gwarantuje prawa człowieka,
        bezpieczeństwo obywateli oraz ich nienaruszalność, strzeże
        niepodległoŚci i całości terytorium, dziedzictwa kultury, języka oraz
        zapewnia ochronę i rozwój Środowiska”. Taka jest chyba intencja
        wszystkich zabierających głos. Chodzi o to, żeby zapisać jak najdalej
        idące gwarancje ze strony państwa na rzecz praw człowieka i
        bezpieczeństwa obywateli. Dlatego przepis projektu obywatelskiego
        uzupełniony o bezpieczeństwo obywateli daje potrójne gwarancje rezultatu
        funkcji państwa w tej dziedzinie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        W świetle dotychczasowej dyskusji chciałabym postawić pytanie: czy
        przewidujecie państwo, że w projekcie konstytucji będzie zapisana zasada
        bezpośredniej stosowalności jej przepisów i skargi sądowej? Jeśli tak i
        będzie przepis, że państwo zapewnia bezpieczeństwo obywateli, to jeżeli
        komukolwiek cokolwiek się stanie, poszkodowany będzie mógł zgłaszać
        roszczenia w stosunku do Rzeczypospolitej Polskiej za złamanie przepisów
        konstytucji. Czy będzie zasada bezpośredniej stosowalności przepisów
        konstytucji?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy nie będzie to tak rozciągliwy przepis, że uraz spowodowany
        śŚliskością drogi może powodować roszczenia ze strony obywatela?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Mam nadzieję, że ocaleje zasada bezpośredniego stosowania przepisów
        konstytucji. Jest ona niemal we wszystkich projektach ustawy
        zasadniczej. Skarga konstytucyjna nie będzie dawała podstawy do roszczeń
        jednostki wynikających z klauzul generalnych, o których teraz mówimy.
        Skarga konstytucyjna będzie przysługiwać tylko w przypadku naruszenia
        podstawowych praw jednostki gwarantowanych konstytucją. Skarga
        zorientowana jest na ochronę podstawowych praw zawarowanych w
        konstytucji, po wyczerpaniu wszystkich innych środków. Jej podstawą
        materialno-prawną nie mogą być ogólne sformułowania o celach państwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Odpowiadając na pytanie senator A. Grześkowiak możemy porównać, jak ta
        kwestia jest uregulowana w innych krajach. Uraz głowy obywatela
        odniesiony na skutek działań innego obywatela jest regulowany Kodeksem
        karnym lub Kodeksem cywilnym. Odpowiedzialność jest cywilnoprawna lub
        karnoprawna. Jeżeli obywatel przewróci się na źle utrzymanej drodze
        publicznej, to istnieje odpowiedzialność państwa. Jeżeli nie
        wystarczyłaby ustawa o samorządzie terytorialnym i ustawa o
        odpowiedzialności funkcjonariuszy państwowych, to w tych przypadkach
        można sięgać do konstytucji. W naszym kraju już były procesy dotyczące
        tego, czy państwo ponosi odpowiedzialność, jeżeli sarna wybiła oko
        obywatelowi odpoczywającemu w lesie miejskim. Takie sprawy są z całą
        powagą rozważane i oceniane przez sądy, które określają granice
        odpowiedzialności państwa. Rozpatrywane są drobne roszczenia przeciwko
        państwu. Szersza postawa konstytucyjna nie zachwieje budowlą.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mamy kilka kwestii do przegłosowania, które wiążą się z art. 3. Proszę,
        żeby poseł T. Mazowiecki sformułował swoją propozycję na piśmie. Chyba
        znam ją już na pamięć, ale proszę o spełnienie proceduralnego obowiązku.
        Jest propozycja senatora P. Andrzejewskiego, żeby do końcowego
        kompromisowego rozwiązania dopisać wyraz „nienaruszalność '. Musimy też
        przegłosować sformułowanie dotyczące strzeżenia dziedzictwa kultury i
        języka narodu. Wniosek posła R. Bugaja pojawiał się we wszystkich
        propozycjach. Jeżeli pan senator P. Andrzejewski nie wyrazi zgody, to
        jeszcze będziemy musieli przegłosować problem zrównoważonego rozwoju.
        Jeżeli byłaby pańska zgoda, to moglibyśmy uznać, że jesteśmy bliscy
        sformułowania wspólnego przepisu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Widzę daleko idącą konieczność wykładni pojęcia „zrównoważony rozwój”.
        Dlatego kwestionuję umieszczenie w tym miejscu tego określenia. Przepis
        ten jest otwartą klauzulą, której nadajemy w tej chwili konkretny sens.
        Jeżeli miałaby ostać się wykładnia autentyczna dokonana przez
        ustawodawcę i byłaby ona wiążąca oraz my jej dokonamy, to zgoda. Jeżeli
        ma to być formuła otwarta, której wykładnia będzie się zmieniała, a taka
        jest prawidłowość, to być może w przyszłości jedna dziedzina będzie
        żywiołowo się rozwijała, co będzie kwestionowane, ponieważ bęPosiedzenia
        Komisji Konstytucyjnej ZN dzie niezgodne z zasadą zrównoważonego
        rozwoju, czyli z zasadą konstytucyjną. Mam tego typu obawy. Nie
        opowiadam się przeciw tej formule, ale widzę niebezpieczeństwa
        wynikające z jej otwartości. Sama otwartość jest zagrożeniem różnych
        stanów faktycznych, które konstytucja będzie musiała obejmować, a
        których swoją wyobraźnią w tej chwili możemy jeszcze nie ogarniać.
        Dlatego jestem przeciwny tej propozycji.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wczoraj na ten temat dyskutowaliśmy z udziałem gości, więc nie wracajmy
        już do tego problemu. Mamy wniosek senatora J. Madeja i odmienny pogląd
        senatora P. Andrzejewskiego. Proszę nie rozpoczynać dyskusji na ten
        temat, bo został on już omówiony.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Moja propozycja zmierzała do tego, żeby w artykule tym napisać o
        środowisku w ogóle, a nie o Środowisku przyrodniczym. Środowisko w ogóle
        tworzy również mieszkanie, dom, osiedle, a nie tylko Środowisko
        przyrodnicze. Chodzi właśnie o zapewnienie ochrony środowiska człowieka
        w szerokim znaczeniu — poprzez zasadę zrównoważonego rozwoju. Zasada ta
        oznacza zaspokajanie potrzeb ludzkości bez uszczerbku dla przyszłych
        pokoleń.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Janusz Szymański (UP):</strong>
        Czy zaproponowano wyeliminowanie sformułowania ,,...1 całości swojego
        terytorium”? Albo mamy zasadę nienaruszalności, albo integralności. Chcę
        się upewnić, czy zostało to póprawione. Uważam, że w zaproponowanym
        przez podkomisję art. 3 sformułowane jest niedobre określenie. Nie
        chodzi o całość terytorium, tylko o realizację zasady integralności
        terytorialnej nienaruszalności terytorium. W tym znaczeniu jest to
        logiczne.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Przyznam szczerze, że nie wiem, na czym miałaby polegać różnica między
        strzeżeniem niepodległości i całości swojego terytorium, a strzeżeniem
        niepodległości i integralności lub nienaruszalności swojego terytorium.
        Uważam, że określenie „strzeżenie całości terytorium” jest wyrażone
        jasnym językiem, dostępnym społeczeństwu. Obawiam się, że wchodzimy w
        spory językowe. Moim zdaniem, „strzeżenie całości swojego terytorium”
        jest sformułowaniem prostym, jasnym, czytelnym, działającym edukacyjnie,
        jak mówił dr W. Kulesza. Nie może być żadnych wątpliwości. Rozumiem, że
        skończyliśmy dyskusję nad tym artykułem. Głosowania odbędą się o godz.
        15. Przechodzimy do art. 6, dotyczącego władzy zwierzchniej. „Władza
        zwierzchnia Rzeczypospolitej Polskiej należy do ogółu obywateli —
        tworzących Naród, który sprawuje ją przez swoich demokratycznie
        wybranych przedstawicieli lub bezpośrednio”. Była już propozycja, aby
        zrezygnować z wyrazów „demokratycznie wybranych”. Chodziło o to, żeby
        artykułowi temu nadać brzmienie: „Naród sprawuje władzę przez swoich
        przedstawicieli lub bezpośrednio”. Był przytaczany argument, że
        sędziowie nie są wybierani w pełni demokratycznej procedurze, bo są
        nominowani. Taki wniosek już się pojawił. Na początku chciałbym zapytać
        ekspertów o stosunek do tego przepisu i do propozycji wyeliminowania
        wyrazów „demokratycznie wybranych”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Przypominam, że w art. 25 Międzynarodowego Paktu Praw Obywatelskich i
        Politycznych podkreśla się wyraźnie demokratycznie wybranych
        przedstawicielii bo mogą być różni przedstawiciele narodu. W związku z
        tym uważam, że dobrze byłoby zachować to określenie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Proponowałabym, aby ust. 2 tego artykułu brzmiał: „Naród sprawuje władzę
        przez swych przedstawicieli wybranych do Sejmu i Senatu lub
        bezpośrednio”. Bez tego sprecyzowania nie odpowiadamy jednoznacznie na
        kardynalne pytanie, kto reprezentuje naród, czyli suwerena, kto jest
        nośnikiem praw narodu? Sądzę, że dopiero poprzez to sprecyzowanie
        unikamy dwuznaczności prowadzących do swoistej dwuwładzy w reprezentacji
        praw suwerena.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OrzechowskiJan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jan Orzechowski (PSL):</strong>
        Poseł K. Łybacka wyczerpała moją myśl, gorąco popieram przedstawioną
        propozycję.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Janusz Szymański (UP):</strong>
        Chcę uzasadnić rację brzmienia art. 4 w wersji, jaką zaproponowałem. Nie
        jest tak, że naród sprawuje swoją władzę tylko poprzez reprezentację
        sejmową i senacką, bo w katalogu reprezentacji mieści się urząd
        prezydenta. Poza tym takie wyliczenie byłoby z pewnością niepełne.
        Dlaczego należy pozostawić sformułowanie „„demokratycznie wybrani
        przedstawiciele”? Chodzi o władzę zwierzchnią, a nie o każdą władzę. Nie
        chodzi o władzę sądową w tym sensie, że prezydent powołuje sędziów, co
        jakoby dezawuuje demokratyczny wybór. Chodzi o władzę zwierzchnią.
        Sędziów Trybunału Konstytucyjnego wybiera Sejm i to jest demokratycznie
        realizowana procedura. Uważam, że ma sens pozostawienie sformułowania,
        że „Naród sprawuje władzę zwierzchnią przez swoich demokratycznie
        wybranych przedstawicieli lub bezpośrednio”. Chodzi również o stosowanie
        norm demokracji bezpośredniej. Opowiadam się przeciwko propozycji poseł
        K. Łybackiej wyliczającej reprezentację sejmową i senacką. Sformułowanie
        w ust. 2 jest uniwersalne, wzmacnia zasadę ujętą w art, 1, a
        jednocześnie potwierdza demokratyczną legitymację reprezentacji
        obywatelskiej.
      </p>
    </div>

    <!--<hr><p class="page-break">strona 35      </p>
    </div><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Czy władza pochodzi od ogółu obywateli, czy od narodu? Jest to bardzo
        istotne rozróżnienie. Co wysuwamy na plan pierwszy? Czy naród, rozumiany
        jako ogół obywateli, czy też ogół obywateli rozumiany jako naród? Sądzę,
        że władza pochodzi od narodu, tzn. od szczególnej wspólnoty, a nie od
        ogółu, czyli zbiorowości >być może przypadkowej. Uważam, że w tym
        artykule musimy okreś.ić nie tylko to, do kogo władza należy, ale też od
        kogo ona pochodzi. Rozwiązanie przedstawione na piśmie stanowi, że
        władza w Rzeczypospolitej pochodzi od narodu i należy do narodu
        rozumianego jako ogół obywateli. Chciałbym ponadto poprzeć to wszystko,
        co przed chwilą powiedział poseł J. Szymański.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Zgadzam się, że dodanie formuły zaproponowanej przez poseł K. Łybacką
        wyeliminowałoby prezydenta, a ponadto — w pewnym sensie — również
        samorząd terytorialny. Oczywiście on nie sprawuje władzy zwierzchniej,
        ale mówi się o podwójnej legitymacji demokratycznej samorządu w Świetle
        Karty Europejskiej, kiedy mówimy, iż gwarantuje udział samorządu
        terytorialnego w sprawowaniu władzy publicznej. Nam zależy na tym, żeby
        radny nie był tylko sługą swojego wyborcy, ale działał dla dobra całej
        społeczności. To zawsze grozi na niższym poziomie. Uważam, że właŚciwe
        jest podkreślenie, iż służy się narodowi, nawet jeśli jest się wybranym
        w małej gminie. Intencja posła L. Moczulskiego jest szlachetna, ale
        jeśli mamy obywateli, którzy uważają, że władza nie pochodzi od narodu,
        tylko od Boga, to co wtedy? Wtedy odbieramy części obywateli możliwość
        identyfikowania się z tym artykułem.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Jeśli używamy określenia ogólnego i wyjaśniamy, czym ono jest, to nikogo
        nie pozbawiamy takiej możliwości. Czy ogół obywateli stanowi odrębną
        tożsamość, jaką jest naród polityczny, czy jest to przypadkowe
        zbiorowisko? Ogół obywateli polskich stanowi odrębną tożsamość.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Tu się zgadzamy, ale uważam, że to, co pan teraz wyjaśnił w sprawie
        tożsamości wspólnoty, nie byłoby oddane zaproponowanym zapisem.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Wychodząc z założeń, które prezentował zarówno poseł J. Szymański, jak i
        poseł L. Moczulski oraz przychylając się do ich argumentacji wydaje się,
        że zakres regulacji dobrze ujmuje propozycja zawarta w projekcie
        obywatelskim NSZZ, „Solidarność ”, która ujmuje wszystkie elementy w
        trzech ustępach: „Ust. 1. Władza zwierzchnia w Rzeczypospolitej należy
        do narodu. Ust. 2. Naród sprawuje ją przez swoich przedstawicieli
        wybieranych do Sejmu i Senatu, powołanego w powszechnym głosowaniu
        Prezydenta Rzeczypospolitej,j odpowiedzialny przed Sejmem Rząd oraz
        niezawisłe sądy. Ust. 3. Sprawowanie władzy następuje także poprzez
        wyrażenie woli w referendum oraz obywatelską inicjatywę ustawodawczą”.
        Jest to władza zwierzchnia, która może być powoływana przez naród. Rząd
        z racji charakteru i funkcji jest władzą zwierzchnią odpowiedzialną
        przed Sejmem. Nie sposób pominąć deprecjonowanej dotychczas roli
        niezawisłych sądów jako władzy zwierzchniej w myśl monteskiuszowskiego
        podziału. Nie są one wybierane przez ogół obywateli stanowiących naród,
        ale funkcja pełniona w państwie przez niezawisłe sądy upoważnia do
        wyodrębnienia ich jako oddzielnej władzy zwierzchniej odnośnie całości
        tego, co stanowi państwo i naród. Następny artykuł mówi o wadze i randze
        samorządów. Podzielając argumentację co do roli samorządów, nie można
        powiedzieć, że jest to władza zwierzchnia nad całością narodu i państwa.
        Dlatego jest to przedmiot prerogatyw wyodrębnionych w następnym
        artykule. Popieram wniosek alternatywny z projektu NSZZ „Solidarność, bo
        daje on konkretną gwarancję zrealizowania postulatów, o których była
        przed chwilą mowa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KuleszaWladyslaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Przedstawiciel Prezydenta RP dr. Władysław Kulesza:</strong>
        Pragnę wyrazić sprzeciw wobec myśli zawartej we wniosku poseł K.
        Łybackiej, ponieważ Prezydent RP jest także przedstawicielem narodu.
        Próba przekreślenia tego jest decyzją polityczną, wymagającą
        rozstrzygnięcia przez to gremium. Należy podnieść wątpliwość, na którą
        zwrócili uwagę poseł J. Szymański, senator P. Andrzejewski i poseł K.
        Lipowicz. Jeżeli będziemy debatować na temat tego, kto dzierży władzę
        zwierzchnią, to trzeba dopisać obok legislatywy również głowę państwa
        >samorząd terytorialny i władzę sądową. Formuła zawarta w art. 6 wyrasta
        nie tylko z przesłanek politycznych, ale i ustrojowych. Próba
        przeredagowania przepisu poprzez dopisywanie różnych podmiotów
        prowadziłaby do ruiny legislacyjnej art. 6. Pomijam w tej chwili
        intencje polityczne.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Przepis podejmujący problem zasady zwierzchnictwa narodu jest bardzo
        istotny, bardzo ważna jest jego treść. Proponuję treść zgodną z
        brzmieniem art. 3 projektu senackiego: „Ust. 1. Wszelka władzy pochodzi
        od narodu, który tworzy wspólnotę obywateli polskich. Ust. 2. Naród
        sprawuje władzę przez demokratycznie wybranych przedstawicieli oraz
        przez referendum i obywatelską inicjatywę ustawodawczą”. Kilka ważnych
        problemów powinien rozstrzygać przepis mówiący o zwierzchnictwie narodu.
        Czy zasada zwierzchności narodu powinna być wyrażona w formie: władza
        „pochodzi”, czy władza „naldo narodu? Projekt senacki przyjmuje zasadę
        zwierzchnictwa narodu, wskazując na pierwotne pochodzenie władzy
        państwowej. Naród udziela władzy, przekazując ją trzem organom, które
        chociażby z racji pochodzenia od narodu powinny być równorzędne, ale
        jest to już inna kwestia. W tym przepisie ważna jest definicja narodu.
        Żeby nie było wątpliwości, projekt senacki proponuje polityczną
        definicję narodu, co powinno odsunąć wszelkie zarzuty o nierównoprawnym
        traktowaniu obywateli polskich nie będących narodowości polskiej.
        Polityczna definicja narodu wyjaśnia, że jest to wspólnota obywateli
        polskich. Stąd propozycja, że wszelka władza pochodzi od narodu, a nie
        należy do narodu, bo takie sformułowanie nie ma potwierdzenia w
        instytucjach konstytucyjnych. Drugi punkt — wspólnotę obywateli polskich
        tworzy naród. Różne są formy sprawowania władzy przez naród albo
        bezpośrednio, albo pośrednio przez demokratycznie wybranych
        przedstawicieli. Uważam, że określenie „demokratycznie wybrani
        przedstawiciele” jest konieczne, ponieważ mamy problem teoretyczny, czy
        państwo demokratyczne ma zawsze demokratycznie wybranych przedstawicieli
        sprawujących władzę w imieniu narodu. Dlatego uważam, że należy
        uwzględnić ten zwrot. Zwierzchnictwo narodu może mieć formę bezpośrednią
        i w senackim projekcie proponujemy referendum oraz obywatelską
        inicjatywę ustawodawczą. Konkludując, rekomenduję treść przepisu w
        brzmieniu z senackiego projektu konstytucji.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Mam pytania do ekspertów. Kto może reprezentować suwerena, czyli naród?
        Czy jest korzystna sytuacja, kiedy więcej jest nośników praw tego samego
        podmiotu? Czy nie prowadzi to do dwuwładzy i konfliktów?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OrzechowskiJan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jan Orzechowski (PSL):</strong>
        Omawiamy rozdział I, którego uzgodniony tytuł brzmi: „Zasady ustroju. W
        związku z tym w rozdziale I powinny być zawarte przepisy o charakterze
        ogólnym. Wszystkie szczegółowe unormowania, odnoszące się do
        poszczególnych instytucji, powinny znaleźć się dalej. Dlatego też
        opowiadam się za treścią art. 6 w przedstawionym brzmieniu z
        pominięciem, że przedstawiciele wybierani są demokratycznie. Dlaczego
        nie trzeba zawierać wzmianki o demokratycznych wyborach? Uważam, że
        zasada demokratycznych wyborów powinna być zamieszczona w tej części
        konstytucji, która będzie dotyczyła Sejmu, Senatu i samorządu
        terytorialnego. W rozdziale I wystarczający jest przepis o charakterze
        ogólnym.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Janusz Szymański (UP):</strong>
        W świetle dyskusji chciałbym ograniczyć się do pytania, czy prof. K.
        Działocha jako ekspert Komisji Konstytucyjnej opowiadałby się za
        wyliczeniem w artykule dotyczącym zasady zwierzchnictwa narodu katalogu
        organów, jak to jest w małej konstytucji, czy też opowiada się za
        bardziej pojemną formułą? Dopiero przy odczytaniu systemowym dałoby się
        ustalić, jaki jest to katalog organów. Czy w projektowanym artykule
        należałoby wyliczyć organy, żeby nie było wątpliwoŚci, o jaką chodzi
        reprezentację, czy też ta sprawa wynikałaby z interpretacji systemowej,
        bez wyliczania organów?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:<strong>
            Dyskusja dotyczy zasadniczego problemu. Chciałbym uświadomić Komisji
            możliwe rozstrzygnięcia w tej kwestii. Czy chodzi o pojęcie
            przedstawicielstwa polityczno-prawnego, czy pojęcie
            przedstawicielskich organów władzy narodu? Według jednych poglądów
            organami przedstawicielskimi władzy narodu miałyby być Sejm i Senat.
            Tak przyzwyczailiśmy się rozumieć ten problem w związku z brzmieniem
            art. 2 zachowanych przepisów konstytucyjnych. Wczoraj drugą
            tendencję najsilniej zasygnalizował prof. A. Rzepliński.
            Przedstawicielami władzy narodu są także urzędnicy państwowi,
            sędziowie, nie mówiąc już o prezydencie. Jest to bardzo szerokie
            rozumienie przedstawicielskich organów władzy narodu. Konsekwencje
            rozstrzygnięcia są daleko idące, ale jest to zasadnicza zmiana w
            stosunku do obecnego systemu pojęć, które obowiązują na gruncie
            konstytucji i doktryny prawa. Przedstawicielstwo narodu rozumiano w
            ten sposób, że organ przedstawicielski pochodzi z demokratycznych
            wyborów, jest wieloosobowy, działa kolegialnie przez określoną
            kadencję. Drugą cechą strukturalną tego pojęcia jest posiadanie
            przez organ przedstawicielski odpowiednich kompetencji
            ustawodawczych i kontrolnych. Tak jest według obecnego rozumienia i
            tak to przeważa w demokratycznej doktrynie, na której wyrasta system
            parlamentarno-gabinetowy. Czy inne organy, poza Sejmem i Senatem,
            które chce się uznać za organy przedstawicielskie władzy narodu,
            odpowiadają dotychczasowemu pojęciu? Odpowiedź brzmi: nie. Jeżeli
            przyjmiemy szerokie rozumienie przedstawicielstwa, to tworzymy inny
            Świat pojęć. Konsekwencje są daleko idące. Na pewno prezydent jest
            organem pochodzącym z wyborów bezpośrednich i demokratycznych. Nie
            jest organem działającym kolegialnie. Czy można mu przyznać takie
            kompetencje jak organom przedstawicielskim w dotychczasowym
            rozumieniu? Z konstytucji to nie wynika. W dniu 27 stycznia br.
            głosowaliście pa stwo, że inaczej ma być określony charakter roli
            prezydenta. Państwo nie przegłosowaliście, czy krąg organów
            przedstawicielskich ma być zrozumiany szeroko, czy tradycyjnie, jak
            w art. 2 obowiązujących przepisów konstytucyjnych. Ja niczego nie
            przesądzam.
          </strong>
        </strong>
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PastuszkaStefan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Stefan Pastuszka (PSL):</strong>
        Pytanie postawione przez poseł K. Łybacką jest newralgiczne I trudne.
        Argumentacja pana profesora rozwiała mi sporo wątpliwości, bo popierałem
        wniosek poseł K. Łybackiej. W związku z tym chciałbym zapytać, czy pani
        poseł zgłosi propozycję przepisu, o którym mówiła?
      </p>
    </div>

    <!--<hr><p class="page-break">strona 37      </p>
    </div><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Uprzejmie informuję, że już zgłosiłam propozycję tego przepisu.
        Przypominam, że dokonaliśmy pewnych .rozstrzygnięć kierunkowych. W
        świetle tych decyzji miałam wątpliwości odnośnie do tego, czy możemy
        dopuszczać do interpretacji — przy braku precyzyjnego sformułowania — że
        mamy różnych nośników praw suwerena. Dlatego o to pytałam. Czym innym
        jest odczytywanie powszechnych wyborów jako wzmocnienie autorytetu, a
        czym innym jest odczytywanie wyników powszechnych wyborów w sensie
        interpretacji prawa do reprezentowania suwerena. To są dwie zupełnie
        różne sprawy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Nie mogę zgodzić się z taką interpretacją, że przesądzenie, iż prezydent
        gwarantuje ciągłość władzy, a nie jest szefem władzy wykonawczej,
        oznacza, że nie jest on organem władzy zwierzchniej narodu. Nie jest
        możliwe wykluczenie prezydenta z pojęcia „władza zwierzchnia narodu”,
        zwłaszcza jeżeli prezydent wybierany jest w wyborach powszechnych. Nawet
        gdyby nie był wybierany w takich wyborach, to głowa państwa zawsze
        należy do władzy zwierzchniej narodu, niezależnie od kompetencji.
        Rozumiem inne zastrzeżenia interpretacyjne pana profesora, ale nie mogę
        przyjąć, że tamte rozstrzygnięcia przesądziły w tej sprawie. Jest to
        nieuprawnione.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/ZdradaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Zdrada (UW):</strong>
        Początkowo wydawało się, że to zagadnienie jest proste, ale okazało się,
        że dotykamy problemów zasadniczych. Chciałbym, aby był odnotowany
        wniosek, iż uważam, że dyskutowana problematyka powinna być zawarta w
        odrębnym artykule, a nie w ust. 2, jak to się kształtowało na początku
        dyskusji. Jest to materia na odrębny artykuł konstytucji. Przytaczano
        rozmaite argumenty przeciwko wnioskowi poseł K. Łybackiej, ale i
        przeciwko wnioskowi senatora P. Andrzejewskiego. Formuła ogólna zawarta
        w art. 6 chyba najlepiej odpowiada naszym intencjom I charakterowi
        konstytucji. Pozostaje problem podniesiony przez senator A. Grześkowiak.
        Czy wpisywać kwestię pochodzenia władzy od narodu, o co wnioskowała pani
        senator I co jest w projekcie senackim? W moim przekonaniu formuła, że
        władza zwierzchnia należy do ogółu obywateli, którzy tworzą naród,
        zawiera w sobie określenie pochodzenia władzy. Może nie trzeba o tym
        expressis verbis pisać. Domniemanie pochodzenia władzy od narodu w całym
        dotychczasowym tekście jest wyraźnie określone. Zawarcie formuły o
        pochodzeniu władzy od Boga czy narodu może wywołać komplikacje. W naszej
        tradycji politycznej od XVII wieku była obecna formuła pochodzenia
        władzy od narodu. Znajdowała ona swój wyraz w dotychczasowych
        konstytucjach. Uważam, że dotychczasowe sformułowanie wyczerpuje
        problem. Jeśli pani senator uważa, że ta kwestia powinna być
        podniesiona, to istnieje możliwość jej przegłosowania.
      </p>
    </div>

    <!--<hr><p class="page-break">strona 38      </p>
    </div><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PastuszkaStefan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Stefan Pastuszka (PSL):</strong>
        Chciałbym poinformować, że na ręce przewodniczącego Komisji wpłynęła
        propozycja nowego brzmienia artykułu, zgłoszona przez senatora H. Rota:
        „Władza zwierzchnia w Rzeczypospolitej Polskiej należy do narodu, który
        sprawuje ją przez demokratycznie wybranych przedstawicieli lub
        bezpośrednio ”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/RotHenryk.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Henryk Rot (SLD):</strong>
        Uważam, że wszystkie wypowiedzi odpowiadają intencji zawartej w art. 6
        tekstu podstawowego, a mianowicie, Że chodzi o władzę zwierzchnią, a nie
        władzę w rozumieniu określonych organów. Ta formuła nie budziła
        wątpliwości. Chodzi o organy przedstawicielskie, przy założeniu, że
        jeżeli prezydent pochodzi z wyboru, to też można stwierdzić, że jest
        organem przedstawicielIskim. W historii funkcjonowała taka formuła i
        tego pominąć nie można. Na tym bym poprzestał, bez prób definiowania
        poszczególnych terminów, bo będziemy musieli rozstrzygnąć, czy
        przedstawiciele mniejszości narodowych są obywatelami i członkami
        narodu. Przyjmujemy tradycyjne rozumienie narodu jako wspólnoty
        obywateli zamieszkujących na tym kawałku kuli ziemskiej. Naród sprawuje
        władzę zwierzchnią przez demokratycznie wybranych przedstawicieli lub
        bezpośrednio. W dyskusjach proponowano wykreślić określenie
        „demokratycznie wybranych”. Jeżeli mówimy o władzy zwierzchniej, to
        uważam, że ten przymiotnik powinien się znaleźć. Nie jest to kwestia
        wieloprzymiotnikowych wyborów, ale najogólniejszej charakterystyki drogi
        wyłaniania przedstawicieli przez naród. Cecha demokratyczności
        wyłaniania przedstawicieli powinna znaleźć się w tym artykule. Szukałem
        kompromisu, a nie dodatkowej propozycji. Jeśli tak państwo
        potraktowaliby moją propozycję, to bylibyśmy bliżsi ustalenia treści
        art. 6.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Chciałem odpowiedzieć poseł K. Łybackiej, która pytała, czy korzystne
        jest, jeśli będziemy mieli do czynienia z wieloma organami będącymi
        nośnikami suwerenności. Odpowiadam, że zależy to od tego, jakie w
        funkcjonowaniu państwa najbardziej ceni się wartości. Jeżeli ceni się
        bezwzględną sprawność państwa, to można postulować, że powinien być
        jeden ośrodek, któremu wszystkie pozostałe organy powinny być
        podporządkowane. Jest to znana teoria jedności władzy państwowej. Jeżeli
        za wartość wielkiego formatu uważa się to, aby istniała wewnętrzna
        kontrola w obrębie aparatu władzy i wewnętrzne hamowanie, by sfera
        aktywności państwa była ograniczona i była zapewniona szeroka swoboda
        działalnoŚci obywateli, to wówczas uważa się, że powinno być wielu
        nośników suwerenności. W tym przypadku opowiadamy się za zasadą podziału
        władzy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Janusz Szymański (UP):</strong>
        Chcę poprzeć wypowiedź prof. P. Sarneckiego tego typu ilustracją.
        Oparcie się na aktualnie obowiązującym art. 2 przePosiedzenia Komisji
        Konstytucyjnej ZN pisów pozostających w mocy na podstawie art. 77 małej
        konstytucji nie wchodzi w grę, ponieważ tamto sformułowanie było oparte
        na przyjęciu w Konstytucji PRL zasady jednolitości władzy. Wyliczenie
        mogło sprowadzać się do Sejmu i Senatu, ponieważ prezydent nie do końca
        był nosicielem zwierzchnictwa czy suwerenności narodu. Na gruncie zasady
        podziału władz jest tak, że nie da się wyliczyć wszystkich podmiotów
        uzewnętrzniających zasadę zwierzchnictwa narodu. Dlatego formułuje się
        ogólną dyrektywę, normę, że chodzi o demokratycznie wybraną
        reprezentację lub o formy demokracji bezpośredniej. Uważam, że to, co
        jest zaproponowane w różnych poprawkach art. 4, może być przyjęte, ale
        pozostaje problem sporny dotyczący tego, czy zasadę zwierzchnictwa
        narodu mamy ujmować w ten sposób, że władza zwierzchnia należy do ogółu
        obywateli tworzących naród, czy też bezpośrednio do narodu. To jest
        wybór konwencji, do której przywiązywałbym mniejszą wagę. Nie możemy
        tego problemu ograniczyć do dawnego pojmowania zasady zwierzchnictwa
        narodu na podstawie zasady jednolitości władzy. Nie zgadzam się z
        pierwszym poglądem prof. K. Działochy, że tylko organ o charakterze
        kolegialnym, pochodzący z wyborów powszechnych może być uwzględniony
        przy rozpatrywaniu tego problemu. Na gruncie zasady podziału władzy nie
        ma sporów wśród konstytucjonalistów, że głowa państwa jest również
        nosicielem suwerenności.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GrodzickiRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Ryszard Grodzicki (SLD):</strong>
        Spór ma zasadniczy charakter. Kontynuując myśl wyrażoną przez prof. P.
        Sarneckiego, że w gruncie rzeczy sposób rozumienia tego artykułu
        związany jest z aksjologią i wartościowaniem politycznym, warto zwrócić
        uwagę na fakt, że w wyniku wstępnych głosowań przyjęliśmy wersję słabej
        prezydentury. Podnoszono argumenty, konstrukcji zwierzchnictwa narodu,
        mówiące o tym, że podmiotów powinno być wiele, zakładając, że należy
        realizować zasadę powstrzymywania władz. Może ona być realizowana
        zarówno wtedy, kiedy uznamy, że emanacji narodu jest bardzo wiele, jak i
        wtedy, kiedy uzna się, że jest tylko jeden lub dwa podmioty. Propozycja
        poseł K. Łybackiej jest o tyle zasadna, że jeśli spojrzymy na dalsze
        artykuły, a w szczególności na art. 9, którym próbujemy osłabić pozycję
        prezydenta, powiadając, że nie jest organem władzy wykonawczej, tylko
        gwarantem 1 arbitrem stojącym poza strukturą władzy, i jeśli sięgniemy
        do art. 171, w którym mowa jest o orzeczeniach Trybunału Konstytucyjnego
        i tylko jedna wersja zakłada, że są one bezwzględnie ostateczne, a trzy
        pozostałe przewidują, że parlament ma coś jeszcze do powiedzenia, to
        wówczas stwierdzenie, że tylko Sejm 1 Senat są emanacją narodu, jest
        uzasadnione. W tym znaczeniu warto by poprzeć propozycję poseł K.
        Łybackiej.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie wiem, czy byłbym skłonny poprzeć propozycję poseł K. Łybackiej,
        natomiast linia interpretacyjna przedstawiona przez prof. K. Działochę
        zasługuje na uwagę. Z różnych powodów nie bardzo potrafię się pogodzić z
        tym, by prezydenta zaliczać wprost do władzy zwierzchniej narodu. Prof.
        P. Samecki poruszył bardzo ważny dylemat. Ile elementów wbudować w
        konstytucję, które byłyby bliższe modelowi jednolitej władzy, a gdzie
        się zatrzymać w tym procesie, jeśli budujemy władzę jako wzajemnie się
        hamującą i powstrzymującą? Prof. P. Samecki powiedział jednak jedną
        rzecz niezrozumiałą. Parlament jest sam w sobie taką konstrukcją władzy,
        w którą wbudowany jest element hamowania. Konstrukcja ta zawiera bowiem
        myśl o opozycji parlamentarnej. Nikt nie kwestionuje funkcji sądów i
        Trybunału Konstytucyjnego, które są elementem hamującym. Opowiadałbym
        się za taką koncepcją, która lokuje pojęcie władzy zwierzchniej w
        szeroko rozumianym parlamencie, w organie wielosobowym, który może
        wyrażać różne opcje obecne w pluralistycznym społeczeństwie, co jest
        bardzo ważne. Prezydent w istniejących sporach wyraża jedną rację, rację
        jednej części społeczeństwa. Nie jest tak, jak mówi prezydent L. Wałęsa,
        że jest on poza podziałami. Wyraża zawsze część racji większości czy
        mniejszości. Trzeba zastanowić się nad przyjęciem wniosku poseł K.
        Łybackiej albo pozostać przy sformułowaniu ogólnym i szukać dalszych
        interpretacji w innych częściach konstytucji.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Podnoszono problem, który był już dyskutowany wiele razy, czy w art. 6
        należy mówić o tym, że naród jest tworzony przez ogół obywateli.
        Oczywiście, współczesna doktryna konstytucjonalizmu przyjmuje, że naród
        to jest ogół obywateli i na ogół nie jest to kwestionowane, bo naród
        rozumie się w sensie politycznym. W naszym kraju jest dostatecznie wiele
        osób, które kwestionują taką koncepcję narodu, powołując się na
        koncepcję etniczną. Zabezpieczając się przed tego rodzaju
        niebezpieczeństwem, płynącym z tej interpretacji, sądzę, że nie byłoby
        niczym złym, gdyby znalazła się w tym artykule definicja polityczna
        narodu. Dobrze by to się komponowało z przyjętym już art. 2, który
        stwierdza, że Rzeczpospolita jest dobrem wspólnym wszystkich obywateli.
        Byłaby korespondencja między tymi artykułami. Obawy wynikają z tendencji
        nacjonalistycznych, a nie z konieczności narzuconej przez logikę
        konstytucjonalizmu demokratycznego.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Prosiłbym, żeby odnośnie omawianej kwestii zwrócić uwagę na przyjęte
        sformułowanie: „Władza zwierzchnia należy do narodu”. Przepis ten trzeba
        czytać łącznie z przepisem stanowiącym o podziale władzy. Nie jest tak,
        że władza zwierzchnia należy do tych, którzy ją wykonują. Ona należy do
        narodu i co do tego nie ma żadnej wątpliwości. Jest jeden podmiot władzy
        zwie39 rzchniej. Nie można mówić o jego podziale. Podział jest tylko
        wśród tych, którzy władzę zwierzchnią wykonują. Jedyna słuszna formuła
        tak wyrażonej myśli zawarta jest w propozycji senatora H. Rota. Zbyt
        daleko idą wnioski odnośnie do tego, że słaba prezydentura ma wynikać z
        faktu, że prezydenta nie określimy jako szefa władzy wykonawczej.
        Oznacza to tyle, że prezydent nie jest szefem władzy wykonawczej, nie
        jest jej kierownikiem. Może natomiast posiadać — zgodnie z przyjętą na
        Świecie procedurą dwuczłonowej władzy wykonawczej — określone
        kompetencje, które nie mają charakteru bezpośredniego uczestnictwa w
        sprawowaniu władzy, w rządzeniu. Prezydent jako organ uprawiający
        arbitraż nie musi być organem słabym. Klasyfikacja słaby — silny jeszcze
        nie została rozstrzygnięta. O niej przesądzimy przy konkretnych
        przepisach dotyczących pozycji prezydenta. Jeszcze nie rozstrzygnęliśmy
        problemu, czy prezydent jest organem władzy wykonawczej. Sprawa ta
        będzie przedmiotem dalszych ustaleń. Sądzę, że nie powinniśmy ich
        antycypować, kiedy mówimy o fundamentalnej zasadzie ustroju nowożytnego
        państwa, o zasadzie suwerenności narodu. Wydaje się, że bez tego
        fundamentu państwo nie może w ogóle funkcjonować.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Zgadzam się z rozumowaniem posła J. Ciemniewskiego. Idąc tym tropem
        uważam, że dodanie, jak chciałaby tego poseł K. Łybacka, przedstawicieli
        Sejmu i Senatu w gruncie rzeczy zwolniłoby prezydenta z funkcji
        sprawowania władzy zwierzchniej. Władza ta należy do narodu i jest
        sprawowana przez przedstawicieli wybranych do Sejmu i Senatu. Gdzie
        byłby prezydent? Sądzę, że konsekwencją przyjęcia takiego rozwiązania
        byłaby konieczność wprowadzenia do konstytucji zasady wyboru prezydenta
        przez parlament. Byłoby to rozwiązanie również demokratyczne, taka
        byłaby logiczna konsekwencja. Uważam, że bardzo dobra jest propozycja
        złożona przez podkomisję. Wsparłbym argument prof. P. Winczorka w
        sprawie potrzeby zdefiniowania narodu jako narodu politycznego, ze
        względu na to, że konstytucja jest dokumentem zabezpieczającym przed
        pewnymi zagrożeniami. Przy braku definicji konstytucyjnej rozumienia
        narodu istnieje możliwość dokonania innej interpretacji niż naród
        polityczny. Określenie narodu jako ogółu obywateli byłoby bardzo
        wskazane.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Proponuję zakończyć wymianę poglądów na temat art. 6. Pierwsze artykuły
        konstytucji mówią o zasadach ustroju. Sformułowanie zawarte w art. 6
        jest właśnie kluczową zasadą ustroju. Mówimy, że władza należy do
        narodu. Uzupełnienie zasady zwierzchnictwa narodu powinno nastąpić w
        późniejszych fragmentach konstytucji. Zgadzam się z propozycją
        podkomisji i z tym, co proponuje senator H. Rot. Czy pojęcie narodu nie
        wymaga dodatkowego zdefiniowania czy dookreślenia jako ogół obywateli?
        Chodzi tu o zasadę, która stanowi podstawę wielu szczegółowych
        przepisów. Nie widziałbym konfliktu między późniejszymi dookreśleniami w
        sprawie Sejmu i Senatu a generalną zasadą zawartą w art. 6. Poseł K.
        Łybacka zgłosiła swój wniosek na piśmie, mamy również wniosek senatora
        H. Rota i propozycję podkomisji. Eksperci proponują, żeby następnym
        artykułem był art. 10. Chodzi o to, by po zasadzie zwierzchnictwa narodu
        określona została zasada udziału partii politycznych w kształtowaniu i
        wyrażaniu woli obywateli. Mamy dwa warianty art. 10. Wariant I „Ust. 1.
        Rzeczpospolita Polska gwarantuje wolność tworzenia i działania partii
        politycznych. Biorą one udział w kształtowaniu i wyrażaniu woli
        obywateli, w szczególności przez uczestnictwo w wyborach. Ust. 2.
        Finansowanie partii politycznych jest jawne”. Wariant II „Partie
        polityczne, ruchy obywatelskie i inne ugrupowania obywateli, działające
        w oparciu o zasadę pluralizmu politycznego są formą dobrowolnego i
        równego uczestnictwa politycznego w kształtowaniu i wyrażaniu woli
        obywateli oraz wpływaniu na politykę Państwa . Chciałbym zapytać, czy
        członkowie Komisji mają w tej sprawie wnioski? Czy eksperci mają uwagi
        do wariantów art. 10? Czy jest w tych wariantach coś, co kłóci się z
        logiką konstytucyjną i wymagałoby zmiany?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        W naszych uwagach preferowaliśmy art. 10 w wariancie I, a nie w
        wariancie II, któremu zarzucaliśmy zbyt doktrynalne ujęcie i
        posługiwanie się terminami prawniczo nie usprawiedliwionymi. W tym
        wariancie wymienia się, oprócz partii politycznych, jeszcze nie
        zdefiniowane i nie znajdujące w dalszych częściach konstytucji
        sensownego rozwinięcia pojęcie ruchów obywatelskich i ugrupowań
        obywateli. Nie widać konsekwencji tych sformułowań w dalszych przepisach
        konstytucyjnych. Nie wyklucza to inicjatyw obywateli i innych form
        quasi-demokracji bezpośredniej. Zostawmy możliwość uczestnictwa
        obywateli w życiu politycznym zasadzie wolności zrzeszania się. Tutaj
        chodzi o określenie roli partii politycznych w realizacji władzy
        politycznej narodu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że eksperci sugerują, iż czystsza forma jest w wariancie I.
        Proponowano, żeby pierwsze artykuły konstytucji ze względu na elegancję
        formułować bez ustępów. Czy eksperci widzieliby możliwość ujęcia tego
        artykułu bez podziału na dwa ustępy? Czy sprawa finansowania partii
        politycznych musi być ujęta osobno? Posiedzenia Komisji Konstytucyjnej
        ZN oma Rozumiem, że chodzi o elegancję tekstu. Wycofuję uwagę, skoro nie
        jest to możliwe.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Czy rzeczywiście umieszczenie tego artykułu w tym miejscu, zaraz po art.
        6, jest uzasadnione? Czy jest to kwestia o tak wielkim znaczeniu systemu
        władzy, że gwarancje dotyczące wolności tworzenia i działania partii
        politycznych muszą być umieszczone bezpośrednio po artykule mówiącym o
        tym, że władza zwierzchnia należy do narodu? Jest to sposób sprawowania
        władzy. Mam takie pytanie do ekspertów, którzy są raczej zgodni co do
        brzmienia tego artykułu. Czy sprawa regulowana w ust. 2 musi być
        zamieszczona w konstytucji? Czy ten problem nie powinien być uregulówany
        w ustawie o partiach politycznych? Czy sposób finansowania partii
        politycznych jest tak istotną kwestią, która musi być zapisana w
        konstytucji?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/RotHenryk.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Henryk Rot (SLD):</strong>
        Jestem za tym, żeby pozostać przy tym, co jest w ust. 1. Nie ma żadnych
        redakcyjnych uwag. Uważam, że artykuł dotyczący partii politycznych musi
        być uwzględniony na odpowiednio wysokim miejscu w systematyce
        konstytucji. Mam wątpliwości, czy materia zawarta w ust. 2 jest materią
        konstytucyjną. Czy tej kwestii nie można uregulować w ustawie o partiach
        politycznych? Uważam, że jest to materia do uregulowania ustawowego.
        Prosiłbym, żeby eksperci wypowiedzieli się na ten temat. Uważam, że
        lepiej nie wyrazimy tego, co jest zawarte w ust. l.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Umieszczenie tego artykułu zaraz po przepisie dotyczącym władzy
        zwierzchniej ma uzasadnienie. Podam dla przykładu, że w systematyce
        konstytucji francuskiej ten artykuł zajmuje wysokie miejsce, bo jest to
        art. 4. Mówi się tam nawet, że realizacja suwerenności narodu następuje
        przy udziale partii politycznych. W naszym projekcie wspomina się o
        wyrażaniu woli obywateli i uczestnictwie w wyborach, co jest formą
        realizacji władzy, która ma być urzeczywistniona przez przedstawicieli.
        Sugerowałbym właśnie taką systematykę. Ust. 2 rzeczywiście można
        przenieść do ustawy o partiach politycznych. Chcę przypomnieć perypetie,
        jakie miały miejsce w Niemczech w związku z przyjmowaniem ustawy o
        finansowaniu partii politycznych. Nie jest to tylko przypadek
        charakterystyczny dla Niemiec, że tam partie polityczne bardzo długo
        opierały się przed realizacją odpowiednich przepisów konstytucji i nie
        chciały — właśnie ze względu na kwestie finansowe — zgodzić się na
        uchwalenie ustawy. Ustawa o partiach politycznych została uchwalona
        dopiero w drugiej połowie lat sześćdziesiątych. Wobec wielu podejrzeń i
        zarzutów dotyczących czystości życia publicznego, które mogą deformować
        wyrażanie i realizowanie woli narodu, sądzę, że niczym złym nie byłoby
        pozostawienie tego ustępu. Posiedzenia Komisji Konstytucyjnej ZN
        Oznaczałoby to także, że partie polityczne nie mogłyby się opierać przed
        ujawnieniem swoich funduszy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Muszę wrócić do zasadniczej sprawy związanej z konstrukcją tego przepisu
        1 jego miejscem w konstytucji. Nie mam wątpliwości co do tego, że
        przepis o partiach politycznych, o ich funkcji w realizacji
        zwierzchnictwa narodu powinien znaleźć się w tym miejscu. To jednak nie
        wyczerpuje problemu. Sądzę, że zbyt pospiesznie zdecydowano się na
        umieszczenie przepisów dotyczących partii politycznych tylko w tym
        miejscu, rezygnując z odpowiedniego uregulowania w rozdziale o prawach
        obywatelskich. Przyjęta formuła, że Rzeczpospolita Polska gwarantuje
        wolność tworzenia i działania partii politycznych, jest formułą nadającą
        się do rozdziału o prawach obywatelskich. W tym miejscu powinniśmy mówić
        o funkcjach partii politycznych w procesie realizacji zwierzchnictwa
        narodu. Nic nie szkodzi, że jedna struktura organizacyjna jest
        regulowana w dwóch miejscach. Wiele jest takich kwestii, o których mówi
        się w części ogólnej i później w przepisach szczegółowych. Uważam, że
        nie w tym miejscu należy mówić o wolności tworzenia i działania partii
        politycznych. Istota rzeczy w tym fragmencie konstytucji polega na tym,
        że poprzez partie polityczne realizuje się zasada zwierzchnictwa narodu.
        Możemy również rozwiązać problem finansowania partii politycznych.
        Jeżeli przeniesiemy regulację dotyczącą partii politycznych, jako
        realizację zasady wolności zrzeszania się, do rozdziału o prawach
        obywatelskich, to tam znajdzie się również miejsce do uregulowania zasad
        ich finansowania. Proponowałbym w tym miejscu następującą formułę:
        „Obywatele wpływają na demokratyczne wykonywanie władzy publicznej za
        pośrednictwem partii politycznych”. Gwarancje wolności tworzenia i
        działania partii przeniósłbym do postanowień dotyczących wolności
        zrzeszania się.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mam wątpliwości odnośnie do takiego brzmienia artykułu, ponieważ
        władztwo dokonuje się nie wyłącznie poprzez partie polityczne. Różne są
        możliwości obywateli w tej dziedzinie, a to brzmienie artykułu
        oznaczałoby, że tylko poprzez partie polityczne można uczestniczyć w
        sprawowaniu władzy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PastusiakLongin.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Longin Pastusiak (SLD):</strong>
        Ciągle mam na uwadze cel, jakim powinno być nadanie konstytucji większej
        przejrzystości i „odchudzenie” przedłożonego tekstu. Moim zdaniem, art.
        41 w części dotyczącej wolności i praw politycznych, w czterech ustępach
        całkowicie wyczerpuje treść art. 10. Gdyby zapadła decyzja, że artykuł
        ten należy zachować w tym miejscu, to uważam, że wystarczy pierwsze
        zdanie: „Rzeczpospolita Polska gwarantuje wolność tworzenia i działania
        partii politycznych”. Działanie obejmuje także udział w wyrażaniu
        opinii, udział w wyborach itd. Ust. 2 nadaje się do ustawy o partiach
        politycznych.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        W znacznym stopniu poseł J. Ciemniewski wyczerpał to, co chciałam
        powiedzieć. Opowiadam się za tym, że jeżeli w tym miejscu umieścimy
        artykuł o partiach politycznych, to powinien określać on tylko ich
        funkcję jako elementu sprawowania władzy zwierzchniej, a nie należy
        określać zasad finansowania partii.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Przekonują mnie argumenty posła J. Ciemniewskiego i poseł K. Łybackiej.
        W tym miejscu konstytucji najważniejsze jest to, jak się odbywa
        przeniesienie zwierzchnictwa narodu na jego przedstawicieli. Partie
        polityczne stanowią ważny element w tym procesie. Uważam jednak, że ich
        finansowanie jest ważną materią. Równie ważną materią jest to, że
        konstytucja nie powinna dopuszczać do istnienia tajnych partii i tajnych
        związków. Wysłuchałem argumentów posła A. Kwaśniewskiego, który
        stwierdził, że władztwo sprawowane jest nie tylko poprzez partie
        polityczne. Kształtowanie woli obywateli w gruncie rzeczy odbywa się
        poprzez partie polityczne. Władztwo oznacza nie tylko kształtowanie i
        wyrażanie woli obywateli. Po wysłuchaniu tych opinii chciałbym
        zaprezentować przepis w brzmieniu: „Kształtowanie i wyrażanie woli
        obywateli odbywa się za pośrednictwem jawnie działających i
        finansowanych partii politycznych”. Mamy element jawnego działania i
        finansowania. Przepis ten nie określałby jednocześnie roli partii
        politycznych w zwierzchnictwie. Potem przeszlibyśmy do artykułów
        mówiących o tym, jak władza jest ograniczona i jak jest podzielona.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GrodzickiRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Ryszard Grodzicki (SLD):</strong>
        Chciałbym przyłączyć się do konstrukcji myślowej, którą zapoczątkował
        poseł J. Ciemniewski, a kontynuowała poseł K. Łybacka. Ostatnia
        wypowiedź prof. W. Osiatyńskiego też była w tej tonacji. Zwracam uwagę
        na jeden istotny problem. Czy chcemy doprowadzić do takiej sytuacji, w
        której partycypacja obywateli w życiu politycznym, w realizacji
        zwierzchniej władzy narodu będzie się odbywała tylko poprzez partie, czy
        też dopuszczamy inne formy organizacyjne, które mogą aktywnie
        uczestniczyć w tego typu działaniach” Wiele wskazuje na to, że sensowne
        byłoby przyjęcie takich rozwiązań, które sytuowałyby partie na
        uprzywilejowanej pozycji. Konstrukcja zaproponowana przez prof. W.
        Osiatyńskiego zmierza w tym właśnie kierunku. Inne podmioty nie mogłyby
        występować aktywnie np. w procedurze wyborczej, bo korzystanie z
        pośrednictwa struktur partyjnych byłoby obligatoryjne. Drugi problem,
        który pojawił się w dyskusji, dotyczy tego, czy ograniczamy zagadnienie
        do jawności działania partii politycznych, czy także do legalności ich
        działania. Pojawiają się obecnie tego typu problemy. Czy partie nie
        uwidocznione w rejestrze mogą wystawiać swoich kandydatów lub
        partycypować w koalicjach wyborczych? Państwowa Komisja Wyborcza
        odpowiadała na ten problem negatywnie. Trzeba jednoznacznie o tym
        przesądzić, ale w dalszym przepisach konstytucji, mówiących o prawie do
        zrzeszania Się.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Podzielam pogląd posła R. Grodzickiego, żeby nie tylko podkreślić rolę
        partii politycznych jako nośnika suwerena w zakresie kształtowania jego
        woli, ponieważ inne struktury organizacyjne również uczestniczą w tym
        procesie. Umieszczenie przepisu w rozdziale I jest wskazane, bo jego
        przeniesienie do rozdziału o prawach obywatelskich doprowadziłoby do
        wtłoczenia partii politycznych do ogólnej normy o wolności zrzeszania
        się. Nie byłoby uzasadnione podkreślanie różnego rodzaju zrzeszeń, bo
        mieszczą się tam stowarzyszenia i związki zawodowe oraz wszystkie inne
        organizacje. Przy interpretacji sądowej sięga się do normy generalnej o
        wolności zrzeszania się. Potem sędziowie sięgają do normy szczególnej,
        określającej pozycję czy to związku zawodowego, czy partii politycznej.
        Dlatego usytuowanie partii w tym miejscu jest potrzebne. Chciałbym
        przestrzec przed wariantem II, który jest nie wskazany z różnych
        względów, także tych, o których mówił prof. K. Działocha. Ruchy
        obywatelskie i inne ugrupowania mieszczą się w prawie do zrzeszania się.
        Wariant ten stanowi, że te organizacje mają tworzyć formę równego
        uczestnictwa w życiu politycznym. Nie ma równego uczestnictwa, bo partie
        polityczne nie są równe. Chyba chodziło tutaj o równoprawne
        uczestnictwo. W wyborach preferuje się partie silniejsze. Przy okazji
        chciałbym określić, że poseł J. Ciemniewski nieco odbiega od tego, co
        określono w projekcie Unii Demokratycznej. W art. 7 mówi się wyraźnie,
        że partie polityczne zrzeszają na zasadach dobrowolności obywateli
        Rzeczypospolitej w celu wpływania metodami demokratycznymi na
        sprawowanie władzy publicznej. Rozumiem, że w wyniku zmiany poglądu
        nastąpiło odstępstwo od tej propoZYCJI.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Chciałbym prosić pana profesora o posługiwanie się aktualnym projektem.
        Jest on zawarty w druku nr 6. Dostrzegliśmy problemy, które rodzi takie
        ujęcie, więc zmieniliśmy treść tego artykułu. W aktualnym przedłożeniu
        naszego klubu art. 7 brzmi: „Partie polityczne służą obywatelom do
        wpływania metodami demokratycznymi na działalność władzy publicznej .
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Grozi nam przesadne rozczłonkowanie materii o partiach politycznych w
        różnych miejscach konstytucji. Państwo proponują uwzględnić funkcje
        partii politycznych. Postulują państwo, żeby wolność tworzenia partii
        była zagwarantowana w rozdziale o prawach i wolnościach obywatelskich, a
        więc w związku z zasadą wolności zrzeszania się. Będzie jeszcze trzecie
        miejsce w konstytucji, w którym będzie mowa o partiach politycznych.
        Chodzi o problem delegalizacji partii i kryteriów tej delegalizacji. Nie
        wspominam już o organie, któremu będzie przysługiwało to prawo. Takie
        rozczłonkowanie jest wbrew dyrektywom kodyfikacji przepisów prawnych,
        zgodnie z którymi obowiązuje zasada koncentracji w jednym przepisie
        materii rodzajowo jednorodnej. W tej chwili mamy do czynienia z bardzo
        akademickim dzieleniem tej materii na trzy różne aspekty. Najbardziej
        podoba mi się art. 4 ust. 1 obecnie obowiązujących przepisów
        konstytucyjnych: „Partie polityczne zrzeszają się na zasadach
        dobrowolności i równości obywateli Rzeczypospolitej Polskiej w celu
        wpływania metodami demokratycznymi na kształtowanie polityki Państwa. W
        ust. 2 jest mowa, że o sprzeczności z konstytucją celów działalności
        partii politycznej orzeka Trybunał Konstytucyjny.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Tworzymy konstytucję mając na uwadze praktyczne doŚwiadczenia z 1989 r.
        Zastanawiam się, czy nie można przenieść dotychczasowych przepisów do
        opracowywanego projektu. Nie uważam, żebyśmy popełnili gafę, jeśli
        odwołamy się do przepisów, które sprawdziły się w ciągu ostatnich pięciu
        lat. Ma to znaczenie także ze względu na funkcje edukacyjne oraz pewną
        ciągłość, którą trzeba podkreślać, jeśli nie jest ona uświadamiana. Czy
        ten artykuł z przepisów konstytucyjnych utrzymanych w mocy nie byłby do
        uwzględnienia? Moglibyśmy wyeliminować rozczłonkowanie przepisów
        dotyczących partii politycznych. Podoba mi się również propozycja
        zgłoszona przez prof. W. Osiatyńskiego, w której mówi się o jawnoŚci
        działania i finansowania partii politycznych. Spełnione muszą być dwa
        istotne warunki: partie polityczne muszą być rejestrowane i muszą
        określać swoje cele. Do tego dochodzi zasada jawności ich finansowania i
        procedura delegalizacji partii politycznych przez Trybunał
        Konstytucyjny.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Mam mieszane uczucia, chociaż generalnie zgadzam się z uwagami prof. K.
        Działochy, który uważa, że przepisy należy koncentrować w jednym
        miejscu, a nie rozdrabniać. Na początku powiedzieliśmy, że rozdział I
        mówi o generaliach, o zasadniczych sprawach ustrojowych, a w tym
        przypadku zaczęliśmy wchodzić w szczegóły dotyczące finansowania partii
        politycznych. Przepisanie art. 4 z przepisów konstytucyjnych utrzymanych
        w mocy spowoduje wprowadzenie regulacji szczegółowych, a w żadnym innym
        artykule nie rozstrzygamy o tak szczegółowych kwestiach. Dlatego uważam,
        że w tym miejscu powinna znaleźć się generalna zasada, zgodnie z
        propozycją przedłożoną przez prof. W. Osiatyńskiego, określająca sposób
        sprawowania zwierzchniej władzy narodu poprzez partie polityczne. W moim
        przekonaniu nieunikniony będzie powrót do partii politycznych w
        rozdziałach o wolnościach i prawach obywatelskich oraz o zasadach
        działania organów władzy. Będą tam zamieszczone szczegółowe przepisy
        dotyczące funkcjonowania partii politycznych.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Reprezentuję pogląd, który odpowiada wnioskowi zgłoszonemu przez posła
        L. Pastusiaka. Nie widzę powodów, dla których w zasadach naczelnych
        mielibyśmy szczególnie preferować partie polityczne, deprecjonując tym
        samym inne formy organizacji społecznych i formy zrzeszania się
        obywateli. Uważam, że jest to realizacja ogólnego prawa do zrzeszania
        się, prawa do stowarzyszania się. Zasada koncentracji materii
        konstytucyjnej, o której mówił prof. K. Działocha, wskazuje, że nie w
        zasadach naczelnych należy regulować tę kwestię, ale we fragmencie
        dotyczącym prawa do zrzeszania Się i tworzenia partii politycznych, a
        także dalej — w kompetencjach Sądu Najwyższego do zakazywania
        działalności lub orzekania o delegalizacji poszczególnych partii
        politycz nych. Reprezentuję taki pogląd i wydaje mi się, że w tym
        miejscu nie powinny być uwzględnione przepisy dotyczące partii
        politycznych. Zasada zwięzłości i koncentracji powinna być uzupełniona o
        zasadę niezbędności normy. Nie jest tu miejsce na podawanie definicji
        partii politycznej. Uważam, że należy jeszcze coś zostawić woli
        obywateli w ramach realizacji praw i wolności, a nie ograniczać
        nadmiernie tej sfery regulacjami konstytucyjnymi. Opowiadam się za
        wnioskiem posła L. Pastusiaka, aby tę materię uregulować w rozdziale o
        prawach i wolnościach obywatelskich oraz we fragmencie dotyczącym
        kompetencji odpowiednich organów orzekających o legalności bądź
        nielegalności partii politycznych. W tym wypadku chodzi o kompetencje
        Sądu Najwyższego.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KuleszaWladyslaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Przedstawiciel Prezydenta RP dr. Władysław Kulesza:</strong>
        Gdyby zapadła decyzja, że art. 10 pozostanie w tym rozdziale, to czy nie
        mógłby być on następującej treści: „„Rzeczpospolita Polska gwarantuje
        wolność tworzenia i działania partii politycznych. Partie polityczne
        zrzeszają na zasadach dobrowolności i równości obywateli
        Rzeczypospolitej Polskiej, w celu wpływania metodami demokratycznymi na
        kształtowanie polityki państwa”, W tym miejscu powinno być jeszcze
        zdanie o jawności finansowania partii politycznych. Nie mam konkretnego
        pomysłu, ale uważam, że jest to sprawa fundamentalna i dlatego powinna
        być uwzględniona. Pozostałe kwestie dotyczące m.in. kompetencji
        Trybunału Konstytucyjnego mogłyby być umieszczone dalej. Senator P.
        Andrzejewski pytał, co zrobić z innymi formami aktywności obywateli.
        Art. 41 chyba powinien satysfakcjonować.
      </p>
    </div>

    <!--<hr><p class="page-break">strona 43      </p>
    </div><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Proszę o przedłożenie propozycji na piśmie. Rozumiem, że prof. W.
        Osiatyński przedłoży swój projekt na piśmie. Czy ktoś spośród członków
        Komisji gotów jest podjąć inicjatywę prof. W. Osiatyńskiego?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Jeżeli prof. W. Osiatyński pozwoli, to ja bardzo chętnie podejmę pańską
        inicjatywę i zgłoszę odpowiedni wniosek. Wiele konstytucji podkreśla
        doniosłą rolę partii politycznych w mechanizmie urzeczywistniania władzy
        zwierzchniej narodu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Chciałbym przypomnieć, że problem miejsca partii politycznych nie
        zrodził się na tej sali, a rozważany jest przynajmniej od II wojny
        Światowej. Ustawa zasadnicza RFN jako pierwsza określiła miejsce partii
        w systemie realizowania zwierzchniej władzy narodu. Nie wolność
        zrzeszania się przesądza o umiejscowieniu partii politycznych w
        naczelnych zasadach. Jeżeli stanęlibyśmy na gruncie czysto liberalnej
        doktryny państwa, to partie polityczne rzeczywiście nie są potrzebne w
        konstytucji jako odrębna kategoria. W tym przypadku byłyby one materią
        sfery wolności obywatelskich. Tak było w okresie międzywojennym w Polsce
        i w klasycznych państwach liberalnych do II wojny Światowej. Okazało
        się, że partie polityczne stanowią integralny element mechanizmów
        urzeczywistniania przez naród swojej suwerenności. Tak uznano to po
        doświadczeniach różnych ruchów masowych. Dla mnie sformułowanie prof. W.
        Osiatyńskiego jest zbyt ogólne, bo nie odnosi roli partii politycznych
        do sprawowania władzy publicznej. Przed tym problemem nie uciekniemy.
        Ustosunkowując się do wypowiedzi prof. K. Działochy stwierdzam, że
        jestem w stanie wyliczyć kilka przykładów, gdzie treści zawarte w części
        ogólnej powtarzają się w przepisach dotyczących organizacji i środków
        ochrony prawnej. Nie widziałbym w tym przypadku nic sprzecznego z
        zasadami prawidłowej legislacji.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że zakończyliśmy wymianę poglądów na temat treści zawartych w
        art. 10 projektu podkomisji. Do rozstrzygnięcia mamy kilka kwestii.
      </p>
    </div>

    <!--<hr><p class="page-break">strona 44      </p>
    </div><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/RzeplinskiAndrzej.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński:</strong>
        W nawiązaniu do wystąpienia posła J. Ciemniewskiego uważam, że wzorem
        konstytucji niemieckiej czy czeskiej, i mając na uwadze różne
        doświadczenia, warto pomyśleć o tym, żeby napisać, Iż chodzi o partie
        polityczne, które odrzucają stosowanie przemocy w rozwiązywaniu
        problemów konstytucyjnych, a więc partie nie proponujące
        ekstremistycznych metod zmiany konstytucji. W praktyce oznacza to, że
        partie nazistowskie lub grupy komunistyczne proponujące rewolucyjne
        sposoby działania mogą być pozbawione możliwości legalnego
        funkcjonowania w ramach porządku konstytucyjnego. Tylko konstytucyjne
        metody zmiany ustawy zasadniczej są dopuszczalne. Art. 5 konstytucji
        czeskiej brzmi: „System polityczny oparty jest na swobodzie 1
        dobrowolności zakładania oraz wolnej konkurencji partii politycznych
        respektujących podstawowe zasady demokratyczne i odrzucających przemoc
        jako Środek realizacji swoich interesów”. | Art. 21 ust. 2 konstytucji
        Niemiec brzmi: „Partie, które poprzez swoje cele lub poprzez zachowanie
        swoich zwolenników zmierzają do naruszenia lub obalenia wolnościowego,
        demokratycznego porządku ustrojowego albo zagrażają istnieniu Republiki
        Federalnej Niemiec są sprzeczne z konstytucją. O sprzeczności orzeka
        Związkowy Trybunał Konstytucyjny ”. Granicą działania partii
        politycznych jest konstytucja. Jej zmiana może być urzeczywistniona
        wyłącznie na podstawie przepisów konstytucyjnych. Jest to istotne
        zagadnienie, bo zawsze może grozić pojawienie się ekstremistycznych grup
        politycznych, skrajnie prawicowych lub skrajnie lewicowych, które będą
        dążyły do obalenia porządku konstytucyjnego w drodze rewolucyjnej. Czy
        chcemy wbudować w treść tego przepisu jawność działania i finansowania
        partii politycznych?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/DrozdekMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>
          Przedstawiciel pełnomocnika obywatelskiego projektu konstytucji Michał
          Drozdek:
        </strong>
        Senator P. Andrzejewski wcześniej zgłosił poprawkę zmierzającą do tego,
        że o sprzeczności z konstytucją celów lub działalności partii
        politycznych orzekać będzie Sąd Najwyższy. Propozycja ta jest aktualna
        niezależnie od tego, w jakim miejscu będą przepisy o partiach
        politycznych. Dla nas bardzo ważny jest problem ograniczania wolności
        stowarzyszania się, w tym także w partie polityczne. Chciałbym
        przypomnieć brzmienie artykułu dotyczącego tego problemu z projektu
        obywatelskiego: „Zakazane jest istnienie partii politycznych i
        stowarzyszeń o programie totalitarnym, w tym nazistowskim i
        komunistycznym, a także tych, których program lub działalność zakłada
        lub dopuszcza stosowanie przemocy, w celu zdobycia władzy lub wpływu na
        politykę państwa, albo przewiduje utajnienie struktur względnie
        członkostwa”. Dlaczego expressis verbis wyliczyliśmy partie nazistowskie
        i komunistyczne? Ze względu na to, że stworzyły one systemy, które
        doprowadziły w XX wieku do największych zbrodni w skali ludzkości. Naród
        polski ma prawo zapisać w swojej konstytucji, że takich partii sobie nie
        życzy i ma prawo nazwać je po imieniu. Chodzi o partie nazistowskie i
        komunistyczne. Uważam, że ten artykuł ma znaczenie moralne, a nie tylko
        prawne. Prawne znaczenie wyczerpuje się przez opis cech tych partii.
        Nazwanie ich z imienia ma znaczenie moralne. Konstytucja nie jest tylko
        regulaminem, ale jest także aktem o znaczeniu moralnym. Przypominam o
        tym artykule, ale powrócę do niego w momencie, kiedy będziemy mówili o
        wolności stowarzyszania się. Przypominam, że postulujemy, by o zgodności
        programu i działalności partii politycznych z konstytucją decydował Sąd
        Najwyższy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Porusza pan problemy, które będą rozpatrywane w innym momencie naszej
        dyskusji, kiedy będziemy mówili o Trybunale Konstytucyjnym i Sądzie
        Najwyższym. W jaki sposób można wykorzystać uwagę prof. A.
        Rzeplińskiego, aby w przepisie dotyczącym partii politycznych znalazła
        się zasada działania zgodnego z prawem 1 niestosowania przez nie
        przemocy? Można to dopisać do przedstawionych już propozycji. O godz. 15
        powinniśmy przegłosować następujące propozycje: usunięcie przepisu —
        były takie wnioski — 1 przegłosowanie wariantów art. 10. Następnie
        będziemy głosować nad wnioskiem, który zgłosiła poseł K. Łybacka w
        sprawie innej redakcji tego artykułu oraz wnioskiem dr W. Kuleszy
        dotyczącym także innej redakcji przepisu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Zakaz działania za pomocą środków zbrojnych i sprzecznych z prawem jest
        zawarty w przepisie art. 41 ust. 4: „Zakazane są zrzeszenia, których cel
        lub działalność stanowi przestępstwo. O zakazie działania takiego
        zrzeszenia orzeka sąd”. Partia polityczna jest zrzeszeniem.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        W propozycji prof. W. Osiatyńskiego, którą z całą przyjemnością
        przejęłam, znajduje się przepis o legalnie działających partiach
        politycznych. Sprawa jest oczywista, bo chodzi o legalnie działające
        partie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/RzeplinskiAndrzej.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński:</strong>
        Chodzi o problem legalnego działania partii, w których programach
        zawarty jest implicite cel rewolucyjnego obalenia porządku
        konstytucyjnego w drodze przewrotu. Chodzi o to, w jaki sposób należy
        legalnie postępować z takimi partiami. W naszej propozycji jest to ustęp
        w brzmieniu: „O legalności działania partii politycznej zmierzającej do
        naruszenia porządku konstytucyjnego orzeka Trybunał Konstytucyjny . To
        może wynikać z programu lub formy działania partii politycznej. Partia
        może mieścić się w ramach porządku konstytucyjnego, ale wewnątrz niej
        tworzy się frakcja, która popycha partię w kierunku obalenia porządku
        konstytucyjnego. Chodzi o to, żeby legalnie wobec takiej partii można
        było rozpocząć proces przed Trybunałem Konstytucyjnym, który orzeka w
        tej sprawie.
      </p>
    </div>

    <!--<hr><p class="page-break">strona 45      </p>
    </div><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WiatrJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Wiatr (SLD):</strong>
        Nie ma problemów z wpisaniem zakazu działań polegających na użyciu
        przemocy. W związku z ciekawym głosem przedstawiciela projektu
        obywatelskiego chciałbym wyjaśnić następującą sprawę. Gdyby do
        konstytucji został wpisany zakaz działania partii komunistycznych, to
        czy to znaczyłoby, że w nazwie partii nie wolno posłużyć się określeniem
        „komunistyczna” — a więc istniejący legalnie Związek Komunistów RP
        „„Proletariat” powinien zostać zdelegalizowany — czy też jakieś ciało
        ustalałoby, które partie są komunistyczne, a które nie? Bliski
        dostojnemu przedstawicielowi projektu obywatelskiego „Tygodnik Solidarnz
        reguły o SdRP pisze jako o partii komunistycznej. Czy panowie chcecie
        iść tak daleko i nas też zdelegalizować, czy też będziecie łagodniejsi?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/DrozdekMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>
          Przedstawiciel pełnomocnika obywatelskiego projektu konstytucji Michał
          Drozdek:
        </strong>
        Nie ma takiej obawy, dopóki SdRP nie stosuje metod, którymi posługiwały
        się rządzące partie komunistyczne w dawnych czasach, nawet jeśli
        socjaldemokracja wywodzi się z tamtej przeszłości. Dlatego często
        publicyści w skrócie określają SARP jako partię komunistyczną. Jest to
        język publicystyczny, a nie prawny. Wyraźnie postulowaliśmy, żeby o
        sprzeczności działań z porządkiem konstytucyjnym decydował Sąd
        Najwyższy, który powinien rozważyć, co należy rozumieć przez pojęcie
        „komunizm”. Przypomnę, że niemiecka konstytucja zakazuje działalności
        partii politycznych o pewnym rodzaju programu. Jest tam praktyka
        stosowania kryterium przy orzekaniu o legalności czy nielegalności
        działania partii politycznych. Można zobaczyć, jak Niemcy to robią.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że pan M. Drozdek mówił o wymiarze moralnym czy politycznym
        tego stwierdzenia, a nie prawnym. Trzeba się tego trzymać, ponieważ
        ocena działalności partii nie zależy od nazwy. Nazwa m że być dowolna, a
        działalność i tak niezgodna z prawem. Partią demokratyczno-liberalną
        jest partia W. Żyrinowskiego, co stanowi pewien problem z punktu
        widzenia logiki reprezentowanej propozycji pana Drozdka. Trzeba szukać
        precyzyjnych określeń, które pozwalałyby odpowiedniemu trybunałowi
        określić, czy działalność partii narusza reguły konstytucyjne.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Czy następujące sformułowanie, które byłoby autopoprawką,
        satysfakcjonowałoby prof. A. Rzeplińskiego: „Kształtowanie i wyrażanie
        woli obywateli w zakresie realizacji władzy zwierzchniej narodu odbywa
        się za pośrednictwem jawnie finansowanych partii politycznych
        działających w ramach porządku konstytucyjnego Rzeczypospolitej
        Polskiej”?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/RzeplinskiAndrzej.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński:</strong>
        Tak, właśnie o to chodzi. Nigdy nazwa nie może przesądzać o legalności
        działania. Nie miałbym nic przeciwko temu, żeby legalnie działała partia
        „jedynie prawdziwych Polaków”, jeśli nie zakładałaby ona stosowania
        przemocy w celu zmiany ustroju. Jeżeli „związek prawdziwych komunistów”
        zakłada, że w drodze legalnych wyborów zdobędzie władzę i zmieni ustrój,
        to proszę bardzo. Chodzi o program, a nie o nazwę, bo inaczej
        wprowadzilibyśmy anarchię.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Trzeba byłoby do konstytucji dołączyć aneks nazw. Mamy wnioski, które są
        składane do sekretariatu. Przypominam, że obrady wznowimy po przerwie o
        godz. 15. [Przerwa]
      </p>
    </div>
  </div>
</div>

<Footer />
