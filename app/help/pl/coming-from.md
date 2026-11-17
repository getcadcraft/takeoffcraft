---
title: Przejście z innego oprogramowania do przedmiarów
summary: Jak nawyki dedykowanych programów do przedmiarów i narzędzi do adnotacji PDF przekładają się na TakeoffCraft oraz jakie różnice często mylą.
keywords: przełączanie, migracja, warunki, części, narzędzia pomiaru, lista adnotacji, powiązanie ilości, nawyki przedmiaru, różnice, porównaj
from: 12004ce5
---

Jeśli robiłeś przedmiar w PlanSwift lub narzędziami pomiaru w Bluebeam Revu, większość TakeoffCraft będzie ci znana: zestaw planów, skala dla każdego arkusza, rzeczy, które mierzysz, oraz wyceniona suma. Sposób, w jaki elementy do siebie pasują, w niektórych miejscach różni się i te miejsca są opisane poniżej.

Jeśli znasz PlanSwift lub On-Screen Takeoff, wybierz styl menu {{ui:Biurko przedmiarowe}} w {{ui:Ustawienia}} › {{ui:TakeoffCraft}} › {{ui:Menu, klawisze i mysz}}: pasek menu z pozycjami Plik, Edycja, Widok, Skala, Przedmiar, Pozycje, Adnotacja i Eksport nad rzędem narzędzi przedmiarowych, z gotowymi skalami na pasku arkusza. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse).

## Nawyki i ich odpowiedniki

| Jesteś przyzwyczajony do | W TakeoffCraft |
|---|---|
| Otwierania zlecenia lub projektu, który przechowuje plany (PlanSwift) | Otwórz pliki PDF i plik `.takeoff.json` projektu obok siebie. Projekt przechowuje tylko przedmiar; pliki PDF pozostają twoimi plikami. |
| Listy adnotacji z notatkami, chmurami i zakreśleniami (Bluebeam) | {{ui:Adnotacja}} na pasku arkusza: notatki, chmury i zakreślenia ze statusem (Otwarte, Odpowiedziano, Zamknięte), wypisane pod **Adnotacje** i narysowane w PDF z oznaczeniami. Zobacz [Notatki, chmury i zakreślenia](topic:markups). |
| Pomiarów zapisanych jako adnotacje wewnątrz PDF (Bluebeam) | Przedmiar znajduje się w pliku `.takeoff.json`. {{ui:PDF z oznaczeniami}} zapisuje kopię z narysowanym przedmiarem, do udostępniania; {{ui:PDF z przedmiarem w środku}} zapisuje kopię zawierającą przedmiar, do ponownego otwarcia w TakeoffCraft. |
| Pozycje przedmiaru (PlanSwift), własne narzędzia pomiaru zapisane w Tool Chest (Bluebeam) | **Pozycje** w panelu {{ui:Pozycje}}: nazwa, typ, kolor, jednostka, wysokość lub głębokość, naddatek, stawki. |
| Części i zestawy z formułami (PlanSwift) | {{ui:Zestaw kosztorysowy}} pozycji: składniki z formułą używającą `L H A N P`. |
| Ustawianie skali strony lub kalibrowanie (oba) | Lista {{ui:Gotowa skala}} lub {{ui:Kalibruj}} w grupie {{ui:Skala}}, dla każdego arkusza. {{ui:Sprawdź}} mierzy znany wymiar. |
| Zastosowanie jednej skali do zakresu stron | Jeszcze nie: ustaw każdy arkusz osobno. |
| Widoki z różnymi skalami na jednym arkuszu (Bluebeam) | Jeszcze nie: jedna skala na arkusz. |
| Narzędzia polilinii i pola (Bluebeam), przedmiar liniowy i powierzchniowy (PlanSwift) | {{ui:Liniowy}} ({{key:L}}) i {{ui:Pole}} ({{key:A}}). |
| Przytrzymanie Shift dla prostych linii | {{key:Shift}} przyciąga do kroków co 45°, to ta sama idea. |
| Przyciąganie do linii rysunku | Domyślnie włączone: końce, punkty środkowe, przecięcia i najbliższy punkt na linii, z {{key:F3}} do wyłączenia, jak w programach CAD. |
| Narzędzie liczenia (oba) | {{ui:Liczenie}} ({{key:C}}). |
| Wizualne wyszukiwanie symboli (Bluebeam) | {{ui:Auto liczenie}} ({{key:S}}): zaznacz jeden symbol, sprawdź, dodaj. |
| Wycięcia lub odliczenia w powierzchniach | {{ui:Wycięcie}} ({{key:X}}) na zaznaczonej powierzchni oraz okrągłe wycięcia. |
| Odliczenia na przebiegach liniowych | Poprowadź przebieg na wylot i naciśnij {{key:E}} ({{ui:Odlicz}}) dla otworu. Zobacz [Mierzenie przebiegów liniowych](topic:measure-linear). |
| Segmenty łukowe w polilinii | {{ui:Łuk}} ({{key:R}}): kliknij punkt na krzywej, a potem jej koniec. |
| Lista adnotacji z kolumnami ilości (Bluebeam) | Tabela {{ui:Ilości}}, {{ui:Wg pozycji}} lub {{ui:Wg arkusza}}. |
| Siatka kosztorysowa z wyceną (PlanSwift) | Ta sama tabela: naddatek, materiał i robocizna na jednostkę, sumy pozycji, {{ui:Suma całej roboty}}. |
| Eksport do Excela | {{ui:XLSX}} z żywymi formułami lub {{ui:CSV}}. |
| Escape, aby zatrzymać narzędzie | {{key:Esc}} anuluje i wraca do {{ui:Zaznacz}}. |
| Prawy przycisk myszy, aby zakończyć | Prawy przycisk kończy przebieg lub zamyka powierzchnię także tutaj. Menu kontekstowe po prawym przycisku nie istnieje. |

## Różnice, które mylą

**Przedmiar nie znajduje się w twoim PDF.** Nic, co robisz, nie zmienia twoich plików PDF. Zapisz plik `.takeoff.json` i trzymaj go razem z rysunkami. Wysłanie komuś PDF z oznaczeniami nie wysyła mu edytowalnego przedmiaru: wyślij plik projektu i oryginalne pliki PDF albo [PDF z przedmiarem w środku](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Pliki PDF są dopasowywane po zawartości, a nie po nazwie.** Poprawiony arkusz zapisany pod starą nazwą pliku jest dla TakeoffCraft nowym plikiem, bez skali i bez oznaczeń. Twoje stare oznaczenia zostają na starej wersji i dalej się liczą. Zobacz [Zapisywanie i ponowne otwieranie przedmiaru](topic:save-and-reopen#when-a-pdf-has-changed).

**Oznaczenia bez skali są pomijane, a nie liczone jako zero.** Jeśli arkusz nie ma skali, jego przebiegi i pola się nie liczą, a tabela pokazuje „Niekompletne”. W wielu programach zobaczyłbyś po prostu 0. Zobacz [Ustawianie skali](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nie ma zgadywania rozmiaru strony.** Gotowe skale zakładają, że PDF jest wydrukowany w pełnym rozmiarze. PDF w połowie rozmiaru lub „dopasowany do strony” wymaga {{ui:Kalibruj}}. Zawsze używaj {{ui:Sprawdź}}.

**Jedna pozycja, jeden główny typ, więcej na życzenie.** Pozycja jest liniowa, powierzchniowa lub liczona, a jej typ blokuje się, gdy ma oznaczenia. Warunek, który daje zarówno powierzchnię, jak i jej obwód, jest pozycją powierzchniową: jej obwód to zmienna `P`. Ściana z długością i powierzchnią to pozycja liniowa z wysokością. Dla pozycji wielowarunkowej, takiej jak pokój z podłogą, podstawą i drzwiami, zaznacz pozostałe rodzaje pod **Mierz też**: każdy jest wyceniany we własnym wierszu. Zobacz [Jedna pozycja, kilka rodzajów oznaczeń](topic:create-items#one-item-several-kinds-of-marks).

**Formuły działają na sumach.** Formuły zestawu używają sum pozycji ze wszystkich arkuszy, a nie każdego przebiegu osobno. `N` (liczba przebiegów lub powierzchni) służy do dodatków na przebieg, na przykład jednego dodatkowego słupka na ścianę.

**Obwód zawiera wycięcia.** `P` powierzchni dodaje krawędzie jej otworów. Zobacz [Mierzenie powierzchni z wycięciami](topic:measure-areas#read-the-area).

**Przeciąganie przesuwa widok.** Przeciągnięcie lewym przyciskiem przesuwa arkusz we wszystkich narzędziach, z wyjątkiem {{ui:Auto liczenie}}. Nigdy nie musisz przełączać się na narzędzie przesuwania. Kółko myszy powiększa; nie przewija.

**Kopia do odzyskania, nie chmura.** TakeoffCraft przechowuje kopię twojej pracy w tej przeglądarce i oferuje jej przywrócenie po awarii ([Jeśli karta lub przeglądarka przestaje działać](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), ale przedmiar musisz zapisać sam: {{key:Mod+S}}. Zapis w chmurze nie jest jeszcze dostępny.

**Wszystko działa w przeglądarce.** Nie trzeba niczego instalować, a plany nigdy nie są przesyłane. Dla aplikacji desktopowej TakeoffCraft jest dostępny w CadCraft Studio, obok pozostałych siedmiu aplikacji.

## Jeszcze niedostępne

Obszarów skali dla poszczególnych arkuszy jeszcze nie zbudowano. Pełną listę i to, co zrobić zamiast tego, znajdziesz w [Czego jeszcze nie zbudowano](topic:not-built-yet).
