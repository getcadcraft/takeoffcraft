---
title: Jednostki
summary: Jednostki, w jakich może raportować pozycja, jednostki zmiennych formuły pozycji oraz sposób, w jaki mieszają się układy imperialny i metryczny.
keywords: jednostki, lf, sf, sy, sq, jardy kwadratowe, kwadraty dachowe, akry, hektary, metry, metry kwadratowe, ea, sztuka, metryczny, imperialny, przeliczanie, domyślna jednostka
from: b7bf0528
---

## Jednostki pozycji

| Typ pozycji | Jednostka | Nazwa |
|---|---|---|
| Liniowy | LF | stopy bieżące (domyślna) |
| Liniowy | m | metry |
| Pole | SF | stopy kwadratowe (domyślna) |
| Pole | SY | jardy kwadratowe |
| Pole | SQ | kwadraty dachowe (100 stóp kwadratowych) |
| Pole | ac | akry |
| Pole | m² | metry kwadratowe |
| Pole | ha | hektary |
| Liczenie | EA | sztuka |

Zmień ją przyciskiem {{ui:Jednostka}} w edytorze pozycji w dowolnym momencie, nawet po pomiarze; ilość zostaje przeliczona od razu.

Lista {{ui:Jednostka}} pokazuje jednostki włączone w {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Jednostki}} oraz zawsze jednostkę własną pozycji. Nowa pozycja zaczyna w jednostce długości lub pola oznaczonej tam gwiazdką, o ile jest to jednostka pozycji; w przeciwnym razie w LF lub SF. Zob. [Jednostki, wpisywane wartości i listy jednostek](common:unit-lists).

## Jednostki zmiennych formuły

| Jednostka pozycji | L, P, H | A |
|---|---|---|
| LF | stopy | stopy kwadratowe (powierzchnia ściany) |
| m | metry | metry kwadratowe (powierzchnia ściany) |
| SF | stopy | stopy kwadratowe |
| SY | stopy | jardy kwadratowe |
| SQ | stopy | kwadraty |
| ac | stopy | akry |
| m² | metry | metry kwadratowe |
| ha | metry | hektary |

Dla pozycji SY `A` jest w jardach kwadratowych, a `P` i `H` pozostają w stopach. Objętość z pozycji SY to `A * 9 * H / 27` jardów sześciennych; dla płyt prościej użyć SF.

## Gdzie jednostki są stałe

Niektóre odczyty zawsze używają stóp:

- bieżący odczyt na pasku stanu podczas rysowania (stopy-cale, SF),
- **Wybrany znacznik** (stopy-cale, LF i SF),
- wynik sprawdzenia (stopy-cale, z dziesiętnymi stopami i metrami),
- długości odcinków i obwody w arkuszu **Marks** arkusza kalkulacyjnego (stopy-cale).

Sumy pozycji, tabela {{ui:Ilości}}, formuły i arkusz **Estimate** używają jednostki własnej pozycji.

## Skale i jednostki są niezależne

Skala arkusza mówi, jak duży jest rysunek; jednostka pozycji mówi, jak go raportować. Rysunek metryczny w `1:100` można przedmiarować w LF, a rysunek imperialny w m². Kalibracja przyjmuje dowolną jednostkę: `24'-6"`, `7.5 m`, `7500 mm`.

## Dokładność

TakeoffCraft mierzy dokładnie z klikniętych punktów, łącznie z prawdziwymi długościami i polami łuków, i nie zaokrągla ilości. Wyświetlanie zaokrągla długości do 1/16 cala, a wartości dziesiętne do dwóch miejsc. Kwoty pieniężne są zaokrąglane dopiero w kwotach wynikowych, do grosza.
