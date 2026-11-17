---
title: Porównaj poprawiony arkusz i przenieś przedmiar
summary: Nałóż stary arkusz na jego rewizję, wyrównaj je, zobacz, co się zmieniło, i przenieś przedmiar na nowy arkusz, z oznaczeniami do sprawdzenia.
keywords: rewizja, poprawiony, porównaj, nakładka, stary, nowy, zmiany, aneks, biuletyn, ponowne wydanie, przenieś przedmiar, przeniesienie, przenieś dalej, wyrównaj, oznaczone, sprawdź
from: 3a1d9fe0
---

Kiedy arkusz zostaje ponownie wydany, nie musisz go znowu mierzyć. Otwórz stary PDF i nowy, porównaj oba arkusze i przenieś przedmiar. TakeoffCraft oznacza każde oznaczenie, w którym rysunek się zmienił, więc sprawdzasz te i zostawiasz resztę.

## Porównanie

1. Otwórz oba pliki PDF: stary zestaw i poprawiony ({{ui:Otwórz PDF}}; mogą być w jednym pliku lub w kilku).
2. Pokaż **nowy** arkusz.
3. Wybierz {{ui:Porównaj}} na pasku arkusza pod rysunkiem.
4. Wybierz stary arkusz z listy. TakeoffCraft proponuje arkusz o tym samym numerze w drugim PDF lub tę samą stronę. Wybierz **Porównaj**.

Stary rysunek leży teraz na nowym, w kolorze czerwonym. Tam, gdzie oba się zgadzają, czerwone linie leżą na czarnych; tam, gdzie się różnią, widzisz same czerwone linie (usunięte) i same czarne (dodane). Pasek u dołu arkusza zawiera kroki opisane niżej; {{key:Esc}} lub {{ui:Zamknij}} kończy porównywanie.

## Wyrównanie

Poprawione arkusze bywają wydrukowane nieco krzywo: przesunięte na stronie albo w nieco innym rozmiarze. Jeśli czerwony rysunek nie leży na czarnym, wybierz **Wyrównaj wg dwóch punktów** i kliknij cztery razy:

1. punkt na starym (czerwonym) rysunku, np. środek słupa lub narożnik budynku,
2. ten sam punkt na nowym (czarnym) rysunku,
3. drugi punkt na czerwonym rysunku, daleko od pierwszego,
4. ten sam punkt na czarnym rysunku.

Czerwony rysunek przesuwa się, obraca i skaluje na czarny. Pasek stanu mówi, o ile większy jest nowy rysunek („rozmiar × 1.000”, gdy jest taki sam). Powiększ widok przy wskazywaniu: im bliżej klikasz, tym lepsze dopasowanie.

## Znajdź zmiany

Wybierz **Znajdź zmiany**. TakeoffCraft porównuje tusz obu rysunków: tusz tylko na starym arkuszu staje się czerwony, tusz tylko na nowym – niebieski, a pasek stanu je liczy. Linie przesunięte o włos (ponowny wydruk) nie są liczone jako zmiany.

Dodatkowo sprawdza każde oznaczenie na starym arkuszu i liczy te, które leżą tam, gdzie rysunek się zmienił:

- przebieg lub powierzchnia, gdy rysunek zmienił się na jednym z ich końców lub narożników albo wzdłuż co najmniej około jednej szóstej ich długości;
- liczenie, gdy coś zmieniło się tuż obok niego.

## Przenieś przedmiar

Wybierz **Przenieś przedmiar tutaj**. Każde oznaczenie na starym arkuszu przechodzi na nowy, przez wyrównanie, jednym krokiem cofnięcia. Te leżące przy zmianie są oznaczone: rysowane są z pomarańczową poświatą, a pasek arkusza pokazuje „(n) do sprawdzenia”.

Jeśli nowy arkusz nie miał skali, przejmuje skalę starego (dopasowaną, gdy rysunki trzeba było przeskalować, aby się wyrównały). Jeśli miał już inną skalę, TakeoffCraft najpierw pyta: przeniesione oznaczenia są mierzone w skali nowego arkusza.

## Sprawdź oznaczone

1. Wybierz „(n) do sprawdzenia” na pasku arkusza. Przybliża do następnego oznaczonego znacznika i go zaznacza; jego panel mówi, dlaczego jest oznaczony.
2. Popraw oznaczenie, jeśli rysunek pod nim się zmienił (przeciągnij jego narożniki, dodaj lub usuń oznaczenia albo zdejmij je i zmierz ponownie).
3. Wybierz **Sprawdzone** w jego panelu. Flaga znika, a liczba na pasku arkusza spada.

Flagi są zapisywane razem z przedmiarem, więc możesz je sprawdzić później.

:::note
Porównywanie działa zarówno na PDF wektorowych, jak i na skanach, ponieważ porównuje to, co jest narysowane. Skan przekrzywiony lub rozciągnięty może wyrównać się tylko w przybliżeniu dwoma punktami; wtedy sprawdź więcej oznaczeń na oko.
:::
