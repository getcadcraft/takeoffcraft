---
title: Biblioteka cen
summary: Przechowuj pozycje, stawki i zestawy kosztorysowe w bibliotece, importuj ją z CSV lub z poprzedniego kosztorysu, dodawaj z niej pozycje do dowolnego przedmiaru i aktualizuj z niej ceny przedmiaru.
keywords: biblioteka, pakiety branżowe, cennik, księga cen, baza kosztów, importuj csv, stawki, zestawy kosztorysowe, ponowne użycie, pozycje szablonowe, zaktualizuj ceny, przeliczenie
from: 37356c68
---

**Biblioteka cen** przechowuje pozycje, których używasz z zlecenia na zlecenie: ich typ, jednostkę, wysokość, naddatek, stawki materiału i robocizny oraz ich zestaw kosztorysowy. Jest przechowywana w tej przeglądarce, osobno od przedmiarów, więc każdy przedmiar otwarty tutaj może z niej korzystać.

Otwórz ją przez {{ui:Biblioteka}} na górze panelu {{ui:Pozycje}}.

## Wypełnij bibliotekę

- {{ui:Importuj CSV…}} czyta arkusz zapisany jako CSV (zobacz kolumny poniżej). Pozycje, których nazwa i typ są już w bibliotece, zostają zastąpione; reszta jest dodawana. Wiersze, których nie da się odczytać, są pomijane, a program mówi, które i dlaczego.
- {{ui:Dodaj pozycje tego przedmiaru}} kopiuje każdą pozycję otwartego przedmiaru do biblioteki, wraz ze stawkami i zestawem kosztorysowym (bez jej znaczników).
- Kosztorys CSV, który eksportuje TakeoffCraft ([Eksport kosztorysu](topic:export-estimate)), importuje się tak, jak jest: ceny z poprzedniej pracy zasilają następną.

- {{ui:Pakiety branżowe…}} dodaje darmowe zestawy kosztorysowe dla branży, na przykład gipsowe, elektryczne lub betonowe, bez cen. Zobacz [Pakiety branżowe](topic:trade-packs).

{{ui:Eksportuj CSV}} zapisuje bibliotekę jako CSV: by zachować kopię, edytować ją w arkuszu kalkulacyjnym albo przekazać koledze. {{ui:Wyczyść}} ją opróżnia (kliknij dwa razy).

:::note
Biblioteka leży w pamięci tej przeglądarki. Inna przeglądarka, inny komputer lub okno prywatne mają własną (albo żadnej). Wyeksportuj ją, by ją przenieść.
:::

## Użyj jej w przedmiarze

- Zaznacz pozycje (wpisz w {{ui:Szukaj w bibliotece}}, by zawęzić listę) i wybierz {{ui:Dodaj do przedmiaru}}. Są dodawane wraz z zestawami kosztorysowymi jednym krokiem, który {{key:Mod+Z}} cofa. Nazwa już obecna w przedmiarze dostaje numer, jak `Dywan (2)`.
- {{ui:Zaktualizuj ceny}} nadaje pozycjom przedmiaru naddatek i stawki z biblioteki, dla każdej pozycji, której nazwa i typ pasują do pozycji biblioteki, a tak samo dla składników zestawów o tej samej nazwie. Wysokości, jednostki i formuły pozostają bez zmian. Jedno {{key:Mod+Z}} przywraca wszystkie stare ceny.

## Kolumny CSV

Pierwszy wiersz nazywa kolumny, w dowolnej kolejności; inne kolumny są pomijane.

| Kolumna | Co w niej jest |
|---|---|
| Item (or Name) | Nazwa pozycji. Wymagana. |
| Type | Linear, Area lub Count (działają też LF, SF i EA). Puste: o jednostce decyduje typ. |
| Unit | LF lub m; SF, SY lub m²; EA. Puste: zwykła jednostka typu. |
| Waste % | `10` albo `10%`. |
| Material per unit, Labor per unit | Stawki, np. `2.10` lub `$1,250`. |
| Height (or Depth) | `9'-0"`, `9` albo `2.7` dla jednostek metrycznych. |
| Component, Formula | Wiersz z nazwą Component (albo typem `Component`) jest częścią zestawu pozycji powyżej. Jego Unit, Waste i stawki są jego własne; jego Formula używa liter pozycji, zobacz [Zestawy kosztorysowe i formuły](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Przecinki, średniki lub tabulatory między kolumnami — wszystkie działają.
