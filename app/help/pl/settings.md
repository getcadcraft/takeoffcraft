---
title: Ustawienia TakeoffCraft
summary: Pokazuj cale do 1/16, 1/8 lub 1/4, zaczynaj nowe pozycje z procentem naddatku, wybierz, gdzie zaczyna się suwak Auto liczenia, przyciągaj do linii rysunku lub do 45° bez przytrzymywania Shift, ustaw szerokość drzwi zamykanych przez Wypełnianie pokoju oraz wybierz wskaźnik narożnika widoku 3D.
keywords: ustawienia, preferencje, opcje, precyzja, ułamki, cale, zaokrąglanie, naddatek, domyślny naddatek, auto liczenie, próg, dopasowanie, suwak, przyciąganie, 45, kąt, shift, kostka widoku, ikona osi, wskaźnik narożnika, 3d
from: bca3f0ed
---

Otwórz {{ui:Settings}} kółkiem zębatym na pasku aplikacji albo klawiszami {{key:Mod+,}}. Pierwsza karta, {{ui:TakeoffCraft}}, zawiera ustawienia należące do tej aplikacji; {{ui:General}} zawiera te, które współdzielą wszystkie aplikacje CadCraft (motyw, panele, pasek narzędzi). Ustawienia TakeoffCraft istnieją tylko w aplikacji: zmieniasz je tutaj, a ta przeglądarka je zapamiętuje. Przycisk „Resetuj ustawienia TakeoffCraft” przywraca je do wartości początkowych.

## Stopy i cale

Pokazuj długości z dokładnością do **1/16"** (wartość początkowa), **1/8"** albo **1/4"**. Zmienia to sposób odczytu długości na arkuszu, w panelach, w ilościach i w pasku stanu.

Zaokrąglane jest tylko wyświetlanie. Ilości, koszty i eksporty są liczone z dokładnych długości, a eksporty zawsze pokazują 1/16".

## Naddatek na start

Procent naddatku, jaki zaczyna każda nowa pozycja: 0% (wartość początkowa), 2%, 3%, 5%, 7.5%, 10%, 15% lub 20%. Nadal możesz wpisać inny naddatek dla każdej pozycji — w edytorze pozycji albo bezpośrednio w tabeli ilości. Istniejące pozycje zachowują własny naddatek.

## Auto liczenie: od czego zaczyna się suwak dopasowania

Miejsce, w którym stoi suwak {{ui:Match}}, gdy kończy się wyszukiwanie [Auto liczenia](topic:auto-count), od 50% do 95%; wartość początkowa to 75%. Niższa wartość daje więcej podobnych elementów do odrzucenia; wyższa daje ich mniej. Nadal możesz przesuwać suwak podczas każdego przeglądu.

## Przyciąganie do linii rysunku

Włączone od początku. Podczas mierzenia lub kalibracji punkt blisko linii PDF-a przeskakuje na jej koniec, środek, przecięcie lub najbliższy punkt na niej. {{key:F3}} oraz {{ui:Snap}} na pasku stanu też je włączają i wyłączają. Więcej: [Przyciąganie do linii rysunku](topic:snap-to-the-drawing).

## Wypełnianie pokoju: jak szerokie otwory zamyka

{{ui:Room fill closes openings up to}} ustawia, jak szeroki otwór drzwiowy lub przerwę narzędzie {{ui:Room}} traktuje jako zamknięte: od 3'-0" do 8'-0", na początku 4'-0". Szersze niż najszersze drzwi pozwoli pokojowi wejść do następnego; węższe niż drzwi pozostawi pokój otwarty. Zobacz [Wypełnianie pokoju jednym kliknięciem](topic:measure-areas#fill-a-room-with-one-click).

## Przyciąganie do 45° bez przytrzymywania Shift

Na początku wyłączone. Gdy jest włączone, odcinki, obrysy, wycięcia i przeciągane narożniki idą pod kątem 0°, 45°, 90° lub 135° od ostatniego punktu bez przytrzymywania {{key:Shift}}; przytrzymaj {{key:Shift}}, aby kliknąć pod dowolnym kątem. Pasek stanu wtedy pokazuje „Przyciąga do 45°; Shift zwalnia kąt”. Punktu kliknięcia na krzywej łuku oraz okręgów nigdy się nie przyciąga; koniec łuku — tak.

## Rozmiar znacznika liczenia

Jak duże są kropki liczenia: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (wartość początkowa: rozmiar, jaki kropki zawsze miały) albo {{ui:Large}}. Rozmiar utrzymuje się na ekranie przy każdym powiększeniu, a oznaczony PDF rysuje każdą kropkę w tym samym rozmiarze na papierze, niezależnie od rozmiaru arkusza, więc PDF w 100% wygląda jak ekran. Więcej: [Liczenie ręczne](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Wskaźnik narożnika

Tylko dla [widoku kontrolnego 3D](topic:check-in-3d): {{ui:View cube}} (wartość początkowa: kostka w prawym górnym rogu, którą można kliknąć, przeciągnąć i obracać), {{ui:Axis icon}} (mały znacznik X, Y, Z w prawym dolnym rogu) albo {{ui:None}}. Zmiana działa od razu i jest zapamiętywana w tej przeglądarce. Płaski arkusz nigdy go nie pokazuje.

## Narzędzie ścieżki: największa przerwa, którą łączy

„Narzędzie ścieżki: największa przerwa do połączenia” to jak daleko od siebie mogą być końce dwóch linii, by nadal liczyć się jako jedna ścieżka, w punktach PDF (od 0.05 do 60; 1.5 na początku). Linie rysunku często kończą się o włos przed sobą. Większa wartość łączy więcej; mniejsza trzyma linie osobno. {{key:[}} i {{key:]}} zmieniają ją podczas wyboru, a to pole za nimi podąża. Zobacz [Wybór linii](topic:pick-the-lines).
