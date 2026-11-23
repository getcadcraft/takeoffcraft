---
title: Co nowego w 0.9 (wcześniej)
summary: Długości w metrach, centymetrach lub milimetrach, pola w m2 z powierzchnią ścian, gotowe skale 1:75 i 1:150, jednostki masy i temperatury, łuk na dziesięć sposobów oraz kursory na żywo, Podążaj i lista uczestników.
keywords: co nowego 0.9, wcześniejsze wydanie, co nowego, notatki o wydaniu, dziennik zmian, 0.9, pokaż długości jako, metry, centymetry, milimetry, metryczne, zgodnie z ustawieniami ogólnymi, jednostki, jednostki wyświetlania, m2, metry kwadratowe, powierzchnia ścian, gotowe skale, 1:75, 1:150, masa, kilogramy, kg, tona, ton, lb, temperatura, celsjusz, fahrenheit, łuk, metody łuku, łuk 3-punktowy, promień, na żywo, kursory, podążaj, lista uczestników, klasa, podpowiedzi, układ, co nowego, notatki o wydaniu, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, policz wszystko, legenda, legenda symboli, cały zestaw, pamięć cen, poprzednie zlecenia, ostatnie zlecenie, typowa cena, dostawca, zapas, czas dostawy, zaległe zamówienie, lista zamówienia, brak, panel problemów, asystent, języki, urządzenia wejściowe, wiersze paska narzędzi, dwg
from: f4322ba2
---

To jest to, co zmieniło się w TakeoffCraft 0.9 w porównaniu z 0.8.1. To niewielkie wydanie dla tej aplikacji: długości można teraz odczytywać w metrach, centymetrach lub milimetrach, pola i skale działają poprawnie przy pracy metrycznej, a łuk ma dziesięć sposobów rysowania. Sesje Live pokazują też, kto gdzie jest.

## Nowości

### Odczyt długości w metrach, centymetrach lub milimetrach

- **Pokaż długości jako.** {{ui:Ustawienia}} › {{ui:TakeoffCraft}} ma pole {{ui:Pokaż długości jako}} z opcjami {{ui:Zgodnie z ustawieniami ogólnymi}}, {{ui:Stopy i cale}}, m, cm i mm. {{ui:Zgodnie z ustawieniami ogólnymi}} używa metrycznej jednostki długości oznaczonej gwiazdką w {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Jednostki}}, a gdy żadna nie jest oznaczona, stóp i cali. Zmienia to sposób odczytu długości na arkuszu, w pasku stanu i w panelach, także wysokości, głębokości, grubości i poziomów. Liczba bez jednostki wpisana w polu wysokości jest odczytywana w pokazanej jednostce.
- **Tylko wyświetlanie.** Ilości, koszty i eksporty są liczone z dokładnych długości. Wybór 1/16, 1/8 i 1/4 cala pojawia się tylko dla stóp i cali. Zobacz [Pokaż długości w metrach](topic:show-lengths-in-meters).
- **Jednostki masy.** Pozycja {{ui:Ilość wpisana (bez rysunku)}} może być teraz w lb, TON, kg lub t i być wyceniana za jednostkę.
- **Temperatura.** Każda pozycja ma opcjonalne pole {{ui:Temperatura}} w edytorze pozycji, wpisywane w stopniach C lub F. {{ui:Pokaż temperatury jako}} w {{ui:Ustawienia}} › {{ui:TakeoffCraft}} oferuje {{ui:Zgodnie z ustawieniami ogólnymi}}, °C lub °F.

### Pola i skale dla pracy metrycznej

- **Pola w m2 na rysunku.** Pole zmierzone pozycją metryczną podaje teraz m2 na etykiecie rysunku i w panelu znaczników, a także w tabeli, zamiast SF. Zasada: m2, gdy pozycja jest wyceniana metrycznie lub długości są pokazywane w m, cm lub mm, a w przeciwnym razie SF.
- **Powierzchnia ściany.** Pozycja liniowa z wysokością pokazuje też powierzchnię ściany (długość razy wysokość) na liście pozycji i jako wiersz uwagi pod tabelą ilości według pozycji.
- **Gotowe skale 1:75 i 1:150.** Są na liście {{ui:Gotowa skala}} w grupie {{ui:Skala}}, która ma teraz 32 skale. Zobacz [Gotowe skale](topic:scale-presets).

### Łuk na dziesięć sposobów

- Gdy {{ui:Arc}} jest włączony (przycisk na pasku narzędzi lub {{key:R}}), w pasku arkusza pojawia się pole {{ui:Metoda łuku}}: 3 punkty, Początek, Środek, Koniec, Początek, Środek, Kąt, Początek, Środek, Długość, Początek, Koniec, Kąt, Początek, Koniec, Kierunek, Początek, Koniec, Promień, Środek, Początek, Koniec, Środek, Początek, Kąt oraz Środek, Początek, Długość. Kąt, długość, promień i kierunek można wskazać kliknięciem lub wpisać. Działa w seriach liniowych, obszarach i wycięciach. Pliki zapisane przed 0.9 otwierają się tak samo. Zobacz [Rysowanie łuków na dziesięć sposobów](topic:draw-arcs-ten-methods).

### Praca razem

- **Kursory pozostałych osób.** W sesji Live wskaźnik każdej osoby jest widoczny na arkuszu z jej imieniem i kolorem, a wokół zaznaczonych przez nią znaczników widać przerywaną ramkę. Osoby na innym arkuszu są wymienione z nazwą tego arkusza. Zobacz [Praca na żywo z innymi](topic:work-live).
- **Podążanie za osobą i lista uczestników.** Przycisk {{ui:Uczestnicy}} w sesji Live wypisuje każdą osobę z narzędziem, którego używa, arkuszem, na którym jest, i czasem ostatniej edycji. {{ui:Podążaj}} przesuwa Twój widok razem z jej widokiem, a gospodarz może użyć {{ui:Poproś wszystkich, aby podążali za mną}}. Zobacz [Podążanie za członkiem zespołu w sesji Live](topic:follow-a-teammate).

## We wszystkich aplikacjach

- **Podpowiedzi i wskazówka startowa.** Tekst po najechaniu kursorem to podpowiedź Bootstrap, a wskazówkę startową można zamknąć.
- **Przewijane karty.** Pasek kart panelu, który się nie mieści, przewija się zamiast być ucinany.
- **Tytuły kart.** Karta przeglądarki pokazuje `<document> - TakeoffCraft | CadCraft`.
- **Układ.** Lista układów w {{ui:Ustawienia}} jest rozwijana i pokazuje wybrany układ.
- **Język.** Wybrany język dociera teraz także do słów drukowanych przez samą stronę, np. Nowy, Otwórz i Zapisz. Języki inne niż angielski to wersje robocze tłumaczone maszynowo, dopóki nie przeczyta ich rodzimy użytkownik języka.

## Zastrzeżenia

- Wyświetlanie długości, jednostki masy i temperatury oraz nowe gotowe skale sprawdzono testami i na stronie. Nie każdy panel przy każdej jednostce został sprawdzony ręcznie.
- Lista uczestników nie została sprawdzona ręcznie z prawdziwą grupą nauczyciela i uczniów.
- Języki inne niż angielski to wersje robocze tłumaczone maszynowo.
- Instalatory Windows nie mają podpisu kodem (Więcej informacji, potem Uruchom mimo to). Obraz dysku dla macOS nie jest notaryzowany (kliknij prawym przyciskiem, potem Otwórz).

## Wcześniej: 0.8 i 0.8.1

To jest to, co zmieniło się w TakeoffCraft 0.8 (wydanym 2026-11-01) i 0.8.1 (2026-11-02) w porównaniu z 0.7. Legendę symboli można teraz policzyć od razu na całym zestawie, nowy przedmiar może zacząć od cen z poprzednich zleceń, a przedmiar można sprawdzić względem zapasów dostawcy. 0.8.1 to wydanie naprawcze.

### Nowości

**Policz wszystko w zestawie**

- **Zaznacz legendę raz.** {{ui:Policz wszystko}} na pasku narzędzi odczytuje legendę symboli: przeciągnij ramkę wokół symboli i nazw wydrukowanych obok. Każdy symbol jest wypisany z obrazkiem i nazwą, a nazwa staje się nazwą pozycji. Odznacz to, czego nie chcesz, a potem wybierz {{ui:Policz na N arkuszach}}. Pasek pokazuje arkusz, który jest przeszukiwany, {{ui:Anuluj}} zatrzymuje przebieg, a strona pozostaje używalna.
- **Wszystkie arkusze w jednym przebiegu.** Każdy symbol jest liczony na każdym otwartym arkuszu. Arkusz narysowany w innej skali jest przeszukiwany w tej skali, a symbole są znajdowane obrócone o dowolny kąt prosty. Symbole samej legendy na jej arkuszu nie są liczone.
- **Przegląd przed dodaniem czegokolwiek.** Każda suma ma link do arkusza ("E-103: 4"), który prowadzi do tego arkusza. Kliknij ramkę przy znalezisku, aby je wykluczyć, i kliknij ponownie, aby je przywrócić. Poziom dopasowania (50% do 100%) tylko filtruje to, co znaleziono; nic nie jest szukane ponownie.
- **Jeden krok cofnięcia.** {{ui:Dodaj N znaczników}} tworzy pozycję liczenia dla każdego symbolu, z jednym znacznikiem przy każdym znalezisku. Nazwa, która jest już Twoją pozycją liczenia, zostaje użyta ponownie. {{key:Ctrl+Z}} cofa wszystkie pozycje i znaczniki. To, co zaakceptujesz, zasila też {{ui:Wyuczone}}.
- **Symbole pod dowolnym kątem.** Zaznacz {{ui:Symbole pod dowolnym kątem}} przed liczeniem, aby znaleźć też symbole obrócone o kąt inny niż prosty. Wyszukiwanie obraca wtedy każdy symbol co 15 stopni, a symbol niebędący okręgiem może zająć do sześć razy więcej czasu.
- **Co to jest.** Zwykłe dopasowywanie symboli na Twoich arkuszach, bez wytrenowanego modelu, i nic nie opuszcza Twojego komputera. Na zmyślonym zestawie 200 arkuszy zajęło to 9,4 sekundy od początku do końca w Chrome na szybkim komputerze stacjonarnym; prawdziwe zestawy rysunków będą wolniejsze. Zobacz [Policz wszystko w zestawie](topic:count-everything).

**Pamięć cen z własnych zleceń**

- **TakeoffCraft zapamiętuje Twoje stawki.** Przy zapisie przedmiaru każda wyceniona pozycja, która została użyta, jest zapamiętywana wg nazwy i typu: stawka materiału, stawka robocizny, naddatek i jednostka. Dla każdej nazwy zachowywanych jest ostatnich 12 zleceń. Jest przechowywana na tym komputerze obok biblioteki cen, nigdy wewnątrz pliku przedmiaru, i nigdzie nie jest wysyłana.
- **Zacznij nowy przedmiar od niej.** {{ui:Ceny}} na pasku narzędzi pokazuje dla każdej pozycji stawki z ostatniego zlecenia, typowe stawki i zakres. {{ui:Użyj ostatnich}} lub {{ui:Użyj typowych}} wycenia jedną pozycję, a {{ui:Wyceń N pozycji bez ceny z pamięci}} wypełnia każdą pozycję, która nie ma jeszcze ceny. Każde użycie to jeden krok cofnięcia.
- **Starsza praca.** {{ui:Naucz się z poprzedniego przedmiaru…}} zapamiętuje wycenione pozycje zapisanego przedmiaru (.json).
- **Zobacz, zmień, zapomnij.** {{ui:Wszystko, co zapamiętano}} wypisuje każdą nazwę; przycisk kosza zapomina jedną, a {{ui:Wyczyść wszystkie ceny}} zapomina wszystkie. Wyłącz {{ui:Zapamiętuj moje ceny przy zapisie przedmiaru}}, aby to zatrzymać. Cena za sztukę nigdy nie jest przypisywana pozycji wycenianej za stopę. Zobacz [Pamięć cen z poprzednich zleceń](topic:price-memory).

**Zapasy i czasy dostaw**

- **Sprawdź względem listy dostawcy.** {{ui:Dostawa}} na pasku narzędzi przyjmuje listę zapasów dostawcy ({{ui:Dodaj plik dostawcy…}}), CSV lub arkusz, i sprawdza, czego potrzebuje przedmiar, z naddatkiem, względem niej. Zachowywane są do pięciu plików. Nic nie jest wysyłane i nic nie pyta dostawcy: plik dostarczasz Ty.
- **Co mówi wynik.** Krótkie pozycje są na początku: "Brakuje 120 EA", "Czas dostawy 21 dni", "Zaległe zamówienie", "Jednostka się różni", "Brak stanu magazynowego" lub "Na stanie". {{ui:Najdłuższe oczekiwanie (dni)}} zaczyna się od 14.
- **Lista zamówienia.** {{ui:Lista zamówienia (CSV)}} pobiera krótkie pozycje z ilością brakującą, dostawcą i czasem dostawy.
- **Ceny do biblioteki.** Jeśli plik ma ceny, {{ui:Ceny do biblioteki}} ustawia cenę materiału dla każdego wpisu biblioteki o tej samej nazwie i jednostce. Przeceń z biblioteki, aby przenieść je do przedmiaru.
- **W panelu problemów.** Brak zapasu to ostrzeżenie, a długie oczekiwanie to uwaga, w sekcji „Zapasy dostawcy”. Możesz zaakceptować jedno z podaniem powodu; powód jest zapisywany w przedmiarze. Zobacz [Sprawdzanie zapasów dostawcy i czasów dostaw](topic:supplier-stock).

**Asystenci AI**

- **Narzędzia dla wszystkich trzech.** Gdy asystenci są dozwoleni w {{ui:Ustawienia}}, asystent może odczytać legendę (`legend_open`), uruchomić liczenie (`legend_count_start`, potem `legend_count_status` i `legend_count_result`) i je dodać (`legend_count_add`, który może najpierw pokazać podgląd). Może odczytać zapamiętane ceny (`prices_list`) i wycenić pozycje na ich podstawie (`prices_apply`, który może najpierw pokazać podgląd) oraz odczytać sprawdzenie dostawcy (`supply_check`). Dodanie pliku dostawcy zostaje po Twojej stronie. Zobacz [Używanie TakeoffCraft z asystentami AI](topic:use-with-ai-assistants).

**We wszystkich aplikacjach**

- **Języki.** Łącznie pięćdziesiąt cztery; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki). Języki inne niż angielski to wersje robocze tłumaczone maszynowo, dopóki nie przeczyta ich rodzimy użytkownik języka.
- **Urządzenia wejściowe.** {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Urządzenia wejściowe}} ustawia, co robi gładzik, boczne przyciski myszy, rysik, mysz 3D, kontroler do gier lub kontroler MIDI, dla każdej aplikacji albo dla jednej. Zobacz [Używanie gładzika, myszy 3D lub kontrolera](common:input-devices).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} oferuje {{ui:Zawijaj}} (start), {{ui:2 wiersze}} i {{ui:1 wiersz}}; grupy, które się nie mieszczą, przewijają się w bok. Zobacz [Układanie paneli](common:arrange-panels).
- **Panel problemów.** Wspólny panel ostrzeżeń i uwag zawiera teraz powyższe sprawdzenie zapasu dostawcy, obok innych sprawdzeń.
- **Dodatki.** Dodatki podążają za Twoją listą kont. Zobacz [Dodatki i lista kont](common:addons-basics).
- **Połącz swoją AI.** CadCraft Studio to centrum (hub): połącz swojego asystenta raz dla wszystkich ośmiu aplikacji. Studio nie ma własnej AI.

### Naprawione w 0.8.1

- **Sekcja klas DWG.** Sekcja klas pliku DWG była odczytywana jako zły typ. Naprawiono to w TakeoffCraft i w czterech innych aplikacjach.
- **Studio może zmienić język w trakcie działania.** Wcześniej Studio i jego spakowane edycje były tylko po angielsku. Nie zostało to przetestowane w wersji desktopowej na każdej platformie; daj nam znać, jeśli język się nie zmienia.

### Jeszcze nie w tej wersji

- **Brak podpisu kodem.** Windows może ostrzegać, a na Macu kliknij prawym przyciskiem i wybierz {{ui:Otwarty}} za pierwszym razem. Wersje do sklepów (Microsoft Store, Google Play, App Store) są wstrzymane, a wersja na iPada i iPhone'a nie została przebudowana dla 0.8.1.
- **Aktualizacje Studio.** Instalator Windows i pakiety Linux sprawdzają raz dziennie i pytają przed instalacją. Wersja przenośna zip tylko informuje, a macOS i APK nie aktualizują się same. Plik .dmg dla macOS 0.8 podąża za wydaniem.
- **Połącz swoją AI.** Połączenie jednym kliknięciem w Studio, hostowany łącznik AI w przeglądarce, własny klucz API w Studio i opublikowany pakiet MCP nie są obiecane w tej wersji.
- **Policz wszystko.** Wymaga symboli narysowanych tak samo jak w legendzie, a symbol z przechodzącą przez niego ścianą lub długą linią może zostać pominięty. Symbole lustrzane nie są znajdowane, a arkusz bez skali narysowany w innym rozmiarze jest przeszukiwany w rozmiarze legendy. Sprawdź znaleziska na pierwszym arkuszu, zanim zaufasz reszcie.
- **Zapasy dostawcy.** Stany magazynowe są tak aktualne, jak plik, który dodasz. Sprawdzenie nigdy nie pyta dostawcy.
- **Języki.** Pasek aplikacji w języku tamilskim wychodzi poza krawędź.

Wszystko inne jest w [Jeszcze nie zbudowano](topic:not-built-yet). Wydanie poprzednie opisuje [Co nowego w 0.7](topic:whats-new-0-7).
