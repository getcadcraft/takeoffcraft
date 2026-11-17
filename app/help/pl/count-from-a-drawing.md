---
title: Liczenie z rysunku
summary: Licz bloki, obiekty na warstwie lub tekst bezpośrednio z DWG lub DXF: dokładnie, z obsługą bloków zagnieżdżonych, wariantów bloków dynamicznych i tablic bloków, w jednym kroku cofnięcia.
keywords: liczenie z rysunku, liczenie CAD, liczenie bloków, licz bloki, wstaw, nazwa bloku, bloki zagnieżdżone, blok dynamiczny, wariant, minsert, tablica, warstwa, typ obiektu, okręgi, tekst, atrybut, znacznik, ukryte warstwy, dokładne liczenie, jak, drzwi, wyposażenie
from: 5060e24e
---

{{ui:Liczenie z CAD}} na pasku arkusza (polecenie **Licz z rysunku** w innych stylach menu) liczy to, co DWG lub DXF mówi, że jest. Tam, gdzie {{ui:Auto liczenie}} szuka obrazu symbolu i może coś przeoczyć lub znaleźć fałszywe, to liczy obiekty: każde wstawienie bloku o nazwie `DOOR-36` to jedne drzwi. Najpierw otwórz rysunek: [Otwieranie rysunku DWG lub DXF](topic:open-a-drawing).

## Liczenie bloku

1. Otwórz arkusz rysunku. {{ui:Liczenie z CAD}} jest na pasku arkusza.
2. Wybierz je. Okno wypisuje bloki wraz z liczbą każdego z nich. Szukaj po nazwie, a potem wybierz jeden.
3. Sprawdź wiersz pod listą: „Znaleziono 22, do dodania 22.”
4. W {{ui:Dodaj do}} wybierz pozycję liczoną albo zostaw {{ui:Nowa pozycja liczenia}} i podaj nazwę.
5. Wybierz przycisk dodawania, który podaje liczbę: {{ui:Dodaj 22 oznaczeń}}. Oznaczenia pojawiają się w punktach wstawienia bloku, a ilość pozycji jest liczbą.

Jest to jeden krok cofnięcia: {{key:Mod+Z}} usuwa razem oznaczenia i nową pozycję. Zestawienie, arkusz kalkulacyjny i oznaczony PDF traktują pozycję jak każdą inną pozycję liczoną.

### Co się liczy

- **Każde wstawienie nazwy bloku**, bez względu na skalę i kąt, w przestrzeni modelu lub w przestrzeni papieru. Nazwy bloków nie rozróżniają wielkości liter.
- **Tablice bloków** (MINSERT): każda kopia w tablicy to jeden element.
- **Bloki zagnieżdżone.** Blok umieszczony wewnątrz innego bloku liczy się na każdym poziomie zagnieżdżenia. Lista mówi „6 wewnątrz innych bloków”; odznacz {{ui:Licz też bloki wewnątrz innych bloków}}, aby liczyć tylko wstawienia umieszczone bezpośrednio w rysunku.
- **Bloki dynamiczne.** Blok dynamiczny liczy się pod własną nazwą, a nie pod anonimowymi kopiami (`*U12`), które plik przechowuje. Jego stany są wypisane osobno („Pojedynczy 12, Podwójny 4”): wybierz stan, aby liczyć tylko te, albo {{ui:Każdy wariant}}. Gdy plik nie mówi, jaki stan pokazuje kopia, są one wypisane jako „(stan nieznany)”.
- **Filtr warstwy.** Blok na kilku warstwach: wybierz jedną pod {{ui:Na warstwie}}.

### Czego się nie liczy

- **Ukryte warstwy.** Obiekt na warstwie wyłączonej lub zamrożonej w pliku (albo ukrytej przez ciebie w {{ui:Warstwy}}) jest pomijany, a wiersz podaje, ile ich jest: „3 na ukrytych warstwach pominięto”. Zaznacz {{ui:Licz też je}}, aby je uwzględnić.
- **Dołączone rysunki, które nie są otwarte**, nie są liczone; okno o tym informuje.
- **Obiekty ułożone dokładnie na innym tego samego rodzaju** są liczone jako dwa (bo to dwa obiekty), a okno to mówi: zwykle to pomyłka rysunkowa warta sprawdzenia.

## Ten arkusz lub cały rysunek

- **Co pokazuje ten arkusz** liczy obiekty, które arkusz wyświetla: na układzie – obiekty modelu wewnątrz jego okien widokowych (warstwa zamrożona w oknie widokowym nie jest tam liczona) oraz własne obiekty układu.
- **Cały rysunek, każdy obiekt raz** liczy przestrzeń modelu raz, ze znacznikami na karcie Model, i nie liczy ponownie tego, co kilka układów pokazuje.

Liczenie tego, co pokazuje układ, i liczenie tego, co pokazuje karta Model, dają tę samą liczbę dla tych samych obiektów; nie dodawaj obu do jednej pozycji.

## Ponowne liczenie

Ponowne policzenie tego samego bloku tą samą pozycją dodaje tylko to, co nowe: „22 już policzone.” Każde oznaczenie odpowiada jednemu obiektowi.

## Wg warstwy i typu

Na {{ui:Wg warstwy i typu}} wybierz warstwę i typ obiektu (okręgi, polilinie, kreskowania…): „wszystkie okręgi na E-LITE”. Zaznacz {{ui:Licz też obiekty wewnątrz bloków}}, aby uwzględnić te wewnątrz definicji bloków, w każdym miejscu, gdzie blok jest wstawiony.

## Wg tekstu

Na {{ui:Wg tekstu}} wpisz tekst, np. `A3`, i określ, czy ma być dokładnie taki, czy go zawierać, czy być całym słowem. Obiekty tekstowe, tekst wielokrotnego odnośnika i **wartości atrybutów** bloków są liczone (atrybut znacznika `ITEM = A3` zostanie znaleziony); wybierz {{ui:W atrybucie}}, aby liczyć tylko jeden atrybut. Najczęstsze teksty są wypisane do kliknięcia.

## Kiedy używać Auto liczenia

Użyj {{ui:Auto liczenie}} dla plików PDF i dla symboli w rysunku, które nie są blokami (narysowane luźno lub rozbite). Symbole narysowane jako bloki licz tutaj.
