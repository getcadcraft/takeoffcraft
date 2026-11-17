---
title: Roboty ziemne i rzędne punktowe
summary: Zaznacz rzędne punktowe na planie terenu, przekaż je do CivilCraft w celu powierzchni oraz wykopów i nasypów, a tutaj policz proste ilości wykopów.
keywords: roboty ziemne, wykopy, wykop, nasyp, wykop i nasyp, niwelacja, rzędna punktowa, rzędne, topografia, powierzchnia, triangulacja, civilcraft, punkty, pnezd, rów
from: a898e508
---

TakeoffCraft mierzy to, co narysowano na arkuszu. Roboty ziemne wymagają powierzchni terenu, dlatego są wspólne z CivilCraft, który buduje powierzchnie z punktów, niweluje je i wylicza wykopy, nasypy oraz transport ziemi.

## Proste wykopy tutaj

Dla obrysu wykopanego na jedną głębokość wystarczy pozycja powierzchniowa z **głębokością**: objętość to pole × głębokość. Ogólny [pakiet branżowy wykonawcy](topic:trade-packs) ma pozycję wykopu masowego (objętość w stanie naturalnym, objętość luźna i liczba ładunków samochodowych) oraz pozycję rowu instalacyjnego (wykop, podsypka i zasypka według długości i głębokości).

## Rzędne punktowe dla CivilCraft

1. Ustaw skalę arkusza terenu.
2. Utwórz pozycję typu **Count**, na przykład „Istniejący teren”, i kliknij każdą rzędną punktową na arkuszu.
3. Wybierz znacznik i wpisz jego {{ui:Rzędna}} w panelu wybranego znacznika: `102.5`, `102'-6"` lub `31.24 m`. Rzędne ujemne i zerowe są dozwolone.
4. Otwórz menu {{ui:Eksport}} i wybierz {{ui:Rzędne punktowe}}. Otrzymasz plik punktów (`.csv`) z kolumnami Point, Northing, Easting, Elevation i Description, jeden wiersz na każdy oznaczony punkt otwartego arkusza.
5. Otwórz ten plik w CivilCraft (zob. [Importuj punkty](app:civilcraft/import-points)). Program buduje z punktów powierzchnię ([Zbuduj powierzchnię](app:civilcraft/build-surface)); dalej porównuje powierzchnie i podaje wykopy oraz nasypy ([Objętości](app:civilcraft/volumes)).

Northing i Easting to współrzędne samego arkusza w stopach, liczone od rogu strony przy jego skali: odległości i objętości między punktami są prawdziwe, ale nie są współrzędnymi geodezyjnymi terenu. Gdy trzeba, przenieś je na współrzędne terenu w CivilCraft.

:::note
Punkty z różnych arkuszy nie mają wspólnych współrzędnych, dlatego eksport obejmuje tylko otwarty arkusz. Rzędne są zapisywane z przedmiarem i przenoszone przez kopiowanie i wklejanie.
:::

## Wykopy i nasypy z CivilCraft

Roboty ziemne z CivilCraft wracają jako dwie pozycje, które możesz wycenić:

1. W CivilCraft wyrównaj place i korytarze, a następnie wybierz {{ui:Wyślij do TakeoffCraft}} w sekcji **Roboty ziemne** ([Objętości robót ziemnych](app:civilcraft/volumes)). Program zapisuje plik ilości (`.quantities.json`).
2. W TakeoffCraft otwórz go przyciskiem {{ui:Otwórz przedmiar}} albo upuść go na aplikację. Przedmiar pozostaje otwarty: plik dodaje **Roboty ziemne: wykop** i **Roboty ziemne: nasyp** jako [ilości wpisane ręcznie](topic:create-items#typed-quantities-no-drawing) w jardach sześciennych (CY) dla projektu w stopach albo w metrach sześciennych (m³) dla projektu w metrach. Jest to jeden krok: cofa go {{key:Mod+Z}}.
3. Zmień ich nazwy, ustaw naddatek, ceny i zestawy kosztorysowe według potrzeb.

Gdy projekt się zmieni, wyślij ponownie z CivilCraft i otwórz nowy plik: te same dwie pozycje dostają nowe ilości. Ich nazwy, ceny, naddatek i zestawy pozostają takie, jakie ustawiono. Jeśli jednostka projektu się zmieniła, pasek stanu o tym informuje: sprawdź ceny. Plik z innego projektu CivilCraft dodaje własne dwie pozycje.

Ilości to objętości w stanie naturalnym, tak jak zmierzył je CivilCraft (metodą siatki): bez skurczu i spęcznienia. Uwzględnij je jako naddatek albo formułą, na przykład `Q * 1.25` dla objętości luźnej. Edytor pozycji pokazuje, skąd i kiedy każda pochodzi; kolumna uwag kosztorysu też o tym mówi.

:::note
Plik ilości to zwykły JSON (`"format": "cadcraft-quantities"`), więc skrypt lub inny program też może go zapisać: nazwa aplikacji, projekt oraz pozycje z kluczem, nazwą, jednostką i ilością.
:::
