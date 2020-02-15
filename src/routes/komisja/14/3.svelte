<script>
  import { fly } from "svelte/transition";
  import Nav from "../../../components/Nav.svelte";
  import Footer from "../../../components/Footer.svelte";
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
    border-radius: 3px;
  }

  .speaker p {
    padding: 2.5rem;
    border: solid 1px;
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
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

 .small-article-nav a svg {
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
  <title>Dzień 3 - Biuletyn nr 14</title>
</svelte:head>

<Nav segment={'info'} />

<!--<hr><p class="page-break">strona 3</p><hr>-->
<div class="header">
  <div>
    <h3>Obrady w dniu 23 lutego 1995 r.</h3>
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
    <a rel="prefetch" href="/komisja/14/2">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
    </a>
    <a rel="prefetch" href="/komisja/14/podkomisja/p1">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
    </a>
  </div>
</div>
  <div in:fly={{ y: 100, duration: 1000 }}>
  <div class="protocol">
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wznawiam posiedzenie Komisji Konstytucyjnej Zgromadzenia Narodowego.
        Chcę przedłożyć propozycję merytoryczną i organizacyjną. Jak wiadomo,
        wczoraj i przedwczoraj trwała debata nad formułą art. 15, która mogłaby
        stworzyć warunki dla — moim zdaniem — koniecznego kompromisu potrzebnego
        do zakończenia prac nad nową konstytucją. Zdajemy sobie sprawę, że nie
        wszystkie kontrowersje dało się usunąć. Ponadto niektóre ze zgłoszonych
        propozycji są jeszcze stosunkowo Świeże i wymagają zarówno namysłu w
        gronie samych autorów, jak i dyskusji w gronie klubów parlamentamych,
        które będą głosować nad tymi kwestiami w Zgromadzeniu Narodowym. Jest
        również tak, że do ekspertów zostały skierowane pytania dotyczące
        interpretacji różnych kwestii ujętych w przedłożonych propozycjach.
        Proponuję zatem, abyśmy pozwolili sobie na jeszcze jedną swego rodzaju
        „„rundę” wyjaśnień i wymiany poglądów. Kwestie te wypełniłyby dzisiejszy
        dzień. Nie miałoby miejsca ostateczne głosowanie. Głosowanie to odbyłoby
        się na początku następnego posiedzenia Komisji. Ponadto okres dzielący
        obecne i następne posiedzenie mógłby być wykorzystany na konsultacje
        klubów parlamentarnych, co pozwoliłoby określić zakres możliwego
        kompromisu, do jakiego będzie można przekonać parlamentarzystów. Chcę
        podkreślić, że nie jest to ucieczka od tematu. Jako Komisja
        Konstytucyjna pracujemy zgodnie z trybem prac, jaki nas obowiązuje. Tryb
        ten jest taki, że wszystkie merytoryczne decyzje Komisji Konstytucyjnej
        muszą być potwierdzone przez Zgromadzenie Narodowe, a w tym momencie
        dotykamy kwestii trudnej i kontrowersyjnej, o rozległych skutkach
        społecznych i politycznych. Sugeruję więc spokojny i merytoryczny tok
        prac nad art. 15, który nie jest jednym z wielu artykułów konstytucji,
        lecz jest artykułem szczególnym, wywołującym liczne kontrowersje. Gdyby
        moja propozycja została przyjęta, to w dyskusji podjęlibyśmy kwestię
        wyjaśnienia pytań 1 wątpliwości wokół art. 15. Ponadto moglibyśmy powró-
        cić do dodatkowych propozycji przepisów rozdziału pierwszego. Gdyby do
        godz. 13 — kiedy to planowane jest zamknięcie posiedzenia — pozostał
        jeszcze czas wolny, to moglibyśmy podjąć dyskusję nad przepisami
        rozdziału drugiego. Chcę jeszcze raz podkreślić, że moja propozycja
        przebiegu posiedzenia w dniu dzisiejszym nie jest próbą ucieczki od
        kwestii objętych art. 15. Chodzi o to, aby decyzje Komisji były w pełni
        Świadome, przy uwzględnieniu i poszanowaniu istniejących różnic
        poglądów. Decyzje Komisji powinny uwzględniać poglądy nie tylko nas jako
        członków Komisji, ale również poglądy naszych klubów parlamentarnych.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Jestem również za spokojnym rozpatrywaniem wielu spraw, a zwłaszcza
        sprawy objętej art. 15. Jestem również za namysłem i rozumiem, że namysł
        ten jest potrzebny kłubowi parlamentarnemu SLD, gdyż przedstawiciele
        mojego klubu zajęli wczoraj stanowisko. Członkowie klubu SLD oświadczyli
        natomiast, że zajmą stanowisko osobno. Rozumiem więc, że to jest ta
        potrzeba. Jestem jednak również za jasnością sytuacji. W świetle
        wczorajszej dyskusji i niezaakceptowania konsensu przez przedstawicieli
        SLD, chcę bardzo wyraźnie powiedzieć, że jeżeli chodzi o mój wniosek, to
        chodzi o wniosek pierwotny, a nie wniosek wynikający z wczorajszej
        dyskusji. Powracam więc do pierwotnego wniosku.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Myślę, że klubowi SLD czas jest również potrzebny. Chcę jednak także
        przypomnieć, że dotychczas zgłoszono 11 propozycji brzmienia art. 15.
        Tak więc już sama obszerność zgłoszonych propozycji oraz fakt, iż
        większość z nich narodziła się wczoraj, uzasadnia potrzebę dyskusji nad
        nimi również w szerszych gremiach. Obrady w dniu 23.02.1995 r. (21) Czy
        ktoś jest przeciwny zaproponowanemu przesunięciu w czasie rozstrzygnięć
        w kwestii art. 15? Nie ma. Stwierdzam więc, że propozycja została
        przyjęta. Przedstawiciel Sekretariatu Konferencji Episkopatu Polski, ks.
        prof. Józef Krukowski: W związku z wczorajszą dyskusją i następnie
        nagłośnieniem tej sprawy w mass mediach, gdy chodzi o akceptację zasady
        oddzielenia kościoła od państwa bez uzupełnienia nadającego tej
        formule sens pozytywny i mówiącego o autonomii i niezależności, muszę
        dokonać autopoprawki i zgłosić sprzeciw wobec zasady oddzielenia
        kościoła od państwa. Jest to bowiem nieklarowne i obciążone tragicznymi
        doświadczeniami przeszłości. Jeżeli przechodzimy do demokracji, to
        zerwijmy również z zasadą tak obciążoną, w przyszłości.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Chcę zapytać ks. prof. J. Krukowskiego jak należy interpretować, to co
        zostało przed chwilą powiedziane. Rozumiem bowiem, że kompromis, o
        którym byliśmy informowani, obejmował trzy elementy: oddzielenie od
        państwa, autonomiczność i niezależność w wykonywaniu swoich zadań. Czy
        wypowiedź ks. prof. J. Krukowskiego ma oznaczać, że następuje zerwanie
        tego, co było określone jako konsens i co oznaczałoby również
        rezygnację ze stwierdzenia o autonomii i niezależności? Pojęcia te były
        interpretowane jako wyraz równowagi w ramach kompromisowej formuły. Chcę
        się więc upewnić, jaka jest intencja w tym zakresie. Przedstawiciel
        Sekretariatu Konferencji Episkopatu Polski, ks. prof. Józef Krukowski:
        Formuła o autonomii i niezależności, zdaniem moich zwierzchników w
        Kościele katolickim, jest równoznaczna z oddzieleniem w sensie
        pozytywnym. Wpisywanie jednocześnie oddzielenia, autonomii i
        niezależności byłoby tautologią. Stąd też na zasady autonomii i
        niezależności zgadzamy się, natomiast na oddzielenie — nie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Jeżeli jest to tautologia — pojęcia równoznaczne — to czy pozostawienie
        formuły: „oddzielone od państwa”, z wykreśleniem autonomii i
        niezależności, nie byłoby odzwierciedleniem sytuacji, w której unika się
        powtórzenia pojęć tożsamych? Przedstawiciel Sekretariatu Konferencji
        Episkopatu Polski, ks. prof. Józef Krukowski: Na ujęcie poJęcia:
        „oddzielone” nie mam akceptacji. Nie mogę więc wyrazić zgody.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Z powodu posiedzenia Komisji Rady Europy nie mogłam uczestniczyć w
        początkowej części posiedzenia Komisji Konstytucyjnej. Nie miałam więc
        możliwośc przedstawienia swojej poprawki na plenarnym posiedzeniu
        Komisji. W związku z tym chcę zwrócić uwagę, że tekst poprawki nie
        zawiera formuły o oddzieleniu kościoła i państwa. Zasiadającym w tej
        Komisji oraz innym osobom chcę przypomnieć, że gdybyśmy w nowej
        konstytucji zawarli sformułowanie o oddzieleniu państwa od kościoła i
        kościoła od państwa, byłoby to przepisaniem obecnie obowiązującego
        przepisu konstytucji, w tym fragmencie stalinowskiej. Nie wiem, czy
        rzeczywiście nowa konstytucja powinna przepisywać z konstytucji
        stalinowskiej sformułowanie, które co oznaczało, to jeszcze wszyscy
        pamiętamy. Zwłaszcza wszystkim tym członkom Komisji, którzy nazywają się
        nową socjaldemokracją chcę przypomnieć, że zawarcie w konstytucji
        sformułowania o oddzieleniu kościoła od państwa jest przepisaniem
        konstytucji stalinowskiej. Trudno zatem byłoby przyjmować, że
        sformułowanie to ma inną treść niż konstytucja, której nikt nie chce
        powtarzać — również nowa socjaldemokracja nie chce nawiązywać do czasów
        stalinowskiej konstytucji. Raz jeszcze chcę powtórzyć, że proponuję
        Komisji sformułowanie, które przedłożyłam w poprawce i które stwierdza
        m.in., że państwo i Kościół katolicki oraz inne kościoły i związki
        wyznaniowe Są autonomiczne i niezależne.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Przed udzieleniem głosu kolejnym mówcom chcę prosić ekspertów, aby
        spróbowali określić znaczenie pojęcia: „autonomiczny . W projektach
        konstytucji kwestia ta pojawia się w dwóch kontekstach. Kontekst
        pierwszy to stosunki państwo-kościół, a kontekst drugi to autonomia
        szkół wyższych. W polskim prawie konstytucyjnym autonomia nie jest
        zdefiniowana.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Posłowi J. Jaskierni chcę przypomnieć, że to nie strona kościelna
        zerwała rysujący się konsens, lecz upór niektórych przedstawicieli SLD,
        którzy zdecydowali się wpisać formułę o zadaniach religijnych i
        organizacyjnych jako zakres działania kościoła. Konstytucja, która
        dyktuje jakie zadania ma kościół, jest nieporozumieniem. W tej kwestii
        nastąpił zgrzyt, który uniemożliwił wczoraj ustalenie formuły
        kompromisowej. Tak więc wnioskuję o inną redakcję dyskutowanej formuły.
        Minimum byłoby wpisanie formuły mówiącej o oddzieleniu od organów
        państwa bądź władz państwowych, a nie od państwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        W nawiązaniu do głosu senatora K. Kozłowskiego również proponuję zmianę
        redakcyjną ust. 3. Nowe brzmienie jest następujące: „Kościoły i związki
        wyznaniowe są oddzielone od państwa, autonomiczne i niezależne w
        wykonywaniu swych zadań” — jest to formuła proponowana przez stronę
        kościelną i posła T. Mazowieckiego, a ja proponuję dodanie: „na zasadach
        określonych w ustawie”. Kwestia druga. Ks. prof. J. Krukowski uważa, że
        pomiędzy oddzieleniem a autonomią i niezależnością zachodzi tautologia,
        a jednocześnie jest zgoda na autonomię i niezależność, to w przypadku
        tautologii wydaje się dość niejasne, czemu nie może być użyty wyraz
        „oddzielone”. W rozumieniu ks. prof. J. Krukowskiego wyraz ten nie może
        zaistnieć, gdyż nie ma gwarancji pozytywnego rozumienia pojęcia od
        dzielenia. W związku z tym chcę zapytać, czy ks. prof. J. Krukowski nie
        uważa, że ust. 4 stwierdzający: „W celu realizacji praw człowieka i
        potrzeb obywateli Państwo współdziała z Kościołem i związkami
        wyznaniowymi , jest właśnie taką gwarancją pozytywnego rozumienia
        oddzielenia kościoła od państwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Chcę powiedzieć, że ja nie proponowałem wczoraj jakiejś zmiany, lecz
        została złożona — ale nie przeze mnie — nowa propozycja. Ponadto
        rzeczywiście było tak, że dyskutowaliśmy nad przedłożonym przepisem, ale
        na propozycję poseł K. Łybackiej tym bardziej nie mogę się zgodzić.
        Jeżeli bowiem jest norma ogólna mówiąca o niezależności kościoła i
        państwa, a następnie stwierdza się, +e w ustawach określi się tę
        kwestię, to przyjęcie tej tormuły oznaczałoby, że państwo jednostronnie
        określa zakres działalności kościołów.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/PastusiakLongin.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Longin Pastusiak (SLD):</strong>
        W świetle wypowiedzi senator A. Grześkowiak, zachowując szacunek dla
        faktów i historii, chcę przypomnieć, że idea rozdziału państwa od
        kościoła nie odnosi się do konstytucji stalinowskiej, lecz odnosi się do
        pierwszej konstytucji na Świecie — do Konstytucji Stanów Zjednoczonych
        Ameryki. Zasada ta znalazła wyraz w licznych wykładniach Sądu
        Najwyższego, który jest najwyższym interpretatorem amerykańskiej
        konstytucji oraz znajduje wyraz w dosłownym sformułowaniu mówiącym o
        rozdziale państwa i kościoła. Warto więc trzymać się faktów
        historycznych i rodowodu tej koncepcji.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Alicja Grześkowiak NSZZ „S”):</strong>
        Członkom Komisji chciałabym przypomnieć, że nie jesteśmy Stanami
        Zjednoczonymi. Faktem niezaprzeczalnym jest natomiast to, że w
        konstytucji z 1952 r. znajduje się formuła o oddzieleniu państwa od koś-
        cioła i kościoła od państwa. Nie wiem, na czym polega kompromis, jeżeli
        przyjmuje się tę samą formułę.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Proponuję, aby nie prowadzić dalszej polemiki, gdyż przedstawione uwagi
        są prawdziwe. Uwaga posła L. Pastusiaka o formule zapisanej w
        Konstytucji USA jest prawdziwa. Uwaga senator A. Grześkowiak, że nie
        jesteśmy Stanami Zjednoczonymi, jest prawdą.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Jeżeli nie chcemy utonąć w dywagacjach natury historycznej, filologi :
        cznej i ideologicznej, to musimy posługiwać się pojęciami ostrymi o tym
        samym znaczeniu. Tymczasem odnoszę wrażenie, że pojęcie państwa nie jest
        w naszej dyskusji pojęciem wystarczająco ostrym i jednoznacznym. Dlatego
        też proponuję — przynajmniej dla potrzeb dyskusji nad tym artykułem —
        posługiwać się pojęciem „Rzeczpospolita”, co obejmowałoby pojęcie
        państwa w całości lub pojęciem „Rzeczpospolita Polska”. Inna możliwość
        to pojęcie „organa Rzeczypospolitej” bądź „organa państwowe”. Czymś
        zupełnie innym jest rozdział między organami Rzeczypospolitej a
        kościołami i związkami wyznaniowymi, a czymś zupełnie innym jest
        rozdział między Rzecząpospolitą a kościołami i związkami wyznaniowyrni.
        Jeżeli nie przyjmiemy jasnej konwencji terminologicznej, to zachodzi
        obawa, że w tej niejasności kryje się jakaś manipulacja i że chodzi o
        coś innego. Apeluję więc o bardzo wyraźne posługiwanie się terminami.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Apel jest trafny, lecz co miałby on praktycznie oznaczać na przykład w
        odniesieniu do art. 15 podkomisji?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Formuła mówiąca, że „Kościół i związki wyznaniowe są oddzielone od
        Państwa”, mogłaby brzmieć: „Kościoły i związki wyznaniowe są oddzielone
        od organów Rzeczypospolitej' lub „Kościoły i związki wyznaniowe są
        oddzielone od Rzeczypospolitej”. Druga formuła jest horrendalna. Trzeba
        jednak dokonać wyboru, gdyż formuła mówiąca o oddzieleniu od państwa dla
        niektórych z nas oznacza oddzielenie od władz państwowych. Dla innych
        oznaczać może jednak oddzielenie od Rzeczypospolitej, a jest to coś
        zupełnie innego.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Po pierwsze, chciałbym się dowiedzieć, jaki jest status konsensu, który
        został wczoraj wypracowany bądź prawie wypracowany, gdyż nie uzyskał
        oficjalnego potwierdzenia. Słyszalne są jednak rozbieżne sygnały.
        Senator K. Kozłowski sugerował, że skoro są trudności, to należy
        poszukiwać innej formuły. W związku z tym przypomnę stosowną formułę
        zawartą w ust. 3: „„Kościoły i związki wyznaniowe są oddzielone od
        Państwa i są autonomiczne i niezależne w wykonywaniu swoich zadań”.
        Pierwsze pytanie, jakie się nasuwa, to pytanie: czy jest wola przyjęcia
        tej formuły? Słychać głosy, aby SLD zajął stanowisko, lecz nie wiadomo
        czego miałoby ono dotyczyć. Po drugie chcę jeszcze raz podkreślić, że
        formuła o oddzieleniu od państwa była formułą kompromisową, którą
        przedłożył poseł T. Mazowiecki i którą przedstawiciele Kościoła
        katolickiego aprobowali po to, aby uniknąć użycia pojęcia: „rozdział
        kościoła od państwa”. Jeżeli nie jesteśmy w stanie zaaprobować
        przytoczonej formuły, to mówienie, że kompromisem będzie skreślenie
        wyrazu „oddzielone” przy pozosta Obrady w dniu 23.02.1995 r. (21)
        wieniu: „autonomiczne i niezależne”, nie można uznać za kompromis.
        Oznacza to przyjęcie jednej z opcji, która cofa nas do sytuacji, kiedy
        podkomisja przygotowała cztery warianty. Kwestia trzecia. Nie wiem, z
        czego wynika przywiązanie senator A. Grześkowiak do Stalina i ducha
        stalinizmu, lecz pojęcie rozdziału kościoła od państwa jest jedną z
        przedstawionych kategorii prawno-konstytucyjnych znanych w nauce prawa
        konstytucyjnego. Pojęcie to genetycznie w najmniejszym stopniu nie wiąże
        się z konstytucją 1952 r. Pojęcie to znalazło się w tej konstytucji
        dlatego, że formuła ta była stosowana także w innych konstytucjach.
        Istota problemu polegała na praktyce. Jeżeli jednak określona praktyka
        Źle się kojarzy, to nie można tej praktyki identyfikować z pojęciem
        prawno-konstytucyjnym. W związku z tym chciałbym prosić ekspertów o
        wyjaśnienie, co oznacza pojęcie rozdziału kościoła od państwa w teorii
        prawa konstytucyjnego. Pojęcie to jest bowiem stosowane. Nie powinien
        powstać mit, że próbujemy coś rozgrywać lub tworzyć w sprzeczności z
        pewną tradycją cywilizacji Światowej, która ukształtowała się w tym
        zakresie. Kwestia czwarta. Zapytałem wczoraj — 1 nadal oczekuję
        odpowiedzi — w związku z propozycją posła W. Cimoszewicza, który
        zaproponował określenie funkcji religijnej i organizacyjnej. Jak
        rozumiem intencje autora, chodziło o sprecyzowanie, co to znaczy:
        zadania kościoła. Jeżeli występują inne funkcje — jak na przykład
        charytatywna — to może je również wskazać. Jeżeli będzie taka potrzeba,
        to można wymienić funkcje kościoła. Nie jest to jednak określenie
        zadań kościoła, lecz określenie w jakim zakresie występuje niezależność.
        Jeżeli bowiem kościół angażuje się w funkcje jednoznacznie Świeckie —
        jak na przykład działalność gospodarcza — to rodzi się pytanie, czy tego
        typu kwestii ma również dotyczyć niezależność i autonomia. Czy jednak w
        tym okresie nie powinny być stosowane reguły dotyczące innych podmiotów
        prowadzących ten sam typ działalności? Nie ma to jednak nic wspólnego z
        próbą ograniczenia kościoła w zakresie wykonywania jego funkcji
        wynikających z istoty kościoła. Uważam więc, że postawione pytanie
        jest uprawnione i powinna na nie być udzielona odpowiedź. W związku z
        tym chcę przypomnieć o złych doświadczeniach z małą konstytucją, kiedy
        to kilka kwestii nie zostało dookreślonych w myśl założenia, że
        konstytucja nie powinna być zbyt szczegółowa. Z tych niedookreśleń
        wynikają jednak problemy. Kwestia ostatnia, to stwierdzenie, że wokół
        sprawy, nad którą dyskutujemy toczy się pewna gra propagandowa, która
        niekoniecznie odzwierciedla intencje formułowane na forum Komisji.
        Przykładem może być kwestia: konkordat, czy ustawa. W dniu wczorajszym
        nikt jednak nie kwestionował kwestii dopuszczalności konkordatu, a więc
        dopuszczalności umowy międzynarodowej. Kwestia ta ujęta jest r nież w
        wariancie posła W. Cimoszewicza — który upoważnił mnie, gdyż jest
        chwilowo nieobecny — do stwierdzenia, że może zaproponować formułę
        kompromisową o treści: „Ustawa lub ustawa i konkordat”, jeżeli jest to
        problem, który odgrywa istotne znaczenie. W przedłożonej formule chodzi
        o podkreślenie, że generalnie relacje między kościołami i związkami
        wyznaniowymi a państwem określają ustawy. W odniesieniu do Kościoła
        katolickiego może to być ustawa lub ustawa i konkordat, jeżeli konkordat
        wchodzi w rachubę. Równocześnie w ocenie posła W. Cimoszewicza
        przesądzanie, że będzie konkordat bez względu na to, jakie będą poglądy
        przyszłych parlamentów, rządów, Stolicy Apostolskiej, jest
        konstytucyjnym antycypowaniem zagadnienia, które podlega innym regułom,
        gdyż chodzi o umowę międzynarodową. Z, istoty rzeczy musi to być wyraz
        woli obu stron. Sztywne przesądzenie tej kwestii w konstytucji byłoby
        sprzeczne z techniką postępowania w zakresie podejmowania rozstrzygnięć
        tego typu problemów.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/SiemiatkowskiZbigniew.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Zbigniew Siemiątkowski (SLD):</strong>
        Sądzę, że nasza wczorajsza dyskusja nie powinna być stracona. W moim
        przekonaniu zarysowały się pierwsze pola kompromisu. Ponadto — co bardzo
        ważne — zosiała zarysowana wola, zarówno zwolenników jednego jak i
        drugiego typu rozwiązań, że artykuł regulujący w konstytucji kwestię
        stosunków państwo—kościół, nie może być wynikiem tylko i wyłącznie woli
        większości zdolnej do przegłosowania określonego rozwiązania, lecz
        wynikiem woli wszystkich zebranych. Zmierzając w tym właśnie kierunku,
        chcę zaproponować formułę, która — w moim przekonaniu — może być
        zaakceptowana przez obie strony. Zmierzając tokiem rozumowania senatora
        K. Kozłowskiego chcę zaproponować brzmienie ust. 3 w art. 15. Posługując
        się terminologią użytą w ust. 1, chcę powtórzyć, że mamy do czynienia
        nie tylko z władzami państwowymi, lecz raczej z władzą publiczną. W ust.
        1 jest bowiem mowa o władzach publicznych i instytucjach wykonujących
        zadania państwa. Proponuję więc, aby ust. 3 miał następujące brzmienie:
        „Kościoły i związki wyznaniowe są oddzielone od władz publicznych oraz
        są autonomiczne i niezależne w wykonywaniu swoich zadań. W celu
        realizacji praw człowieka i potrzeb obywateli władze publiczne
        współdziałają z kościołami i związkami wyznaniowymi. Zdanie drugie służy
        podkreśleniu, że mamy do czynienia również ze współpracą między państwem
        a kościołami i związkami wyznaniowymi. Jest to ust. 5 z pierwotnego
        brzmienia. Zaprezentowana formuła zawiera określenia z konkordatu, na
        których zależy kościołowi. Chodzi o takie określenia jak autonomia i
        niezależność, a także współdziałanie. Zaproponowana formuła zawiera
        również pojęcie występujące w konstytucjach innych państw i wskazujące
        na oddzielenie kościoła i władz publicznych.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Wczoraj podkomisja podstaw ustroju politycznego i
        społeczno-gospodarczego była bliska osiągnięcia konsensu. Został nawet
        zaakceptowany zapis stwierdzający, że kościoły i związki wyznaniowe są
        oddzielone od państwa. Dzisiaj, jak widać, strony wycofują się z tego
        zapisu, przy czym niepokol mnie jedna kwestia. Przedstawi ciel Kościoła
        katolickiego, a także niektórzy parla mentarzyści jako argument
        uzasadniający wycofanie się z formuły o oddzieleniu od państwa, powołują
        się na to, że taki przepis znajduje się w konstytucji z 1952 r. Mam w
        związku z tym pytanie, czy ponieważ w konstytucji z 1952 r. jest przepis
        o tym, że sędziowie są niezawiśli, to w nowej konstytucji przepis o tej
        treści nie będzie mógł być przyjęty? Nie należy zapominać o ponad
        czterdziestoletnich doświadczeniach stosowania konstytucji z 1952 r,,
        ale również nie należy zapominać o doświadczeniach ostatnich kilku lat,
        które rodzą obawy o sposób realizacji przepisów dotyczących stosunków
        między państwem a kościołem. Należy również pamiętać, że naszym zadaniem
        nie jest ocenianie historii i nie jest przewidywanie zdarzeń mzyszłych.
        Naszym zadaniem jest przygotowanie p: ojektu konstytucji, która ma
        gwarantować określone kwestie. Konstytucja z 1952 r. również
        gwarantowała wiele kwestii formalnie, a nie miało to nic wspólnego z
        rzeczywistością. Czy na tej podstawie mamy przygotowywać nową
        konstytucję? Gwarancją przestrzegania nowej konstytucji jesteśmy my
        sami. Uważam więc, że argument w postaci odwoływania się do konstytucji
        z 1952 r. jest co najmniej wątpliwy. Jeżeli chodzi o zadania kościołów i
        związków wyznaniowych, o których mowa w ust. 3 — o czym mówi poseł J.
        Jaskiernia — to my wiemy, jakie one są. Będą one — czy są — szczegółowo
        opisane w ustawach określających stosunek państwa do Kościoła
        katolickiego i do innych kościołów i związków wyznaniowych. Zbędne jest
        więc precyzowanie zadań Kościoła katolickiego i innych kościołów.
        Przepis ten jest bardzo przejrzysty i powinien być przy jety.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        W związku z tym, o czym mówił poseł J. Jaskiernia — którego w tej chwili
        nie ma w sali — chcę powiedzieć, że wnioskiem, który zgłosiłem, jest
        wniosek w wersji pierwotnej. Proszę więc trzymać się tego wniosku I
        niczego innego mi nie przypisywać. Podczas wczorajszych posiedzeń
        podkomisji rzeczywiście miało miejsce poszukiwanie konsensu, lecz
        jednocześnie podkreślaliśmy, że konsens musi obejmować całość
        dyskutowanego artykułu, a nie tylko poszczególne sformułowania. Nie
        można więc twierdzić, że konsens został osiągnięty w jednym ustępie, a w
        innym ustępie konieczne będą zmiany. Tę kwestię chcę również podkreślić.
        Uważam, że kierunek poszukiwań, który wyraził poseł Z. Siemiątkowski,
        jest chyba dobry i właściwy. W związku z tym należałoby chyba dać sobie
        trochę czasu, aby dowiedzieć się, czy ten kierunek utrzyma się, również
        po stronie SLD, gdyż wczoraj i dzisiaj widać różne stanowiska. Nie
        wiadomo, jakie ono będzie za dwa tygodnie. Poseł J. Jaskiernia ciągle
        domaga się wyjaśnienia, jak określić zakres działalności kościoła. W
        związku z tym chcę podkreślić, że możemy oczywiście wysłuchać prawników,
        ale wówczas musielibyśmy również wysłuchać kanonistów, którzy kwestię tę
        ujęliby od „wewnątrz”. Możemy oczywiście wysłuchać ekspertów, ale ja
        chciałbym dowiedzieć się, czy dzisiaj będziemy coś przegłosowywać, czy
        też jest to luźna rozmowa, w której wysłuchamy również ekspertów, którzy
        będą mogli powiedzieć, co sądzą na temat zakresu działalności kościoła.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Nie są to luźne rozmowy, lecz pracujemy nad takim sformułowaniem
        przepisu, który byłby do zaakceptowania przez zdecydowaną większość.
        Wymaga to jednak wyjaśnień.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Chcę odnieść się do dwóch kwestii. Pierwsza z nich to celowość —
        trafność — użycia wyrazu „Państwo” w ust. 3, Kwestia druga to rozumienie
        pojęć: „autonomia i niezależność”. O tej drugiej kwestii będzie mówił
        prof. W. Osiatyński. Chcę jednak przyznać rację posłowi T.
        Mazowieckiemu, iż o znaczenie formuły autonomii t niezależności
        kościołów należy przede wszystkim zapytać przedstawiciela Kościoła
        katolickiego dlatego, że formuła ta pochodzi z dokumentów Kościoła
        katolickiego. Tylko projektodawcy tej formuły mogą objaśnić właściwy
        sens tych terminów. Są to terminy w znaczeniu leksykalnym, lecz również
        używane w doktrynie i nauce prawa. Myślę jednak, że nie znaczenia
        naukowe i znane teorii prawa są najważniejsze. Najważniejsze jest
        rozumienie tych terminów w Świetle dokumentów kościoła i intencji
        projektodawców. Jeżeli chodzi o formułę dotyczącą oddzielenia od
        państwa, to pojawia się pytanie, jakie rozumienie państwa wchodzi w
        rachubę. Kwestia ta była podnoszona podczas wczorajszego posiedzenia
        podkomisji podstaw ustroju politycznego i społeczno-gospodarczego, gdzie
        miała miejsce bardzo ciekawa dyskusja o charakterze merytorycznym, choć
        zakończyła się niedobrze. W formule, o której mówimy, państwo nie jest
        na pewno równoznaczne z tym, co nazywamy Rzecząpospolitą Polską. Wydaje
        się więc, że pierwsza propozycja posła L. Moczulskiego jest
        nieuzasadniona. Chodzi o to pojęcie Rzeczypospolitej, które obejmuje
        kościoły I związki wyznaniowe, jeżeli stoimy na stanowisku koncepcji
        państwa obywatelskiego. Nie można wydzielić kościołów i związków
        wyznaniowych — podobnie jak i innych wspólnot społecznych — z
        Rzeczypospolitej jako państwa obywatelskiego. Obrady w dniu 23.02.1995
        r. (21) Uważam, że państwo w tym znaczeniu oznacza to, co jest bliskie
        drugiej propozycji, a więc oznacza władzę publiczną, czy też organy
        państwowe. Określeniami tymi nie zastępowałbym pojęcia państwa. Proszę
        zwrócić uwagę, że na gruncie tego projektu pojęciem państwa posługujemy
        się w różnym znaczeniu. Ostatecznie wykładni tych pojęć należy
        pozostawić ich własne rozumienie. Proszę zwrócić uwagę, że na przykład w
        art. 24 jest mowa o: „jurysdykcji Państwa”. Mowa jest także o budżecie
        państwa, o Skarbie Państwa jako instytucji określonej w art. 45.
        Również w innych przepisach jest mowa o państwie. Tak więc — moim
        zdaniem — nie ma potrzeby w omawianym przypadku zastępować pojęcia pań-
        stwa innym terminem, lecz należy przypisać mu właściwe znaczenie. Jakie
        ma to być znaczenie, wyjaśni dokładnie doktryna prawa i judykatura na
        przykład Trybunału Konstytucyjnego. Ponadto omawiana formuła jest
        zgrabna w tym sensie, że zawsze mówi się o rozdziale państwa od
        kościoła, czy o oddzieleniu państwa od kościoła. Jest to pewien skrót,
        ale za to bardzo komunikatywny. Nie oznacza to, że przeceniam tę
        formułę. Tak więc pozostawiłbym pojęcie „państwo” w omawianej formule.
        Właściwe znaczenie zostanie temu pojęciu przypisane w kontekście sensu
        całych przepisów konstytucyjnych.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Bardzo chętnie zgodziłbym się z dystynkcją prof. K. Działochy, który
        rozróżnił Rzeczpospolitą i państwo, lecz pod jednym warunkiem.
        Dystynkcja ta powinna znaleźć wyraz w konstytucji. Może ona oczywiście
        być sprzeczna z definicjami encyklopedycznymi. Państwo jest bowiem w
        encyklopediach z reguły osobnym podmiotem, a nie władzą państwową. Chcę
        jednak zwrócić uwagę, że w art. 1 i art. 3 stawia się znak równania
        między państwem a Rzecząpospolitą. Art. 3 stanowi, że: „Rzeczpospolita
        Polska jest Państwem jednolitym i niepodzielnym”. Z tego przepisu nie
        można wyprowadzić wniosku, że państwo to organa władzy państwowej.
        Oznaczałoby to bowiem, że organa państwowe są jednolite i niepodzielne,
        a nie jest tak, gdyż przyjęliśmy zasadę podziału władz. Tak więc jeżeli
        w jednym artykule na początku konstytucji przyjmujemy, że państwo to
        jest Rzeczpospolita, to ieżeli w innym artykule chcemy posłużyć się
        inny.r. rozumieniem pojęcia państwa, powinniśmy to chociaż zdefiniować
        stwierdzając, że w określonym artykule pod pojęciem państwa rozumie się
        na przykład organa władz państwowych. Obawiam się, że spór o nazewnictwo
        jakby ukrywa intencje lub też jest powodem do nieporozumienia, ponieważ
        niektórzy z nas obawiają się, że w sporze tym może chodzić o to, aby
        wyłączyć kościoły I związki wyznaniowe z naszego wspólnego państwa. Inni
        obawiają się, że sprzeciw wobec tego jest mitycznym zagrożeniem, że
        kościół jako instytucja uzurpowałby sobie prawo do uczestniczenia we
        władz państwowej. Stąd też mój kolejny apel, abyśmy posługiwali się
        terminami wystarczająco ostrymi, co pozwoli uniknąć nieporozumień.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        To, co powiem, jest streszczeniem mojego wczorajszego wystąpienia
        podczas posiedzenia podkomisji podstaw ustroju politycznego i
        społeczno-gospodarczego. Rozpocznę od uwagi na temat, którym zajmuję się
        od kilku lat. Jest to kwestia procesu tworzenia konstytucji i
        dochodzenia do konsensu. Uważam, że jesteśmy w środku ogromnego procesu
        osiągnięcia kompromisu. Jestem dobrej myśli, gdyż jest to naturalny
        proces ucierania się poglądów. Podczas wczorajszego posiedzenia
        podkomisji prosiłem, aby na temat pojęcia „swoich zadań” oraz na temat
        rozumienia autonomii i niezależności wypowiedzieli się przedstawiciele
        kościołów. Jest bowiem kwestią ważną, jak oni rozumieją te pojęcia.
        Jeżeli chodzi o pojęcie autonomii, to oznacza ono trzy kwestie. Po
        pierwsze, niezależność mniejszej części w ramach większej całości. Po
        drugie, wolność od ingerencji tej większej całości w sferę autonomii
        mniejszej części. Po trzecie, prawo do samoorganizacji i samorządności
        tej mniejszej części. Naturalnie, że musi się to odbywać w ramach
        porządku konstytucyjnego i prawnego całości, a nie tylko tej mniejszej
        części. Jednostka autonomiczna, na przykład szkoła, nie może przyjąć, że
        możliwe jest bicie dzieci, jeżeli jest to zabronione przez prawo. Tego
        typu autonomia mogłaby należeć się kościołom, lecz trudno mówić o
        wzajemnej autonomii, gdyż kościoły nie są większą całością, aby nadawać
        autonomię państwu. Pojęcie wzajemnej autonomii jest dla mnie
        niezrozumiałe. Wnioskodawców tej formuły prosiłbym więc o jej
        wyjaśnienie. Przepis o autonomii nie może mieć odniesienia ustawowego ze
        względu na to, że przepis konstytucyjny jest właśnie po to, aby chronić
        przed większością parlamentarną i ustawową. Jest to zasadniczej wagi
        określenie konstytucyjne wolności pewnej sfery życia — czy pewnej
        organizacji — która nie może być poddana czasowej, zmiennej większości
        parlamentarnej, gdyż inaczej przepis konstytucyjny nie ma sensu. Jeżeli
        chodzi o oddzielenie — rozdział — kościoła od państwa, to jest to
        pojęcie historyczne. Ma więc różne znaczenie historyczne i różne
        znaczenie we współczesnym Świecie. Najogólniej rzecz ujmując można
        wyróżnić trzy rodzaje rozdziałów kościoła od państwa. Rozdział neutralny
        i stanowczy to typ amerykański, w którym można wyróżnić osobne sfery
        Życia, nie mające w gruncie rzeczy nawet prawa do współdziałania.
        Równocześnie nie należy jednak zapominać o tym, że jest to państwo
        federalne. W różnych stanach konstytucje stanowe nie zawsze przyjmują tę
        zasadę. Ponadto bardzo ważne jest orzecznictwo stanowego Sądu
        Najwyższego. Drugi rodzaj to wrogi rozdział państwa od kościoła,
        występujący na gruncie konstytucjonalizmu francuskiego. W praktyce
        został przyjęty jako wrogi w konstytucjonalizmie komunistycznym, mimo
        bardzo ogólnej formuły. Model trzeci to przyjazne oddzielenie państwa od
        kościoła. Przykładem jest RFN, w której państwo na przykład zbiera
        podatki na kościoły. Państwo uważa bowiem, że kościoły są tak ważnym
        elementem społeczeństwa obywatelskiego, że muszą mieć wsparcie państwa w
        swojej działalności. Nawet polski kościół i Klub Inteligencji
        Katolickiej są wspomagane finansowo. Wszystkie trzy modele są
        koncepcjami rozdziału kościoła od państwa. Jest to więc formuła bardzo
        pojemna i z tego powodu jej użycie w konstytucji może być niebezpieczne.
        Należałoby więc w tekście konstytucji stwierdzić, jakiego typu rozdział
        ma być realizowany.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Chcę się odnieść do propozycji, aby pojęcie „państwa” zastąpić
        pojęciem „organy państwowe” lub pojęciem „władza publiczna”. Jeżeli
        przyjąć koncepcję oddzielenia od organów państwowych, to powstaje pewna
        niesymetria. Z jednej strony mamy bowiem kościoły i związki wyznaniowe
        traktowane jako pewne zbiorowości — wspólnoty, a z drugiej strony w grę
        wchodzą organy państwowe. Oznaczałoby to na przykład, że Kościół
        katolicki jest oddzielony od prezydenta, a Kościół luterański jest
        oddzielony od Sejmu. Byłoby to dość dziwaczne. Może więc należy pójść w
        kierunku stwierdzenia, że organy lub władze kościelne są oddzielone od
        organów państwowych. Jest to jednak zupełny absurd. Oznaczałoby to, że
        przeciwstawiamy się cezaropapizmowi, którego w Polsce nigdy nie było.
        Jeżeli więc pojęcie „„państwo” zostałoby uznane za rażące, to proponuję
        użyć formuły „władze publiczne”. Określenie to nie odnosi się tylko do
        instytucji władztwa publicznego, lecz również do ich kompetencji,
        funkcji i zadań. Pojęcie „władze publiczne” jest bogatsze w treść od
        pojęcia „organ” czy „organ władzy publicznej”. Pojęcie to jest niekiedy
        stosowane dla wyodrębnienia pewnej instytucji realizującej władztwo
        publiczne.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Ta bardzo interesująca dyskusja ukazuje ewolucję w traktowaniu problemu.
        Nawet oddzielenie w wersji łagodnej było związane bardziej z
        XIX-wiecznym postrzeganiem kościoła jako instytucji. W sytuacji, w
        której kościoły są w coraz większym stopniu postrzegane jako wspólnoty —
        co jest zgodne z ewolucją zachodzącą w kościołach — upieranie się przy
        obciążonym historycznie pojęciu oddzielenia wydaje się zbędne. Trudno mi
        wyobrazić sobie coś, co byłoby autonomiczne, a równocześnie nie byłoby
        oddzielone od władz publicznych. Powoli dochodzimy bowiem do wniosku, że
        oddzielenie od państwa to pewien anachronizm i sformułowanie niezbyt
        logiczne, które ma korzenie w XIX-wiecznym podejściu do problemu. Jeżeli
        więc lepsze byłoby oddzielenie od władz publicznych, to naprawdę jest
        tak, że jeżeli coś jest autonomiczne, to tym bardziej jest oddzielone.
        Jest to formuła soborowa, która nie pociąga za sobą wszystkich ran i
        ciężkich doświadczeń, które były naszym udziałem przez tyle lat. W
        pewnym sensie oddzielenie zawiera się w autonomii. Może więc należy
        zaakceptować formułę ogólniejszą, ponieważ autonomia i niezależność
        nie zawierają się w oddzieleniu, a pewna forma oddzielenia zawiera się w
        autonomii i niezależności. W ten sposób skonstruujemy pojęcie
        trójczłonowe, które nie będzie w pełni logiczne. Jeżeli na kwestię tę
        spojrzymy bez uprzedzeń ideologicznych i nadmiernych lęków, to wydaje
        się, że taka formuła byłaby do zaakceptowania.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Wypowiedź poseł I. Lipowicz była niezmiernie interesująca. Proszę tylko
        o wyjaśnienie, w czym tkwi mój błąd, albowiem uczelnie są autonomiczne,
        a nie są oddzielone od państwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Oczywiście, że są oddzielone, gdyż są częścią systemu
        zdecentralizowanego, a ingerencja następuje w formach ustawowych.
        Ponadto istnieje nadzór nad uczelniami, który będzie również w
        przypadku, o którym mówimy. W tym sensie mówi się o wolności
        akademickiej i autonomii uczelni. Gdybyśmy w tym sensie używali pojęć:
        „autonomiczny i niezależny”, to w pewnym sensie mogłoby to istnieć.
        Myślę, że odpowiedziałam na pytanie poseł K. Łybackiej. Ponadto pytałam
        poseł K. Łybacką, czy byłaby skłonna zrezygnować ze swojej propozycji,
        skoro była wczoraj osobą, która zerwała kompromis. Może więc w dniu
        dzisiejszym należałoby uczynić krok w drugim kierunku i odstąpić od
        pojęcia „oddzielone”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Chcę zapytać poseł I. Lipowicz, czy dostrzega istotną różnicę
        merytoryczną między pojęciem „autonomiczne” a pojęciem „niezależne”.
        Pytam dlatego, że po części podzielam pogląd poseł I. Lipowicz, że
        autonomia oznacza — zakłada — oddzielenie. Chodzi więc o pojęcie
        niezależności.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Niezależność jest w tej formule, która dotyczy wykonywania misji
        poszczególnych kościołów.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem więc, że niezależność dotyczy wykonywania zadań kościołów.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Niezależność oznacza przede wszystkim niezależność organizacyjną. Obrady
        w dniu 23.02.1995 r. (21 Przedstawiciel pełnomocnika obywatelskiego
        projektu konstytucji, Michał Drozdek: Senator J. Madej zakwestionował
        odwoływanie się do konstytucji stalinowskiej jako argument historyczny w
        dzisiejszej dyskusji. Uważam, że sposób myślenia w tamtej konstytucji i
        tamtym ustroju jest w dalszym ciągu obecny i przed nim jest niepokój,
        Wyrazem tego sposobu myślenia jest na przykład wariant IV projektu
        podkomisji zgłoszony przez Parlamentarną Grupę Kobiet, a więc bardzo
        reprezentatywną i związaną z rządzącą koalicją grupą nacisku w
        parlamencie. Wariant ten przewiduje bardzo radykalne rozwiązania
        konstytucyjne. Są one dalej idące niż rozwiązania stalinowskie. Należy
        powiedzieć szczerze, że jest taki odłam opinii publicznej, który chętnie
        wyrugowałby wpływ religii na życie publiczne. Tego się obawiamy. Dlatego
        też nie możemy przyjąć tego rodzaju przepisu. Odłam opinii publicznej,
        którą ja reprezentuję poszedłby w kierunku, o którym mówił prof. W.
        Osiatyński wyróżniając m.in. przyjazny wariant traktowania kościołów.
        Oznacza on, że kościoły i religia to zjawiska pozytywne, a nie
        negatywne. Nie znaczy to jednak, że mają podporządkowywać państwo. Stąd
        też mówiąc na przykład o autonomii i niezależności, należy zauważyć, że
        autonomia słusznie dotyczy wspólnot mniejszych, ale wzajemna
        niezależność państwa i kościoła rozwiązuje problem. Oddzielenie mogłoby
        sugerować to, że religie nie mają mieć prawa wpływu na kształt państwa
        nawet w tym sensie, że mają swoją naukę społeczną, którą chcą
        realizować. Jest to bardzo niebezpieczne i myślę, że upieranie się przy
        zapisie o oddzieleniu kościoła od państwa ma prowadzić do takich
        skutków, jakie są proponowane w wariancie IV. Wariant ten przewiduje
        m.in., że w instytucjach państwowych i innych niedozwolone jest
        powoływanie instytucji i stanowisk mających na celu religijne lub
        antyreligijne oddziaływanie na obywateli i pracowników. Czasami jednak
        jest tak, że w jednostkach państwowych takich jak uniwersytet istnieją
        wydziały teologiczne. Nie chodzi jednak o to, aby państwo miało jakąś
        religię i w związku z tym oddzielenie jest zrozumiałe, jeżeli państwo
        traktuje się jako strukturę władzy. Ponieważ wywołuje to jednak
        niepokoje, iż będzie się próbować rugować religię z możliwości wpływania
        na życie społeczne oraz z możliwości pełnienia swojej funkcji proroczej,
        a więc nauczania w sprawach moralnych i społecznych, proponowany zapis
        jest bardzo trudny do przyjęcia. Poseł J. Jaskiernia mówiąc o
        przykładzie działalności kościoła, która miałaby wykraczać poza
        działalność religijną i organizacyjną, wskazał na działalność
        gospodarczą obawiając się, że formuła o autonomii i niezależności w
        realizacji wszystkich celów kościoła spowoduje możliwość interpretacji,
        iż kościoły nie podlegają pod przypisy regulujące działalność
        gospodarczą. Moim zdaniem jest to rozumowanie nieuprawnione, gdyż
        autonomia i niezależność w żaden sposób nie zwalniają od przestrzegania
        prawa. Tego rodzaju obawy polegają na nieporozumieniu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Wit Majewski (SLD):</strong>
        Na efekty naszych prac chciałbym spojrzeć pragmatycznie. Wczoraj, kiedy
        poseł R. Bugaj referował wyniki prac podkomisji podstaw ustroju
        politycznego i społeczno-gospodarczego byliśmy — jakby — bliżej
        rozstrzygnięć niż w dniu dzisiejszym po dotychczasowej dyskusji. W
        związku z tym nawiązując do formuły o poszukiwaniu wspólnego stanowiska
        proponuję powierzenie tego zadania podkomisji podstaw ustroju
        politycznego i społeczno-gospodarczego. Odnoszę wrażenie, że podkomisji
        tej zabrakło trochę czasu, aby przygotować jednolite stanowisko. Uważam,
        że jako Komisja nagłaśniając dyskusję — jakby — oddalamy się od
        osiągnięcia kompromisu. Wydaje się więc, że po wysłuchaniu stanowisk
        sprawa powinna ponownie powrócić do podkomisji, która powinna wypracować
        jedną propozycję.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Doceniam pragmatyzm propozycji posła W. Majewskiego. Uważam, że jednak
        nie powinniśmy cofać się, jeżeli chodzi o tryb prac. Ponadto podkomisja
        podstaw ustroju politycznego i społeczno-gospodarczego zrobiła wiele,
        gdyż przedłożyła wstępną wersję kompromisową. Teraz kolej na Komisję, a
        następnie na Zgromadzenie Narodowe. Uważam ponadto, że w tej chwili
        dyskusja wydaje się celowa, gdyż jest szansa na zbliżenie stanowisk i
        usuwanie wątpliwości oraz skojarzeń, które są przeszkodą w osiągnięciu
        kompromisu. Przypominam, że został złożony przez posła Z.
        Siemiątkowskiego wniosek przewidujący formułę o oddzieleniu władz
        publicznych. Propozycja ta została — choć bez entuzjazmu — przyjęta
        przez ekspertów, którzy są przeciwni wpisywaniu organów państwa. Chcę
        dodać, że zgadzam się z tą opinią, Zwracam również uwagę na nową formułę
        ust. 3, która obejmuje również dotychczasową treść ust. 5.
        Przedstawiciel Sekretariatu Konferencji Episkopatu Polski, ks. prof.
        Józef Krukowski: Dyskusja toczy się na różnych płaszczyznach, jeżeli
        chodzi o relacje państwo-kościół. Aspekt pierwszy to tekst konstytucji.
        Jeżeli chodzi o wpisanie formuły o oddzieleniu kościoła i państwa, to —
        jak to już zostało powiedziane — jest to formuła bardzo wieloznaczna i
        dlatego niebezpieczna. Wyrażam więc ponownie sprzeciw wobec tej formuły,
        choć oczywiście Komisja może przyjąć tę formułę, gdyż jest organem
        suwerennym. Chcę również zwrócić uwagę na aspekt porównawczy,
        podniesiony już przez posła L. Pastusiaka i prof. W. Osiatyńskiego.
        Niewątpliwie istnieje amerykańska formuła oddzielenia kościoła od
        państwa. Należy być jednak dokładnym i powiedzieć, że w tekście
        konstytucji amerykańskiej nie ma formuły o oddzieleniu kościoła od
        państwa, Formuły tej nie ma w tekście pierwotnym ani w I poprawce. Jest
        natomiast interpretacja sądowa I poprawki do konstytucji, która jest
        zmienna i uzależniona od aktualnego stanowiska Sądu Najwyższego.
        Przypominam, że w I poprawce stwierdza się, że Kongres nie może
        ustanawiać religii i nie może ograniczać wolności praktyk religijnych.
        Formuła taka mogłaby być przyjęta do Konstytucji III Rzeczypospolitej.
        Formuła ta powstała jednak w innym kontekście kulturowym i w innej epoce
        historycznej. Tak się składa, że wielokrotnie byłem w Stanach
        Zjednoczonych i studio wałem prawo amerykańskie nie tylko w ujęciu kon
        stytucyjnym, ale również w praktyce. Uważam więc, że wzorowanie się na
        Stanach Zjednoczonych jest bardzo nietrafne. Koncepcja separacji wrogiej
        powstała w Europie — najpierw we Francji, a później w Związku
        Radzieckim. Próby były podejmowane w Polsce w minionym okresie. Stąd też
        mamy awersję do pojęcia „oddzielenie”, tym bardziej że w konstytucjach
        państw europejskich nie ma mowy o oddzieleniu kościoła od państwa, czy
        o separacji, poza konstytucjami b. ZSRR ib. państw socjalistycznych,
        zwanych w języku politycznym państwami totalitaryzmu komunistycznego.
        Stąd też kurczowe trzymanie się tego pojęcia jest obciążone politycznie.
        Tym, którzy trzymają się tego pojęcia proponowałbym, aby zrezygnowali z
        tego po to, aby nie stwarzać powodu do stawiania im tego zarzutu, a przy
        utrzymaniu formuły o oddzieleniu będzie podstawa do stawiania tego
        zarzutu. Formuła o autonomii i niezależności ma treść pozytywną. Moje
        zdanie jako prawnika jest takie, że jest to pozytywna treść oddzielenia,
        tylko że doprecyzowana. Jednakże ze względu na mandat, jaki mam ze
        strony Episkopatu, nie mogę zgodzić się na użycie wyrazu „oddzielenie” z
        powodu racji, które wskazałem. Chodzi nie tylko o posłuszeństwo, ale
        również racje merytoryczne. Stawiane były również pytania dotyczące
        zadań kościoła i państwa. Rzeczywiście zadania państwa są określone w
        konstytucji i w innych aktach normatywnych. Zadania każdego z kościołów
        określane są w prawie wewnętrznym każdego kościoła i związku
        wyznaniowego. Gdyby konstytucja państwa określała zadania kościołów,
        byłby to czystej rasy cezaropapizm. Ze względu na konieczność
        współdziałania między kościołem a państwem w celu osiągnięcia wspólnego
        dobra, w ustawodawstwie zwykłym zadania te są doprecyzowane. Nie znaczy
        to jednak, że to ustawodawstwo dyktuje zadania, jakie ma realizować
        kościół. Zadania kościoła są natury religijnej i obejmują nauczanie,
        sprawowanie kultu, działalność: charytatywną, wychowawczą i kulturalną.
        Katalog ten można jeszcze uszczególnić. Nie wydaje się jednak
        sensowne, aby do konstytucji wpisywać zadania kościoła. Równocześnie
        jednak ujęcie formuły o zadaniach religijnych i organizacyjnych wydaje
        się zbyt ubogie, aby mogło oznaczać wyczerpanie zadań kościoła, jak to
        proponował poseł W. Cimoszewicz. Ponadto wydaje mi się, że choć sprawa
        jest ważna, to chyba jednak nie dojrzała do definitywnego
        rozstrzygnięcia na dzisiaj. Warto również przypomnieć, że nad I poprawką
        do konstytucji USA, dyskusja trwała kilkanaście miesięcy. U nas chyba
        również w ciągu kilku dni nie rozstrzygniemy tej sprawy. Przedstawiciel
        Polskiego Autokefalicznego Kościoła Prawosławnego, ks. biskup
        Jeremiasz: Chcę jeszcze raz zabrać głos na temat zadań kościoła,
        ponieważ kwestia była wczoraj i dzisiaj wielokrotnie podejmowana. Moją
        wypowiedź proszę potraktować jako komplementarną do tego, co powiedział
        ks. prof. J. Krukowski. Na pytanie o zadania kościoła można odpowiedzieć
        w ten sposób, że po pierwsze bez trudu można wyliczyć te zadania na
        zasadzie wyliczanki opartej na przykład na częściach dogmatów, na prawie
        kanonicznym, na obowiązujących ustawach. Można więc mówić o głoszeniu
        Ewangelii, o odprawianiu nabożeństw, o działaniach uświęcających, o
        budownictwie sakralnym, o działalności charytatywnej itd. Chciałbym
        zwrócić uwagę na pewien istniejący problem, który musi być uświadomiony
        przez nas wszystkich. Chodzi o to, że zadań kościołów nie można
        sprecyzować do końca. Każde wyliczenie w konstytucji będzie
        ograniczeniem i może doprowadzić do negatywnych skutków. Posłużę się
        kilkoma przykładami. W okresie Polskiej Rzeczypospolitej Ludowej nie
        było kwestią negatywną uczestnictwo parafii w budowie drogi, szkoły czy
        wodociągu. Było to działanie kościelne z motywacji religijnej, ale
        wspierające działania odpowiednich organów państwowych czy samorządowych
        lub inicjatywę społeczną. Sytuacji takich było dużo. Chcę teraz
        przytoczyć poważny przykład z odległej historii. Na początku V wieku św.
        Ambroży, biskup Mediolanu, zabronił wstępu do kościoła i uczestnictwa w
        liturgii eucharystycznej cesarzowi Teodozjuszowi motywując ten zakaz
        tym, że Teodozjusz krwawo — w stopniu nieuzasadnionym — stłumił
        powstanie obywateli w Tessalonikach. Decyzja ta to nie był akt tylko
        religijny, ale również akt polityczny. W ówczesnej sytuacji politycznej
        było to równoznaczne z potępieniem działalności typowo politycznej.
        Należy dodać, że Teodozjusz był na tyle mądry, że usłuchał św.
        Ambrożego. Z historii znamy wiele przykładów, że panujący postąpił
        inaczej. Za mniej więcej taki sam czyn Iwan Groźny kazał udusić św.
        Filipa, metropolitę moskiewskiego. Z, kolei z historii Polski znamy
        bardzo dużo przypadków, kiedy działalność nie typowo religijna, lecz
        polityczna była bardzo widoczna. Tak było zwłaszcza w XIX wieku w
        okresie zaborów. Jeżeli więc w konstytucji miałaby pojawić się formuła o
        działalności religijnej i organizacyjnej, to prowadziłoby to do wielu
        kłopotów, zwłaszcza że oddzielenie państwa od kościoła miało charakter
        negatywny i restrykcyjny. Myślę więc, że pewna otwartość jest wskazana i
        będzie dobrze odzwierciedlała aktualny stan świadomości. Wydaje się
        więc, że pewna otwartość Obrady w dniu 23.02.1995 r. (21 sformułowana w
        propozycji, która wczoraj zdawała się być bliska przyjęcia, byłaby
        wskazana. Chodzi mi o formułę: „Kościoły i związki wyznaniowe są
        oddzielone od Państwa oraz korzystają z autonomii i niezależności w
        wykonywaniu swoich zadań”. Myślę, że zadania w sposób naturalny —
        uwzględniając przypadki historycznie wyjątkowe — będą zgodne z wolą
        kościołów, a nie będą polegać na przykład na tworzeniu armii po to, aby
        dokonać przewrotu. Wprowadzenie do konstytucji, czy ustaw tego typu
        zakazów byłoby bezsensowne.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Chcę zwrócić się do ks. prof. J. Krukowskiego, ponieważ nie ustosunkował
        się on do bardzo istotnej propozycji, która padła ze strony posła Z.
        Siemiątkowskiego. Chodzi o formułę mówiącą o oddzieleniu od władz
        publicznych. Ks. prof. J. Krukowski odniósł się do kwestii oddzielenia
        od państwa. Jeżeli ks. prof. J. Krukowski mógłby skomentować tę
        propozycję jako kolejny krok w kierunku kompromisu, to będę bardzo
        zobowiązana. Ponieważ nie ma poseł I. Lipowicz, to pod jej nieobecność
        muszę powiedzieć, że ubolewam, iż poseł I. Lipowicz została wprowadzona
        w błąd przez osoby, które przekazały jej relację z posiedzenia
        podkomisji podstaw ustroju politycznego i społeczno-gospodarczego. Nie
        mogłam zerwać czegoś, czego nie było. Każdy, kto przypuszcza, że
        przejście od wariantu IV do brzmienia prawie uzgodnionego nie jest wolą
        wyrażającą daleko idący kompromis, prawdopodobnie nie rozumie pojęcia
        kompromisu. Przedstawiciel Sekretariatu Konferencji Episkopatu Polski,
        ks. prof. Józef Krukowski: Słusznie wyróżniono dwa pojęcia tej samej
        rzeczywistości, jaką jest zarówno państwo, jak i kościół. Można mówić o
        państwie jako strukturze politycznej ograniczając się do organów czy
        władz publicznych. O państwie można również mówić jako o wspólnocie
        obywatelskiej. W państwie demokratycznym chodzi nam właśnie o wspólnotę
        obywatelską, która jest pluralistyczna i do której należą również
        wspólnoty religijne. Gdy mówimy o kościele również można mówić o
        znaczeniu ograniczonym do organów — kościoły mają bowiem hierarchiczne
        organy — albo też do wspólnoty ludzi wierzących, dobrowolnie akceptują-
        cych doktryny i przyjęty sposób postępowania. Jeżeli w omawianym
        wariancie ust. 3 stanowi, że kościoły i związki wyznaniowe są oddzielone
        od państwa, to z brzmienia wynika, że chodziłoby o dwie wspólnoty, które
        są oddzielone. Jeżeli ci sami ludzie należą jednocześnie do jednej i
        drugiej wspólnoty, to oddzielenie nie byłoby możliwe, a jeżeli ktoś
        chciałby to przeprowadzić — jak usiłowano to czynić w przeszłości — to
        zakończyłoby się to tragicznie zarówno dla kościołów, jak i dla państwa.
        Może to być tak właśnie rozumiane i dlatego jest niebezpieczne. Druga
        zaproponowana wersja proponuje ograniczenie do kościołów, związków
        wyznaniowych i organów państwowych. Kojarzy się to jednak z inną od
        demokratycznej koncepcją państwa. Nie aprobowałbym zapisu, aby relacje
        między państwem a kościołami ograniczyć do organów państwowych.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Poseł K. Łybacka twierdzi z jednej strony, że byliśmy blisko konsensu, a
        z drugiej strony twierdzi, że nie mogła zerwać czegoś, czego nie było.
        Należy się zdecydować, czy w dniu wczorajszym było blisko do kompromisu,
        czy też nie. Czy poseł K. Łybacka nie zauważyła wczoraj wielkich
        wysiłków posła R. Bugaja zwracającego uwagę, aby jeszcze dyskutować,
        kiedy sama żądała głosowania nad wnioskiem przecinającym dyskusję? Czy
        nie można więc tej sytuacji określić jako zerwanie konsensu?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Odpowiedź na to pytanie pozostawmy historykom prac nad konstytucją. Nie
        wracajmy więc do tej kwestii, lecz szukajmy rozwiązań, które mogą
        zbudować szeroki konsens wokół art. 15.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Wzorcem dla zapisania w konstytucji stosunków państwo— —kościół może być
        model amerykański, francuski czy komunistyczny. Nikt spośród obecnych
        nie powołuje się na inne modele konstytucyjne. Modelem, który jak mi się
        wydaje byłby najlepszy jako przepis polskiej konstytucji, jest model
        konstytucji włoskiej. Konstytucja jest pisana dla narodu i musi
        odzwierciedlać tożsamość narodu. Tak uczynili Włosi i dlatego w swojej
        konstytucji w regulacji stosunków państwo-kościół przyjęli za
        prawdziwą tę rzeczywistość, że większość narodu włoskiego to
        chrześcijanie, czyli ludzie wierzący, a więc osoby należące do kościoła
        — kościołów, a zwłaszcza do jednego z kościołów. Przy tworzeniu polskiej
        konstytucji również trzeba uwzględnić tożsamość narodu polskiego, w
        zdecydowanej większości wierzącego i należącego do kościołów, a
        zwłaszcza do kościołów chrześcijańskich. Dlatego też wydaje mi się, że
        kiedy rozważamy model konstytucyjnych rozwiązań stosunków pań-
        stwo-kościół, nie powinniśmy abstrahować od innego modelu, modelu który
        proponuję od dawna. Jest to model konstytucji włoskiej. W modelu tym
        państwo i kościół są samodzielne, niezależne i autonomiczne. Jest to
        również, jak słusznie powiedział jeden z panów profesorów, propozycja
        zawarta w dokumentach Kościoła katolickiego, a zwłaszcza w Gaudium et
        spes, gdzie wyjaśnione jest pojęcie autonomii i pojęcie niezależności.
        Ponieważ znaczenia tych pojęć budzą pewne wątpliwości, chcę przedstawić
        interpretację wziętą i z konstytucjonalizmu włoskiego, a także z
        dokumentów Kościoła katolickiego. Autonomia to samodzielność at intra.
        Niezależność to samodzielność at extra. Porównując z sądami można
        powiedzieć, że sądy są niezawisłe i niezależne. Niezawisłość to co
        prawda wolność pojedynczego sędziego, a mówimy o autonomii jako
        samodzielności wewnętrznej kościoła, czy kościołów. W ramach tej
        samodzielności wewnętrznej kościołów, czyli autonomii kościoła nie
        byłoby możliwe, aby państwo w konstytucji ustalało zadania kościołów, co
        też niektórzy z obecnych chcieliby uczynić. We dług niektórych to
        konstytucja miałaby wyliczać zadania kościołów, a jest to autonomiczna
        sprawa kościołów. Niezależność to, jak mówiłam, niezależność at extra,
        czyli od organów państwowych. Niezależność oznacza, iż nie jest możliwe,
        aby państwo odwoływało proboszczów, tak jak czyniło to do niedawna. Tak
        więc wyjaśnienie pojęć: autonomia, samodzielność i niezależność nie jest
        aż tak bardzo trudne. Natomiast gdy patrzę na niektóre propozycje
        zawarte w poprawkach, to widzę, że niektórym z autorów poprawek zdarza
        się mieszać dwie kwestie. Pierwsza z nich to stosunki państwo-kościół i
        chęć oddzielenia państwa od kościoła, czyli wspólnoty, co nie jest
        możliwe jak już wskazywano, gdyż nie jest możliwe oddzielenie tego
        samego człowieka od dwóch wspólnot, w których jest równocześnie. Kwestia
        druga to tendencja, a może niezrozumienie, czy chęć oddzielenia
        człowieka od prawa do religii. W Stanach Zjednoczonych, gdzie jest
        wzorcowy dla niektórych członków Komisji rozdział państwa od kościoła,
        nie ma rozdziału państwa od religii. Warto o tym pamiętać choćby
        obserwując przebieg posiedzeń Kongresu albo inne przejawy funkcjonowania
        władz publicznych. Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:
        Rozdzielenie, czy rozdział kościoła od państwa mnie nie razi. Problemem
        tym zajmowałem się od dawna i zajmuję się nadal również w trakcie
        wykładów uniwersyteckich. Twierdzenie, że oddzielenie państwa od
        kościoła to wymysł stalinowski jest oczywiście przesadą. Chcę
        przypomnieć, że polscy arianie szukając gwarancji wolności dla
        mniejszości prześladowanych przez większość, proponowali oddzielenie
        kościoła od państwa. Mamy więc własne tradycje, do których możemy
        nawiązywać. Nie musimy szukać obcych wzorów. Chcę również odnieść się do
        kwestii okresu komunistycznego, czy stalinowskiego. Nigdy nie należałem
        do żadnej partii, ale muszę przyznać obiektywnie, że interpretacja
        zasady oddzielania kościoła od państwa zapisana w konstytucji z 1952 r.
        przyjęła konkretny wyraz w ustawie o gwarancjach wolności sumienia i
        wyznania. Odkąd zacząłem zajmować się prawem wyznaniowym, głosiłem
        zasadę neutralności światopoglądowej państwa. Częściowo moją zasługą
        jest to, że w ustawie o gwarancjach wolności sumienia i wyznania
        zapisano zasadę neutralności państwa socjalistycznego w sprawach
        religijnych. Zapisano również zasadę, że kościoły są niezależne od
        państwa przy wykonywaniu swych funkcji religijnych. Przy jęto również,
        że mają pełną swobodę wypełniania swych funkcji i zadań religijnych.
        Ustalenia te przyjęto co prawda w końcowym okresie epoki komunistycznej,
        ale jednak przyjęto. Oznaczało to zasadnicze przewartościowanie, lecz
        nikt z obecnych nie odwołuje się do tej kwestii, a rozwiązania te
        przybliżały Polskę do rozwiązań europejskich i Światowych, jeżeli chodzi
        o gwarancje wolności sumienia i wyznania. Jakie — generalnie rzecz
        ujmując — konsekwencje powoduje przyjęcie zasady rozdziału kościoła od
        państwa? Zasada ta może być wyrażona w różny sposób. Zasada ta oznacza,
        że nie istnieje kościół państwowy, państwo jest rozdzielone od kościoła
        i ma charakter Świecki, co zostało zapisane na przykład w konstytucji
        Francji. Konstytucja amerykańska stanowi z kolei, że Kongres nie może
        ustanowić żadnej religii czy kościoła jako panujących. Z państwem
        wyznaniowym zawsze łączyć się będzie bowiem fakt, że jedna religia miała
        charakter państwowy. Wprowadzenie rozdziału miało zapobiec temu stanowi
        rzeczy. Mówiąc o rozdziale kościoła i państwa mamy na myśli tylko i
        wyłącznie państwo jako zespół instytucji, ludzi, którzy występują w
        imieniu tego państwa. O kościele również mówimy w znaczeniu
        instytucjonalnym, a nie w znaczeniu wspólnoty wiernych. Nie należy
        bowiem mylić państwa w znaczeniu socjologicznym, a więc jako wspólnoty
        wszystkich obywateli i państwa w znaczeniu instytucjonalnym, a więc
        zespołu organów i instytucji tworzących państwo oraz zespołu osób, które
        występują w imieniu tego państwa. Uchwalając konstytucję chcemy
        nakreślić zadania ludziom występującym w imieniu państwa i stanowiącym
        organy kolegialne lub jednoosobowe. Chodzi o określenie sposobu
        postępowania tych osób. Zasadę oddzielenia kościoła od państwa — która
        razi tak wiele osób — można w konstytucji zapisać w różny sposób. Dla
        państwa podstawową konsekwencją zasady rozdziału jest Świecki charakter
        państwa. Nie boję się używać tej nazwy. Zawsze używałem jej w
        znaczeniu neutralności państwa, jego organów i instytucji, gdy chodzi o
        sprawę przekonań religijnych, światopoglądowych czy filozoficznych. Stąd
        też w wielu projektach panuje zgoda co do tego, aby zapisać ten fakt, że
        organy, instytucje państwowe i samorządowe zachowują neutralność w
        sprawach religii, przekonań Światopoglądu czy filozofii. Sądzę, że w tym
        zakresie jest jakiś konsens. Część osób nie godzi się na to, aby
        zapisać, że państwo jest Świeckie i neutralne. Moim zdaniem współczesne
        państwo świeckie to państwo neutralne. Tak to rozumie również doktryna
        Kościoła katolickiego. Papież Paweł VI stwierdził wyraźnie, że istnieje
        koncepcja państwa Świeckiego całkowicie możliwa do pogodzenia z
        zasadami doktryny katolickiej. Koncepcja ta jest akceptowana przez
        władze kościelne. Jest ona utożsamiana z neutralnością państwa i jego
        wszystkich organów i instytucji, jeżeli chodzi Obrady w dniu 23.02.1995
        r. (21 o sprawy przekonań religijnych. Kwestie te bardzo akcentuje
        konstytucja portugalska. Jest również druga konsekwencja zasady
        rozdziału kościoła od państwa dla kościołów i związków wyznaniowych.
        Stąd wynikają kontrowersje, jak zapisać tę kwestię. Kwestię tę można
        zapisać tak jak przyjęła to wczoraj podkomisja podstaw ustroju
        politycznego i społeczno-gospodarczego. Skoro jednak wywołuje to
        zastrzeżenia pewnej części obecnych, to można szukać innego określenia.
        My w swojej propozycji — w ust. 2 — zapisaliśmy, że kościoły i związki
        wyznaniowe korzystają z autonomii przy wykonywaniu swych funkcji
        religijnych i organizacyjnych. Jeżeli bowiem jest oddzielenie kościoła
        od państwa, to wystarczy stwierdzenie, że kościół ma autonomię przy
        wykonywaniu swoich zadań. Jeżeli natomiast nie użyjemy określenia
        „oddzielenie ”, to należy dodać, że autonomia i niezależność dotyczą
        tylko spraw religijnych i organizacyjnych. Nie chodzi oczywiście o
        wyliczanie, co należy do funkcji religijnych, lecz chodzi o to, że w
        zakresie funkcji religijnych — a więc funkcji podstawowych — kościoły i
        związki wyznaniowe korzystają z autonomii i niezależności, a ustawy nie
        mogą wnikać w te sprawy. Natomiast gdy powstaną wątpliwości, co jest
        funkcją religijną, to od tego jest Trybunał Konstytucyjny. Tak więc
        jakiś wyrażony przepis musi być przyjęty. Autonomia i niezależność
        powinny dotyczyć spraw, do których kościół jest powołany. We wczorajszej
        dyskusji telewizyjnej posłów: J. Jaskierni i T. Mazowieckiego pojawiła
        się kwestia dopisania działalności charytatywnej. Kwestię tę można
        oczywiście dopisać, lecz wówczas trzeba zastanowić się, że jeżeli
        kościołom przyznaje się autonomię i niezależność w sprawach działalności
        charytatywnej, to należy ją przyznać wszystkim podmiotom, które prowadzą
        tego typu działalność. Wymaga tego zasada równouprawnienia. Wszyscy,
        którzy prowadzą działalność charytatywną, muszą mieć te same
        uprawnienia. Nie oznacza to jednak, że kościoły nie mogą korzystać z
        przepisów prawa cywilnego, administracyjnego i innych przepisów.
        Rozumiem, że istnieje również pewna obawa przed kwestią, którą podniósł
        przedstawiciel pełnomocnika obywatelskiego projektu konstytucji,
        wskazując, że kościół szanuje i uznaje istniejący porządek prawny. Tak
        powinno być, lecz chcę jednak przypomnieć, że w 1991 r. Sejm
        Rzeczypospolitej Polskiej usunął z art. 1 ustawy o stosunku państwa do
        Kościoła katolickiego w Rzeczypospolitej Polskiej sformułowania, że
        kościół działa w ramach ustrojowych Rzeczypospolitej Polskiej. Jaki był
        sens tej zmiany, skoro wszyscy twierdzą, że kościół działa w tych
        ramach?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Prof. M. Pietrzak chyba się myli, gdyż formuła mówiła o ramach
        ustrojowych Polskiej Rzeczypospolitej Ludowej. Przedstawiciel Prezydenta
        RP, prof. Michał Pietrzak: Wówczas była już Rzeczpospolita Polska. Na
        zwa państwa została już zmieniona. Zmianę tę uważam za błąd, gdyż może
        ona sugerować, że Kościół katolicki jest wyłączony, zwłaszcza że inne
        kościoły i związki wyznaniowe w swoich ustawach mają nadal tę formułę.
        Pojawiają się więc pewne zastrzeżenia. Uważam jednak, że można zmierzać
        do tego, aby zastanowić się w jaki sposób zastąpić formułę: „oddzielenie
        kościoła od państwa”. Chodzi o ujęcie, które zadowoli zdecydowaną
        większość. Sądzę, że chyba można znaleźć takie rozwiązanie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Chcę zapytać prof. M. Pietrzaka, czy jego wypowiedź jest oficjalnym
        stanowiskiem urzędu Prezydenta? Przedstawiciel Prezydenta RP, prof.
        Michał Pietrzak: Jest to stanowisko tyle moje, co i oficjalne. Skoro
        zostałem powołany na stanowisko przedstawiciela, to reprezentuję takie
        stanowisko jakie reprezentowałem. Zawsze byłem zwolennikiem pełnej
        wolności dla Kościoła katolickiego. Kiedyś za moje poglądy prof. A.
        Łopatka usunął mnie z Komisji Wspólnej stwierdzając, że przeszedłem na
        stronę Episkopatu, a ja głosiłem zasadę neutralności Światopoglądowej
        państwa. Dzisiaj, kiedy głoszę tę samą zasadę, to według senator A.
        Grześkowiak jestem wrogiem kościoła. Dobrze, że senator A. Grześkowiak
        nie domaga się, aby ekspertów będących zwolennikami określonej
        koncepcji, wyrzucano z kraju tak jak arian.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Wypowiedź tę uważam za niedopuszczalną personalną napaść na mnie. Nie
        mówiłam nic o tym, o czym prof. M. Pietrzak mówił przed chwilą, a więc
        że uważam prof. M. Pietrzaka za wroga. Uważam, że obowiązują nas zasady
        kultury i proszę o ich zachowywanie. Zadałam tylko jedno krótkie
        pytanie, które chyba wszyscy słyszeli: czy wypowiedź prof. M. Pietrzaka
        jest oficjalnym stanowiskiem urzędu Prezydenta. Otrzymałam odpowiedź, że
        jest. Dziękuję bardzo, o to mi chodziło. Przedstawiciel Prezydenta RP,
        prof. Michał Pietrzak: Stwierdzenie senator A. Grześkowiak, że spośród
        pięciu ekspertyz, które zostały przygotowane na temat stosunków
        państwo-kościół, cztery ekspertyzy były wrogie kościołowi, a tylko jedna
        była pozytywna, zostało wypowiedziane podczas posiedzenia Komisji
        Konstytucyjnej w dniu 8 grudnia 1994 r. Bardzo nas to zabolało. Muszę
        więc sprostować tę kwestię. Jeżeli natomiast chodzi o oficjalne
        stanowisko, to jest ono zawarte jako pkt 11 w zestawieniu zgłoszonych
        propozycji brzmienia art. 15.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Myślę, że rysują się bardzo wyraźne możliwości kompromisu. Chcę
        podzielić się uwagami na temat rysującego się kompromisu. Wydaje się, że
        z jednej strony widać obawę przedstawiciela Kościoła katolickiego i nie
        tylko tego kościoła, przed oddzieleniem. Z, drugiej strony jest to obawa
        wyrażona przez część członków Komisji i dotycząca drugiej strony
        oddzielenia, ponieważ w ramach reszty tych zapisów kościół uzyskuje
        gwarancję autonomii. Z drugiej strony jest obawa, czy ko Ściół nie
        będzie próbował wkraczać w dziedzinę działalności państwowej. Jak już
        mówiłem wzajemna autonomia jest pojęciem niewystarczającym. Być może
        możliwy jest kompromis polegający na rezygnacji z formuły, że kościoły i
        związki wyznaniowe są oddzielone od państwa. To budzące wątpliwości
        sformułowanie mogłoby zostać usunięte z tekstu. W zamian za to zostałyby
        doprecyzowane funkcje kościoła. Mogłaby to być formuła, o której mówił
        prof. M. Pietrzak, a więc że kościoły i związki wyznaniowe korzystają z
        autonomii przy wykonywaniu swych funkcji religijnych i organizacyjnych.
        Wiem, że jeszcze inną propozycję przygotował prof. K. Działocha, który
        za chwilę ją przedstawi. Następnie w tym samym artykule należałoby
        dodać zdanie, które będzie istotą gwarancji, że kościół nie będzie
        próbował wpłynąć na działalność państwa. Zdanie to mogłoby brzmieć:
        „Kościoły i związki wyznaniowe nie biorą udziału w sprawowaniu władzy
        publicznej”. Kolejne zdanie stwierdzałoby, że w celu realizacji praw
        człowieka i potrzeb obywateli państwo współdziała z kościołami i
        związkami wyznaniowymi. Zdanie to oznaczałoby, że kościoły mają prawo
        podejmować inne działania niż działania Ściśle religijne i
        organizacyjne. Chodzi o zadania dotyczące potrzeb człowieka. W
        działaniach tego rodzaju kościoły nie mają jednak takiej autonomii jak w
        zakresie zadań religijnych. Państwo współpracuje z kościołami w tym
        zakresie, a więc upada bariera oddzielenia. Kościoły miałyby więc
        pozycję równą innym organizacjom o charakterze charytatywnym. Myślę
        więc, że rysuje się kompromis, który zaspokaja potrzeby obu stron,
        usuwając jednocześnie problem oddzielenia. Rysująca się koncepcja byłaby
        koncepcją pozytywnego rozdziału, przynajmniej w sensie teoretycznym.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Poszukując określenia dla właściwej działalności kościołów i związków
        wyznaniowych, w zakresie której to działalności kościoły i związki
        wyznaniowe miałyby być autonomiczne i niezależne, mam propozycję
        odwołującą się do dalszych przepisów konstytucji wyrażających zasadę
        wolności sumienia i wyznania, czy wolności religii. Moja propozycja
        brzmi następująco: „Działalność kościołów i związków wyznaniowych
        związana z realizacją wolności sumienia i wyznania jest autonomiczna i
        niezależna od działa|- ności państwa”. Poza próbą określenia, co należy
        do kościołów i związków wyznaniowych, jest to również próba złagodzenia
        ostrości instytucjonalnego oddzielenia kościołów i związków wyznaniowych
        od państwa. Stąd formuła mówiąca o działalności. Jest to próba
        oddzielenia funkcjonalnego, a nie instytucjonalnego. Tę formułę, która
        odnosi się tylko do autonomii i niezależności i jest próbą określenia,
        do czego sprowadza się autonomia i niezależność, można połączyć — jeżeli
        byłoby takie oczekiwanie — z formułą mówiącą o oddzieleniu
        działalności kościołów i związków wyznaniowych od działalności państwa.
        Oddzielenie to nastąpiłoby przy pomocy kryterium polegającego na
        urzeczywistnianiu przez kościół zadań związanych z wolnością sumienia i
        wyznania. W związku z tym proszę zwrócić uwagę na art. 37 projektu.
        Proszę zwrócić uwagę, ile jest tam zadań — zwłaszcza w wariancie II — i
        ról wyznaczonych dla kościołów i związków wyznaniowych w zakresie
        wolności religii, praw rodziców do wychowywania dzieci itd. Jeżeli więc
        art. 15 odsyłałby do art. 37, to wówczas formuła użyta w art. 15 nie
        byłaby formułą pustą. Byłaby definiowana przez przepisy, które
        kościołom i związkom wyznaniowym wyznaczają w sposób bardzo szeroki
        określone zadania związane z urzeczywistnianiem wolności religijnych
        jednostki.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Mam pytanie do prof. K. Działochy, lecz chcę je krótko uzasadnić.
        Obawiam się bowiem, że brniemy w niewłaściwym kierunku, a wypowiedzi
        ekspertów — jeżeli można tak powiedzieć — świeckich i ekspertów
        kościelnych zmierzają w rozbieżnych kierunkach. Mamy do czynienia z
        nieporozumieniem polegającym na niezrozumieniu tego, w którym punkcie
        leży główna drażliwość sprawy. Drażliwość sprawy leży właśnie w tym,
        aby nie próbować określać zakresu działalności kościoła, ponieważ całe
        doświadczenie wskazuje na to, że tutaj dokonywane były nadużycia, co
        rodzi obawy. W związku z tym moje pytanie jest następujące: czy prof. K.
        Działocha nie uważa, że lepiej jest zrezygnować z tego, gdyż w dalszym
        ustępie jest mowa, że to ustawy oraz konkordat regulują tę sprawę bez
        potrzeby definiowania, co stanowi zakres działalności kościoła.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Kazimierz Działocha:</strong>
        Wydaje mi się jednak, że konstytucja, która nie może uniknąć
        zdefiniowania zasady wolności sumienia i wyznania — w rozdziale o
        wolnościach i prawach obywatelskich — właśnie w tych przepisach wyznacza
        odpowiednią rolę gwarancyjną dla kościołów i związków wyznaniowych w
        zakresie wolności religijnej. Jednocześnie wyznacza określone zadania —
        powstrzymujące od ingerencji — dla państwa. Role te można określić i
        jakby oddzielić. Niezależnie od tego, czy odwołamy się do przepisu o
        wolności sumienia i wyznania, to przepis ten będzie spełniał taką rolę.
        Przepis ten mówi bowiem o wielu dziedzinach aktywności kościołów i
        związków wyznaniowych w zakresie zapewnienia wolności sumienia i
        wyznania. Nie znaczy to jednak, że kwestia ta dotyczy tylko kościołów i
        związków wyznanio Obrady w dniu 23.02.1995 r. (21) wych. Dlatego też w
        mojej propozycji jest mowa o działalności związanej z realizacją
        wolności sumienia i wyznania. Nie jest to cała sfera, gdyż swoje
        obowiązki ma również państwo, zwłaszcza jeżeli chodzi o obowiązki o
        charakterze negatywnym, a więc nieingerowania.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/PastuszkaStefan.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Stefan Pastuszka (PSL):</strong>
        Źle się dzieje, że na naszej głęboko merytorycznej dyskusji coraz
        bardziej ciąży przeszłość. Z, jednej strony przeszłość, zwłaszcza ta po
        1944 r., dawała wiele dowodów, że władza polityczna zbyt daleko
        ingerowała w sprawy kościoła. Równocześnie musimy mieć Świadomość, że
        konkordat podpisany przez władze II Rzeczypospolitej nie rozwiązał wielu
        wątpliwości i nadal utrzymywały się konflikty między kościołem a
        państwem. Przykładem może być nauczanie religii. Na poglądach części
        członków Komisji ciąży również historia, a zwłaszcza doświadczenia
        przełomu XIX i XX w., kiedy to w Polsce kształtował się kapitalizm
        oparty na doktrynie liberalnej. W tej kwestii znam stosunek kościoła do
        niektórych ruchów społecznych. Warto również pamiętać, że konflikty
        między kościołem a władzą polityczną był ciągłe, i to nie tylko w
        Polsce. Z, historii Polski można przypomnieć choć- by spory Bolesława
        Śmiałego czy Kazimierza Jagiellończyka z przedstawicielami kościoła. W
        moim przekonaniu my nie wypracujemy doskonałej formuły, która
        zabezpieczyłaby kościół z jednej strony, a z drugiej strony państwo,
        zwłaszcza rozumiane w sensie politycznym, przed zatargami. Powinniśmy
        określić takie przepisy, aby kościół mógł maksymalnie dobrze spełniać
        swoją podstawową misję służenia dobru obywateli. Swego czasu, podczas
        posiedzenia Komisji, proponowałem wziąć za punkt wyjścia rozwiązania
        tego newralgicznego problemu konstytucję II Soboru Watykańskiego. Chcę
        również przypomnieć propozycję, którą złożyłem wspólnie z posłami: J.
        Wojciechowskim i A. Bentkowskim i która jest ujęta w zestawieniu
        propozycji jako punkt 5. Być może propozycja ta mogłaby stać się
        podstawą kompromisu. W związku z tym przypomnę tę propozycję: „Ust. 1.
        Stosunki między Państwem a Kościołem Katolickim oraz innymi kościołami 1
        związkami wyznaniowymi są oparte na zasadzie autonomii, tolerancji,
        wzajemnego poszanowania i współpracy. Ust. 2. Sytuację prawną kościołów
        1 związków wyznaniowych określają ustawy, uchwalone po porozumieniu z
        właściwymi przedstawicielami kościołów i związków wyznaniowych. Sytuację
        tę mogą również określać umowy międzynarodowe, ratyfikowane na podstawie
        upoważnienia wyrażonego w ustawie”. Można ponadto rozważyć wyodrębnienie
        oddzielnego ustępu dotyczącego Kościoła katolickiego, ponieważ kościół
        ten w życiu społecznym i w realizacji potrzeb duchowych odgrywa bardzo
        istotną rolę. Uważam, że jeżeli znajdziemy porozumienie, to należy
        powołać Komisję składającą się z przedsta cieli głównych orientacji
        politycznych i kościołów oraz związków wyznaniowych. Komisja ta wraz z
        ekspertami podjęłaby próbę wypracowania właściwej formuły. Wydaje się
        bowiem, że podczas posiedzenia plenarnego nie wypracujemy takiej
        formuły, tym bardziej że niekiedy zbyt mocno działają emocje.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/LykoZachariasz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>
          Przedstawiciel Kościoła Adwentystów Dnia Siódmego, ks. prof.
          Zachariasz Łyko:
        </strong>
        Uważam, że prowadzona od pewnego czasu dyskusja — zwłaszcza w dniu
        wczorajszym i dzisiejszym — wniosła bardzo dużo. Jest to ogólne
        wzbogacenie i pogłębienie zagadnień. Wiele terminów zostało bardziej
        sprecyzowanych. Chodzi zwłaszcza o pojęcie państwa jako wspólnoty i
        państwa jako aparatu władzy. Kościoły nie mogą być oddzielone od państwa
        w szerokim znaczeniu tego pojęcia. Od aparatu mogą być jak najbardziej
        oddzielone. To samo dotyczy kwestii autonomii i niezależności. Jeżeli
        chodzi o kwestię autonomii i niezależności kościołów, to pojawia się
        problem odniesienia tych terminów do państwa, które przecież jest
        suwerenne. Są to kwestie, które pomagają nam w sprecyzowaniu całego
        zagadnienia. Chcę jeszcze dotknąć jednej delikatnej kwestii. Chodzi o
        kwestię rozdziału kościołów od państwa. Jako przedstawiciele kościołów
        jesteśmy bardzo uczuleni na pojęcie rozdziału. Bywało tak bowiem, że był
        to rozdział kościołów od państwa, ale niekoniecznie państwa od
        kościołów. Równocześnie należy jednak powiedzieć, że nowoczesnym
        rozwiązaniem zagadnienia stosunków państwa i kościoła jest rozdział.
        Jest to nie tylko nowoczesne ujęcie, ale również ujęcie
        chrześcijańskie. Cały antyk stał na stanowisku monizmu religii i
        polityki, monizmu kościoła i państwa. Właśnie Chrystus dokonał
        radykalnej zmiany. Nastąpiło bowiem rozdzielenie tych dwóch
        rzeczywistości — społeczności i powstała zasada dualizmu religii i
        polityki, dualizmu kościoła i państwa. Kwestie te znakomicie przedstawia
        w swojej książce ks. prof, J. Krukowski. U podstaw nowoczesnych
        stosunków państwo—kościół jest rozdział. Jednakże w naszej konkretnej
        sytuacji, z uwagi na nasze bardzo przykre doświadczenia, nie
        opowiadałbym się za wyrażeniem expressis verbis pojęcia: rozdział koś-
        ciołów od państwa. Gdyby jednak w grę wchodził rozdział, to nie od
        państwa w szerokim znaczeniu, lecz od państwa w znaczeniu węższym,
        rozumianym jako władze publiczne czy organy, o czym znakomicie mówili
        eksperci. Opowiadam się więc za również nowoczesnym i bardzo pozytywnym
        sformułowaniem: „autonomia i niezależność”. Autonomia i niezależność to
        jest rozdział instytucji kościelnych od instytucji państwowych,
        instytucji sakralnych od politycznych. W dyskusji poruszono kwestię
        zadań kościołów. Nie byłoby oczywiście wskazane, aby państwo czy władza
        Świecka ustalała zadania kościołowi. Zadania te są trudne do
        sprecyzowania. Wiem jednak również, że występuje obawa, o której należy
        powi dzieć: domeną kościoła nie są sprawy polityczne w znaczeniu
        ścisłym. Filozofia polityki stwierdza, że termin polityka musi być
        różnie rozumiany. Sprawy polityczne są sprawami ogólnoobywatelskimi i w
        takim sensie wszyscy obywatele, instytucje i organizacje, a w tym i
        kościoły, mogą w nich uczestniczyć. Sprawy polityczne to sprawy
        państwowe w szero kim ujęciu. Sprawy polityczne to także ius imperium,
        czyli rządzenie. Żaden kościół nie jest powołany do sprawowania funkcji
        rządzenia, a zatem do ius imperium. Pod tym względem sprawa jest
        zupełnie klarowna. Natomiast w sensie bardzo ogólnym sprawy polityczne
        są sprawami wszystkich obywateli i w tym sensie kościół jest również
        podmiotem politycznym, tak jak i każda jednostka jest podmiotem
        politycznym. Podmiotem politycznym jest przede wszystkim naród.
        Podmiotem politycznym, są partie polityczne i organizacje społeczne. Tak
        więc w szerokim ujęciu kościół może zajmować się sprawami politycznymi,
        czy może raczej społecznymi. Nie wchodzi natomiast w grę sprawowanie
        władzy — ius imperium. Jeżeli któryś z kościołów chciałby sprawować
        władzę, to mielibyśmy do czynienia nie z rozdziałem — tym Chrystusowym,
        ewangelicznym — lecz z monizmem religijno-politycznym czy
        kościelno-państwowym. Jest pewna granica, której kościoły nie mogą
        przekraczać — nie mogą sięgać po władzę polityczną w żadnym wypadku. Jak
        już mówiłem nie byłbym za formułą o oddzieleniu, lecz musimy jakoś
        wybmąć z zaistniałej sytuacji. Nasze poglądy na skutek dyskusji
        pogłębiają się. Dochodzimy do pewnej precyzji. Jestem pełen nadziei, że
        konsens zostanie osiągnięty. Warto zwrócić uwagę, że propozycje
        przedłożone przy udziale przedstawicieli kościołów i związków
        wyznaniowych stwierdzają, że władze publiczne są neutralne. Czy
        neutralność władz publicznych nie implikuje jednocześnie rozdziału?
        Wydaje się zatem, że formuła ta wskazuje na fakt, że władze publiczne —
        aparat władzy — muszą być neutralne. A zatem nie mogą być zorientowane
        religijnie, ani ideologicznie, ani filozoficznie. Muszą być otwarte
        wobec wszystkich. Czy wobec tego już w tym przypadku nie została
        skonsumowana idea rozdziału kościołów od państwa, a właściwie od władz
        publicznych? Wydaje się, że jest to implicite zawarte w formule o
        neutralności. Jeżeli chodzi o formułę o autonomii i niezależności, to
        jest ona nowoczesna. Chyba nie wymaga dalszego sprecyzowania formuła
        mówiąca o wykonywaniu swoich zadań. Szczegółowy zakres zadań określają
        natomiast ustawy oraz konkordat. Nie kruszyłbym więc kopii. Nałeży
        natomiast spojrzeć na całokształt przepisów. Powinna być również
        stosowana wykładnia systematyczna obejmująca całokształt zagadnienia, a
        nie wyrywkowe kwestie.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Chcę rozpocząć od uwagi porządkowej. W zestawieniu poprawek, które
        zostało nam dzisiaj doręczone, w pun kcie 4 jest zawarta wersja jaką
        zgłosiłem wczoraj na początku obrad. W końcowej części posiedzenia
        przedłożyłem inny tekst mojej propozycji uwzględniający postęp w
        precyzowaniu i definiowaniu sformułowań, który został wczoraj
        osiągnięty. Proszę więc o wykreślenie brzmienia punktu 4 jako
        nieaktualnego. Sformułowania, które zawarłem w swojej późniejszej
        propozycji w pełni odnajduję w propozycji zawartej w punkcie 1. Wiem, że
        podczas mojej nieobecności — we wcześniejszej części dzisiejszego
        posiedzenia — poseł K. Łybacka i poseł J. Jaskiernia zgłosili pewne
        propozycje, które chciałbym przedstawić w formie autopoprawki, chcąc
        poszukiwać rozwiązań możliwych do zaakceptowania przez wszystkich, a co
        najmniej przez większość. W ust. 3 gotów byłbym zrezygnować ze
        sformułowania: „religijnych i organizacyjnych”. W to miejsce proponuję
        formułę: „na zasadach określonych w ustawie”. Natomiast w ust. 4
        mówiącym o formach prawnych określenia sytuacji kościołów — zwłaszcza w
        części dotyczącej Kościoła katolickiego — gotów byłbym zrezygnować ze
        swojej propozycji, zastępu jąc ją brzmieniem wariantu I, lecz z
        wykreśleniem w pierwszym zdaniu wyrazu „oraz” 1 wpisaniem: „lub ustawa
        1". Wiele głosów w dzisiejszej dyskusji zdaje się świadczyć o istnieniu
        sporu wokół tego, czy konstytucja ma określać zadania kościołów i
        związków wyznaniowych, czy też nie. Mam wrażenie, że jest to spór
        pozorny. W szczególności moją intencją nie było to, aby konstytucja
        określała zadania kościołów i związków wyznaniowych. Część druga ust. 3
        formułuje zasadę autonomii i niezależności kościołów i związków
        wyznaniowych. Chodzi jedynie o to, aby zasada ta była sformułowana
        precyzyjnie. W moim przekonaniu sformułowanie jej przez użycie formuły:
        „swoich zadań” bez jakichkolwiek dalszych dookreśleń, nie spełnienia
        wymogu sprecyzowania zasady konstytucyjnej. Problem polega więc na
        sprecyzowaniu konstytucyjnej zasady, a nie na definiowaniu zadań
        kościołów. Chodzi o sprecyzowanie zakresu rzeczowego obowiązywania
        zasady, autonomii i niezależności kościołów. W moim przekonaniu tak
        właśnie należy formułować przepisy ustawy zasadniczej. Podczas
        dzisiejszej debaty padały stwierdzenia — m.in. z ust ks. prof. J.
        Krukowskiego — przeciwko użyciu sformułowania mówiącego o oddzieleniu
        kościoła od państwa. Wskazywano na brak jasności i precyzji tego
        sformułowania. Był to jeden z argumentów, aby nie posługiwać się tym
        pojęciem w konstytucji. Ja prezentuję dokładnie analogiczne rozumowanie.
        Nie powinniśmy używać sformułowań niejasnych, zwłaszcza że w wielu
        wypowiedziach stwierdzono wyraźnie, że pojęcie: „swoich zadań” miałyby
        definiować same kościoły. Proszę kontynuować logiczne wnioski, jakie z
        tego wynikają. Oznacza to, że przy akceptacji tej formuły zakładamy, że
        kościoły będą interpretowały treść przepisu konsty Obrady w dniu
        23.02.1995 r. (21 tucyjnego, gdyż dopiero od tej autentycznej
        interpretacji pojęcia: „swoich zadań” będzie zależała realna treść
        zasady autonomii i niezależności kościołów, wyrażona w konstytucji. W
        moim przekonaniu jest to pójście za daleko w kierunku przekroczenia
        granicy, która wyznacza kompetencje różnych instytucji, czy organów
        władnych do interpretowania konstytucji. Sądzę, że poza Sejmem i
        Trybunałem Konstytucyjnym żaden inny organ nie może mieć prawa do
        swoiście autentycznej, rozstrzygającej wykładni treści konstytucji.
        Dlatego też trudno jest przyjąć takie sformułowanie. Próbę rozwiązania
        tego problemu może stanowić nie tylko propozycja, którą przedłożyłem
        jako autopoprawkę. Uważam osobiście, że to, co zaproponował prof. K.
        Działocha, również wymaga bardzo poważnego rozważenia. Proszę jednocześ-
        nie zauważyć, jak na tym tle pojawia się kwestia oddzielenia kościoła i
        związków wyznaniowych od państwa. Jeżeli przyjęliśmy, że definiowanie
        jakiegokolwiek przepisu ustawy zasadniczej należy do kościołów i
        związków wyznaniowych, to m.in. w tym sensie naruszalibyśmy zasadę
        oddzielenia kościołów i związków wyznaniowych od państwa. Wstępowałyby
        one w sposób oczywisty — w moim przekonaniu — w rolę przysługującą
        jedynie wybranym, wskazanym w konstytucji, organom państwowym. Rozumiem
        różne zastrzeżenia jakie mogą być formułowane — zwłaszcza ze względu na
        doświadczenia historyczne — wobec pojęcia „oddzielenie ”. Apeluję
        równocześnie o to, abyśmy nie bagatelizowali uwag prof. M. Pietrzaka i
        innych osób, wskazujących na znacznie szerszy kontekst historyczny,
        wedle którego należałoby interpretować pojęcie oddzielenia kościoła od
        państwa. Być może dlatego należy również poszukiwać innych formuł. Jedną
        z nich zaproponował prof. W. Osiatyński. W moim przekonaniu wymaga ona
        poważnego rozważenia. Prof. W. Osiatyński wspomniał, że oddzielenie może
        z racji konstrukcji prawnej i z racji praktyki, przybierać różną treść
        realną. Chcę więc zwrócić uwagę na to, że w rozważanych sformułowaniach
        jest expressis verbis wyrażona zasada współdziałania państwa oraz
        kościoła i związków wyznaniowych. Zasada ta dookreśla pojęcie
        oddzielenia i uzupełnia je. Wskazuje również wyraźnie, że chodzi o
        rozumienie przyjazne I pozytywne, a nie jakiekolwiek inne. Jeżeli
        powoływano się na to, że w wielu innych konstytucjach nie ma zasady
        oddzielenia, to nie ma tam również zasady współdziałania.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/TaylorJacek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jacek Taylor (UW):</strong>
        Mam kilka uwag, jeżeli chodzi o formułę proponowaną przez posła T.
        Mazowieckiego. Prof. W. Osiatyński wyróżnił rozdział przyjazny,
        neutralny i wrogi. Natomiast o współdziałaniu nie można z całą pewnością
        powiedzieć, że może być wrogie. W tym sensie wyższość sformułowania
        posła T. Mazowieckiego jest oczywista. Myślę, że na tle również
        wcześniejszych uwag, nie trzeba już namawiać do tego sformułowania.
        Koledzy z SLD wielokrotnie powracali do pojęcia wzajemnej autonomii i
        niezależności zawartego również we wniosku posła T. Mazowieckiego.
        Myślę, że odwołania do tradycji, historii, doświadczeń i przyzwyczajeń
        można również odnieść i do tego sformułowania. Powinno to być zwłaszcza
        przekonywające dla osób, które od dawna obecne są w życiu politycznym
        kraju. Pojęcie autonomii i niezależności, względnie samorządności i
        niezależności, były to pojęcia, które znalazły się w nazwie wolnych
        związków zawodowych w 1980 r. Przypominam sobie, że kiedy chcieliśmy ten
        wolny związek nazwać wolnym związkiem zawodowym, to strona
        partyjno-rządowa przedkładała nam zalety i wyższość sformułowania:
        „niezależne i samorządne”” ponad pojęciem „wolne”. Wyraz „wolność” był
        wówczas trudno akceptowany. Ta oficjalna nazwa weszła jednak do historii
        Polski, a może i historii Świata, i jest przez nas wszystkich pamiętana
        z pewnym sentymentem. Tak więc kwestia zakresu dyskutowanych pojęć nie
        była wówczas kwestionowana, a była uważana za oczywistą. Właściwie
        pojęcia te były wynikiem uzgodnienia o charakterze historycznym. 2
        jednej bowiem strony uniknięto pojęcia „wolne”, a z drugiej strony
        uzyskano porozumienie, co było w tamtej sytuacji ważniejsze. Teraz może
        się to po prostu powtórzyć. Myślę więc, że trzeba się opowiadać nie za
        określeniem „rozdział” czy „oddzielenie, lecz za określeniem
        „współdziałanie. Ponadto należy dodać, że pojęcia wzajemnej autonomii 1
        niezależności są pojęciami pochodzącymi z dokumentów soborowych, ale
        również z dokumentów z okresu Sierpnia 1980 r. Powiedziałem o tym
        dlatego, aby zebranych przyzwyczaić do myśli o zaakceptowaniu tych
        pojęć. Przedstawiciel pełnomocnika obywatelskiego projektu konstytucji,
        Michał Drozdek: Obawa, która się pojawia dotyczy tego — co wyraził
        wprost jeden z mówców — aby żaden z kościołów nie uczestniczył we władzy
        państwowej. Podzielam tę obawę. Kościół nie ma jednak teraz takich
        aspiracji, zdecydowanie wycofując się z udziału we władzy. Nie ma
        instytucji interrexa prymasowskiego, nie ma automatyzmu otrzymywania
        tytułu senatora przez biskupów. Nie ma połączalności instytucji
        państwowych i kościelnych tak jak było to w cesarstwie austriackim.
        Takie niebezpieczeństwo nie występuje więc. Myślę, że zabezpieczają
        przed nim bardzo dobrze już uzgodnione artykuły. Zaniepokoiła mnie
        natomiast pewna tendencja, która wystąpiła w poprzedniej części
        dyskusji, przed przerwą. Zmierzała ona do tego, aby w jakiś sposób
        doprowadzić do zdefiniowania tej autonomicznej działalności kościołów
        jako działalności religijno-organizacyjnej. W związku z tym muszę
        powiedzieć kilka kwestii zasadniczych. Kościoły, a na pewno Kościół
        katolicki, nie są to instytucje działające tylko w wymiarze wertyk lnym
        — pionowym, czyli między człowiekiem a Bogiem. Działają także w wymiarze
        horyzontalnym — między ludźmi. Kościół od początku wnosi swoją koncepcję
        zorganizowania społeczeństwa i swoją koncepcję spraw międzyludzkich.
        Kościół chce uczyć ludzi życia we wszystkich wymiarach tego życia i
        próbuje swoją koncepcję przedstawić i zachęcić do jej realizacji.
        Dotyczy to również spraw społe cznych i politycznych, gdyż kościół ma
        swoją naukę dotyczącą sposobu zorganizowania wspólnoty politycznej.
        Poświęcony jest temu cały rozdział w konstytucji Gaudium et spes.
        Obawiam się, że ta prorocza — moralna — wizja kościoła dotycząca życia
        społecznego, która często w historii była niewygodna dla władz Świeckich
        począwszy od Nerona, w tej chwili wzbudza zaniepokojenie pewnej części
        Komisji Konstytucyjnej. Próbuje się różnymi drogami ograniczyć tę
        proroczą misję kościoła. Próbuje się znowu zamknąć kościół do spraw
        ściśle religijnych. Uważam, że żaden zapis, który zmierza do
        ograniczenia praw kościoła do spraw czysto religijnych i wyrugowania
        kościoła ze spraw społecznych i obecności w życiu państwa i nauczania,
        nie powinien znaleźć się w konstytucji. Warto przypomnieć, że w XIX w.
        walka o niepodległość była bardzo mocno wspierana przez kościół. Znamy
        również sprawę św. Stanisława, który zabierał głos w sprawach
        politycznych. Jest to przykład — symbol — obywatelskiej aktywności
        kościoła. Można wskazać inne przykłady, które dowodzą, że nie chodziło o
        udział we władzy publicznej, lecz o realizację proroczej misji kościoła.
        Wiem, że jest to niewygodne dla wielu sił politycznych. Jednakże żaden
        tego rodzaju przepis, który będzie zmierzał do ograniczenia roli
        kościoła, nie będzie mógł być zaakceptowany przez tę część opinii
        publicznej, która zgłosiła obywatelski projekt konstytucji, niezależnie
        od decyzji Komisji Konstytucyjnej i parlamentu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Janusz Szymański (UP):</strong>
        Chcę podzielić się wątpliwością, jaka zrodziła się na tle przedłożonych
        propozycji. Zastanawiam się, czy aby nie popełniamy błędu starając się w
        tej chwili w zasadach ustroju uregulować kwestię stosunków
        państwo—kościół. Patrząc na systematykę konstytucji państw współczesnych
        można łatwo dostrzec, że w wielu przypadkach kwestie te są regulowane w
        katalogu podstawowych praw i wolności obywatelskich. Chcę dodać, że
        czytając przedłożone propozycje odnoszę wrażenie, Że pasują one bardziej
        do takiego właśnie katalogu. Proponuję więc, abyśmy rozważyli sprawę
        generalną, a więc, czy dyskutowana materia jest materią rozdziału
        pierwszego, czy też jest to materia rozdziału o podstawowych prawach i
        wolnościach obywatelskich, jak na to wskazuje systematyka wielu
        konstytucji współczesnych. Ja proponuję przeniesienie tej materii.
        Analiza treści poszczególnych rozwiązań pozwala stwierdzić, że rysuje
        się kilka dróg rozwiązania dyskutowanej kwestii. Uważam, że podkomisja
        podstaw ustroju politycznego i społeczno-gospodarczego zrobiła to, co
        mogła. Nie wydaje się, aby mogła poczynić dalszy krok. Możliwe byłoby
        natomiast poszukiwanie rozwiązań w oparciu o podkomisję czy grupę
        powołaną ad hoc. Dwa tygodnie, jakie dzielą nas do następnego
        posiedzenia Komisji, mogłyby być wykorzystane dla podjęcia próby
        znalezienia rozwiązania kompromisowego. Wydaje się, że taką propozycję
        należałoby zgłosić. W skład tego typu podkomisji, czy grupy powinni
        wejść przedstawiciele klubów reprezentowanych w Komisji oraz
        przedstawiciele kościołów i związków wyznaniowych. Zachęcam do podjęcia
        takiej próby szukania kompromisu. Ponadto chcę powiedzieć o kwestii,
        która również nie została prawidłowo przedstawiona we wczorajszej
        audycji telewizyjnej „Puls dnia”. Chcę wyraźnie stwierdzić, że nawet
        umieszczenie w konstytucji przepisu, że status Kościoła katolickiego
        reguluje ustawa i konkordat, wcale nie oznacza obowiązku zawarcia
        konkordatu. Tak sformułowany przepis oznacza dopuszczenie możliwości.
        Nie można natomiast mówić o obowiązku zawarcia konkordatu. Chcę również
        dodać, że posługując się systematyką konstytucji państwa tak
        katolickiego jak Hiszpania, stwierdzić należy, że kwestia stosunków pań-
        stwo—kościół regulowana jest w rozdziale o podstawowych prawach i
        wolnościach. Zamierzam zgłosić na piśmie tego rodzaju wniosek. Nie widzę
        bowiem żadnego uzasadnienia dla próby sformułowania zasady, która mieści
        się w typowej materii rozdziału o prawach i wolnościach obywatelskich, w
        rozdziale o zasadach ustroju. Proszę, aby opinię w tej kwestii
        przedstawili eksperci.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Odnosząc się do wypowiedzi posła J. Szymańskiego, chcę powiedzieć, że
        jest wiele powodów, dla których kwestię stosunków państwo-kościół
        dyskutujemy właśnie w ramach rozdziału pierwszego. W porównaniu z takimi
        kwestiami jak prawo do zrzeszenia się w stowarzyszenie, czy organizacje
        pozarządowe ranga stosunków państwo-kościół uzasadnia ich regulację w
        rozdziale pierwszym. Ponadto nie ulega wątpliwości, że niezależnie od
        tego, w którym rozdziale konstytucji zostanie uregulowana kwestia
        stosunków państwo-kościół, to konieczna jest dyskusja, która powinna
        doprowadzić do wypracowania kompromisowej formuły. Przedstawiciel
        Prezydenta RP, dr Władysław Kulesza: Na str. 6 zestawienia znajduje się
        — w punkcie 11 — wniosek przedstawicieli Prezydenta RP obejmujący art.
        15. Propozycja ta wyrasta z art. 9 projektu prezydenckiego, który w
        swoim punkcie wyjścia przyjął rozwiązania zawarte w konstytucji Włoch, o
        co upomniała się senator A. Grześkowiak. Punkt wyjścia był właśnie taki.
        Jednakże koniecz ność wejścia w szczegóły uwidoczniła fakt zderzenia się
        dwóch języków, co uwidoczniło się również Obrady w dmiu 23.02.1995 r.
        (21) w debacie. Jeden to język prawników, a drugi to język katolickiej
        nauki społecznej. Inny sens pojęcia autonomia proponuje Gaudium et spes
        — konstytucja duszpasterska kościoła w Świecie współczesnym, a do innego
        języka są przyzwyczajeni prawnicy. W związku z tym wniosek ujęty w pkt.
        11 inaczej operuje pojęciem autonomii, co zostało ujęte w ust. 2 w
        formule: „Kościoły i związki wyznaniowe korzystają z autonomii przy
        wykonywaniu swych funkcji religijnych i organizacyjnych”. Nie chodzi
        więc o wzajemną autonomię: państwo w stronę kościoła, kościół w stronę
        państwa, lecz chodzi o autonomię jednokierunkową pomiędzy państwem a
        kościołem. Problem polega na tym, że punktem wyjścia dla takiej formuły
        jest jednak pozostawanie przy naczelnej myśli art. 9, którego idea
        opiera się na separacji przyjaznej i kooperatywnej. W związku z tym
        chciałbym powołać się na konstytucję, o której nie było jeszcze mowy.
        Jest to konstytucja Republiki Weimarskiej, w której z jednej strony mamy
        oddalone faktyczne rozgraniczenie sfery tego, co państwowe i tego, co
        kościelne, przy założeniu jednak, że owo roz graniczanie — wyodrębnianie
        — nie jest kwestią wrogości, czy aktywnej kontestacji, lecz kwestią
        szukania granic współpracy i porozumienia. Upieranie się przy formule
        porozumienia w obliczu wzbierającej kontrowersji i poszukiwania
        kompromisu, jest moim zdaniem sprawą zasadniczą. Ponownie zachęcam do
        zwrócenia uwagi na brzmienie art. 15 zawarte w propozycji nr 11. W
        ustępach: 1, 215, zawarta jest wyraźna propozycja poszukania odrębności
        bez używania tego pojęcia, przy przyjęciu w punkcie wyjścia założenia,
        że naczelną racją tej odrębności instytucjonalnej będzie jednak
        współpraca tych dwóch struktur, tych dwóch społeczności. Choć jest to
        moja uwaga osobista, a nie wniosek urzędowy, to proponuję rozważenie
        pomysłu, aby chęć współpracy zamanifestować przez to, że na przykład
        ust. 5 zostałby przeniesiony wyżej w okolice ust. 1 lub ust. 2.
        Pokazałoby to z jednej strony, że są to jednak różne struktury
        instytucjonalne, ale istnieje wola współpracy i kooperatywności mająca
        na uwadze potrzeby jednostki, rodziny i społeczeństwa. Uważam również,
        że treścią sporu są dwa wyrazy: „rozdział”, czy „oddzielenie. Powstaje
        kwestia woli politycznej, czy wyrazy te ostaną się, czy też nie. Od
        strony intelektualnej, prawniczej i historycznej jest możliwość
        wyrażania tych treści, bez używania tych wyrazów. W tym kierunku zmierza
        proponowany przez przedstawicieli Prezydenta RP, projekt art. 15.
        Przedstawiciel Kościoła Zborów Chrystusowych, ks. Henryk Sacewicz: Nie
        planowałem udziału w dyskusji, ale sprowokowała mnie jedna wypowiedź, do
        której za chwilę nawiążę. Rozpocznę jednak od kwestii ogólnej. Przyznam
        szczerze, że jest mi niezmiemie przykro, że wczoraj nie udało się dojść
        do zamknięci sprawy. Wydaje się, że wczoraj był lepszy klimat niż jest
        dzisiaj. Nie chcę nikogo osądzać, ale wczoraj pozwoliłem sobie
        powiedzieć, że w niektórych momentach odbierałem takie wrażenie jak
        działanie kieszonkowców. Polega ono przede wszystkim na wytworzeniu
        sztucznego tłoku. Przy omawianiu kwestii stosunków państwo-kościół, w
        niektórych momentach, wytwarza się niepotrzebny sztuczny tłok, zamiast
        rzeczywiście pójść do przodu i znaleźć jednak najlepsze rozwiązanie.
        Jeżeli chodzi o wypowiedź, która sprowokowała mnie do zabrania głosu, to
        treść uwag wygłoszonych przez przedstawiciela pełnomocnika
        obywatelskiego projektu konstytucji, M. Drozdka. W Chrześcijańskiej
        Akademii Teologicznej uczono mnie m.in. historii kościoła, ale nie
        pamiętam, aby chrześcijaństwo w okresie Nerona ubiegało się o władzę
        polityczną, co zostało dzisiaj powiedziane. Ponadto chciałbym zwrócić
        uwagę, że choć nie jestem parlamentarzystą, to jednak przeszły mnie
        trochę ciarki, w momencie gdy w wypowiedzi M. Drozdka usłyszałem, że w
        pewnym sensie szantażuje on najwyższe organy władzy mówiąc, że
        środowisko które reprezentuje nie zaakceptuje tego, co podejmie Komisja,
        czy parlament. Jestem zdania, że tego typu wypowiedzi nie powinny padać
        z żadnych ust podczas posiedzeń Komisji Konstytucyjnej. Przedstawiciel
        pełnomocnika obywatelskiego projektu konstytucji, Michał Drozdek:
        Mówiłem o proroczej misji kościoła kwestionowanej przez Nerona, a nie o
        funkcjach politycznych. Ponadto chcę zwrócić uwagę, że ta Komisja i ten
        parlament pracuje nad przygotowaniem konstytucji, która zostanie poddana
        pod referendum. W związku z tym każde środowisko obywatelskie ma prawo
        wypowiedzieć się w sprawie głosowania w referendum. Jeżeli ktoś uzna za
        niesłuszne artykuły zaproponowane przez Komisję Konstytucyjną i
        Zgromadzenie Narodowe, ma prawo wypowiedzieć się na ten temat. Ja jestem
        w tej sali po to, aby wypowiadać się na temat, jakie artykuły są przez
        nas akceptowane, a jakie nie. Chodzi o to, aby Komisja Konstytucyjna
        wiedziała, jakie stanowisko zajmiemy podczas referendum. Taka jest moja
        rola. Nie mogę okłamywać Komisji Konstytucyjnej. Jeżeli będziemy mieli
        krytyczne stanowisko, to ja zawsze o tym powiem.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Chcę zabrać głos w trzech kwestiach. Kwestia pierwsza to pytanie, skąd
        bierze się tak duży opór wobec pojęcia „rozdział czy „oddzielenie”.
        Jakie motywacje stoją za tym? Z dyskusji nie bardzo bowiem wiem,
        dlaczego tak się dzieje. Rozumiem, że komuś może się źle kojarzyć
        pojęcie „rozdział” na tle praktyk z lat pięćdziesiątych i póź-
        niejszych, które to praktyki nie dyskwalifikują tego pojęcia. Przy tej
        okazji chcę zwrócić uwagę na jeszcze jedną kwestię. Wczoraj była mowa o
        tym, że pojęcie „oddzielenie to wyraz kompromisu, który się niemal
        zrodził. Można było odnieść wrażenie, że jest to pojęcie bardzo daleko
        idące i niemal nieznane. O tym, że tak nie jest przekonuje tekst
        konstytucji portugalskiej, a więc znanego kraju katolickiego. Cytuję
        odpowiedni fragment, art. 41 ust. 3 — w tekście znowelizowanym jest to
        ust. 4: „Kościoły i związki wyznaniowe są oddzielone od państwa. Mogą
        swo bodnie organizować i wykonywać swoje funkcje religijne i obrządek”.
        Uważam, że termin „rozdział” czy „oddzielenie” to podstawowa gwarancja
        tego, że władze państwowe nie mogą sobie uzurpować funkcji kościelnych,
        a władze kościelne funkcji państwowych. Na tym polega istota
        oddzielania. Nie może być prób wzajemnego przechwytywania funkcji.
        Jeżeli ktoś kwestionuje takie rozumienie i z tego czyni zasadniczy
        problem, to powstaje pytanie o motywację. Ponadto jest tak, że podczas
        dyskusji nikt nie próbował określać, co kościół ma robić. Co kościół —
        kościoły — mają robić jest to ich wewnętrzna sprawa. Byłoby błędem
        przyjęcie założenia, że konstytucja ma określać, co mają robić kościoły.
        Problem, który jest stawiany, dotyczy innego zagadnienia: co z
        działalności kościoła ma być objęte zasadą autonomii i niezależności.
        To, że kościół powinien być autonomiczny i niezależny w zakresie
        wykonywania funkcji religijnych, jest kwestią oczywistą. Jak natomiast
        konstytucyjnie zinterpretować sytuację, kiedy kościół będzie się
        angażował w działalność polityczną, gdyż jesteśmy w państwie wolnym? To
        samo pytanie dotyczy sytuacji zaangażowania się kościoła w działalność
        gospodarczą. Czy wobec tego działalność gospodarcza kościoła ma być
        również wyjęta spod obowiązujących reguł i stać się obszarem autonomii i
        niezależności? Co z kwestią oświaty, zwłaszcza w perspektywie
        prywatyzacji szkolnictwa? Czy sfera ta ma być również wyjęta spod wglądu
        państwa? Wydaje się więc, że kwestia została ukształtowana niezbyt
        właściwie i podejmowane są próby zepchnięcia jej w niewłaściwym
        kierunku. Chcę również podkreślić, że zwłaszcza w środkach masowego
        przekazu była mocno eksponowana teza, że formuła o funkcjach religijnych
        i organizacyjnych jest wymysłem posłów SLD — W. Cimoszewicza i K.
        Łybackiej — co doprowadziło do zerwania potencjalnego konsensu.
        Tymczasem jest to formuła zawarta we wniosku przedstawicieli Prezydenta
        RP. To przedstawiciele Prezydenta RP zwrócili uwagę, że autonomia
        powinna dotyczyć funkcji religijnych i organizacyjnych. Wydaje się więc,
        że członkowie Komisji Konstytucyjnej powinni mieć możliwość złożenia w
        dniu dzisiejszym swoich propozycji rozwiązań kompromisowych dotyczących
        art. 15. Uważam, że formuła mówiąca o oddzieleniu kościoła od państwa
        jest najbardziej delikatną z możliwych. Jest to zarazem fundamentalna
        konstrukcja konstytucyjna. Próba uniknięcia tej formuły może wręcz
        rodzić pytanie, co się kryje za tak wielkim przywiązaniem wagi do
        unikania tego stwierdzenia. Chcę również odnieść się do kwestii, o
        której mówił poseł T. Mazowiecki wskazując, że wykonywanie funkcji
        kościołów będzie się odbywać w ramach ustaw, i że jest to oczywiste.
        Skoro jest oczywiste, iż będzie się to odbywać w ramach ustaw, to
        dlaczego nie powiązać obu ustępów mówiących o tych kwestiach? Skoro nie
        chcemy precyzować zadań, to dodajmy formułę: „w ramach ustaw”, czy „w
        ramach porządku prawnego '. Blankietowe wyłączenie całej działalności
        kościołów, bez wskazania bliżej o jaką działalność chodzi, i objęcie jej
        obszarem autonomii i niezależności, jest oczywiście konstrukcją
        dopuszczalną, ale wydaje mi się, że nie bardzo korespondowałaby z
        tendencją, która ukształtowała się na przestrzeni kilku ostatnich
        dziesięcioleci w wielu innych krajach. Nie sądzę więc, aby mogła uzyskać
        akceptację. W konkluzji uważam więc, że na tle przebiegu dyskusji
        jesteśmy w stanie sformułować rozwiązanie kompromisowe, czy nawet
        konsens, pod warunkiem, że nie będzie to traktowane w ten sposób, iż
        ktoś niejako z góry zastrzeże, co nie może być przedmiotem tego
        konsensu. Zamach na pojęcie oddzielenia od państwa miałby swój bardzo
        poważny wydźwięk ustrojowy, gdyż kwestia ta jest ujęta w rozdziale o
        zasadach ustroju.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/TaylorJacek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jacek Taylor (UW):</strong>
        Chcę odpowiedzieć na pytanie, co się za tym kryje, że my tak nie chcemy
        sformułowania mówiącego o rozdziale czy oddzieleniu. Kryje się za tym
        parafa towarzysza Józefa Wissarionowicza, który parafował naszą
        konstytucję z 1952 r., co Portugalczyków nie spotkało. Ponadto rozdział
        może być: przyjazny, neutralny i wrogi. Natomiast termin:
        „współdziałanie ”, który lansujemy, na pewno nie może oznaczać wrogości.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Nie wiem, czy poseł J. Taylor był obecny w momencie kiedy udowodniono,
        że rozdział kościoła od państwa nie wywodzi się od J. Stalina i z
        Konstytucji PRL, lecz ma znacznie starszą genezę. W tym kontekście
        przytaczana była konstytucja amerykańska. Należy również przypomnieć, że
        oddzielenie wcale nie oznacza braku możliwości współdziałania. Są to
        dwie niezależne kategorie. Instytucje mogą być oddzielone i mogą ze sobą
        współdziałać. Chodzi natomiast o to, aby jedna i druga nie próbowały
        przejmować swoich wzajemnych funkcji. Jest to istota oddzielenia.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/TaylorJacek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jacek Taylor (UW):</strong>
        Byłem obecny wówczas kiedy posłowie: J. Jaskiernia i L. Pastusiak mó-
        wili o konstytucji amerykańskiej. Nie jest to jednak nasza tradycja.
        Nasza tradycja jest dużo gorsza.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Możemy oczywiście sięgnąć do rodzimej tradycji arian, o czym mówił prof.
        M. Pietrzak. Obrady w dniu 23.02.1995 r. (21) Chcę jednak posłowi J.
        Taylorowi i posłowi J. Jaskierni zwrócić uwagę na to, że spór który
        prowadzimy jest sporem dlatego, że nie mówimy tylko o literalnym
        znaczeniu określonego pojęcia, lecz mówimy o całym bagażu skojarzeń,
        których nie przerwiemy. One po prostu są. Jeżeli dzisiaj potrafimy,
        szukając rozwiązań, ominąć to, co jest stereotypem myślowym, złym
        doświadczeniem społecznym, to będzie dobrze. Jeżeli natomiast nie
        potrafimy, to konsens będziemy uzyskiwać z trudnością. Jest bowiem tak,
        że możliwość zamknięcia tego tematu inaczej aniżeli znajdując
        rozwiązania mniej kojarzące się, moim zdaniem nie istnieje.
        Przedstawiciel Prezydenta RP, dr Władysław Kulesza: Jeżeli chodzi o
        przykład Portugalii, to jego przytoczenie jest dla mnie nieco szokujące.
        Historia tego kraju pokazuje bowiem, że w swoim antyklerykalizmie,
        zwłaszcza od 1910 r., przelicytowała III Republikę Francuską, Sprawa
        była tak ewidentna, że kiedy Salazar doszedł do władzy, było to jedyne
        państwo autorytarne, które utrzymało zasadę rozdziału kościoła od
        państwa. Wszystkie pozostałe autorytaryzmy europejskie były państwami
        wyznaniowymi. Portugalia była więc unikalnym przypadkiem państwa
        autorytarnego, stojącego na straży rozdziału kościoła od państwa.
        Dopiero w 1940 r. konkordat portugalsko-watykański trochę złagodził i
        zmodyfikował istniejącą sytuację. Przykład nie jest więc najlepszy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        W nawiązaniu do mojej wcześniejszej wypowiedzi i do apelu, aby mówić
        również o naszej historii dalszej i bliższej, chcę przypomnieć historię
        najbliższą, gdyż z ostatnich kilku lat. Jest bowiem tak, że zasada
        rozdziału kościoła od państwa jest nadal zasadą obecną w konstytucji, a
        sytuacja Kościoła katolickiego jest diametralnie różna od sytuacji
        sprzed 20 lat czy 30 lat, przy tym samym przepisie konstytucyjnym.
        Problem nie leży więc w treści przepisu, lecz w jego realizacji. Nie
        bardzo wiem, dlaczego przedstawiciel pełnomocnika Konstytucji
        „Solidarności” I przedstawiciel Kościoła katolickiego chcą zrezygnować z
        przepisu, który stwarza tak dobre warunki kościołowi w Polsce.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Bardzo lubię pytania w stylu: co się za tym kryje, które to pytanie
        postawił poseł J. Jaskiemia. Dyskutujemy już kolejny tydzień na ten
        temat i wiemy, co się za tym kryje, chyba że poseł J. Jaskiernia stawia
        to pytanie na nowo. Ja mogę również postawić pytanie: co kryje się za
        oporem posła J. Jaskierni wobec tego, aby kontentować się wyłącznie
        pojęciem „niezależność ”. Ma rację poseł A. Kwaśniewski, iż kryje się za
        tym suma podejrzeń, wynikająca z historii i z nawarstwienia różnych
        doświadczeń itd. Chodzi więc o sumę wzajemnych podejrzeń. Nie wiem, co
        może się więcej kryć. Czy chodzi o podejrzenie, że kościoł |. _ — _ ma
        _—. mn we m chcą zagarnąć całkowitą władzę w Polsce? Być może chodzi o
        drugie podejrzenie, że chodzi o powrót do tego, aby kościoły wyprzeć z
        życia publicznego. Tak więc walczymy z podejrzeniami. Chodzi zatem o
        znalezienie takiego sformułowania, aby wyjść poza to i ponad to. Jeżeli
        będziemy sobie zadawać pytania w stylu, co się za tym kryje, to nigdy
        nie porozumiemy się. Miałem wrażenie, że nasza dyskusja była już
        merytoryczna. Kwestia druga. Nie mogę zgodzić się z posłem W.
        Cimoszewiczem, gdyż uważam, że najbardziej drażliwa jest próba
        jednostronnego definiowania tego, co się rozumie przez pojęcie: „swoich
        zadań”. Jeżeli poseł W. Cimoszewicz stwierdza, że rezygnuje ze
        sformułowania o zadaniach religijnych i organizacyjnych, a chce dodać
        formułę stwierdzającą, że kwestię tę definiują ustawy, to powtarzam raz
        jeszcze, iż kwestia ta jest podjęta w następnych ustępach, kiedy jest
        mowa o tym, że ustawy lub umowa międzynarodowa zdefiniują tę kwestię.
        Cały problem polega właśnie na tym, że zdefiniowanie dokonuje się w
        porozumieniu z kościołami i związkami wyznaniowymi. Natomiast
        wprowadzenie tego przepisu do tego sformułowania zakładałoby
        przekreślenie sensu następnych ustępów. Chodzi o to, że została
        sformułowana zasada konstytucyjna — zasada niezależności i autonomii.
        Jak zasada ta ma być precyzyjnie zapisana, to już kwestia ustaw czy
        umowy międzynarodowej. Dlatego też nie rozumiem tego uporu, ażeby tam,
        gdzie jest wprowadzona zasada ogólna i gdzie zdefiniowanie jest trudne,
        podważać wartość zasady ogólnej. Uwaga trzecia dotyczy propozycji posła
        J. Szymańskiego. Odmiennie jak poseł J. Szymański uważam, że usytuowanie
        zasady dotyczącej stosunków państwo-kościół w rozdziale pierwszym, jest
        właściwe. Chcę jeszcze dodać, że w dalszych poszukiwaniach kompromisowej
        formuły należy zwrócić uwagę na pozytywną formułę zaproponowaną przez
        prof. W. Osiatyńskiego. Chodzi o formułę pozytywną stwierdzającą, że
        kościoły I związki wyznaniowe nie uczestniczą w sprawowaniu —
        wykonywaniu — władzy państwowej.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Rzeczywiście jest tak, że są konstytucje, które w rozdziale pierwszym
        nie określają stosunków między państwem a kościołem. Są to jednak na
        ogół kraje, gdzie stosunki te nie są tak istotne jak w Polsce. Czynnik
        ten oraz doświadczenia z przeszłości wskazują na to, że stosunki
        państwo-kościół powinny być ujęte w zasadach ogólnych. Ponadto należy
        mieć świadomość, że problem ten i tak musi być rozstrzygnięty, na co
        zwrócił uwagę pan przewodniczący. Jeżeli kwestia, nad którą dyskutujemy,
        miałaby być uregulowana w rozdziale o prawach i wolnościach
        obywatelskich, to tylko w zakresie dotyczącym praw i wolności, a nie
        od strony stosunków między instytucjami. Dyskutowaną kwestię należy
        uregulować w rozdziale pierwszym. Ponadto chcę dodać, że popieram to, co
        mówił poseł T. Mazowiecki.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/IwinskiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Tadeusz Iwiński (SLD):</strong>
        Mam trzy krótkie uwagi. Po pierwsze, uważam, iż jest możliwość ujęcia
        dyskutowanego problemu zarówno w rozdziale pier wszym, jak w rozdziale o
        prawach i wolnościach obywatelskich. Decyzja w tej kwestii nie jest
        jednak kluczowa. Kwestia druga. W państwach, w których rola stosunków
        między państwem a kościołami jest szczególnie ważna, na ogół nie ma
        odniesienia do oddzielnej umowy międzynarodowej między danym państwem
        a Watykanem. Propozycja mówiąca o konkordacie jest więc — moim zdaniem —
        daleko idącą formą kompromisu. Należy to docenić. Uwaga trzecia to uwaga
        z pozycji osoby, która przez wiele lat zajmowała się naukowo Hiszpanią i
        Portugalią, co znalazło wyraz w publikacjach. Odnosząc się do tego, o
        czym mówił poseł T. Mazowiecki, chcę powiedzieć, że z tej samej historii
        można wyciągnąć bardzo różne wnioski. W Hiszpanii i Portugalii w różnych
        okresach — okresie Salazara i Caetano oraz okresie frankistowskim — koś-
        ciół i państwo były ze sobą bardzo zespolone. Jeden z kardynałów jeszcze
        w 1961 r. błogosławił wojska portugalskie, które udawały się do Angoli,
        aby stłumić ruch narodowowyzwoleńczy. Mówię o tym bez żadnych odniesień
        politycznych, gdyż chodzi mi tylko o pokazanie stopnia zaangażowania
        kościoła w sprawy polityczne. To zaangażowanie w Polsce jest również
        głębokie. Jeżeli z uwagi na wieloletnie doświadczenia Hiszpania i
        Portugalia przyjmują formułę separacji — oddzielenia — od państwa, to
        wydaje się, że jest to wyciągnięcie wniosków z niedobrej historii
        podobnej jak historia Polski, w której okresowo państwo blokowało
        działania kościoła, ale także — jak w przypadku Hiszpanii i Portugalii —
        kiedy to w niektórych okresach kościół nadmiernie uczestniczył w życiu
        politycznym. W moim więc przekonaniu formuła mówiąca o oddzieleniu jest
        zasadna. Jest to mądre zastosowanie się do lekcji przeszłości. Nie ma w
        tym nic nagannego.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/IkonowiczPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Piotr Ikonowicz (PPS):</strong>
        Nie odnoszę się do poziomu kompromisu, który próbuje się osiągnąć. Chcę
        prosić, aby nie dążyć do rozstrzygnięcia przed podjęciem decyzji w
        sprawie, która w mojej propozycji art. 15 określona jest w ust. 2:
        „Wszystkie kościoły, związki wyznaniowe oraz organizacje i instytucje
        o charakterze światopoglądowym podlegają na równych zasadach powszechnie
        obowiązującemu prawu. Ustawa określa jedynie zasady ich powoływania i
        funkcjonowania”. O tej kwestii mówię dlatego, że w dotychczasowej
        dyskusji przyjęto taki tryb procedowania, że zaproszono przedstawicieli
        związków zawodowych, lecz zrezygnowano z praktyki zapraszania
        przedstawicieli organizacji I instytucji o charakterze Światopoglądowym.
        Mam prośbę i wniosek formalny, aby przedstawicieli tych organizacji i
        instytucji zaprosić do dyskusji na następnym posiedzeniu Komisji. Chodzi
        bowiem o to, aby kwestii dotyczącej kościołów oraz tych organizacji i
        instytucji nie rozstrzygać przed ich wysłuchaniem.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Chcę poinformować, że wszystkie podmioty wymienione w liście, którą
        ustaliliśmy na początku prac, są zapraszane, lecz oczywiście korzystają
        z zaproszeń według własnego uznania. Uważam również, że wśród członków
        Komisji jest generalna zgoda co do pewnych kwestii zasadniczych, które
        są ujęte, choć w propozycji podkomisji. Kwestie te pojawiają się
        właściwie we wszystkich wnioskach. Jest to zasada neutralności
        światopoglądowej władz publicznych i instytucji publicznych, jest to
        również zasada równoprawności kościołów i związków wyznaniowych, a także
        autonomia i niezależność kościołów i związków wyznaniowych w działaniach
        związanych z ich naturalną misją, a więc przede wszystkim misją
        religijną, ale także misją społeczną. Kolejna niekwestionowana norma to
        zasada, że stosunki między państwem a kościołem mogą być określane przez
        ustawy. Mogą być także zawierane porozumienia międzynarodowe, które w
        przypadku Watykanu nazywają się konkordatem. Właściwie w żadnej
        wypowiedzi nie była również kwestionowana zasada współdziałania dla
        realizacji praw człowieka i potrzeb obywateli, państwa oraz kościołów i
        związków wyznaniowych. Gdyby więc patrzeć na wizję tego, co proponuje
        Komisja Konstytucyjna, oraz na to, co płynie również ze strony
        kościołów, to wydaje się, że zasadniczego sporu nie ma. Jeżeli chcemy
        omawianą kwestię traktować w sposób prostolinijny, bez podtekstów i
        podejrzliwości, to przyjąć można, że chodzi o to, aby z jednej strony
        wolności zostały zagwarantowane kościołom i obywatelom, i aby społeczna
        misja kościołów mogła być zagwarantowana. Z drugiej natomiast strony
        chodzi o to, aby państwo i jego instytucje nie były ideologizowane i
        wikłane w kwestie światopoglądowe. Wydaje się, że trzon wizji państwa,
        nad którą pracujemy i która powinna znaleźć się w konstytucji HI
        Rzeczypospolitej, jest niemal identyczny w wypowiedziach wszystkich
        stron, które brały udział w dyskusji. Jest również druga strona, która
        nas dzieli. Wyraża Się ona -w sporze o sformułowania. Występują również
        stereotypy i podejrzenia, które są w nas. Apeluję więc, abyśmy dla dobra
        całej kwestii uciekli od skojarzeń 1 stereotypów. Są one bowiem
        największą przeszkodą. Racja jest taka, aby pytać: co stoi za przepisem
        o rozdzieleniu i co stoi za przepisem wykluczającym rozdzielenie. Prawdą
        jest oczywiście, że można używać argumentu hiszpańsko-portugalskiego —
        skoro oni mogli, to dlaczego my nie możemy — Obrady w dniu 23.02.1995 r.
        (21) mp 7 zmłaą Ta ale nie sposób nie wiedzieć, że tamte czterdzieści
        lat współdziałania kościoła było właśnie z państwem, a u nas kościół był
        w konflikcie z państwem. Jeżeli mówimy więc o odreagowywaniu pewnych
        konkretnych sytuacji historycznych, to mamy do czynienia z różnymi
        stanami w Hiszpanii i Portugalii, a z innym stanem w Polsce. Apeluję
        więc do wszystkich, abyśmy potrafili uciec od skojarzeń, które
        oczywiście są naszym dziedzictwem, ale nie powinny stać się zmorą tej
        dyskusji, która dotyczy art. 15. Kwestia ostatnia. Chciałbym, abyśmy
        jako Komisja Konstytucyjna mieli pełną świadomość, że określone
        rozwiązania proponujemy Zgromadzeniu Narodcwemu, a następnie będziemy je
        proponować społeczeństwu. Są przepisy, które nie są dyskusyjne i są
        przepisy, które grożą istotnymi podziałami społecznymi. Nie można być
        naiwnym i sądzić, że my całą tę dyskusję przeniesiemy do opinii
        publicznej, że wszystko wyjaśnimy i że społeczeństwo będzie dobrze
        poinformowane o szczegółach. Tak nie będzie. Pojawi się natomiast znowu
        stereotyp: jedni są za rozdziałem, drudzy przeciwko, jedni są za
        kościołem, drudzy przeciwko, jedni chcą państwa wyznaniowego, drudzy
        chcą państwa Świeckiego. Gdyby okazało się, że nie potrafimy znaleźć
        kompromisu, nieuchronnie będziemy zmierzać do tego rodzaju scenariusza —
        scenariusza fatalnego nie tylko z punktu widzenia celu naszych prac,
        czyli konstytucji, ale również z punktu widzenia całej tkanki społecznej
        w Polsce. Dlatego też wydaje mi się, że tak długo jak możerny tutaj
        szukać rozwiązań łączących, a nie dzielących, to nie wolno rezygnować z
        tej szansy. Na zakończenie debaty merytorycznej mam więc następującą
        propozycję. Zwracam się szczególnie do członków Komisji wysoko
        umocowanych w swoich klubach, aby wszystkie wątpliwości i propozycje
        przepisów art. 15 przedstawili właściwym gremiom po to, aby mieć
        pewność, jakie są reakcje w klubach, a zwłaszcza dla jakich rozwiązań
        jest największe poparcie. Ponadto rozumiem, że wraz z senatorem S.
        Pastuszką moglibyśrny być upoważnieni do prowadzenia w czasie
        najbliższego posiedzenia Sejmu rozmów z przedstawicielami klubów na
        temat opinii, wokół którego rozwiązania może się rysować kompromis.
        Równocześnie bylibyśmy upoważnieni do rozmów z przedstawicielami
        kościołów, aby szukać porozumienia. Wówczas moglibyśmy za dwa tygodnie
        zaproponować rozwiązanie, które w naszym najlepszym przekonaniu mogłoby
        być kompromisowe. Zwracam również uwagę na propozycje ekspertów, które w
        dużej mierze wykorzystują dorobek naszych dyskusji. Mówią one m.in.
        wprost o tym, o czym trafnie mówił poseł J. Jaskiernia. Wskazał,
        dlaczego obawiamy się pojęcia „rozdzielenie”, a następnie — nie używając
        tego pojęcia — określił ten stan, o który nam chodzi. Należy więc
        poszukiwać tego typu jaśniejszych określeń jak na przykład niebrani
        przez kościoły udziału we władzy publicznej przy jednoczesnym
        współdziałaniu w tych kwestiach, które służą realizacji praw człowieka
        i potrzeb obywateli. Tak więc stan obecny to już kilkanaście propozycji
        brzmienia art. 15. Gdyby ktoś jeszcze chciał zgłosić propozycję, to
        przyjmujemy, że będzie to możliwe jeszcze dzisiaj. Chodzi bowiem o to,
        aby w pewnym momencie mieć stan taki, że dalsze wnioski już nie będą
        napływać. Chcę również mieć zgodę Komisji na to, aby podczas posiedzenia
        Sejmu w przyszłym tygodniu móc przeprowadzić konsultację ze wszystkimi
        klubami w celu uzyskania opinii, wokół którego wniosku rysuje się
        kompromis. Na ten temat przeprowadzimy również konsultacje z
        przedstawicielami kościołów. Korzystając szczególnie z obecności
        członków Komisji, którzy patrzą bardziej radykalnie na sprawę, o której
        dyskutujemy, chcę powiedzieć, że w dyskutowanej kwestii kompromisu nie
        należy traktować jako dowodu słabości. Tak naprawdę będzie to dowód
        naszej mądrości. Tyle uwag na temat art. 15. Do rozdziału pierwszego
        zostały zgłoszone również propozycje nowych artykułów. Przypominam, że
        przeprowadziliśmy generalną debatę na temat zasady społeczeństwa
        obywatelskiego. Kwestia ta jest zawarta w trzech przedłożonych
        propozycjach. Jest to propozycja art. Sa zaproponowana przez posła J.
        Jaskiernię oraz przez przedstawicieli Prezydenta RP: prof. A.
        Rzeplińskiego i prof. M. Pietrzaka. Ponadto propozycję brzmienia nowego
        art. 10a przedłożył poseł J. Ciemniewski. Czy są pytania do
        wnioskodawców nowych artykułów?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Janusz Szymański (UP):</strong>
        Chcę zapytać, czy wnioskodawcy nie uważają, że rozdział pierwszy nie
        jest najbardziej właściwy do zamieszczania tego rodzaju przepisów, które
        chyba powinny znaleźć się w rozdziale drugim dotyczącym praw człowieka?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Kwestia objęcia moją propozycją art. 5a była przedmiotem debaty.
        Przypomnę jednak jej brzmienie: „Rzeczpospolita Polska gwarantuje
        wolność tworzenia i działania związków zawodowych, stowarzyszeń, ruchów
        obywatelskich, fundacji i innych dowolnych zrzeszeń działających na
        podstawie prawa w celu realizacji interesów oraz wyrażania opinii
        obywateli”. Problem usytuowania art. Sa, jak i każdej innej normy, jest
        kwestią decyzji naszej Komisji. Przed chwilą było podnoszone zagadnienie
        usytuowania normy dotyczącej stosunków państwo—kościół. Rozdział
        pierwszy to zasady ustroju, a więc szczególne normy, które określają
        charakter państwa i są — niejako — wyjęte przed nawias rozwiązań
        szczegółowych. Proszę zwrócić uwagę, że w art. 5 uregulowaliśmy zasadę
        pluralizmu politycznego wyrażającą się przede wszystkim w wolności
        działania partii politycznych. Jest to zasada będąca elementem wolności
        obywatelskich, a przede wszystkim jest to zasada szczególnie
        kwalifikująca wymiar państwa. Taka intencja jest również wyrażona w
        mojej propozycji art. 5a. Chodzi bowiem o to, czy chcemy wyeksponować
        zasadę, umownie określoną jako zasada społeczeństwa obywatelskiego. Mimo
        że w dalszych szczegółowych przepisach jest mowa o związkach zawodowych,
        organizacjach i stowarzyszeniach, to w art. 5a chodzi o pokazanie pewnej
        nowej jakości, która w ustroju Rzeczypospolitej Polskiej ma się pojawić.
        Tak więc z jednej strony chodzi o pluralizm polityczny — art. 5, a z
        drugiej strony gwarancję wolności tworzenia tego, co się składa na
        aktywność obywatelską w zakresie realizacji interesów oraz wyrażania
        opinii obywateli. Sądzę również, że tego typu norma będzie sprzyjała
        interpretacji konstytucji. Wielokrotnie bowiem wskazywano, że normy
        zawarte w rozdziale pierwszym sprzyjają interpretacji intencji
        ustawodawcy konstytucyjnego. Z, tych motywacji zaproponowałem art. Sa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Do wypowiedzi posła J. Jaskierni chcę dodać jeszcze jedną uwagę. Rysuje
        się wizja, że w zasadach ustroju widoczne są cztery — spośród pięciu —
        elementy społeczeństwa obywatelskiego. Są to: partie polityczne, koś-
        cioły i związki wyznaniowe, własność prywatna oraz wolność działalności
        gospodarczej. Bardzo ważnym elermentem są fundacje i dobrowolne
        zrzeszenia stosunkowo najsłabiej osadzone w prawie polskim.
        Zakotwiczenie tych instytucji w konstytucji miałoby więc znaczenie
        przełomowe. Należy ponadto dodać, że jest to dziedzictwo „Solidamości”
        nie zakwestionowane, a wręcz przeciwnie, zaakceptowane przez wszystkie
        siły polityczne i społeczne po 1989 r. Jest to kwestia, która właś-
        ciwie wszystkich łączy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Bardzo mocno podpisuję się pod wypowiedziami posła J. Jaskierni i prof.
        W. Osiatyńskiego, gdyż nie ulega wątpliwości, że jest to jedna z
        fundamentalnych zasad ustrojowych. Można oczywiście dyskutować nad
        szczegółową treścią, lecz sama zasada społeczeństwa obywatelskiego
        powinna na pewno znaleźć się w rozdziale pierwszym. Przypomnę jeszcze,
        że druga propozycja art. 5a zgłoszona przez przedstawicieli Prezydenta
        RP, prof. A. Rzeplińskiego i prof. M. Pietrzaka ma następujące
        brzmienie: „Rzeczpospolita Polska gwarantuje wolność tworzenia i
        działania organizacji pozarządowych służących realizacji potrzeb
        obywateli działających w ramach porządku konstytucyjnego”. Trzecią
        propozycję — art. 10a — przedłożył poseł J. Ciemniewski.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Przypomnę, że moja propozycja ma następujące brzmienie: „RZzecz p - Z R
        W ET EZ EE AE ET EEEE RAA R APE O CM pospolita Polska chroni dobrowolną
        działalność indywidualną i zbiorową obywateli w zakresie realizacji
        celów publicznych oraz ogranicza społeczne i gospodarcze funkcje państwa
        do działań niezbędnych dla wypełnienia zadań władzy publicznej”. Jest to
        próba sformułowania dwóch kwestii w jednym przepisie. Jest to kwestia
        społeczeństwa obywatelskiego ujęta w sposób uogólniony i bez wymieniania
        szczegółowych elementów. Kwestia druga to zasada pomocniczości państwa.
        Usytuowanie mojej propozycji jest także kwestią do dyskusji. Niemniej
        jednak poszukiwanie konstytucyjnego miejsca dla zasady pomocniczości
        państwa powinno doprowadzić do jej usytuowania w rozdziale o zasadach
        ustroju, a nie w rozdziale o prawach obywatelskich. Chcę jeszcze dodać,
        iż uważam, że moja propozycja podejmuje — generalnie rzecz biorąc — tę
        samą problematykę, którą podejmuje propozycja posła J. Jaskierni i
        przedstawicieli Prezydenta RP, prof. A. Rzeplińskiego i prof. M.
        Pietrzaka.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Uważam, że w propozycji brzmienia art. 10a są jednak zawarte dwie dość
        różne materie. Jest to zasada społeczeństwa obywatelskiego oraz zasada
        subsydiamości. Zasady te łączą się ze sobą, lecz jednocześnie
        sugerowałbym, aby wnioskodawca rozważył, czy nie powinny to być dwa
        odrębne artykuły.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/IkonowiczPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Piotr Ikonowicz (PPS):</strong>
        Jeżeli chodzi o propozycję art. 5a, to odpowiada mi wersja posła J.
        Jaskierni. Uważam, że konstytucyjne zagwarantowanie prawa do zrzeszania
        się w związki zawodowe jest tak ważnym dorobkiem „Solidarności”, że
        byłbym zdziwiony, gdybyśmy mieli z niego zrezygnować. Jeżeli chodzi o
        art. 10a, to nie sposób oprzeć się wrażeniu, że w momencie gdy
        kształtuje się zasada oddzielności państwa od kościoła, raptem pojawiają
        się propozycje ograniczenia roli państwa. Apeluję więc do posła J.
        Ciemniewskiego o wycofanie tej poprawki, ponieważ zawiera ona bardzo
        określoną i zdefiniowaną politycznie zasadę traktowania państwa jako
        państwa „nocnego stróża . Jest to znana doktryna, która jest
        przypisywana ugrupowaniom neoliberalnym i prawicowym. Moim zdaniem tego
        typu przepis byłby trudny do utrzymania w momencie kiedy rządzi lewica.
        Przepis ten musiałby więc być zmieniany wraz z wyborami, ponieważ
        interwencyjne i społeczne funkcje państwa to domena polityki partii
        lewicowych. Prawica ma pogląd odmienny. Rozstrzyganie tego typu kwestii
        w konstytucji narażałoby więc tę konstytucję na ciągłe fluktuacje.
        Jeżeli chcemy trwałej konstytucji, to nie wpisujmy do niej artykułów,
        które nadają jej charakter skażony jedną ideologią. W tym przypadku jest
        to ideologia neoliberalna. Apeluję więc o wycofanie propozycji art. 10a,
        gdyż jest to konfliktowanie, a nie poszukiwanie kompromisu. Obrady w
        dniu 23.02.1995 r. (21
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Zgadzam się z tym, co mówił prof. P. Samecki, gdyż również uważam, że w
        art. 10a ujęte są dwie różne kwestie, wymagające rozdzielenia w dwóch
        przepisach. Ponadto mam jednak wątpliwości, czy to rzeczywiście jest
        zasada pomocniczości. Wydaje się, że jest to raczej zasada radykalnego
        państwa liberalnego. Jeżeli bowiem uznać, że jest to zasada
        pomocniczości, to powinny być wskazane również takie instytucje, które
        powinny przed państwem działać jako te, które wypełniają różne zadania
        służące dobru wspólnemu. Mogłaby to być formuła stwierdzająca, że władze
        publiczne powinny podejmować tylko takie działania gospodarcze, których
        nie mogą samodzielnie prowadzić niepaństwowe podmioty gospodarcze i
        zrzeszenia, Byłaby to formuła ujmująca tę kwestię od strony pozytywnej.
        Zaproponowana formuła to swego rodzaju gilotyna obcinająca wszystko to,
        co jest pozytywne w zasadzie pomocniczości. Eksponowane jest to, co jest
        negatywne, a więc powstrzymanie się państwa od działań, które
        przekraczają władztwo publiczne.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy ktoś chciałby jeszcze zabrać głos w kwestiach związanych z
        rozdziałem pierwszym? Nie ma. Na tym wyczerpaliśmy więc punkt porządku
        dziennego obejmujący dyskusję merytoryczną nad projektem konstytucji.
        Przechodzimy do kwesti projektu harmonogramu posiedzeń Komisji w LI
        kwartale. W związku z tym projektem otrzymałem wniosek poseł L. Błądek 1
        senatora J. Orzechowskiego, w którym proponuje się, aby posiedzenia
        Komisji odbywały się raz w miesiącu. Apeluję jednak do członków
        Komisji, aby utrzymać rytm prac polegający na odbywaniu dwóch posiedzeń
        w miesiącu. Zmniejszenie liczby posiedzeń mogłoby stymulować do
        ograniczenia dyskusji, a do tego nie chciałbym dopuścić. Ponadto, jeżeli
        chcemy w wyobrażalnym terminie posuwać naprzód nasze prace, to cykl
        polegający na odbywaniu dwóch posiedzeń w miesiącu jest istotny.
        Przedłożony projekt harmonogramu nie koliduje z posiedzeniami Sejmu i
        Senatu. W praktyce pojawiają się jednak kolizje z terminami posiedzeń
        komisji, zwłaszcza sejmowych. Marszałkowie izb zwrócili się do
        przewodniczących komisji, aby kolizji nie było. W tej sytuacji trudno
        zrobić coś więcej. Proszę również pamiętać, że przygotowanie i
        uchwalenie konstytucji jest priorytetowym zadaniem tego parlamentu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Senator Jerzy Madej (KD):</strong>
        Sytuacja polityczna jest skomplikowana, ale konstytucja jest tym
        argumentem, który jest przytaczany przy każdej okazji jako przykład
        słabości pracy parlamentu, który nie jest w stanie przygotować i
        uchwalić projektu. W moim przekonaniu są problemy ważne i ważniejsze.
        Konstytucja jest kwestią bardzo ważną, choć może nie najważniejszą. Mam
        również wniosek organizacyjny, aby członkowie Komisji Konstytucyjnej
        zawiesili działalność w więcej niż jednej komisji sejmowej lub
        senackiej.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Proponuję, aby każdy z członków Komisji rozpatrzył propozycję senatora
        J. Madeja. Ma ona swoją logikę. Przypominam również, że w przypadku
        zasadniczych trudności z pogodzeniem innych obowiązków z uczestnictwem w
        Komisji Konstytucyjnej, możliwe jest zrezygnowanie z członkostwa i
        wówczas dany klub deleguje innego parlamentarzystę. Chcę również
        przypomnieć, że byliśmy już oskarżani o przyspieszanie prac, ale i o
        spowalnianie prac. Nikt nie chce natomiast podkreślić, że ciężko
        pracujemy i to w rytmie, który jest bardzo wyczerpujący dla członków
        Komisji, obsługi oraz ekspertów.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/BorowikWojciech.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Wojciech Borowik (UP):</strong>
        Uważam, że należy utrzymać rytm prac polegający na odbywaniu dwóch
        posiedzeń w miesiącu, lecz aby były to posiedzenia dwudniowe, a nie
        trzydniowe. Posiedzenia dwudniowe dają szansę w miarę normalnego
        funkcjonowania w innej komisji, której z reguły jesteśmy członkami.
        Druga moja propozycja organizacyjna to prośba o ustalenie stałych godzin
        przeprowadzania głosowań.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wraz z zastępcą przewodniczącego Komisji rozpatrzymy propozycję posła W.
        Borowika. Wydaje się, że zasługuje ona na przyjęcie. Rozumiem także, iż
        proponowane dni obrad to wtorek i Środa, ale już od godz. 9 do godz. 19.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Popieram propozycję posła W. Borowika.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy ktoś chciałby zabrać głos w sprawach różnych przed zamknięciem
        posiedzenia? Nie ma. Dziękuję wszystkim osobom uczestniczącym w
        posiedzeniu. Zamykam posiedzenie.
      </p>
    </div>
  </div>
</div>

<Footer />
