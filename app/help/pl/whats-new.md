---
title: Co nowego w 0.9
summary: Długości w metrach, centymetrach lub milimetrach, pola metryczne w m2 z polem ścian, gotowe skale 1:75 i 1:150, jednostki masy i temperatury, Łuk z dziesięcioma metodami oraz kursory na żywo, Podążanie i lista osób.
keywords: co nowego, informacje o wydaniu, dziennik zmian, 0.9, pokaż długości jako, metry, centymetry, milimetry, metryczne, zgodnie z ustawieniami ogólnymi, jednostki, jednostki wyświetlania, m2, metry kwadratowe, pole ścian, gotowe skale, 1:75, 1:150, masa, kilogramy, kg, tona, ton, lb, temperatura, Celsjusz, Fahrenheit, łuk, metody łuku, łuk 3-punktowy, promień, na żywo, kursory, podążanie, lista osób, klasa, podpowiedzi, układ, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, policz wszystko, legenda, legenda symboli, cały zestaw, zapamiętywanie cen, poprzednie prace, ostatnia praca, typowa cena, dostawca, zapas, czas dostawy, zaległość, lista zamówienia, brak towaru, panel problemów, asystent, języki, urządzenia wejściowe, wiersze paska narzędzi, dwg
from: 6182b998
---

To, co zmieniło się w TakeoffCraft 0.9 w porównaniu z 0.8.1. To małe wydanie dla tej aplikacji: długości można odczytywać w metrach, centymetrach lub milimetrach, pola i skale lepiej działają przy pracy metrycznej, a Łuk ma dziesięć sposobów rysowania. Sesje na żywo pokazują też, kto gdzie jest.

## Nowe

### Odczyt długości w metrach, centymetrach lub milimetrach

- **Pokaż długości jako.** {{ui:Ustawienia}} › {{ui:TakeoffCraft}} ma {{ui:Pokaż długości jako}} z opcjami {{ui:Zgodnie z ustawieniami ogólnymi}}, {{ui:Stopy i cale}}, m, cm i mm. {{ui:Zgodnie z ustawieniami ogólnymi}} używa metrycznej jednostki długości, którą oznaczyłeś gwiazdką w {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Jednostki}}, a stóp i cali, gdy żadna nie jest oznaczona. Zmienia to, jak długości wyglądają na arkuszu, w pasku stanu i w panelach, w tym wysokości, głębokości, grubości i poziomy. Goła liczba wpisana w polu wysokości jest odczytywana w pokazanej jednostce.
- **Tylko wyświetlanie.** Ilości, koszty i eksporty są liczone z dokładnych długości. Wybór 1/16, 1/8 i 1/4 cala pojawia się tylko dla stóp i cali. Zobacz [Pokaż długości w metrach](topic:show-lengths-in-meters).
- **Jednostki masy.** Pozycja {{ui:Ilość wpisana (bez rysunku)}} może być teraz w lb, TON, kg lub t i być wyceniana za jednostkę.
- **Temperatura.** Każda pozycja ma opcjonalne pole {{ui:Temperatura}} w edytorze pozycji, wpisywane w stopniach C lub F. {{ui:Pokaż temperatury jako}} w {{ui:Ustawienia}} › {{ui:TakeoffCraft}} oferuje {{ui:Zgodnie z ustawieniami ogólnymi}}, °C lub °F.

### Pola i skale dla prac metrycznych

- **Pola w m2 na rysunku.** Pole zmierzone pozycją metryczną podaje teraz m2 na etykiecie rysunku i w panelu znaczników, a także w tabeli, zamiast SF. Zasada: m2, gdy pozycja jest wyceniana metrycznie albo długości są pokazywane w m, cm lub mm, a SF w przeciwnym razie.
- **Pole ścian.** Pozycja liniowa z wysokością pokazuje też pole ściany (długość razy wysokość) na liście Pozycje oraz jako wiersz uwagi pod tabelą ilości według pozycji.
- **Gotowe skale 1:75 i 1:150.** Są na liście {{ui:Gotowa skala}} w grupie {{ui:Skala}}, która ma teraz 32 skale. Zobacz [Gotowe skale](topic:scale-presets).

### Łuk z dziesięcioma metodami

- Gdy {{ui:Łuk}} jest włączony (przycisk na pasku narzędzi lub {{key:R}}), na pasku arkusza pojawia się pole {{ui:Metoda łuku}}: 3 punkty, Początek, Środek, Koniec, Początek, Środek, Kąt, Początek, Środek, Długość, Początek, Koniec, Kąt, Początek, Koniec, Kierunek, Początek, Koniec, Promień, Środek, Początek, Koniec, Środek, Początek, Kąt oraz Środek, Początek, Długość. Kąt, długość, promień i kierunek można klikać lub wpisywać. Działa w odcinkach liniowych, polach i wycięciach. Pliki zapisane przed 0.9 otwierają się tak samo. Zobacz [Rysuj łuki dziesięcioma metodami](topic:draw-arcs-ten-methods).

### Praca razem

- **Zobacz kursory innych.** W sesji Live wskaźnik każdej osoby jest widoczny na arkuszu z jej imieniem i kolorem, z przerywaną ramką wokół znaczników, które zaznaczyła. Osoby na innym arkuszu są wypisane z nazwą tego arkusza. Zobacz [Praca na żywo z innymi](topic:work-live).
- **Podążanie za osobą i lista osób.** Przycisk {{ui:Osoby}} w sesji Live wypisuje każdą osobę wraz z narzędziem, którego używa, arkuszem, na którym jest, i czasem ostatniej edycji. {{ui:Podążaj}} przesuwa Twój widok razem z jej widokiem, a gospodarz może użyć {{ui:Poproś wszystkich, aby podążali za mną}}. Zobacz [Podążaj za współpracownikiem w sesji Live](topic:follow-a-teammate).

## We wszystkich aplikacjach

- **Podpowiedzi i wskazówka startowa.** Tekst po najechaniu to podpowiedź Bootstrap, a wskazówkę startową można zamknąć.
- **Przewijane paski kart.** Pasek kart panelu, który się nie mieści, przewija się zamiast być ucięty.
- **Tytuły kart.** Karta przeglądarki pokazuje `<document> - TakeoffCraft | CadCraft`.
- **Układ.** Lista układów w {{ui:Ustawienia}} to rozwijana lista, która pokazuje wybrany układ.
- **Język.** Wybrany język dociera teraz także do słów, które sama strona wyświetla, na przykład Nowy, Otwórz i Zapisz. Języki inne niż angielski są wersjami roboczymi maszynowymi, dopóki nie przeczyta ich rodzimy użytkownik.

## Uczciwe ograniczenia

- Wyświetlanie długości, jednostek masy i temperatury oraz nowe gotowe skale sprawdzono testami i na stronie. Nie każdy panel przy każdej jednostce został sprawdzony ręcznie.
- Lista osób nie była sprawdzana ręcznie z prawdziwą klasą nauczyciela i uczniów.
- Języki inne niż angielski są wersjami roboczymi maszynowymi.
- Instalatory Windows nie są podpisane kodem (Więcej informacji, a potem Uruchom mimo to). Obraz dysku macOS nie jest notaryzowany (kliknij prawym przyciskiem, a potem Otwórz).

## Wcześniej: 0.8 i 0.8.1

To, co zmieniło się w TakeoffCraft 0.8 (wydanym 2026-11-01) i 0.8.1 (2026-11-02), w porównaniu z 0.7. Legendę symboli można teraz policzyć w całym zestawie naraz, nowy przedmiar może zacząć się od cen Twoich poprzednich prac, a przedmiar można sprawdzić względem zapasów dostawcy. 0.8.1 to wydanie z poprawkami.

### Nowe

**Policz wszystko w zestawie**

- **Zaznacz legendę raz.** {{ui:Policz wszystko}} na pasku narzędzi czyta legendę symboli: przeciągnij ramkę wokół symboli i nazw wypisanych obok. Każdy symbol jest wypisany z obrazkiem i nazwą, a nazwa staje się nazwą pozycji. Odznacz to, czego nie chcesz, a potem wybierz {{ui:Policz na N arkuszach}}. Pasek pokazuje przeszukiwany arkusz, {{ui:Anuluj}} zatrzymuje przebieg, a strona pozostaje używalna.
- **Wszystkie arkusze w jednym przebiegu.** Każdy symbol jest liczony na każdym otwartym arkuszu. Arkusz narysowany w innej skali jest przeszukiwany w tej skali, a symbole są znajdowane obrócone o dowolny kąt prosty. Symbole samej legendy nie są liczone na jej arkuszu.
- **Przegląd przed dodaniem czegokolwiek.** Każda suma ma link na arkusz („E-103: 4”), który prowadzi do tego arkusza. Wybierz ramkę przy znalezisku, aby je pominąć, a wybierz ponownie, aby przywrócić. Poziom dopasowania (50% do 100%) tylko filtruje znaleziska; nic nie jest szukane ponownie.
- **Jeden krok cofnięcia.** {{ui:Dodaj N znaczników}} tworzy pozycję liczenia na każdy symbol z jednym znacznikiem na każdym znalezisku. Nazwa, która już jest Twoją pozycją liczenia, zostaje ponownie użyta. {{key:Ctrl+Z}} cofa wszystkie pozycje i znaczniki. To, co zaakceptujesz, trafia też do {{ui:Wyuczone}}.
- **Symbole pod dowolnym kątem.** Zaznacz {{ui:Symbole pod dowolnym kątem}} przed liczeniem, aby znaleźć też symbole obrócone o kąt, który nie jest kątem prostym. Wtedy wyszukiwanie obraca każdy symbol co 15 stopni, a symbol, który nie jest okrągły, może zająć nawet sześciokrotnie więcej czasu.
- **Czym to jest.** Zwykłe dopasowywanie symboli na Twoich własnych arkuszach, bez wytrenowanego modelu, i nic nie opuszcza Twojego komputera. Na zmyślonym zestawie 200 arkuszy zajęło to 9,4 sekundy od początku do końca w Chrome na szybkim komputerze stacjonarnym; prawdziwe zestawy planów będą wolniejsze. Zobacz [Policz wszystko w zestawie](topic:count-everything).

**Pamięć cen z własnych prac**

- **TakeoffCraft pamięta Twoje stawki.** Przy zapisie przedmiaru każda wyceniona używana pozycja jest zapamiętywana po nazwie i typie: stawka materiału, stawka robocizny, naddatek i jednostka. Zachowywane są 12 ostatnich prac dla każdej nazwy. Jest przechowywana na tym komputerze obok Biblioteki cen, nigdy w pliku przedmiaru, i nigdzie nie jest wysyłana.
- **Zacznij nowy przedmiar od niej.** {{ui:Ceny}} na pasku narzędzi pokazuje dla każdej pozycji stawki z ostatniej pracy, typowe stawki i zakres. {{ui:Użyj ostatnich}} albo {{ui:Użyj typowych}} wycenia jedną pozycję, a {{ui:Wyceń N pozycji bez ceny z pamięci}} wypełnia każdą pozycję, która nie ma jeszcze ceny. Każde użycie to jeden krok cofnięcia.
- **Starsze prace.** {{ui:Naucz się z poprzedniego przedmiaru…}} zapamiętuje wycenione pozycje zapisanego przedmiaru (.json).
- **Zobacz, zmień, zapomnij.** {{ui:Wszystko, co zapamiętano}} wypisuje każdą nazwę; przycisk kosza zapomina jedną, a {{ui:Wyczyść wszystkie ceny}} zapomina wszystkie. Wyłącz {{ui:Zapamiętuj moje ceny przy zapisie przedmiaru}}, aby przestać. Cena za sztukę nigdy nie trafia na pozycję za stopę. Zobacz [Pamięć cen z poprzednich prac](topic:price-memory).

**Zapasy dostawcy i czasy dostawy**

- **Sprawdź względem listy dostawcy.** {{ui:Dostawa}} na pasku narzędzi przyjmuje listę zapasów dostawcy ({{ui:Dodaj plik dostawcy…}}), CSV lub arkusz kalkulacyjny, i sprawdza, czego przedmiar potrzebuje, łącznie z naddatkiem. Zachowywanych jest do pięciu plików. Nic nie jest wysyłane i nic nie pyta dostawcy: przynosisz plik.
- **Co mówi wynik.** Krótkie pozycje są pierwsze: „Brakuje 120 EA”, „Czas dostawy 21 dni”, „Na zamówieniu”, „Inna jednostka”, „Brak danych o stanie” albo „Na stanie”. {{ui:Najdłuższe oczekiwanie (dni)}} zaczyna od 14.
- **Lista zamówienia.** {{ui:Lista zamówienia (CSV)}} pobiera krótkie pozycje z brakującą ilością, dostawcą i czasem dostawy.
- **Ceny do biblioteki.** Jeśli plik ma ceny, {{ui:Ceny do biblioteki}} ustawia cenę materiału każdego wpisu Biblioteki o tej samej nazwie i jednostce. Przeceń z Biblioteki, aby wprowadzić je do przedmiaru.
- **W panelu problemów.** Brak towaru to ostrzeżenie, a długie oczekiwanie to uwaga, pod „Zapasy dostawcy”. Możesz zaakceptować jedno z podaniem powodu, a powód zostaje zapisany w przedmiarze. Zobacz [Sprawdź zapasy dostawcy i czasy dostawy](topic:supplier-stock).

**Narzędzia asystenta**

- **Narzędzia dla wszystkich trzech.** Przy dozwolonych asystentach w {{ui:Ustawienia}} asystent może odczytać legendę (`legend_open`), uruchomić liczenie (`legend_count_start`, potem `legend_count_status` i `legend_count_result`) i je dodać (`legend_count_add`, które może najpierw pokazać podgląd). Może odczytać zapamiętane ceny (`prices_list`) i wycenić z nich pozycje (`prices_apply`, które może najpierw pokazać podgląd), a także odczytać sprawdzenie dostawcy (`supply_check`). Dodawanie pliku dostawcy zostaje po Twojej stronie. Zobacz [Używanie TakeoffCraft z asystentem AI](topic:use-with-ai-assistants).

**We wszystkich aplikacjach**

- **Języki.** Pięćdziesiąt cztery języki w sumie; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki). Języki inne niż angielski są wersjami roboczymi maszynowymi, dopóki nie przeczyta ich rodzimy użytkownik.
- **Urządzenia wejściowe.** {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Urządzenia wejściowe}} ustawia, co robi gładzik, boczne przyciski myszy, pióro, mysz 3D, kontroler do gier lub kontroler MIDI, dla wszystkich aplikacji albo dla jednej. Zobacz [Używanie gładzika, myszy 3D lub kontrolera](common:input-devices).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} oferuje {{ui:Zawijaj}} (start), {{ui:2 wiersze}} i {{ui:1 wiersz}}; grupy, które się nie mieszczą, przewijają się w bok. Zobacz [Ułóż panele](common:arrange-panels).
- **Panel problemów.** Wspólny panel ostrzeżeń i uwag zawiera teraz sprawdzenie zapasów dostawcy opisane wyżej, obok pozostałych sprawdzeń.
- **Dodatki.** Dodatki podążają za Twoją listą kont. Zobacz [Dodatki i lista kont](common:addons-basics).
- **Połącz swoją AI.** CadCraft Studio to centrum: połącz asystenta raz dla wszystkich ośmiu aplikacji. Studio nie ma własnej AI.

### Naprawione w 0.8.1

- **Sekcja klas w DWG.** Sekcja klas pliku DWG była odczytywana jako zły typ. Naprawiono to w TakeoffCraft i w czterech innych aplikacjach.
- **Studio zmienia język podczas działania.** Wcześniej Studio i jego spakowane wersje były tylko po angielsku. Nie zostało to przetestowane w wersji desktopowej na każdej platformie; daj znać, jeśli język się nie zmienia.

### Jeszcze nie w tej wersji

- **Brak podpisu kodem.** Windows może ostrzegać, a na Macu za pierwszym razem kliknij prawym przyciskiem i wybierz {{ui:Otwarty}}. Wersje sklepowe (Microsoft Store, Google Play, App Store) są wstrzymane, a wersja na iPad i iPhone nie została przebudowana dla 0.8.1.
- **Aktualizacje Studio.** Instalator Windows i pakiety Linux sprawdzają raz dziennie i pytają najpierw. Przenośne zip tylko informuje, a macOS i APK nie aktualizują się same. Plik .dmg dla macOS 0.8 podąża za wydaniem.
- **Połącz swoją AI.** Połączenie jednym kliknięciem w Studio, hostowany łącznik AI w przeglądarce, własny klucz API w Studio i opublikowany pakiet MCP nie są obiecane w tej wersji.
- **Policz wszystko.** Wymaga symboli narysowanych tak jak w legendzie, a symbol z przecinającą go ścianą albo długą linią może zostać pominięty. Symboli odbitych lustrzanie nie znajduje się, a arkusz bez skali narysowany w innym rozmiarze jest przeszukiwany w rozmiarze legendy. Sprawdź znaleziska na pierwszym arkuszu, zanim zaufasz reszcie.
- **Zapasy dostawcy.** Stany są tak aktualne, jak plik, który dodajesz. Sprawdzenie nigdy nie pyta dostawcy.
- **Języki.** Pasek aplikacji dla tamilskiego się przepełnia.

Wszystko inne znajduje się w [Jeszcze nie zbudowano](topic:not-built-yet). Poprzednie wydanie opisuje [Co nowego w 0.7](topic:whats-new-0-7).
