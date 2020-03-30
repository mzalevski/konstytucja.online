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
  <title>Dzień 2 - Biuletyn nr 13</title>
</svelte:head>

<Nav segment={'info'} />

<div class="flex justify-between pt-4 pb-8 mb-8 border-b">
  <div>
    <h1 class="text-2xl font-thin" in:fly={{ x: -50, duration: 1000 }}>
      Obrady w dniu 8 lutego 1995 r. - cz. II
    </h1>
    <h5>
      <a
        class="text-sm font-bold tracking-wider text-gray-500 uppercase"
        href="https://drive.google.com/file/d/1G4mGATMKIpJhEEK67nL4msrsMc6UQICx/view?usp=sharing"
        rel="nofollow"
        target="_blank">
        ORYGINAŁ BIULETYNU
      </a>
      <svg class="inline w-4 h-4 ml-px fill-current" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9
          2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
      </svg>
    </h5>
  </div>
  <div class="small-article-nav">
    <a rel="prefetch" href="/komisja/13/2.1">
      <svg viewBox="0 0 256 512">
        <path
          fill="currentColor"
          d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4
          24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4
          9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
      </svg>
    </a>
    <a rel="prefetch" href="/komisja/13/3">
      <svg viewBox="0 0 256 512">
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
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wznawiamy obrady. Witam wszystkich państwa i raz jeszcze dziękuję
        marszałkowi Senatu oraz Kancelarii Senatu za udostępnienie nam tej sali,
        co traktujemy jako zaszczyt. Jest to jednocześnie duże ułatwienie w
        naszej pracy. Słowa podziękowania kieruję na ręce ministra W.
        Sawickiego. Proponuję najpierw wysłuchać pana ministra, który zapozna
        nas ze sposobem korzystania z kart do głosowania, bo zasada jest nieco
        inna niż na sali obrad plenarnych Sejmu.
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SawickiWojciech.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Szef Kancelarii Senatu, minister Wojciech Sawicki:</strong>
        System ten różni się tylko tym, że przed rozpoczęciem każdego głosowania
        będziecie musieli państwo nacisnąć dodatkowy przycisk, który nie
        występuje w aparaturze sejmowej. Jest to przycisk obecności. Czy wszyscy
        członkowie Komisji Konstytucyjnej dysponują kartami do głosowania?
        Sprawdzimy teraz obecność. Jest nas 31 osób, a więc jest qworum.
        Informuję, że teraz będziemy głosować nad wnioskami, które zgłoszono
        przed południem. Dylemat pierwszy dotyczy art. 4 projektu podkomisji,
        którzy brzmi: „Rzeczpospolita Polska jest Państwem jednolitym i
        niepodzielnym”. W dyskusji zarysowały się dwa stanowiska. Pierwsze, żeby
        ten przepis utrzymać a by był to art. 3 w naszym projekcie. Druga
        propozycja dotyczy usunięcia tego artykułu ze względu na to, iż w
        przepisach poświęconych samorządowi terytorialnemu wyczerpana jest
        merytoryczna zawartość tego artykułu. Głosować będziemy nad jego
        utrzymaniem. Przypominam, że zgodnie z opiniami ekspertów, jeżeli
        przepis ten miałby znaleźć się w konstytucji, to powinien być to art. 3.
        Kto jest za tym, aby osobny artykuł o przytoczonym brzmieniu znalazł się
        w konstytucji? Za wnioskiem głosowało 27 osób, przeciw — 511 osoba
        wstrzymała się od głosu. Przyjęliśmy, że ten artykuł powinien znaleźć
        się w konstytucji. Przechodzimy do kolejnego głosowania. Kto z członków
        Komisji Konstytucyjnej jest za ujęciem tego przepisu w art. 3 projektu
        konstytucji? Za umieszczeniem przepisu w art. 3 głosowało 21 osób,
        przeciw — 14 i nikt nie wstrzymał się od głosu. Przyjęliśmy następujące
        brzmienie art. 3: „Rzeczpospolita Polska jest Państwem jednolitym 1
        niepodzielnym”. Przechodzimy do kolejnego głosowania. Eksperci
        proponują, aby w art. 4 znalazły się kwestie dotyczące władzy
        zwierzchniej, czyli to, co jest treścią art. 6. Cele państwa, czyli to,
        co jest treścią art. 3 projektu podkomisji, byłyby umieszczone po art.
        10. Taka jest propozycja naszych ekspertów. Mamy następujący wybór: czy
        uważamy, że artykuł określający władzę zwierzchnią powinien poprzedzać
        artykuł mówiący o celach państwa czy odwrotnie? Proponuję głosowanie
        alternatywne. Kto z państwa jest za pierwszeństwem artykułu o władztwie
        nad artykułem o celach państwa? Odwrotne stanowisko będzie oznaczało, że
        państwo opowiadacie się za tym, żeby artykuł o celach poprzedzał artykuł
        o władztwie. Czy procedura jest jasna? Jest wniosek, żeby głosować po
        kolei wszystkie propozycje. W takim razie stawiam wniosek, kto jest za
        tym, aby — podzielając opinię części Komisji oraz ekspertów — artykuł
        dotyczący władzy zwierzchniej poprzedzał artykuł o celach państwa?
        Przystępujemy do głosowania. Kto jest za tym, aby artykuł dotyczący
        władztwa poprzedzał artykuł o celach państwa? 20 posłów i senatorów
        głosowało za tym, żeby artykuł określający zasady władzy zwierzchniej
        poprzedzał artykuł o celach państwa, 15 osób głosowało przeciw i 2 osoby
        wstrzymały się od głosu. Z tego wynika, że kolejny artykuł będzie
        bazował na art. 6 projektu podkomisji. Przechodzimy do propozycji
        związanych z art. 6.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Czy mogę zgłosić reklamację? Przypominam, że zgłosiłem propozycję
        poprawki i proponowałem, żeby zaraz po artykule formułującym zasadę
        zwierzchnictwa narodu przyjąć postanowienie formułujące zasadę
        praworządności i zasadę legalizmu. W wydrukowanym wczoraj katalogu
        poprawek nie dostrzegam tej propozycji. Konsekwencją mojej poprawki jest
        to, żeby po zasadzie zwierzchnictwa narodu była przyjęta zasada
        praworządności i legalizmu. Wnioskuję, żeby do katalogu spraw w tej
        chwili rozstrzyganych pan przewodniczący poddał również pod głosowanie
        moją poprawkę.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Pańska poprawka jest uwzględniona w dokumencie z 7 lutego pod nr. 10 i
        oczywiście będziemy o niej rozstrzygać. W tej chwili mówimy o art. 4
        finalizowanego przez nas projektu, ale opieramy się na art. 6 projektu
        podkomisji. Otrzymaliście państwo propozycje poprawek na oddzielnym
        druku. Mamy poprawki: senatora H. Rota, poseł K. Łybackiej i
        senaPosiedzenia Komisji Konstytucyjnej ZN tora P. Andrzejewskiego oraz
        dwie koncepcje: senator A. Grześkowiak i posła L. Moczulskiego.
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
        Rozumiem, że wniosek podkomisji będzie głosowany osobno, ponieważ
        propozycja poseł K. Łybackiej połączona jest z pkt. 2.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mamy następujące warianty, które będziemy głosowali po kolei. Jest
        projekt art. 6 w wersji przygotowanej przez podkomisję: „Władza
        zwierzchnia w Rzeczypospolitej Polskiej należy do ogółu obywateli —
        tworzących Naród, który sprawuje ją przez swoich demokratycznie
        wybranych przedstawicieli lub bezpośrednio”. W poprawce senatora H. Rota
        zamiast „ogółu obywateli” jest „Naród ”. Później jest propozycja poseł
        K. Łybackiej, z kolei wniosek senatora P. Andrzejewskiego, art. 2 w
        wersji zaproponowanej przez senator A. Grześkowiak, składający się z
        dwóch ustępów: „Ust. 1. Wszelka władza pochodzi od Narodu, który tworzy
        wspólnota obywateli polskich. Ust. 2. Naród sprawuje władzę przez
        demokratycznie wybranych przedstawicieli oraz przez referendum i
        obywatelską inicjatywę ustawodawczą ”. Następnie jest poprawka posła L.
        Moczulskiego: „Art. 4. Ust. 1. Władza w Rzeczypospolitej pochodzi od
        Narodu i należy do Narodu rozumianego jako ogół obywateli. Ust. 2.
        Obywatele sprawują ją za pośrednictwem organów państwowych i
        samorządowych. Ust. 3. Wszystkie władze państwowe i samorządowe działają
        w ramach prawa oraz mandatu zaufania udzielonego im drogą wyborów przez
        obywateli'. Rozumiem, że jest to zasada demokratycznego wyboru
        przedstawicieli. Na str. 4 druku z dnia / lutego jest propozycja posła
        J. Szymańskiego: „Ust. 1. W Rzeczypospolitej Polskiej władza zwierzchnia
        należy do Narodu. Ust. 2. Naród sprawuje władzę przez swoich
        demokratycznie wybranych przedstawicieli lub bezpośrednio”. Mamy siedem
        propozycji, które wymagają przegłosowania.
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
        Chciałbym przed głosowaniem zadać pytanie senatorowi P. Andrzejewskiemu,
        który jest autorem jednego z projektów. Byłbym skłonny poprzeć pańską
        propozycję, ale — w moim przekonaniu — jeżeli do konstytucji wprowadzamy
        pojęcie narodu, to właściwe byłoby jego zdefiniowanie. Czy pan senator
        przywiązuje do tego zasadnicze znaczenie, czy też dopuszczałby pan
        sformułowanie z projektu podkomisji: „ogół obywateli tworzących Naród”?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Jest to tożsame. Gdyby istniała konieczność uzupełnienia artykułu o taką
        definicję, to jestem skłonny ją zaakceptować, ponieważ odnośnie takiej
        definicji narodu panuje konsens.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Spędziliśmy 5 godzin na dyskusji nad tym zagadnieniem. Poseł W.
        Cimoszewicz nie był obecny, co rozumiem, ale w tej chwili nie możemy
        powtarzać dyskusji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Doprecyzowanie wniosków mieści się w formule głosowania. Czy są
        niejasności w sprawie tych propozycji? Nie ma wątpliwości. Proponuję
        głosowanie rozpocząć od artykułu zawartego w projekcie podkomisji.
        Rozumiem, że będziemy głosowali nad wszystkimi propozycjami. Gdyby
        okazało się, że różnice są niewielkie, to przegłosujemy ponownie te
        propozycje, które uzyskały największą liczbę głosów.
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
        Rozumiem, że jeżeli jeden z wniosków otrzyma bezwzględną większość
        głosów, to dalej nie ma co głosować.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Tak. Wniosek podkomisji: „Władza zwierzchnia w Rzeczypospolitej Polskiej
        należy do ogółu obywateli — tworzących Naród, który sprawuje ją przez
        swoich demokratycznie wybranych przedstawicieli lub bezpośrednio”. Kto
        jest za przyjęciem takiej propozycji? Za wnioskiem podkomisji głosowało
        15 posłów i senatorów, przeciwko — 20 i 2 wstrzymało się od głosu.
        Głosujemy teraz nad wnioskiem senatora H. Rota: „Władza zwierzchnia w
        Rzeczypospolitej Polskiej należy do Narodu, który sprawuje ją przez
        demokratycznie wybranych przedstawicieli lub bezpośrednio”. Kto jest za
        tym wnioskiem? Za wnioskiem głosowało 19 osób, przeciw — 15 14 osoby
        wstrzymały się od głosu. Rozumiem, że wniosek uzyskał wymaganą
        większość. W tym momencie możemy zakończyć procedurę głosowań nad
        wnioskami dotyczącymi tego artykułu. Zgodnie z wolą większości art. 4
        brzmi: „Władza zwierzchnia w Rzeczypospolitej Polskiej należy do Narodu,
        który sprawuje ją przez demokratycznie wybranych przedstawicieli lub
        bezpośrednio”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Proszę wyjaśnić mi kwestię proceduralną. Co decyduje o kolejności
        głosowań wniosków i poprawek? Zgłaszałam wczoraj poprawkę, która jest
        umiejscowiona bardzo daleko. Jeżeli taka będzie procedura, to nigdy nie
        będą miały szansy poprawki umieszczone tak daleko. Wydaje mi się, że w
        celu uniknięcia niejasności należałoby określić reguły umieszczania
        poprawek na liście. Wczoraj wystąpił ten sam problem. Nie wiem, dlaczego
        poprawka senatora H. Rota głosowana była w drugiej kolejności. Rozumiem,
        że propozycje podkomisji mają pierwszeństwo.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Możemy przyjąć kolejność głosowania zgodnie z kolejnością zgłaszania
        poprawek lub w porządku alfabetycznym. Przedstawiłem poprawkę senatora
        H. Rota na drugim miejscu ze względu na jej bliski związek merytoryczny
        z wnioskiem podkomisji. Mamy wolną wolę i każdy z nas głosuje zgodnie ze
        swoim przekonaniem. Bezwzględną większość głosów mogła uzyskać np.
        poprawka siódma.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Jerzy Madej (KD):</strong>
        Jaka jest gwarancja, że np. poprawka piąta nie uzyska 30 głosów? Skąd o
        tym wie pan przewodniczący? Skończył pan przewodniczący procedurę
        głosowania mówiąc, że druga poprawka uzyskała bezwzględną większość i
        dalej nie głosujemy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Powiedziałem tak dlatego że przed głosowaniem poseł R. Bugaj zadał
        pytanie, czy w momencie, kiedy jedna z poprawek uzyska bezwzględną
        większość głosów kończy się procedura głosowania. Ja to potwierdziłem.
        Informuję, że w naszym regulaminie zapisano, że uchwały podejmujemy
        większością głosów w obecności co najmniej połowy liczby członków
        Komisji. Ten warunek został spełniony.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        Nie można przyjąć takiej interpretacji. Byłaby ona ważna, gdyby każdy
        głosował za jedną opcją. Poseł R. Bugaj głosował „za” w pierwszym i w
        drugim głosowaniu. Takich osób było więcej, więc nie można przyjąć, że
        zadecydowała bezwzględna większość członków Komisji.
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
        Wyjaśniam, że uważałem, iż wszyscy postąpimy w następujący sposób:
        sporządzimy sobie hierarchię ważności poprawek. Tak postąpiłem 1 — jak
        sądzę — miałem do tego prawo. Pierwszą propozycję uważałem za najlepszą,
        a kolejną na drugim miejscu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        Nie można przyjąć takiej reguły.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Korzystam z uprawnień przewodniczącego Komisji. Przyjmujemy, że będą
        głosowania nad każdą ze zgłoszonych poprawek. Spośród dwóch poprawek,
        które uzyskają największą liczbę głosów dokonamy ostatecznego wyboru.
        Głosujemy nad każdą poprawką z tego względu, że mamy kłopot natury
        technicznej. Jest siedem głosowań i tylko trzy przyciski.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        Czy mogę z tych opcji wybrać cztery, które mi najbardziej odpowiadają?
        Określone reguły trzeba było ustalić od razu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Albo głosujemy nad meritum, albo organizujemy konkurs poprawek. Każdy
        chyba wie, jaką poprawkę uważa za najlepszą.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KrolMarian.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Marian Król (PSL):</strong>
        Nastąpiło pewne zamieszanie, więc proponuję powtórzyć głosowanie.
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Powtarzamy głosowanie według następującej zasady. Najpierw przedstawię
        wniosek podkomisji, później poddam pod głosowanie wnioski zgłoszone w
        dniu 7 lutego, a następnie w dniu 8 lutego. Potem b dziemy głosowali nad
        dwoma wnioskami, które uzyskają największe poparcie. One przejdą do
        rundy finałowej.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Zgodnie z art. 11 regulaminu Komisji Konstytucyjnej uchwały podejmowane
        są większością głosów, w obecności co najmniej połowy członków Komisji.
        Nie jest prawdziwy wymóg, że któraś z poprawek musi uzyskać co najmniej
        połowę głosów.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        Interpretacji posła J. Szymańskiego nie można przyjąć w tym głosowaniu,
        bo jest ono indykacyjne. Komisja nie podejmuje jeszcze uchwały.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Głosujemy indykacyjnie najpierw nad propozycją podkomisji, później nad
        wnioskami zgłoszonymi w dniu 7 lutego, następnie nad propozycjami
        przedstawionymi w dniu 8 lutego. Do rundy finałowej wejdą dwa wnioski,
        które uzyskają największą liczbę głosów. Proszę o powagę, czyli o
        głosowanie za wnioskami, z którymi państwo merytorycznie się zgadzacie.
        Kto jest za wnioskiem podkomisji? Za wnioskiem głosowało 21 osób,
        przeciw — 16 i 2 osoby wstrzymały się od głosu. Przechodzimy do
        głosowania nad propozycjami zgłoszonymi w dniu 7 lutego. Wniosek senator
        A. Grześkowiak zawarty jest w pkt. 4: „Art. 2. Ust. 1. Wszelka władza
        pochodzi od Narodu, który tworzy wspólnota obywateli polskich. Ust. 2.
        Naród sprawuje władzę przez demokratycznie wybranych przedstawicieli
        oraz przez referendum i obywatelską inicjatywę ustawodawczą”. Kto jest
        za wnioskiem senator A. Grześkowiak? Za wnioskiem głosowało 5 osób,
        przeciw — 28 i 5 osób wstrzymało się od głosu. Kto jest za przyjęciem
        wniosku posła L. Moczulskiego zawartego w pkt. 5: „Art. 4. Ust. 1.
        Władza w Rzeczypospolitej pochodzi od Narodu i należy do Narodu —
        rozumianego jako ogół obywateli. Ust. 2. Obywatele sprawują ją za
        pośrednictwem organów państwowych i samorządowych. Ust. 3. Wszystkie
        władze państwowe i samorządowe działają w ramach prawa oraz mandatu
        zaufania udzielonego im drogą wyborów przez obywateli ? Za wnioskiem
        głosowały 4 osoby, przeciw — 30 15 osób wstrzymało się od głosu. Pod nr
        10 jest wniosek posła J. Szymańskiego: „Art. 2. Ust. 1. W
        Rzeczypospolitej Polskiej władza zwierzchnia należy do Narodu. Ust. 2.
        Naród sprawuje władzę przez swoich demokratycznie wybranych
        przedstawicieli lub bezpośrednio”. Kto jest za przyjęciem tego wniosku?
        Posiedzenia Komisji Konstytucyjnej ZN Za przyjęciem wniosku głosowało 7
        osób, przeciw — 25 i 6 osób wstrzymało się od głosu. Przechodzimy do
        głosowania nad wnioskami z dnia 8 lutego. Kto jest za przyjęciem wniosku
        senatora H. Rota zapisanego w pkt. 5: „Art. 6. Władza zwierzchnia w
        Rzeczypospolitej Polskiej należy do Narodu, który sprawuje ją przez
        demokratycznie wybranych przedstawicieli lub bezpośrednio”? Za
        przyjęciem wniosku głosowało 22 posłów i senatorów, przeciw — 14 i 4
        wstrzymało się od głosu. Przechodzimy do wniosku poseł K. Łybackiej,
        który zawarty jest w pkt. 6: „Art. 6. Ust. 1. Władza zwierzchnia w
        Rzeczypospolitej Polskiej należy do ogółu obywateli — tworzących Naród.
        Ust. 2. Naród sprawuje władzę przez swoich przedstawicieli wybranych do
        Sejmu i Senatu lub bezpośrednio”. Kto jest za przyjęciem tego wniosku?
        Za wnioskiem głosowało 16 osób, przeciw — 19 15 osób wstrzymało się od
        głosu. Przechodzimy do przegłosowania wniosku senatora P.
        Andrzejewskiego z pkt. 7: „Art. 6. Ust. 1. Władza zwierzchnia w
        Rzeczypospolitej należy do Narodu. Ust. 2. Naród sprawuje ją przez swych
        przedstawicieli wybieranych do Sejmu i Senatu, powołanego w powszechnym
        głosowaniu Prezydenta Rzeczypospolitej, odpowiedzialny przed Sejmem Rząd
        oraz niezawisłe sądy. Ust. 3. Sprawowanie władzy następuje także poprzez
        wyrażenie woli w referendum oraz obywatelską inicjatywę ustawodawczą”.
        Kto jest za przyjęciem tego wniosku?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Poprawka w tej formie jest niezgodna z systemem konstytucyjnym, ponieważ
        inicjatywa ustawodawcza nie jest formą demokracji bezpośredniej, nie
        jest formą podejmowania decyzji. Chodzi mi o obywatelską inicjatywę
        ustawodawczą.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Takie rozwiązanie było przyjęte w pierwszym czytaniu przez Zgromadzenie
        Narodowe, nie było ono kwestionowane. W tej chwili nie jest uzasadnione
        kwestionowanie tej propozycji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Kto jest za przyjęciem poprawki senatora P. Andrzejewskiego? Za
        przyjęciem wniosku głosowały 4 osoby, przeciw — 30 i 6 osób wstrzymało
        się od głosu. Przegłosowaliśmy indykacyjnie siedem wniosków dotyczących
        brzmienia art. 4 naszego projektu. Z tego głosowania wynika, że
        najwięcej głosów uzyskała propozycja podkomisji, bo 21, i senatora H.
        Rota — 22 głosy. Między tymi poprawkami dokonamy wyboru, bo one przeszły
        do finału. Tylko te dwa wnioski uzyskały więcej głosów za niż przeciw.
        Proponuję poddać pod głosowanie wniosek senatora Rota. Głosowanie
        przeciwko będzie oznaczało poparcie wniosku podkomisji. Uzyskanie
        większości głosów Posiedzenia Komisji Konstytucyjnej ZN spowoduje, że do
        projektu wpiszemy propozycję senatora H. Rota. Jeżeli nie uzyska ona
        większości głosów, to uwzględnimy wersję podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Jerzy Madej (KD):</strong>
        Głosując za wnioskiem senatora H. Rota jednocześnie opowiadamy się
        przeciw propozycji podkomisji, czy tak?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Tak. Kto jest za przyjęciem wniosku senatora H. Rota? Za wnioskiem
        senatora H. Rota głosowało 13 członków Komisji, za propozycją podkomisji
        — 24 członków Komisji i 2 wstrzymało się od głosu. Informuję, że art. 4
        będzie brzmiał zgodnie z propozycją podkomisji: „Władza zwierzchnia w
        Rzeczypospolitej Polskiej należy do ogółu obywateli — tworzących Naród,
        który sprawuje ją przez swoich demokratycznie wybranych przedstawicieli
        lub bezpośrednio”. Zgodnie z wcześniejszymi ustaleniami przesądzimy
        teraz o wariantach art. 10, dotyczącego partii politycznych i wyrażania
        woli przez obywateli.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Podkreślam, że kiedy zgłaszałem w dniu 7 lutego poprawkę, to zmierzałem
        do tego, aby po zasadzie zwierzchnictwa narodu został umieszczony
        przepis formułujący zasadę praworządności i zasadę legalizmu. Proszę o
        rozstrzygnięcie kwestii, czy po artykule określającym zasadę
        zwierzchnictwa narodu zapiszemy zasadę praworządności i legalizmu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Szkoda, że tej dyskusji nie przeprowadziliśmy wtedy, kiedy spieraliśmy
        się o kolejność artykułu. Jaka jest opinia ekspertów na ten temat? W tej
        chwili tworzymy dwa artykuły, jeden dotyczący władzy, a drugi — partii
        politycznych. Potem przejdziemy do artykułu określającego cele państwa.
        Jest propozycja posła J. Szymańskiego, rzeczywiście zgłaszana wcześniej
        i zapisana w druku z 7 lutego, żeby kolejny artykuł po przepisie
        dotyczącym władzy zwierzchniej formułował zasadę przestrzegania praw
        Rzeczypospolitej jako podstawowego obowiązku każdego organu władzy
        publicznej oraz stwierdzał, że wszystkie organy władzy publicznej
        działają na podstawie i w granicach prawa. Czy eksperci mogliby udzielić
        odpowiedzi na pytanie, czy ta propozycja nie złamie konstrukcji, którą
        mamy przegłosowaną?
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
        Uważamy, że kolejność przepisów w rozdziale I powinna być taka jak w
        naszym pisemnym projekcie. Przepis wyrażający zasadę legalności lub —
        jak inni nazywają — praworządności powinien znajdować Się po przepisie o
        zasadzie podziału władzy. Powinien on rozstrzygać podstawowe kwestie
        dotyczące organizacji funkcjonowania aparatu państwowe80, bo zasada
        legalności odnosi się do organów państwa.
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Panie pośle J. Szymański, czy dla dobra sprawy nie moglibyśmy się
        porozumieć? Tak. Dziękuję. Przechodzimy do artykułu, który we wnioskach
        z dnia 8 lutego zawarty jest w punktach 8-12. Czy wnioskodawcy mają
        dodatkowe propozycje? Głosowanie zaczniemy od wniosku najdalej idącego,
        zawartego w pkt. 12, czyli wniosku o skreślenie całego artykułu. Gdyby
        okazało się, że nie ma woli skreślenia tego artykułu, to kolejność
        głosowania będzie następująca: propozycja podkomisji i wnioski zapisane
        w takiej kolejności, jak to jest w druku z dnia 8 lutego. |
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
        Nie rozumiem, dlaczego różne projekty nie zawierają zasady jawności
        finansowania partii politycznych. Daję pod rozwagę wnioskodawcom
        możliwość uzupełnienia propozycji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Jeżeli wnioskodawcy nie mają uwag, to proponuję głosowanie od najdalej
        idącego wniosku posła L. Pastusiaka, proponującego skreślenie art. 10,
        ponieważ zawarta w nim materia zostanie skonsumowana w art. 41. Kto jest
        za przyjęciem wniosku posła L. Pastusiaka? Za wnioskiem głosowały 4
        osoby, przeciw — 33 i 3 osoby wstrzymały się od głosu. Wniosek posła L.
        Pastusiaka nie uzyskał odpowiedniego poparcia. Przechodzimy do
        głosowania nad wariantami przedstawionymi w projekcie podkomisji.
        Proponuję przyjąć podobną metodę, czyli w finale dokonamy wyboru spośród
        tych wariantów, które uzyskały więcej głosów za niż przeciw. Wariant I.
        „Art. 10. Ust. 1. Rzeczpospolita Polska gwarantuje wolność tworzenia i
        działania partii politycznych. Biorą one udział w kształtowaniu i
        wyrażaniu woli obywateli, w szczególności przez uczestnictwo w wyborach.
        Ust. 2. Finansowanie partii politycznych jest jawne”. Kto jest za tym
        wariantem? Za wnioskiem głosowało 21 osób, przeciw — 13 i 6 wstrzymało
        się od głosu. Przechodzimy do wariantu II: „Art. 10. Partie polityczne,
        ruchy obywatelskie i inne ugrupowania obywateli, działające w oparciu o
        zasadę pluralizmu politycznego są formą dobrowolnego i równego
        uczestnictwa politycznego w kształtowaniu i wyrażaniu woli obywateli
        oraz wpływania na politykę Państwa . Kto jest za przyjęciem tego
        wariantu? Za wnioskiem głosowały 4 osoby, przeciw — 33 i 3 osoby
        wstrzymały się od głosu. Przechodzimy do przegłosowania wniosków z druku
        z dnia 8 lutego. Pod nr. 8 jest wniosek, który jest ponowieniem obecnych
        przepisów konstytucyjnych: „Art. 10. Ust. 1. Partie polityczne zrzeszają
        na zasadach dobrowolności i równości obywateli w celu wpływania metodami
        demokratycznymi na kształtowanie polityki Państwa. Ust. 2. O
        sprzeczności z Konstytucją celów lub działalności partii politycznej
        orzeka Trybunał Konstytucyjny”. Kto jest za przyjęciem tego wniosku? Za
        wnioskiem głosowało 13 osób, przeciw — 20 i 6 osób wstrzymało się od
        głosu. Poprawka poseł K. Łybackiej figuruje pod nr. 9. „Art. 10.
        Kształtowanie i wyrażanie woli obywateli w zakresie realizacji władzy
        zwierzchniej Narodu odbywa się za pośrednictwem jawnie finansowanych
        partii politycznych działających w ramach porządku konstytucyjnego
        Rzeczypospolitej Polskiej”. Kto jest za przyjęciem tej poprawki? Za
        przyjęciem wniosku głosowało 18 osób, przeciw — 14 osób i 8 osób
        wstrzymało się od głosu. Poprawka zapisana pod nr. 10 została zgłoszona
        w imieniu prezydenta przez prof. A. Rzeplińskiego i dr. W. Kuleszę:
        „Art. 10. Ust. 1. Rzeczpospolita Polska gwarantuje wolność tworzenia i
        działania partii politycznych. Partie polityczne zrzeszają na zasadach
        dobrowolności i równości obywateli Rzeczypospolitej Polskiej w celu
        wpływania metodami demokratycznymi na kształtowanie polityki Państwa.
        Ust. 2. Finansowanie partii politycznych jest jawne. Ust. 3. O
        legalności działania partii politycznej zmierzającej do naruszenia
        porządku konstytucyjnego orzeka Trybunał Konstytucyjny . Kto jest za
        przyjęciem tej poprawki? Za wnioskiem głosowało 10 osób, przeciw — 19
        111 osób wstrzymało się od głosu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        W zestawieniu jest widoczna poprawka, iż o sprzeczności z konstytucją
        celów i działalności partii politycznych orzeka Sąd Najwyższy. We
        wszystkich innych wariantach określono, że o tej sprawie orzeka Trybunał
        Konstytucyjny. Rozumiem, że przegłosowanie tej kwestii umożliwia mi
        zgłoszenie poprawki w tej sprawie jako wniosku mniejszości do
        wielowariantowego sprawozdania, co jest zgodne z naszym regulaminem.
        Poprawka ta nie została umieszczona w zestawieniu do głosowania,
        niemniej oddziałuje na różnice zdań odnośnie kompetencji Sądu
        Najwyższego i Trybunału Konstytucyjnego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Tryb zgłaszania wniosków mniejszości określony jest w regulaminie.
        Wniosek musi podpisać pięciu członków Komisji. Prawdopodobnie do kwestii
        podniesionej przez pana senatora powrócimy we właściwym rozdziale.
        Przechodzimy do wniosku posła W. Ciemniewskiego zawartego pod nr 11:
        „Art. 10. Partie polityczne służą obywatelom do wpływania metodami
        demokratycznymi na działalność władzy publicznej”. Kto jest za
        przyjęciem tej propozycji? Za wnioskiem głosowało 6 osób, przeciw — 28
        14 osoby wstrzymały się od głosu. Ostatni wniosek zapisany jest pod nr.
        12. Jest to pierwszy wniosek posła L. Pastusiaka: „RzeczpospoPosiedzenia
        Komisji Konstytucyjnej ZN lita Polska gwarantuje wolność tworzenia i
        działania partii politycznych”. Kto jest za przyjęciem tego wniosku? Za
        wnioskiem głosowały 3 osoby, przeciw — 29 16 osób wstrzymało się od
        głosu. Przeprowadziliśmy wskaźnikowo indykacyjną procedurę głosowań nad
        art. 10.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Wczoraj zgłosiłam całą listę poprawek i jedna z nich dotyczyła partii
        politycznych. Wariant II w jednolitym tekście jest poprawką, którą ktoś
        zgłosił w podkomisji. Odpowiada ona treści art. 7 projektu senackiego.
        Na przyszłość prosiłabym, żeby pamiętać, iż zgłosiłam poprawki do zasad
        naczelnych.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Chcę panią senator zapewnić, że podkomisja uwzględniła w wielu wypadkach
        zgłoszone wnioski. Nie są one oznaczone nazwiskiem, bo są to wnioski
        podkomisji. Dziękuję pani senator za uwagę. Dwa wnioski uzyskały więcej
        głosów „za” niż „przeciw ”. Proponuję przeprowadzić podobną procedurę
        jak w przypadku poprzedniego artykułu. Głosowanie „za oznaczać będzie
        opowiedzenie się za wariantem podkomisji, głosowanie „przeciw” oznaczać
        będzie wybór wariantu poseł K. Łybackiej, a wstrzymanie się od głosu
        oznaczać będzie brak zgody na te propozycje. Przypominam, że wariant
        podkomisji brzmi: „Art. 10. Ust. 1. Rzeczpospolita Polska gwarantuje
        wolność tworzenia i działania partii politycznych. Biorą one udział w
        kształtowaniu i wyrażaniu woli obywateli, w szczególności przez
        uczestnictwo w wyborach. Ust. 2. Finansowanie partii politycznych jest
        jawne”. Wniosek poseł K. Łybackiej: „Kształtowanie i wyrażanie woli
        obywateli w zakresie realizacji władzy zwierzchniej Narodu odbywa się za
        pośrednictwem jawnie finansowanych partii politycznych, działających w
        ramach porządku konstytucyjnego Rzeczypospolitej Polskiej”. Kto jest za
        wnioskiem podkomisji? Za wnioskiem podkomisji padło 14 głosów, 21 głosów
        za wnioskiem poseł K. Łybackiej, a 3 osoby wstrzymały się od głosu.
        Oznacza to, że art. 5 przygotowywanego przez nas projektu otrzymuje
        brzmienie zgodne z wnioskiem poseł K. Łybackiej. Poseł R. Bugaj zgłasza
        wniosek mniejszości. Przechodzimy do artykułu, który będzie oznaczony nr
        6. W projekcie podkomisji jest to art. 3, który określa cele państwa.
        Chciałbym zwrócić uwagę na wnioski zgłoszone dzisiaj przez posłów T.
        Mazowieckiego, J. Zdradę, J. Szymańskiego, L. Moczulskiego oraz senatora
        P. Andrzejewskiego. Jak brzmiałby artykuł proponowany przez senator A.
        Grześkowiak?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Jest to artykuł wykazany w zestawieniu poprawek z dnia wczorajszego,
        oznaczony nr. 1. „Ust. 1. Rzeczpospolita Polska jako wspólne dobro
        obywateli jest suwerennym państwem demokratycznym, uznającym i
        gwarantującym nienaruszalność praw człowieka, wynikających z jego
        przyrodzonej godności i wartości. Ust. 2. Rzeczpospolita Polska chroni
        niepodległość i niezbywalne prawo do całości terytorialnej Państwa
        Polskiego”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy pani senator jest gotowa zgłosić autopoprawkę, wynikającą chociażby
        z faktu, że w innym artykule mamy już stwierdzenie o wspólnym dobru?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        W takim zestawieniu pojęcie „wspólnego dobra” jest lepsze.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że w przypadku przyjęcia wniosku pani senator automatycznie
        wykreślony zostanie artykuł wcześniej przyjęty.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        I tak podkomisja redakcyjna będzie miała co robić przy ustalaniu
        jednolitego tekstu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Chciałbym wstępnie rozstrzygnąć kwestię użycia sformułowania
        „dziedzictwo kultury i języka Narodu” czy „kultury narodowej i języka”.
        To nie jest drobiazg. Dyskusja na ten temat trwała długo w podkomisji i
        na posiedzeniu Komisji. Jeśli o tym przesądzimy, to będziemy mieli
        jednolity wariant wypracowany przez podkomisję. Najdalej idący jest
        wniosek posła J. Ciemniewskiego o skreślenie art. 3.
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
        Uważam, że wniosek posłów T. Mazowieckiego i J. Zdrady jest bardzo
        dobry, natomiast końcowy fragment przepisu jest niefortunny od strony
        językowej. Uważam, że stwierdzenie „,...zapewnia ochronę środowiska
        poprzez zrównoważony rozwój” jest stylistycznie wątpliwe.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy senator J. Madej nie zauważa daleko idącej zbieżności swojego
        wniosku z propozycją posłów T. Mazowieckiego i J. Zdrady?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Jerzy Madej (KD):</strong>
        Propozycja jest prawie tożsama.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że posłowie T. Mazowiecki i J. Zdrada przyjmują jako
        autopoprawkę następujące brzmienie końcowego fragmentu tego artykułu:
        ,,...zapewnia ochronę środowiska, kierując się zasadą zrównoważonego
        rozwoju”. Czy tak? Tak. Dziękuję. Czy senator J. Madej nie zauważa w tym
        kształcie propozycji na tyle daleko idącej zbieżności, że można uznać to
        za wspólny wniosek wszystkich panów?
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Jerzy Madej (KD):</strong>
        Jeżeli posłowie się zgodzą, to ja dopisuję się do tego wniosku.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        W tej sytuacji mamy jeden wniosek mniej do przegłosowania.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Wycofuję swój wniosek.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Poseł J. Ciemniewski wycofał wniosek o skreślenie tego artykułu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MoczulskiLeszek.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Leszek Moczulski (KPN):</strong>
        Mój wniosek jest tylko poprawką do propozycji podkomisji. Jego
        przegłosowanie ma sens tylko wtedy, kiedy przejdzie propozycja
        podkomisji. Mój wniosek nie jest alternatywny do wniosku posłów T.
        Mazowieckiego i J. Zdrady. |
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że poseł L. Moczulski będzie proponował poprawkę do przyjętego
        ewentualnego wniosku podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/PastusiakLongin.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Longin Pastusiak (SLD):</strong>
        Nie mam nic przeciwko zasadzie zrównoważonego rozwoju, ale na przyszłość
        proponuję unikać wpisywania do konstytucji terminów z dziedziny
        polityki. Termin „zrównoważony rozwój” nie jest przyjęty wszędzie na
        Świecie. Sama zasada jest słuszna, tylko w przyszłości proponuję unikać
        wprowadzania terminów z dziedziny polityki.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Na ten temat toczyła się wczoraj dyskusja. Tłumaczono ten termin z
        języka angielskiego, wypowiadał się w tej sprawie prezes Polskiego
        Towarzystwa Ekonomicznego. Nie sposób wracać do spraw tyle razy już
        dyskutowanych. Prosiłbym o minimum dyscypliny. Przechodzimy do
        pierwszego głosowania w sprawie propozycji podkomisji. Kto opowiada się
        za stwierdzeniem „strzeże dziedzictwa kultury i języka Narodu”, powinien
        nacisnąć przycisk „za, kto jest za sformułowaniem „strzeże kultury
        narodowej i języka”, używa przycisku „przeciw”, a kto uważa, że oba
        sformułowania są niedobre albo nie ma zdania w tej sprawie — wstrzymuje
        się od głosu. Kto jest za użyciem sformułowania „strzeże kultury i
        języka Narodu”? Za wnioskiem głosowało 12 osób, przeciw — 21 osób i 5
        osób wstrzymało się od głosu. Skreślamy więc wyrazy: „kultury i języka
        Narodu”. Pozostaje wytłuszczone w nawiasie określenie: „Kultury
        narodowej i języka”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Proszę wyjaśnić, o jaki język chodzi? Przepraszam za takie rudymentarne
        pytanie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Ono jest rzeczywiście rudymentarne. Problem ten był wyjaśniany w czasie
        dyskusji. Domyślam się, że chodzi o język narodowy, o język polski.
        Proponuję w czasie głosowań nie wracać do przeprowadzonej dyskusji.
        Uporządkowane poprawki zaczynamy głosować od wniosku podkomisji w znanym
        już trybie. Kto z państwa jest za zaakceptowaniem wniosku podkomisji,
        aby artykuł dotyczący celów państwa brzmiał: „Rzeczpospolita Polska
        gwarantuje prawa człowieka, strzeże niepodległości i całości swojego
        terytorium, strzeże dziedzictwa kultury narodowej i języka oraz zapewnia
        ochronę środowiska przyrodniczego”? Za wnioskiem głosowało 11 osób,
        przeciw — 16 111 osób wstrzymało się od głosu. Przechodzimy do
        przegłosowania wniosków z dnia 7 lutego. Wniosek senator A. Grześkowiak
        to art. I w znanym już brzmieniu. Kto jest za jego przyjęciem? Za
        wnioskiem głosowały 4 osoby, przeciw — 30 14 osoby wstrzymały się od
        głosu. Teraz będziemy głosowali nad wnioskiem przedstawicieli Prezydenta
        zapisanym pod nr. 6. „Rzeczpospolita Polska zapewnia ochronę wolności I
        praw człowieka, strzeże niepodległości i nienaruszalności swojego
        terytorium, strzeże dziedzictwa i języka Narodu oraz zapewnia ochronę
        środowiska przyrodniczego ". Kto jest za przyjęciem tej propozycji? Za
        wnioskiem głosowało 9 osób, przeciw — 21 18 osób wstrzymało się od
        głosu. Przechodzimy do wniosku zapisanego pod nr. 11. Jest to propozycja
        senatora P. Jankiewicza i posła J. Jaskierni. „Rzeczpospolita Polska
        gwarantuje wolności i prawa człowieka, strzeże niepodległości,
        jednolitości i niepodzielności swojego terytorium, strzeże dziedzictwa
        kultury narodowej i języka oraz zapewnia ochronę środowiska
        przyrodniczego .. Kto jest za przyjęciem tego wniosku? Za wnioskiem
        głosowało 13 osób, przeciw — 20 15 osób wstrzymało się od głosu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wniosek nr 12 został wycofany. Przechodzimy do druku z dnia 8 lutego.
        Pierwszy jest wniosek posłów T. Mazowieckiego i J. Zdrady oraz senatora
        J. Madeja. Proszę o powtórzenie tego wniosku wraz z autopoprawką.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/ZdradaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Zdrada (UW):</strong>
        „Rzeczpospolita Polska strzeże niepodległości, całości i
        nienaruszalności swojego terytorium...” lub „Rzeczpospolita Polska
        strzeże niepodległości i nienaruszalności swojego terytorium... .
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Prosiłbym posła J. Zdradę o odczytanie całej propozycji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/ZdradaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Zdrada (UW):</strong>
        „Rzeczpospolita Polska strzeże niepodległości i nienaruszalności swojego
        terytorium, gwarantuje wolności i prawa człowieka, Posiedzenia Komisji
        Konstytucyjnej ZN zapewnia bezpieczeństwo obywateli, strzeże dziedzictwa
        narodowego oraz zapewnia ochronę środowiska kierując się zasadą
        zrównoważonego rozwoju”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Kto jest za przyjęciem wniosku posłów T. Mazowieckiego 1J. Zdrady oraz
        senatora J. Madeja? Za wnioskiem głosowało 2/ osób, przeciw — 71 2 osoby
        wstrzymały się od głosu. Do przegłosowania pozostaje poprawka senatora
        P. Andrzejewskiego zapisana pod nr. 4. „Rzeczpospolita zapewnia i
        gwarantuje prawa człowieka oraz ich nienaruszalność, strzeże
        niepodległości i całości swojego terytorium, dziedzictwa kultury i
        języka Narodu oraz zapewnia ochronę i rozwój Środowiska”. Kto jest za
        przyjęciem tej propozycji? Za wnioskiem głosowały 4 osoby, przeciw — 20
        i 9 osób wstrzymało się od głosu. Tylko jeden wniosek uzyskał
        zdecydowaną większość głosów. Jest to propozycja posłów T. Mazowieckiego
        i J. Zdrady oraz senatora J. Madeja. Rozumiem, że bezprzedmiotowe staje
        się głosowanie nad poprawką posła L. Moczulskiego, bo była ona zgłoszona
        do wniosku podkomisji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        Dotychczas przeprowadziliśmy głosowanie indykacyjne. Uchwała Komisji
        musi być przegłosowana zgodnie z naszym regulaminem.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Była to jedyna poprawka, która uzyskała więcej głosów niż „przeciw”. Nad
        czym mamy jeszcze głosować? O czym jeszcze chcemy w tej sprawie
        przesądzić? Jest to jedyna propozycja, która uzyskała tak znaczące
        poparcie ze strony Komisji. Przyjęliśmy już art. 6 i procedura głosowań
        została wyczerpana. Głosowania w sprawach, które będą dzisiaj omówione,
        przeprowadzimy jutro o godz. 9. Przechodzimy do dyskusji. Co, zdaniem
        ekspertów, powinien zawierać kolejny artykuł konstytucji? Zespół
        ekspertów proponował, żeby po zasadzie zwierzchnictwa narodu
        uwzględnione były partie polityczne, co się stało. Później eksperci
        proponowali przepisy określające podstawowe cele państwa, co także
        przyjęliśmy. W tej chwili eksperci proponują przedyskutować przepisy
        określające podstawowe zasady organizacji i wykonywania władzy
        publicznej, poczynając od zasady podziału władzy określonej w art. 9,
        poprzez art. 1l — zasady samorządu, artykuły 7 i 8 mówiące o zasadzie
        legalności. Czy do tej systematyki rozdziału I są uwagi? Czy eksperci
        podtrzymują propozycję?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Czy artykuły 7 i 8 nie powinny poprzedzać artykułów mówiących o tym, że
        władza państwowa jest sprawowana przez rozdzielone władze oraz
        określających sposób ich rozdzielenia? Chodzi o to, żeby wcześniej
        ograniczyć władzę, co jest konsekwencją suwerenności, władczości i celów
        państwa, a następnie ją podzielić.
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
        Chciałbym przyłączyć się do tej propozycji, ponieważ chodzi tu o zasadę
        konstytucjonalizmu, która polega na działalności w ramach prawa.
        Wysunięcie prawa na pierwsze miejsce byłoby jak najbardziej na miejscu.
        Artykuły 7 i 8 powinny być umieszczone zaraz po przyjętych już
        przepisach.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy byłaby zgoda Komisji na przejście do rozpatrzenia zasady legalności
        zawartej w artykułach 7 i 8 projektu podkomisji?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Czy wystarczy tylko zasada legalizmu? W swojej poprawce formułuję także
        potrzebę umieszczenia w konstytucji zasady praworządności, czyli
        obowiązku przestrzegania prawa przez organy władzy publicznej. Ta
        propozycja znajduje się na str. 4 tekstu poprawek z dnia 7 lutego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mamy wniosek posła J. Szymańskiego z dnia 7 lutego. Art. 7 brzmiałby:
        „Ust. 1. Przestrzeganie praw Rzeczypospolitej Polskiej jest podstawowym
        obowiązkiem każdego organu władzy publicznej. Ust. 2. Wszystkie organy
        władzy publicznej działają na podstawie iw granicach prawa”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Działanie organów władzy polegające na przestrzeganiu prawa polega na
        działaniu na podstawie prawa. Nie można mylić przestrzegania prawa przez
        obywateli. Obywatele mają jedynie obowiązek nienaruszania prawa. Organy
        państwowe muszą natomiast wykazać się czymś więcej, legitymacją,
        podstawą ustawową do działania. Od organów państwowych wymaga się czegoś
        więcej niż od obywateli.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mamy art. 7 w brzmieniu zaproponowanym przez podkomisję oraz wniosek
        posła J. Szymańskiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>
          Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:
        </strong>
        Chciałbym prosić o odłożenie dyskusji nad art. 8. Uważam, że nie można
        dyskutować na temat tego artykułu bez rozstrzygnięcia istotnych spraw z
        rozdziału III o źródłach prawa. Rada Legislacyjna będzie miała w ciągu
        kilku najbliższych dni wypracowane stanowisko w tej kwestii. Szczegółowa
        dyskusja nad art. 8 jest w tej chwili 'bezprzedmiotowa.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Proponuję zapisanie tej zasady w wersji, która znajduje się w projekcie
        senackim. Jest to następująca propozycja: „Wszystkie organy państwa są
        podporządkowane Konstytucji i wypełniają swoje uprawnienia w granicach w
        niej przewidzianych”. Myślę, że nie muszę uzasadniać potrzeby takiego
        sformułowania, bowiem debaty na ten temat już się odbyły. Proszę też
        pamiętać, że taką poprawkę zgłosiłam już wczoraj.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mamy już trzeci wniosek.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/PietrzakMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:</strong>
        W art. 1 zapisaliśmy, że Rzeczpospolita Polska jest demokratycznym
        państwem prawnym. Jest to nowe pojęcie, od niedawna obowiązujące w
        naszym konstytucjonalizmie, wprowadzone zostało w 1989 r. Z. tej
        generalnej zasady wynika cały art. 7. Wszystkie organy państwa działają
        na podstawie, w granicach i w formie określonej przez ustawy czy prawo.
        Jest to wynik generalnej zasady państwa prawnego. Można jeszcze dodać,
        że obywatele mogą robić to wszystko, czego im prawo nie zabrania. Organy
        państwowe mogą robić to wszystko, na co im prawo pozwala, czyli muszą
        mieć upoważnienie. Jest to konsekwencja państwa prawnego określonego w
        art. 1.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/RzeplinskiAndrzej.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński:</strong>
        Przyłączam się do głosu prof. M. Pietrzaka. Piszemy podstawowe zasady,
        więc nie może być tak, że znajdzie się tylko część takich zasad. Do
        propozycji posła J. Szymańskiego należałoby dodać ust. 3 mówiący o tym,
        że obywatel może czynić wszystko, czego ustawa wyraźnie mu nie zabrania.
        To będzie podręcznikowa definicja państwa prawnego. Jej zapisanie w
        zasadach podstawowych będzie co najmniej dziwne z punktu widzenia
        legislacyjnego. Podobnie jak prof. M. Pietrzak proponuję usunąć art. 7,
        bo jest on skonsumowany w art. 1.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mam czwarty wniosek: o skreślenie art. 7 w całości.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MadejJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Jerzy Madej (KD):</strong>
        Chciałbym zapytać posła J. Szymańskiego, jaka jest różnica między
        przestrzeganiem prawa przez organy władzy publicznej a działaniem w
        granicach prawa. Dla mnie jest to tożsame. W ust. 1 mówi się, że
        przestrzeganie prawa jest obowiązkiem, a w ust. 2, że wszystkie organy
        działają w granicach prawa. Opowiadam się za utrzymaniem art. 7. Być
        może jest on powtórzeniem z art. 1 zasady państwa prawnego, ale w celu
        postawienia kropki nad „I trzeba ten artykuł utrzymać.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Jest to kwestia przyjęcia pewnej koncepcji. Obok zasady legalizmu była
        dotychczas formułowana zasada praworządności, która nakładała obowiązek
        przestrzegania prawa przez organy państwowe. Po tej dyskusji mógłbym
        zrezygnować z zasady praworządności sformułowanej w ust. 1, ponieważ
        zasada legalizmu uzyskuje pełny wymiar przy rozpoczęciu przepisów
        konstytucyjnych od zasady państwa prawnego. Składam gotowość wycofania
        wniosku i proszę o skreślenie mojej poprawki. Opowiadam się za
        pozostawieniem art. J w brzmieniu przedstawionym przez podkomisję.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wniosek posła J. Szymańskiego został wycofany.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Podtrzymuję wniosek zgłoszony dzisiaj rano na piśmie, zgodnie z art. 10
        regulaminu Komisji Konstytucyjnej Zgromadzenia Narodowego. Artykuły 7 i
        8 zastępuje się propozycją pochodzącą z projektu obywatelskiego NSZZ,
        „Solidarność” w następującym brzmieniu: „Konstytucja jest najwyższym
        źródłem stanowionego prawa w Rzeczypospolitej. Władza w Państwie jest
        sprawowana wyłącznie na zasadach i w granicach prawa”. Gdyby miał być
        utrzymany podział na dwa artykuły, to podtrzymuję wniosek, aby art. 8
        miał brzmienie ograniczone do treści: „Prawo Rzeczypospolitej tworzy
        Konstytucja”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrodzickiRyszard.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Ryszard Grodzicki (SLD):</strong>
        Wydaje mi się, że utrzymanie art. / jest zasadne ze względów
        edukacyjnych, a taką funkcję pełni także konstytucja. Rozumienie w
        naszym społeczeństwie zasady państwa prawnego jest na tyle ograniczone,
        że bez takiej eksplikacji w praktyce mogą wystąpić problemy z percepcją
        konstytucji. O to tutaj chodzi, bo merytorycznie zgadzam się z opiniami
        prof. M. Pietrzaka i prof. A. Rzeplińskiego. Edukacyjny charakter
        konstytucji powinien przesądzić o pozostawieniu art. 7. Chciałbym
        zasygnalizować inną sprawę związaną z art. 8. Podzielam pogląd prof. S$.
        Gebethnera, iż treść tego artykułu jest wysoce wątpliwa i nie powinien
        on być zredagowany przed zakończeniem prac nad treścią rozdziału III,
        dotyczącego systemu Źródeł prawa. Tam będziemy mieli ostatecznie
        ustaloną hierarchię źródeł prawa. W przeciwnym razie dyskusję na ten
        temat musielibyśmy rozpocząć w tej chwili. Uważam, że wymienienie w
        części ogólnej konstytucji hierarchii źródeł prawa mija się z celem i
        proponuję skreślenie art. 8.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        O art. 8 będziemy mówili za chwilę. Był wniosek prof. S. Gebethnera,
        jest też wniosek posła R. Grodzickiego.
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
        Parę słów powiem na temat relacji między zasadą państwa prawnego a
        zasadą legalności, którą wyraża art. 7 w projekcie podkomisji. Zasada
        państwa prawnego jest tak pojemna, że mieści w sobie wiele kwestii.
        Według dzisiejszych poglądów i judykatury Trybunału Konstytucyjnego
        mieści ona prawo do sądu, zasadę nieretroakcji w prawie, kontrolę
        konstytucyjności prawa, czyli badanie zgodności prawa z konstytucją.
        Zasada ta mieści bardzo wiele. Można powiePosiedzenia Komisji
        Konstytucyjnej ZN dzieć, że również zasadę legalności, która jest
        kwalifikowanym elementem państwa prawnego. We wszystkich konstytucjach,
        w których wyrażona jest zasada państwa prawnego, np. w ustawie
        zasadniczej RFN czy Austrii jest jeszcze przepis wyrażający Zzasadę
        legalności. Zwracam uwagę np. na art. 18 konstytucji Republiki
        Austriackiej. Nie można przyjąć systemowej formuły państwa prawnego w
        taki sposób, że prawnicy z tego „gwoździa” będą gotować zupę, czyli
        starać się wszystko wyprowadzić z tej formuły. Tak rozumując trzeba by
        wykluczyć wiele innych przepisów z tego projektu, a nawet całe
        rozdziały. Trzeba brać pod uwagę ten wzgląd, o którym mówił poseł R.
        Grodzicki. Chodzi o komunikatywność i czytelność konstytucji. Co dla
        przeciętnego odbiorcy znaczy formuła państwa prawnego bez znajomości
        doktryny prawa? Nic. Natomiast przepis, że wszystkie organy władzy
        publicznej mają działać na podstawie i w granicach prawa, coś już
        wyraża. Organy te mają działać na podstawie i w granicach ustawy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że wniosek pana profesora polega na pozostawieniu przepisu w
        dotychczasowym kształcie. Czy w tej chwili nie moglibyśmy uznać, że
        sprawa dojrzała do rozstrzygnięć? Mamy następujące wnioski: wykreślenie
        artykułu, wniosek podkomisji, propozycje senator A. Grześkowiak i
        senatora P. Andrzejewskiego. Biuro Legislacyjne przygotuje odpowiedni
        materiał.
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
        Z wywodu prof. M. Pietrzaka wynikało, że zarówno zasada legalizmu, jak i
        zasada wolności jednostki mieszczą się w zasadzie państwa prawa i z tego
        powodu mogą zostać wykreślone. Jest to niemożliwe, ponieważ zasada
        wolności człowieka zawarta w art. 20 powinna konsekwentnie zostać
        wykreślona. Uważam, że jest to niedopuszczalne.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/RzeplinskiAndrzej.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński:</strong>
        Nawiązując do wypowiedzi posła R. Grodzickiego uważam, że walor
        edukacyjny jest bardzo istotny. Z, edukacyjnego punktu widzenia artykuł
        należałoby uzupełnić o dodatkowy ustęp, który mówiłby, że każdy obywatel
        ma prawo czynić to, co nie jest zabronione przez ustawę i nie może być
        zmuszony do czynienia tego, czego ustawa nie nakazuje. Wtedy mielibyśmy
        definicję państwa prawnego z punktu widzenia legalizmu działania organów
        władzy publicznej i zasady wolności obywatela. Z.głosimy wniosek
        rozpisujący zasadę legalizmu w ten sposób, że — z jednej strony — będzie
        mowa o obowiązku działania każdej władzy na podstawie prawa, a z drugiej
        strony — o prawie każdego do czynienia tego, czego przepisy wyraźnie nie
        zabraniają.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Prosiłbym uprzejmie o zgłoszenie tego wniosku na piśmie Posiedzenia
        Komisji Konstytucyjnej ZN jeszcze dzisiaj. Rozumiem, że panowie wycofują
        wniosek o skreślenie art. 7.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/RzeplinskiAndrzej.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński:</strong>
        Tak.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Mamy wniosek podkomisji, senator A. Grześkowiak, senatora P.
        Andrzejewskiego i będzie wniosek awizowany przez przedstawicieli
        Prezydenta. Czy w sprawie art. J możemy zamknąć dyskusję? Tak.
        Przechodzimy do art. 8: „Prawo Rzeczypospolitej Polskiej tworzą:
        Konstytucja, powszechnie uznane zasady prawa międzynarodowego,
        ratyfikowane umowy międzynarodowe, ustawy (rozporządzenia z mocą ustawy)
        oraz akty normatywne wydane na podstawie i w celu wykonania ustawy”.
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
        Podkomisja zastanawiała się nad tym, czy art. 8 powinien znaleźć się w
        zasadach ogólnych. Zwyciężył taki punkt widzenia, że próba określenia
        generalnych zasad ustrojowych usprawiedliwia pojawienie się art. 8. Nie
        bardzo rozumiem wniosek prof. S$. Gebethnera. Jeżeli postępujemy w ten
        sposób, że zasady ogólne mają determinować nasze dałsze rozstrzygnięcia,
        to powinniśmy zachować ten artykuł. Tym bardziej że rozstrzygnęliśmy
        poważny dylemat dotyczący sesyjności prac parlamentu. Możemy następnie
        rozstrzygnąć problem rozporządzeń z mocą ustawy. Wnoszę o przygotowanie
        tej kwestii do głosowania. Wnoszę jednocześnie poprawkę polegającą na
        skreśleniu wyrazów: „rozporządzenia z mocą ustawy”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>
          Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:
        </strong>
        Wcale nie została przesądzona sprawa wydawania rozporządzeń z mocą
        ustawy, tylko dekretów wydawanych między sesjami parlamentu. Nie
        rozstrzygnięta została sprawa ustaw organicznych. W tym momencie
        rozpoczyna się dyskusja na temat rozdziału III.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Prof. S. Gebethner zgłosił wniosek, a poseł R. Bugaj wniosek przeciwny.
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
        Treść tego artykułu nasuwa wiele uwag. Można mieć wątpliwość, czy idea
        stworzenia zamkniętego I pełnego katalogu źródeł prawa została
        rzeczywiście zrealizowana. Czy nie ma takich źródeł prawa, które zostały
        pominięte? Wprowadza się pojęcie „powszechnie uznanych zasad prawa
        międzynarodowego”. Jest ono znanym nie tylko doktrynie, ale występuje
        nawet w jednym z najistotniejszych aktów normatywnych prawa
        międzynarodowego. Problem polega na tym, że treść tego pojęcia nigdy
        normatywnie nie została określona. Podlega ono rozmaitym interpretacjom
        doktrynalnym. Dlatego uważam, że umieszczenie tego pojęcia w konstytucji
        wywołuje zasadnicze wątpliwości.
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Poparłbym wniosek prof. S. Gebethnera, żeby zrezygnować w tej części z
        art. 8. Proponowałbym zająć się sformułowaniem pełnego katalogu w
        rozdziale dotyczącymźródeł prawa. Popieram wniosek posła W. Cimoszewicza
        polegający na usunięciu sformułowania „powszechnie uznane zasady prawa
        międzynarodowego”. W art. 38 statutu Międzynarodowego Trybunału
        Sprawiedliwości jako Źródło pomocnicze wyrokowania jest użyte określenie
        „ogólne zasady prawa uznane przez narody cywilizowane”. Jest to pojęcie
        trudne do zdefiniowania. Można powiedzieć, że ustawa zasadnicza RFN z
        1949 r. używa podobnego sformułowania, bo mówi się o ogólnych zasadach
        prawa międzynarodowego. To znajduje uzewnętrznienie dopiero w linii
        orzeczniczej niemieckiego Trybunału Konstytucyjnego. W części ogólnej
        możemy rozstrzygnąć kwestię, która od dawna budzi spór w doktrynie prawa
        konstytucyjnego. Jakie miejsce w porządku prawnym Rzeczypospolitej
        zajmują normy prawa międzynarodowego? Czy uznajemy prymat norm
        międzynarodowych nad normami krajowymi, czy też nie? Dotychczas ta
        kwestia budziła poważne problemy w orzecznictwie Trybunału
        Konstytucyjnego, kiedy nie mógł on orzekać o zgodności ustaw z
        zaciąganymi przez państwo polskie zobowiązaniami międzynarodowymi. Mówię
        o zobowiązaniach traktatowych. Można o tym — jak sądzę — przesądzić w
        rozdziale dotyczącym źródeł prawa. Mój wniosek zmierza do wykreślenia w
        rozdziale „Zasady ustroju” art. 8 w całośCi.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Rozdział III w całości będzie stanowił o systemie Źródeł prawa. Jestem
        więc za tym, żeby z obecnej treści art. 8 zrezygnować. Zastanawia mnie
        brak wśród zasad naczelnych zasady konstytucjonalizmu. Jest to zasada,
        do której Rzeczpospolita konsekwentnie od pięciu lat zmierza. Sądzę, że
        można w tym miejscu sformułować artykuł. w następującym brzmieniu:
        „Naczelnym prawem Rzeczypospolitej jest konstytucja, której przepisy
        stosuje się bezpośrednio”. Można tak ująć ten artykuł, jeżeli nie ma
        możliwości powoływania się na inne ustawy. Bardzo by mi odpowiadało
        sformułowanie w tym miejscu zasady konstytucjonalizmu. Usystematyzowanie
        innych przepisów prawa nie musiałoby znaleźć się wśród zasad naczelnych.
        Ta kwestia mogłaby być przeniesiona do rozdziału III, a zasadę
        konstytucjonalizmu należałoby z rozdziału III przenieść do punktu, który
        teraz omawiamy. Wyliczenie systematyki Źródeł prawa należy przenieść do
        rozdziału III, bo jest to bardziej odpowiednie miejsce.
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/LipowiczIrena.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Irena Lipowicz (UW):</strong>
        Chciałabym przejąć wniosek prof. W. Osiatyńskiego. Art. 8 powinien
        rzeczywiście być przeniesiony do rozdziału o źródłach prawa, a w tym
        miejscu należy sformułować artykuł dotyczący zasady konstytucjonalizmu i
        to w taki sposób, jak to przedstawił przed chwilą prof. W. Osiatyński.
        Podkomisja źródeł prawa poświęciła wiele godzin na omówienie powszechnie
        uznanych kwestii prawa międzynarodowego. Posługiwano się opinią prof. K.
        Skubiszewskiego i bogato udokumentowanymi opiniami ekspertów. Pojawiły
        się różne inne propozycje odnośnie do sposobu uwzględnienia
        najważniejszych zasad obok ratyfikowanych umów międzynarodowych. Po
        dyskusji podkomisja zgodziła się na takie sformułowanie. Wydaje się, że
        propozycję tę należy podtrzymać — mówię teraz o treści art. 8 ale
        uważam, że powinna ona być przesunięta do rozdziału III.
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
        Odnośnie do celowości utrzymania artykułu zawierającego jak gdyby
        definicję prawa w rozumieniu prawa powszechnie obowiązującego, czy aktu
        prawa powszechnie obowiązującego, nie kruszyłbym kopii. Chciałbym tylko
        przypomnieć względy, jakie przemawiały za tym, by art. 8 znalazł się
        właśnie w tym rozdziale. Poseł R. Bugaj może to potwierdzić jako
        przewodniczący podkomisji. Przemawiał ten wzgląd, że po zasadzie
        legalności, która odwołuje się do pojęcia prawa, art. 8 zawierał
        określenie tego prawa, jego definicję. Merytoryczna kolejność tych dwóch
        przepisów miała uzasadniać potrzebę art. 8. Zawartość tego artykułu, a
        więc katalog aktów prawnych, wywołała pewną dyskusję, która do dzisiaj
        nie jest rozstrzygnięta. Można przyjąć myśl prof. W. QOsiatyńskiego i
        umieścić w rozdziale I konstytucji — zawierającym zasady naczelne — to,
        co jest dzisiaj najważniejsze w myśli i prawie konstytucyjnym, a
        mianowicie zasadę bezpośredniego obowiązywania konstytucji. Trzeba ją
        tylko nieco inaczej wyartykułować, nie w ten sposób, że konstytucja jest
        naczelnym aktem nornatywnym, bo to źle brzmi. Trzeba powiedzieć, że
        konstytucja jest najwyższym prawem. Brzmi to trochę „po amerykańsku”, bo
        tak stanowi konstytucja Stanów Zjednoczonych. Jeśli jest zasada
        bezpośredniego stosowania konstytucji, to powstaje problem, w jakim
        zakresie jest ona stosowana, pełnym czy ograniczonym. Wyraża to art. 69
        projektu podkomisji. W ust. 2 napisano: ,,...poza wyjątkami przez nią
        określonymi”. Konstytucja będzie bezpośrednio stosowana w zakresie, w
        jakim nie odsyła ona do ustaw zwykłych, precyzujących normy
        konstytucyjne.
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
        Nawiązując do wypowiedzi poseł I. Lipowicz chciałbym przedstawić krótką
        informację. Kilka dni temu odbyło się posiedzenie Rady Legislacyjnej,
        która rozważała kwestie zbieżne z treścią tego artykułu. Kilku prawników
        zajmujących się prawem międzynarodowym podnosiło zarzut, że pojęcie
        „zasady prawa międzynarodowego” jest nieokreślone. Umieszczenie tych
        zasad jako elementu naszego prawa wewnętrznego może budzić wątpliwości.
        Opowiadałbym się Posiedzenia Komisji Konstytucyjnej ZN za utrzymaniem
        tego określenia. Chciałem zwrócić tylko uwagę na to, że zdania w tej
        materii są podzielone. Pogląd prof. K. Skubiszewskiego nie był jedynym
        poglądem, bo pojawiły się kontrpropozycje mocno podtrzymywane przez
        część uczestników tego posiedzenia.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>
          Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:
        </strong>
        Jako członek Rady Legislacyjnej chciałbym stwierdzić, że na posiedzeniu
        Rady przedstawiciele nauki prawa międzynarodowego wypowiadali się
        przeciwko wprowadzaniu nieokreślonych i niejednoznacznie
        interpretowanych, niepisanych zasad prawa międzynarodowego. Byłoby to
        wprowadzenie do źródeł prawa polskiego nieokreślonych zasad prawa
        niestanowionego, prawa zwyczajowego. Faktem jest, że Polska jest
        związana prawem międzynarodowym przez liczną sieć umów międzynarodowych,
        wielostronnych i dwustronnych. Znalazły się one w naszym systemie
        prawnym przez fakt ratyfikacji i wprowadzenia ich do porządku prawnego.
        Nie jest tak, że Polska musi, jak kraje odzyskujące byt państwowy — np.
        kraje nadbałtyckie, czy jak nowe państwa — np. Słowacja lub Słowenia,
        podkreślać swoje przywiązanie do wspólnoty międzynarodowej. Dlatego jest
        poważny opór ze strony autorytetów prawa międzynarodowego. Natomiast
        wydaje się, że w rozdziale I powinien znaleźć się przepis:
        „Rzeczpospolita Polska przestrzega prawa międzynarodowego , który
        pełniłby rolę deklaracji intencji politycznych l—w pewnym znaczeniu — w
        stosunkach międzynarodowych i wewnętrznych stanowiłby konstytucyjną
        wytyczną wykładni wewnętrznego stosowania prawa. Miałby ten artykuł
        charakter politycznej deklaracji, a także byłby regułą interpretacyjną w
        stosowaniu prawa polskiego. Propozycja Rady Legislacyjnej była taka,
        żeby poniechać w art. 8, niezależnie od jego umiejscowienia, owych
        ogólnych zasad prawa międzynarodowego, zastępując to przepisem:
        „Rzeczpospolita Polska przestrzega prawa międzynarodowego , umieszczonym
        w tym właśnie rozdziale.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Jako przedstawiciel rządu ma pan prawo do składania wniosków. Czy
        mógłbym prosić o złożenie tego wniosku na piśmie?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>
          Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:
        </strong>
        Tak.
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/AndrzejewskiPiotr.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Piotr Andrzejewski (NSZZ „S”):</strong>
        Dwie sprawy warte są naszej uwagi. Pierwszą jest kwestia systematyki, bo
        rozumiem, że pojawiły się dwa nurty. Jeden mówi o tym, że całą
        problematykę trzeba przenieść do dyskusji nad przepisami
        dotyczącymiźródeł prawa, zawartymi w rozdziale III. Wydaje mi się, że
        jest to zasadne, ponieważ w tym miejscu możemy utknąć na długie godziny.
        Poseł I. Lipowicz mówiła, że sprawy te były przedmiotem obrad w czasie
        kilku posiedzeń podkomisji. W wielogodzinnych dyskusjach z udziałem
        ekspertów wypowiadał się zespół zwolenników rozwiązania, o którym mówił
        prof. S. Gebethner i które jest w publikowanej propozycji rozwiązań
        konstytucyjnych prof. K. Skubiszewskiego. Można powiedzieć, że w
        formule: „Rzeczpospolita Polska przestrzega prawa międzynarodowego”
        mieszczą się trzy formy, zgodnie z wykładnią autentyczną i doktrynalną,
        a mianowicie — traktaty i umowy międzynarodowe jako prawo pozytywne,
        ogólne powszechnie uznane zasady prawa międzynarodowego i zwyczaje
        międzynarodowe. Taka koncepcja była wyłożona i przyjęta na posiedzeniu
        podkomisji przez wszystkich ekspertów. Nie była ona negowana. Ze
        względów pedagogicznych i czytelności przepisów konstytucyjnych
        uznaliśmy, żeby to, o czym mówi w sposób komplementarny sformułowanie
        proponowane przez prof. K. Skubiszewskiego, uzupełnić, oprócz umów
        międzynarodowych, o powszechnie uznane zasady prawa międzynarodowego.
        Przykłady podstawowych zasad: pacta sunt servanta, rebus Sic stantibus,
        lex retro non agit. Trudno nie zapisać tych zasad jako klauzul
        generalnych dla interpretacji i stosowania prawa w Polsce. Zgodnie z
        projektem prof. W. Osiatyńskiego i posła R. Grodzickiego proponuję
        przenieść tę dziedzinę do rozdziału III, w którym będziemy wymieniać
        Źródła prawa. Jeżeli przesądzimy, że Źródła prawa, mają być wymienione w
        zasadach naczelnych, to dyskusja nasza ma prawo obywatelstwa. Jeżeli
        przesądzimy, zgodnie z wnioskami wielu osób występujących w dzisiejszej
        dyskusji, że mamy w tym rozdziale zapisać tylko generalne zasady i
        zasadę konstytucyjności, a inne zagadnienia określić w rozdziale III, to
        trzeba dzisiaj przyjąć stosowne wnioski, zrezygnować z dyskusji na ten
        temat, przenosząc ją do czasu analizy rozdziału III. Na zakończenie
        chciałbym dodać, że uważam, iż w tym miejscu należy uwzględnić generalną
        zasadę wynikającą z art. 7 i zasadę konstytucyjności. Moja propozycja
        jest identyczna co do intencji merytorycznej, bo chodzi o zapisanie
        zasady, że żadne prawo czy to międzynarodowe, czy wewnętrzne nie ma
        prawa obywatelstwa na terenie Rzeczypospolitej inaczej, jak przez
        konstytucję. Jest problem znalezienia właściwej formuły. Jeżeli ma to
        być inne sformułowanie niż w projekcie obywatelskim NSZZ „Solidarność”,
        to proponuję następujące brzmienie przepisu: „Prawo w Rzeczypospolitej
        Polskiej tworzy Konstytucja”., Oznacza to transmisję do praktycznego
        funkcjonowania jakiegokolwiek źródła prawa w Polsce tylko i wyłącznie
        poprzez konstytucję. Problem brzmienia tego przepisu jest otwarty. Jako
        przewodniczący podkomisji źródeł prawa podzielam głos prof. W.
        Osiatyńskiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Wniosek senatora P. Andrzejewskiego w sprawie zakończenia dyskusji na
        tym etapie jest bardzo istotny. Jeżeli przyjęlibyśmy wniosek o
        wyłączenie tego artykułu na — na r z rodziału I i uwzględnienie go w
        rozdziale III, dotyczącym źródeł prawa, to niewątpliwie dyskusja w tej
        chwili jest przedwczesna, bo będziemy ją powtarzać. Rozumiem, że
        zgłoszone wnioski przegłosujemy jutro w odpowiedniej kolejności.
        Proponowałbym zakończyć dyskusję na ten temat, by można było przejść do
        omówienia kolejnego artykułu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SzymanskiJanusz.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Janusz Szymański (UP):</strong>
        Pomysł senatora P. Andrzejewskiego, żeby rozszerzyć katalog Źródeł prawa
        o zwyczaj międzynarodowy, jest bardzo groźny. Nie będę mówił, jaka jest
        definicja zwyczaju, bo różne są kategorie zwyczajów — uniwersalne,
        regionalne itd. Zawsze jest wątpliwość, czy 'one wiążą. Zwyczaj, obok
        elementu obiektywnego, musi zawierać również element subiektywny,
        przekonanie, że taka praktyka wiąże podmioty prawa międzynarodowego.
        Jeżeli praktyka zostanie potwierdzona w traktacie międzynarodowym, to
        dopiero możemy powiedzieć, że mamy z pewnością do czynienia ze zwyczajem
        międzynarodowym. Chciałbym prosić o to, żeby na początku jutrzejszego
        posiedzenia rozstrzygnąć, czy będzie to materia zasad ustroju.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        W tej sprawie odbędzie się jutro pierwsze głosowanie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/RzeplinskiAndrzej.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński:</strong>
        Uważam, że z treści tego przepisu należałoby usunąć fragment dotyczący
        zasad. Praktycznie wszystkie zasady prawa międzynarodowego zostały
        skodyfikowane, począwszy od stosunków między państwami w Karcie Narodów
        Zjednoczonych. Podobnie jest z paktami praw człowieka. Polska jest nimi
        związana, więc nie trzeba wprowadzać terminów mających znaczenie dla
        specjalistów, ale nie dla porządku prawnego. Mogą one wprowadzać tylko
        zaburzenia. Uważam, że istotne jest umieszczenie w zasadach podstawowych
        zasady konstytucjonalizmu. Proponowałbym, żeby tę zasadę umieścić przed
        zasadą legalizmu, bo taka jest logika. Jeżeli ona znajduje się w
        przepisach podstawowych, to jest istotniejsza od zasady legalizmu.
        Ustawodawcy nie wiąże ustawa, bo on tworzy ustawy. Chodzi o to, żeby
        ustawodawcę wiązała konstytucja. Ważniejsze jest to, żeby Polska przez
        dłuższy czas była republiką konstytucyjną, a o wiele mniej ważne jest
        to, czy będzie ona republiką parlamentarną, czy inną. Zasada
        konstytucjonalizmu powinna być sformułowana zgodnie z propozycją prof.
        W. Osiatyńskiego. Występują bardzo różne definicje konstytucjonalizmu i
        spory w doktrynie, co to oznacza. Można sformułować następującą
        propozycję: „Władzę ustawodawczą wiąże porządek konstytucyjny”. W
        kolejnym przepisie mówiącym o zasadzie legalizmu, o tym, że organy
        władzy działają na podstawie ustaw, chodzi o organy wykonawcze. Tutaj
        istota rzeczy sprowadza się do zapisania, że nad parlamentem jest
        konstytucja.
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/RotHenryk.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Henryk Rot (SLD):</strong>
        Niedoskonałość art. 8 wiąże się z wieloma wątpliwościami wynikającymi z
        niedoskonałości rozdziału dotyczącego Źródeł prawa. Znalazł się on jako
        synteza przed nawiasem. Jeżeli egzemplifikacja jest niedoskonała, to
        również niedoskonała jest synteza. Jako współuczestnik tych prac czuję
        się współwinny. Na tym etapie prac nad konstytucją nie przesądzałbym o
        tym, czy ten artykuł ma pozostać w tym miejscu, czy nie. Zostawiłbym ten
        artykuł w rezerwie i nie ustosunkowywałbym się merytorycznie do jego
        kształtu. Trzeba z rozstrzygnięciem poczekać do momentu, kiedy
        przystąpimy do debaty nad źródłami prawa. Wprowadzę dyskomfort, bo moja
        wypowiedź zabrzmi trochę pesymistycznie. Uważam, że czeka nas ciężka
        praca. O tym przesądza efekt prac nad Źródłami prawa, który włączony
        jest do tekstu projektu podkomisji. Po przepracowaniu tamtego rozdziału
        może się okazać, że będzie możliwe przyjęcie syntetycznego art. 8 w
        udoskonalonym brzmieniu. Jeżeli okaże się, że treść art. 8 znalazła się
        w rozdziale o źródłach prawa, to wówczas podejmiemy stosowną decyzję.
        Proponuję, żeby dzisiaj nie dyskutować i niczego nie przesądzać w tej
        sprawie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        Na tle dotychczasowej dyskusji mam dwie refleksje oraz pytania do
        ekspertów lub innych osób, które będą formułowały przepisy. Pierwsza
        sprawa dotyczy propozycji przedłożonej przez prof. S. Gebethnera, która
        stanowi, że Polska przestrzega prawa międzynarodowego. Wydaje się, że
        jest to propozycja za daleko idąca, bo prawo międzynarodowe jest bardzo
        szerokim zbiorem norm i trzeba będzie to zdanie skonkretyzować, mówiąc
        np. tylko o ratyfikowanych umowach międzynarodowych. W przeciwnym razie
        pozwalać będziemy na interpretację bieżącego stosowania prawa w kraju na
        podstawie bardzo rozległej definicji. Trzeba wyostrzyć definicję, żeby
        nie doprowadziła ona do dowolności interpretacyjnej w stosowaniu prawa.
        Definicja taka deklaruje na zewnątrz naszą przychylność, a poza tym
        będzie miała skutki wewnętrzne. Druga sprawa dotyczy zasady
        konstytucjonalizmu, którą chcemy uznać za godną umieszczenia wśród zasad
        naczelnych. Z tym się zgadzam, ale zgłaszam problem, który nie do końca
        przewidziała podkomisja zagadnień systemu źródeł prawa. Chcemy napisać,
        że przepisy konstytucji stosuje się bezpośrednio, poza wyjątkami.
        Praktyka jest taka, że właśnie bezpośrednie stosowanie przepisów jest
        wyjątkiem. Taki jest zastany stan prawny. Większość kwestii regulowana
        jest ustawami i rzadko która norma konstytucyjna nadaje się do
        bezpośredniego stosowania i jest rzeczywiście bezpośrednio stosowana.
        Drugi ustęp w artykule dotyczącym zasady konstytucjonalizmu powinien
        uwzględniać dotychczasową praktykę. Przepisy konstytucji mogą być
        stosowane bezpośrednio, ale w znakomitej większości również w naszych
        propozycjach odsyłamy do ustaw. Trzeba oddać stan istniejący i stan,
        który będzie oboPosiedzenia Komisji Konstytucyjnej ZN wiązywał pod
        rządami nowej konstytucji. Na pewno będzie to sytuacja, w której
        bezpośrednie stosowanie konstytucji będzie należało do wyjątków.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Wiele osób mówiło o zasadzie konstytucjonalizmu. Chciałabym więc zwrócić
        uwagę na to, że zgłosiłam już projekt tej zasady, co prawda w nieco
        innym brzmieniu: „Wszystkie organy państwa są podporządkowane
        Konstytucji, wypełniają swoje uprawnienia w granicach w niej
        przewidzianych”. Pozwolę sobie przypomnieć, że prof. W. Osiatyński
        zaproponował komisji senackiej takie brzmienie zasady
        konstytucjonalizmu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Chciałbym poinformować panią senator, że gdybyśmy uznali, iż zamiast
        art. 8 będzie art. 69, to niewątpliwie pani propozycja będzie
        przegłosowana. Jest ona uwzględniona w zbiorczych wnioskach pani
        senator. W zbiorczych wnioskach senatora P. Andrzejewskiego mamy również
        zasadę konstytucjonalizmu. Art. 69 projektu podkomisji zawiera też taką
        zasadę.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        W art. 50 projektu senackiego znajduje się ust. I w następującym
        brzmieniu: „Konstytucja jest najwyższym prawem Rzeczypospolitej Polskiej
        '. Może przeczytam cały art. SO z rozdziału III — „Źródła prawa”: Ust.
        1. „Konstytucja jest najwyższym prawem Rzeczypospolitej Polskiej. Ust.
        2. Przepisy Konstytucji stosuje się bezpośrednio, chyba że Konstytucja
        stanowi inaczej. Ust. 3. Wszystkie akty prawne Rzeczypospolitej Polskiej
        muszą być zgodne z Konstytucją. Przepisy naruszające przepisy
        konstytucji lub wskazane w niej wartości i zasady nie mogą być
        stosowane, powinny być uchylone w trybie przewidzianym dla kontroli
        konstytucyjności aktów prawnych”.
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
        Chciałbym wyjaśnić nieporozumienie, które było zawarte w wypowiedzi
        posła W. Majewskiego. Wiele aktów normatywnych stosowanych jest obok
        konstytucji. Kiedy te akty są sprzeczne z konstytucją, to ona ma prymat
        i stosuje się ją bezpośrednio. Nie można odwoływać się do dotychczas
        obowiązujących przepisów, które są sprzeczne z konstytucją. Powinny one
        zostać niezwłocznie uchylone. Wprowadzenie zasady bezpośredniego
        stosowania konstytucji, z ograniczeniami, które znalazły się w tym przed
        chwilą cytowanym artykule, może być podstawą orzecznictwa sądowego. Nie
        widzę sprzeczności między tym rozwiązaniem, a obowiązywaniem prawa
        niższego rzędu niż ustawa, o ile jest ono zgodne z konstytucją.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/RzeplinskiAndrzej.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński:</strong>
        Proponuję następujące brzmienie tego przepisu: „Konstytucja jest
        najwyższym prawem Rzeczypospolitej i wiąże wszystkie organy państwa”.
        Chodzi o to, żeby wyjść od konstytucji. Druga część przepisu mówi, że
        organy państwa są podporządkowane konstytucji i mogą działać tylko na
        jej podstawie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KuleszaWladyslaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP dr. Władysław Kulesza:</strong>
        Idąc tropem wniosku posła R. Grodzickiego, który uważa, że art. 8 nie
        powinien znaleźć się w tym rozdziale i powinien być odesłany do
        rozdziału III o źródłach prawa, warto sprecyzować myśl, żeby w miejsce
        tego artykułu pojawił się przepis precyzujący zasadę konstytucjonalizmu.
        Artykuł odnoszący się do prawa międzynarodowego powinien być
        konsekwentnie przeniesiony do rozdziału o źródłach prawa. W rozdziale I
        nie powinien pojawić się żaden artykuł dotyczący prawa międzynarodowego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Wydaje mi się, że dyskusja nad fragmentem konstytucji dotyczącym zasady
        konstytucjonalizmu jest szczególnie ważna. Przepis ten rozwinąłbym o
        krok dalej. Zasadę dotyczącą tego, że konstytucja jest najwyższym prawem
        uzupełniłbym o to, że istnieje organ, który decyduje, co jest zgodne, a
        co sprzeczne z konstytucją. Widzę następujący artykuł, który byłby
        rozwinięciem propozycji prof. A. Rzeplińskiego: „„Konstytucja jest
        najwyższym prawem Rzeczypospolitej Polskiej i wiąże wszystkie organy
        państwa. Nieważność przepisów prawa sprzecznych z Konstytucją stwierdza
        Trybunał Konstytucyjny. Przepisy Konstytucji stosuje się bezpośrednio, o
        ile Konstytucja nie stanowi inaczej”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Jeżeli ktoś spośród członków Komisji chciałby wykorzystać ten wniosek,
        to bardzo proszę. O niezgodności przepisów prawa z konstytucją orzekać
        będzie Trybunał Konstytucyjny. Jest to nowa propozycja przedłożona przez
        prof. W. Osiatyńskiego.
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
        Nie można mówić o unieważnieniu ustaw czy innych aktów sprzecznych z
        konstytucją w następstwie orzeczenia Trybunału Konstytucyjnego. Jest to
        bardzo złożony problem. Większość aktów jest tylko uchylana, a nie
        unieważniana od początku ich obowiązywania. Nie można tej sprawy
        przesądzić poprzez użycie terminu „nieważność ”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Kończymy dyskusję nad art. 8 następującymi wnioskami, które jutro
        zostaną poddane pod głosowanie. Najdalej idącym wnioskiem jest
        propozycja wykreślenia art. 8 w tym miejscu i przeniesienia go do
        rozdziału o źródłach prawa. Druga propozycja dotyczy wpisania zasady
        konstytucjonalizmu, która zaproponowana jest w różnych wariantach. Mamy
        wnioski senator A. Grześkowiak i senatora P. Andrzejewskiego oraz
        propozycję podkomisji zawartą w art. 69. Zgłoszono jeszcze inne wnioski,
        które wpłynęły do sekretariatu Komisji i zostaną przedstawione do
        głosowania.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Jeżeli postanowimy, że zasada konstytucjonalizmu będzie potwierdzać, iż
        konstytucja jest najwyższym prawem Rzeczypospolitej Polskiej, to
        proponuję przenieść art. 50 z projektu senackiego do zasad naczelnych.
        Może tej propozycji nie wysłowiłam do końca.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Tak zrozumiałem panią senator. Art. 50 z projektu senackiego byłby w tej
        sytuacji głosowany alternatywnie do propozycji zawartej w art. 69
        projektu podkomisji i do wniosku senatora P. Andrzejewskiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/RotHenryk.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Henryk Rot (SLD):</strong>
        Zgłaszam wniosek, żeby zawiesić głosowanie nad art. 8 do czasu
        rozstrzygnięcia rozdziału o źródłach prawa i to bez względu na jego
        brzmienie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        Chciałbym sformułować zasadę konstytucjonalizmu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że najdalej idącym wnioskiem jest wykreślenie artykułu,
        następnie zawieszenie jego rozpatrywania i dalej — wymiana na zasadę
        konstytucjonalizmu. Możemy uznać, że dyskusja i wymiana pogl dów na
        temat propozycji art. 8 została zakończona.
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
        Chciałabym prosić o przerwanie dyskusji dzisiaj, ponieważ przechodzimy
        do artykułu oznaczonego w projekcie podkomisji numerem 9. Jest on
        niezmiernie ważny, bo dotyczy trójpodziału władzy. Jesteśmy bardzo
        zmęczeni, więc dobrze byłoby dyskusję rozpocząć jutro rano.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Sądzę, że moglibyśmy jeszcze omówić ten artykuł. Byłaby szansa na
        zakończenie prac nad rozdziałem I. Uważam, że artykuły 17 i 18 powinny
        wzbudzić mniej dyskusji. Prosiłbym o wykorzystanie czasu i
        przedyskutowanie art. 9. Nie możemy głosować wniosków formalnych tak
        daleko wykraczających poza ustalenia, które zapadły na początku
        posiedzenia. Ustaliliśmy, że obrady będą trwały do godz. 19.
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
        Pańska argumentacja mnie przekonuje i wycofuję wniosek formalny.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Z przykrością muszę powiedzieć, że posłowie Unii Wolności mają o godz.
        18 posiedzenie klubu parlamentarnego. Uważam, że w pełni uzasadniony był
        wniosek poseł K. Łybackiej. Jest to bowiem kompleks podstawowych
        problemów. Rozpoczynanie dyskusji w tych warunkach doprowadzi do jej
        powtórzenia jutro.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Nie ma łatwych problemów, chodzi o czas. Jeżeli czasu nie wykorzystamy
        dzisiaj, to jutro będziemy musieli dłużej dyskutować.
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Może nie mam prawa o tym mówić, ale chciałbym, żeby zaprotokołowano, że
        pojawia się autentyczny problem, ponieważ bardzo aktywnie dyskutujemy
        nad poszczególnymi zagadnieniami i rozwiązaniami, a głosowanie odbywa
        się następnego dnia w gruncie rzeczy w innym gronie. Wiem, że tego nie
        można uniknąć, ale chciałbym, by ten głos znalazł się w protokole obrad
        Komisji. Członkowie Komisji — głosujący — nie znają i nie słuchają
        argumentów przytaczanych w dyskusji. Z tego powodu jest mi bardzo
        przykro.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Chciałbym uspokoić pana profesora, bo wieczorem po zakończeniu obrad
        nieobecni członkowie Komisji w sposób bardzo dociekliwy dowiadują się o
        przebiegu prac w Komisji. Sądzę, że w głosowaniach wszyscy uczestniczą w
        sposób Świadomy. Prosiłbym ekspertów o wstępną opinię na temat głównych
        kwestii związanych z art. 9. „Art. 9. Ust. 1. Władza państwowa jest
        sprawowana przez rozdzielone i wzajemnie równoważące się (oraz
        współdziałające) organy ustawodawcze, wykonawcze i sądownicze. Wariant
        I. Ust. 2. Organami Rzeczypospolitej Polskiej w zakresie władzy
        ustawodawczej jest Sejm i Senat, w zakresie władzy wykonawczej — Rada
        Ministrów, w zakresie władzy sądowniczej — niezależne (niezawisłe) sądy
        (1 trybunały). Wariant II. Ust. 2. Władza ustawodawcza wykonywana jest
        przez Sejm i Senat, władza wykonawcza przez Prezydenta i Radę Ministrów,
        władza sądownicza — przez niezależne (i niezawisłe) sądy (i trybunały)”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Zwracam uwagę na wariant II, który — zdaniem zespołu przygotowującego
        ostateczny tekst — w Świetle rozstrzygnięcia dotyczącego pozycji
        prezydenta wydaje się a limine do wyeliminowania. W tym rozstrzygnięciu
        Komisja zadecydowała, że prezydent nie powinien być określany jako organ
        sprawujący władzę wykonawczą czy stojący na jej czele, ale jako gwarant
        ciągłości władzy państwowej.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Czy chodzi o wyeliminowanie wariantu II w wyniku przyjętej wcześniej
        zasady?
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/JaskierniaJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Jaskiernia (SLD):</strong>
        Odczytuję dalej sugestię prof. P. Sameckiego. Rozumiem, że pan profesor
        sygnalizuje, iż w konsekwencji podjętych głosowań kierunkowych ten
        wariant powinien być z urzędu skreślony. Wynika to z decyzji przyjętej
        już przez Komisję. Posiedzenia Komisji Konstytucyjnej ZN
      </p>
    </div>

    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że wniosek zmierza do skreślenia tego wariantu. Czy w tej
        sprawie ma ktoś odrębne zdanie?
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
        Jako członek podkomisji podstaw ustroju politycznego 1
        społeczno-gospodarczego chciałabym poinformować, że wariant II uzyskał
        minimalne poparcie posłów i senatorów. Popieram propozycję
        wyeliminowania tego wariantu.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Ze zdziwieniem odbieram tego rodzaju stanowisko, ponieważ ten przepis
        odpowiada obecnemu stanowi konstytucyjnemu. W związku z tym chciałbym
        wiedzieć, jakie zamiary kierują wnioskodawcami propozycji skreślenia
        tego wariantu przepisu odnośnie uprawnień prezydenta, które by
        uzasadniały zmianę dotychczasowej formuły konstytucyjnej na rzecz nowej
        formuły >o bliżej nie określonej treści.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KuleszaWladyslaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP dr. Władysław Kulesza:</strong>
        Powracamy do tego samego punktu, który był omawiany na jednym z
        ostatnich posiedzeń podkomisji. W moim przekonaniu dotychczasowe
        rozstrzygnięcia, które wyeliminowały tzw. wariant prezydencki z
        poszczególnych części konstytucji, nie przekreślają faktu, że ustalane
        obecnie regulacje mieszczą się w obrębie wariantu II. Podobnie jak poseł
        J. Ciemniewski nie jestem w stanie pojąć, cóż to za kuriozalny manewr
        powoduje, iż istniejące w projekcie ujęcie struktury organów państwa w
        wariancie I sprowadza się do tego, że głowa państwa jaka element organu
        Rzeczypospolitej nie istnieje. Rozumiem, że jest określona wola
        polityczna i jest fundamentalna sprawa, którą podejmował kiedyś prof. S.
        Ehrlich, a mianowicie — przełożenie normy politycznej na normę prawną.
        Jest to bardzo skomplikowany proces transformacyjny. W tym wypadku nie
        znajduję zrozumienia dla takiego sposobu procedowania, mimo określonej
        woli politycznej >którą muszę przyjąć jako pewien fakt. To, co zrobiono
        z tekstem projektu konstytucji, mieści się w obrębie wariantu II.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Wydaje się, że jest tu pewna logika. Skoro prezydent zostaje określony
        jako gwarant ciągłości władzy państwowej, czyli gwarant ciągłości i
        funkcji ustawodawczej, i funkcji wykonawczej, i funkcji sądowniczej >i
        być może innych funkcji państwowych, i jeśli rozumie się go jako
        arbitra, to nie może przecież być zaliczony do jednej z tych władz. Nie
        może być zaliczony do władzy wykonawczej i jakiejkolwiek innej władzy.
        Kto jest arbitrem nad władzami i zapewnia ciągłość wykonywania każdej z
        tych funkcji, nie może być zaliczany do jednej z władz. Sądzę, że nie
        zamyka to pola poszukiwań, aby do wariantu I ust. 2 wpisać prezydenta,
        ale nie w obrębie władzy wykonawczej. Posiedzenia Komisji Konstytucyjnej
        ZN
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        Powinniśmy rozwiązać ten problem. Zgodnie z obecną konstytucją prezydent
        jest po stronie władzy wykonawczej, a okazuje się, że wszystkie wnioski
        składane przez rząd, łącznie z budżetem państwa, są przez prezydenta
        torpedowane. Prezydent nie broni interesów władzy wykonawczej, tylko
        realizuje inną politykę. Powstaje problem — co zrobić z prezydentem.
        Jeżeli ma być wybierany przez naród i posiadać funkcje nie mieszczące
        się w klasycznym trójpodziale władzy, to w wariancie I trzeba dodać ust.
        3 i określić rolę prezydenta jako gwaranta jednolitości i ciągłości
        władzy. Nie może tak być, żeby w artykule o podstawowych organach władzy
        zabrakło prezydenta wybieranego przez naród. Prosiłbym ekspertów o
        doszlifowanie ust. 3, określającego prezydenta jako gwaranta ciągłości
        władzy nie mieszczącego się w klasycznym trójpodziale władzy.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Nad naszą dyskusją ciąży stwierdzenie posła W. Majewskiego, że coś
        trzeba zrobić z prezydentem. Niestety, to stwierdzenie odbierane jest w
        kontekście politycznym, a nie w kontekście ustrojowym. Formuła
        dwuczłonowej egzekutywy jest znana systemowi konstytucyjnemu właśnie w
        takim ujęciu, które powoduje, że instytucja prezydenta służy
        równoważeniu władz. Dysponowane przez prezydenta środki są tymi, przy
        pomocy których władza wykonawcza traktowana łącznie — rząd i głowa
        państwa — posiada instrumenty równoważenia władzy ustawodawczej iw
        pewnym zakresie, minimalnym, władzy sądowniczej. Nie jest to żadne
        kuriozum ustrojowe, kiedy prezydent ze swoimi uprawnieniami funkcjonuje
        jako element systemu, w którym traktowany jest jako integralna część
        dwuczłonowej egzekutywy. Prezydent może mieć jeszcze silniejsze
        uprawnienia w stosunku do władzy ustawodawczej, gdy jest jedynym
        przedstawicielem władzy wykonawczej. W jaki sposób w konkretnej sytuacji
        i w konkretnych warunkach korzysta z takich czy innych uprawnień, nie
        jest w tej chwili przedmiotem dyskusji.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Rozumiem, że pana wywód zmierza do utrzymania wariantu II w
        przedstawionej formule.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Tak.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GrzeskowiakAlicja.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Senator Alicja Grześkowiak (NSZZ „S”):</strong>
        Konstytucja nie powinna być pisana ani przeciwko komuś, ani pod kogoś. W
        związku z tym uważam, że dyskusja, która nabrała bardzo politycznego
        charakteru, jest debatą niedobrą przy pisaniu projektu konstytucji. O
        określonych uprawnieniach przy pozycji władz przesądzają bardziej emocje
        niż konieczność określenia systemu władzy. W tej materii proponuję z
        projektu senackiego następujący przepis: „Ust. 1. Władza państwowa jest
        sprawowana przez rozdzielone i wzajemnie równoważące się organy
        ustawodawcze, wykonawcze i sądownicze. Ust. 2. Władza ustawodawcza
        wykonywana jest przez Sejm składający się z Izby Poselskiej i z Senatu,
        władza wykonawcza przez Prezydenta i Rząd, na którego czele stoi
        premier, władza sądownicza poprzez niezależne i niezawisłe sądy”. Proszę
        nie zwracać uwagi na użyte nazwy, ponieważ Senat uznał, że parlament
        dwuizbowy powinien nosić historyczną nazwę — Sejmu i składać się z Izby
        Poselskiej i Senatu. Sądzę, że trzeba uwzględnić fakt wybierania w
        drodze wyborów powszechnych Sejmu i Prezydenta. Chyba co do tego nie ma
        żadnej wątpliwości. Stosunek tych władz do zwierzchnictwa narodu jest
        identyczny, bo władzy tej udziela bezpośrednio naród. Nie ma żadnej
        racji, by jedną z tych władz czynić ważniejszą od drugiej. Każda jest
        ważna w zakresie swoich kompetencji. Prezydent, można powiedzieć, jest
        szefem egzekutywy. Taka jest koncepcja projektu senackiego, którą
        zgłaszam i proszę o jej poparcie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Głosując nad brzmieniem art. 9 jako jeden z wariantów przegłosujemy
        propozycję przedstawioną przez senator A. Grześkowiak.
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
        W pełni zgadzam się ze zdaniem senator A. Grześkowiak, że konstytucja
        nie powinna być pisana ani przeciwko komuś, ani dla kogoś. Jak sądzę,
        niekoniecznie mądrość wynikająca z mniej lub bardziej odległych d
        świadczeń historycznych musi być bagatelizowana. Proszę ekspertów, aby
        byli łaskawi wyjaśnić, jak należy rozumieć wynik naszego kierunkowego
        głosowania. Większością głosów zadecydowaliśmy, że prezydent jest
        gwarantem ciągłości władzy. Wobec tego opowiadam się za wariantem
        podkomisji. Wyjaśniam, że na pytanie: co zrobić z prezydentem, odpowiada
        art. 113 tekstu jednolitego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/SarneckiPawel.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Paweł Sarnecki:</strong>
        Nie wiem, jak to się stało, ale art. 113 nie został poprawiony i nie
        uwzględnia wyniku głosowania. Jest tam właśnie napisane, że prezydent
        jest gwarantem ciągłości władzy wykonawczej. Brzmienie tego artykułu
        jest błędne. Art. 113 ust. 1 powinien brzmieć: „Prezydent jest
        najwyższym przedstawicielem Rzeczypospolitej i gwarantem ciągłości
        władzy państwowej”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Nie ulega wątpliwości, że jeżeli w zasadach ustrojowych, w art. 9,
        mówimy o władzy państwowej, to jakieś sformułowanie dotyczące prezydenta
        wybieranego w wyborach bezpośrednich jest konieczne. Nawet może to być
        formuła przeniesiona z art. 113. Jest to problem, który nie może być
        pominięty.
      </p>
    </div>

    <!-- <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">strona 62      </p>
    </div> -->

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
        Art. 9 zarówno w ust. 1, jak i w dwóch wariantach ust. 2 zawiera liczne
        komplikacje i pułapki, których można by uniknąć, gdybyśmy zdecydowali
        się skrócić ten artykuł do zwrotu stwierdzającego: „Władza państwowa
        jest sprawowana przez organy ustawodawcze, wykonawcze i sądownicze ”.
        Tocząca się w tej chwili dyskusja nad wariantem II ust. 2 wskazuje na
        to, że wracamy do problemu już przegłosowanego. Chodzi o pozycję
        prezydenta w systemie podziału władzy. Niewątpliwie prezydent wybierany
        w bezpośrednich wyborach powinien być uwzględniony w tym rozdziale, ale
        w takim wariancie, w jakim został już przegłosowany, czyli jako gwarant
        ciągłości władzy. Dla jasności całej sprawy można dodać określenie
        „arbiter”. Byłbym przeciwny wymienianiu, jakie organy należą do
        poszczególnych władz, ponieważ powoduje to poważne komplikacje. Sama
        zasada podziału władzy mieści się w tym, co zaproponowałem.
        Wystarczające jest określenie, że władza państwowa jest sprawowana przez
        organy ustawodawcze, wykonawcze i sądownicze.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Przypominam, że mówimy o podstawowych zasadach ustroju. Co prawda
        „podstawowe” skreśliliśmy, ale niewątpliwie do tego sprowadza się istota
        tej zasady. Pamiętajmy, że mamy rozdziały poświęcone precyzyjnemu
        określeniu zarówno ustroju poszczególnych organów, ich współzależności,
        odrębności oraz wzajemnego współdziałania. Potraktujmy to jako jeden z
        wniosków do rozpatrzenia.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/MajewskiWit.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Wit Majewski (SLD):</strong>
        W uzupełnieniu mojego wystąpienia chciałbym podać treść proponowanego
        art. 9 ust. 1 w brzmieniu podkomisji, ust. 2 w wariancie I podkomisji i
        ust. 3 w brzmieniu: „Prezydent jako najwyższy przedstawiciel
        Rzeczypospolitej gwarantuje ciągłość i współdziałanie władz ".
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/CiemniewskiJerzy.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Jerzy Ciemniewski (UW):</strong>
        Proponowałbym odejście od formuły organów w tym artykule. Proponuję
        następującą treść art. 9: „Ustrój Rzeczypospolitej Polskiej opiera się
        na podziale i równowadze władzy ustawodawczej, wykonawczej i władzy
        sądowej”. Przy takiej propozycji odchodzimy od formuły organów
        państwowych i jest czystość konstrukcji podziału władz.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Byłbym ogromnie wdzięczny, gdyby zechciał pan poseł przedstawić ten
        wniosek na piśmie.
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
        Proponuję art. 9 składający się z trzech ustępów. Dwa pierwsze ustępy w
        brzmieniu jednolitego projektu przygotowanego przez podkomisję i ust. 3:
        „Prezydent przez swój arbitraż zapewnia ciągłość władzy państwowej”.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Proszę o zgłoszenie tego wniosku na piśmie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/PietrzakMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:</strong>
        Wydaje mi się, że niektórzy zakładają, iż tworzy się konstytucję na
        okres kilku miesięcy do najbliższych wyborów, że konstytucję pisze się
        przeciw określonej osobie. Historia się powtarza, bo tak było zarówno z
        konstytucją marcową, jak i z konstytucją kwietniową. Nic nowego pod
        słońcem także i dzisiaj. Konstytucję tworzy się chyba na okres co
        najmniej jednego pokolenia. Takie powinny być ambitne zamiary twórców
        ustawy zasadniczej. Pewne względy współczesne nie powinny prowadzić do
        zmiany całej koncepcji ustroju państwowego. Jeżeli odejdziemy od
        monteskiuszowskiego podziału władzy na władzę ustawodawczą, wykonawczą i
        sądową oraz prezydenta usuniemy poza ten system władz, to wówczas
        stworzymy nowy system ustrojowy. Nie wiadomo, czym on będzie. Wiemy,
        czym jest ustrój parlamentarny. Oparty jest on na równowadze władzy
        ustawodawczej i wykonawczej. Władza sądowa zawsze stoi z boku. Jeżeli
        przyjmiemy zasadę, że prezydent jest gwarantem władzy państwowej, to nie
        bardzo wiemy, co to znaczy. Wnioskodawcy nie bardzo potrafili wyjaśnić,
        co to znaczy „gwarant ciągłości władzy państwowej”. Jakie to ma
        konsekwencje praktyczne w przełożeniu na określone rozwiązania prawne?
        Skoro prezydent ma pochodzić z wyborów powszechnych, to przecież musi
        posiadać nawet jako gwarant ciągłości władzy państwowej określone
        uprawnienia. Zanim dokładnie nie przedyskutuje się pozycji prezydenta
        konkretnie rozpisanej na przepisy konstytucyjne, to trudno w tej chwili
        cokolwiek ustalać.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Gdyby pójść śladem wniosku prof. L. Wiśniewskiego, czy posła J.
        Ciemniewskiego i zapisać w tym artykule wyłącznie samą zasadę, to chyba
        nie napotkalibyśmy przeszkód. I tak wszystkie kwestie szczegółowe
        związane z naczelnymi organami państwa będziemy musieli przedyskutować
        we właściwym momencie przy omawianiu odpowiedniego rozdziału.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/PietrzakMichal.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Przedstawiciel Prezydenta RP, prof. Michał Pietrzak:</strong>
        Dlatego przychylam się do wniosku posła J. Ciemniewskiego.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/GebethnerStanislaw.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>
          Przedstawiciel Rady Ministrów, prof. Stanisław Gebethner:
        </strong>
        Ze względu na czas nie będę podejmował polemiki z moim uczonym kolegą,
        bo mógłbym to samo powiedzieć na korzyść rządu, co na korzyść
        prezydenta. W pełni popieram wniosek posła J. Ciemniewskiego i prof. L.
        Wiśniewskiego, żeby artykuł składał się tylko z pierwszego ustępu. Gwoli
        ścisłości chciałbym przypomnieć, że w głosowaniu kierunkowym przyjęto
        takie rozwiązanie, jakie jest zapisane w art. 113. Prezydent jest
        gwarantem ciągłości władzy wykonawczej. Poprawki zmierzające do
        zapisania ciągłości władzy państwowej lub inne poprawki stoją w
        sprzeczności z decyzją podjętą przez Komisję w czasie głosowania w tej
        Posiedzenia Komisji Konstytucyjnej ZN materii. Komisja jest władna
        zmienić zdanie, ale gwoli ścisłości chciałem to przypomnieć. Potwierdza
        to, że w tym rozdziale należy się ograniczyć tylko do ust. 1.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Po obradach zapytam obu panów profesorów, jaki system mamy obecnie.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/OsiatynskiWiktor.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Ekspert Komisji, prof. Wiktor Osiatyński:</strong>
        Nie byłem obecny na poprzednim posiedzeniu Komisji, ale na podstawie
        sprawozdań odniosłem wrażenie, że ustalono już, iż prezydent jest
        gwarantem ciągłości władzy wykonawczej, a nie gwarantem władzy
        państwowej. Określenie „gwarant ciągłości władzy państwowej” dawałoby
        prezydentowi bądź jego prawnikom tytuł do roszczenia prawa do
        sprawowania władzy ustawodawczej, kiedy Sejm nie funkcjonuje albo po
        rozwiązaniu parlamentu. Wtedy prezydent byłby gwarantem ciągłości władzy
        państwowej, a więc władzy w całości. Takie rozwiązanie byłoby ryzykowne
        i niebezpieczne. Gwarant ciągłości władzy wykonawczej to ten, kto w
        razie upadku rządu dba o to, by powstał rząd następny. Poprzednie debaty
        rozumiałem w ten sposób, że istnieją koncepcje silnej bądź słabej
        prezydentury. Prezydent może być szefem władzy wykonawczej. Może też być
        arbitrem, ale w takim przypadku — w moim przekonaniu — jest również
        członkiem władzy wykonawczej. W tym rozdziale mówimy o zasadach
        podstawowych. Uważam, że w tym miejscu powinno chodzić o zasadę podziału
        władzy, a nie atrybucji władz do poszczególnych organów. Przekonuje mnie
        projekt posła J. Ciemniewskiego, zwłaszcza że z propozycji podkomisji
        eliminuje on organy ustawodawcze, wykonawcze i sądownicze. System
        podziału władzy mówi o trzech władzach, a nie, tak jak system jedności
        władzy państwowej w PRL, o organach jednolitej władzy. Uważam, że jest
        to dobra propozycja.
      </p>
    </div>
    <div class="flex pt-4 speaker">
      <img
        class="w-32 h-32 rounded-lg shadow-lg"
        src="/images/kk-speakers/KwasniewskiAleksander.png"
        alt=""
        loading="lazy"
        width="110"
        height="110" />
      <p class="px-16 py-8 mt-8 rounded-lg shadow-lg">
        <strong>Poseł Aleksander Kwaśniewski (SLD):</strong>
        Namawiałbym nas wszystkich, żebyśmy poszli tym śladem, o którym mówił
        poseł J. Ciemniewski. Proszę ten głos traktować jako wypowiedź w
        dyskusji, a nie jako głos przewodniczącego. Moim zdaniem nie ma
        konieczności, aby w naczelnych zasadach wchodzić dalej niż do kwestii
        generalnej, tzn. zasady rozdziału władzy, tym bardziej że o wszystkim
        mówimy w kolejnych rozdziałach poświęconych w całości ustrojowi organów
        państwa. Myślę, że nieuniknione rozstrzygnięcia w tych sprawach dopiero
        nas czekają. Biorąc pod uwagę tempo naszych prac i fakt, że rozdział
        „Prezydent RP” zaczyna się od art. 113, myślę, że nie tylko może upłynąć
        ta kadencja prezydenta, ale możemy mieć jeszcze doświadczenia z
        następnej pełnej kadencji. Wtedy podejmiemy dyskusję o szczegółach.
        Proszę to traktować jako pesymistyczny zart. Sugerowałbym, żebyśmy jutro
        poszli w kierunku określenia generalnej zasady ustrojowej zawartej w
        art. 9, bo ona i tak musi znaleźć swoje rozwinięcie w poszczególnych
        rozdziałach. Dyskusję na ten temat i tak powtórzymy później. Posłowie J.
        Ciemniewski, K. Łybacka i W. Majewski zgłosili konkretne wnioski. Mamy
        również wnioski senator A. Grześkowiak i senatora P. Andrzejewskiego,
        inaczej formułujące to zagadnienie. Jutro przejdziemy do głosowań nad
        brzmieniem artykułów: 7, 8 19 na podstawie przeprowadzonej dzisiaj
        dyskusji. Była prośba, żeby ze względu na posiedzenie klubu
        parlamentarnego Unii Wolności zakończyć dzisiejsze posiedzenie o godz.
        18, więc proponuję zamknąć obrady. Jeżeli są jeszcze inne wnioski w
        sprawie art. 9, to proszę je zgłosić. Z, uwagi na prośby ze strony
        części posłów kończymy dzisiejsze obrady. Jutro wznawiamy obrady o godz.
        9.30. Zaczniemy posiedzenie od głosowań, a następnie będziemy
        kontynuowali dyskusję do godz. 16. Zamykam obrady Komisji Konstytucyjnej
        w dniu dzisiejszym.
      </p>
    </div>
  </div>
</div>
