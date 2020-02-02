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
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(160, 40, 40, 0.1);
    margin-bottom: 2rem;
  }
  .small-article-nav {
    text-align: right;
    width: 60px;
  }

  .small-article-nav a img {
    width: 25px;
    height: 25px;
  }
  .article-metadata,
  .press-article {
    border: 1px solid rgba(160, 40, 40, 0.1);
    padding: 1rem;
    border-radius: 3px;
  }

  .article-metadata {
  }
  .author {
    text-align: right;
  }

  .subtitle {
    font-size: 1.5rem;
    font-weight: 750;
    text-align: center;
  }

  .title {
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
  }
  .newspaper,
  .date {
    text-align: right;
  }
  .press-article {
    margin-bottom: 2rem;
  }

  .author,
  .newspaper,
  .bold,
  .date {
    font-weight: 600;
  }
</style>

<svelte:head>
  <title>Prasa</title>
</svelte:head>

<Nav segment={'info'} />

<svelte:window bind:scrollY={yAxisPosition} />

{#if yAxisPosition > 300}
  <ToTheTopBtn />
{/if}

<div in:fly={{ y: 100, duration: 1000 }}>

  <div class="header">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <h3>Prasa o pracach konstytucyjnych</h3>
        <h5>
          <a
            href="https://drive.google.com/file/d/11T-4wqLyg3qDTevhw0wPY77qMg6iKOtF/view?usp=sharing"
            rel="nofollow"
            target="_blank">
            ORYGINAŁ BIULETYNU
          </a>
          <img class="ext-link" src="images/external-link.svg" alt="">
        </h5>
      </div>
      <div class="small-article-nav">
        <a rel="prefetch" href="/komisja/13/3">
          <img src="images/angle-left-solid.svg" alt="" />
        </a>

      </div>
    </div>

    <p>
      W przedrukach z prasy zachowany jest styl i pisownia oryginałów. Jedynie
      oczywiste błędy rzeczowe są poprawiane w przypisach. Z publikacji
      prasowych o szerszym zakresie tematycznym w biuletynie zamieszczane są
      tylko fragmenty dotyczące problematyki konstytucyjnej. Z zasady nie są
      przedrukowywane zdjęcia, rysunki, tabele, reprodukcje. Przedruki ułożone
      są w zasadzie chronologicznie. Pomocniczo stosowane jest jednak również
      grupowanie tematyczne. W związku z wejściem prac konstytucyjnych w fazę
      ustalania brzmienia przepisów nowej konstytucji, preferencyjnie traktowane
      są publikacje o charakterze problemowym.
    </p>
  </div>
  <div class="press-article">
    <div class="article-metadata">
      <p class="newspaper">„Rzeczpospolita”</p>
      <p class="date">14 lutego 1995 r.</p>
      <p class="title">Powolna ucieczka do przodu.</p>
      <p class="subtitle">
        Komisja Konstytucyjna uchwaliła 10 artykułów przyszłej konstytucji.
      </p>
      <p class="author">Jerzy Pilczyński</p>
    </div>
    <p class="bold">
      Dziesięć pierwszych artykułów ustawy zasadniczej zdołała w ubiegłym
      tygodniu uchwalić Komisja Konstytucyjna Zgromadzenia Narodowego podczas
      swego trzydniowego posiedzenia. Zostały one umieszczone w rozdziale
      otwierającym projekt, który postanowiono zatytułować „Zasady ustroju”.
    </p>
    <p>
      Można by więc powiedzieć, że prace konstytucyjne ruszyły wreszcie z
      miejsca i zaczynają przynosić pierwsze efekty. Idzie to jednak opornie.
      Wcześniejsze deklaracje Aleksandra Kwaśniewskiego, że już w marcu Komisja
      przedstawi pod obrady Z.gromadzenia Narodowego gotowy projekt, grzeszyły
      niczym nie uzasadnionym optymizmem. Zanim to nastąpi, przed Komisją jest
      jeszcze wiele kilkudniowych posiedzeń, co musi potrwać tygodnie, jeśli nie
      miesiące. Trzeba sobie też zdawać sprawę, że dalsza procedura nie jest
      wcale prosta i na jej przeprowadzenie potrzeba kilku miesięcy. Jesteśmy
      więc ciągle jeszcze na początku drogi do nowej ustawy zasadniczej.
      Tymczasem zaczyna się "psuć pogoda polityczna”. Niektórzy z uczestników
      prac konstytucyjnych nie kryją obaw, że mogą one znowu pójść na marne, jak
      to już było w dwóch poprzednich kadencjach. Dla innych jest to doping, aby
      zwiększyć tempo tych prac. Aleksander Kwaśniewski, który przewodniczy
      Komisji Konstytucyjnej, zdaje się być nie zrażony tym pogorszeniem
      politycznego klimatu. Obawia się jedynie, aby konstytucja już po jej
      uchwaleniu przez Zgromadzenie nie stała się przedmiotem bezwzględnej gry
      politycznej przed referendum. Gry, w której nie liczyłyby się argumenty
      merytoryczne, a jedynie argumenty polityczne za bądź przeciw jej twórcom.
      Przewodniczący Komisji, mimo że sam jest mocno zaabsorbowany obecnym
      kryzysem politycznym, nie zgodził się odroczyć ubiegłotygodniowego jej
      posiedzenia, nie oddał też nikomu prowadzenia obrad, aby mieć czas na
      zastanawianie się nad bieżącą taktyką swego ugrupowania. Wezwał natomiast
      członków Komisji, aby „nie bacząc na okoliczności tworzyli nadal ustawę
      zasadniczą”. Czy ta „ucieczka do przodu” ma szanse się powieść, za
      wcześnie jeszcze, aby wyrokować.
    </p>

    <p class="bold">Spór o zasady</p>

    <p>
      Pierwszy rozdział tworzonego projektu zawiera zasady ogólne. Już na
      wstępie powstał w Komisji spór, czy takie postanowienia są w konstytucji
      potrzebne. Profesor Jerzy Ciemniewski, poseł UW, postulował, aby
      ograniczyć w projekcie do minimum te sformułowania, które — jak się
      wyraził — „mają charakter nie tyle normatywny, ile ideologiczny”. Nowa
      konstytucja powinna bowiem odróżniać się od poprzedniej, z czasów PRL,
      która była fasadowa, zawierała wiele deklaracji bez pokrycia, a jej
      postanowienia na ogół nie nadawały się do bezpośredniego zastosowania ani
      do egzekwowania przed sądami. W Komisji przeważył jednak pogląd, że nie
      należy pod tym względem przesadzać, a zasady ogólne zawarte w pierwszym
      rozdziale są potrzebne i nie można ich pominąć. Bronił tych postanowień
      reprezentujący projekt „Solidarności” Michał Drozdek. Podkreślał przy tym,
      że konstytucja to nie tylko regulacja ściśle prawna. Jej postanowienia mają
      istotne znaczenie dla zachowania tożsamości narodowej oraz ciągłości
      ustrojowoprawnej. Zasadnicze deklaracje w tym zakresie są więc niezbędne.
      Wspierał go ekspert Komisji, profesor Piotr Winczorek, mówiąc, że
      konstytucja musi się jednak różnić czymś od regulaminu. Zawarte w
      pierwszej części zasady ogólne mają zresztą normatywny charakter i bogatą
      treść, choć na pierwszy rzut oka może się wydawać, że są to sformułowania
      banalne. Ich ujęcie, a nawet kolejność zamieszczenia ma kapitalne
      znaczenie dla właściwego odczytania norm konstytucyjnych zawartych w
      dalszych rozdziałach. Przy interpretacji przepisów konstytucyjnych
      odwołuje się do tych zasad Trybunał Konstytucyjny. Ich sformułowanie jest
      więc sprawą szczególnie trudną i odpowiedzialną.
    </p>

    <p class="bold">Państwo prawne i socjalne</p>

    <p>
      Nic dziwnego, że do sporów o ich treść doszło już przy pierwszych
      artykułach. Kontrowersje wywołał art. 1, mówiący o tym, że „Rzeczpospolita
      Polska jest demokratycznym państwem prawnym, urzeczywistniającym zasady
      sprawiedliwości społecznej . Niektóre środki masowego przekazu przyjęły to
      w sposób opaczny, próbując sugerować, że to jakieś naleciałości z
      odrzuconej przeszłości. Zasada państwa prawnego znalazła się w naszej
      konstytucji stosunkowo niedawno, choć jest już obowiązującym standardem
      europejskim. Zdążyła jednak odegrać niemałą rolę w orzecznictwie Trybunału
      Konstytucyjnego. Mówiąc najogólniej i w największym uproszczeniu —
      sprowadza się ona do tego, że państwo kieruje się zawsze w swych
      działaniach prawem. Również z przepisów konstytucyjnych z 1989 roku, a
      więc sformułowanych po „okrągłym stole”, pochodzi zasada sprawiedliwości
      społecznej. Kojarzenie jej tylko z tzw. minioną epoką byłoby niezwykle
      powierzchowne. Można ją bowiem również wywodzić ze społecznej nauki
      Kościoła, a zwłaszcza z encykliki papieskiej „Laborem exercens”.
      Sformułowanie to jest także odpowiednikiem zawartego w art. 20 Konstytucji
      RFN z 1949 roku pojęcia „Sozialer Rechtsstaat”, oznaczającego socjalne
      państwo prawne. Norma ta stała się zresztą wzorcem dla powojennej Europy
      Zachodniej i była stosowana w regulacjach najpierw EWG, a obecnie UE. Jest
      też zalecana w podpisanych przez Polskę paktach praw socjalnych. W Komisji
      w istocie nie toczył się spór ani o zasadę państwa prawnego, ani o zasadę
      państwa socjalnego, bo jet ona na gruncie parlamentarnym przez większość
      akceptowana, lecz o sposób jej ujęcia. Zasada ta przesądza bowiem o
      socjalnym, a nie liberalnym charakterze państwa i można ją kojarzyć z
      solidaryzmem społecznym. Spierano się zaś o to, czy państwo polskie ma się
      tą zasadą „kierować”, czy ją „urzeczywistniać”. Parlamentarzyści z Unii
      Wolno obawiali się, że to ostatnie sformułowanie jestzbyt kategoryczne,
      może się więc okazać w naszej sytuacji gospodarczej niewygodne dla władzy
      i szkodliwe dla gospodarki. Poseł Jan Maria Rokita zgłaszał obawy, czy na
      tej podstawie obywatele nie będą mogli kiedyś wnosić do sądów skarg o to,
      że państwo czegoś nie spełnia, a Trybunał Konstytucyjny nie będzie mógł
      kwestionować kwot zawartych w ustawie budżetowej. Obawy te starał się
      rozwiewać ekspert Komisji, profesor Kazimierz Działocha, wskazując jednak,
      że przyjęcie takiej fundamentalnej normy nie powinno pozostać bez wpływu
      na katalog praw obywatelskich, a w tym praw socjalnych, oraz na
      ustawodawstwo. Niektórzy inni eksperci, na przykład profesor Wiktor
      Osiatyński, podtrzymywali w pewnej mierze obawy, że takie sformułowanie
      może okazać się niebezpieczne.
    </p>
    <p class="bold">Dobro wspólne</p>
    <p>
      Zasada solidaryzmu społecznego i sprawiedliwości społecznej wiąże się też
      z art. 2 projektu: „Rzeczpospolita Polska jest dobrem wspólnym wszystkich
      obywateli”. Na bogatą treść tego artykułu i konsekwencje, jakie można stąd
      wyciągać, wskazywał ekspert prezydenta doktor Władysław Kulesza. Większość
      członków Komisji opowiedziała się za art. 3, stanowiącym, że
      „Rzeczpospolita Polska jest państwem jednolitym i niepodzielnym”.
      Przeciwnicy tego artykułu twierdzili, że może on wskazywać na nasze
      narodowe kompleksy, które obecnie nie mają uzasadnienia (Irena Lipowicz —
      UW). Argumentowano także, że mogłyby stąd wynikać utrudnienia dla
      uczestnictwa w euroregionach. Zwolennicy tego artykułu, do których
      zaliczał się m.in. Ryszard Bugaj (UP), uważali jednak, że konstytucję
      pisze się na długie lata i choć Polsce nie grozi obecnie podział
      terytorialny, taki artykuł w konstytucji „będzie dodatkową barierą przed
      zbytłatwym przekraczaniem pewnych granic”.
    </p>

    <p class="bold">Zwierzchnictwo narodu</p>

    <p>
      Po tych trzech artykułach charakteryzujących państwo w art. 4 Komisja
      postanowiła zawrzeć zasadę zwierzchnictwa narodu: „Władza zwierzchnia w
      Rzeczypospolitej Polskiej należy do ogółu obywateli — tworzących Naród,
      który sprawuje ją przez swoich demokratycznie wybranych przedstawicieli
      lub bezpośrednio”. Spór toczył się o to, czy skoro mowa o „demokratycznie
      wybranych przedstawicielach”, należy wymienić wyraźnie, że chodzi o Sejm i
      Senat. Ostatecznie zrezygnowano z tego, aby nie powodować komplikacji.
      Mogą tu wchodzić w grę również samorządy, a przede wszystkim prezydent.
      Przyjęto też art. 5, który mówił, że swą zwierzchnią władzę naród sprawuje
      „za pośrednictwem jawnie finansowanych partii politycznych, działających w
      ramach porządku konstytucyjnego Rzeczypospolitej Polskiej . Choć partie —
      jak podkreślali eksperci— są niezbędnym elementem systemu demokratycznego,
      artykuł ten już po uchwaleniu okazał się zbyt kategorycznie sformułowany.
      Zachodziła obawa, że narusza on prawo do wolności zrzeszania się I prawa
      osób bezpartyjnych. Przeprowadzono więc reasumpcję głosowania, eliminując
      te błędy. Michał Drozdek z Solidarności” proponował, aby zawrzeć w
      konstytucji wyraźny zakaz działania partii nazistowskich 1
      komunistycznych. „Czy chodzi o nazwę, czy o treść?”, „Czy oznaczałoby to
      delegalizację SdRP?” — pytał Jerzy Wiatr (SLD). „Nie ma obawy, dopóki SdRP
      nie stosowałaby metod charakterystycznych dla partii rządzących w dawnych
      czasach” — odpowiadał Drozdek. Jego propozycja nie została jednak
      przyjęta.
    </p>
    <p class="bold">Cele państwa</p>
    <p>
      Artykuł 6 określa cele państwa. Udało się uzgodnić, że „Rzeczpospolita
      Polska strzeże niepodległości i nienaruszalności swojego terytorium,
      gwarantuje wolności i prawa człowieka, zapewnia bezpieczeństwo obywateli,
      strzeże dziedzictwa narodowego oraz zapewnia ochronę Środowiska, kierując
      się zasadą zrównoważonego rozwoju”. Zasady legalizmu i konstytucjonalizmu
      zostały zapisane w dwóch kolejnych artykułach. Pierwsza z nich mówi, że:
      „Wszystkie organy władzy publicznej działają na podstawie i w granicach
      prawa”. O ile bowiem obywatele mogą czynić wszystko to, czego prawo nie
      zabrania, o tyle organ państwowy musi mieć zawsze podstawę prawną dla
      swych poczynań. Najwyższym prawem w Rzeczypospolitej Polskiej jest
      konstytucja. Jej przepisy stosuje się bezpośrednio, chyba że konstytucja
      stanowi inaczej. Problem bezpośredniego obowiązywania norm konstytucyjnych
      wywołał żywą dyskusję. Zgłaszano obawy przed konsekwencjami takiego
      rozumienia praw Socjalnych, zapisanych w dalszej części projektu. Stąd w
      artykule tym znalazł się dopisek uwzględniający to, że projekt konstytucji
      realizację wielu praw odsyła do ustaw zwykłych.
    </p>
    <p class="bold">Kłopoty z trójpodziałem</p>
    <p>
      Po burzliwej dyskusji Komisja Konstytucyjna przyjęła klasyczną formułę
      trójpodziału władz. Sformułowanie zaproponowane przez posła Jerzego
      Ciemniewskiego (UW) umieszczono w art. 10. Brzmi ono następująco: „Ustrój
      Rzeczypospolitej Polskiej opiera się na podziale i równowadze władzy
      ustawodawczej, władzy wykonawczej i władzy sądowniczej . Do takiego
      rozwiązania Komisja doszła po reasumpcji poprzedniego głosowania w tej
      sprawie. Wątpliwości nie budziła sama zasada trójpodziału, lecz sposób jej
      wyrażenia. Początkowo przyjęto, że trójpodział realizuje się w ten sposób,
      iż „organami Rzeczypospolitej Polskiej w zakresie władzy ustawodawczej są
      Sejm i Senat, w zakresie władzy wykonawczej — Rada Ministrów, w zakresie
      władzy sądowniczej — niezależne i niezawisłe sądy i trybunały”. Przyjęcie
      takiego rozwiązania pozostawiałoby poza nawiasem urząd prezydenta. Błąd
      ten próbowano naprawić przez dodanie następnego artykułu, który brzmiałby:
      „Prezydent jest gwarantem ciągłości władzy”. Za przyjęciem takiego
      kierunkowego rozstrzygnięcia na poprzednim posiedzeniu Komisji opowie93
      działo się 40 jej członków. Za tym, aby uznać, że "prezydent stoi na czele
      władzy wykonawczej , jedynie trzech. Od zamiaru takiego odwiódł Komisję
      profesor Michał Pietrzak, argumentując, że oznaczałoby to stworzenie nowej
      zasady, którą trzeba by nazwać czwórpodziałem władz, a która nie jest
      jeszcze bliżej znana konstytucjonalistom. W rozdziale dotyczącym zasad
      ogólnych zostało jeszcze do uchwalenia kilka artykułów. Najtrudniej będzie
      uzgodnić formułę relacji między państwem a Kościołem.
    </p>
  </div>

  <div class="press-article">
    <div class="article-metadata">
      <p class="newspaper">„Słowo. Dziennik Katolicki”</p>
      <p class="date">15 lutego 1995 r.</p>
      <p class="title">Konstytucja — spór o kulturę</p>
      <p
        class="subtitle"
        title="Walerian Piotrowski był przewodniczącym Komisji Konstytucyjnej
        Zgromadzenia Narodowego, składającej się z posłów I kadencji i senatorów
        II kadencji, w latach 1991-1993 [przyp. wydawcy].">
        Rozmawiamy z mec. Walerianem Piotrowskim, byłym senatorem RP,
        przewodniczącym Komisji Konstytucyjnej I kadencji Sejmu RP*
      </p>
      <p class="author">Romana Brzezińska</p>
    </div>

    <p class="bold">
      Panie mecenasie, czy w momencie, kiedy Polska przeżywa głęboki kryzys
      rządowy, kiedy bez przerwy jesteśmy bombardowani informacjami o różnej
      rangi wydarzeniach i skandalach politycznych warto mówić o podstawach ładu
      państwowego III Rzeczypospolitej.
    </p>
    <p>
      Oczywiście, tym bardziej że od kilku lat toczy się w Polsce spór o
      podstawy, na jakich ma być budowane państwo. Czy ma ono być oparte o prawo
      stanowione przez demokratyczną większość, czy też ma to być państwo
      demokratyczne, respektujące prawo naturalne, które ma być przed czy ponad
      państwem.
    </p>
    <p class="bold">
      Prace nad nową Konstytucją RP trwają, nic jeszcze nie jest przesądzone,
      ale stała się już rzecz jedna — Komisja Konstytucyjna parlamentu
      postanowiła, że ustawa zasadnicza nie będzie zawierała ani inwokacji, ani
      preambuły. Jak pan senator ocenia tę decyzję?
    </p>
    <p>
      Myślę, że jest w niej zawarta myśl, iż III Rzeczpospolitą trzeba urządzić
      inaczej, niż to wynika z polskiej tradycji. Tak jak do niedawna chciano
      ukształtować nowego, socjalistycznego człowieka, tak teraz wielu obecnych
      parlamentarzystów uważa, że trzeba zbudować nowe państwo, rządzone
      wyłącznie zasadą demokratycznej większości, odwołujące się do humanizmu
      laickiego. Państwo nie odwołujące się ani do tradycji narodowej, ani
      religijnej. Postanowienie Komisji Konstytucyjnej, iż przyszła Konstytucja
      RP nie będzie zawierała wezwania Imienia Bożego ani preambuły
      historyczno-religijno-patriotycznej oznacza budowanie ładu państwa
      przeciwko narodowi.
    </p>

    <p class="bold">
      Nie wiadomo jeszcze jaką decyzję podejmie Zgromadzenie Narodowe, jeżeli
      ono będzie w tym składzie uchwalać Konstytucję, ale można przypuszczać, że
      zdanie większości posłów i senatorów będzie analogiczne jak Komisji
      Konstytucyjnej...
    </p>
    <p>
      Boję się, że projekt zawierający preambułę może liczyć na kilkanaście
      głosów. Znakomita większość parlamentarzystów z SLD, PSL, Unii Wolności
      czy Unii Pracy, głosować będzie za pominięciem w Konstytucji wezwania
      Imienia Bożego i preambuły, dlatego, że w projektach, które je zawierają,
      mówi się o chrześcijańskim charakterze polskiej kultury, o
      chrześcijańskiej tożsamości polskiego narodu. Sądzę, że tak należy
      prognozować wynik głosowania. Pamiętajmy, że inwokacji nie zawierają —
      projekty Unii Wolności, Pana Prezydenta, PSL, Unii Pracy i SLD, a projekt
      PSL oparty jest na liberalno-laickiej koncepcji państw. I preambułę, i
      inwokację — wezwanie Imienia Bożego — zawierały projekt senacki z 1991
      roku, później projekt PC, obywatelski projekt „Solidarności , w innej
      formie niż dwa poprzednie i dwa projekty pozaparlamentame — „Przymierza
      dla Poli Stronnictwa Narodowo-Demokratycznego. Mamy w historycznej
      pamięci, że tego rodzaju preambułę — zawierającą wezwanie Imienia Bożego i
      określenie zespołu wartości, które państwo chce respektować — zawierała
      Konstytucja 3 Maja i pierwsza po odzyskaniu niepodległości — Konstytucja
      Marcowa.
    </p>
    <p class="bold">
      Dostrzegając już pierwsze symptomy poważnego sporu wiele osób, nawet o
      katolickiej proweniencji, uważało, że może trzeba z tych dwóch elementów
      Konstytucji zrezygnować, w zamian, by nie wzbudzać nowego konfliktu,
      próbować mocno osadzić zasady konstytucyjne w prawie naturalnym...
    </p>
    <p>
      —Rzeczywiście — twierdzono, że jeśli polska Konstytucja wyraźnie odwoła
      się do ONZ-owskiej Deklaracji Praw Człowieka z 1948 roku, która
      jednoznacznie uznaje, iż wszystkie narody Świata zobowiązane są
      respektować rozpoznane w tej deklaracji prawa człowieka wywodzące się z
      jego godności, z prawa natury, nie pochodzące od ustawodawcy państwowego,
      nie będące wynikiem negocjacji międzynarodowych, to uda się uniknąć
      sporów. Szybko jednak okazało się, że inkorporowanie ONZ-owskiej
      deklaracji do polskiej Konstytucji nie zamyka różnej interpretacji.
      Szczególne wyraźnie można było to dostrzec w debacie o zakres ochronyżycia
      ludzkiego.
    </p>

    <p class="bold">
      Społeczność katolicka powinna więc pańskim zdaniem bronić prawa do
      umieszczenia w nowej Konstytucji i inwokacji, i preambuły?
    </p>
    <p>
      Jeżeli chcemy, by ład konstytucyjny, ład prawny naszej ojczyzny oparty był
      na niezmiennych zasadach konstytucyjnych, to trzeba te zasady dokładPrasa
      o pracach konstytucyjnych nie określić, według kultury narodu. Jeżeli
      polska kultura narodowa jest kulturą chrześcijańską, to nie można budować
      państwa polskiego odrywając go od korzeni. Tym bardziej po tym, co się
      stało w 1939 roku i w latach następnych, po latach dominacji
      komunistycznej, wrogiej kulturze narodu. Rzeczpospolita jest państwem
      narodu polskiego — nie mówię tego w sensie nacjonalistycznym. Państwo jest
      emanacją narodu polskiego. Jeśli ten naród jest w swojej kulturze
      chrześcijańskiej to nie można budować państwa, które by ten fakt
      ignorowało. Oznaczałoby to bowiem budowanie ładu państwa przeciwko
      narodowi. To jest także uzasadnienie, że nie można aprobować w nowej
      Konstytucji zasady oddzielenia Kościoła od państwa. Wówczas myśli się o
      państwie tylko jako o strukturze władzy. Tymczasem państwo, to przede
      wszystkim naród i terytorium, dopiero później struktura władzy służąca
      narodowi zorganizowanemu w państwo. Jeżeli tak jest, to nie można stawiać
      cezury między strukturami władzy a narodem, ponieważ byłoby to sztuczne
      cięcie, które tworzy warunki do takiej emancypacji, takiego odejścia
      władzy od narodu, które może zagrażać autokratyzmem, nowym totalitaryzmem.
      Nie będzie się on już powoływał na marksizm, ale będzie czerpał swoją
      żywotną siłę z laickiej koncepcji człowieka. Jeżeli więc nie chcemy tego
      odcięcia władzy od narodu, musimy się opowiedzieć za wezwaniem w
      Konstytucji Imienia Bożego i za preambułą historyczną. e
    </p>
    <p class="bold">
      Ani preambuła, ani inwokacja nie mają jednak charakteru normatywnego...
    </p>
    <p>
      Konstytucja powinna być aktem politycznym, ale nie ma takiej konstytucji,
      która poprzestałaby na zapisach jurydycznych. Konstytucja jest przecież
      także pewną wartością, do ktorej powinny odnosić się myśli i czyny
      obywateli. Czy konstytucja, która nie będzie zawierała odniesienia do
      dziejów, nie będzie odwoływała się do Boga jako Najwyższego Prawotwórcy
      (co dla wielu Polaków jest prawdą, którą wyznają), zdolna będzie poruszyć
      serca, będzie zdolna sprawić, że Polacy staną się współuczestnikami tego,
      co się w państwie dzieje? Dzisiaj, kiedy doznajemy powszechnego zaniku
      postaw patriotycznych, jest to przeniesienie historycznego stosunku, jaki
      Polacy mają do Konstytucji 3 Maja na to, co ma się dziać w przyszłości.
      Nie wolno nam pozbawiać się w przyszłej Konstytucji RP tego, co stanowi
      zabezpieczenie przed nadużyciem władzy.
    </p>
    <p class="bold">
      Obawiam się, że nawet pozostawienie inwokacji w nowej Konstytucji niewiele
      zmieni, jeśli nie zmieni się obyczaj polityczny, a to jest, jak widzimy,
      proces długotrwały...
    </p>
    <p>
      Wezwanie Imienia Bożego nie ma być dekoracją historyczną, wyniesioną z
      lamusa, ale ma być zobowiązaniem. Myślę, że ludzie dobrej woli, nawet
      jeśli nie podzielają wiary w Boga, dostrzegą, iż wezwanie Imienia Bożego
      jest gwarantem tego, że ich najbardziej podstawowe prawa będą szanowane 1
      że dla tych, którzy nie wierzą w Boga to odniesienie do zasady istniejącej
      ponad państwem uniemożliwi ograniczenie ich praw — wolności, wyznania i
      sumienia.
    </p>
    <p class="bold">Dziękuję za rozmowę.</p>

  </div>
  <div class="press-article">
    <div class="article-metadata">
      <p class="newspaper">„Czas Krakowski”</p>
      <p class="date">15 lutego 1995 r.</p>
      <p class="title">Konstytucja to 1000 lat historii państwa</p>
      <p class="subtitle">
        Rozmowa z dr. Andrzejem Smirnowem, współautorem Obywatelskiego Projektu
        Konstytucji
      </p>
      <p class="author">Rozmawiał Henryk Szewczyk</p>
    </div>
      <p class="bold">Prawicowi krytycy solidarnościowego projektu konstytucji zarzucają mu
      syndykalizm i socjalistyczne ciągoty. Co Pan na to?</p>
      <p>Owszem, w projekcie konstytucji „Solidarnoznalazły się pewne elementy, które są ważne dla
      związku zawodowego, ale co w tym dziwnego? W końcu projekt był przedłożony
      przez Komisję Krajową „S”. Jednak te elementy absolutnie nie nadają naszej
      konstytucji syndykalistycznego charakteru. Pewne szczególne uprawnienia
      dla reprezentacji pracowniczych tam się znalazły, ale to nie są
      kwestieściśle ustrojowe. To są takie sprawy, jak przede wszystkim
      zasięganie opinii związanej z budżetem państwa, co oznacza zasięganie
      opinii nt. wtómego podziału dochodu państwa. To jest w pełni uprawnione.
      My nie uzurpujemy sobie prawa rozstrzygania o tym. Od tego jest parlament;
      proponujemy w naszej konstytucji normalną procedurę demokratyczną. W
      projektach wysuwanych przez inne ugrupowania prawicowe znalazły się
      elementy, które my mogliby-śmy atakować z innych pozycji. Nie ulega
      wątpliwości, że mówiąc o prawicy trzeba doprecyzować, o co chodzi.
      </p>
      <p class="bold">Zatem o co chodzi?</p>
      <p>My rozumiemy to w taki sposób: to, co nas wszystkich łączy na
      prawicy, to są pewne wartości, nawiązanie do tradycji, to jest pewne
      wyobrażenie państwa niepodległego. Natomiast różnimy się w jakimś stopniu
      co do rozstrzygnięć w kwestiach gospodarczych i społecznych. Dlatego
      często mówimy o tzw. centroprawicy. Nasz projekt konstytucji został oparty
      na katolickiej nauce społecznej. Oznacza to, że z jednej strony odrzucamy
      wszechpotężne państwo socjalne, opiekuńcze, ale z drugiej — wyznaczamy mu
      rolę pomocniczą. Chcemy, aby pewne rozwiązania systemów społecznych były
      przez państwo gwarantowane, żeby niektóre kwestie społeczne państwo miało
      obowiązek rozwiązywać, ale nie w taki sposób, jak to się działo w minionym
      półwieczu. Dlatego w przepisach wprowadzających piszemy np. o reformie
      systemu ubezpieczeń społecznych, o uzupełniającym, zdecentralizowanym
      systemie ubezpieczeń zdrowotnych etc. To jest całkowicie zgodne z tym, co
      głoszą encykliki papieskie.</p>
      <p class="bold">Kaczyński, Hall i inni ze wstrętem mówią o
      zbytnio rozbudowanym — ich zdaniem — katalogu praw socjalnych i
      ekonomicznych w solidarnościowym projekcie konstytucji.</p>
      <p>To też chybiony zarzut. My tam nie zapisaliśmy prawa do pracy, natomiast zdecydowanie
      chcemy, aby polityka państwa zmierzała do możliwie pełnego, produktywnego
      zatrudnienia. Zresztą, my pracy nie traktujemy jak towaru, co też wynika
      ze społecznej nauki Kościoła. W tym sensie oczywiście ta konstytucja
      odbiega od pewnych liberalnych rozwiązań gospodarczych, lecz my tam
      równocześnie bardzo ściśle staramy się określić obszar, w jakim państwo
      się porusza. Np. w „Zasadach Naczelnpodkreślamy, że źródłem bogactwa
      państwa jest praca, ale tam również bronimy własności prywatnej, prawa
      dziedziczenia i mówimy, że ustrój gospodarczy państwa oparty jest na
      gospodarce rynkowej i solidarności społecznej. Te dwa elementy powinny być
      nierozdzielnie związane w państwie, którego wizję tworzymy.</p>
      <p class="bold">Parlamentarna Komisja Konstytucyjna zrezygnowała z preambuły, obecnej m.in. w
      obywatelskim projekcie ustawy zasadniczej. Dlaczego preambuła jest tak
      ważna?</p>
      <p class="bold">Przede wszystkim dlatego, że mamy bardzo skomplikowaną historię,
      zwłaszcza w ostatnich dziesięcioleciach. Państwo polskie po II wojnie
      światowej istniało, chociaż nie było suwerenne. Teraz ważne jest to, do
      czego my nawiązujemy. Tutaj występuje wyraźny podział i to nas różni od
      postpeerelowskich elit tworzących obecną konstytucję. My uważamy, że
      Polska nie zaczęła się w tej chwili ani w 1989 r., ani w 1945 r., tylko
      sięga swoimi korzeniami 1000 lat wstecz i to wszystko w preambule piszemy.
      Nawiązujemy w niej do I Rzeczypospolitej, do Konstytucji 3 Maja, do walki
      o wolność, wreszcie do okresu międzywojennego — II Rzeczypospolitej.
      Jednym słowem, stawiamy fundament III Rzeczypospolitej na naszych bogatych
      tradycjach i doświadczeniach. Mało tego — uważamy, że nasza cała kultura
      oparta jest na wierze i na tradycji chrześcijańskiej i w takich warunkach
      się rozwijała. Niestety, są Środowiska, zwłaszcza w parlamencie, które
      chciałyby to wszystko odrzucić i to jest bardzo niebezpieczne. Wprawdzie
      preambuła nie ma znaczenia prawnego, ale w końcu wszechstronny rozwój
      państwa również bazuje na fundamencie przeszłości.</p>
      <p class="bold">Nie ma tu miejsca na szczegółowe roztrząsanie solidarnościowego projektu konstytucji, ale
      dlaczego ostatni jego rozdział zatytułowany „Przepisy wprowadzające” jest
      tak długi?</p>
      <p>Uważamy, że aby Polska mogła się stać państwem prawa, trzeba
      wpierw wiele spraw uregulować. A więc jest tam mowa o odbudowie niektórych
      instytucji, np. instytucji sędziego Śledczego, kasacji czy też wspomnianej
      gruntownej reformie systemu ubezpieczeń społecznych, który się w tej
      chwili zupełnie zawalił. W tym rozdziale proponujemy ponadto przepisy
      dotyczące restytucji obywatelstwa polskiego. Proponujemy jeszcze, żeby
      archiwa UB i SB z lat 1945-89 zostały przekazane do Instytutu Pamięci
      Narodowej, podobnego do niemieckiego Instytutu Gaucka i aby każdy obywatel
      miał dostęp do tych dokumentów. Chcemy także powołać komisję badania
      zbrodni stalinowskich i poddać weryfikacji sędziów pod względem
      przestrzegania przez nich zasady niezawisłości. Nie zapomnieliśmy o
      przepisach stwierdzających, że powszechne uwłaszczenie w ramach
      prywatyzacji mienia państwowego zostaje poprzedzone ustawą
      reprywatyzacyjną. Trzeba po prostu wiele spraw postawić z głowy na nogi.
      Zanim to się stanie, nie ma co tumanić narodu sloganami o państwie prawa.</p>
      <p class="bold">
      Czy autorzy solidarnościowej konstytucji dopuszczają, w toku prac nad
      ostateczną wersją ustawy, kompromis z innymi projektami?</p>
      <p>Konstytucja w swoim ostatecznym kształcie będzie się rodziła w parlamencie. W związku z
      tym, będzie ona tam poddana dalszej obróbce legislacyjnej, będą się
      toczyły spory nt. określonych zapisów itd. Naturalnie, chcielibyśmy, aby
      ostateczny projekt >który powstanie w parlamencie, przyjmował naszą wizję
      państwa. Nie jest najważniejsze, czy poszczególne zapisy naszego projektu
      przetrwają w obecnej postaci, czy też zostaną trochę zmienione. Nam chodzi
      o ogólny kształt państwa, o pewną filozofię państwa. Trzeba tu dodać, że
      pod Obywatelskim Projektem Konstytucji podpisało się półtora miliona osób.
      Dlatego nie jesteśmy uprawnieni do daleko idących kompromisów.
      Społeczeństwo polskie wypowie się w referendum konstytucyjnym, które w tej
      chwili jest ważniejsze od jakichkolwiek wyborów, bo to rozstrzygnie o
      przyszłości Polski na długie dziesięciolecia.
    </p>
  </div>
  <div class="press-article">
    <div class="article-metadata">
      <p class="newspaper">„Rzeczpospolita”</p>
      <p class="date">17 lutego 1995 r.</p>
      <p class="title">
        Rada Strategii Społeczno-Gospodarczej:
        <br />
        Za mało gospodarki w konstytucji
      </p>
      <p class="author">Krzysztof Grzegrzółka</p>
    </div>
    <p class="bold">
      Przyszła konstytucja powinna mieć charakter umowy społecznej. Należy w
      niej zagwarantować prawo do pracy, a rząd powinien zdawać sprawozdanie z
      tego, co zrobił dla złagodzenia bezrobocia. Niezbywalna jest też w
      przyszłej ustawie zasadniczej deklaracja sprawiedliwości społecznej. W
      przedstawionych projektach za mało jest podmiotowości pracowników. Takie
      głosy w dyskusji nad kształtem gospodarczej części przyszłej konstytucji
      przeważały wśród uczestników wczorajszego posiedzenia Rady Strategii
      Społeczno-Gospodarczej.</p>
      <p>W opinii profesora Wacława Wilczyńskiego, we
      wszystkich siedmiu projektach konstytucji, przedłożonych Komisji
      Konstytucyjnej Zgromadzenia Narodowego, jest akcentowana wolność
      działalności gospodarczej, jednak z ograniczeniami motywowanyrmi
      „,interesem publicznym” lub „dobrem ogólnym”. Praca i własność są
      wymieniane obok wolności jako cechy określające ustrój. Własność występuje
      jednak najczęściej bez przymiotników „prywatna” lub „publiczna ”.
      Akcentowana bywa natomiast własność komunalna. Większość projektów
      podkreśla konieczność praworządnego wywłaszczenia w sytuacjach, które tego
      wymagają. Jednak tylko projekt Senatu I kadencji podkreśla konieczność
      „niezwłocznego” odszkodowania. Troska o spadkobierców jest najsilniej
      akcentowana w projekcie SLD, gdzie postuluje się niski podatek spadkowy.
      We wszystkich projektach przewiduje się prawo do strajku i do zabezpieczeń
      społecznych. Najdalej w uprzywilejowaniu pracowników idzie projekt SLD,
      który nie przewiduje zrzeszeń pracodawców. Większość projektów ustawy
      zasadniczej postuluje przestrzeganie zasady równowagi budżetowej i
      obowiązek wskazywania pokrycia zwiększonych wydatków i zmniejszonych
      dochodów. W przypadku nieuchwalenia budżetu w ustawowym terminie większość
      projektów przewiduje finansowanie na podstawie projektu budżetu. Tylko dwa
      projekty opowiadają się za ograniczeniem wydatków do przewidzianych w
      zeszłorocznym budżecie. Wszystkie projekty wyłączają sprawy podatków i
      budżetu z ewentualnego referendum, a także akcentują konieczność
      ustawowego przyzwolenia na zaciąganie przez państwo kredytów i zgody na
      decyzje zwiększające dług publiczny. Niektóre projekty nawiązują do
      tradycji z okresu II Rzeczypospolitej i eksponują potrzebę powołania
      prokuratorii generalnej do ochrony interesów Skarbu Państwa. Projekt
      senacki proponuje regulację takich dziedzin, jak system
      kredytowo-pieniężny, finanse publiczne i budżet, zasady systemu bankowego,
      zarządzanie mieniem Skarbu Państwa itd. przez uchwalenie odrębnych ustaw.
      Według projektu KPN, Skarb Państwa powinien integrować całość gospodarki i
      finansów państwa. Wszystkie projekty skupiają się na sprawach procedur
      powoływania prezesa NBP, mniej zaś na obowiązkach NBP dotyczących np.
      kształtowania stabilności stosunków pieniężnych. Jedynie projekt SLD uważa
      bank centralny za wykonawcę polityki monetarnej. Niestety, projektodawcy
      nie wymieniają, czyjej. W kilku projektach usiłuje się włączyć do ustawy
      zasadniczej postulaty reform ubezpieczeń społecznych, reprywatyzację i
      powszechne uwłaszczenie włącznie z terminami ich załatwienia. W niektórych
      projektach proponuje się nie tylko udział pracowników w zarządzaniu
      przedsiębiorstwem, lecz także obowiązek informowania pracowników o
      sytuacji ekonomicznej i finansowej przedsiębiorstwa. Przewodniczący rady,
      prof. Jan Mujżel, powiedział, że w opracowywanej konstytucji państwa
      należy precyzyjnie określić nie tylko docelowy ustrój
      społeczno-gospodarczy Polski, lecz także relacje między rządem a
      gospodarką. Według niego, w obecnym projekcie konstytucji „sprawy
      gospodarki kraju są potraktowane bardzo marginalnie”. Przedstawiciel BCC
      Jeremi Mordasewicz przypomniał, że ponad 2 mln ludzi w Polsce pracuje na
      własny rachunek, tymczasem proponowane projekty ustawy zasadniczej w
      większości nadal przypominają „konstytucję ludu pracującego”. J.
      Mordasewicz wskazał, że w proponowanych zapisach konstytucyjnych
      dotyczących gospodarki brakuje równowagi w traktowaniu klasy
      przedsiębiorców i klasy pracobiorców. Powiedział, że aczkolwiek wątpliwe
      jest wypracowanie jednorodnego stanowiska obecnej rady w sprawie
      konstytucji, to jednak rada ta może jeszcze odegrać pozytywną rolę przy
      konstruowaniu ustawy zasadniczej.
    </p>
  </div>
</div>

<Footer />
