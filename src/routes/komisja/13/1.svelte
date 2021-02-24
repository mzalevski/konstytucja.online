<script>
  import { fly } from "svelte/transition";
  import Nav from "../../../components/Nav.svelte";
  import Utterance from "../../../components/Utterance.svelte";
  import { EventManager } from "mjolnir.js";
  import { onDestroy, onMount } from "svelte";
  import { goto, prefetch } from "@sapper/app";

  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => {
    if (showDropdown) showDropdown = false;
    else goto("/komisja/13/2.1");
  };

  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/komisja/13");
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
    prefetch("/komisja");
    eventManager = new EventManager(document.documentElement, {
      touchAction: "pan-y",
    });
    eventManager.on({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      eventManager.off({ swiperight: onSwipeRight, swipeleft: onSwipeLeft });
    }
  });
</script>

<svelte:head>
  <title>Dzień 1 - Biuletyn nr 13</title>
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<div class="flex justify-between pt-4 pb-8 mb-8 border-b">
  <div>
    <h1
      class="text-lg font-thin sm:text-xl lg:text-2xl"
      in:fly={{ x: -50, duration: 1000 }}
    >
      Obrady w dniu 7 lutego 1995 r.
    </h1>
    <h5>
      <a
        class="text-xs font-bold tracking-wider text-gray-500 uppercase
        sm:text-sm hover:text-red-new"
        href="https://drive.google.com/file/d/1Ts4ETnD5wGc3hV2Vluy2yX7RoIcR7ZHn/view?usp=sharing"
        rel="nofollow"
        target="_blank"
      >
        ORYGINAŁ BIULETYNU
      </a>
      <svg class="inline w-4 h-4 ml-px fill-current" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9
          2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
        />
      </svg>
    </h5>
  </div>
  <div class="flex justify-between">
    <a rel="prefetch" href="/komisja/13/2.1">
      <svg
        class="w-5 h-5 h-6 ml-3 text-gray-900 fill-current sm:w-6"
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
    class="text-xs leading-relaxed text-justify sm:text-base md:text-md
    lg:text-lg xl:text-xl"
  >
    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Otwieram posiedzenie Komisji Konstytucyjnej Zgromadzenia Narodowego.
      Zgodnie z przyjętym planem pracy odbywamy kolejne posiedzenie, nie bacząc
      na wydarzenia wokół i na różne bardzo spektakularne spotkania i
      wypowiedzi. Obowiązkiem Komisji Konstytucyjnej jest bowiem praca i dalsze
      przygotowywanie rozwiązań konstytucyjnych. Główna groźba, która w tym
      gmachu była rozpatrywana jeszcze kilka dni temu, dotycząca możliwości
      rozwiązania parlamentu, została oddalona na jakiś czas. Apeluję więc,
      abyśmy potrafili uciec od spraw bieżących proponując rozwiązania
      konstytucyjne, które powinny wytrzymać próbę czasu obecnych konfliktów i
      następnych. Witam członków Komisji oraz gości, a wśród nich
      przedstawicieli Prezydenta RP i Rady Ministrów. Przedstawiciele Trybunału
      Konstytucyjnego są nieobecni z powodu posiedzenia Trybunału. Witam również
      innych gości, ekspertów i dziennikarzy. Proponowany porządek dzienny
      przewiduje rozpatrzenie artykułów składających się na rozdział pierwszy
      jednolitego projektu Konstytucji RP (w ujęciu wariantowym) oraz sprawy
      różne. Czy są wnioski lub uwagi do proponowanego porządku dziennego?"
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Składam wniosek, aby w tym tygodniu nie odbyło się posiedzenie
      Komisji Konstytucyjnej. Uważam bowiem, że mieliśmy zbyt mało czasu, aby
      móc właściwie zapoznać się ze wszystkimi propozycjami, które zostały
      uchwalone. Konstytucja musi być aktem jednolitym, a w związku z tym musi
      mieć określoną wspólną aksjologię. Każdy z nas musi zastanowić się, czy
      przepisy, które zostały zaakceptowane przez większość Komisji, mieszczą
      się w systemie wartości, na którym zbudowana jest konstytucja. Wymaga to
      zasięgnięcia opinii ekspertów, a nie było na to czasu. Dlatego też
      zgłaszam wniosek formalny o odwołanie — przerwanie — posiedzenia Komisji
      Konstytucyjnej."
    />

    <Utterance
      speaker="Poseł Jerzy Wiatr (SLD)"
      imgPath="/images/kk-speakers/WiatrJerzy.png"
      text="Jestem zdziwiony wnioskiem senator A. Grześkowiak, gdyż termin
      posiedzenia został ustalony już dawno, a ponadto od poprzedniego
      posiedzenia Komisji upłynęły dwa tygodnie. Jeżeli jest to za krótki czas,
      aby zapoznać się z wynikami dotychczasowych prac, to wątpię, abyśmy
      przyjmując jeszcze wolniejsze tempo, mogli zakończyć prace nad nową
      konstytucją w tej kadencji. Ponadto należy pamiętać, że jesteśmy
      krytykowani przez ważne ośrodki polityczne znajdujące się poza Komisją.
      Chyba wczoraj J. Parys wystąpił z tezą, że należy rozwiązać obecny Sejm i
      Senat, gdyż do tej pory nie została uchwalona nowa konstytucja. Powołał
      się przy tym na to, że „Solidarności” wystarczył bardzo krótki czas na
      przygotowanie projektu konstytucji. Tak więc pracując jeszcze wolniej
      narazilibyśmy się na jeszcze bardziej zdecydowaną krytykę. W związku z tym
      zgłaszam wniosek o odrzucenie wniosku senator A. Grześkowiak."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Do wniosku tak radykalnego jak wniosek senator A. Grześkowiak nie
      przychylam się, lecz jednocześnie chcę zwrócić uwagę, że zapewnienia, iż
      czas na pracę Komisji Konstytucyjnej będzie czasem, w którym nie będą
      obradować komisje sejmowe, nie zostały dotrzymane. W dniu dzisiejszym
      odbywa się wiele posiedzeń komisji. Zwracam się więc do pana
      przewodniczącego, aby spowodował realizację ustalenia, że w trakcie
      posiedzenia Komisji Konstytucyjnej nie odbywają się posiedzenia komisji
      sejmowych."
    />

    <Utterance
      speaker="Poseł Jacek Taylor (UW)"
      imgPath="/images/kk-speakers/TaylorJacek.png"
      text="Chcę kontynuować uwagę R. Bugaja, gdyż piętro wyżej obradują trzy
      połączone komisje w bliskiej sercu prawników sprawie ubezpieczeń.
      Właściwie trudno zdecydować się, czy pozostać na posiedzeniu Komisji
      Konstytucyjnej, czy też przejść na posiedzenie trzech połączonych komisji
      obradujących nad kwestią ubezpieczeń. Myślę więc, że w słowach senator A.
      Grześkowiak i posła R. Bugaja tkwi jednak ziarno prawdy."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Kontynuując wątek uwagi posła R. Bugaja chcę powiedzieć, że termin
      przyszłego posiedzenia Komisji Konstytucyjnej zbiega się z terminem
      posiedzenia Senatu. Koordynacja prac Sejmu, Senatu i Komisji
      Konstytucyjnej szwankuje więc wyraźnie. Komisja powinna jednak pracować."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Odnosząc się do uwagi posła R. Bugaja, chcę przypomnieć, że list
      marszałka Sejmu ustanawia zasadę, iż w dniach posiedzeń Komisji
      Konstytucyjnej nie powinny odbywać się posiedzenia komisji sejmowych.
      Jeżeli natomiast zajdzie absolutna konieczność odbycia posiedzenia komisji
      sejmowej, to nieobecność na tego rodzaju posiedzeniu jest usprawiedliwiona
      poprzez obecność na posiedzeniu Komisji Konstytucyjnej. Jeżeli chodzi o
      posiedzenie Senatu, to została przyjęta zasada, że Komisja będzie kończyć
      obrady do południa w czwartek, a Senat będzie rozpoczynał obrady w
      czwartek do południu. Nic mi nie wiadomo o zmianie tej zasady. Odnosząc
      się do wniosku senator A. Grześkowiak chcę przypomnieć, że wspólnie
      przyjęliśmy terminy posiedzeń Komisji. Ponadto materiały na dzisiejsze
      posiedzenie zostały dostarczone w zasadzie już na poprzednim posiedzeniu.
      W tej sytuacji trudno powiedzieć, jak długie powinny być przerwy między
      posiedzeniami Komisji, aby były one wystarczające dla zapoznania się z
      materiałami. Wydaje się, że jeżeli zrezygnujemy z cyklu posiedzeń co dwa
      tygodnie, to w gruncie rzeczy w ogóle staje się niemożliwe prowadzenie
      prac nad nową konstytucją. Nawiązując do wypowiedzi posła J. Wiatra, który
      przytoczył krytykę przedstawiciela opozycji parlamentarnej zbyt wolnych
      prac naszej Komisji, chcę przypomnieć, skąd wziął się problem takiego a
      nie innego czasowego rytmu prac. Po pierwsze, uznaliśmy, że zostanie
      zachowany 6-miesięczny termin na składanie projektów nowej konstytucji. Po
      drugie, terminarz został przedłużony o czas na złożenie projektów
      obywatelskich. Czynienie z tego powodu zarzutów Komisji Konstytucyjnej nie
      jest zgodne z faktami, ani intencjami jakie nam towarzyszyły. Odrzucam
      więc zarzuty, że prace nad nową konstytucją są sztucznie wydłużane. Tyle
      moich uwag do zgłoszonych wniosków i uwag. Poddam pod głosowanie wniosek
      senator A. Grześkowiak."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Zwracam uwagę, że wniosek senator A. Grześkowiak nie jest kompletny,
      gdyż nie określa terminu, do którego ma zostać odroczone posiedzenie."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proszę senator A. Grześkowiak o uzupełnienie wniosku poprzez
      określenie terminu odroczenia posiedzenia Komisji."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Proponuję, aby następne posiedzenie Komisji odbyło się za dwa
      tygodnie."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wniosek został więc uzupełniony. Poddaję pod głosowanie wniosek o
      odłożenie o dwa tygodnie posiedzenia Komisji Konstytucyjnej. Stwierdzam,
      że Komisja w głosowaniu, większością 23 głosów przeciwnych, przy 5 głosach
      popierających i 2 wstrzymujących się, odrzuciła wniosek. Tak więc
      posiedzenie będzie kontynuowane. Powracam więc do kwestii przyjęcia
      zaproponowanego porządku dziennego przewidującego rozpatrywanie rozdziału
      I projektu oraz sprawy różne. Czy są wnioski lub uwagi do porządku
      dziennego? Nie ma. Stwierdzam więc przyjęcie porządku dziennego."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Myślę, że nie byłoby to sprzeczne z naszym regulaminem, gdybyśmy
      przyjęli zasadę, że ewentualne wnioski mniejszości mogłyby być składane po
      zakończeniu rozpatrywania całego rozdziału lub może nawet całego projektu.
      Wychodziłoby to częściowo naprzeciw postulatowi senator A. Grześkowiak,
      aby dać czas na analizę przyjmowanych rozstrzygnięć i czas na decyzję o
      ewentualnym złożeniu wniosku mniejszości. Sądzę, że procedura, którą
      proponuję, ograniczy liczbę wniosków mniejszości."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Szczegółowo procedurę składania wniosków mniejszości normuje
      regulamin Komisji i regulamin Sejmu. Uważam, że możemy przyjąć, iż wnioski
      mniejszości będą składane po zakończeniu rozpatrywania rozdziału, a także
      po zakończeniu rozpatrywania projektu."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Nie ma wątpliwości co do tego, że wnioski mniejszości można składać
      do zakończenia prac. Chcę również przypomnieć, że wnioski mniejszości
      można składać tylko w sprawach, które były rozstrzygane na posiedzeniu
      Komisji. Nie można składać wniosków przed rozstrzygnięciem danej sprawy, a
      tak się dzieje. Otrzymaliśmy bowiem kserokopie wniosków mniejszości
      złożonych w sprawach, które nie były przedmiotem głosowań w Komisji."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Myślę, że charakter prawny materiałów, o których mówił poseł J.
      Szymański, jest taki, iż są to poprawki błędnie nazwane wnioskami
      mniejszości."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Nawiązując do tego, o czym mówiła senator A. Grześkowiak i co było
      przesłanką jej wniosku, chcę zwrócić uwagę, że w toku naszych prac
      pojawiają się zmiany, które muszą być koordynowane z innymi już przyjętymi
      przepisami. Nie możemy więc przyjąć takiej procedury, która uniemożliwia
      powrót do kwestii już rozstrzygniętych. Nie śledzimy bowiem całości
      projektu tak dokładnie, aby wiedzieć, czy pojawią się sprzeczności w
      przyjmowanych przepisach. W związku z tym w procedurze prac powinniśmy
      sobie zarezerwować możliwość powrotu do kwestii, które były już wcześniej
      ustalone."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Myślę, że jeżeli kwestie proceduralne potraktujemy z uwzględnieniem
      dobrej woli i zdrowego rozsądku, to nie widzę przeszkód, aby mogło tak
      być, jak mówił poseł J. Ciemniewski. Przechodzimy do dyskusji
      merytorycznej. Podstawą debaty będzie jednolity projekt Konstytucji RP w
      ujęciu wariantowym, noszący datę 26.1.1995 r. — wersja robocza. Jest to
      tekst, który powstał po uwzględnieniu konsekwencji wcześniejszych
      głosowań, z wyjątkiem głosowania nad art. 26. Przypominam, że jeżeli
      chodzi o tytuł, to mamy trzy propozycje. Przedstawiciel Prezydenta RP
      prof. A. Rzepliński i poseł W. Majewski proponują tytuł: „Zasady
      podstawowe ustroju Rzeczypospolitej Polskiej. Poseł L. Moczulski
      zaproponował tytuł: „Rzeczpospolita”. Trzecia propozycja: „Podstawy
      ustroju Rzeczypospolitej Polskiej” zawarta jest w projekcie. Odbyła się
      również wstępna wymiana poglądów na temat kilku początkowych artykułów.
      Propozycje zmian i poprawek dotyczące tych artykułów zostały zawarte w
      materiale dostarczonym członkom Komisji i noszącym tytuł: „Propozycje
      zgłoszone do projektu konstytucji na posiedzeniu Komisji Konstytucyjnej w
      dniu 27 stycznia 1995 r.”"
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Rozumiem, że jeżeli chodzi o wniosek posła J. Szymańskiego ujęty
      jako propozycja skreślenia art. 1-4, to chodzi o zmianę usytuowania
      wymienionych artykułów, a nie o ich definitywne usunięcie. Proszę jednak o
      wyjaśnienie tej kwestii."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Chcę zgłosić poprawki do rozdziału I. Łącznie z tytułem za chwilę
      dostarczę tekst poprawek. Poprawki te to pierwszy rozdział z projektu
      konstytucji przygotowanego przez Komisję Konstytucyjną Senatu I kadencji."
    />

    <Utterance
      speaker="Senator Jan Orzechowski (PSL)"
      imgPath="/images/kk-speakers/OrzechowskiJan.png"
      text="Jeżeli chodzi o artykuły: 1, 2 i 5, to ich cechą wspólną jest to, że
      zawierają określenie Rzeczypospolitej Polskiej. Proponuję więc zastąpienie
      tych trzech artykułów artykułem i o treści: „Rzeczpospolita Polska jest
      demokratycznym państwem prawa, wspólnym dobrem jej obywateli,
      urzeczywistniającym zasady sprawiedliwości społecznej”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proponuję jednak, abyśmy najpierw rozstrzygnęli kwestię tytułu
      rozdziału I. Oprócz propozycji, o których już mówiłem, wpłynęła propozycja
      senatora H. Rota i posła J. Szymańskiego: „Zasady ustroju Rzeczypospolitej
      Polskiej. W projekcie senackim — o czym mówiła senator A. Grześkowiak —
      tytuł rozdziału I brzmi: „Zasady naczelne”. Czy są uwagi do przedłożonych
      propozycji?"
    />

    <Utterance
      speaker="Poseł Tadeusz Iwiński (SLD)"
      imgPath="/images/kk-speakers/IwinskiTadeusz.png"
      text="Uważam, że zamiast: „Zasady podstawowe...” powinno być: „Podstawowe
      zasady... ."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wnioskodawcy wyrażają zgodę na zaproponowaną zmianę redakcyjną. W
      tej sytuacji tytuł proponowany przez podkomisję oraz tytuł proponowany
      przez prof. A. Rzeplińskiego i posła W. Majewskiego są do siebie bardzo
      podobne. Warto rozważyć, czy byłaby możliwa rezygnacja z jednego z nich."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Podczas prac podkomisji podstaw ustroju politycznego i
      społeczno-gospodarczego tytuł nie budził wątpliwości i został przyjęty bez
      szerszej debaty. Nie jestem do końca przekonany, czy mogę formalnie
      wycofać tytuł przyjęty przez podkomisję. Ponieważ jednak nie dostrzegam
      merytorycznej różnicy między tytułem podkomisji a tytułem zgłoszonym przez
      przedstawiciela Prezydenta RP i jednego z posłów, wycofuję tytuł
      zaproponowany przez podkomisję."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Zwracam się do senatora H. Rota i posła J. Szymańskiego, aby
      rozważyli możliwość skreślenia swojej propozycji do formuły: „Zasady
      ustroju Rzeczypospolitej Polskiej” lub nawet do formuły: „Zasady ustroju”.
      Zasady są bowiem podstawowe."
    />
    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wnioskodawcy przyjmują dalej idącą propozycję poseł I. Lipowicz.
      Proszę, aby eksperci wypowiedzieli się na temat propozycji tytułu
      rozdziału 1."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Piotr Winczorek"
      imgPath="/images/kk-speakers/WinczorekPiotr.png"
      text="Wszystkie propozycje tytułów odpowiadają treści rozdziału I. Różnice
      mają charakter tylko werbalny."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Możemy zatem przystąpić do głosowania, które będzie polegało na tym,
      że każdy z członków Komisji będzie mógł wypowiedzieć się za jedną z 4
      propozycji. Poddaję pod głosowanie wniosek, aby tytuł rozdziału I brzmiał:
      „Podstawowe zasady ustroju Rzeczypospolitej Polskiej”. Stwierdzam, że w
      głosowaniu uzyskał poparcie 12 członków Komisji. Poddaję pod głosowanie
      wniosek, aby tytuł rozdziału I brzmiał: „Rzeczpospolita . Stwierdzam, że w
      głosowaniu nikt z członków Komisji nie poparł wniosku. Poddaję pod
      głosowanie wniosek, aby tytuł rozdziału brzmiał: „Zasady naczelne”.
      Stwierdzam, że w głosowaniu nikt z członków Komisji nie poparł wniosku.
      Poddaję pod głosowanie wniosek, aby tytuł rozdziału I brzmiał: „Zasady
      ustroju”. Stwierdzam, że w głosowaniu wniosek zyskał poparcie 18 członków
      Komisji. Tak więc większością głosów Komisja przyjęła, że rozdział
      pierwszy będzie miał tytuł: „Zasady ustroju”. Przechodzimy do debaty nad
      treścią pierwszych pięciu artykułów w rozdziale I."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Odnosząc się do uwagi posła R. Bugaja dotyczącej mojej propozycji
      skreślenia art. 1-4, chcę wyjaśnić, że nie oznacza to eliminacji z
      projektu wszystkich przepisów art. 1-4. Jestem za skreśleniem w całości
      art. 1 i 2. Uważam również, że rozdział I powinien rozpoczynać się od art.
      | wyrażającego zasadę demokratycznego państwa prawnego
      urzeczywistniającego zasady sprawiedliwości społecznej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem więc, że posła J. Szymańskiego mogę dopisać jako
      wnioskodawcę do formuły zgłoszonej na poprzednim posiedzeniu przez posłów:
      T. Iwińskiego 1J. Zdradę."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Nie, gdyż moja propozycja nie mówi o republikańskiej formie państwa,
      co jest zawarte w propozycji posłów: T. Iwińskiego i J. Zdrady."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Powrócimy do tej kwestii za chwilę. Proponuję, abyśmy teraz
      rozstrzygnęli losy obecnego art. 1, gdyż zostały zgłoszone wnioski o jego
      wykreślenie."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Michał Pietrzak"
      imgPath="/images/kk-speakers/PietrzakMichal.png"
      text="Zwracam jednak uwagę, że Komisja nie rozstrzygnęła tytułu
      konstytucji. Może to być tytuł: „Konstytucja Polski” lub „Konstytucja
      Rzeczypospolitej Polskiej”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Działamy w oparciu i na podstawie ustawy konstytucyjnej o trybie
      przygotowania i uchwalenia Konstytucji Rzeczypospolitej Polskiej. Projekt
      Konstytucji, który mamy przygotować, będzie więc projektem Konstytucji
      Rzeczypospolitej Polskiej. Kwestia tytułu konstytucji jest więc
      rozstrzygnięta i nie powinna być głosowana."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Sądzę, że uwaga prof. M. Pietrzaka jest zasadna. Kwestia tytułu
      konstytucji wymaga rozstrzygnięcia. Powinno ono jednak nastąpić w końcowej
      fazie prac."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Uważam, że biorąc pod uwagę tytuł ustawy konstytucyjnej z 23
      kwietnia 1992 r. określający tytuł nowej konstytucji, przebieg
      dotychczasowych prac oraz fakt, że wszystkie siedem projektów to projekty
      Konstytucji Rzeczypospolitej Polskiej, sprawę tytułu nowej konstytucji
      należy uznać za przesądzoną. Powracamy do art. 1. Przypominam, że
      zgłoszono kilka wniosków o wykreślenie art. | w jego obecnej treści, gdyż
      jest tautologiczny. Kwestię tę musimy więc rozstrzygnąć w głosowaniu."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński"
      imgPath="/images/kk-speakers/RzeplinskiAndrzej.png"
      text="Do brzmienia art. 1 zaproponowanego przez prof. M. Pietrzaka na
      poprzednim posiedzeniu, proponujemy dodanie ust. 2. Brzmienie art. 1
      byłoby więc następujące: „Ust. 1. Państwo Polskie jest jednolitą i
      niepodzielną republiką, Jego tradycyjną nazwą jest — Rzeczpospolita
      Polska. Ust. 2. Państwo Polskie jest wspólnym dobrem wszystkich obywatel”."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Chcę wyrazić zdziwienie wnioskiem prof. A. Rzeplińskiego, który
      uczestniczył w pracach podkomisji podstaw. ustroju politycznego i
      społeczno-gospodarczego, lecz nie złożył tego typu wniosku. Nie mogę
      również zgodzić się z uwagą pana przewodniczącego, że art. | ma charakter
      tautologiczny. Z, dyskusji na poprzednim posiedzeniu wynikało, że normę
      zawartą w art. | można pominąć, gdyż może być uznana za oczywistą. Trudno
      bowiem założyć, że Polska może być monarchią. Należy również przypomnieć,
      że padły głosy za utrzymaniem art. 4, choćby z racji nawiązania do
      tradycji konstytucji marcowej, której art. 1 miał taką właśnie treść.
      Jestem więc przeciwny skreśleniu art. 1."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przyjmuję uwagi i wyjaśnienia posła R. Bugaja. Nie zmienia to jednak
      faktu, że kilku członków Komisji — posłowie: L. Moczulski, J. Szymański,
      T. Iwiński, J. Zdrada, L. Pastusiak, T. Mazowiecki, M. Mazurkiewicz oraz
      senator S. Pastuszka — zgłosiło wniosek o skreślenie obecnego art. 1.
      Poddaję pod głosowanie wniosek o skreślenie art. 1 projektu. Stwierdzam,
      że Komisja w głosowaniu, większością 25 głosów popierających, przy 2
      przeciwnych 11 wstrzymującym się, przyjęła wniosek. Tak więc art. 1 w
      dotychczasowym brzmieniu zostaje skreślony. W tej sytuacji będziemy
      rozpatrywać propozycje nowego brzmienia art. 1. Przypomnę propozycje
      złożone dotychczas. Posłowie: J. Zdrada i L. Pastusiak: „Rzeczpospolita
      Polska jest republikańskim demokratycznym państwem prawa”. Art. 1 w
      propozycji przedstawicieli Prezydenta RP ma następujące brzmienie: „Ust.
      1. Państwo Polskie jest jednolitą i niepodzielną republiką. Jego
      tradycyjną nazwą jest — Rzeczpospolita Polska. Ust. 2 Państwo Polskie jest
      wspólnym dobrem wszystkich obywateli”. Posłowie T. Iwiński i J. Zdrada
      proponują: „Rzeczpospolita Polska jest republikańskim, demokratycznym
      państwem prawa urzeczywistniającym zasady sprawiedliwości społecznej ”.
      Propozycja posła J. Szymańskiego jest następująca: „Rzeczpospolita Polska
      jest demokratycznym państwem prawa urzeczywistniającym zasady
      sprawiedliwości społecznej ”. Art. i według posła T. Mazowieckiego to:
      „Państwo Polskie ma ustrój republikański”. Państwo Polskie nosi nazwę —
      Rzeczpospolita Polska. Senator S. Pastuszka proponuje, aby art. 1 miał
      brzmienie: „Rzeczpospolita Polska — wspólne dobro wszystkich obywateli —
      jest republikańskim, demokratycznym państwem prawa, urzeczywistniającym
      zasady sprawiedliwości społecznej ”. Otrzymałem również propozycję posłów
      KPN przewidującą, że art. 1 będzie się składał z 4 ustępów. „Ust. 1.
      Rzeczpospolita Polska jest wspólnym dobrem wszystkich obywateli. Ust. 2.
      Wskrzeszona i powtómie odbudowana walką i ofiarą najlepszych swoich synów
      ma być przekazywana w spadku dziejowym z pokolenia na pokolenie. Ust. 3.
      Każde pokolenie obowiązane jest wysiłkiem własnym wzmóc siły i powagę
      Rzeczypospolitej. Ust. 4. Za spełnienie tego obowiązku odpowiada przed
      potomnością swoim honorem i swoim imieniem”. Czy są wnioski lub uwagi do
      przedłożonych propozycji?"
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="Mam dwie uwagi. Po pierwsze, chcę przypomnieć, że moja propozycja
      art. 1 brzmiała: „Rzeczpospolita Polska jest demokratycznym państwem
      prawa”. W wyniku propozycji prof. P. Sarneckiego został dopisany
      przymiotnik: „republikański”. Może on pozostać, choć moim zdaniem sam
      termin „Rzeczpospolita” wystarcza na określenie formy ustroju jako
      republiki. Jeżeli chodzi o punkt 5 zestawienia propozycji, to jest on
      zgodny z moją intencją tylko pod względem kolejności artykułów, lecz nie
      ich treści. Zawarta w tym punkcie treść art. 1 nie jest zgodna z moim
      wnioskiem. Swoją treść art. 1 przedstawiłem przed chwilą."
    />

    <Utterance
      speaker="Poseł Aleksander Małachowski (UP)"
      imgPath="/images/kk-speakers/MalachowskiAleksander.png"
      text="Chcę zwrócić uwagę, że Komisja proponuje następujące brzmienie:
      „Rzeczpospolita jest republiką”, gdyż wyraz „Rzeczpospolita” jest wiernym
      tłumaczeniem łacińskich wyrazów: res publica. Nie jest to więc wyraz
      polski."
    />
    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="W związku z decyzją Komisji o wykreśleniu art. 1 w dotychczasowym
      brzmieniu, zgłaszam jako poprawkę następujące brzmienie art. 1: „Państwo
      Polskie jest Rzecząpospolitą ”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem, że jest to wniosek mniejszości."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Przedłożoną formułę zgłaszam jako poprawkę."
    />

    <Utterance
      speaker="Głos z sali"
      imgPath="/images/kk-speakers/crowd.png"
      text="Głosowanie nad poprawkami już się odbyło."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Komisja wiedziała, że wyszłam z sali, aby przygotować na piśmie
      brzmienie poprawki. Uważam, że należy myśleć o wszystkich członkach
      Komisji. Jeżeli w momencie gdy przygotowywałam poprawki zost ło
      przeprowadzone głosowanie, oznacza to, że Komisja nie daje jednakowych
      możliwości wszystkim jej członkom. Mogę oczywiście swoje propozycje
      zgłosić jako wniosek mniejszości, gdyż nie miałam szansy zgłoszenia
      poprawki i brania udziału w głosowaniu, choć wychodząc z sali zgłosiłam
      panu przewodniczącemu cel wyjścia."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Chcę poinformować, że broniłem brzmienia art. 1, ale uzyskał on
      poparcie tylko 2 członków Komisji. Gdyby więc nawet senator A. Grześkowiak
      brała udział w głosowaniu, nie zmieniłoby to wyniku w istotny sposób.
      Dodam, że również zamierzam złożyć wniosek mniejszości w tej kwestii.
      Jeżeli chodzi o kolejne artykuły, to uważam, że powinniśmy ustalić, że
      głosowanie będzie przeprowadzone wówczas, gdy wszystkie propozycje zostaną
      zestawione w formie pisemnej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Zgadzam się z propozycją posła R. Bugaja. Senator A. Grześkowiak
      chcę natomiast poinformować, że jej wniosek dotyczący nie tylko brzmienia
      art. 1, ale także dotyczący brzmienia tytułu, został poddany pod
      głosowanie mimo nieobecności wnioskodawcy. Powracam do kwestii ustalenia
      nowego brzmienia art. 1."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Swoją propozycję złożyłem dlatego, iż odniosłem wrażenie, że część
      członków Komisji przywiązuje dużą wagę do republikańskiej formy państwa.
      Ponadto proponuję modyfikację mojej propozycji: „Państwo Polskie ma ustrój
      republikański i nosi nazwę — Rzeczpospolita Polska”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wydaje się, że powinniśmy zdecydować, czy określenie mówiące o
      republikańskiej formie rządów znajdzie się w konstytucji, czy też nie."
    />

    <Utterance
      speaker="Poseł Tadeusz Iwiński (SLD)"
      imgPath="/images/kk-speakers/IwinskiTadeusz.png"
      text="Uważam, że art. 1 powinien zostać oparty na treści obecnego art. 5.
      Kwestia republikańskiej formy państwa jest kwestią drugorzędną."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Uważam, że konieczne jest sformułowanie mówiące o republikańskiej
      formie rządów. Rzeczpospolita jako republika szlachecka była monarchią. W
      obecnej formie republika oznacza formę sprawowania władzy. Ponadto warto
      pamiętać, że są w Polsce partie polityczne o programie monarchistycznym."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Leszek Wiśniewski"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Zgadzam się z senatorem S. Pastuszką, gdyż było tak, że przez długi
      czas używano pojęcia „Rzeczpospolita”, choć państwo było monarchią. W
      okresie międzywojennym używano nazwy „Rzeczpospolita” dla określenia
      republiki, lecz jest to tradycja krótsza. Zarówno więc monarchiści jak i
      republikanie mają do czego odwoływać się, choć tradycje monarchistyczne są
      dłuższe."
    />

    <Utterance
      speaker="Senator Jan Orzechowski (PSL)"
      imgPath="/images/kk-speakers/OrzechowskiJan.png"
      text="Uważam, że w art. 1 powinny znaleźć się elementy obecnego art. 2
      iart. 5. Nie uważam natomiast za konieczne pisanie o republikańskiej
      formie rządów."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński"
      imgPath="/images/kk-speakers/RzeplinskiAndrzej.png"
      text="Z dyskusji wynika, że treść art. 1 jest postrzegana przez treść
      obecnego art. 5. Projekt konstytucji Unii Wolności obejmuje tylko zasady
      państwa. Mam więc uwagę do formuły mówiącej o urzeczywistnianiu zasad
      sprawiedliwości społecznej. Utrzymanie tej formuły przy jednoczesnym
      przyjęciu zasady ostateczności orzeczeń Trybunału Konstytucyjnego
      dotyczących zgodności ustaw z konstytucją, oznaczać będzie oddanie
      nieograniczonej władzy Trybunałowi Konstytucyjnemu. Każde orzeczenie
      Trybunału Konstytucyjnego, nawet jeżeli będzie sprzeczne z poprzednimi, da
      się utrzymać. Nie znaczy to, że należy koniecznie zrezygnować z całej
      formuły, która jest jednak trudna do interpretacji w kategoriach prawnych.
      Znacznie łatwiej jest interpretować pojęcie państwa socjalnego. Najnowsze
      konstytucje definiując państwo najczęściej ograniczają się do formuły
      państwa prawnego i ewentualnie społecznego, czyli socjalnego. Chcę również
      dodać, iż uważam, że ze względów redakcyjnych bardziej poprawna jest
      formuła: państwo prawne, a nie państwo prawa."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Debata dotyczy cech Rzeczypospolitej. Mimo że moja propozycja art. 1
      upadła, to jednak chcę przedłożyć poprawkę do złożonych propozycji.
      Proponuję, aby artykuł obejmujący cechy Rzeczypospolitej miał następującą
      treść: „Ust. 1. Rzeczpospolita Polska jako wspólne dobro wszystkich jej
      obywateli, jest suwerennym państwem demokratycznym uznającym i
      gwarantującym ienaruszalność praw człowieka wynikających z jego
      przyrodzonych godności i wartości. Ust. 2 Rzeczpospolita Polska chroni
      niepodległość i niezbywalne prawo do całości terytorialnej Państwa
      Polskiego”. Uzasadnienie przedłożonej propozycji przedstawiałam już
      podczas posiedzenia Komisji Konstytucyjnej oraz Zgromadzenia Narodowego.
      Jeżeli jednak ktoś będzie chciał usłyszeć uzasadnienie, to mogę je
      przedstawić."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jest to art. 2 projektu senackiego. Rozumiem, że miałby być
      artykułem 1."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Chcę kontynuować wątek podjęty przez prof. A. Rzeplińskiego. Chodzi
      o zwrot: „demokratyczne państwo prawne”, przyjęty w 1989 r. Przypominam
      sobie debatę nad tym sformułowaniem. W jej wyniku przyjęto formułę
      demokratycznego państwa prawnego. Uważam, że zanim przyjmiemy formułę art.
      1 powinniśmy poprosić ekspertów o opinię, gdyż w doktrynie występuje
      zarówno pojęcie państwa prawa, jak i państwa prawnego."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Uważam, że najpierw należy jednak rozstrzygnąć kwestię zapisania,
      lub nie, republikańskiej formy państwa. Poddaję pod głosowanie wniosek,
      aby w jednym z początkowych artykułów konstytucji znalazło się
      stwierdzenie mówiące o republikańskim charakterze państwa. Stwierdzam, że
      Komisja w głosowaniu, większością 18 głosów przeciwnych, przy 6 głosach
      popierających i 2 wstrzymujących się, odrzuciła wniosek. Z wyników
      głosowania wynika jednak, iż nie ma quorum, co oznacza, że Komisja nie
      podjęła decyzji. Głosowania formalne przeprowadzimy w późniejszym
      terminie."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Proponuję przyjąć stałe godziny głosowań."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Nad przedyskutowanymi kwestiami głosowania odbędą się o godz. 15.
      Czy są jeszcze wnioski lub poprawki dotyczące art. 1?"
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="Mam propozycję dotyczącą sekwencji głosowań, która powinna służyć
      zachowaniu spójności przyjmowanych przepisów. Uważam, że jako art. 1
      powinna być poddana pod głosowanie propozycja zgłoszona przez posła T.
      Mazowieckiego. Artykułem 2 byłby dotychczasowy art. 2 z projektu
      podkomisji. Artykułem 3 byłaby treść obecnego art. 5. Taka sekwencja
      byłaby najwłaściwszym początkiem rozdziału I."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem, że równocześnie oznacza to, że poseł J. Z/drada wycofuje
      swoje propozycje. Czy są jeszcze wnioski lub uwagi dotyczące art. 1? Nie
      ma. Informuję więc, że o godz. 15 odbędzie się głosowanie nad zgłoszonymi
      i nie wycofanymi propozycjami treści początkowych artykułów w rozdziale
      pierwszym. Przechodzimy do debaty nad treścią artykułów 3, 416. Wydaje się
      bowiem, że art. 1 skonsumuje treści zawarte w projekcie podkomisji w
      artykułach 1, 215. Musimy więc teraz zdecydować o treści artykułów: 3, 4 i
      6 oraz o ich kolejności, gdyż zgłoszono wnioski dotyczące zmiany
      kolejności. Akcentowano zwłaszcza, aby artykułem 2 był artykuł poświęcony
      suwerenności narodu, a więc obecny art. 6."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński"
      imgPath="/images/kk-speakers/RzeplinskiAndrzej.png"
      text="Mam dwie uwagi do art. 3. Pierwsza z nich dotyczy sformułowania
      mówiącego o gwarantowaniu praw człowieka. Uważam, że w kontekście innych
      pojęć ujętych w tym artykule, z formułą tą mogą być kłopoty
      interpretacyjne, jeżeli cały przepis traktujemy jako całość merytoryczną.
      Ponieważ w dalszej części tego przepisu dwukrotnie użyto wyrazu:
      „Sstrzeże”, proponuję zastosowanie tego pojęcia również w odniesieniu do
      praw człowieka. Druga możliwa formuła to: „zapewnia ochronę”. Uważam ją za
      lepszą z punktu widzenia tego, co jest treścią art. 3. Proponuję również,
      aby zamiast terminu: „prawa człowieka” użyć formuły: „wolności i prawa
      człowieka”. Jest to wskazane ze względu na odbiór społeczny oraz ze
      względu na formułę stosowaną w rozdziale II. Sądzę ponadto, że od formuły:
      „strzeże niepodległości i całości swojego terytorium”, lepsza byłaby
      formuła: „strzeże niepodległości i nienaruszalności swojego terytorium”.
      Nie można bowiem wykluczyć sytuacji, w której właściwe organy, w sposób
      zgodny Z prawem podejmą decyzje dotyczące terytorium. Mam również uwagę do
      art. 6, do formuły: „swoich demokratycznie wybranych przedstawicieli”.
      Chodzi o to, że niektóre urzędy będą sprawowane bez mandatu pochodzącego z
      demokratycznych wyborów, lecz z demokratyczną legitymacją. Dotyczy to
      zwłaszcza sędziów, a także urzędów obsadzanych przez Sejm. Myślę więc, że
      można rozważyć rezygnację z formuły: „demokratycznie wybranych”. Proponuję
      rozważyć również, aby art. 6 rozpoczynał się od wyrazów: „Suwerenem
      Rzeczypospolitej Polskiej jest ogół obywateli tworzących Naród...”"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przypominam, że w art. 3 rozstrzygnięcia wymaga również kwestia
      ujęta alternatywnie przez podkomisję podstaw ustroju politycznego 1
      społeczno-gospodarczego."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Mam uwagę do art. 3, a mówiąc Ściślej do formuły dotyczącej ochrony
      środowiska oraz do wniosku grupy członków Komisji, którzy proponują
      wpisanie do konstytucji zasad zrównoważonego rozwoju. Moja propozycja
      polega na tym, aby art. 3 składał się z dwóch ustępów. Ust. I obejmowałby
      obecną treść art. 3 z wyjątkiem końcowego ”fragmentu. Ust. 2 miałby zaś
      następującą treść: „Rzeczpospolita Polska zapewnia ochronę środowiska,
      stosując zasady zrównoważonego rozwoju”. Wniosek grupy członków Komisji
      mówi o trwałym i zrównoważonym rozwoju. Jest to definicja podwójna. Lepiej
      więc mówić o zrównoważonym rozwoju, co oznacza zaspokojenie potrzeb
      obecnego pokolenia z uwzględnieniem potrzeb przyszłych pokoleń."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Chcę dodać, iż stosowane jest również pojęcie harmonijnego rozwoju."
    />

    <Utterance
      speaker="Poseł Włodzimierz Cimoszewicz (SLD)"
      imgPath="/images/kk-speakers/CimoszewiczWlodzimierz.png"
      text="Przychylam się do argumentów, że obecny art. 6 ze względu na treść
      powinien być art. 2. Chcę dodać jeszcze jeden argument, aby treść obecnego
      art. 6 poprzedzała art. 3. W obu tych artykułach występuje pojęcie narodu,
      lecz jest ono zdefiniowane w art. 6, a pierwszy raz występuje w art. 3."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Opowiadam się za tym, aby art. 2 formułował zasadę zwierzchnictwa
      narodu 1 miał brzmienie następujące: „Ust. 1. W Rzeczypospolitej Polskiej
      władza zwierzchnia należy do Narodu. Ust. 2. Naród sprawuje władzę przez
      swych przedstawicieli lub bezpośrednio”. Argumenty na rzecz usytuowania w
      art. 2 zasady suwerenności narodu zostały już przedstawione. Nie będę więc
      ich powtarzał."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Moje stanowisko jest zapewne mało popularne, gdyż przewiduje
      skreślenie art. 3. Uważam bowiem, że określenie celów państwa w
      konstytucji nie spełnia celów normatywnych. Jest to raczej ideologia,
      która nie służy normatywnemu i jurydycznemu charakterowi konstytucji. Art.
      3 podejmuje kwestie oczywiste, a jednocześnie nie podejmuje innych,
      również ważnych kwestii. Nie proponuję jednak rozszerzenia katalogu, lecz
      przeciwnie, jego skreślenie. Warto dodać, że każde państwo strzeże
      niepodległości i całości swojego terytorium. Problemy widać już przy
      kwestii kultury i języka. O ochronie praw człowieka jest mowa w rozdziale
      II."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Absolutnie nie mogę podzielić stanowiska posła J. Ciemniewskiego,
      który postuluje skreślenie art. 3 określającego cele państwa i jego
      charakter. W moim pojęciu skreślenie art. 3 spowoduje, że może stracić
      sens cały rozdział I."
    />

    <Utterance
      speaker="Przedstawiciel pełnomocnika obywatelskiego projektu konstytucji
      Michał Drozdek"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Podobnie jak senator S. Pastuszka chcę zdecydowanie bronić art. 3.
      Jak już mówiłem na jednym z poprzednich posiedzeń, konstytucja to nie
      tylko akt prawny określający wyłącznie funkcjonowanie instytucji władzy.
      Konstytucja to również akt konstytuujący państwo, mówiący o jego
      tożsamości i celach. Z prac podkomisji pamiętam, że poseł J. Ciemniewski
      kwestionował przede wszystkim sformułowanie mówiące o strzeżeniu języka
      narodu, co zostało ujęte alternatywnie. W związku z tym chcę przypomnieć,
      że w art. 23 projekt przewiduje ochronę języków mniejszości narodowych.
      Trudno więc byłoby przyjąć, żeby język polski jako język narodu, który
      stworzył państwo polskie, nie był chroniony. Nie widzę również powodów do
      obaw o równouprawnienie obywateli w kontekście art. 23. Uważam więc, że
      państwo polskie ma obowiązek stania na straży języka polskiego i powinno
      to być zapisane w konstytucji. Jeżeli chodzi o propozycję posła W.
      Cimoszewicza przesunięcia kolejności art. 3 i art. 6, to nie popieram Jej.
      gdyż uważam, że art. 3 ma większą wagę, ponieważ dotyczy celów państwa.
      Definicja państwa może być umieszczona również później."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Piotr Winczorek"
      imgPath="/images/kk-speakers/WinczorekPiotr.png"
      text="Przychylam się do opinii senatora S. Pastuszki i M. Drozdka. Nie
      ulega wątpliwości, że konstytucja powinna być aktem normatywnym o bardzo
      ograniczonej liczbie haseł. Haseł nie da się jednak zupełnie wyeliminować
      z tekstu konstytucji. Gdyby tak się stało, to konstytucja byłaby
      regulaminem proceduralnym. Przyjmując skrajną postawę należałoby
      postulować skreślenie zwrotu: „demokratyczne państwo” jako również
      wzniosłego hasła. Uważam, że w art. 3 zawarte są bardzo istotne treści
      mające sens normatywny, o czym już mówiłem. Proponuję również wprowadzenie
      do art. 3 formuły o zrównoważonym rozwoju. Korzystając z okazji chcę
      również odnieść się polemicznie do wypowiedzi prof. A. Rzeplińskiego na
      temat formuły mówiącej o gwarantowaniu praw człowieka. Pojęcie gwarancji
      praw jest na gruncie nauk prawnych i praktyki pojęciem znanym."
    />

    <Utterance
      speaker="Poseł Leszek Moczulski (KPN)"
      imgPath="/images/kk-speakers/MoczulskiLeszek.png"
      text="Jestem w pełni za utrzymaniem w przyszłej konstytucji wartości
      wymienionych w art. 3. Równocześnie chcę zwrócić uwagę, że sprawiają one
      wrażenie niezupełnie pełnego katalogu. Chodzi mi zwłaszcza o fragment
      mówiący o dziedzictwie. Pojęcie dziedzictwa jest pojęciem szerszym niż
      tylko kultura, język i środowisko przyrodnicze. Pojęcie dziedzictwa
      dotyczy spraw duchowych i materialnych. Wydaje się ponadto, że bardziej
      właściwe byłoby sformułowanie nie enumeratywne, gdyż może ono zawierać
      luki, a sformułowanie bardziej ogólne, obejmujące całe dziedzictwo
      narodowe, zarówno w sensie duchowym, jak i materialnym. Chcę zwrócić
      uwagę, że w poprawce, którą dzisiaj złożyłem, jest zawarta stosowna
      propozycja. Jej miejsce widzę jednak nieco dalej w systematyce rozdziału
      I."
    />

    <Utterance
      speaker="Przedstawiciel Polskiego Towarzystwa Ekonomicznego prof. Zdzisław
      Sadowski"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Chcę się odnieść do propozycji uzupełnienia art. 3 o pojęcie
      zrównoważonego rozwoju. Podzielam pogląd, że takie uzupełnienie jest
      potrzebne, a wyliczenie elementów w art. 3 nie jest wystarczające. Samo
      pojęcie rozwoju byłoby zbyt ogólne. Ponieważ kwestia zrównoważonego
      rozwoju dotyczy mojej specjalności zawodowej, chcę przestrzec przed
      wprowadzeniem pojęcia zrównoważonego rozwoju, gdyż jest ono nieostre i
      wieloznaczne. Myślę, że należałoby posłużyć się pojęciem trwałego i
      wszechstronnego rozwoju społecznego i gospodarczego. Jest to formuła
      dłuższa, lecz bardziej właściwa."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Zamierzałam mówić O czymś innym, lecz mój przedmówca sprowokował
      mnie mówiąc o wszechstronnym rozwoju. Wiem bowiem, co ten „rozwój”
      oznaczał dla województwa katowickiego, w którym mieszkam. Oznaczał klęskę
      ekologiczną i zdrowotną. Uważam więc, że „wszechstronny rozwój” powinien
      być zakazany ustawowo. Nie możemy bowiem rozwijać się wszechstronnie
      >zwłaszcza gospodarczo. Brakuje bowiem wody, powietrza i ziemi. Uważam, że
      pojęcie „Zrównoważony rozwój” m ustalone znaczenie w literaturze
      światowej. Oznacza pryncypia rozwoju ekologicznego, a więc takiego, które
      uwzględniają potrzeby środowiska naturalnego. Chodzi więc o zupełnie inne
      pojęcie o stosunku do pojęć z poprzedniej epoki. Kwestia druga to apel o
      przeniesienie dyskusji na wyższy poziom. Jeżeli bowiem pada postulat
      skreślenia jakiegoś pojęcia czy ograniczenia wyliczenia celów państwa, nie
      oznacza to sprzeciwiania się celom i wartościom, lecz chodzi o
      jurydyczność przepisów konstytucji. Do dyskusji pzostaje więc problem, czy
      konieczne jest odrębne wymienienie strz żenia języka, gdyż język chyba
      mieści się w dziedzictwie kultury."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Rozpocznę od uwagi polemicznej, że nie od deklaratywnego przepisu o
      wszechstronnym, czy zrównoważonym Tozwoju zależy rozwój określonego
      regionu czy państwa. Rozwój ten zależy przede wszystkim od mądrości ludzi.
      Uważam, że po art. 1 mówiącym o państwie, po art. 2 mówiącym o
      zwierzchnictwie narodu, art. 3 powinien formułować zasadę praworządności i
      zasadę legalizmu. Art. 3 miałby brzmienie: „Ust. 1. Przestrzeganie praw
      Rzeczypospolitej Polskiej jest podstawowym obowiązkiem każdego organu
      państwa. Ust. 2. Wszystkie organy władzy i administracji państwowej
      działają na podstawie przepisów prawa”."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Mam odmienny pogląd niż poseł J. Szymański, gdyż uważam, że obecny
      art. 3 powinien być art. 2, podejmuje bowiem podstawowe i generalne
      zadania Rzeczypospolitej Polskiej. Dopiero dalsze artykuły powinny mówić o
      strukturze władzy. Również nie mogę się zgodzić z prof. Z. Sadowskim, że
      chodzi o rozwój wszechstronny i trwały. Chodzi o rozwój z myślą o
      przyszłych pokoleniach. Oznaczać to może nawet ograniczenie obecnego tempa
      rozwoju, po to aby nie zniszczyć zasobów, które powinny służyć również
      przyszłym pokoleniom. Nie można postępować według zasady: po nas choćby
      potop. Jestem więc za przyjęciem formuły zrównoważonego rozwoju, zwłaszcza
      że termin ten zyskał już uznanie również w Polsce."
    />

    <Utterance
      speaker="Przedstawiciel Polskiego Towarzystwa Ekonomicznego prof. Zdzisław
      Sadowski:"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Muszę zaprotestować przeciwko posądzeniu mnie o dążenie do
      posługiwania się archaicznymi zwrotami. Jeżeli kogoś razi użycie zwrotu
      „wszechstronny rozwój” na takiej zasadzie, że w przeszłości był on używany
      nieprawidłowo, to ja mogę to zrozumieć. Nie będę się upierał przy tym
      pojęciu. Chcę natomiast zwrócić uwagę, że pojęcie zrównoważonego rozwoju
      było również używane w przeszłości. Można je również uznać za
      skompromitowane, lecz nie o to przecież chodzi. Problem polega na tym, jak
      przetłumaczyć na język polski pojęcia: sustained czy sustainable >gdyż nie
      ma idealnego przekładu. Możliwe jest użycie pojęcia: trwały rozwój lub
      ekorozwój, które jest jednak terminem żargonowym. Pojęcie: „zrównoważony
      rozwój” jest pojęciem nieostrym dlatego, że dzisiejszy rozwój opiera się
      na innowacyjności, która powoduje ciągłe wytrącanie z równowagi. Rozwój ma
      więc być niezrównoważony."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Otrzymałem jeszcze jedną propozycję art. 3, którą przygotowali
      senatorowie: H. Rot i P. Jankiewicz. Jej brzmienie jest następujące:
      „Rzeczpospolita Polska gwarantuje wolności i prawa człowieka, strzeże
      niepodległości, jednolitości i niepodzielności swojego terytorium, strzeże
      dziedzictwa kultury narodowej i języka oraz zapewnia ochronę środowiska
      przyrodniczego . RÓwnocześnie proponuje się skreślenie art. 4. Propozycję
      brzmienia art. 3 przedstawił poseł J. Szymański. Jest ona następująca:
      „Ust. 1. Przestrzeganie praw Rzeczypospolitej Polskiej jest stawowym
      obowiązkiem każdego organu władzy publicznej. Ust. 2. Wszystkie organy
      władzy publicznej działają na podstawie i w granicach prawa . Propozycje
      obejmujące pierwsze artykuły rozdziału I przedłożył również poseł J.
      Jaskiernia. Brzmienie art. I jest następujące: „Ust. 1. Państwo Polskie
      jest suwerenną, jednolitą i niepodzielną republiką. Ust. 2. Rzeczpospolita
      Polska jest wspólnym dobrem wszystkich obywateli urzeczywistniającym
      zasady sprawiedliwości społecznej. Ust. 3. Rzeczpospolita Polska jest
      demokratycznym państwem prawnym. Ust. 4. Rzeczpospolita Polska gwarantuje
      prawa człowieka, strzeże niepodległości i nienaruszalności swojego
      terytorium, strzeże dziedzictwa i kultury Narodu oraz zapewnia ochronę
      Środowiska i rozwój społeczno-gospodarczy kraju”. Brzmienie art. 2 jest
      następujące: „Ust. 1. Władza zwierzchnia w Rzeczypospolitej Polskiej
      należy do ogółu obywateli — tworzących Naród. Naród sprawuje władzę przez
      swych przedstawicieli lub bezpośrednio”. Ponadto zgłoszone zostały:
      prezentowana już poprawka senatora J. Madeja oraz poprawka senator A.
      Grześkowiak, będąca treścią art. 2 i art. 3 projektu senackiego. Za chwilę
      ogłoszę przerwę w obradach. Przedtem chcę jednak prosić senatora J.
      Madeja, posła J. Jaskiemię, posła L. Pastusiaka oraz senatora S.
      Pastuszkę, aby wzięli udział w spotkaniu z udziałem przedstawicieli Biura
      Legislacyjnego i sekretariatu Komisji. Celem spotkania będzie
      uporządkowanie zgłoszonych propozycji poprawek tak, aby mogły one być
      przedmiotem głosowania po przerwie. Ogłaszam przerwę do godz. 15. [Po
      przerwie]"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wznawiam — po przerwie — obrady Komisji. Uczestnicy posiedzenia
      otrzymali materiał noszący tytuł: „Propozycje brzmienia art. 1-4 zgłoszone
      na posiedzeniu Komisji Konstytucyjnej w dniu 7 lutego 1995 r.” Za chwilę
      będą one podstawą głosowań. Wcześniej jednak chciałbym, aby Komisja
      rozstrzygnęła dwie kwestie natury bardziej szczegółowej. Kwestia pierwsza
      to pytanie, czy wśród cech opisujących państwo ma być określenie mówiące o
      ustroju republikańskim, czy też nie."
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="W propozycji brzmienia art, 1, które zgłosiliśmy, nie ma wyrazu:
      „nost”. Proszę o uzupełnienie tego braku."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przyjmuję uwagę posła J. Zdrady. Wspólna propozycja posła J. Zdrady
      i posła T. Mazowieckiego oznaczona cyfma więc brzmienie: „Państwo polskie
      ma ustrój republikański i nosi nazwę Rzeczpospolita Polska”. Powracam do
      kwestii użycia określenia mówiącego o republikańskiej formie państwa.
      Poddaję pod głosowanie wniosek, aby w rozdziale I znalazło się
      stwierdzenie mówiące o republikańskiej formie państwa. Stwierdzam, że
      Komisja w głosowaniu, większością 18 głosów przeciwnych, przy 9 głosach
      popierających i 2 wstrzymujących się, odrzuciła wniosek. Tak więc
      republikańska forma państwa nie będzie zapisana. Kwestia druga to:
      „państwo prawa” czy „państwo prawne”?"
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Uważam, że dobrze byłoby, abyśmy mogli wysłuchać opinii ekspertów w
      tej kwestii."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Nie chcę dyskutować na temat, które z określeń jest lepsze, lecz
      chcę zwrócić uwagę, że zmiana obecnej formuły na inną może mieć
      nieobliczalne skutki dla orzecznictwa. Obowiązujące przepisy konstytucyjne
      mówią o „państwie prawnym . Zmiana tej formuły spowoduje, że orzecznictwo
      będzie się doszukiwało różnicy pomiędzy sformułowaniem wprowadzonym w 1989
      r. a sformułowaniem z 1995 r. Nawet więc, jeżeli ktoś uważa, że nie jest
      to sformułowanie poprawne, to lepiej je utrzymać, gdyż opiera się na nim
      orzecznictwo Trybunału Konstytucyjnego i literatura przedmiotu. Za tym,
      aby nie dokonywać zmiany przemawia również to, że nie jest proponowana
      zmiana treści tego pojęcia."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Uważam, że poseł J. Ciemniewski ma rację. Formuła „państwa prawnego”
      znajduje się w naszym prawie konstytucyjnym od grudnia 1989 r. i weszła na
      trwałe do orzecznictwa Trybunału Konstytucyjnego. Czy zatem warto zmieniać
      coś, co się sprawdziło, jest przyjęte i funkcjonuje w obrocie prawnym? Nie
      mam obaw, że Trybunał Konstytucyjny będzie się dopatrywał różnic
      merytorycznych na skutek różnicy formuł. Jest bowiem tak, że sam Trybunał
      stawia znak równości między tymi dwiema formułami. Znajduje to również
      wyraz w niektórych orzeczeniach i uzasadnieniach. Uważam więc, że między
      tymi dwiema formułami nie ma istotnych różnic. Może więc pozostać formuła
      mówiąca o „państwie prawnym”."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński"
      imgPath="/images/kk-speakers/RzeplinskiAndrzej.png"
      text="Nie jestem językoznawcą, ale jest tak, że w języku polskim
      rzeczownik określa przymiotnik. Nie mówimy: „państwo demokracji”, lecz
      „państwo demokratyczne”."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Wydaje się, że pojęcie „państwo prawa” powstało jako dosłowne
      tłumaczenie oryginału niemieckiego. W literaturze prawnej i prawniczej
      przyjęło się jednak: „państwo prawne”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czy ktoś jest przeciwny przyjęciu formuły: „państwo prawne”?"
    />

    <Utterance
      speaker="Senator Piotr Andrzejewski (NSZZ „S”)"
      imgPath="/images/kk-speakers/AndrzejewskiPiotr.png"
      text="Jestem przeciwny."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Skoro jest sprzeciw, przeprowadzimy głosowanie. Poddaję pod
      głosowanie wniosek o przyjęcie formuły: „państwo prawne” przy określeniu
      cech państwa w art. 1. Stwierdzam, że w głosowaniu za formułą: „państwo
      prawne” opowiedziało się 20 członków Komisji. Poddaję pod głosowanie
      wniosek o przyjęcie formuły: „państwo prawa” przy określeniu cech państwa
      w art. 1. Stwierdzam, że w głosowaniu za formułą: „państwo prawa”
      opowiedziało się 5 członków Komisji. Wstrzymało się od głosu 4 członków
      Komisji. Tak więc przyjęta została formuła: „państwo prawne”, Proponuję,
      aby wnioskodawcy poszczególnych propozycji uwzględnili w nich wyniki
      głosowań. Przystępujemy do analizy propozycji brzmienia art. 1-4
      zgłoszonych w dniu dzisiejszym. Proszę o zmodyfikowane brzmienie pierwszej
      propozycji."
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="Proponujemy, aby art. 2 naszej propozycji stał się art. 1, a art. 3
      — art. 2."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Proponuję, abyśmy obecnie pole decyzji ograniczyli do art. 1."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="W tej chwili chodzi o przejrzenie i ewentualne modyfikacje
      zgłoszonych wniosków z punktu widzenia wyników głosowań. Wniosek nr 2
      zgłosił poseł J. Jaskiernia. Pobyt autora wniosku w szpitalu utrudnia
      weryfikację brzmienia propozycji. Autorami wniosku nr 3 są posłowie: T.
      Iwiński i J. Szymański. Czy poza zmianą wyrazu: „prawa” na: „prawnym” są
      inne propozycje zmian? Nie ma."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Chcielibyśmy dokonać również modyfikacji w art. 3 naszej propozycji.
      W związku z tym prosimy o udzielenie głosu prof. W. Osiatyńskiemu."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Mój duży problem to końcowa część art. 3, czyli formuła:
      „urzeczywistniającym zasady sprawiedliwości społecznej”. Uważam, że jest
      to problem o ogromnej doniosłości. Należy więc uświadomić sobie wszystkie
      jego konsekwencje, zwłaszcza w demokratycznym państwie prawnym i państwie
      konstytucyjnym. Formuła o urzeczywistnianiu zasad sprawiedliwości
      społecznej znalazła się tylko w jednym z siedmiu projektów konstytucji.
      Inny projekt mówił o kierowaniu się zasadą sprawiedliwości społecznej.
      Różnica między tymi sformułowaniami jest ogromna. Kwestia zasadnicza
      dotyczy tego, czy sformułowanie konstytucyjne będzie tylko przyzwoleniem
      dla państwa do podejmowania ważnej działalności, jaką jest niewątpliwie
      pomoc społeczna, czy też będzie rodziło po stronie obywateli roszczenie do
      rezultatów takich działań. Obawiam się, że sformułowanie:
      „urzeczywistniającym zasady sprawiedliwości społecznej” rodzi po stronie
      obywateli roszczenie do rezultatów działań socjalnych. Ponadto chcę dodać,
      że w konstytucjach państw demokratycznych występuje pojęcie
      sprawiedliwości społecznej. Tak jest m.in. we Włoszech, lecz formuła ta
      nie ma charakteru jurydystycznie obowiązującego. Natomiast w konstytucji
      niemieckiej, na podstawie której zbudowano ogromne państwo socjalne,
      znajduje się sformułowanie, zgodnie z którym RFN jest państwem prawnym i
      socjalnym. Sformułowanie o państwie socjalnym oznacza, że państwo ma
      podejmować działania socjalne. Nie oznacza natomiast prawa do roszczeń. W
      związku z omawianym zagadnieniem chcę przedstawić kilka argumentów.
      Kwestia sprawiedliwości społecznej została wprowadzona do konstytucji w
      okresie rządów E. Gierka, a ściślej mówiąc w 1976 r. Pojmowanie
      sprawiedliwości społecznej, zwłaszcza w orzecznictwie Trybunału
      Konstytucyjnego i działalności Rzecznika Praw Obywatelskich, wiąże się
      przede wszystkim z roszczeniem do pewnych działań redystrybucyjnych.
      Pierwsze pytanie dotyczy więc tego, czy konstytucja ma zakładać —
      zwłaszcza w okresie reform rynkowych — jako cel państwa działanie
      redystrybucyjne, czy ma dopuszczać działania redystrybucyjne jako środek
      wówczas, gdy celem jest na przykład to, aby ludzie nie umierali z głodu i
      z biedy, czyli żeby wtedy dopuszczać działania redystrybucyjne, kiedy
      chodzi o spełnienie zasady bezpieczeństwa socjalnego. Chcę powiedzieć, że
      w Świecie powstały trzy modele państwa socjalnego, czy państwa dobrobytu:
      skandynawski, zachodnioniemiecki i anglosaski. Tylko model skandynawski
      przyjmuje jako wartość sprawiedliwość, czy redystrybucję. Model niemiecki
      i anglosaski przyjmuje jako wartość bezpieczeństwo socjalne. Ma to ogromne
      znaczenie, zarówno jeżeli chodzi o konsekwencje, jak i postawy. Jeżeli
      chodzi o postawy, to obawiam się, że sformułowanie mówiące o
      urzeczywistnianiu zasad sprawiedliwości społecznej — w odróżnieniu od
      państwa socjalnego i nawet formuły mówiącej o kierowaniu się zasadami
      sprawiedliwości społecznej — może rodzić postawy roszczeniowe bardziej niż
      postawy odpowiedzialności za samego siebie i własne życie, przy jedynie
      pomocniczej roli państwa. Ważne jest również to, aby członkowie Komisji
      byli świadomi, że sformułowanie w konstytucji zwrotu o urzeczywistnianiu
      zasad sprawiedliwości społecznej — w państwie konstytucyjnym, a nie w
      państwie deklaratywnym — oznacza praktycznie przeniesienie 80 proc.
      decyzji władczych, w tym także budżetowych, do Trybunału Konstytucyjnego.
      Taka decyzja może być oczywiście podjęta, ale należy być świadomym, że
      wówczas Trybunał Konstytucyjny będzie miał podstawę do decydowania o
      rozstrzygnięciach budżetowych, a nie parlament, gdyż taka będzie norma
      konstytucyjna. Osobiście postuluję, iż lepszą formułą, zwłaszcza w świetle
      przyjęcia formuły o państwie prawnym, byłaby formuła o państwie prawnym i
      socjalnym jak w konstytucji RFN, albo formuła mówiąca o kierowaniu się
      zasadami sprawiedliwości lub formuła o kierowaniu się zasadami
      bezpieczeństwa 'socjalnego. Chodzi bowiem o to, aby cele socjalne były w
      konstytucji, lecz aby to jednocześnie nie rodziło roszniwelacyjnych do
      sprawiedliwości społecznej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proszę więc wnioskodawców, czyli posłów J. Zdradę i T. Mazowieckiego
      o przedstawienie brzmienia art. 2 w wersji poprawionej, po wypowiedzi
      prof. W. Osiatyńskiego."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Generalnie rzecz biorąc wolałbym, aby przepis taki był w innym
      artykule. Skoro jednak formuła ta ma być w tym artykule, to powinna ona
      mówić o kierowaniu się zasadami sprawiedliwości społecznej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem więc, że propozycja posłów: J. Zdrady i T. Mazowieckiego
      brzmi: „Rzeczpospolita Polska jest demokratycznym państwem prawnym
      kierującym się zasadami sprawiedliwości społecznej”."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Swoje poglądy prof. W. Osiatyński wygłosił w stylu bardzo ex
      cathedra, informując nas wprost, do czego to prowadzi i jakie to proste.
      Wydaje mi się, że nie jest to takie proste. Problemem tym zajmowaliśmy się
      stosunkowo długo podczas prac podkomisji podstaw ustroju politycznego 1
      społeczno-gospodarczego. Ponadto nie podoba mi się taki tryb pracy
      Komisji. Oznacza on bowiem porzucenie całego dorobku pracy podkomisji i
      rozpoczęcie dyskusji od początku. Uważam również, że skrajna interpretacja
      następstw przyjętej formuły jest niezgodna z tym, co różni eksperci mówili
      podczas prac podkomisji. Proszę więc o wypowiedzi innych ekspertów, gdyż
      punkt widzenia przedstawiony przez prof. W. Osiatyńskiego wydaje się być
      skrajnym i jednostkowym. W szczególności zupełnie nie rozumiem tego
      poglądu, który stanowi, że można stworzyć gwarancje socjalne nie
      dopuszczając do redystrybucji. Tylko na podstawie redystrybucji, i to
      daleko idącej, można zapewnić elementy państwa socjalnego i tak to się
      dzieje w praktyce niemieckiej. Wydaje się, że między dwiema dyskutowanymi
      formułami różnica jest dość dyskusyjna. Dodam, iż nie byłem entuzjastą
      formuły znajdującej się w projekcie, ale zostałem przekonany argumentem,
      że urzeczywistnianie nie prowadzi natychmiast to rezultatu. Stwierdzenie,
      że Rzeczpospolita Polska jest państwem sprawiedliwości społecznej, byłoby
      formułą bardziej roszczeniową. Skoro jednak przywróciliśmy dyskusję
      globalną, to proszę, aby wypowiedzieli się również inni eksperci."
    />

    <Utterance
      speaker="Poseł Krystyna Łybacka (SLD)"
      imgPath="/images/kk-speakers/LybackaKrystyna.png"
      text="Popieram argument posła R. Bugaja."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Myślę, że nie powracamy do dyskusji globalnej, była to tylko wymiana
      poglądów dotycząca wniosku posłów: J. Zdrady i T. Mazowieckiego.
      Przyjmujemy więc, że wniosek pierwszy został sformułowany. Wniosek drugi
      jest autorstwa posła J. Jaskierni. Korzystając z niepisanej zgody
      nieobecnego autora proponuję, aby ust. 1 brzmiał: „Rzeczpospolita Polska
      jest państwem suwerennym, jednolitym i niepodzielnym”. Pozostałe ustępy
      pozostają bez zmian."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Postuluję wykreślenie wyrazu „suwerennym ”. Wymienianie cechy
      państwa, jaką jest suwerenność, jest — jak się wydaje — nie na miejscu w
      związku z najnowszą historią."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przyjmuję uwagę posła J. Ciemniewskiego, co oznacza, że ust. 1
      będzie identyczny z art. 4 projektu. Czy są uwagi do wniosku nr 3? Nie ma.
      Czy są uwagi do wniosku nr 4?"
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Podtrzymuję swój wniosek w przedłożonym brzmieniu."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czy są uwagi do wniosku nr 5 przygotowanego przez posła L.
      Moczulskiego? Nie ma. Czy są uwagi do wniosku nr 6 przygotowanego przez
      przedstawicieli Prezydenta RP?"
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński"
      imgPath="/images/kk-speakers/RzeplinskiAndrzej.png"
      text="Jak widać z przedłożonych propozycji, kwestia państwa prawnego jest
      ujęta. W tej sytuacji, przyłączając się do argumentacji prof. W.
      Osiatyńskiego — po wymianie poglądów z prof. M. Pietrzakiem — proponujemy
      art. 4 w następującym brzmieniu: „Rzeczpospolita Polska jest państwem
      prawnym i socjalnym”. Ponadto w art. 1 ust. 1 zdanie pierwsze otrzymuje
      brzmienie: „Państwo Polskie jest jednolite i niepodzielne”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czy do wniosku nr 7, poza zamianą wyrazu „prawa” na „prawnym , są
      dalsze uwagi? Nie ma. Analogiczna zmiana następuje we wniosku nr 8
      senatora J. Orzechowskiego. Czy są dalsze uwagi do wniosku nr 8?"
    />

    <Utterance
      speaker="Senator Jan Orzechowski (PSL)"
      imgPath="/images/kk-speakers/OrzechowskiJan.png"
      text="Proponuję, abyśmy w konstytucji nie odchodzili od idei
      sprawiedliwości społecznej. Jest to idea utrwalona w Świadomości
      społecznej Polaków. Uważam więc, że zachowanie formuły o urzeczywistnianiu
      zasad sprawiedliwości społecznej jest uzasadnione."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czy są uwagi do wniosku nr 9, senatora J. Madeja?"
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Mam ochotę zadać pytanie senatorowi J. Orzechowskiemu, która zasada
      sprawiedliwości obowiązuje: czy zasada „każdemu według pracy , czy
      „każdemu według potrzeb”?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czy są uwagi do wniosku nr 10 posła J. Szymańskiego? Nie ma. Jeżeli
      chodzi o wniosek nr 11, to proszę poprawić, że jego autorami są
      senatorowie: P. Jankiewicz, H. Rot i J. Orzechowski. Czy są inne uwagi do
      wniosku nr 11? Nie ma. Czy są uwagi do wniosku nr 12 posła J.
      Ciemniewskiego, który proponuje skreślenie art. 3?"
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Przyłączam się do wniosku posła J. Ciemniewskiego."
    />

    <Utterance
      speaker="Poseł Tadeusz Iwiński (SLD)"
      imgPath="/images/kk-speakers/IwinskiTadeusz.png"
      text="W art. 4 mojego wniosku proponuję modyfikację części końcowej.
      Powinna ona brzmieć: „oraz zapewnia ochronę Środowiska kierując się zasadą
      zrównoważonego rozwoju”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wnioski zostały uzupełnione oraz uporządkowane. Możemy więc przejść
      do głosowania."
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="Przepraszam, że nieco przedłużam procedurę, ale mam pewną uwagę.
      Jest bowiem tak, że początkowe artykuły konstytucji wymieniają z reguły
      najważniejsze kwestie. Dobrze byłoby więc — dla swego rodzaju elegancji
      legislacyjnej, aby artykuły początkowe były jednoustępowe, a nie
      rozbudowane w formie kilku ustępów."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Zgadzam się z uwagą posła J. Zdrady co do zasady jednoustępowości
      początkowych artykułów konstytucji. Myślę jednak, że jest to kwestia na
      finał prac redakcyjnych. Najpierw w głosowaniu musimy rozstrzygnąć wybór
      wariantu."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Zwracam uwagę, że przedłożone warianty zakresowo nie są równoważne.
      Wniosek posła J. Szymańskiego nie dotyka kwestii Posiedzenia Komisji
      Konstytucyjnej ZN socjalnej i sprawiedliwości społecznej. Nie wydaje się
      jednak możliwe, aby poseł J. Szymański nie chciał kwestii tej gdzieś ująć.
      Popierając wniosek posła J. Szymańskiego nie mam pełnej gwarancji, że
      kwestie socjalne zostaną później przyjęte. Tak więc musimy głosować nad
      wnioskami, które są równoważne co do zawartości, choć oczywiście są różne
      co do treści merytorycznej. Ponadto wydaje mi się, że jest chyba
      obowiązkiem Komisji rozstrzygnięcie wariantów, które przygotowała
      podkomisja redakcyjna, zagadnień ogólnych i przepisów wprowadzających
      konstytucję. Powinno to chyba nastąpić w pierwszej kolejności."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Zamierzam poddać pod głosowanie te propozycje, które są równoważne,
      gdyż dotyczą art. 1, który jest ujmowany różnie z tego powodu, że
      poszczególni wnioskodawcy różnie widzą treść i układ początkowych
      artykułów. Chcę przypomnieć, że jeżeli chodzi o projekt, to podjęliśmy
      decyzję o skreśleniu art. 1. Utrzymanie dalszych artykułów oznacza, że
      konstytucja powinna rozpoczynać się od obecnego art. 2 stwierdzającego, że
      „Rzeczpospolita Polska jest wspólnym dobrem wszystkich obywateli.
      Identyczne wnioski dotyczące pierwszego artykułu zgłosili posłowie: J.
      Zdrada 1 [. Mazowiecki. Bardziej obszerną wersję art. 1 przedłożył poseł
      J. Jaskiernia. Obejmuje ona treść art. 1 i art. 2 proponowanych przez
      posłów: J. Zdradę i T. Mazowieckiego. Brzmienie odpowiadające treści art.
      1 zawierają również: wniosek nr 3 posłów: T. Iwińskiego i J. Szymańskiego,
      wniosek nr 4 senator A. Grześkowiak, art. 1 ust. I wniosku nr 5 posła L.
      Moczulskiego, art. 1 wniosku nr 6 złożonego przez przedstawicieli
      Prezydenta RP, wniosek nr 7 senatora S. Pastuszki oraz wniosek nr 8
      senatora J. Orzechowskiego."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Na tle złożonych wniosków pierwszy dylemat, jaki się rysuje, to
      konieczność rozstrzygnięcia kolejności, a więc czy art. 1 ma mówić o tym,
      że Rzeczpospolita Polska jest wspólnym dobrem wszystkich obywateli, czy
      też że jest państwem niepodzielnym, czy też, że jest demokratycznym
      państwem prawnym kierującym się zasadami sprawiedliwości społecznej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Musimy zdecydować, czy art. 1 będzie zawierał formułę o dobru
      wspólnym, czy też formułę o demokratycznym państwie prawnym lub jeszcze
      inną formułę, na przykład taką, jaką zaproponował senator S. Pastuszka."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Widzę tę trudność głosowania, o której mówił poseł R. Bugaj.
      Nawiązując do wypowiedzi senatora J. Madeja, chcę zwrócić uwagę, że po
      przyjęciu określonej formuły art. | konieczne będzie rozważenie formuły
      art. 2, „w zależności od przyjętej treści art. 1. Jest to uwaga pierwsza.
      Uwaga druga. Spór o to, czy w konstytucji ma się znaleźć sformułowanie o
      republikańskiej formie państwa, był sporem dość formalnym i wynikał
      głównie z różnego pojmowania pojęcia: „Rzeczpospolita ”. Ponadto wydaje mi
      się, że bez dyskusji nie powinniśmy przesądzać sposobu sformułowania
      kwestii sprawiedliwości społecznej czy państwa socjalnego. Problem nie
      polega na tym, aby w ogóle nie podjąć kwestii działalności socjalnej
      państwa, lecz na tym, że przyjmując określoną formułę możemy przesądzić
      zakres zobowiązań państwa i to, kto będzie rozstrzygał tę kwestię. |"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Nie wykluczam dyskusji, lecz jednocześnie pewne kwestie powinny być
      już rozstrzygane, zwłaszcza że wyraźnie rysują się trzy opcje art. 1.
      Pierwsza z nich opowiada się za tym, aby art. 1 mówił o wspólnym dobru.
      Opcja druga to państwo prawne urzeczywistniające zasady sprawiedliwości
      społecznej. Opcja trzecia akcentuje jednolitość i niepodzielność. Uważam
      więc, że w pierwszym głosowaniu powinniśmy ustalić, która opcja ma
      największe poparcie. Następnie przystąpiibyśmy do sformułowania
      konkretnego brzmienia przepisu art. 1. Proponuję głosowanie, w którym
      każdy z członków Komisji będzie mógł opowiedzieć się za jedną z trzech
      możliwości. Poddaję pod głosowanie wniosek, aby art. 1 konstytucji
      stanowił o tym, że Rzeczpospolita Polska jest wspólnym dobrem wszystkich
      obywateli. Stwierdzam, że wniosek w głosowaniu uzyskał poparcie 8 członków
      Komisji. Poddaję pod głosowanie wniosek, aby art. 1 konstytucji stanowił o
      tym, że Rzeczpospolita Polska jest demokratycznym państwem prawnym
      urzeczywistniającym zasadę sprawiedliwości społecznej. Stwierdzam, że
      wniosek w głosowaniu uzyskał poparcie 20 członków Komisji. Poddaję pod
      głosowanie wniosek, aby art. 1 konstytucji stanowił o tym, że
      Rzeczpospolita Polska jest państwem jednolitym i niepodzielnym.
      Stwierdzam, że wniosek w głosowaniu nie uzyskał poparcia żadnego członka
      Komisji. Tak więc Komisja zdecydowała, że art. 1 Konstytucji będzie miał
      brzmienie stwierdzające, że Rzeczpospolita Polska jest demokratycznym
      państwem prawnym urzeczywistniającym zasady sprawiedliwości społecznej.
      Przechodzimy do art. 2."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Proszę wyjaśnić mi, na czym polega głosowanie, które właśnie się
      odbyło. Sądziłam bowiem, że będziemy głosować po kolei nad wszystkimi
      wariantami zawartymi w przedłożonym nam zestawieniu propozycji. Przyjęty
      sposób głosowania spowodował, że moja poprawka jest ujęta w zbiorczym
      zestawieniu poprawek, lecz nie była poddana pod głosowanie i nie bardzo
      wiem, kiedy zostanie poddana głosowaniu, skoro została przesądzona treść
      art. 1."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jest to pewna trudność, ale wniosek senator A. Grześkowiak brał
      udział w głosowaniu w ramach opcji głosowanej jako pierwsza i
      przewidująca, że art. 1 będzie stanowił o tym, że Rzeczpospolita Polska
      jest wspólnym dobrem wszystkich obywateli. Formuła ta znajduje się bowiem
      w art. 1 ust. I wniosku senator A. Grześkowiak. Przypominam, że opcja
      uzyskała poparcie 8 członków Komisji. Uważam również, że możliwe jest
      przeprowadzenie pełnego głosowania nad każdym zgłoszonym wnioskiem."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Uważam, że w głosowaniu przesądziliśmy tylko generalną formułę art.
      1. Teraz powinniśmy rozstrzygnąć, czy znajdzie się w nim formuła mówiąca o
      urzeczywistnianiu zasad sprawiedliwości społecznej, czy formuła mówiąca o
      kierowaniu się zasadami sprawiedliwości społecznej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Według mnie rozstrzygnięcie Komisji jest jasne. Zdecydowana
      większość Komisji uważa, że w art. 1 powinna znaleźć się norma o
      demokratycznym państwie prawnym oraz o zasadzie sprawiedliwości
      społecznej. Rozstrzygnięcia wymaga natomiast rzeczywiście formuła
      dotycząca sprawiedliwości społecznej, a więc kwestia, którą podniósł
      senator J. Madej."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Z art. 10 regulaminu Komisji wnioskuję, że wszystkie zgłoszone
      poprawki powinny być poddane głosowaniu. Nie można głosować swego rodzaju
      Średniej z kilku poprawek. Przypomnę brzmienie art. 10 regulaminu Komisji:
      „Poprawki do projektu Konstytucji zgłasza się na piśmie w odpowiedniej
      formie przewodniczącemu Komisji Konstytucyjnej. Głosowanie nad poprawkami
      zgłoszonymi w toku posiedzenia odbywa się na następnym posiedzeniu. W
      wyjątkowych wypadkach przewodniczący Komisji może dopuścić głosowanie
      poprawek na tym samym posiedzeniu”. Uważam więc, że trzeba głosować nad
      każdą poprawką."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Wydaje się, że dochodzimy do absurdu proceduralnego. Zwracam uwagę,
      że część poprawek była zgłoszona na poprzednim posiedzeniu. Może więc być
      poddana głosowaniu. Jeżeli jednak zgłoszone poprawki zostaną poddane
      głosowaniu w kolejności zgłoszenia, to głosowanie powinno trwać do chwili,
      kiedy jeden z wniosków uzyska większość. Oznacza to rozstrzygnięcie losów
      pozostałych wniosków. Zasada demokratycznego państwa prawnego uzyskała
      aprobatę większości członków Komisji. Ma więc rację senator J..Madej, że
      rozstrzygnięcia wymaga jedynie formuła odnosząca się do sprawiedliwości
      społecznej. Uważam więc, że reguła głosowania, jaką zastosował
      przewodniczący Komisji, jest regułą poprawną. Proponuję więc, aby
      zakończyć procedurę zmierzającą do ustalenia ostatecznego brzmienia art.
      1. W grę wchodzi brzmienie proponowane przez posła T. Iwińskiego, senatora
      H. Rota i moje oraz brzmienie proponowane przez posłów J. Zdradę oraz T.
      Mazowieckiego."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Zgadzam się z opinią posła J. Szymańskiego."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przechodzimy zatem do uszczegółowienia propozycji, która uzyskała
      poparcie 20 członków Komisji. Do wyboru mamy dwie formuły, o których mówił
      poseł J. Szymański."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński"
      imgPath="/images/kk-speakers/RzeplinskiAndrzej.png"
      text="Przypominam, że zgłosiliśmy propozycję: „Rzeczpospolita Polska jest
      demokratycznym państwem prawnym i socjalnym."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przyjmujemy więc, że są trzy propozycje."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Chcę się opowiedzieć za przyjęciem formuły mówiącej o kierowaniu się
      zasadami sprawiedliwości społecznej."
    />

    <Utterance
      speaker="Poseł Jan Rokita (UW)"
      imgPath="/images/kk-speakers/RokitaJan.png"
      text="Uważam, że sytuacja, w której mamy głosować nad wyborem między
      wyrazem: „urzeczywistniać” 1 „kierować w odniesieniu do sprawiedliwości
      społecznej, stawia nas w trochę dziwacznej sytuacji. Możemy głosować
      według wyboru językowego, a więc, który z tych dwóch wyrazów bardziej się
      podoba. Druga możliwość to kryterium głosowania, według którego ci, którzy
      chcą, aby państwo polskie było trochę bardziej społeczne, będą głosować za
      formułą mówiącą o urzeczywistnianiu. Ci, którzy chcą, aby państwo było
      trochę społeczne, będą głosować za formułą mówiącą o kierowaniu. Uważam,
      że oba kryteria są nonsensowne. Ja przed tym głosowaniem chciałbym mieć
      odpowiedź na zasadnicze pytanie, które zostało postawione przez prof. W.
      Osiatyńskiego jako swego rodzaju teza, Jedno z tych sformułowań, a może
      oba — i to nie jest dla mnie jasne — przesądzają o prawie Trybunału
      Konstytucyjnego do rozstrzygania o sposobie corocznego podziału środków
      przez państwo w ustawie budżetowej. Chcę wiedzieć w sposób kategoryczny,
      zdecydowany i kompetentny przed głosowaniem, czy którykolwiek z tych
      wyrazów wprowadzony do konstytucji rzeczywiście to oznacza, a jeżeli tak,
      to który wyraz to oznacza. Uważam, że bez rozstrzygnięcia tej kwestii
      stosownymi ekspertyzami, głosowania nie należy przeprowadzać, a w każdym
      razie ja nie czuję się kompetentny w tym głosowaniu bez tego typu
      rozstrzygnięcia."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Leszek Wiśniewski"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Uważam, że pojęcie „państwo socjalne” nie zastępuje zwrotu: „państwo
      urzeczywistniające zasady sprawiedliwości społecznej”. W kontekście tego,
      co powiedział prof. W. Osiatyński, w przypadku państwa socjalnego chodzi o
      rozdział dóbr i wartości socjalne w ścisłym znaczeniu tego słowa.
      Urzeczywistnianie zasad sprawiedliwości społecznej dotyczy również innych
      kwestii, takich jak m.in. równomiermie obciążenie obywateli obowiązkami,
      traktowanie osób niepełnosprawnych, kobiet w pewnych sytuacjach, praw
      wyborczych. Tak więc zakres pojęcia urzeczywistniania zasad
      sprawiedliwości społecznej jest znacznie szerszy niż tylko rozdział dóbr i
      wartości socjalnych."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Proszę o wyraźne stanowisko w następującej kwestii: czy poprawki
      zgłoszone przez członków Komisji, zawarte w zestawieniu poprawek, które
      otrzymaliśmy, będą czy nie będą poddane pod głosowanie. Nie mogę
      zrozumieć, jaki jest sens zgłaszania poprawek, które nie są poddawane pod
      głosowanie. Widzę, że ustalanie brzmienia poszczególnych artykułów
      konstytucji ma miejsce teraz na sali. Wiem natomiast, że mamy prawo
      składania wniosków mniejszości, lecz jest to inna kwestia."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Chcę poinformować panią senator, że poprawki są głosowane. Jej
      poprawka dotycząca art. 1 została poddana głosowaniu w ramach głosowania
      kierunkowego nad trzema opcjami generalnymi brzmienia art. 1."
    />

    <Utterance
      speaker="Senator Alicja Grześkowiak (NSZZ „S”)"
      imgPath="/images/kk-speakers/GrzeskowiakAlicja.png"
      text="Już dość długo głosuję nad różnymi poprawkami, lecz nie rozumiem, co
      to znaczy, że głosowanie nad moją poprawką było kierunkowe. Proszę o
      precyzyjną odpowiedź, czy zgłoszone poprawki były poddane pod głosowanie,
      czy też nie."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Dokonaliśmy wyboru innej procedury głosowania, nie widzę powodów,
      aby głosować nad kolejnymi poprawkami, które otrzymają pojedyncze głosy, w
      sytuacji gdy 20 głosów padło na poprawkę, która jest wyraźnie różna od
      poprawki senator A. Grześkowiak i od innych poprawek. | Głosowanie nad
      poszczególnymi poprawkami jest oczywiście możliwe, lecz nic z tego nie
      wyniknie. Podobne opinie przedstawili poseł J. Szymański i senator J.
      Madej."
    />

    <Utterance
      speaker="Poseł Jacek Taylor (UW)"
      imgPath="/images/kk-speakers/TaylorJacek.png"
      text="Chcę odnieść się do kwestii różnicy między formułą mówiącą o
      urzeczywistnianiu lub kierowaniu w kontekście sprawiedliwości społecznej.
      Myślę, że kwestię należałoby skonfrontować na tle orzecznictwa Trybunału
      Konstytucyjnego. W przypadku formuły o urzeczywistnianiu zasad
      sprawiedliwości społecznej należy rozumieć, że chodzi o wprowadzanie
      rzeczywistości, a więc pewnego skutku. Sformułowanie takie byłoby
      wystarczające do przyjęcia, że obywatelom — zwłaszcza jeżeli będzie im
      służyła skarga konstytucyjna — będzie przysługiwało roszczenie, które
      będzie mogło być dochodzone przy pewnej konkretyzacji żądania. Natomiast
      sformułowanie o kierowaniu się zasadami sprawiedliwości społecznej nie
      daje podstawy do'samodzielnego roszczenia. Jest to poniekąd tylko
      dyrektywa ogólna, która chyba nie jest wystarczająca, aby uznać ją za
      podstawę roszczenia."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Chcę zwrócić uwagę, że od 1989 r. obowiązuje przepis konstytucyjny o
      urzeczywistnianiu zasad sprawiedliwości społecznej. Od tego czasu
      ukształtowało się znacznie orzecznictwo Trybunału Konstytucyjnego
      dokonujące interpretacji tej zasady konstytucyjnej. Utrzymanie tej formuły
      może być uzasadnione tak samo, jak poseł J. Ciemniewski uzasadniał
      utrzymanie zasady państwa prawnego. Byłoby bowiem źle burzyć dotychczasowy
      stan orzecznictwa. Uważam, że gdybyśmy przyjęli zasadę państwa jako
      wspólnego dobra obywateli, to każda petycja do Trybunału Konstytucyjnego
      mogłaby czerpać swoje uzasadnienie z zasady wspólnego dobra. Warto dodać,
      że treść zasady sprawiedliwości społecznej będzie określał katalog praw
      socjalnych zawartych w konstytucji. Zasada ta miała więc oparcie na
      gruncie szczególnych przepisów dotyczących praw socjalnych i kulturalnych.
      Opowiadam się za utrzymaniem formuły mówiącej o urzeczywistnianiu zasad
      sprawiedliwości społecznej dlatego, że w pierwszym okresie — okresie zmian
      — właściwie większość spraw rozpatrywanych przez Trybunał Konstytucyjny
      dotyczyła zasady państwa prawnego urzeczywistniającego zasady
      sprawiedliwości społecznej. Były to sprawy dotyczące z reguły ubezpieczeń
      społecznych i innych kwestii dotyczących obywateli. Na tym gruncie
      ukształtowała się dosyć jasna linia orzecznictwa. Ponadto chcę dodać, że
      nie odnajduję wyraźnej dystynkcji między formułą mówiącą o
      urzeczywistnianiu zasady sprawiedliwości społecznej i formuły mówiącej o
      kierowaniu się zasadami sprawiedliwości społecznej. Myślę, że jest to
      dystynkcja tylko werbalna."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UW)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Ubolewam, że ta dyskusja toczy się, zwłaszcza że wywołał ją poseł J.
      Rokita, który nie uczestniczył w żadnym z 12 dotychczasowych posiedzeń
      podkomisji podstaw ustroju politycznego i społeczno-gospodarczego. Na
      części posiedzeń kwestia ta była dyskutowana. Ponadto proszę pamiętać, że
      mówimy o formule, która jest formułą nie rewolucji konstytucyjnej, lecz
      kontynuacji konstytucyjnej. W związku z tym zakładanie, że spowoduje ona
      coroczną ocenę budżetu państwa przez Trybunał Konstytucyjny, wydaje się
      niezrozumiałe. Nie można bowiem zapominać, że w kwestii tej jest już pewna
      praktyka, o czym mówił poseł J. Szymański. Wydaje się, że pominięcie tego
      sformułowania byłoby znaczące, gdyż pojawiłby się nowy stan prawny,
      ponieważ poprzedni został przez ustawodawcę zakwestionowany. Ja nie chcę
      takiej zmiany. Jeżeli chodzi o interpretację, to warto pamiętać, że
      problemy interpretacyjne występują w bardzo wielu kwestiach. Jeżeli
      przyjmiemy sformułowanie, że państwo zapewnia ochronę środowiska
      przyrodniczego, to również pojawi się problem interpretacji, co to
      oznacza, że „zapewnia ”. Wydaje się również, że pojęcie państwa socjalnego
      jest być może bardziej ambitne, lecz wielką przestrzeń interpretacji
      dopiero musiałoby sobie stworzyć. Jest bowiem tak, że pojęcie
      „urzeczywistwyraża pewność, iż urzeczywistnianie następuje w miarę pewnych
      obiektywnych możliwości, a więc nie jest to natychmiast stan wymagalny,
      lecz pewien ruch i dążenie. Opowiadam się więc za utrzymaniem
      dotychczasowej formuły konstytucyjnej."
    />

    <Utterance
      speaker="Poseł Krystyna Łybacka (SLD)"
      imgPath="/images/kk-speakers/LybackaKrystyna.png"
      text="Podzielam uwagę posła R. Bugaja, że powielamy w sposób spłycony
      dyskusję, która przez kilka tygodni toczyła się podczas posiedzeń
      podkomisji podstaw ustroju politycznego i społeczno-gospodarczego. Był
      wtedy czas na merytoryczną i pogłębioną wymianę zdań. Ponadto chcę
      zdecydowanie opowiedzieć się za formułą mówiącą o urzeczywistnianiu zasad
      sprawiedliwości społecznej. Dyskutantów, którzy obawiają się skutków,
      odsyłam do orzecznictwa Trybunału Konstytucyjnego, w którym znajduje się
      dorobek precyzujący pojęcie urzeczywistniania sprawiedliwości społecznej.
      Uważam również, że nie można nam jako prawodawcy konstytucyjnemu odbierać
      prawa wytyczania kierunków ochrony praw obywatelskich w tzw. normach
      programowych, a z taką normą mamy do czynienia w tym przypadku. Warto
      również pamiętać, że normy tego rodzaju przybiorą konkretny roszczeniowy
      kształt dopiero w prawodawstwie zwykłym. Nie można więc utożsamiać
      zobowiązań wynikających z prawa publicznego ze zobowiązaniami wynikającymi
      z prawa cywilnego. W konkluzji kategorycznie opowiadam się za formułą o
      państwie urzeczywistniającym zasady sprawiedliwości społecznej."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Ze zdziwieniem słyszę ubolewanie z powodu wszczęcia tej dyskusji.
      Jest to bowiem dyskusja o charakterze fundamentalnym i czułbym się
      ograniczony w prawach członka Komisji Konstytucyjnej, który nie był
      członkiem podkomisji podstaw ustroju politycznego i
      społeczno-gospodarczego, gdyby dzisiaj odebrano mi prawo wypowiedzenia się
      o tak fundamentalnej sprawie ustrojowej. Dziwię się tym członkom Komisji,
      którzy przez fakt przywileju udziału w pracach podkomisji podstaw ustroju
      politycznego i społeczno-gospodarczego roszczą sobie pretensje do
      rozstrzygania tych spraw bez prawa zabrania głosu przez pozostałych
      członków Komisji. Kwestia druga to wybór jednej z dwóch formuł, nad
      którymi dyskutujemy. W związku z tym chcę powiedzieć, że kwestią
      zasadniczą jest system dochodzenia do praw konstytucyjnych. Nie tracimy
      nadziei, że przyjęta konstytucja będzie tworzyła system gwarancji
      konstytucyjnych w postaci skargi konstytucyjnej obywatela. Nie jest więc
      uprawnione w moim przekonaniu powoływanie się posła J. Szymańskiego na
      analogię ze sporem: państwo prawa czy państwo prawne. Wybór jednej z tych
      formuł nie ma żadnego znaczenia dla sposobu dochodzenia roszczeń
      obywateli, lecz nie roszczeń o charakterze cywilnoprawnym. Przy tej okazji
      muszę powiedzieć, że ze zdziwieniem przeczytałem wypowiedź rzecznika praw
      obywatelskich, z której wynikało, iż rzecznik — a za nim poseł K. Łybacka
      — nie odróżniają istoty roszczeń płynących z istoty samej konstytucji I
      próbują wprowadzić element roszczeń cywilnoprawnych. Jest to zupełnie inna
      kwestia. Sformułowanie mówiące o państwie urzeczywistniającym zasady
      sprawiedliwości społecznej jest sformułowaniem znanym prawu
      konstytucyjnemu i polegającym na tzw. rozwojowym charakterze praw. W moim
      przekonaniu jest to istota niebezpieczeństwa, jakie rodzi to
      sformułowanie. Była taka teoria, aby z takiego sformułowania wyciągać, że
      każda następna ustawa musi poszerzać zakres praw w kierunku, który zmierza
      do jakiegoś ostatecznego celu, jakim jest sprawiedliwość społeczna. Chcę
      dodać, iż nie wiem zbyt dobrze, co to jest sprawiedliwość społeczna i
      gdzie jest kres tego procesu urzeczywistniania owej zasady sprawiedliwości
      społecznej. Natomiast w przypadku przyięcia formuły o kierowaniu się
      zasadą sprawiedliwości społecznej, to jeszcze jestem w stanie zrozumieć,
      że chodzi o uwzględnienie pewnych rodzajów wartości zmierzających do
      wyrównywania różnic społecznych. Jeżeli natomiast mam zmierzać w kierunku
      jakiegoś idealnego stanu sprawiedliwości społecznej, to jest to dla mnie
      bardzo niebezpieczna droga. Co więcej, jeżeli ma to oznaczać, że jako
      ustawodawcy nie wolno mi się cofnąć na tej drodze, lecz mam zmierzać w
      kierunku bliżej nieokreślonego ideału, to zawahałbym się przed
      podniesieniem ręki w głosowaniu za takim sformułowaniem."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Ad vocem chcę powiedzieć o dwóch kwestiach dotyczących trybu
      dyskusji w związku z uwagą posła J. Ciemniewskiego. Posiedzenia Komisji
      Konstytucyjnej ZN orze Przypominam, że na poprzednim posiedzeniu
      dyskutowaliśmy główne dylematy. Wówczas jednak nikt nie podniósł tej
      kwestii jako główny dylemat. Również ku mojemu zdziwieniu z podkomisji nie
      wyszedł zapis wariantowy, mimo obecności przedstawicieli wszystkich
      tendencji politycznych. Wydawało się więc, że sprawa nie jest
      kontrowersyjna. Nie mam nic przeciwko temu, abyśmy powrócili do tej
      kwestii, lecz działałem w zaufaniu do pewnych wcześniejszych faktów.
      Proszę również zwrócić uwagę, że kiedy kwestię tę podniósł globalnie prof.
      W. Osiatyński, to zaproponowaliśmy powrót do dyskusji. Wówczas pan
      przewodniczący powiedział, że nie ma potrzeby i wówczas nikt nie
      protestował. Jeżeli trzeba powr cić do dyskusji, to uczyńmy to, ale proszę
      nie stawiać zarzutu, że chcemy zamknąć dyskusję."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Dyskusja faktycznie trwa i jest rzeczowa. Uważam jednak, że mając
      już wiedzę na dyskutowany temat możemy przystąpić do decydowania."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Chcę zgłosić uwagę polemiczną, gdyż nie zostałem właściwie
      zrozumiany przez posła J. Ciemniewskiego. Użyłem bowiem tego typu
      uzasadnienia, iż tylko z powodu oszczędności czasu nie przytoczyłem
      argumentacji na rzecz pozostawienia formuły o państwie urzeczywistniającym
      zasady Sprawiedliwości społecznej, w oparciu o ukształtowane orzecznictwo,
      jakie poseł J. Ciemniewski przedstawił dla uzasadnienia zasady
      demokratycznego państwa prawnego. Uważam ponadto, że zarówno jedna jak i
      druga dyskutowana formuła mają charakter kierunkowy. Moim zdaniem dopiero
      na tle orzecznictwa i powstałych sporów wynikających z bezpośredniego
      stosowania konstytucji może się ukształtować właściwy sens tej formuły.
      Natomiast my dzisiaj nie odpowiemy na wiele wyzwań i pytań konstytucyjnych
      bez rozstrzygnięcia katalogu praw socjalnych i ich gwarancji formalnych na
      przykład w formie skargi konstytucyjnej. Należy jednak dodać, że w dużej
      mierze będzie to zależało od charakteru i treści samej normy, a więc, czy
      będzie miała charakter samowykonawczy."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Poseł K. Łybackiej, która była zaskoczona powtarzaniem dyskusji,
      chcę zwrócić uwagę, że dyskusję tę powtórzymy po raz trzeci na posiedzeniu
      Zgromadzenia Narodowego."
    />

    <Utterance
      speaker="Poseł Wit Majewski (SLD)"
      imgPath="/images/kk-speakers/MajewskiWit.png"
      text="Chcę wyrazić zdziwienie, że tak doskonały prawnik jak poseł J.
      Ciemniewski nie wie, że dyskutowany przepis jest stosowany od kilku lat.
      Są orzeczenia Trybunału Konstytucyjnego i wiadomo, że w formule o
      sprawiedliwości społecznej chodzi o to, aby nie tworzyć nie uzasadnionych
      przywilejów. Jest to interpretacja, którą Trybunał Konstytucyjny stosował
      wielokrotnie. Formuła o państwie urzeczywistniającym zasady
      sprawiedliwości społecznej znajduje się w art. 1 utrzymanych w mocy
      przepisów konstytucji z 1952 r. Została przyjęta w 1989 r. i stanowi
      podstawowe dokonanie polskich przemian. Tymczasem teraz kwestionuje się
      brzmienie tej formuły i jej obecność jako art. 1 nowej Konstytucji RP.
      Doprawdy trudno ustalić, kto czego broni i o co komu chodzi, chyba że
      mówienie jest po to, aby stosować abstrakcję parlamentamą w tym celu, aby
      nie doprowadzić do żadnych konkluzji."
    />

    <Utterance
      speaker="Poseł Jan Rokita (UW)"
      imgPath="/images/kk-speakers/RokitaJan.png"
      text="Odnosząc się do krytycznych pod moim adresem wypowiedzi posła R.
      Bugaja 1 poseł K, Łybackiej, chcę powiedzieć, iż uważam, że zadaniem
      członka Komisji Konstytucyjnej nie jest studiowanie dorobku orzecznictwa
      Trybunału Konstytucyjnego, do czego namawiała mnie poseł K. Łybacka. Nie
      uważam również, aby fakt przeprowadzenia głębokiej dyskusji na posiedzeniu
      podkomisji — 0 czym mówił poseł R. Bugaj — uniemożliwiał rozmawianie o tej
      sprawie. Nie zachęcam do ponawiania po raz drugi głębokiej dyskusji, lecz
      jedynie poprosiłem pana przewodniczącego o to, aby w sposób rozstrzygający
      została udzielona odpowiedź na pytanie, które mnie nurtuje przed
      głosowaniem. Wydaje mi się, że pytanie o to, czy Trybunał Konstytucyjny
      przy sformułowaniu pierwszym i przy sformułowaniu drugim będzie mógł
      zmieniać podział Śśrodków budżetowych na mocy orzeczeń w trybie skargi
      konstytucyjnej obywateli, czy też nie, jest pytaniem dość kluczowym, na
      które odpowiedź członkowie Komisji Konstytucyjnej powinni otrzymać przed
      głosowaniem. Pytanie to stawiam panu przewodniczącemu i ekspertom Komisji,
      jak również stawiam je posłowi R. Bugajowi jako przewodniczącemu
      podkomisji podstaw ustroju politycznego i społeczno-gospodarczego, gdzie
      kwestia ta była dogłębnie dyskutowana. Jeżeli odpowiedź podkomisji zarówno
      w jednym jak i w drugim przypadku nie jest rozstrzygająca, to będę
      zmuszony uznać, że postąpiłem rozsądnie rezygnując z prac w podkomisji w
      ich początkowym etapie. Zmienię to zdanie, jeżeli z prac podkomisji będzie
      wynikać jednoznaczna odpowiedź i zostanie przedstawiona przez posła R.
      Bugaja."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Chcę najpierw usprawiedliwić zasadność sporu, który się toczy. Wiem,
      że z punktu widzenia procedury, która poprzedzała dzisiejszą debatę, może
      to być trochę irytujące. Jest jednak tak, że prowadzony jest spór o
      kwestię podstawową. Jest to bowiem spór o charakter państwa, a więc czy
      państwo będzie państwem liberalnym choć prawnym, czy też będzie to państwo
      w jakiejś mierze socjalizujące, choć również będzie to państwo prawne.
      Jeżeli w tej kwestii zostanie osiągnięte rozstrzygnięcie, będzie to
      zasadniczy krok w pracach nad konstytucją. Nie jest kwestią przypadku, że
      od początku była mowa o tym, że zagadnieniem — dylematem prac nad
      konstytucją — jest pytanie o to, w jakim zakresie państwo prawne ma być
      również państwem socjalnym. Spór ten odżył teraz. Dyskusję usprawiedliwia
      nie rozwikłany spór dotyczący relacji między prawem a sprawiedliwością.
      Jeżeli ktoś interesuje się tym sporem, to dodam, że spór ten odżył pod
      wpływem artykułu w „Państwie i Prawie” prof. L. Morawskiego. Jeżeli chodzi
      o materię proponowanych formuł, to odnoszę wrażenie, że wielu członków
      Komisji niepokoi uwikłanie się w praktyczne konsekwencje formuły, w myśl
      której państwo prawne ma urzeczywistniać zasady sprawiedliwości
      społecznej. W związku z tym chcę powiedzieć, że konstytucja nie daje
      zdecydowanej odpowiedzi, co to oznacza. Z, dziewięcioletniej działalności
      Trybunału Konstytucyjnego coś jednak wynika. Chciałbym więc rozwiać obawy
      tych, którzy uważają, że chodzi o sprawiedliwość w tym rozumieniu, które
      kojarzy się z realnym socjalizmem. Tymczasem jest tak, że sprawiedliwość
      społeczna wyraża się w różnych formułach. Nie jest więc przypadkowe to, że
      obecna formuła mówi o zasadach, a nie o zasadzie sprawiedliwości. Można
      bowiem mówić o sprawiedliwości rozdzielczej, o której słusznie mówi się na
      ogół krytycznie. Jest również sprawiedliwość komutatywna, czyli
      wyrównawcza, a więc ta, która zyskuje na znaczeniu w nowych czasach, czyli
      w warunkach gospodarki wolnorynkowej i pełnej ochrony własności. Jest
      również sprawiedliwość według nowszej doktryny, czyli tzw. sprawiedliwość
      proceduralna. Ma ona również ślady, choć najmniejsze, w orzecznictwie
      polskiego Trybunału Konstytucyjnego. Należy zwrócić uwagę na ewolucję,
      która polega na tym, że powoli maleje znaczenie sprawiedliwości
      rozdzielczej — dystrybutywnej — gdyż zmieniają się priorytetowe wartości.
      Wzrasta natomiast znaczenie sprawiedliwości wyrównawczej, która wyraża się
      w formie: każdemu według zobowiązań, które przyjął na siebie dobrowolnie w
      formie umowy. Jeżeli chodzi o sprawiedliwość proceduralną, to mówi ona, że
      ważną kwestią jest to, aby obywatelowi dać wszelkie środki dochodzenia
      swojego prawa, lecz nie chodzi tylko o prawo w znaczeniu materialnym. Jest
      to pewne uproszczenie, lecz chodzi o to, by dać taką możliwą wykładnię —
      zmieniającą się i ewoluującą — aby dostosować sens tej formuły do nowych
      czasów. Jeżeli chodzi o pytanie będące kwintesencją troski posła J.
      Rokity, to chodzi o problem, czy ta formuła o sprawiedliwości społecznej
      może być podstawą indywidualnych roszczeń obywateli. Uważam, że nie może
      być, nawet jeżeli zostanie przyjęta instytucja skargi konstytucyjnej.
      Chodzi bowiem o formułę skierowaną do ustawodawcy. Obywatel będzie
      posługiwał się skargą konstytucyjną dla obrony swoich praw wyrażonych w
      innych, bardziej szczegółowych przepisach konstytucyjnych. Czy zasada
      sprawiedliwości społecznej może być podstawą zakwestionowania budżetu?
      Moim zdaniem nie może być. Doszliśmy bowiem wreszcie do takiego sensu
      budżetu, który jest wyrażony od 1992 r. w małej konstytucji. Trybunał
      Konstytucyjny wyciągnął z tego wriioski w jednym z ostatnich orzeczeń.
      Art. 20 małej konstytucji stanowi, że: „„Dochody i wydatki Państwa na rok
      kalendarzowy określa ustawa budżetowa”. W świetle orzeczenia Trybunału
      Konstytucyjnego niemal nie jest to prawo. Jest. to liczbowe zestawienie
      dochodów i wydatków, które ma formę ustawy. Materialnie nie jest to
      ustawa, gdyż nie zawiera przepisów materialnych ani proceduralnych. Należy
      dodać, że tak było przez bardzo wiele lat, że do ustawy budżetowej
      włączano inne materie. Dzieje się tak również obecnie, choć jest już
      stanowisko Trybunału Konstytucyjnego mające swoje oparcie w normie
      konstytucyjnej. Być może dojdziemy do takiego rozumienia budżetu, że nie
      będzie można go kwestionować przed Trybunałem Konstytucyjnym. Kwestia
      ostatnia, a więc wybór formuły mówiącej o urzeczywistnianiu zasad
      sprawiedliwości społecznej, czy formuły mówiącej o kierowaniu się zasadą
      sprawiedliwości społecznej. Kwestii tej nie mylitbym z rozwojowym
      charakterem praw. Poseł J. Ciemniewski doskonale pamięta, że teza o tym,
      iż prawa mogą się tylko rozwijać, wynikała nie z normy art. 1 utrzymanych
      w mocy przepisów konstytucyjnych, lecz z odrębnego przepisu
      konstytucyjnego obowiązującego również obecnie, lecz traktowanego przez
      Trybunał Konstytucyjny bardzo „delikatnie. Jest to art. 67 ust. 1 mówiący
      o rozwojowym charakterze praw. Kwestia doboru właściwego wyrazu: „kieruje”
      czy „urzeczywistnia” jest problemem. Chcę jednak dodać, że w Świetle
      orzecznictwa Trybunału Konstytucyjnego nie widać różnicy, którą tym dwom
      terminom chcieliby nadać uczestnicy debaty. Jest to bowiem dyrektywa
      skierowana pod adresem ustawodawcy i zobowiązuje go do uwzględnienia
      sprawiedliwości społecznej, tak czy inaczej rozumianej. W istocie rzeczy
      dopiero uchwalone prawo — a więc ustawa — decyduje o tym, jak
      sprawiedliwość została w nim wyrażona. Być może formuła „kieruje” jest
      lepsza, ale formuła „urzeczywistnia” w Świetle orzeczenia Trybunału
      Konstytucyjnego nie daje podstaw do obaw, które były wyrażane."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Kwestia jest niewątpliwie kluczowa. Dziękuję więc prof. K. Działosze
      za uwagi wyjaśniające."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński"
      imgPath="/images/kk-speakers/RzeplinskiAndrzej.png"
      text="Czas obecnej debaty jest dłuższy niż czas debaty w podkomisji
      podstaw ustroju politycznego i społeczno-gospodarczego. Debata w
      podkomisji nie była wyczerpująca i bogata. Została ona dość stanowczo
      przecięta głosowaniem — z założeniem, że resztę argumentów będzie można
      przedstawić na posiedzeniu Komisji Konstytucyjnej. Chcę również odnieść
      się do kwestii podjętej przez prof. W. Osiatyńskiego. Chodzi o uprawnienia
      Trybunału Konstytucyjnego. Ponieważ obecnie Sejm pełni rolę jakby izby
      odwoławczej od orzeczeń Trybunału Konstytucyjnego, nie do wszystkich
      dociera świadomość uprawnień Trybunału. Jednakże z chwilą, gdy Trybunał
      otrzyma prawo wydawania ostatecznych orzeczeń dotyczących zgodności z
      konstytucją, jego pozycja ustrojowa niepomiernie wzrośnie, zwłaszcza
      jeżeli obywatele uzyskają prawo składania indywidualnych skarg do
      Trybunału na naruszenie ich praw ujętych w konstytucji. Uważam, że formuła
      mówiąca o urzeczywistnianiu sprawiedliwości społecznej będzie stwarzać
      dużo problemów interpretacyjnych. Sądzę, że gdyby ta kompetencja miała być
      przypisana prezydentowi, to Komisja byłaby zapewne znacznie bardziej
      powściągliwa. Już wcześniej przytaczałem przykład Czech. Konstytucja
      Republiki Czeskiej nie określa państwa jako socjalnego, lecz poziom
      zabezpieczeń socjalnych, które są gwarantowane obywatelom przez państwo —
      za pomocą ustaw — jest bez porównania wyższy niż w Polsce. Inny przykład
      to Szwecja, której konstytucja nie wymienia praw socjalnych, a jest to
      państwo opiekuńcze. Tak więc kwestia dużej ostrożności będzie miała
      istotne znaczenie, gdyż możemy się znaleźć w sytuacji, w której Trybunał
      Konstytucyjny będzie sprawował władzę prawodawczą i władzę wykonawczą,
      gdyż będzie dokonywał redystrybucji dochodu narodowego, co powinno być w
      gestii wyłącznie władzy ustawodawczej i wykonawczej."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Decyzje podejmuje Komisja, a ja tylko podzieliłem się pewnymi
      wątpliwościami. Dyskusja, która miała miejsce, potwierdziła moje
      wątpliwości. Przytoczę jeszcze kilka argumentów. Powiedziałem, że boję się
      pojęcia „sprawiedliwość społeczna” tak jak boję się pojęcia „humanizm
      socjalistyczny”, gdyż wolę pojęcie „humanizm”. Prof. K. Działocha wymienił
      trzy rodzaje sprawiedliwości: rozdzielczą, kumulatywną i proceduralną,
      Można jeszcze wymienić sprawiedliwość retrybutywną. Dwie, a może trzy z
      nich, są po prostu pojęciami sprawiedliwości, a nie sprawiedliwości
      społecznej. Pojęcie sprawiedliwości jest nieostre, a pojęcie
      sprawiedliwości społecznej jest jeszcze bardziej nieostre. Senator J.
      Madej pytał, jaka będzie formuła sprawiedliwości. W związku z tym chcę
      przypomnieć, że po roku 1987 pojęcie sprawiedliwości społecznej w Polsce
      odegrało ogromną pozytywną rolę, ponieważ w państwie nieprawnym stało się
      substytutem państwa prawa. Przypomnę, że w nowelizacji Konstytucji PRL w
      1976 r. wprowadzona została formuła o sprawiedliwości społecznej.
      Następnie powstał urząd Rzecznika Praw Obywatelskich. W ustawie do21
      tyczącej tego urzędu w art. 1 ust. 3 zapisano, że Rzecznik dba o zgodność
      ustaw z konstytucją, z zasadami współżycia społecznego I zasadami
      sprawiedliwości społecznej. Urząd Rzecznika został więc połączony z zasadą
      sprawiedliwości społecznej. Rzecznik często powoływał się na tę zasadę,
      nie mogąc powołać się ra inne zasady. Przykładem może być kwestia
      rewaloryzacji książeczek mieszkaniowych. W demokratycznym i konstytucyjnym
      państwie prawnym obrona tych książeczek opierałaby się na zasadzie prawa
      własności. Podobnie było po 1989 r., kiedy to na skutek niedoskonałości
      konstytucji postępował tak również Trybunał Konstytucyjny. Jako obserwator
      pracy Trybunału mam nieco inną interpretację jego dzii orzeczeń niż prof.
      K. Działocha. Trybunał Konstytucyjny bardzo ostrożnie powoływał się na
      zasadę sprawiedliwości społecznej. Zasadę tę stosował wraz z innymi
      przepisami konstytucji. Przykładem może być art. 70, mówiący o prawie do
      ochrony zdrowia. Zasada ta w połączeniu z zasadą sprawiedliwości
      społecznej była przywoływana przez Trybunał jako zasada rozwojowa. Jeżeli
      chodzi o moje uwagi, to oparłem je na ekspertyzie — niestety jeszcze nie
      opublikowanej _— prof. L. Garlickiego, który wyraźnie przedstawił, że
      jeśli chcemy w przyszłości, w państwie prawnym i konstytucyjnym zapewnić
      to, aby Trybunał Konstytucyjny nie podejmował decyzji wpływających na
      kwestie budżetowe, wskazana byłaby rezygnacja z zasady sprawiedliwości
      społecznej w konstytucji. Jeżeli zasada ta pozostanie, to przy
      ostateczności orzeczeń Trybunału Konstytucyjnego będzie on mógł podejmować
      takie decyzje. Prof. K. Działocha podniósł kwestię skargi. Rzeczywiście
      jest kwestią do dyskusji, czy skarga obywatela może spowodować tego
      rodzaju roszczenie. Ponieważ w projekcie konstytucji nie ma skargi erga
      omnes, nie jest pewne, czy skarga konstytucyjna może spowodować
      roszczenia. Nie ulega natomiast wątpliwości, że Rzecznik Praw
      Obywatelskich powołując się w szczególności na art. 1 ust. 3 ustawy o
      Rzeczniku Praw Obywatelskich, mówiącego o zasadzie sprawiedliwości
      społecznej, będzie mógł podważyć normę prawną — w tym również ustawę
      budżetową — z punktu widzenia jego interpretacji tej zasady. Chodzi mi
      więc o pewną ostrożność. Za lepszą uważam formułę stosowaną w Niemczech,
      która mówi o demokratycznym państwie prawnym i socjalnym >daje to
      wspaniałe rezultaty. Nie mogę natomiast zgodzić się z prof. L.
      Wiśniewskim, gdyż uważam, że niepełnosprawni i inne osoby skrzywdzone
      przez los są chronione na zasadzie zakazu dyskryminacji. Jeżeli więc — jak
      rozumiem ze względów politycznych — zasada sprawiedliwości społecznej
      miałaby pozostać w konstytucji, to opowiadam się za przyjęciem formuły
      mówiącej o kierowaniu się zasadami sprawiedliwości społecznej. Nie
      podejmuje ona bowiem kwestii rozwojowego charakteru praw oraz nasuwa
      mniejsze podstawy do wysuwania roszczeń o rezultaty działań państwa w
      zakresie polityki socjalnej."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Skrócę moją wypowiedź, gdyż kilka kwestii podjął już prof. W.
      Osiatyński. Naszą intencją przy wyborze formuły mówiącej o kierowaniu się
      zasadami sprawiedliwości społecznej przez państwo było zbliżenie tego
      pojęcia do pojęcia państwa socjalnego, które — ku mojemu ubolewaniu — nie
      przyjęło się w naszej literaturze. Interpretacja nadawana w toku
      posiedzenia Komisji ma również znaczenie wyjaśniające. Jest kwestią bardzo
      ważną, abyśmy z jednej strony widzieli obowiązek ciążący na państwie i
      kierunek, w którym porusza się ustawodawca. Nie jest to jednak demokracja
      socjalistyczna, czy inne tego typu pojęcia. Jeżeli chodzi o treść tego
      pojęcia, to jest ono zbliżone do pojęcia państwa socjalnego. Pamiętajmy,
      że sprawiedliwość społeczna tak właśnie rozumiana występowała wśród haseł
      „Solidarności ”. Tak więc należy przyjąć łagodniejsze sformułowanie,
      mówiące o kierowaniu się zasadami sprawiedliwości społecznej, gdyż w moim
      przekonaniu nakłada to obowiązek starannego działania władz państwowych, a
      nie urzeczywistnienia, czyli osiągnięcia celu, co wydaje się prawie
      nierealne."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Dla mnie jest przekonujące to, co powiedział prof. K. Działocha,
      gdyż nie jestem w stanie w pełni samodzielnie ocenić dyskutowanej kwestii.
      Uważam, że w naszej dyskusji ważne jest to, abyśmy uznali, że
      aksjologiczne założenia zarówno jednej, jak i drugiej formuły mają ogromne
      znaczenie i nikt nie jest w stanie wyzbyć się tego. Stąd raziła mnie nieco
      wczorajsza wypowiedź prof. W. Osiatyńskiego. Nie może być również tak, że
      nie można posługiwać się pewnymi kategoriami tylko z tego powodu, że
      zostały one zastosowane w konstytucji z 1952 r. Oznaczałoby to przecież,
      że nie możemy na przykład posłużyć się kategorią suwerenności narodu.
      Jeżeli jest tak, że sformułowanie mówiące o urzeczywistnianiu
      sprawiedliwości społecznej może prowadzić do indywidualnej skargi
      konstytucyjnej, to chcę zapytać: czy brzmienie art. 3 projektu również
      może prowadzić do skargi konstytucyjnej? Słyszę odpowiedzi, że może być
      podstawą do skargi konstytucyjnej, a mimo to nie są wyrażane obawy, co to
      znaczy, że zapewnia ochronę Środowiska. Czyżby wielki problem miał
      dotyczyć tylko kwestii formuły o sprawiedliwości społecznej? Moim zdaniem
      problemy mogą się pojawić zarówno przy jednej, jak i drugiej formule.
      Powstaje jednak problem, czy kwestię tę chcemy zapisać w sposób
      zrównoważony, który zawiera oba elementy, czy też chcemy wpisać tylko tę
      część, która się podoba. Oznacza to jednak selekcję czysto polityczną, a
      nie selekcję według możliwości prawnych. Rozumiem, że proponowana formuła
      mówiąca o urzeczywistnianiu sprawiedliwości społecznej może blokować pewne
      regresywne działania ustawodawcze. Jeżeli Trybunał Konstytucyjny
      stwierdza, że naruszono prawa słusznie nabyte, to być może wła nie na
      podstawie takiej normy. Musimy więc odpowiedzieć, czy chcemy mieć taką
      normę i taką potencjalną blokadę, czy też nie. Jeżeli bowiem zdarzy się
      rząd Unii Polityki Realnej, który postanowi zlikwidować renty i emerytury
      gwarantowane przez państwo, to chcę, aby była taka blokada. Jestem bowiem
      głęboko przeświadczony, że pewien poziom tych gwarancji jest także
      gwarancją dla demokracji i stabilności państwa polskiego. Taką przyjmuję
      filozofię i myślę, że jest to moje dobre prawo. Na tę filozofię można
      odpowiedzieć inną filozofią, a nie podważaniem strony formalnej mojej
      filozofii. Odnosząc się do wypowiedzi posła J. Rokity, nie mogę jednak nie
      powiedzieć, że zgodnie z ustawą o obowiązkach i prawach posłów i senatorów
      udział w pracach parlamentu jest nie tylko prawem, ale 1 obowiązkiem
      posłów i senatorów. Jeżeli poseł J. Rokita nie wziął udziału w żadnym w 12
      dotychczasowych posiedzeń podkomisji i nie przedstawił żadnego
      usprawiedliwienia, jest to problem i mam prawo o nim mówić."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="W żadnym swoim wystąpieniu nie powiedziałem, że zasada
      sprawiedliwości, czy zwierzchnictwa narodu, może prowadzić do skargi
      konstytucyjnej. Powiedziałem tylko, że w przypadku skargi konstytucyjnej
      można się powoływać na zasady. Dodałem, że może to być trudne dla
      obywatela, lecz może być stosowane przez Rzecznika Praw Obywatelskich.
      Jeżeli chodzi o inny fragment wypowiedzi posła R. Bugaja, to chcę zwrócić
      uwagę, że i zasada mówiąca o kierowaniu, i zasada mówiąca o państwie
      socjalnym również zapewnią cele, o których mówił poseł R. Bugaj. Nawet
      rząd UPR nie będzie mógł naruszyć tych zasad. Nie rozpatrujemy bowiem
      kwestii całkowitego usunięcia zasady sprawiedliwości społecznej."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Odnosząc się do wypowiedzi posła R. Bugaja chcę powiedzieć, że
      wypowiadałem się przeciwko art. 3 właśnie z tych powodów, a więc ze
      względu na niejasność tych pojęć ujętych w art. 3. Nie bardzo wiadomo, do
      czego mogą prowadzić tak określone cele państwa. Jest to ponadto
      obudowywanie konstytucji hasłami, a nie normami."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński"
      imgPath="/images/kk-speakers/RzeplinskiAndrzej.png"
      text="Odnosząc się do wypowiedzi posła R. Bugaja, że proponowany przez
      niego zapis uniemożliwiałby restryktywne ustawy w kwestiach socjalnych,
      obawiam się, że będzie wręcz odwrotnie, jeżeli Trybunał będzie miał prawo
      wydawania orzeczeń ostatecznych. Może bowiem być tak, że któryś z
      następnych parlamentów będzie skłonny uchwalać bardzo korzystne dla
      obywateli ustawy socjalne, gdyż będzie przekonany, że Trybunał
      Konstytucyjny uzna te ustawy za niekonstytucyjne. Chcę dodać, że tak
      właśnie było w USA, kiedy to w pewnym okresie Sąd Najwyższy stosunkowo
      często orzekał niekonstytucyjność ustaw. Spowodowało to zmniejszenie
      odpowiedzialności Kongresu za treść ustaw. Parlamentarzyści wiedzieli
      bowiem, że Sąd Najwyższy uchyli ustawy sprzeczne z konstytucją."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Myślę, że dyskusja wyjaśniła sens oraz możliwe skutki przepisów,
      które będą przedmiotem głosowania. Część skutków jest jednak potencjalna,
      a więc trudna do udowodnienia. Część została natomiast wyjaśniona. W
      głosowaniu będziemy mogli wypowiedzieć się za jedną z trzech formuł:
      państwo urzeczywistniające zasady sprawiedliwości społecznej, państwo
      kierujące się zasadami sprawiedliwości społecznej oraz państwo socjalne.
      Do głosowania przejdziemy za chwilę. Teraz proponuję ponowną lekturę
      zgłoszonych wniosków i wypowiedzi na temat tego, jak rysuje się sytuacja,
      jeżeli chodzi o art. 2. Rozumiem bowiem, że w części propozycji art. 2
      związany jest z formułą zwierzchnictwa narodu. Propozycja senator A.
      Grześkowiak akcentuje kwestię praw człowieka. Jest to koncepcja na tyle
      odrębna, iż powinna być głosowana odrębnie. Odrębnością cechuje się
      również koncepcja posła L. Moczulskiego. Ponadto należałoby wyjaśnić, jak
      art. 2 widzą przedstawiciele Prezydenta RP, wobec dość wyraźnego
      zarysowania się treści art. 1."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Możliwy jest również wariant art. 2 mówiący o tym, że państwo jest
      wspólnym dobrem wszystkich obywateli. Ponadto chcę zachęcać członków
      Komisji do przyjęcia formuły mówiącej o zrównoważonym rozwoju. Nie jest to
      bowiem hasło, lecz kierunek rozwoju Świata."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przyjmuję uwagę senatora J. Madeja, co powoduje, że zwiększa się
      liczba wariantów art. 2."
    />

    <Utterance
      speaker="Poseł Jan Rokita (UW)"
      imgPath="/images/kk-speakers/RokitaJan.png"
      text="Chcę jeszcze powrócić do art. 1. Uważam, że w sprawach
      fundamentalnych trzeba być konsekwentnym i uzyskiwać jasność. Wydaje Się,
      że debata nad art. i może przesądzić o tym, czy w najbliższych latach
      zostanie przeprowadzona w Polsce reforma usług publicznych, czy też nie.
      Jest to jednak uwaga na marginesie. Jeżeli natomiast chodzi o moje główne
      pytanie, to otrzymałem — w zasadzie — dwie sprzeczne odpowiedzi ze strony
      ekspertów. Nie padła odpowiedź ze strony przewodniczącego podkomisji.
      Jeżeli chodzi o opinię ekspertów, to prof. K. Działocha stwierdził, że nie
      istnieje możliwość kontroli Trybunału Konstytucyjnego nad wydatkami
      budżetowymi. Prof. W. Osiatyński wspierając się opinią prof. L.
      Garlickiego — ponoć jednoznaczną — udzielił przeciwnej odpowiedzi. Uważam
      więc, że do chwili, kiedy Komisja Konstytucyjna w dyskutowanej kwestii —
      także na użytek przyszłych interpretatorów konstytucji — nie wyrazi
      jednoznacznej opinii, głosowanie nad wyrazami jest zupełnie bez znaczenia.
      Konieczne jest bowiem przegłosowanie woli Komisji, a więc czy Komisja chce
      uzyskać efekt ustrojowy w postaci kontroli wydatków publicznych przez
      Trybunał Konstytucyjny, czy też nie. Jest to bowiem pytanie o ustrojowy
      fundament państwa. W tym kontekście pytanie o wyrazy jest pytaniem
      śmiesznym."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proszę ponownie o wypowiedź prof. K. Działochę, odnoszącą się do
      pytania posła J. Rokity. Chodzi o wypowiedź, która mogłaby być przydatna
      przy interpretacji konstytucji."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Chcę przypomnieć, że należy odnosić się do całości projektu, a
      zwłaszcza do rozdziału o sądach i trybunałach. W sposobie ujęcia
      kompetencji Trybunału Konstytucyjnego, a zwłaszcza w kwestii ostateczności
      jego orzeczeń, jest zabezpieczenie, aby Trybunał nie mógł w sposób
      ostateczny — kierując się m.in. zasadą sprawiedliwości społecznej —
      przesądzać o wydatkach państwa. Jest to zabezpieczenie — w moim
      przekonaniu dyskusyjne — polegające na tym, że orzeczenia pociągające za
      sobą wydatki budżetowe nie będą miały charakteru ostatecznego. W tej
      części byłyby rozpatrywane przez Sejm."
    />

    <Utterance
      speaker="Poseł Jan Rokita (UW)"
      imgPath="/images/kk-speakers/RokitaJan.png"
      text="Nie wiem, jaki będzie pogląd Komisji, ale uważam, że rozważanie art.
      171 w wersji II, a więc w wersji obszernej politycznej kontroli Sejmu nad
      orzeczeniami Trybunału Konstytucyjnego — będzie bezprzedmiotowe, jeżeli
      ponownie przyjmiemy regułę państwa prawnego jako regułę konstytucyjną.
      Tego typu interpretacje są więc dla mnie nie do przyjęcia. Chcę szukać
      takich rozwiązań, w których zasady konstytucyjne nie dadzą formalnych
      podstaw do skarg do Trybunału Konstytucyjnego. Chodzi o skargę tego typu,
      że na przykład w 1999 r. większość parlamentarna przeznaczyła za mało
      pieniędzy dla emerytów a za dużo na pomoc dla przedsiębiorstw, a jest to
      sprzeczne z zasadą sprawiedliwości społecznej. Tu poszukiwałbym gwarancji,
      a nie w rygorach politycznych dotyczących Trybunału Konstytucyjnego."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Na tle tego, o czym poprzednio mówił poseł J. Ciemniewski, chcę
      powiedzieć, że nie kierowałem do niego uwagi w sprawie innych elementów
      ukierunkowujących politykę państwa w konstytucji. Miałem takie
      przeświadczenie, że ponieważ poza wnioskiem ogólnym nikt nie przedstawiał
      trudności wokół innych formuł ogólnych, to rysuje się zgodność poglądów.
      Jeżeli jednak nie ma zgodności poglądów, to poszedłbym dalej niż idzie
      poseł J. Rokita. Mogłoby to polegać na przesądzeniu o tym, czy w
      konstytucji mają być jakiekolwiek elementy ukierunkowujące. Czy państwo
      zapewnia ochronę środowiska, czy strzeże kultury narodowej? Są to bowiem
      również formuły określające, jak państwo ma działać.Poseł J. Rokita
      powiedział, że przyjmując określony zapis przesądzamy o reformach usług
      publicznych, a więc na przykład służby zdrowia. Ja rozumiem tak, że
      możliwa jest reforma służby zdrowia na tle proponowanej formuły, jeżeli
      reforma ta nie zostanie przeprowadzona wcześniej. Wówczas jednak może być
      problem z taką reformą, która chciałaby cofnąć wiele uprawnień z zakresu
      służby zdrowia. Mnie chodzi o to, aby nie było to możliwe, i w tym się
      różnimy."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Poseł R. Bugaj daje przykład zapewnienia ochrony środowiska. Właśnie
      o to chodzi, gdyż w grę wchodzą sprawy bardzo konkretne. Przykładem może
      być sytuacja, w której do Polski napłynęły tysiące ton szkodliwych
      odpadów, a prokuratura nie może znaleźć winnych. Sprawiedliwość społeczna
      jest jednak nadal pojęciem bardzo szerokim i możliwe są różne
      interpretacje. Przypominam hasło mówiące o tym, że wszyscy mamy jednakowe
      żołądki."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Apeluję raz jeszcze o zmierzanie do konkluzji."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, prof. Michał Pietrzak"
      imgPath="/images/kk-speakers/PietrzakMichal.png"
      text="Proponuję rozważenie formuły mówiącej o urzeczywistnianiu zasad
      sprawiedliwości społecznej w zakresie ustawowo określonym. Wydaje się, że
      jest to formuła kompromisowa, możliwa do przyjęcia przez zwolenników obu
      koncepcji."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Zaproponowana formuła kryje pewne niebezpieczeństwa i grozi sporem z
      zakresu filozofii prawa. Nie można w ten sposób prawa stawiać ponad
      sprawiedliwością. Sprawiedliwość ma być realizowana zawsze poprzez ustawę.
      Prawo należy stosować do jego granic, ale w pewnych sytuacjach, gdy
      dochodzi do ewidentnej sprzeczności, to górę powinna wziąć sprawiedliwość.
      Chcę również dodać pewną kwestię wyjaśniającą w kontekście wypowiedzi
      posła J. Rokity. Mnie również nie podoba się zabezpieczenie dotyczące
      Trybunału, choć ja je wymyśliłem. Pragnę jednak zwrócić uwagę, że zasada
      państwa prawnego urzeczywistniającego zasady sprawiedliwości społecznej,
      to nie jedyna, lecz jedna z zasad naczelnych konstytucji wyrażonych w
      rozdziale pierwszym. Zasady wyrażone w tym rozdziale będą się wyrażać
      przez bardziej szczegółowe instytucje i normy zawarte w następnych
      rozdziałach konstytucji. Zasada sprawiedliwości społecznej zostanie
      wyrażona przede wszystkim przez przepisy dotyczące wolności, praw i
      obowiązków obywatelskich. Wśród nich są prawa socjalne. Podstawą do
      ewentualnych obywatelskich skarg konstytucyjnych będzie konkretna norma
      dotycząca określonego prawa socjalnego, a nie ogólna norma art. | mówiąca
      o sprawiedliwości społecznej. Ponadto norma ta jest bardzo trudna do
      zdefiniowania prawnego. Dla jej interpretacji duże znaczenie mieć będą
      panujące poglądy polityczne. Nie można również zakładać, że będzie
      przynosić szkody i będzie narzędziem realizacji złych celów."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przeprowadziliśmy bardzo wszechstronną dyskusję...."
    />

    <Utterance
      speaker="Poseł Jan Rokita (UW)"
      imgPath="/images/kk-speakers/RokitaJan.png"
      text="Przepraszam, panie przewodniczący, ale czy porzucił pan intencję,
      którą przed chwilą kierował do prof. K. Działochy, a więc aby uzyskać
      pewną zgodną interpretację intencji Komisji, która znalazłaby się w
      protokole? Czy pan przewodniczący trwa przy tej myśli, czy też porzucił
      ją? Ja ją bardzo popieram."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Nie odrzucam tej myśli, lecz trwam przy niej i rozumiem, że prof. K.
      Działocha w tej sprawie zabierał głos kilkakrotnie. Znamy więc jego
      stanowisko. Uważam, że wszystko, co było możliwe do wyjaśnienia na tym
      etapie prac, zostało wyjaśnione. Mówiąc skrótowo rysują się trzy opcje:
      urzeczywistnianie, kierowanie i państwo socjalne. Każdy z członków Komisji
      mógłby wybrać jedną z nich."
    />

    <Utterance
      speaker="Poseł Tadeusz Iwiński (SLD)"
      imgPath="/images/kk-speakers/IwinskiTadeusz.png"
      text="Proszę jednak zwrócić uwagę, że dwa pierwsze warianty mówią o
      sprawiedliwości społecznej, a trzeci nic nie mówi. Powinno to znaleźć
      odzwierciedlenie w sposobie głosowania."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Każda z trzech przedłożonych formuł różni się jednak dość wyraźnie
      od pozostałych. Mogą więc być głosowane odrębnie. Poddaję pod głosowanie
      wniosek, aby art. 1 miał brzmienie: „Rzeczpospolita Polska jest
      demokratycznym państwem prawnym, urzeczywistniającym zasady
      sprawiedliwości społecznej ”. Stwierdzam, że w głosowaniu wniosek uzyskał
      poparcie 19 członków Komisji. Poddaję pod głosowanie wniosek, aby art. 1
      miał brzmienie: „Rzeczpospolita Polska jest demokratycznym państwem
      prawnym, kierującym się zasadami sprawiedliwości społecznej”. Stwierdzam,
      że w głosowaniu wniosek uzyskał poparcie 7 członków Komisji. Poddaję pod
      głosowanie wniosek, aby art. 1 miał brzmienie: „Rzeczpospolita Polska jest
      demokratycznym państwem prawnym 1 socjalnym”. Stwierdzam, że w głosowaniu
      wniosek zyskał poparcie członków Komisji. Nikt się nie wstrzymał."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Za najwłaściwszą uważaliśmy formułę mówiącą o kierowaniu. Wniosek
      ten upadł. Drugim popieranym przez nas wnioskiem była formuła o państwie
      socjalnym. Nie mieliśmy jednak możliwości głosować na tę formułę."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Nie sądzę, aby inne głosowanie coś zmieniło, jeżeli chodzi o
      formułę, która cieszy się poparciem większości. Aby jednak uczynić zadość
      wnioskowi1 poseł I. Lipowicz, odbędzie się jeszcze jedno głosowanie, w
      którym do wyboru będzie formuła mówiąca o urzeczywistnianiu i państwie
      socjalnym. Poddaję pod głosowanie wniosek, aby art. 1 brzmiał:
      „Rzeczpospolita Polska jest demokratycznym państwem prawnym,
      urzeczywistniającym Zasady sprawiedliwości społecznej”. Stwierdzam, że w
      głosowaniu wniosek uzyskał poparcie 23 członków Komisji. Poddaję pod
      głosowanie wniosek, aby art. 1 miał brzmienie: „Rzeczpospolita Polska jest
      demokratycznym państwem prawnym i socjalnym”. Stwierdzam, że w głosowaniu
      wniosek uzyskał poparcie 8 członków Komisji. Nikt się nie wstrzymał. Tak
      więc art. 1 uzyskał brzmienie: „Rzeczpospolita Polska jest demokratycznym
      państwem prawnym, urzeczywistniającym zasady sprawiedliwości społecznej”.
      Przechodzimy do dylematów związanych z art. 2. W oparciu o zgłoszone
      wnioski merytoryczne treść art. 2 może dotyczyć: po pierwsze — wspólnego
      dobra wszystkich obywateli, po drugie — jednolitości I niepodzielności, po
      trzecie — praw człowieka >strzeżenia niepodległości i terytorium,
      dziedzictwa kultury, ochrony środowiska oraz zrównoważonego rozwoju, po
      czwarte — sprawowania władzy zwierzchniej przez naród. Ponadto zgłoszone
      zostały dwa dalsze wnioski, które proponuję przegłosować odrębnie. Jest to
      wniosek senator A. Grześkowiak, będący częścią pewnej całości opartej na
      innej filozofii konstytucji. Podobnie rzecz się ma z poprawką posła L.
      Moczulskiego. |"
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Uważam, że należy odpowiedzieć na pytanie, czy w tekście konstytucji
      musi znaleźć się art. 4 projektu, mówiący o tym, że Rzeczpospolita Polska
      jest państwem jednolitym i niepodzielnym. Jeżeli tak, to powinien to być
      jeden z początkowych artykułów."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Art. 4 nie musi się znaleźć w konstytucji. Jest to formuła typowa
      dla konstytucjonalizmu francuskiego. . Fakt, że Polska jest państwem
      unitarnym, będzie wynikać z rozdziału o samorządzie terytorialnym."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Uważam, że skoro art. 1 formułuje zasady państwa prawnego, to
      konsekwencją przyjęcia tej konwencji powinno być to, że art. 2 powinien
      wyrażać zasadę zwierzchnictwa narodu."
    />

    <Utterance
      speaker="Poseł Leszek Moczulski (KPN)"
      imgPath="/images/kk-speakers/MoczulskiLeszek.png"
      text="Uważam, że powinien zostać ustalony pewien porządek,'w myśl zasady:
      od kwestii bardziej ogólnych do kwestii bardziej szczegółowych. Odmiennie
      jak pan przewodniczący uważam, że moja propozycja art. 2 mieści się w
      ogólnej konwencji. Inne kwestie są ujęte w dalszych artykułach. Tak jest
      na przykład z zasadą pochodzenia władzy wyrażoną w art. 4 mojej
      propozycji. W grę wchodzi więc pewien porządek logiczny. Uważam, że
      najpierw należy określić wspólnotowy charakter Rzeczypospolitej,
      rozwinięty w proponowanym art. 2, albo w ogóle zrezygnować z kwestii
      wspólnotowego określenia Rzeczypospolitej. Powinna to być kwestia
      pierwsza. Kolejnym elementem byłaby kwestia trwałości państwa. Następnie
      powinno być ujęte pochodzenie władzy. Odwrócenie tej kolejności nie byłoby
      logiczne. Proponuję więc rozpocząć od kwestii art. 2 z mojej propozycji."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Popieram pogląd posła L. Moczulskiego, że art. 2 powinien dotyczyć
      państwa jako wspólnego dobra wszystkich obywateli."
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="W naszej propozycji norma o państwie jako dobru wspólnym była
      również jako art. 2. Uważamy, że jest to kolejność logiczna. Zasada
      zwierzchnictwa narodu powinna być w art. 3."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Gdyby poseł J. Szymański był gotów przyjąć tego rodzaju punkt
      widzenia, to moglibyśmy rozstrzygnąć tę kwestię, gdyż ja także uważam, że
      po określeniu podstawowych elementów ustrojowych w art. l, w art. 2
      powinno znaleźć się określenie mówiące o państwie jako wspólnym dobru
      wszystkich obywateli. Następna powinna być norma o suwerenności."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Odmienny pogląd mam nie tylko ja, ale również senator A. Grześkowiak
      i poseł T. Iwiński."
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="Za formułą mówiącą o państwie jako wspólnym dobru wszystkich
      obywateli lub podobnie, opowiadają się poprawki: 1, 2, 4, 5,6, 7 18.
      Powinien to być odrębny artykuł i o to apeluję do wnioskodawców."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Nie jestem szczególnie przywiązany do myśli ustrojowej konstytucji
      kwietniowej i choć poseł L. Moczulski podpowiada mi, że była to najlepsza
      konstytucja, to ja jednak nie popieram tego poglądu. Jestem uparty i
      podtrzymuję swój wniosek."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Chcę zapytać posła J. Szymańskiego, czy w ogóle wyklucza normę
      mówiącą o państwie jako wspólnym dobru, czy też widzi ją w innym miejscu?"
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Uważam, że przepis mówiący o państwie jako wspólnym dobru w ogóle
      nie powinien znaleźć się w konstytucji."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Uważam, że sprawa dojrzała do przegłosowania, choć chcę również
      dodać, że z punktu widzenia konstytucji formuła, o której dyskutujemy,
      wyraża myśl niebagatelną. Jeżeli w konstytucji ma być wyrażona filozofia
      państwa, to myśl ta pomoże temu. Ponadto proszę pamiętać, że jest to
      propozycja przygotowana przez podkomisję."
    />

    <Utterance
      speaker="Poseł Leszek Moczulski (KPN)"
      imgPath="/images/kk-speakers/MoczulskiLeszek.png"
      text="Uważam, że nie jest do przyjęcia, że ze wszystkich konstytucji
      uchwalonych w Polsce tylko to, że coś było w konstytucji kwietniowej, jest
      argumentem przekonywającym. Utrzymywanie takiego stanu rzeczy nie jest
      najlepsze. Zaproponuję jutro, aby na cenzurowanym była nie tylko jedna
      konstytucja. Przedłożę propozycję przepisu zapożyczonego z konstytucji z
      dnia 22 lipca... 1807 roku."
    />

    <Utterance
      speaker="Przedstawiciel Prezydenta RP, dr. Władysław Kulesza"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Chcę przypomnieć, że pojęcie: „dobra wspólnego” komentował już prof.
      P. Winczorek. Pojęcie to zawiera wielorakie konotacje filozoficzne,
      odnoszące się nie tylko do historii najnowszej II Rzeczypospolitej.
      Elementem, na który warto zwrócić uwagę, jest to, że w pojęciu dobra
      wspólnego ukryta jest również idea sprawiedliwości społecznej i to ujęta w
      sposób wolny od pewnych niejasności czy wadliwych zobowiązań, które może
      przynieść pojęcie sprawiedliwości społecznej definiowane według ujęć z
      ostatniego dziesięciolecia. Ponadto pojęcie dobra wspólnego zawiera w
      sobie próbę wyważenia relacji między prawem a obowiązkiem obywateli, o
      czym zapomina się w tej dyskusji. Podjęcie kwestii praw i obowiązków
      obywateli jest otwarciem drogi do budowy prawdziwie demokratycznego
      społeczeństwa. Proszę więc wziąć pod uwagę, że formuła ta zawiera bogate
      konotacje filozoficzne, których nie da się sprowadzić do pojęcia tylko
      politycznego."
    />

    <Utterance
      speaker="Poseł Tadeusz Iwiński (SLD)"
      imgPath="/images/kk-speakers/IwinskiTadeusz.png"
      text="Zgadzam się z dr. W. Kuleszą, że pojęcie dobra wspólnego może być
      odnoszone do zasad sprawiedliwości społecznej. Byłby to więc pleonazm.
      Ponadto chcę przypomnieć, że w pierwotnych propozycjach, które zostały
      przedłożone na poprzednim posiedzeniu i zawarte w materiale, który
      otrzymaliśmy, była wspólna propozycja posła J. Zdrady oraz moja, która
      sprowadzała się do wykreślenia obecnego art. 2. Zawierała natomiast
      propozycje brzmienia czterech pierwszych artykułów, Uważam, że jest to
      propozycja nadal ważna i podtrzymuję ją. Oznacza to również podtrzymanie
      wniosku o skreślenie w całości art. 2."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Uważam, że sprawa dojrzała do głosowania. Poddaję pod głosowanie
      wniosek o skreślenie art. 2 projektu, który brzmi: „Rzeczpospolita Polska
      jest wspólnym dobrem wszystkich obywateli”. Stwierdzam, że Komisja w
      głosowaniu, większością 17 głosów przeciwnych, przy 9 głosach
      popierających i i wstrzymującym się, odrzuciła wniosek. Dodam, iż jedna
      osoba nie brała udziału w głosowaniu. Zamierzam poddać pod głosowanie
      wniosek o utrzymanie art. 2 projektu jako art. 2 konstytucji."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="W naszych uwagach pisemnych proponujemy, aby obecny art. 2 był art.
      1, gdyż jest ogólniejszy i pełniejszy w swoim wyrazie niż artykuł o
      demokratycznym państwie prawnym."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Kwestię tę jednak już zdecydowaliśmy. Będziemy mogli powrócić do
      niej podczas obrad Zgromadzenia Narodowego, lub w końcowej części prac
      Komisji. Poddaję pod głosowanie wniosek, aby art. 2 miał brzmienie:
      „Rzeczpospolita Polska jest wspólnym dobrem wszystkich obywateli”.
      Stwierdzam, że Komisja w głosowaniu, większością 20 głosów popierających,
      przy 3 głosach przeciwnych i 5 wstrzymujących się, przyjęła wniosek. Tak
      więc art. 2 projektu brzmi: „Rzeczpospolita Polska jest wspólnym dobrem
      wszystkich obywateli”."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Wnoszę o odłożenie posiedzenia do jutra do godz. 9.30."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przyjmuję wniosek posła R. Bugaja, lecz równocześnie proszę o uwagi
      na temat treści art. 3. Jeżeli chodzi o złożone wnioski, to rysują się
      następujące opcje art. 3: zasada zwierzchnictwa, cele państwa oraz
      jednolitość i niepodzielność. Jeżeli chodzi o tę ostatnią opcję, to prof.
      P. Sarnecki stwierdził, że kwestia ta może być ujęta w rozdziale o
      samorządzie terytorialnym. Zagadnienia te podejmiemy w jutrzejszej
      debacie. Czy przed zamknięciem debaty w dniu dzisiejszym ktoś chciałby
      zabrać głos w sprawach różnych?"
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="Moja wypowiedź dotyczy informacji posła T. Iwińskiego, iż obaj
      byliśmy za usunięciem artykułu mówiącego o państwie jako dobru wspólnym.
      Chcę wyjaśnić, iż ja wypowiadałem się tylko w kwestii kolejności artykułów
      i wspomniałem o art. 2, który w mojej koncepcji miał być art. 4. Nie byłem
      więc za usunięciem art. 2, lecz za inną kolejnością."
    />

    <Utterance
      speaker="Poseł Ryszard Grodzicki (SLD)"
      imgPath="/images/kk-speakers/GrodzickiRyszard.png"
      text="Wracam do kwestii korelacji posiedzeń Komisji z posiedzeniami innych
      komisji. Praktyka, jaka ukształtowała się, jeżeli chodzi o wyrażanie zgody
      na posiedzenia komisji i podkomisji w toku posiedzeń Sejmu, jest co
      najmniej dyskusyjna. Jutro będzie musiało odbyć się posiedzenie
      podkomisji, w skład której wchodzi 5 członków Komisji Konstytucyjnej,
      dlatego że marszałek nie wyraził zgody na posiedzenie tej podkomisji w
      trakcie ostatniego posiedzenia Sejmu. Proszę, aby pan przewodniczący użył
      swoich wpływów na marszałka Sejmu, jeżeli chodzi o tę praktykę."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czy są dalsze sprawy różne? Nie ma. Zamykam obrady w dniu
      dzisiejszym. Wznowimy je jutro o 9.30."
    />
  </div>
</div>
