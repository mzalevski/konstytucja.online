<script>
  import { stores } from "@sapper/app";
  import { fly } from "svelte/transition";
  import Nav from "../../../components/Nav.svelte";
  import Footer from "../../../components/Footer.svelte";
</script>

<style>
  p {
    text-align: justify;
  }
  a:focus,
  a:hover {
    color: rgb(160, 40, 40);
  }
  .rep-list {
    padding-left: 0;
    list-style-type: none;
    margin-top: 1rem;
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
  }
  .days {
    display: flex;
    padding-left: 0;
  }
  .days li {
    list-style-type: none;
    padding: 1rem;
    margin-right: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    height: 3rem;
  }
  .days a {
    text-decoration: none;
  }
  h3 {
    padding-top: 16px;
  }
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    .rep-list {
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
    }
    .days li {
      padding: 0.5rem;
      margin-right: 0;
      justify-content: space-between;
    }
  }
</style>

<svelte:head>
  <title>Biuletyn nr 14</title>
</svelte:head>

<Nav segment={'info'} />

<div in:fly={{ y: 100, duration: 1000 }}>

  <h3>Posiedzenia Komisji Konstytucyjnej ZN (21, 22 i 23.02.1995 r.)</h3>
  <!-- <h5>
    <a
      href="https://drive.google.com/file/d/1awtjblaTcKfacOyLZwlw_y9ki_226um_/view?usp=sharing"
      rel="nofollow"
      target="_blank">
      ORYGINAŁ BIULETYNU
    </a>
  </h5> -->
  <p>
    W dniach 21, 22 i 23 lutego 1995 r. Komisja Kon- stytucyjna Zgromadzenia
    Narodowego, obradująca pod przewodnictwem posła Aleksandra Kwaśniew- skiego
    (SLD), rozpatrywała: projekt jednolity Konstytucji Rzeczypospolitej Polskiej
    (w ujęciu wariantowym), przyjęcie harmonogramu posiedzeń Komisji
    Konstytucyjnej w M kwartale 1995 r., sprawy różne.
  </p>

  <ul class="days">
    <a rel="prefetch" href="komisja/14/1">
      <li>Dzień 1 (21 lutego)</li>
    </a>
    <a rel="prefetch" href="komisja/14/2">
      <li>Dzień 2 (22 lutego)</li>
    </a>
    <a rel="prefetch" href="komisja/14/3">
      <li>Dzień 3 (23 lutego)</li>
    </a>
    <a rel="prefetch" href="komisja/14/p1">
      <li>Podkomisja - cz. I (22 lutego)</li>
    </a>
    <a rel="prefetch" href="komisja/14/p2">
      <li>Podkomisja - cz. II (22 lutego)</li>
    </a>
    <a rel="prefetch" href="komisja/14/prasa">
      <li>Prasa</li>
    </a>
  </ul>

  <div>
    <h3>Skład komisji konstytucyjnej zgromadzenia narodowego</h3>

    <h5>(po zmianach z dnia 25 marca, 26 sierpnia i 16 września 1994 r.)</h5>

    <ul class="rep-list">
      <li>1. Poseł Aleksander Kwaśniewski (SLD) — przewodniczący</li>
      <li>2. Senator Stefan Pastuszka (PSL) — zastępca przewodniczącego</li>
      <li>3. Senator Piotr Andrzejewski (NSZZ „S”)</li>
      <li>4. Poseł Aleksander Bentkowski (PSL)</li>
      <li>5. Poseł Lidia Błądek (PSL)</li>
      <li>6. Poseł Jan Borkowski (PSL)</li>
      <li>7. Poseł Wojciech Borowik (UP)</li>
      <li>8. Poseł Ryszard Bugaj (UP)</li>
      <li>9. Poseł Piotr Chojnacki (PSL)</li>
      <li>10. Poseł Jerzy Ciemniewski (UW)</li>
      <li>11. Poseł Włodzimierz Cimoszewicz (SLD)</li>
      <li>12. Senator Adam Daraż (PSL)</li>
      <li>13. Poseł Henryk Dyrda (PKR)</li>
      <li>14. Poseł Ryszard Grodzicki (SLD)</li>
      <li>15. Senator Alicja Grześkowiak (NSZZ „S”)</li>
      <li>16. Poseł Jerzy Gwiżdż (BBWR)</li>
      <li>17. Poseł Piotr Ikonowicz (PPS)</li>
      <li>18. Poseł Tadeusz Iwiński (SLD)</li>
      <li>19. Senator Paweł Jankiewicz (SLD)</li>
      <li>20. Poseł Jerzy Jaskiernia (SLD)</li>
      <li>21. Poseł Seweryn Jurgielaniec (SLD)</li>
      <li>22. Poseł Krzysztof Kamiński (KPN)</li>
      <li>23. Senator Krzysztof Kozłowski (KD)</li>
      <li>24. Poseł Henryk Kroll (MN)</li>
      <li>25. Poseł Marian Król (PSL)</li>
      <li>26. Poseł Maria Kurnatowska (PSL)</li>
      <li>27. Poseł Irena Lipowicz (UW)</li>
      <li>28. Poseł Aleksander Łuczak (PSL)</li>
      <li>29. Poseł Krystyna Łybacka (SLD)</li>
      <li>30. Senator Jerzy Madej (KD)</li>
      <li>31. Poseł Wit Majewski (SLD)</li>
      <li>32. Poseł Tadeusz Mazowiecki (UW)</li>
      <li>33. Poseł Marek Mazurkiewicz (SLD)</li>
      <li>34. Poseł Leszek Moczulski (KPN)</li>
      <li>35. Senator Jan Mulak (SLD)</li>
      <li>36. Senator Jan Orzechowski (PSL)</li>
      <li>37. Poseł Longin Pastusiak (SLD)</li>
      <li>38. Poseł Andrzej Pomirski (PSL)</li>
      <li>39. Poseł Stanisław Rogowski (UP)</li>
      <li>40. Poseł Marek Rojszyk (SLD)</li>
      <li>41. Poseł Jan Rokita (UW)</li>
      <li>42. Senator Henryk Rot (SLD)</li>
      <li>43. Poseł Władysław Serafin (PSL)</li>
      <li>44. Poseł Zbigniew Siemiątkowski (SLD)</li>
      <li>45. Poseł Hanna Suchocka (UW)</li>
      <li>46. Poseł Sławomiw Szatkowski (PSL)</li>
      <li>47. Poseł Jan Szczepaniak (PSL)</li>
      <li>48. Poseł Adam Szczęsny (PSL)</li>
      <li>49. Poseł Jerzy Szteliga (SLD)</li>
      <li>50. Poseł Janusz Szymański (UP)</li>
      <li>51. Poseł Czesław Sleziak (SLD)</li>
      <li>52. Poseł Jacek Taylor (UW)</li>
      <li>53. Poseł Danuta Waniek (SLD)</li>
      <li>54. Poseł Jerzy Wiatr (SLD)</li>
      <li>55. Poseł Janusz Wojciechowski (PSL)</li>
      <li>56. Poseł Jerzy Zdrada (UW)</li>
    </ul>
    <p>
      W posiedzeniu udział wzięli przedstawiciele:
      <br />
      Prezydenta RP — prof. Michał Pietrzak i prof. Andrzej Rzepliński,
      <br />
      Rady Ministrów — prof. Stanisław Gebethner i prof. Andrzej Gwiżdż, a
      także
      <br />
      przedstawiciele kościołów i związków zawodowych oraz organizacji
      politycznych i społecznych.
    </p>
  </div>

</div>

<Footer />
