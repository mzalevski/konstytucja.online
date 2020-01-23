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
    border: 1px solid rgba(0, 0, 0, 0.1);
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
      „Rzeczpospolita 24.02.95

„Rozdział” podzielił Komisję Konstytucyjną

Kompromis się oddala

Nie udało się Komisji Konstytucyjnej Zgroma-
dzenia Narodowego uzgodnić treści art. 15 projek-
tu konstytucji zawierającego formułę stosunków
między państwem a Kościołem oraz związkami
wyznaniowymi. Jeszcze w środę możliwość osiąg-
nięcia kompromisu w tej sprawie wydawała się
bardzo bliska. Z, 5 wersji tego przepisu przedło-
żonych przez podkomisję w trakcie czwartkowych
obrad powstało kilkanaście.

Swe poparcie dla sformułowania dotyczącego „od-
dzielenia” Kościoła od państwa wycofał na początku
posiedzenia ks. prof. Józef Krukowski, przedstawi-
ciel Episkopatu, powołując się na to, że brak mu
upoważnienia mocodawców, aby przystać na takie
sformułowanie.

 

105

Tego samego dnia bp Pieronek powiedział KAI:
„Zapisywanie rozdziału Kościoła od państwa, a jed-
nocześnie wzajemnej autonomii i niezależności tych
podmiotów w jednym paragrafie jest typowym mas-
łem maślanym ”. Zgadzamy się na to, że Kościół jest
oddzielony powiedział bp Pieronek — ale nie
przez państwo, tylko ze swej natury. Zawiera się to
w formule niezależności i autonomii.

W dyskusji odwoływano się do najróżniejszych ar-
gumentów także natury historycznej, porównawczej,
politycznej. Nie posunęło to jednak prac do przodu.
Podsumowując obrady Aleksander Kwaśniewski po-
wiedział, że chodzi tu o przepis, którego odbiór spo-
łeczny może mieć bardzo istotne znaczenie dla refe-
rendum konstytucyjnego. Należy więc dążyć do ma-
ksymalnego uzgodnienia tych sformułowań. Dlatego
komisja powstrzymuje się od rozstrzygnięć w drodze
głosowania. Komisja zaleciła klubom poselskim
przeprowadzenie konsultacji w tej sprawie, a rozwa-
żenie propozycji podkomisji, na tle której rysowała
się możliwość kompromisu.

Komisja upoważniła też swoje prezydium do pro-
wadzenia rozmów na ten temat z przedstawicielami
Kościoła i związków wyznaniowych. Być może więc
na kolejnym posiedzeniu za dwa tygodnie uda się
podjąć w tej sprawie decyzje.

Zdaniem Kwaśniewskiego z dyskusji wynika, że
osiągnięcie zgody jest możliwe. Nie ma sprzeciwu
co do zasady neutralności Światopoglądowej władz
publicznych, równoprawności wszystkich wyznań,
autonomii Kościoła w działaniach związanych z wy-
pełnianiem jego misji religijnej i społecznej, ustawo-
wego określenia stosunków państwo-Kościół, zasady
współdziałania.

Spór toczy się więc nie o zasady, lecz raczej o sło-
wa, twierdził przewodniczący komisji, a wynika on
z nagromadzonej przez lata nieufności, złych do-
świadczeń historycznych, uprzedzeń i stereotypów.
W gruncie rzeczy nie ma oporu przeciw rozdziałowi
państwa i Kościoła w myśl ewangelicznej zasady,
„co boskie Bogu, a co cesarskie cesarzowi . Opór
wzbudza jednak słowo „rozdział”” bądź „oddzielenie”
ze względu na konotacje dotyczące realizacji tej kon-
cepcji w okresie stalinowskim.

W trakcie dyskusji w komisji próbowano te złe
skojarzenia „odczarować”. Zwracano uwagę, że
w świecie rozdział jest realizowany, lecz przybiera
to różne formy. Można więc mówić o rozdziale: neu-
tralnym i stanowczym, jak w USA, gdzie są to dwie
odrębne sfery życia, rozdziale wrogim praktykowa-
nym w pewnym okresie we Francji, a następnie prze-
jętym i rozwiniętym przez państwa komunistyczne.
Istnieje też rozdział polegający na przyjaznej współ-
pracy, jak w Niemczech, gdzie państwo zbiera po-
datki na Kościół, ponieważ uznaje, że jest to ważna
część społeczeństwa obywatelskiego.

Wnoszono również propozycje polegające na re-
alizacji tych samych treści, lecz bez użycia słów
„rozdział” lub „oddzielenie. Np. zdaniem prof. Wik-
tora Osiatyńskiego można by przyjąć w to miejsce

 

106

 

Prasa o pracach konstytucyjnych

 

przepis wykluczający udział Kościoła w sprawowa-
niu władzy publicznej.

Istotny punkt sporny dotyczył też tego, jak określić
zakres niezależności i autonomii Kościoła. Posłowie
SLD Włodzimierz Cimoszewicz i Krystyna Łybacka
proponowali, aby dotyczyło to jedynie „zadań reli-
gijnych i organizacyjnych”. Tadeusz Mazowiecki
(UW) stanowczo protestował przeciw temu, aby
w sposób jednostronny określać w konstytucji zada-
nia Kościoła.

Następne posiedzenie komisji zostało zaplanowane
na 7-9 marca.

J.T.P.

„Trybuna” 24.02.95

W Komisji Konstytucyjnej jednak kompromis?

Leczenie ran

W czwartek Komisja Konstytucyjna Zgroma-
dzenia Narodowego pracowała w całym składzie.
Już na wstępie Aleksander Kwaśniewski zapropo-
nował, aby głosowanie nad treścią artykułu 15,
dotyczącego stosunków między państwem a Koś-
ciołami i związkami wyznaniowymi, odbyło się do-
piero za dwa tygodnie. — To nie ucieczka od te-
matu — argumentował. — Chodzi o to, aby wy-
powiedziały się w spornych kwestiach kluby par-
lamentarne. Również o to, aby rozpatrywać tę
sprawę w spokoju.

Następnym wypowiadającym się był Tadeusz Ma-
zowiecki, który podkreślił, że też jest za spokojem,
ale musi wycofać się z poparcia udzielonego w Środę
propozycji brzmienia art. 15 zaproponowanego przez
przedstawicieli Kościołów i powrócić do swojej pier-
wotnej pozycji. Przypomnijmy, że w wersji przed-
stawicieli Kościołów zawarte było m.in. stwierdze-
nie, że „Kościoły i związki wyznaniowe są oddzie-
lone od państwa”. W propozycji posła Mazowieckie-
go nie ma żadnego stwierdzenia dotyczącego
rozdziału bądź oddzielenia państwa od Kościołów.

Co najciekawsze, autopoprawkę do propozycji
przedstawicieli Kościołów wniósł jeden z jej współ-
autorów, ks. prof. Józef Krukowski (Katolicki Uni-
wersytet Lubelski). Stwierdził wprost: — Nie mam
akceptacji zwierzchników Kościoła na słowo „od-
dzielone”. A poza tym, jeśli Kościoły mają być auto-
nomiczne i niezależne — to powtarzanie, że są od-
dzielone byłoby zwykłą tautologią.

Dyskusja w komisji była rzeczywiście spokojna,
minęły emocje dominujące w Środę na posiedzeniu
podkomisji. Najwyraźniej szukano w zgłoszonych
13 propozycjach brzmienia art. 15 łączących ele-
mentów.

Poseł Zbigniew Siemiątkowski zaproponował,
aby „„Kościoły i związki wyznaniowe były oddzie-
lone od władz publicznych”, poseł Aleksander

Kwaśniewski sygnował propozycje ekspertów,
m.in. o takim brzmieniu: „Kościoły i związki wy-
znaniowe korzystają z autonomii i niezależności
przy wykonywaniu swoich zadań (funkcji religij-
nych i organizacyjnych). Kościoły i związki wy-
znaniowe nie biorą udziału w sprawowaniu wła-
dzy publicznej. W celu realizacji praw człowieka
i potrzeb obywateli władze publiczne współdziała-
ją z Kościołami i związkami wyznaniowymi”.

W propozycji posła Włodzimierza Cimoszewicza
znalazł się m.in. taki fragment art. 15: „Kościoły
i związki wyznaniowe są oddzielone od władz pub-
licznych oraz są autonomiczne i niezależne w wyko-
nywaniu swoich zadań na zasadach określonych
w ustawie (swoich funkcji religijnych i organizacyj-
nych)”.

W czasie debaty okazało się, że to nie posłowie
SLD zaproponowali w środę jako pierwsi koncep-
cję określenia w konstytucji tego, w zakresie ja-
kich funkcji Kościoły i związki wyznaniowe mają
być autonomiczne i niezależne od państwa. Naj-
wcześniej taką propozycję złożyli profesorowie
M. Pietrzak i A. Rzepiński oraz dr W.T. Kulesza,
reprezentanci prezydenta. Fragment art. 15 dotyczący
tej sprawy został sformułowany następująco: „Koś-
cioły i związki wyznaniowe korzystają z autonomii
przy wykonywaniu swych funkcji religijnych i orga-
nizacyjnych”.

Przysłuchując się czwartkowej dyskusji trudno by-
ło mi oprzeć się wrażeniu, że to nie w SLD jest
głównie „rozchwianie nastrojów” wobec brzmienia
15 artykułu konstytucji. Kłopoty, jak się okazuje, ma
również strona kościelna. Być może również Unia
Wolności. Tadeusz Mazowiecki podkreśla np., że je-
go aktualny projekt zapisu art. 15 ma akceptację Koś-
cioła rzymskokatolickiego, a przecież w projekcie
konstytucji złożonym 29 kwietnia 1993 r. przez 63
członków Zgromadzenia Narodowego, pod którym
podpisali się posłowie i senatorowie Klubu Parla-
mentarnego Unii Demokratycznej, w art. 8 stwierdza
się: „Stosunki między państwem a Kościołem rzymsko-
katolickim oraz innymi Kościołami i związkami wy-
znaniowymi oparte są na zasadach rozdziału, nieza-
leżności i wzajemnego poszanowania”.

Wówczas „rozdział” nie drażnił?

Piotr Łapa

„Słowo. Dziennik Katolicki” 27.02.95

Tu nie ma kompromisu

Prace Komisji Konstytucyjnej parlamentu kon-
centrowały się w zeszłym tygodniu na problemie
żywo obchodzącym środowiska katolickie, wszys-
tkich ludzi wierzących, a mianowicie na stosun-
kach między Kościołem a państwem. Jak wiemy,
nie osiągnięto ostatecznie zgody co do sformułowa-

Prasa o pracach konstytucyjnych

 

 

nia, które byłoby możliwe do zaakceptowania dla
wszystkich uczestników tej trudnej debaty. Przede
wszystkim, trzeba to jasno powiedzieć, forsowana od
samego początku przez lewicę formuła mówiąca
o rozdziale czy o łagodniej może brzmiącym oddzie-
leniu Kościoła i państwa jest nie do przyjęcia dla
Kościoła katolickiego.

Dali temu wyraz obradujący właśnie w Warszawie
biskupi diecezjalni. Wypowiedź bpa Tadeusza Pie-
ronka, sekretarza generalnego Episkopatu, po raz
kolejny zresztą nie pozostawiła żadnej wątpliwości
co do niezłomności stanowiska Kościoła w tej spra-
wie na przyszłość. Choć, jak czytamy w prasie, kie-
rownictwo Komisji Konstytucyjnej zamierza w naj-
bliższych dniach nakłaniać Kościół do przyjęcia
kompromisowych rozwiązań, wiemy, że w tej spra-
wie kompromis nie jest dla Kościoła możliwy.

Ważą tu oczywiście historyczne doświadczenia
z epoki marksistowskiego komunizmu, choć nie tyl-
ko one. Wtedy formuła rozdziału symbolizowała wy-
łącznie wrogość ateistycznego państwa wobec insty-
tucji Kościoła, wobec wiary i traktowania ludzi wie-
rzących jako obywateli drugiej czy trzeciej kategorii,
otwierając na ośŚcież drogę władzy administracyjnej
państwa do ingerowania w wewnętrzne sprawy Koś-
cioła. Rozdział Kościoła i państwa oznaczał także
wtedy bezwzględne wyrugowanie Kościoła z życia
publicznego, oznaczał traktowanie wiary jako sprawy
prywatnej człowieka, która nie ma prawa manifes-
tować się w życiu społecznym, kulturalnym, polity-
cznym. Przecież, uważnie obserwując nasze życie
polityczne, poczynania parlamentarzystów z kręgu
lewicy laickiej, a także wyraźną linię mediów tej
orientacji, możemy się słusznie obawiać, że nie są
to tylko zaszłości historyczne. Ten kierunek myślenia
t działania ma i dziś swoich koryfeuszy, którzy umie-
ją wmawiać opinii publicznej obawy przed rzekomy-
mi ambicjami politycznymi Kościoła... Formuła roz-
działu traktuje Kościół przedmiotowo, a poza tym jej
konsekwencje rozciągają się w sposób negatywny
także na prawo ludzi Świeckich, do politycznego
działania.

Współczesny Kościół w swoim myśleniu o istocie
swych stosunków ze wspólnotą polityczną, jaką jest
państwo, jest wierny nauczaniu Soboru Watykań-
skiego II, który wypracował formułę najbardziej
szeroką, a zarazem precyzyjną i otwartą na pozyty-
wne skutki współistnienia tych dwu różnych co do
istoty organizmów. Ta formuła, zawarta w Konsty-
tucji pastoralnej „Gaudium et spes” (n. 76), spro-
wadza się do trzech podstawowych warunków: ich
niezależności, autonomiczności oraz zdrowej wza-
jemnej współpracy. Oto tekst z Konstytucji, który
warto chyba sobie dziś przypomnieć: „Wspólnota
polityczna i Kościół są w swoich dziedzinach od
siebie niezależne i autonomiczne. Obydwie jednak
wspólnoty, choć z różnego tytułu, służą powołaniu
jednostkowemu i społecznemu tych samych ludzi.
Tym skuteczniej będą wykonywać tę służbę dla do-
bra wszystkich, im lepiej będą rozwijać między so-

107

bą zdrową współpracę, uwzględniając także okoli-
czności miejsca i czasu”.

Kościół przypomina nam dziś te zasady — w swo-
im kolejnym starciu z lewicą, tym razem w sprawie
ustawy zasadniczej, a także w sprawie konkordatu.
Winniśmy te zasady dobrze znać i rozumieć, bo mo-
że jeszcze przyjdzie nam — społeczności katolickiej
— bronić ich w referendum konstytucyjnyrn.

Ada Szubowa

„słowo. Dziennik Katolicki” 27.02.95

Nie było zmiany stanowiska

„Słowo” rozmawia z ks. prof. dr. hab. Józefem
Krukowskim uczestniczącym w pracach Komisji
Konstytucyjnej z upoważnienia Sekretariatu Episko-
patu Polski

e Już drugie posiedzenie Komisji Konstytucyj-
nej nie zakończyło się przyjęciem projektu zapisu
o stosunku między państwem a Kościołem W no-
wej konstytucji. Co uniemożliwia posłom podjęcie
decyzji?

-—- Przyczynę widzę w dwóch rozbieżnych dąże-
niach. Jednym z nich jest dążenie przewodniczącego
Komisji do uzyskania consensusu w tej kwestii. Dru-
gim zaś, fundamentalizm posłów z SLD i Unii Pracy,
którzy w swoich propozycjach ustłują przemycić do
nowej konstytucji demokratycznej Polski zasady us-
trojowe, które zostały wpisane do konstytucji totali-
tarnej PRL, a zaczerpnięte z konstytucji stalinow-
skiej. Na takie propozycje nie wyrażają zgody przed-
stawiciele Kościołów, którym zgodnie z regulami-
nem prac Komisji przysługuje prawo do wyrażenia
opinii. Także zdecydowanie negatywnie ustosunko-
wują się do nich posłowie opozycji parlamentarnej,
w szczególności poseł Tadeusz Mazowiecki.

e Według relacji prasowych, nowym elementem
dyskusji była kompromisowa, jak ją określono,
propozycja przedstawicieli Kościołów, przyjmu-
jąca formułę oddzielenia Kościołów od państwa.
22 bm. propozycja ta została zgłoszona, a następ-
nego dnia wycofana. Czy rzeczywiście była to
zmiana stanowiska Episkopatu i dlaczego propo-
zycję wycofano?

— W informacjach prasowych nie tylko zbyt upro-
szczono tę propozycję, ale i zmieniono jej sens. Wy-
akcentowano, że przedstawiciele Kościołów zgodzili
się na wpisanie do projektu konstytucji zasady od-
dzielenia Kościołów od państwa, a jednocześnie wy-
izolowano ją z całego kontekstu. Propozycja obejmo-
wała bowiem dwa ważne elementy. Po pierwsze, nie
tylko zasadę oddzielenia Kościoła od państwa, ale
jednocześnie gwarancję poszanowania autonomii
i niezależności Kościołów w wypełnianiu swoich za-
dań. Po drugie zasadę, iż sytuację prawną Kościoła

108

 

 

katolickiego określa umowa międzynarodowa ze Sto-
licą Apostolską.

W istocie rzeczy nie była to zmiana stanowiska
Episkopatu, lecz sprawdzian dobrej woli i intencji
posłów lewicy. Wcześniej bowiem twierdzili, że
do formuły oddzielenia Kościoła od państwa
przywiązują inny sens niż władze komunistyczne
w konstytucji PRL. Tymczasem w dyskusji, jaka
wywiązała się w następstwie tej propozycji, oka-
zało się co innego. Posłowie lewicy zdecydowanie
wystąpili przeciwko uznaniu autonomii i niezależ-
ności Kościoła i państwa, zażądali bowiem w tek-
ście konstytucji zapisu ograniczającego zadania Koś-
cioła.

Ponadto posłowie lewicy parlamentarnej stanow-
czo sprzeciwili się wpisaniu do konstytucji jasnej
gwarancji, że sytuację prawną Kościoła określa
umowa międzynarodowa ze Stolicą Apostolską,
czyli konkordat, dopuszczając jedynie taką możli-
wość, Ratyfikacja konkordatu pozostałaby więc na-
dal pod znakiem zapytania, jako przedmiot doraźnej
gry politycznej. Sądzę, że w ten sposób posłowie
lewicy jasno określili swoje stanowisko w tej spra-
wie. Stało się bowiem rzeczą oczywistą, jakie in-
tencje kryją się za propozycją wpisania do konsty-
tucji formuły oddzielenia Kościoła od państwa.
Przyjęcie tej formuły dawałoby władzom państwo-
wym podstawę do kontynuacji w przyszłości takiej
polityki wobec Kościoła, jaka była uprawiana
w okresie komunistycznym.

e Aleksander Kwaśniewski, przewodniczący
Komisji Konstytucyjnej, uznał jednak te dwudnio-
we obrady za niezwykle potrzebne. Czy podziela
Ks. Profesor ten pogląd?

— Rzeczywiście był to doskonały sprawdzian in-
tepcji posłów lewicy wobec Kościoła.

e Dziękuję za rozmowę.

Rozmawiał Adam Kruczek

„Dziennik Poznański” 1.03.95

Kwestia li tylko definicji?

Z, posłanką Krystyną Łybacką (SLD)
o kontrowersjach wokół zapisów
nowej konstytucji

— Tadeusz Mazowiecki w „„Pulsie dnia” oskar-
żył SLD o dwie twarze, tzn. prezentowanie
w Komisji Konstytucyjnej chęci consensusu,
a w podkomisji głosami posłów Krystyny Ły-
backiej i Włodzimierza Cimoszewicza o „mruga-
nie” do elektoratu wrogo nastawionego do Koś-
cioła katolickiego. Jak to było z owym „mruga-
niem”?

— Nigdy nie byłam i nie jestem antyklerykalna.
To po pierwsze. Po drugie rozróżniam Kościół jako

Prasa o pracach konstytucyjnych

 

zgromadzenie wiernych i Kościół jako instytucję re-
prezentowaną przez hierarchię. Zaś podczas obrad
podkomisji, pracującej nad sprecyzowaniem zapisu
zawierającego formułę stosunków między państ-
wem a Kościołem oraz związkami wyznaniowymi
po prostu zapytałam, co Kościół — a właściwie jego
hierarchia — rozumie pod określeniem „swoje za-
dania”.

— Ale chodziło o zakres niezależności i auto-
nomii Kościoła.

— Eksperci i przedstawiciele różnych Kościołów,
w tym katolickiego i prawosławnego, zaproponowa-
li zapis, że: „Kościoły i związki wyznaniowe są
oddzielone od państwa oraz są autonomiczne i nie-
zależne w wykonywaniu swoich zadań. Wraz
z Włodzimierzem Cimoszewiczem proponowaliś-
my, aby uściślić owe „swoje zadania ; by autono-
mia i niezależność Kościołów dotyczyła spełniania
ich funkcji religijno-organizacyjnych. Wobec zde-
cydowanego protestu części członków podkomisji
(m.in. Tadeusza Mazowieckiego) zapytałam, czy
owe zadania należy rozumieć szerzej aniżeli funkcje
religijne i organizacyjne. Jeżeli owa autonomia
i niezależność dotyczyć mogłaby także spraw gos-
podarczych, to znaczy, że Kościół może prowadzić
działalność gospodarczą w sposób autonomiczny
i niezależny od systemów podatkowych i innych
obciążeń finansowych stosowanych w państwie.
Uważałam i uważam, że bez sprecyzowania zakresu
owych „zadań” nie można proponowanego zapisu
zaakceptować. Nie może być państwa w państwie.
Kościół jest silny aprobatą wiernych, ale wierni nie
aprobują jego ekspansywnej działalności. Ksiądz
prof. Krukowski następnego dnia prywatnie przy-
znał mi rację, ale oficjalnie...

— Ksiądz prof. Józef Krukowski — jak sam
o sobie powiada — jest tylko ekspertem, a nie
przedstawicielem Kościoła.

— Toteż nazajutrz ksiądz profesor wycofał swoje
poparcie dla owego „oddzielenia Kościoła od pań-
stwa. Kolejna wersja mówiła o „oddzieleniu” Ko-
Ścioła nie od państwa, ale od organów tego pań-
stwa...

— Dla Kościoła i jego zwolenników słowo „„roz-
dział” czy „oddzielenie” jest nie do przełknięcia.
Bp Pieronek, sekretarz Episkopatu twierdzi, że
rozdział wynika w sposób naturalny z samej za-
sady autonomii i wobec tego zapis taki nie jest
potrzebny.

— Uczelnie wyższe też mają autonomię, ale to nie
znaczy, że są oddzielone od państwa...

— Nie była to jedyna kontrowersja.

—- Nie. Kolejna dotyczy konkordatu. W zapisie
konstytucyjnym, regulującym stosunki na linii Koś-
ciół>państwo, Kościół katolicki potraktowany został
szczególnie. Jeden zapis tylko jego dotyczy i według
propozycji tegoż Kościoła powinien stanowić, że
wzajemne stosunki między państwem a Kościołem

reguluje ustawa oraz ustawa międzynarodowa, czyli
konkordat. Stoję na stanowisku, że słowo „oraz na-

Prasa o pracach konstytucyjnych

 

 

leży zastąpić słowem „lub”. To znaczy, że sytuację
prawną Kościoła może — ale nie musi —
regulować konkordat. Stolica Apostolska podpisała
konkordat z Portugalią i Hiszpanią i w konstytucji
żadnego z tych państw nie ma wpisanego konkordatu
jako normy prawnej, regulującej wzajemne stosunki,
natomiast w konstytucji portugalskiej podkreślono
rozdział tych instytucji.

— Na zakończenie programu (chodzi o cytowa-
ny na wstępie „Puls dnia”) Mazowiecki na pyta-
nie, czy na forum Komisji Konstytucyjnej moż-
liwy jest consensus, odpowiedział: nie”. Towarzy-
szący mu poseł SLD Jerzy Jaskiernia stwierdził,
że raczej tak. Podczas obrad podkomisji Mazo-
wiecki groził przeniesieniem sporu na referen-
dum...

— Mogę odmówić komentarza?

— Pani wola. Dziękuję za rozmowę.

Bogna Wojciechowska

„Życie Warszawy” 23.02.95

Konstytucja

Państwo ochroni własność oraz pracę

Dziś kończy się kolejny etap prac komisji konsty-
tucyjnej nad kształtem nowej ustawy zasadniczej.
Tematem trzydniowego posiedzenia komisji jest
przegłosowanie tej części przyszłej konstytucji, która
reguluje podstawy ustroju. Jej trzy artykuły związane
są z gospodarką.

Kapitalizm z domieszką socjalizmu

Zmiany, które zostały przyjęte przez komisję, są
bardziej prokapitalistyczne niż można się było tego
spodziewać po układzie sił w parlamencie.

— Trochę gorzej wyglądają jednak propozycje za-
warte w drugiej części ustawy, która jest bardziej
szczegółowym rozwinięciem przyjętych już artyku-
łów — dowiedzieliśmy się ze źródeł zbliżonych do
Komisji Konstytucyjnej. Zawiera ona prawa i wol-
ności ekonomiczne. Zdaniem naszego rozmówcy, So-
cjalizm widać tam w postaci anachronicznych zapi-
sów o prawie do bezpłatnej opieki zdrowotnej czy
Świadczeń socjalnych.

W części określającej zasady ustroju komisja przy-
jęła jednak bardzo dobre propozycje podkomisji re-
dakcyjnej. W zaakceptowanej wersji własność i dzie-
dziczenie jest chronione przez państwo. Wywłasz-
czenie jest dopuszczalne tylko na cele publiczne i za
słusznym odszkodowaniem. Na uwagę zasługuje
fakt, że z projektu zniknął proponowany przez SLD
podział na różne rodzaje własności. Postkomuniści
chcieli ją bowiem podzielić na ogólnonarodową, gru-

pową i prywatną.

|

 

Nazen

 

109

Praca nie będzie uprzywilejowana

Kolejny artykuł stanowi, że Rzeczpospolita Polska
zapewnia swobodę działalności gospodarczej. Jej
ograniczenie jest dopuszczalne tylko na drodze usta-
wowej i tylko ze względu na ważny interes publicz-
ny. Przepis ten, mimo że został przegłosowany, budzi
pewne obiekcje wśród obserwatorów, którzy boją SIĘ,
że może być nadużywany przez administrację pań-
stwową.

Kolejny z gospodarczych artykułów zapewnia
ochronę pracy przez państwo, ale nie czyni z niej
podstawy ustroju. Dzięki temu praca nie jest uprzy-
wilejowana.

Zdaniem obserwatorów, tak korzystne zapisy gos-
podarcze były możliwe tylko dzięki temu, że przy-
gotowując jednolity projekt (w wariantowym ujęciu)
ustawy zasadniczej, komisja poszła w kierunku roz-
wiązań możliwych do przyjęcia przez większość spo-
łeczeństwa, a nie kierowała się tylko „nie zawsze
mądrymi” propozycjami zawartymi w siedmiu pro-
jektach ustawy konstytucyjnej.

MF

„Kurier Poranny” 23.02.95

Gospodarka w projekcie Konstytucji RP

Fundament wolnego rynku?

Kierownictwo Komisji Konstytucyjnej Zgroma-
dzenia Narodowego przyznaje, że prace nad pro-
jektem nowej ustawy zasadniczej są — we frag-
mencie odnoszącym się do gospodarki i finansów
— dość znacznie opóźnione. Po analizie dokonanej
przez Radę Strategii Społeczno-Gospodarczej wi-
dać, że również ich meritum pozostawia sporo do
życzenia.

— Nowoczesne standardy konstytucyjne wyma-
gają, aby podstawowe kwestie dotyczące gospodarki
kraju, a zwłaszcza jego finansów publicznych i dzia-
łania banku centralnego, znalazły swoje unormowa-
nia w ustawie zasadniczej — mówi podsekretarz
stanu z URM, dr Grzegorz Rykowski. — Z tą tezą
zgodzi się każdy. No — może z wyjątkiem skrajnych
liberałów. Stanowisko to podziela również Rada
Strategii Społeczno-Gospodarczej, niedawno nader
krytycznie rozpatrująca istniejące projekty konsty-
tucji.

Przedsiębiorstwo „Gospodarka Narodowa”?

Prof. Wacław Wilczyński, ekspert Rady, zwra-
ca uwagę na dysproporcję między objętością
i szczegółowością ustaleń proceduralnych, a bardzo
szczupłym i ogólnikowym traktowaniem kwestii

110

wm A: ENY W PO 4 W a AT

merytorycznych. Znajduje to np. swój wyraz w eks-
ponowaniu procedury powoływania prezesa NBP,
przy jednoczesnym pomijaniu postanowień doty-
czących obowiązków NBP w zakresie stabilności
stosunków pieniężnych. Jeden tylko projekt — SLD
-—- uważa Narodowy Bank Polski za wykonaw-
cę polityki monetarnej; nie podaje wszakże —
czyjej.

Zdaniem eksperta w niektórych projektach konsty-
tucji państwo jawi się nie tyle jako suweren, po-
wołany przez społeczeństwo do tworzenia warunków
gospodarowania, porządku prawnego i jego egzek-
wowania, co jako dyrektor przedsiębiorstwa pod na-
zwą „Gospodarka Narodowa”: Przynajmniej dwa
projekty (SLD i „Solidarność”) prezentują pań-
stwo przede wszystkim jako adresata roszczeń,
który powinien centralnie zapewnić ich zaspoko-
jenie”.

Prof. W Wilczyński opowiada się zarazem prze-
ciwko wpisaniu do konstytucji sformułowania „spra-
wiedliwość społeczna . Jego zdaniem to prawo po-
winno zapewnić taką sprawiedliwość, która zasługuje
na miano społecznej.

Dziesięć wartości

Członek Rady Strategii Społeczno-Gospodarczej,
prof. Cezary Kosikowski uważa, że w omawia-
nym tu obszarze do podstawowych wartości kon-
stytucyjnych demokratycznego państwa o gospo-
darce rynkowej należy współcześnie dziesięć nastę-
pujących kwestii: własność i inne prawa rzeczo-
we (ze szczególnym uwzględnieniem dziedzictwa
narodowego i majątku publicznego), ochrona Śro-
dowiska naturalnego i jego racjonalne wykorzy-
stanie gospodarcze, wolność pracy (zawodu),
ochrona mechanizmów rynkowych — zwłaszcza
konkurencji, ograniczony prawnie oraz wspierają-
cy rynek interwencjonizm państwowy, otwartość
na umiędzynarodowienie stosunków gospodar-
czych i finansowych, pewny i stabilny pieniądz,
jawne i efektywnie służące społeczeństwu finanse
publiczne; w warunkach polskich — również rol-
nictwo. |

Jego zdaniem — w konstytucji należy zaakcepto-
wać, że państwo polskie sprzyja i chroni rozwój me-
chanizmów rynkowych, zwłaszcza konkurencji.
Zwalcza natomiast wszelkie przejawy jej eliminowa-
nia i ograniczania (monopolizacja) oraz uprawiania
w sposób nieuczciwy.

Swego rodzaju przeciwieństwem mechanizmów
rynkowych jest interwencjonizm państwowy. Prof.
C. Kosikowski sądzi, że w kraju zmieniającym typ
gospodarki z centralnie sterowanej na rynkową nie
można abstrahować od gospodarczej roli państwa
i pomijać tego problemu w konstytucji. Skoro gos-
podarka ma mieć charakter rynkowy — legitymiza-
cja prawna dla działań państwa w jej obrębie jest
konieczna.

Prasa o pracach konstytucyjnych

ae nam A am i 4 A TAAA A W A A R M NA

Ach, ten budżet

Zdaniem prof. C. Kosikowskiego ze względu na
ekonomiczne i polityczne znaczenie budżetu pań-
stwa zasady i procedura budżetowa powinny być
w konstytucji określone szczególnie dokładnie. Po-
nadto budżet stanowi potencjalne Źródło konfliktów
1 manipulacji politycznych o bardzo poważnych
skutkach. Z tych wszystkich względów prof. C. Ko-
sikowski proponuje poświęcić znacznie większą niż
dotąd uwagę specyfice ustawy budżetowej, a także
takim zagadnieniom, jak deficyt budżetowy i jego
granice oraz dopuszczalny stopień zadłużenia we-
wnętrznego (kredyt publiczny) i zewnętrznego (kre-
dyty i pożyczki zagraniczne). Konsekwencją tych
uregulowań powinien być właściwy podział kompe-
tencji i odpowiedzialności za stan finansów publicz-
nych.

Prof. J. Kaleta uważa ponadto, że budżet państwa
powinien — jako plan — dotyczyć zawsze przy-
szłoŚści, a nigdy — przeszłości. Dotychczasowa pra-
ktyka uchwalania i zatwierdzenia w Polsce ustawy
budżetowej przez prezydenta dopiero w lutym, a na-
wet w marcu roku budżetowego, oddala ustalenie
planów dochodów i wydatków budżetowych jedno-
stek i zakładów budżetowych dopiero na kwiecień.
W związku z powyższym ekspert proponuje takie
przyspieszenie terminów opracowania budżetu i je-
go uchwalenia, aby zapewnić ogłoszenie i wejście
w życie ustawy budżetowej przed rozpoczęciem ro-
ku budżetowego. A więc — tak, jak to jest pra-
ktykowane w ogromnej większości krajów zacho-
dnich. |

Podatki

Regulacje dotyczące systemu podatkowego powin-
ny — zdaniem prof, J. Kalety — przesądzać o zrów-
naniu wszystkich sektorów własności. Profesor uwa-
ża, że konieczne są postanowienia mówiące, iż: po-
datki i opłaty mogą być wprowadzone tylko na
mocy ustaw; niezbędna jest stabilizacja reguł poli-
tyki podatkowej w dłuższych okresach; wysokość
podatków i innych obciążeń publicznych nie może
być zmienna w ciągu roku.

W opinii eksperta — celowe jest również wpro-
wadzenie do konstytucji normy, że zysk i majątek
przeznaczony na konsumpcję jest wyżej opodatkowa-
ny niż przeznaczony na inwestycje.

Bank centralny

Proponuje on również nieco inne niż obecnie
usytuowanie NBP jako centralnego banku pań-
stwa. Zgodnie z tymi propozycjami działalność
NBP podlegałaby nadzorowi Sejmu, a bank —
choć niezależny w pełnieniu swych funkcji — zo-
stałby zobowiązany do współdziałania z Radą Mi-

Prasa o pracach konstytucyjnych

nistrów w zakresie polityki gospodarczej i finan-
sowej państwa. Sejm — wraz z budżetem —
uchwalałby załeżenia polityki pieniężnej, wiążące
dla NBP.

Zdaniem prof. J. Kalety, prezesa NBP powinien
powoływać i odwoływać Sejm na wniosek rady ban-
ku, wyłonionej spośród wybitnych specjalistów przez
prezydenta, Sejm i Senat. Dotychczasowa praktyka
powoływania” prezesa NBP przez prezydenta jest
— w Opinii eksperta — niewłaściwa, ponieważ trud-
no jest .zapewnić realizację uchwał Sejmu.

Preambuła — całkiem nowa

Na uwagę zasługuje propozycja prof. W. Wilczyń-
skiego zupełnie innego potraktowania konstytucyjnej
pregmbuły, niż czynią to wszyscy jej dotychczasowi
autorzy. |

Profesor proponuje wprowadzić do preambuły
sformułowania przypominające o kluczowych,
długofalowych obowiązkach gospodarczych naro-
du, traktowanego jako wspólnota trwająca dłużej
niż jedno pokolenie: obowiązku racjonalnego wy-
korzystywania zasobów i ochrony środowiska na-
.turalnego.

Marek Burczyk (PAI)

„Życie Gospodarcze” 26.02.95 |

Rada Strategii Społeczno-Gospodarczej

Umowa społeczna?

„CGrospodarka w projektach konstytucji” była
tematem obrad Rady Strategii Społeczno-Gospo-
darczej przy Radzie Ministrów. Członkowie rady
zgodnie podzielili pogląd, że zarówno w siedmiu
projektach konstytucji, jak i w już ujednoliconym
projekcie dyskutowanym w Komisji Konstytucyj-
nej Zgromadzenia Narodowego zagadnieniom gos-
podarki i finansów publicznych poświęcono zbyt
mało uwagi.

Jakie zagadnienia dotyczące gospodarki należy
uznać za wartości konstytucyjne, rada nie miała
wątpliwości. Wymieniano w dyskusji takie tradycyj-
ne wartości, jak własność, praca, wolność gospodar-
cza, ochrona mechanizmów rynkowych, a zwłasz-
cza konkurencji, prawnie ograniczony interwencjo-
nizm państwowy, pewny i stabilny pieniądz czy
wreszcie — rolnictwo. Kwestią dyskusyjną było na-
tomiast to, jak owe wartości powinny być ujęte
w konstytucji.

Bezdyskusyjną sprawą była potrzeba bardziej
szczegółowej — od tej, jaką proponuje obecnie dys-
kutowany projekt konstytucji — regulacji zagadnień,
dotyczących finansów publicznych.

111

— Nie ma nowoczesnego państwa bez sprawnych
finansów publicznych — stwierdził prof. Stanisław
Owsiak. Podkreślano także celowość dokładnego
określenia w konstytucji podstawowych zasad budże-
towych, jak również uregulowania budżetowej pro-
cedury wg Światowych standardów,

— Konstytucja powinna określać pryncypia, a nie
szczegóły — stwierdził prof. Wacław Wilczyński. —

- Nadmierna szczegółowość zapisów dotyczących gos-

podarki może bowiem być barierą dla wielu niezbęd-
nych decyzji. Przy tym znamienne jest — kontynuo-
wał prof. Wacław Wilczyński — że wszystkie pro-
jekty konstytucji, akcentując cechy ogólnoustrojowe,
takie jak wolność, własność czy swoboda działalno-
Ści gospodarczej, nie wskazują na to, co jest pod-
stawą gospodarki rynkowej, a więc na dominację me-
chanizmu rynkowego jako głównej formy funkcjono-
wania gospodarki.

Reprezentujący BCC Jeremi Mordasewicz zwró-
cił uwagę, że w proponowanych zapisach dotyczą-
cych gospodarki brakuje równowagi w traktowaniu
przedsiębiorców i pracobiorców, tak że proponowane
zapisy przypominają mu „konstytucję ludu pracują-
cego .

Najwięcej miejsca w dyskusji zajęła właśnie kwes-
tia podejścia do pracy, praw socjalnych i ekonomicz-
nych. Za mało jest w projekcie konstytucji zapisów
gwarantujących podmiotowość pracowników. Pod-
kreślano, że konstytucja powinna gwarantować pra-
wo do pracy, a z tego, jak prawo to jest realizowane,
rozliczany powinien być rząd. Za zasadne uznano też
umieszczenie w konstytucji zapisu mówiącego
o sprawiedliwości społecznej. Choć — na co także
żwracano uwagę — konstytucja powinna unikać sfor-
mułowań wątpliwych, a do takich właśnie zaliczyć
można „Sprawiedliwość społeczną”. Przymiotnik
„Społeczna może bowiem sugerować sprzeczność
między sprawiedliwością w ogóle a sprawiedliwością
społeczną, co może rodzić chęć do obchodzenia pra-
wa w imię sprawiedliwości społecznej. Podobne
uwagł odnosiły się do takich sformułowań, jak „słu-
szne wynagrodzenie” czy „sprawiedliwe odszkodo-
wanie”.

Na to jednak, jakie i jak sformułowane zapisy
znajdą się w projekcie konstytucji — podkreślano
w dyskusji — nie bez wpływu pozostaje sprawa wy-
boru opcji politycznej. Czy powinna to być konstytu-
cja dla całego narodu, mająca charakter swoistej
umowy społecznej, a sam proces jej tworzenia po-
winien być procesem dochodzenia do politycznego
kompromisu pomiędzy różnymi opcjami? Czy będzie
to konstytucja państwa obywatelskiego, czy państwa
nadopiekuńczego” Przy czym — na co zwrócił uwa-
gę prof. Andrzej Koźmiński prowadzący posiedze-
nie rady — konstytucja powinna raczej zawierać
gwarancje procesu transformacji gospodarki, a nie
gwarancje socjalne. I to, wg prof. Koźmińskiego, jest
właśnie kwestią wyboru politycznego.

W ujednoliconym projekcie konstytucji wyraźnie
bowiem rysują się dwie orientacje: jedna o charak-

112

terze mikroekonomicznym, dla której wartością na-
czelną jest wprowadzenie mechanizmu rozwoju
przedsiębiorczości, tworzenia nadwyżki na poziomie
mikroekonomicznym, i druga — o charakterze mak-
rospołecznym, której sferą zainteresowania jest spo-
łeczeństwo. Problem osiągnięcia kompromisu w wy-
borze między tymi dwiema orientacjami powinien
być sprawą pierwszorzędnej wagi dla twórców kon-
stytucji.

(a)

„RZzeczpospolita” 28.02.95

Ochrona pracy w konstytucji

Czy nowa konstytucja okaże się „zbyt ciasna”,
żeby pomieścić pakiet praw socjalnych związa-
nych z pracą: zatrudnieniem, wynagrodzeniem,
ochroną pracowników, a zwłaszcza ich zdrowia
w miejscu pracy, oraz zabezpieczeń społecznych?
Propozycje konkretnych zapisów, złożone przez
głównego inspektora pracy w Prezydium Sejmu
i w Komisji Konstytucyjnej Zgromadzenia Naro-
dowego, spotkały się z polemiką dotyczącą meri-
tum, a także zostały ocenione jako „zbyt szero-
kie”. Zarówno kontrpropozycje Komisji ds. Re-
formy Prawa Pracy, jak i próba zsyntetyzowania
projektu GIP, podjęta w Komisji Konstytucyjnej,
są z kolei nazbyt „wąskie”.

Zrozumiałą ostrożność w tej dziedzinie dyktuje
obawa przed wpisaniem do konstytucji zobowiązań,
których egzekwowanie może się okazać trudne lub
niemożliwe (jak np. zagwarantowanie prawa do pra-
cy), albo praw „pustych”, jakimi grzeszyła np. kon-
stytucja PRL. Z drugiej strony jednak właściwe było-
by takie ujęcie w konstytucji problemów ochrony
pracy, które stwarzałoby możliwość ich uszczegóło-
wienia w ustawach, a przede wszystkim wskazywało-
by prawodawcy właściwy kierunek. — W przeciw-
nym razie prawo mogłoby podążyć innym torem
— mówi dr Tadeusz Sułkowski, główny inspektor
pracy.

Analiza porównawcza europejskich ustaw zasadni-
czych wykazała taką oto prawidłowość: w konsty-
tucjach młodych demokracji prawa socjalne są z re-
guły określane w sposób obszerny i szczegółowy.
Sprawy ochrony pracy w bardzo szerokim ujęciu
występują np. w konstytucjach Włoch, Hiszpanii
i Portugalii. Projekt zapisów konstytucyjnych, opra-
cowany w Państwowej Inspekcji Pracy, uwzględnił
międzynarodowe dokumenty, w tym przyjęty przez
ONZ pakt ekonomicznych, socjalnych i kultural-
nych praw człowieka z 1966 roku, ratyfikowany
przez Polskę w 1977 roku, pakiet konwencji (rów-
nież przyjętych przez Polskę) Międzynarodowej Or-
ganizacji Pracy oraz Europejską Kartę Socjalną,
którą Polska ma zamiar ratyfikować.

Prasa o pracach konstytucyjnych

Wszystkie te dokumenty mówią wprost o prawie
do pracy — zapewniającej utrzymanie oraz swobod-
nie, bez żadnej dyskryminacji (np. z powodu płci
albo wieku), a także bez przymusu, wybranej. Projekt
głównego inspektora pracy sformułował to prawo
w trzech wariantowych ujęciach. — Zapisów tych
nie należy postrzegać — zastrzega Tadeusz Sułkow-
ski — jako praw podmiotowych, czyli stwarzających
obywatelom podstawę do bezpośrednich roszczeń.
Ani też jako bezpośrednich zobowiązań państwa do
zapewnienia wszystkim pracy. Oznacza to jedynie
prawo obywateli do utrzymywania się poprzez pracę.
Władze państwowe byłyby natomiast zobowiązane
do podejmowania działań prawnych i ekonomicz-
nych na rzecz aktywnej polityki zatrudnienia, do
udzielania pomocy osobom pozostającym nie z włas-
nej woli bez pracy oraz do określania minimalnego
wynagrodzenia za pracę i do wydawania odpowied-
nich przepisów, na przykład zakazu pracy przymu-
sowej oraz dyskryminacji w stosunkach pracy.

Jakie znaczenie miałoby włączenie takich zapisów
do konstytucji? Zobowiązanie w ustawie zasadniczej
władz państwowych do prowadzenia polityki aktyw-
nego zatrudnienia poddałoby je pod tym względem
kontroli społecznej i umożliwiłoby egzekwowanie ta-
kiego zobowiązania. Inaczej mówiąc, rząd, który by
takiej polityki nie prowadził, naraziby się na zarzut
opozycji, że nie wywiązuje się ze swego podstawo-
wego obowiązku.

Ustawowy zakaz dyskryminacji; w stosunkach
pracy dotyka ona np. kobiet lub osób niemłodych na
całym Świecie i nigdzie nie udało się jej do końca
zwalczyć. Z mniejszym lub większym powodzeniem
podejmuje się jednak próby ograniczenia tego zjawt-
ska. Zapis konstytucyjny, zwłaszcza gdyby po nim
następowało uszczegółowienie tego zakazu w usta-
wach, osobom i grupom dyskryminowanym dałby
szansę przeciwdziałania. Zgromadzenie i przedsta-
wienie dowodów dyskryminacji umożliwiłoby do-
chodzenie swych praw przed sądem. Zapis taki uru-
chomiłby nadto czynniki kontroli, której sprawowa-
nie obecnie jest w zasadzie nierealne.

O szczegółach konstytucyjnego uregulowania
spraw ochrony pracy należy dyskutować. Projekt
głównego inspektora pracy ujmuje je szeroko.
— Może zbyt szeroko — mówi dr Sułkowski, który
jednak obawia się, że dążenie do zwięzłości ustawy
zasadniczej, skądinąd zrozumiałe, może wyłączyć
z niej wiele problemów, które przyniosła ze sobą
transformacja ustrojowo-gospodarcza. Od 1990 ro-
ku liczba podmiotów gospodarczych wzrosła prawie
dziesięciokrotnie; jest to jedna z istotnych przyczyn
regresu w przestrzeganiu prawa pracy, jaki się
w tym czasie dokonał. Badania opinii społecznej —
np. ankieta przeprowadzona w listopadzie 1993 ro-
ku przez CBOS — wykazują, że większość społe-
czeństwa (we wspomnianej ankiecie 87 procent py-
tanych) opowiada się za zapisaniem w konstytucji
prawa do pracy.

Andrzej Kaczyński

Prasa o pracach konstytucyjnych

 

Zmiana prawa podatkowego większością 2/3?
Kalendarz budżetowy w konstytucji

Sejmowa Komisja Polityki Gospodarczej, Bu-
dżetu i Finansów uznała, że w przyszłej konstytu-
cji powinien być zapisany „kalendarz budżetowy”.
Posłowie chcieliby rozpoczynać prace nad projek-
tem ustawy budżetowej od i września, by ustawa
mogła wejść w życie z początkiem roku. Wicemi-
nister finansów Elżbieta Chojna-Duch powiedzia-
ła, że zapisy dotyczące budżetu i podatków zamie-
szczone w wariantowym projekcie konstytucji są
nieprecyzyjne i zaproponowała, że jej resort opra-
cuje je na nowo.

Posłowie komisji na razie jedynie wymienili po-
glądy na temat konstytucyjnych zapisów dotyczących
finansów publicznych. Wszyscy byli zgodni, że przy-
szła konstytucja powinna zawierać precyzyjnie zapi-
sany kalendarz uchwalania budżetu. Tadeusz Syryj-
czyk (UW) zaproponował, by zobowiązać rząd do
przesyłania projektu do Sejmu do końca czerwca.
Sejm miałby na prace nad budżetem 4 miesiące. Po-
słowie nie byli jednak zgodni, czy w konstytucji po-
winien się znaleźć zapis umożliwiający rozwiązanie
Sejmu, jeśli nie uchwali on w terminie budżetu.
Uchwalanie budżetu zawsze jest procesem politycz-
nym, ale w naszej sytuacji budżet staje się instrumen-
tem szantażu politycznego — stwierdziła Wiesława
Ziółkowska (UP).

Wątpliwości wzbudziła też propozycja Jerzego Ey-
symontta (republikanie), by wprowadzić do konsty-
tucji przepisy ograniczające dopuszczalność deficytu
budżetowego. Dzisiaj wydawać się to może absur-
dalne, ale na pewno byłoby to zdrowe dla finansów
państwa — stwierdził. W opinii Wiesławy Ziółkow-
skiej taki zapis byłby na razie zbyt ryzykowny.
T. Syryjczyk natomiast uważa, że konstytucja powin-
na wymuszać na rządzie i parlamencie uchwalenie
zrównoważonego budżetu.

J. Eysymontt zaproponował, by prawo podatkowe
było zebrane w jednym wydzielonym rozdziale kon-
stytucji. Jego zdaniem, powinno się także ograniczyć
swobodę nowelizacji ustaw podatkowych. Może po-
winniśmy się zastanowić, czy prawo podatkowe i jego
zmiany nie powinny być uchwalane kwalifikowaną
większością 2/3 — oświadczył. Nie wiadomo jednak,
czy jest to możliwe. Czy jest możliwe, by jedne usta-
wy były ważniejsze od innych — pytał Wojciech Ar-
kuszewski (UW).

Wiceminister finansów Elżbieta Chojna-Duch
skrytykowała zapisy dotyczące polityki finansowej
państwa zamieszczone w wariantowym projekcie
konstytucji. Uznała, że ich język jest nieprawniczy
i niejasny. Ministerstwo Finansów przełoży tekst
tych zapisów na język prawa finansowego i przed-

113
stawi posłom. Komisja Polityki Gospodarczej, Bu-
dżetu i Finansów postanowiła, że przekaże swoje su-
gestie dotyczące konstytucyjnych przepisów związa-
nych z finansami publicznymi po następnym spot-
kaniu.

SAN

„Nowa Europa” 22.02.95

Granice misji ekonomicznej i socjalnej państwa
w konstytucji (1)

Znaczenie przepisów

Tadeusz Syryjczyk

Różny jest status przepisów konstytucyjnych
dotyczących rozmaitych obszarów życia państwa.
Niewątpliwie misją państwa jest czuwanie nad
bezpieczeństwem obywateli oraz poszanowaniem
ich praw.

Rozmaicie jednak rozumiemy misję socjalną, eko-
nomiczną, obronną lub porządkową, a więc zapew-
nienie bezpieczeństwa wewnętrznego. Np. ta ostat-
nia, choć oczywista, niekoniecznie bywa w ogóle za-
pisywana. Nikt nie próbuje wprowadzić przepisów,
które umożliwiałyby obywatelowi dochodzenie od
państwa odszkodowania za zaniedbania w jej reali-
zacji (np. za pobicie przez chuligana na ulicy). Na-
tomiast z zasady zważamy, aby państwo realizując
swe zadania z zakresu bezpieczeństwa i wymiaru
sprawiedliwości nie naruszyło praw jednostki.

W sprawach socjalnych potoczne myślenie jest od-
wrotne. Uprawnienia obywatela do korzystania z po-
mocy państwa są zapisane jasno i obudowane usta-
wami. Obywatel może dochodzić swych racji. W za-
sadzie brak jest zabezpieczeń przed nadmierną eks-
pansją państwa, które w celu zaspokojenia różnych
potrzeb obciąża obywateli coraz większymi podatka-
mi, składkami itp.

Dyskusyjny zakres zasady solidarności

Paradoksalnie — brak jest ochrony mniejszości
wpłacającej do budżetu więcej niż z niego korzysta
przed większością, która wpłaca mniej lub w ogóle
nie partycypuje w jego dochodach, a w większym
stopniu korzysta ze Świadczeń państwa. Nie zamie-
rzam negować zasady solidarności społecznej, która
— z jakichkolwiek przesłanek by wychodziła — ma
swoje trwałe miejsce i musi znajdować odbicie
w prawie i konstytucji, chociaż dyskusyjny jest na
pewno jej zakres.

Ale nie można ignorować faktu, że może ona przy
pewnej przesadzie prowadzić do tego, że zanika
przedmiot redystrybucji, a jednocześnie pomoc pań-

114

stwa przestaje być wyrazem solidarności z tymi, któ-
rym się nie powiodło lub którzy nie są w stanie za-
robić na życie, a zaczyna być źródłem zwiększania
się liczby współobywateli, którzy wobec nikłej róż-
nicy między statusem materialnym, jaki mogą uzys-
kać pracując, a gwarancjami socjalnymi skłonni są
łatwo poniechać poszukiwania zajęcia zarobkowego
i zasilić armię klientów państwa opiekuńczego. Brak
ograniczenia tej kategorii wpływów politycznych
rożkłada państwo, gdyż elity polityczne koncentrują
się raczej na sprzyjaniu rewindykacji niż na tworze-
niu warunków rozwoju.

We współczesnych demokracjach problem ten na-
rasta w dwojaki sposób. Po pierwsze: na skutek sta-
rzenia się społeczeństw zwiększa się liczba osób,
które wyszły z wieku aktywności zawodowej, w po-
równaniu z liczbą pracujących. Po drugie: na skutek
narastania warstwy ludzi — znanej od dawna Ame-
ryce, a coraz bardziej widocznej w Europie — żyją-
cych obok cywilizacji. Ludzi, którzy nie widzą dla
siebie drogi dlatego, że nie chcą, lub dlatego, że już
w rodzinie nie zostali przygotowani do odpowiedzi
na wyzwanie, jakie niesie im cywilizacja oparta na
konkurencji.

Europa płaci za to spowolnieniem wzrostu i od-
daniem pierwszeństwa krajom Dalekiego Wschodu.
Co może znaczyć przewaga takiego myślenia dla
krajów postkomunistycznych, które nie mogą sobie
pozwolić nie tylko na zmniejszanie dystansu, ale na-
wet na poniechanie pracy na rzecz zmniejszenia dys-
tansu do krajów bogatych?

Z tego właśnie powodu trzeba spoglądać na do-
świadczenia innych krajów, ostrożnie traktować gwa-
rancje socjalne i nie zapominać o instytucjach służą-
cych stabilizacji gospodarki i tworzeniu warunków
wzrostu gospodarczego. Konstytucja nie powinna
być tworzona pod wrażeniem chwili, w której po-
wstaje. Ale jednak może warto pamiętać, że autorzy
wielkich konstytucji zawsze reagowali w pewnej
mierze na niedostatki przeszłości. Z, tego punktu wi-
dzenia konstytucja powstaje trochę późno. Kto dziś
pamięta wystarczająco dokładnie puste sklepy
w 1981 r. i inflację 1989 r.?

Nie sposób też pominąć kwestii praw i obowiąz-
ków — na ile wspólnota państwowa zobowiązuje.
Wszystko wskazuje na to, że coraz bardziej zbliżamy
się do sytuacji wzrastającego katalogu praw, niejas-
nej listy obowiązków i braku jakiejkolwiek refleksji
nad oczywistym faktem, że państwo nie może dać
więcej niż ma, a to czym dysponuje pochodzi od jego
obywateli i jest rezultatem wypełniania przez nich
różnych obowiązków.

Jakie funkcje zapisać?

Odpowiedź na pytanie, które funkcje państwa za-
pisać w konstytucji, powinna być warunkowana tak-
że tym, czy panuje zgoda co do tego, jak zapobiegać
złu, którego nawrotom chcemy się przeciwstawić. Po

Prasa o pracach konstytucyjnych

„mer o O, zj © A 0

I wojnie Światowej uważano, że łagodniejsza poli-
tyka monetarna może być ratunkiem dla gospodarki.
Dziś jest to pogląd egzotyczny. Płaca minimalna wy-
dawała się ważnym elementem prawa pracy. Dziś
jest to kwestia co najmniej kontrowersyjna — gwa-
rancja minimalnej płacy działa przeciw tworzeniu
nowych miejsc pracy i zatrudnieniu młodzieży do
nauki zawodu.

Problem zakresu przepisów konstytucyjnych moż-
na określić także jako zabezpieczenie społeczeństwa
przed chwilowymi szaleństwami aktualnej większo-
Ści. Idąc dalej — jako podjęcie próby zapisania in-
teresu obejmującego także przyszłe, długofalowe in-
teresy narodowe. A więc zapisanie „interesu narodo-
wego” jako interesu obejmującego nie tylko społe-
czeństwo takim, jakim ono jest dziś, ale rozumianego
jako wspólnota także „w czasie”, z myślą o przy-
szłych pokoleniach.

Najtrudniejszym problemem jest zapisanie praw
socjalnych. Tu najłatwiej popaść w pułapkę praw fik-
cyjnych. Jest paradoksem, że prawo do pracy: gwa-
rantuje np. konstytucja Hiszpanii, kraju, w którym
stopa bezrobocia przewyższa zdecydowanie Średnią
zachodniej Europy i USA. Jednocześnie bieżące do-
Świadczenie wskazuje, że bezrobocie spada szybciej
w USA niż w Europie Zachodniej, chociaż deklaracje
co do formalnej gwarancji prawa do pracy, a także
konstytucyjne ujęcie kwestii interwencji państwa na
rzecz zmniejszania bezrobocia stoi wyżej w Europie.

Znaczna część praw socjalnych jest skazana na
zapisy w postaci „państwo tworzy warunki do...”, Co
wobec wielości doktryn ekonomicznych i możliwych
odpowiedzi na pytanie, w jaki sposób najlepiej „two-
rzyć warunki...” znaczy bardzo mało w sensie praw-
nym. Jest więc raczej deklaracją intencji, o której
z góry wiadomo, że czas i zakres jej realizacji będzie
zależał od prowadzonej polityki, a jedyną możliwoś-
cią egzekwowania jest polityczna decyzja wyborcy.

Z odniesieniem do realiów

Paradoksalnie podobne uwagi można też odnieść
do misji ekonomicznej państwa — stabilność makro-
ekonomiczna, solidność pieniądza, ochrona zasobów
naturalnych — to także zadania, które mogą być roz-
maicie realizowane. Nie można zbyć problemu praw
socjalnych stwierdzeniem, że zagrażają one wprowa-
dzeniem do konstytucji praw fikcyjnych. Stąd celowe
jest rozważenie katalogu tych praw, odniesienie ich
do realiów.

Mówiąc realia, trzeba jednak mieć na uwadze:

e Faktyczne możliwości państwa. Jestem przeciw
gwarancjom, które będą nierealne w dłuższym hory-
zoncie czasowym.

e Przyjęte i zakorzenione w świadomości społe-
cznej zasady prawne. W takich sprawach jak prawo
do pracy czy pomocy społecznej nie ma aprobaty dla
całkowitej absencji państwa. Jednocześnie można
przyjąć zasadę pomocniczości: państwa powinno

Prasa o pracach konstytucyjnych

 

—- także w tym obszarze — być tyle, ile jest rzeczy-
wiście konieczne.

e Doświadczenia demokracji europejskich
i amerykańskiej odnośnie rzeczywistych skutków
różnych rozwiązań i gwarancji. Zwłaszcza warto
analizować przeciwskuteczność różnych rozwiązań,
aby unikać powielania formuł, które kilkadziesiąt lat
temu, pod wpływem ówcześnie dominujących poglą-
dów ekonomicznych, kwalifikowane były do kanonu
'praw, a dziś widać ich dysfunkcjonalność.

W świetle doświadczeń komunizmu — odnotowa-
nych także w nauce społecznej Kościoła (zwłaszcza
w Centissimus Annus) dużej rangi nabierają gwaran-
cje wolności ekonomicznej. Okazuje się bowiem, że
rozluźnienie ograniczeń w prowadzeniu działalności
gospodarczej oraz gwarancja stabilnych warunków

prawnych i dobrego pieniądza jest koniecznym wa-

runkiem poprawy poziomu życia. Liczne gwarancje,

etatyzm i ingerencja państwa w życie gospodarcze —

zarówno finansowa, jak i wyrażająca się w reglamen-
tacji, koncesjach i zezwoleniach nie są sposobem na
przezwyciężenie ubóstwa, ani niczego specjalnie nie
porządkują. Stąd potrzeba zagwarantowania w kon-
stytucji wolności ekonomicznej. Wyrazem tej gwa-
rancji powinien być przepis, że zakres stosowania
koncesji oraz zezwoleń na działalność gospodar-
czą określa ustawa.

Autor jest posłem na Sejm, ekspertem gospodarczym Unii Wol-
ności.

„Nowa Europa” 23.02.95

Granice misji ekonomicznej i socjalnej państwa
w konstytucji (2)

Ustrój gospodarczy
i podstawowe gwarancje

Tadeusz Syryjczyk

Na tle przedstawionego w poprzednim odcinku
znaczenia przepisów konstytucyjnych nasuwa się
pytanie o zapis „generalny” o ustroju gospodar-
czym państwa. Czy obok stwierdzenia, że RP jest
demokratycznym państwem prawnym konstytu-
cja powinna zawierać postulaty w rodzaju „spo-
łecznej gospodarki rynkowej” lub „„zrównoważo-
nego rozwoju”, czy też raczej zmierzać do okreś-
lania konkretnych mechanizmów.

Osobiście byłbym za takim generalnym sformuło-
waniem, pod warunkiem, że stopień zrozumienia
I powszechnej zgody co do znaczenia tych terminów
byłby zbliżony do rozumienia „demokratycznego
państwa prawa” na płaszczyźnie ustrojowej. IDo-
Świadczenie poucza, że idea. społecznej gospodarki
rynkowej jest w Polsce negowana i to przez tych,
którzy ją budowali.

om ar m a ZO 0

115
Z, dwoma ograniczeniami

Skłaniam się ku takiernu jej rozumieniu, z któregu
wynikałaby afinnacja rynku i solidarności społecz-
nej, której realizacja przez państwa ograniczona jest
na dwa sposoby:

s redystrybucja nie może hamować wzrostu gos-
podarczego i destabilizować pieniądza, gdyż w rezul-
tacie zatraca wtedy swój sens społeczny;

e trzeba unikać demoralizacji polegającej na tole-
rowaniu w skali szerszej niż marginalna nadużycia
sytuacji, w której opłacalne jest raczej poszukiwanie
pomocy w systemie socjalnym państwa niż podejmo-
wanie starań w celu zdobycia środków utrzymania.
Przekroczenie tej granicy ma wymiar moralny,
a w dłuższej konsekwencji także społeczny, gdyż
rozszerza sferę bezrobocia i utrwala postawy bierne,
prowadzące do ubóstwa. Następnie przychodzą kon-
sekwencje ekonomiczne, w postaci załamania wzros-
tu gospodarczego wskutek przeciążenia gospodarki.
- Wiele osób przekonuje, że takie właśnie rozumie-
nie nie jest wystarczająco powszechne. Sądzę więc,
że takie tezy, jak społeczna gospodarka rynkowa, po-
zostaną domeną programów politycznych, a nie ję-
zyka konstytucji. Osobiście jednak uważam, że „spo-
łeczna gospodarka rynkowa” jest zapisem prawidło-
wym, zakorzenionym w systemie wartości akcepto-
wanym społecznie, pomimo że panuje zamęt
pojęciowy.

Sformułowania projektu Unii Wolności i kręgów
gospodarczych określają jako „naczelne zasady” lub
„podstawy” ustroju gospodarczego pracę, włas-
ność i swobodę prowadzenia działalności gospo-
darczej. Te pojęcia także oddają istotę rzeczy, dob-
rze ukierunkowują ewentualne przyszłe orzecznictwo
Trybunału Konstytucyjnego, a ich znaczenie zdaje
się być dość jednolite. Jednocześnie są odpowiedzią
na brak poszanowania prawa własności i swobody
działalności gospodarczej przez lata PRL. Nie pomi-
jają szczególnego statusu pracy jako wyjątkowego
typu umowy. Jej wyróżnienie ma tradycję zarówno
międzywojenną, jak i solidarnościową, nie było też
negowane w czasach PRL.

Kwestia zrównoważonego rozwoju w kontekście
konieczności ochrony przez państwo dziedzictwa kul-
turowego i zasobów przyrody jest przykładem zapisa-
nia w konstytucji interesu narodowego, wychodzącego
ponad doraźne potrzeby społeczne i bieżącą politykę.
Ten proponowany przez środowiska ekologiczne prze-
pis stanowi — w moim przekonaniu — słuszne uzu-
pełnienie generalnego zapisu ustrojowego.

Z powyższych klauzul generalnych oraz dotych-
czasowych rozważań wynika celowość zamieszcze-
nia w konstytucji, w różnych rozdziałach, przepi-
sów dotyczących:

e prawa pracy,

„« praw społecznych,

e prawa własności,

e swobody prowadzenia działalności gospodarczej,

e pieniądza narodowego i finansów publicznych.

116

mana

Nie zamierzam jednak proponować przepisów, ale
wskazać na kwestie, które w moim przekonaniu za-
sługują na zapisanie w konstytucji.

Prawo do pracy

Umowa o pracę i okoliczności towarzyszące uzys-
kaniu i utracie pracy stały się przedmiotem specjal-
nych regulacji wykraczających poza prawo cywilne.
Jakikolwiek byłby stosunek ideowy do takiego pro-
cesu, nie jest możliwe w Polsce uzyskanie consen-
susu, który nie obejmowałby wyróżnienia pracy spo-
śród innych stosunków cywilnoprawnych. Najtrud-
niejszym problemem jest zrównoważenie uprawnień
pracowników i pracodawców. W tym zakresie panuje
bowiem poważne zamieszanie.

Z jednej strony jest powszechnym zjawiskiem,
że państwo silniej ingeruje w stosunki pracy niż
w inne kategorie umów. Reguły wolnorynkowe
w tym przypadku podlegają licznym ograniczeniom.
Wiadomo już jednak, że niektóre gwarancje są wąt-
pliwe. Przykładowo, jeżeli trudno jest wypowiedzieć
pracownikowi umowę o pracę, wtedy pracodawca
przeżywający czasową koniunkturę, nie zatrudnia no-
wych ludzi, gdyż wie, że po jej ustaniu nie będzie
w stanie zredukować zatrudnienia i konieczne koszty
przekroczą korzyści uzyskane z czasowego wzrostu
produkcji.

Zbyt duże koszty pracy będące pochodną systemu
ubezpieczeń społecznych, zdrowotnych, urlopów itp.
skłaniają do unikania formalnych umów o pracę.
Ustawowe ograniczenie czasu pracy uniemożliwia
natomiast dodatkowe wykorzystanie pracowników
już zatrudnionych. W rezultacie pracodawca nie pod-
wyższa produkcji, nie zwiększa zatrudnienia, a po-
tencjalni pracownicy pozostają bezrobotnymi. Podob-
nie płaca minimalna ogranicza możliwość zatrudnie-
nia wtedy, gdy wyższa płaca jest ekonomicznie nie-
możliwa. Na te uniwersalne spostrzeżenia z krajów
rozwiniętych nakłada się przekonanie, częściowo
uzasadnione, że pełne zatrudnienie w okresie PRL
powodowało nadużywanie prawa pracy także przez
pracowników.

Z, drugiej strony jest oczywiste, że tam gdzie bez-
robocie rzeczywiście doskwiera i sfera ubóstwa jest
pochodną niedorozwoju gospodarczego lub załama-
nia przemysłów schyłkowych, pracodawca ma moż-
liwość licznych nadużyć wobec znajdujących się
w trudnym położeniu pracowników, a zwłaszcza kan-
dydatów na pracowników.

Brak elementarej stabilności stosunków pracy nie
może być moralnie akceptowany. Jednak formalne
zapisy z okresu PRL idą zbyt daleko, toteż konieczne
jest zredukowanie zakresu ochrony, w tym zniesienie
fikcyjnej normy o prawie do pracy. Najprawdopodob-
niej pełne zatrudnienie w demokratycznym państwie
jest w ogóle niemożliwe. Wartość wykonanej pracy
będzie bowiem w niektórych przypadkach tak niska,
że nie będzie chętnych do jej dobrowolnego podjęcia,

A

Prasa o pracach konstytucyjnych

 

nawet przy okrojonych prawach do zasiłku. Państwa
totalitarne organizują pracę przymusową. PRL stoso-
wała zaniżanie wydajności pracy, co zresztą w końcu
wspomagano raczej groteskowym niż represyjnym
systemem ewidencji „pasożytów .

Na tym tle pojawi się problem imigracji zarobko-
wej, który w Polsce nie nabrał jeszcze poważniej-
szego znaczenia. Jednak już dziś mówi się w mają-
cych podstawę żartach, że do koniecznych kwalifi-
kacji majstra budowlanego w Polsce należy znajo-
mość języka rosyjskiego, by mógł porozumieć się
z podległymi pracownikami. Zakres wolności na ryn-
ku pracy będzie więc mniejszy niż na rynku towarów
i usług, rynku kapitałowym itp.

W tym zakresie rozsądne pozostają więc zasady
ochrony pracy, ingerencji w problemy bezpieczeń-
stwa pracy i umiarkowanej stabilności stosunku pra-
cy. Także kwestia zorganizowanej pomocy dla osób
pozostających bez pracy na skutek rzeczywistej nie-
możliwości jej podjęcia lub uzyskania innych źródeł
utrzymania (ubóstwo). Jeżeli chodzi o czas pracy, to
tendencja do obniżania górnej granicy jest w Polsce
niestosowna. Pomysł, by obniżyć czas pracy z 42 do
40 godzin tygodniowo jest zdecydowanie przedwcze-
sny. Warto pamiętać, że i tak częstym zjawiskiem
jest dodatkowe zatrudnienie, jak też, że Polska nie
należy do krajów o najdłuższym czasie pracy. Próba
wykorzystania konstytucji do obniżenia obecnej nor-
my faktycznej (42 godziny tygodniowo) jest ekono-
micznie nieodpowiedzialna. I tak już zbliżamy się do
sytuacji 2 dni robocze na jeden dzień wolny — nie-
dziele, święta, soboty, urlopy.

Gwarancje społeczne

Z punktu widzenia solidarności społecznej waż-
nym problemem jest ochrona zdrowia. Nasuwa się
jednak pytanie, czy każdy ma prawo do każdego za-
biegu i to bezpłatnie? Postęp medycyny kreuje coraz
to nowe sposoby leczenia, których koszty, zwłaszcza
w pierwszym okresie, są bardzo wysokie. Powoduje
to, że jedna operacja, dająca czasem 10% szans sku-
teczności, zużywa środki pozwalające skutecznie
uratować życie dziesiątkom osób. W takim wypadku
zawsze będzie problem dostępności. Czy tworzyć ko-
lejki i rady, które decydują o ich szeregowaniu? Kto
ma decydować o kolejności? Czy taki stan rzeczy-
wiście oznacza powszechność dostępu do określone-
go zabiegu? Czy spełnia ten wymóg kierowanie się
przesłankami poznawczymi, naukowymi?

Ograniczenie do ubezpieczenia dobrowolnego jest
także nie do zaakceptowania. W Polsce nie było i nie
będzie akceptacji dla odmowy pomocy medycznej
dla osoby, która nie dysponuje środkami konieczny-
mi do jej opłacenia. W praktyce więc i tak osoby nie
ubezpieczone byłyby leczone. Tylko obowiązkowe
ubezpieczenie rozwiązuje problem powszechnego
dostępu do podstawowej opieki zdrowotnej. Ustawa
powinna więc określić zakres gwarancji powszech-

Prasa o pracach konstytucyjnych

 

nej opieki zdrowotnej i tworzyć podstawy jej finan-
sowania, aby była ona realna.

Podobnie złożony jak zakres uprawnień do opieki
zdrowotnej jest problem edukacji. Zasadniczo panuje
zgoda co do tego, że państwo odpowiada za zapew-
nienie każdemu, bez względu na sytuację materialną
i położenie społeczne jego rodziny, równy start ży-
clowy w zakresie edukacji. Oznacza to w praktyce
gwarantowanie nauki szkolnej na poziomie pod-
stawowym i średnim. Osobom uzdolnionym powin-
no być zagwarantowane umożliwienie skorzystania
ze studiów wyższych.

Gwarancja ta nie musi wyrażać się w zasadzie
bezpłatnej szkoły wyższej, ale możliwe jest też wpro-
wadzenie systemu stypendiów i kredytów. W każ-
dym razie zła sytuacja materialna nie może — zwła-
szcza w Polsce przełomu XX i XXI wieku — stać
się dla uzdolnionej osoby barierą dla ukończenia stu-
diów. Podobnie w zakresie szkolnictwa podstawowe-
go i średniego bezpłatna szkoła może realizować się
także w formie czeków-bonów, którymi można pła-
cić na naukę w każdej szkole uznanej za odpowied-
nią, z tym że obowiązkiem państwa (gminy lub rzą-
du) jest zapewnić istnienie szkół, które za równowar-
tość bonu gwarantują godziwe wykształcenie.

Kierując się tymi argumentami uważam za wystar-
czający katalog praw socjalnych gwarantujący wy-
kształcenie i opiekę zdrowotną oraz ochronę w razie
popadnięcia w bezrobocie. Do tego dochodzi jeszcze
problem pomocy społecznej w razie ubóstwa z in-
nych powodów oraz gwarancji państwa dla syste-
mów emerytalnych. Jednak w tych ostatnich przy-
padkach odpowiednie gwarancje na poziomie usta-
wowym są w moim przekonaniu wystarczające.

„Nowa Europa” 24.02.95

Granice misji ekonomicznej i socjalnej państwa
w konstytucji (3)

Od prawa własności po finanse publiczne

Tadeusz Syryjczyk

Fundamentem zdrowej gospodarki i prawem
obywatelskim jest prawo własności. Zakres dopu-
szczalnych jego ograniczeń z zasady znajduje od-
zwierciedlenie w konstytucji. Na jego tle powstają
dwa problemy.

Pierwszy to ograniczenie możliwości wywłaszcze-
nia dopuszczalnego wyłącznie na podstawie usta-
wy, na cele publiczne i za słusznym odszkodo-
waniem.

Druga kwestia to, czy konstytucja powinna two-
rzyć przesłanki do nacjonalizacji pewnych działów
gospodarki. W niektórych projektach zawarte są —
wzorowane na konstytucji z 1921 r. — zapisy o do-

117

puszczalności określenia ustawą działów, które mogą
być wyłącznie własnością państwową. Nie jest przy
tym jasne, czy należy to rozumieć jako przesłankę
uprawniającą do wywłaszczenia niepaństwowych za-
kładów czy też tylko upoważnienie do wydania usta-
wy zakazującej prywatyzacji, czy wreszcie wprowa-
dzenie monopolu własnościowego państwa.

Taki zapis jest anachroniczny, Doświadczenia wie-
lu Krajów pokazały jednoznacznie, że przeprowadze-
nie nacjonalizacji nie oznacza usprawnienia czego-
kolwiek, a także „kontrola państwa” jest pewnym
mitem. Wielkie monopole państwowe bynajmniej nie
przyjmują służebnej roli względem konsumenta i jak
każdy monopol zagrażają zarówno konsumentom jak
I państwu. W praktyce, także w obszarze infrastruk-
tury, potrzebne są raczej dobre regulacje — obejmu-
jące firmy zarówno państwowe, jak i oparte na ka-
pitałach prywatnych — stanowione z myślą o inte-
resach konsumenta i państwa, niż monopol własnoś-
CIowy.

Przepis konstytucji o nieklarownej intencji nie jest
dobrym zaproszeniem do inwestowania. Natomiast
na pewno celowe jest uregulowanie własności nie-
których zasobów naturalnych, np. kopalin, a także
ochrony środowiska naturalnego. Są to wartości, któ-
re właśnie konstytucja powinna chronić w imię inte-
resu narodowego. Korzystać z tych zasobów (m.in.
z kopalin) można na podstawie koncesji określonych
prawem. Mogą to czynić różne podmioty.

W praktyce więc ewentualny zapis o obligatoryj-
nej własności państwowej należy ograniczyć do
bogactw naturalnych, co stwarza konstytucyjną
przesłankę do wydania ustawowej regulacji własno-
Ści górniczej.

Swoboda działalności gospodarczej

Doświadczenie socjalizmu nakazuje przywiązywać
szczególną wagę do konstytucyjnej gwarancji wolno-
ści ekonomicznej. Działalność produkcyjna, handlo-
wa, usługowa — jak najszerzej rozumiana działa|l-
ność gospodarcza powinna być dozwolona każde-
mu w granicach określonych prawem. Gwarancja
ta powinna powodować, że zakres (przedmiot)
działalności gospodarczej, która ma być regla-
mentowana, warunki, na których wydawane są
koncesje (zezwolenia) oraz tryb ich wydawania
powinny być określane w drodze ustawy.

Problematyka przyzwalania przez państwo na
określoną działalność nie wyczerpuje zagrożeń dla
wolności ekonomicznej i równości podmiotów
względem prawa. Ważnym czynnikiem jest też do-
stęp do kontyngentów celnych i podobnych „dóbr”
o ograniczonej liczbie, dzielonych przez państwo,
a których otrzymanie (lub nie) decyduje o powodze-
niu podmiotu. Ich rozdział według jasnych kryteriów
jest wymogiem praworządnego państwa, natomiast
równy dostęp jest warunkiem ich wykorzystania
przez podmioty najbardziej efektywne — zgodnie

118

 

z zasadami konkurencji. Takie wykorzystanie gwa-
rantuje obniżenie kosztów.

Jeszcze większe znaczenie ma kwestia dostępu do
zamówień publicznych. Są tu dwa ważne aspekty.
Ustawowa regulacja zamówień zmniejsza prawdopo-
dobieństwo korupcji, obniża koszty zamówień. Po-
woduje, że państwo (rząd i jego agendy oraz gminy)
są czynnikiem sprzyjającym konkurencji i rozwojowi
rynku. Nasuwa się pytanie, czy nie należy zmierzać
w kierunku konstytucyjnego zagwarantowania zasa-
dy, że rozdział zasobów (dóbr materialnych, praw,
zleceń itp.), których liczba jest ograniczona,
a o które ubiegają się podmioty gospodarcze po-
winien być regulowany ustawowo i eliminować
uznaniowość organów państwowych?

Ten kontakt państwa (rządu i gminy) z gospodarką
1 rynkiem jest bowiem kluczowy z punktu widzenia:

e równości podmiotów,

e praworządności działania,

e efektywności ekonomicznej.

Ograniczenie nakładania podatków do trybu
ustawowego jest koniecznym uzupełnieniem gwa-
rancji wolności ekonomicznej i prawa własności. Po-
datki mogą bowiem być sposobem na wywłaszcze-
nie, a zasada ich ustawowego ustanawiania jest ele-
mentarnym wymogiem. Z, drugiej strony — płacenie
podatków warto podnieść do konstytucyjnego
obowiązku obywatelskiego.

Pieniądz narodowy i finanse publiczne

Zachowanie wartości narodowego pieniądza,
ochrona gospodarki przed inflacją i równowaga ma-
kroekonomiczna to interesy narodowe, które wyma-
gają ochrony przed bieżącymi oczekiwaniami poli-
tycznymi.

Ważnym warunkiem jest uniezależnienie emisji
pieniądza od doraźnych decyzji przez uniezależnie-
nie władz banku emisyjnego od ciał politycznych.
Dlatego konstytucyjne określenie niezależności ban-
ku centralnego oraz zapisanie trybu powoływania
prezesa czy rady gubernatorów w taki sposób, aby
osoby powołane do kreowania polityki pieniężnej
nie popadały w zależność od parlamentu i rządu
jest pożądanym skonsumowaniem własnego do-
Świadczenia. Wychodzi naprzeciw standardom kra-
jów rozwiniętych.

Kwestią słabiej poddającą się zadekretowaniu
w konstytucji jest problem równowagi budżetowej
oraz zapewnienia parlamentarnej kontroli nad fi-
nansami publicznymi. Jest tu wiele problemów
szczegółowych, ale dobry zapis konstytucyjny może
dać podstawę do kształtowania ustaw szczegółowych
i regulaminu Sejmu oraz Senatu.

Problem pierwszy to ranga ustawy budżetowej. Jak
zapewnić, aby:

e wydatki wynikały z konkretnych ustaw szczegó-
łowych, które określają, w jakim celu, komu i jak
wypłaca się środki budżetowe (obecnie wydatki by-

A A MAT MO A PADA WA Mr WY | m

Prasa o pracach konstytucyjnych

1 A ET A M NI M 12 a O A PE

wają dwojakie: oparte tylko na szczegółowych usta-
wach oraz oparte wyłącznie na ustawie budżetowej);

e ustawy szczegółowe nie „otwierały” budżetu ——
tj. aby nie zapadały ustawy sprzeczne z ustawą
budżetową bez jej odpowiedniej nowelizacji, a usta-
wy o dłuższym horyzoncie czasowym były starannie
analizowane pod kątem przyszłego obciążenia bu-
dżetów lat następnych, stosownie do możliwej i prze-
widywanej dynamiki zjawisk gospodarczych i społe-
cznych;

e budżet uchwalono na czas;

e istniał legalny sposób postępowania władzy wy-
konawczej wtedy, gdy na skutek np. chwilowej re-
cesji lub klęski żywiołowej wpływy są mniejsze od
planowanych i niemożliwe jest realizowanie na bie-
żąco wypłat wynikających z ustaw albo uchwalono
zobowiązanie rządu do dokonywania wypłat bez po-
krycia we wpływach.

Jest to być może kwestia prawa budżetowego, ale
regulacja określana w USA jako „prawo sekwestru”,
która wskazuje wyraźnie, jakich wydatków kolejno
winna poniechać administracja w razie braku środ-
ków, jest dla porządku prawnego potrzebna.

Jeżeli weźmiemy pod uwagę, że np. w Finlandii
po załamaniu wpływów budżetowych na skutek re-
cesji o podobnej naturze, jak w krajach postkomunis-
tycznych, wysłano na przymusowe bezpłatne urlopy
dużą część pracowników sfery budżetowej, to może
łatwiej będzie rzeczowo uwzględnić oczywisty fakt
ekonomiczny, że niewypłacalność nie jest domeną
wyłącznie podmiotów gospodarczych i obywateli.
Brak płynności może dotknąć także państwo i mu-
szą być przewidziane sposoby wyjścia inne niż
chaotyczne obciążenie skutkami zaistniałej sytua-
cji przypadkowych grup poprzez zaaplikowanie
pieniądza inflacyjnego.

e uchwalony deficyt budżetowy nie przekraczał
bezpiecznych granic.

Trudno jednak w konstytucji operować procenta-
mi. Sensownym rozwiązaniem jest zapis konstytucji
Republiki Federalnej Niemiec, który dopuszcza —
poza przypadkami nadzwyczajnymi — deficyt nie
większy od wydatków na inwestycje publiczne.
Dopuszcza się więc powiększanie długu publicznego,
ale tylko w celu powiększenia majątku.

e kredyt banku emisyjnego, a więc zasadniczo
emisja pieniądza, nie był nadużywany do finanso-
wania deficytu budżetowego.

Ta szkodliwa praktyka wywołuje albo dodatkową
emisję, a więc inflację, albo ogranicza przyrost kre-
dytu dla gospodarki i ogranicza wzrost gospodarczy.
Jej zakaz byłby najlepszym Świadectwem dążenia do
uzdrowienia finansów publicznych.

Polska jest krajem szczególnie dotkniętym prob-
lemem zadłużenia. Główny ciężar powstał w okresie
gierkowskim przez zaciąganie kredytów poza jaką-
kolwiek realną kontrolą nad administracją partyjno-
-rządową. Część kredytów to długi przedsiębiorstw
przeniesione na państwo na skutek tego, że były po-
ręczane przez rząd. Doświadczenia te powinny być

Prasa o pracach konstytucyjnych

zdecydowanym argumentem na rzecz zapisu konsty-
tucyjnego, że zaciągania kredytów, a także udzie-
lania gwarancji rząd może dokonywać wyłącznie
na podstawie ustawy.

Ustawowe określenie trybu zaciągania pożyczek,
dopuszczalnego ich zakresu i wyraźne określenie or-
ganów państwa odpowiedzialnych za decyzje ogólne
i jednostkowe w tym zakresie zmniejsza prawdopo-
dobieństwo podejmowania kredytów zbędnych lub
mało potrzebnych, omijania limitów budżetowych

 

 

119

przez finansowanie wydatków agend rządowych kre-
dytami nie ujętymi w budżecie, gwarancji nie opar-
tych na rozpoznaniu zdolności do spłaty i innych
zjawisk, które skiadają się na niebezpieczeństwo za-
dłużenia państwa.

Zaprezentowany 3-odcinkowy tekst jest opracowaniem referatu
wygłoszonego na polsko-niemieckim sympozjum pt. Konstytucja
a porządek gospodarczy. Spór wokół konstytucjonalizacji porządku
gospodarczego w procesie stanowienia konstytucji w Polsce.
    </p>
  </div>
</div>

<Footer />
