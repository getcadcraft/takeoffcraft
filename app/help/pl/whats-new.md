---
title: Co nowego w 0.8 i 0.8.1
summary: Policz całą legendę symboli we wszystkich otwartych arkuszach jednym przebiegiem, wyceniaj pozycje według stawek z poprzednich zleceń, sprawdzaj przedmiar względem stanu magazynowego i czasów dostawy dostawcy oraz korzystaj z nowych narzędzi asystenta do tych trzech zadań, a także wspólne zmiany w 0.8 i poprawka 0.8.1 dla plików DWG.
keywords: co nowego, informacje o wydaniu, dziennik zmian, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, policz wszystko, legenda, legenda symboli, cały zestaw, pamięć cen, poprzednie zlecenia, ostatnie zlecenie, typowa cena, dostawca, stan magazynowy, czas dostawy, zamówienie oczekujące, lista zamówienia, niedobór, panel problemów, asystent, języki, urządzenia wejściowe, wiersze paska narzędzi, dwg
from: a04adef6
---

To, co zmieniło się w TakeoffCraft 0.8 (wydanej 2026-11-01) i 0.8.1 (2026-11-02) w porównaniu z wersją 0.7. Legendę symboli można teraz policzyć w całym zestawie naraz, nowy przedmiar może zacząć się od cen z Twoich poprzednich zleceń, a przedmiar można sprawdzić pod kątem stanu magazynowego dostawcy. Wersja 0.8.1 to wydanie poprawkowe.

## Nowe

### Policz wszystko w zestawie

- **Zaznacz legendę raz.** {{ui:Policz wszystko}} na pasku narzędzi odczytuje legendę symboli: przeciągnij ramkę wokół symboli i nazw wypisanych obok nich. Każdy symbol jest wyświetlany z obrazkiem i nazwą, a nazwa staje się nazwą pozycji. Odznacz to, czego nie chcesz, a następnie wybierz {{ui:Policz na N arkuszach}}. Pasek pokazuje arkusz, który jest przeszukiwany, {{ui:Anuluj}} zatrzymuje przebieg, a strona pozostaje dostępna.
- **Wszystkie arkusze w jednym przebiegu.** Każdy symbol jest liczony na każdym otwartym arkuszu. Arkusz narysowany w innej skali jest przeszukiwany w tej skali, a symbole są znajdowane obrócone o dowolny kąt prosty. Sama legenda nie jest liczona na swoim arkuszu.
- **Sprawdź przed dodaniem.** Każda suma ma odnośnik dla każdego arkusza („E-103: 4”), który prowadzi do tego arkusza. Kliknij ramkę przy znalezisku, aby je pominąć, i kliknij ponownie, aby je przywrócić. Poziom dopasowania (od 50% do 100%) tylko filtruje wyniki; nic nie jest szukane ponownie.
- **Jeden krok cofnięcia.** {{ui:Dodaj N znaczników}} tworzy pozycję liczenia dla każdego symbolu z jednym znacznikiem przy każdym znalezisku. Nazwa, która już jest Twoją pozycją liczenia, zostaje użyta ponownie. {{key:Ctrl+Z}} cofa wszystkie pozycje i znaczniki. To, co zaakceptujesz, zasila też {{ui:Wyuczone}}.
- **Symbole pod dowolnym kątem.** Zaznacz {{ui:Symbole pod dowolnym kątem}} przed liczeniem, aby znajdować także symbole obrócone o kąt inny niż kąt prosty. Wyszukiwanie obraca wtedy każdy symbol co 15 stopni, a symbol, który nie jest okrągły, może zająć nawet sześć razy więcej czasu.
- **Co to jest.** Zwykłe dopasowywanie symboli na Twoich własnych arkuszach, bez wytrenowanego modelu; nic nie opuszcza Twojego komputera. Na przykładowym zestawie 200 arkuszy zajęło to 9,4 sekundy od początku do końca w Chrome na szybkim komputerze stacjonarnym; rzeczywiste zestawy planów będą wolniejsze. Zobacz [Policz wszystko w zestawie](topic:count-everything).

### Pamięć cen z Twoich własnych zleceń

- **TakeoffCraft zapamiętuje Twoje stawki.** Przy zapisie przedmiaru każda wyceniona używana pozycja jest zapamiętywana według nazwy i typu: stawka materiału, stawka robocizny, naddatek i jednostka. Dla każdej nazwy zachowywane są ostatnie 12 zleceń. Dane są przechowywane na tym komputerze obok biblioteki cen, nigdy wewnątrz pliku przedmiaru, i nigdzie nie są wysyłane.
- **Zacznij nowy przedmiar od nich.** {{ui:Ceny}} na pasku narzędzi pokazuje dla każdej pozycji stawki z ostatniego zlecenia, typowe stawki i zakres. {{ui:Użyj ostatnich}} lub {{ui:Użyj typowych}} wycenia jedną pozycję, a {{ui:Wyceń N pozycji bez ceny z pamięci}} uzupełnia każdą pozycję, która nie ma jeszcze ceny. Każde użycie to jeden krok cofnięcia.
- **Starsze prace.** {{ui:Naucz się z poprzedniego przedmiaru…}} zapamiętuje wycenione pozycje zapisanego przedmiaru (.json).
- **Zobacz, zmień, zapomnij.** {{ui:Wszystko, co zapamiętano}} wypisuje każdą nazwę; przycisk kosza usuwa jedną z nich, a {{ui:Wyczyść wszystkie ceny}} usuwa wszystkie. Wyłącz {{ui:Zapamiętuj moje ceny przy zapisie przedmiaru}}, aby przestać zapamiętywać. Cena za sztukę nigdy nie jest przypisywana pozycji za stopę. Zobacz [Pamięć cen z Twoich poprzednich zleceń](topic:price-memory).

### Stan magazynowy dostawcy i czasy dostawy

- **Sprawdź względem listy dostawcy.** {{ui:Dostawa}} na pasku narzędzi przyjmuje listę stanu magazynowego dostawcy ({{ui:Dodaj plik dostawcy…}}), plik CSV lub arkusz kalkulacyjny, i sprawdza, czego wymaga przedmiar, łącznie z naddatkiem, względem tej listy. Przechowywanych jest do pięciu plików. Nic nie jest wysyłane i nic nie pyta dostawcy: plik dostarczasz Ty.
- **Co pokazuje wynik.** Krótkie pozycje są na początku listy: „Brakuje 120 EA”, „Czas dostawy 21 dni”, „Na zamówieniu oczekującym”, „Jednostka się różni”, „Brak danych o stanie” lub „Na stanie”. {{ui:Najdłuższe oczekiwanie (dni)}} zaczyna się od 14.
- **Lista zamówienia.** {{ui:Lista zamówienia (CSV)}} pobiera krótkie pozycje z brakującą ilością, dostawcą i czasem dostawy.
- **Ceny do biblioteki.** Jeśli plik zawiera ceny, {{ui:Ceny do biblioteki}} ustawia cenę materiału każdego wpisu biblioteki o tej samej nazwie i jednostce. Przelicz ponownie z biblioteki, aby przenieść je do przedmiaru.
- **W panelu problemów.** Niedobór jest ostrzeżeniem, a długie oczekiwanie jest uwagą, w sekcji „Stan magazynowy dostawcy”. Możesz zaakceptować jeden z nich, podając powód, a powód zostaje zapisany w przedmiarze. Zobacz [Sprawdzanie stanu magazynowego dostawcy i czasów dostawy](topic:supplier-stock).

### Asystenci AI

- **Narzędzia dla wszystkich trzech.** Gdy asystenci są dozwoleni w {{ui:Ustawienia}}, asystent może odczytać legendę (`legend_open`), uruchomić liczenie (`legend_count_start`, a następnie `legend_count_status` i `legend_count_result`) i je dodać (`legend_count_add`, który może najpierw pokazać podgląd). Może odczytać zapamiętane ceny (`prices_list`) i wycenić pozycje na ich podstawie (`prices_apply`, który może najpierw pokazać podgląd) oraz odczytać wynik sprawdzenia dostawcy (`supply_check`). Dodawanie pliku dostawcy pozostaje Twoim zadaniem. Zobacz [Korzystanie z TakeoffCraft z asystentami AI](topic:use-with-ai-assistants).

### We wszystkich aplikacjach

- **Języki.** Łącznie pięćdziesiąt cztery języki; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili i uzbecki). Języki inne niż angielski to wersje robocze tłumaczone maszynowo, dopóki nie przeczyta ich native speaker.
- **Urządzenia wejściowe.** {{ui:Ustawienia}} › {{ui:Globalne}} › {{ui:Urządzenia wejściowe}} określa, co robią gładzik, boczne przyciski myszy, pióro, mysz 3D, kontroler gier lub kontroler MIDI, dla wszystkich aplikacji lub dla jednej. Zobacz [Korzystanie z gładzika, myszy 3D lub kontrolera](common:input-devices).
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} oferuje {{ui:Zawijaj}} (domyślnie), {{ui:2 wiersze}} i {{ui:1 wiersz}}; grupy, które się nie mieszczą, przewijają się w bok. Zobacz [Ustawianie paneli](common:arrange-panels).
- **Panel problemów.** Wspólny panel ostrzeżeń i uwag zawiera teraz sprawdzenie stanu magazynowego dostawcy opisane wyżej, obok pozostałych sprawdzeń.
- **Dodatki.** Dodatki są zgodne z listą dodatków Twojego konta. Zobacz [Dodatki i lista dodatków Twojego konta](common:addons-basics).
- **Połącz swojego asystenta AI.** CadCraft Studio to centrum: połącz asystenta raz dla wszystkich ośmiu aplikacji. Studio nie ma własnej AI.

## Poprawione w 0.8.1

- **Sekcja klas w plikach DWG.** Sekcja klas pliku DWG była odczytywana jako niewłaściwy typ. Jest to poprawione w TakeoffCraft i w czterech innych aplikacjach.
- **Studio może zmienić język w trakcie działania.** Wcześniej Studio i jego spakowane wersje były tylko po angielsku. Nie zostało to sprawdzone we wszystkich wersjach desktopowych na każdej platformie; daj nam znać, jeśli język się nie zmienia.

## Nie ma jeszcze w tej wersji

- **Brak podpisu kodu.** Windows może wyświetlić ostrzeżenie, a na Macu przy pierwszym uruchomieniu kliknij prawym przyciskiem i wybierz {{ui:Otwarty}}. Wydania sklepowe (Microsoft Store, Google Play, App Store) są wstrzymane, a wersja na iPada i iPhone'a nie została przebudowana dla 0.8.1.
- **Aktualizacje Studio.** Instalator Windows i pakiety Linux sprawdzają aktualizacje raz dziennie i pytają przed instalacją. Przenośne archiwum zip tylko informuje o aktualizacji, a macOS i APK nie aktualizują się same. Plik .dmg dla macOS w wersji 0.8 pojawi się wraz z wydaniem.
- **Połącz swojego asystenta AI.** Nie są obiecane w tej wersji: połączenie jednym kliknięciem w Studio, hostowany łącznik AI w przeglądarce, własny klucz API w Studio ani opublikowany pakiet MCP.
- **Policz wszystko.** Wymaga symboli narysowanych tak samo jak w legendzie; symbol, przez który przechodzi ściana lub długa linia, może zostać pominięty. Symbole lustrzane nie są znajdowane, a arkusz bez skali, narysowany w innym rozmiarze, jest przeszukiwany w rozmiarze legendy. Przed zaufaniem reszcie sprawdź znaleziska na pierwszym arkuszu.
- **Stan magazynowy dostawcy.** Dane o stanie są tak aktualne, jak plik, który dodajesz. Sprawdzenie nigdy nie pyta dostawcy.
- **Języki.** Pasek aplikacji w tamilskim wychodzi poza obszar.

Wszystko inne znajdziesz w [Jeszcze niezbudowane](topic:not-built-yet). Wydanie poprzedzające to [Co nowego w 0.7](topic:whats-new-0-7).
