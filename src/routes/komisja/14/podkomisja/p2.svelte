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

<div class="flex justify-between pt-4 pb-8 mb-8 border-b">
  <div>
    <h1 class="text-2xl font-thin" in:fly={{ x: -50, duration: 1000 }}>
      Obrady w dniu 22 lutego 1995 r. - podkomisja cz. II
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
    <a rel="prefetch" href="/komisja/14/podkomisja/p1">
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
    <!-- <a rel="prefetch" href="/komisja/14/prasa">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img"     </a> -->
  </div>
</div>
<div in:fly={{ y: 100, duration: 1000 }}>
  <div class="text-xl leading-relaxed text-justify protocol">

    <div class="flex speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Do tej fazy proponowałbym przejść jeszcze nie teraz. Chciałbym
        zaproponować pewne sformułowanie, ale po dyskusji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        O ile pamiętam, to w projekcie posła W. Cimoszewicza sprawy te są
        umieszczone w jednym ustępie, są one ukryte.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie ma zasadniczego sprzeciwu wobec uwzględnienia w osobnym ustępie
        tylko Kościoła katolickiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LykoZachariasz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Rozumiem, że wszyscy z państwa mają ten tekst. Czy zastrzeżenie
        dotyczące ust. 1 jest jedynym zastrzeżeniem, czy są inne uwagi?
        Proponowałbym stworzyć rejestr zastrzeżeń, co nie oznacza, że zachęcam
        do ich wymyślania.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Rozumiem, że wniosek polegałby na skreśleniu ostatniego wyrazu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Tadeusz Mazowiecki (UW):</strong>
        Konstytucja ta była napisana wówczas, kiedy Hiszpania miała konkordat.
        Nie jestem pewien, czy nie ma tam innych artykułów regulujących sytuację
        prawną kościołów i związków wyznaniowych. Nie mam nic przeciwko
        przepisaniu tych artykułów z konstytucji hiszpańskiej.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Nie chcę ich przepisywać.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        przedstawicieli prezydenta. Według mnie nie jest to zawę- żenie zakresu
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jeżeli są nowe argumenty, to proszę je zgłaszać, a jeżeli nie, to
        spróbowałbym przedstawić spisane przeze mnie warianty, które zgłoszono w
        dyskusji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jest to język niekomunikatywny dla szerszej publiczności.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/DzialochaKazimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Szczególnie jak na rozdział I konstytucji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie użyłem określenia „zadań religijnych”. Przedstawiciel Sekretariatu
        Konferencji Episkopatu Polski, ks. prof. Józef Krukowski: Tak. Dziękuję
        bardzo. W takim razie pana popieram.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Co się uważa za wniosek czy projekt poprawki? Upierałbym się przy
        oddzieleniu od organów państwa, a nie od państwa.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jest teraz ten wniosek zgłoszony.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Ja to wyraziłem kilkadziesiąt minut temu. 100 m
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Uwagę przyjmuję z pokorą.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Naprawdę o tym już mówiłem.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Jak brzmiałaby ta poprawka?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        ,,...oddzielone od organów państwa... .
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Prosiłbym o opinię panów profesorów. Jaka jest różnica między
        oddzieleniem od państwa, a oddzieleniem od organów państwa?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        W kwestii formalnej. Prosiłabym o sprecyzowanie, czy jesteśmy w fazie
        ustalania końcowej wersji artykułu, która będzie poddana pod głosowanie,
        czy w fazie dyskusji, czy w fazie wyboru jednego z wariantów? Prosiłabym
        o sprecyzowanie tego z powodów czasowych.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Piotr Winczorek:</strong>
        Ciężki obowiązek zrzuca na mnie pan poseł.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Nie pierwszy raz.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/WinczorekPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/WisniewskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Leszek Wiśniewski:</strong>
        Potwierdzam, że chodzi tu o państwo w rozumieniu struktury politycznej,
        a nie socjologicznej. Jeśli to razi, to proponowałbym użycie tej samej
        formuły, którą zastosowano w ust. 1: „Kościoły i związki wyznaniowe są
        oddzielone od władz publicznych”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KozlowskiKrzysztof.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Krzysztof Kozłowski (KD):</strong>
        Wycofuję swoją propozycję.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Mogę zrezygnować z jakiejkolwiek próby poszukiwania kompromisu, ale
        wówczas będę popierał wariant I zawarty w projekcie podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Chodzi o ustawy. Przepraszam, to było moje przejęzyczenie. Moją intencją
        było tylko podzielenie ust. 4 na dwa, bez wprowadzania żadnych zmian w
        stosunku do wersji przedłożonej przez przedstawicieli kościołów.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Włodzimierz Cimoszewicz (SLD):</strong>
        Na jedno pytanie nie uzyskałem jeszcze odpowiedzi. Czy proponujący
        użycie sformułowania „swoich zadań” w odniesieniu do kościołów 4
        związków wyznaniowych zechcieliby je jednoznacznie i precyzyjnie zde
        finiować?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CimoszewiczWlodzimierz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LybackaKrystyna.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Krystyna Łybacka (SLD):</strong>
        Chcę wrócić do propozycji posła W. Cimoszewicza. O dwóch kwestiach niech
        rozstrzygnie Komisja Konstytucyjna, bo w pozostałych jest konsens.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Pewnie moim błędem było to, że uległem perswazji przewodniczącego
        Komisji Konstytucyjnej w sprawie poszukiwania formuły kompromisowej.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MazowieckiTadeusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/BugajRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Bugaj (UP):</strong>
        Myślę, że spróbowaliśmy zrobić to, co mogliśmy. Wracamy na posiedzenie
        plenarme Komisji Konstytucyjnej, bo musimy mieć chociaż kilka minut
        przerwy. Dziękuję bardzo za uczestnictwo. Zamykam posiedzenie.
      </p>
    </div>
  </div>
</div>
