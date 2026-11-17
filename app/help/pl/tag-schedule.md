---
title: Importuj zestawienie etykiet jako ilości
summary: Zestawienie etykiet wyeksportowane z modelu budynku (CSV) staje się typowanymi ilościami w przedmiarze, po jednej na etykietę, dzięki czemu liczby i powierzchnie z modelu sąsiadują z tym, co zmierzyłeś.
keywords: etykiety, zestawienie etykiet, model budynku, bimcraft, ifc, ilości, csv, zestawienie, import, typowana ilość
from: a60c19b6
---

{{ui:Etykiety}} na pasku narzędzi importuje zestawienie etykiet, które BimCraft zapisał jako plik CSV. Każda odrębna etykieta staje się typowaną ilością tego samego rodzaju, co wykop i nasyp w CivilCraft.

1. W BimCraft utwórz żądane zestawienie etykiet i zapisz je jako CSV.
2. Wybierz {{ui:Etykiety}} i wskaż plik.
3. Określ, która kolumna nazywa pozycję ({{ui:Nazwij pozycję według}}, zwykle etykieta), a która zawiera liczbę ({{ui:Ilość z}}). Przy {{ui:Policz wiersze}} każdy wiersz liczy się jako jeden.
4. Wybierz jednostkę. Długość w milimetrach staje się metrami po wybraniu {{ui:Pomnóż przez}} 0.001.
5. {{ui:Dodaj ilości}}.

Wiersze z tą samą etykietą są sumowane. Komórka, która nie jest liczbą, zostaje pominięta i policzona w podsumowaniu. Ponowny import tego samego zestawienia aktualizuje ilości, które już masz, zamiast dodawać nowe; ich nazwy, stawki i naddatki pozostają Twoje.

## Warto wiedzieć

Typowana ilość nie jest mierzona na arkuszu, więc nie ma znaczników. Nic nigdzie nie jest wysyłane; plik jest odczytywany tutaj.
