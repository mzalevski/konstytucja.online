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
  <title>Dzień 3 - Biuletyn nr 13</title>
</svelte:head>

<Nav segment={'info'} />

<svelte:window bind:scrollY={yAxisPosition} />

{#if yAxisPosition > 300}
  <ToTheTopBtn/>
{/if}

<div in:fly={{ y: 100, duration: 1000 }}>
  <!--<hr><p class="page-break">strona 3</p><hr>-->


  <div class="header">
  <div>
    <h3>Obrady w dniu 9 lutego 1995 r.</h3>
      <h5>
    <a
      href="https://drive.google.com/file/d/1XvZx52VEVrbhFSi9n5VkbAg045EiGrck/view?usp=sharing"
      rel="nofollow"
      target="_blank">
      ORYGINAŁ BIULETYNU
    </a>
  </h5>
  </div>
      <div class="small-article-nav">
    <a rel="prefetch" href="/komisja/13/2.2">
      <img src="images/angle-left-solid.svg" alt="" />
    </a>
    <a rel="prefetch" href="/komisja/13/prasa">
      <img src="images/angle-right-solid.svg" alt="" />
    </a>
</div>
  </div>
  <!--<hr><p class="page-break">strona 63</p><hr>-->
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
    Wznawiam obrady Komisji Konstytucyjnej Zgromadzenia Narodowego. Witam
    wszystkich obecnych. Zgodnie z wczorajszymi ustaleniami powinniśmy w
    pierwszej kolejności przeprowadzić głosowania nad kwestiami, które zostały
    przedyskutowane wczoraj. Następnie miałaby miejsce dyskusja nad dalszymi
    artykułami rozdziału pierwszego. Członkowie Komisji otrzymali tekst
    zawierający efekty dotychczasowych prac. Jest to 6 artykułów projektu.
    Przygotowane zostało również zestawienie propozycji poprawek zgłoszonych
    artykułów: 7, 819. Członkowie Komisji otrzymali również — ponownie — karty
    do głosowania oraz protokół dotyczący głosowania w dniu 26 stycznia. Z
    protokołu wynika, że pytanie 5 dotyczyło prezydenta jako gwaranta ciągłości
    władzy, a nie władzy wykonawczej, o czym dyskutowaliśmy wczoraj. Przypomnę,
    że za pozycją prezydenta jako gwaranta ciągłości władzy oddano 40 głosów. W
    związku z tym uwaga prof. P. Sarneckiego do art. 113 była trafna. Należy
    więc skreślić wyraz: „wykonawczej .
      </p>
    </div>

  <!--<hr><p class="page-break">strona 64</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PietrzakMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:</strong>
    Dokonana już po posiedzeniu Komisji analiza treści przyjętych artykułów
    zrodziła pewne wątpliwości natury terminologicznej w odniesieniu do artykułu
    dotyczącego partii politycznych i zgłoszonego przez poseł K. Łybacką. Jego
    brzmienie jest następujące: „Kształtowanie i wyrażanie woli obywateli w
    zakresie realizacji władzy zwierzchniej Narodu odbywa się za pośrednictwem
    jawnie finansowanych partii politycznych, działających w ramach porządku
    konstytucyjnego Rzeczypospolitej Polskiej”. W związku z takim brzmieniem
    artykułu dotyczącego partii politycznych, jako bezpartyjny od urodzenia
    pytam, czy ksztąłtowanie i wyrażanie woli politycznej w zakresie realizacji
    władzy zwierzchniej narodu odbywa się wyłącznie za pośrednictwem partii
    politycznych, czy też nie. Uważam, że w przyjętej formule jest pewna
    niezręczność, która może rodzić zaniepokojenie bezpartyjnych, którzy chcą
    kształtować i wyrażać wolę obywatelską, a przyjęty przepis mógłby wskazywać,
    że nie mogą tego czynić. Wydaje się, że przyczyną jest fakt, iż w omawianym
    artykule połączono kilka myśli. Zatarły się relacje i zagubiony został sens
    poszczególnych części składowych zdania tworzącego przepis. Należy przyjąć,
    że konstytucja powinna być budowana ze zdań pojedynczych, jasnych i nie
    budzących wątpliwości. Nadmiar czy też wielość myśli ujmowanych w jednym
    zdaniu mogą budzić wątpliwości.
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
    Przypomnę jednak, że nad brzmieniem artykułu dotyczącego partii
    politycznych prowadziliśmy bardzo obszerną debatę. Dzisiaj okazuje się, że
    właściwie należałoby powrócić do tej debaty. W związku z tym sugeruję, aby
    przyjąć uwagę prof. M. Pietrzaka, lecz powrócić do tej kwestii po
    zakończeniu debaty nad rozdziałem pierwszym. Moglibyśmy wówczas rozważyć
    propozycje bardziej precyzyjnego przepisu, lecz w duchu zgodnym z przyjętym
    brzmieniem, które jednak trafnie oddaje treść debaty i poglądy większości
    Komisji. Przypominam również, że po dyskusji zdecydowaliśmy się na
    połączenie kilku kwestii merytorycznych w jednym przepisie. Przede wszystkim
    zdecydowaliśmy o przyjęciu przepisu o partiach politycznych, gdyż byli
    zwolennicy skreślenia tego typu artykułu. Ponadto przeważył pogląd o
    potrzebie ujęcia funkcjonalnego, a więc ujęcia wskazującego na to, że partie
    służą wyrażaniu opinii i kształtowaniu woli obywateli. W dyskutowanym
    artykule znalazły się również dwie dalsze myśli: jawność finansowania oraz
    wymóg działania zgodnie z porządkiem konstytucyjnym. Nie chcę wszczynać
    dyskusji, ale już widzę kilka zgłoszeń członków Komisji, którzy chcą zabrać
    głos.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Rzeczywiście jesteśmy w kłopotliwej sytuacji, ponieważ dyskutowany przepis
    został przyjęty wyraźną większością głosów. Wydaje się jednak, że
    popełniliśmy błąd. Można go jednak uniknąć przez rekonstrukcję zdania
    tworzącego dyskutowany artykuł. Sądzę również, że należy to uczynić po
    zakończeniu prac nad rozdziałem pierwszym.
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
    Proponuję więc, aby członkowie Komisji, którzy mają propozycje
    rekonstrukcji omawianego artykułu, przedłożyli je na piśmie. Rozpatrzymy je
    po zakończeniu prac nad rozdziałem pierwszym.
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
    Zgadzam się z koncepcją, aby do sformułowania przepisu o partiach
    politycznych powrócić po zakończeniu prac nad rozdziałem pierwszym.
    Zamierzam więc przedłożyć wniosek o reasumpcję głosowania nad dyskutowanym
    art. 5 dotyczącym partii politycznych.
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
    Właściwie to Świadomie zawarłam pojęcie użyte w art. 5 i zapożyczone od
    prof. W. Osiatyńskiego. Uważam, że sprecyzowanie propozycji zgłoszonych
    przez prof. M. Pietrzaka może nastąpić w rozdziale dotyczącym wolności i
    praw obywatelskich. Będzie wówczas możliwe wyeliminowanie sytuacji, że
    realizacja woli obywateli następuje tylko poprzez partie polityczne.
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
    ”): Uważam, że dyskutowany artykuł wyraźnie ogranicza prawa człowieka do
    występowania w życiu publicznym i do dążenia do realizacji władzy
    zwierzchniej narodu. Życia nie można postrzegać tylko poprzez partie
    polityczne. Przypominam również — nie po raz pierwszy — że przedłożyłam w
    charakterze poprawek przepisy całego rozdziału pierwszego z projektu
    senackiego, w którym znajduje się artykuł dotyczący partii politycznych.
    Uważam również, że dyskutowanego artykułu nie uda się naprawić przepisami
    zawartymi w rozdziale o wolnościach i prawach obywatelskich. Zasady mają
    bowiem swoje znaczenie w konstytucji. W konkluzji chcę przypomnieć brzmienie
    arprojektu senackiego, który dotyczy partii politycznych: „Partie
    polityczne, ruchy obywatelskie i inne ugrupowania obywateli działające w
    oparciu o zasadę pluralizmu politycznego są formą dobrowolnego i równego
    uczestnictwa politycznego w kształtowaniu i wyrażaniu woli obywateli oraz
    wpływania na politykę państwa .
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
    Brzmienie przypomniane przez senator A. Grześkowiak było przedmiotem
    głosowania. Poparło je 4 członków Komisji. Przeciwnego zdania było 33
    członków Komisji, przy 3 wstrzymujących się. Głosowaliśmy również nad innymi
    wariantami, wśród których był również wariant przygotowany przez podkomisję
    podstaw ustroju politycznego i społeczno-gospodarczego.
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
    W ramach troski o szacunek do samego siebie chcę przeprosić poseł K.
    Łybacką i pozostałych członków Komisji, gdyż formułując dyskutowany artykuł
    popełniłem błąd. Artykuł ten jest sprzeczny z moją intencją i logiką,
    Chodziło mi bowiem o to, aby stworzyć jak najszersze warunki do tworzenia i
    funkcjonowania tzw. społeczeństwa obywatelskiego, a nie dla monopolu parti.
    Przychylam się również do koncepcji, aby do kwestii tej powrócić po
    zakończeniu prac nad rozdziałem pierwszym.
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
    Ponieważ zgłoszony został formalny wniosek o reasumpcję głosowania,
    przedstawię wstępną wersję zmodyfikowanego art. 5 przedłożoną na piśmie
    przez posła W. Cimoszewicza. Jej brzmienie jest następujące: „Jawnie
    finansowane partie polityczne działające w ramach porządku konstytucyjnego
    Rzeczypospolitej Polskiej służą kształtowaniu i wyrażaniu woli obywateli
    urzeczywistniających władzę zwierzchnią Narodu”. Jeżeli są dalsze wnioski
    modyfikujące przyjęty art. 5, to proszę o ich składanie. Będą one
    przedmiotem decyzji Komisji po zakończeniu prac nad rozdziałem pierwszym.
    Przechodzimy do głosowań nad zgłoszonymi propozycjami artykułów: 7, 819. W
    pierwszej kolejności odniesiemy się do propozycji dotyczących art. 7
    obejmującego zasadę legalizmu. Zgłoszono 6 propozycji, spośród których
    najobszerniejsza treściowo jest propozycja posła R. Grodzickiego. Ponadto
    prof. S$. Gebethner zgłosił propozycję dodania nowego artykułu po art. 7.
    Kolejność głosowania będzie zgodna z kolejnością umieszczenia wniosków w
    zestawieniu poprawek, które otrzymali członkowie Komisji. Przypominam, że
    zgodnie z przyjętą zasadą wnioski, które otrzymają więcej głosów
    popierających niż przeciwnych, przechodzą do drugiej tury głosowań, w
    trakcie której wybrany będzie wariant cieszący się największym poparciem
    członków Komisji. Czy wnioskodawcy przedłożonych propozycji chcieliby
    dokonać zmian lub uzupełnień w swoich wnioskach?
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
    Chcę przedłożyć autopoprawkę do ust. 2 mojej propozycji. Nowe brzmienie
    jest następujące: „Wszystkie organy władzy publicznej działają na podstawie
    i w granicach przepisów prawa”.
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
    Proponuję: „,,...l w granicach prawa”.
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
    Przyjmuję zmianę redakcyjną posła J. Szymańskiego. Przechodzimy do
    głosowania. Jako pierwsza głosowaniu będzie poddana propozycja podkomisji,
    która brzmi: „Wszystkie organy władzy publicznej działają na podstawie i w
    granicach prawa”. Poddaję pod głosowanie wniosek o przyjęcie art. 7 w
    brzmieniu zaproponowanym przez podkomisję. Stwierdzam, że w głosowaniu
    wniosek uzyskał 24 głosy popierające i 6 przeciwnych, przy 4 wstrzymujących
    się. Poddaję pod głosowanie wniosek o przyjęcie art. 7 w
    następującym brzmieniu zaproponowanym przez senator A. Grześkowiak:
    „Wszystkie organy Państwa są podporządkowane Konstytucji i wypełniają swoje
    uprawnienia w granicach w niej przewidzianych”. Stwierdzam, że w głosowaniu
    wniosek uzyskał 3 głosy popierające, 24 głosy przeciwne, przy 5
    wstrzymujących się. Poddaję pod głosowanie wniosek o przyjęcie art. 7 w
    następującym brzmieniu, zaproponowanym przez senatora P. Andrzejewskiego:
    „Konstytucja jest najwyższym źródłem stanowionego prawa w Rzeczypospolitej
    Polskiej. Władza w Państwie jest sprawowana wyłącznie na zasadach i w
    granicach prawa”. Stwierdzam, że w głosowaniu wniosek uzyskał 3 głosy
    popierające, 23 głosy przeciwne, przy 6 wstrzymujących się. Przechodzimy do
    głosowania nad poprawką 4, której autorami są przedstawiciele Prezydenta RP:
    prof. M. Pietrzak, prof. A. Rzepliński i dr W. Kulesza.
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
    Przepraszam, panie przewodniczący, ale chciałbym zaproponować modyfikację
    brzmienia tej poprawki. Ust. 2 zostałby uzupełniony dodaniem zwrotu: ,,...1
    nie jest to sprzeczne z dobrem publicznym”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PietrzakMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:</strong>
    Pojęcie „dobra publicznego” jako mało precyzyjne prawniczo powinno raczej
    pozostać poza przepisami prawa.
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
    Poprawka nr 4 zostanie więc poddana głosowaniu w brzmieniu przedstawionym
    przez wnioskodawców. Poddaję pod głosowanie wniosek o przyjęcie art. J w
    następującym brzmieniu zaproponowanym przez przedstawicieli Prezydenta RP:
    „Ust. 1. Wszystkie organy władzy publicznej działają na podstawie, w
    granicach i formach określonych przez prawo. Ust. 2. Każdy obywatel ma prawo
    czynić to, co nie jest przez ustawę zabronione i nie może być zmuszany do
    czynienia tego, czego ustawa nie nakazuje”. Stwierdzam, że w głosowaniu
    wniosek uzyskał] głosów popierających, 20 głosów przeciwnych, przy 7
    wstrzymujących się. Przechodzimy do poprawki nr 5, której brzmienie
    przedłożył poseł R. Grodzicki. Po uwzględnieniu autopoprawki propozycja ma
    następujące brzmienie: „Ust. 1. Przestrzeganie Konstytucji i praw
    Rzeczypospolitej Polskiej jest podstawowym obowiązkiem każdego organu
    Państwa i samorządu terytorialnego lub innej władzy publicznej. Ust. 2.
    Wszystkie organy władzy publicznej działają na podstawie i w granicach
    przepisów prawa. Ust. 3. Akty prawne organów władzy publicznej, z których
    wynikają prawa I obowiązki obywateli, mają moc obowiązującą tylko wtedy,
    kiedy wydane zostały z upoważnienia ustawy i z powołaniem się na nią”. Poddaję pod głosowanie poprawkę nr 5 przedłożoną przez posła R.
    Grodzickiego. Stwierdzam, że w głosowaniu wniosek uzyskał 19 głosów
    popierających, 9 głosów przeciwnych, przy 6 wstrzymujących się. Spośród
    pięciu przegłosowanych wniosków dwa uzyskały więcej głosów popierających niż
    przeciwnych. Są to wnioski: podkomisji oraz posła R. Grodzickiego. Za chwilę
    przeprowadzimy więc głosowanie, które rozstrzygnie o wyborze jednego z nich.
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
    Proponuję skorygowanie poprawki posła R. Grodzickiego, gdyż sugeruje ona przeciwstawienie państwa i samorządu terytorialnego.
    Przeważa pogląd, że samorząd to także władza państwa, w tym sensie, że jest
    władzą państwa polskiego. Proponuję więc w ust. 1 zwrot: „każdego organu
    władzy publicznej .
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
    Przyjmuję poprawkę prof. P. Sarneckiego.
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
    Proponuję skreślenie wyrazów: „każdego organu .
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
    Przyjmuję poprawkę posła J. Zdrady. Ponadto chcę wnieść autopoprawkę do
    ust. 3, co zasugerował mi prof. L. Wiśniewski. Zmodyfikowany fragment brzmi:
    „dotyczące wolności, praw”.
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
    Uważam, że przedłożony ust. 3 podważa zasadę konstytucjonalizmu, nad
    którą dyskutowaliśmy wczoraj. Zasada ta przewiduje, że akty władzy
    publicznej, które dotyczą wolności lub praw obywateli mogą wynikać wyłącznie
    z konstytucji, a nie z ustawy. Zgodnie z zasadą konstytucjonalizmu prawa i
    wolności obywatelskie stoją ponad ustawą. Ustawodawca nie może „mieszać” w prawach i wolnościach.</p>
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
    Uważam, że prof. W. Osiatyński ma rację. Prawa i wolności obywatelskie
    mogą być określone w konstytucji lub ustawie. Dobrze byłoby, aby była to
    ustawa organiczna. Uważam ponadto, że ust. 3 działa przesądzająco dla
    rozdziału o źródłach prawa. Nie jest to właściwe rozwiązanie.
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
    W ust. 3 poprawki posła R. Grodzickiego chodzi o akty
    stosowania prawa. Można zgodzić się z tezą prof. W. Osiatyńskiego i senator
    A. Grześkowiak, iż rzeczywiście prawa, wolności i obowiązki są regulowane w
    konstytucji. Natomiast konkretne orzekanie wobec obywatela nie może być
    stosowane na podstawie tak ogólnych przepisów konstytucji. Można powoływać
    się łącznie na konstytucję i ustawy, ale formy prawne, do których odsyła
    ust. 3, muszą być ujęte w ustawie. Posiedzenia Komisji Konstytucyjnej ZN
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
    Muszę jednak przypomnieć, że pracujemy nad przepisami rozdziału o zasadach
    ustroju. Uważam więc, że konieczna jest pewna generalizacja i ogólność
    sformułtego rozdziału. W przypadku rozdziałów dotyczących poszczególnych
    organów i instytucji prawnych konieczne będą przepisy bardziej szczegółowe.
    Proszę również pamiętać, że norma, która uzyskała największe poparcie,
    stanowi, że wszystkie organy władzy publicznej działają na podstawie i w
    granicach prawa. Jest to właśnie sformułowanie o stopniu ogólności właściwym
    dla rozdziału pierwszego.
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
    Zgadzam się z panem przewodniczącym, że dyskutujemy nad rozdziałem o
    zasadach, a więc o kwestiach ogólnych, gdy tymczasem w ust. 3 wniosku posła
    R. Grodzickiego podjęte zostały kwestie szczegółowe.
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
    Proponuję skreślić ust. 3 w moim wniosku, co powinno wyeliminować
    kontrowersje.
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
    W tej sytuacji ust. 2 wniosku posła R. Grodzickiego jest zbieżny z
    wnioskiem podkomisji, a ust. 1 podejmuje kwestię zasady konstytucjonalizmu,
    czyli materię art. 8.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazurkiewiczMarek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Marek Mazurkiewicz (SLD):</strong>
    Wydaje mi się, że ust. 1 i ust. 2 z propozycji posła R. Grodzickiego mówią
    o tym samym.
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
    Moja propozycja art. 7 zakłada, że art. 8 jest zbędny.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Wit Majewski (SLD):</strong>
    Uważam, że art. 7 nie jest konkurencyjny wobec art. 8, gdyż art. 7 dotyczy
    zasady praworządności, a art. 8 zasady konstytucjonalizmu.
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
    Więcej głosów popierających niż odrzucających otrzymały dwa wnioski:
    podkomisji oraz posła R. Grodzickiego zmodyfikowany poprawkami. Proponuję
    wybór jednego z nich w drodze głosowania, które będzie polegało na tym, że
    uruchomienie przycisku „za” będzie oznaczało głosowanie za wnioskiem
    podkomisji, a uruchomienie przycisku „przeciw ” będzie oznaczało głosowanie
    za wnioskiem posła R. Grodzickiego. Uruchomienie przycisku „wstrzymania się”
    będzie oznaczało sprzeciw wobec obu propozycji lub brak stanowiska.
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
    Proponuję, aby konsekwentnie ust. 2 brzmiał: „Władze publiczne działają na
    podstawie i w granicach prawa”.
      </p>
    </div>

  <!--<hr><p class="page-break">strona 67</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
    Ponieważ wnioskodawca nie przyjął poprawki, jego wniosek będzie poddany
    głosowaniu w brzmieniu wcześniej ustalonym. Poddaję pod głosowanie wniosek o
    dokonanie wyboru między propozycją podkomisji — użycie przycisku „za”, a
    propozycją posła R. Grodzickiego —- użycie przycisku „przeciw ”, wraz z
    możliwością wstrzymania się. Stwierdzam, że Komisja w głosowaniu,
    większością 30 głosów popierających, przy 5 przeciwnych i i wstrzymującym
    się, przyjęła brzmienie przedłożone przez podkomisję. Tak więc podkomisja
    zdecydowała, że art. 7 uzyskał brzmienie: „Wszystkie organy władzy
    publicznej działają na podstawie i w granicach prawa”. Przechodzimy do art.
    8, który w wersji przedłożonej przez podkomisję brzmi: „Prawo
    Rzeczypospolitej Polskiej tworzą: Konstytucja, powszechnie uznane zasady
    prawa międzynarodowego, ratyfikowane umowy międzynarodowe, us(rozporządzenia
    z mocą ustawy) oraz akty normatywne wydane na podstawie I w celu wykonania
    ustawy”. Najdalej idący wniosek przedłożył poseł R. Grodzicki proponując
    przeniesienie treści art. 8 do rozdziału o źródłach prawa. Senator H. Rot proponuj:
     aby zawiesić decyzję o treści i usytuowaniu art. 8 do zakończenia pracy
    nad rozdziałem o źródłach prawa. Wnioski: senator A. Grześkowiak, senatora
    P. Andrzejewskiego i posła W. Majewskiego przewidują, aby art. 8 nie
    dotyczył źródeł prawa, lecz zasady konstytucjonalizmu.
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
    Proszę o poprawienie błędu, jaki powstał przy przepisywaniu mojego
    wniosku. W ust. 2 zamiast wyrazu: „odpowiednio” powinien być wyraz
    „bezpośrednio”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Wit Majewski (SLD):</strong>
    Uważam, że przed rozstrzygnięciem art. 8 powinna być rozstrzygnięta
    kwestia wniosku o brzmienie art. /, którą przedłożył prof. S. Gebethner.
    Treść wniosku jest następująca: „Rzeczpospolita Polska przestrzega wiążącego
    Ją prawa międzynarodowego ..
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
    Przyjmuję uwagę posła W. Majewskiego. W związku z tym chcę zapytać
    ekspertów o opinię o wniosku prof. S. Gebethnera jako przedstawiciela Rady
    Ministrów. Osobiście uważam, że jest to ważna zasada, która powinna być
    przyjęta.
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
    Zgadzam Się, że jest to ważna zasada, lecz proponuję nie
    rozstrzygać w tej chwili jej usytuowania. Najpierw należy rozstrzygnąć
    konstrukcję art. 8.
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
    Powracamy zatem do art. 8.
      </p>
    </div>

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Wit Majewski (SLD):</strong>
    Wydaje mi się, że wnioski: posła R. Grodzickiego i senatora H. Rota są
    tożsame.
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
    Nie są to wnioski tożsame. W przypadku wniosku posła R. Grodzickiego można
    mówić o „skazaniu” art. 8, a w przypadku wniosku senatora H. Rota o
    „zawieszeniu” art. 8.
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
    Uważam, że głosowania należy rozpocząć od wniosku senatora H. Rota, z
    którego wynika, że najpierw należy zakończyć prace nad rozdziałem o źródłach
    prawa, a dopiero potem rozstrzygnąć kwestię art. 8.
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
    Przyjmujęwniosek posła J. Szymańskiego. Poddaję pod głosowanie wniosek o
    przyjęcie propozycji senatora H. Rota, aby zawiesić decyzję o treŚci i
    usytuowaniu art. 8 do zakończenia prac nad rozdziałem o źródłach prawa.
    Stwierdzam, że Komisja w głosowaniu, większością 18 głosów przeciwnych, przy
    14 popierających i 3 wstrzymujących się, odrzuciła wniosek. Poddaję pod
    głosowanie wniosek posła R. Grodzickiego, aby skreślić treść art. 8 w
    brzmieniu podkomisji w rozdziale I i przenieść go do rozdziału III.
    Stwierdzam, że Komisja w głosowaniu, większością 24 głosów popierających,
    przy 6 przeciwnych i 3 wstrzymujących się, przyjęła wniosek. Tak więc treść
    art. 8 zaproponowana przez podkomisję zostaje przeniesiona do rozdziału o
    źródłach prawa. Decyzja dotycząca art. 8 w brzmieniu podkomisji oznacza
    otwarcie drogi dla podjęcia decyzji dotyczącej art. 8, lecz przy innej jego
    zawartości merytorycznej dotyczącej zasady konstytucjonalizmu. Stosowne
    wnioski przedłożyli: poseł I. Lipowicz, przedstawiciele Prezydenta RP —
    prof. M. Pietrzak, prof. A. Rzepliński i dr W. Kulesza, senator A.
    GrzeŚkowiak, senator P. Andrzejewski oraz poseł W. Majewski. W pierwszej
    kolejności musimy rozstrzygnąć kwestię ujęć alternatywnych, zaznaczonych
    pogrubionym drukiem w propozycji poseł I. Lipowicz.
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
    Mój wniosek nie obejmował sformułowań napisanych drukiem pogrubionym. Jest
    to konsekwencja przejęcia art. 69.
      </p>
    </div>

  <!--<hr><p class="page-break">strona 68</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
    Tak więc, aby uporządkować wniosek poseł I. Lipowicz, musimy rozstrzygnąć
    zaproponowane w jego treści ujęcia alternatywne w formie pisma pogrubionego.
    Poddaję pod głosowanie wniosek o dodanie wyrazu; „stanowionym' po wyrazie:
    „najwyższym w ust. 1, który brzmi: „Konstytucja jest najwyższym prawem
    Rzeczypospolitej Polskiej. Stwierdzam, że Komisja w głosowaniu, większością
    25 głosów przeciwnych, przy 7 popierających i 2 wstrzymujących się,
    odrzuciła wniosek. Tak więc ust. 1 brzmi: „Konstytucja jest najwyższym
    prawem Rzeczypospolitej Polskiej”. Poddaję pod głosowanie wniosek, aby ust.
    2 w brzmieniu: „Przepisy Konstytucji stosuje się bezpośrednio” został
    uzupełniony dopisaniem wyrazów: „poza wyjątkami przez nią określonymi”.
    Stwierdzam, że Komisja w głosowaniu, większością 19 głosów popierających,
    przy 9 przeciwnych i 6 wstrzymujących się, przyjęła wniosek.
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
    Przyjęcie uzupełnienia ust. 2 powoduje, że przestaje on być moim
    wnioskiem. Wycofuję więc ten wniosek. Ponadto chcę zapytać, kto zgłosił
    uzupełnienie do mojego wniosku?
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
    Wniosek poseł I. Lipowicz jest powtórzeniem art. 69.
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
    Zaszło nieporozumienie, gdyż ja nawiązałam do art. 69, ale przyjęłam
    zasadę konstytucjonalizmu proponowaną przez prof. W. Osiatyńskiego. Mój
    wniosek nie obejmuje więc uzupełnień ujętych pogrubionym pismem.
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
    Zgłaszam wniosek o dokonanie reasumpcji poprzedniego głosowania, gdyż nie
    można głosować nad automatycznie przeniesioną treścią art. 69. Popełniliśmy
    więc błąd i stąd konieczność dokonania reasumpcji. Pod głosowanie należy
    poddać treść wniosku, bez sformułowań napisanych pogrubionym drukiem i
    ujętych w nawiasie.
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
    Przeprowadziłem nie umotywowane głosowanie, co jest moim błędem. Za chwilę
    poddam pod głosowanie brzmienie wniosku zgodne z propozycją poseł I.
    Lipowicz.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Wydaje się jednak, że nastąpiło pewne nieporozumienie. Głosując bowiem nad
    wnioskiem poseł I. Lipowicz wypowiadamy się pośrednio o treści art. 69.
    Ponieważ poseł I. Lipowicz zawęża treść wniosku, to w tych okolicznościach
    zgłaszam szerszy wniosek, zmierzający do tego, aby teraz Komisja mogła
    rozstrzygnąć dylemat, który w przeciwnym wypadku będzie odłożony do czasu
    rozpatrzenia art. 69.
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
    Czy jednak podczas głosowania można składać wnioski? Jeśli nawet tak, to
    powinny one być przedłożone na piśmie i dostarczone członkom Komisji.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Senator A. Grześkowiak ma formalnie rację, ale tekst poprawki mamy przed
    sobą. Proponuję, aby ust. 1 nie zawierał wyrazu: „stanowionym”, a ust. 2
    zawierał uzupełnienie: „poza wyjątkami przez nią określonym”.
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
    Uważam, że konieczna jest reasumpcja. Nie udawajmy, że nie podjęliśmy
    żadnych decyzji, skoro je podjęliśmy.
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
    Czy jeżeli przyjmiemy treść ust. 2 w brzmieniu proponowanym przez posła W.
    Cimoszewicza, to zapiszemy jednocześnie w konstytucji, które artykuły nie
    będą stosowane bezpośrednio?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    W moim przekonaniu z proponowanego sformułowania wynika, że to konstytucja
    określa, kiedy jej przepisy nie są stosowane bezpośrednio.
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
    Rozumiem, że chodzi o bezpośrednie zastosowanie przepisów dotyczących
    wolności, praw i obowiązków obywatelskich, zwłaszcza kiedy nie można ich
    chronić na podstawie innych aktów prawnych, tak jak to było w projekcie
    Karty praw i wolności. Jeżeli bowiem na podstawie innych aktów prawnych
    można chronić wolności i praw obywatelskich, wówczas konstytucja nie musi
    być stosowana bezpośrednio. Jeżeli natomiast na przykład parlament nie
    uchwali przepisów lub ochrona nie będzie wystarczająca, wówczas obywatel
    może bezpośrednio powołać się na konstytucję. Ponadto chcę dodać, że trzy
    wnioski są niemal identyczne lub zbieżne. Nieco odmienny jest tylko wniosek
    senator A. Grześkowiak i posła W. Majewskiego.
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
    Mam pytanie do prof. W. Osiatyńskiego: który z przepisów projektu mówi o
    tym, że określone artykuły nie są stosowane bezpośrednio?
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
    Chodzi o art. 64, dotyczący praw socjalnych i stwierdzający, że ochrona
    praw ujętych w stosownych artykułach jest stosowana w granicach ustaw
    wydanych w celu realizacji tych praw.
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
    Uważam, że podejmujemy kwestie bardzo ważne. Jest to bowiem zagadnienie
    bezpośredniego obowiązywania konstytucji. Chodzi o to, czy w przypadku braku
    innych instrumentów ochrony praw obywatelskich stosuje się bezpośrednio
    konstytucję, którą wówczas w całości traktujemy poważnie. Sytuacja przeciwna
    to optymistyczne przepisy i następujące po nich stwierdzenie, że są to tylko
    cele państwa, które realizowane są w określonych granicach.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazurkiewiczMarek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Marek Mazurkiewicz (SLD):</strong>
    Powinniśmy pamiętać o tym, że dyskutowany art. 8 odnosi się nie tylko do
    wolności i praw obywatelskich, lecz do wszystkich przepisów obywatelskich.
    Tymczasem w projekcie konstytucji Unii Wolności jest wiele przepisów, które
    odsyłają do ustaw zwykłych.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:</strong>
    Uważam, że nie można sformułować bezwzględnej zasady
    bezpośredniego obowiązywania konstytucji. Z, natury rzeczy są bowiem kwestie
    wymagające regulacji ustawowych. Zawarte w ust. 2 sformułowanie: „poza
    wyjątkami” nie jest jednak dobre. Proponuję formułę występującą we wniosku
    senator A. Grześkowiak i wniosku posła W. Majewskiego: „chyba że Konstytucja
    stanowi inaczej”.
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
    Dyskutowany projekt konstytucji zawiera wiele odesłań do ustaw. Dotyczy to
    w szczególności art. 64. Podobnie jest w art. 127 w odniesieniu do stanu
    wyjątkowego. W wariancie II art. 136 przewidziane jest wydanie ustawy o
    Radzie Ministrów. Ponadto należy mieć świadomość, że gdyby nawet nie było
    formuły, którą proponuje prof. 5. Gebethner, to i tak realizacja części
    przepisów konstytucji nie będzie możliwa bez wydania ustaw zwykłych.
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
    Poseł W. Cimoszewicz powinien więc rozważyć przyjęcie formuły proponowanej
    przez prof. S$. Gebethnera. Kwestia takiej czy innej formuły nie ma jednak
    zasadniczego znaczenia, gdyż i tak część przepisów konstytucji będzie
    realizowana poprzez ustawy zwykłe.
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
    Uważam, że konieczne jest wpisanie do konstytucji zasady bezpośredniego
    stosowania przepisów konstytucyjnych. Zwracam jednak uwagę, że w istocie
    rzeczy dyskutujemy nad art. 69, który otwiera rozdział o systemie źródeł
    prawa. Ważne jest więc, abyśmy nie zapisali konkurencyjności między
    konstytucją stosowaną bezpośrednio a ustawą, w dochodzeniu prawa. Zwracam
    uwagę na wyjątek w postaci art. 64, mówiącego o tym, że określonych praw
    można dochodzić tylko w granicach określonych ustawą. Uważam, że jest to
    zamach na prawa już posiadane. Organy władzy obowiązuje zasada legalizmu.
    Tak więc w sytuacjach, w których ustawa precyzuje przepisy konstytucyjne,
    nie jest możliwe bezpośrednie stosowanie konstytucji. Inaczej jest w
    przypadku praw i wolności obywateli. Nie ma wówczas zastosowania zasada
    legalizmu, lecz zasada, że wszystko jest dozwolone z wyjątkiem tego, co jest
    zabronione. W związku z tym formuła projektu senackiego, którą przypomniał
    prof. S$. Gebethner, daje pewne gwarancje, tego rodzaju, że ta sama
    konstytucja może postanowić inaczej. Chodzi bowiem o to, aby uniknąć
    dualizmu przy dochodzeniu prawa, między zasadą bezpośredniości konstytucji a
    zasadą prymatu ustawy bądź innego źródła prawa podustawowego, jakim jest
    chociażby umowa w formie na przykład umowy społecznej. Wybór jest więc
    trudny. Jest bowiem kwestią otwartą, jak można będzie dochodzić
    sprawiedliwości społecznej wymienionej w art. 1. Problemem jest również
    kwestia, że jeżeli ogólna zasada konstytucyjna dozna sprecyzowania w
    przepisach konstytucji, bądź w podkonstytucyjnych Źródłach prawa, to w jakim
    zakresie może być ograniczona zasada bezpośredniego stosowania konstytucji?
    Jakiś przepis w tej kwestii powinien być przyjęty jako wskazówka wykładni
    autentycznej. Opowiadam się za formułą z projektu senackiego.
      </p>
    </div>

  <!--<hr><p class="page-break">strona 69</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Irena Lipowicz (UW):</strong>
    Dziękuję prof. P. Winczorkowi za wskazanie na to, że również bez formuły
    ograniczającej bezpośrednie stosowanie konstytucji będą sytuacje, w których
    dopiero ustawa będzie decydowała o realizacji określonych praw. Nie
    naruszamy jednak w ten sposób zasady prymatu ustawy. Natomiast deklaracja
    stawiająca od początku pod znakiem zapytania realność praw przyznanych przez
    konstytucję zmienia zasadniczo charakter konstytucji i sprzyja przepisom
    tego typu jak przepis o urzeczywistnianiu sprawiedliwości społecznej.
    Przepis konstytucji odsyłający do ustawy nie zmienia zasady generalnej.
    Apeluję więc do senatora P. Andrzejewskiego i senator A. Grześkowiak o
    rozważenie swoich wniosków. Uważam bowiem, że granica przebiega między tymi,
    którzy również w odniesieniu do praw socjalnych chcą realnego dochodzenia
    roszczeń, a tymi, którzy opowiadają się za pewną kalkulacją, w której
    konstytucja nabierze bardziej deklaratywnego charakteru. Proponuję więc
    zaakceptowanie ogólnej zasady bezpośredniego stosowania konstytucji bez
    „dodatków”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Zgadzam się na zastosowanie innej formuły. Ponadto stwierdzam — nawet z
    pewnym zaskoczeniem — że tak naprawdę proponuję przyjęcie przepisów w
    brzmieniu dwóch pierwszych ustępów zawartych we wniosku senator A.
    Grześkowiak, bez ust. 3. Mówię o zaskoczeniu dlatego, że senator A.
    Grześkowiak domagała się, abym przedłożył tekst wniosku, a tymczasem okazało
    się, że senator A. Grześkowiak zgłosiła tekst, który ja jestem gotów
    poprzeć, choć z wyjątkiem ust. 3.
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
    Mam swego rodzaju satysfakcję, gdyż wszystkie dyskutowane w tej chwili
    formuły są mojego autorstwa. Poseł I. Lipowicz przedstawiła formułę, którą
    przedstawiłem na początku wczorajszej dyskusji. Poseł W. Majewski przedłożył
    formułę, którą zaproponowałęm na zakończenie wczorajszej dyskusji. Wniosek
    senator A. Grześkowiak to formuła, którą przedłożyłem jako ekspert Komisji
    Konstytucyjnej Senatu I kadencji w 1990 r., przy czym Senat dodał: „lub wskazane w niej
    wartości i zasady”. Chcę dodać, że z tych wszystkich formuł dzisiaj
    najbardzej podoba mi się brzmienie zawarte we wniosku nr 14, który
    przedłożył poseł W. Majewski.
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
    Gdyby prof. W. Osiatyński ograniczył swój wewnętrzny pluralizm, pomogłoby
    to nam w pracach konstytucyjnych. Rozumiem więc, że wniosek posła W.
    Cimoszewicza to ust. 1 i ust. 2 wniosku senator A. Grześkowiak. Moglibyśmy
    więc tego wniosku nie wpisywać odrębnie do zestawienia, oczywiście jeżeli
    senator A. Grześkowiak wyrazi zgodę.
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
    Przywykłam już do tej sytuacji, w której w wielu późniejszych projektach
    konstytucji odnajduję przepisy z projektu senackiego. Ponadto jest to powód
    do satysfakcji, że Komisja Konstytucyjna Senatu potrafiła przygotować dobry
    projekt.
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
    Proponuję nie przeprowadzać reasumpcji wcześniejszego głosowania.
    Wyjaśnieniem jest oświadczenie przewodniczącego Komisji, że wniosek
    przedłożony pod głosowanie nie był właściwy.
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
    Jeżeli ust. 3 we wniosku senator A. Grześkowiak
    zostanie w przedłożonym brzmieniu: „Wszystkie akty prawne Rzeczypospolitej
    Polskiej muszą być zgodne z Konstytucją. Przepisy naruszające Konstytucję
    lub wskazane w niej wartości i zasady, nie mogą być stosowane i powinny być
    uchylone w trybie przewidzianym dla kontroli konstytucyjności aktów
    prawnych”, oznaczać to będzie zaprzeczenie wyników głosowania dotyczącego
    tego, aby konstytucja była najwyższym stanowionym prawem, co zostało
    przegłosowane negatywnie. Przyjęcie art. 8 ust. 3 z wniosku senator A.
    Grześkowiak oznaczać będzie w istocie rzeczy przyjęcie zasady, że oprócz
    konstytucji jako najważniejszego prawa stanowionego są jeszcze „wartości 1
    zasady”. Stają się one alternatywą wobec norm i zasad konstytucji. Trybunał
    Konstytucyjny musiałby więc orzekać nie tylko o zgodności z normami
    konstytucyjnymi wyrażonymi w jej przepisach, ale również o zgodności z
    „wartościami i zasadami”. Chcę dodać, iż chodzi mi tylko o wskazanie
    konsekwencji przyjęcia art. 8 ust. 3 w brzmieniu wniosku senator A.
    Grześkowiak.
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
    Poseł W. Cimoszewicz przyjął jako swój — wniosek składający się z ust. 1 i
    ust. 2 mojego wniosku. Prof. K. Działocha był uprzejmy nie zauważyć tego,
    gdyż już wielokrotnie wyrażał publicznie swoje stanowisko wobec senackiego
    projektu konstytucji. Nie dziwi mnie więc dzisiejsza uwaga. Mimo to mam
    nadzieję, że mój wniosek będzie w całości poddany głosowaniu. Chcę również
    zwrócić uwagę, że jeżeli pewna wartość jest wyrażona w konstytucji, to jest
    normą konstytucyjną, a więc obowiązuje. Zwracam uwagę, że choć prof. K.
    Działocha bardzo boi się umieszczenia w konstytucji pojęcia „wartość ”, to
    Komisja przyjęła już wartość stwierdzając, że Rzeczpospolita jest wspólnym
    dobrem. Jest to niewątpliwie wartość. Wszystkie akty będą musiały
    respektować tę wartość. O to właśnie chodzi. Ponadto przykre jest, że
    eksperci wszczynają tę dyskusję w trakcie głosowania.
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
    Przechodzimy zatem do głosowania.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Proponuję, aby poprzez użycie przycisku „za” móc się opowiedzieć za
    wnioskiem nr 10, a poprzez użycie przycisku „przeciw” móc się opowiedzieć za
    wnioskiem nr 12 ust. 1 i ust. 2.
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
    Nie przyjmuję propozycji posła K. Kamińskiego. Uważam, że każdy ze
    zgłoszonych wniosków powinien być poddany pod głosowanie. Podobnie jak w
    poprzednich głosowaniach wnioski, które uzyskają więcej głosów popierających
    niż przeciwnych, będą uczestniczyć w głosowaniu, które przesądzi o przyjęciu
    ostatecznego wariantu. Poddaję pod głosowanie wniosek o przyjęcie
    następującej poprawki zgłoszonej przez poseł I. Lipowicz: „Ust. 1.
    Konstytucja jest najwyższym prawem Rzeczypospolitej Polskiej. Ust. 2.
    Przepisy Konstytucji stosuje się bezpośrednio . Stwierdzam, że w głosowaniu
    wniosek uzyskał 6 głosów popierających, 22 głosy przeciwne, przy 4
    wstrzymujących się. Poddaję pod głosowanie wniosek o przyjęcie następującej
    poprawki zgłoszonej przez przedstawicieli prezydenta RP — prof. M.
    Pietrzaka, prof. A. Rzeplińskiego i dr W. Kuleszę: „Konstytucja jest
    najwyższym prawem Rzeczypospolitej Polskiej i wiąże wszystkie organy
    Państwa”. Stwierdzam, że w głosowaniu wniosek uzyskał 15 głosów
    popierających, 12 głosów przeciwnych, przy 6 wstrzymujących się. Poddaję pod
    głosowanie wniosek o przyjęcie poprawki senator A. Grześkowiak o
    następującym brzmieniu: „Ust. 1. Konstytucja jest najwyższym prawem
    Rzeczypospolitej Polskiej. Ust. 2. Przepisy Konstytucji stosuje się
    bezpośrednio, chyba że Konstytucja stanowi inaczej. Ust. 3. Wszystkie akty
    prawne Rzeczypospolitej Polskiej muszą być zgodne z Konstytucją. Przepisy
    naruszające Konstytucję lub wskazane w niej wartości i zasady nie mogą być
    stosowane i powinny być uchylone w trybie przewidzianym dla kontroli
    konstytucyjności aktów prawnych”. Stwierdzam, że w głosowaniu wniosek
    uzyskał 6 głosów popierających, 22 głosy przeciwne, przy 3 wstrzymujących
    się. Kolejna poprawka autorstwa senatora P. Andrzejewskiego przewiduje, że
    staje się aktualna w razie nieprzyjęcia poprawki senator A. Grześkowiak.
    Ponieważ tak się stało, poddam pod głosowanie poprawkę senatora P.
    Andrzejewskiego. Poddaję pod głosowanie wniosek o przyjęcie następującej
    poprawki zgłoszonej przez senatora P. Andrzejewskiego: „Prawo
    Rzeczypospolitej tworzy Konstytucja . Stwierdzam, że w głosowaniu wniosek
    uzyskał 5 głosów popierających, 24 głosy przeciwne, przy 5 wstrzymujących
    się. Poddaję pod głosowanie wniosek o przyjęcie następującej poprawki posła
    W. Majewskiego: „Ust. 1. Konstytucja jest najwyższym prawem Rzeczypospolitej
    Polskiej i wiąże wszystkie organy Państwa. Ust. 2. O zgodności aktów
    normatywnych z Konstytucją orzeka Trybunał Konstytucyjny. Ust. 3. Przepisy
    Konstytucji stosuje się bezpośrednio, jeżeli Konstytucja nie stanowi
    inaczej”. Stwierdzam, że w głosowaniu wniosek uzyskał 11 głosów
    popierających, 16 głosów przeciwnych, przy 6 wstrzymujących się. Poddaję pod
    głosowanie wniosek o przyjęcie następującej poprawki posła W. Cimoszewicza:
    „Ust. 1. Konstytucja jest najwyższym prawem Rzeczypospolitej Polskiej. Ust.
    2. Przepisy Konstytucji stosuje się bezpośrednio, chyba że Konstytucja
    stanowi inaczej”. Stwierdzam, że w głosowaniu wniosek uzyskał 25 głosów
    popierających, 7 głosów przeciwnych, przy i wstrzymującym się. Informuję, że
    w wyniku przeprowadzonych głosowań dwa wnioski otrzymały więcej głosów
    popierających niż przeciwnych. Są to wnioski: przedstawicieli Prezydenta RP
    i posła W. Cimoszewicza. Poddaję pod głosowanie wniosek o dokonanie wyboru
    między propozycją przedstawicieli Prezydenta RP — użycie przycisku „za”, a
    propozycją posła W. Cimoszewicza — użycie przycisku „przeciw ”, wraz z
    możliwością wstrzymania się. Stwierdzam, że Komisja w głosowaniu większością
    23 głosów popierających, przy 9 głosach przeciwnych i i wstrzymującym się,
    przyjęła poprawkę posła W. Cimoszewicza. Tak więc art. 8 uzyskał brzmienie:
    „Ust. 1. Konstytucja jest najwyższym prawem Rzeczypospolitej Polskiej. Ust.
    2. Przepisy Konstytucji stosuje się bezpośrednio, chyba że Konstytucja
    stanowi inaczej . Przechodzimy do wniosku prof. S.Gebethnera, który brzmi:
    „Rzeczpospolita Polska przestrzega wiążącego Ją prawa międzynarodowego .
    Chcę zapytać ekspertów, jak widzą usytuowanie przepisu zaproponowanego przez
    prof. 5. Gebethnera.
      </p>
    </div>

  <!--<hr><p class="page-break">strona 71</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
    Wydaje się, że przepis zawarty we wniosku prof. 5. Gebethnera powinien
    znaleźć się po artykule formułującym zasady konstytucjonalizmu.
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
    Uważam, że formuła zaproponowana przez prof. S$. Gebethnera nie jest
    zasadą ustrojową. Moim zdaniem zasadą ustrojową jest relacja prawa
    międzynarodowego do krajowego. Przestrzeganie prawa międzynarodowego jest
    tak oczywiste, że nie można mówić o zasadzie.
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
    Istotą zasad ustrojowych jest to, że są oczywiste -— zatrącają wręcz o
    banał. Oczywistość nie pozbawia jednak zasad ich znaczenia.
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
    Chcę zapytać wnioskodawcę, czy zasada ta musi być ujęta aż tak szeroko.
    Przy tak szerokiej formule może pojawić się pytanie, czy Polskę wiąże dany
    zwyczaj międzynarodowy. Ponadto chcę zapytać ekspertów, czy proponowana
    zasada powinna znaleźć się w rozdziale pierwszym, czy może w rozdziale
    trzecim o źródłach prawa. Osobiście uważam, że proponowana zasada powinna
    znaleźć się w rozdziale o źródłach prawa. Uważam również, że kwestią
    ważniejszą jest okreŚlenie hierarchii norm prawa międzynarodowego w polskim
    porządku prawnym, niż tego typu formuły.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Zwracam uwagę na niezręczność formuły z użyciem wyrazu „Ją”. Ponadto
    nasuwa się pytanie, czy prawem międzynarodowym są również powszechnie uznane
    zasady, czy tylko ratyfikowane umowy. Jeżeli w obu przypadkach odpowiedź
    jest pozytywna, to proponowany przepis mógłby brzmieć: „Rzeczpospolita
    Polska przestrzega powszechnie uznanych zasad prawa międzynarodowego i
    ratyfikowanych umów międzynarodowych”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:</strong>
    Zaproponowaną formułę należy rozumieć przede wszystkim jako normy i zasady wynikające z zobowiązań, jakie przyjęła
    Rzeczpospolita Polska ratyfikując umowy lub zawierając umowy nie podlegające
    ratyfikacji. Chodzi więc o cały zespół zasad i norm. Proponowana zasada nie
    dotyczy tylko źródeł prawa. Chodzi bowiem o pewną zasadę polityczną
    wyrażającą stosunek Rzeczypospolitej jako państwa do społeczności
    międzynarodowej. Proponowana formuła powinna więc znaleźć się wśród zasad
    ustroju.
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
     pełni popieram to co powiedział prof. 5. Gebethner.
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
    Czuję się w obowiązku zabrać głos, gdyż podkomisja zagadnień systemu Źródeł prawa poświęciła tej kwestii kilka posiedzeń z
    udziałem ekspertów. Uzasadnione wydaje się pytanie posła J. Szymańskiego,
    lecz jest to pytanie z zakresu systematyki konstytucji. Zasada, o której
    mówimy, była wielokrotnie wyrażana przez prof. K. Skubiszewskiego, a w
    trakcie posiedzenia podkomisji poparł ją również prof. A. Wasilkowski.
    Istota problemu to zasada legalizmu. Jak ta zasada przełoży się na system
    Źródeł prawa, będzie uregulowane w rozdziale o systemie Źródeł prawa.
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
    Także uważam, że jest to zasada legalizmu, choć rozumiana szerzej, gdyż
    dotyczy nie tylko prawa wewnętrznego, ale również stosunku prawa
    wewnętrznego do międzynarodowego.
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
    Chcę poprzeć propozycję prof. S$. Gebethnera i jednocześnie zwrócić uwagę,
    że chodzi nie tylko o systematykę źródeł prawa, ale chodzi również o swego
    rodzaju wytyczną dla polityki zagranicznej państwa. Jak uczy historia, w
    praktyce dyplomatycznej dochodzi do łamania norm prawa międzynarodowego.
    Przy tego typu zasadzie będzie to oznaczało złamanie konstytucji.
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
    Czy ktoś chciałby jeszcze zabrać głos? Nie ma. Ponieważ przeprowadziliśmy
    dyskusję także z udziałem wnioskodawcy, sądzę, że możemy przystąpić do
    głosowania. Poddaję pod głosowanie wniosek o przyjęcie art. 9 w następującym
    brzmieniu, zaproponowanym przez przedstawiciela Rady Ministrów, prof. $.
    Gebethnera: „Rzeczpospolita Polska przestrzega wiążącego Ją prawa
    międzynarodowego”. Stwierdzam, że Komisja w głosowaniu, większością 28
    głosów popierających, przy i przeciwnym i braku wstrzymujących się, przyjęła
    wniosek. Tak więc art. 9 uzyskał następującą treść: „Rzeczpospolita Polska
    przestrzega wiążącego Ją prawa międzynarodowego . Przechodzimy do artykułu
    dotyczącego zasad podziału władz. Z wczorajszej ożywionej dyskusji narodziły
    się nowe wnioski, obok wniosku podkomisji. Zestawienie propozycji poprawek
    zawiera kolejno: wniosek podkomisji, lecz bez wariantu II ust. 2, który
    został uznany za bezprzedmiotowy w świetle wcześniejszych rozstrzygnięć;
    wniosek posła W. Majewskiego, bardzo zbliżony do wersji podkomisji, lecz z
    ust. 3 dotyczącym prezydenta; wniosek poseł K. Łybackiej, również z ust. 3
    dotyczącym prezydenta; wniosek posła J. Ciemniewskiego, ujmujący zasadę
    podziału władz bardzo syntetycznie, oraz wniosek senator A. Grześkowiak.
    Przechodzimy do rozpatrzenia wniosku podkomisji. Rozpoczniemy od
    rozstrzygnięcia kwestii ujęć alternatywnych napisanych pogrubionym pismem.
    Posiedzenia Komisji Konstytucyjnej ZN Poddaję pod głosowanie wniosek o
    przyjęcie ust. I propozycji podkomisji z dodaniem wyrazów „oraz
    współdziałające”. Stwierdzam, że Komisja w głosowaniu, większością 13 głosów
    popierających, przy 11 przeciwnych 15 wstrzymujących się, przyjęła wniosek.
    Przechodzimy do rozpatrzenia ust. 2.
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
    Jestem skłonny zrezygnować z wariantu II ust. 2 tylko w przypadku
    przyjęcia mojego wniosku.
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
    Proszę jednak zwrócić uwagę, że ust. 2 w wariancie II jest niemal tożsamy
    z ust. 2 we wniosku senator A. GrzeŚkowiak. Powracamy do ust. 2 wniosku
    podkomisji. Wyjaśnienia wymaga kwestia współzależności pojęć: „niezależne” i
    „niezawisłe ”.
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
    W rozdziale dotyczącym sądownictwa dla określenia pozycji ustrojowej sądów
    i sędziów używa się dwóch określeń: „niezależne sądy” 1 „niezawiśli
    sędziowie”. Tradycja polska wskazuje natomiast na używanie pojęcia:
    „niezawisłe sądy”. Problem polega na tym, czy zastosować ujęcie tradycyjne,
    czy też przyjąć ujęcie szersze — „podwójne' — stosowane w rozdziale o
    sądownictwie.
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
    Rozumiem więc, że powinniśmy przyjąć pojęcie „niezależne sądy”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Jest to problem, gdyż rzeczywiście rozróżnia się niezawisłość sądów jako
    jednostek organizacyjnych wymiaru sprawiedliwości, od niezawisłości
    sądzenia, a więc niezawisłości sędziów. Podejmujemy jednak również pewną
    symbolikę, co wykracza poza Ścisłą precyzję. Jeżeli napiszemy tylko o
    niezależności sądów, to jednak pominiemy ważną zasadę niezawisłości, która
    musi być cechą charakterystyczną władzy sądowniczej. Nie mam idealnej
    propozycji, ale wydaje mi się, że lepsze byłoby użycie obu określeń.
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
    Nie wnikając w spór, chcę poinformować, że w rozumieniu podkomisji
    chodziło o wymienne zastosowanie jednego z określeń, a więc bez spójnika „1.
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
    Wydaje mi się — podobnie jak posłowi W. Cimoszewiczowi — że chodzi o
    iunctim, gdyż są to dwie cechy przynależne władzy sądowniczej jako sądom i
    jako sędziom. Oba określenia wydają się więc ważne jako zasada
    konstytucyjna.
      </p>
    </div>

  <!--<hr><p class="page-break">strona 73</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/BentkowskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Aleksander Bentkowski (PSL):</strong>
    Chcę przypomnieć, że w ustawie — Prawo o ustroju sądów Powszechnych jest
    zapisane, że sądy są niezależne i niezawisłe. Pominięcie jednego z określeń
    byłoby więc swego rodzaju „„rewolucją”. Opowiadam się za użyciem obu
    określeń.
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
    Czy są inne wnioski niż końcowa opinia posła A. Bentkowskiego? Nie ma.
    Poddaję pod głosowanie wniosek o przyjęcie ust. 2 propozycji podkomisji,
    zawierającego formułę „„niezależne i niezawisłe”. Stwierdzam, że Komisja w
    głosowaniu, większoŚcią 29 głosów popierających, przy braku głosów
    przeciwnych i i wstrzymującym się, przyjęła wniosek. Druga kwestia
    wymagająca rozstrzygnięcia w ust. 2 to zagadnienie użycia formuły mówiącej o
    sądach, czy o sądach i trybunałach.
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
    Opowiadam się za pominięciem formuły: „i trybunały”, zarówno bowiem.
    Trybunał Stanu, jak i Trybunał Konstytucyjny, to sądy — sądy szczególne i co
    do tego nie ma wątpliwości, jeżeli chodzi o stanowisko nauki prawa
    konstytucyjnego.
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
    Popieram tę argumentację. Pojęcie „sąd” to pojęcie szerokie. „Trybunał” to
    nazwa własna.
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
    Trudno zgodzić się z poglądem, że w pojęciu „sąd” mieści się pojęcie
    „trybunał”. Reprezentuję pogląd — wyrażony w projekcie obywatelskim NSZZ
    „Solidarność” — iż trybunał ma funkcję sądowniczą, lecz jest organem
    kontroli zgodności prawa z konstytucją. Nie wykonuje natomiast bezpośrednio
    funkcji sądowniczej jako władza państwowa. Zgadzam się więc z wnioskiem, aby
    nie wpisywać trybunałów jako organów władzy państwowej, gdyż organ kontroli
    przestrzegania konstytucji nie jest uprawniony do tego, aby znaleźć się
    wymieniony jako podmiot równy z sądem jako organem władzy.
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
    W porównaniu z poglądami senatora P. Andrzejewskiego mam zupełnie inne
    wnioski. Przyjmując kryterium czysto formalne należy pamiętać, że tytuł
    rozdziału VII brzmi: „Sądy i trybunały”. W dyskutowanym artykule powinno to
    znaleźć odzwierciedlenie. Jestem zwolennikiem tezy, że trybunały to sądy,
    ale jednocześnie nie można zapomnieć o tytule rozdziału VII. Gdyby rozdział
    VII miał tytuł: „Władza sądownicza” i zawierał postanowienia dotyczące sądów
    i trybunałów >to zgodziłbym się z poglądem, że w dyskutowanym artykule
    dystynkcja nie jest konieczna.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Oddzielenie władzy ustawodawczej od sądowniczej, a szczególnie oddzielenie
    trybunałów, przesądza zmianę w kwestii zatwierdzania orzeczeń Trybunału
    Konstytucyjnego przez władzę ustawodawczą. Sytuując trybunały we władzy
    sądowniczej przekreślamy tę zasadę, tworząc autonomię trybunałów. Ponieważ
    jest to istotna różnica merytoryczna, opowiadam się za pozostawieniem
    formuły „i trybunały”.
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
    Miałem zamiar mówić o tym, o czym powiedział poseł J. Ciemniewski.
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
    Przypominam, że główny spór, jaki wczoraj toczyliśmy, dotyczył
    niedookreślenia pozycji Prezydenta RP w formule zasady trójpodziału władz.
    Skierowało to nas do wniosku posła J. Ciemniewskiego oznaczonego jako nr 18.
    Wyraża on przekonanie, że wobec sporu zasadę trójpodziału należy wyrazić
    ogólnie. Inni wnioskodawcy podjęli próbę zdefiniowania pozycji prezydenta w
    systemie władz. Takie koncepcje przedstawili: poseł W. Majewski, poseł K.
    Łybacka i senator A. Grześkowiak. Odmiennie kwestię tę ujmuje wniosek
    podkomisji, gdyż pomija instytucję prezydenta. Przechodzimy do głosowań.
    Poddaję pod głosowanie wniosek o przyjęcie ust. 2 propozycji podkomisji wraz
    z wyrazami: „i trybunały”. Stwierdzam, że Komisja w głosowaniu, większością
    18 głosów popierających, przy 12 głosach przeciwnych i 1 wstrzymującym się,
    przyjęła wniosek. Tak więc propozycja podkomisji uzyskała treść: „Ust. 1.
    Władza państwowa jest sprawowana przez rozdzielone i wzajemnie równoważące
    się oraz współdziałające organy ustawodawcze, wykonawcze i sądownicze. Ust.
    2. Organami Rzeczypospolitej Polskiej w zakresie władzy ustawodawczej jest
    Sejm I Senat, w zakresie władzy wykonawczej — Rada Ministrów, w zakresie
    władzy sądowniczej — niezależne i niezawisłe sądy i trybunały”. Poddaję pod
    głosowanie wniosek o przyjęcie brzmienia zaproponowanego przez podkomisję,
    wraz z przyjętymi poprawkami. Stwierdzam, że w głosowaniu wniosek uzyskał 14
    głosów popierających, 10 głosów przeciwnych, przy 6 wstrzymujących się.
    Poddaję pod głosowanie wniosek o przyjęcie propozycji posła W. Majewskiego o
    następującej treści: „Ust. 1. Władza państwowa jest sprawowana przez
    rozdzielone i wzajemnie równoważące się oraz współdziałające organy
    ustawodawcze, wykonawcze I sądownicze. Ust. 2. Organami Rzeczypospolitej
    Polskiej w zakresie władzy ustawodawczej jest Sejm i Senat, w zakresie
    władzy wykonawczej — Rada Ministrów, w zakresie władzy sądowniczej —
    niezależne i niezawisłe sądy i trybunały. Ust. 3. Prezydent jako najwyższy
    przedstawiciel Rzeczypospolitej Polskiej gwarantuje ciągłość i
    współdziałanie władz”. Stwierdzam, że w głosowaniu wniosek uzyskał 8 głosów popierających, 15
    głosów przeciwnych, przy 8 wstrzymujących się. Przechodzimy do propozycji
    poseł K. Łybackiej.
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
    Proszę o uwzględnienie autopoprawki w ust. 2: „przez niezależne i
    niezawisłe sądy i trybunały”.
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
    Poddaję pod głosowanie wniosek o przyjęcie propozycji poseł K. Łybackiej o
    następującej treści: „Ust. 1. Władza państwowa jest sprawowana przez
    rozdzielone i wzajemnie równoważące się organy ustawodawcze, wykonawcze i
    sądownicze. Ust. 2. Organami Rzeczypospolitej Polskiej w zakresie władzy
    ustawodawczej jest Sejm i Senat, w zakresie władzy wykonawczej — Rada
    Ministrów, w zakresie władzy sądowniczej — niezależne i niezawisłe sądy i
    trybunały. Ust. 3. Prezydent przez swój arbitraż zapewnia ciągłość władzy”.
    Stwierdzam, że wniosek w głosowaniu uzyskał 13 głosów popierających, 18
    głosów przeciwnych, przy 2 wstrzymujących się. Poddaję pod głosowanie
    wniosek o przyjęcie propozycji posła J. Ciemniewskiego, o następującej
    treŚci: „Ustrój Rzeczypospolitej Polskiej opiera się na podziale i
    równowadze władzy ustawodawczej, władzy wykonawczej i władzy sądowniczej”.
    Stwierdzam, że w głosowaniu wniosek uzyskał 21 głosów popierających, 7
    głosów przeciwnych, przy 5 wstrzymujących się. Poddaję pod głosowanie
    wniosek o przyjęcie propozycji senator A. Grześkowiak, o następującej
    treŚci: „Ust. 1. Władza państwowa jest sprawowana przez rozdzielone 1
    wzajemnie równoważące się organy ustawodawcze, wykonawcze i sądownicze. Ust.
    2. Władza ustawodawcza wykonywana jest przez Sejm 1 Senat, władza wykonawcza
    przez Prezydenta i Rząd, na którego czele stoi Premier, władza sądownicza —
    przez niezależne i niezawisłe sądy”. Stwierdzam, że w głosowaniu wniosek
    uzyskał 3 głosy popierające, 26 głosów przeciwnych, przy 4 wstrzymujących
    się. Ostatecznego wyboru dokonamy między dwiema propozycjami, które uzyskały
    więcej głosów popierających niż przeciwnych. Są to propozycje: podkomisji
    oraz posła J. Ciemniewskiego.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Co zrobić, aby głosować za wnioskiem posła J. Ciemniewskiego, ale
    jednocześnie nie głosować za trzykrotnym użyciem wyrazu „władzy ”?
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
    Nie przywiązuję dużej wagi do trzykrotnego użycia wyrazu „władza”, gdyż
    nie jestem aż tak dużym zwolennikiem władzy. Uważam, że jest to kwestia
    redakcyjna. Chcę również dodać, że w związku z tym, że znaczne poparcie
    uzyskał wniosek podkomisji mówiący o współdziałaniu władz, nie miałbym nic
    przeciwko temu, aby w mojej propozycji również znalazła się formuła mówiąca
    o współdziałaniu. Decyzję w tej kwestii pozostawiam przewodniczącemu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Proponuję następujące brzmienie: „Ustrój Rzeczypospolitej Polskiej opiera
    się na podziale, współdziałaniu i równo„wadze władzy: ustawodawczej,
    wykonawczej i sądowniczej”.
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
    Uważam, że Są to kwestie redakcyjne, których nie musimy podejmować w tej
    chwili. Sądzę natomiast, że zwłaszcza w Świetle wyników głosowania nad
    propozycją podkomisji i oświadczenia posła J. Ciemniewskiego przesądzenia
    wymaga kwestia rozszerzenia propozycji posła J. Ciemniewskiego o formułę
    mówiącą o współdziałaniu władz. Od ekspertów Komisji otrzymuję sygnał, że
    również akceptują tę formułę. Poddaję pod głosowanie wniosek o przyjęcie
    zmodyfikowanej propozycji posła J. Ciemniewskiego, o następującej treści:
    „Ustrój Rzeczypospolitej Polskiej opiera się na podziale, równowadze i
    współdziałaniu władzy ustawodawczej, wykonawczej i sądowniczej ..
    Stwierdzam, że w głosowaniu wniosek uzyskał 17 głosów popierających, 10
    głosów przeciwnych, przy 4 wstrzymujących się. Przechodzimy do głosowania, w
    którym dokonamy ostatecznego wyboru spośród dwóch propozycji, które w
    dotychczasowych głosowaniach uzyskały największe poparcie. Poddaję pod
    głosowanie wniosek o dokonanie wyboru między propozycją podkomisji — użycie
    przycisku „za”, a zmodyfikowaną propozycją posła J. Ciemniewskiego — użycie
    przycisku „przeciw ”, wraz z możliwością wstrzymania się. Stwierdzam, że
    Komisja w głosowaniu, większością 24 głosów popierających, przy 10 głosach
    przeciwnych i braku wstrzymujących się, przyjęła brzmienie zaproponowane
    przez podkomisję. W związku z tym chcę wyrazić pewną obawę, gdyż w ramach
    zasad ustroju „gubimy” tak ważny naczelny organ państwowy jak Prezydent RP.
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
    Powstała sytuacja, w której należy powrócić do wariantu II ust. 2. Nie
    rozstrzygnęliśmy bowiem między wariantem I a wariantem II. Dla mnie możliwe
    było głosowanie, które uwzględniało wariant II, natomiast nie do przyjęcia
    jest sytuacja, w której przedmiotem głosowania był tylko wariant I.
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
    Nie wydaje się możliwe pominięcie w zasadach ustroju instytucji prezydenta
    pochodzącego z wyborów powszechnych. Posiedzenia Komisji Konstytucyjnej ZN
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Zgłaszam wniosek o reasumpcję głosowania z powodu pomyłki. Tworząc
    zmodyfikowaną wersję poprawki posła J. Ciemniewskiego zgodziliśmy się, że
    kwestia dotycząca władzy wykonawczej nie określa, czy należy ona do Rady
    Ministrów, czy również do prezydenta, przyjmując, że określą to dalsze
    przepisy. Przyjęty przepis „wchłania” propozycję podkomisji, z wyjątkiem
    kwestii prezydenta. Przyjmijmy więc wersję posła J. Ciemniewskiego, a do
    kwestii prezydenta powrócimy przy rozpatrywaniu przepisów szczegółowych
    dotyczących prezydenta.
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
    Jeżeli poseł J. Ciemniewski zgodziłby się, to przyjęłabym jego wniosek w
    brzmieniu pierwotnym, a więc bez uzupełnienia o formułę mówiącą o
    współdziałaniu władz.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Wit Majewski (SLD):</strong>
    Uważam, że głosowanie było poprawne. Do wyboru było wiele propozycji.
    Członkowie Komisji dokonali rozstrzygnięcia w sposób prawidłowy. Proszę
    więc, aby nie wracać do spraw już rozstrzygniętych. Poseł J. Ciemniewski
    wspomniał o wariancie II ust. 2 propozycji podkomisji. Jest to jednak
    brzmienie niemal identyczne z propozycją senator A. Grześkowiak, która
    została odrzucona w głosowaniu. Odrzucone zostały również inne warianty.
    Skoro w formule trójpodziału nie ma prezydenta, oznacza to, iż instytucji
    tej nie da się sklasyfikować w tej formule, ponieważ prezydent ma
    uprawnienia ustawodawcze, wykonawcze i dotyczące wymiaru sprawiedliwości.
    Zadania, funkcje i pozycja prezydenta będą określone w rozdziale o
    prezydencie.
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
    Chcę raz jeszcze przypomnieć, że główny problem, który pojawił się
    wczoraj, wyrażał się w niemożliwości zdefiniowania w jednej zasadzie ogólnej
    relacji prezydent-rząd—władza wykonawcza. W związku z tym przeważał pogląd,
    że należy przyjąć zasadę bardziej ogólną, zbliżoną do formuły klasycznej.
    Kwestie bardziej szczegółowe zostaną podjęte w dalszych artykułach. Nie
    wyobrażam sobie natomiast, abyśmy mogli w zasadach ustroju zatrzymać się na
    obecnych ustaleniach. Głosowania były prawidłowe. Jako Komisja pracujemy
    jednak w sposób Świadomy. Do chwili przygotowania sprawozdania, do drugiego
    czytania w Zgromadzeniu Narodowym, możemy Zawsze powrócić do kwestii, które
    już rozpatrywaliśmy. Przypominam, że było tak w przypadku art. 5. Proponuję
    więc chwilę rozwagi, jak wybrnąć z sytuacji, w której jesteśmy.
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
    : Wyniki naszych głosowań zrozumiałam w ten sposób, że przyjęty został
    przepis w brzmieniu: „Władza państwowa jest sprawowana przez rozdzielone i
    wzajemnie równoważące się oraz współdziałające organy ustawodawcze,
    wykonawcze i sądownicze. Teraz byłaby kolej na przyjęcie przepisu stwierdzającego, jakie organy sprawują
    jaką władzę. Trudno wyobrazić sobie, aby wśród zasad ustroju nie było
    przepisu określającego, jakie organy sprawują jaki rodzaj władzy. Jeżeli
    chodzi o mój wniosek, to cieszę się, że zostało przyjęte brzmienie niemal
    identyczne z ust. 1. Oczekuję teraz głosowania nad kwestią ujętą w ust. 2
    mojego wniosku. Oprócz tego oczekuję głosowania nad wariantami ust. 2
    przedłożonymi przez podkomisję. Uważam, że kwestia objęta ust. 2 w
    propozycji podkomisji — i w mojej propozycji — powinna być odrębnym
    artykułem.
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
    Muszę zmartwić senator A. Grześkowiak, ale głosowania były świadome.
    Odnosiły się zarówno do ust. l, jak do ust. 2 przedłożonych wniosków. Mam
    wrażenie, że pewne nieporozumienie mogło wynikać z powodu przyjęcia formuły
    o współdziałaniu władz.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Występuję przeciwko kontynuowaniu tej dyskusji, która zmierza do
    podważenia ustaleń przyjętych w głosowaniu. W moim przekonaniu
    rozstrzygnięcia zapadły prawidłowo od strony proceduralnej, ale również
    Świadomie, jeżeli chodzi o poglądy głosujących. Nie jest to sytuacja
    analogiczna jak z art. 5, kiedy to nawet jej autor, prof. W. Osiatyński
    przyznał, że nie oddaje on jego intencji. Chcę również dodać, że podczas
    prac podkomisji podstaw ustroju politycznego i społeczno-gospodarczego długo
    dyskutowaliśmy nad tym, czy klasyczna koncepcja trójpodziału władzy oddaje,
    czy też nie oddaje rzeczywistości. Warto pamiętać, że w klasycznej koncepcji
    trójpodziału nie mieszczą się również inne ważne instytucje ustrojowe, które
    jednak przewiduje dyskutowany projekt. Uważam, że została przyjęta formuła,
    którą można określić jako uogólnioną symbolikę. Kwestia, jak prezydent
    mieści się w klasycznej zasadzie trójpodziału władz, może być przedmiotem
    dyskusji w dalszej części prac. Jeżeli ktoś głosował za propozycją, która w
    strukturze władzy wykonawczej nie wprowadza podziału na Radę Ministrów i
    prezydenta, to uważam, że uczynił to z pełną Świadomością, z którą nie
    wybrał ogólnikowej formuły zaproponowanej w projekcie konkurencyjnym.
    Proporcja głosów jest dość jednoznaczna. Uważam, że mniejszość, która nie
    jest usatysfakcjonowana wynikiem głosowania, nie powinna dążyć do jego
    obalenia.
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
    Nie jestem pewien, czy wszyscy głosowaliśmy znając w pełni konsekwencje
    głosowania. Być może wprowadziłem pewne, zamieszanie wyrażając zgodę na
    formułę mówiącą o współdziałaniu — w świetle wyników głosowania. Ponieważ
    nie było jednak jasności przy prowadzeniu poprzedniego głosowania, proszę
    pana przewodniczącego o ponowne przeprowadzenie odrębnego głosowania nad
    moim pierwotnym wnioskiem i wnioskiem podkomisji.
      </p>
    </div>

  <!--<hr><p class="page-break">strona 76</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
    Przyjmuję, że głosujemy Świadomie. Został również zgłoszony wniosek o
    reasumpcję. Chcę również dodać uwagę do tego, o czym mówił poseł W.
    Cimoszewicz. Obecnie ustalamy brzmienie zasad ustroju. Możemy jednak
    utrudnić sobie prace nad dalszymi rozdziałami, przyjmując zbyt szczegółowe
    rozwiązania w rozdziale pierwszym.
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
    Chcę przypomnieć głosowanie imienne przeprowadzone w dniu
    26 stycznia br. Moim zdaniem Komisja rozstrzygnęła wówczas pomiędzy
    wariantem I a wariantem II art. 9 w wersji pierwotnej. Jeżeli na pytanie o
    to, czy jesteś za prezydentem jako gwarantem ciągłości władzy, oddano 40
    głosów, a na pytanie, czy jesteś za prezydentem stojącym na czele władzy
    wykonawczej, oddano 3 głosy, to nad tą kwestią Komisja nie powinna przejść
    do porządku dziennego. Uważam również, że usunięcie prezydenta z ram władzy
    wykonawczej wcale nie musi prowadzić do osłabienia jego funkcji. Wręcz
    przeciwnie, można sobie wyobrazić pozycję prezydenta jako znacznie
    silniejszą niż w sytuacji, gdy jest tylko gwarantem ciągłości władzy
    wykonawczej. Nie musi to więc mieć wymowy antyprezydenckiej. Pojawia się
    również problem uzupełnienia projektu o kolejny artykuł, który dotyczyłby
    prezydenta. Ponieważ upadła poprawka posła W. Majewskiego i poseł K.
    Łybackiej, a Komisja uzna, że brakuje jakiegoś przepisu po artykule o
    podziale władz, to możliwe jest przyjęcie przepisu dotyczącego prezydenta.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Wit Majewski (SLD):</strong>
    Nie wprowadzajmy praktyki podważania głosowań prawidłowo przeprowadzonych.
    Należy również pamiętać, że prace nad konstytucją nie kończą się.
    Wnioskodawcy innych propozycji mogą złożyć wnioski mniejszości. Na dalszych
    etapach prac mogą one zyskać poparcie większośŚci. Dzisiaj jednak w tej
    kwestii sprawa jest jasna. Uważam również, że w zasadach ustroju można
    określić rolę prezydenta. Można jednak przyjąć, że koncepcja prezydentury
    będzie określona w rozdziale dotyczącym prezydenta,
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
    Nie ulega wątpliwości, że nie musimy dzisiaj popadać w stan zdenerwowania,
    gdyż prace nad konstytucją będą jeszcze trwały przez jakiś czas. Nie
    zakładajmy jednak, że nasze niedociągnięcie poprawi Zgromadzenie Narodowe.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KrollHenryk.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Henryk Kroll (MN):</strong>
    Uważam, że popełniliśmy podstawowy błąd głosując nad propozycją posła J.
    Ciemniewskiego w wersji pierwotnej. Modyfikacja tej propozycji została
    dokonana w drugim głosowaniu. Uważam, że powinno odbyć się głosowanie nad
    poprawką posła J. Ciemniewskiego, w jej brzmieniu pierwotnym.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Głosowanie zostało przeprowadzone w sposób mało czytelny. Uważam, że
    uzasadnia to wniosek o reasumpcję.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazurkiewiczMarek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Marek Mazurkiewicz (SLD):</strong>
    Uważam, że głosowania odbywały się zgodnie z przyjętą procedurą.
    Przegłosowany został wariant podkomisji. Ponadto na poprzednim posiedzeniu
    przyjęliśmy pewne wytyczne kierunkowe. Niedobrze się stało, że jednej z tych
    zasad wyrażającej się w formule prezydenta jako najwyższego przedstawiciela
    Rzeczypospolitej Polskiej, gwarantującego ciągłość władz, nie potraktowano w
    tym rozdziale jako odrębnego artykułu lub ust. 3 w propozycji podkomisji,
    lecz wbudowano ją w integralną część jednego z wariantów. W związku z tym
    składam formalny wniosek, aby przyjętą w głosowaniu zasadę kierunkową poddać
    pod głosowanie jako poprawkę uzupełniającą przyjęty w głosowaniu wariant
    podkomisji, w formie ust. 3, następującej treści: „Prezydent jako najwyższy
    przedstawiciel Rzeczypospolitej Polskiej gwarantuje ciągłość władz .
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PietrzakMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:</strong>
    Nad problemem, który jest przedmiotem debaty, dyskusja toczy się od dawna,
    gdyż jest to zagadnienie modelu państwa, który powstanie w wyniku uchwalenia
    konstytucji. Przegłosowana została zasada podziału władz w jej rozumieniu
    konstytucyjnym, a więc, że są trzy władze: ustawodawcza, wykonawcza i
    sądowa. Nie przesądza to jednak szczegółowych rozwiązań dotyczących tych
    władz. Skoro jest Sejm i Senat, będą to organy władzy ustawodawczej. Jeżeli
    jest prezydent pochodzący z wyborów powszechnych, to powinien być usytuowany
    w konstytucji, a na pewno nie jest organem władzy ustawodawczej ani władzy
    sądowej. Zgodnie z powszechnie pojmowaną zasadą podziału władz prezydent
    jest organem władzy wykonawczej. Jest to zasada, która do tej pory nie
    została naruszona. Ewentualne wyodrębnienie władzy prezydenta oznaczałoby
    czwórpodział władz. Jest to możliwe, lecz należy mieć świadomość, że byłaby
    to zupełnie nowa koncepcja ustroju politycznego państwa, która wymaga
    należytego przygotowania, także teoretycznego. Kwestia ta wymaga więc
    zastanowienia. Możemy przyjąć zasadę, którą proponuje poseł M. Mazurkiewicz,
    lecz później okaże się, że nie będziemy mogli do tej zasady dopasować
    szczegółowych rozwiązań konstytucyjnych, a zasady powinny być wytycznymi dla
    rozwiązań szczegółowych. Nowe zasady trzeba przyjmować z pełną świadomością
    konsekwencji, gdy chodzi o rozwiązania szczegółowe.
      </p>
    </div>

  <!--<hr><p class="page-break">strona 17</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Kwestia, wokół której toczy się spór, zostanie za chwilę rozstrzygnięta w
    głosowaniu. Proszę jednak, aby nie używać argumentów sprzecznych ze zdrowym
    rozsądkiem. Jeżeli powodem do reasumpcji głosowania ma być stwierdzenie, że
    nie było wiadomo, co było przedmiotem głosowania nad wnioskiem posła J.
    Ciemniewskiego, gdyż dodano formułę o współdziałaniu, jest to kompletnie
    nielogiczne. Członkowie Komisji głosujący za propozycją podkomisji głosowali
    bowiem również za formułą o współdziałaniu umieszczoną w ust. 1. Tak więc
    uzupełnienie propozycji posła J. Ciemniewskiego o tę właśnie formułę nie
    mogło działać „odpychająco”, a raczej działało „przyciągająco ”, jeżeli
    chodzi o propozycję podkomisji. Jest to więc oczywisty pretekst, jeżeli
    chodzi o proponowaną reasumpcję głosowania. Chciałbym więc od autorów tej
    propozycji usłyszeć wiarygodne i rzetelne argumenty. Jeżeli ich nie
    usłyszymy, to miejmy Świadomość, w jakich warunkach głosujemy.
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
    Popełniłem błąd proceduralny polegający na dopuszczeniu do zmiany treści
    wniosku posła J. Ciemniewskiego, po wstępnym przegłosowaniu wniosku w
    brzmieniu pierwotnym. W związku z tym nie będę już ulegał presjj
    wnioskodawców. Wnioski będą poddawane pod głosowanie w wersji wcześniej
    uzgodnionej. Przypominam również, że propozycja posła J. Ciemniewskiego w
    pierwszej turze głosowań uzyskała największe poparcie — 21 głosów. Zbędna
    była dyskusja o modyfikacji tej propozycji. Myślę, że winą za ten stan
    rzeczy możemy podzielić się z posłem J. Ciemniewskim, choć jako
    przewodniczący obrad ponoszę większą część winy.
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
    Przyjmuję całą winę na siebie.
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
    Przechodzimy do głosowania. Poddaję pod głosowanie wniosek o reasumpcję
    głosowania nad propozycją nr 18 posła J. Ciemniewskiego, z powodu błędu
    proceduralnego. Stwierdzam, że Komisja w głosowaniu, większością 22 głosów
    popierających, przy 4 głosach przeciwnych i 3 wstrzymujących się, przyjęła
    wniosek. Przechodzimy do rozstrzygającego głosowania merytorycznego. Poddaję
    pod głosowanie wniosek o dokonanie wyboru między propozycją podkomisji
    zawartą we wniosku nr 15, wraz z uzupełnieniami — użycie przycisku ,;za”, a
    propozycją posła J. Ciemniewskiego zawartą we wniosku nr 18 — użycie
    przycisku „przeciw”, wraz z możliwością wstrzymania się. Stwierdzam, że
    Komisja w głosowaniu, większością 23 głosów popierających, przy 4
    przeciwnych i i wstrzymującym się, przyjęła propozycję posła J.
    Ciemniewskiego. Tak więc art. 10 otrzymał następującą treść: „Ustrój
    Rzeczypospolitej Polskiej opiera się na podziale i równowadze władzy
    ustawodawczej, władzy wykonawczej i władzy sądowniczej”. Powracamy do
    kwestii art. 5 w związku z tym, że uczestnicy posiedzenia otrzymali
    zestawienie propozycji poprawek do art. 5. Ponadto przedmiotem rozstrzygnięć
    będzie wniosek podkomisji i wniosek senator A. Grześkowiak. Chcę również
    dodać, że dokonałem autopoprawek w swojej propozycji, która w wersji
    pierwotnej była powtórzeniem obowiązujących przepisów konstytucyjnych
    dotyczących partii politycznych. Modyfikacja polega na włączeniu fragmentu z
    wniosku poseł K. Łybackiej, mówiącego o kształtowaniu i wyrażaniu woli
    obywateli w zakresie realizacji władzy zwierzchniej narodu. Dodałem również
    ust. 2, mówiący o tym, że finansowanie partii politycznych jest jawne.
    Zrezygnowałem natomiast z przepisu stwierdzającego, że o sprzeczności z
    konstytucją celów lub działalności partii politycznej orzeka Trybunał
    Konstytucyjny. Kwestia ta powinna zostać uregulowana w rozdziale o Trybunale
    Konstytucyjnym. Kwestię art. 5 rozstrzygniemy w tej części posiedzenia,
    która będzie przeznaczona na głosowania. Przechodzimy do kwestii przepisów
    dotyczących samorządu terytorialnego i ewentualnie innych form samorządu.
    Chcę zapytać ekspertów, czy w przedłożonych propozycjach brzmienia przepisów
    dotyczących problematyki samorządu dostrzegają być może propozycje
    dyskusyjne z punktu widzenia prawa konstytucyjnego.
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
    Proponuję dodanie ust. 3 w wariantach podkomisji, o
    następującej treści: „Ustawa może ustanowić obowiązkową przynależność osób
    do samorządów określonych w ust. 2, z jednoczesnym przekazaniem tym
    samorządom zadań z zakresu władzy publicznej, jeżeli jest to konieczne w
    demokratycznym społeczeństwie w interesie bezpieczeństwa państwowego lub
    porządku publicznego bądź dla ochrony zdrowia lub moralności publicznej albo
    wolności lub praw innych osób”. Propozycję tę przekazałem posłowi J.
    Ciemniewskiemu w nadziei, że ją poprze. W związku z moją poprawką chcę
    zwrócić uwagę, że dotychczasowy wariant nie zawiera granic w zakresie
    możliwości tworzenia przymusowych samorządów. Teoretycznie będzie więc
    możliwość przymusowego „skolektywizowania” wszystkich zawodów w postaci
    przymusowych samorządów. Będzie to oznaczać ograniczenie wolności człowieka
    w tym zakresie. Ponadto chcę dodać, że istnieje bogate orzecznictwo m.in.
    Europejskiego Trybunału Praw Człowieka, które stanowi, że przymusowe
    samorządy zawodowe i gospodarcze są organami władzy publicznej. Nie są
    natomiast zrzeszeniami działającymi na podstawie art. 9 Konwencji
    europejskiej, która mówi o wolności zrzeszania się obywateli. Tak więc w
    prawie międzynarodowym jest wyraźna dystynkcja między dobrowolnymi
    zrzeszeniami i stowarzyszeniami, a samorządami, które są organami władzy
    publicznej.
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
    Uważam, że kwestie samorządu zawodowego i innych form samorządu, to
    kwestie bardzo skomplikowane i wymagające odrębnej dyskusji. Są to bowiem
    kwestie wyraźnie różne od kwestii samorządu terytorialnego. Proponuję więc
    oddzielić dyskusję na temat samorządu terytorialnego i na temat innych form
    samorządu. Uważam więc, że propozycja prof. L. Wiśniewskiego powinna być
    dyskutowana na następnym posiedzeniu. Jest to bowiem sprawa o charakterze
    fundamentalnym, zarówno z punktu widzenia organizacji władzy publicznej, jak
    i z punktu widzenia statusu obywatela wobec władzy publicznej. Generalnie
    rzecz biorąc, popieram myśl wyrażoną w propozycji prof. L. Wiśniewskiego.
    Dyskusji wymaga natomiast na pewno kwestia katalogu przesłanek materialnych
    koniecznych do zaprezentowanych ograniczeń. Proponuję więc, aby ust. 2 był
    dyskutowany na następnym posiedzeniu.
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
    Należy jednak pamiętać, że nie dyskutujemy o przepisach dotyczących
    samorządu w ogóle, lecz o przepisach wyrażających ogólną zasadę dotyczącą
    samorządu, która będzie zawarta w rozdziale pierwszym. Uważam więc, że
    możemy rozdzielić problematykę zawartą w ust. 1 i problematykę zawartą w
    ust. 2, lecz dyskusja nad obydwoma kwestiami powinna odbyć się na
    dzisiejszym posiedzeniu. Jeżeli dobrze zrozumiałem posła J. Ciemniewskiego,
    to skłania się on do koncepcji, że kwestia innych —- poza terytorialnym —
    form samorządu nie powinna być zawarta w konstytucji w ramach zasad ustroju.
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
    Kwestia ta powinna być podjęta w zasadach ustroju. Powinno mieć miejsce
    konstytucyjne ograniczenie materialnych warunków funkcjonowania innych form
    samorządu.
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
    Przyjmuję zgłoszoną uwagę i proponuję, abyśmy rozpoczęli od kwestii
    ujętych w ust. 1 propozycji podkomisji, a więc od kwestii samorządu
    terytorialnego. Jeżeli chodzi o art. 11 ust. 1, to w wariancie I brzmi on
    następująco: „Rzeczpospolita Polska gwarantuje udział samorządu
    terytorialnego w sprawowaniu władzy publicznej”. Wariant II ust. 1. brzmi:
    „Samorząd terytorialny jest podstawową formą udziału obywateli w sprawowaniu
    władzy publicznej”. Alternatywnie proponowane jest dopisanie formuły: „na
    szczeblu lokal>nym”.
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
    Uważam, że propozycja prof. L. Wiśniewskiego powinna być
    Posiedzenia Komisji Konstytucyjnej ZN dyskutowana przy okazji rozpatrywania
    rozdziału o wolnościach i prawach obywateli.
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
    Nie mogę zgodzić się z poglądem zaprezentowanym przez prof. P.
    Sarneckiego. Istotą samorządu zawodowego nie jest zrzeszanie się, lecz
    wykonywanie władzy publicznej przez organizmy oparte na zasadzie
    przymusowego członkostwa. Jest to zaprzeczenie zasady wolności zrzeszania
    się. Jeżeli wśród zasad ustroju podejmujemy kwestię wykonywania władzy
    publicznej, to zagadnienie samorządu zawodowego powinno być również podjęte.
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
    Przechodzimy do dyskusji nad art. 1l, a więc do formuły generalnej
    dotyczącej samorządu terytorialnego.
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
    Formuła zawarta w każdym z trzech wariantów stwierdza, że samorząd
    terytorialny to coś więcej niż techniczna decentralizacja administracji, jej
    dekoncentracja czy usprawnienie. Jest to również sposób sprawowania władzy.
    Nasuwa się pytanie, dlaczego po długich dyskusjach zaproponowana została
    formuła mówiąca o gwarantowaniu udziału samorządu terytorialnego w
    sprawowaniu władzy publicznej, w miejsce formuły stwierdzającej, że samorząd
    terytorialny jest podstawową formą udziału obywateli w sprawowaniu władzy
    publicznej, z możliwym rozszerzeniem wariantu II i [II o zwrot: „na szczeblu
    lokalnym”. Rozpocznę od wyjaśnienia formuły mówiącej o szczeblu lokalnym.
    Zespół przygotowujący prezentowane przepisy odrzucił tę formułę z tego
    powodu, że eliminuje ona w przyszłości wyższe szczeble samorządu. W
    literaturze uznaje się, że gmina to na pewno szczebel lokalny. Sporną
    kwestią jest, czy powiat to jeszcze szczebel lokalny. Przeważa pogląd, że
    jest to szczebel raczej ponadlokalny. Gdyby w przyszłości samorząd miał być
    na jeszcze wyższym szczeblu, to nie byłby to już szczebel lokalny. Należy
    dodać, że pojęcie lokalności jest rozumiane w różny sposób. Przeważa jednak
    takie rozumienie lokalności, jakie przedstawiłam. Z, tych właśnie przyczyn
    zrezygnowaliśmy z określenia mówiącego o szczeblu lokalnym. Kolejna kwestia
    to pytanie, co oznacza formuła, że samorząd jest podstawą udziału obywateli
    w sprawowaniu władzy publicznej. W przekonaniu większości członków zespołu
    norma konstytucyjna nie powinna mieć charakteru tylko opisowego.
    Rzeczywiście jest tak, że samorząd jest podstawową formą udziału obywateli w
    sprawowaniu władzy publicznej. Z formuły tej nie wynika jednak żadna treść
    normatywna. Ponadto w orzecznictwie powstałyby wątpliwości, jakie znaczenie
    przypisać pojęciu: „podstawowa”. Jeżeli w konstytucji lub ustawie znajdzie
    się stwierdzenie, że gmina jest podstawową jednostką samorządu
    terytorialnego, to formuła ta ma ścisłą treść. Oznacza bowiem, że wszystkie
    kompetencje sporne — lub nowe — w razie wątpliwości przypadają gminie. Czy
    to oznacza, że jeżeli powstanie spór, w jakiej formie obywatel powinien
    sprawować władzę publiczną, to będzie się uznawało, że ma ją sprawować w
    formie samorządu? Dotychczasowy dorobek orzecznictwa Naczelnego Sądu
    Administracyjnego takie znaczenie przypisywał określeniu „podstawowa ”. Stąd
    też ta niewinna z pozoru formuła zaczęła wydawać się nam niejednoznaczna i
    otwierająca w przyszłości różne możliwości interpretacyjne i możliwości
    nieprecyzyjnego rozumienia tego pojęcia. Chcąc odejść od tylko
    deklaratoryjnego opisania rzeczywistości i sposobu, w jaki obywatele
    sprawują władzę publiczną, dążono do wskazania na zobowiązania
    Rzeczypospolitej do czynnego chronienia i gwarantowania tego, aby samorząd
    terytorialny miał rzeczywiście udział w sprawowaniu władzy publicznej.
    Przeniesienie tej kwestii na sytuację normatywną oznacza, że jeżeli
    ustawodawca chciałby odebrać samorządowi wpływ na decydowanie o sprawach
    lokalnych — typowych sprawach wspólnoty gminnej — to wówczas należy
    wyobrazić sobie skargę konstytucyjną stwierdzającą naruszenie gwarancji
    stanowiącej o tym, że Rzeczpospolita Polska gwarantuje udział samorządu
    terytorialnego w sprawowaniu władzy publicznej. Nie mogłaby to być jedyna
    podstawa roszczenia, lecz w razie wątpliwości lub sporów dotyczących treści
    ustawodawstwa mogłaby mieć dla Trybunału Konstytucyjnego znaczenie dodatkowo
    wyjaśniające.
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
    Chcę zapytać poseł I. Lipowicz, który z wariantów ust. 1 najbardziej
    odpowiada istocie wniosków, które sformułowała?
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
    W moim przekonaniu istocie wniosku najbardziej odpowiada ust. 1 w
    wariancie I. Został sformułowany w oparciu o postulaty środowisk
    samorządowych, choć w środowiskach samorządowych występują różnice
    stanowisk. Ze zrozumieniem odnoszę się do innych opinii.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazurkiewiczMarek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Marek Mazurkiewicz (SLD):</strong>
    Wiele tez, które chciałem przedstawić, wypowiedziała już poseł I.
    Lipowicz, za co jej dziękuję. Również popieram wariant I ust. 1, w
    nawiązaniu do wątków, które zaprezentowała poseł I. Lipowicz. Wariant I, w
    przeciwieństwie do wariantu II i III, nie deklaruje pewnego faktu prawnego,
    czy quasi--prawnego, lecz stwarza prawny obowiązek gwarantowania udziału
    samorządu w sprawowaniu władzy publicznej i w konsekwencji stanowi wyraźną
    normę interpretacyjną dla Trybunału Konstytucyjnego w ocenianiu
    ustawodawstwa z punktu widzenia zgodności z konstytucją. Chodzi o zgodność z
    punktu widzenia realnych i istniejących gwarancji ustawowych, zapewniających
    udział samorządu w sprawowaniu władzy publicznej. Ponadto formuła z wariantu I jest również normą interpretacyjną dla
    orzecznictwa innych organów — co do sposobu funkcjonowania i konsekwencji
    powołania organów samorządowych.
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
    Rysuje się wyraźne poparcie dla ust. I w wariancie I. Czy są odmienne
    opinie?
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
    Popieram rozwiązanie wyrażone w projekcie obywatelskim NSZZ
    „Solidarność”. W swojej pierwszej wersji sprowadza się ono do poparcia ust.
    1. Uważamy jednak również, że nie można Ściśle oddzielać form samorządu
    terytorialnego od form samorządu w ogóle. Samorząd jako taki powinien być
    trwałym elementem ustroju państwa. Projekt obywatelski idzie daleko w tym
    kierunku, nie przewidując ograniani preferencji na rzecz partii
    politycznych. Każda inna forma samorządu jest nieodłącznie związana z
    trendem ustrojowym 1 z zasadami, które widzimy jako podstawę funkcjonowania
    III Rzeczypospolitej. Wydaje się więc, że oddzielenie samorządu
    terytorialnego od zapewnienia możliwości działania innych form samorządu
    jest — na zasadzie wniosków a contrario — upośledzeniem życia samorządowego
    sprowadzeniem go do form terytorialnych. Dlatego też opowiadam się za tym,
    aby w zasadach ustroju figurowała — nie ograniczona ustawą — możliwość
    działania innych form samorządu. Tak więc popieram ust. 1 i ust. 2, lecz ze
    skreśleniem wyrazów: „w granicach określonych ustawą”. Formuła ta wskazuje
    na to, że ustawa będzie raczej ograniczać. Uważamy również, że przepis
    konstytucyjny nie ma waloru definicji, lecz walor dyrektywy egzekwowalnej.
    Stąd też formuła mówiąca o gwarancji jest zwrotem określającym status nie
    tylko positivus ze strony państwa, ale również status activus w zakresie
    realizacji tego prawa, które pośrednio jest również prawem obywatelskim.
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
    Tak więc mamy warianty podkomisji, wniosek senatora P. Andrzejewskiego 1
    wcześniej złożony wniosek senator A. Grześkowiak.
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
    Proszę senatora P. Andrzejewskiego, aby przypomniał pełne brzmienie
    swojego wniosku.
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
    Jeżeli chodzi o motywację, to jestem całkowicie zgodny z poseł I.
    Lipowicz. Treść naszej propozycji jest następująca: „Ust. 1. Samorząd
    terytorialny jest elementem ustroju Państwa. Rzeczpospolita Polska
    gwarantuje udział samorządu terytorialnego w sprawowaniu władzy. Ust. 2.
    Rzeczpospolita Polska gwarantuje swobodę działalności innych form
    samorządności”. Nasza propozycja nie zawiera formuły dającej
    podstawy do ustawowych ograniczeń samorządu. Należy bowiem pamiętać o
    zasadzie legalizmu. Ponadto warto pamiętać, że samorządność to realizacja
    praw obywatelskich. Tam gdzie obywatele, choćby na zasadzie form
    nierządowych czy pozaustawowych, chcą się zrzeszać, tam nie obowiązuje
    zasada legalizmu, lecz zasada, w myśl której: co nie jest zabronione, jest
    dozwolone. Dopiero gdy nastąpi transformacja w organ władzy samorządu, to
    wówczas w grę wchodzi zasada legalizmu.
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
    Chcę zapytać senatora P. Andrzejewskiego, czy nie obawia się, że
    eliminacja pojęcia „władza publiczna” na rzecz pojęcia: „władza” nasunie
    wątpliwości, o jaką może chodzić władzę. Na pewno nie chodzi o władzę
    rodzicielską. Myślę, że można rozważyć władztwo w związkach zawodowych czy w
    stowarzyszeniach. Mieliśmy przypadki ingerencji związków zawodowych w zakres
    kompetencji samorządu terytorialnego, domagających się na mocy ustawy o
    związkach zawodowych konsultacji każdej uchwały rady miejskiej, która
    dotyczy interesów pracowniczych. Szczególnie w mieście zdominowanym przez
    duży zakład pracy — praktycznie każda uchwała rady miejskiej dotyczy
    interesów pracowniczych. Jeżeli zostanie zachowana formuła mówiąca o władzy,
    to czy nie zachodzi niebezpieczeństwo, że samorząd terytorialny będzie miał
    prawo do sprawowania każdej władzy, a więc również władzy niepublicznej,
    takiej jak na przykład władza zwi zkowa, stowarzyszeniowa, czy władze
    związków wyznaniowych.
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
    Ten argument poseł I. Lipowicz jest przekonujący.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Chcę zapytać senatora P. Andrzejewskiego, czy sformułowanie o
    gwarantowaniu swobody działania innych form samorządności nie może być
    interpretowane jako wykluczające możliwość wprowadzenia obowiązkowej
    przynależności do niektórych form samorządu. Obowiązkowa przynależność
    mogłaby być uznana za ograniczenie swobody działalności. Czy jest to
    intencją wnioskodawcy? Rozumiem, że intencją jest na pewno zagwarantowanie
    wolności powstawania i działania innych form samorządu.
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
    Problem, na który wskazał poseł W. Cimoszewicz, jest problemem
    rzeczywistym. Przykładem może być projekt ustawy o samorządzie gospodarczym,
    gdzie zwycięża koncepcja obligatoryjnej przynależności w interesie
    konsumentów i odbiorców usług. Uważam, że stosunkowo szeroka formuła
    konstytucyjna i ustawowe formy samorządności, które nie pochodzą wprost od
    obywateli, lecz są formą organizacji jakiejś dziedziny życia, powodują, że
    nie będzie sprzeczności z zasadą szanowania wolności obywatelskich. Jeżeli więc pominiemy formułę mówiącą o granicach ustawowych,
    to osiągniemy dwa cele. Tam, gdzie będzie obowiązywać ustawa, będzie to
    samorządność zorganizowana na zasadzie przedmiotowej. Tam, gdzie podmioty
    same będą chciały realizować samorządność, nie będą ograniczone ustawowo,
    poza klauzulami generalnymi wynikającymi z konstytucji i dotyczącymi
    ogólnych praw człowieka.
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
    Jeżeli chodzi o kwestię formuły generalnej dotyczącej samorządu
    terytorialnego, to oprócz wariantów podkomisji mamy wniosek senatora P.
    Andrzejewskiego i wniosek senator A. Grześkowiak. Wnioski te zostaną poddane
    pod głosowanie ok. godz. 15.
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
    Z mojej strony nie ma nawet cienia zgody na formułę zaproponowaną przez
    senatora P. Andrzejewskiego. Z pewnym zaskoczeniem muszę powiedzieć, że
    Świadczy to o szerokim froncie różnych sił politycznych, ale senator P.
    Andrzejewski reprezentuje socjalistyczną koncepcję samorządu, która była
    obecna od czasów chruszczowowskiej teorii o obumieraniu państwa i
    przekształcaniu państwa w organizację samorządu. To jest właśnie ten sposób
    myślenia, który pojawił się od ok. 1962 r. w socjalistycznej myśli o
    państwie. Nasze stanowisko jest bardziej tradycyjne i zakłada, że samorząd
    jest formą sprawowania administracji publicznej w ramach organizacyjnych
    pozwalających uczestnikom tych organizacji — na zasadzie przymusu
    państwowego — sprawowania pewnych funkcji publicznych. Jest to istota
    tradycyjnego rozumienia samorządu zawodowego. Każdy wniosek jest oczywiście
    uprawniony, gdyż mówimy o pewnym modelu państwa. Jest jednak tak, że w
    pozostałych zgłoszonych propozycjach zawarta jest tradycyjna myśl, jeżeli
    chodzi o samorząd. Propozycja senatora P. Andrzejewskiego jest propozycją
    zupełnie innego rozumienia samorządu. Jeżeli więc mielibyśmy dokonywać w
    głosowaniu wyboru między przedłożonymi propozycjami, powinno to być
    poprzedzone dyskusją na temat modelu oraz miejsca i roli samorządu w
    systemie państwa.
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
    Apeluję o powrót do dyskusji nad ust. 1, a więc do kwestii samorządu
    terytorialnego.
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
    Nie chcę być uszczypliwy wobec posła J. Ciemniewskiego, ale jest tak, że
    każdy ma swoją perspektywę i genezę interpretacji instytucji prawnych. Moja
    interpretacja wywodzi się ze społecznej nauki Kościoła i kilku encyklik.
    Jeżeli więc poseł J. Ciemniewski podsumowuje, skąd wzięła się moja
    koncepcja, to zgodnie z moją genezą i osobniczym rozwojem Świadomości, a nie
    własnymi doświadczeniami. Posiedzenia Komisji Konstytucyjnej ZN
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
    Mówiąc nieco żartobliwie: można stwierdzić, że efektem wymiany poglądów
    między posłem J. Ciemniewskim i senatorem P. Andrzejewskim jest ustalenie,
    że inspiracją Chruszczowa były encykliki papieskie.
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
    Chcę również zaprezentować wniosek senator A. Grześkowiak, który jest
    powtórzeniem art. 5 projektu senackiego. Jego brzmienie jest następujące:
    „Rzeczpospolita Polska uznaje i gwarantuje samorządowi terytorialnemu oraz
    samorządom tworzonym przez obywateli, udział w sprawowaniu władzy”.
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
    Chcę zwrócić uwagę na niebezpieczeństwo, jakie kryje się w związku z
    zaprezentowaną propozycją senator A. Grześkowiak. Chodzi o to, że propozycja
    ta gwarantuje udział w sprawowaniu władzy również innym samorządom tworzonym
    przez obywateli. Może więc być tak, że grupa obywateli — na przykład
    skinheadów — utworzy swój samorząd. Na podstawie konstytucji będzie więc
    mogła domagać się udziału we władzy. Tymczasem powinno być tak, że jest
    system przedstawicielski i logiczny system sprawowania władzy oraz
    konstytucyjna koncesja na rzecz zasłużonego samorządu terytorialnego. W
    takiej sytuacji tylko ustawa i to w określonych przypadkach może — na
    przykład samorządowi lekarskiemu, czy kombatanckiemu — odstąpić cząstkę
    władzy. Natomiast stworzenie takiego prawa podmiotowego, które każdej grupie
    obywateli, która się stowarzyszy, da cząstkę władzy, mogłoby spowodować
    skutki, których zapewne nie chciałaby senator A. Grześkowiak.
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
    Rozumiem, że kończymy dyskusję o samorządzie terytorialnym. Głosowaniu
    zostaną poddane warianty podkomisji, wniosek senatora P. Andrzejewskiego 1
    senator A. Grześkowiak. Wydaje się, że jest szansa na konsens wokół art, 11
    ust, I wariantu I podkomisji. Przechodzimy zatem do dyskusji nad przepisem
    rozdziału pierwszego, który będzie dotyczył innych form samorządu — poza
    samorządem terytorialnym. Przypominam, że propozycję stosownego przepisu
    zgłosił już prof. L. Wiśniewski. Jej brzmienie jest następujące: „Ustawa
    może ustanowić obowiązkową przynależność osób do samorządów określonych w
    art. 2, z jednoczesnym przekazaniem tym samorządom zadań z zakresu władzy
    publicznej, jeżeli jest to konieczne w demokratycznym społeczeństwie w
    interesie bezpieczeństwa państwowego lub porządku publicznego, bądź dla
    ochrony zdrowia lub moralności publicznej albo wolności lub praw innych
    osób”. Chodzi więc o kwestię obowiązkowej przynależności do samorządów,
    zwłaszcza o charakterze zawodowym. nim mar A. M0 M a A A m M A w A A A M m
      </p>
    </div>

  <!--<hr><p class="page-break">strona 81</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazurkiewiczMarek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Marek Mazurkiewicz (SLD):</strong>
    Nawiązując do kwestii innych form samorządu oraz do dyskusji sejmowej o
    samorządzie gospodarczym, gdzie pojawiły się tendencje korporacjonistyczne,
    w porozumieniu z prof. L. Wiśniewskim i w duchu jego poprawki, proponuję
    przyjęcie art. 11 ust. 2 w wariancie I. Ponadto proponuję uzupełnienie w
    formie ust. 3 w brzmieniu: „Ustawa może ustanowić obowiązkową przynależność
    osób do samorządów określonych w ust. 2, jeżeli jest to uzasadnione
    interesem bezpieczeństwa państwowego lub porządku publicznego dla ochrony
    zdrowia lub moralności publicznej, albo dla ochrony wolności i praw innych
    osób”. Zaproponowane ograniczenia wiązałyby się, generalnie rzecz biorąc, z
    interesem publicznym. Użycie formuły „interes publiczny” byłoby zbyt
    szerokie I tworzyłoby zbyt szerokie pole do interpretacji tego pojęcia przez
    Trybunał Konstytucyjny lub inne sądy. Istota problemu to przyznanie prawa i
    gwarancji zrzeszania się w tych strukturach samorządowych, które realizują
    pewne funkcje publiczne lub są organizacjami zaufania publicznego —
    adwokaci, lekarze, radcowie prawni, notariusze. Ponadto mogłoby to wynikać z
    konieczności ochrony zdrowia, tam gdzie samodzielne wykonywanie — na
    podstawie ustawy o działalności gospodarczej — usług z zakresu ochrony
    zdrowia, kończyło się źle dla pacjentów. Chodzi również o ochronę praw
    mniejszości narodowych.
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
      Przedstawiciel pełnomocnika obywatelskiego projektu konstytucji Michał Drozdek:
    </strong>
    Chcę bronić zapisu w wersji projektu obywatelskiego,
    zwłaszcza jeżeli chodzi o ust. 2 w brzmieniu: „Rzeczpospolita gwarantuje
    swobodę działalności innych form samorządności .. Chodzi przede wszystkim o
    uniknięcie reglamentacji przez państwo działalności samorządowej. Rzecz w
    tym, aby państwo nie mogło zabronić jakiejś grupie osób stworzenia
    samorządu. Przepis ust. 2 nie stor w sprzeczności z obowiązkiem
    przynależności do samorządów. Nie powinno być również problemów z
    przekazaniem samorządom udziału we władzy publicznej. Jest to gwarantowane
    tylko samorządowi terytorialnemu. Inne kwestie dotyczące samorządów będą
    regulowane w ustawie. Chcę również przypomnieć, że obecnie pracujemy nad
    zasadami ustroju, w których powinny być określone te kwestie, które są
    istotne dla danego typu ustroju. Jeżeli zakładam, że tworzymy obywatelski
    typ ustroju, a więc ustrójj w którym obywatele w miarę możliwości decydują o
    swoich sprawach, to konieczne jest wpisanie gwarancji samorządowych, gdyż
    jest to zasada ustroju. Rozwiązania szczegółowe mogą się znaleźć w ustawach
    lub w dalszej części konstytucji.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:</strong>
    Bardzo gorąco protestuję przeciwko przyjęciu ust. 3, zaproponowanego przez prof. L. WiŚniewskiego i posła M.
    Mazurkiewicza. Nie jest to bowiem materia rozdziału pierwszego. Żaden z
    dotychczas przyjętych artykułów nie odsyła tak szczegółowo do ustawy. Uważam
    więc, że należy przyjąć formułę, stwierdzającą, że Rzeczpospolita w
    granicach ustaw zapewnia tworzenie samorządów. Samorząd terytorialny
    powinien mieć oparcie bezpośrednio w konstytucji, również jeżeli chodzi o
    udział we władzy publicznej. Szczegóły ureguluje ustawa o samorządzie
    terytorialnym. Jeżeli chodzi o inne samorządy, to należy napisać o
    możliwości ich utworzenia w granicach określonych w ustawach.
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
    Sprawa, nad którą dyskutujemy, chyba nie jest tak prosta, skoro dyskusja
    trwa i zgłaszane są dalsze propozycje. Chodzi zwłaszcza o określenie zakresu
    praw innych form samorządu. W związku z tym chcę przypomnieć, że 40 lat temu
    było tak, że aby być członkiem kasy zapomogowo-pożyczkowej należało być
    członkiem związku zawodowego, gdyż tak ustaliły związki zawodowe. Chodzi o
    to, aby uniknąć takich rozwiw przypadku innych form samorządu. Proszę
    również pamiętać, że kwestie samorządu terytorialnego są następnie
    szczegółowo uregulowane w rozdziale o samorządzie terytorialnym. O innych
    formach samorządu będzie stanowił tylko ten jeden przepis, o którym teraz
    debatujemy. Musimy więc rozstrzygnąć, czy przedłożone propozycje wykluczają
    — czy też nie — przyznanie innym samorządom prawa do posiadania władzy
    publicznej. Chcę również dodać, że zgadzam się z prof. S. Gebethnerem, że
    przedłożone propozycje ust. 3 są zbyt szczegółowe. Ponadto chcę zapytać
    ekspertów, czy brzmienie ust. 2 gwarantuje to, że inne formy samorządu nie
    będą sobie uzurpować prawa do sprawowania władzy publicznej, zwłaszcza w
    zakresie tworzenia prawa.
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
    Podzielam pogląd prof. S. Gebethnera, że w ramach rozdziału o zasadach
    ustroju nie należy przyjmować rozwibardzo szczegółowych. Uważam, że kwestie
    samorządu terytorialnego i zagadnienia innych form samorządu powinny być
    rozstrzygnięte w ramach tego przepisu. Obie te kwestie są bowiem powiązane
    ze sobą. Art. Il ust. 1 wariant I dotyczy udziału w sprawowaniu władzy przez
    samorząd terytorialny, a samorząd terytorialny obejmuje ludzi z racji ich
    miejsca zamieszkania. Ust. 2 dotyczy natomiast zupełnie innych kwestii,
    czyli samorządu związanego z wykonywaniem określonego zawodu bądź określonej
    pracy. Opowiadam się za następującą formułą ust. 2: „Rzeczpospolita Polska
    zapewnia możliwość działania innych form samorządu”. Uważam, że ograniczenia
    tworzenia samorządu zaproponowane w ust. 3 Posiedzenia Komisji
    Konstytucyjnej ZNprzez posła M. Mazurkiewicza nie bardzo pasują do istoty
    samorządu. Jestem więc przeciwny ust. 3 o tej treści.
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
    Popieram pogląd przedstawiony przez senatora J. Orzechowskiego, a nawet
    poszedłbym jeszcze dalej. Jestem bowiem przeciwny wprowadzeniu dokonstytucji
    przepisu stwarzającego możliwość wprowadzenia obowiązkowej przynależności do
    samorządu. Mogłoby to być nadużywane przez ustawodawcę. Ponadto nasuwa się
    pytanie, czy każdy lekarz musi należeć do samorządu lekarskiego, a każdy
    nauczyciel akademicki do samorządu akademickiego? Uważam, że nie musi.
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
    Nawiązując do wypowiedzi senatora 5. Pastuszki chcę
    powiedzieć, że jego koncepcja jest możliwa do zrealizowania przy zmienionej
    koncepcji samorządu zawodowego — jako organizacji o dobrowolnej
    przynależności. Oznaczać to będzie wówczas korzystanie z wolności zrzeszania
    się. Dyskusja dotyczy jednak czegoś innego, gdyż mówimy o sytuacji, w której
    w grę wchodzi udział w sprawowaniu władzy publicznej. Jeżeli jakiś samorząd
    dysponuje możliwością władczego oddziaływania na inne podmioty oraz
    uprawnieniem do egzekwowania decyzji przy zastosowaniu przepisów o
    przymusowym postępowaniu administracyjnym, to mamy do czynienia z władzą
    publiczną, W takiej sytuacji w ogóle nie należy brać pod uwagę ust. 2 w
    wariancie II, mówiącego o gwarantowaniu swobody działalności innych form
    samorządu. Trudno bowiem mówić o swobodzie, gdyż państwo narzuca określonej
    grupie zawodowej obowiązek przynależności oraz zakres kompetencji samorządu
    tej grupy zawodowej. Tego typu samorząd nie może również sam się rozwiązać.
    Jego członkowie muszą Świadczyć na utrzymanie aparatu samorządu, choć kwota
    jest odejmowana od podstawy opodatkowania. Odnosząc się do uwagi prof. S.
    Gebethnera chcę powiedzieć, iż zgadzam się, że kwestię tę można przenieść do
    rozdziału o samorządzie, w którym jest mowa tylko o samorządzie
    terytorialnym. Konieczne byłoby więc rozszerzenie treści tego rozdziału.
    Przy utrzymaniu rozpatrywanego projektu — o innych formach samorządu mowa
    jest tylko w art. 11 ust. 2.
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
    Zgadzam się całkowicie z prof. L.Wiśniewskim. Chcę dodać, że należy w
    pełni odróżniać samorząd od stowarzyszenia. Są to dwie wyraźnie jednak różne
    formy organizowania się społeczeństwa obywatelskiego. Polemizując z
    senatorem J. Orzechowskim chcę powiedzieć, że nie należy w art. 11 ust. 2
    wykreślać odesłania do ustawy. Formuła ta stwarza ramy ograniczające
    ekspansję samorządu poza zakres przyznany mu prawem i przejmowania przez
    samorząd uprawnień, które mu się nie należą. Chodzi również o zabezpieczenie samorządu przed inwazją innych instytucji. Tak więc ustawowa
    „rama” działa w obu kierunkach. Zabezpiecza samorząd przed działaniem
    uzurpatorów zewnętrznych oraz ogranicza uprawnienia samorządu wykraczające
    poza jego naturalne funkcje określone w ustawie.
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
    Proszę ekspertów, aby zastanowili się nad rozwiązaniem, które zachowałoby
    normę generalną dotyczącą innych form samorządu w zasadach ustroju, a
    jednocześnie — w innym miejscu — zostałaby zachowana norma mówiąca o
    możliwości wprowadzenia obowiązkowej przynależności do określonych form
    samorządu. Zgadzam się bowiem z prof. S. Gebethnerem, że należy unikać norm
    bardzo szczegółowych w rozdziale pierwszym.
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
    Tocząca się ciekawa debata wynika z dwóch przyczyn. Przyczyna pierwsza to
    spory o pojęcie i istotę samorządu. Mam nadzieję, że wyjaśnienia ekspertów
    pozwolą ominąć tę rafę. Druga przyczyna to novum w postaci uwagi prof. L.
    Wiśniewskiego i wniosku posła M. Mazurkiewicza. Świadczą one o tym, że
    dostrzegamy w tym momencie poważny brak w dotychczasowych rozważaniach na
    ten temat. Poprawka posła M. Mazurkiewicza jest bardzo ważnym uzupełnieniem,
    które nie może być przeoczone. Wydaje się, że sprzeciw prof. S. Gebethnera
    dotyczy wyłącznie usytuowania przepisu, a nie meritum. Chcę również
    przypomnieć, że w trakcie prac podkomisji rozważano możliwość przyjęcia
    jednej generalnej formuły dotyczącej samorządu. Przykładem takiej formuły
    może być art. 7 projektu prezydenckiego, który brzmi: „Rzeczpospolita Polska
    gwarantuje samorządom udział w sprawowaniu władzy publicznej”. Bardziej
    szczegółowe rozważania dotyczące samorządu terytorialnego oraz innych form
    samorządu byłyby przesunięte do rozdziału poświęconego samorządom. Wśród
    przepisów tego rozdziału powinna znaleźć się również poprawka posła M.
    Mazurkiewicza.
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
    Jeżeli przedstawiciele Prezydenta RP uznają to za stosowne, mogę zgłosić
    propozycję ujętą w projekcie prezydenckim. Uważam, że jest to interesująca
    formuła.
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
    Uważam, że przepis dotyczący innych form samorządu nie powinien znaleźć
    się w rozdziale o prawach i woInościach obywateli, lecz w rozdziale o
    samorządzie. Konieczna byłaby wówczas zmiana tytułu rozdziału na „Samorząd”.
    W rozdziale tym powinien znaleźć się również przepis, który przyznałby
    prawodawcy dwa uprawnienia. Pierwsze z nich to możliwość atrybucji władzy
    samorządom, czyli możliwość przekazania władzy. Należałoby stwierdzić, że
    samorząd zawodowy władzę może dostać tylko od władzy publicznej. Przepis
    tego typu powinien również poddać kontroli Trybunału Konstytucyjnego
    uprawnienie samorządu zawodowego do tworzenia prawa. Konieczny jest również
    przepis mówiący o możliwości wprowadzenia obowiązku przynależności do
    samorządu. Spośród zaproponowanych formuł ogólnych szczególnie przydatna
    wydaje się formuła zaproponowana przez dr. W. Kuleszę.
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
    Wydaje się, że powinniśmy zmierzać w kierunku takiego rozwiązania, aby
    artykuł mówiący o obowiązkowej przynależności do samorządu i atrybucji jego
    uprawnień znalazł się w rozdziale o samorządzie, który w obecnym brzmieniu
    nie jest zbyt obszerny.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazurkiewiczMarek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Marek Mazurkiewicz (SLD):</strong>
    Zgadzam się z sugestią pana przewodniczącego, aby materię, o której
    dyskutujemy, umieścić w rozdziale o samorządzie. Chcę również odnieść się do
    pewnego nieporozumienia, które widoczne jest niekiedy w Sejmie i Senacie.
    Jeżeli mówi się o możliwości działania samorządu, oznacza to fakultatywność
    powołania samorządu określonej grupy zawodowej czy korporacji. Jeżeli
    natomiast zostanie wprowadzony system samorządowy — korporacyjny — to tym
    samym zostaje wprowadzony obowiązek uczestnictwa, czego wyrazem jest
    dyscyplinarne podporządkowanie członków tej korporacji organom tego
    samorządu. Oznacza to również możliwość reglamentacji pracy. Klasycznym,
    patologicznym przykładem tak funkcjonującego samorządu jest osławiony
    samorząd taksówkarzy na lotnisku Okęcie, który wprowadził wręcz złodziejską
    reglamentację usług. Jest to sprzeczne z zasadami demokratycznego państwa
    prawa. Należy dodać, że w tym kierunku zmierzają niektóre wypowiedzi w
    dyskusji nad samorządem gospodarczym. Niektórzy chcieliby wprowadzić
    możliwość orzekania o zakazie wykonywania zawodu przez członków niektórych
    samorządów, którzy narażą się osobom kierującym tym samorządem. Nie można do
    tego dopuścić.
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
    <strong>Senator Jan Orzechowski (SLD):</strong>
    Mam uwagę do wypowiedzi prof. L. Wiśniewskiego. Nie uważam, aby za słuszny
    można było uznać pogląd, że samorząd zawodowy — nawet ten przymusowy — jest
    organem władzy publicznej. Nie jest to organ władzy publicznej, lecz organ
    wykonujący niektóre funkcje władzy publicznej. Jako organ nie może być
    jednak utożsamiany z władzą publiczną. Uważam, że o organach samorządu w
    ogóle nie można mówić jako o organach władzy publicznej, gdyż część
    samorządów nie ma charakteru przymusowego.
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
    Odnosiłem wrażenie, że o tym cały czas dyskutujemy.
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
    W zakresie funkcji zleconych organ samorządu jest organem władzy
    publicznej. Uzasadnia to, dlaczego w jednym zdaniu nie możemy mówić o
    samorządzie terytorialnym i samorządzie zawodowym. W grę wchodzą bowiem
    również zadania własne. Samorząd terytorialny jest jednak bardzo szczególną
    formą samorządu, z racji której mamy do czynienia z wyborami powszechnymi.
    Ponadto zgodnie z Europejską Kartą Samorządu Terytorialnego kompetencje
    samorządu terytorialnego są całkowite i wyłączne oraz uznaje się ich
    pierwotny charakter zgodnie z zasadą subsydialności, a więc pierwszeństwo w
    realizacji zpaństwa. Należy więc pamiętać o jakościowej różnicy wyróż:
    iającej samorząd terytorialny. Powinien on być ujęty w odrębnym przepisie.
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
    Rozumiem, że chodzi o udział samorządu w sprawowaniu władzy publicznej.
    Wynika to z brzmienia ust. 1 w wariancie I. Ponadto przychylam się do uwagi
    poseł I. Lipowicz, aby z formułą samorządu terytorialnego nie łączyć innych
    form samorządu. Przedkładam również propozycję ust. 2 w wariancie I. Jej
    brzmienie jest następujące: „Rzeczpospolita Polska, w granicach określonych
    ustawą, zapewnia innym formom samorządu możliwość udziału w sprawowaniu
    władzy publicznej”.
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
    W dyskusji bywały niekiedy mieszane materie merytoryczne. Czymś innym jest
    bowiem wolność zrzeszania się, a czymś innym jest problem samorządu, który
    staje się istotny wówczas, kiedy samorządom są zlecane funkcje władzy
    publicznej. Bez zlecenia zadań władzy publicznej problem samorządu nie
    występuje. Kwestia samorządu zawodowego musi być podjęta w dwóch miejscach.
    Po pierwsze, w postaci normy generalnej w zasadach ustroju. Po drugie, w
    przepisie bardziej szczegółowym, podejmującym kwestię obowiązku
    przynależności do samorządu zawodowego. Przepis tego typu powinien znaleźć
    się w rozdziale dotyczącym samorządów. Propozycję tego typu przepisu
    przedłożył poseł M. Mazurkiewicz.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazurkiewiczMarek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Marek Mazurkiewicz (SLD):</strong>
    Propozycja, którą zgłosiłem, nie byłaby więc art. 11 ust. 2, lecz art.
    203a z odesłaniem do art. 11 ust. 1.
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
    Tak więc mamy warianty podkomisji, propozycję senatora H. Rota, wniosek
    senator A. Grześkowiak, wniosek senatora J. Orzechowskiego oraz wniosek
    senatora P. Andrzejewskiego. Wnioski te zostaną poddane głosowaniu we
    właściwej chwili. Wniosek posła M. Mazurkiewicza zostanie rozpatrzony w
    ramach debaty nad rozdziałem o samorządzie. Przechodzimy zatem do art. 12,
    dotyczącego kwestii własności. Propozycja podkomisji wymaga rozstrzygnięcia
    ust. 1, który w pewnym fragmencie ma brzmienie alternatywne. Ust. 1 może
    więc brzmieć: „Rzeczpospolita Polska chroni własność i prawo dziedziczenia”.
    Ust. 2 stwierdza: ,„Wywłaszczenie jest dopuszczalne jedynie na cele
    publiczne i za słusznym odszkodowaniem”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Jeżeli chodzi o ust. 1, to opowiadam się za krótszym brzmieniem. W
    przypadku ust. 2 jestem za skreśleniem wyrazu „słusznym. W polskim prawie
    cywilnym nie ma niesłusznego odszkodowania.
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
      Przedstawiciel pełnomocnika obywatelskiego projektu konstytucji Michał Drozdek:
    </strong>
    W projekcie obywatelskim użyta jest formuła mówiąca o
    sprawiedliwym odszkodowaniu, choć przepis ten znajduje się w rozdziale o
    prawach człowieka. Odszkodowanie na zasadzie sprawiedliwości wymiennej jest
    to odszkodowanie ekwiwalentne i da się prawnie obronić. W przypadku
    odszkodowania słusznego jest to trudniejsze.
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
    Chcę zwrócić uwagę na wniosek, który złożyłem. Składa się on z 4
    artykułów, które są dla mnie wyraźną całością. Chodzi o kwestię dziedzictwa,
    pracy, własności i rolnictwa. Jeżeli mówimy o własności jako o jednym z
    zagadnień, to chcę zwrócić uwagę, że własność trzeba rozpatrywać jako pewną
    kategorię społeczną. Dlatego właśnie przedłożyłem stosowną propozycję.
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
    W związku z wnioskiem posła K. Kamińskiego i
    wypowiedzią pana M. Drozdka chcę zwrócić uwagę, że pojęcie słusznego
    odszkodowania znajduje się w obowiązujących przepisach konstytucyjnych w
    art. 7. Nabrało ono również znaczenia w Świetle orzecznictwa Trybunału
    Konstytucyjnego. Słuszne odszkodowanie rozumiane jest jako ekwiwalentne albo
    sprawiedliwe. Według Trybunału Konstytucyjnego oba te określenia są
    równoważne. Jest to ważna kwestia przy konstruowaniu pojęcia wywłaszczenia.
    W przypadku wywłaszczenia należy stwierdzić, że chodzi o cele publiczne i za
    słusznym — sprawiedliwym, ekwiwalennym — odszkodowaniem.
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
    Odnoszę wrażenie, że w rozdziale drugim, dotyczącym praw i wolności, nie
    ma przepisu dotyczącego własności. Jeżeli tak jest, to powstaje kłopotliwa
    sytuacja, gdy przepis o własności umieścimy wśród zasad ustroju. W dniu
    wczorajszym prof. K. Działocha Posiedzenia Komisji Konstytucyjnej ZN
    stwierdził, że nie jest pewne, czy zasady ustroju będą stosowane
    bezpośrednio. Rozumiem więc, że Świadomie przyjmujemy, że przepis dotyczący
    własności znajdzie się tylko w zasadach ogólnych, a nie w rozdziale o
    prawach i wolnościach.
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
    W tej chwili nie przesądzamy zawartości rozdziału drugiego, lecz rozdziału
    pierwszego, zawierającego zasady ustroju, wśród których na pewno powinna
    znaleźć się zasada ochrony własności, podobnie jak zasada swobody
    działalności gospodarczej.
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
    Z zasady legalizmu czy praworządności obywatele będą korzystali
    stosunkowo rzadko w przypadku wysuwania roszczeń osobistych. W grę wchodzi
    pomocnicze korzystanie przy orzekaniu sądowym. Natomiast zasada ochrony
    własności jest nie tylko zasadą fundamentalną, ale również zasadą, z której
    wiele osób będzie korzystać bezpośrednio w ochronie swoich praw. Jest to
    bowiem zasada naczelna, ale również zasada bardzo praktyczna.
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
    Uważam, że przedłożone przez podkomisję brzmienie art. 12 jest bardzo
    praktyczne. Zawiera bowiem trzy ważne kwestie: ochronę własności, prawo
    dziedziczenia oraz wywłaszczenie na określonych zasadach. Uważam więc, że
    zawartość art. 12 jest pełna i praktyczna.
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
    Popieram propozycję, aby treść artykułów: 12, 13 i 14 została ujęta w
    jednym artykule, który w projekcie obywatelskim NSZZ „Solidarność ”
    oznaczony jest jako art. 7 i ma następujące brzmienie: „Praca jest podstawą
    rozwoju państwa. Rzeczpospolita chroni prawo do pracy, własności 1
    dziedziczenia. Gospodarka państwa jest gospodarką rynkową, którą określają:
    wolność gospodarcza, solidarność i dialog partnerów społecznych,
    partycypacja organizacji pracowników w zarządzaniu zakładem pracy i
    samodzielność ekonomiczna rodzin.” Chcę dodać, że opowiadam się za
    nobilitacją zasady słuszności, o czym mówił prof. K. Działocha. Zasada ta ma
    bardzo długą tradycję i bogate orzecznictwo sądowe w ramach Kodeksu
    zobowiązań, który w okresie przed obowiązywaniem Kodeksu cywilnego jako
    klauzulę generalną stosował bardzo szeroko zasadę słuszności. Parlament
    trzech ostatnich kadencji przedłużał okres obowiązywania ustawy, która
    zasadę słuszności podnosi do rangi roszczenia przeciwko wszystkim podmiotom
    gospodarczym, w interesie państwa i obywateli. Mam na myśli ustawę o zwrocie
    nieuzasadnionych korzyści niesłusznie uzyskanych kosztem skarbu państwa. To,
    że ze względów politycznych i merytorycznych żaden z rządzących układów nie
    chciał korzystać z tej ustawy, nie Świadczy o tym, że wola ustawodawcy nie przywraca zasady słuszności jako podstawy roszczenia, odwołując się do
    orzecznictwa sądowego opartego na Kodeksie zobowiązań. Nie jest to więc
    potoczne sformułowanie równoważne zasadzie sprawiedliwości czy wymierności,
    jest to całkowicie odrębne i ugruntowane kryterium.
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
    Jeżeli chodzi o stan prac nad art. 12, to oprócz propozycji podkomisji
    zostały zgłoszone poprawki: posła K. Kamińskiego, senatora P.
    Andrzejewskiego i posła L. Moczulskiego. Zostaną one poddane pod głosowanie
    na kolejnym posiedzeniu, wraz z propozycjami dotyczącymi art. 13 i 14. Nie
    możemy na razie podjąć jako Komisja art. 15, gdyż podkomisja podstaw ustroju
    politycznego i społeczno-gospodarczego nie przygotowała nowych
    kompromisowych propozycji. Uważam ponadto, że moglibyśmy podjąć kwestię
    artykułów:16, 17, 18, które dotyczą godła, barw, hymnu i stolicy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Dotychczasowe tempo prac wskazuje, że dla rozpatrzenia pozostałych
    artykułów konieczne będzie odbycie ok. 15 posiedzeń. W związku z tym chcę
    zapytać pana przewodniczącego, czy przewiduje sytuację, w której część
    przepisów projektu powróci do podkomisji.
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
    Jako przewodniczący Komisji wyrażam zadowolenie, że prace posuwają się
    naprzód, choć tempo jest wolne. Wyrażam przy tej okazji szacunek dla
    wszystkich, którzy uczestniczą w pracach konstytucyjnych. Pracujemy nad
    ustawą zasadniczą. Najważniejszą kwestią jest jakość prac, a nie czas ich
    trwania. Uważam, że nie ma możliwości ominięcia debaty plenarnej w trakcie
    posiedzeń Komisji. Do podkomisji mogą być odsyłane kwestie cząstkowe,
    wyrażające się na przykład w konieczności zredagowania jednego artykułu.
    Wydaje się również, że po rozpatrzeniu zasad ustroju, które z natury rzeczy
    wywołują bogatą dyskusję, dalsze artykuły będą wywoływać chyba mniejszą
    dyskusję. Nie jest to pewne, gdyż rozdział o prezydencie wywoła zapewne
    obszerną debatę.
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
    Jeżeli chodzi o art. 12, dotyczący prawa własności, to warto przypomnieć,
    że treść prawa własności, sposób jego wykonywania i ochronę prawa własności
    reguluje prawo cywilne. W związku z tym w przepisach regulujących zasady
    ustroju wystarczy norma ogólna, stwierdzająca, że Rzeczpospolita Polska
    chroni własność. Sądzę, że formuła przyjęta w art. 12 jest wystarczająca.
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
    Chcę wskazać na niebezpieczną lukę znajdującą się w art. 12. Art. 12
    dopuszcza naruszenie prawa własności tylko poprzez wywłaszczenie. Nie można
    natomiast zapomnieć o konfiskacie i to nie tyle w stanach nadzwyczajnych, ile w oparciu o
    orzeczenia sądowe. Wydaje się, że przy takim brzmieniu art. 12 sąd nie
    mógłby orzec konfiskaty narzędzi przestępstwa. Nóż służący zabójstwu
    musiałby więc być zwrócony mordercy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PietrzakMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:</strong>
    Uważam, że w przypadku wywłaszczenia należałoby podjąć kwestię, kiedy
    nastąpi odszkodowanie. Rozważenia wymaga formuła mówiąca o uprzednim
    odszkodowaniu, przy utrzymaniu zasady słusznego odszkodowania.
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
    Powracam do swojej wątpliwości, iż w rozdziale o zasadach ustroju znajdą
    się dwie normy ogólne, które będą mówić o szczegółach i odstępstwach od tych
    norm, a jest to materia praw i wolności obywatelskich, kiedy stwierdza się,
    że coś jest dopuszczalne ustawą, W rozdziale o zasadach ustroju powinna być
    sformułowana zasada ogólna. Tego typu zasada ogólna mogłaby brzmieć:
    „Rzeczpospolita Polska chroni własność i zapewnia swobodę działalności
    gospodarczej”. Natomiast bardziej szczegółowo kwestia prawa własności
    powinna być podjęta w przepisach o prawach osobistych. Byłoby to właściwe
    miejsce dla przejęcia formuły o odszkodowaniu słusznym i niezwłocznym oraz o
    ewentualnych ograniczeniach swobody działalności gospodarczej.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:</strong>
    W zasadzie popieram stanowisko przedmówcy, iż
    rozdział pierwszy powinien zawierać normy generalne. Jedna z tych norm
    powinna dotyczyć prawa własności i swobody działalności gospodarczej.
    Zgadzam się również, iż nie jest dobrze, że w rozdziale o prawach 1
    wolnościach nie ma przepisu dotyczącego prawa własności. Byłby to przepis,
    który powinien podjąć m.in. kwestię wywłaszczenia, ale i kwestię konfiskaty,
    na co trafnie zwrócił uwagę poseł L. Moczulski. Przepadek mienia jako
    legalna kara musi mieć podstawę konstytucyjną.
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
    Uważam, że formuła mówiąca o słusznym odszkodowaniu powinna być utrzymana.
    Jak wskazał prof. K. Działocha, chodzi przede wszystkim o orzecznictwo
    Trybunału Konstytucyjnego, które pojęciu „Słuszne” nadało konkretną treść.
    Chodzi przede wszystkim o ekwiwalentność. Nie jest przypadkowe to, że w
    projekcie przepisów konstytucji przedłożonym przez środowisko biznesmenów
    mowa jest o odszkodowaniu słusznym i godziwym.
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
    Chcę wyrazić swój niepokój w związku z nawoływaniem
    do — moim zdaniem — nadmiernej lakoniczności przepisów rozdziału pierwszego,
    zwłaszcza gdy chodzi o podstawy ustroju społeczno-gospodarczego. W związku z
    tym chcę przypomnieć, że podkomisja kierowana przez posła R. Bugaja miała za
    zadanie przygotować przepisy dotyczące nie tylko podstaw ustroju
    politycznego, ale również podstaw ustroju ' społeczno-gospodarczego. _
    Konstytucje państw współczesnych również ujmują podstawy ustroju
    społeczno-gospodarczego. Zrozumiały apel o lakoniczność nie może jednak
    powodować, że lakoniczność zaczyna przekraczać granicę lakonicznoŚci, którą
    cechuje się obowiązujące prawo konstytucyjne. Art. 6 i art. 7 utrzymanych w
    mocy przepisów konstytucji z 1952 r. zawierają więcej treści niż niektóre
    spośród zgłaszanych propozycji. Chcę dodać, że lakoniczność obowiązujących
    przepisów była krytykowana. Determinująca ustawodawstwo zwykłe rola nowych
    przepisów konstytucyjnych będzie żadna, jeżeli zostanie przyjęty kierunek
    bardzo dużej lakonicznośŚci. Jeśli chodzi o słuszną uwagę posła L.
    Moczulskiego, dotyczącą konfiskaty, to dobrym miejscem na jej uwzględnienie
    są przepisy dotyczące praw i wolności obywatelskich. Tak kwestia ta jest
    uregulowana w obowiązujących przepisach konstytucyjnych. Jest to art. 8/7
    ust. 3 przepisów utrzymanych w mocy, który brzmi: „Przepadek mienia może
    nastąpić jedynie w przypadkach przewidzianych ustawą, na podstawie
    prawomocnego orzeczenia”. Jest to sytuacja incydentalna, uzasadnionej i
    usprawiedliwionej ingerencji w mienie i własność, innej niż wywłaszczenie.
    Przepis tego rodzaju powinien więc znaleźć się wśród norm szczegółowych, a
    nie zasad generalnych. Odnosząc się do uwagi prof. M. Pietrzaka o uprzednim
    odszkodowaniu chcę dodać, że kwestię tę tak właśnie interpretuje Trybunał
    Konstytucyjny i to w kilku orzeczeniach. Skoro więc jest pewna judykatura,
    to chyba nie jest konieczne ujmowanie tej kwestii w konstytucji. Chcę
    również przedstawić uwagę natury formalnej. Eksperci Komisji stanowią
    zespół. Ponieważ członek zespołu stałych ekspertów Komisji Konstytucyjnej
    prof. W. Osiatyński oddalił się od zespołu duchowo i fizycznie, co utrudnia
    wymianę zdań między ekspertami, proszę pana przewodniczącego, aby swoją
    władzą, która dotyczy również ekspertów, przywrócił prof. W. Osiatyńskiego
    na łono tego zespołu.
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
    Proszę prof. W. Osiatyńskiego, aby zajął miejsce bliżej pozostałych
    członków stałego zespołu ekspertów.
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
    Mam uwagi do art. 12 i art. 13. Jeżeli chodzi o art. 12, to proponuję
    następujące brzmienie: „Rzeczpospolita Polska chroni własność. Wywłaszczenie
    jest dopuszczalne jedynie na cele publiczne i za słusznym odszkodowaniem”. W
    przypadku art. 13 moja propozycja jest następująca: „Rzeczpospolita Polska
    zapewnia swobodę i wolność działalności gospodarczej”. Kwestia równości podmiotów w. korzystaniu z uprawnień, czy też kwestia
    ograniczeń, wynikają moim zdaniem z innych przepisów.
      </p>
    </div>

  <!--<hr><p class="page-break">strona 87</p><hr>-->

    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
    Czy ktoś chciałby jeszcze zabrać głos na temat art. 12? Nie ma.
    Przechodzimy zatem do art. 13. Jego ust. 1 w brzmieniu przedłożonym przez
    podkomisję ma następującą treść: „Rzeczpospolita Polska zapewnia swobodę
    działalności gospodarczej”. Ust. 2 ujęty jest w dwóch wariantach. W
    wariancie I ust. 2 brzmi: „Wszystkie podmioty gospodarcze korzystają z tych
    samych uprawnień i posiadają te same obowiązki”. Wariant II przewiduje
    skreślenie ust. 2. Ust. 3 ma treść następującą: „Ograniczenie swobody
    działalności gospodarczej jest dopuszczalne tylko w ustawie i ze względu na
    ważny interes publiczny”. Otwieram dyskusję.
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
    W imieniu grupy członków Komisji Konstytucyjnej chcę przedstawić
    zmodyfikowane brzmienie art. 13: „Ust. 1. Rzeczpospolita Polska zapewnia
    swobodę działalności gospodarczej. Ust. 2. Podstawą ustroju rolnego Państwa
    jest gospodarstwo rodzinne. Ust. 3. Ograniczenie swobody działalności
    gospodarczej jest dopuszczalne tylko w ustawie i ze względu na ważny interes
    publiczny”. Uzasadnienie złożonej propozycji, a zwłaszcza ust. 2, wynika z
    następujących przesłanek. Po pierwsze, artykuł otwierający konstytucję
    stwierdza, że Rzeczpospolita Polska jest państwem urzeczywistniającym zasady
    sprawiedliwości społecznej. Po drugie, gospodarstwo rodzinne było zawsze
    jednym z podstawowych elementów zapewniających wyżywienie narodu i siłę
    państwa. Po trzecie, w Europie Zachodniej występują podobne tendencje,
    wyrażające się w przepisach konstytucyjnych i ustawowych ograniczających
    wielkość gospodarstw rolnych. Skoro zmierzamy do integracji z Europą, to
    konieczne jest unormowanie naszej gospodarki. Chcę dodać, że w tej chwili
    nie definiujemy pojęcia gospodarstwa rodzinnego. Generalnie rzecz ujmując,
    chodzi o gospodarstwo oparte na sile roboczej rodziny właściciela. Biorąc
    pod uwagę strukturę gospodarstw rolnych na przykład w Danii, Holandii >czy
    nawet Niemczech lub Hiszpanii, widać, że tego typu gospodarstwa są
    najbardziej efektywne.
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
    Czy ktoś pragnie jeszcze zabrać głos w kwestii art. 13? Nie ma.
    Przechodzimy zatem do art. 14, dotyczącego pracy. W brzmieniu podkomisji
    jego treść jest następująca: „Praca znajduje się pod ochroną
    Rzeczypospolitej Polskiej. Państwo sprawuje nadzór nad warunkami jej
    wykonywania”. Otwieram dyskusję. A — ma — —— pz
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Wit Majewski (SLD):</strong>
    Chcę poinformować Komisję, że komisja nadzwyczajna, rozpatrująca zmiany w
    Kodeksie pracy, rozważała propozycję przepisów konstytucyjnych dotyczących
    pracy. Jeżeli chodzi o art. 14, to komisja nadzwyczajna nie zgłosiła uwag i
    w peini popiera art. 14.
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
    Mam inną propozycję brzmienia art. 14. Jest ona następująca: „Praca
    stanowi podstawę rozwoju gospodarczego kraju. Państwo sprawuje nadzór nad
    warunkami jej wykonywania . Tak więc chodzi przede wszystkim o podkreślenie
    roli pracy.
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
    Przypominam o art. 7 z projektu obywatelskiego NSZZ, „Solidarność”, który
    w zdaniu pierwszym stwierdza, że praca jest podstawą rozwoju państwa.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Chcę zapytać, jakie uprawnienia po stronie obywatela niesie za sobą wyraz
    „ochrona”, jeżeli chodzi o pracę.
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
      Przedstawiciel pełnomocnika obywatelskiego projektu konstytucji Michał Drozdek:
    </strong>
    W projekcie obywatelskim kwestia pracy została ujęta
    nieco inaczej. Przy okazji ujęcia pracy został określony ustrój gospodarczy,
    czego nie ma w propozycji podkomisji i to nie tylko przy okazji ujmowania
    zagadnienia pracy, ale w całym projekcie konstytucji. Chcę dodać, że art. 7
    był szczególnie wnikliwie przygotowywany w trakcie prac nad projektem
    obywatelskim. Dyskutowała nad nim nie tylko Społeczna Komisja Konstytucyjna,
    ale był również konsultowany z kierownictwem NSZZ „Solidarność i strukturami
    Związku. Uważamy, że praca jest elementem tworzenia dóbr gospodarczych. W
    związku z tym uznaliśmy, że cały ustrój gospodarczy powinien być ujęty w
    przepisie dotyczącym pracy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Wit Majewski (SLD):</strong>
    Odnosząc się do wypowiedzi niektórych poprzedników chcę powiedzieć, że nie
    mam nic przeciwko temu, aby określić funkcje I znaczenie pracy w ustroju
    państwowym. Chciałbym natomiast, aby autorzy nowych propozycji nie
    spowodowali zniesienia tych przepisów, które proponuje podkomisja. Chodzi
    przede wszystkim o utrzymanie kwestii ochrony pracy i nadzoru nad jej
    wykonywaniem.
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
    Moje wątpliwości budzi propozycja senatora J. Orzechowskiego
    stwierdzająca, że praca jest podstawą rozwoju gospodarczego kraju. Nie jest
    to chyba dobra propozycja przepisu konstytucyjnego. Pomija bowiem kwestię
    kapitału i zdolności umysłowych człowieka. Gwarancje powinny obejmować tylko
    prawo dostępu do pracy.
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
    W moim przekonaniu brzmienie art. 14 w wersji podkomisji jest zawężeniem
    problemu. Wobec tego proponuję następujące brzmienie art. 14: „Władze publiczne zapewniają socjalną,
    ekonomiczną i prawną ochronę pracy. Ochrona socjalna to tworzenie warunków
    do powstawania miejsc pracy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/JankiewiczPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Senator Paweł Jankiewicz (SLD):</strong>
    Chcę zwrócić uwagę poseł K. Łybackiej, że właśnie jej sformułowanie
    przyniesie zawężenie zakresu ochrony pracy. Jeżeli bowiem jest mowa o
    ochronie, oznacza to, że Rzeczpospolita Polska przez każdy swój organ — całą
    władzę publiczną — ma postępować w taki sposób, aby chronić pracę pod każdym
    względem. Chodzi więc ss. vrzenie systemu ochrony pracy. Oznacza to dla
    Rzeczypospolitej Polskiej i jej władz zobowiązanie, iż muszą stworzyć aparat
    prawny i wykonawczy, który będzie chronił pracę. Należy dodać, że zdanie
    drugie propozycji podkoi...51 oznacza, iż konieczne jest nie tylko
    stworzenie warunków chroniących pracę, ale również warunków do kontroli.
    Chodzi więc o stworzenie systemu ochrony pracy. Tak więc uważam, że
    propozycja podkomisji to pełne ukształtowanie ochrony pracy i gwarancji w
    postaci nadzoru nad warunkami pracy.
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
    <strong>Poseł Aleksander Kwaśniewski (S5LD):</strong>
    Poseł K. Łybacką zachęcam do ponownego przemyślenia swojej propozycji,
    gdyż trzy czynniki w niej zawarte na pewno nie wyczerpują wszystkich
    czynników dotyczących pracy. Brakuje choćby kwestii godności i etyki pracy.
    Chcę również zwrócić uwagę, że jeżeli przyjmiemy formułę wyliczającą
    czynniki pracy, to zapewne będziemy musieli tę listę wydłużać, gdyż
    napływają już dalsze tego typu propozycje. Nadesłała je m.in. Komisja
    Polityki Społecznej oraz Państwowa Inspekcja Pracy, które proponują również
    wskazanie konkretnego organu zajmującego się nadzorem nad warunkami pracy.
    Tego typu kwestie mogą być podjęte, lecz nie w ramach rozdziału pierwszego,
    gdzie należy poprzestać na ogólnej zasadzie ochrony pracy.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Opowiadam się za skreśleniem zdania drugiego w propozycji podkomisji.
    Warunki wykonywania pracy określa wolna i swobodna umowa między pracodawcą 1
    pracownikiem. Państwo nie powinno nadzorować tej kwestii i wkraczać w nią.
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
    Chcę zwrócić uwagę, aby art. 14 był rozważany w
    połączeniu z art. 48 i 49. Występuje bowiem iunctim merytoryczne między tymi
    przepisami. Podejmują one m.in. kwestie, o których mówiła poseł K. Łybacka.
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
    Czy ktoś chce jeszcze zabrać głos w ramach debaty nad art. 14? Nie ma.
    Efektem debaty są — i będą — zgłoszone wnioski i propozycje poprawek, które
    zostaną poddane pod głosowanie na następnym posiedzeniu. Jeżeli chodzi o
    art. 15, to jego ostateczne rozpatrzenie wymaga jeszcze posiedzenia
    podkomisji podstaw ustroju politycznego i społeczno-gospodarczego. Następne
    artykuły — 16, 17 i 18 — jak się wydaje, nie wymagają dyskusji. W związku z
    tym chcę zapytać ekspertów, czy z punktu widzenia reguł systematyki
    konstytucji jest uzasadnienie, aby tego rodzaju kwestie jak barwy, hymn,
    godło i stolica były regulowane wśród zasad ustroju. Być może bardziej
    właściwe byłoby ujęcie tych kwestii w ramach przepisów końcowych lub w
    ramach innego odrębnego rozdziału. Nie chodzi oczywiście o deprecjonowanie
    kwestii symboliki narodowej.
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
    W konstytucjach tego typu problematyka jest ujmowana
    różnie. Kwestie symboliki bywają podejmowane wśród początkowych artykułów
    konstytucji. Przykładem może być konstytucja Francji, która w części
    początkowej stwierdza, że hymnem jest „„Marsylianka”. Symbolika jest również
    ujmowana na końcu konstytucji — w ramach rozdziału poświęconego tylko tej
    kwestii. O takiej ewentualności piszemy w naszych uwagach.
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
    Rozumiem więc, że do artykułów: 16, 17 i 18 nie ma uwag merytorycznych.
    Skoro tak, to moglibyśmy zdecydować o ostatecznym usytuowaniu tych
    przepisów, a więc rozdział pierwszy, czy odrębny rozdział w końcowej części
    projektu.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Wit Majewski (SLD):</strong>
    Zwracam uwagę, że przyjęliśmy tytuł rozdziału pierwszego: „Zasady
    ustroju”. Trudno przyjąć, że symbole są zasadami ustroju. Opowiadam się więc
    za odrębnym rozdziałem w końcowej części projektu konstytucji.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Senator Krzysztof Kozłowski (KD):</strong>
    Chcę dodać, że kwestia ta była dyskutowana w trakcie prac podkomisji
    podstaw ustroju politycznego i społeczno-gospodarczego. Upadł pomysł
    stworzenia odrębnego rozdziału. Przeważał pogląd, że kwestie symboli nie
    bardzo mieszczą się w zasadach, ale mogą być ujęte w końcowej części
    rozdziału. pierwszego.
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
    Kwestię tę rozstrzygniemy w głosowaniu na następnym posiedzeniu Komisji.
    Ponadto głosowania obejmą artykuły: 11, 12, 13 i 14. Jeżeli podkomisja
    podstaw ustroju politycznego i społeczno-gospodarczego przygotuje
    kompromisową propozycję, to przedmiotem głosowań będzie również art. 15,
    Przechodzimy do rozstrzygnięcia kwestii art. D. Sprawa pierwsza to
    konieczność dokonania reasumpcji poprzedniego głosowania dotyczącego art. 5. Poddaję pod głosowanie wniosek o reasumpcję głosowania nad art. 5 projektu
    konstytucji. Stwierdzam, że Komisja w głosowaniu, większością 2/7 głosów
    popierających, przy 3 głosach przeciwnych i braku wstrzymujących się,
    przyjęła wniosek. Tak więc powracamy do brzmienia art. 5. Uczestnicy
    posiedzenia otrzymali zestawienie poprawek zgłoszonych do art. 5.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/MazurkiewiczMarek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Marek Mazurkiewicz (SLD):</strong>
    Chcę zapytać przedstawicieli Prezydenta RP, czy byliby skłonni wycofać
    ust. 3 swojej poprawki, który jest tożsamy z odpowiednimi przepisami
    odnoszącymi się do Trybunału Konstytucyjnego?
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/PietrzakMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:</strong>
    Tak, wycofujemy ust. 3.
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
    Wycofuję swój wniosek oznaczony jako nr 1, gdyż jest on zbieżny z
    wnioskiem nr 3.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
    Chcę wycofać moją propozycję oznaczoną nr 6. Miałaby ona sens tylko
    wówczas, gdyby została przyjęta pierwsza poprawka.
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
    Mam pewną niejasność wyrażającą się w pytaniu, czy dyskutowany art. 5
    będzie jedynym przepisem dotyczącym partii politycznych. Chodzi zwłaszcza o
    to, czy kwestia przynależności do partii politycznych będzie skonkretyzowana
    w ramach przepisów regulujących prawo do zrzeszania się. Chcę dodać, że
    projekt obywatelski NSZZ, „Solidarność” nie zakłada zbyt daleko idącej
    preferencji dla życia partyjnego, lecz że będzie równość reprezentacji w
    zakresie prawa do zrzeszania się. Gdyby natomiast miała zostać przyjęta jako
    zasada ustroju zasada partyjniactwa, to wówczas zgłosimy brzmienie art. 32
    projektu obywatelskiego.
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
    Chcę jednak przypomnieć, że jest jeszcze jeden wniosek, który zostanie
    poddany głosowaniu jeszcze raz. Jest to wniosek senatorów: A. Grześkowiak 1
    P. Andrzejewskiego o następującej treści: „,Partie polityczne, ruchy
    obywatelskie i inne ugrupowania obywateli działające w oparciu o zasadę
    pluralizmu politycznego są formą dobrowolnego i równego uczestnictwa
    politycznego w kształtowaniu i wyrażaniu woli obywateli oraz wpływania na
    politykę państwa”.
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
    Kwestia jest uzupełniona art. 32 ust. 3 projektu obywatelskiego,
    który ujęty jest w rozdziale o prawach i wolnościach obywatelskich i ma
    treść następującą: „„Zakazane jest istnienie partii politycznych i
    stowarzyszeń o programie totalitarnym, w tym nazistowskim I komunistycznym,
    a także tych, których program lub m R AE z m ma naa działalność zakłada lub
    dopuszcza stosowanie przemocy w celu zdobycia władzy lub wpływu na politykę
    państwa, albo przewiduje utajnienie struktur względnie członkostwa”. Jako
    reprezentant projektu obywatelskiego NSZZ „Solidarność” jestem zobowiązany
    zgłosić tę propozycję. Ponadto moja propozycja obejmuje art. 32 ust. 2,
    który brzmi: „Obywatele mogą zrzeszać się w partie polityczne w celu
    wpływania metodami demokratycznymi na politykę państwa. Ustawa określa
    zasady zgłaszania i trybu rejestracji partii politycznych”.
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
    Zwracam również uwagę, że oznaczony jako nr 2 wniosek poseł K. Łybackiej
    nie jest aktualny. Poseł K. Łybacka zgłosiła nowy wniosek, który za chwilę
    zostanie powielony i dostarczony członkom Komisji. Jego brzmienie jest
    następujące: „Partie polityczne finansowane jawnie i działające w ramach
    porządku konstytucyjnego Rzeczypospolitej Polskiej zrzeszają na zasadach
    dobrowolności i równości obywateli w celu wpływania metodami demokratycznymi
    na kształtowanie polityki państwa”.
      </p>
    </div>
    <div class="speaker">
      <img
        src="/images/kk-speakers/szaro/KaminskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p>
    <strong>Poseł Krzysztof Kamiński (KPN):</strong>
    Czy w związku z tym, że propozycja poseł K. Łybackiej nie przewiduje
    formuły, że Rzeczpospolita Polska gwarantuje wolność tworzenia partii
    politycznych, jest to przeoczenie, czy też świadomy zamysł pozbycia się
    gwarancji dla powstawania i istnienia partii politycznych?
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
    Z brzmienia mojej poprawki wynika dobrowolność zrzeszania się obywateli
    oraz gwarancje ze strony państwa. Konstytucyjnie dopuszczona jest więc
    możliwość tworzenia partii politycznych działających w ramach obowiązującego
    porządku konstytucyjnego.
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
    Jeżeli chodzi o głosowanie, to w pierwszej kolejności głosowaniu będzie
    poddany wariant I podkomisji, a następnie wariant II podkomisji, który
    faktycznie jest wariantem senatorów: A. Grześkowiak i P. Andrzejewskiego, z
    dodaniem fragmentów art. 32 ust. 2 i ust. 3 projektu obywatelskiego.
    Następnie głosowaniu będzie poddana nowa propozycja poseł K. Łybackiej.
    Kolejny wniosek to propozycja przedstawicieli Prezydenta RP, prof. A.
    Rzeplińskiego i dr. W. Kuleszy, bez wycofanego ust. 3. Następny wariant
    przedłożył poseł J. Ciemniewski. Wariant kolejny jest autorstwa posła L.
    Pastusiaka. Wykaz propozycji zamyka wniosek posła S$. Jurgielańca. Czy są
    wnioski lub uwagi przed przystąpieniem do głosowań? Nie ma. Poddaję pod
    głosowanie wniosek o przyjęcie art. 5 w brzmieniu wariantu I projektu
    podkomisji o treści: „Ust. 1. Rzeczpospolita Polska gwarantuje wolność
    tworzenia i działania partii politycznych. Biorą one udział w kształtowaniu
    i wyrażaniu woli obywateli >w szczególności przez uczestnictwo w wyborach. Ust. 2. Finansowanie partii politycznych jest jawne”. Stwierdzam, że w
    głosowaniu wniosek uzyskał 16 głosów popierających, 12 głosów przeciwnych,
    przy i wstrzymującym się. Przechodzimy do głosowania nad drugim wariantem.
    Jest to wniosek senatorów A. Grześkowiak i P. Andrzejewskiego o treści
    identycznej z brzmieniem wariantu II wraz z ust. 2 i 3 art. 32 projektu
    obywatelskiego. Poddaję pod głosowanie wniosek o przyjęcie art. 5 jako
    propozycji następującej treści: „Ust. 1. Partie polityczne, ruchy
    obywatelskie i inne ugrupowania obywateli, działające w oparciu o zasadę
    pluralizmu politycznego są formą dobrowolnego i równego uczestnictwa
    politycznego w kształtowaniu i wyrażaniu woli obywateli oraz wpływania na
    polityk Państwa. Ust. 2. Obywatele mogą zrzeszać się w partie polityczne w
    celu wpływania metodami demokratycznymi na politykę państwa. Ustawa określa
    zasady zgłaszania i trybu rejestracji partii politycznych. Ust. 3. Zakazane
    jest istnienie partii politycznych i stowarzyszeń o programie totalitarnym,
    w tym nazistowskim i komunistycznym, a także tych, których program lub
    działalność zakłada lub dopuszcza stosowanie przemocy w celu zdobycia władzy
    lub wpływu na politykę państwa, albo przewiduje utajnienie struktur
    względnie członkostwa”. Stwierdzam, że w głosowaniu wniosek uzyskał 3 głosy
    popierające, 24 głosy przeciwne, przy 3 wstrzymujących się. Poddaję pod
    głosowanie wniosek o przyjęcie brzmienia art. 5 zaproponowanego przez poseł
    K. Łybacką, o następującej treści: „Partie polityczne finansowane jawnie 1
    działające w ramach porządku konstytucyjnego Rzeczypospolitej Polskiej
    zrzeszają na zasadach dobrowolności i równości obywateli w celu wpływania
    metodami demokratycznymi na kształtowanie polityki państwa”. Stwierdzam, że
    w głosowaniu wniosek uzyskał 9 głosów popierających, 15 głosów przeciwnych,
    przy 6 wstrzymujących się. Poddaję pod głosowanie wniosek o przyjęcie art. 5
    w następującym brzmieniu, zaproponowanym przez przedstawicieli Prezydenta
    RP: prof. A. Rzeplińskiego i dr. W. Kuleszę: „Ust. 1. Rzeczpospolita Polska
    gwarantuje wolność tworzenia i działania partii politycznych. Partie
    polityczne zrzeszają na zasadach dobrowolności i równości obywateli
    Rzeczypospolitej Polskiej w celu wpływania metodami demokratycznymi na
    kształtowanie polityki Państwa. Ust. 2. Finansowanie partii politycznych
    jest jawne”. Stwierdzam, że wniosek w głosowaniu uzyskał 21 głosów
    popierających, 3 głosy przeciwne, przy 4 wstrzymujących się. Poddaję pod
    głosowanie wniosek o przyjęcie art. 5 w następującym brzmieniu,
    zaproponowanym przez posła J. Ciemniewskiego: „Partie polityczne służą
    obywatelom do wpływania metodami demokratycznymi na działalność władzy
    publicznej”. Posiedzenia Komisji Konstytucyjnej ZN Stwierdzam, że w
    głosowaniu wniosek uzyskał 4 głosy popierające, 24 głosy przeciwne, przy 2
    wstrzymujących się. Poddaję pod głosowanie wniosek o przyjęcie art. 5 w
    następującym brzmieniu, zaproponowanym przez posła L. Pastusiaka:
    „Rzeczpospolita Polska gwarantuje wolność tworzenia i działania partii
    politycznych”. Stwierdzam, że w głosowaniu wniosek uzyskał 7 głosów
    popierających, 19 głosów przeciwnych, przy 4 wstrzymujących się. Poddaję pod
    głosowanie wniosek o przyjęcie art. 5 w następującym brzmieniu,
    zaproponowanym przez posła S. Jurgielańca: „Kształtowanie i wyrażanie wo-li
    obywateli w zakresie realizacji władzy zwierzchniej Narodu odbywa się
    również za pośrednictwem jawnie finansowanych partii politycznych,
    działających w ramach porządku konstytucyjnego Rzeczypospolitej Polskiej”.
    Stwierdzam, że wniosek w głosowaniu uzyskał 3 głosy popierające, 16 głosów
    przeciwnych, przy 8 wstrzymujących się. Z. przeprowadzonych głosowań wynika,
    że największe poparcie uzyskał wariant I podkomisji oraz propozycja
    przedstawicieli Prezydenta RP: prof. A. Rzeplińskiego i dr. W. Kuleszy.
    Ostatecznego wyboru art. 5 dokonamy wybierając jeden z tych dwóch wniosków.
    Poddaję pod głosowanie wniosek o dokonanie wyboru między wariantem I
    podkomisji — użycie przycisku „za”, a propozycją przedłożoną przez
    przedstawicieli Prezydenta RP: prof. A. Rzeplińskiego i dr. W. Kuleszę —
    użycie przycisku „przeciw ”', wraz z możliwością wstrzymania się.
    Stwierdzam, że Komisja w głosowaniu, większością 22 głosów popierających,
    przy 8 głosach przeciwnych i braku wstrzymujących się, przyjęła propozycję
    przedłożoną przez przedstawicieli Prezydenta RP: prof. A. Rzeplińskiego 1
    dr. W. Kuleszę. Tak więc art. 5 otrzymuje brzmienie: „Ust. 1. Rzeczpospolita
    Polska gwarantuje wolność tworzenia i działania partii politycznych. Partie
    polityczne zrzeszają na zasadach dobrowolności i równości obywateli
    Rzeczypospolitej Polskiej w celu wpływania metodami demokratycznymi na
    kształtowanie polityki Państwa. Ust. 2. Finansowanie partii politycznych
    jest jawne”. Oznacza to, że Komisja ustaliła brzmienie 10 artykułów
    rozdziału pierwszego. Ponadto przygotowane zostały warunki do przyjęcia w
    głosowaniach podczas następnego posiedzenia kolejnych artykułów, oprócz art.
    15. Zakończyliśmy debatę nad rozdziałem pierwszym, z wyjątkiem art. 15. Na
    następnym posiedzeniu przyjmiemy w głosowaniach pozostałe artykuły rozdziału
    pierwszego i rozstrzygniemy losy artykułów: 16, 17 i 18. Planowane jest
    również rozpoczęcie debaty nad rozdzia-łem drugim. Czy ktoś chciałby zabrać
    głos w sprawach różnych przed zamknięciem posiedzenia? Nie ma. Zamykam
    posiedzenie.
      </p>
    </div>
  </div>
</div>

<Footer />
