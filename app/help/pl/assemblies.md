---
title: Zestawy i formuły
summary: Dodawaj składniki do pozycji i pozwól formułom zamienić jej długość, pole lub liczbę w słupki, podwaliny, płyty, beton i okucia, z przykładem ściany.
keywords: zestaw, składniki, formuła, słupki, płyta gipsowa, arkusze, płyty, beton, jardy sześcienne, okucia, receptura, typowe, części pozycji
from: 12891a21
---

**Zestaw kosztorysowy** pozycji to lista składników; każdy ma własną formułę ilości oraz własny naddatek i stawki. Formuła korzysta z sum zmierzonych dla pozycji, więc jeden pomiar ściany daje od razu słupki, podwaliny i płyty, a wartości aktualizują się w miarę mierzenia.

## Zmienne, których możesz użyć

| Typ pozycji | Zmienne |
|---|---|
| Liniowa | `L` długość, `H` wysokość, `A` pole ściany (L × H), `N` liczba odcinków |
| Powierzchniowa | `A` pole, `P` obwód (kontur + wycięcia), `H` głębokość lub grubość, `N` liczba obszarów |
| Liczbowa | `N` liczba |

Wartości są w jednostkach samej pozycji: stopy i stopy kwadratowe dla pozycji w LF i SF, metry i metry kwadratowe dla pozycji w m i m². Dla pozycji w SY `A` jest w jardach kwadratowych, a `P` i `H` pozostają w stopach.

Formuły używają `+ - * /` (lub × ÷), nawiasów, liczb oraz funkcji `ceil`, `floor`, `round`, `min`, `max` i `abs`. Pełne zasady opisano w [Język formuł](topic:formulas).

## Przykład: ściana wewnętrzna

Załóżmy, że przedmiarowałeś **Ścianę wewnętrzną typu A** jako pozycję liniową: 4 odcinki o łącznej długości 120 LF, z {{ui:Wysokość}} ustawioną na `9'-0"`. Jej wartości **Zmierzone** to L = 120, N = 4, A = 1,080 (SF ściany, jedna strona).

1. Wybierz pozycję w {{ui:Pozycje}}.
2. W {{ui:Zestaw kosztorysowy}} wybierz {{ui:Dodaj składnik}}.
   Pojawi się nowy składnik z formułą `L` i jej wynikiem poniżej.
3. Wpisz `Słupki 16 in o.c.` w {{ui:Nazwa}} i `EA` w {{ui:Jednostka}}.
4. W {{ui:Formuła ilości}} wpisz `ceil(L * 12 / 16) + N`.
   Wynik aktualizuje się podczas pisania: „= 94 EA”. To jeden słupek co 16 cali na 120 stopach długości (90), plus jeden dodatkowy, by zamknąć każdy z 4 odcinków.
5. Ponownie wybierz {{ui:Dodaj składnik}} dla podwalin: nazwa `Podwaliny i przyciosy`, jednostka `LF`, formuła `L * 2`. Wynik: 240 LF.
6. Dodaj płytę: nazwa `Płyta gipsowa 4x8, obie strony`, jednostka `płyty`, formuła `ceil(A * 2 / 32)`. Wynik: 68 płyt (2,160 SF płyt ÷ 32 SF na płytę = 67.5, zaokrąglone w górę).
7. Uzupełnij {{ui:Naddatek %}}, {{ui:Materiał $}} i {{ui:Robocizna $}} każdego składnika.
   Każdy składnik ma własny wiersz pod pozycją w {{ui:Ilości}}, wyceniany jak pozycja, a {{ui:Suma całej roboty}} go uwzględnia.

Jeśli koszt ściany jest w całości w składnikach, pozostaw własne stawki materiału i robocizny pozycji na 0, w przeciwnym razie zostanie policzony dwa razy.

:::tip
Naddatek jest stosowany po formule i nie jest zaokrąglany: 68 płyt z naddatkiem 10% to 74.8 płyty. Aby zamawiać pełne płyty, wpisz naddatek w formułę, na przykład `ceil(A * 2 / 32 * 1.1)`, a naddatek składnika pozostaw na 0.
:::

## Więcej formuł

| Co | Pozycja | Formuła |
|---|---|---|
| Słupki co 24 in (rozstaw osiowy) | Liniowa | `ceil(L / 2) + N` |
| Wkładka izolacyjna, SF | Liniowa z wysokością | `A` |
| Farba, obie strony, galony na 350 SF | Liniowa z wysokością | `ceil(A * 2 / 350)` |
| Kartony płytek po 15 SF, 10% zapasu | Powierzchniowa | `ceil(A * 1.1 / 15)` |
| Listwa przypodłogowa lub krawędziowa, LF | Powierzchniowa | `P` |
| Beton, jardy sześcienne | Powierzchniowa z głębokością | `A * H / 27` |
| Beton zaokrąglony w górę do ćwiartki jarda | Powierzchniowa z głębokością | `ceil(A * H / 27 * 4) / 4` |
| Zawiasy, trzy na drzwi | Liczbowa | `N * 3` |
| Co najmniej jedno opakowanie, jedno na 12 | Liczbowa | `max(1, ceil(N / 12))` |

## Gdy formuła jest błędna

Wiersz pod formułą zamienia się w komunikat o błędzie, na przykład `"X" nie jest tutaj wartością zmierzoną. Użyj L, H, A, N.` albo `Brakuje ")".`. Składnik nie ma wtedy kwot, jego wiersz w {{ui:Ilości}} pokazuje „Błąd formuły: …”, a nagłówek mówi „Niekompletne: 1 błąd formuły (nieuwzględniony w sumach)”. Popraw formułę, a sumy się zaktualizują.

Formuła dzieląca przez zero również jest błędem („Formuła dzieli przez zero.”), na przykład `A / H` dla pozycji bez głębokości.

## Ograniczenia

- Formuły działają na **sumach** pozycji, a nie odcinek po odcinku. `ceil(L * 12 / 16) + N` dodaje jeden słupek na odcinek; zaokrąglania na poziomie odcinka jeszcze nie ma.
- Formuła może używać tylko zmiennych własnej pozycji, a nie zmiennych innej pozycji.
- Do 50 składników na pozycję, 500 znaków na formułę.

## Usuń składnik

Wybierz {{ui:Usuń składnik}} pod nim. Możesz to cofnąć przez {{key:Mod+Z}}.
