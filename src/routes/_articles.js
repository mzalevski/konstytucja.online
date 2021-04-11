const link = ({ text, href, tooltip = "" }) => {
  return `<a title="${tooltip}" class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href="${href}">${text}</a>`;
};

const extLink = `<svg class="inline fill-current text-gray-900 w-3 h-3 pb-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L8.7 16.71a1 1 0 11-1.4-1.42L17.58 5H14a1 1 0 010-2h6a1 1 0 011 1v6a1 1 0 01-2 0V6.41zM17 14a1 1 0 012 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7c0-1.1.9-2 2-2h5a1 1 0 010 2H5v12h12v-5z"/></svg>`;

const articles = [
  {
    title: "Art. 1",
    slug: "1",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Rzeczpospolita Polska jest dobrem wspólnym wszystkich obywateli.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 2",
    slug: "2",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Rzeczpospolita Polska jest demokratycznym państwem prawnym, urzeczywistniającym zasady sprawiedliwości społecznej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 3",
    slug: "3",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Rzeczpospolita Polska jest państwem jednolitym.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 4",
    slug: "4",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Władza zwierzchnia w Rzeczypospolitej Polskiej należy do Narodu.</p>
			<p class="pt-4">2. Naród sprawuje władzę przez swoich przedstawicieli lub bezpośrednio.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 5",
    slug: "5",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Rzeczpospolita Polska strzeże niepodległości i nienaruszalności swojego terytorium, zapewnia wolności i prawa człowieka i obywatela oraz bezpieczeństwo obywateli, strzeże dziedzictwa narodowego oraz zapewnia ochronę środowiska, kierując się zasadą zrównoważonego rozwoju.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 6",
    slug: "6",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Rzeczpospolita Polska stwarza warunki upowszechniania i równego dostępu do dóbr kultury, będącej źródłem tożsamości narodu polskiego, jego trwania i rozwoju.</p>
			<p class="pt-4">2. Rzeczpospolita Polska udziela pomocy Polakom zamieszkałym za granicą w zachowaniu ich związków z narodowym dziedzictwem kulturalnym.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 7",
    slug: "7",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Organy władzy publicznej działają na podstawie i w granicach prawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 8",
    slug: "8",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Konstytucja jest najwyższym prawem Rzeczypospolitej Polskiej.</p>
			<p class="pt-4">2. Przepisy Konstytucji stosuje się bezpośrednio, chyba że Konstytucja stanowi inaczej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 9",
    slug: "9",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Rzeczpospolita Polska przestrzega wiążącego ją prawa międzynarodowego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 10",
    slug: "10",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Ustrój Rzeczypospolitej Polskiej opiera się na podziale i równowadze władzy ustawodawczej, władzy wykonawczej i władzy sądowniczej.</p>
			<p class="pt-4">2. Władzę ustawodawczą sprawują Sejm i Senat, władzę wykonawczą Prezydent Rzeczypospolitej Polskiej i Rada Ministrów, a władzę sądowniczą sądy i trybunały.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 11",
    slug: "11",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Rzeczpospolita Polska zapewnia wolność tworzenia i działania partii politycznych. Partie polityczne zrzeszają na zasadach dobrowolności i równości obywateli polskich w celu wpływania metodami demokratycznymi na kształtowanie polityki państwa.</p>
			<p class="pt-4">2. Finansowanie partii politycznych jest jawne.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 12",
    slug: "12",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Rzeczpospolita Polska zapewnia wolność tworzenia i działania związków zawodowych, organizacji społeczno-zawodowych rolników, stowarzyszeń, ruchów obywatelskich, innych dobrowolnych zrzeszeń oraz fundacji.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 13",
    slug: "13",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Zakazane jest istnienie partii politycznych i innych organizacji odwołujących się w swoich programach do totalitarnych metod i praktyk działania nazizmu, faszyzmu i komunizmu, a także tych, których program lub działalność zakłada lub dopuszcza nienawiść rasową i narodowościową, stosowanie przemocy w celu zdobycia władzy lub wpływu na politykę państwa albo przewiduje utajnienie struktur lub członkostwa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 14",
    slug: "14",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Rzeczpospolita Polska zapewnia wolność prasy i innych środków społecznego przekazu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 15",
    slug: "15",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Ustrój terytorialny Rzeczypospolitej Polskiej zapewnia decentralizację władzy publicznej.</p>
			<p class="pt-4">2. Zasadniczy podział terytorialny państwa uwzględniający więzi społeczne, gospodarcze lub kulturowe i zapewniający jednostkom terytorialnym zdolność wykonywania zadań publicznych określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 16",
    slug: "16",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Ogół mieszkańców jednostek zasadniczego podziału terytorialnego stanowi z mocy prawa wspólnotę samorządową.</p>
			<p class="pt-4">2. Samorząd terytorialny uczestniczy w sprawowaniu władzy publicznej. Przysługującą mu w ramach ustaw istotną część zadań publicznych samorząd wykonuje w imieniu własnym i na własną odpowiedzialność.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 17",
    slug: "17",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. W drodze ustawy można tworzyć samorządy zawodowe, reprezentujące osoby wykonujące zawody zaufania publicznego i sprawujące pieczę nad należytym wykonywaniem tych zawodów w granicach interesu publicznego i dla jego ochrony.</p>
			<p class="pt-4">2. W drodze ustawy można tworzyć również inne rodzaje samorządu. Samorządy te nie mogą naruszać wolności wykonywania zawodu ani ograniczać wolności podejmowania działalności gospodarczej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 18",
    slug: "18",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Małżeństwo jako związek kobiety i mężczyzny, rodzina, macierzyństwo i rodzicielstwo znajdują się pod ochroną i opieką Rzeczypospolitej Polskiej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 19",
    slug: "19",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Rzeczpospolita Polska specjalną opieką otacza weteranów walk o niepodległość, zwłaszcza inwalidów wojennych.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 20",
    slug: "20",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Społeczna gospodarka rynkowa oparta na wolności działalności gospodarczej, własności prywatnej oraz solidarności, dialogu i współpracy partnerów społecznych stanowi podstawę ustroju gospodarczego Rzeczypospolitej Polskiej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 21",
    slug: "21",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Rzeczpospolita Polska chroni własność i prawo dziedziczenia.</p>
			<p class="pt-4">2. Wywłaszczenie jest dopuszczalne jedynie wówczas, gdy jest dokonywane na cele publiczne i za słusznym odszkodowaniem.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 22",
    slug: "22",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Ograniczenie wolności działalności gospodarczej jest dopuszczalne tylko w drodze ustawy i tylko ze względu na ważny interes publiczny.</p>
		`,
    desc: `
			<p>Co do zasady Konstytucja gwarantuje wolność działalności gospodarczej – jest to jedna z podstaw naszego ustroju. Tak jak artykuł 21 określa warunki dopuszczalnego przez Konstytucję ograniczenia prawa własności, tak artykuł 22 zakłada dopuszczalność ograniczenia wolności działalności gospodarczej. Sformułowane zostały w nim określone warunki, od których spełnienia zależy dopuszczalność tego ograniczenia. Pierwszy warunek to zastosowanie drogi ustawowej. Nie można zatem ograniczeń tego rodzaju wprowadzać innym aktem prawnym niż ustawa (np. nie może wprowadzić ich samodzielnie władza wykonawcza lub w drodze aktów prawnych Rada Ministrów czy ministrowie). Drugie ograniczenie, podobnie jak w przypadku wywłaszczenia, polega na tym, że jest ono dopuszczalne tylko ze względu na ważny interes publiczny. Nie ma więc żadnych innych uwarunkowań, które by pozwalały wprowadzić tego rodzaju ograniczenia.</p>

			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 23",
    slug: "23",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Podstawą ustroju rolnego państwa jest gospodarstwo rodzinne. Zasada ta nie narusza postanowień <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/21'>art. 21</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/22'>art. 22.</a></p>
		`,
    desc: "",
  },
  {
    title: "Art. 24",
    slug: "24",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>Praca znajduje się pod ochroną Rzeczypospolitej Polskiej. Państwo sprawuje nadzór nad warunkami wykonywania pracy.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 25",
    slug: "25",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Kościoły i inne związki wyznaniowe są równouprawnione.</p>
			<p class="pt-4">2. Władze publiczne w Rzeczypospolitej Polskiej zachowują bezstronność w sprawach przekonań religijnych, światopoglądowych i filozoficznych, zapewniając swobodę ich wyrażania w życiu publicznym.</p>
			<p class="pt-4">3. Stosunki między państwem a kościołami i innymi związkami wyznaniowymi są kształtowane na zasadach poszanowania ich autonomii oraz wzajemnej niezależności każdego w swoim zakresie, jak również współdziałania dla dobra człowieka i dobra wspólnego.</p>
			<p class="pt-4">4. Stosunki między Rzecząpospolitą Polską a Kościołem katolickim określają umowa międzynarodowa zawarta ze Stolicą Apostolską i ustawy.</p>
			<p class="pt-4">5. Stosunki między Rzecząpospolitą Polską a innymi kościołami oraz związkami wyznaniowymi określają ustawy uchwalone na podstawie umów zawartych przez Radę Ministrów z ich właściwymi przedstawicielami.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 26",
    slug: "26",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Siły Zbrojne Rzeczypospolitej Polskiej służą ochronie niepodległości państwa i niepodzielności jego terytorium oraz zapewnieniu bezpieczeństwa i nienaruszalności jego granic.</p>
			<p class="pt-4">2. Siły Zbrojne zachowują neutralność w sprawach politycznych oraz podlegają cywilnej i demokratycznej kontroli.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 27",
    slug: "27",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>W Rzeczypospolitej Polskiej językiem urzędowym jest język polski. Przepis ten nie narusza praw mniejszości narodowych wynikających z ratyfikowanych umów międzynarodowych.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 28",
    slug: "28",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>1. Godłem Rzeczypospolitej Polskiej jest wizerunek orła białego w koronie w czerwonym polu.</p>
			<p class="pt-4">2. Barwami Rzeczypospolitej Polskiej są kolory biały i czerwony.</p>
			<p class="pt-4">3. Hymnem Rzeczypospolitej Polskiej jest Mazurek Dąbrowskiego.</p>
			<p class="pt-4">4. Godło, barwy i hymn Rzeczypospolitej Polskiej podlegają ochronie prawnej.</p>
			<p class="pt-4">5. Szczegóły dotyczące godła, barw i hymnu określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 29",
    slug: "29",
    chapter: {
      id: "I",
      title: "Rzeczpospolita",
    },
    html: `
			<p>${link({
        text: "Stolicą",
        href: "/slownik/stolica",
      })} Rzeczypospolitej Polskiej jest Warszawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 30",
    slug: "30",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Przyrodzona i niezbywalna godność człowieka stanowi źródło wolności i praw człowieka i obywatela. Jest ona nienaruszalna, a jej poszanowanie i ochrona jest obowiązkiem władz publicznych.</p>
		`,
    desc: `
			<p>Bezpośrednie naruszenia godności jednostki to sytuacje nietypowe, ekstremalne, głęboko ingerujące w nasze poczucie sprawiedliwości. Niemniej zdarzają się także w Polsce i wymagają nieustającej uwagi i wrażliwości. Konstytucja wywodzi nasze prawa z trzech fundamentalnych wartości: godności, wolności i równości. Godność jest najważniejszym z tych terminów. Możemy rozumieć ją zarówno jako źródło i podstawę wolności i praw człowieka lub jako odrębne, przysługujące nam prawo. Godność przysługuje każdemu z nas, każdemu człowiekowi, bez względu na jakiekolwiek cechy – wiek, płeć, niepełnosprawność, chorobę, pochodzenie, poglądy itd. – niezależnie również od naszego zachowania. Obowiązkiem państwa, społeczeństwa i innych ludzi jest uznawanie i nienaruszanie tej godności. Oznacza to zapewnienie wszystkim „minimum szacunku” oraz takich ram do samorealizacji, które umożliwią działanie zgodne z naszą wolą i systemem wartości.</p>
			<p class="pt-2">Naruszeniem godności będzie każda sytuacja, gdy człowiek staje się wyłącznie przedmiotem działań podejmowanych przez władzę. Godność jest przyrodzona – jej źródłem nie jest Konstytucja lub inny akt prawny, ale sam fakt bycia człowiekiem (jest to tzw. prawo naturalne). Jest również nienaruszalna – co oznacza, że żaden, nawet najważniejszy interes publiczny nie może uzasadniać ingerencji w naszą godność. Nie można jej w żaden sposób stracić, nawet wskutek najbardziej nagannego zachowania czy popełnienia najcięższego przestępstwa, nie może zostać nam odebrana i nie możemy się jej zrzec.</p>
			<p class="pt-2">Godność jest więc z jednej strony matką innych praw, „pojęciem-kluczem” dla rozumienia całego systemu, gwarantem naszych wolności. Z drugiej zaś osobnym prawem, pewnego rodzaju buforem bezpieczeństwa dla jednostki. Niektóre naganne działania, które formalnie nie naruszają innych praw lub wolności wynikających z Konstytucji, mogą stanowić naruszenie samej godności i właśnie dlatego być niedopuszczalne. Bardzo rzadko jednak prawnicy powołują się na pojęcie godności bezpośrednio – zazwyczaj godność naruszana jest wskutek naruszenia innego przysługującego nam prawa.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 31",
    slug: "31",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Wolność człowieka podlega ochronie prawnej.</p>
			<p class="pt-4">2. Każdy jest obowiązany szanować wolności i prawa innych. Nikogo nie wolno zmuszać do czynienia tego, czego prawo mu nie nakazuje.</p>
			<p class="pt-4">3. Ograniczenia w zakresie korzystania z konstytucyjnych wolności i praw mogą być ustanawiane tylko w ustawie i tylko wtedy, gdy są konieczne w demokratycznym państwie dla jego bezpieczeństwa lub porządku publicznego, bądź dla ochrony środowiska, zdrowia i moralności publicznej, albo wolności i praw innych osób. Ograniczenia te nie mogą naruszać istoty wolności i praw.</p>
		`,
    desc: `
			<p>W artykule 31 znajdziemy zarówno ogólną zasadę wolności (ust. 1 i 2) jak i przesłanki ustanawiania ograniczeń praw i wolności (ust. 3). Wolność postrzegana jest jako swoboda decydowania o własnym postępowaniu. Wolność oznacza zatem zakaz ingerowania czynników zewnętrznych (np. władz) w sferę decyzji jednostki.</p>

			<p class="pt-2">Zasada wolności, wspólnie z godnością i równością, wolność tworzy oś dla całego porządku konstytucyjnego i determinuje sposób rozumienia i stosowania przepisów konstytucji. Art. 31 stanowi punkt wyjścia do rozważań o konkretnych wolnościach zawartych w rozdziale II Konstytucji. Dalsze przepisy szczegółowe powtarzają ogólną zasadę wolności i konkretyzują ją.</p>

			<p class="pt-2">Prawa i wolności zawarte w Konstytucji nie mają charakteru absolutnego – to znaczy, że mogą podlegać ograniczeniom, jeśli zostaną spełnione odpowiednie przesłanki, co precyzuje ust. 3 art. 31 Konstytucji. Dlatego ingerencja władzy publicznej w wolność jednostki może nastąpić jedynie w wyjątkowych sytuacjach i być uzasadnione przyczynami wymienionymi w Konstytucji. Ponadto ograniczenie naszej wolności zawsze wymaga uchwalenia ustawy. Jest to przepis wyjątkowy, bo służy zawężeniu wolności i praw. Dlatego podczas jego interpretacji należy stosować zasady wykładni wyjątków – czyli przede wszystkim zakaz interpretacji rozszerzającej jego postanowienia<sup title="Tak M. Wyrzykowski „Granice praw i wolności – granice władzy” [w:] Obywatel – jego wolności i prawa. Warszawa 1998, s. 45-59)">1</sup>.</p>

			<p class="pt-2">Z kolei z konstytucyjnej zasady proporcjonalności wynika przekonanie, że stopień intensywności ingerencji w sytuację prawną jednostki musi znajdować uzasadnienie w randze promowanego interesu publicznego. Innymi słowy, ograniczenie praw jednostki musi być ekwiwalentne wobec celu, któremu służy dana regulacja. Przy spełnieniu pewnych warunków dopuszczalne jest więc ograniczenie konstytucyjnych praw i wolności jednostki dla ochrony innych dóbr. Zgodność ograniczenia z Konstytucją zależy zawsze jednak od odpowiedzi na trzy pytania: czy wprowadzone ograniczenia służą realizacji określonego celu (przydatność), czy jest niezbędne dla jego osiągnięcia (konieczność), czy nie stanowi zbyt wysokiego kosztu realizacji założonego celu, a zatem czy – poświęcone dobro pozostaje we właściwej proporcji do osiągniętego efektu (proporcjonalność)<sup title="Tak L. Garlicki, Orzecznictwo Trybunału Konstytucyjnego w 2000 r., Przegląd Sejmowy 2001 r., nr 9, s. 97">2</sup>.</p>

			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 32",
    slug: "32",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Wszyscy są wobec prawa równi. Wszyscy mają prawo do równego traktowania przez władze publiczne.</p>
			<p class="pt-4">2. Nikt nie może być dyskryminowany w życiu politycznym, społecznym lub gospodarczym z jakiejkolwiek przyczyny.</p>
		`,
    desc: `
			<p>Ustęp 1. Równość — wraz z godnością i wolnością — stanowi podstawę porządku ustrojowego i w tym powiązaniu należy ją rozpatrywać. Zasada równości wyznacza sposób i zakres korzystania z innych wolności i praw, oraz określa zakres dopuszczalnych ograniczeń. Konstytucja gwarantuje wszystkim równość wobec prawa. Oznacza to, że nierówności społeczne będą niezgodne z Konstytucją wtedy, gdy są efektem obowiązującego prawa. Równość rozumiana jako prawo podmiotowe może być traktowana jako „równość wobec prawa” oraz „równość w prawie”, tak w stanowieniu jak i w stosowaniu prawa. Zasadę równości rozpatruje się w relacjach jednostka – władza publiczna. Zasada równości oznacza, że wszystkie podmioty prawa charakteryzujący się daną cechą istotną w równym stopniu powinny być traktowane równo, według jednolitej miary, bez zróżnicowań dyskryminujących lub faworyzujących. Jednocześnie zasada ta zakłada odmienne traktowanie tych podmiotów, które nie posiadają wspólnej cechy istotnej.</p>
			<p class="pt-2">Ustęp 2. Konstytucja zakazuje dyskryminacji z jakiejkolwiek przyczyny. Zakaz dyskryminacji jest konsekwencją i logicznym następstwem zasady równości. Konstytucja zakazuje wprost wprowadzania nieuzasadnionych zróżnicowań. Zakaz dyskryminacji ma charakter uniwersalny podmiotowo („nikt”) i przedmiotowo (obejmuje „życie polityczne, społeczne lub gospodarcze”). Dyskryminacja to gorsze traktowanie ze względu na cechę osobistą. Jest to kwalifikowana forma nierównego traktowania osoby ze względu na jakąś jej cechę osobistą, bez racjonalnego uzasadnienia. Do najczęściej wymienianych przesłanek dyskryminacji zalicza się płeć, rasę, pochodzenie etniczne, narodowość, religię, wyznanie, światopogląd, niepełnosprawność, wiek, orientację seksualną lub tożsamość płciową, ale mogą do nich należeć także inne cechy osobiste jak np. pochodzenie społeczne czy status materialny. Niedopuszczalne jest, by organy władzy publicznej odstępowały od zakazu dyskryminacji. Żeby ustalić, czy mamy do czynienia z dyskryminacją, musimy zbadać, czy rzeczywiście dwa podmioty zostały różnie potraktowane. Jeśli tak, to dlaczego: czy powodem była konkretna cecha danej osoby (to jest dyskryminacja) czy też inne przyczyny (Przykład: osoby z niepełnosprawnością mają prawo do głosowania korespondencyjnego. Osoby bez orzeczonej niepełnosprawności są więc traktowane nierówno, ale to nie jest dyskryminacja). Standard ochrony prawnej przed nierównym traktowaniem i dyskryminacją wynika z aktów prawa międzynarodowego i europejskiego. Na gruncie prawa polskiego podstawowe znaczenie mają regulacje Kodeksu pracy oraz ustawy o wdrożeniu niektórych przepisów Unii Europejskiej w zakresie równego traktowania.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 33",
    slug: "33",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Kobieta i mężczyzna w Rzeczypospolitej Polskiej mają równe prawa w życiu rodzinnym, politycznym, społecznym i gospodarczym.</p>
			<p class="pt-4">2. Kobieta i mężczyzna mają w szczególności równe prawo do kształcenia, zatrudnienia i awansów, do jednakowego wynagradzania za pracę jednakowej wartości, do zabezpieczenia społecznego oraz do zajmowania stanowisk, pełnienia funkcji oraz uzyskiwania godności publicznych i odznaczeń.</p>
		`,
    desc: `
			<p>Zasadę równości płci znajdziemy pośrednio w ogólnej zasadzie równości. Ponieważ Konstytucja nie tworzy katalogu cech, w oparciu o które zakazane jest różnicowanie sytuacji jednostek, artykuł 33 ma szczególne znaczenie i stanowi rozwinięcie <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/32'>art. 32</a>.
			<p class="pt-2">Zakazuje ona dyskryminacji, tj. nieuzasadnionego różnicowania sytuacji prawnej obu płci. Zatem przyjęcie płci jako podstawy zróżnicowania rodzi domniemanie niekonstytucyjności danego rozwiązania. Wynika to także bezpośrednio z zakazu różnicowania ze względu na płeć zawartego w art. 14 Europejskiej Konwencji Praw Człowieka.</p>
			<p class="pt-2">Zróżnicowania są uzasadnione, gdy spełniają warunki konieczności, proporcjonalności oraz związku z innymi normami konstytucyjnymi, np. na płaszczyźnie praw socjalnych dopuszczalne jest przyznawanie pewnych przywilejów kobietom w celu wyrównania faktycznych nierówności społecznych (dyskryminacja pozytywna).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 34",
    slug: "34",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Obywatelstwo polskie nabywa się przez urodzenie z rodziców będących obywatelami polskimi. Inne przypadki nabycia obywatelstwa polskiego określa ustawa.</p>
			<p class="pt-4">2. Obywatel polski nie może utracić obywatelstwa polskiego, chyba że sam się go zrzeknie.</p>
		`,
    desc: `
			<p>Wszystkie polskie konstytucje posługiwały się pojęciem obywatelstwa w kontekście określania praw i wolności jednostki. W Konstytucji z 1997 roku odróżniono wyraźnie prawa człowieka od praw obywatela. W związku z tym koniecznym okazało się określenie w rozdziale drugim przesłanek posiadania obywatelstwa.</p>
			<p class="pt-2">Artykuł 34 wskazuje trzy główne zasady:</p>
			<ul class="pl-4">
				<li>1) zasadę krwi (obywatelstwo nabywa się poprzez urodzenie przez obywateli RP, gdy przynajmniej jedno z rodziców posiada obywatelstwo polskie),</li>
				<li>2) zasadę dopuszczalności innych dróg (określonych w ustawie),</li>
				<li>3) zasadę trwałości obywatelstwa (nie można go utracić inaczej niż poprzez zrzeczenie się go).</li>
			</ul>
			<p class="pt-2">Konstytucja wyklucza możliwość pozbawienia obywatelstwa bez zgody obywatela. Historycznie jest to niezwykle istotne rozwiązanie, ponieważ w Polsce utrata obywatelstwa stosowana była jako forma kary lub represji zazwyczaj w kontekście politycznym.</p>
			<p class="pt-2">Warto przypomnieć tu, że obywatelom polskim – tak jak wszystkim obywatelom państw członkowskich Unii Europejskiej – przysługuje także obywatelstwo europejskie.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 35",
    slug: "35",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Rzeczpospolita Polska zapewnia obywatelom polskim należącym do mniejszości narodowych i etnicznych wolność zachowania i rozwoju własnego języka, zachowania obyczajów i tradycji oraz rozwoju własnej kultury.</p>

			<p class="pt-4">2. Mniejszości narodowe i etniczne mają prawo do tworzenia własnych instytucji edukacyjnych, kulturalnych i instytucji służących ochronie tożsamości religijnej oraz do uczestnictwa w rozstrzyganiu spraw dotyczących ich tożsamości kulturowej.</p>
		`,
    desc: `
			<p>Naród Polski tworzą wszyscy obywatele, także przedstawiciele mniejszości. Każda osoba, która przynależy do danej mniejszości może samodzielnie zdecydować, czy życzy sobie ujawniać te informacje i być traktowana jak członek mniejszości. Władza publiczna ma respektować taką decyzję.</p>
			<p class="pt-2">Obowiązek ochrony praw mniejszości wynika nie tylko bezpośrednio z tego artykułu Konstytucji, ale także z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href="/32">artykułu 32</a> oraz regulacji międzynarodowych (takich jak art. 27 Międzynarodowego Paktu Praw Obywatelskich i Politycznych, europejskiej Konwencji o ochronie mniejszości narodowych z 1995 r., traktatów dwustronnych zawierane przez Polskę). Łączne odczytywanie tych przepisów pozwoliło komentatorom na sformułowanie trzech reguł uniwersalnych:</p>
			<ul class="pl-4">
				<li>1) zakazu asymilacji (rozumianego jako eliminacja odrębności narodowych i etnicznych),</li>
				<li>2) zasady równego traktowania i</li>
				<li>3) zakazu dyskryminacji.</li>
			</ul>
			<p class="pt-2">Obywatel polski będący przedstawicielem mniejszości ma konstytucyjne prawo do zachowania i rozwoju swojej tożsamości narodowej lub etnicznej: języka, obyczajów, tradycji i kultury. Należyta realizacja tych wolności wymaga także pozytywnych działań państwa. W rozumieniu ustawy o mniejszościach narodowych i etnicznych oraz o języku regionalnym mniejszością narodową jest grupa obywateli polskich, która jest mniej liczebna od pozostałej części ludności RP, w sposób istotny odróżnia się od pozostałych obywateli językiem, kulturą lub tradycją, dąży do zachowania tych odrębności, ma świadomość własnej historycznej wspólnoty narodowej i jest ukierunkowana na jej wyrażanie i ochronę, a jej przodkowie zamieszkiwali obecne terytorium Polski od co najmniej 100 lat. Grupa taka, aby zostać uznana za mniejszość narodową, powinna ponadto utożsamiać się z narodem zorganizowanym we własnym państwie. Mniejszością etniczną jest natomiast grupa obywateli polskich spełniająca powyższe kryteria, lecz nieutożsamiająca się z narodem zorganizowanym we własnym państwie.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 36",
    slug: "36",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Podczas pobytu za granicą obywatel polski ma prawo do opieki ze strony Rzeczypospolitej Polskiej.</p>
		`,
    desc: `
			<p>Prawo do opieki ze strony Rzeczypospolitej istnieje niezależnie od charakteru pobytu za granicą (stałego, tymczasowego, legalnego etc.). Obowiązek opieki spoczywa na władzach publicznych, przede wszystkim na instytucjach działających w stosunkach zagranicznych (np. konsulatach). Prawo to istnieje w każdej sytuacji, także w przypadku naruszenia przez obywatela prawa (polskiego lub obcego).</p>
			<p class="pt-2">Podmiotem opieki jest obywatel polski, poza zakresem ochrony pozostają więc Polacy nieposiadający obywatelstwa polskiego. Artykuł 36 nie precyzuje jednak, na czym ma polegać opieka. Pozostawia to ustawodawcy, dlatego trudno sprecyzować katalog uprawnień i obowiązków.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 37",
    slug: "37",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Kto znajduje się pod władzą Rzeczypospolitej Polskiej, korzysta z wolności i praw zapewnionych w Konstytucji.</p>

			<p class="pt-4">2. Wyjątki od tej zasady, odnoszące się do cudzoziemców, określa ustawa.</p>
		`,
    desc: `
			<p>Rozwój międzynarodowych regulacji praw człowieka w II połowie XX wieku doprowadził do uznania, że pewne prawa przysługują jednostkom niezależnie od ich przynależności państwowej. Różnicowanie sytuacji obywateli danego państwa i cudzoziemców może być dopuszczalne tylko w uzasadnionych przypadkach.</p>
			<p class="pt-2">Dlatego wszystkie prawa i wolności, których Konstytucja nie zastrzega dla obywateli, przysługują także cudzoziemcom.</p>
			<p class="pt-2">Pod władzą RP znajdują się przede wszystkim osoby, które przebywają na terytorium Polski (w rozumieniu regulacji prawa międzynarodowego) lub są poddane polskim regulacjom prawnym.</p>
			<p class="pt-2">Wyjątki od zasady uniwersalności mogą odnosić się jedynie do cudzoziemców i muszą zostać ustanowione w ustawie. Dopuszczalny zakres wyjątków należy ustalić w relacji z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>art. 31</a> ust. 3, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/32'>art. 32</a> (zasada równości) oraz <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/30'>art. 30</a> Konstytucji (zasada godności).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 38",
    slug: "38",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Rzeczpospolita Polska zapewnia każdemu człowiekowi prawną ochronę życia.</p>
		`,
    desc: `
			<p>Prawo do ochrony życia jest jedną z najważniejszych gwarancji konstytucyjnych, które w sposób naturalny warunkuje istnienie wszystkich dalszych wolności i praw. Ponieważ życie ludzkie jest wartością konstytucyjną, państwo w sposób bezpośredni powołane zostaje do jego ochrony.</p>
			<p class="pt-2">Ochrona życia wynika z samej zasady państwa demokratycznego. Dlatego przed 1997 r., gdy Konstytucja nie odnosiła się wprost do ochrony życia ludzkiego, Trybunał Konstytucyjny wywiódł zasadę jego ochrony z samej charakterystyki polskiej państwowości – z zasady demokratycznego państwa prawnego (por. orzeczenie K 26/96).</p>
			<p class="pt-2">Konstytucja wymaga od państwa nie tylko powstrzymania się od wprowadzania regulacji dopuszczających pozbawianie życia ludzkiego, np. w ramach kary śmierci, ale również podejmowania określonych kroków w celu ochrony tego życia.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 39",
    slug: "39",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Nikt nie może być poddany eksperymentom naukowym, w tym medycznym, bez dobrowolnie wyrażonej zgody.</p>
		`,
    desc: `
			<p>Rozwój medycyny i nauk biologicznych stawia nowe wyzwania dla ochrony praw człowieka i realizacji podstawowych praw i wolności konstytucyjnych.</p>
			<p class="pt-2">Z Konstytucji wynika, że eksperymenty medyczne oraz inne nie mogą być obarczone świadomym ryzykiem negatywnych skutków dla osób poddanych eksperymentowi. Dobrowolnie wyrażona zgoda na udział w eksperymencie powinna być zawsze udzielona indywidualnie, a nie w sposób zbiorowy. Dobrowolność zgody oznacza również pełne poinformowanie o celach, przebiegu oraz możliwych następstwach poddania się procedurze. Eksperymentem naukowym może być jedynie eksperyment przeprowadzony przez osoby posiadające odpowiednią wiedzę i uprawnienia. Zagadnienia związane z bioetyką i prawami człowieka zostały opisane przy <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/38'>art. 38</a> (Prawo do ochrony życia)</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 40",
    slug: "40",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Nikt nie może być poddany torturom ani okrutnemu, nieludzkiemu lub poniżającemu traktowaniu i karaniu. Zakazuje się stosowania kar cielesnych.</p>
		`,
    desc: `
			<p>Zakaz stosowania tortur oraz nieludzkiego, poniżającego traktowania albo karania ma charakter absolutny i bezwzględny. Jest stosunkowo nowym rozwiązaniem w polskim konstytucjonalizmie – szerszą interpretację tego przepisu znajdziemy u jego źródeł, czyli w regulacjach międzynarodowych.</p>
			<p class="pt-2">Jest on zawarty m.in. w: Powszechnej Deklaracji Praw Człowieka z 1948 r.<sup title="Artykuł 5: Nikt nie może być poddany torturom albo okrutnemu, nieludzkiemu lub poniżającemu traktowaniu lub karaniu">1</sup>, Konwencjach Genewskich z 1949 r. <sup title="Artykuł 3: (…) W tym celu są i pozostaną zakazane w stosunku do wyżej wymienionych osób w każdym czasie i w każdym miejscu: a) zamachy na życie i nietykalność cielesną w szczególności zabójstwa we wszelkiej postaci, okaleczenia, okrutne traktowanie, tortury i męki, b) branie zakładników, c) zamachy na godność osobistą, a w szczególności traktowanie poniżające i upokarzające (…)">2</sup>, Europejskiej Konwencji Praw Człowieka z 1950 r. <sup title="Artykuł 3: Nikt nie będzie poddany torturom ani nieludzkiemu lub poniżającemu traktowaniu lub karaniu">3</sup>, Międzynarodowym Pakcie Praw Osobistych i Politycznych z 1966 r. <sup title="Artykuł 7: Nikt nie będzie poddawany torturom albo okrutnemu, nieludzkiemu bądź poniżającemu traktowaniu lub karaniu. W szczególności nikt nie będzie poddawany, bez swej swobodnie wyrażonej zgody, doświadczeniom lekarskim lub naukowym">4</sup>.</p>
			<p class="pt-2">W europejskim systemie ochrony praw człowieka zagadnienie to reguluje przede wszystkim Europejska Konwencja o Ochronie Praw Człowieka i Podstawowych Wolności, która została podpisana przez Polskę w 1991 r., zaś weszła w życie w 1993 r. Zakaz tortur zajmuje w niej trzecie miejsce, tuż za obowiązkiem przestrzegania praw i wolności człowieka oraz prawem do życia, co oznacza, że prawo to można zaliczyć do grona praw stanowiących twardy rdzeń Konwencji, określanych jako prawa podstawowe<sup title="Zob. A. Ploszka, Zakaz tortur. Czy na pewno bezwzględny? [w]: Przegląd Prawniczy UW, nr I-II, rok XI, Warszawa 2012 r., str. 124">5</sup>.</p>
			<p class="pt-2">Artykuł 3 Konwencji wyraźnie podkreśla, że nikt nie może być poddany torturom ani nieludzkiemu lub poniżającemu traktowaniu albo karaniu chroniąc tym samym jedną z podstawowych wartości demokratycznego społeczeństwa.</p>
			<p class="pt-2">Tak szerokie ujęcie powyższego zakazu było celem zamierzonym. Artykuł 3 nie przewiduje wyjątków i odstępstw nawet w przypadku wojny lub innego niebezpieczeństwa publicznego. Oznacza to, że winien on obowiązywać nawet w najcięższych sytuacjach, jak walka z terroryzmem i zorganizowaną przestępczością.</p>
			<p class="pt-2">Konwencja także bezwzględnie zakazuje stosowania tortur i nieludzkiego lub poniżającego traktowania albo karania, niezależnie od postępowania danych osób<sup title="Zob. wyrok z dnia 24.07.2014 r w sprawie Al Nashiri przeciwko Polsce, skarga nr 28761/11, § 507 (wyrok w sprawie tajnych więzień CIA w Polsce)">6</sup>. Użycie siły wobec drugiej osoby możliwe jest jedynie w niektórych sytuacjach o charakterze ściśle koniecznym, określonych w przepisach prawnych (np. stosowanie środków przymusu bezpośredniego wobec osób zagrażających życiu swojemu lub życiu i bezpieczeństwu innych osób). Natomiast każde użycie siły, które wykracza poza ścisłą konieczność, narusza ludzką godność i stanowi naruszenie art. 3 Konwencji<sup title="Zob. Konwencja o Ochronie Praw człowieka i Podstawowych Wolności. Tom I. Komentarz do artykułów 1-18. L. Garlicki red., Wydawnictwo C. H. Beck, Warszawa 2010 r., str. 99.">7</sup>.</p>
			<p class="pt-2">Ochronę praw człowieka zawartych w Konwencji zapewnia Europejski Trybunał Praw Człowieka (ETPCz), który rozpatruje skargi i zobowiązuje Państwa-Strony do udoskonalania i uszczelniania systemów prawnych mogących stanowić pole do nadużyć. Wieloletnia praktyka Trybunału pozwoliła na rozróżnienie pojęć takich jak tortury i nieludzkie, poniżające traktowanie, a także sformułowania definicji tortur, która po raz pierwszy pojawiała się w Deklaracji w sprawie ochrony wszystkich osób przed torturami oraz innym okrutnym, nieludzkim lub poniżającym traktowaniem albo karaniem z dnia 9 grudnia 1975 r. <sup title="Rezolucja Zgromadzenia Ogólnego ONZ 3452(XXX)">8</sup>, a następnie w Konwencji w sprawie zakazu stosowania tortur przyjętej przez Zgromadzenie Ogólne Narodów Zjednoczonych 10 grudnia 1984 r. <sup title="Dz. U. z 1989‏. Nr 63, poz. 378">9</sup></p>
			<p class="pt-2">We współczesnym orzecznictwie Trybunał określa tortury wyłącznie jako umyślne, nieludzkie traktowanie powodujące bardzo poważne i okrutne cierpienie<sup title="Por. Sprawa Al Nashiri przeciwko Polsce (skarga nr 28761/11, wyrok z dnia 24.07.2014‏)">10</sup>. Za nieludzkie uznaje zachowanie, jeżeli, między innymi, było ono stosowane z premedytacją przez wiele godzin i spowodowało albo faktyczne uszkodzenie ciała, albo intensywne fizyczne i psychiczne cierpienie. Natomiast traktowanie można określić jako poniżające, jeżeli miało na celu wywołanie w ofierze uczucia strachu, udręczenia i niższości będącego w stanie poniżyć i upokorzyć. Jednocześnie, Trybunał stale podkreślał, że wchodzące w grę cierpienie i poniżenie musi w każdym razie wykraczać poza nieunikniony element cierpienia lub poniżenia związany z daną formą zgodnego z prawem traktowania lub karania<sup title="Por. sprawa Piechowicz przeciwko Polsce (skarga nr 2007 r. 1/07, wyrok z dnia 17.04.2012 r‏.)">11</sup>.</p>
			<p class="pt-2">W rozumieniu Konwencji w sprawie zakazu stosowania tortur tortury oznaczają każde działanie, którym jakiejkolwiek osobie umyślnie zadaje się ostry ból lub cierpienie, fizyczne bądź psychiczne, w celu uzyskania od niej lub od osoby trzeciej informacji lub wyznania, w celu ukarania jej za czyn popełniony przez nią lub osobę trzecią albo o którego dokonanie jest ona podejrzana, a także w celu zastraszenia lub wywarcia nacisku na nią lub trzecią osobę albo w jakimkolwiek innym celu wynikającym z wszelkiej formy dyskryminacji, gdy taki ból lub cierpienie powodowane są przez funkcjonariusza państwowego lub inną osobę występującą w charakterze urzędowym lub z ich polecenia albo za wyraźną lub milczącą zgodą. Określenie to nie obejmuje bólu lub cierpienia wynikających jedynie ze zgodnych z prawem sankcji, nieodłącznie związanych z tymi sankcjami lub wywołanych przez nie przypadkowo.</p>
			<p class="pt-2">Konwencja, mimo wprowadzenia definicji tortur oraz powołania ciała skargowego w postaci Komitetu przeciwko torturom ONZ, którego zadaniem jest m.in. badanie wszelkich zgłoszeń dotyczących tortur, nie odnosi się do kwestii zapobiegania torturom i nieludzkiemu traktowaniu. Tymczasem w latach 70. rozpoczęła się dyskusja na temat znaczenia działań prewencyjnych w eliminowaniu tego typu praktyk<sup title="Już wówczas kilka organizacji międzynarodowych połączyło swoje siły w celu znalezienia dodatkowych, bardziej pragmatycznych, sposobów zapobiegania takim nadużyciom. Szwajcarski filantrop Jean Jacques Gautier, zainspirowany wynikami wizyt więzień przeprowadzanych przez Międzynarodowy Komitet Czerwonego Krzyża podczas wojny, starał się stworzyć system regularnych wizyt wszystkich miejsc zatrzymań na całym świecie. W 1977 r‏. powołał Stowarzyszenie Zapobiegania Torturom (APT), niezależną organizację pozarządową z siedzibą w Genewie, która od początku broniła prostej, lecz nowatorskiej zasady wysuniętej przez niego, iż wizytowanie miejsc, w których przebywają ludzie pozbawieni wolności to najbardziej skuteczna metoda zapobiegania torturom i maltretowaniu. Przez wiele lat członkowie APT zabiegali o utworzenie takiego systemu w strukturach ONZ.">12</sup>. Ukoronowaniem starań o uzupełnienie systemu prewencji tortur było podpisanie w dniu 18 grudnia 2002 r. Protokołu Fakultatywnego do Konwencji ONZ w sprawie zakazu stosowania tortur oraz nieludzkiego i poniżającego traktowania (dalej zwanym Protokołem lub OPCAT). Tym samym społeczność międzynarodowa wyraziła swój oficjalny sprzeciw wobec stosowania tortur oraz innych form okrutnego, nieludzkiego lub poniżającego traktowania.</p>
			<p class="pt-2">Zgodnie z Protokołem jednym z najskuteczniejszych sposobów zapobiegania torturom jest stworzenie systemu regularnych, kontrolnych wizyt przeprowadzanych w miejscach, gdzie przebywają osoby pozbawione wolności. Protokół przewiduje powołanie tzw. międzynarodowego mechanizmu prewencji oraz krajowych mechanizmów prewencji. Zgodnie z OPCAT każde państwo-strona zezwala na przeprowadzanie wizyt przez obydwa mechanizmy w jakimkolwiek miejscu pozostającym pod jego jurysdykcją i kontrolą, gdzie przebywają lub mogą przebywać osoby pozbawione wolności na podstawie polecenia organu władzy publicznej bądź za jego namową, zgodą lub przyzwoleniem.</p>
			<p class="pt-2">Polska ratyfikowała OPCAT w 2005 r.<sup title="Dz. U. z 2007 r. nr 30, poz. 192">13</sup>, krajowy mechanizm prewencji [tortur] (KMPT) powołany został w 2008 r. Funkcja ta powierzona została RPO<sup title="Dz. U. z 2014 r., poz. 1648">14</sup>.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 41",
    slug: "41",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdemu zapewnia się nietykalność osobistą i wolność osobistą. Pozbawienie lub ograniczenie wolności może nastąpić tylko na zasadach i w trybie określonych w ustawie.</p>
			<p class="pt-4">2. Każdy pozbawiony wolności nie na podstawie wyroku sądowego ma prawo odwołania się do sądu w celu niezwłocznego ustalenia legalności tego pozbawienia. O pozbawieniu wolności powiadamia się niezwłocznie rodzinę lub osobę wskazaną przez pozbawionego wolności.</p>
			<p class="pt-4">3. Każdy zatrzymany powinien być niezwłocznie i w sposób zrozumiały dla niego poinformowany o przyczynach zatrzymania. Powinien on być w ciągu 48 godzin od chwili zatrzymania przekazany do dyspozycji sądu. Zatrzymanego należy zwolnić, jeżeli w ciągu 24 godzin od przekazania do dyspozycji sądu nie zostanie mu doręczone postanowienie sądu o tymczasowym aresztowaniu wraz z przedstawionymi zarzutami.</p>
			<p class="pt-4">4. Każdy pozbawiony wolności powinien być traktowany w sposób humanitarny.</p>
			<p class="pt-4">5. Każdy bezprawnie pozbawiony wolności ma prawo do odszkodowania.</p>
		`,
    desc: `
			<p>1. Wolnością osobistą jest możliwość swobodnego określania przez jednostkę swojego zachowania i postępowania, nieograniczoną przez jakiekolwiek inne czynniki ludzkie. Umożliwia faktyczne korzystanie z pozostałych praw i wolności. Wolność osobista nie jest jednak absolutna – możliwość określania swojego zachowania musi mieścić się w obowiązujących granicach prawnych. W ścisłym związku z wolnością osobistą pozostaje nietykalność osobista. Jest to zagwarantowana możliwość utrzymywania tożsamości i integralności (fizycznej i psychicznej) oraz zakaz bezpośredniej lub pośredniej ingerencji z zewnątrz. Nietykalność osobista ma bezpośredni związek z zasadą godności, posiada wymiar absolutny i ustawy nie mogą jej ograniczać. Ustawy powinny uregulować zasady i tryb ograniczania lub pozbawiania wolności osobistej.</p>
			<p class="pt-2">2 i 3. Pozbawienie wolności osobistej nie oznacza pozbawienia jednostki możliwości decydowania o sobie, ale jedynie pozbawienie wolności osobistej sensu stricto. O pozbawieniu wolności orzeka sąd (prawo jednostki do sądu wynika z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/45'>art. 45</a> Konstytucji). Zasada ta nie ma zastosowania do sytuacji ograniczenia wolności, chyba, że uzna tak ustawodawca. Konstytucja posługuje się także pojęciem „zatrzymanie”, które umożliwia innym instytucjom publicznym ingerencję w wolność. Musi się ono odbywać jednak wyjątkowo, w trybie i sytuacjach określonych na podstawie przepisów ustawy. Przedstawiciele władzy w momencie zatrzymania mają obowiązek niezwłocznego poinformowania zatrzymanego o przyczynach ich ingerencji. Poinformowanie to powinno polegać również na wskazaniu konieczności danej interwencji w formie zatrzymania. Informacja ta powinna zostać przekazana niezwłocznie (gdy będzie to możliwe) oraz w zrozumiały sposób (także np. poprzez tłumacza języka obcego lub migowego). Kolejny obowiązek spoczywający na władzach publicznych w sytuacji zatrzymania to przekazanie zatrzymanego w ciągu 48 godzin do dyspozycji sądu. Oznacza to między innymi obowiązek starannego rozważenia całokształtu sytuacji zatrzymanego i natychmiastowe zwolnienie go, o ile wygasły przyczyny zatrzymania, bez przedstawienia do dyspozycji sądu. Przekazanie do dyspozycji sądu oznacza uznanie przez przedstawicieli władz konieczności podjęcia dalszych kroków prawnych wobec zatrzymanego. Powinno więc być połączone z odpowiednim wnioskiem, o czym należy poinformować zatrzymanego. Sąd w takiej sytuacji może zdecydować o zwolnieniu zatrzymanego lub tymczasowym aresztowaniu go (na doręczenie postanowienia sądu w tym zakresie przedstawiciele władz mają 24 godziny).</p>
			<p class="pt-2">4. Humanitarne traktowanie to coś więcej niż zakaz tortur, okrutnego, poniżającego i nieludzkiego traktowania. Oznacza ono takie obchodzenie się z osobą pozbawioną wolności, które uwzględnia i respektuje pewne minimalne potrzeby każdego człowieka, odnosząc je do standardów danego społeczeństwa. Warto podkreślić, że sposób traktowania osób pozbawionych wolności określono za pomocą najbardziej pojemnego terminu. Twórcy Konstytucji wykorzystali pojęcie humanitarnego traktowania, kierując się założeniem o możliwości resocjalizacji i powrotu do społeczeństwa. Dlatego rolą państwa jest także tworzenie warunków sprzyjających resocjalizacji i podejmowanie na szeroką skalę działań wychowawczych.</p>
			<p class="pt-2">5. Każde pozbawienie wolności to bardzo daleka ingerencja w sferę wolności jednostki, dlatego naruszenie tego dobra musi być traktowane ze szczególną powagą. Twórcy Konstytucji stworzyli zatem osobną regulację, która umożliwia dochodzenie tego rodzaju odszkodowań. Odszkodowanie za bezprawne pozbawienie wolności jest jednym z przypadków „wynagrodzenia za szkody”, które przysługuje jednostce „za niezgodne z prawem działanie organu władzy publicznej” (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/77'>art. 77</a> ust. 1).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 42",
    slug: "42",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Odpowiedzialności karnej podlega ten tylko, kto dopuścił się czynu zabronionego pod groźbą kary przez ustawę obowiązującą w czasie jego popełnienia. Zasada ta nie stoi na przeszkodzie ukaraniu za czyn, który w czasie jego popełnienia stanowił przestępstwo w myśl prawa międzynarodowego.</p>
			<p class="pt-4">2. Każdy, przeciw komu prowadzone jest postępowanie karne, ma prawo do obrony we wszystkich stadiach postępowania. Może on w szczególności wybrać obrońcę lub na zasadach określonych w ustawie korzystać z obrońcy z urzędu.</p>
			<p class="pt-4">3. Każdego uważa się za niewinnego, dopóki jego wina nie zostanie stwierdzona prawomocnym wyrokiem sądu.</p>
		`,
    desc: `
			<p>1 Twórcy Konstytucji w sposób szczególny podkreślili tutaj odpowiedzialność za przestępstwa, a więc takie czyny zabronione pod groźbą kary, które są społecznie nieakceptowalne, wysoko szkodliwe, przy których wymierzane dolegliwości powinny być szczególnie odczuwalne. Zasadę, że odpowiedzialności karnej podlega tylko ten, kto popełnia czyn zabroniony pod groźbą kary przez ustawę obowiązującą w czasie jego popełnienia, prawnicy opisują po łacinie jako nullum crimen sine lege (nullum crimen, nulla poena sine lege poenali anteriori).	Zarówno zasada nullum crime (nie ma przestępstwa) jak i zasada nulla poena (nie ma kary) znajdują swoje źródło już w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>artykule 31</a> ust. 3 Konstytucji (Ograniczenia w zakresie korzystania z konstytucyjnych wolności i praw mogą być ustanawiane tylko w ustawie i tylko wtedy, gdy są konieczne w demokratycznym państwie dla jego bezpieczeństwa). Obie zasady mają charakter absolutny i nie mogą być poddawane żadnym wyjątkom.</p>
			<p class="pt-2">2. Prawo do obrony oznacza możliwość podejmowania wszelkich działań zgodnych z prawem, które mają potwierdzić wersję zdarzeń uczestnika postępowania (jego niewinność lub określony charakter winy). W żadnym wypadku nie można wymagać współdziałania w udowodnieniu stawianych zarzutów. Prawo to przysługuje na wszystkich stadiach postępowania i we wszystkich instancjach. Za każdym razem występuje w pełnym zakresie, niezależnie od zapadłych orzeczeń.	Niezwykle istotne jest w tym wypadku prawo do korzystania z pomocy obrońcy. Obrońca działa w interesie podejrzanego, umożliwiając mu pełne i efektywne korzystanie z przysługujących praw.</p>
			<p class="pt-2">3. Fakt popełnienia zabronionego czynu oraz fakt popełnienia go w sposób zawiniony muszą być udowodnione. Domniemanie niewinności odnosi się do każdego, kto dopuścił się czynu zabronionego, a nie jedynie do oskarżonego. Takie szerokie ujęcie jest istotne ponieważ artykuł 42 dotyczy odpowiedzialności karnej i postępowania karnego w każdej postaci. Przepis ten należy bezpośrednio powiązać z prawem do sądu (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/45'>art. 45</a> ust. 1). Jednocześnie warto podkreślić, że wyroki sądowe to najczęściej spotykane rozstrzygnięcia orzekające o wymierzeniu kary. Domniemanie niewinności przypisane jest również osobom, przeciwko którym toczy się dochodzenie lub śledztwo, a także obwinionym o popełnienie wykroczenia lub innego czynu zabronionego pod groźbą kary.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 43",
    slug: "43",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Zbrodnie wojenne i zbrodnie przeciwko ludzkości nie podlegają przedawnieniu.</p>
		`,
    desc: `
			<p>Prawo karne co do zasady przewiduje instytucję przedawnienia. Jeśli ściganie sprawcy stało się możliwe dopiero po upływie znacznego czasu, odstępuje się od ścigania. Często bowiem czyn zatarł się już w pamięci, a sprawca jest innym człowiekiem. Artykuł 43 wprowadza jednak dwa wyjątki od tej zasady: pierwszy dotyczy zbrodni wojennych a drugi – zbrodni przeciwko ludzkości. Zbrodnie wojenne to najcięższe przestępstwa popełniane w trakcie wojny, niezależnie przeciwko komu zostały popełnione. O ile Polska nie zdecyduje się na ekstradycję lub przekazanie sprawy odpowiedniemu trybunałowi międzynarodowemu, jest zobowiązana do wszczęcia postępowania karnego. W przypadku zbrodni wojennej nie przyjmuje się jako okoliczności wyłączającej odpowiedzialność działania na rozkaz przełożonego. Zbrodnie przeciwko ludzkości to masowe zamachy przeciwko całym grupom ludności w celu wykonania lub wsparcia polityki państwa lub organizacji. Szczególną formą zbrodni przeciwko ludzkości jest ludobójstwo, czyli czyny zmierzające do eksterminacji pewnych grup ludności jako grup o szczególnych cechach społecznych, narodowych, religijnych czy rasowych. Winni takich zbrodni powinni zostać osądzeni przez władze polskie niezależnie od momentu popełnienia tego czynu.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 44",
    slug: "44",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Bieg przedawnienia w stosunku do przestępstw, nie ściganych z przyczyn politycznych, popełnionych przez funkcjonariuszy publicznych lub na ich zlecenie, ulega zawieszeniu do czasu ustania tych przyczyn.</p>
		`,
    desc: `
			<p>Podobna regulacja nie występowała przed rokiem 1997 w polskim konstytucjonalizmie. Aby wystąpiło zawieszenie biegu przedawnienia, wymagane jest spełnienie dwóch przesłanek:</p>
			<ul class="pl-4">
				<li>1) przestępstwo musi być popełnione przez funkcjonariusza publicznego (lub na jego zlecenie), oraz</li>
				<li>2) w stosunku do sprawcy tego czynu z przyczyn politycznych nie wszczęto lub przerwano (zawieszono) postępowanie (dochodzenie, śledztwo).</li>
			</ul>
			<p class="pt-2">Nie chodzi jedynie o przestępstwa polityczne, ale o wszystkie przestępstwa – w tym także czyny wymienione w art. 43. Przepis ten ma szczególne znaczenie w kontekście zdarzeń, które zaszły w trakcie trwania poprzedniego ustroju. Obecnie nieściganie przestępstw z przyczyn politycznych jest niekonstytucyjne.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 45",
    slug: "45",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdy ma prawo do sprawiedliwego i jawnego rozpatrzenia sprawy bez nieuzasadnionej zwłoki przez właściwy, niezależny, bezstronny i niezawisły sąd.</p>
			<p class="pt-4">2. Wyłączenie jawności rozprawy może nastąpić ze względu na moralność, bezpieczeństwo państwa i porządek publiczny oraz ze względu na ochronę życia prywatnego stron lub inny ważny interes prywatny. Wyrok ogłaszany jest publicznie.</p>
		`,
    desc: `
			<p>Każdy może zwrócić się do sądu, gdy poszukuje sprawiedliwości lub gdy odczuwa potrzebę ustalenia swojego statusu prawnego. Prawo do sądu oznacza, że o statusie jednostki decyduje ostatecznie sąd – i nikt inny. Prawo do sądu jest również gwarancją praw i wolności jednostki, pod warunkiem, że sąd jest niezawisły i niezależny.</p>
			<p class="pt-2">Z takiego ukształtowania artykułu 45 wynika także zasada dostępności do sądów. Powinno być to względnie łatwe (także w sprawach rozpoznawanych przez wyższe instancje), a wszelkie ograniczenia w tym zakresie muszą być zgodne z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>art. 31</a> ust. 3 Konstytucji.</p>
			<p class="pt-2">Prawo do niezawisłego i niezależnego sądu wynika także z dalszych szczegółowych rozwiązań konstytucyjnych (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/173'>art. 173</a>, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/178'>178</a> oraz <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/186'>186</a> Konstytucji). Sąd nie może sprzyjać żadnej ze stron procesowych, musi być bezstronny, także – a może szczególnie – w sprawach, w których jednostka procesuje się z państwem. Tak rozumiana bezstronność sędziów jest elementem ich niezależności i niezawisłości. Artykuł 45 charakteryzuje również sposób działania sądów – sprawy powinny być rozpatrywane sprawiedliwie, jawnie i bez nieuzasadnionej zwłoki.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 46",
    slug: "46",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Przepadek rzeczy może nastąpić tylko w przypadkach określonych w ustawie i tylko na podstawie prawomocnego orzeczenia sądu.</p>
		`,
    desc: `
			<p>Artykuł 46 nawiązuje bezpośrednio do prawa własności jednostki, uregulowanego w artykule 64 Konstytucji. Umieszczenie tej regulacji w podrozdziale dotyczącym wolności osobistych stanowi wzmocnienie instytucji prawa własności i wyklucza pozbawienie jednostki własności całości posiadanych przez nią dóbr.</p>
			<p class="pt-2">Własność nie może być nikomu odebrania ani przez akt ustawodawczy, ani wykonawczy. Dopuszczalne jest natomiast wywłaszczenie (art. 21), które nie oznacza „przepadku rzeczy” w związku z konstytucyjnym nakazem „słusznego odszkodowania”, który rekompensuje utracone dobro.</p>
			<p class="pt-2">Jedynie sądy poprzez prawomocne orzeczenia mogą orzekać o pozbawieniu własności, jeśli w danej sytuacji przewiduje to ustawa.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 47",
    slug: "47",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każdy ma prawo do ochrony prawnej życia prywatnego, rodzinnego, czci i dobrego imienia oraz do decydowania o swoim życiu osobistym.</p>
		`,
    desc: `
			<p>Artykuł ten dotyczy dwóch sytuacji: prawa jednostki do prawnej ochrony wskazanych sfer życia oraz prawa do decydowania o sprawach dotyczących życia osobistego.</p>\
			<p class="pt-2">Z prawa do ochrony życia prywatnego wynika obowiązek władz publicznych, by uregulować te zagadnienia oraz powstrzymać się od ingerencji w sfery prywatne. Przepis ten powiązany jest bezpośrednio z wolnością człowieka (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>art. 31</a> ust. 1) i wolnością osobistą jednostki (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/41'>art. 41</a>).</p>
			<p class="pt-2">Twórcy Konstytucji posłużyli się trzema zazębiającymi się pojęciami: życie prywatne, życie rodzinne oraz życie osobiste.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 48",
    slug: "48",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Rodzice mają prawo do wychowania dzieci zgodnie z własnymi przekonaniami. Wychowanie to powinno uwzględniać stopień dojrzałości dziecka, a także wolność jego sumienia i wyznania oraz jego przekonania.</p>
			<p class="pt-4">2. Ograniczenie lub pozbawienie praw rodzicielskich może nastąpić tylko w przypadkach określonych w ustawie i tylko na podstawie prawomocnego orzeczenia sądu.</p>
		`,
    desc: `
			<p>Wychowanie oznacza zaszczepianie i umacnianie w dzieciach określonego światopoglądu, przekonań, systemu wartości, zasad obyczajowych, moralnych i etycznych poprzez świadome działania rodziców. Rodzice mają tu swobodę postępowania i wolność od wszelkich postronnych ingerencji. Dopiero gdyby przekazywanie pewnych treści należało zakwalifikować jako demoralizację, mogą wkroczyć organy państwa celem ochrony dziecka.</p>
			<p class="pt-2">Prawo do wychowywania zgodnie z własnymi przekonaniami, podobnie jak i inne prawa rodzicielskie mogą być ograniczane, a nawet odebrane rodzicom w sytuacjach określonych w ustawie.</p>
			<p class="pt-2">Wynika to z zasady priorytetu dobra dziecka.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 49",
    slug: "49",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Zapewnia się wolność i ochronę tajemnicy komunikowania się. Ich ograniczenie może nastąpić jedynie w przypadkach określonych w ustawie i w sposób w niej określony.</p>
		`,
    desc: `
			<p>Tajemnica korespondencji jest jedną z tradycyjnych wolności obywatelskich. Wolność komunikowania się obejmuje możliwość porozumiewania się ludzi między sobą, komunikowania wiadomości, ocen, wrażeń, itd. Artykuł 49 dotyczy jednak tylko komunikowania się za pomocą środka przekazu. Komunikacja bezpośrednia jest zagwarantowana przez prawo do prywatności. Twórcy Konstytucji, by kompleksowo uregulować wolność komunikowania się jednostki, zapewnili także wolność wyrażania poglądów (w artykule 54). Wolności te rozróżnia się poprzez analizę okoliczności przekazywania treści (wolność słowa polega na adresowaniu swego stanowiska do nieokreślonych indywidualnie osób). Wolność ta obejmuje również wolność otrzymywania określonych treści. Tajemnica komunikowania się to:</p>
			<ul class="pl-4">
				<li>1) prawo do nieujawniania treści przekazu,</li>
				<li>2) prawo do nieujawniania faktu, że się przekaz otrzymało,</li>
				<li>3) zakaz zdobywania wiedzy o treści przekazu bez zgody adresata (zakaz ten dotyczy także władz publicznych).</li>
			</ul>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 50",
    slug: "50",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Zapewnia się nienaruszalność mieszkania. Przeszukanie mieszkania, pomieszczenia lub pojazdu może nastąpić jedynie w przypadkach określonych w ustawie i w sposób w niej określony.</p>
		`,
    desc: `
			<p>Nienaruszalność mieszkania uregulowana została analogicznie do swobody korespondencji – wraz z zakazem wglądu do niej osób trzecich. Prawo to może być określane jako niezakłócone korzystanie ze swego mieszkania (tzw. mir domowy) i ma bezpośredni związek z prawem do prywatności oraz zasadą godności. 	Za naruszenie mieszkania uznaje się wkraczanie do mieszkania bez zgody osób tam zamieszkujących bądź nieopuszczenie go na żądanie mieszkańców. Może być więc rozumiane jako zakaz przeszukiwania (bez dostatecznych podstaw) oraz zakaz wszelkiego nieuprawnionego wkraczania i przebywania w nim. Podmiotami zobowiązanymi do szanowania tej wolności są wszystkie inne osoby, w tym ewentualny właściciel mieszkania lub przedstawiciele organów władzy i pracownicy służb publicznych. Uprawnieni do korzystania z nienaruszalności są mieszkańcy (a więc także lokatorzy).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 51",
    slug: "51",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Nikt nie może być obowiązany inaczej niż na podstawie ustawy do ujawniania informacji dotyczących jego osoby.</p>
			<p class="pt-4">2. Władze publiczne nie mogą pozyskiwać, gromadzić i udostępniać innych informacji o obywatelach niż niezbędne w demokratycznym państwie prawnym.</p>
			<p class="pt-4">3. Każdy ma prawo dostępu do dotyczących go urzędowych dokumentów i zbiorów danych. Ograniczenie tego prawa może określić ustawa.</p>
			<p class="pt-4">4. Każdy ma prawo do żądania sprostowania oraz usunięcia informacji nieprawdziwych, niepełnych lub zebranych w sposób sprzeczny z ustawą.</p>
			<p class="pt-4">5. Zasady i tryb gromadzenia oraz udostępniania informacji określa ustawa.</p>
		`,
    desc: `
			<p>Artykuł ten stanowi o:
			<ul class="pl-4">
				<li>1) wolności jednostki od ujawniania informacji jej dotyczących innym osobom oraz szczególnie władzom publicznym. Wolności tej odpowiada zakaz podejmowania prób uzyskiwania tego rodzaju informacji poprzez przesłuchiwanie (indagację);</li>
				<li>2) kompetencji władz publicznych do pozyskiwania, gromadzenia oraz udostępniania informacji o obywatelach w zakresie niezbędnym w demokratycznym państwie prawnym;</li>
				<li>3) prawie dostępu każdego mieszkańca Polski do dotyczących go dokumentów urzędowych i zbiorów danych;</li>
				<li>4) prawie żądania sprostowania informacji zawartych w zbiorach dokumentów urzędowych lub w zbiorach danych, o ile są to informacje nieprawdziwe, niepełne lub zebrane niezgodnie z ustawą;</li>
				<li>5) prawie żądania usunięcia informacji zawartych w jednym lub drugim zbiorze w tych samych przypadkach.</li>
			</ul>
			<p class="pt-2">Władze publiczne nie mogą dla własnych celów dokumentować danych osobowych, sprawdzać i dokumentować zachowań osób prywatnych czy zmuszać do ujawniania swych indywidualnych cech, właściwości oraz postępowania.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 52",
    slug: "52",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdemu zapewnia się wolność poruszania się po terytorium Rzeczypospolitej Polskiej oraz wyboru miejsca zamieszkania i pobytu.</p>
			<p class="pt-4">2. Każdy może swobodnie opuścić terytorium Rzeczypospolitej Polskiej.</p>
			<p class="pt-4">3. Wolności, o których mowa w ust. 1 i 2, mogą podlegać ograniczeniom określonym w ustawie.</p>
			<p class="pt-4">4. Obywatela polskiego nie można wydalić z kraju ani zakazać mu powrotu do kraju.</p>
			<p class="pt-4">5. Osoba, której pochodzenie polskie zostało stwierdzone zgodnie z ustawą, może osiedlić się na terytorium Rzeczypospolitej Polskiej na stałe.</p>
		`,
    desc: `
			<p>Swoboda poruszania się jest tradycyjną, klasyczną wolnością jednostki, zazwyczaj traktowaną jako przejaw realizacji wolności osobistej (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>art. 31</a> ust. 2). Artykuł 52 należy postrzegać również jako przejaw prawa do decydowania o życiu osobistym (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/47'>art. 47</a>) oraz jako przykład ogólnego, wolnościowego statusu jednostki (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>art. 31</a> ust. 1).</p>
			<p class="pt-2">Wolność poruszania się oznacza możliwość zmiany miejsca pobytu, zamieszkiwanie (jeśli dysponuje się mieszkaniem) lub pobyt (niezależnie od posiadania mieszkania i tymczasowości). Konstytucja reguluje także swobodę wyjazdu z Polski w dowolnym celu oraz swobodę emigrowania. Wolności te przysługują nie tylko obywatelom RP, ale każdej jednostce.</p>
			<p class="pt-2">Obywatel polski przebywający w Rzeczypospolitej, nie może być deportowany do innego państwa (zakaz wydalenia z kraju), nie można mu również zakazać powrotu do kraju.</p>
			<p class="pt-2">Cudzoziemcy, których pochodzenie polskie zostało stwierdzone, mają zaś prawo osiedlenia się na stałe na terytorium Polski.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 53",
    slug: "53",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdemu zapewnia się wolność sumienia i religii.</p>
			<p class="pt-4">2. Wolność religii obejmuje wolność wyznawania lub przyjmowania religii według własnego wyboru oraz uzewnętrzniania indywidualnie lub z innymi, publicznie lub prywatnie, swojej religii przez uprawianie kultu, modlitwę, uczestniczenie w obrzędach, praktykowanie i nauczanie. Wolność religii obejmuje także posiadanie świątyń i innych miejsc kultu w zależności od potrzeb ludzi wierzących oraz prawo osób do korzystania z pomocy religijnej tam, gdzie się znajdują.</p>
			<p class="pt-4">3. Rodzice mają prawo do zapewnienia dzieciom wychowania i nauczania moralnego i religijnego zgodnie ze swoimi przekonaniami. Przepis <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/48'>art. 48</a> ust. 1 stosuje się odpowiednio.</p>
			<p class="pt-4">4. Religia kościoła lub innego związku wyznaniowego o uregulowanej sytuacji prawnej może być przedmiotem nauczania w szkole, przy czym nie może być naruszona wolność sumienia i religii innych osób.</p>
			<p class="pt-4">5. Wolność uzewnętrzniania religii może być ograniczona jedynie w drodze ustawy i tylko wtedy, gdy jest to konieczne do ochrony bezpieczeństwa państwa, porządku publicznego, zdrowia, moralności lub wolności i praw innych osób.</p>
			<p class="pt-4">6. Nikt nie może być zmuszany do uczestniczenia ani do nieuczestniczenia w praktykach religijnych.</p>
			<p class="pt-4">7. Nikt nie może być obowiązany przez organy władzy publicznej do ujawnienia swojego światopoglądu, przekonań religijnych lub wyznania.</p>
		`,
    desc: `
			<p>Wolność sumienia i religii zaliczona została do wolności o charakterze osobistym, a uznanie i poszanowanie jej przez państwo i społeczeństwo wynika z obowiązku ochrony godności ludzkiej.</p>
			<p class="pt-2">Przysługuje ona każdemu, a nie jedynie obywatelom polskim.</p>
			<p class="pt-2">Wolność sumienia polega na możliwości przyjmowania dowolnego światopoglądu. Wolność religii jest jedną z sytuacji realizowania się wolności sumienia i ma miejsce w przypadku przyjęcia światopoglądu uznającego istnienie Boga (niezależnie od jego wizji w rozmaitych religiach). Wolność ta zakłada wymóg tolerowania zwolenników różnych światopoglądów, głoszonych przez nich wypowiedzi i ich praktyk religijnych.</p>
			<p class="pt-2">Twórcy Konstytucji w ustępie drugim tego artykułu wskazali na pewne konkretne przejawy realizacji tej wolności, jednak jest to katalog otwarty i można go rozszerzać.</p>
			<p class="pt-2">Artykuł ten gwarantuje również dwa odrębne prawa w tym zakresie: prawo do korzystania z pomocy religijnej tam, gdzie się przebywa (a zatem także np. w miejscach pozbawienia wolności i szpitalach) oraz prawo do nauczania religii w szkołach (dotyczy to także nauczania religii mniejszościowych i etyki).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 54",
    slug: "54",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdemu zapewnia się wolność wyrażania swoich poglądów oraz pozyskiwania i rozpowszechniania informacji.</p>
			<p class="pt-4">2. Cenzura prewencyjna środków społecznego przekazu oraz koncesjonowanie prasy są zakazane. Ustawa może wprowadzić obowiązek uprzedniego uzyskania koncesji na prowadzenie stacji radiowej lub telewizyjnej.</p>
		`,
    desc: `
			<p>Wolność słowa, wyrażana bezpośrednio lub poprzez środki przekazu, jest tradycyjną wolnością konstytucyjną. Artykuł 54 gwarantuje trzy odrębne choć powiązane ze sobą wolności: wolność wyrażania swoich poglądów, wolność pozyskiwania informacji oraz wolność rozpowszechniania informacji.</p>
			<p class="pt-2">Wyrażenie „pogląd” należy w tym wypadku rozumieć jak najszerzej, jako wyrażanie osobistych ocen, prezentowanie opinii czy przypuszczeń, informowanie o faktach etc. Wolność ta ma zastosowanie zarówno w sferze publicznej jak i prywatnej (choć szczególnego znaczenia nabiera na gruncie przestrzeni publicznej, życia społecznego, a zwłaszcza politycznego), obejmuje osoby fizyczne i prawne. Forma wyrażania poglądów może być dowolna, niekoniecznie poprzez wypowiedzi słowne (np. poprzez noszenie określonego stroju).</p>
			<p class="pt-2">Wolność pozyskiwania informacji dotyczyć może zbierania danych z dowolnych sfer życia publicznego (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/61'>art. 61</a> Konstytucji nakłada na władze obowiązek udzielania odpowiednich informacji) lub prywatnego.</p>
			<p class="pt-2">Poprzez rozpowszechnianie informacji należy rozumieć udostępnianie zebranych danych osobom trzecim (indywidualnie wybranym) lub upowszechnianie ich (czyli podawanie do wiadomości publicznej, np. poprzez środki społecznego przekazu). Potwierdza to konstytucyjną zasadę wolności prasy zawartą w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/14'>art. 14</a>.</p>
			<p class="pt-2" class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 55",
    slug: "55",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Ekstradycja obywatela polskiego jest zakazana, z wyjątkiem przypadków określonych w ust. 2 i 3.</p>
			<p class="pt-4">2. Ekstradycja obywatela polskiego może być dokonana na wniosek innego państwa lub sądowego organu międzynarodowego, jeżeli możliwość taka wynika z ratyfikowanej przez Rzeczpospolitą Polską umowy międzynarodowej lub ustawy wykonującej akt prawa stanowionego przez organizację międzynarodową, której Rzeczpospolita Polska jest członkiem, pod warunkiem że czyn objęty wnioskiem o ekstradycję:</p>
			<ul class="pl-4">
				<li>1) został popełniony poza terytorium Rzeczypospolitej Polskiej, oraz</li>
				<li>2) stanowił przestępstwo według prawa Rzeczypospolitej Polskiej lub stanowiłby przestępstwo według prawa Rzeczypospolitej Polskiej w razie popełnienia na terytorium Rzeczypospolitej Polskiej, zarówno w czasie jego popełnienia, jak i w chwili złożenia wniosku.</li>
			</ul>
			<p class="pt-4">3. Nie wymaga spełnienia warunków określonych w ust. 2 pkt 1 i 2 ekstradycja mająca nastąpić na wniosek sądowego organu międzynarodowego powołanego na podstawie ratyfikowanej przez Rzeczpospolitą Polską umowy międzynarodowej, w związku z objętą jurysdykcją tego organu zbrodnią ludobójstwa, zbrodnią przeciwko ludzkości, zbrodnią wojenną lub zbrodnią agresji.</p>
			<p class="pt-4">4. Ekstradycja jest zakazana, jeżeli dotyczy osoby podejrzanej o popełnienie bez użycia przemocy przestępstwa z przyczyn politycznych lub jej dokonanie będzie naruszać wolności i prawa człowieka i obywatela.</p>
			<p class="pt-4">5. W sprawie dopuszczalności ekstradycji orzeka sąd.</p>
		`,
    desc: `
			<p>Ekstradycja oznacza wydanie przez władze jednego państwa władzom innego państwa (na jego żądanie) osoby podejrzanej o popełnienie przestępstwa lub skazanej, w celu pociągnięcia tej osoby do odpowiedzialności karnej lub wykonania orzeczonej kary.</p>
			<p class="pt-2">Mianem ekstradycji określa się wszelkie jej formy, w tym przekazanie na podstawie Europejskiego Nakazu Aresztowania (ENA) i przekazanie na podstawie Statutu Międzynarodowego Trybunału Karnego.</p>
			<p class="pt-2">Artykuł 55 ust. 1 w brzmieniu sprzed nowelizacji z 2006 roku stanowił, iż „ekstradycja obywatela polskiego jest zakazana". Przepisy te zostały obecnie doprecyzowane:</p>
			<ul class="pl-4">
				<li>1) Aby ekstradycja polskiego obywatela była konstytucyjnie dopuszczalna, wszystkie elementy wyznaczające miejsce popełnienia przestępstwa muszą wystąpić poza terytorium Polski.</li>
				<li>2) Ekstradycji obywatela polskiego można dokonać, jeśli jego czyn stanowił przestępstwo według prawa polskiego lub stanowiłby je w razie popełnienia go na terytorium Polski.</li>
			</ul>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 56",
    slug: "56",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Cudzoziemcy mogą korzystać z prawa azylu w Rzeczypospolitej Polskiej na zasadach określonych w ustawie.</p>
			<p class="pt-4">2. Cudzoziemcowi, który w Rzeczypospolitej Polskiej poszukuje ochrony przed prześladowaniem, może być przyznany status uchodźcy zgodnie z wiążącymi Rzeczpospolitą Polską umowami międzynarodowymi.</p>
		`,
    desc: `
			<p>Status azylanta lub uchodźcy mogą uzyskać jedynie cudzoziemcy (obywatele innych państw lub bezpaństwowcy). Osoby te znajdują się pod władzą Rzeczypospolitej i z tego powodu korzystają z praw i wolności zapewnionych w Konstytucji.</p>
			<p class="pt-2">Statusu azylanta lub uchodźcy nie uzyskuje się automatycznie, należy się o niego ubiegać przed organami państwa (powody i procedurę – która musi być również zgodna z zasadami konstytucyjnymi – określa ustawa lub umowa międzynarodowa).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 57",
    slug: "57",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każdemu zapewnia się wolność organizowania pokojowych zgromadzeń i uczestniczenia w nich. Ograniczenie tej wolności może określać ustawa.</p>
		`,
    desc: `
			<p>Z konstytucyjnej wolności zgromadzeń można wyprowadzić kilka praw podmiotowych: prawo do organizowania zgromadzenia, kierowania jego przebiegiem, uczestniczenia lub nieuczestniczenia w zgromadzeniu i prawo do ochrony ze strony państwa lub innych władz publicznych.</p>
			<p class="pt-2">Wszelka ingerencja władz publicznych w sferę wolności zgromadzeń musi być powściągliwa i musi mieć uzasadnienie prawne.</p>
			<p class="pt-2">Warunkiem objęcia zgromadzenia ochroną konstytucyjną jest jego pokojowy charakter.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 58",
    slug: "58",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdemu zapewnia się wolność zrzeszania się.</p>
			<p class="pt-4">2. Zakazane są zrzeszenia, których cel lub działalność są sprzeczne z Konstytucją lub ustawą. O odmowie rejestracji lub zakazie działania takiego zrzeszenia orzeka sąd.</p>
			<p class="pt-4">3. Ustawa określa rodzaje zrzeszeń podlegających sądowej rejestracji, tryb tej rejestracji oraz formy nadzoru nad tymi zrzeszeniami.</p>
		`,
    desc: `
			<p>Wolność zrzeszania się ujęto jako zasadę ustrojową (społeczeństwa obywatelskiego) w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/12'>art. 12</a> Konstytucji. Jest ona źródłem szeregu praw podmiotowych, takich jak:</p>
			<ul class="pl-4">
				<li>1) prawo do tworzenia zrzeszeń (w tym prawo swobodnego określenia celu, rodzaju, struktury władz i nazwy zrzeszenia),</li>
				<li>2) prawo do przystępowania lub nieprzystępowania do zrzeszeń już istniejących (w tym określenie warunków członkostwa),</li>
				<li>3) prawo do wystąpienia ze zrzeszenia,</li>
				<li>4) prawo do udziału w kierowaniu zrzeszeniem (uczestniczenia w pracach, tworzenia struktur, swobodnego działania w granicach prawa).</li>
			</ul>
			<p class="pt-2">Sama instytucja zrzeszenia ma także prawo do swobodnego działania. Ważnym aspektem korzystania z tej wolności jest dobrowolność zrzeszeń (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/11'>art. 11</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/12'>12</a> Konstytucji). Władze państwa muszą odpowiednio rozważnie decydować o ewentualnej dopuszczalnej ingerencji w wolność zrzeszania się (zawsze jedynie na podstawie i w granicach obowiązującego prawa).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 59",
    slug: "59",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Zapewnia się wolność zrzeszania się w związkach zawodowych, organizacjach społeczno-zawodowych rolników oraz w organizacjach pracodawców.</p>
			<p class="pt-4">2. Związki zawodowe oraz pracodawcy i ich organizacje mają prawo do rokowań, w szczególności w celu rozwiązywania sporów zbiorowych, oraz do zawierania układów zbiorowych pracy i innych porozumień.</p>
			<p class="pt-4">3. Związkom zawodowym przysługuje prawo do organizowania strajków pracowniczych i innych form protestu w granicach określonych w ustawie. Ze względu na dobro publiczne ustawa może ograniczyć prowadzenie strajku lub zakazać go w odniesieniu do określonych kategorii pracowników lub w określonych dziedzinach.</p>
			<p class="pt-4">4. Zakres wolności zrzeszania się w związkach zawodowych i organizacjach pracodawców oraz innych wolności związkowych może podlegać tylko takim ograniczeniom ustawowym, jakie są dopuszczalne przez wiążące Rzeczpospolitą Polską umowy międzynarodowe.</p>
		`,
    desc: `
		<p>Artykuł ten konkretyzuje ogólną wolność zrzeszania się z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/58'>art. 58</a> Konstytucji. Wolność działalności w związkach zawodowych jest niezwykle istotna z perspektywy historii Polski, dlatego przepis ten jest szczególnie rozbudowany i reguluje różnorodne zagadnienia. Gwarantuje to bowiem, że ograniczenia tej wolności zgodne z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>art. 31</a> ust. 3 zawarte w ustawie nie mogą wykraczać poza szczegółowo określone ramy. Formy zrzeszania się przewidziane w tym przepisie Konstytucji to:</p>
		<ul class="pl-4">
			<li>1) związki zawodowe,</li>
			<li>2) organizacje społeczno-zawodowe rolników,</li>
			<li>3) organizacje pracodawców.</li>
		</ul>
		<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 60",
    slug: "60",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Obywatele polscy korzystający z pełni praw publicznych mają prawo dostępu do służby publicznej na jednakowych zasadach.</p>
		`,
    desc: `
			<p>Prawo to przysługuje jedynie obywatelom polskim korzystającym z pełni praw publicznych. Nie dotyczy osób prawnych i innych podmiotów zbiorowych.</p>
			<p class="pt-2">Regulacja ta tworzy prawo równego dostępu do służby cywilnej. Posługuje się wyrażeniem „dostęp na jednakowych zasadach”. Jednakowe zasady mają zapewnić równość szans wszystkich spełniających określone warunki osób, które ubiegają się o objęcie służby publicznej Szczególnie ważne jest w tym kontekście równe traktowanie kobiet i mężczyzn.</p>
			<p class="pt-2">Prawo do „dostępu” nie oznacza automatycznego przyjęcia do służby publicznej, a jedynie możliwość ubiegania się. Państwo ma obowiązek stworzenia formalnych gwarancji zapobiegających nieuzasadnionej i bezprawnej dyskryminacji.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 61",
    slug: "61",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Obywatel ma prawo do uzyskiwania informacji o działalności organów władzy publicznej oraz osób pełniących funkcje publiczne. Prawo to obejmuje również uzyskiwanie informacji o działalności organów samorządu gospodarczego i zawodowego a także innych osób oraz jednostek organizacyjnych w zakresie, w jakim wykonują one zadania władzy publicznej i gospodarują mieniem komunalnym lub majątkiem Skarbu Państwa.</p>
			<p class="pt-4">2. Prawo do uzyskiwania informacji obejmuje dostęp do dokumentów oraz wstęp na posiedzenia kolegialnych organów władzy publicznej pochodzących z powszechnych wyborów, z możliwością rejestracji dźwięku lub obrazu.</p>
			<p class="pt-4">3. Ograniczenie prawa, o którym mowa w ust. 1 i 2, może nastąpić wyłącznie ze względu na określone w ustawach ochronę wolności i praw innych osób i podmiotów gospodarczych oraz ochronę porządku publicznego, bezpieczeństwa lub ważnego interesu gospodarczego państwa.</p>
			<p class="pt-4">4. Tryb udzielania informacji, o których mowa w ust. 1 i 2, określają ustawy, a w odniesieniu do Sejmu i Senatu ich regulaminy.</p>
		`,
    desc: `
			<p>1. Prawo dostępu do informacji publicznej, czyli prawo do informacji o działalności organów władzy publicznej, a także osób pełniących funkcje publiczne, zagwarantowane jest jedynie obywatelom, co jest związane z politycznym charakterem tego prawa. Warto wskazać, ze konstytucyjne prawo do informacji o stanie i ochronie środowiska jest zagwarantowane każdemu, także osobom nieposiadającym obywatelstwa (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/74'>art. 74</a> ust. 3). Prawo do informacji publicznej przysługuje bez względu na ewentualny interes prawny w dostępie do danej informacji, dlatego nie jest konieczne podawanie powodu ubiegania się o informację. Może być też realizowane w różnych formach. Prawo obywateli nie jest ograniczone tylko do organów przedstawicielskich. Z treści art. 61 ust. 1 wynika, że obejmuje ono także uzyskiwanie informacji o działalności samorządu gospodarczego i zawodowego, a także innych jednostek organizacyjnych, jeśli wykonują one zadania władzy publicznej, a także jeśli gospodarują mieniem komunalnym lub majątkiem Skarbu Państwa.</p>
			<p class="pt-2">2-4. Prawo do informacji może być realizowane w różnych formach. Konstytucja wymienia tylko najważniejsze z nich, co nie wyczerpuje pełnego katalogu. Z tych najważniejszych form wymienia się dostęp do dokumentów, a także wstęp na posiedzenia kolegialnych organów władzy publicznej pochodzących z powszechnych wyborów (posiedzenia Sejmu, Senatu, organów stanowiących samorządu terytorialnego), z prawem rejestracji dźwięku lub zapisu. Ograniczenia tego prawa, o których wspomina ustęp 3, nie są liczne i zostały uzasadnione potrzebą ochrony wolności i praw innych osób, ochrony porządku publicznego, bezpieczeństwa lub ważnego interesu gospodarczego państwa.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 62",
    slug: "62",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Obywatel polski ma prawo udziału w referendum oraz prawo wybierania Prezydenta Rzeczypospolitej, posłów, senatorów i przedstawicieli do organów samorządu terytorialnego, jeżeli najpóźniej w dniu głosowania kończy 18 lat.</p>
			<p class="pt-4">2. Prawo udziału w referendum oraz prawo wybierania nie przysługuje osobom, które prawomocnym orzeczeniem sądowym są ubezwłasnowolnione lub pozbawione praw publicznych albo wyborczych.</p>
		`,
    desc: `
			<p>Prawo do głosowania ma obywatel polski, który najpóźniej w dniu głosowania kończy 18 lat. Jest to granica tzw. czynnego prawa wyborczego, czyli prawa wybierania.</p>
			<p class="pt-2">Konstytucja przewiduje jednak pewne wyłączenia: prawo to nie przysługuje osobom, które prawomocnym orzeczeniem sądowym są ubezwłasnowolnione lub pozbawione praw publicznych albo wyborczych. Szczegółowo prawa wyborcze reguluje Kodeks wyborczy, który w zakresie czynnego prawa wyborczego przewiduje, że w wyborach do Parlamentu Europejskiego w Rzeczypospolitej takie prawo ma:</p>
			<ul class="pl-4">
				<li>1) obywatel polski, który najpóźniej w dniu głosowania kończy 18 lat,</li>
				<li>2) obywatel Unii Europejskiej niebędący obywatelem polskim, który najpóźniej w dniu głosowania kończy 18 lat oraz stale zamieszkuje na terytorium Rzeczypospolitej Polskiej.</li>
			</ul>
			<p class="pt-2">Prawo wyborcze w wyborach do organów stanowiących jednostek samorządu terytorialnego przysługuje:<p>
			<ul class="pl-4">
				<li>1) do rady gminy – obywatelowi polskiemu oraz obywatelowi Unii Europejskiej niebędącemu obywatelem polskim, który najpóźniej w dniu głosowania kończy 18 lat oraz stale zamieszkuje na obszarze tej gminy,</li>
				<li>2) do rady powiatu i sejmiku województwa – obywatelowi polskiemu, który najpóźniej w dniu głosowania kończy 18 lat oraz stale zamieszkuje na obszarze, odpowiednio, tego powiatu i województwa; </li>
				<li>3) wójta w danej gminie – osobie mającej prawo wybierania do rady tej gminy.</li>
			</ul>
			<p class="pt-2">Krąg osób posiadających bierne prawo wyborcze (prawo wybieralności) jest ukształtowany różnie w zależności od rodzaju wyborów.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 63",
    slug: "63",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każdy ma prawo składać petycje, wnioski i skargi w interesie publicznym, własnym lub innej osoby za jej zgodą do organów władzy publicznej oraz do organizacji i instytucji społecznych w związku z wykonywanymi przez nie zadaniami zleconymi z zakresu administracji publicznej. Tryb rozpatrywania petycji, wniosków i skarg określa ustawa.</p>
		`,
    desc: `
			<p>Przepis ten reguluje prawo do występowania do władz publicznych, organizacji i instytucji społecznych z określonymi wnioskami. Konstytucja prawo to pojmuje szeroko przewidując takie formuły jak: petycje, wnioski, a także skargi. Prawo to, co warto podkreślić, przysługuje każdemu, a więc nie tylko obywatelom polskim.</p>
			<p class="pt-2">Adresatem petycji, wniosków i skarg mogą być organy władzy publicznej oraz organizacje i instytucje społeczne w ramach zadań im zleconych z zakresu administracji publicznej. Tryb ich rozpatrywania określa ustawa.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 64",
    slug: "64",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdy ma prawo do własności, innych praw majątkowych oraz prawo dziedziczenia.</p>
			<p class="pt-4">2. Własność, inne prawa majątkowe oraz prawo dziedziczenia podlegają równej dla wszystkich ochronie prawnej.</p>
			<p class="pt-4">3. Własność może być ograniczona tylko w drodze ustawy i tylko w zakresie, w jakim nie narusza ona istoty prawa własności.</p>
		`,
    desc: `
			<p>Konstytucja rozróżnia własność od innych praw majątkowych i wyraźnie akcentuje jej wyższą rangę. Odrębnie art. 64 gwarantuje ochronę prawa dziedziczenia. Adresatem obowiązków wynikających z tego prawa (w tym zapewnienia im równej ochrony prawnej) są władze publiczne.</p>
			<p class="pt-2">Ani prawo własności ani inne prawa majątkowe nie mają charakteru absolutnego. Zakres dopuszczalnych ograniczeń prawa własności określa <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>art. 31</a> ust. 3 oraz art. 64 ust. 3 (tylko w drodze ustawy, nie może naruszać istoty prawa). Powtórzenie niektórych przesłanek w obu tych przepisach jeszcze bardziej podkreśla znaczenie prawa własności. Gwarancje z art. 64 ust. 3 nie odnoszą się jednak do innych niż własność praw majątkowych.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 65",
    slug: "65",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdemu zapewnia się wolność wyboru i wykonywania zawodu oraz wyboru miejsca pracy. Wyjątki określa ustawa.</p>
			<p class="pt-4">2. Obowiązek pracy może być nałożony tylko przez ustawę.</p>
			<p class="pt-4">3. Stałe zatrudnianie dzieci do lat 16 jest zakazane. Formy i charakter dopuszczalnego zatrudniania określa ustawa.</p>
			<p class="pt-4">4. Minimalną wysokość wynagrodzenia za pracę lub sposób ustalania tej wysokości określa ustawa.</p>
			<p class="pt-4">5. Władze publiczne prowadzą politykę zmierzającą do pełnego, produktywnego zatrudnienia poprzez realizowanie programów zwalczania bezrobocia, w tym organizowanie i wspieranie poradnictwa i szkolenia zawodowego oraz robót publicznych i prac interwencyjnych.</p>
		`,
    desc: `
			<p>1. Konstytucja rozróżnia własność od innych praw majątkowych i wyraźnie akcentuje jej wyższą rangę. Odrębnie <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/64'>art. 64</a> gwarantuje ochronę prawa dziedziczenia. Adresatem obowiązków wynikających z tego prawa (w tym zapewnienia im równej ochrony prawnej) są władze publiczne. Ani prawo własności ani inne prawa majątkowe nie mają charakteru absolutnego. Zakres dopuszczalnych ograniczeń prawa własności określa <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/31'>art. 31</a> ust. 3 oraz <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/64'>art. 64</a> ust. 3 (tylko w drodze ustawy, nie może naruszać istoty prawa). Powtórzenie niektórych przesłanek w obu tych przepisach jeszcze bardziej podkreśla znaczenie prawa własności. Gwarancje z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/64'>art. 64</a> ust. 3 nie odnoszą się jednak do innych niż własność praw majątkowych.</p>
			<p class="pt-2">2-5. Kolejne ustępy art. 65 regulują bardziej szczegółowo prawa pracownicze. Ustęp drugi określa aspekt negatywny wolności pracy. Oznacza on zakaz wprowadzania obowiązku pracy, któremu niepodporządkowanie się prowadziłoby do sankcji karnych lub administracyjnych. Władza nie może narzucić podjęcia pracy. Zakaz pracy przymusowej oznacza też zakaz zmuszania kogokolwiek przez władze do podejmowania określonego zatrudnienia (rodzaju czy miejsca pracy). Zakaz ten nie ma jednak charakteru absolutnego i dopuszcza się ustawowe nałożenie obowiązku pracy (musiałoby być to jednak zgodne z wiążącym Polskę prawem międzynarodowym). Konstytucja zakazuje także stałego zatrudniania dzieci do lat 16. Przepis ten jest jedną z gwarancji ochrony praw dziecka (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/72'>art. 72</a>). Konstytucyjnym obowiązkiem ustawodawcy jest określenie minimalnej wysokości wynagrodzenia za pracę oraz sposobu ustalania tej wysokości. Wyraźnie zakazuje się różnicowania wynagrodzenia za pracę jednakowej wartości ze względu na płeć (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/33'>art. 33</a> ust. 2). Z artykułu 65 można zatem wyprowadzić prawo pracownika do minimalnego wynagrodzenia.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 66",
    slug: "66",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdy ma prawo do bezpiecznych i higienicznych warunków pracy. Sposób realizacji tego prawa oraz obowiązki pracodawcy określa ustawa.</p>
			<p class="pt-4">2. Pracownik ma prawo do określonych w ustawie dni wolnych od pracy i corocznych płatnych urlopów; maksymalne normy czasu pracy określa ustawa.</p>
		`,
    desc: `
			<p>Artykuł ten omawia dwa szczegółowe zagadnienia dotyczące indywidualnego prawa pracy:</p>
			<ul class="pl-4">
				<li>1. Prawo do bezpiecznych i higienicznych warunków pracy (ust. 1). Przepis ten nakłada na ustawodawcę obowiązek uregulowania sposobu realizacji tego prawa bez naruszania jego istoty.</li>
				<li>2. Uprawnienia związane z czasem pracy (ust. 2), pośrednio wyrażające ogólne prawo do wypoczynku.</li>
			</ul>
			<p class="pt-2">Analizować je można zatem w kontekście zasady ochrony pracy (art. 24) oraz prawa do ochrony zdrowia (art. 68).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 67",
    slug: "67",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Obywatel ma prawo do zabezpieczenia społecznego w razie niezdolności do pracy ze względu na chorobę lub inwalidztwo oraz po osiągnięciu wieku emerytalnego. Zakres i formy zabezpieczenia społecznego określa ustawa.</p>
			<p class="pt-4">2. Obywatel pozostający bez pracy nie z własnej woli i nie mający innych środków utrzymania ma prawo do zabezpieczenia społecznego, którego zakres i formy określa ustawa.</p>
		`,
    desc: `
			<p>Podmiotem prawa do zabezpieczenia społecznego jest obywatel Polski. Adresatem obowiązków, które z niego wynikają, są władze publiczne.</p>
			<p class="pt-2">Z artykułu tego wynika zatem nakaz ustanowienia systemu zabezpieczenia społecznego i określenia sposobu jego finansowania. Rzeczywisty zakres i formy zabezpieczenia społecznego określi dopiero ustawodawca, który ma dużą swobodę regulacyjną w tym zakresie.</p>
			<p class="pt-2">Treścią tego prawa jest zagwarantowanie obywatelom świadczeń na wypadek:</p>
			<ul class="pl-4">
				<li>1) niezdolności do pracy ze względu na chorobę,</li>
				<li>2) niezdolność do pracy z powodu niepełnosprawności,</li>
				<li>3) osiągnięcia wieku emerytalnego,</li>
				<li>4) pozostawania bez pracy nie z własnej woli i nieposiadanie innych środków utrzymania.</li>
			</ul>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 68",
    slug: "68",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdy ma prawo do ochrony zdrowia.</p>
			<p class="pt-4">2. Obywatelom, niezależnie od ich sytuacji materialnej, władze publiczne zapewniają równy dostęp do świadczeń opieki zdrowotnej finansowanej ze środków publicznych. Warunki i zakres udzielania świadczeń określa ustawa.</p>
			<p class="pt-4">3. Władze publiczne są obowiązane do zapewnienia szczególnej opieki zdrowotnej dzieciom, kobietom ciężarnym, osobom niepełnosprawnym i osobom w podeszłym wieku.</p>
			<p class="pt-4">4. Władze publiczne są obowiązane do zwalczania chorób epidemicznych i zapobiegania negatywnym dla zdrowia skutkom degradacji środowiska.</p>
			<p class="pt-4">5. Władze publiczne popierają rozwój kultury fizycznej, zwłaszcza wśród dzieci i młodzieży.</p>
		`,
    desc: `
			<p>1. Artykuł ten zapewnia każdemu prawo do ochrony zdrowia, natomiast pozostałe ustępy skierowane są już do władz publicznych. Jest on przedmiotem licznych dyskusji, które dotyczą głównie charakteru zagwarantowanego w nim prawa (czy jest to prawo socjalne czy osobiste), sposobu jego interpretacji), a także tego, czy poszczególne ustępy wyrażają publiczne prawa podmiotowe czy są to wyłącznie normy programowe. Najmniej wątpliwości budzi art. 68 ust. 1 Konstytucji RP, który należy uznać za publiczne prawo podmiotowe.	Cały przepis został sformułowany w taki sposób by nie mógł stworzyć po stronie obywatela żadnych roszczeń, nie oznacza to jednak, że nie można wyciągnąć z niego innych wniosków.		Normy programowe można odczytywać w taki sposób, że jest w nich zagwarantowane minimum praw obywatelskich, którym odpowiada minimum obowiązków ciążących na władzy publicznej. Dlatego także na tej podstawie obywatele mogą dochodzić swoich praw.</p>
			<p class="pt-2">2. Kolejne ustępy artykułu 68 nakładają na władze określone obowiązki:</p>
			<ul class="pl-4">
				<li>1) zapewnienia obywatelom, niezależnie od ich sytuacji materialnej, równego dostępu do świadczeń opieki zdrowotnej finansowanej ze środków publicznych,</li>
				<li>2) określenia w drodze ustawy warunków i zakresu udzielania tych świadczeń,</li>
				<li>3) zapewnienia szczególnej opieki zdrowotnej dzieciom, kobietom ciężarnym, osobom z niepełnosprawnościami i osobom w podeszłym wieku,</li>
				<li>4) zwalczania chorób epidemicznych i zapobiegania negatywnym dla zdrowia skutkom degradacji środowiska,</li>
				<li>5) popierania rozwoju kultury fizycznej, zwłaszcza wśród dzieci i młodzieży.</li>
			</ul>
			<p>Ustęp 2 ustanawia zasadę równego dostępu obywateli do świadczeń opieki zdrowotnej finansowanej ze środków publicznych oraz dostępu niezależnie od sytuacji materialnej. Chociaż gwarantuje obywatelom równy dostęp do świadczeń, nie formułuje jednak jakichkolwiek gwarancji bezpłatności – choćby podstawowych świadczeń. Pojęcie „dostępu” nie jest jednoznaczne. Konstytucja nie określa także zakresu świadczeń opieki zdrowotnej dostępnych dla obywateli na równych zasadach, odsyłając to zagadnienie do uregulowania w ustawie.</p>
			<p class="pt-2">3. Konieczność zapewnienia szczególnej opieki zdrowotnej dzieciom, kobietom ciężarnym, osobom z niepełnosprawnościami i w podeszłym wieku stanowi wyjątek od obowiązku zapewnienia wszystkim obywatelom – niezależnie od ich sytuacji materialnej – równego dostępu do świadczeń opieki zdrowotnej finansowanych ze środków publicznych.	Art. 68 ust. 3 Konstytucji RP nie jest uważany za źródło praw podmiotowych dla wymienionych w nim osób. Nie oznacza to jednak, że władze publiczne mogą lekceważyć wynikające z niego obowiązki. Nie można jednoznacznie stwierdzić, jakie konkretne działania, zgodnie z wolą twórców Konstytucji należałoby zaliczyć do szczególnej opieki zdrowotnej. Władze publiczne mają w tym zakresie daleko idącą swobodę. 3. Konieczność zapewnienia szczególnej opieki zdrowotnej dzieciom, kobietom ciężarnym, osobom z niepełnosprawnościami i w podeszłym wieku stanowi wyjątek od obowiązku zapewnienia wszystkim obywatelom – niezależnie od ich sytuacji materialnej – równego dostępu do świadczeń opieki zdrowotnej finansowanych ze środków publicznych.	Art. 68 ust. 3 Konstytucji RP nie jest uważany za źródło praw podmiotowych dla wymienionych w nim osób. Nie oznacza to jednak, że władze publiczne mogą lekceważyć wynikające z niego obowiązki. Nie można jednoznacznie stwierdzić, jakie konkretne działania, zgodnie z wolą twórców Konstytucji należałoby zaliczyć do szczególnej opieki zdrowotnej. Władze publiczne mają w tym zakresie daleko idącą swobodę.</p>
			<p class="pt-2">4. Ten przepis Konstytucji nakłada na władze publiczne obowiązek zwalczania chorób epidemicznych i zapobiegania negatywnym dla zdrowia skutkom degradacji środowiska.	Komentatorzy podkreślają, że chodzi przede wszystkim o podejmowanie działań prewencyjnych, tj. profilaktycznych, edukacyjnych, dbałość o higienę, kontrolę zakażeń oraz leczenie chorób epidemicznych<sup title="Konstytucja Rzeczypospolitej Polskiej. Komentarz, pod red. L. Garlickiego, tom III – Warszawa 2003 r.">1</sup>.	Ten obowiązek należy analizować łącznie z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/74'>art. 74</a> Konstytucji, który zobowiązuje władze publiczne do prowadzenia polityki zapewniającej bezpieczeństwo ekologiczne współczesnemu i przyszłym pokoleniom, ochrony środowiska, wspierania działań obywateli na rzecz poprawy stanu środowiska oraz zapewnienia jednostkom prawa do informacji o stanie i ochronie środowiska, a także z art. 86, który nakłada na każdego obowiązek dbałości o stan środowiska oraz odpowiedzialność za jego pogorszenie, której zasady określa ustawa.</p>
			<p class="pt-2">5. W art. 68 ust. 5 Konstytucji uregulowany został obowiązek nałożony na władze publiczne, by popierały kulturę fizyczną i jej rozwój, zwłaszcza wśród dzieci i młodzieży. Może to być realizowane poprzez budowę obiektów sportowych, ścieżek rowerowych, lodowisk, basenów, organizowanie konkursów dla dzieci i młodzieży, popieranie tego typu działań oraz prowadzenie kampanii nakłaniających do uprawiania sportu.
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 69",
    slug: "69",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Osobom niepełnosprawnym władze publiczne udzielają, zgodnie z ustawą, pomocy w zabezpieczaniu egzystencji, przysposobieniu do pracy oraz komunikacji społecznej.</p>
		`,
    desc: `
			<p>Artykuł ten formułuje zasadę polityki państwa, nie przybiera zaś formy prawa podmiotowego. Przepis ten wyraźnie wskazuje na określone obowiązki, leżące po stronie władz publicznych. Nie można więc wyprowadzić z niego roszczeń dla jednostki.</p>
			<p class="pt-2">Przepis ten ma ścisły związek z zasadą godności jednostki. Udzielenie pomocy osobom z niepełnosprawnościami, tak by mogły prowadzić życie w społeczeństwie, dotyczyć ma trzech dziedzin:</p>
			<ul class="pl-4">
				<li>1) zabezpieczenia egzystencji (pokrywa się to częściowo z normą wynikającą z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/67'>art. 67</a> ust. 1, odrębne uregulowanie sytuacji osób z niepełnosprawnościami sugeruje dopuszczalność przyznania im pewnych preferencji);</li>
				<li>2) przysposobienia do pracy (w tym tworzenie programów szkoleniowych i przygotowawczych, wprowadzanie zachęt i ułatwień);</li>
				<li>3) komunikacji społecznej (w tym tworzenie odpowiedniej infrastruktury).</li>
			</ul>
			<p class="pt-2">Sposób i zakres tej pomocy ma określać ustawa.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 70",
    slug: "70",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdy ma prawo do nauki. Nauka do 18 roku życia jest obowiązkowa. Sposób wykonywania obowiązku szkolnego określa ustawa.</p>
			<p class="pt-4">2. Nauka w szkołach publicznych jest bezpłatna. Ustawa może dopuścić świadczenie niektórych usług edukacyjnych przez publiczne szkoły wyższe za odpłatnością.</p>
			<p class="pt-4">3. Rodzice mają wolność wyboru dla swoich dzieci szkół innych niż publiczne. Obywatele i instytucje mają prawo zakładania szkół podstawowych, ponadpodstawowych i wyższych oraz zakładów wychowawczych. Warunki zakładania i działalności szkół niepublicznych oraz udziału władz publicznych w ich finansowaniu, a także zasady nadzoru pedagogicznego nad szkołami i zakładami wychowawczymi, określa ustawa.</p>
			<p class="pt-4">4. Władze publiczne zapewniają obywatelom powszechny i równy dostęp do wykształcenia. W tym celu tworzą i wspierają systemy indywidualnej pomocy finansowej i organizacyjnej dla uczniów i studentów. Warunki udzielania pomocy określa ustawa.</p>
			<p class="pt-4">5. Zapewnia się autonomię szkół wyższych na zasadach określonych w ustawie.</p>
		`,
    desc: `
			<p>1. Przepis ten należy interpretować w powiązaniu między innymi z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/73'>art. 73</a> (wolność nauczania i badań naukowych) i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/53'>art. 53</a> (prawo rodziców do wychowywania i nauczania zgodnego z ich przekonaniami).	Tak ukształtowane prawo do nauki stanowi prawo podmiotowe jednostki, jest również przesłanką należytej realizacji pozostałych wolności i praw. Jego treścią jest możliwość zdobywania wiedzy, kształcenia prowadzonego w zorganizowanych formach, w sposób regularny i ciągły, obejmującego kształcenie podstawowe jak i wiedzę specjalistyczną, jednolitego na terenie całego kraju. Kształcenie to ma umożliwić dalsze zdobywanie wiedzy lub wykonywanie określonego zawodu.	Prawo to przysługuje zarówno obywatelom jak i cudzoziemcom.</p>
			<p class="pt-2">2. Kolejne ustępy artykułu 70 formułują szczegółowe gwarancje prawa do nauki:</p>
			<ul class="pl-4">
				<li>1) zasadę dwusektorowości systemu szkolnictwa (równoległe istnienie systemu szkół publicznych i niepublicznych);</li>
				<li>2) zasadę bezpłatności nauki w szkołach publicznych;</li>
				<li>3) zasadę powszechnego i równego dostępu do wykształcenia;</li>
				<li>4) zasadę pomocy władz publicznych dla uczniów i studentów.</li>
			</ul>
			<p>Zasada bezpłatności (ustęp 2) dotyczy jedynie szkół publicznych, dlatego ich funkcjonowanie musi być w całości finansowane ze środków publicznych. Wolność zakładania i prowadzenia odpłatnych szkół niepublicznych jest elementem wolności gospodarczej. W publicznych szkołach wyższych dopuszczalne jest tworzenie równoległych systemów studiów odpłatnych.</p>
			<p class="pt-2">3. Ustęp 3 w zdaniu 1 reguluje wolność wyboru typu szkoły – publicznej lub niepublicznej. Z tego przepisu można również wyprowadzić zakaz dyskryminowania szkół niepublicznych i ich uczniów. Kolejne ustępy precyzują wolność zakładania szkół innych niż publiczne, np. prowadzonych przez Kościół. Jest to gwarancja zasady pluralizmu w kontekście wolności religii i praw rodziców do wychowywania dzieci zgodnie z własnymi przekonaniami.	4. Zasada powszechnego i równego dostępu do wykształcenia odnosi się jedynie do obywateli Rzeczypospolitej. Przepis ten tworzy zasadę polityki państwa, a nie prawo podmiotowe, więc nie stwarza bezpośrednich roszczeń. Jednakże zasada powszechności i równości ma bezpośredni związek z realizacją prawa do nauki i jest konieczna, by w pełni korzystać z tego prawa.	Zasada ta dotyczy kształcenia w systemie szkolnictwa publicznego. Powszechność nauki oznacza, że każda osoba objęta obowiązkiem szkolnym musi mieć zapewnioną możliwość nauki w szkole publicznej, chyba że decyduje się na korzystanie z oferty szkół niepublicznych. Z zasady powszechności wynika także, że osoby, które ukończyły 18 lat, również muszą mieć zagwarantowaną możliwość pobierania nauki w szkołach na różnych szczeblach. Równość w dostępie do nauki to realizacja ogólnej zasady równości (art. 32). Każdy powinien mieć jednakową szansę podjęcia nauki w szkołach na różnych szczeblach edukacji. Szczególnie istotne w tym kontekście jest uwzględnienie <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/33'>art. 33</a> i zapewnienie równości w dostępie do nauki niezależnie od płci.</p>
			<p class="pt-2">4. Ustęp 4 tworzy także zasadę pomocy władz publicznych dla uczniów i studentów, której realizacja może odbywać się na różne przewidziane przez ustawodawcę sposoby.</p>
			<p class="pt-2">5. Zasada autonomii szkół wyższych dotyczy zarówno szkół publicznych, jak i niepublicznych. Te drugie, w związku ze swoim charakterem, są niezależne od władz publicznych. Zasada autonomii nie odnosi się do szkół innych szczebli. Uczelnie, korzystając z autonomii, nie mogą jednak podejmować działań sprzecznych z powszechnie obowiązującym prawem.	Poprzez tę zasadę Konstytucja chroni sferę wolności prowadzenia badań naukowych i kształcenia w ramach obowiązującego porządku prawnego. Władzom szkół wyższych musi być pozostawiona sfera swobodnego decydowania o nauce i nauczaniu, decydowania o organizacji wewnętrznej i władzach uczelni, toku nauczania, zasadach przyjmowania studentów, określenia ich praw i obowiązków. Szczególnie istotne jest w tym wypadku zadbanie o odpowiednie gwarancje praw studentów i studentek.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 71",
    slug: "71",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Państwo w swojej polityce społecznej i gospodarczej uwzględnia dobro rodziny. Rodziny znajdujące się w trudnej sytuacji materialnej i społecznej, zwłaszcza wielodzietne i niepełne, mają prawo do szczególnej pomocy ze strony władz publicznych.</p>
			<p class="pt-4">2. Matka przed i po urodzeniu dziecka ma prawo do szczególnej pomocy władz publicznych, której zakres określa ustawa.</p>
		`,
    desc: `
			<p>1. Artykuł ten jest fragmentem szerszej regulacji konstytucyjnej, która formułuje zasadę pomocniczości oraz przyznania szczególnej ochrony i opieki małżeństwu, rodzinie, macierzyństwu i rodzicielstwu (art. 18). Ustęp 1 obejmuje zagadnienie ochrony rodziny. Konstytucyjne pojęcie rodziny odnosi się do każdego trwałego związku dwóch lub więcej osób, zazwyczaj opartego na małżeństwie i więzach pokrewieństwa lub powinowactwa. W zdaniu 2 wprowadza pojęcie rodziny niepełnej, które dotyczy w szczególności rodzica samodzielnie wychowującego dzieci. Nie ma na gruncie tego artykułu przeszkód dla rozumienia przez pojęcie rodziny związków osób tej samej płci. Nakaz uwzględnienia w polityce społecznej i gospodarczej dobra rodziny to typowe zadanie państwa. Zdanie 2 ustępu 1 formułuje również prawo podmiotowe, które przysługuje rodzinom znajdującym się w trudnej sytuacji materialnej i społecznej (dotyczyć ma jednocześnie obu sfer – finansowej i środowiskowej). Treścią tego prawa jest uzyskanie szczególnej pomocy ze strony władz publicznych.</p>
			<p class="pt-2">2. Ustęp drugi reguluje sytuację matki i łączy się bezpośrednio z zasadą ochrony macierzyństwa (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/18'>art. 18</a>). Regulację ujęto w formę prawa podmiotowego matki w sytuacjach przed i po urodzeniu dziecka. Tym samym art. 71 odnosi się zarówno do kobiet w ciąży, jak i w pierwszym okresie po porodzie. Prawo to odnosi się zarówno do kobiet będących obywatelkami Polski jak i cudzoziemkami. Treścią prawa jest zapewnienie szczególnej pomocy matce. Pomoc ta i jej szczególny charakter oznacza, że powinna wykraczać poza zwykłe potrzeby rodziny. Przepisy Konstytucji nie konkretyzują jednak jej formy. Ustawodawcy przysługuje zatem szeroka swoboda w regulowaniu form i zakresu tej pomocy.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 72",
    slug: "72",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Rzeczpospolita Polska zapewnia ochronę praw dziecka. Każdy ma prawo żądać od organów władzy publicznej ochrony dziecka przed przemocą, okrucieństwem, wyzyskiem i demoralizacją.</p>
			<p class="pt-4">2. Dziecko pozbawione opieki rodzicielskiej ma prawo do opieki i pomocy władz publicznych.</p>
			<p class="pt-4">3. W toku ustalania praw dziecka organy władzy publicznej oraz osoby odpowiedzialne za dziecko są obowiązane do wysłuchania i w miarę możliwości uwzględnienia zdania dziecka.</p>
			<p class="pt-4">4. Ustawa określa kompetencje i sposób powoływania Rzecznika Praw Dziecka.</p>
		`,
    desc: `
			<p>Art. 72 normuje kilka kwestii:</p>
			<ul class="pl-4">
				<li>1) ustala obowiązek władz publicznych do zapewnienia ochrony praw dziecka, z czym łączy się prawo każdego do żądania ochrony dziecka przed szczególnie drastycznymi naruszeniami tych praw (ust. 1);</li>
				<li>2) ustala zasadę pierwszeństwa roli rodziców w sprawowaniu opieki nad dzieckiem i pomocniczej roli władz w tym zakresie (ust. 2);</li>
				<li>3) uznaje podmiotowość dziecka i wynikające stąd jego uprawnienia (ust. 3);</li>
				<li>4) nakazuje utworzenie urzędu Rzecznika Praw Dziecka (ust. 4).</li>
			</ul>
			<p class="pt-2">Dobro dziecka na podstawie tego przepisu staje się samoistną wartością konstytucyjną, która uzupełnia szersze dobro rodziny. Zgodnie z Konwencją o prawach dziecka, dzieckiem jest każda istota ludzka w wieku poniżej 18 lat, chyba że zgodnie z prawem uzyska ono wcześniej pełnoletniość.</p>
			<p class="pt-2">Konstytucja podchodzi do koncepcji pozycji dziecka na dwa sposoby: po pierwsze określa zasady i zakres poddania dziecka władzy innych osób (np. rodziców i opiekunów), po drugie zapewnia mu możliwość samodzielnego realizowania niektórych wolności i praw.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 73",
    slug: "73",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każdemu zapewnia się wolność twórczości artystycznej, badań naukowych oraz ogłaszania ich wyników, wolność nauczania, a także wolność korzystania z dóbr kultury.</p>
		`,
    desc: `
			<p>Art. 73 ponownie tworzy kilka wolności:</p>
			<ul class="pl-4">
				<li>1) wolność twórczości artystycznej (wolność sztuki – swoboda tworzenia dzieł artystycznych wszelkiego rodzaju);</li>
				<li>2) wolność badań naukowych (swoboda wyboru przedmiotu badań i wolność ogłaszania wyników tych badań) oraz wolność nauczania (czyli swoboda systematycznego przekazywania wiedzy naukowej innym osobom). Wspólnie wolności te tworzą wolność nauki;</li>
				<li>3) wolność korzystania z dóbr kultury (gwarantuje dostęp do efektów twórczości innych osób).</li>
			</ul>
			<p class="pt-2">Wolności te bezpośrednio powiązane są z wolnością wyrażania poglądów (art. 54), są szczególną forma jej realizacji. Zostały one ujęte w formę prawa podmiotowego, więc wynikają z nich roszczenia indywidualne</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>

		`,
  },
  {
    title: "Art. 74",
    slug: "74",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Władze publiczne prowadzą politykę zapewniającą bezpieczeństwo ekologiczne współczesnemu i przyszłym pokoleniom.</p>
			<p class="pt-4">2. Ochrona środowiska jest obowiązkiem władz publicznych.</p>
			<p class="pt-4">3. Każdy ma prawo do informacji o stanie i ochronie środowiska.</p>
			<p class="pt-4">4. Władze publiczne wspierają działania obywateli na rzecz ochrony i poprawy stanu środowiska.</p>
		`,
    desc: `
			<p>Ochrona środowiska jest jedną z zasadniczych wartości chronionych przez Konstytucję. Rzeczpospolita Polska zapewnia ochronę środowiska, kierując się zasadą zrównoważonego rozwoju, zaś władze publiczne mają obowiązek ochrony środowiska i prowadzenia polityki zapewniającej bezpieczeństwo ekologiczne współczesnemu i przyszłym pokoleniom.</p>
			<p class="pt-2">Artykuł 74 przede wszystkim formułuje zadania i obowiązki władz publicznych i tworzy zasadę polityki państwa. Dwa zasadnicze obowiązki to ochrona środowiska (ust. 2) oraz wspieranie odpowiednich działań obywateli (ust 4). Ochrona środowiska to całokształt działań i narzędzi, które przeciwdziałają pogorszaniu się stanu środowiska. Warto podkreślić w tym kontekście przeciwdziałanie negatywnym dla zdrowia skutkom degradacji środowiska (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/68'>art. 68</a> ust. 4).</p>
			<p class="pt-2">Ustęp trzeci formułuje prawo podmiotowe (obywateli i cudzoziemców) do informacji o stanie i ochronie środowiska. Jest to konkretyzacja szerszego prawa do informacji (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/54'>art. 54</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/61'>art. 61</a>).</p>
			<p class="pt-2">Adresatem tych obowiązków są władze publiczne.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 75",
    slug: "75",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Władze publiczne prowadzą politykę sprzyjającą zaspokojeniu potrzeb mieszkaniowych obywateli, w szczególności przeciwdziałają bezdomności, wspierają rozwój budownictwa socjalnego oraz popierają działania obywateli zmierzające do uzyskania własnego mieszkania.</p>
			<p class="pt-4">2. Ochronę praw lokatorów określa ustawa.</p>
		`,
    desc: `
			<p>Twórcy Konstytucji powstrzymali się od sformułowania prawa do mieszkania, jako prawa podmiotowego obywateli. Artykuł ten nakłada jednak pewne obowiązki na władze publiczne w tym zakresie: chodzi o prowadzenie polityki sprzyjającej zaspokajaniu potrzeb mieszkaniowych obywateli.</p>
			<p class="pt-2">Przepis ten nie konkretyzuje zakresu, form czy metod działania władz publicznych. Jednak w zadaniach szczegółowych wskazano na pierwszym miejscu eliminowanie zjawiska bezdomności, które to zjawisko kłóci się z zasadą godności jednostki.</p>
			<p class="pt-2">Kolejny obowiązek szczegółowy państwa dotyczy obywateli w gorszej sytuacji finansowej, którym państwo powinno pomagać poprzez rozwój budownictwa socjalnego. Władze mają również popierać działania obywateli zmierzające do uzyskania własnego mieszkania. Realizacją tego zadania może być takie ukształtowanie systemu prawa, by przewidywał on system tanich kredytów, zwolnień i ulg podatkowych, czy bezpośrednią pomoc finansową dla potrzebujących.</p>
			<p class="pt-2">Ustęp drugi tego artykułu nakłada obowiązek przyjęcia ustawy, która zapewni ochronę prawną szeroko rozumianych lokatorów (w tym także najemców).</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 76",
    slug: "76",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Władze publiczne chronią konsumentów, użytkowników i najemców przed działaniami zagrażającymi ich zdrowiu, prywatności i bezpieczeństwu oraz przed nieuczciwymi praktykami rynkowymi. Zakres tej ochrony określa ustawa.</p>
		`,
    desc: `
			<p>Przepis ten formułuje kolejną zasadę polityki państwa, która tworzy obowiązki po stronie władz publicznych. Beneficjentami tych obowiązków są konsumenci, użytkownicy i najemcy – nie ma znaczenia zatem kwestia obywatelstwa.</p>
			<p class="pt-2">Konstytucja nakłada na władze publiczne obowiązek ochrony praw konsumentów, użytkowników i najemców przed działaniami, które mogą zagrozić ich zdrowiu, prywatności i bezpieczeństwu. Konstytucja chroni też konsumenta przed nieuczciwymi praktykami rynkowymi.</p>
			<p class="pt-2">Celem działań władz publicznych ma być więc stworzenie takiego systemu prawnego, który pozwoli na zapobieganie i przeciwstawianie się naruszeniom w tym zakresie.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 77",
    slug: "77",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdy ma prawo do wynagrodzenia szkody, jaka została mu wyrządzona przez niezgodne z prawem działanie organu władzy publicznej.</p>
			<p class="pt-4">2. Ustawa nie może nikomu zamykać drogi sądowej dochodzenia naruszonych wolności lub praw.</p>
		`,
    desc: `
			<p>1. Przepis ten obejmuje każdego, komu została wyrządzona szkoda przez niezgodne z prawem działanie organu władzy publicznej. Ponadto oznacza on, że prawo do wynagrodzenia szkody przysługuje nie tylko obywatelowi polskiemu, ale także obcokrajowcom. Komentatorzy wskazują różne źródła potencjalnej szkody, spowodowanej działaniem władz publicznych: jednostkowe działania faktyczne (czynności materialno-techniczne), wydanie aktu indywidualnego (orzeczeń sądowych, aktów administracyjnych), nienormatywne akty generalne, akty normatywne (z ustawami włącznie). Konieczną przesłanką uzasadniającą roszczenie o wynagrodzenie szkody, jest stwierdzenie niezgodności z prawem działań organów władzy publicznej.</p>
			<p class="pt-2">2. Regulacja ta ma uniwersalny wymiar. Gwarantuje drogę sądową nie tylko w sprawach o roszczenia odszkodowawcze wobec władzy publicznej, ale również gwarantuje drogę sądową w orzekaniu o wszelkich przypadkach naruszenia praw i wolności. Prawo do sądu należy do jednych z podstawowych praw jednostki i stanowi jedną z fundamentalnych gwarancji praworządności. Komentatorzy podkreślają, że zakres przedmiotowy ustępu 2 ma nieporównywalnie szerszy charakter i wiąże się raczej z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/45'>art. 45</a> ust. 1 Konstytucji niż z art. 77 ust. 1. Oba wspomniane przepisy nie powtarzają swojej treści, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/45'>art. 45</a> stanowi pozytywne ujęcie prawa do sądu, natomiast art. 77 ust 2. negatywne. Art. 77 ust. 2 dotyczy dochodzenia naruszonych wolności i praw zagwarantowanych w Konstytucji RP. Sąd Najwyższy stwierdził, że posługuje się on pojęciem drogi sądowej w szerokim znaczeniu, obejmującej postępowanie przed jakimkolwiek sądem przewidzianym w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/175'>art. 175</a> Konstytucji, a więc przed Sądem Najwyższym, sądami powszechnym, administracyjnymi i wojskowymi.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 78",
    slug: "78",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każda ze stron ma prawo do zaskarżenia orzeczeń i decyzji wydanych w pierwszej instancji. Wyjątki od tej zasady oraz tryb zaskarżania określa ustawa.</p>
		`,
    desc: `
			<p>Konstytucja gwarantuje stronom prawo do zaskarżania orzeczeń i decyzji wydanych w pierwszej instancji.</p>
			<p class="pt-2">Jak orzekł Trybunał Konstytucyjny, organ rozpoznający środek zaskarżenia powinien mieć możliwość merytorycznej oceny prawidłowości rozstrzygnięcia w sprawie<sup title="wyrok TK z 24 lutego 2015 r., K 34/12">1</sup>. „Konstytucyjne prawo zaskarżania orzeczeń i decyzji wydanych w pierwszej instancji stanowi bardzo istotny czynnik urzeczywistniania tzw. sprawiedliwości proceduralnej"<sup title="wyrok TK z 16 listopada 1999 r., SK 11/99">2</sup>.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 79",
    slug: "79",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Każdy, czyje konstytucyjne wolności lub prawa zostały naruszone, ma prawo, na zasadach określonych w ustawie, wnieść skargę do Trybunału Konstytucyjnego w sprawie zgodności z Konstytucją ustawy lub innego aktu normatywnego, na podstawie którego sąd lub organ administracji publicznej orzekł ostatecznie o jego wolnościach lub prawach albo o jego obowiązkach określonych w Konstytucji.</p>
			<p class="pt-4">2. Przepis ust. 1 nie dotyczy praw określonych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/56'>art. 56</a>.</p>
		`,
    desc: `
			<p>Ochronie za pomocą skargi konstytucyjnej podlegają konstytucyjne wolności i prawa, które zostały naruszone. Prawo to przysługuje każdemu, a więc nie jest związane z faktem posiadania obywatelstwa polskiego (wyjątki przewiduje Konstytucja w ust. 2, a dotyczą one tylko cudzoziemców starających się w Polsce o azyl lub o uzyskanie statusu uchodźcy).</p>
			<p class="pt-2">Komentatorzy zauważają, że powszechna skarga konstytucyjna stanowi filar demokratycznego państwa prawnego. Sankcje w postaci orzeczenia Trybunału Konstytucyjnego powinny być stosowane wówczas, kiedy organ stanowiący prawo, w tym i parlament, zlekceważył konstytucyjne prawo jednostki.</p>
			<p class="pt-2">Trzeba pamiętać, że wniesienie skargi konstytucyjnej jest możliwe tylko w przypadku, gdy orzeczenie sądu lub decyzja organu administracji była ostateczna</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 80",
    slug: "80",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każdy ma prawo wystąpienia, na zasadach określonych w ustawie, do Rzecznika Praw Obywatelskich z wnioskiem o pomoc w ochronie swoich wolności lub praw naruszonych przez organy władzy publicznej.</p>
		`,
    desc: `
			<p>Do Rzecznika może zwrócić się obywatel polski, cudzoziemiec znajdujący się pod władzą Rzeczypospolitej Polskiej, osoba prawna, organizacja obywateli lub inna jednostka organizacyjna, jeśli może być podmiotem praw i obowiązków.</p>
			<p class="pt-2">Rzecznik może podjąć przewidziane prawem czynności na wniosek obywateli i ich organizacji, organów samorządowych, a także z własnej inicjatywy na podstawie wyników analizy obowiązujących przepisów prawnych, przeprowadzonej kontroli, informacji uzyskanej za pośrednictwem środków masowego przekazu itp.</p>
			<p class="pt-2">Bliżej zadania Rzecznika określają <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/208'>art. 208-212</a> Konstytucji oraz ustawa.</p>
			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 81",
    slug: "81",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Praw określonych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/65'>art. 65</a> ust. 4 i 5, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/66'>art. 66</a>, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/69'>art. 69</a>, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/71'>art. 71</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/74'>art. 74-76</a> można dochodzić w granicach określonych w ustawie.</p>
		`,
    desc: `
      <p>Nie wszystkie prawa i wolności zawarte w Konstytucji są chronione w ten sam sposób. Szczegółowo wymienione prawa ekonomiczne, socjalne i kulturalne mogą być dochodzone wyłącznie w granicach określonych w ustawie. Oznacza to, że władza ustawodawcza może samodzielnie ustalać mechanizm prawny ich ochrony. Ponadto, przepisy wymieniające te prawa upoważniają władzę ustawodawczą do precyzowania zakresu treściowego i osobowego tych praw. Władzę tę obciąża jednak obowiązek ich ustanowienia na poziomie co najmniej minimalnym oraz w sposób, który nie pozbawia ich rzeczywistej treści konstytucyjnej.</p>
      <p class="pt-2">Prawa wymienione w art. 81 to: prawo do minimalnego wynagrodzenia za pracę (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/65'>art. 65</a> ust. 4), prawo do bezpiecznych i higienicznych warunków pracy (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/66'>art. 66</a> ust. 1), prawo do urlopu (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/66'>art. 66</a> ust. 2), prawa osób niepełnosprawnych (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/69'>art. 69</a>), prawa rodzin w trudnej sytuacji materialnej i społecznej (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/71'>art. 71</a> ust. 1), prawa matki w związku z macierzyństwem (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/71'>art. 71</a> ust. 2), prawa związane z ochroną środowiska (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/74'>art. 74</a>), prawa lokatorskie (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/75'>art. 75</a>), prawa konsumenckie (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/76'>art. 76</a>). Niektóre z tych praw Konstytucja formułuje jako zasady polityki państwa (normy programowe), co – mimo eksponowania obowiązków władz publicznych – uniemożliwia dochodzenie bezpośrednich roszczeń na ich podstawie.</p>
      <p class="pt-2">Zakres, nawet minimalny, realizacji praw podmiotowych zawartych w art. 81 przez władzę ustawodawczą oraz sposób ich dochodzenia musi być określony w akcie normatywnym rangi nie niższej niż ustawa. Upoważnienie ustawodawcy do stworzenia samodzielnego mechanizmu ochrony tych praw oznacza również, że ich dochodzenie na drodze sądowej (<a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/77'>art. 77</a> ust. 2) może być ograniczone.</p>
      <p class="pt-2 text-right italic hover:text-red-new">autor: <a href="https://twitter.com/gorazdowski_m" rel="nofollow" target="_blank">Maciej Gorazdowski</a> ${extLink}</p>
    `,
  },
  {
    title: "Art. 82",
    slug: "82",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Obowiązkiem obywatela polskiego jest wierność Rzeczypospolitej Polskiej oraz troska o dobro wspólne.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 83",
    slug: "83",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każdy ma obowiązek przestrzegania prawa Rzeczypospolitej Polskiej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 84",
    slug: "84",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każdy jest obowiązany do ponoszenia ciężarów i świadczeń publicznych, w tym podatków, określonych w ustawie.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 85",
    slug: "85",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>1. Obowiązkiem obywatela polskiego jest obrona Ojczyzny.</p>
			<p class="pt-4">2. Zakres obowiązku służby wojskowej określa ustawa.</p>
			<p class="pt-4">3. Obywatel, któremu przekonania religijne lub wyznawane zasady moralne nie pozwalają na odbywanie służby wojskowej, może być obowiązany do służby zastępczej na zasadach określonych w ustawie.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 86",
    slug: "86",
    chapter: {
      id: "II",
      title: "Wolności, prawa i obowiązki człowieka i obywatela",
    },
    html: `
			<p>Każdy jest obowiązany do dbałości o stan środowiska i ponosi odpowiedzialność za spowodowane przez siebie jego pogorszenie. Zasady tej odpowiedzialności określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 87",
    slug: "87",
    chapter: {
      id: "III",
      title: "Źródła prawa",
    },
    html: `
			<p>1. Źródłami powszechnie obowiązującego prawa Rzeczypospolitej Polskiej są: Konstytucja, ustawy, ratyfikowane umowy międzynarodowe oraz rozporządzenia.</p>
			<p class="pt-4">2. Źródłami powszechnie obowiązującego prawa Rzeczypospolitej Polskiej są na obszarze działania organów, które je ustanowiły, akty prawa miejscowego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 88",
    slug: "88",
    chapter: {
      id: "III",
      title: "Źródła prawa",
    },
    html: `
			<p>1. Warunkiem wejścia w życie ustaw, rozporządzeń oraz aktów prawa miejscowego jest ich ogłoszenie.</p>
			<p class="pt-4">2. Zasady i tryb ogłaszania aktów normatywnych określa ustawa.</p>
			<p class="pt-4">3. Umowy międzynarodowe ratyfikowane za uprzednią zgodą wyrażoną w ustawie są ogłaszane w trybie wymaganym dla ustaw. Zasady ogłaszania innych umów międzynarodowych określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 89",
    slug: "89",
    chapter: {
      id: "III",
      title: "Źródła prawa",
    },
    html: `
			<p>1. Ratyfikacja przez Rzeczpospolitą Polską umowy międzynarodowej i jej wypowiedzenie wymaga uprzedniej zgody wyrażonej w ustawie, jeżeli umowa dotyczy:</p>
			<ul class="pl-4">
				<li>1) pokoju, sojuszy, układów politycznych lub układów wojskowych,</li>
				<li>2) wolności, praw lub obowiązków obywatelskich określonych w Konstytucji,</li>
				<li>3) członkostwa Rzeczypospolitej Polskiej w organizacji międzynarodowej,</li>
				<li>4) znacznego obciążenia państwa pod względem finansowym,</li>
				<li>5) spraw uregulowanych w ustawie lub w których Konstytucja wymaga ustawy.</li>
			</ul>
			<p class="pt-4">2. O zamiarze przedłożenia Prezydentowi Rzeczypospolitej do ratyfikacji umów międzynarodowych, których ratyfikacja nie wymaga zgody wyrażonej w ustawie, Prezes Rady Ministrów zawiadamia Sejm.</p>
			<p class="pt-4">3. Zasady oraz tryb zawierania, ratyfikowania i wypowiadania umów międzynarodowych określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 90",
    slug: "90",
    chapter: {
      id: "III",
      title: "Źródła prawa",
    },
    html: `
			<p>1. Rzeczpospolita Polska może na podstawie umowy międzynarodowej przekazać organizacji międzynarodowej lub organowi międzynarodowemu kompetencje organów władzy państwowej w niektórych sprawach.</p>
			<p class="pt-4">2. Ustawa, wyrażająca zgodę na ratyfikację umowy międzynarodowej, o której mowa w ust. 1, jest uchwalana przez Sejm większością 2/3 głosów w obecności co najmniej połowy ustawowej liczby posłów oraz przez Senat większością 2/3 głosów w obecności co najmniej połowy ustawowej liczby senatorów.</p>
			<p class="pt-4">3. Wyrażenie zgody na ratyfikację takiej umowy może być uchwalone w referendum ogólnokrajowym zgodnie z przepisem <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/125'>art. 125</a>.</p>
			<p class="pt-4">4. Uchwałę w sprawie wyboru trybu wyrażenia zgody na ratyfikację podejmuje Sejm bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby posłów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 91",
    slug: "91",
    chapter: {
      id: "III",
      title: "Źródła prawa",
    },
    html: `
			<p>1. Ratyfikowana umowa międzynarodowa, po jej ogłoszeniu w Dzienniku Ustaw Rzeczypospolitej Polskiej, stanowi część krajowego porządku prawnego i jest bezpośrednio stosowana, chyba że jej stosowanie jest uzależnione od wydania ustawy.</p>
			<p class="pt-4">2. Umowa międzynarodowa ratyfikowana za uprzednią zgodą wyrażoną w ustawie ma pierwszeństwo przed ustawą, jeżeli ustawy tej nie da się pogodzić z umową.</p>
			<p class="pt-4">3. Jeżeli wynika to z ratyfikowanej przez Rzeczpospolitą Polską umowy konstytuującej organizację międzynarodową, prawo przez nią stanowione jest stosowane bezpośrednio, mając pierwszeństwo w przypadku kolizji z ustawami.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 92",
    slug: "92",
    chapter: {
      id: "III",
      title: "Źródła prawa",
    },
    html: `
			<p>Rozporządzenia są wydawane przez organy wskazane w Konstytucji, na podstawie szczegółowego upoważnienia zawartego w ustawie i w celu jej wykonania. Upoważnienie powinno określać organ właściwy do wydania rozporządzenia i zakres spraw przekazanych do uregulowania oraz wytyczne dotyczące treści aktu.</p>
			<p class="pt-4">2. Organ upoważniony do wydania rozporządzenia nie może przekazać swoich kompetencji, o których mowa w ust. 1, innemu organowi.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 93",
    slug: "93",
    chapter: {
      id: "III",
      title: "Źródła prawa",
    },
    html: `
			<p>1. Uchwały Rady Ministrów oraz zarządzenia Prezesa Rady Ministrów i ministrów mają charakter wewnętrzny i obowiązują tylko jednostki organizacyjnie podległe organowi wydającemu te akty.</p>
			<p class="pt-4">2. Zarządzenia są wydawane tylko na podstawie ustawy. Nie mogą one stanowić podstawy decyzji wobec obywateli, osób prawnych oraz innych podmiotów.</p>
			<p class="pt-4">3. Uchwały i zarządzenia podlegają kontroli co do ich zgodności z powszechnie obowiązującym prawem.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 94",
    slug: "94",
    chapter: {
      id: "III",
      title: "Źródła prawa",
    },
    html: `
			Organy samorządu terytorialnego oraz terenowe organy administracji rządowej, na podstawie i w granicach upoważnień zawartych w ustawie, ustanawiają akty prawa miejscowego obowiązujące na obszarze działania tych organów. Zasady i tryb wydawania aktów prawa miejscowego określa ustawa.
		`,
    desc: "",
  },
  {
    title: "Art. 95",
    slug: "95",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Władzę ustawodawczą w Rzeczypospolitej Polskiej sprawują Sejm i Senat.</p>
			<p class="pt-4">2. Sejm sprawuje kontrolę nad działalnością Rady Ministrów w zakresie określonym przepisami Konstytucji i ustaw.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 96",
    slug: "96",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Sejm składa się z 460 posłów.</p>
			<p class="pt-4">2. Wybory do Sejmu są powszechne, równe, bezpośrednie i proporcjonalne oraz odbywają się w głosowaniu tajnym.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 97",
    slug: "97",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Senat składa się ze 100 senatorów.</p>
			<p class="pt-4">2. Wybory do Senatu są powszechne, bezpośrednie i odbywają się w głosowaniu tajnym.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 98",
    slug: "98",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Sejm i Senat są wybierane na czteroletnie kadencje. Kadencje Sejmu i Senatu rozpoczynają się z dniem zebrania się Sejmu na pierwsze posiedzenie i trwają do dnia poprzedzającego dzień zebrania się Sejmu następnej kadencji.</p>
			<p class="pt-4">2. Wybory do Sejmu i Senatu zarządza Prezydent Rzeczypospolitej nie później niż na 90 dni przed upływem 4 lat od rozpoczęcia kadencji Sejmu i Senatu, wyznaczając wybory na dzień wolny od pracy, przypadający w ciągu 30 dni przed upływem 4 lat od rozpoczęcia kadencji Sejmu i Senatu.</p>
			<p class="pt-4">3. Sejm może skrócić swoją kadencję uchwałą podjętą większością co najmniej 2/3 głosów ustawowej liczby posłów. Skrócenie kadencji Sejmu oznacza jednoczesne skrócenie kadencji Senatu. Przepis ust. 5 stosuje się odpowiednio.</p>
			<p class="pt-4">4. Prezydent Rzeczypospolitej, po zasięgnięciu opinii Marszałka Sejmu i Marszałka Senatu, może w przypadkach określonych w Konstytucji zarządzić skrócenie kadencji Sejmu. Wraz ze skróceniem kadencji Sejmu skrócona zostaje również kadencja Senatu."</p>
			<p class="pt-4">5. Prezydent Rzeczypospolitej, zarządzając skrócenie kadencji Sejmu, zarządza jednocześnie wybory do Sejmu i Senatu i wyznacza ich datę na dzień przypadający nie później niż w ciągu 45 dni od dnia zarządzenia skrócenia kadencji Sejmu. Prezydent Rzeczypospolitej zwołuje pierwsze posiedzenie nowo wybranego Sejmu nie później niż na 15 dzień po dniu przeprowadzenia wyborów.</p>
			<p class="pt-4">6. W razie skrócenia kadencji Sejmu stosuje się odpowiednio przepis ust. 1.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 99",
    slug: "99",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Wybrany do Sejmu może być obywatel polski mający prawo wybierania, który najpóźniej w dniu wyborów kończy 21 lat.</p>
			<p class="pt-4">2. Wybrany do Senatu może być obywatel polski mający prawo wybierania, który najpóźniej w dniu wyborów kończy 30 lat.</p>
			<p class="pt-4">3. Wybraną do Sejmu lub do Senatu nie może być osoba skazana prawomocnym wyrokiem na karę pozbawienia wolności za przestępstwo umyślne ścigane z oskarżenia publicznego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 100",
    slug: "100",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Kandydatów na posłów i senatorów mogą zgłaszać partie polityczne oraz wyborcy.</p>
			<p class="pt-4">2. Nie można kandydować równocześnie do Sejmu i Senatu.</p>
			<p class="pt-4">3. Zasady i tryb zgłaszania kandydatów i przeprowadzania wyborów oraz warunki ważności wyborów określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 101",
    slug: "101",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Ważność wyborów do Sejmu i Senatu stwierdza Sąd Najwyższy.</p>
			<p class="pt-4">2. Wyborcy przysługuje prawo zgłoszenia do Sądu Najwyższego protestu przeciwko ważności wyborów na zasadach określonych w ustawie.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 102",
    slug: "102",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>Nie można być równocześnie posłem i senatorem.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 103",
    slug: "103",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Mandatu posła nie można łączyć z funkcją Prezesa Narodowego Banku Polskiego, Prezesa Najwyższej Izby Kontroli, Rzecznika Praw Obywatelskich, Rzecznika Praw Dziecka i ich zastępców, członka Rady Polityki Pieniężnej, członka Krajowej Rady Radiofonii i Telewizji, ambasadora oraz z zatrudnieniem w Kancelarii Sejmu, Kancelarii Senatu, Kancelarii Prezydenta Rzeczypospolitej lub z zatrudnieniem w administracji rządowej. Zakaz ten nie dotyczy członków Rady Ministrów i sekretarzy stanu w administracji rządowej.</p>
			<p class="pt-4">2. Sędzia, prokurator, urzędnik służby cywilnej, żołnierz pozostający w czynnej służbie wojskowej, funkcjonariusz policji oraz funkcjonariusz służb ochrony państwa nie mogą sprawować mandatu poselskiego.</p>
			<p class="pt-4">3. Inne przypadki zakazu łączenia mandatu poselskiego z funkcjami publicznymi oraz zakazu jego sprawowania może określić ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 104",
    slug: "104",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Posłowie są przedstawicielami Narodu. Nie wiążą ich instrukcje wyborców.</p>
			<p class="pt-4">2. Przed rozpoczęciem sprawowania mandatu posłowie składają przed Sejmem następujące ślubowanie: Uroczyście ślubuję rzetelnie i sumiennie wykonywać obowiązki wobec Narodu, strzec suwerenności i interesów Państwa, czynić wszystko dla pomyślności Ojczyzny i dobra obywateli, przestrzegać Konstytucji i innych praw Rzeczypospolitej Polskiej.\" Ślubowanie może być złożone z dodaniem zdania \"Tak mi dopomóż Bóg\".</p>
			<p class="pt-4">3. Odmowa złożenia ślubowania oznacza zrzeczenie się mandatu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 105",
    slug: "105",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Poseł nie może być pociągnięty do odpowiedzialności za swoją działalność wchodzącą w zakres sprawowania mandatu poselskiego ani w czasie jego trwania, ani po jego wygaśnięciu. Za taką działalność poseł odpowiada wyłącznie przed Sejmem, a w przypadku naruszenia praw osób trzecich może być pociągnięty do odpowiedzialności sądowej tylko za zgodą Sejmu.</p>
			<p class="pt-4">2. Od dnia ogłoszenia wyników wyborów do dnia wygaśnięcia mandatu poseł nie może być pociągnięty bez zgody Sejmu do odpowiedzialności karnej.</p>
			<p class="pt-4">3. Postępowanie karne wszczęte wobec osoby przed dniem wyboru jej na posła ulega na żądanie Sejmu zawieszeniu do czasu wygaśnięcia mandatu. W takim przypadku ulega również zawieszeniu na ten czas bieg przedawnienia w postępowaniu karnym.</p>
			<p class="pt-4">4. Poseł może wyrazić zgodę na pociągnięcie go do odpowiedzialności karnej. W takim przypadku nie stosuje się przepisów ust. 2 i 3.</p>
			<p class="pt-4">5. Poseł nie może być zatrzymany lub aresztowany bez zgody Sejmu, z wyjątkiem ujęcia go na gorącym uczynku przestępstwa i jeżeli jego zatrzymanie jest niezbędne do zapewnienia prawidłowego toku postępowania. O zatrzymaniu niezwłocznie powiadamia się Marszałka Sejmu, który może nakazać natychmiastowe zwolnienie zatrzymanego.</p>
			<p class="pt-4">6. Szczegółowe zasady pociągania posłów do odpowiedzialności karnej oraz tryb postępowania określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 106",
    slug: "106",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>Warunki niezbędne do skutecznego wypełniania obowiązków poselskich oraz ochronę praw wynikających ze sprawowania mandatu określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 107",
    slug: "107",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. W zakresie określonym ustawą poseł nie może prowadzić działalności gospodarczej z osiąganiem korzyści z majątku Skarbu Państwa lub samorządu terytorialnego ani nabywać tego majątku.</p>
			<p class="pt-4">2. Za naruszenie zakazów, o których mowa w ust. 1, poseł, uchwałą Sejmu podjętą na wniosek Marszałka Sejmu, może być pociągnięty do odpowiedzialności przed Trybunałem Stanu, który orzeka w przedmiocie pozbawienia mandatu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 108",
    slug: "108",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>Do senatorów stosuje się odpowiednio przepisy <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/103'>art. 103-107</a>.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 109",
    slug: "109",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Sejm i Senat obradują na posiedzeniach.</p>
			<p class="pt-4">2. Pierwsze posiedzenia Sejmu i Senatu Prezydent Rzeczypospolitej zwołuje na dzień przypadający w ciągu 30 dni od dnia wyborów, z wyjątkiem przypadków określonych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/98'>art. 98</a> ust. 3 i 5.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 110",
    slug: "110",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Sejm wybiera ze swojego grona Marszałka Sejmu i wicemarszałków.</p>
			<p class="pt-4">2. Marszałek Sejmu przewodniczy obradom Sejmu, strzeże praw Sejmu oraz reprezentuje Sejm na zewnątrz.</p>
			<p class="pt-4">3. Sejm powołuje komisje stałe oraz może powoływać komisje nadzwyczajne.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 111",
    slug: "111",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Sejm może powołać komisję śledczą do zbadania określonej sprawy.</p>
			<p class="pt-4">2. Tryb działania komisji śledczej określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 112",
    slug: "112",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>Organizację wewnętrzną i porządek prac Sejmu oraz tryb powoływania i działalności jego organów, jak też sposób wykonywania konstytucyjnych i ustawowych obowiązków organów państwowych wobec Sejmu określa regulamin Sejmu uchwalony przez Sejm.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 113",
    slug: "113",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>Posiedzenia Sejmu są jawne. Jeżeli wymaga tego dobro państwa, Sejm może bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby posłów, uchwalić tajność obrad.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 114",
    slug: "114",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. W przypadkach określonych w Konstytucji Sejm i Senat, obradując wspólnie pod przewodnictwem Marszałka Sejmu lub w jego zastępstwie Marszałka Senatu, działają jako Zgromadzenie Narodowe.</p>
			<p class="pt-4">2. Zgromadzenie Narodowe uchwala swój regulamin.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 115",
    slug: "115",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Prezes Rady Ministrów i pozostali członkowie Rady Ministrów mają obowiązek udzielenia odpowiedzi na interpelacje i zapytania poselskie w ciągu 21 dni.</p>
			<p class="pt-4">2. Prezes Rady Ministrów i pozostali członkowie Rady Ministrów mają obowiązek udzielenia odpowiedzi w sprawach bieżących na każdym posiedzeniu Sejmu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 116",
    slug: "116",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Sejm decyduje w imieniu Rzeczypospolitej Polskiej o stanie wojny i o zawarciu pokoju.</p>
			<p class="pt-4">2. Sejm może podjąć uchwałę o stanie wojny jedynie w razie zbrojnej napaści na terytorium Rzeczypospolitej Polskiej lub gdy z umów międzynarodowych wynika zobowiązanie do wspólnej obrony przeciwko agresji. Jeżeli Sejm nie może się zebrać na posiedzenie, o stanie wojny postanawia Prezydent Rzeczypospolitej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 117",
    slug: "117",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>Zasady użycia Sił Zbrojnych poza granicami Rzeczypospolitej Polskiej określa ratyfikowana umowa międzynarodowa lub ustawa. Zasady pobytu obcych wojsk na terytorium Rzeczypospolitej Polskiej i zasady przemieszczania się ich przez to terytorium określają ratyfikowane umowy międzynarodowe lub ustawy.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 118",
    slug: "118",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Inicjatywa ustawodawcza przysługuje posłom, Senatowi, Prezydentowi Rzeczypospolitej i Radzie Ministrów.</p>
			<p class="pt-4">2. Inicjatywa ustawodawcza przysługuje również grupie co najmniej 100 000 obywateli mających prawo wybierania do Sejmu. Tryb postępowania w tej sprawie określa ustawa.</p>
			<p class="pt-4">3. Wnioskodawcy przedkładając Sejmowi projekt ustawy, przedstawiają skutki finansowe jej wykonania.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 119",
    slug: "119",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Sejm rozpatruje projekt ustawy w trzech czytaniach.</p>
			<p class="pt-4">2. Prawo wnoszenia poprawek do projektu ustawy w czasie rozpatrywania go przez Sejm przysługuje wnioskodawcy projektu, posłom i Radzie Ministrów.</p>
			<p class="pt-4">3. Marszałek Sejmu może odmówić poddania pod głosowanie poprawki, która uprzednio nie była przedłożona komisji.</p>
			<p class="pt-4">4. Wnioskodawca może wycofać projekt ustawy w toku postępowania ustawodawczego w Sejmie do czasu zakończenia drugiego czytania projektu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 120",
    slug: "120",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>Sejm uchwala ustawy zwykłą większością głosów w obecności co najmniej połowy ustawowej liczby posłów, chyba że Konstytucja przewiduje inną większość. W tym samym trybie Sejm podejmuje uchwały, jeżeli ustawa lub uchwała Sejmu nie stanowi inaczej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 121",
    slug: "121",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Ustawę uchwaloną przez Sejm Marszałek Sejmu przekazuje Senatowi.</p>
			<p class="pt-4">2. Senat w ciągu 30 dni od dnia przekazania ustawy może ją przyjąć bez zmian, uchwalić poprawki albo uchwalić odrzucenie jej w całości. Jeżeli Senat w ciągu 30 dni od dnia przekazania ustawy nie podejmie stosownej uchwały, ustawę uznaje się za uchwaloną w brzmieniu przyjętym przez Sejm.</p>
			<p class="pt-4">3. Uchwałę Senatu odrzucającą ustawę albo poprawkę zaproponowaną w uchwale Senatu, uważa się za przyjętą, jeżeli Sejm nie odrzuci jej bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby posłów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 122",
    slug: "122",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Po zakończeniu postępowania określonego w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/121'>art. 121</a> Marszałek Sejmu przedstawia uchwaloną ustawę do podpisu Prezydentowi Rzeczypospolitej.</p>
			<p class="pt-4">2. Prezydent Rzeczypospolitej podpisuje ustawę w ciągu 21 dni od dnia przedstawienia i zarządza jej ogłoszenie w Dzienniku Ustaw Rzeczypospolitej Polskiej.</p>
			<p class="pt-4">3. Przed podpisaniem ustawy Prezydent Rzeczypospolitej może wystąpić do Trybunału Konstytucyjnego z wnioskiem w sprawie zgodności ustawy z Konstytucją. Prezydent Rzeczypospolitej nie może odmówić podpisania ustawy, którą Trybunał Konstytucyjny uznał za zgodną z Konstytucją.</p>
			<p class="pt-4">4. Prezydent Rzeczypospolitej odmawia podpisania ustawy, którą Trybunał Konstytucyjny uznał za niezgodną z Konstytucją. Jeżeli jednak niezgodność z Konstytucją dotyczy poszczególnych przepisów ustawy, a Trybunał Konstytucyjny nie orzeknie, że są one nierozerwalnie związane z całą ustawą, Prezydent Rzeczypospolitej, po zasięgnięciu opinii Marszałka Sejmu, podpisuje ustawę z pominięciem przepisów uznanych za niezgodne z Konstytucją albo zwraca ustawę Sejmowi w celu usunięcia niezgodności.</p>
			<p class="pt-4">5. Jeżeli Prezydent Rzeczypospolitej nie wystąpił z wnioskiem do Trybunału Konstytucyjnego w trybie ust. 3, może z umotywowanym wnioskiem przekazać ustawę Sejmowi do ponownego rozpatrzenia. Po ponownym uchwaleniu ustawy przez Sejm większością 3/5 głosów w obecności co najmniej połowy ustawowej liczby posłów Prezydent Rzeczypospolitej w ciągu 7 dni podpisuje ustawę i zarządza jej ogłoszenie w Dzienniku Ustaw Rzeczypospolitej Polskiej. W razie ponownego uchwalenia ustawy przez Sejm Prezydentowi Rzeczypospolitej nie przysługuje prawo wystąpienia do Trybunału Konstytucyjnego w trybie ust. 3.</p>
			<p class="pt-4">6. Wystąpienie Prezydenta Rzeczypospolitej do Trybunału Konstytucyjnego z wnioskiem w sprawie zgodności ustawy z Konstytucją lub z wnioskiem do Sejmu o ponowne rozpatrzenie ustawy wstrzymuje bieg, określonego w ust. 2, terminu do podpisania ustawy.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 123",
    slug: "123",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. Rada Ministrów może uznać uchwalony przez siebie projekt ustawy za pilny, z wyjątkiem projektów ustaw podatkowych, ustaw dotyczących wyboru Prezydenta Rzeczypospolitej, Sejmu, Senatu oraz organów samorządu terytorialnego, ustaw regulujących ustrój i właściwość władz publicznych, a także kodeksów.</p>
			<p class="pt-4">2. Regulamin Sejmu oraz regulamin Senatu określają odrębności w postępowaniu ustawodawczym w sprawie projektu pilnego.</p>
			<p class="pt-4">3. W postępowaniu w sprawie ustawy, której projekt został uznany za pilny, termin jej rozpatrzenia przez Senat wynosi 14 dni, a termin podpisania ustawy przez Prezydenta Rzeczypospolitej wynosi 7 dni.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 124",
    slug: "124",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>Do Senatu stosuje się odpowiednio przepisy <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/110'>art. 110</a>, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/112'>art. 112</a>, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/113'>art. 113</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/120'>art. 120</a>.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 125",
    slug: "125",
    chapter: {
      id: "IV",
      title: "Sejm i Senat",
    },
    html: `
			<p>1. W sprawach o szczególnym znaczeniu dla państwa może być przeprowadzone referendum ogólnokrajowe.</p>
			<p class="pt-4">2. Referendum ogólnokrajowe ma prawo zarządzić Sejm bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby posłów lub Prezydent Rzeczypospolitej za zgodą Senatu wyrażoną bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby senatorów.</p>
			<p class="pt-4">3. Jeżeli w referendum ogólnokrajowym wzięło udział więcej niż połowa uprawnionych do głosowania, wynik referendum jest wiążący.</p>
			<p class="pt-4">4. Ważność referendum ogólnokrajowego oraz referendum, o którym mowa w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/235'>art. 235</a> ust. 6, stwierdza Sąd Najwyższy.</p>
			<p class="pt-4">5. Zasady i tryb przeprowadzania referendum określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 126",
    slug: "126",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej Polskiej jest najwyższym przedstawicielem Rzeczypospolitej Polskiej i gwarantem ciągłości władzy państwowej.</p>
			<p class="pt-4">2. Prezydent Rzeczypospolitej czuwa nad przestrzeganiem Konstytucji, stoi na straży suwerenności i bezpieczeństwa państwa oraz nienaruszalności i niepodzielności jego terytorium.</p>
			<p class="pt-4">3. Prezydent Rzeczypospolitej wykonuje swoje zadania w zakresie i na zasadach określonych w Konstytucji i ustawach.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 127",
    slug: "127",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej jest wybierany przez Naród w wyborach powszechnych, równych, bezpośrednich i w głosowaniu tajnym.</p>
			<p class="pt-4">2. Prezydent Rzeczypospolitej jest wybierany na pięcioletnią kadencję i może być ponownie wybrany tylko raz.</p>
			<p class="pt-4">3. Na Prezydenta Rzeczypospolitej może być wybrany obywatel polski, który najpóźniej w dniu wyborów kończy 35 lat i korzysta z pełni praw wyborczych do Sejmu. Kandydata zgłasza co najmniej 100 000 obywateli mających prawo wybierania do Sejmu.</p>
			<p class="pt-4">4. Na Prezydenta Rzeczypospolitej wybrany zostaje kandydat, który otrzymał więcej niż połowę ważnie oddanych głosów. Jeżeli żaden z kandydatów nie uzyska wymaganej większości, czternastego dnia po pierwszym głosowaniu przeprowadza się ponowne głosowanie.</p>
			<p class="pt-4">5. W ponownym głosowaniu wyboru dokonuje się spośród dwóch kandydatów, którzy w pierwszym głosowaniu otrzymali kolejno największą liczbę głosów. Jeżeli którykolwiek z tych dwóch kandydatów wycofa zgodę na kandydowanie, utraci prawo wyborcze lub umrze, w jego miejsce do wyborów w ponownym głosowaniu dopuszcza się kandydata, który otrzymał kolejno największą liczbę głosów w pierwszym głosowaniu. W takim przypadku datę ponownego głosowania odracza się o dalszych 14 dni.</p>
			<p class="pt-4">6. Na Prezydenta Rzeczypospolitej wybrany zostaje kandydat, który w ponownym głosowaniu otrzymał więcej głosów."</p>
			<p class="pt-4">7. Zasady i tryb zgłaszania kandydatów i przeprowadzania wyborów oraz warunki ważności wyboru Prezydenta Rzeczypospolitej określa ustawa."</p>
		`,
    desc: "",
  },
  {
    title: "Art. 128",
    slug: "128",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Kadencja Prezydenta Rzeczypospolitej rozpoczyna się w dniu objęcia przez niego urzędu.</p>
			<p class="pt-4">2. Wybory Prezydenta Rzeczypospolitej zarządza Marszałek Sejmu na dzień przypadający nie wcześniej niż na 100 dni i nie później niż na 75 dni przed upływem kadencji urzędującego Prezydenta Rzeczypospolitej, a w razie opróżnienia urzędu Prezydenta Rzeczypospolitej - nie później niż w czternastym dniu po opróżnieniu urzędu, wyznaczając datę wyborów na dzień wolny od pracy przypadający w ciągu 60 dni od dnia zarządzenia wyborów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 129",
    slug: "129",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Ważność wyboru Prezydenta Rzeczypospolitej stwierdza Sąd Najwyższy.</p>
			<p class="pt-4">2. Wyborcy przysługuje prawo zgłoszenia do Sądu Najwyższego protestu przeciwko ważności wyboru Prezydenta Rzeczypospolitej na zasadach określonych w ustawie.</p>
			<p class="pt-4">3. W razie stwierdzenia nieważności wyboru Prezydenta Rzeczypospolitej przeprowadza się nowe wybory, na zasadach przewidzianych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/128'>art. 128</a> ust. 2 dla przypadku opróżnienia urzędu Prezydenta Rzeczypospolitej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 130",
    slug: "130",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>Prezydent Rzeczypospolitej obejmuje urząd po złożeniu wobec Zgromadzenia Narodowego następującej przysięgi: Obejmując z woli Narodu urząd Prezydenta Rzeczypospolitej Polskiej, uroczyście przysięgam, że dochowam wierności postanowieniom Konstytucji, będę strzegł niezłomnie godności Narodu, niepodległości i bezpieczeństwa Państwa, a dobro Ojczyzny oraz pomyślność obywateli będą dla mnie zawsze najwyższym nakazem\". Przysięga może być złożona z dodaniem zdania \"Tak mi dopomóż Bóg\".
		`,
    desc: "",
  },
  {
    title: "Art. 131",
    slug: "131",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Jeżeli Prezydent Rzeczypospolitej nie może przejściowo sprawować urzędu, zawiadamia o tym Marszałka Sejmu, który tymczasowo przejmuje obowiązki Prezydenta Rzeczypospolitej. Gdy Prezydent Rzeczypospolitej nie jest w stanie zawiadomić Marszałka Sejmu o niemożności sprawowania urzędu, wówczas o stwierdzeniu przeszkody w sprawowaniu urzędu przez Prezydenta Rzeczypospolitej rozstrzyga Trybunał Konstytucyjny na wniosek Marszałka Sejmu. W razie uznania przejściowej niemożności sprawowania urzędu przez Prezydenta Rzeczypospolitej Trybunał Konstytucyjny powierza Marszałkowi Sejmu tymczasowe wykonywanie obowiązków Prezydenta Rzeczypospolitej.</p>
			<p class="pt-4">2. Marszałek Sejmu tymczasowo, do czasu wyboru nowego Prezydenta Rzeczypospolitej, wykonuje obowiązki Prezydenta Rzeczypospolitej w razie:</p>
			<ul class="pl-4">
				<li>1) śmierci Prezydenta Rzeczypospolitej,</li>
				<li>2) zrzeczenia się urzędu przez Prezydenta Rzeczypospolitej,</li>
				<li>3) stwierdzenia nieważności wyboru Prezydenta Rzeczypospolitej lub innych przyczyn nieobjęcia urzędu po wyborze,</li>
				<li>4) uznania przez Zgromadzenie Narodowe trwałej niezdolności Prezydenta Rzeczypospolitej do sprawowania urzędu ze względu na stan zdrowia, uchwałą podjętą większością co najmniej 2/3 głosów ustawowej liczby członków Zgromadzenia Narodowego,</li>
				<li>5) złożenia Prezydenta Rzeczypospolitej z urzędu orzeczeniem Trybunału Stanu</li>
			</ul>
			<p class="pt-4">3. Jeżeli Marszałek Sejmu nie może wykonywać obowiązków Prezydenta Rzeczypospolitej, obowiązki te przejmuje Marszałek Senatu.</p>
			<p class="pt-4">4. Osoba wykonująca obowiązki Prezydenta Rzeczypospolitej nie może postanowić o skróceniu kadencji Sejmu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 132",
    slug: "132",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>Prezydent Rzeczypospolitej nie może piastować żadnego innego urzędu ani pełnić żadnej funkcji publicznej, z wyjątkiem tych, które są związane ze sprawowanym urzędem.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 133",
    slug: "133",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej jako reprezentant państwa w stosunkach zewnętrznych:</p>
			<ul class="pl-4">
				<li>1) ratyfikuje i wypowiada umowy międzynarodowe, o czym zawiadamia Sejm i Senat,</li>
				<li>2) mianuje i odwołuje pełnomocnych przedstawicieli Rzeczypospolitej Polskiej w innych państwach i przy organizacjach międzynarodowych,</li>
				<li>3) przyjmuje listy uwierzytelniające i odwołujące akredytowanych przy nim przedstawicieli dyplomatycznych innych państw i organizacji międzynarodowych.</li>
			</ul>
			<p class="pt-4">2. Prezydent Rzeczypospolitej przed ratyfikowaniem umowy międzynarodowej może zwrócić się do Trybunału Konstytucyjnego z wnioskiem w sprawie jej zgodności z Konstytucją.</p>
			<p class="pt-4">3. Prezydent Rzeczypospolitej w zakresie polityki zagranicznej współdziała z Prezesem Rady Ministrów i właściwym ministrem.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 134",
    slug: "134",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej jest najwyższym zwierzchnikiem Sił Zbrojnych Rzeczypospolitej Polskiej.</p>
			<p class="pt-4">2. W czasie pokoju Prezydent Rzeczypospolitej sprawuje zwierzchnictwo nad Siłami Zbrojnymi za pośrednictwem Ministra Obrony Narodowej.</p>
			<p class="pt-4">3. Prezydent Rzeczypospolitej mianuje Szefa Sztabu Generalnego i dowódców rodzajów Sił Zbrojnych na czas określony. Czas trwania kadencji, tryb i warunki odwołania przed jej upływem określa ustawa.</p>
			<p class="pt-4">4. Na czas wojny Prezydent Rzeczypospolitej, na wniosek Prezesa Rady Ministrów, mianuje Naczelnego Dowódcę Sił Zbrojnych. W tym samym trybie może on Naczelnego Dowódcę Sił Zbrojnych odwołać. Kompetencje Naczelnego Dowódcy Sił Zbrojnych i zasady jego podległości konstytucyjnym organom Rzeczypospolitej Polskiej określa ustawa.</p>
			<p class="pt-4">5. Prezydent Rzeczypospolitej, na wniosek Ministra Obrony Narodowej, nadaje określone w ustawach stopnie wojskowe.</p>
			<p class="pt-4">6. Kompetencje Prezydenta Rzeczypospolitej, związane ze zwierzchnictwem nad Siłami Zbrojnymi, szczegółowo określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 135",
    slug: "135",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>Organem doradczym Prezydenta Rzeczypospolitej w zakresie wewnętrznego i zewnętrznego bezpieczeństwa państwa jest Rada Bezpieczeństwa Narodowego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 136",
    slug: "136",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>W razie bezpośredniego, zewnętrznego zagrożenia państwa Prezydent Rzeczypospolitej, na wniosek Prezesa Rady Ministrów, zarządza powszechną lub częściową mobilizację i użycie Sił Zbrojnych do obrony Rzeczypospolitej Polskiej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 137",
    slug: "137",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>Prezydent Rzeczypospolitej nadaje obywatelstwo polskie i wyraża zgodę na zrzeczenie się obywatelstwa polskiego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 138",
    slug: "138",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>Prezydent Rzeczypospolitej nadaje ordery i odznaczenia.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 139",
    slug: "139",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>Prezydent Rzeczypospolitej stosuje prawo łaski. Prawa łaski nie stosuje się do osób skazanych przez Trybunał Stanu.</p>
		`,
    desc: `
			<p>To jedno z tradycyjnych uprawnień Prezydenta, które w Konstytucji nie zostało bliżej sprecyzowane. Konstytucja wyraźnie zastrzega jedynie, że prawo łaski nie może być stosowane wobec osób skazanych przez Trybunał Stanu.</p>

			<p>Akt łaski jest to całkowite lub częściowe darowanie sprawcy skutków kary orzeczonej prawomocnym wyrokiem sądu. Nie jest to więc uchylenie wyroku ani uniewinnienie skazanego, a jedynie odnosi się do skutków wyroku sądowego.</p>

			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 140",
    slug: "140",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>Prezydent Rzeczypospolitej może zwracać się z orędziem do Sejmu, do Senatu lub do Zgromadzenia Narodowego. Orędzia nie czyni się przedmiotem debaty.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 141",
    slug: "141",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. W sprawach szczególnej wagi Prezydent Rzeczypospolitej może zwołać Radę Gabinetową. Radę Gabinetową tworzy Rada Ministrów obradująca pod przewodnictwem Prezydenta Rzeczypospolitej.</p>
			<p class="pt-4">2. Radzie Gabinetowej nie przysługują kompetencje Rady Ministrów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 142",
    slug: "142",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej wydaje rozporządzenia i zarządzenia na zasadach określonych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/92'>art. 92</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/93'>art. 93</a>.</p>
			<p class="pt-4">2. Prezydent Rzeczypospolitej wydaje postanowienia w zakresie realizacji pozostałych swoich kompetencji.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 143",
    slug: "143",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>Organem pomocniczym Prezydenta Rzeczypospolitej jest Kancelaria Prezydenta Rzeczypospolitej. Prezydent Rzeczypospolitej nadaje statut Kancelarii oraz powołuje i odwołuje ${link(
        {
          text: "Szefa Kancelarii Prezydenta Rzeczypospolitej",
          href: "/slownik/szef-kprp",
        }
      )}.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 144",
    slug: "144",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej, korzystając ze swoich konstytucyjnych i ustawowych kompetencji, wydaje akty urzędowe.</p>
			<p class="pt-4">2. Akty urzędowe Prezydenta Rzeczypospolitej wymagają dla swojej ważności podpisu Prezesa Rady Ministrów, który przez podpisanie aktu ponosi odpowiedzialność przed Sejmem.</p>
			<p class="pt-4">3. Przepis ust. 2 nie dotyczy:</p>
			<ul class="pl-4">
				<li>1) zarządzania wyborów do Sejmu i Senatu,</li>
				<li>2) zwoływania pierwszego posiedzenia nowo wybranych Sejmu i Senatu,</li>
				<li>3) skracania kadencji Sejmu w przypadkach określonych w Konstytucji,</li>
				<li>4) inicjatywy ustawodawczej,</li>
				<li>5) zarządzania referendum ogólnokrajowego,</li>
				<li>6) podpisywania albo odmowy podpisania ustawy,</li>
				<li>7) zarządzania ogłoszenia ustawy oraz umowy międzynarodowej w Dzienniku Ustaw Rzeczypospolitej Polskiej,</li>
				<li>8) zwracania się z orędziem do Sejmu, do Senatu lub do Zgromadzenia Narodowego,</li>
				<li>9) wniosku do Trybunału Konstytucyjnego,</li>
				<li>10) wniosku o przeprowadzenie kontroli przez Najwyższą Izbę Kontroli,</li>
				<li>11) desygnowania i powoływania Prezesa Rady Ministrów,</li>
				<li>12) przyjmowania dymisji Rady Ministrów i powierzania jej tymczasowego pełnienia obowiązków,</li>
				<li>13) wniosku do Sejmu o pociągnięcie do odpowiedzialności przed Trybunałem Stanu członka Rady Ministrów,</li>
				<li>14) odwoływania ministra, któremu Sejm wyraził wotum nieufności,</li>
				<li>15) zwoływania Rady Gabinetowej,</li>
				<li>16) nadawania orderów i odznaczeń,</li>
				<li>17) powoływania sędziów,</li>
				<li>18) stosowania prawa łaski,</li>
				<li>19) nadawania obywatelstwa polskiego i wyrażania zgody na zrzeczenie się obywatelstwa polskiego,</li>
				<li>20) powoływania Pierwszego Prezesa Sądu Najwyższego,</li>
				<li>21) powoływania Prezesa i Wiceprezesa Trybunału Konstytucyjnego,</li>
				<li>22) powoływania Prezesa Naczelnego Sądu Administracyjnego,</li>
				<li>23) powoływania prezesów Sądu Najwyższego oraz wiceprezesów Naczelnego Sądu Administracyjnego,</li>
				<li>24) wniosku do Sejmu o powołanie Prezesa Narodowego Banku Polskiego,</li>
				<li>25) powoływania członków Rady Polityki Pieniężnej,</li>
				<li>26) powoływania i odwoływania członków Rady Bezpieczeństwa Narodowego,</li>
				<li>27) powoływania członków Krajowej Rady Radiofonii i Telewizji,</li>
				<li>28) nadawania statutu Kancelarii Prezydenta Rzeczypospolitej oraz powoływania i odwoływania Szefa Kancelarii Prezydenta Rzeczypospolitej,</li>
				<li>29) wydawania zarządzeń na zasadach określonych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/93'>art. 93</a>,</li>
				<li>30) zrzeczenia się urzędu Prezydenta Rzeczypospolitej.</li>
			</ul>
		`,
    desc: "",
  },
  {
    title: "Art. 145",
    slug: "145",
    chapter: {
      id: "V",
      title: "Prezydent Rzeczypospolitej Polskiej",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej za naruszenie Konstytucji, ustawy lub za popełnienie przestępstwa może być pociągnięty do odpowiedzialności przed Trybunałem Stanu.</p>
			<p class="pt-4">2. Postawienie Prezydenta Rzeczypospolitej w stan oskarżenia może nastąpić uchwałą Zgromadzenia Narodowego podjętą większością co najmniej 2/3 głosów ustawowej liczby członków Zgromadzenia Narodowego na wniosek co najmniej 140 członków Zgromadzenia Narodowego.</p>
			<p class="pt-4">3. Z dniem podjęcia uchwały o postawieniu Prezydenta Rzeczypospolitej w stan oskarżenia przed Trybunałem Stanu sprawowanie urzędu przez Prezydenta Rzeczypospolitej ulega zawieszeniu. Przepis <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/131'>art. 131</a> stosuje się odpowiednio.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 146",
    slug: "146",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Rada Ministrów prowadzi politykę wewnętrzną i zagraniczną Rzeczypospolitej Polskiej.</p>
			<p class="pt-4">2. Do Rady Ministrów należą sprawy polityki państwa nie zastrzeżone dla innych organów państwowych i samorządu terytorialnego.</p>
			<p class="pt-4">3. Rada Ministrów kieruje administracją rządową.</p>
			<p class="pt-4">4. W zakresie i na zasadach określonych w Konstytucji i ustawach Rada Ministrów w szczególności:</p>
		`,
    desc: "",
  },
  {
    title: "Art. 147",
    slug: "147",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Rada Ministrów składa się z Prezesa Rady Ministrów i ministrów.</p>
			<p class="pt-4">2. W skład Rady Ministrów mogą być powoływani wiceprezesi Rady Ministrów.</p>
			<p class="pt-4">3. Prezes i wiceprezes Rady Ministrów mogą pełnić także funkcję ministra.</p>
			<p class="pt-4">4. W skład Rady Ministrów mogą być ponadto powoływani przewodniczący określonych w ustawach komitetów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 148",
    slug: "148",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>Prezes Rady Ministrów:</p>
			<ul class="pl-4">
				<li>1) reprezentuje Radę Ministrów,</li>
				<li>2) kieruje pracami Rady Ministrów,</li>
				<li>3) wydaje rozporządzenia,</li>
				<li>4) zapewnia wykonywanie polityki Rady Ministrów i określa sposoby jej wykonywania,</li>
				<li>5) koordynuje i kontroluje pracę członków Rady Ministrów,</li>
				<li>6) sprawuje nadzór nad samorządem terytorialnym w granicach i formach określonych w Konstytucji i ustawach,</li>
				<li>7) jest zwierzchnikiem służbowym pracowników administracji rządowej.</li>
			</ul>
		`,
    desc: "",
  },
  {
    title: "Art. 149",
    slug: "149",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Ministrowie kierują określonymi działami administracji rządowej lub wypełniają zadania wyznaczone im przez Prezesa Rady Ministrów. Zakres działania ministra kierującego działem administracji rządowej określają ustawy.</p>
			<p class="pt-4">2. Minister kierujący działem administracji rządowej wydaje rozporządzenia. Rada Ministrów, na wniosek Prezesa Rady Ministrów, może uchylić rozporządzenie lub zarządzenie ministra.</p>
			<p class="pt-4">3. Do przewodniczącego komitetu, o którym mowa w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/147'>art. 147</a> ust. 4, stosuje się odpowiednio przepisy odnoszące się do ministra kierującego działem administracji rządowej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 150",
    slug: "150",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>Członek Rady Ministrów nie może prowadzić działalności sprzecznej z jego obowiązkami publicznymi.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 151",
    slug: "151",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>Prezes Rady Ministrów, wiceprezesi Rady Ministrów i ministrowie składają wobec Prezydenta Rzeczypospolitej następującą przysięgę: Obejmując urząd Prezesa Rady Ministrów (wiceprezesa Rady Ministrów, ministra), uroczyście przysięgam, że dochowam wierności postanowieniom Konstytucji i innym prawom Rzeczypospolitej Polskiej, a dobro Ojczyzny oraz pomyślność obywateli będą dla mnie zawsze najwyższym nakazem.\"Przysięga może być złożona z dodaniem zdania \"Tak mi dopomóż Bóg\".</p>
		`,
    desc: "",
  },
  {
    title: "Art. 152",
    slug: "152",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Przedstawicielem Rady Ministrów w województwie jest wojewoda.</p>
			<p class="pt-4">2. Tryb powoływania i odwoływania oraz zakres działania wojewodów określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 153",
    slug: "153",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. W celu zapewnienia zawodowego, rzetelnego, bezstronnego i politycznie neutralnego wykonywania zadań państwa, w urzędach administracji rządowej działa korpus służby cywilnej.</p>
			<p class="pt-4">2. Prezes Rady Ministrów jest zwierzchnikiem korpusu służby cywilnej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 154",
    slug: "154",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej desygnuje Prezesa Rady Ministrów, który proponuje skład Rady Ministrów. Prezydent Rzeczypospolitej powołuje Prezesa Rady Ministrów wraz z pozostałymi członkami Rady Ministrów w ciągu 14 dni od dnia pierwszego posiedzenia Sejmu lub przyjęcia dymisji poprzedniej Rady Ministrów i odbiera przysięgę od członków nowo powołanej Rady Ministrów.</p>
			<p class="pt-4">2. Prezes Rady Ministrów, w ciągu 14 dni od dnia powołania przez Prezydenta Rzeczypospolitej, przedstawia Sejmowi program działania Rady Ministrów z wnioskiem o udzielenie jej wotum zaufania. Wotum zaufania Sejm uchwala bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby posłów.</p>
			<p class="pt-4">3. W razie niepowołania Rady Ministrów w trybie ust. 1 lub nieudzielenia jej wotum zaufania w trybie ust. 2 Sejm w ciągu 14 dni od upływu terminów określonych w ust. 1 lub ust. 2 wybiera Prezesa Rady Ministrów oraz proponowanych przez niego członków Rady Ministrów bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby posłów. Prezydent Rzeczypospolitej powołuje tak wybraną Radę Ministrów i odbiera przysięgę od jej członków.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 155",
    slug: "155",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. W razie niepowołania Rady Ministrów w trybie <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/154'>art. 154</a> ust. 3 Prezydent Rzeczypospolitej w ciągu 14 dni powołuje Prezesa Rady Ministrów i na jego wniosek pozostałych członków Rady Ministrów oraz odbiera od nich przysięgę. Sejm w ciągu 14 dni od dnia powołania Rady Ministrów przez Prezydenta Rzeczypospolitej udziela jej wotum zaufania większością głosów w obecności co najmniej połowy ustawowej liczby posłów.</p>
			<p class="pt-4">2. W razie nieudzielenia Radzie Ministrów wotum zaufania w trybie określonym w ust. 1, Prezydent Rzeczypospolitej skraca kadencję Sejmu i zarządza wybory.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 156",
    slug: "156",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Członkowie Rady Ministrów ponoszą odpowiedzialność przed Trybunałem Stanu za naruszenie Konstytucji lub ustaw, a także za przestępstwa popełnione w związku z zajmowanym stanowiskiem.</p>
			<p class="pt-4">2. Uchwałę o pociągnięciu członka Rady Ministrów do odpowiedzialności przed Trybunałem Stanu Sejm podejmuje na wniosek Prezydenta Rzeczypospolitej lub co najmniej 115 posłów większością 3/5 ustawowej liczby posłów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 157",
    slug: "157",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Członkowie Rady Ministrów ponoszą przed Sejmem solidarną odpowiedzialność za działalność Rady Ministrów.</p>
			<p class="pt-4">2. Członkowie Rady Ministrów ponoszą przed Sejmem również odpowiedzialność indywidualną za sprawy należące do ich kompetencji lub powierzone im przez Prezesa Rady Ministrów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 158",
    slug: "158",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Sejm wyraża Radzie Ministrów wotum nieufności większością ustawowej liczby posłów na wniosek zgłoszony przez co najmniej 46 posłów i wskazujący imiennie kandydata na Prezesa Rady Ministrów. Jeżeli uchwała została przyjęta przez Sejm, Prezydent Rzeczypospolitej przyjmuje dymisję Rady Ministrów i powołuje wybranego przez Sejm nowego Prezesa Rady Ministrów, a na jego wniosek pozostałych członków Rady Ministrów oraz odbiera od nich przysięgę.</p>
			<p class="pt-4">2. Wniosek o podjęcie uchwały, o której mowa w ust. 1, może być poddany pod głosowanie nie wcześniej niż po upływie 7 dni od dnia jego zgłoszenia. Powtórny wniosek może być zgłoszony nie wcześniej niż po upływie 3 miesięcy od dnia zgłoszenia poprzedniego wniosku. Powtórny wniosek może być zgłoszony przed upływem 3 miesięcy, jeżeli wystąpi z nim co najmniej 115 posłów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 159",
    slug: "159",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Sejm może wyrazić ministrowi wotum nieufności. Wniosek o wyrażenie wotum nieufności może być zgłoszony przez co najmniej 69 posłów. Przepis <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/158'>art. 158</a> ust. 2 stosuje się odpowiednio.</p>
			<p class="pt-4">2. Prezydent Rzeczypospolitej odwołuje ministra, któremu Sejm wyraził wotum nieufności większością głosów ustawowej liczby posłów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 160",
    slug: "160",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>Prezes Rady Ministrów może zwrócić się do Sejmu o wyrażenie Radzie Ministrów wotum zaufania. Udzielenie wotum zaufania Radzie Ministrów następuje większością głosów w obecności co najmniej połowy ustawowej liczby posłów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 161",
    slug: "161",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>Prezydent Rzeczypospolitej, na wniosek Prezesa Rady Ministrów, dokonuje zmian w składzie Rady Ministrów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 162",
    slug: "162",
    chapter: {
      id: "VI",
      title: "Rada Ministrów i administracja rządowa",
    },
    html: `
			<p>1. Prezes Rady Ministrów składa dymisję Rady Ministrów na pierwszym posiedzeniu nowo wybranego Sejmu.</p>
			<p class="pt-4">2. Prezes Rady Ministrów składa dymisję Rady Ministrów również w razie:</p>
			<ul class="pl-4">
				<li>1) nieuchwalenia przez Sejm wotum zaufania dla Rady Ministrów,</li>
				<li>2) wyrażenia Radzie Ministrów wotum nieufności,</li>
				<li>3) rezygnacji Prezesa Rady Ministrów.</li>
			</ul>
			<p class="pt-4">3. Prezydent Rzeczypospolitej, przyjmując dymisję Rady Ministrów, powierza jej dalsze sprawowanie obowiązków do czasu powołania nowej Rady Ministrów.</p>
			<p class="pt-4">4. Prezydent Rzeczypospolitej, w przypadku określonym w ust. 2 pkt 3, może odmówić przyjęcia dymisji Rady Ministrów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 163",
    slug: "163",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>Samorząd terytorialny wykonuje zadania publiczne nie zastrzeżone przez Konstytucję lub ustawy dla organów innych władz publicznych.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 164",
    slug: "164",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>1. Podstawową jednostką samorządu terytorialnego jest gmina.</p>
			<p class="pt-4">2. Inne jednostki samorządu regionalnego albo lokalnego i regionalnego określa ustawa.</p>
			<p class="pt-4">3. Gmina wykonuje wszystkie zadania samorządu terytorialnego nie zastrzeżone dla innych jednostek samorządu terytorialnego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 165",
    slug: "165",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>1. Jednostki samorządu terytorialnego mają osobowość prawną. Przysługują im prawo własności i inne prawa majątkowe.</p>
			<p class="pt-4">2. Samodzielność jednostek samorządu terytorialnego podlega ochronie sądowej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 166",
    slug: "166",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>1. Zadania publiczne służące zaspokajaniu potrzeb wspólnoty samorządowej są wykonywane przez jednostkę samorządu terytorialnego jako zadania własne.</p>
			<p class="pt-4">2. Jeżeli wynika to z uzasadnionych potrzeb państwa, ustawa może zlecić jednostkom samorządu terytorialnego wykonywanie innych zadań publicznych. Ustawa określa tryb przekazywania i sposób wykonywania zadań zleconych.</p>
			<p class="pt-4">3. Spory kompetencyjne między organami samorządu terytorialnego i administracji rządowej rozstrzygają sądy administracyjne.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 167",
    slug: "167",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>1. Jednostkom samorządu terytorialnego zapewnia się udział w dochodach publicznych odpowiednio do przypadających im zadań.</p>
			<p class="pt-4">2. Dochodami jednostek samorządu terytorialnego są ich dochody własne oraz subwencje ogólne i dotacje celowe z budżetu państwa.</p>
			<p class="pt-4">3. Źródła dochodów jednostek samorządu terytorialnego są określone w ustawie.</p>
			<p class="pt-4">4. Zmiany w zakresie zadań i kompetencji jednostek samorządu terytorialnego następują wraz z odpowiednimi zmianami w podziale dochodów publicznych.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 168",
    slug: "168",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>Jednostki samorządu terytorialnego mają prawo ustalania wysokości podatków i opłat lokalnych w zakresie określonym w ustawie.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 169",
    slug: "169",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>1. Jednostki samorządu terytorialnego wykonują swoje zadania za pośrednictwem organów stanowiących i wykonawczych.</p>
			<p class="pt-4">2. Wybory do organów stanowiących są powszechne, równe, bezpośrednie i odbywają się w głosowaniu tajnym. Zasady i tryb zgłaszania kandydatów i przeprowadzania wyborów oraz warunki ważności wyborów określa ustawa.</p>
			<p class="pt-4">3. Zasady i tryb wyborów oraz odwoływania organów wykonawczych jednostek samorządu terytorialnego określa ustawa.</p>
			<p class="pt-4">4. Ustrój wewnętrzny jednostek samorządu terytorialnego określają, w granicach ustaw, ich organy stanowiące.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 170",
    slug: "170",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>Członkowie wspólnoty samorządowej mogą decydować, w drodze referendum, o sprawach dotyczących tej wspólnoty, w tym o odwołaniu pochodzącego z wyborów bezpośrednich organu samorządu terytorialnego. Zasady i tryb przeprowadzania referendum lokalnego określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 171",
    slug: "171",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>1. Działalność samorządu terytorialnego podlega nadzorowi z punktu widzenia legalności.</p>
			<p class="pt-4">2. Organami nadzoru nad działalnością jednostek samorządu terytorialnego są Prezes Rady Ministrów i wojewodowie, a w zakresie spraw finansowych regionalne izby obrachunkowe.</p>
			<p class="pt-4">3. Sejm, na wniosek Prezesa Rady Ministrów, może rozwiązać organ stanowiący samorządu terytorialnego, jeżeli organ ten rażąco narusza Konstytucję lub ustawy.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 172",
    slug: "172",
    chapter: {
      id: "VII",
      title: "Samorząd terytorialny",
    },
    html: `
			<p>1. Jednostki samorządu terytorialnego mają prawo zrzeszania się.</p>
			<p class="pt-4">2. Jednostka samorządu terytorialnego ma prawo przystępowania do międzynarodowych zrzeszeń społeczności lokalnych i regionalnych oraz współpracy ze społecznościami lokalnymi i regionalnymi innych państw.</p>
			<p class="pt-4">3. Zasady, na jakich jednostki samorządu terytorialnego mogą korzystać z praw, o których mowa w ust. 1 i 2, określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 173",
    slug: "173",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Sądy i Trybunały są władzą odrębną i niezależną od innych władz.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 174",
    slug: "174",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Sądy i Trybunały wydają wyroki w imieniu Rzeczypospolitej Polskiej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 175",
    slug: "175",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Wymiar sprawiedliwości w Rzeczypospolitej Polskiej sprawują Sąd Najwyższy, sądy powszechne, sądy administracyjne oraz sądy wojskowe.</p>
			<p class="pt-4">2. Sąd wyjątkowy lub tryb doraźny może być ustanowiony tylko na czas wojny.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 176",
    slug: "176",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Postępowanie sądowe jest co najmniej dwuinstancyjne.</p>
			<p class="pt-4">2. Ustrój i właściwość sądów oraz postępowanie przed sądami określają ustawy.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 177",
    slug: "177",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Sądy powszechne sprawują wymiar sprawiedliwości we wszystkich sprawach z wyjątkiem spraw ustawowo zastrzeżonych dla właściwości innych sądów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 178",
    slug: "178",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Sędziowie w sprawowaniu swojego urzędu są niezawiśli i podlegają tylko Konstytucji oraz ustawom.</p>
			<p class="pt-4">2. Sędziom zapewnia się warunki pracy i wynagrodzenie odpowiadające godności urzędu oraz zakresowi ich obowiązków.</p>
			<p class="pt-4">3. Sędzia nie może należeć do partii politycznej, związku zawodowego ani prowadzić działalności publicznej nie dającej się pogodzić z zasadami niezależności sądów i niezawisłości sędziów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 179",
    slug: "179",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Sędziowie są powoływani przez Prezydenta Rzeczypospolitej, na wniosek Krajowej Rady Sądownictwa, na czas nieoznaczony.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 180",
    slug: "180",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Sędziowie są nieusuwalni.</p>
			<p class="pt-4">2. Złożenie sędziego z urzędu, zawieszenie w urzędowaniu, przeniesienie do innej siedziby lub na inne stanowisko wbrew jego woli może nastąpić jedynie na mocy orzeczenia sądu i tylko w przypadkach określonych w ustawie.</p>
			<p class="pt-4">3. Sędzia może być przeniesiony w stan spoczynku na skutek uniemożliwiających mu sprawowanie jego urzędu choroby lub utraty sił. Tryb postępowania oraz sposób odwołania się do sądu określa ustawa.</p>
			<p class="pt-4">4. Ustawa określa granicę wieku, po osiągnięciu której sędziowie przechodzą w stan spoczynku.</p>
			<p class="pt-4">5. W razie zmiany ustroju sądów lub zmiany granic okręgów sądowych wolno sędziego przenosić do innego sądu lub w stan spoczynku z pozostawieniem mu pełnego uposażenia.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 181",
    slug: "181",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Sędzia nie może być, bez uprzedniej zgody sądu określonego w ustawie, pociągnięty do odpowiedzialności karnej ani pozbawiony wolności. Sędzia nie może być zatrzymany lub aresztowany, z wyjątkiem ujęcia go na gorącym uczynku przestępstwa, jeżeli jego zatrzymanie jest niezbędne do zapewnienia prawidłowego toku postępowania. O zatrzymaniu niezwłocznie powiadamia się prezesa właściwego miejscowo sądu, który może nakazać natychmiastowe zwolnienie zatrzymanego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 182",
    slug: "182",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Udział obywateli w sprawowaniu wymiaru sprawiedliwości określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 183",
    slug: "183",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Sąd Najwyższy sprawuje nadzór nad działalnością sądów powszechnych i wojskowych w zakresie orzekania.</p>
			<p class="pt-4">2. Sąd Najwyższy wykonuje także inne czynności określone w Konstytucji i ustawach.</p>
			<p class="pt-4">3. Pierwszego Prezesa Sądu Najwyższego powołuje Prezydent Rzeczypospolitej na sześcioletnią kadencję spośród kandydatów przedstawionych przez Zgromadzenie Ogólne Sędziów Sądu Najwyższego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 184",
    slug: "184",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Naczelny Sąd Administracyjny oraz inne sądy administracyjne sprawują, w zakresie określonym w ustawie, kontrolę działalności administracji publicznej. Kontrola ta obejmuje również orzekanie o zgodności z ustawami uchwał organów samorządu terytorialnego i aktów normatywnych terenowych organów administracji rządowej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 185",
    slug: "185",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Prezesa Naczelnego Sądu Administracyjnego powołuje Prezydent Rzeczypospolitej na sześcioletnią kadencję spośród kandydatów przedstawionych przez Zgromadzenie Ogólne Sędziów Naczelnego Sądu Administracyjnego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 186",
    slug: "186",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Krajowa Rada Sądownictwa stoi na straży niezależności sądów i niezawisłości sędziów.</p>
			<p class="pt-4">2. Krajowa Rada Sądownictwa może wystąpić do Trybunału Konstytucyjnego z wnioskiem w sprawie zgodności z Konstytucją aktów normatywnych w zakresie, w jakim dotyczą one niezależności sądów i niezawisłości sędziów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 187",
    slug: "187",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Krajowa Rada Sądownictwa składa się z:</p>
			<ul class="pl-4">
				<li>1) Pierwszego Prezesa Sądu Najwyższego, Ministra Sprawiedliwości, Prezesa Naczelnego Sądu Administracyjnego i osoby powołanej przez Prezydenta Rzeczypospolitej,</li>
				<li>2) piętnastu członków wybranych spośród sędziów Sądu Najwyższego, sądów powszechnych, sądów administracyjnych i sądów wojskowych,</li>
				<li>3) czterech członków wybranych przez Sejm spośród posłów oraz dwóch członków wybranych przez Senat spośród senatorów.</li>
			</ul>
			<p class="pt-4">2. Krajowa Rada Sądownictwa wybiera spośród swoich członków przewodniczącego i dwóch wiceprzewodniczących.</p>
			<p class="pt-4">3. Kadencja wybranych członków Krajowej Rady Sądownictwa trwa cztery lata.</p>
			<p class="pt-4">4. Ustrój, zakres działania i tryb pracy Krajowej Rady Sądownictwa oraz sposób wyboru jej członków określa ustawa.
		`,
    desc: "",
  },
  {
    title: "Art. 188",
    slug: "188",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Trybunał Konstytucyjny orzeka w sprawach:</p>
			<ul class="pl-4">
				<li>1) zgodności ustaw i umów międzynarodowych z Konstytucją,</li>
				<li>2) zgodności ustaw z ratyfikowanymi umowami międzynarodowymi, których ratyfikacja wymagała uprzedniej zgody wyrażonej w ustawie,</li>
				<li>3) zgodności przepisów prawa, wydawanych przez centralne organy państwowe, z Konstytucją, ratyfikowanymi umowami międzynarodowymi i ustawami,</li>
				<li>4) zgodności z Konstytucją celów lub działalności partii politycznych,</li>
				<li>5) skargi konstytucyjnej, o której mowa w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/79'>art. 79</a> ust. 1.</li>
			</ul>
		`,
    desc: "",
  },
  {
    title: "Art. 189",
    slug: "189",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Trybunał Konstytucyjny rozstrzyga spory kompetencyjne pomiędzy centralnymi konstytucyjnymi organami państwa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 190",
    slug: "190",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Orzeczenia Trybunału Konstytucyjnego mają moc powszechnie obowiązującą i są ostateczne.</p>
			<p class="pt-4">2. Orzeczenia Trybunału Konstytucyjnego w sprawach wymienionych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/188'>art. 188</a> podlegają niezwłocznemu ogłoszeniu w organie urzędowym, w którym akt normatywny był ogłoszony. Jeżeli akt nie był ogłoszony, orzeczenie ogłasza się w Dzienniku Urzędowym Rzeczypospolitej Polskiej \"Monitor Polski\".</p>
			<p class="pt-4">3. Orzeczenie Trybunału Konstytucyjnego wchodzi w życie z dniem ogłoszenia, jednak Trybunał Konstytucyjny może określić inny termin utraty mocy obowiązującej aktu normatywnego. Termin ten nie może przekroczyć osiemnastu miesięcy, gdy chodzi o ustawę, a gdy chodzi o inny akt normatywny dwunastu miesięcy. W przypadku orzeczeń, które wiążą się z nakładami finansowymi nie przewidzianymi w ustawie budżetowej, Trybunał Konstytucyjny określa termin utraty mocy obowiązującej aktu normatywnego po zapoznaniu się z opinią Rady Ministrów.</p>
			<p class="pt-4">4. Orzeczenie Trybunału Konstytucyjnego o niezgodności z Konstytucją, umową międzynarodową lub z ustawą aktu normatywnego, na podstawie którego zostało wydane prawomocne orzeczenie sądowe, ostateczna decyzja administracyjna lub rozstrzygnięcie w innych sprawach, stanowi podstawę do wznowienia postępowania, uchylenia decyzji lub innego rozstrzygnięcia na zasadach i w trybie określonych w przepisach właściwych dla danego postępowania.</p>
			<p class="pt-4">5. Orzeczenia Trybunału Konstytucyjnego zapadają większością głosów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 191",
    slug: "191",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Z wnioskiem w sprawach, o których mowa w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/188'>art. 188</a>, do Trybunału Konstytucyjnego wystąpić mogą:</p>
			<ul class="pl-4">
				<li>1) Prezydent Rzeczypospolitej, Marszałek Sejmu, Marszałek Senatu, Prezes Rady Ministrów, 50 posłów, 30 senatorów, Pierwszy Prezes Sądu Najwyższego, Prezes Naczelnego Sądu Administracyjnego, Prokurator Generalny, Prezes Najwyższej Izby Kontroli, Rzecznik Praw Obywatelskich,</li>
				<li>2) Krajowa Rada Sądownictwa w zakresie, o którym mowa w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/186'>art. 186</a> ust. 2,</li>
				<li>3) organy stanowiące jednostek samorządu terytorialnego,</li>
				<li>4) ogólnokrajowe organy związków zawodowych oraz ogólnokrajowe władze organizacji pracodawców i organizacji zawodowych,</li>
				<li>5) kościoły i inne związki wyznaniowe,</li>
				<li>6) podmioty określone w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/79'>art. 79</a> w zakresie w nim wskazanym.</li>
			</ul>
			<p class="pt-4">2. Podmioty, o których mowa w ust. 1 pkt 3-5, mogą wystąpić z takim wnioskiem, jeżeli akt normatywny dotyczy spraw objętych ich zakresem działania.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 192",
    slug: "192",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Z wnioskiem w sprawach, o których mowa w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/189'>art. 189</a>, do Trybunału Konstytucyjnego wystąpić mogą: Prezydent Rzeczypospolitej, Marszałek Sejmu, Marszałek Senatu, Prezes Rady Ministrów, Pierwszy Prezes Sądu Najwyższego, Prezes Naczelnego Sądu Administracyjnego i Prezes Najwyższej Izby Kontroli.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 193",
    slug: "193",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Każdy sąd może przedstawić Trybunałowi Konstytucyjnemu pytanie prawne co do zgodności aktu normatywnego z Konstytucją, ratyfikowanymi umowami międzynarodowymi lub ustawą, jeżeli od odpowiedzi na pytanie prawne zależy rozstrzygnięcie sprawy toczącej się przed sądem.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 194",
    slug: "194",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Trybunał Konstytucyjny składa się z 15 sędziów, wybieranych indywidualnie przez Sejm na 9 lat spośród osób wyróżniających się wiedzą prawniczą. Ponowny wybór do składu Trybunału jest niedopuszczalny.</p>
			<p class="pt-4">2. Prezesa i Wiceprezesa Trybunału Konstytucyjnego powołuje Prezydent Rzeczypospolitej spośród kandydatów przedstawionych przez Zgromadzenie Ogólne Sędziów Trybunału Konstytucyjnego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 195",
    slug: "195",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Sędziowie Trybunału Konstytucyjnego w sprawowaniu swojego urzędu są niezawiśli i podlegają tylko Konstytucji.</p>
			<p class="pt-4">2. Sędziom Trybunału Konstytucyjnego zapewnia się warunki pracy i wynagrodzenie odpowiadające godności urzędu oraz zakresowi ich obowiązków.</p>
			<p class="pt-4">3. Sędziowie Trybunału Konstytucyjnego w okresie zajmowania stanowiska nie mogą należeć do partii politycznej, związku zawodowego ani prowadzić działalności publicznej nie dającej się pogodzić z zasadami niezależności sądów i niezawisłości sędziów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 196",
    slug: "196",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Sędzia Trybunału Konstytucyjnego nie może być, bez uprzedniej zgody Trybunału Konstytucyjnego, pociągnięty do odpowiedzialności karnej ani pozbawiony wolności. Sędzia nie może być zatrzymany lub aresztowany, z wyjątkiem ujęcia go na gorącym uczynku przestępstwa, jeżeli jego zatrzymanie jest niezbędne do zapewnienia prawidłowego toku postępowania. O zatrzymaniu niezwłocznie powiadamia się Prezesa Trybunału Konstytucyjnego, który może nakazać natychmiastowe zwolnienie zatrzymanego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 197",
    slug: "197",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Organizację Trybunału Konstytucyjnego oraz tryb postępowania przed Trybunałem określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 198",
    slug: "198",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Za naruszenie Konstytucji lub ustawy, w związku z zajmowanym stanowiskiem lub w zakresie swojego urzędowania, odpowiedzialność konstytucyjną przed Trybunałem Stanu ponoszą: Prezydent Rzeczypospolitej, Prezes Rady Ministrów oraz członkowie Rady Ministrów, Prezes Narodowego Banku Polskiego, Prezes Najwyższej Izby Kontroli, członkowie Krajowej Rady Radiofonii i Telewizji, osoby, którym Prezes Rady Ministrów powierzył kierowanie ministerstwem oraz Naczelny Dowódca Sił Zbrojnych.</p>
			<p class="pt-4">2. Odpowiedzialność konstytucyjną przed Trybunałem Stanu ponoszą również posłowie i senatorowie w zakresie określonym w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/107'>art. 107</a>.</p>
			<p class="pt-4">3. Rodzaje kar orzekanych przez Trybunał Stanu określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 199",
    slug: "199",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>1. Trybunał Stanu składa się z przewodniczącego, 2 zastępców przewodniczącego i 16 członków wybieranych przez Sejm spoza grona posłów i senatorów na czas kadencji Sejmu. Zastępcy przewodniczącego Trybunału oraz co najmniej połowa członków Trybunału Stanu powinni mieć kwalifikacje wymagane do zajmowania stanowiska sędziego.</p>
			<p class="pt-4">2. Przewodniczącym Trybunału Stanu jest Pierwszy Prezes Sądu Najwyższego.</p>
			<p class="pt-4">3. Członkowie Trybunału Stanu w sprawowaniu funkcji sędziego Trybunału Stanu są niezawiśli i podlegają tylko Konstytucji oraz ustawom.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 200",
    slug: "200",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Członek Trybunału Stanu nie może być bez uprzedniej zgody Trybunału Stanu, pociągnięty do odpowiedzialności karnej ani pozbawiony wolności. Członek Trybunału Stanu nie może być zatrzymany lub aresztowany, z wyjątkiem ujęcia go na gorącym uczynku przestępstwa, jeżeli jego zatrzymanie jest niezbędne do zapewnienia prawidłowego toku postępowania. O zatrzymaniu niezwłocznie powiadamia się przewodniczącego Trybunału Stanu, który może nakazać natychmiastowe zwolnienie zatrzymanego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 201",
    slug: "201",
    chapter: {
      id: "VIII",
      title: "Sądy i Trybunały",
    },
    html: `
			<p>Organizację Trybunału Stanu oraz tryb postępowania przed Trybunałem określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 202",
    slug: "202",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>1. Najwyższa Izba Kontroli jest naczelnym organem kontroli państwowej.</p>
			<p class="pt-4">2. Najwyższa Izba Kontroli podlega Sejmowi.</p>
			<p class="pt-4">3. Najwyższa Izba Kontroli działa na zasadach kolegialności.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 203",
    slug: "203",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>1. Najwyższa Izba Kontroli kontroluje działalność organów administracji rządowej, Narodowego Banku Polskiego, państwowych osób prawnych i innych państwowych jednostek organizacyjnych z punktu widzenia legalności, gospodarności, celowości i rzetelności.</p>
			<p class="pt-4">2. Najwyższa Izba Kontroli może kontrolować działalność organów samorządu terytorialnego, komunalnych osób prawnych i innych komunalnych jednostek organizacyjnych z punktu widzenia legalności, gospodarności i rzetelności.</p>
			<p class="pt-4">3. Najwyższa Izba Kontroli może również kontrolować z punktu widzenia legalności i gospodarności działalność innych jednostek organizacyjnych i podmiotów gospodarczych w zakresie, w jakim wykorzystują one majątek lub środki państwowe lub komunalne oraz wywiązują się z zobowiązań finansowych na rzecz państwa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 204",
    slug: "204",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>1. Najwyższa Izba Kontroli przedkłada Sejmowi:</p>
			<ul class="pl-4">
				<li>1) analizę wykonania budżetu państwa i założeń polityki pieniężnej,</li>
				<li>2) opinię w przedmiocie absolutorium dla Rady Ministrów,</li>
				<li>3) informacje o wynikach kontroli, wnioski i wystąpienia, określone w ustawie.</li>
			</ul>
			<p class="pt-4">2. Najwyższa Izba Kontroli przedstawia Sejmowi coroczne sprawozdanie ze swojej działalności.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 205",
    slug: "205",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>1. Prezes Najwyższej Izby Kontroli jest powoływany przez Sejm za zgodą Senatu, na 6 lat i może być ponownie powołany tylko raz.</p>
			<p class="pt-4">2. Prezes Najwyższej Izby Kontroli nie może zajmować innego stanowiska, z wyjątkiem stanowiska profesora szkoły wyższej ani wykonywać innych zajęć zawodowych.</p>
			<p class="pt-4">3. Prezes Najwyższej Izby Kontroli nie może należeć do partii politycznej, związku zawodowego ani prowadzić działalności publicznej nie dającej się pogodzić z godnością jego urzędu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 206",
    slug: "206",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>Prezes Najwyższej Izby Kontroli nie może być bez uprzedniej zgody Sejmu pociągnięty do odpowiedzialności karnej ani pozbawiony wolności. Prezes Najwyższej Izby Kontroli nie może być zatrzymany lub aresztowany, z wyjątkiem ujęcia go na gorącym uczynku przestępstwa i jeżeli jego zatrzymanie jest niezbędne do zapewnienia prawidłowego toku postępowania. O zatrzymaniu niezwłocznie powiadamia się Marszałka Sejmu, który może nakazać natychmiastowe zwolnienie zatrzymanego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 207",
    slug: "207",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>Organizację oraz tryb działania Najwyższej Izby Kontroli określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 208",
    slug: "208",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>1. Rzecznik Praw Obywatelskich stoi na straży wolności i praw człowieka i obywatela określonych w Konstytucji oraz w innych aktach normatywnych.</p>
			<p class="pt-4">2. Zakres i sposób działania Rzecznika Praw Obywatelskich określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 209",
    slug: "209",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>1. Rzecznik Praw Obywatelskich jest powoływany przez Sejm za zgodą Senatu, na 5 lat.</p>
			<p class="pt-4">2. Rzecznik Praw Obywatelskich nie może zajmować innego stanowiska, z wyjątkiem stanowiska profesora szkoły wyższej ani wykonywać innych zajęć zawodowych.</p>
			<p class="pt-4">3. Rzecznik Praw Obywatelskich nie może należeć do partii politycznej, związku zawodowego ani prowadzić działalności publicznej nie dającej się pogodzić z godnością jego urzędu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 210",
    slug: "210",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>Rzecznik Praw Obywatelskich jest w swojej działalności niezawisły, niezależny od innych organów państwowych i odpowiada jedynie przed Sejmem na zasadach określonych w ustawie.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 211",
    slug: "211",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>Rzecznik Praw Obywatelskich nie może być bez uprzedniej zgody Sejmu pociągnięty do odpowiedzialności karnej ani pozbawiony wolności. Rzecznik Praw Obywatelskich nie może być zatrzymany lub aresztowany, z wyjątkiem ujęcia go na gorącym uczynku przestępstwa i jeżeli jego zatrzymanie jest niezbędne do zapewnienia prawidłowego toku postępowania. O zatrzymaniu niezwłocznie powiadamia się Marszałka Sejmu, który może nakazać natychmiastowe zwolnienie zatrzymanego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 212",
    slug: "212",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>Rzecznik Praw Obywatelskich corocznie informuje Sejm i Senat o swojej działalności oraz o stanie przestrzegania wolności i praw człowieka i obywatela.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 213",
    slug: "213",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>1. Krajowa Rada Radiofonii i Telewizji stoi na straży wolności słowa, prawa do informacji oraz interesu publicznego w radiofonii i telewizji.</p>
			<p class="pt-4">2. Krajowa Rada Radiofonii i Telewizji wydaje rozporządzenia, a w sprawach indywidualnych podejmuje uchwały.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 214",
    slug: "214",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>1. Członkowie Krajowej Rady Radiofonii i Telewizji są powoływani przez Sejm, Senat i Prezydenta Rzeczypospolitej.</p>
			<p class="pt-4">2. Członek Krajowej Rady Radiofonii i Telewizji nie może należeć do partii politycznej, związku zawodowego ani prowadzić działalności publicznej nie dającej się pogodzić z godnością pełnionej funkcji.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 215",
    slug: "215",
    chapter: {
      id: "IX",
      title: "Organy kontroli państwowej i ochrony prawa",
    },
    html: `
			<p>Zasady i tryb działania Krajowej Rady Radiofonii i Telewizji, jej organizację oraz szczegółowe zasady powoływania jej członków określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 216",
    slug: "216",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>1. Środki finansowe na cele publiczne są gromadzone i wydatkowane w sposób określony w ustawie.</p>
			<p class="pt-4">2. Nabywanie, zbywanie i obciążanie nieruchomości, udziałów lub akcji oraz emisja papierów wartościowych przez Skarb Państwa, Narodowy Bank Polski lub inne państwowe osoby prawne następuje na zasadach i w trybie określonych w ustawie.</p>
			<p class="pt-4">3. Ustanowienie monopolu następuje w drodze ustawy.</p>
			<p class="pt-4">4. Zaciąganie pożyczek oraz udzielanie gwarancji i poręczeń finansowych przez państwo następuje na zasadach i w trybie określonych w ustawie.</p>
			<p class="pt-4">5. Nie wolno zaciągać pożyczek lub udzielać gwarancji i poręczeń finansowych, w następstwie których państwowy dług publiczny przekroczy 3/5 wartości rocznego produktu krajowego brutto. Sposób obliczania wartości rocznego produktu krajowego brutto oraz państwowego długu publicznego określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 217",
    slug: "217",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>Nakładanie podatków, innych danin publicznych, określanie podmiotów, przedmiotów opodatkowania i stawek podatkowych, a także zasad przyznawania ulg i umorzeń oraz kategorii podmiotów zwolnionych od podatków następuje w drodze ustawy.</p>
		`,
    desc: `
			<p>Jak wskazał Trybunał Konstytucyjny art. 217 jest szczególnie powiązany z <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/84'>art. 84</a> (obowiązek ponoszenia ciężarów publicznych), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/82'>art. 82</a> (troska o wspólne dobro), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/83'>art. 83</a> (obowiązek przestrzegania prawa) i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/1'>art. 1</a> (państwo jako dobro wspólne obywateli) – wyrok TK z 6 marca 2002, P 7/00.</p>

			<p>Przepis ten formułuje wyraźnie i wprost bezwzględny nakaz regulacji tej materii na drodze ustawy. Artykuł 217 kładzie kres możliwościom nakładania podatków i danin publicznych, ustalania stawek podatkowych, zasad przyznawania ulg i umorzeń, jak również zwolnień od podatku w innej formie niż w drodze ustawy.</p>

			<p class="pt-2 text-right italic">wyjaśnienie ze strony <a href="https://www.rpo.gov.pl/konstytucja" rel="nofollow" target="_blank">Rzecznika Praw Obywatelskich</a> ${extLink}</p>
		`,
  },
  {
    title: "Art. 218",
    slug: "218",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>Organizację Skarbu Państwa oraz sposób zarządzania majątkiem Skarbu Państwa określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 219",
    slug: "219",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>1. Sejm uchwala budżet państwa na rok budżetowy w formie ustawy budżetowej.</p>
			<p class="pt-4">2. Zasady i tryb opracowania projektu budżetu państwa, stopień jego szczegółowości oraz wymagania, którym powinien odpowiadać projekt ustawy budżetowej, a także zasady i tryb wykonywania ustawy budżetowej określa ustawa.</p>
			<p class="pt-4">3. W wyjątkowych przypadkach dochody i wydatki państwa w okresie krótszym niż rok może określać ustawa o prowizorium budżetowym. Przepisy dotyczące projektu ustawy budżetowej stosuje się odpowiednio do projektu ustawy o prowizorium budżetowym.</p>
			<p class="pt-4">4. Jeżeli ustawa budżetowa albo ustawa o prowizorium budżetowym nie weszły w życie w dniu rozpoczęcia roku budżetowego, Rada Ministrów prowadzi gospodarkę finansową na podstawie przedłożonego projektu ustawy.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 220",
    slug: "220",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>1. Zwiększenie wydatków lub ograniczenie dochodów planowanych przez Radę Ministrów nie może powodować ustalenia przez Sejm większego deficytu budżetowego niż przewidziany w projekcie ustawy budżetowej.</p>
			<p class="pt-4">2. Ustawa budżetowa nie może przewidywać pokrywania deficytu budżetowego przez zaciąganie zobowiązania w centralnym banku państwa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 221",
    slug: "221",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>Inicjatywa ustawodawcza w zakresie ustawy budżetowej, ustawy o prowizorium budżetowym, zmiany ustawy budżetowej, ustawy o zaciąganiu długu publicznego oraz ustawy o udzielaniu gwarancji finansowych przez państwo przysługuje wyłącznie Radzie Ministrów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 222",
    slug: "222",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>Rada Ministrów przedkłada Sejmowi najpóźniej na 3 miesiące przed rozpoczęciem roku budżetowego projekt ustawy budżetowej na rok następny. W wyjątkowych przypadkach możliwe jest późniejsze przedłożenie projektu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 223",
    slug: "223",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>Senat może uchwalić poprawki do ustawy budżetowej w ciągu 20 dni od dnia przekazania jej Senatowi.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 224",
    slug: "224",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>1. Prezydent Rzeczypospolitej podpisuje w ciągu 7 dni ustawę budżetową albo ustawę o prowizorium budżetowym przedstawioną przez Marszałka Sejmu. Do ustawy budżetowej i ustawy o prowizorium budżetowym nie stosuje się przepisu <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/122'>art. 122</a> ust. 5.</p>
			<p class="pt-4">2. W przypadku zwrócenia się Prezydenta Rzeczypospolitej do Trybunału Konstytucyjnego w sprawie zgodności z Konstytucją ustawy budżetowej albo ustawy o prowizorium budżetowym przed jej podpisaniem, Trybunał orzeka w tej sprawie nie później niż w ciągu 2 miesięcy od dnia złożenia wniosku w Trybunale.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 225",
    slug: "225",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>Jeżeli w ciągu 4 miesięcy od dnia przedłożenia Sejmowi projektu ustawy budżetowej nie zostanie ona przedstawiona Prezydentowi Rzeczypospolitej do podpisu, Prezydent Rzeczypospolitej może w ciągu 14 dni zarządzić skrócenie kadencji Sejmu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 226",
    slug: "226",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>1. Rada Ministrów w ciągu 5 miesięcy od zakończenia roku budżetowego przedkłada Sejmowi sprawozdanie z wykonania ustawy budżetowej wraz z informacją o stanie zadłużenia państwa.</p>
			<p class="pt-4">2. Sejm rozpatruje przedłożone sprawozdanie i po zapoznaniu się z opinią Najwyższej Izby Kontroli podejmuje, w ciągu 90 dni od dnia przedłożenia Sejmowi sprawozdania, uchwałę o udzieleniu lub o odmowie udzielenia Radzie Ministrów absolutorium.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 227",
    slug: "227",
    chapter: {
      id: "X",
      title: "Finanse publiczne",
    },
    html: `
			<p>1. Centralnym bankiem państwa jest Narodowy Bank Polski. Przysługuje mu wyłączne prawo emisji pieniądza oraz ustalania i realizowania polityki pieniężnej. Narodowy Bank Polski odpowiada za wartość polskiego pieniądza.</p>
			<p class="pt-4">2. Organami Narodowego Banku Polskiego są: Prezes Narodowego Banku Polskiego, Rada Polityki Pieniężnej oraz Zarząd Narodowego Banku Polskiego.</p>
			<p class="pt-4">3. Prezes Narodowego Banku Polskiego jest powoływany przez Sejm na wniosek Prezydenta Rzeczypospolitej, na 6 lat.</p>
			<p class="pt-4">4. Prezes Narodowego Banku Polskiego nie może należeć do partii politycznej, związku zawodowego ani prowadzić działalności publicznej nie dającej się pogodzić z godnością jego urzędu.</p>
			<p class="pt-4">5. W skład Rady Polityki Pieniężnej wchodzą Prezes Narodowego Banku Polskiego jako przewodniczący oraz osoby wyróżniające się wiedzą z zakresu finansów powoływane na 6 lat, w równej liczbie przez Prezydenta Rzeczypospolitej, Sejm i Senat.</p>
			<p class="pt-4">6. Rada Polityki Pieniężnej ustala corocznie założenia polityki pieniężnej i przedkłada je do wiadomości Sejmowi równocześnie z przedłożeniem przez Radę Ministrów projektu ustawy budżetowej. Rada Polityki Pieniężnej, w ciągu 5 miesięcy od zakończenia roku budżetowego, składa Sejmowi sprawozdanie z wykonania założeń polityki pieniężnej.</p>
			<p class="pt-4">7. Organizację i zasady działania Narodowego Banku Polskiego oraz szczegółowe zasady powoływania i odwoływania jego organów określa ustawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 228",
    slug: "228",
    chapter: {
      id: "XI",
      title: "Stany nadzwyczajne",
    },
    html: `
			<p>1. W sytuacjach szczególnych zagrożeń, jeżeli zwykłe środki konstytucyjne są niewystarczające, może zostać wprowadzony odpowiedni stan nadzwyczajny: stan wojenny, stan wyjątkowy lub stan klęski żywiołowej.</p>
			<p class="pt-4">2. Stan nadzwyczajny może być wprowadzony tylko na podstawie ustawy, w drodze rozporządzenia, które podlega dodatkowemu podaniu do publicznej wiadomości.</p>
			<p class="pt-4">3. Zasady działania organów władzy publicznej oraz zakres, w jakim mogą zostać ograniczone wolności i prawa człowieka i obywatela w czasie poszczególnych stanów nadzwyczajnych, określa ustawa.</p>
			<p class="pt-4">4. Ustawa może określić podstawy, zakres i tryb wyrównywania strat majątkowych wynikających z ograniczenia w czasie stanu nadzwyczajnego wolności i praw człowieka i obywatela.</p>
			<p class="pt-4">5. Działania podjęte w wyniku wprowadzenia stanu nadzwyczajnego muszą odpowiadać stopniowi zagrożenia i powinny zmierzać do jak najszybszego przywrócenia normalnego funkcjonowania państwa.</p>
			<p class="pt-4">6. W czasie stanu nadzwyczajnego nie mogą być zmienione: Konstytucja, ordynacje wyborcze do Sejmu, Senatu i organów samorządu terytorialnego, ustawa o wyborze Prezydenta Rzeczypospolitej oraz ustawy o stanach nadzwyczajnych.</p>
			<p class="pt-4">7. W czasie stanu nadzwyczajnego oraz w ciągu 90 dni po jego zakończeniu nie może być skrócona kadencja Sejmu, przeprowadzane referendum ogólnokrajowe, nie mogą być przeprowadzane wybory do Sejmu, Senatu, organów samorządu terytorialnego oraz wybory Prezydenta Rzeczypospolitej, a kadencje tych organów ulegają odpowiedniemu przedłużeniu. Wybory do organów samorządu terytorialnego są możliwe tylko tam, gdzie nie został wprowadzony stan nadzwyczajny.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 229",
    slug: "229",
    chapter: {
      id: "XI",
      title: "Stany nadzwyczajne",
    },
    html: `
			<p>W razie zewnętrznego zagrożenia państwa, zbrojnej napaści na terytorium Rzeczpospolitej Polskiej lub gdy z umowy międzynarodowej wynika zobowiązanie do wspólnej obrony przeciwko agresji, Prezydent Rzeczypospolitej na wniosek Rady Ministrów może wprowadzić stan wojenny na części albo na całym terytorium państwa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 230",
    slug: "230",
    chapter: {
      id: "XI",
      title: "Stany nadzwyczajne",
    },
    html: `
			<p>1. W razie zagrożenia konstytucyjnego ustroju państwa, bezpieczeństwa obywateli lub porządku publicznego, Prezydent Rzeczypospolitej na wniosek Rady Ministrów może wprowadzić, na czas oznaczony, nie dłuższy niż 90 dni, stan wyjątkowy na części albo na całym terytorium państwa.</p>
			<p class="pt-4">2. Przedłużenie stanu wyjątkowego może nastąpić tylko raz, za zgodą Sejmu i na czas nie dłuższy niż 60 dni.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 231",
    slug: "231",
    chapter: {
      id: "XI",
      title: "Stany nadzwyczajne",
    },
    html: `
			<p>Rozporządzenie o wprowadzeniu stanu wojennego lub wyjątkowego Prezydent Rzeczypospolitej przedstawia Sejmowi w ciągu 48 godzin od podpisania rozporządzenia. Sejm niezwłocznie rozpatruje rozporządzenie Prezydenta Rzeczypospolitej. Sejm może je uchylić bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby posłów.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 232",
    slug: "232",
    chapter: {
      id: "XI",
      title: "Stany nadzwyczajne",
    },
    html: `
			<p>W celu zapobieżenia skutkom katastrof naturalnych lub awarii technicznych noszących znamiona klęski żywiołowej oraz w celu ich usunięcia Rada Ministrów może wprowadzić na czas oznaczony, nie dłuższy niż 30 dni, stan klęski żywiołowej na części albo na całym terytorium państwa. Przedłużenie tego stanu może nastąpić za zgodą Sejmu.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 233",
    slug: "233",
    chapter: {
      id: "XI",
      title: "Stany nadzwyczajne",
    },
    html: `
			<p>1. Ustawa określająca zakres ograniczeń wolności i praw człowieka i obywatela w czasie stanu wojennego i wyjątkowego nie może ograniczać wolności i praw określonych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/30'>art. 30</a> (godność człowieka), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/34'>art. 34</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/36'>art. 36</a> (obywatelstwo), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/38'>art. 38</a> (ochrona życia), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/39'>art. 39</a>, <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/40'>art. 40</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/41'>art. 41</a> ust. 4 (humanitarne traktowanie), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/42'>art. 42</a> (ponoszenie odpowiedzialności karnej), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/45'>art. 45</a> (dostęp do sądu), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/47'>art. 47</a> (dobra osobiste), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/53'>art. 53</a> (sumienie i religia), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/63'>art. 63</a> (petycje) oraz <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/48'>art. 48</a> i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/72'>art. 72</a> (rodzina i dziecko).</p>
			<p class="pt-4">2. Niedopuszczalne jest ograniczenie wolności i praw człowieka i obywatela wyłącznie z powodu rasy, płci, języka, wyznania lub jego braku, pochodzenia społecznego, urodzenia oraz majątku.</p>
			<p class="pt-4">3. Ustawa określająca zakres ograniczeń wolności i praw człowieka i obywatela w stanie klęski żywiołowej może ograniczać wolności i prawa określone w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/22'>art. 22</a> (wolność działalności gospodarczej), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/41'>art. 41</a> ust. 1, 3 i 5 (wolność osobista), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/50'>art. 50</a> (nienaruszalność mieszkania), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/52'>art. 52</a> ust. 1 (wolność poruszania się i pobytu na terytorium Rzeczypospolitej Polskiej), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/59'>art. 59</a> ust. 3 (prawo do strajku), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/64'>art. 64</a> (prawo własności), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/65'>art. 65</a> ust. 1 (wolność pracy), <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/66'>art. 66</a> ust. 1 (prawo do bezpiecznych i higienicznych warunków pracy) oraz <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/66'>art. 66</a> ust. 2 (prawo do wypoczynku).</p>
		`,
    desc: "",
  },
  {
    title: "Art. 234",
    slug: "234",
    chapter: {
      id: "XI",
      title: "Stany nadzwyczajne",
    },
    html: `
			<p>1. Jeżeli w czasie stanu wojennego Sejm nie może zebrać się na posiedzenie, Prezydent Rzeczypospolitej na wniosek Rady Ministrów wydaje rozporządzenia z mocą ustawy w zakresie i w granicach określonych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/228'>art. 228</a> ust. 3-5. Rozporządzenia te podlegają zatwierdzeniu przez Sejm na najbliższym posiedzeniu.</p>
			<p class="pt-4">2. Rozporządzenia, o których mowa w ust. 1, mają charakter źródeł powszechnie obowiązującego prawa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 235",
    slug: "235",
    chapter: {
      id: "XII",
      title: "Zmiana Konstytucji",
    },
    html: `
			<p>1. Projekt ustawy o zmianie Konstytucji może przedłożyć co najmniej 1/5 ustawowej liczby posłów, Senat lub Prezydent Rzeczypospolitej.</p>
			<p class="pt-4">2. Zmiana Konstytucji następuje w drodze ustawy uchwalonej w jednakowym brzmieniu przez Sejm i następnie w terminie nie dłuższym niż 60 dni przez Senat.</p>
			<p class="pt-4">3. Pierwsze czytanie projektu ustawy o zmianie Konstytucji może odbyć się nie wcześniej niż trzydziestego dnia od dnia przedłożenia Sejmowi projektu ustawy.</p>
			<p class="pt-4">4. Ustawę o zmianie Konstytucji uchwala Sejm większością co najmniej 2/3 głosów w obecności co najmniej połowy ustawowej liczby posłów oraz Senat bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby senatorów.</p>
			<p class="pt-4">5. Uchwalenie przez Sejm ustawy zmieniającej przepisy rozdziałów I, II lub XII Konstytucji może odbyć się nie wcześniej niż sześćdziesiątego dnia po pierwszym czytaniu projektu tej ustawy.</p>
			<p class="pt-4">6. Jeżeli ustawa o zmianie Konstytucji dotyczy przepisów rozdziału I, II lub XII, podmioty określone w ust. 1 mogą zażądać, w terminie 45 dni od dnia uchwalenia ustawy przez Senat, przeprowadzenia referendum zatwierdzającego. Z wnioskiem w tej sprawie podmioty te zwracają się do Marszałka Sejmu, który zarządza niezwłocznie przeprowadzenie referendum w ciągu 60 dni od dnia złożenia wniosku. Zmiana Konstytucji zostaje przyjęta, jeżeli za tą zmianą opowiedziała się większość głosujących.</p>
			<p class="pt-4">7. Po zakończeniu postępowania określonego w ust. 4 i 6 Marszałek Sejmu przedstawia Prezydentowi Rzeczypospolitej uchwaloną ustawę do podpisu. Prezydent Rzeczypospolitej podpisuje ustawę w ciągu 21 dni od dnia przedstawienia i zarządza jej ogłoszenie w Dzienniku Ustaw Rzeczypospolitej Polskiej.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 236",
    slug: "236",
    chapter: {
      id: "XIII",
      title: "Przepisy przejściowe i końcowe",
    },
    html: `
			<p>1. W okresie 2 lat od dnia wejścia w życie Konstytucji Rada Ministrów przedstawi Sejmowi projekty ustaw niezbędnych do stosowania Konstytucji.</p>
			<p class="pt-4">2. Ustawy wprowadzające w życie <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/176'>art. 176</a> ust. 1 w zakresie dotyczącym postępowania przed sądami administracyjnymi zostaną uchwalone przed upływem 5 lat od dnia wejścia w życie Konstytucji. Do czasu wejścia w życie tych ustaw obowiązują przepisy dotyczące rewizji nadzwyczajnej od orzeczeń Naczelnego Sądu Administracyjnego.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 237",
    slug: "237",
    chapter: {
      id: "XIII",
      title: "Przepisy przejściowe i końcowe",
    },
    html: `
			<p>1. W okresie 4 lat od dnia wejścia w życie Konstytucji w sprawach o wykroczenia orzekają kolegia do spraw wykroczeń przy sądach rejonowych, przy czym o karze aresztu orzeka sąd.</p>
			<p class="pt-4">2. Odwołanie od orzeczenia kolegium rozpoznaje sąd.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 238",
    slug: "238",
    chapter: {
      id: "XIII",
      title: "Przepisy przejściowe i końcowe",
    },
    html: `
			<p>1. Kadencja konstytucyjnych organów władzy publicznej i osób wchodzących w ich skład wybranych lub powołanych przed wejściem w życie Konstytucji kończy się z upływem okresu ustalonego w przepisach obowiązujących przed dniem wejścia w życie Konstytucji.</p>
			<p class="pt-4">2. W przypadku, gdy przepisy obowiązujące przed dniem wejścia w życie Konstytucji nie ustalały tej kadencji, a od dnia wyboru lub powołania upłynął okres dłuższy niż ustalony przez Konstytucję, kadencja konstytucyjna organów władzy publicznej lub osób wchodzących w ich skład upływa po roku od dnia wejścia w życie Konstytucji.</p>
			<p class="pt-4">3. W przypadku, gdy przepisy obowiązujące przed dniem wejścia w życie Konstytucji nie ustalały tej kadencji, a od dnia wyboru lub powołania upłynął okres krótszy niż ustalony przez Konstytucję dla konstytucyjnych organów władzy publicznej lub osób wchodzących w ich skład, czas w którym organy te lub osoby pełniły funkcje według przepisów dotychczasowych, wlicza się do kadencji ustalonej w Konstytucji.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 239",
    slug: "239",
    chapter: {
      id: "XIII",
      title: "Przepisy przejściowe i końcowe",
    },
    html: `
			<p>1. W okresie 2 lat od dnia wejścia w życie Konstytucji orzeczenia Trybunału Konstytucyjnego o niezgodności z Konstytucją ustaw uchwalonych przed dniem jej wejścia w życie nie są ostateczne i podlegają rozpatrzeniu przez Sejm, który może odrzucić orzeczenie Trybunału Konstytucyjnego większością 2/3 głosów, w obecności co najmniej połowy ustawowej liczby posłów. Nie dotyczy to orzeczeń wydanych w następstwie pytań prawnych do Trybunału Konstytucyjnego.</p>
			<p class="pt-4">2. Postępowanie w sprawach o ustalenie przez Trybunał Konstytucyjny powszechnie obowiązującej wykładni ustaw wszczęte przed wejściem w życie Konstytucji podlega umorzeniu.</p>
			<p class="pt-4">3. Z dniem wejścia w życie Konstytucji uchwały Trybunału Konstytucyjnego w sprawie ustalenia wykładni ustaw tracą moc powszechnie obowiązującą. W mocy pozostają prawomocne wyroki sądu oraz inne prawomocne decyzje organów władzy publicznej podjęte z uwzględnieniem znaczenia przepisów ustalonego przez Trybunał Konstytucyjny w drodze powszechnie obowiązującej wykładni ustaw.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 240",
    slug: "240",
    chapter: {
      id: "XIII",
      title: "Przepisy przejściowe i końcowe",
    },
    html: `
			<p>W okresie roku od dnia wejścia w życie Konstytucji ustawa budżetowa może przewidywać pokrywanie deficytu budżetowego przez zaciąganie zobowiązań w centralnym banku państwa.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 241",
    slug: "241",
    chapter: {
      id: "XIII",
      title: "Przepisy przejściowe i końcowe",
    },
    html: `
			<p>1. Umowy międzynarodowe ratyfikowane dotychczas przez Rzeczpospolitą Polską na podstawie obowiązujących w czasie ich ratyfikacji przepisów konstytucyjnych i ogłoszone w Dzienniku Ustaw, uznaje się za umowy ratyfikowane za uprzednią zgodą wyrażoną w ustawie i stosuje się do nich przepisy <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/91'>art. 91</a> Konstytucji, jeżeli z treści umowy międzynarodowej wynika, że dotyczą one kategorii spraw wymienionych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/89'>art. 89</a> ust. 1 Konstytucji.</p>
			<p class="pt-4">2. Rada Ministrów w ciągu 2 lat od wejścia w życie Konstytucji przedstawi Sejmowi wykaz umów międzynarodowych zawierających postanowienia niezgodne z Konstytucją.</p>
			<p class="pt-4">3. Senatorowie wybrani przed dniem wejścia w życie Konstytucji, którzy nie ukończyli 30 lat zachowują swoje mandaty do końca kadencji na którą zostali wybrani.</p>
			<p class="pt-4">4. Połączenie mandatu posła lub senatora z funkcją lub zatrudnieniem, których dotyczy zakaz określony w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/103'>art. 103</a>, powoduje wygaśnięcie mandatu po upływie miesiąca od dnia wejścia w życie Konstytucji, chyba że poseł albo senator wcześniej zrzeknie się funkcji albo ustanie zatrudnienie.</p>
			<p class="pt-4">5. Sprawy będące przedmiotem postępowania ustawodawczego albo przed Trybunałem Konstytucyjnym bądź Trybunałem Stanu, a rozpoczęte przed wejściem w życie Konstytucji, są prowadzone zgodnie z przepisami konstytucyjnymi obowiązującymi w dniu rozpoczęcia sprawy.</p>
			<p class="pt-4">6. W okresie 2 lat od dnia wejścia w życie Konstytucji Rada Ministrów ustali, które z uchwał Rady Ministrów oraz zarządzeń ministrów lub innych organów administracji rządowej podjęte lub wydane przed dniem wejścia w życie Konstytucji wymagają - stosownie do warunków określonych w <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/87'>art. 87</a> ust. 1 i <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/92'>art. 92</a> Konstytucji - zastąpienia ich przez rozporządzenia wydane na podstawie upoważnienia ustawy, której projekt w odpowiednim czasie Rada Ministrów przedstawi Sejmowi. W tym samym okresie Rada Ministrów przedstawi Sejmowi projekt ustawy określającej, które akty normatywne organów administracji rządowej wydane przed dniem wejścia w życie Konstytucji stają się uchwałami albo zarządzeniami w rozumieniu <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/93'>art. 93</a> Konstytucji.</p>
			<p class="pt-4">7. Obowiązujące w dniu wejścia w życie Konstytucji akty prawa miejscowego oraz przepisy gminne stają się aktami prawa miejscowego w rozumieniu <a class="underline hover:text-red-new focus:text-red-new" rel="prefetch" href='/87'>art. 87</a> ust. 2 Konstytucji.</p>
		`,
    desc: "",
  },
  {
    title: "Art. 242",
    slug: "242",
    chapter: {
      id: "XIII",
      title: "Przepisy przejściowe i końcowe",
    },
    html: `
			<p>Tracą moc:</p>
			<ul class="pl-4">
				<li>1) ustawa konstytucyjna z dnia 17 października 1992 r. o wzajemnych stosunkach między władzą ustawodawczą i wykonawczą Rzeczypospolitej Polskiej oraz o samorządzie terytorialnym (Dz.U. Nr 84, poz. 426, z 1995 r. Nr 38, poz. 184, Nr 150, poz. 729 oraz z 1996 r. Nr 106, poz. 488),</li>
				<li>2) ustawa konstytucyjna z dnia 23 kwietnia 1992 r. o trybie przygotowania i uchwalenia Konstytucji Rzeczypospolitej Polskiej (Dz.U. Nr 67, poz. 336 oraz z 1994 r. Nr 61, poz. 251).</li>
			</ul>
		`,
    desc: "",
  },
  {
    title: "Art. 243",
    slug: "243",
    chapter: {
      id: "XIII",
      title: "Przepisy przejściowe i końcowe",
    },
    html: `
			<p>Konstytucja Rzeczypospolitej Polskiej wchodzi w życie po upływie 3 miesięcy od dnia jej ogłoszenia.</p>
		`,
    desc: "",
  },
];

articles.forEach(article => {
  article.html = article.html.replace(/^\t{3}/gm, "");
});

export default articles;
