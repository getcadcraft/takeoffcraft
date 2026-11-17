---
title: Język formuł
summary: Reguły formuł ilości zestawów kosztorysowych: zmienne, operatory, funkcje, zaokrąglanie i każdy komunikat o błędzie.
keywords: formuła, wyrażenie, składnia, funkcje, ceil, floor, round, min, max, abs, zmienne, operatory, obliczenia
from: 4da14575
---

Składniki zestawu kosztorysowego dostają ilość z formuły. Formuła to mała operacja arytmetyczna na zmierzonych wartościach pozycji. Przykłady zob. w [Zestawy kosztorysowe i formuły](topic:assemblies).

## Zmienne

| Typ pozycji | Zmienna | Znaczenie |
|---|---|---|
| Linear | `L` | Łączna długość |
| Linear | `H` | Wysokość pozycji |
| Linear | `A` | Pole ścian, L × H, pomniejszone o otwory w odcinkach, które je mają (przedmiar z BimCraft). Gdy ten przedmiar podaje metodę pomiaru, `A` jest mierzone tą metodą: otwory nie większe niż najmniejszy rozmiar metody pozostają w polu, a to, co metoda odejmuje w miejscach styku ścian, jest pomijane. Uwaga pod pozycją podaje metodę |
| Linear | `N` | Liczba odcinków |
| Area | `A` | Łączne pole netto (obrysy minus wycięcia) |
| Area | `P` | Łączny obwód, łącznie z krawędziami wycięć |
| Area | `H` | Głębokość lub grubość pozycji |
| Area | `N` | Liczba obszarów |
| Count | `N` | Liczba |

- Zmienne są w jednostkach pozycji: zob. [Jednostki](topic:units).
- Wielkość liter nie ma znaczenia: `l` to `L`.
- Działają tylko zmienne typu danej pozycji. `P` przy pozycji liniowej daje `"P" nie jest tu wartością mierzoną. Użyj L, H, A, N.`
- Pusta wysokość lub głębokość to 0.

## Operatory

| Zapis | Znaczenie |
|---|---|
| `+` | Dodaj |
| `-` lub `−` | Odejmij lub wartość ujemna |
| `*` lub `×` | Mnóż |
| `/` lub `÷` | Dziel |
| `( )` | Grupuj |

Mnożenie i dzielenie wykonują się przed dodawaniem i odejmowaniem: `L * 2 + 4` to (L × 2) + 4. W razie wątpliwości użyj nawiasów.

Liczby mogą mieć części dziesiętne (`1.333`, `.5`) i wykładniki (`1e3` = 1000). Spacje są ignorowane.

## Funkcje

| Funkcja | Wynik | Przykład |
|---|---|---|
| `ceil(x)` | Zaokrąglij w górę do liczby całkowitej | `ceil(67.5)` = 68 |
| `floor(x)` | Zaokrąglij w dół do liczby całkowitej | `floor(67.5)` = 67 |
| `round(x)` | Zaokrąglij do najbliższej liczby całkowitej, połówki od zera | `round(2.5)` = 3 |
| `round(x, d)` | Zaokrąglij do d miejsc po przecinku (od 0 do 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Najmniejsza wartość | `min(N, 10)` |
| `max(a, b, …)` | Największa wartość | `max(1, ceil(N / 12))` |
| `abs(x)` | Wartość bez znaku | `abs(-3)` = 3 |

`ceil` i `floor` ignorują drobne szumy zaokrągleń komputerowych, więc wartość, która ma być dokładnie 1, nigdy nie zostanie zaokrąglona do 2.

## Błędy

Formuła, której nie da się odczytać ani obliczyć, pokazuje błąd pod polem, a składnik jest pomijany w sumach (nagłówek {{ui:Ilości}} mówi „Niepełne”). Komunikaty:

| Komunikat | Poprawka |
|---|---|
| „Wpisz formułę, na przykład L lub ceil(L / 1.333) + 1.” | Formuła jest pusta. |
| „"X" nie jest tu wartością mierzoną. Użyj: …” | Użyj jednej z wymienionych zmiennych. |
| „"X" nie jest tu funkcją. Użyj: ceil, floor, round, min, max, abs.” | Użyj jednej z tych funkcji. |
| „"#" nie jest dozwolone w formule.” | Usuń ten znak (nie są dozwolone jednostki, `%`, `$` ani `=`). |
| Brakuje ")". / Jest ")" bez "(". | Zrównoważ nawiasy. |
| Brakuje wartości przed ")". | Na przykład `max(1, )`: uzupełnij wartość. |
| Formuła kończy się za wcześnie. | Na przykład `L *`: dokończ ją. |
| Nieoczekiwane „…”. Brakuje operatora? | Dwie wartości obok siebie, na przykład `2L`: zapisz `2 * L`. |
| ceil() przyjmuje 1 wartość. | Podaj funkcji właściwą liczbę wartości. |
| round(x, digits) wymaga całkowitej liczby cyfr od 0 do 10. | Użyj całkowitej liczby miejsc po przecinku. |
| Formuła dzieli przez zero. | Zwykle H wynosi 0: ustaw wysokość lub głębokość pozycji. |
| Formuła nie daje liczby. | Wynik jest zbyt duży, by być liczbą. |
| Ta formuła jest za długa (maksymalnie 500 znaków). | Skróć ją. |

## Bezpieczne z założenia

Formuła może wykonywać tylko działania arytmetyczne na powyższych zmiennych i funkcjach. Nie może uruchamiać kodu ani czytać czegokolwiek innego, więc formuła w pliku projektu przysłanym przez kogoś jest nieszkodliwa.
