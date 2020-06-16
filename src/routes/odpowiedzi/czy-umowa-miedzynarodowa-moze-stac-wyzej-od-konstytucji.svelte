<script>
  import { fly, fade } from "svelte/transition";
  import Nav from "../../components/Nav.svelte";
</script>

<svelte:head>
  <title>Odpowiedzi</title>
  <meta
    name="description"
    content="Informacje o czytniku Konstytucji Rzeczypospolitej Polskiej z dnia
    2 kwietnia 1997 r." />
  <meta
    name="keywords"
    content="konstytucja, informacje, info, konstytucjarp, konstytucjaonline,
    online, prawo, konstytucja art, trybunał konstytucyjny, sądownictwo,
    trybunał, prezydent, rada ministrów, sejm, senat" />
  <meta name="konstytucja" content="website" />
</svelte:head>

<Nav segment={'info'} />
<div class="flex justify-between h-8">
  <a
    id="back-btn"
    class="w-24 font-thin sm:text-lg sm:text-xl hover:text-red-new"
    rel="prefetch"
    href="/">
    powrót
  </a>
  <h3 class="font-thin text-center sm:text-lg sm:text-xl">6 maja 2020r.</h3>
  <div class="flex justify-end w-24">

    <a
      class="flex flex-col justify-center"
      rel="prefetch"
      href="/"
      transition:fade={{ duration: 1000 }}>
      <svg
        class="w-5 h-5 h-6 mr-1 text-gray-900 fill-current sm:w-6"
        viewBox="0 0 20 20">
        <path
          d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
          c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
          z" />
      </svg>
    </a>
    <a
      id="right-chevron"
      class="flex flex-col justify-center"
      rel="prefetch"
      href="/"
      transition:fade={{ duration: 1000 }}>
      <svg
        class="w-5 h-5 h-6 ml-1 text-gray-900 fill-current sm:w-6"
        viewBox="0 0 20 20">
        <path
          d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
          c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z" />
      </svg>
    </a>
  </div>
</div>
<!-- <h1
  class="text-lg font-thin sm:text-xl lg:text-2xl"
  in:fly={{ x: -50, duration: 1000 }}>
  Odpowiedzi
</h1> -->
<div class="pt-8 sm:pt-10 md:pt-12 lg:pt-16">
  <h2 class="mt-4 text-2xl text-center font-thin">adw. Michał Chodorek</h2>
  <h2 class="text-lg text-center font-thin">
    Odpowiedź skonsultowana z konstytucjonalistą, prof. Ryszardem Piotrowskim
  </h2>
  <h1 class="text-xl font-thin text-center sm:text-4xl">
    Czy ratyfikowana umowa międzynarodowa
    <br />
    może stać wyżej od Konstytucji?
  </h1>
</div>

<div
  in:fade={{ duration: 1000 }}
  class="max-w-3xl mx-auto leading-relaxed text-justify sm:text-xl">
  <div in:fade={{ duration: 3000 }}>
    <div class="pt-6">
      <blockquote
        class="rounded px-4 py-1 text-xl italic border-l-4 bg-gray-100
        text-gray-600 border-gray-500">
        <p class="mb-4">
          Czy ratyfikowana umowa międzynarodowa może stać wyżej od Konstytucji,
          co znaczy czy wyroki TSUE są ostateczne czy też podlegają ocenie przez
          Trybunał Konstytucyjny przy kolizji przepisów?
        </p>

        <cite class="flex items-center">
          <div class="flex flex-col items-start">
            <span class="mb-1 text-sm italic font-bold">
              Pan Andrzej Filipowicz
            </span>
            <a href="/91" rel="prefetch" class="text-sm">
              Dyskusja dot. art. 91
            </a>
          </div>
        </cite>
      </blockquote>
    </div>

    <!-- <h2 class="mt-8 text-2xl font-thin">Krótka odpowiedź</h2>
    <div>
      Panie Andrzeju, zgodnie z Konstytucją hierarchia aktów prawnych wygląda
      następująco: Konstytucja, umowy międzynarodowe ratyfikowane za zgodą
      wyrażoną w ustawie, ustawy, pozostałe umowy międzynarodowe, akty
      wykonawcze do ustaw. Umowa międzynarodowa, nawet ratyfikowana za zgodą
      wyrażoną w ustawie, nie może więc stać wyżej od Konstytucji. Ale sprawa
      stosunku prawa UE do Konstytucji i umocowania TSUE do orzekania w sprawach
      ustawodawstwa państw członkowskich nie jest taka prosta. Kwestią tą
      zajmował się już Trybunał Konstytucyjny – badając zgodność z Konstytucją
      traktatu akcesyjnego i Traktatu z Lizbony. TK orzekł, że prawo unijne
      (traktatu akcesyjny i Traktat z Lizbony) są zgodne z Konstytucją – a więc
      również, że zgodne z Konstytucją jest, że TSUE może ostatecznie orzekać w
      sprawach wskazanych w traktatach unijnych. W związku z tym, orzeczenia
      TSUE wydawane na podstawie traktatów unijnych są ostateczne i wiążące dla
      Polski. TK nie ma kompetencji, żeby rozpoznawać jakiekolwiek „odwołania”
      od orzeczeń TSUE. Dodatkowo, ponieważ TK orzekł już, że prawo unijne
      (traktatu akcesyjny i Traktat z Lizbony) są zgodne z Konstytucją, to
      obecnie nie może orzekać ponownie w tej samej sprawie – a do tego
      sprowadzałaby się skarga do TK, w której żądano by oceny przez TK
      zgodności z Konstytucją przepisów Traktatu o Funkcjonowaniu Unii
      Europejskiej pozwalających TSUE na wyrokowanie.
    </div> -->

    <h2 class="mt-8 text-2xl font-thin">Sprawa nie jest taka prosta</h2>
    <div>
      Zgodnie z Konstytucją hierarchia aktów prawnych wygląda następująco:
      Konstytucja, umowy międzynarodowe ratyfikowane za zgodą wyrażoną w
      ustawie, ustawy, pozostałe umowy międzynarodowe, akty wykonawcze do ustaw.
      Umowa międzynarodowa, nawet ratyfikowana za zgodą wyrażoną w ustawie, nie
      może więc stać wyżej od Konstytucji w hierarchii źródeł prawa.
    </div>
    <div class="pt-2">
      Ale sprawa stosunku prawa Unii Europejskiej do Konstytucji nie jest taka
      prosta. Kwestią tą zajmował się już Trybunał Konstytucyjny w orzeczeniach
      z dnia 11 maja 2005, sygn. akt K 18/04, oraz z dnia 25 listopada 2010,
      sygn. akt. K 32/09 – badających zgodność z Konstytucją traktatu
      akcesyjnego i Traktatu z Lizbony. Po pierwsze,
      <strong>
        TK wskazał, że prawo unijne nie stoi ponad Konstytucją, ale
        rozstrzygnięcie ewentualnego konfliktu między nimi wymaga pozytywnych
        działań – zmiany Konstytucji albo doprowadzenia do zmiany prawa UE (lub
        w ostateczności wystąpienia z UE).
      </strong>
    </div>

    <h2 class="mt-8 text-2xl font-thin">Kiedy TSUE może orzekać</h2>
    <div>
      Z dokładnie taką sytuacją mieliśmy do czynienia w przypadku europejskiego
      nakazu aresztowania (ENA). 27 kwietnia 2005 roku Trybunał Konstytucyjny
      orzekł, że przepisy kodeksu postępowania karnego, implementujące unijne
      regulacje dot. ENA, są niezgodne z art. 55 ust. 1 Konstytucji. W
      następstwie tego wyroku TK uchwalono zmianę art. 55 Konstytucji, który
      obecnie pozwala na ekstradycję w sytuacjach określonych w art. 55 ust. 2 i
      3 Konstytucji. Ale co równie istotne, TK orzekł, że prawo unijne (traktatu
      akcesyjny i Traktat z Lizbony) są zgodne z Konstytucją.
    </div>
    <div class="pt-2">
      W związku z powyższym, na podstawie prawa unijnego TSUE może orzekać we
      wszystkich sprawach, w których uprawnienia przyznaje mu prawo unijne. W
      szczególności, na podstawie art. 267 Traktatu o Funkcjonowaniu Unii
      Europejskiej, TSUE może orzekać (w tzw. trybie prejudycjalnym, czyli na
      pytanie sądu krajowego, który rozpoznaje sprawę, dla rozstrzygnięcia
      której niezbędne jest uzyskanie odpowiedzi na takie pytanie): a) o
      wykładni Traktatów; b) o ważności i wykładni aktów przyjętych przez
      instytucje, organy lub jednostki organizacyjne Unii; Jeżeli TSUE orzeknie,
      że przepisy prawa UE należy interpretować w taki sposób, że nie pozwalają
      one na stosowanie określonego rozwiązania prawnego w prawie krajowym
      państwa członkowskiego UE, to te przepisy prawa krajowego nie mogą być
      stosowane – przez żadne organy tego państwa (sądy, organy administracji,
      itd.).
    </div>
    <h2 class="mt-8 text-2xl font-thin">Naruszenie traktatów</h2>
    <div>
      Po drugie, TSUE może orzekać o naruszeniu przez państwo członkowskie UE
      zobowiązań, jakie na nim ciążą na mocy traktatów unijnych (na wniosek
      Komisji Europejskiej albo innego państwa członkowskiego UE). Jeśli TSUE
      orzeknie, że państwo członkowskie UE uchybiło swoim zobowiązaniom
      traktatowym, państwo to jest zobowiązane podjąć środki, które zapewnią
      wykonanie wyroku TSUE. Jeżeli TSUE stwierdza, że państwo członkowskie nie
      zastosowało się do jego wyroku, może na nie nałożyć karę pieniężną.
      Wszystkie powyższe wyroki TSUE są ostateczne. Polski TK nie może badać ich
      zgodności z prawem. TK nie może weryfikować orzeczeń innych sądów i
      trybunałów. W zakresie jego kompetencji leży tylko orzekanie w sprawach:
      <ul class="pl-3 pb-4 pt-1 text-left">
        <li>1) zgodności ustaw i umów międzynarodowych z Konstytucją,</li>
        <li>
          2) zgodności ustaw z ratyfikowanymi umowami międzynarodowymi, których
          ratyfikacja wymagała uprzedniej zgody wyrażonej w ustawie,
        </li>
        <li>
          3) zgodności przepisów prawa, wydawanych przez centralne organy
          państwowe, z Konstytucją, ratyfikowanymi umowami międzynarodowymi i
          ustawami,
        </li>
        <li>
          4) zgodności z Konstytucją celów lub działalności partii politycznych,
        </li>
        <li>
          5) skargi konstytucyjnej (o której mowa w art. 79 ust. 1 Konstytucji).
        </li>
      </ul>
    </div>
  </div>

</div>
