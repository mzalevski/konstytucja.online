<script>
  import { fly } from "svelte/transition";
  import Nav from "../../../components/Nav.svelte";
  import Utterance from "../../../components/Utterance.svelte";
  import { EventManager } from "mjolnir.js";
  import { onDestroy, onMount } from "svelte";
  import { goto, prefetch } from "@sapper/app";
import { isMobile } from "../../_helpers";

  let eventManager;
  let showDropdown = false;

  const onSwipeLeft = () => {
    if (showDropdown) showDropdown = false;
    else goto("/komisja/14/2");
  };

  const onSwipeRight = () => {
    if (showDropdown) showDropdown = false;
    else goto("/komisja/14");
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
    prefetch("/komisja/14");
    prefetch("/komisja/14/2");
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
  <title>Dzień 1 - Biuletyn nr 14</title>
</svelte:head>

<Nav {showDropdown} segment={"info"} />

<div class="flex justify-between pt-4 pb-8 mb-8 border-b">
  <div>
    <h1
      class="text-lg font-thin sm:text-xl lg:text-2xl xl:text-3xl"
      in:fly={{ x: -50, duration: 1000 }}
    >
      Obrady w dniu 21 lutego 1995 r.
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
    <a rel="prefetch" href="/komisja/14/2">
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
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Otwieram posiedzenie Komisji Konstytucyjnej Zgromadzenia Narodowego.
        Porządek obrad obejmuje rozpatrzenie kolejnych artykułów zapisanych w
        poszczególnych rozdziałach wielowariantowego projektu Konstytucji RP.
        Każdego dnia nasze obrady będziemy kończyć sprawami różnymi. W czwartek
        jedną z bardziej istotnych spraw będzie przyjęcie harmonogramu prac
        Komisji Konstytucyjnej na kolejne miesiące. Już dzisiaj wyraźnie widać,
        że w zaplanowanych terminach nie zakończymy naszych prac. Członkowie
        Komisji otrzymają projekt terminarza wstępnie uzgodnionego z Kancelarią
        Sejmu i Kancelarią Senatu. Kalendarz ten nie koliduje z posiedzeniami
        Sejmu i Senatu, ale niewątpliwie nakłada poważne obowiązki na członków
        Komisji Konstytucyjnej. Zbieramy się i pracujemy wyłącznie w wolnych
        terminach. Jeżeli nie byłoby zastrzeżeń do takiego porządku obrad ..."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Ciągle nie udaje się uniknąć kolizji między komisjami sejmowymi a
        Komisją Konstytucyjną, Jutro, niestety, przez cały dzień obraduje
        Komisja Polityki Gospodarczej, Budżetu i Finansów. Proszę przynajmniej o
        jedną rzecz — druga część obrad Komisji Polityki Gospodarczej, Budżetu i
        Finansów jest bardzo istotna — abyśmy jutro do godz. 16 mogli zakończyć
        nasze prace."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jest wniosek, abyśmy jutro zakończyli obrady do godz. 16. Sugeruję
        przyjąć propozycję posła R. Bugaja, aby jutro do godz. 16 zakończyć
        nasze prace, umożliwiając kilku członkom Komisji Konstytucyjnej udział w
        posiedzeniu Komisji Polityki Gospodarczej, Budżetu i Finansów. Czy są
        inne uwagi do porządku dziennego? Po przyjęciu porządku obrad,
        przedstawię ich terminarz i powiem coś bliżej na temat głosowań. Jeśli
        nie ma sprzeciwu wobec zaproponowanego porządku obrad, sugeruję
        następujący tryb prac: po pierwsze, jeżeli okaże się, że dysponujemy
        wystarczającą liczbą członków Komisji Konstytucyjnej, to zgodnie z
        zapowiedzią przeprowadzimy głosowania wniosków do artykułów 11, 12, 13,
        14 oraz zadecydujemy o losie artykułów 17 i 18. Przypominam, że dyskusję
        w sprawie powyższych artykułów poza art. 15 z rozdziału I
        przeprowadziliśmy na poprzednim posiedzeniu. Artykuły 17 i 18 dotyczą
        stolicy i godła; musimy zdecydować, czy pozostawiamy je w rozdziale I
        „Zasady ustroju” czy też przenosimy je do części końcowej projektu
        jednolitego Konstytucji RP. W tej chwili odbylibyśmy głosowania nad
        powyższymi artykułami, zgodnie ze zgłoszonymi wnioskami. W godzinach
        13.30—15 planujemy przerwę. Od godz. 15 — chyba że wcześniej skończymy
        głosowania — prowadzilibyśmy rozmowę na temat art. 15. Przypominam, że
        dyskusję nad tym artykułem już przeprowadziliśmy wtedy, gdy omawialiśmy
        główne dylematy konstytucyjne. Było to 4 tygodnie temu. Wówczas
        przyjęliśmy rozstrzygnięcie polegające na ponownym skierowaniu
        zgłoszonych wariantów do podkomisji podstaw ustroju politycz nego i
        społeczno-gospodarczego w związku z pojawieniem się kompromisowych
        propozycji, uwzględniających wnioski kościołów i związków wyznaniowych.
        Pracowaliśmy według bardzo napiętego terminarza; stąd wynikła propozycja
        posła R. Bugaja, aby umożliwić spotkanie podkomisji zaraz po ogłoszeniu
        przerwy. Wszyscy dostali już zawiadomienia w tej sprawie. W związku z
        tym, sugeruję ogłoszenie przerwy zaraz po zakończeniu głosowań. Wtedy
        prace po obiedzie rozpoczęlibyśmy wcześniej, o godz. 14 lub - 14.30.
        Będzie to jednak zależało od przebiegu głosowań. Czy jest zgoda na
        przedstawiony terminarz? Dzisiejsze obrady skończymy ok. godz. 19. Jutro
        posiedzenie Komisji rozpocznie się o godz. 9.30. Przerwa będzie w godz.
        13.30-15. Jeżeli jutrzejsze obrady zakończymy o godz. 15, przerwa będzie
        odpowiednio wcześniej. Mam prośbę, abyśmy w czwartek rozpoczęli nasze
        prace o godz. 9, dlatego że możemy obradować jedynie do obiadu, czyli do
        godz. 13 lub 13.30. Właściwie powinniśmy zakończyć posiedzenie o godz.
        13, mam jednak zgodę ministra W. Sawickiego na przedłużenie obrad o
        kwadrans. Potem sala musi zostać przygotowana do obrad Senatu."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Kiedy odbędą się głosowania nad przepisami dotyczącymi stosunków
        państwo-—kościół?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Być może dzisiaj lub jutro rano; zależy to od prac podkomisji. Tak
        wygląda tryb naszych bieżących prac."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Nie chciałbym, aby głosowania te odbyły się jutro."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czwartek nie jest szczęśliwym dniem. Głosowania uzależniam od sposobu
        przygotowania wniosków przez podkomisję podstaw ustroju politycznego i
        społeczno-gospodarczego."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Mam prośbę, aby głosowania zawsze odbywały się w godzinach porannych.
        Uważam, że powinniśmy głosować rano — 1 dzisiaj, 1 jutro."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Mam prośbę, aby przerwa została zarządzona nie później niż o godz. 13.
        Przewodniczący podkomisji zwołał jej posiedzenie właśnie na godz. 13.
        Uprzedzałem, że jest to dla mnie pora zbyt późna. Przewodniczący A.
        Kwaśniewski w tej chwili zapowiada, iż przerwa zacznie się o godz.
        13.30. O tej godzinie w żaden sposób nie mogę wziąć udziału w pracach
        podkomisji podstaw ustroju politycznego i społeczno-gospodarczego."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Zweryfikowałem swoją propozycję. Głosowania zakończymy tak szybko, jak
        tylko to będzie możliwe; wtedy od razu ogłoszę przerwę, aby mogła się
        zebrać podkomisja. W tej chwili jest godz. 11.15. Jeżeli w ciągu jednej
        godziny lub godziny i piętnastu minut uda się nam przeprowadzić
        głosowania, podkomisja podstaw ustroju politycznego 1
        społeczno-gospodarczego będzie mogła spotkać się w celu omówienia
        propozycji do art. 15. Proponuję, abyśmy pracowali właśnie w takim
        trybie. Czy wszyscy członkowie Komisji otrzymali propozycje poprawek do
        artykułów 11-14, zgłoszonych na posiedzeniu Komisji Konstytucyjnej w
        dniu 9 lutego br. — druk nr 5? Po rozpatrzeniu tych poprawek przejdziemy
        do głosowania — zgodnie ze zgłoszonymi wnioskami — nad umiejscowieniem
        artykułów 16-18, odnoszących się do symboli państwa. W sprawie owych
        trzech artykułów nie zgłoszono żadnych innych wniosków; nawet
        przedstawiciele dawnych stolic Polski nie zgłosili żadnych zastrzeżeń do
        art. 18. Nie ma potrzeby przeprowadzania dyskusji merytorycznej na ten
        temat. Ponawiam moje pytanie, czy wszyscy członkowie Komisji
        Konstytucyjnej mają poprawki do artykułów 12-14? Proponuję, aby w tej
        chwili przypomnieć dyskusję, która toczyła się dwa tygodnie temu.
        Dotyczyła ona dwóch kwestii, poza merytorycznymi sformułowaniami zapisów
        powyższych artykułów. Dyskutowaliśmy nad kwestiami samorządu
        terytorialnego. Podjęliśmy też osobną dyskusję nad innymi formami
        samorządu, a także możliwymi ograniczeniami w tej mierze, czyli nakazami
        np. obligatoryjnej przynależności do samorządów. Znalazło to
        odzwierciedlenie w niektórych wnioskach, np. we wnioskach posła M.
        Mazurkiewicza lub posła L. Moczulskiego. Są też propozycje generalnych
        zapisów i np. we wniosku nr 4 do art. 1l mówi się ogólnie o samorządach,
        nie rozdzielając ich na samorządy terytorialne oraz na inne formy
        samorządności. Są to propozycje podkomisji podstaw ustroju politycznego
        i społeczno-gospodarczego oraz indywidualnych osób. W sumie np. do art.
        11 zgłoszono siedem wniosków."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Nie wszyscy członkowie Komisji Konstytucyjnej byli obecni w końcowej
        fazie dyskusji nad art. 11, dlatego pragnę przypomnieć, na czym polega
        różnica pomiędzy wariantami I, I i MI zaproponowanymi przez podkomisję
        podstaw ustroju politycznego i społeczno-gospodarczego do tego artykułu.
        W pierwszym przypadku zespół ds. samorządu terytorialnego podkomisji
        organów władzy ustawodawczej, wykonawczej i samorządu terytorialnego
        zaproponował pojęcie „gwarantowania udziału samorządu terytorialnego w
        sprawowaniu władzy publicznej”. Członkowie zespołu zwracali uwagę na to,
        że określenie: „samorząd terytorialny jest podstawową formą udziału
        obywateli w sprawowaniu władzy publicznej”, jest tylko opisaniem
        rzeczywistości. Mamy powiedziane, że samorząd jest podstawową formą, ale
        nie może to stanowić żadnych podstaw do konkretnego roszczenia; istnieją
        inne formy udziału obywateli w sprawowaniu władzy publicznej. Samorząd
        jest formą podstawową. Natomiast gwarancja udziału w sprawowaniu władzy
        publicznej, to w przekonaniu członków zespołu było coś więcej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="W tej chwili na sali jest już obecnych 28 członków Komisji
        Konstytucyjnej. Myślę, że możemy przejść do głoSOowań. Czy są pytania do
        złożonych wniosków?"
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Pragnę się upewnić, czy jedno z określeń użyte w wielu wariantach i
        wielu propozycjach jest właściwą formą odmiany: „zapewnia się możliwość
        działania innym formom samorządu czy „,,... innych form samorządu”?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="O którym wniosku mówił poseł J. Szymański?"
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Ww propozycjach podkomisji do art. 11 każdorazowo używa się wyrazów:
        „innych form samorządu”. Jest pytanie, czy nie lepiej będzie zapisać:
        „innym formom samorządu ?"
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Myślę, że wyraziłem się bardzo jasno i nie ma potrzeby objaśniać mojej
        wypowiedzi. Stawiam pytanie, czy z punktu widzenia poprawności języka
        propozycja podkomisji do art. 1l jest właściwie sformułowana? Chciałbym
        uzyskać odpowiedź na to pytanie przed rozpoczęciem głosowań."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Według mnie jest „możliwość działania” kogo? czego? i „możliwość
        działania” komu? czemu? Przy formach osobowych poprawne byłoby
        sformułowanie: „możliwość działania innym ludziom”. W omawianym
        przypadku powinien być dopełniacz, czyli: „możliwość działania innych
        form samorządu”, a nie: „możliwość działania innym formom samorządu”.
        Przy formie osobowej byłaby np.: „możliwość działania innym organizacjom
        ”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Kto jeszcze pragnie wystąpić w roli językoznawcy i wyjaśnić, która forma
        jest poprawna?"
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Myślę, że wyraz „form”, który powtarza się w proponowanych przepisach,
        jest nieco rażący. Czy nie można powiedzieć po prostu: „innych
        samorządów”, skoro podstawowy samorząd, zwany terytorialnym, został
        wymieniony wcześniej? Przedstawiciel Prezydenta RP, prof. Michał
        Pietrzak: Mam zasadnicze pytanie dotyczące ust. 2 we wszystkich
        wariantach podkomisji. W ust. 1 owych wariantów jest mowa, że zasadniczą
        cechą samorządu terytorialnego jest udział w sprawowaniu władzy
        publicznej. Wszystkie pozostałe samorządy są określone w taki sposób,
        jakby nie miały jakiejś cząstki udziału w sprawowaniu władzy publicznej.
        Założenie jest następujące: samorząd terytorialny uczestniczy w
        Sprawowaniu władzy publicznej, a pozostałe samorządy — nie uczestniczą.
        Chyba tak nie jest."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="W tej chwili odbywa się doprecyzowanie wniosków. Przypominam, że dwa
        tygodnie temu odbyliśmy już de 5 batę w tej sprawie. Ponieważ skład
        Komisji Konstytucyjnej poza ekspertami, gośćmi, przewodniczącym i
        wiceprzewodniczącym, jest zmienny, możemy niechcący wrócić do dyskusji,
        którą już odbyliśmy. Rozumiem, że po wystąpieniach posła W. Majewskiego
        i senatora H. Rota wątpliwości zostaną już wyjaśnione."
    />

    <Utterance
      speaker="Poseł Wit Majewski (SLD)"
      imgPath="/images/kk-speakers/MajewskiWit.png"
      text="Proponuję nie prowadzić sporów filologicznych, ponieważ brak jest
        właściwych ekspertów. Myślę, że po przegłosowaniu wszystkich artykułów,
        spojrzą na nie językoznawcy. Jeśli zaproponują poprawki, które nie
        zmienią prawnego i politycznego brzmienia Konstytucji RP, to je
        przyjmiemy."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Będzie dokładnie tak, jak proponuje poseł W. Majewski. Informowałem już
        członków Komisji, że w momencie, gdy projekt Konstytucji RP zostanie
        przygotowany, poprosimy znawców języka polskiego i prawników o
        ujednolicenie treści zapisów. Jest to kolejny etap prac; na razie mówimy
        o zawartości merytorycznej ustawy zasadniczej."
    />

    <Utterance
      speaker="Senator Henryk Rot (SLD)"
      imgPath="/images/kk-speakers/RotHenryk.png"
      text="Pragnę zabrać głos ad vocem do wypowiedzi prof. M. Pietrzaka. W wersji
        art. 1l ust. 2, którą zaproponowaliśmy wspólnie z senatorem S$.
        Pastuszką, dopisaliśmy, iż chodzi o udział innych form samorządu w
        sprawowaniu władzy publicznej. Poseł W. Majewski stwierdził, że
        prowadzimy spory drugorzędne. To nieprawda. Brak lub dodanie jednego
        wyrazu może mieć daleko idące konsekwencje prawno-ustrojowe. W art. 1l
        bez względu na to, którą wersję przyjmiemy, nie chodzi jedynie o
        przyzwolenie na działalność samorządów. Gdyby nie było dodane, iż chodzi
        o działalność w zakresie władzy publicznej, to nie potrzeba by było
        żadnej ustawy. Samorząd klatki schodowej nie musi czekać na ustawę.
        Według mnie, w art. 1l ust. 2 muszą się znaleźć dodatkowe wyrazy: „w
        sprawowaniu władzy publicznej”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Po wystąpieniu poseł I. Lipowicz przejdziemy do głosowań."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Chcę przypomnieć, że odbiegamy od ustaleń przeprowadzonej dyskusji.
        Szkoda, że na poprzednim posiedzeniu Komisji nie wszyscy byli obecni,
        gdyż wtedy wszechstronnie przedyskutowaliśmy tę kwestię tłumacząc, że
        samorząd terytorialny jest jedyną formą o powszechnej legitymacji
        demokratycznej, która może mieć gwarancje i roszczenia o udział w
        sprawowaniu władzy, Nie każdy samorząd taksówkarzy, nie każda wspólnota
        domowa, nie każdy samorząd skinhead” ów ma w tym kraju roszczenie o
        udział w sprawowaniu władzy publicznej. 6 NO TT r — ——m mn may mw mam mo
        mom pm mai aa O Mamma m wwa OT m Uważajmy, abyśmy w słusznym dążeniu do
        rozszerzania zakresu praw — szczególnie jestem zdziwiona, że nawiązał do
        tego prof. M. Pietrzak — nie doprowadzili do tego, iż różne rodzaje
        podmiotów będą miały uprawnienia do omawianej gwarancji. Czym innym jest
        zapewnienie możliwości, a czym innym jest gwarancja udziału w
        sprawowaniu władzy publicznej. Rezultat będzie taki, że np. minister
        zdrowia i opieki społecznej będzie miał roszczenia do udziału w
        sprawowaniu władzy publicznej, gdyż stanowi on organ administracji
        państwowej i takie samo roszczenie będzie miał np. samorząd lekarski. W
        tej chwili reguluje to ustawa. Mogą powstać takie konflikty
        kompetencyjne, że będziemy musieli rozstrzygać je na nowo."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Kończymy już dyskusję. Wnioski są sformułowane jasno. Powroty do
        dyskusji już zakończonych uniemożliwią prace Komisji Konstytucyjnej
        Zgromadzenia Narodowego. Informuję, że są trzy warianty art. 1l
        zgłoszone przez podkomisję, które rozdzielają samorząd terytorialny od
        innych form samorządu. Samorząd terytorialny mma gwarantowany udział w
        sprawowaniu władzy publicznej. Według owych propozycji inne samorządy
        miałyby działać na zasadach określonych w ustawie. Najbardziej
        generalnym zapisem art. II — przypominam, że mówimy o rozdziale I
        „Zasady ustroju” — jest wniosek nr 4 prof. M. Pietrzaka i dra W.
        Kuleszy, który odnosi się tylko do zasady samorządności: „Rzeczpospolita
        Polska gwarantuje samorządom udział w sprawowaniu władzy publicznej . W
        następnych rozdziałach Konstytucji RP byłyby zawarte kwestie związane
        zarówno z samorządem terytorialnym, jak i z innymi formami samorządu.
        Wszystkie pozostałe propozycje treści art. 1l są jasne. Jeśli członkowie
        Komisji Konstytucyjnej wczytają się w nie, znajdą odzwierciedlenie
        własnych poglądów, a być może, nawet wątpliwości. Proponuję, abyśmy
        przesądzili, który wariant podkomisji zapiszemy jako art. 11. Na
        początek wszakże sugeruję, abyśmy rozstrzygnęli kwestię, która dotyczy
        wariantów II i III zgłoszonych przez podkomisję iczy w art. 1l ust. I ma
        się znaleźć stwierdzenie: „Samorząd terytorialny jest podstawową formą
        udziału obywateli w sprawowaniu władzy publicznej” z dodatkiem „na
        szczeblu lokalnym”? Pierwsze głosowanie powinno dotyczyć uporządkowania
        wariantów podkomisji. Poddaję pod głosowanie wniosek o uzupełnienie
        wariantów II i III art. 11 ust. 1 zaproponowanych przez podkomisję o
        stwierdzenie „na szczeblu lokalnym”. Stwierdzam, że w głosowaniu wniosek
        uzyskał 10 głosów popierających, 16 głosów przeciwnych, przy 3
        wstrzymujących się. W związku z powyższym w wariancie II i III art. 11
        ust. 1 podkomisji wykreślamy wyrazy „na szczeblu lokalnym”."
    />

    <Utterance
      speaker="Senator Henryk Rot (SLD)"
      imgPath="/images/kk-speakers/RotHenryk.png"
      text="Poprawka senatora S. Pastuszki i moja odnosi się do wariantu I, który
        niebawem będziemy głosować. Wobec tego wnoszę autopoprawkę; proszę
        senatora S. Pastuszkę, aby ją zaaprobował. W naszym wniosku jest błąd
        językowy. Po wyrazie „możliwość ” należy skreślić wyraz „działania” i
        zastąpić go wyrazem „udziału. Art. 11 ust. 2 w wariancie I otrzymałby
        brzmienie: „„Rzeczpospolita Polska, w granicach określonych ustawą,
        zapewnia innym formom samorządu możliwość udziału w sprawowaniu władzy
        publicznej .."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Po to, aby pozostało siedem wniosków do art. 11, zachodzi konieczność
        uporządkowania propozycji podkomisji oraz wyboru jednego spośród trzech
        wariantów. Potem przegłosowalibyśmy siedem wniosków, wśród których
        znalazłby się jednolity wariant art. 11 zgłoszony przez podkomisję.
        Proponuję, aby zastosować zasadę podobną do tej, jaką stosowaliśmy
        podczas innych głosowań. Sugeruję przegłosowanie wariantów I, II i IM;
        wariant, który uzyskałby największą liczbę głosów, stałby się propozycją
        podkomisji. Gdyby się okazało, że dwa warianty uzyskały więcej głosów
        „,za” niż „przeciw ”, to przegłosowalibyśmy, który z nich będzie
        uczestniczyć w finalnym głosowaniu nad art. 11. W tej chwili głosujemy
        pkt 1 — propozycje podkomisji — wariant I, II i III. Wariant II różni
        się od wariantu III wyrazami: „gwarantuje swobodę” 1 ,„zapewnia
        możliwość”. Merytorycznie treści owych warlantów są różne."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Mam uwagę co do sposobu głosowania. Zajmujemy się art. 1l. Najpierw
        musimy przejść do ust. 1. Podkomisja zaproponowała dwa brzmienia art. 1l
        ust. 1: „l. Rzeczpospolita Polska gwarantuje udział samorządu
        terytorialnego w sprawowaniu władzy publicznej” oraz „1. Samorząd
        terytorialny jest podstawową formą udziału obywateli w sprawowaniu
        władzy publicznej”. Musimy rozstrzygnąć, które z nich wybieramy; nie
        musimy głosować art. 11 ust. 1 z wariantu III, gdyż jest on identyczny z
        art. 11 ust. I z wariantu II. Propozycje posłów dotyczą innego brzmienia
        art. 11 ust. 1. Należy iść drogą ustępów. Najpierw przesądźmy treść ust.
        1, a potem wrócimy do ust. 2. Wtedy przegłosujemy autopoprawkę senatora
        H. Rota itd."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jest to niemożliwe z prostego względu. Bardzo długo dyskutowaliśmy nad
        tym, czy ustępy art. 1l mają być rozdzielane, czy wspólne. Przypominam,
        że mamy propozycje treści art. 11, która konsumuje zarówno kwestie
        samorządu terytorialnego, jak i innych form samorządu. We wszystkich
        wariantach podkomisji jest różna merytorycznie zawartość dotycząca
        samorządu tery a ma ma torialnego i innych form samorządu. Sugeruję,
        abyśmy głosowali warianty po kolei; różnią się one od siebie. Wniosek
        senatorów S. Pastuszki i H. Rota należy odczytywać następująco: art. 1l
        ust. | — treść zaproponowana w wariancie I podkomisji; ust. 2 — treść
        zapisana w pkt. 5 druk nr 5."
    />

    <Utterance
      speaker="Poseł Włodzimierz Cimoszewicz (SLD)"
      imgPath="/images/kk-speakers/CimoszewiczWlodzimierz.png"
      text="Na razie musimy poruszać się w obrębie wariantów przedstawionych przez
        podkomisję. W trzech wariantach są trzy elementy składowe. Trzy warianty
        wyczerpują wszystkie kombinacje, które są możliwe do uzyskania z ich
        zestawienia. W moim przekonaniu, najpierw powinniśmy określić
        preferencje w stosunku do wariantu zgłoszonego przez podkomisję, a
        dopiero potem nanosić ewentualne poprawki, jeśli taka będzie wola
        większości."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proponowałem to samo. Przegłosujmy warianty I, II, III zgłoszone przez
        podkomisję. Jeżeli okazałoby się, że dwa z nich uzyskały podobną liczbę
        głosów, przegłosowalibyśmy ten, który wygra w powtómym głosowaniu."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Rysuje się pewna wątpliwość, dlaczego faworyzuje się warianty podkomisji
        i dodatkowo dokonuje się wyboru jednego z nich. Wydaje mi się, że
        przewodniczący A. Kwaśniewski powinien zastosować metodę — uznaną przez
        członków Komisji na poprzednim posiedzeniu -—— polegającą na
        przegłosowaniu wszystkich poprawek jako równorzędnych. Uważam, że po
        kolei powinniśmy głosować warianty I, II i III podkomisji, poprawkę
        senator A. Grześkowiak itd. Zobaczymy, które z wniosków uzyskają
        największą liczbę głosów i dokonamy ostatecznych rozstrzygnięć."
    />

    <Utterance
      speaker="Senator Krzysztof Kozłowski (KD)"
      imgPath="/images/kk-speakers/KozlowskiKrzysztof.png"
      text="Członkowie podkomisji po to wspólnie pracowali, głosowali i dyskutowali,
        aby uzyskać wspólne stanowisko. Należy być konsekwentnym."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jeśli chodzi o propozycje wniosków, propozycje podkomisji są na miejscu
        pierwszym. Wiąże się to z procedurą, związaną także z regulaminem prac
        Komisji Konstytucyjnej. Jeżeli w wyniku pracy podkomisji powstały trzy
        warianty art. 11, to my, jako Komisja Konstytucyjna Zgromadzenia
        Narodowego, jesteśmy władni rozstrzygnąć, który z nich preferujemy. Poza
        tym członkowie naszej Komisji również zgłosili wnioski, które w
        głosowaniu będą potraktowane równoprawnie. Nie jest w tej chwili ważna
        sama procedura, ale przejście do głosowań. Mam nadzieję, że wyłoni się z
        tego większościowy pogląd Komisji Konstytucyjnej. Wcale nie mówię, że
        to, co proponuje poseł J. Szymański, jest nieprawidłowe. Chciałbym
        jednak uszanować pracę podkomisji i potraktować jej wnioski jako
        pierwsze w głosowaniach i uzgodnieniach. Czy jest na to zgoda członków
        Komisji? Widzę, że jest. Poddaję pod głosowanie wniosek o przyjęcie
        wariantu I art. 1l w następującym brzmieniu zaproponowanym przez
        podkomisję: „l. Rzeczpospolita Polska gwarantuje udział samorządu
        terytorialnego w sprawowaniu władzy publicznej. 2. Rzeczpospolita
        Polska, w granicach określonych ustawą, zapewnia możliwość działania
        innych form samorządu”. Stwierdzam, że w głosowaniu wniosek uzyskał 25
        głosów popierających, 2 głosy przeciwne, przy 2 wstrzymujących się.
        Poddaję pod głosowanie wniosek o przyjęciu wariantu II art. 1l w
        następującym brzmieniu zaproponowanym przez podkomisję: „l.
        Rzeczpospolita Polska gwarantuje udział samorządu terytorialnego w
        sprawowaniu władzy publicznej. | 2. Rzeczpospolita Polska, w granicach
        określonych ustawą, zapewnia możliwość działania innych form samorządu .
        Stwierdzam, że w głosowaniu wniosek uzyskał 25 głosów popierających, 2
        głosy przeciwne, przy 2 wstrzymujących. Poddaję pod głosowanie wniosek o
        przyjęciu wariantu art. 1l w następującym brzmieniu zaproponowanym przez
        podkomisję: „l. Samorząd terytorialny jest podstawową formą udziału
        obywateli w sprawowaniu władzy publicznej. 2. Rzeczpospolita Polska, w
        granicach określonych ustawą, gwarantuje swobodę działalności innych
        form samorządu”. Stwierdzam, że w głosowaniu wniosek uzyskał 2 głosy
        popierające, 26 głosów przeciwnych, przy | wstrzymującym Się. Poddaję
        pod głosowanie wniosek o przyjęcie wariantu III art. 1l w następującym
        brzmieniu zaproponowanym przez podkomisję: „l. Samorząd terytorialny
        jest podstawową formą udziału obywateli w sprawowaniu władzy publicznej.
        2. Rzeczpospolita Polska, w granicach określonych ustawą, zapewnia
        możliwość działania innych form samorządu . Stwierdzam, że w głosowaniu
        wniosek uzyskał 2 głosy popierające, 28 głosów przeciwnych, przy braku
        głosów wstrzymujących się. Rozumiem, że wolą Komisji Konstytucyjnej
        Zgromadzenia Narodowego przyjęliśmy wariant I art. 11 jako propozycję
        podkomisji. W tej chwili mamy siedem wniosków do art. ll, nad którymi
        przeprowadzimy głosowania. Przypominam, że są to: propozycja podkomisji
        w wersji wariantu I, propozycja senator A. Grześkowiak, propozycja
        senatora P. Andrzejewskiego, propozycja prof. M. Pietrzaka i dra W.
        Kuleszy, propozycja senatorów S. Pastuszki i H. Rota, składająca się z
        ust. l z wa 8 riantu I propozycji podkomisji oraz ust. 2 — uwzglę-
        dniając poprawkę — propozycja posła M. Mazurkiewicza, składająca się z
        wariantu I propozycji podkomisji oraz dodatkowego ust. 3, propozycja
        posła L. Moczulskiego, dotycząca całości art. 11. Przechodzimy do
        głosowań. W tej chwili będzieiny głosować nad siedmioma propozycjami do
        art. 11."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="W tej chwili będziemy głosować nad wersją podkomisji bez poprawek
        zgłoszonych m.in. przez senator A. Grześkowiak."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Ależ oczywiście. Tak jak już powiedziałem, przegłosujemy obecnie siedem
        wniosków do art. 11. Wniosek pierwszy jest niczym innym, jak propozycją
        podkomisji w brzmieniu wariantu I, który spośród 3 wariantów uzyskał
        największą liczbę głoSÓW. Potem będziemy głosować nad wariantem II
        senator A. Grześkowiak itd., aż wszystkie wnioski zostaną przegłosowane.
        Poddaję pod głosowanie wniosek o przyjęcie art. 1l w następującym
        brzmieniu zaproponowanym przez podkomisję — wcześniejszy wariant I
        propozycji podkomisji do art. 11: „1. Rzeczpospolita Polska gwarantuje
        udział samorządu terytorialnego w sprawowaniu władzy publicznej. 2.
        Rzeczpospolita Polska, w granicach określonych ustawą, zapewnia
        możliwość działania innych form samorządu . Stwierdzam, że w głosowaniu
        wniosek uzyskał 27 głosów popierających, 2 głosy przeciwne, przy 2
        wstrzymujących się. Poddaję pod głosowanie wniosek o przyjęcie art. 1l w
        następującym brzmieniu zaproponowanym przez senator A. Grześkowiak:
        „Rzeczpospolita Polska uznaje i gwarantuje saraorządowi terytorialnemu
        oraz samorządom tworzonym przez obywateli udział w sprawowaniu władzy”.
        Stwierdzam, że w głosowaniu wniosek uzyskał l głos popierający, 26
        głosów przeciwnych, przy 4 wstrzymujących się. Przechodzimy do wniosku
        oznaczonego nr 3. Poddaję pod głosowanie wniosek o przyjęcie art. 11 w
        następującym brzmieniu zaproponowanym przez senatora P. Andrzejewskiego:
        „l. Samorząd terytorialny jest elementem ustroju państwa. Rzeczpospolita
        Polska gwarantuje udział samorządu terytorialnego w sprawowaniu władzy.
        2. Rzeczpospolita Polska gwarantuje swobodę działalności innych form
        samorządności”. Stwierdzam, że w głosowaniu wniosek nie uzyskał głosów
        popierających; uzyskał natomiast 28 głosów przeciwnych, przy 2
        wstrzymujących się. Przechodzimy do kolejnego głosowania. Poddaję pod
        głosowanie wniosek o przyjęcie art. 1l w następującym brzmieniu
        zaproponowanym przez prof. M. Pietrzaka i dra W. Kuleszę:
        „Rzeczpospolita Polska gwarantuje samorządom udział w sprawowaniu władzy
        publicznej”. Stwierdzam, że w głosowaniu wniosek uzyskał 3 głosy
        popierające, 22 głosy przeciwne, przy 6 wstrzymujących się. Przechodzimy
        do następnego wniosku. Poddaję pod głosowanie wniosek o przyjęcie art.
        11 w następującym brzmieniu zaproponowanym przez senatorów S. Pastuszkę
        i H. Rota: „l. Rzeczpospolita Polska gwarantuje udział saimorządu
        terytorialnego w sprawowaniu władzy publicznej. 2. Rzeczpospolita
        Polska, w granicach określonych ustawą, zapewnia innym formom samorządu
        możliwość udziału w sprawowaniu władzy publicznej. W ust. 2 uwzględniono
        autopoprawkę zgłoszoną przez senatora H. Rota. Stwierdzam, że w
        głosowaniu wniosek uzyskał 9 głosów popierających, 11 głosów
        przeciwnych, przy 10 wstrzymujących się. Przechodzimy do kolejnego
        głosowania. Poddaję pod głosowanie wniosek o przyjęcie art. 1l w
        następującym brzmieniu zaproponowanym przez posła M. Mazurkiewicza: „l.
        Rzeczpospolita Polska gwarantuje udział samorządu terytorialnego w
        sprawowaniu władzy publicznej. 2. Rzeczpospolita Polska, w granicach
        określonych ustawą, zapewnia możliwość działania innych form samorządu.
        3. Ustawa może ustanowić obowiązkową przynależność osób do samorządów
        określonych w ust. 2, jeżeli jest to uzasadnione w interesie
        bezpieczeństwa państwowego lub porządku publicznego, dla ochrony zdrowia
        lub moralności publicznej, albo dla ochrony wolności i prawa innych
        osób”. Stwierdzam, że w głosowaniu wniosek nie uzyskał głosów
        popierających, uzyskał natomiast 25 głosów przeciwnych, przy 5 głosach
        wstrzymujących się. Przechodzimy do wniosku nr /. Poddaję pod głosowanie
        wniosek o przyjęcie art. 1l w następującym brzmieniu zaproponowanym
        przez posła L. Moczulskiego: „l. Lokalne i regionalne wspólnoty
        obywateli tworzą samorządy gminne i wojewódzkie. 2. Samorządy działają w
        granicach prawa, ustanowionego przez Sejm Rzeczypospolitej Polskiej. 3.
        Ich kompetencje obejmują wszystko, czego ustawa wyraźnie nie zastrzegła
        dla organów państwowych”. Stwierdzam, że w głosowaniu wniosek uzyskał l
        głos popierający, 27 głosów przeciwnych, przy 2 wstrzymujących się.
        Informuję, że w związku z przeprowadzonymi głosowaniami należy uznać, że
        jedynym wnioskiem, który uzyskał więcej głosów „za” niż „przeciw ” jest
        propozycja podkomisji zapisana jako wariant I do art. 11, która
        otrzymała 27 głosów popierających, 2 przeciwne, 2 wstrzymujące się. 9 A
        więc art. 1l przyjęty przez Komisję Konstytucyjną Zgromadzenia
        Narodowego brzmi następuąCO: „l. Rzeczpospolita Polska gwarantuje udział
        samorządu terytorialnego w sprawowaniu władzy publicznej. 2.
        Rzeczpospolita Polska, w granicach określonych ustawą, zapewnia
        możliwość działania innych form samorządu”."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Warto zauważyć ciekawy głos prof. M. Pietrzaka, który zadał bardzo
        wyraźne pytanie, czy ograniczamy się wyłącznie do zadeklarowania zasady
        swobodnego działania samorządu, co już uczyniliśmy. Nadal jednak nie
        rozstrzygnięta jest sprawa, czy ten samorząd ma jakiś udział w
        sprawowaniu władzy publicznej. Być może, lukę tę uzupełnimy w następnym
        rozdziale Konstytucji RP. Wobec przegłosowania propozycji podkomisji do
        art. 11 niewielką liczbą głosów — przewaga i czy 2 głosów — być może
        istniał we wniosku senatorów H. Rota i S. Pastuszki inny argument, który
        uniemożliwił poparcie tego wniosku oprócz tego, że chodzi o sprawowanie
        władzy publicznej. W tej chwili chowamy głowę w piasek. Jeżeli pójdziemy
        dalej, zostawiamy sobie lukę."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wcale tak nie jest. Przypominam argumenty, które zostały już tu
        zgłoszone. Prosiłbym uczestniczyć w dyskusjach, które toczymy. Jednym z
        argumentów, który był już przedstawiony jest to, że mówimy właśnie o
        „„Zasadach ustroju”, w rozdziale Konstytucji RP, w którym zapisujemy
        pewne normy generalne. W projekcie Konstytucji RP znajduje się jednak
        rozdział „Samorząd. Była już nawet zgłaszana propozycja, by nie nazywał
        się on „Samorząd terytorialny”, tylko „Samorządy albo „Samorządność”. W
        tym właśnie rozdziale znajdą się stwierdzenia dotyczące np.
        obligatoryjności przynależności do niektórych samorządów."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Mówimy w tej chwili o „Zasadach ustroju”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wcale niemałą, procentowo wręcz ogromną liczbą głosów zostało przyjęte
        rozwiązanie zapisane w propozycji podkomisji. Proponuję więc do dyskusji
        już nie wracać, Przypominam, że omawiamy w tej chwili tekst jednolity
        Konstytucji RP. Jeżeli któryś z wnioskodawców uważa, że jego wniosek
        powinien być zgłoszony jako wniosek mniejszości, to jest to oczywiście
        dopuszczalne. Proszę tak uczynić. Wszystkie artykuły Konstytucji RP będą
        jeszcze raz przegłosowane przez Zgromadzenie Narodowe. Na posiedzeniu
        Komisji Konstytucyjnej posuwajmy się naprzód. na a O"
    />

    <Utterance
      speaker="Senator Henryk Rot (SLD)"
      imgPath="/images/kk-speakers/RotHenryk.png"
      text="Nie dlatego chcę zabrać głos, że jest to subiektywnie usprawiedliwione,
        iż bronię własnego poglądu. Tylko czy nie popełniamy tu błędu w sztuce,
        jeśli tak można powiedzieć. Czy naprawdę będzie tak, że w ogóle nie
        będzie możliwa działalność jakiegokolwiek samorządu? Datem przykład
        samorządu w klatce schodowej wieżowca. Działalność samorządu musi jednak
        regulować ustawa — „w granicach określonych ustawą”. Nie powołamy
        samorządu klatkowego czy blokowego, dopóki nie pozwoli na to ustawa.
        Chodzi o to, że nie będziemy czekać na ustawę, żeby zatrudnić
        sprzątaczkę i nałożyć na nią jakieś powinności, w granicach umowy
        cywilnoprawnej, w zakresie sprzątania, zamiatania itd. Czy trzeba czekać
        na ustawę? Chodzi nam przecież tylko o to, czy dajemy przyzwolenie na
        działalność konkretnych form samorządów w zakresie sprawowania władzy
        publicznej, a nie w ogóle jakimkolwiek formom samorządów. Dlatego też
        zgłosiliśmy razem z senatorem S. Pastuszką propozycję do art. LI."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Po pierwsze, jest możliwość zgłoszenia wniosku mniejszości. Po drugie,
        mam prośbę do ekspertów, gdyż zostało zadane pytanie niezwykle istotne.
        Czy przyjmując zdecydowaną większością głosów takie, a nie inne
        brzmienie art. Il — wariant I podkomisji — nie popełniliśmy błędu w
        sztuce? Proszę o odpowiedź prof. P. Winczorka."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Piotr Winczorek"
      imgPath="/images/kk-speakers/WinczorekPiotr.png"
      text="Moim zdaniem, nie popełniliśmy takiego błędu. Jeżeli przyjąć rozumienie
        samorządu zgodne z doktryną ustrojową, od dawien dawna w Polsce
        funkcjonującą, to samorząd jest instytucją uczestniczącą w sprawowaniu
        władzy publicznej. To wynika z samej definicji pojęcia „samorząd”.
        Przyjęty ust. 1 art. Il przesądza na poziomie konstytucyjnym
        uczestnictwo samorządu terytorialnego w sprawowaniu władzy publicznej.
        Natomiast ust. 2 określa prawo innych samorządów do uczestnictwa w
        sprawowaniu tej władzy — ponieważ są to samorządy, a nie organizacje
        dobrowolne czy stowarzyszenia — w granicach określonych ustawą. W tym
        wypadku senator H. Rot ma rację. To, co będzie przekazane samorządom
        ustawą, będzie musiało być przekazane w granicach realizacji władztwa
        publicznego, a nie działalności całkowicie swobodnej, dobrowolnej, bez
        żadnych zobowiązań i bez żadnych uprawnień władczych."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem, że eksperci przekonują nas, iż nie popełniliśmy błędu. Droga
        do wniosku mniejszości jest otwarta. W tej chwili proponuję, abyśmy
        przeszli do kolejnych głosowań związanych z art. 12. Przypominam, że
        art. 12 dotyczy ochrony własności. Mamy sześć wniosków odnoszących się
        do jego treści. Zwracam uwagę członków Komisji na wniosek IV prof. S.
        Gebethnera. Gdybyśmy przyjęli ten wniosek, to w gruncie rzeczy
        wyczerpywałby on merytoryczną zawartość zarówno art. 12, jak i art. 13.
        Łączy on bowiem kwestie ochrony własności ze swobodą działalności
        gospodarczej. Zwracam uwagę na to, że wybór wariantu prof. 5. Gebethnera
        czyni bezprzedmiotowym głosowanie nad brzmieniem art. 13. Rozumiem, że
        wszyscy wnioskodawcy potwierdzają swoje wnioski i nie proponują do nich
        żadnych autopoprawek. Przejdźmy więc do głosowania najpierw nad
        propozycjami podkomisji do ust. 1 art. 12. Będzie to głosowanie
        alternatywne. Poddaję pod głosowanie wniosek o dokonanie wyboru pomiędzy
        propozycjami podkomisji do ust. 1 art. 12, pierwszą w brzmieniu:
        „Rzeczpospolita Polska chroni własność i prawo dziedziczenia” (użycie
        przycisku „za ”), a drugą: „Rzeczpospolita Polska zapewnia
        nienaruszalność własności i prawo dziedziczenia” (użycie przycisku
        „przeciw '), wraz z możliwością wstrzymania się, co może oznaczać
        niezgodę na żaden z zapisów. Stwierdzam, że Komisja w głosowaniu,
        większością 23 głosów popierających, przy 3 głosach przeciwnych i 4
        wstrzymujących się, przyjęła następujące brzmienie propozycji podkomisji
        do ust. 1 art. 12: „Rzeczpospolita Polska chroni własność i prawo
        dziedziczenia. Obecnie przechodzimy do głosowania nad sześcioma
        wnioskami do treści art. 12. Poddaję pod głosowanie wniosek o przyjęcie
        art. 12 w następującym brzmieniu zaproponowanym przez podkomisję: „l.
        Rzeczpospolita Polska chroni własność i prawo dziedziczenia. 2.
        Wywłaszczenie jest dopuszczalne jedynie na cele publiczne i za słusznym
        odszkodowaniem””. Stwierdzam, że w głosowaniu wniosek uzyskał 24 głosy
        popierające, 3 głosy przeciwne, przy 3 wstrzymujących się. Poddaję pod
        głosowanie wniosek o przyjęcie art. 12 w następującym brzmieniu
        zaproponowanym przez posła K. Kamińskiego: „1. Rzeczpospolita Polska
        chroni własność i prawo dziedziczenia. 2. Wywłaszczenie jest
        dopuszczalne jedynie na cele publiczne i za odszkodowaniem””.
        Stwierdzam, że w głosowaniu wniosek uzyskał 2 głosy popierające, 26
        głosów przeciwnych, przy 2 wstrzymujących się. Poddaję pod głosowanie
        wniosek o przyjęcie art. 12 w następującym brzmieniu zaproponowanym
        przez senatora P. Andrzejewskiego: „l. Praca jest podstawą rozwoju
        państwa. Rzeczpospolita Polska chroni prawo do pracy, własności 1
        dziedziczenia. Gospodarka państwa jest gospodarką rynkową, którą
        określają: wolność gospodarcza, solidarność i dialog partnerów
        społecznych, partycypa cja pracowników w zarządzaniu zakładem pracy i
        samodzielność ekonomiczna rodzin”. Stwierdzam, że w głosowaniu wniosek
        uzyskał 3 głosy popierające, 25 głosów przeciwnych, przy l wstrzymującym
        się. Poddaję pod głosowanie wniosek o przyjęcie art. 12 w następującym
        brzmieniu zaproponowanym przez prof. S$. Gebethnera: „Rzeczpospolita
        Polska chroni własność oraz zapewnia swobodę działalności gospodarczej .
        Stwierdzam, że w głosowaniu wniosek uzyskał 9 głosów popierających, 14
        głosów przeciwnych, przy 7 głosach wstrzymujących się. Kolejnym
        wnioskiem, nad którym będziemy głosować, jest wniosek posła J. Zdrady.
        Różni się on od propozycji podkomisji po pierwsze tym, że wyraża zapis
        jednoustępowy, po drugie, że nie ma w nim mowy o prawie dziedziczenia.
        Poddaję pod głosowanie wniosek o przyjęcie art. 12 w następującym
        brzmieniu zaproponowanym przez posła J. Zdradę: „Rzeczpospolita Polska
        chroni własność. Wywłaszczenie jest dopuszczalne jedynie na cele
        publiczne i za słusznym odszkodowaniem”. Stwierdzam, że w głosowaniu
        wniosek uzyskał 8 głosów popierających, 13 głosów przeciwnych, przy 9
        głosach wstrzymujących się. Przechodzimy do głosowania nad obszernym
        wnioskiem posła L. Moczulskiego dotyczącym zapisu czterech artykułów,
        tworzących merytoryczną całość — artykuły 12-15 — odpowiadającą materii,
        nad którą w tej chwili głosujemy. Poddaję pod głosowanie wniosek o
        przyjęcie artykułów 12-15 w następującym brzmieniu zaproponowanym przez
        posła L. Moczulskiego: „Art. 12. 1. Dziedzictwo narodowe: ziemia,
        Środowisko przyrodnicze, krajobraz, zabytki przeszłości, tradycja,
        kultura, wspólny majątek są pod szczególną ochroną Rzeczypospolitej. 2.
        Tworzenie nowych wartości kulturowych, artystycznych i intelektualnych
        otrzymuje pomoc i wsparcie ze strony państwa. Art. 13. 1. Praca jest
        podstawą rozwoju i potęgi Rzeczypospolitej. 2. Państwo gwarantuje
        wolność pracy, roztacza nad nią opiekę i sprawuje nadzór nad warunkami
        pracy. Art. 14. 1. Własność jest podstawą ustroju gospodarczego
        Rzeczypospolitej. 2. Rzeczpospolita gwarantuje jej zachowanie. 3.
        Własność nakłada na właściciela obowiązki, a jej używanie powinno służyć
        również dobru ogółu. 4. Nikt nie może być swojej własności pozbawiony,
        chyba że wynika to z postanowień prawa. 5. Wywłaszczenia na niezbędne
        cele publiczne lub obronne mogą następować jedynie na mocy ustawy i za
        stosownym wynagrodzeniem, konfiskaty mogą orzekać jedynie sądy. 6. Tylko
        ustawa może stanowić, jakie dobra i w jakim zakresie, ze względu na
        pożytek ogółu mogą stanowić własność państwową lub komunalną. mmm 7.
        Państwo zapewnia swobodę prowadzenia działalności gospodarczej w
        granicach określonych przez ustawy. Art. 15. 1. Rolnictwo, zapewniające
        wyżywienie społeczeństwa i jego trwanie biologiczne, pełni szczególną
        rolę w funkcjonowaniu Rzeczypospolitej. 2. Ziemia nie może być
        przedmiotem nieograniczonego obrotu. 3. Powinna ona przede wszystkim
        znajdować się w rękach prywatnych. 4. Ustrój rolny opiera się na
        gospodarstwach indywidualnych i rodzinnych, zdolnych do samodzielnej
        gospodarki”. Stwierdzam, że w głosowaniu wniosek uzyskał 2 głosy
        popierające, 27 głosów przeciwnych, przy braku wstrzymujących się. W
        związku z wynikami głosowań mogę poinformować, iż Komisja Konstytucyjna
        Zgromadzenia Narodowego wybrała wniosek I — propozycję podKomisji — ze
        względu na to, że był to jedyny wniosek mający większą liczbę głosów
        „,za” aniżeli „przeciw”. A więc art. 12 przyjęty przez Komisję
        Konstytucyjną brzmi następująco: „1. Rzeczpospolita Polska chroni
        własność i prawo dziedziczenia. 2. Wywłaszczenie jest dopuszczalne
        jedynie na cele publiczne i za słusznym odszkodowaniem”. W związku z
        tym, że wniosek prof. S. Gebethnera do art. 12 nie uzyskał większości,
        przechodzimy do art. 13, który mówi o swobodzie gospodarczej. Do art. 13
        zostały zgłoszone trzy wnioski: podkomisji, posła J. Zdrady i senatora
        S. Pastuszki. Na początku musimy jednak przesądzić brzmienie propozycji
        podkomisji. Wniosek podkomisji posiada dwa warianty. Wariant I statuuje
        trzyustępowy zapis art. 13, który brzmiałby następująco: „l.
        Rzeczpospolita Polska zapewnia swobodę działalności gospodarczej. 2.
        Wszystkie podmioty gospodarcze korzystają z tych samych uprawnień 1
        posiadają te same obowiązki. 3. Ograniczenie swobody działalności
        gospodarczej jest dopuszczalne tylko w ustawie i ze względu na ważny
        interes publiczny”. W wariancie II art. 13 miałby dwa ustępy: ust. 1 13
        z wariantu I — bez ust. 2. Proponuję przeprowadzić głosowanie
        alternatywne nad dwoma wariantami propozycji podkomisji. Naciśnięcie
        przycisku „za” będzie oznaczać przyjęcie art. 13 w trzyustępowym
        kształcie; naciśnięcie przycisku „przeciw” będzie oznaczać przyjęcie
        art. 13 w dwuustępowym kształcie — bez ust. 2 z wariantu I — 1
        naciśnięcie przycisku „wstrzymanie się” będzie oznaczało wstrzymanie się
        bądź inne zdanie."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="A jeżeli ktoś chciałby zagłosować tylko za ust. 1 art. 13?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Myślę, że może wtedy głosować za wnioskiein posła J. Zdrady."
    />

    <Utterance
      speaker="Senator Jan Orzechowski (PSL)"
      imgPath="/images/kk-speakers/OrzechowskiJan.png"
      text="A jeśli ktoś chciałby głosować przeciwko zapisowi art. 13 we wszystkich
        jego wariantach?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Może wstrzymać się od głosu. Mamy mandat, żeby głosować nad propozycją
        podkomisji, składającą się z dwóch wariantów. Zadecydujemy o wyborze
        któregoś z nich. Czy wszystko jest jasne? Poddaję pod głosowanie wniosek
        o dokonanie wyboru między dwoma wariantami propozycji podkomisji do art.
        13, wariantem I (naciśnięcie przycisku „za ), a wariantem Ill
        (naciśnięcie przycisku „przeciw”), wraz z możliwością wstrzymania się.
        Stwierdzam, że Komisja w głosowaniu, większością 19 głosów
        popierających, przy 3 głosach przeciwnych i 4 wstrzymujących się,
        przyjęła następujące brzmienie propozycji podkomisji do art. 13: „l.
        Rzeczpospolita Polska zapewnia swobodę działalności gospodarczej. 2.
        Wszystkie podmioty gospodarcze korzystają z tych samych uprawnień i
        posiadają te same obowłązki. 3. Ograniczenie swobody działalności
        gospodarczej jest dopuszczalne tylko w ustawie i ze względu na ważny
        interes publiczny”. Widzę, że senator S. Pastuszka chce uściślić swój
        wniosek do art. 13."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Chcę zgłosić autopoprawkę do swej propozycji odnośnie art. 13. Ust. 1
        brzmiałby tak samo: „Rzeczpospolita Polska zapewnia swobodę działalności
        gospodarczej”. Ust. 2 otrzymałby brzmienie następujące: „Rzeczpospolita
        Polska zapewnia szczególną ochronę i pomoc gospodarstwom rodzinnym,
        stanowiącym podstawę ustroju roinego państwa”. Treść ust. 3 byłaby taka:
        „Definicję gospodarstwa rodzinnego oraz rodzaj opieki i charakter pomocy
        dla tych gospodarstw określa ustawa”."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Mam prośbę do senatora S. Pastuszki, aby wycofał swoją autopoprawkę."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Z tego wnioskuję, że wnioskodawca wycofuje swoją autopoprawkę. Czy tak?"
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Tak."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czyli wniosek senatora S. Pastuszki do art. 13 pozostaje w wersji nie
        zmienionej. Przechodzimy do głosowania trzech wniosków do art. 13:
        wniosku podkomisji, wniosku posła J. Zdrady i wniosku senatora
        S.Pastuszki. Wszelkie autopoprawki uważam za zgłoszone. Poddaję pod
        głosowanie wniosek o przyjęcie art. 13 w następującym brzmieniu
        zaproponowanym przez podkomisję: „l. Rzeczpospolita Polska zapewnia
        swobodę działalności gospodarczej. 2. Wszystkie podmioty gospodarcze
        korzystają z tych samych uprawnień i posiadają te same obowiązki. 3.
        Ograniczenie swobody działalności gospodarczej jest dopuszczalne tylko w
        ustawie i ze względu na ważny interes publiczny”. Stwierdzam, że w
        głosowaniu wniosek uzyskał 17 głosów popierających, 11 głosów
        przeciwnych, przy 2 wstrzymujących się. Poddaję pod głosowanie wniosek o
        przyjęcie art. 13 w następującym brzmieniu zaproponowanym przez posła J.
        Zdradę: „Rzeczpospolita Polska zapewnia swobodę i wolność działalności
        gospodarczej. Stwierdzam, że w głosowaniu wniosek uzyskał 8 głosów
        popierających, 15 głosów przeciwnych, przy 6 wstrzymujących się. Poddaję
        pod głosowanie wniosek o przyjęcie art. 13 w następującym brzmieniu
        zaproponowanym przez senatora S$. Pastuszkę: „l. Rzeczpospolita Polska
        zapewnia swobodę działalności gospodarczej. 2. Podstawą ustroju rolnego
        państwa jest gospodarstwo rodzinne. 3. Ograniczenie swobody działalności
        gospodarczej jest dopuszczalne tylko w ustawie i ze względu na ważny
        interes publiczny . Stwiedzam, że w głosowaniu wniosek uzyskał 13 głosów
        popierających, 12 głosów przeciwnych, przy 3 wstrzymujących się. W
        związku z tym, że dwa wnioski do art. 13 uzyskały więcej głosów „za”
        aniżeli „przeciw ”', proponuję, abyśmy przeprowadzili głosowanie
        alternatywne. Chodzi o wnioski podkomisji i senatora S$. Pastuszki."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Chcę zapytać ekspertów, jaki jest sens normatywny brzmienia ust. 2 art.
        13 w wersji zaproponowanej przez podkomisję: „Wszystkie podmioty
        gospodarcze korzystają z tych samych uprawnień i posiadają te same
        obowiązki”. Jeżeli zgadzamy się, że Konstytucja RP nie może być zbiorem
        werbalnych uniesień, czy przesłań, natomiast powinna mieć charakter
        jurydyczny, to w związku z tym ust. 2 art. 13 w propozycji podkomisji
        jest absolutnie zbędny i jest on tylko hasłem."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Po pierwsze, odbyła się dyskusja i po drugie przeprowadziliśmy
        głosowania..."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Już wcześniej zabrałem głos, że sposób przeprowadzenia głosowania mógł
        powodować pewne niejasności. Złożę zatem wniosek mniejszości."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Głosowaliśmy nad wyborem któregoś z wariantów podkomisji. Przeszliśmy do
        głosowań kolejnych wniosków, a poseł J. Szymański wyraża teraz swoje
        wątpliwości. Z tego wynika, że chce on doprowadzić do reasumpcji nie
        jednego głosowania, ale pięciu, które odbyły się w międzyczasie."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Chcę powiedzieć, że protestowałem, kiedy poseł A. Kwaśniewski udzielał
        głosu posłowi K. Kamińskiemu. Wtedy wydawało mi się, że nie było czasu
        na dyskusję. Ale skoro dyskusja stała się faktem, to umówmy się, że do
        końca dzisiejszego posiedzenia wszystko jest jeszcze możliwe."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Co jest możliwe?"
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Uzyskanie takiego wyjaśnienia ekspertów, o jakie prosi poseł J.
        Szymański, jak oni interpretują konsekwencję przyjęcia zapisu:
        „Wszystkie podmioty gospodarcze korzystają z tych samych uprawnień 1
        posiadają te same obowiązki”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wyjaśnimy to w punkcie: sprawy różne. Czy któryś z ekspertów pragnie
        zabrać głos?"
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Doskonale wiem, że wynik głosowania jest Święty i nie może być
        kwestionowany, w szczególności przez ekspertów. Ust. 2 art. 13 w
        propozycji podkomisji budzi jednak niepokój i zastrzeżenia nas tutaj
        wszystkich siedzących, pomijając to, że mówi o jakichś podmiotach
        gospodarczych. Nigdy nie wiadomo, co to oznacza. „Podmiot gospodarczy”
        jest określeniem doktrynalnym. Przepis ten jest sprzeczny, moim zdaniem,
        z pojęciem „zasady równości w prawie”. Sformułowanie: „korzystają z tych
        samych uprawnień 1 posiadają te same obowiązki , jest sprzeczne z zasadą
        równego traktowania kategorii istotnych. W ust. 2 art. 13 w propozycji
        podkomisji zauważam pewnego rodzaju „urawniłowkę”. Bez względu na
        okoliczności wszystkie podmioty mają być traktowane równo. Jest to
        sprzeczne z rozumieniem zasady równości."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Mam jedno pytanie do eksperta K. Działochy. Z tego, co nam mówi prof. K.
        Działocha wynika, że skoro wszystkie podmioty korzystają z tych samych
        uprawnień, to jeżeli mamy dwa podmioty gospodarcze: osobę fizyczną 1
        osobę prawną, prowadzące działalność gospodarczą, to czy oznacza to, że
        nie będzie np. rozróżnienia w podatku dochodowym na osoby fizyczne i
        osoby prawne i nie będzie dwóch ustaw: o podatku dochodowym od osób
        fizycznych i o podatku dochodowym od osób prawnych, dwóch systemów
        ubezpieczeń, itd., tylko wszystko zostanie podciągnięte pod jeden
        system? Proszę zwrócić uwagę, jaki chaos prawny mógłby pociągnąć zapis
        konstytucyjny, przyjęty w propozycji podkomisji. Podałam tylko przykład
        z prawa podatkowego, ale odnosi się to również i do innych dziedzin
        prawa. Mam po prostu wątpliwości."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="To zamieszanie jest wynikiem wprowadzenia nas w błąd przez posła A.
        Kwaśniewskiego. Członkowie Komisji Konstytucyjnej głosowali w sposób
        Świadomy nad trzema wariantami art. 13. Tylko zabrakło odpowiedzi na
        moje pierwsze pytanie, w jaki sposób mają głosować parlamentarzyści,
        którzy uważają, że art. 13 w wersji podkomisji nie powinien mieć ust. 2.
        Nie głosowano wariantu, żeby ten ustęp po prostu skreślić."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jakże nie głosowano? Przypominam, że w głosowaniu nad skreśleniem ust. 2
        z art. 13 w wersji podkomisji 19 osób było za nieskreśleniem, 3 osoby
        były za skreśleniem, 4 wstrzymały się od głosu. Wynik ten został
        przecież zanotowany. | Mam jeszcze pytanie do prof. P. Winczorka, a
        właściwie proszę go o wyrażenie opinii. Jeżeli popełniono błąd w sztuce
        konstytucyjnej, to można oczywiście zaproponować reasumpcję głosowania."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Głosowałem za utrzymaniem ust. 2 art. 13 w propozycji podkomisji w takim
        oto przeświadczeniu, że te problemy, o których mówił prof. K. Działocha,
        są rozwiązywalne przez ust. 3, tzn. że przy pomocy ustawy można
        wprowadzić pewną dywersyfikację. Wydawało mi się, że tak rozumując, z
        jednej strony mocno akcentuję zasadę równości, z drugiej nie zamykam
        drogi, w pewnych nadzwyczajnych sytuacjach, dla zróżnicowania podmiotów.
        Jeżeli był to błąd, wnoszę o reasumpcję głosowania."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proszę zabierać głos w celu dokonania wyjaśnień. Padł już wniosek o
        reasumpcję głosowania."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Powstało małe zamieszanie. Mamy sytuację wypowiadania się w czaSie
        głosowania, pojawiły się istotne wątpliwości ekspertów, podniesione
        dopiero w momencie, kiedy przegłosowaliśmy już pewien wariant art. 13.
        Czy byłoby możliwe inne wyjście? Głosując nad ust. 2 w wariancie I
        propozycji podkomisji do art. 13, członkowie Komisji Konstytucyjnej
        opowiedziali się za zasadą równości sektorów. Rozumiem, że taka była
        intencja głosujących. Teraz powstaje zamieszanie co do redakcji art. 13.
        Intencja podkomisji była jasna i taka też była intencja głosujących. a
        PO EH mae a Z O m —— Proponuję, o ile będzie to możliwe pod względem
        formalnym, wnioskowi podkomisji nadać taki kształt, aby art. 13 składał
        się z ust. I i obecnego ust. 3, a zasadę równości sektorów uznać za
        przegłosowaną. Wniosek podkomisji do art. 13 złożony z ust. 1 12 —
        obecny ust. 3 — proponuję głosować w zestawieniu z wnioskiem senatora S.
        Pastuszki. Zasadę równości sektorów proponuję wyodrębnić do osobnego
        artykułu i poddać ją jeszcze obróbce redakcyjnej według wskazań
        ekspertów. Nie możemy tego zrobić w tej chwili, gdyż okazuje się, że
        prace nad treścią ust. 2 nie są jeszcze zakończone. Zgłaszam to jako
        wniosek."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Za chwilę go rozpatrzymy."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Piotr Winczorek"
      imgPath="/images/kk-speakers/WinczorekPiotr.png"
      text="Pragnę potwierdzić wypowiedź poseł 1. Lipowicz. Rzeczywiście, intencją
        podkomisji było zachowanie równości sektorów, a nie równości podmiotów.
        Ust. 2 art. 13 z propozycji podkomisji jest nieżręcznym sformułowaniem,
        które już nie pamiętam, w jaki sposób zostało zaaprobowane. W moim
        przekonaniu, byłoby dobrze pójść w kierunku, który proponuje poseł I.
        Lipowicz, tzn. przyjąć art. 13 jako dwuustępowy, a kwestię równości
        sektorów pozostawić na razie na boku. Nie wiem, czy wymaga ona
        rozstrzygnięcia akurat wśród zasad konstytucyjnych. Wydaje mi się, że
        byłoby rozsądnie wyłączyć z wariantu I ust. 2."
    />

    <Utterance
      speaker="Poseł Wit Majewski (SLD)"
      imgPath="/images/kk-speakers/MajewskiWit.png"
      text="Wyjaśnienia ekspertów mnie nie zadowalają. Dla mnie pojęcie „sektor”
        jest bardziej niejasne prawnie od pojęcia „podmiot ”. Podmiotami
        prowadzącymi działalność gospodarczą mogą być i osoby fizyczne, i
        prawne. Jest to oczywiste. Nie chodzi tutaj o żadną równość faktyczną, a
        tylko o równość prawną, tzn. że podlegają one jednakowym systemom
        podatkowym; nie może być żadnych szczególnych ustaw, które by odrębnie
        traktowały sektor państwowy itd. W moim odczuciu, treść dyskutowanej
        normy jest oczywista, gdyż oznacza, że wszystkie podmioty prowadzące
        działalność gospodarczą działają według jednakowych reguł prawnych.
        Ostatnio nawet ustawa tzw. „popiwkowa” wprowadza równe zasady dla
        wszystkich przedsiębiorstw. Nie widzę powodów, aby funkcjonował podwójny
        zapis konstytucyjny."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Myślę, że możemy przyjąć wariant wniosku poseł I. Lipowicz. Wiemy, że
        stanowi istotę art. 13 ust. 2. Przyjmujemy też zgłoszone w tej chwili
        uwagi co do nieprecyzyjności jego sformułowania. W związku z tym robimy
        przy tym ustępie znak zapytania po to, aby dokładniej go sformułować 1
        przedstawić Komisji do rozstrzygnięcia później. Sugeruję, abyśmy w tej
        chwili wybrali między dwoma wariantami art. 13: wariantem podkomisji —
        na razie złożonym z ust. 1 i 3; ust, 2 pozostawiamy ze znakiem zapytania
        — a wariantem senatora S. Pastuszki. Wtedy będziemy wiedzieli, w jakim
        kierunku zmierzamy, ponieważ jeden z tych wariantów uzyska większość."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Wniosek senatora S$. Pastuszki do art. 13 uzyskał 13 głosów
        popierających."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Zgadzam Się."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="To ile głosów popierających uzyskała propozycja podkomisji?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Uzyskała 17 głosów popierających. Teraz powinniśmy dokonać wyboru
        pomiędzy propozycją podkomisji a propozycją senatora S$. Pastuszki.
        Można to nazwać „dogrywką”."
    />

    <Utterance
      speaker="Poseł Henryk Kroll (MN)"
      imgPath="/images/kk-speakers/KrollHenryk.png"
      text="Wydaje mi się, że w chwili, kiedy zostawiamy otwartą sprawę propozycji
        podkomisji, nie możemy kończyć głosowania alternatywnego nad treścią
        art. 13."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czego nie możemy zrobić?"
    />

    <Utterance
      speaker="Poseł Henryk Kroll (MN)"
      imgPath="/images/kk-speakers/KrollHenryk.png"
      text="Nie możemy kończyć głosowania."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Być może, jeśli art. 13 byłby przyjęty według wniosku senatora S.
        Pastuszki, to nie byłoby sensu dalej nad nim procedować. Musimy to
        ustalić, inaczej niepotrzebnie będziemy tracić czas. Jestem zdania, że
        art. 13 w wersji podkomisji możemy zapisać tak, aby nie budził on
        kontrowersji. Zdaje się, że jest już jakaś propozycja w tej sprawie."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Pozwolę sobie odczytać to, co w obszernym elaboracie eksperci Komisji
        napisali na temat ust. 2 art. 13 w brzmieniu zaproponowanym przez
        podkomisję: ,,.. ust. 2 zakłada absolutne równouprawnienie wszystkich
        podmiotów gospodarczych. Czy to realne i celowe? Czy idzie tylko o
        równouprawnienie, bez względu na formę własności ...?” Gdyby do ust. 2,
        który został przyjęty w następującym brzmieniu: „Wszystkie podmioty
        gospodarcze korzystają z tych samych uprawnień i posiadają te same
        obowiązki” dodać: ,,... bez względu na formę własności”, to istota
        rzeczy byłaby tu należycie oddana. Wiem, że zdanie to będzie trochę
        niezręczne, ale sens jego byłby właściwy."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Zdań niezręcznych nie powinniśmy jednak głosować."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Prof. K. Działocha proponuje powrót do socjalistycznej koncepcji form
        własności. Dla mnie jest to nie do przyjęcia. Jest to pojmowanie
        własności jako kategorii, która ma formy i typy. Znowu wracamy do
        systemu, z którym myśleliśmy, że się rozstajemy."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Z pokorą chcę ponownie przedłożyć Komisji swoją propozycję, żebyśmy ust.
        2 art. 13 w wersji podkomisji wyłączyli do lepszej redakcji, ponieważ
        jest to zdanie rzeczywiście niezręczne. Pogrążeni w pracy głosowaliśmy
        nad głęboką treścią tego ustępu, za równością sektorów. Przy czym nie
        chodzi tu o użycie wyrazu „sektory ”. Proszę popatrzeć na to spokojnie.
        To nie jest prawda, że wszystkie podmioty gospodarcze korzystają z tych
        samych uprawnień i posiadają te same obowiązki. Po prostu tak nie jest.
        Ponieważ głębiej nad tym pracowaliśmy, wiemy, o co nam w istocie
        chodziło. Ust. 2 art. 13 propozycji podkomisji powinniśmy staranniej
        nadać treść. Możemy zapytać członków Komisji Konstytucyjnej, czy uznają
        zasadę równości sektorów za przegłosowaną. Proponuję teraz przegłosować
        art. 13 w wersji podkomisji, złożony z ust. 1 i 2, gdyż ust. 2 jest
        obecnie ust. 3. Jeżeli w przyszłości komisja redakcyjna włączy ponownie
        — mam nadzieję, już dobrze zredagowaną — zasadę równości sektorów do
        art. 13, to nie będzie się to sprzeciwiać woli podkomisji podstaw
        ustroju politycznego i społeczno-gospodarczego."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jeżeli nie będzie sprzeciwu wobec wniosku poseł I. Lipowicz, to
        moglibyśmy jej propozycję przyjąć. Przyczyni się to do uporządkowania
        naszej pracy."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Skoro ust. 2 art. 13 ma zostać jeszcze raz przeredagowany, to może niech
        na chwilę „powróci” do podkomisji razem z kontrowersyjnym art. 15."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Chcę złożyć formalny wniosek o dokonanie reasumpcji głosowania nad
        wnioskiem o dokonanie wyboru między wariantem I propozycji podkomisji do
        art. 13 a wartantem II. Mówię o reasumpcji w obrębie propozycji
        podkomisji, a nie w obrębie wniosku senatora S$. Pastuszki. W moim
        przeświadczeniu art 13 ust. 2 (jakby go nie zapisać, czy dotyczyłby
        równości sektorowej, czy nie) jest zbędny, dlatego że z zasady
        demokratycznego państwa prawnego wynika zasada równości. Jest to
        bezsporne. Wnoszę o dokonanie reasumpcji głosowania i ponowne
        rozstrzygnięcie kwestii struktury przepisu art. 13 w brzmieniu
        przedłożonym przez podkomisję. M ma www. e — a Uważam, że żadne prace
        redakcyjne nie przyniosą zadowalającego rezultatu, jeśli chodzi o ust. 2
        tego artykułu."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wniosek o reasumpcję głosowania zaraz przegłosujemy."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/OsiatynskiWiktor.png"
      text="Myślę, że wydzielenie pewnych kwestii w osobnym artykule, tak jak to
        zaproponowała poseł I. Lipowicz, ma sens, dlatego że art. 13 dotyczy
        swobody działalności gospodarczej i ewentualnych jej ograniczeń. Inny
        artykuł może dotyczyć roli państwa w gospodarce albo traktowania
        podmiotów gospodarczych przez państwo (o to tu chodzi). Nie upierałbym
        się zbytnio przy sformułowaniu art. 13 ust. 2, dlatęgo że równość
        sektorów wynika z Konstytucji RP w sposób zupełnie naturalny. Równość
        podmiotów gospodarczych wynika z wszystkich innych przepisów, jeżeli w
        konstytucji nie ma wyróżnienia sektorów. Konstytucja z 1952 r.
        przynajmniej w trzech artykułach dawała przewagę sektorowi własności
        państwowej, gospodarstwom rolnym, itd. W obecnej Konstytucji RP czegoś
        takiego nie będzie. Jestem gotów poprowadzić każdą kwestię konstytucyjną
        w imię równości sektorów, gdy nie ma zróżnicowania konstytucyjnego
        podmiotów, a równość jest zapisana inaczej. Uważam, że należałoby
        jeszcze przemyśleć i zastanowić się nad sformułowaniem w zasadach
        naczelnych artykułu, który dotyczyłby nie tylko równości sektorów, ale i
        stosunku państwa do gospodarki, gdyż nie jest to to samo, co swoboda
        działalności gospodarczej. Swoboda działalności gospodarczej oznacza
        tylko tyle, że jest taka swoboda i państwo właściwie nie ma prawa w nią
        ingerować."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wszystko rozumiem i za chwilę oddam głos kolejnym mówcom. Przypominam
        jedynie, że propozycje podkomisji tak samo brzmiały dwa tygodnie temu.
        Wtedy, być może, członkowie Komisji Konstytucyjnej albo nieuważnie je
        czytali, albo zabrakło wytrzymałości do ich przedyskutowania. Rozumiem
        nieporozumienie, które, moim zdaniem, słusznie zdefiniowała poseł I.
        Lipowicz; jednocześnie uczyniono to w sposób budzący wątpliwości. Wymaga
        to lepszego zredagowania. W tej chwili nie prowadźmy dyskusji, gdyż
        miała już ona miejsce dwa tygodnie temu."
    />

    <Utterance
      speaker="Senator Krzysztof Kozłowski (KD)"
      imgPath="/images/kk-speakers/KozlowskiKrzysztof.png"
      text="Pragnę dodać, że jeżeli kwestionujemy sens art. 13 ust. 2
        zaproponowanego przez podkomisję i odsyłamy go do doprecyzowania, to
        analogicznie art. 13 ust. 2 zaproponowany przez senatora S. Pastuszkę
        również powinniśmy odesłać do doprecyzowania. Jeżeli uważamy, że
        propozycja podkomisji budzi wątpliwości, to bądźmy konsekwentni; w obu
        wnioskach są rzeczy wymagające dopowiedzenia. l mm —m m am man _ z — ——
        aa"
    />

    <Utterance
      speaker="Senator Jan Orzechowski (PSL)"
      imgPath="/images/kk-speakers/OrzechowskiJan.png"
      text="Po pierwsze, jestem przeciwny reasumpcji głosowania; myślę, że
        głosowaliśmy Świadomie i każdy wiedział, za czym głosuje. Redakcja art.
        13, w brzmieniu zaproponowanym przez podkomisję, chyba jest dostatecznie
        jasna, podobnie jak redakcja zgłoszona przez senatora S$. Pastuszkę.
        Zgłaszam wniosek o przegłosowanie, którą propozycję przyjmujemy: czy
        propozycję podkomisji w zaproponowanym brzmieniu, czy propozycję
        senatora S. Pastuszki. Wynik głosowania rozstrzygnie sprawę. Art. 13 w
        brzmieniu zaproponowanym przez senatora S. Pastuszkę ma zwartą treść i
        jest jasno sprecyzowany. Wnoszę, abyśmy głosowanie przeprowadzili do
        końca, a nie przerywali je w połowie."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Myślę, że wniosek o reasumpcję głosowania można rozstrzygnąć; wnoszę
        jednak, aby po ewentualnym pozytywnym rozstrzygnięciu tego wniosku nie
        przystępować natychmiast do następnych głosowań, ale wypełnić dyspozycję
        wniosku poseł I. Lipowicz, tzn. przygotować odpowiedni zapis i potem go
        przegłosować. Tylko wtedy to będzie miało sens. Pragnę zgłosić jeszcze
        jedną uwagę do wypowiedzi prof. W. Osiatyńskiego i posła J.
        Szymańskiego. Nie wykluczam, że z zasady państwa prawa można wyprowadzić
        zasadę równości. Chodzi jednak o to, aby wyrazić ją jasno, tzn. aby
        dopuszczając zróżnicowanie ze względu na wielkość podmiotów, specyfikę
        branżową, zasięg terytorialny, itd. nie dopuszczać zróżnicowania,
        uprzywilejowania lub dyskryminacji ze względu na przynależność
        własnościową. Dzisiaj jest sytuacja taka, że te same podmioty, tej samej
        wielkości, w tych samych branżach, na tym samym terytorium mają głęboko
        zróżnicowane warunki. Chciałbym, aby to nie było możliwe."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Korzystając z uprawnień przewodniczącego Komisji Konstytucyjnej
        Zgromadzenia Narodowego, proponuję następujące rozstrzygnięcie — jeżeli
        wnioskodawcy i ci, którzy proponują reasumpcję wyraziliby zgodę, byłoby
        to najbardziej praktyczne rozwiązanie — abyśmy poprosili podkomisję,
        która i tak zamierza się zebrać, żeby spróbowała sformułować art. 13
        ust. 2 w sposób precyzyjnie oddający jej intencje, Gdyby okazało się, że
        próby zredagowania tego przepisu nie dają efektu, wtedy
        rozstrzygnęlibyśmy wniosek o reasumpcję po to, aby wrócić do sprawy i
        ewentualnie usunąć art. 13 ust. 2 z wniosku podkomisji. Jeżeli chodzi o
        wniosek senatora S. Pastuszki, to pozostaje on bez zmian. Jutro rano
        przegłosowalibyśmy ewentualnie arty kuły..."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Może teraz dokonamy wyboru pomiędzy wnioskami podkomisji i senatora Pastuszki."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Nie róbmy teraz „dogrywki. Problem polega na tym, że co do intencji art.
        13 ust. 2 zaproponowanego przez podkomisję jest zgoda, natomiast jest
        spór, co do zapisu. Trzeba ten zapis precyzyjnie sformułować, aby nie
        budził wątpliwości. Być może, uda się znaleźć taką jego redakcję, która
        będzie wszystkim odpowiadała. Głosowanie w tej sprawie możemy
        przeprowadzić jutro rano. Nie widzę tu żadnego problemu. Czy
        wnioskodawcy zgadzają się na takie rozwiązanie? Jeśli mielibyśmy
        głosować w tej chwili, to.trzeba by zacząć od reasumpcji poprzedniego
        głosowania."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Z wypowiedzi ekspertów i przebiegu dyskusji wynikało, że nawet gdyby
        art. 13 ust. 2 w wersji podkomisji został przeredagowany, to i tak
        powinien się on znaleźć w innym miejscu — w innym artykule, a może nawet
        w innym rozdziale Konstytucji RP. Ewentualna reasumpcja głosowania
        powinna dotyczyć przyjęcia propozycji podkomisji w wersji dwuustępowej,
        tzn. obecnego art. 13 ust. 1 i 3. Dopiero potem możemy przeprowadzić
        głosowanie w sprawie wyboru pomiędzy propozycjami podkomisji i senatora
        S. Pastuszki."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Poddaję pod głosowanie wniosek o reasumpcję głosowania nad wnioskiem o
        dokonanie wyboru pomiędzy dwoma wariantami propozycji podkomisji do art.
        13. Stwierdzam, że Komisja Konstytucyjna w głosowaniu, większością 17
        głosów popierających, przy 10 głosach przeciwnych i 4 wstrzymujących
        się, dekonała reasumpcji głosowania nad wnioskiem o dokonanie wyboru
        pomiędzy dwoma wariantami propozycji podkomisji do art. 13. Przechodzimy
        do powtórnego głosowania nad wnioskiem podkomisji do art. 13.
        Przyciśnięcie przycisku „za” będzie oznaczać utrzymanie trzyustępowego
        art. 13, czyli również inkryminowanego ust. 2. Widzę, że poseł R. Bugaj
        ma inną propozycję."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Potrafię zaproponować autopoprawkę, ale zaproponowanie w tej chwili tak
        ważnego przepisu może być ryzykowne. Proponuję następujący zapis:
        „Uprawnienia i obowiązki podmiotów gospodarczych są równe bez względu na
        przynależność do różnych sektorów własnościowych ”."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="W tej chwili reasumujemy głosowanie, które dotyczyło wyboru pomiędzy
        wariantem trzyustępowym a dwuustępowym. Tylko takie głosowanie możemy
        reasumować. Zadnych autopoprawek nie wprowadzamy. Poddaję pod głosowanie
        wniosek o dokonanie wyboru pomiędzy wariantem trzyustępowym — naciś-
        nięcie przycisku „za” — a wariantem dwuustępowym — naciśnięcie przycisku
        „przeciw” — propo zycji podkomisji do art. 13, wraz z możliwością
        wstrzymania Się. Stwierdzam, że Komisja Konstytucyjna w głosowaniu,
        większością 24 głosów popierających, przy 4 głosach przeciwnych i 2
        wstrzymujących się, opowiedziała się za dwuustępowym brzmieniem art. 13
        w wersji zaproponowanej przez podkomisję. Oznacza to, że art. 13 w
        wersji podkomisji składa SIĘ Z: Ust. 1: „Rzeczpospolita Polska zapewnia
        swobodę działalności gospodarczej” oraz — ust. 2 (poprzednio ust. 3):
        „Ograniczenie swobody działalności gospodarczej jest dopuszczalne tylko
        w ustawie i ze względu na ważny interes publiczny”. Przechodzimy teraz
        do głosowania o dokonanie wyboru pomiędzy przyjętą przed chwilą
        propozycją podkomisji a propozycją senatora S. Pastuszki. Czy wszyscy
        członkowie Komisji się na to zgadzają?"
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Wydaje mi się, że propozycja senatora S. Pastuszki do art. 13 może
        budzić wątpliwości zarówno pod kątem redakcyjnym, jak i ze względu na
        treść normatywną proponowanego przepisu. Sugeruję sformułowanie tej
        propozycji na piśmie."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jest ona sformułowana na piśmie."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="W takim razie, czy senator S$. Pastuszka podtrzymuje zmodyfikowaną
        wersję swojego wniosku do art. 13?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Senator S. Pastuszka wycofał autopoprawkę do swego wnios ku, który
        pozostaje niezmodyfikowany. Mamy do wyboru dwa warianty art. 13:
        propozycję podkomisji — dwuustępowy art. 13 i propozycję senatora 5.
        Pastuszki — trzyustępowy art. 13. Proponuję przeprowadzić głosowanie
        alternatyw ne. Poddaję pod głosowanie wniosek o dokonanie wyboru
        pomiędzy propozycją podkomisji (naciśnięcie przycisku ,„za”) a
        propozycją senatora S. Pastuszki (naciśnięcie przycisku „przeciw ”),
        wraz z możliwością wstrzymania się. Stwierdzam, że Komisja w głosowaniu,
        większością 17 głosów popierających, przy 12 głosach przeciwnych i i
        wstrzymującym się, przyjęła brzmienie przedłożone przez podkomisję. Tak
        więc w projekcie jednolitym Konstytucji Rzeczypospolitej Polskiej,
        przygotowanym przez Komisję Konstytucyjną, art. 13 będzie brzmiał
        następująCo: „l. Rzeczpospolita Polska zapewnia swobodę działalności
        gospodarczej. 2. Ograniczenie swobody działalności gospodar czej jest
        dopuszczalne tylko w ustawie i ze względu na ważny interes publiczny”.
        ————— mra ——"
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Oświadczam, że składam wniosek mniejszości."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Przechodzimy do głosowań nad propozycjami do art. 14. Pozostał nam do
        rozpatrzenia jeden artykuł."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Chcę zabrać głos w sprawie formalnej. Przed półgodziną powinna zostać
        ogłoszona przerwa. Chcę zapytać posła R. Bugaja, czy posiedzenie
        podkomisji jest nadal aktualne? Moje w nim uczestnictwo jest niemożliwe."
    />

    <Utterance
      speaker="Poseł Ryszard Bugaj (UP)"
      imgPath="/images/kk-speakers/BugajRyszard.png"
      text="Zostało wyraźnie napisane, że posiedzenie podkomisji odbędzie się w
        przerwie obiadowej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Pozostały nam 4 głosowania. Przeprowadźmy je. Jako przewodniczący
        Komisji chciałbym rozpoczynać obrady w terminach wyznaczonych. Współ-
        czuję tym wszystkim, którzy byli tutaj o godz. 11, prosiłbym jednak, aby
        skierować swoje uwagi do członków Komisji, którzy albo się spóźnili,
        albo w ogóle nie przybyli, bo to oni utrudniają nam pracę."
    />

    <Utterance
      speaker="Poseł Tadeusz Mazowiecki (UW)"
      imgPath="/images/kk-speakers/MazowieckiTadeusz.png"
      text="Czy odbędzie się dzisiejsze posiedzenie podkomisji?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Na pewno się odbędzie zaraz po ogłoszeniu przerwy obiadowej. Być może
        podkomisja ustali inny termin. Przechodzimy do głosowania trzech
        wniosków odnoszących się do treści art 14, obejmującego zagadnienie
        pracy. Poddaję pod głosowanie wniosek o przyjęcie art. 14 w następującym
        brzmieniu zaproponowanym przez podkomisję: „Praca znajduje się pod
        ochroną Rzeczypospolitej Polskiej. Państwo sprawuje nadzór nad warunkami
        jej wykonywania”. Stwierdzam, że w głosowaniu wniosek uzyskał 24 głosy
        popierające, 5 głosów przeciwnych, przy 2 wstrzymujących się. Poddaję
        pod głosowanie wniosek o przyjęcie art. 14 w następującym brzmieniu
        zaproponowanym przez senatora J. Orzechowskiego: „Praca stanowi podstawę
        rozwoju gospodarczego kraju. Państwo sprawuje nadzór nad warunkami jej
        wykonywania”. Stwierdzam, że w głosowaniu wniosek uzyskał ] głosów
        popierających, 17 głosów przeciwnych, przy 7 wstrzymujących się. Poddaję
        pod głosowanie wniosek o przyjęcie art. 14 w następującym brzmieniu
        zaproponowanym przez posła K. Kamińskiego: „Praca znajduje się pod
        ochroną Rzeczypospolitej Polskiej. Sposób i zakres nadzoru nad warunkami
        jej wykonywania określa ustawa”. Stwierdzam, że w głosowaniu wniosek
        uzyskał 3 głosy popierające, 26 głosów przeciwnych, przy I wstrzymującym
        się. ua m —— — REA Art. 14 przyjął brzmienie zaproponowane przez
        podkomisję: „Praca znajduje się pod ochroną Rzeczypospolitej Polskiej.
        Państwo sprawuje nadzór nad warunkami jej wykonywania”. Ostatnie
        głosowanie dotyczyć będzie zupełnie innej kwestii. Artykuły 16, 17 i 18
        są bezdyskusyjne, jeśli chodzi o ich brzmienie. Odnoszą się one m.in. do
        symboli narodowych. Mam pytanie do członków Komisji Konstytucyjnej, czy
        są za tym, aby utrzymać te artykuły w rozdziale I: „Zasady ustroju”, czy
        też przenieść je na koniec Konstytucji RP do zasad szczegółowych?
        Eksperci Komisji nie widzą tu właściwie żadnej merytorycznej różnicy.
        Elegancja pozwala na jedno i drugie rozwiązanie. Może mają tu znaczenie
        jakieś kwestie bardziej emocjonalne bądź psychologiczne. Poddaję pod
        głosowanie wniosek o utrzymanie artykułów 16—18 w rozdziale I
        Konstytucji RP „Zasady ustroju”. Stwierdzam, że w głosowaniu wniosek
        uzyskał 20 głosów popierających, 6 głosów przeciwnych, przy 4
        wstrzymujących się. Oznacza to, że artykuły 16-18 utrzymujemy w
        rozdziale I Konstytucji RP „Zasady ustroju”."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Chcę zabrać głos w sprawie harmonogramu prac Komisji Konstytucyjnej.
        Kiedy będziemy go omawiać i kiedy będziemy nad nim głosować?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czy chodzi o art. 157"
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Chodzi o harmonogram."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Harmonogram prac Komisji Konstytucyjnej będziemy omawiać dopiero w
        czwartek. Proszę się z nim zapoznać."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Wnioskuję, aby go omówić dzisiaj, teraz albo przynajmniej po przerwie
        obiadowej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proszę mi pozwolić dalej prowadzić obrady. W tej chwili zakończyliśmy
        głosowania. Informuję, że zaraz po ogłoszeniu przerwy zbiera się
        podkomisja pod przewodnictwem posła R. Bugaja, w celu omówienia
        brzmienia art. 15. Wszystkich zainteresowanych serdecznie zapraszam do
        uczestniczenia w posiedzeniu podkomisji. O godz. 15.15 wznawiamy obrady
        Komisji Konstytucyjnej. Wówczas to będziemy prowadzić dyskusję na temat
        art. 15."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Czyli dzisiaj art. 15 nie przegłosujemy?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Art. 15 będzie głosowany jutro rano. Jeżeli chodzi o harmonogram prac
        Komisji Konstytucyjnej, to proponuję dzisiaj zgłosić do niego uwagi na
        ręce przewodniczącego, tak abym mógł go jutro rano — w momencie, kiedy
        będzie quorum — przedstawić. Jeżeli członkowie Komisji Konstytucyjnej
        mają jakieś uwagi dotyczące terminarza, proszę je złożyć na ręce pana
        sekretarza Komisji W. Słomki. Obiecuję, że wszystkie uwagi przyjmę.
        Ogłaszam przerwę w obradach Komisji Konstytucyjnej. [Po przerwie]
        Proponuję, abyśmy rozpoczęli poobiednią część obrad Komisji
        Konstytucyjnej. Chcę poinformować, że podkomisja ze względu na kłopoty z
        quorum nie mogła się zebrać w przerwie obiadowej. Jest prośba posła R.
        Bugaja, aby można było przenieść obrady podkomisji na jutro, na godz. 9
        (obrady trwałyby 2 godziny). Plenarne posiedzenie Komisji Konstytucyjnej
        rozpoczęłoby się wtedy o godz. 11. Mam gorącą prośbę do osób, które
        dzisiaj rano były nieobecne, żeby pilnowały terminarzy posiedzeń, bo
        inaczej w sposób skuteczny zablokują pracę całej Komisji Konstytucyjnej.
        Nie możemy podejmować decyzji, kiedy nie ma quorum. Jeżeli jutro o godz.
        11 miałyby być przesądzane jakieś sprawy, konieczna wydaje się obecność
        większości członków Komisji. Głosowalibyśmy wówczas nad art. 15 i nowym
        wnioskiem, który zgłosił poseł J. Jaskiernia, który byłby dodatkowym
        wnioskiem uzupełniającym rozdział I Konstytucji RP „Zasady ustroju”.
        Proszę sekretariat Komisji Konstytucyjnej o rozpowszechnienie wniosku
        posła J. Jaskierni. Chciałbym, aby najpierw poseł J. Jaskiernia
        przedstawił motywację swego wniosku. Potem chciałbym zapytać ekspertów,
        co sądzą o tej propozycji."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Propozycja dodania nowego artykułu w brzmieniu: „Stowarzyszenia,
        fundacje użyteczności publicznej, organizacje społeczne oraz ruchy
        społeczne i reprezentujące interesy oraz opinie obywateli i ich grup,
        pozostają pod szczególną ochroną państwa”, wiąże się z ideą
        społeczeństwa obywatelskiego i podmiotowości tego społeczeństwa. Zwracam
        uwagę, że mamy już rozstrzygnięcie, jeśli chodzi o partie polityczne —
        art. 5 projektu jednolitego Konstytucji RP — które eksponuje ich rolę.
        Zostaną też podjęte rozstrzygnięcia dotyczące Kościoła katolickiego 1
        innych kościołów oraz związków wyznaniowych, a także form demokracji
        bezpośredniej. Stąd pojawiła się kwestia, czy nie należałoby dokonać
        konstytucjonalizacji tych form aktywności, które wzmacniają, rozszerzają
        1 pogłębiają istotę społeczeństwa obywatelskiego. Zgodnie z tym, co
        powiedział przewodniczący A. Kwaśniewski, chętnie wysłuchałbym opinii
        eks pertów. Jestem otwarty na ewentualne autopoprawki, gdyby się
        okazało, że istnieje potrzeba doprecyzowania
        legislacyjno-konstytucyjnego mojego wniosku. Niemniej jednak wydaje się,
        że idea wyrażona we wniosku odzwierciedla ważny element, który składałby
        się na kwestię podstaw ustroju w obszarze istotnym dla obywatela, dla
        umocnienia wizji Polski jako państwa, gdzie istnieje społeczeństwo
        obywatelskie, którego poszczególne części składowe podlegają
        konstytucjonalizacji. Wiąże się z tym wiele innowacji w postaci fundacji
        użyteczności publicznej, które możemy określić jako instytucje rangi non
        profit; są one bardzo rozpowszechnione w wielu krajach, a w Polsce nie
        stworzono jeszcze dla nich właściwych podwalin. Dlatego też wnosząc
        swoją propozycję, oczekuję na wypowiedzi ekspertów oraz na głosy
        członków Komisji Konstytucyjnej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Mam jedno pytanie do posła J. Jaskierni: w którym miejscu rozdziału I
        widziałby swoją propozycję?"
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="W tej sprawie również prosiłbym o opinię ekspertów."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wniosek posła J. Jaskierni wyraża zasadę społeczeństwa obywatelskiego."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="W art. 5 mówi się o gwarantowaniu przez Rzeczpospolitą Polską wolności
        tworzenia i działania partii politycznych. Nie wiem, czy mój wniosek nie
        kwalifikowałby się jako art. 5a. Później artykuły Konstytucji RP byłyby
        inaczej ponumerowane. Umieszczenie mojej propozycji po regulacji
        wolności tworzenia i działania partii politycznych byłoby pewną logiczną
        sekwencją. Wcale się przy tym nie upieram, jeśli eksperci mieliby inne
        zdanie co do usytuowania mojego wniosku. Wydaje się jednak, że
        umieszczenie mojej propozycji po art. 5 byłoby logiczne. Chodzi o
        umieszczenie jej w rozdziale I „Zasady ustroju”. Wiem, że w rozdziale II
        „Wolności, prawa oraz obowiązki człowieka i obywatela” pewne kwestie
        rozwijamy, jednak rozdział I „Zasady ustroju” ma szczególną kwalifikację
        i rangę. Stąd chodziło mi o podniesienie rangi problematyki
        społeczeństwa obywatelskiego vis-d-vis regulacji partii politycznych."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Najkrócej mówiąc, chodzi o artykuł określający zasadę społeczeństwa
        obywatelskiego."
    />

    <Utterance
      speaker="Poseł Krzysztof Kamiński (KPN)"
      imgPath="/images/kk-speakers/KaminskiKrzysztof.png"
      text="Gorąco popieram dodanie tego przepisu do rozdziału I „Zasady ustroju”, z
        tym że do wnioskodawcy — posła J. Jaskierni — mam dwa pytania, Po
        pierwsze, w projekcie jednolitym Konstytucji RP jest rozdział, który
        mówi o wolności stowarzyszeń i zawiera nawet pewne przepisy dotyczące
        stowarzyszeń. Czy poseł J. Jaskiernia ma w swym wniosku na myśli
        stowarzyszenia, o których mówi się w dalszej części projektu jednolitego
        Konstytucji RP? Czy to, o czym myślał wnioskodawca, można zastąpić inną
        definicją? Po drugie, czy wyrażenie „ruchy społeczne” dotyczy także
        ruchów na tyle liberalnych, że aż państwowo niepożądanych? Mam tu na
        myśli ruchy podgrup młodzieżowych, ruchy marginesu społecznego czy
        wszelkiego rodzaju ruchy alternatyw anarchistycznych itd. Są to wszystko
        ruchy społeczne, ale żeby pozostawały one pod szczególną ochroną
        państwa, to jestem temy przeciwny. | Może do zwrotu „ruchy społeczne”
        należałoby dodać jakiś przymiotnik, np. „respektujące porządek prawny '?
        Mam nadzieję, że poseł J. Jaskiernia rozumie, o co mi chodzi. Proszę mi
        wytłumaczyć dwie podniesione przeze mnie kwestie. Przedstawiciel
        Prezydenta RP, prof. Andrzej Rzepliński: Również uważam, że przepis
        zaproponowany przez posła J. Jaskiernię będzie bardzo potrzebny i dobrze
        będzie służył społeczeństwu i państwu. Mam jednak pewne pytania
        techniczne. Uważam, że na końcu wniosku posła J. Jaskierni lepiej byłoby
        napisać: ,,...pod szczególną ochroną prawa”, czy też „„.pod szczególną
        ochroną władz publicznych”. W zapisie zaproponowanym przez posła J.
        Jaskiernię zapewne nie tylko chodzi o państwo, ale i o samorząd
        terytorialny oraz, być może, o inne podmioty. Można się dziwić, że
        wcześniej na to nie wpadliśmy, żeby do Konstytucji RP wprowadzić tego
        typu postanowienie, jakie zaproponował poseł J. Jaskiernia."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/OsiatynskiWiktor.png"
      text="Jestem zwolennikiem zasady ochrony społeczeństwa obywatelskiego przed
        jakimkolwiek zagrożeniem ze strony państwa, władz publicznych albo
        przyszłego prawa. Uważam, że powinien to być jeden z ważniejszych
        elementów zasad naczelnych Konstytucji RP. Wydaje mi się, że pytanie
        postawione przez posła K. Kamińskiego jest bardzo ważne. W przepisie
        zaproponowanym przez posła J. Jaskiernię może oczywiście znaleźć się
        zdanie, że wymienione organizacje i ruchy muszą działać w ramach
        porządku konstytucyjnego i prawnego. Uważam, że sformułowania „ochrona
        prawa” bądź „ochrona władz publicznych” są lepsze od „szczególnej
        ochrony państwa”. Bardzo istotną rzeczą jest konstytucyjne zakotwiczenie
        bądź wyjaśnienie problemu działalności instytucji typu stowarzyszeń
        użyteczności publicznej I fundacji użyteczności publicznej. O ile wiem,
        nie ma w tej chwili w Polsce formuły prawnej „stowarzyszenie — fundacja
        — użyteczności publicznej”. Konstytucja RP zawierająca proponowany przez
        posła J. Jaskiernię przepis, stwarzałaby pewną formułę prawną ——-
        regulację prawną — na przyszłość. Zabiorę trochę czasu na wyjaśnienie
        tej sprawy. Jak wszyscy wiedzą, w Polsce jest bardzo dużo prob lemów
        związanych z działaniem fundacji. Niektóre fundacje bywają miejscem
        „prania brudnych pieniędzy” lub zajmują się działalnością gospodarczą w
        sposób budzący wątpliwości. Cały ten zamęt powstał z tego, że przy
        wprowadzaniu ustawy o fundacjach i potem, przy powstawaniu fundacji
        polskie prawo nie znało czegoś takiego, jak instytucja niedochodowa
        użyteczności publicznej. W związku z tym, jeśli np. Komitet Helsiński
        zakładał w Polsce organizację, która zajmowała się tak godną sprawą jak
        upowszechnianie praw człowieka i praw obywatelskich, to z punktu
        widzenia istniejącego prawa nie mógł on założyć niczego innego jak
        fundacja. Jednocześnie istniały fundacje prowadzące działalność
        gospodarczą, nastawione na zysk. W krajach zachodnich, nie tylko w
        Stanach Zjednoczonych, ale także w Niemczech, we Francji i w krajach
        Beneluxu są stosowane różne rozwiązania. Jednak najczęstszym
        rozwiązaniem jest fundacja, która w gruncie rzeczy rozdziela pieniądze.
        Istnieją tam także instytucje prowadzące działalność gospodarczą.
        Fundacje jej nie prowadzą. Występują też instytucje non profit, nie
        prowadzące działalności gospodarczej, nie nastawione na zysk, zajmujące
        się działaniami użyteczności publicznej. Idealną rzeczą byłoby, gdyby
        tego rodzaju myślenie, przez zakotwiczenie w przepisie proponowanym
        przez posła J. Jaskiernię z jednej strony fundacji, a z drugiej —
        instytucji użyteczności publicznej nie nastawionych na zysk, zostało
        przeprowadzone. Dawałoby to na przyszłość kierunek ustawodawczy 1
        uporządkowałoby całą tę sferę działalności, która jest niesamowicie
        potrzebna, a o tym, że może ona być zagrożona, Świadczą ostatnie decyzje
        z jednej strony Ministerstwa Finansów, z drugiej — Ministerstwa
        Sprawiedliwości, dotyczące ich ingerencji w działalność społeczeństwa
        obywatelskiego."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Chcę dowiedzieć się, czy rozpoczęliśmy generalną debatę na temat nowych
        pomysłów odnoszących się do części ogólnej Konstytucji RP? Jeżeli tak,
        to również mam pewne propozycje, które jutro rano pozwolę sobie złożyć w
        formie bardziej dopracowanej. Chciałbym, aby były one przedmiotem
        debaty. Nie wiedziałem, że zostanie przyjęta taka formuła. Kolejna
        kwestia dotyczy sformułowania zaprezentowanego przez posła J.
        Jaskiernię. Jestem ostatnim, który by nie doceniał znaczenia różnego
        rodzaju instytucji funkcjonujących w ramach tego, co się nazywa
        społeczeństwem obywatelskim. Wydaje mi się jednak, że powinniśmy się
        trzymać pewnych pojęć, które mają w naszym systemie określoną treść
        prawną. Jeżeli mówimy o stowarzyszeniach, organiz z p O O EE r A O cjach
        społecznych, ruchach społecznych przy fundacjach użyteczności
        publicznej, to chciałbym, aby te pojęcia, jeśli są używane, były używane
        jako pojęcia prawne. Z wymienionych przeze mnie pojęć nasze prawo zna
        tylko jedno —- stowarzyszenie” i drugie w połowie — „fundacja”.
        Natomiast inne pojęcia są bliżej nieokreślone. Jeżeli w ogóle mielibyśmy
        przystąpić do debaty na temat celowości wprowadzenia do Konstytucji RP
        przepisu zaproponowanego przez posła J. Jaskiernię — czy przepisu o
        podobnym sensie — to powinniśmy jednak zacząć od pewnego sprecyzowania,
        o czym w gruncie rzeczy chcemy mówić."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/SarneckiPawel.png"
      text="Również jestem dosyć sceptyczny, jeśli chodzi o umieszczenie wśród zasad
        naczelnych Konstytucji RP zasady społeczeństwa obywatelskiego i to
        wyrażonej w takim kształcie. Po pierwsze, chcę zwrócić uwagę, że nie
        całkiem jest tak, jak mówi prof. A. Rzepliński, że problematyka
        społeczeństwa obywatelskiego umknęła z pola widzenia Komisji
        Konstytucyjnej, która w swoim czasie świadomie wyeliminowała wariant II
        art. 10 z projektu jednolitego Konstytucji RP, który znacznie szerzej
        niż przyjęty art. 5 ujmował rolę podmiotów uczestniczących w życiu
        politycznym. Mówił on mianowicie nie tylko o partiach politycznych, ale
        także o rozmaitych organizacjach społecznych. Po drugie, wymienione w
        zaproponowanym przez posła J. Jaskiernię przepisie podmioty są jednak
        mniej ważne niż związki zawodowe, o których mówi się w art. 42 projektu
        jednolitego Konstytucji RP, a które we wniosku posła J. Jaskierni
        zostały pominięte. Po trzecie, moje duże zastrzeżenia budzi ostatnie
        sformułowanie proponowanego zapisu: „,... pozostają pod szczególną
        ochroną państwa”. Czyżby inne organizacje nie wymienione w proponowanym
        przepisie pozostawały pod jakąś „nieszczególną” ochroną państwa?
        Określenie „szczególna ochrona państwa” przypomina trochę osławione
        określenie „Ścisłe przestrzeganie prawa. Prawa można przestrzegać albo
        nie przestrzegać. Kwalifikator „Ścisłe” nic nam tutaj nie mówi, podobnie
        jak kwalifikator „szczególna ochrona państwa”. Wszystkie organizacje, w
        ramach ustalonych przez przepisy ustawowe, pozostają przecież pod
        ochroną państwa. W zapisie proponowanym przez posła J. Jaskiernię jest
        jakaś kolizja z zasadą równości. W sumie jest to przepis deklaratoryjny,
        programowy; niewiele z niego wynika. Przychylając się do głosów moich
        przedmówców, uważam, że problematyka społeczeństwa obywatelskiego sama w
        sobie nie jest bez znaczenia. Może to być materia konstytucyjna, ale
        raczej widziałbym tę problematykę w rozdziale II Konstytucji RP, mó-
        wiącym także o wolnościach i prawach politycznych, przy zapisie
        określającym prawo zrzeszania się."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Nie udzieliem jeszcze odpowiedzi na pytanie posła J. Ciemniewskiego,
        któremu chcę powiedzieć, że ponieważ zakończyliśmy pracę — poza art. 15
        — nad rozdziałem I projektu jednolitego Konstytucji RP, jest czas na
        zgłaszanie nowych wniosków do tego rozdziału. Stąd dopuściłem do
        dyskusji nad wnioskiem posła J. Jaskierni. Oczywiście, jeżeli poseł J.
        Ciemniewski awizuje, że jutro zgłosi nowe wnioski, to bardzo go o to
        proszę. Proszę je zgłosić na piśmie."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Leszek Wiśniewski"
      imgPath="/images/kk-speakers/WisniewskiLeszek.png"
      text="Propozycja posła J. Jaskierni jest o tyle dobra, że wymienia podmioty,
        których znaczenie należałoby podkreślić, aby zaakcentować
        konstytucjonalizację społeczeństwa obywatelskiego. To mi się w tej
        propozycji podoba. Zamieszcza się w niej jednak pewne instytucje, które
        nie mają charakteru prawnego, ani nie mają umocowania w naszym prawie. W
        prawie polskim występują jednak stowarzyszenia, w ramach ustawy — Prawo
        o stowarzyszeniach. Istnieją także fundacje, w ramach ustawy o
        fundacjach. Pojęcie „fundacje użyteczności publicznej” nie występuje w
        naszym prawie. Występowało ono kiedyś w starym Prawie o stowarzyszeniach
        pod nazwą „Stowarzyszenie użyteczności publicznej”. Zostało jednak
        wyeliminowane i w tej chwili nię istnieje. - Do zapisu proponowanego
        przez posła J. Jaskiernię można by dodać sformułowanie „inne organizacje
        społeczne”. Określenie „ruchy społeczne” jest określeniem niezbyt
        precyzyjnym. Zwrot „pozostają pod szczególną ochroną państwa” obawiam
        się, że można by było zrozumieć jako realizację tej ochrony w sensie
        nadmiernej penetracji czy kontroli państwa nad wymienionymi we wniosku
        posła J. Jaskierni jednostkami. Prof. P. Sarnecki słusznie zauważył, że
        po partiach politycznych największe znaczenie społeczne mają związki
        zawodowe. Pominięcie w przepisie zaproponowanym przez posła J.
        Jaskiernię związków zawodowych byłoby niekorzystne. Już na samym
        początku tego przepisu powinno się znaleźć określenie „związki
        zawodowe”. Potem można by dopisać: „...stowarzyszenia, fundacje i inne
        organizacje społeczne reprezentujące interesy oraz opinie [...]
        pozostają pod ochroną prawa”. Chodzi tu o ochronę prawa, a nie o jakąś
        szczególną ochronę państwa. Określenie to sugerowałoby, że inne podmioty
        pozbawione tej szczególnej ochrony rzeczywiście byłyby jej pozbawione.
        Wyróżnienie pod nazwą „szczególna ochrona państwa” jest, moim zdaniem,
        nieuzasadnione. We wniosku posła J. Jaskierni wskazane jest natomiast
        umieszczenie określenia „ochrona prawa”. Przedstawiciel pełnomocnika
        obywatelskiego projektu konstytucji, Michał Drozdek: Intencja zapisu
        zaproponowanego przez posła J. Jaskiernię idzie Obrady w dniu 21.02.1995
        r. (19 w bardzo dobrym kierunku. Całym sercem jesteśmy za państwem
        obywatelskim. Natomiast, tak jak już to wiele osób podnosiło, katalog
        wymienionych w tym zapisie podmiotów rodzi jednak wiele pytań, które
        chciałbym teraz zadać. Po pierwsze, czy można w tym przepisie wymienić
        któreś z podmiotów społecznych, które wcześniej się w nim nie znalazły?
        Mówiono już dzisiaj o związkach zawodowych. Może warto we wniosku posła
        J. Jaskierni umieścić także jakiś rodzaj fundacji, jeżeli fundacja jest
        pojęciem określonym prawnie. Czy istnieją organizacje społeczne,
        stowarzyszenia lub fundacje, które nie reprezentują interesów i opinii
        obywateli? Stawiam to pytanie, gdyż takie jest sformułowanie zapisu
        posła J. Jaskierni. Czy wnioskodawca — poseł J. Jaskiernia miał na myśli
        również stowarzyszenia, które nie reprezentują interesów obywateli? Chcę
        zauważyć, że zapis posła J. Jaskierni jest dużo mocniejszy od zapisu
        traktującego o partiach politycznych. W art. 5 projektu jednolitego
        Konstytucji RP jedynie gwarantuje się wolność tworzenia i działania
        partii politycznych, natomiast w zapisie posła J. Jaskierni mówi się o
        szczególnej ochronie państwa przysługującej wszystkim stowarzyszeniom,
        jakby chciało się je wynieść ponad partie polityczne. Czy takie było
        zamierzenie posła J. Jaskierni? Kolejne moje pytanie odnosi się do
        pewnych konsekwencji prawnych. Jaka wizja dalszych uregulowań prawnych
        idzie za sformułowaniem zawartym we wniosku posła J. Jaskierni? Na pewno
        wynikają z tego jakieś konsekwencje prawne. Zadałem tylko kilka pytań
        uściślających."
    />

    <Utterance
      speaker="Senator Jerzy Madej (SKD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Wydaje mi się, że tego typu pytań i wątpliwości jest znacznie więcej.
        Jedno z bardziej drobiazgowych pytań może dotyczyć chociażby
        sformułowania: „reprezentujące interesy oraz opinie obywateli i ich
        grup”. O jakie grupy tu chodzi? Czy już 10 osób tworzy grupę? A może
        grupa zaczyna się dopiero od 10 proc. ogółu obywateli? Przepis
        zaproponowany przez posła J. Jaskiernię może rodzić także wiele innych
        problemów. Generalnie zgadzam się ze stanowiskiem prof. P. Sarneckiego,
        że jeżeli chcemy wprowadzić ten przepłs do Konstytucji RP, to nie do
        rozdziału I „Zasady ustroju”. W tej chwili mówimy o rzeczach, które są
        szczegółowymi rozwiązaniami, płynącymi z zasady następującej:
        „Rzeczpospolita Polska jest wspólnym dobrem wszystkich obywateli”. Zapis
        ten, moim zdaniem, obejmuje wszystkie przypadki rozwiązań proponowanych
        przez posła J. Jaskiernię. Partie polityczne umieściliśmy w odrębnym
        artykule w rozdziale I „Zasady ustroju” nie dlatego, żeby państwo miało
        je chronić, tylko dlatego, że jest to jeden z elementów ustroju. Czy
        zasada szczególnej ochrony państwa oznacza, że policja będzie chronić
        stowarzyszenia przed wyrządzeniem im krzywdy? | — p ——am ZE —— mw Moje
        stanowisko jest takie: jeżeli chcemy wprowadzić do Konstytucji RP
        przepis proponowany przez posła J. Jaskiernię, to nie do rozdziału I
        „Zasady ustroju”. Jeżeli uzgodniliśmy, że w tym rozdziale mają się
        znaleźć zasady ogólne — zasady ustrojowe — to konsekwentnie się tego
        trzymajmy."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Nie ingerując w treść wniosku posła J. Jaskierni, chciałabym jedynie
        zwrócić uwagę, że jeżeli używa się określenia „użyteczności publicznej”,
        to właściwie powinno się używać „wyższej użyteczności publicznej ,
        ponieważ tak to jest napisane w Prawie o stowarzyszeniach. Co prawda,
        jest to już tytuł honorowy i nie pociągający za sobą skutków prawnych,
        lecz funkcjonuje nadal jako pojęcie prawne. Natomiast w obecnym stanie
        prawnym każde stowarzyszenie i każda fundacja powinny mieć charakter
        użyteczności publicznej. Wyższa użyteczność publiczna jest wyłącznie
        tytułem honorowym, dawniej pociągało to za sobą skutki prawne.
        Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński: Proponuję zmianę
        formy wniosku posła J. Jaskierni. Proponuję użyć pewien termin
        agregujący wszystkie możliwe tutaj instytucje, znany nie tyle prawu
        wewnętrznemu polskiemu, co prawu międzynarodowemu: „organizacje
        pozarządowe”. Ter _ min ten obejmuje te typy organizacji, o których
        teraz mówimy. Wolałbym także nie używać terminu „ruch” dlatego, że pod
        ochroną prawa może się znajdować tylko coś, co jest gdzieś formalnie
        zgłoszone, zarejestrowane. Ruch nie musi być zarejestrowany, wobec czego
        trudno by oczekiwać, aby odpowiednie organy władzy publicznej otoczyły
        go szczególną opieką. Jeżeli jakiś ruch zostanie zarejestrowany jako
        ruch społeczny — organizacja pozarządowa — jednocześnie zostanie
        podmiotem tej szczególnej opieki. Proponuję następującą treść dla
        zmodyfikowanego wniosku posła J. Jaskierni: „Organizacje pozarządowe
        służące realizacji interesów oraz wyrażaniu opinii obywateli, działające
        w ramach porządku konstytucyjnego, pozostają pod szczególną ochroną
        prawa”."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/OsiatynskiWiktor.png"
      text="Chcę odnieść się do głosów, które porównywały przepis zaproponowany
        przez posła J. Jaskiernię z wariantem II art. 10 projektu jednolitego
        Konstytucji RP. Myślę, że wariant II art. 10 zawierał szeroką formułę
        wpływania partii politycznych i innych organizacji na władzę państwową.
        Jest to jakby inny przepis i inna sprawa. Jeśli mówimy o wpływaniu na
        władzę państwową, to chodzi tu o udział obywateli, organizacji i grup w
        sprawowaniu władzy. Przepis, który zaproponował poseł J. Jaskiernia, i
        który teraz skonkretyzował prof. A. Rzepliński, dotyczy szalenie ważnej,
        naczelnej zasady funkcjonowania państwa, zasady ochrony społeczeństwa
        cywilnego przed państwem bądź różnymi organami władzy publicznej —
        ochrony przed nadmierną kontrolą. Jeżeli do zasad naczelnych Konstytucji
        RP mamy wprowadzić jakieś doświadczenia z poprzedniej epoki, to powinna
        to być zasada ochrony tego elementu życia społecznego obywateli, który
        nie należy do państwa, nie należy do władzy i nie zmierza do jej
        sprawowania, ale zmierza do reprezentowania działalności i spontanicznej
        aktywności niepolitycznej obywateli oraz zaspokajania niepolitycznych
        potrzeb ludzi. Wydaje się, że taka formuła może być materią
        konstytucyjną. | Drugie pytanie brzmi: czy ta formuła powinna się
        znaleźć w rozdziale Konstytucji RP traktującym o prawach i wolnościach
        obywateli, także o prawach osobistych, czy też w zasadach naczelnych?
        Jest to do rozstrzygnięcia. Zasada społeczeństwa obywatelskiego wydaje
        mi się tak ważna, że powinna należeć do zasad naczelnych Konstytucji RP.
        Można ją porównać z innymi zasadami. Jeżeli w zasadach naczelnych mówi
        się o partiach politycznych, kościołach, to równie dobrze może się wśród
        nich znaleźć to, co jest istotą społeczeństwa niezależnego od państwa,
        społeczeństwa obywatelskiego czy cywilnego."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem, że po zgłoszonych uwagach należałoby zastanowić się nad inną
        redakcją wniosku J. Jaskierni. Analizując dotychczasowe zapisy rozdziału
        I „Zasady ustroju” — mówię teoretycznie, gdyż będziemy dopiero głosować
        w tej sprawie — wydaje mi się, że jeżeli gdziekolwiek propozycja posła
        J. Jaskierni miałaby być zapisana, to chyba po art. 5. W art. 4 jest
        mowa o władzy zwierzchniej, w art. 5 — o partiach politycznych, a w
        kolejnym — byłaby mowa o ochronie prawa do działalności innego typu
        aniżeli polityczna w ramach partii. Głośno myślę, kierując swoje pytanie
        do ekspertów, czy jeżeli zdecydowalibyśmy się na dodanie do zasad
        naczelnych propozycji posła J. Jaskierni, to czy w tym miejscu, o któ-
        rym przed chwilą powiedziałem?"
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Pragnę podziękować za uwagi, które zostały wypowiedziane i które, jak
        dobrze zrozumiałem, nie podważyły idei państwa obywatelskiego,
        społeczeństwa obywatelskiego i możliwości jej konstytucjonalizacji.
        Chciałbym ustosunkować się do kilku problemów, które zostały zgłoszone,
        potwierdzając gotowość do zmian redakcyjnych, którą sygnalizowałem we
        wprowadzeniu, gdyż sprawa jest Świeża, a spójność propozycji wymaga
        bardzo szczegółowych analiz. Pierwsza kwestia dotyczyła dylematu, czy
        zgłoszoną propozycję zamieścić w „Zasadach ustroju”. Jest to bardzo
        poważny wybór polityczny. Jeśli decydujemy się podjąć problem gwarancji
        tworzenia partii politycznych — zrobiliśmy to w art. 5 — to również idea
        społeczeństwa obywatelskiego może być uznana za ideę rangi zasad
        ustrojowych, nieza ENER nna pom leżnie od faktu, że w rozdziale II
        „Wolności, prawa oraz obowiązki człowieka i obywatela” nawiązujemy do
        wielu zagadnień szczegółowych. Nie jest sytuacją wyjątkową, że niektóre
        zasady generalne rozwijamy później szczegółowo, np. zasadę podziału
        władzy lub inne, które podlegają konkretyzacji. Dlatego też będę
        podtrzymywał swój wniosek. Sprawa druga: czy jest iunctim między
        odrzuceniem ust. 2 dawnego art. 10 — obecnego art. 5 — a tą propozycją.
        Nie ma. Funkcja partii politycznych jest inna. Partie polityczne
        wyraźnie wiążemy z demokratycznymi metodami kształtowania polityki
        państwa, a więc z mechanizmem sprawowania władzy. Istnieje także obszar
        sprawowania władzy i rola partii politycznych jako metody oddziaływania
        na _ sprawowanie władzy oraz kształtowanie polityki, jest to odrębne
        zagadnienie, gdzie czytelnie postawiliśmy na konstrukcję partii
        politycznych. Im czytelniej rozstrzygnęliśmy, iż chodzi o partie
        polityczne, tym bardziej rodzi się pytanie, czy podmiotowość
        konstytucyjna innych instytucji, a więc stowarzyszeń, fundacji
        użyteczności publicznej, związków zawodowych, powinna się znaleźć wśród
        zasad ustrojowych. Kwestię związków zawodowych należałoby uzupełnić.
        Można nawet stworzyć odrębny przepis, jeżeli uznalibyśmy, iż
        konstytucjonalizacja związków zawodowych powinna występować pośród zasad
        ustroju. Rodzi się teza, że jest to potrzebne, oczywiście uwzględniając
        konieczność sprecyzowania tego przepisu. Z dotychczasowych uwag wynika,
        że możliwa do skonsumowania jest propozycja dodania do mojego wniosku
        „związków zawodowych”, nawet umieszczając je na pierwszym miejscu.
        Wydaje się, że można przyjąć propozycję posła K. Kamińskiego, aby
        wyraźnie oznaczyć, iż chodzi o stowarzyszenia, fundacje i organizacje
        działające w ramach porządku konstytucyjnego i prawnego lub porządku
        prawnego Rzeczypospolitej Polskiej. Sformułowanie to należy jednak
        doprecyzować. Uwzględniając krytykę prof. P. Sarneckiego, można
        zrezygnować z określenia „pod szczególną ochroną państwa '.
        Zaproponowano zastąpić je wyrazami „pod ochroną prawa” bądź „pod ochroną
        władz publicznych , gdybyśmy chcieli odnieść to szerzej, nie tylko do
        organów państwowych, ale i do samorządowych. Są to szczegółowe
        propozycje, które możemy podjąć. Prof. A. Rzepliński zasugerował, aby
        użyć określenia „organizacje pozarządowe”. Wiem, że w polskim języku i w
        polskim słownictwie konstytucyjnym pojęcie to jeszcze się nie utrwaliło,
        ale w tej chwili jest to jedno z najbardziej modnych pojęć na Świecie.
        Non-governmental organisation to jeden z fundamentów dzisiejszego
        funkcjonowania życia publicznego na Świecie; jest to bardzo czytelne
        pojęcie. | Rodzi się pytanie, czy nie jesteśmy zbyt schematyczni w
        dotychczasowej konstrukcji konstytucyjnej lczy nie mamy pewnej alergii
        do niektórych innowacyjnych rozwiązań, które mogłyby być wprowadzone do
        Konstytucji RP? a an NĄ"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Nie mamy żadnej alergii, skoro stać nas na rząd spoza koalicji rządowej."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Nawiązuję do pytania o konsekwencje omawianego zapisu. Stale stoimy
        przed pewnym dylematem, gdy staramy się unikać pojęć deklaratywnych.
        Pozostawienie określenia „pod ochroną prawa” stanowi sygnał, że nasze
        państwo chce chronić społeczeństwo obywatelskie i organizacje
        pozarządowe oraz dostrzega ich rangę. Można przyjąć odwrotną formułę i
        zastosować konstrukcję podobną do tej, która jest w art. S:
        „Rzeczpospolita Polska gwarantuje wolność tworzenia ...”. Można zapisać:
        „Rzeczpospolita Polska gwarantuje wolność tworzenia związków zawodowych,
        stowarzyszeń (...), które pozostają pod ochroną prawa . Podkreślam, iż
        jest to kwestia określonej konwencji, która może być w tym przypadku
        zastosowana. Jeśli przewodniczący A. Kwaśniewski pozwoli, mogę pod
        wpływem uwag, które zostały zgłoszone — przecież dyskusja dopiero się
        rozpoczęła, gdyż nie było odpowiedniego przedłożenia podkomisji —
        opracować redakcję, która uwzględni szereg propozycji. Mogę nawet
        opracować redakcję wariantową, gdyż na podstawie uwag, które padły,
        rysują się co najmniej dwa, a nawet trzy warianty potencjalnego
        rozwiązania, które mogę przedłożyć członkom Komisji Konstytucyjnej celem
        dalszego procesu decyzyjnego. Rozumiem, że kończymy debatę nad
        rozdziałem I i uprawnione są wszelkie inicjatywy zmierzające do
        wzbogacenia tego rozdziału o te elementy, których w nim zabrakło."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Mam gorącą prośbę do posła wnioskodawcy. Gdyby udało się przedstawić ową
        poprawkę w jednym wariancie, byloby to dla nas bardzo wygodne. Gdyby
        wszelkie wewnętrzne dylematy można było rozstrzygnąć wcześniej,
        bylibyśmy zobowiązani; ułatwiłoby to nam zadanie."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Pragnę zabrać głos ad vocem. Novum jest tylko to, o czym mówił prof, A.
        Rzepliński. Była to ostatnia wypowiedź i członkowie Komisji
        Konstytucyjnej nie odnieśli się do niej. Jeżeli Komisja Konstytucyjna
        zaaprobowałaby pojęcie „„organizacje pozarządowe” jako określenie
        uprawnione i konsumujące inne sformułowania, to bardzo ułatwiłoby mi to
        zadanie. Gdyby przewodniczący A. Kwaśniewski poddał w tej chwili ów
        problem do przedyskutowania, to bardzo ułatwiłoby ostateczną redakcję
        mojego wniosku."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem, że chodzi o możliwość wpisania do Konstytucji RP pojęcia
        „organizacje pozarządowe”."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Pojęcie „organizacje pozarządowe” obejmuje szereg elementów i pozwala
        uniknąć terminów typu „ruchy społeczne”, „organizacje społeczne”, które
        nie są w projekcie jednolitym Konstytucji RP użyte."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Aprobata dla wniosku prof. W. Osiatyńskiego — który potem znowu nam
        wypomni, że to on zgłasza wszystkie wnioski tego typu — nie zmniejsza
        wątpliwości. Chciałabym, aby poseł J. Jaskiernia dobrze mnie zrozumiał.
        Nie chodzi mi o podważenie idei szczególnej ochrony ze strony państwa
        dla stowarzyszeń 1 fundacji wyższej użyteczności publicznej. Zastanówmy
        się, jakie będą tego skutki, abyśmy nie „obudzili się” dopiero przy
        głosowaniu. Po pierwsze, weźmy pod uwagę organizacje pozarządowe.
        Klasyczną organizacją pozarządową jest samorząd terytorialny, o którym
        przed chwilą mówiliśmy — mamy administrację rządową i pozarządową.
        Oczywiście, że nie jest to organizacja pozarządowa w sensie
        non-governmental organisation, pojęcie to nie jest przyjęte w polskim
        prawie administracyjnym. Należałoby je zdefiniować w konkretny sposób.
        Tymczasem prawda jest taka, że skoro administrację dzielimy np. na
        rządową i samorządową, to w sensie dosłownym samorząd terytorialny
        niewątpliwie jest organizacją pozarządową. Druga wątpliwość: rozumiem,
        że poseł J. Jaskiernia wycofa określenie „szczególną” w odniesieniu do
        ochrony państwa. Nie wiem, czy teraz pozostało wyrażenie „pod ochroną
        państwa” czy „pod ochroną prawa”?"
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Jestem na etapie redagowania swojej propozycji. Niemniej z przyjemnością
        wysłucham teraz głosów, które padną, gdyż będą one pomocne przy
        ostatecznej redakcji mojego wniosku."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Problem polega na tym, że skoro raz tak postąpimy, to przy drugim
        czytaniu natychmiast zgłosi się mnóstwo innych wnioskodawców, którzy
        powiedzą: „Jak to? Stowarzyszenie jest pod ochroną państwa, a różne inne
        szlachetne rzeczy — nie są?” Czy to oznacza, że wszystko inne nie jest
        pod szczególną ochroną? Czy prawa dziecka nie są pod szczególną ochroną
        państwa? A wszelka inna działalność? W tym momencie otwieramy pewną
        furtkę. Póki ochrona ta wynika z ogólnych zasad Konstytucji RP, wszystko
        jest w porządku. W chwili, gdy szczególną troskę deklarujemy w
        odniesieniu do jednego fragmentu, otwieramy wrota dla następnych żądań
        tego rodzaju. Poseł J. Jaskiernia przyznał, że można dopisać „związki
        zawodowe”. Zgłosimy kilka następnych podmiotów — mój klub może to zrobić
        — i w ten sposób rozciągamy to w nieskończoność. Tego się obawiam.
        Kolejny problem: jak będziemy to realizować? Czy nie będzie wtedy
        głosowania a contrario; skoro EE Z coś jest pod ochroną, to reszta nie
        jest, przynajmniej nie pod ochroną szczególną bądź nie pod ochroną
        prawną. Czy mamy coś wyjąć spod ochrony prawnej? Gdybyśmy wyjęli coś
        spod ochrony prawnej, to byłoby straszne. Głośno myślę, gdyż wniosek
        posła J. Jaskierni został zgłoszony w tej chwili. Pragnę w tym momencie
        zadeklarować, że do jutra zastanowimy się nad innym sformułowaniem
        ogólnej zasady pomocniczości. Poprzednio w istocie wcale nie chodziło o
        to, żeby każdy miał równe prawa i obowiązki, ale o równość sektorów.
        Wydaje mi się, że w tej sprawie chodzi o ogólnie uznaną w prawie
        europejskim zasadę pomocniczości, tylko musimy ją inaczej zapisać,
        Według mnie, obecny zapis, zaproponowany przez posła J. Jaskiernię, jest
        niedoskonały i wymaga on głębokiego przemyślenia. Drobne poprawki, które
        poseł J. Jaskiernia czyni w tej chwili, nie rozwiewają moich
        wątpliwości. Chętnie wysłucham zdania ekspertów."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Jeżeli chodzi o pojęcie „organizacji pozarządowej”, to cenię zgłoszone
        pomysły, ale jest to określenie z zupełnie innej stery. O organizacjach
        pozarządowych — zwracam się do prof. A. Rzeplińskiego — zwykło się mówić
        na arenie międzynarodowej, gdzie chodzi o rozróżnienie pomiędzy
        organizacjami rządowymi międzynarodowymi, działającymi na gruncie obrotu
        prawnomiędzynarodowego a organizacjami o charakterze międzynarodowym,
        ale nie mającymi cech organizacji rządowych, reprezentujących rząd,
        państwo na arenie międzynarodowej, oraz gdzie chodzi o pewne organizacje
        społeczne i działające w skali międzynarodowej. Używanie tego pojęcia w
        naszym przypadku jest zupełnie nietrafne. Nie wiem, jakie organizacje
        rządowe mielibyśmy w państwie. Organizacje rządowe działające w państwie
        nazywają się po prostu jego organami. W skrócie właśnie tak można ująć
        tę sprawę. Nie znam organizacji rządowych, które należałyby do kategorii
        zbliżonych do tych, jakie zostały tutaj wymienione. Nawiązując do
        wypowiedzi poseł I. Lipowicz, chcę powiedzieć, że w gruncie rzeczy nie
        chodzi o szczególną ochronę państwa — tak zrozumiałem wywód prof. W.
        Osiatyńskiego — ale o to, aby państwo nie ograniczało możliwości
        działania instytucji społeczeństwa obywatelskiego. Nie chodzi o to, żeby
        państwo chroniło w jakiś sposób określone organizacje, gdyż uzyskują one
        ochronę na podstawie innych przepisów, przede wszystkim na podstawie
        przepisów o wolności stowarzyszeń, wolności zrzeszania się. Wręcz
        odwrotnie, państwo powinno tworzyć warunki do funkcjonowania tych
        organizacji. Sądzę, że słuszną drogą byłoby pójście w kierunku
        zakreślenia granic działania państwa, poprzez sformułowanie zasady
        pomocniczości doszłoby do stworzenia generalnej klauzuli, w ramach
        której państwo zostałoby ograniczone do sfery, gdzie jest potrzebne
        działanie władzy publicznej, a nie ingerowałoby w sferę, która powinna
        być realizowana przez różnego rodzaju podmioty tworzone przez obywateli.
        Proponuję, aby zamiast tworzenia katalogu różnych stowarzyszeń 1
        fundacji, pójść drogą określenia granic działania państwa."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Chcę zwrócić uwagę tylko na jedną rzecz. Rozumiem, że wszystkim, którzy
        zabierali głos, chodziło o zakotwiczenie w Konstytucji RP idei
        społeczeństwa obywatelskiego. Wszyscy się z tym zgadzają. Mówi się
        jednak, że trzeba to uczynić poprzez przy jęcie w rozdziałe I jeszcze
        jednej dodatkowej zasady naczelnej. Nie mogę się z tym zgodzić, że
        zasady naczelne, tak ważne jak zasada społeczeństwa obywatelskiego,
        formułuje się jako ogólne stwierdzenie, umieszczone na czele Konstytucji
        RP, w rozdziale I. Zasady naczelne konstytucji mogą wynikać — potwierdza
        to judykatura trybunałów konstytucyjnych z różnych krajów — z pewnego
        uogólnienia szczegółowych przepisów regulujących określone materie
        społeczne. Mają one wtedy pewien walor zasady ustroju. Uważam, że jeżeli
        w Konstytucji RP stworzy się osobną podstawę — jak to już przegłosowano
        — dla samorządów, nie tylko terytorialnych, ale samorządów w ogóle,
        osobną podstawę dla związków zawodowych — zasadę wolności związkowej
        proponuje się w rozdziałe II mówiącym o prawach i wolnościach człowieka
        i obywatela — jeżeli w ramach ogólnego prawa zrzeszania bądź
        stowarzyszania się, znajdujemy pole dla swobodnego organizowania się
        społeczeństwa w stowarzyszenia i inne organizacje społeczne, jeśli
        znajdziemy inne podstawy prawne dla zorganizowanej aktywności
        społecznej, to rodzi się pytanie, czy w ten sposób nie konstruujemy
        pewnej zasady ustroju, będącej wynikiem określonego uogólnienia? Myślę,
        że taka droga formułowania niektórych zasad ustroju czasem jest
        ważniejsza — gdyż jest bardziej konkretna — niż często bardzo ogólnikowa
        formuła zawarta w rozdziale I Konstytucji RP. Na zakończenie chcę
        powiedzieć, że nie przypominam sobie — choć cały czas sięgam pamięcią do
        tekstów konstytucji i tego, co na ich temat pisano — przepisu
        konstytucyjnego, umieszczonego na czele konstytucji, który by
        szczegółowo wyliczał jakieś formy zbiorowej aktywności obywateli,
        uznawane przez państwo czy nawet poddane jego ochronie. Niektóre
        wyliczenia wskazujące, 1ż chodzi o organizacje reprezentujące interesy,
        stwarzają wrażenie, jakbyśmy chcieli w specjalny sposób
        konstytucjonalizować grupy nacisku, co do których czasem można mieć
        stanowisko pełne rezerwy, czy są one państwowotwórcze i pozytywnie
        oddziałują na życie państwowe. Nie wiem, czy chodzi nam o to, aby
        stwarzać dla nich specjalną sytuację, gdy raczej występuje problem
        zachowania nad nimi pełnej kontroli. Zasady naczelne ustroju mogą
        wynikać nie tylko z rozdziału I Konstytucji RP, ale także, poprzez pewne
        uogólnienie, ze szczegółowych przepisów zawartych w wielu innych
        częściach ustawy zasadniczej."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="W tej chwili powstał bardzo poważny spór. Samorząd jest podstawowym
        elementem realizacji samorządności i jednocześnie władzy publicznej."
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="Mam pytanie do ekspertów, dotyczące ostatnich wyrazów propozycji posła
        J. Jaskierni: „pod szczególną ochroną państwa”. Jakie obowiązki państwa
        wynikałyby z takiego zapisu i czy nie obejmowałyby one np. obowiązków
        finansowych należących do państwa w stosunku do organizacji, które
        zostałyby poddane szczególnej ochronie państwa?"
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Teraz głos zabierze senator J. Orzechowski, a potem poseł J. Jaskiernia
        odpowiedziałby na postawione pytania."
    />

    <Utterance
      speaker="Senator Jan Orzechowski (PSL)"
      imgPath="/images/kk-speakers/OrzechowskiJan.png"
      text="Rozumiem, że wniosek posła J. Jaskierni zmierzał w kierunku zapewnienia
        obywatelom prawa zrzeszania się w różne organizacje. W moim przekonaniu,
        prawo zrzeszania się i tworzenia organizacji może i powinno być
        zamieszczone w podrozdziale o wolnościach i prawach politycznych. Taki
        sam efekt można by było osiągnąć poprzez odpowiednie uzupełnienie art.
        41 projektu jednolitego Konstytucji Rzeczypospolitej Polskiej.
        Propozycja zapisu posła J. Jaskierni składa się z pojęć nieostrych,
        nieokreślonych; wszystkie te pojęcia wymagałyby dodatkowego komentarza,
        Co to znaczy ruch społeczny? Co to są fundacje — wiemy; ustawa o
        fundacjach nie rozgranicza fundacji użyteczności publicznej, tylko mówi
        o fundacjach w ogóle. W tej chwili nie ma też pojęcia „stowarzyszenia
        użyteczności publicznej”. Kiedyś takie pojęcie było. Irzeba byłoby
        wszystkie te określenia dodatkowo zdefiniować. Wydaje mi się, że zapis
        tak nieostry nie nadaje się do wprowadzenia do części ogólnej
        Konstytucji RP, mówiącej o zasadach ustroju; prawo zrzeszania się można
        by ewentualnie uzupełnić w podrozdziale „Wolności i prawa polityczne”.
        Osobiście jestem przeciwny wnioskowi posła J. Jaskierni."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Głos zabierze poseł J. Jaskiernia."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/SarneckiPawel.png"
      text="Może najpierw wysłuchamy odpowiedzi na pytanie posła J. Zdrady."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Wydaje mi się, że najpierw poseł J. Jaskiernia powinien ustosunkować się
        do podniesionych uwag zwa"
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Przychylam się do sugestii prof. Sarneckiego, abyśmy wcześniej
        wysłuchali stanowiska ekspertów, gdyż może to rzutować na brzmienie
        moich propozycji."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Leszek Wiśniewski"
      imgPath="/images/kk-speakers/WisniewskiLeszek.png"
      text="Chcę odpowiedzieć na pytanie zadane przez posła J. Zdradę, czy zwrot
        „pozostają pod szczególną ochroną państwa sugerowałby, między innymi,
        jakieś szczególne uprawnienia natury finansowej ze strony państwa czy
        też jakieś szczególne obowiązki. Myślę, że nie, dlatego że pojęcie
        „ochrona ze strony państwa” bądź „ochrona ze strony prawa” wyraźnie
        sugeruje, iż chodzi o ochronę przed bezprawnym działaniem sprawowanym
        wobec podmiotów, które są chronione. W żadnym razie nie można wyciągać
        wniosku, że przysługują im z tego jakieś przywileje na przykład
        finansowe bądź jakiekolwiek inne. Pozostaje do rozstrzygnięcia kwestia,
        czy inne podmioty lub jednostki nie wymienione tutaj — poruszano już ten
        problem w dyskusji — nie będą się czuły pokrzywdzone z tego względu, że
        nie pozostają pod szczególną ochroną. Dlatego też pytanie, czy powyższy
        zwrot pozostawić, jest nadal aktualne. Jeżeli chodzi o fundacje
        użyteczności publicznej, chcę powiedzieć, że w tej chwili pojęcie to
        zostało wyeliminowane z systemu prawnego, ponieważ zmiana ustawy — Prawo
        o stowarzyszeniach wykreśliła określenie „stowarzyszenie wyższej
        użyteczności publicznej”, nadawane jako tytuł honorowy. W tej chwili nie
        ma go w żadnej ustawie, czy to o stowarzyszeniach, czy o fundacjach."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/OsiatynskiWiktor.png"
      text="Pragnę odnieść się do wątpliwości, czy miejscem dla wniosku posła J.
        Jaskierni powinien być rozdział II „Wolności, prawa oraz obowiązki
        człowieka i obywatela”, czy też zasady naczelne. Wydaje mi się, że
        rozdział traktujący o wolnościach, prawach oraz obowiązkach człowieka i
        obywatela dotyczy głównie wolności i ograniczeń państwa w stosunku do
        jednostek, a nie w stosunku do zbiorowości występujących w
        społeczeństwie, choć oczywiście, część z tych przepisów może mieć i
        takie zastosowanie. Według mnie, przepisy zasad naczelnych dotyczą
        czegoś, co jest pomiędzy państwem i obywatelem, czegoś , co wypełnia
        przestrzeń społeczną i wykracza poza same wolności obywatelskie bądź
        wolności jednostki. Elementami niepaństwowymi a dotyczącymi materii
        konstytucyjnej oraz materii organizacji państwa są: kościoły, partie,
        działalność gospodarcza niepaństwowa — niezależna od państwa — samorządy
        nieterytorialne i wreszcie cała reszta organizacji społecznych, nie
        będących częścią władzy publicznej, ani państwowej, ani samorządu
        terytorialnego. Wydaje mi się, że skoro Konstytucja RP wymienia cztery
        pierwsze elementy w zasadach naczelnych, to mogłaby, 1 chyba powinna,
        wymienić również piąty element całej przestrzeni społecznej, która jest
        pomiędzy państwem a jednostką jako taką i która fo mułuje tkankę
        niezależnego od państwa życia publicznego. Bardzo podoba mi się
        kierunek, którym podążają posłowie 1. Lipowicz i J. Ciemniewski, tzn.
        aby w zasadach naczelnych sformułować coś w rodzaju pomocniczości
        państwa. Nawet przy formułowaniu takiej zasady obstawałbym przy tym, aby
        jedną jej część — być może ustęp — stanowiła propozycja zgłoszona przez
        posła J. Jaskiernię. Wtedy mielibyśmy zasadę pomocniczości, która mówi,
        czego państwo nie może lub co może zrobić oraz zasady ochrony takich
        sfer społeczeństwa obywatelskiego, w które państwo nie może ingerować.
        Byłoby to wyznaczeniem dodatkowej granicy zasady pomocniczości. Wtedy
        byłaby ona w pełni doprecyzowana."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem, że po wypowiedziach posłów I. Lipowicz i J. Jaskierni będziemy
        zbliżać się do finału dyskusji prowadzonej w tej sprawie."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Dopiero w tym momencie zdałam sobie sprawę, że chciałam zapytać,
        dlaczego nie ma żadnego eksperta-kobiety wśród ekspertów Kounisji
        Konstytucyjnej Z.gromadzenia Narodowego?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Takiego wyboru dokonali członkowie Komisji Konstytucyjnej kilka miesięcy
        temu."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Coś mnie tknęło, gdy ktoś powiedział „panowie-eksperci”. Nie o tym
        jednak chciałam mówić, był to tylko żart. Nie rozumiem prof. W.
        Osiatyńskiego. Zastanówmy się, co robimy? Albo patrzymy od strony
        wolności działania podmiotów, albo od strony szczególnych obowiązków
        państwa, albo od strony zasady pomocniczości. Prof. W. Osiatyński
        zaproponował uwzględnienie zasady pomocniczości — którą do jutra
        podejmujemy się opracować, również w oparciu o materiały prof. W.
        Osiatyńskiego — ale jednocześnie powiedział, że najlepiej byłoby
        połączyć jedno z drugim, tzn. zasadę pomocniczości z zasadą szczególnej
        ochrony państwa. Albo państwo ma szczególnie opiekuńczy,
        paternalistyczny i ciepły stosunek do niektórych organizacji oraz otacza
        je swoją macierzyńską troską — paternalistyczny bądź matriarchalny —
        albo odwrotnie — patrzymy od wewnątrz i mówimy: te organizacje mają
        podmiotowe prawo działania i samoorganizacji, niech państwo się łaskawie
        do tego nie wtrąca, albo wtrąca się tylko w zakresie, który jest
        rozsądny i konieczny. Od 1980 r. zawsze uważałem, iż zasada społeczeń-
        stwa obywatelskiego nie polega na tym, że państwo otacza swoją
        matriarchalną czy patriarchalną opieką jakąś część społeczeństwa, tylko
        odwrotnie że społeczeństwo, wolni ludzie mają prawo do samoorganizacji,
        a państwo szanuje ich zdolność do upodmiatawiania się. Szanuje tak
        bardzo, że wycofuje się MA AE aj A A PY O an a z wielu obszarów, a swoje
        prawo do działania uznaje tylko tam, gdzie obywatele nie realizują
        swoich praw samodzielnie, wreszcie państwo sprawuje tylko nadzór nad tym
        wszystkim. W niektórych przypadkach wyjątek stanowi samorząd
        terytorialny, który nie tylko ma pierwszeństwo w realizacji zasady
        pomocniczości samoorganizowania się, ale który w dodatku posiada
        gwarancję udziału we władzy publicznej."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Rozumiem, że z jednej strony nikt nie zakwestionował idei społeczeństwa
        obywatelskiego, z drugiej jednak strony zgłoszone są różne szczegółowe
        uwagi co do kwestii usytuowania omawianego przepisu oraz jego kształ-
        tu. W związku z tym chciałbym poruszyć trzy sprawy — odpowiadając na
        wątpliwości, które się zrodziły — oraz przedstawić pewną propozycję.
        Jeśli Komisja Konstytucyjna nie uzna za stosowne przyjęcie tej czy innej
        wersji, to zwyczajnie jej nie będzie, jak rozumiem, na razie rozpoczęła
        się w tej sprawie dyskusja. Po pierwsze, można postawić pytanie, jakie
        są konsekwencje faktu, że coś jest umieszczone w „„Zasadach ustroju”.
        Dokonujemy konstytucjonalizacji parti politycznych. W tej sytuacji można
        by a contrario powiedzieć, że w rozdziale I „Zasady ustroju” nie
        przewidujemy innych ważnych konstytucjonalizacji dotyczących związków
        zawodowych czy też stowarzyszeń, traktując tę problematykę jako jakoś-
        ciowo gorszą, bądź przypisując jej niższą rangę od kwestii
        konstytucjonalizacji partii politycznych. Można na ten temat wypowiadać
        zróżnicowane opinie. Moja propozycja wynika z przekonania, iż powinniśmy
        wyjść poza pewien tradycyjny kanon i że konstytucjonalizacja wyłącznie
        partii politycznych nie odzwierciedla charakterystyki społeczeństwa
        obywatelskiego, które obecnie budujemy i które wymaga szczególnego
        potraktowania w „Zasadach ustroju”, niezależnie od tego, że kwestia ta
        będzie regulowana w rozdziale dotyczącym praw i wolności człowieka i
        obywatela. Można przychylić się do argumentacji prof. K. Działochy,
        który sugeruje, że w rozdziale II „Wolności, prawa oraz obowiązki
        człowieka i obywatela” kwestia ta będzie poruszona i że w rozdziale tym
        również znajdują się zasady ustroju. Nie wszystkie zasady ustrojowe
        znajdują się w rozdziale I Konstytucji RP, Można również wysunąć inne
        argumenty, że skoro tworzy się rozdział I „Zasady ustroju”, to
        ustawodawca nieprzypadkowo dokonuje pewnej gradacji. Oczywiście pytanie,
        czy chce on umieścić omawianą zasadę w rozdziale I Konstytucji RP, czy
        też nie, pozostaje pytaniem otwartym. W mojej ocenie, istnieje taka
        możliwość. Stąd wynika moja propozycja. Po drugie, duże wątpliwości
        wzbudziła kwestia szczególnej ochrony prawnej — bądź samej ochrony
        prawnej — co ona oznacza, czy oznacza, że inni nie mogą jej podlegać? W
        związku z tym, biorąc jednocześnie pod uwagę, że wykazano wolę
        usytuowania omawianego przepisu między art. 5 a art. 6, a więc po
        artykule mówiącym o partiach politycznych, zde cydowałem się odwrócić
        jego logikę i wyjść -— cu sugerowała poseł I. Lipowicz — od konstrukcji
        gwarancji wolności tworzenia i działania. W istocie o to tu chodzi.
        Dlatego też to, co za chwilę zaproponuję, jest próbą skonsumowania
        obiekcji, którą sformułowała poseł I. Lipowicz. Z przyczyn, które ona
        wskazała, nie sięgam po pojęcie „organizacje pozarządowe”, aczkolwiek
        wydaje mi się, że nie odnosi się ono tylko do układu międzynarodowego.
        Oczywiście w układzie tym owo pojęcie jest bardzo czytelne — w
        rozumieniu rząd i organizacje pozarządowe — ale mam wiele dowodów na to,
        że w krwiobiegu międzynarodowym określenie „organizacja nierządowa” jest
        odnoszone do organizacji, które nie są związane z rządem, a są wyrazem
        społeczeństwa obywatelskiego. Po raz piewszy spotykam się z tak dużym
        oporem w stosunku do pojęcia, którego co prawda dotychczas nie
        używalśmy, ale które jest jednym z bardziej czytelnych, przynajmniej w
        tym Środowisku, z którym się spotykam w Radzie Europy i w innych
        instytucjach. Dziwię się, że wywołuje ono aż tak duże zastrzeżenia w
        sytuacji, gdy znalazło się w języku stosowanym znacznie szerzej niż ma
        to miejsce w Polsce. Po trzecie, chodzi o sprawę katalogu. Pojawiło się
        pojęcie „fundacji użyteczności publicznej”. Wiem, że go nie ma w obecnie
        obowiązującym prawie, ale przecież tworzymy tutaj nowy stan prawny.
        Pojawia się więc pytanie, czy chcemy, aby takie pojęcie było? Czy chcemy
        wyróżnić pewną szczególną kategorię fundacji, właśnie fundacje
        użyteczności publicznej? Czy nie chodzi tu o pewien docelowy nurt
        wyeksponowania określonego typu organizacji, które miałyby do spełnienia
        szczególną misję w społeczeństwie? Nie wszystkie fundacje, tylko
        niektóre spełniają pewne misje, istotne dla społeczeństwa
        obywatelskiego; powinny one być szczególnie wyeksponowane przez
        ustrojodawcę. Z tej też przyczyny utrzymam ową konstrukcję w propozycji,
        którą za chwilę zgłoszę, z zaznaczeniem, że można w tej propozycji
        dokonywać skreśleń lub zawężenia katalogu. Są elementy, które wydają się
        bezdyskusyjne. Zaliczam do nich związki zawodowe i stowarzyszenia.
        Wydaje mi się, że fundacje użyteczności publicznej tworzyłyby nową
        jakość ustrojową, której nie powinniśmy się bać. Wymienione przeze mnie
        podmioty miałyby ewentualne dopełnienie w postaci innych organizacji,
        które służą celom, o jakich będzie mowa w mojej poprawce. W związku z
        tym na obecnym etapie dyskusji wersję tę zgłaszam oficjalnie, ale może
        ona wzbudzić kolejne uwagi, które, być może, będzie trzeba uwzględnić —
        propozycja art. 5a, którą pragnę zasugerować, brzmiałaby następująco:
        „Rzeczpospolita Polska gwarantuje wolność tworzenia, działania związków
        zawodowych, stowarzyszeń, fundacji użyteczności publicznej oraz innych
        organizacji zrzeszających obywateli w ramach porządku prawnego, w celu
        realizacji interesów oraz wyrażania opinii”. Propozycja ta konsumuje
        większość uwag, ale OCzywiście nie wszystkie. Rozumiem, że może nad nią
        trwać daisza praca."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proszę o zgłoszenie tej poprawki na piśmie do sekretariatu Komisji
        Konstytucyjnej; przedstawimy ją do głosowania. Informuję, że poprawkę
        zgłosił również prof. A. Rzepliński. Przedstawiciel Sekretariatu
        Konferencji Episkopatu Polski, ks. prof. Józef Krukowski: Korzystając Z
        prawa gościa, pragnę zwrócić uwagę na następujący problem: w prawie
        konstytucyjnym, we wszystkich państwach demokratycznych Europy istnieje
        pojęcie „osobowości publicznoprawnej”. Pojęcie to było znane również
        prawu polskiemu w okresie międzywojennym; wyraźnie dotyczyło ono
        samorządu terytorialnego. W pierwszych latach PRL zostało ono
        zlikwidowane w celu dostosowania prawa polskiego do prawa Związku
        Radzieckiego. Myślę, że obecnie, w ramach zrywania ze schematami, jakie
        zostały po ustroju totalitarnym, należałoby prawu polskiemu przywrócić
        pojęcie „prawa publicznego”. Zdaje się, że poseł J. Ciemniewski zwrócił
        uwagę na brak tego pojęcia. Nie mam prawa do zgłaszania wniosków
        formalnych. Chciałbym jednak skierować przynajmniej pytanie do członków
        Komisji Konstytucyjnej, dlaczego pojęcie „prawa publicznego” ma być
        nadal obce prawu polskiemu? Czy w ramach prac nad rozdziałem I
        Konstytucji RP nie należałoby przywrócić tego pojęcia i wprowadzić
        zapisu mówiącego, że samorząd terytorialny, związki zawodowe oraz inne
        organizacje mające charakter organizacji użyteczności publicznej cieszą
        się osobowością prawa publicznego — zasady uznawania tej osobowości
        określają ustawy? Moja wypowiedź to głos osoby zainteresowanej
        uporządkowaniem polskiego prawa."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/SarneckiPawel.png"
      text="Gwoli uświadomienia przed podjęciem ostatecznych decyzji w zakresie, o
        którym obecnie dyskutujemy, chcę powiedzieć, że w przedłożonym projekcie
        Konstytucji RP mówi się o stowarzyszeniach, organizacjach itd. W art. 41
        jest mowa ogólnie o zrzeszeniach, w art. 42 — o związkach zawodowych i
        organizacjach pracowniczych, w art. 44 — o ruchach obywatelskich, które
        składają projekty ustaw, w art. 56 — o ruchach obywatelskich ochrony
        środowiska, w art. 58 — o organizacjach konsumentów; jest też mowa o
        związkach wyznaniowych. Czy w kontekście wolności zrzeszania się
        artykuły te nie wyczerpują wszystkich myśli, które zawiera przedłożony
        nam projekt przepisu?"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Decyzję będziemy podejmować w momencie, gdy odpowiednie wnioski zostaną
        zgłoszone, wtedy poddamy je pod głosowanie. Uwagę prof. P. Sarneckiego
        trzeba będzie ponownie przypomnieć przed głosowaniem, tak aby członkowie
        Komisji Konstytucyjnej Z.gromadzenia Narodowego mieli pełną świadomość,
        gdzie są zapisane właściwe przepisy dotyczące związków zawodowych,
        organizacji, stowarzyszeń ruchów konsumenckich, ruchów ochrony
        środowiska itp. Komisja Konstytucyjna podejmie określoną decyzję. Mam
        prośbę do prof. P. Sarneckiego, aby zapisał na kartce wymienione przez
        siebie artykuły, co ułatwi nam ich przypomnienie."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Chciałbym, aby rozdział I został poddany analizie pod kątem poprawności
        językowo-logicznej."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Mówiliśmy już dzisiaj dwukrotnie, że taka analiza zostanie dokonana po
        zakończeniu naszych prac. Zostały zgłoszone wnioski w sprawie nowego
        przepisu dotyczącego społeczeństwa obywatelskiego. Przegłosujemy je
        jutro. Jutro o godz. 9 zbiera się podkomisja pracująca pod
        przewodnictwem posła R. Bugaja, aby ponownie omówić art. 15. Poseł J.
        Ciemniewski awizował też jakieś wnioski."
    />

    <Utterance
      speaker="Senator Henryk Rot (SLD)"
      imgPath="/images/kk-speakers/RotHenryk.png"
      text="Mam prośbę do przewodniczącego A. Kwaśniewskiego, wnioskodawcy posła J.
        Jaskierni i innych osób, które na tle jego inicjatywy zgłaszały różne
        pomysły, aby nie obstawali przy rozpatrywaniu „na gorąco”, dziś lub
        jutro wniosku posła J. Jaskierni. Sugeruję, aby dyskusję w tej sprawie
        odłożyć do czasu, kiedy przystąpimy do debaty nad artykułami z zakresu
        wolności i praw politycznych, w których jest mowa o organizacjach
        społecznych i związkach zawodowych. Być może, wtedy okaże się, że
        zrodził się pomysł jakiejś syntezy, która nadawałaby się do umieszczenia
        w rozdziale I Konstytucji RP. Chcę również zabrać głos ad vocem
        wypowiedzi ks. prof. J. Krukowskiego. Żyłem i działałem w czasach — jak
        to rozrzutnie określono — totalitaryzmu. Publikowałem wówczas — co
        poświadczą czytelnicy-prawnicy — prace, w których broniłem koncepcji
        prawa publicznego. Władze totalitame nie uniemożliwiały mi publikowania
        owej koncepcji."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Apelujemy do wnioskodawców, aby przez noc przemyśleli swoje wnioski.
        Jeżeli wnioski zostały zgłoszone, to obowiązkiem Komisji jest ich
        przegłosowanie. Czy poseł L. Błądek pragnie zabrać głos w tej sprawie?"
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Zgłosiliśmy poprawkę do art. 15 i będziemy prosić o jej przegłosowanie.
        Poprawkę tę zgłosiliśmy w związku z tym, że został przyjęty art. 9
        Konstytucji RP, który dotyczy uregulowania kwestii umów
        międzynarodowych. ma mae Ea PT A A EE e Tw oo"
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wobec tego zapraszam poseł L. Błądek na posiedzenie podkomisji, która
        odbędzie się jutro o godz. 9. Głosowanie zgłoszonej przez nią poprawki
        oczywiście się odbędzie."
    />

    <Utterance
      speaker="Poseł Lidia Błądek (PSL)"
      imgPath="/images/kk-speakers/BladekLidia.png"
      text="Wydaje mi się, że poprawkę tę powinna przegłosować Komisja
        Konstytucyjna, a nie podkomisja podstaw ustroju politycznego 1
        społeczno-gospodarczego."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Wnioski, które Komisja Konstytucyjna powinna przegłosować, na pewno
        przegłosuje. Jeżeli szukamy rozwiązań kompromisowych, to sugeruję udział
        w posiedzeniu podkomisji, obradującej pod przewodnictwem posła R. Bugaja
        jutro o godz. 9."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Pragnę zabrać głos po raz ostatni w sprawie swojego wniosku, konsumując
        jednocześnie uwagi prof. P. Sarneckiego, które wiązały się z potrzebą
        jego wzbogacenia. Jeszcze raz odczytam swoją propozycję: „Rzeczpospolita
        Polska gwarantuje wolność tworzenia i działania związków zawodowych,
        stowarzyszeń, ruchów obywatelskich, fundacji i innych dobrowolnych
        zrzeszeń działających w ramach porządku prawnego w celu realizacji
        interesów oraz wyrażania opinii obywateli”. Taki jest kształt mojej
        poprawki, na razie zgłoszonej jako art. 5a. Potem numeracja uległaby
        zmianie."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Proszę przekazać ją do sekretariatu Komisji Konstytucyjnej. Przechodzimy
        do rozdziału II Konstytucji RP; nie zamykamy jeszcze prac nad rozdziałem
        I, jeżeli jutro zostaną zgłoszone do niego wnioski. W tej chwili
        przedyskutujemy kwestie związane z rozdziałem II „Wolności, prawa oraz
        obowiązki człowieka i obywatela”. Mamy dwa warianty propozycji tytułu
        tego rozdziału. Czy członkowie Komisji Konstytucyjnej mają w tej sprawie
        jakieś nowe pomysły lub wyraźne opcje? Na początku pragnę zapytać
        ekspertów, czy zauważają istotne różnice pomiędzy propozycją tytułu z
        wariantu I a propozycją z wariantu II?"
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Leszek Wiśniewski"
      imgPath="/images/kk-speakers/WisniewskiLeszek.png"
      text="W ramach prac podkomisji, obradującej pod przewodnictwem posła J.
        Gwiżdża, została przyjęta wersja pierwsza: „Wolności, prawa oraz
        obowiązki człowieka i obywatela”. Kierowano się tym, że człowiek
        najczęściej realizuje wolności I że są one sprawą najważniejszą.
        Figurowały one przecież na sztandarach wszystkich rewolucji Światowych.
        Wariant II „Prawa, wolności i obowiązki człowieka i obywatela” — czyli
        odwrócenie i postawienie praw na pierwszym miejscu — wydaje się mniej
        trafny z uwagi na to, że prawa oznaczają prawa do czegoś; określone
        prawa wynikają z prawa pozytywne go, aktów normatywnych. W tym ujęciu
        zawsze należy brać pod uwagę, iż istnieją dwa podmioty: podmiot, który
        jest uprawniony i podmiot, który jest zobowiązany spełnić konkretne
        Świadczenie przyznane obywatelowi. Przy wolności istnieje jeden podmiot,
        który sam aktem własnej woli — dobrowolnie — i w ramach własnego wyboru,
        realizuje określoną wolność zgromadzenia, przemieszczania się po kraju i
        Świecie itd. Wolności są regulowane właściwie tylko po to, aby
        ograniczyć możliwość przeszkadzania innym osobom w zakresie korzystania
        z nich. Funkcja prawa przy regulowaniu wolności polega na tym, że
        deklaruje się je jako rzeczy o fundamentalnym znaczeniu oraz ochrania
        się je poprzez pewne ograniczenia tak, aby wszyscy mogli z nich
        korzystać w równym stopniu. W związku z tym uważam, że wysunięcie
        wolności na czoło tytułu rozdziału lI Konstytucji RP jest bardziej
        trafne od wysunięcia na czoło praw."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Rozumiem, że eksperci Komisji Konstytucyjnej są zwolennikami wariantu I."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Być może jestem konserwatywny w swoim myśleniu, ale bardziej przemawia
        do mnie wariant II: „Prawa, wolności i obowiązki człowieka i obywatela.
        Opowiadając się za tym wariantem, pragnę przytoczyć dwa ważne argumenty.
        Po pierwsze, ze stylistyki przyjętej w rozdziale II wynika, że bez
        większych konsekwencji, zamiennie posługujemy się określeniami „prawa i
        wolności”, „wolności i prawa”. Przywiązanie do złożonej z inicjatywy
        Prezydenta RP, „Karty praw i wolności, w moim odczuciu, wyrobiło
        przekonanie, iż prawidłowe jest posługiwanie się określeniem „prawa i
        wolności”. Stawiam na odwrotną gradację, niż zrobił to przed chwilą
        prof. L. Wiśniewski. Prawa to jest to, co mam wyraźnie, namacalnie i
        bezpośrednio. Wolności mają szerszy sens; wiążą się z zakresem
        zarysowanym bardzo ogólnie, co potwierdza praktyka. W związku z tym
        myślę, że ta stylistyka, która jest bliższa naszej nauce prawa, każe
        opowiedzieć się za tym, aby rozdział II Konstytucji RP nosł tytuł
        „Prawa, wolności i obowiązki człowieka i obywatela”. Popieram więc
        wariant II. Jednocześnie opowiadam się za pewną konsekwencją
        terminologiczną, która, moim zdaniem, nie zawsze jest zachowana."
    />

    <Utterance
      speaker="Poseł Aleksander Kwaśniewski (SLD)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Jeżeli nie ma nowych uwag i do wyboru pozostają nam tylko warianty I i
        II, to możemy poddać je pod głosowanie."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Chcę zadać tylko jedno pytanie, być może trywialne i nie na miejscu.
        Muszę przyznać, że nie bardzo potrafiłbym spre zować konstytucyjny
        obowiązek człowieka. Nie znam takiej kategorii pojęciowej. Znam
        konstytucyjne obowiązki obywatelskie, natomiast dla określenia
        konstytucyjnego obowiązku człowieka nie przychodzi mi nic do głowy.
        Muszę powiedzieć, że z tego punktu widzenia tytuł rozdziału II nie
        wydaje mi się adekwatny do jego zawartości."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Poseł J. Ciemniewski uprzedził mnie; chciałem wyrazić taką samą
        wątpliwość. Czy tylko dlatego, że „Deklaracja praw człowieka i
        obywatela” zabrzmiała ładnie 200 lat temu, powtórzyliśmy to określenie w
        naszym zapisie? Czy rzeczywiście można je wyegzekwować? Mogę się
        zgodzić, że w Polsce inne prawa ma człowiek, a inne — obywatel. Co do
        obowiązków moje wątpliwości pozostają nie wyjaśnione. Przedstawiciel
        Prezydenta RP, prof. Andrzej Rzepliński: Proponowałem — moja propozycja
        nie znalazła się jednak w projekcie jednolitym Konstytucji RP — nadać
        rozdziałowi ll Konstytucji RP jeszcze inny tytuł: „Karta praw i
        wolności”. Na końcu tego rozdziału można by oczywiście utrzymać jako
        podrozdział tytuł „Obowiązki obywatela”. Biorąc pod uwagę tradycję
        konstytucyjną wielu krajów, gdzie katalogi praw i wolności właśnie w ten
        sposób się nazywają, warto by tę tradycję podtrzymać również dlatego, że
        wkrótce czeka nas głosowanie ludowe nad projektem Konstytucji RP. Warto
        organizować Świadomość publiczną także wokół tego, że konstytucja nie
        jest tylko zbiorem przepisów interesujących ludzi zajmujących się
        zawodowo polityką, ale także zbiorem przepisów ważnym dla każdego z nas.
        Sądzę, że ta krótsza nazwa „Karta praw i wolności” bardziej będzie
        przemawiała do Świadomości poszczególnych obywateli. „Obowiązki
        obywatela” znalazłyby się w Karcie jako jej ostatni podrozdział.
        Przedstawiciel Kościoła Zborów Chrystusowych, ks. Henryk Sacewicz:
        Dzisiaj już dwa razy przypomniano o „Karcie praw i wolności . Właśnie do
        tego tematu chciałbym nawiązać. Jeżeli pamiętamy projekt Konstytucji RP,
        zgłoszony przez Prezydenta RP, to rozdział pt. „Karta praw i wolności”
        był w nim bardzo wyraźnie wydzielony, ale jednocześnie końcowymi
        przepisami Ściśle powiązany z pozostałą częścią konstytucji. W wersji
        wariantowej rozdziału II projektu jednolitego Konstytucji RP, którą
        otrzymaliśmy, w ogóle nie wspomina się o „Karcie praw i wolności. Wiem,
        że dla osób, którzy zajmują się materią konstytucyjną, moja wątpliwość
        może wydawać się naiwna. Być może zajmuję niepotrzebnie czas, ale
        chętnie usłyszałbym jakieś udokumentowanie czy podstawę, dlaczego ucieka
        się od tego, aby prawa i obowiązki człowieka i obywatela były w jakiś
        szczególny sposób podkreślone. Myślę, że to, o czym mówił mój
        przedmówca, jest słuszne. Społeczeństwo oczekuje, żeby prawa, które am
        mr — mz m i nm _ mn „a mm m człowiekowi jako obywatelowi przysługują,
        mogły | być w jakiś szczególny sposób wyakcentowane. Ujęcie ich w
        odrębnym akcie dawałoby większe możliwości. Nie jestem prawnikiem, więc
        mam prawo się mylić. Przedstawiam wyłącznie swoje odczucia. | |"
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Wydaje mi się, że wyodrębnienie praw i obowiązków człowieka i obywatela
        może czasami stanowić pewne zagrożenie i możliwość odcięcia tego, co
        stanowi integralną część konstytucji."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Leszek Wiśniewski"
      imgPath="/images/kk-speakers/WisniewskiLeszek.png"
      text="Jeśli chodzi o wyodrębnienie rozdziału II Konstytucji RP jako odrębnej
        karty, jako odrębnego dokumentu, który byłby dopięty do Konstytucji RP,
        chciałbym przypomnłeć, że w kilku krajach tego rodzaju karty są
        wyodrębnione. Tak jest w konstytucji Republiki Czeskiej i w konstytucji
        Republiki Francuskiej. Starsza z wyodrębnionych kart, karta francuska —
        „„Deklaracja praw człowieka i obywatela” z 1789 r. — z reguły była
        pomijana we wszelkich późniejszych wydaniach konstytucji. W chwili
        obecnej nie jest nawet załącznikiem w tekstach. Po prostu, zapomina się
        już o tym, że jest to jakiś odrębny dokument, który stanowi integralną
        część konstytucji. Zapewne to samo będzie czekało czeską „Kartę
        podstawowych praw i wolności”. Jestem zdecydowanie temu przeciwny, żeby
        wyodrębniać, wyjmować jakiś rozdział z konstytucji. Zawsze toczyły się
        boje, na którym miejscu powinien znajdować się rozdział o wolnościach i
        prawach jednostki. Zawsze chodziło o to, żeby zaraz za zasadami ustroju
        zawrzeć przepisy na temat stosunków państwo-jednostka w postaci
        podstawowych, fundamentalnych wolności i praw. Wyodrębnienie tego w
        innym dokumencie, który nawet byłby załącznikiem do konstytucji, jest
        nietrafnym rozwiązaniem."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/SarneckiPawel.png"
      text="Pragnę dopowiedzieć kilka zdań. Trudno byłoby przy istnieniu osobnej
        Karty dostosować ową Kartę do rozdziału I Konstytucji RP, który obejmuje
        zasady naczelne ustroju, w tym także określa generalną pozycję
        jednostki. Dzisiaj dyskutowaliśmy np. o prawie własności, o swobodzie
        działalności gospodarczej. Przecież to także dotyczy praw obywatelskich.
        Przy ich wyodrębnieniu w „Karcie praw i wolności” rysowałby się niełatwy
        do precyzyjnego określenia stosunek między tą Kartą a pewnymi prawami,
        które znalazłyby się w ogólnych zasadach ustroju."
    />

    <Utterance
      speaker="Senator Henryk Rot (SLD)"
      imgPath="/images/kk-speakers/RotHenryk.png"
      text="Jestem za tym, żeby utrzymać umiejscowienie rozdziału traktującego o
        prawach i wolnościach człowieka i obywatela w Konstytucji RP. Mam jednak
        pewną uwagę do ewentualnych dwóch innych wariantów tego rozdziału.
        Pierwszy, idąc tropem wniosku Prezydenta RP, ma owa — na | m oo den ni
        traktowałby ów rozdział jako coś dodatkowego do konstytucji, czyli jako
        załącznik, co już fatalnie brzmi. Wyrazy dodatek”, załącznik”, „aneks”
        brzmią naprawdę fatalnie. Drugi wariant zakładałby uregulowanie
        problematyki praw i wolności w odrębnej ustawie, ustawie konstytucyjnej.
        Jeśli tak by się stało, to ustawa konstytucyjna byłaby traktowana jako
        coś dodatkowego obok Konstytucji RP jako ustawy zasadniczej. Ustawa
        konstytucyjna jest jednak na nieco niższym stopniu w porządku
        hierarchicznym aktów prawotwórczych od konstytucji w rozumieniu
        kodyfikacyjnym. Wracając do punktu wyjścia, proponuję utrzymać rozdział
        traktujący o prawach i wolnościach człowieka i obywatela w strukturze
        Konstytucji RP jako ustawy zasadniczej."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Tok rozumowania senatora H. Rota całkowicie mi odpowiada. Za chwilę głos
        zabierze prof. A. Rzepliński, który na pewno ustosunkuje się polemicznie
        do głosu senatora H. Rota. Przedstawiciel Prezydenta RP, prof. Andrzej
        Rzepliński: Wcale nie proponowałem, żeby wyłączać jakiś rozdział z
        Konstytucji RP, Moja uwaga dotyczyła jedynie tytułu tego rozdziału.
        Propozycję w tej sprawie wysunąłem na posiedzeniu podkomisji
        redakcyjnej, jednak w jakiś sposób nie znalazła się ona w projekcie
        jednolitym Konstytucji RP. Chciałem, aby rozdział II Konstytucji RP
        nazywał się „Karta praw i wolności”, a nie żeby był wyłączony z ustawy
        zasadniczej. Przedstawiłem w tej kwestii swoje argumenty. Argumenty
        moich przedmówców idą jakby obok. Odnosząc się merytorycznie do
        wypowiedzi prof. L. Wiśniewskiego, wcale nie jest tak, że Francuzi
        zapomnieli, co znaczy „Deklaracja praw człowieka i obywatela”, Jest ona
        nadal częścią porządku konstytucyjnego. Pisze się o tym w przepisach
        przejściowych konstytucji francuskiej. Czesi również nie zapomną, co
        oznacza „Karta podstawowych praw i wolności”, gdyż jest ona częścią ich
        porządku konstytucyjnego. Konstytucja Republiki Czeskiej o tym wyraźnie
        mówi. Jest to oczywiście kwestia decyzji. Proponuję tylko, aby rozdział
        II Konstytucji RP nazywał się „„Karta praw i wolności”, a nie żeby go
        wyłączać, załączać itd."
    />

    <Utterance
      speaker="Senator Jerzy Madej (KD)"
      imgPath="/images/kk-speakers/MadejJerzy.png"
      text="Odniosłem podobne wrażenie jak prof. A. Rzepliński, że dyskutujemy tylko
        nad tytułem rozdziału II Konstytucji RP, a nie nad wyłączeniem zakresu
        praw i wolności człowieka i obywatela, ewentualnie także obowiązków, i
        stworzeniem oddzielnego dokumentu w postaci aneksu, czy ustawy
        konstytucyjnej. Oczywiście że problematyka ta powinna stanowić rozdział
        1I Konstytucji RP. Jest tylko jedna kwestia do rozwiązania, jak ten
        rozdział nazwać, jak go zatytułować? Czy przyjąć na m mm zwę „Prawa,
        woiności i obowiązki człowieka i obywatela , czy też zaproponować inną?
        Wypowiedzi, które usłyszałem, nie rozwiały do końca moich wątpliwości,
        czy zapis „człowiek i obywatel” jest w pełni uzasadniony. Któryś z moich
        przedmówców wyjaśnił już, co oznacza wyrażenie „obowiązki człowieka w
        Państwie Polskim”. Chodzi o człowieka, który nie jest obywatelem."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Są ludzie, którzy nie są obywatelami Polski, choć przebywają w naszym
        kraju. Im również należą się określone prawa. Nawiązanie do „Magna
        Charta Libertatum” — angielskiej karty wolności — tworzy pewien dysonans
        i niejako łamie konstrukcję Konstytucji RP."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Pragnę zdecydowanie wypowiedzieć się przeciwko propozycjom nowego
        brzmienia rozdziału II „Karta praw i wolności', dlatego że termin
        „karta” sugeruje coś odrębnego. Myślę, że jest to argument za tym, aby
        nie używać go w tytule rozdziału Konstytucji RP. Gdybyśmy mieli do
        czynienia z sytuacją, że „„Karta praw i wolności” została uchwalona
        wcześniej, to oczywiście można by ją inkorporować. Wtedy teza, która
        została użyta w toku dyskusji, pozostałaby zasadna. My jednak mamy do
        czynienia z rozdziałem Konstytucji RP; piszemy tekst ustawy zasadniczej,
        gdzie katalog praw i wolności obywatela jest tylko jednym z rozdziałów.
        Pozostaje jeszcze kwestia obowiązków. Chcę ponowić pytanie, które
        zgłosił poseł J. Ciemniewski. Pragnę uzewnętrznić pewien spór
        terminologiczny, który pojawił się w podkomisji redakcyjnej.
        Zastanawialiśmy się, jaką terminologię przyjąć, czy używać terminów:
        „każdy, „obywatel”, „obywatel polski”? Nie przekonują mnie argumenty,
        które mówią, że tytuł dałoby się sprowadzić tylko do określenia
        „obywatel”. Są pewne prawa, które w sensie regulacji międzynarodowych
        zostały recypowane na grunt rozwiązań krajowych, jako prawa i wolności
        człowieka. Tak stało się np. z szeroko rozumianym katalogiem praw
        ekologicznych, wynikających z języka konwencji, które Polska
        ratyfikowała. Mnie osobiście nie razi w tytule rozdziału Konstytucji RP
        określenie „Prawa, wolności i obowiązki człowieka i obywatela”, gdyż ma
        je każdy i nie musi się to łączyć z tym szczególnym węzłem prawnym,
        jakim jest obywatelstwo. Chcę poprosić prof. K. Działochę i prof. P.
        Sarneckiego o pogląd w tej sprawie. Czy przywiązują wagę do dystynkcji,
        która jest dokonana w tytule „człowieka i obywatela”? Czy wystarczy —
        tak jak sugerował poseł J. Ciemniewski — ograniczenie do jednego członu
        „obywatela”?"
    />

    <Utterance
      speaker="Poseł Leszek Moczulski (KPN)"
      imgPath="/images/kk-speakers/MoczulskiLeszek.png"
      text="Nasza dyskusja wykroczyła dalej aniżeli poza samą kwestię tytułu. Myślę,
        że to dobrze, iż się tak stało, dlatego że jest jeszcze jedna zasadnicza
        kKweslia do rozstrzygnięcia w momencie, gdy rozpoczynamy prace nad tym
        rozdziałem. Chodzi o to, czy rozbudowany katalog szeroko potraktowanych
        i bardzo precyzyjnie określonych praw obywatelskich powinien być częścią
        Konstytucji RP, czy też powinien stanowić inną ustawę, być może, jak to
        się ostatnio określa, ustawę organiczną. Przynajmniej niektóre projekty
        konstytucji proponują takie właśnie ustawy, przyjmowane kwalifikowaną
        większością głosów. Pytanie jest zasadnicze, czy w Konstytucji RP należy
        ograniczyć się do szerokiego, lecz krótkiego określenia praw
        obywatelskich, a ich precyzację odesłać do ustawy, czy też ująć je tylko
        w Konstytucji RP? Jakie argumenty przemawiają za oddzielną ustawą?
        Myślę, że jest ich bardzo dużo. Przede wszystkim pojęcie „praw
        obywatelskich” nie jest stałe, co jakiś czas zmienia się. Jeśli weźmiemy
        pod uwagę nie tylko „Deklarację praw człowieka i obywatela” z sierpnia
        1789 r., ale i „Powszechną deklarację praw człowieka” Organizacji
        Narodów Zjednoczonych z grudnia 1948 r., to zobaczymy, że dzisiaj i w
        zakresie szerokości, i w zakresie precyzacji, patrzymy na to zagadnienie
        inaczej. Prawdopodobnie w najbliższych latach będziemy mieli do
        czynienia z fluktuacją oraz precyzacją praw i wolności i człowieka, 1
        obywatela, i być może, kogoś, kto będzie obywatelem danego państwa, a
        jednocześnie będzie też posiadał coś w rodzaju praw obywatelskich
        zintegrowanej wspólnoty. Na pewno będziemy mieli do czynienia z
        postępującymi zmianami w tym zakresie. Konstytucja nie jest aktem, który
        powinien podlegać częstym modyfikacjom. W miarę możliwości należy unikać
        ingerowania w zapisy konstytucyjne Już uchwalone. Dlatego byłoby rzeczą
        wygodniejszą i bardziej celową, gdyby obszerne potraktowanie praw
        obywatela lub człowieka i obywatela odesłać do osobnego aktu prawnego, w
        Konstytucji RP ograniczając się tylko do generalnego wskazania i
        wyliczenia tych praw, tak jak jest to zrobione w projekcie Konstytucji
        RP przedstawionym przez Konfederację Polski Niepodległej. Jest tam tylko
        jeden artykuł — wprawdzie bardzo rozbudowany — dotyczący praw człowieka
        1 obywatela. Nie tylko zakres, ale i tytuł omawianego rozdziału,
        powinien zależeć od tego, jaką decyzję ostatecznie podejmiemy. Jeśli
        zdecydujemy się, aby w Konstytucji RP ująć wszystko w tym zakresie, to
        nie sądzę, żeby wtedy potrzebny był tytuł „Karta praw człowieka”,
        dlatego że nie ma powodu, aby w ten sposób wyróżniać cały rozdział.
        Każdy rozdział Konstytucji RP, być może, zasługuje na wielkie
        wyróżnienie; jeśli tak, to musielibyśmy poszukać odpowiednich określeń.
        Jeżeli zdecydowaliśmy, aby materię tę potraktować w Konstytucji RP w
        sposób ogólny, a w sposób rozwinięty — w odrębnej ustawie, to oczywiście
        ustawa ta mogłaby się nazywać „kartą”. Jest to wprawdzie tradycja
        językowa anglosaska, ale ostatecznie jest używana nie tylko do tego
        rodzaju dokumentów. m— maa ——a Istnieje „Karta Narodów Zjednoczonych”,
        „Karta Atlantycka” itp. Możemy nawiązać do anglosaskiej tradycji
        językowej. Nie ma w związku z tym większych problemów, ale pod
        warunkiem, że będzie chodziło o oddzielny akt prawny. Jeśli mówimy o
        samym tytule, to „prawa” na pewno powinny znaleźć się przed
        „wolnościami”. Określenie „prawa” posiada chyba szersze znaczenie, a
        „wolności — węższe. Po drugie, musimy również brać uwagę względy
        filologiczne. Język polski nie lubi połączenia „wolności i prawa”,
        natomiast w pełni uznaje „prawa i wolności ."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Weszliśmy w bardzo trudny etap dyskusji. Poseł L. Moczulski wprowadził
        nas w zakres dyskusji nie nad brzmieniem tytułu rozdziału II, lecz w
        zakres rozważań merytorycznych. Pragnę ustosunkować się do dwóch
        kwestii. W moim odczuciu, odwołanie się do konstytucji kwietniowej nie
        jest najlepszym przykładem."
    />

    <Utterance
      speaker="Poseł Leszek Moczulski (KPN)"
      imgPath="/images/kk-speakers/MoczulskiLeszek.png"
      text="Nie odwoływałem się do konstytucji kwietniowej."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Ale KPN się od wołuje. Zabiorę głos na zakończenie dyskusji w tej
        sprawie."
    />

    <Utterance
      speaker="Poseł Jerzy Zdrada (UW)"
      imgPath="/images/kk-speakers/ZdradaJerzy.png"
      text="W moim przekonaniu, dyskusja nieco odbiegła od generalnego problemu.
        Gdyby nie było prezydenckiego projektu „Karty praw i wolności ,
        złożonego w zupełnie innej sytuacji, w poprzedniej kadencji Sejmu,
        pewnie teraz nie zastanawialibyśmy się, czy rozdziałowi Konstytucji RP
        nadać taki czy inny tytuł. Mieliśmy do czynienia z pewnym precedensem.
        Mamy Świadomość, że zgłoszono projekt ustawy, który wówczas stanowił
        określoną propozycję konstytucyjną, co nie przesądzało, że ostateczny
        tekst Konstytucji RP miałby się składać z dwóch części. Wówczas, projekt
        ten był na etapie roboczym. Komisja Konstytucyjna przygotowała projekt
        konstytucji. Komisja Nadzwyczajna do spraw „Karty praw i wolności”
        debatowała nad jej zapisami. Dopiero potem zamierzano podjąć decyzję,
        czy „Karta” miałaby stanowić integralną część Konstytucji RP, czy tylko
        dodatek do ustawy zasadniczej. Tak czy inaczej „Karta praw i wolności”
        miała być ustawą typu konstytucyjnego, a więc ustawą o dużej randze. Nie
        można argumentować tak jak przed chwilą powiedział poseł L. Moczulski,
        że zakres praw i wolności człowieka i obywatela jest na tyle zmienny, iż
        nie należy wpisywać go do Konstytucji RP, tylko do innej ustawy. Zwracam
        uwagę, że ta inna ustawa miałaby mieć charakter ustawy konstytucyjnej —
        o ile dobrze pamiętam sugestię, zdaje się, senatora H. Rota — jako aneks
        do konstytucji lub jako ustawa równoległa o innym zakresie zapisów.
        Osobiście opowiadam się za jednolitą ustawą konstytucyjną; uważam, że
        materia, o której dyskutujemy powinna stanowić rozdział Konstytucji RP.
        W polskiej tradycji mamy Konstytucję 3 Maja; Prawo o miastach, które
        było uchwalone nieco wcześniej, zostało z nią związane aneksem. Można to
        porównać do tego, co się działo w okresie rewolucji francuskiej. Myślę,
        że na obecnym etapie, skoro nie ma osobnego projektu „Karty praw i
        wolności”, nie ma potrzeby wyodrębniać jej z Konstytucji RP; powinniś-
        my pracować nad jednolitym tekstem ustawy zasadniczej. Istnieje problem
        obowiązków, o których mówił poseł J. Ciemniewski; nie uzyskaliśmy
        jeszcze na ten temat wyjaśnienia. Wydaje mi się, że tytuł rozdziału II
        jest sprawą istotną. Osobiście opowiadam się za następującą kolejnością
        wyrazów: „wolności i prawa”, gdyż „wolności” są pojęciem szerszym niż
        „prawa”. Takie jest moje odczucie, ale proszę ekspertów o opinię w tej
        sprawie. Opowiadam się też za ujednoliceniem tekstu Konstytucji RP. W
        tytule rozdziału II nie wpisywałbym „obowiązków człowieka i obywatela”,
        Przeglądając omawiany projekt do końca, daje się zauważyć, że jest w nim
        tylko cztery lub pięć artykułów bardzo ogólnych — które zapewne udałoby
        się jeszcze skomprymować — mówiących bezpośrednio o obowiązkach.
        Podrozdział dotyczący obowiązków jest bardzo niewielki i znajduje się na
        samym końcu. Natomiast cały czas mówi się o prawach i wolnościach
        politycznych, osobistych i innych. Osobiście zachowałbym następujący
        tytuł rozdziału II: „Wołności i prawa człowieka i obywatela. Pewna
        tradycja, przynajmniej kontynentalna, rozróżnia to, co jest związane z
        prawami i wolnościami człowieka od tego, co jest związane z prawami i
        wolnościami obywatela, Nie widzę powodu, abyśmy musieli od niej
        odchodzić. Nie jest to tradycja typowo rewolucyjna. Weszła ona na trwałe
        do myśli politycznej europejskiej bez względu na to, że po raz pierwszy
        została sformułowana w czasie rewolucji francuskiej, a potem była
        przyjmowana przez innych. Ekspert, prof. Henryk Groszyk: Opowiadam się
        za jednolitym dziełem, jakim jest Konstytucja RP. Nie ma podstaw, ażeby
        komplikować sytuację redakcyjną 1 stwarzać odrębną „„Kartę'. Opowiadam
        się również za nazwą, która uczyni z rozdziału II normalny rozdział
        Konstytucji RP. Fakt, iż jest to rozdział ll, dostatecznie podkreśla
        powagę zagadnienia i stwarza pewien przywilej, że już w drugim
        rozdziale, przed omawianiem organów państwowych i administracyjnych,
        omawia się pozycję człowieka i obywatela. Tytuł zaproponowany przez
        mojego przedmówcę: „Wolności i prawa człowieka i obywatela” wydaje się
        najlepszy, biorąc pod uwagę fakt, że obowiązki są tu omówione w sposób
        minimalny. Przykłady, które padały podczas dyskusji odnośnie do sytuacji
        we Francji są tu zupełnie nieadekwatne, dlatego że konstytucja francuska
        nie zawiera żadnego rozdziału o wolnościach, prawach i obowiązkach
        obywateli. Wobec tego w jej wstępie — co bardzo komplikuje sytuację —
        powołano się na „Deklarację praw człowieka i obywatela” z końca XVIII
        wieku. Jak wiadomo, wszelkie ustępy rodzą problemy, gdy stanowią tekst
        konstytucji, komplikują jej interpretację. Z tego względu wstęp
        konstytucji francuskiej zawiera uzupełniony katalog bardziej
        nowoczesnych praw 1 wolności po to, aby zaktualizować starą
        „Deklarację”. Wydaje mi się, że nie powinniśmy zbytnio komplikować
        sytuacji i raczej opowiedzieć się za normalnym rozdziałem
        konstytucyjnym."
    />

    <Utterance
      speaker="Poseł Krystyna Łybacka (SLD)"
      imgPath="/images/kk-speakers/LybackaKrystyna.png"
      text="Jeśli chodzi o dyskusję dotyczącą dylematu, czy wolności i prawa — |ub
        prawa i wolności — powinny być rozdziałem Konstytucji RP, czy też
        powinny być zawarte w oddzielnej „karcie”, to pragnę zwrócić uwagę na
        jeszcze jeden aspekt — nie poruszany do tej pory — związany z trybem
        przygotowania i przyjęcia Konstytucji RP. Pamiętajmy, że Konstytucja RP
        zostanie przyjęta w drodze referendum. Jest rzeczą niezmiernie ważną,
        aby dla jednolitego projektu ustawy zasadniczej, który opracujemy w
        Komisji Konstytucyjnej i który zostanie zaaprobowany przez Zgromadzenie
        Narodowe, uzyskać jak największe przyzwolenie i zrozumienie społeczne. W
        naszej mentalności, nawet w mentalności człowieka nie związanego z
        prawem konstytucyjnym lub w ogóle z prawem, bardzo mocno zakorzeniona
        jest tradycja konstytucyjna. Doskonale wiemy o naszych zasługach w
        tworzeniu konstytucji. Jeżeli tak istotną sprawę, jak prawo i wolności
        wyjmiemy z Konstytucji RP i zapiszemy je w oddzielnej „karcie”, to
        obawiam się, że opinia publiczna może ją przyjąć jako akt mniejszej
        rangi. Wobec tego optuję za tym, aby prawa i wolności stanowiły rozdział
        ustawy zasadniczej, a nie aby tworzyły odrębną „Kartę praw i wolności .
        Mentalność Czechów, Słowaków i Polaków jest nieco inna — skądinąd
        uwarunkowana historycznie."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Czy prof. A. Rzepliński pragnie zabrać głos ad vocem? Przedstawiciel
        Prezydenta RP, prof. Andrzej Rzepliński: Tak. Jeszcze raz chcę
        podkreślić, że nie proponujemy odrębnej ustawy konstytucyjnej. „Kartę
        praw i wolności” proponujemy jako nazwę własną dla rozdziału Il. Sejm i
        Senat nie występują w Konstytucjji RP pod nazwą „organy tworzące prawo i
        kontrolujące rząd”, tylko pod mianem właśnie „Sejm i Senat”. Tak samo
        zamiast rozbudowanego tytułu, proponujemy krótki: „Karta praw i
        wolności”. Jeżeli w tytule tak ważnego i obszernego rozdziału będzie
        użyty wyraz „obowiązki”, Konstytucja RP będzie jedną z bardzo
        nielicznych w Europie — nie chcę podawać przykładów konstytucji, w
        których określenie to jest użyte w nazwie rozdziału — która zastosuje
        takie rozwiązanie. Proponowana przez nas nazwa wynika z treści rozdziału
        11. Jeżeli przyjmujemy, że prawa i wolności są nam przyrodzone, to nie
        oznacza, że możemy tworzyć jakiekolwiek iunctim między prawami i
        wolnościami. Nawet największemu zbrodniarzowi, który naruszył wszelkie
        obowiązki obywatelskie, przysługują prawa, gdyż jest on człowiekiem, ma
        godność osobistą itd. Pomijając kwestię, jak społeczeństwo będzie
        odbierało Konstytucję RP podczas referendum, również z powyższego punktu
        widzenia należy zwrócić uwagę na nazwę rozdziału II — podkreślam, że
        chodzi o rozdział Konstytucji RP, a nie odrębną ustawę konstytucyjną —
        oraz fakt, że wolności i prawa są czymś innym niż obowiązki. Konstytucje
        przyjęte w ostatnich kilku latach w Europie Środkowej i i Wschodniej
        wskazują, że akcentuje się prawa i wolności, choć obowiązki również
        stanowią część materii konstytucyjnej. Poprzez tytuł rozdziału II „Karta
        praw i wolności” pragniemy podkreślić ich szczególną rangę dla
        obywateli."
    />

    <Utterance
      speaker="Poseł Krystyna Łybacka (SLD)"
      imgPath="/images/kk-speakers/LybackaKrystyna.png"
      text="Rozumiem, że chodzi tu o tytuł rozdziału, ale proponuje się mu nadać
        nazwę „Karta praw i wolności”. Co do obowiązków — zgadzam się; podzielam
        pogląd, że obowiązki nie powinny występować łącznie z prawami i
        wolnościami, bowiem jest to nieco inne zagadnienie, które raczej
        osłabiłoby istotę tych pierwszych. Mówiąc o naszej mentalności, obawiam
        się, że słuszna idea prof. A. Rzeplińskiego, aby podkreślić wagę
        rozdziału Il poprzez nazwanie go „Kartą praw I wolności”, może być
        odebrana wręcz przeciwnie. Myślę, że rozdział II zatytułowany „Prawa i
        wolności” będzie bardziej zrozumiały."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Poseł L. Moczulski pragnie zabrać głos ad vocem."
    />

    <Utterance
      speaker="Poseł Leszek Moczulski (KPN)"
      imgPath="/images/kk-speakers/MoczulskiLeszek.png"
      text="Jeśli się pracuje nad konstytucją, to powinno się to robić z założeniem,
        Iż będzie ona regulować sprawy państwa przynajmniej przez jedno
        pokolenie. Myślę, że wszystkie inne argumenty poza dążeniem do
        uregulowania spraw państwa w tak długim okresie, nie tylko nie powinny
        być brane pod uwagę, ale są wręcz szkodliwe. Argumenty typu, że w takiej
        czy innej formie Konstytucja RP łatwiej uzyska poparcie podczas
        referendum, są argumentami szkodliwymi. Jeżeli będziemy myśleli tymi
        kategoriami, to napiszemy manifest polityczny, a nie Konstytucję RP,
        która powinna obowiązywać przez co najmniej dwadzieścia kilka lat."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Ad vocem głos zabierze poseł K. Łybacka."
    />

    <Utterance
      speaker="Poseł Krystyna Łybacka (SLD)"
      imgPath="/images/kk-speakers/LybackaKrystyna.png"
      text="Rozumiem, że rola posła zasiadającego w Komisji Konstytucyjnej
        Zgromadzenia Narodowego jest bardzo ważna. Jest ona niewątpliwie
        ważniejsza niż rola czytelnika Konstytucji RP lub nawet kogoś, kto
        będzie ją przyjmował. Jest rzeczą równie niewątpliwą, że Konstytucję RP
        piszemy nie dla elegancji modelu, jaki wypracujemy, nie dlatego, abyśmy
        mogli stać się uczestnikami bardzo cennych seminaryjnych dyskusji, ale
        piszemy ją po to, aby została przyjęta i zaakceptowana przez tych, dla
        których ją piszemy. Nie chodzi tu o manifest, ale o uczciwość w
        konstruowaniu Konstytucji RP."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Znów głos advocem."
    />

    <Utterance
      speaker="Poseł Leszek Moczulski (KPN)"
      imgPath="/images/kk-speakers/MoczulskiLeszek.png"
      text="Uczciwe muszą być przede wszystkim argumenty. Jeśli Konstytucję RP
        piszemy po to, aby łatwiej uzyskała poparcie podczas referendum, to nie
        piszemy ustawy zasadniczej. Jeżeli dopasowujemy ją do potrzeby chwili,
        to milcząco zakładamy, że w innej chwili tej potrzeby już nie będzie ona
        zaspokajała."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Paweł Sarnecki"
      imgPath="/images/kk-speakers/SarneckiPawel.png"
      text="W czasie wymiany głosów ad vocem członkowie Komisji Konstytucyjnej mogli
        zapomnieć, że padło kilka pytań pod adresem ekspertów. Pierwsze pytanie
        to pytanie posła J. Szymańskiego. Istnieją procesy pozorne, kiedy strony
        wywołują proces sądowy, a w gruncie rzeczy nie kłócą się. Pytanie posła
        J. Szymańskiego miało podobny charakter — było nieco pozorne. Chodziło o
        to, czy celowym jest rozróżnienie z jednej strony praw człowieka, a z
        drugiej — praw obywatela. Takie rozróżnianie jest tradycją europejskiego
        konstytucjonalizmu. Sądzę, że w istocie rzeczy poseł J. Szymański ma
        wyrobioną opinię w tym zakresie i jego opinia pokrywa się z moją.
        Uważam, że podobne rozróżnienie jest celowe, tradycyjne i ma sens.
        Pewnymi prawami cieszy się każdy człowiek przebywający w obrębie państwa
        polskiego, a innymi — tylko jego obywatele. Drugie pytanie — postawione
        przez posła J. Zdradę — dotyczyło kolejności słów w tytule rozdziału II,
        czy najpierw eksponować wolności, a potem prawa, czy też odwrotnie. Sam
        poseł J. Zdrada zaprezentował pewną koncepcję, która, jak mi się wydaje,
        uzyskała uznanie członków Komisji Konstytucyjnej. W zasadzie przychylam
        się do niej, ale pozwolę sobie jeszcze na pewną dygresję. Nawiązując do
        niektórych głosów, które padły, już nie pamiętam, czy na posiedzeniu
        Komisji Konstytucyjnej, czy na podkomisji oraz do dzisiejszych
        wypowiedzi odnośnie obowiązków obywatelskich — lub obowiązków człowieka
        i obywatela — chcę powiedzieć, że zapomina się o tych obowiązkach.
        Odnoszę wrażenie, że pragnie się je przemilczeć. Okazuje się, że są one
        czymś niewygodnym; tylko nieliczne konstytucje zajmują się nimi i
        eksponują je w tytułach rozdziałów. Czy nie współgra to z dosyć
        rozpowszechnionymi u nas postawami konsumpcyjnymi i roszczeniowymi?
        Przepraszam za tę dygresję, być może, nie na miejscu w ustach eksperta,
        ale czy nasze społeczeństwo nie zapomina o tym, że aby korzystać z praw
        i wolności, trzeba się wobec państwa rozliczyć z pewnych obowiązków? Czy
        obowiązki, mówiąc wzniośle, jakiejś służby dla państwa nie zasługują na
        ich wyeksponowanie nawet przed prawami i wolnościami? Podobne głosy
        padały w ciągu kilku posiedzeń Komisji Konstytucyjnej. Pozwalam sobie
        nieśmiało o nich przypomnieć. Można też mówić o obowiązkach człowieka.
        Podawałem m.in. przykład obowiązku ochrony środowiska. Obowiązek ten
        spoczywa na każdym niezależnie od tego, czy jest obywatelem, czy nie.
        Wiadomo przecież, jakie kary grożą np. szyprom statków, czyszczących
        ładownie na polskich wodach terytorialnych itd."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Obserwuję dużą mobilność sali. Przybywają kolejni członkowie Komisji
        Konstytucyjnej, a jednocześnie niektórzy wychodzą. W związku z tym chcę
        zaproponować rozwiązanie pewnego dylematu. Czy dla dzisiejszych i
        jutrzejszych ustaleń nie powinniśmy odbyć wspólnego..głosowania w
        czwartek — w trzecim dniu posiedzenia Komisji Konstytucyjnej — o godz. 9
        rano? Wcześniej, głosowanie to było zaplanowane na środę na godz. 11.
        Również w środę na godz. 9 przewidziano posiedzenie podkomisji podstaw
        ustroju politycznego i społeczno-gospodarczego, której przewodniczy
        poseł R. Bugaj. Posiedzenie to poświęcone będzie newralgicznemu
        problemowi stosunków państwo-kościół."
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="O której jutro zaczyna się posiedzenie Komisji Konstytucyjnej?"
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Posiedzenie Komisji Konstytucyjnej rozpoczyna się jutro o godz. 11. Od
        godz. 9 będzie obradować podkomisja pod przewodnictwem posła R. Bugaja.
        Czy zaproponowana przeze mnie konwencja odpowiada członkom Komisji
        Konstytucyjnej? Chodzi mi o to, aby głosowanie odbyło się w czwartek o
        godz. 9."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Chciałbym poprzeć tę propozycję. Niezależnie od sprawy tytułu rozdziału
        II Konstytucji RP — kwestia ta wywołała bardzo burzliwą dyskusję —
        istnieje związek przyczynowy pomiędzy kolejnymi artykułami, które bę-
        dziemy rozważali. Wydaje się, że zblokowane głosowanie w czwartek rano
        sprzyjałoby uporządkowaniu wszystkich propozycji zapisów. Stąd popieram
        propozycję przewodniczącego S. Pastuszki. mezem e"
    />

    <Utterance
      speaker="Senator Krzysztof Kozłowski (KD)"
      imgPath="/images/kk-speakers/KozlowskiKrzysztof.png"
      text="Czwartek rano jest bardzo dobrym terminem. Tylko, jak zwykle, nie
        skoordynowano tego z pracami komisji sejmowych oraz senackich. Na
        przykład w czwartek na godz. 10 zwołano posiedzenie senackiej Komisji
        Praw Człowieka i Praworządności. Tego samego dnia o godz. 11 obraduje
        sejmowa Komisja Administracji i Spraw Wewnętrznych. W związku z tym
        podejrzewam, że znów będziemy mieć kłopoty z quorum. Właściwie nie
        wiadomo, posiedzenie której komisji jest ważniejsze i gdzie powinni się
        udawać poszczególni parlamentarzyści."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Znów borykamy się z tym samym dylematem. Pomimo pewnych ustaleń dochodzi
        do napięć."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Chcę przypomnieć, że na samym początku obrad zostaliśmy poinformowani,
        że ze względu na potrzebę koordynacji naszych prac z pracami Senatu, w
        czwartek pracujemy jedynie do godz. 13. Później obraduje Senat. Również
        w Sejmie dochodzi do kolizji pomiędzy terminami posiedzeń komisji.
        Przyjęliśmy jednak takie domniemanie, że uczestnicząc w posiedzeniach
        Komisji Konstytucyjnej, jesteśmy usprawiedliwieni przed innymi
        komisjami, które obradują w tym samym czasie. Proponuję, aby tego nie
        zmieniać, gdyż w przeciwnym razie sparaliżujemy prace Komisji
        Konstytucyjnej."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Czy możemy postawić formalny wniosek, aby głosowanie odbyło się w
        czwartek?"
    />

    <Utterance
      speaker="Poseł Janusz Szymański (UP)"
      imgPath="/images/kk-speakers/SzymanskiJanusz.png"
      text="Myślę, że wniosku senatora S$. Pastuszki nie musimy nawet głosować."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Mamy do czynienia z rozbieżnością stanowisk."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Intencję senatora K. Kozłowskiego zrozumiałem nieco inaczej. Nie
        chodziło mu o to, aby w ogóle nie głosować. Jeśli w czwartek
        przeprowadzilibyśmy zblokowane głosowania rozpoczynając je o godz. 9, to
        można założyć, że powinny się one zakończyć do godz. 10, tak aby senator
        K. Kozłowski mógł popracować także w innych gremiach. Wydaje mi się, że
        to, aby głosowania odbyły się w czwartek, nie było wcale zakwestionowane
        — nie było co do tego sprzeciwu. Poza tym, nie wiemy, jak wielką materię
        będziemy mieli do przegłosowania. Może okazać się, że w ciągu godziny
        zakończymy sekwencję głosowań. Nie zmieniajmy wszystkiego pod wpływem
        kolejnych impulsów. Każdy z nas, oprócz pracy w Komisji Konstytucyjnej,
        ma jakieś równoległe prace. Uczestniczymy jednak w posiedzeniach tej
        Komisji, zgodnie z priorytetem danym pracom Komisji Konstytucyjnej."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Czy w tej spra wie pragnie jeszcze zabrać głos senator K. Kozłowski?"
    />

    <Utterance
      speaker="Senator Krzysztof Kozłowski (KD)"
      imgPath="/images/kk-speakers/KozlowskiKrzysztof.png"
      text="Ubolewam: tylko, że mimo zapewnień, iż wszystko będzie skoordynowane,
        nikt nie przejmuje się Komisją Konstytucyjną. Jej posiedzenia są
        wyznaczane „jak gdyby nigdy nic”."
    />

    <Utterance
      speaker="Senator Henryk Rot (SLD)"
      imgPath="/images/kk-speakers/RotHenryk.png"
      text="Chciałbym przeprosić posłów — członków Komisji Konstytucyjnej. Trudno
        jest mi jednak przepraszać w imieniu Prezydium Senatu, czy w ogóle
        senatorów. Dla porządku jednak powiem, że na którymś posiedzeniu
        plenarnym Senatu marszałek prowadzący wówczas obrady zapowiedział, żeby
        nie odbywać posiedzeń Komisji Konstytucyjnej tuż przed mającymi się
        rozpocząć obradami Senatu. Na pewno będą takie tygodnie, w których część
        dni będzie przeznaczona na posiedzenie Komisji Konstytucyjnej I część —
        na posiedzenie Senatu. Komisje senackie powinno się zwoływać w
        tygodniach, kiedy nie odbywa Się ani posiedzenie Senatu, ani posiedzenie
        Kormnisji Konstytucyjnej. Niektórzy przewodniczący komisji — nieskromnie
        powiem, że jestem jednym z nich — tak właśnie robią. Inni natomiast
        zwołują posiedzenia komisji na 1-2 godziny przed obradami Senatu. Jest
        to w jakimś sensie dramat."
    />

    <Utterance
      speaker="Poseł Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/KwasniewskiAleksander.png"
      text="Czyli mogę przyjąć, że zdecydowana większość członków Komisji
        Konstytucyjnej stoi na stanowisku, iż w czwartek o godz. 9 powinniśmy
        rozpocząć głosowania nad kolejnymi przepisami konstytucyjnymi..."
    />

    <Utterance
      speaker="Senator Krzysztof Kozłowski (KD)"
      imgPath="/images/kk-speakers/KozlowskiKrzysztof.png"
      text="...ale pod warunkiem, że przewodniczący S. Pastuszka, jako senator,
        zwróci uwagę marszałkowi Senatu, że coś jest tu jednak nie w porządku."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="W nawiązaniu do wypowiedzi ekspertów, chciałbym zadać jeszcze jedno
        pytanie. Powstało pewnego rodzaju zapętlenie. Na przykład poseł J.
        Ciemniewski miał wątpliwości, co oznacza pojęcie „obowiązki człowieka”.
        Chciałbym zapytać, biorąc pod uwagę konstytucje innych państw, czy
        niezbędne jest umieszczenie wyrazu „człowieka w rozdziale ll Konstytucji
        RP. Jestem przekonany, że wiele przepisów nawiązuje do wolności
        człowieka i do praw człowieka. Nikt tego nie kwestionuje, gdyż jest to
        prawidłowe. Czy jednak w tytule rozdziału takie nawiązanie jest
        nieodzowne? Czy np. wersja „Wolności, prawa oraz obowiązki obywatela”
        nie odzwierciedlałaby w istocie tego, że Konstytucja RP byłaby
        konstytucją, która reguluje w szczególności kwestie wolności, praw oraz
        obowiązków obywatela, a która w wielu przepisach odwołuje się do
        wolności I praw człowieka, oraz która —— mówi także o prawach innych
        osób? Zapytuję, na ile to wprowadzenie elementu „człowieka” do tytułu
        rozdziału II jest nieodzowne dla całej jego konstrukcji? Doskonale zdaję
        sobie sprawę, że jesteśmy pod wrażeniem mającego nastąpić referendum
        konstytucyjnego, przez które ma przejść projekt Konstytucji RP, ale
        jeśli od tego typu kalkulacji będziemy uzależniali tytuły rozdziałów, to
        nie będzie to dobre postępowanie. Wydaje mi się, że rozdział konstytucji
        powinien odzwierciedlać to, co leży w jego zakresie. Jeśli w zakresie
        tego rozdziału są obowiązki, to ich ukrywanie — jakieś wstydliwe
        traktowanie — jest jakąś nową manierą. Oczywiście, że inną wartość
        stanowią wolności i prawa. Istnieją jednak także obowiązki. Skoro są one
        wyrażone expressis verbis w przepisach prawnych — kilka artykułów w
        projekcie jednolitym Konstytucji RP — to ukrywanie tego w tytule
        rozdziału tylko dlatego, żeby kogoś nie drażnić, wydaje się, że nie
        służy edukacji obywatelskiej. Obywatel powinien być świadomy, że w
        konstytucji są również obowiązki, jeżeli oczywiście je tam wpiszemy.
        Gdyby nie było uzasadnień, że należy jednak umieścić pojęcie „człowieka”
        w rozdziale II Konstytucji RP, to optowałbym za następującym tytułem
        tego rozdziału: „Wolności, prawa oraz obowiązki obywatela”. Właśnie taka
        sekwencja w sposób najbardziej istotny odzwierciedlałaby jego zawartość.
        Jeżeli jednak padnie argument, że umieszczenie pojęcia „człowieka” jest
        nieodzowne, to rozumiem, że mówiąc o wolnościach i prawach człowieka,
        nawiązujemy w istocie do prawa międzynarodowego, do praw naturalnych, a
        także do innych kwestii. To z innych obszarów wynikają konsekwencje,
        które tutaj odnotowujemy. Jeżeli w naszej konstytucji robimy coś
        oryginalnego, to przesądzamy o wolnościach, prawach i obowiązkach
        obywatela."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Kazimierz Działocha"
      imgPath="/images/kk-speakers/DzialochaKazimierz.png"
      text="Podejmuję się odpowiedzieć na pytanie postawione przez posła J.
        Jaskiernię, chociaż niedawno role były ustawione inaczej, to ja jego
        pytałem na kolokwium habilitacyjnym. Wtedy poseł J. Jaskiernia bardzo
        dobrze odpowiadał. Być może, dzisiaj to ja się potknę, a poseł J.
        Jaskiernia będzie miał z tego satysfakcję. Na postawione pytanie
        odpowiem nieco szerzej. Nie chcąc podsumowywać dyskusji, uważam jednak,
        że rozdział II Konstytucji RP powinien mieć tytuł proponowany przez
        ekspertów: „Wolności i prawa człowieka i obywatela”. Mam pewne
        wątpliwości, czy powinno się zawrzeć w tym tytule także obowiązki —
        ustosunkuję się do tego za chwilę. Dlaczego w tytule rozdziału powinno
        znaleźć się sformułowanie „wolności i prawa”? Dlaczego osobno „wolności,
        a osobno „prawa”? Dlatego że są to pojęcia odrębne w świetle nie tylko
        współczesnej nauki prawa konstytucyjnego, ale także w Świetle
        współczesnych konstytucji. Są to w istocie różne kategorie. Różna jest
        rola państwa, gdy 1dzie o sposób realizacji wolności i praw. Różny jest
        typ gwarancji jednych i drugich. Pozostawiłbym taką oto kolejność:
        najpierw „wolności”, potem „prawa ”, dając trochę inne uzasadnienie niż
        to zrobił prof. L. Wiśniewski. Jego uzasadnienie trochę zaniepokoiło
        nieobecnego w tej chwili na sali ks. H. Sacewicza. Takie, a nie inne
        stanowisko ekspertów nie wynika wcale z tego, że na sztandarach
        wszystkich rewolucji była wypisana „Wolność . Nie chciałbym, aby było
        ono kojarzone z malowidłami Delacroix, obrazującymi Wolność, która
        prowadzi lud Paryża na barykady i która jest niezupełnie odziana. Myślę,
        że uzasadnienie podanej przeze mnie kolejności wyrazów w tytule
        rozdziału II Konstytucji RP wynika z przyjęcia przez podkomisję praw 1
        obowiązków obywateli treści poszczególnych zapisów tego rozdziału.
        Proszę np. spojrzeć na artykuły 19 i 20. Właśnie tam tkwi uzasadnienie.
        Nie tylko rewolucyjne doktryny eksponowały wolność człowieka. Teraz
        chciałbym odnieść się bezpośrednio do pytania posła J. Jaskierni. Czy w
        tytule rozdziału II wystarczy zapisać: „„Prawa i wolności obywatela” —
        bez „człowieka? Moim zdaniem, jest uzasadnione, żeby mówić o prawach
        człowieka i obywatela. Najpierw trzeba zerwać z pewną autarkią, będącą w
        naszej pamięci. Co więcej, w obowiązującej konstytucji z 1952 r. cały
        jej rozdział VIII, obowiązujący do dzisiaj, mimo różnych wysiłków
        Trybunału Konstytucyjnego w zakresie orzecznictwa, pozostał w brzmieniu
        oparty na założeniu, że prawa przysługują tylko obywatelom. Wolności, w
        znaczeniu nadanym im przez konstytucję z 1952 r., również przysługują w
        zasadzie tylko obywatelom. Czasem znajdzie się inna podstawa przyznania
        określonych wolności. Trybunał Konstytucyjny szukał jej bardziej we
        współczesnej doktrynie niż w brzmieniu konstytucji. Żeby zerwać z tą
        wyraźną autarkią, sprowadzającą sytuację prawną jednostki do sytuacji
        prawnej obywatela i wychodząc naprzeciw ważniejszym tendencjom
        Światowym, podkreśliłbym zarówno prawa i wolności człowieka, jak i
        obywatela. Poza tym zakres praw i wolności podmiotów pozostających pod
        jurysdykcją państwa polskiego jest różny. Nie wszystkie prawa, nawet w
        najbardziej demokratycznych państwach, przysługują wszystkim i każdemu.
        Pewne z nich są np. zarezerwowane dla obywatela. Oddzielenie praw
        człowieka od praw obywatela można ustanowić w odpowiednich formułach
        poszczególnych praw. Można też wyjść z założenia, że oddzielenie to
        będzie już wyrażał tytuł rozdziału konstytucji. Czy w tytule rozdziału
        II Konstytucji RP uwzględniać wyraz „obowiązki? Powstały na ten temat
        kontrowersje. Zgadzam się z prof. A. Rzeplińskim, że rzeczywiście
        większość konstytucji współczesnych, chociaż reguluje obowiązki
        obywateli także w rozdziałach traktujących o prawach, to jednak nie
        używa terminu „obowiązki” w samym tytule odpowiedniego rozdziału
        konstytucji, w którym są one w istocie regulowane, chociaż w znacznie
        węższym zakresie niż prawa i wolności. Chcę powiedzieć, że w przepisach
        projektu jednolitego Konstytucji RP obowiązki są jednak bardzo
        rozbudowane. Jeżeli przyjmiemy, że w projekcie tym powinny się znaleźć
        pewne zasady czy założenia prawa karnego, to jest to w dużej mierze
        problem przede wszystkim obowiązków. Wszystko to przemawiałoby za
        utrzymaniem w tytule rozdziału II Konstytucji RP wyrazu „obowiązki”. Nic
        złego się ostatecznie nie stanie, jeżeli rozdział II będzie zatytułowany
        „„Wolności i prawa człowieka i obywatela”. W istocie rzeczy niczego to
        nie zmienia, dlatego że przedmiotem regulacji tego rozdziału, chociaż w
        mniejszym zakresie, będą także obowiązki."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Na wstępie chcę powiedzieć, że dla mnie sprawa integralności tekstu
        konstytucji, tzn. ujęcia na podobnych czy na tożsamych prawach części
        dotyczącej praw obywatelskich i części dotyczącej organizacji państwa,
        nie jest sprawą tylko pewnej konwencji, ale wyrazem traktowania
        konstytucji i państwa jako czegoś, co wyrasta z poczucia obywatelskości
        jednostki. Oddzielanie części dotyczącej organizacji państwa od
        regulacji odnoszącej się do statusu obywatela jest rzeczą sprzeczną z
        moim sposobem pojmowania stosunków między państwem a obywatelem w
        demokratycznym społeczeństwie, opartym o zasadę suwerennośŚci narodu.
        Takiej ideologii używam dla określenia integralności konstytucji i
        przeciwstawienia się wyodrębnianiu, w jakiejś mierze, tej części, która
        dotyczy organizacji państwa czy też pozycji obywatela. Druga sprawa
        dotyczy kwestii tytułu rozdziału II Konstytucji RP. W projekcie
        jednolitym Konstytucji RP daje się zauważyć dążenie do opisania
        wszystkiego w pełnej szczegółowości. Moim zdaniem, jest to zupełnie
        zbędne. Uważam, że rozdział II wyglądałby znacznie lepiej, gdyby jego
        tytuł ograniczył się do sformułowania „Prawa i wolności” albo „Wolności
        i prawa. Nie przywiązuję wagi do kolejności wyrazów. Wydaje mi się, że
        jest to sprawa „dzielenia włosa na czworo”. W języku polskim lepiej
        brzmi „prawa i wolności”. Wszystkim wiadomo, że chodzi tu o prawa 1
        wolności i człowieka, i obywatela. Świadczą o tym konkretne przepisy.
        Nie wszystko zatem musi być zawarte w tytule rozdziału. Sądzę, że pewna
        wstrzemięźliwość w wykorzystywaniu farby drukarskiej byłaby wartością
        przy tworzeniu przepisów Konstytucji RP."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Rzeczywiście mogłoby się wydawać, że mówimy o rzeczy błahej, czyli tylko
        o tytule rozdziału konstytucji. Chcę jednak zwrócić uwagę, że tytuł
        rozdziału traktującego o prawach i obowiązkach ma niesympatyczne
        konotacje historyczne. Wszyscy pamiętamy, kiedy pojawiła się teza o
        łączności między prawami a obowiązkami obywatelskimi. Było to w latach
        siedemdziesiątych. Nie będę wymieniać niesławnych nazwisk osób, które
        wpadły na taki pomysł. Powyższa teza mówiła, że owszem, państwo
        socjalistyczne gwarantuje prawa obywatelskie, ale tylko tym obywatelom,
        którzy są grzeczni, a więc tylko tym, którzy wypełniają swoje obowiązki.
        Jeżeli obywatel nie wypełniał swoich obowiązków, nie mógł sobie rościć
        prawa np. do paszportu. Jeżeli wypełniałby swoje obowiązki wobec
        państwa, mógłby jednocześnie korzystać z pełni praw. Taką właśnie
        konstrukcją z zakresu prawa administracyjnego próbowano uzasadniać
        poważne nadużycia w obrębie praw i wolności obywatelskich. Wszyscy
        wiemy, że nie o to chodzi wnioskodawcom tytułu „Prawa i wolności
        obywatela. Jednak każda konstytucja ciągnie za sobą bagaż historyczny i
        o tym trzeba pamiętać. Gdybyśmy mieli do czynienia tylko z zamnierzchłą
        zaszłością historyczną, moglibyśmy na to machnąć ręką i powiedzieć: „nie
        bądźmy przewrażliwieni, to już było, nie wróci, nikt takich skojarzeń
        już nie ma, teza o łączności praw i obowiązków obywateli należy do
        zamierzchłej przeszłości poprzedniego ustroju, a intencje obecnych
        wnioskodawców są czyste i szlachetne, w co nikt z nas nie wątpi”.
        Jednakże w prawie europejskim, zwłaszcza w orzecznictwie brytyjskim —
        Wielka Brytania ma duże problemy z imigrantami i ludźmi poszukującymi
        azylu — w ostatnich dwóch latach, na co zwrócono uwagę na Europejskiej
        Konferencji Prawa Publicznego, pojawiła się znowu pewna myśl, co w
        wykonaniu angielskich lordów jest szczególnie interesujące ze względu na
        to, że po raz pierwszy myśl tę sformułowała polska nauka socjalistyczna
        prawa administracyjnego I prawa państwowego. Niektórzy zaczęli znowu
        sięgać po tę konstrukcję. Była ona zwalczana w ramach Konferencji
        Bezpieczeństwa i Współpracy w Europie. Chciano przywrócić łączność
        pomiędzy prawami a obowiązkami obywatelskimi i rozważyć w orzecznictwie
        europejskim, czy nie zacząć by dozować, uzależniać realizacji
        podstawowych praw obywatelskich i praw człowieka — rozszerzano tę tezę
        na cudzoziemców, a więc także na tych, którzy nie są obywatelami — od
        tego, w jaki sposób obywatel-człowiek wypełnia swoje obowiązki wobec
        państwa. Gdyby to była jakaś nasza lokalna historia i gdyby tylko
        chodziło o poprzednie uwarunkowania ustrojowe, zwłaszcza że obszerma
        dokumentacja walki z przedstawioną wyżej koncepcją istnieje w
        literaturze polskiego prawa administracyjnego, to można by było ustąpić.
        Jeżeli jednak — nie ukrywam tego — w ekstremistycznych kręgach
        europejskich znowu pojawiają się pomysły o łączności praw człowieka i
        obowiązków oraz uzależniania jednego od drugiego, to wpisanie się z
        naszą konstytucją z kontrowersyjnym tytułem rozdziału w taki nurt, nawet
        bez n —— nama em n. O OTO A AE AN mn szych intencji do pójścia w tym
        kierunku, mogłoby być błędnie odczytane. Proszę wybaczyć tak obszerne
        uzasadnienie do propozycji zmierzającej w kierunku zrezygnowania w
        tytule rozdziału II Konstytucji RP z pojęcia „obowiązki obywatelskie”."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/OsiatynskiWiktor.png"
      text="Widzę, że dużo problemów wynika z tego, że rzeczywiście w tytule
        rozdziału II są i wolności, I prawa, a także obowiązki człowieka i
        obywatela. Nie ma jednak czegoś takiego, jak konstytucyjne obowiązki
        człowieka. Obowiązki mogą być tylko obywatelskie. Nie można nałożyć
        obowiązków na człowieka. Można mu dać jedynie prawa. Czy w tytule
        rozdziału II Konstytucji RP określenie „człowieka” jest tak naprawdę
        potrzebne? Projekt jednolity Konstytucji RP w treści rozdziału II
        oddziela prawa przysługujące człowiekowi — mówił o tym prof. K.
        Działocha; są to wszystkie wolności, część praw osobistych i część praw
        socjalnych — od praw obywatelskich. Są to prawa polityczne i część praw
        socjalnych. Na gruncie innych konstytucji różnie to wygląda. Wydaje mi
        się, że pomysł posła J. Ciemniewskiego jest tutaj najlepszy. Stosuje on
        metodę redaktorów radzieckich, która nazywa się „dbjw” („dla bolszoj
        jasnosti wyczerknuć”). Uważam tę metodę za bardzo przydatną rzecz,
        zwłaszcza przy redagowaniu prawa, w którym każda niejasność powoduje
        potem możliwości interpretacji konstytucyjnej. Sformułowanie „Wolności i
        prawa” — czy „Prawa i wolności” — jest bardzo dobrym tytułem dla
        rozdziału II Konstytucji RP. Teraz przechodzę do pojęcia „obowiązki”.
        Chciałem powiedzieć o tym, o czym mówiła poseł I. Lipowicz, czyli o
        jedności albo braku jedności w wiązaniu praw i obowiązków. Tak naprawdę,
        na tle tych trudności przychodzi mi do głowy sugestia, że najlepiej
        byłoby wyodrębnić przepisy o obowiązkach obywatelskich w osobny rozdział
        Konstytucji RP. Byłby to rozdział krótki, węzłowaty, a zarazem ważny.
        Prof. P. Sarnecki i kilku posłów mają rację, że jeśli chodzi o
        obowiązki, nie ma co chować głowy w piasek. Jest to ważna część czy to
        umowy społecznej, czy to kontraktu konstytucyjnego, czy jakby tego nie
        nazwać. Rozdział II Konstytucji RP mógłby się nazywać po prostu
        „Wolności i prawa”, a rozdział III — np. „Obowiązki obywatelskie”. Nie
        będziemy wtedy mieli problemu z wiązaniem praw i obowiązków, a także z
        ich współzależnością. Będziemy natomiast mieli w Konstytucji RP
        uwzględnione obowiązki, które są dosyć ważną rzeczą."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Również chcę zabrać głos w tej bardzo newralgicznej sprawie. Ścierają
        się tu dwie koncepcje pojmowania państwa. Kto ma prymat, obywatel czy
        państwo? Jest jeszcze jedna koncepcja pośrednia. 0 A Chcę przypomnieć
        poseł I. Lipowicz, iż wcale nie w latach siedemdziesiątych nastąpiła w
        Polsce po raz pierwszy ostra korelacja pomiędzy prawami a obowiązkami
        obywatelskimi, tylko w latach trzydziestych, po zamachu majowym. Poseł
        I. Lipowicz pragnie zabrać głos ad vocem."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Obstaję przy swoim stanowisku, że jako pojęcie doktrynalne idea Ścisłej
        łączności odległych od siebie praw i obowiązków pojawiła się w polskim
        prawie administracyjnym w latach sześćdziesiątych i siedemdziesiątych."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Jestem za tym, aby w tytule rozdziału II Konstytucji RP znalazł się
        także wyraz „obowiązki”. Mam tu na uwadze dwa różne aspekty: samo
        pojęcie wartości państwa i polskich tradycji historycznych oraz
        patrzenie na problem praw i obowiązków przez pryzmat procesu integracji
        Europy. Wtedy wolności i prawa wydają się ważniejsze od obowiązków.
        Jeśli źle zrozumiałem poseł I. Lipowicz, to bardzo przepraszam. To, o
        czym mówił poseł J. Jaskiernia, jest niezmiernie istotne. Chodzi o
        patrzenie na konstytucję jako na element edukacji społeczeństwa. Jeśli
        konstytucja ma edukować, to równie silnie powinien być w niej zaznaczony
        problem obowiązków obywatela, który musi pracować na rzecz ojczyzny,
        żeby móc czerpać ze wspólnego dobra."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Rozumiem, że poseł I. Lipowicz sygnalizuje ważną kwestię, ale nie wiem,
        czy jej obiekcje nie są czasami przesadne Z punktu widzenia
        konsekwencji, jakie wywołuje tytuł rozdziału. Gdyby w konstytucji była
        taka norma, która uzależniałaby możliwość realizacji praw od realizacji
        obowiązków, dzisiejsza dyskusja byłaby istotna i być może, trzeba by
        było zaistniałe niebezpieczeństwo wyeliminować. Osobiście nie sądzę —
        być może skorygują mnie eksperci — aby już z samego tytułu rozdziału i
        faktu wyliczenia praw oraz obowiązków jakakolwiek dopuszczalna
        interpretacja logiczna, czy też intencyjna Konstytucji RP mogłaby
        prowadzić do takiego niebezpieczeństwa, jakie sygnalizuje poseł I.
        Lipowicz. Dlatego też mam w tej sprawie nieco odmienne zdanie. Jeśli
        eksperci mogą skorygować moje myślenie w zakresie niebezpieczeństw,
        jakie sygnalizuje poseł I. Lipowicz, to chętnie ich argumentów
        wysłucham. Wydaje mi się jednak, że tutaj takie niebezpieczeństwa nie
        występują. Przedstawiciel Prezydenta RP, prof. Andrzej Rzepliński: Na
        pytanie, które postawił przewodniczący S$. Pastuszka, kto jest
        ważniejszy: jednostka, czy państwo, można odpowiedzieć następująco, że w
        państwach demokracji zachodniej w zależności od czasu, w jakim owe
        demokracje się pojawiały — w niektórych krajach — przed dwustu laty —
        dylemat ten jest oczywiście rozstrzygnięty; jednostka jest ważniejsza,
        państwo jej jedynie służy. Taki stan rzeczy, jak się okazuje z
        doświadczeń, doskonale służy również państwu. Takie państwo jest silne
        siłą jednostek. Nie sądzę, aby była tutaj możliwa jakaś trzecia droga.
        Albo państwo, albo jednostka. Reszta jest tylko zamazywaniem prawdy. Nie
        chodzi nam przecież o to, aby ukrywać obowiązki. Propozycja prof. W.
        Osiatyńskiego wydaje się tu rozsądna. Obowiązki obywateli są bardzo
        istotne. Gdybyśmy jednak chcieli wszystko, co znajduje się w treści
        rozdziału II Konstytucji RP zamieścić w jego tytule, to trzeba by także
        w nim zawrzeć - ograniczenia wolności i praw. Jeżeli policzymy wyrazy,
        to na temat tych ograniczeń pisze się więcej niż na temat praw,
        wolności, obowiązków. W tytule rozdziału nie da się wszystkiego opisać.
        Dobrze byłoby, aby taki tytuł dokładnie trafiał w to, o co w tym wypadku
        ustawodawcy konstytucyjnemu chodzi."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Czy ktoś jeszcze chciałby zabrać głos w kwestii nazwy rozdziału II
        Konstytucji RP? Nie widzę. Dylemat w tej sprawie będzie rozstrzygnięty w
        czwartek w czasie głosowania."
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="Chciałabym przejąć wniosek prof. W. Osiatyńskiego. W przypadku, gdybyśmy
        zdecydowali, że obowiązki obywatelskie powinny się jednak znaleźć w
        tytule rozdziału, to chciałabym, aby był to odrębny rozdział konstytucji
        RP."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Bardzo proszę, aby była także głosowana propozycja tytułu rozdziału II
        „Prawa i wolności”."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Jeśli nie ma już głosów na temat propozycji tytułu rozdziału ll
        Konstytucji RP, możemy przejść do rozpatrywania konkretnych przepisów
        konstytucyjnych. Mam tu w szczególności na uwadze art. 19, do którego
        treści zaproponowano dwa warianty. Chcę zapytać członków Komisji
        Konstytucyjnej oraz ekspertów, czy zechcieliby zabrać głos w celu
        uzasadnienia któregoś z wariantów zapisu art. 19?"
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Wydaje mi się, że niezwykle pomocna byłaby teraz obecność posła J.
        Gwiżdża, który przewodniczył właściwej podkomisji. Jego wiedza jest
        tutaj bardzo znacząca. Niezależnie od tego, co chcą powiedzieć na temat
        art. 19 eksperci, byłoby rzeczą cenną, aby przewodniczący podkomisji
        czuwał nad rozwojem sytuacji i przebiegiem merytorycznym argumentacji."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Nie wątpię, że wniosek posła J. Jaskierni jest słuszny, ale, o ile wiem,
        poseł J. Gwiżdż zachorował i ciałem tu na pewno nie jest."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Jeżeli nieobecność posła J. Gwiżdża jest usprawiedliwiona, to zapytuję,
        czy nie ma innej osoby z podkomisji, która mogłaby podjąć się ciężaru
        zreferowania Spraw. Jest to dość liczna podkomisja. Któryś z jej
        członków mógłby się tego podjąć."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Czy jest na stali ktoś z podkomisji praw i obowiązków obywateli?"
    />

    <Utterance
      speaker="Poseł Irena Lipowicz (UW)"
      imgPath="/images/kk-speakers/LipowiczIrena.png"
      text="W pełni popieram wniosek posła J. Jaskierni. Jeżeli nie ma w tej chwili
        nikogo, kto byłby w stanie zreferować nam rozdział II Konstytucji RP, to
        proponuję na dzisiaj zakończyć obrady. Składam w tej sprawie wniosek
        formalny."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Poseł J. Gwiżdż jest podobno chory. Jego nieobecność uważam za
        usprawiedliwioną. |"
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Czy poseł J. Gwiżdż będzie obecny np. jutro?"
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Może wie coś na ten temat sekretariat Komisji Konstytucyjnej."
    />

    <Utterance
      speaker="Poseł Jerzy Ciemniewski (UW)"
      imgPath="/images/kk-speakers/CiemniewskiJerzy.png"
      text="Wydaje mi się, że rozpoczynanie w tej chwili debaty nad rozdziałem o
        dość zasadniczym znaczeniu pod nieobecność przewodniczącego podkomisji i
        znacznej liczby jej członków, wreszcie pod nieobecność znakomitej
        większości członków Komisji Konstytucyjnej, jest nieuzasadnione. Wnoszę
        o przyjęcie propozycji poseł I. Lipowicz. Chcę, abyśmy przerwali
        dzisiejsze posiedzenie."
    />

    <Utterance
      speaker="Ekspert Komisji, prof. Wiktor Osiatyński"
      imgPath="/images/kk-speakers/OsiatynskiWiktor.png"
      text="Wiem, że przewodniczący J. Gwiżdż — będąc ekspertem podkomisji,
        kontaktowałem się z nim — ma dzisiaj jakiś zabieg albo badanie i jutro
        będzie."
    />

    <Utterance
      speaker="Poseł Jerzy Jaskiernia (SLD)"
      imgPath="/images/kk-speakers/JaskierniaJerzy.png"
      text="Pojawiły się dwa argumenty bardzo istotne. Po pierwsze, poseł J. Gwiżdź
        jutro będzie i dla uszanowania faktu, że przewodniczył obradom
        podkomisji dobrze byłoby, abyśmy przepisy rozdziału II Konstytucji RP
        rozpatrywali w jego obecności, gdyż być może, będą do niego pytania. Po
        drugie, jutro od godz. 9 obraduje podkomisja, której przewodniczy poseł
        R. Bugaj. Ma ona do rozpatrzenia ważny element. Będziemy w tej dobrej
        sytuacji, że wkraczając w obszar wolności, praw oraz obowiązków,
        będziemy znali wszystkie opcje dotyczące rozdziału I Konstytucji RP, co
        ułatwi nam posuwanie się dalej."
    />

    <Utterance
      speaker="Senator Stefan Pastuszka (PSL)"
      imgPath="/images/kk-speakers/PastuszkaStefan.png"
      text="Argumenty te są chyba wystarczająco przekonujące. W związku z tym,
        ogłaszam przerwę w posiedzeniu Komisji Konstytucyjnej do jutra, do godz.
        11. Przypominam, że o godz. 9 rozpoczyna obrady podkomisja, której
        przewodniczy poseł R. Bugaj; będzie ona rozpatrywała art. 15 dotyczący
        stosunków państwo-kościół."
    />
  </div>
</div>
