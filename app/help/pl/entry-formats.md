---
title: Wprowadzanie długości, stawek i procentów
summary: Co możesz wpisać jako odległości, wysokości, stawki pieniężne i procenty naddatku, z przykładami oraz komunikatami dla danych, których TakeoffCraft nie potrafi odczytać.
keywords: wprowadzanie, format, stopy i cale, ułamki, stopy dziesiętne, metryczne, metry, milimetry, stawka, cena, dolary, procent, naddatek, pisanie
from: 215bbf4d
---

## Długości

Używane przez **Rzeczywista odległość** w {{ui:Kalibruj}}, a także przez {{ui:Wysokość}} i {{ui:Głębokość}} w edytorze pozycji.

| Wpisujesz | Oznacza |
|---|---|
| `24'-0"` | 24 stopy |
| `24'-6 1/2"` | 24 stopy 6½ cala |
| `12' 6 1/2"` | 12 stóp 6½ cala (spacja zamiast myślnika) |
| `12'-6-1/2"` | 12 stóp 6½ cala (myślniki między częściami) |
| `24'` | 24 stopy |
| `30"` | 30 cali |
| `6 1/2"` | 6½ cala |
| `3/4"` | ¾ cala |
| `24 ft 6 in` | 24 stopy 6 cali (także `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 w domyślnej jednostce (zob. niżej) |
| `24.5'` | 24.5 stopy |
| `7.5 m` | 7.5 metra |
| `750 cm` | 750 centymetrów |
| `7500 mm` | 7,500 milimetrów |

- Zwykła liczba jest w **stopach** przy kalibracji i dla pozycji w LF, SF lub SY, a w **metrach** dla pozycji w m lub m².
- Typograficzne cudzysłowy i znaki prime z edytorów tekstu (′ ″ ’ ”) działają jak `'` i `"`. Dwa apostrofy `''` liczą się jako `"`.
- Przecinki są ignorowane: `1,200 mm` to 1200 mm.
- Ułamki wymagają liczb całkowitych po obu stronach: `6 1/2"` działa, `6.5 1/2"` nie.
- Odległości zerowe i ujemne są odrzucane.

Komunikaty:

- „Wpisz odległość, na przykład 24'-0" lub 7.5 m.” (pole jest puste)
- „Wpisz odległość większą od zera.”
- „Użyj stóp i cali (24'-6 1/2"), stóp dziesiętnych, m, cm lub mm.” (nieznana jednostka)
- „Nie udało się odczytać tej odległości. Spróbuj 24'-6 1/2" lub 24.5.”

Aby usunąć wysokość lub głębokość pozycji, opróżnij pole.

### Obliczenia

Każde pole długości oraz pole wpisywania podczas rysowania przyjmuje też obliczenia z `+`, `-`, `*`, `/` i nawiasami:
`4+7/16` (4.4375 w domyślnej jednostce), `12'6" + 3/4"`, `(24'-0")/3` (8 stóp), `2*450mm`.

- Myślnik wpisany w długość nadal jest jej częścią: `24'-6"` to 24 stopy 6 cali, a `6-1/2` to 6½. Aby odjąć, postaw spacje wokół myślnika: `24' - 6"` to 23'-6".
- Zwykła liczba mnoży lub dzieli długość jak liczbę; dodana do długości jest w domyślnej jednostce.
- Działają też `abs`, `round`, `ceil` i `floor`. Obliczenie, którego nie da się odczytać, jest odrzucane z podaniem miejsca błędu.

## Jak pokazywane są długości

Długości są pokazywane w stopach, calach i szesnastych częściach cala: `12'-6 1/2"`, `0'-0 3/4"`. Wartości są zaokrąglane do najbliższej 1/16 cala na potrzeby wyświetlania; same ilości nie są zaokrąglane. Wartości dziesiętne pokazywane są z dwoma miejscami po przecinku i separatorami tysięcy, jak `1,234.50 LF`.

## Ceny jednostkowe (materiał i robocizna za jednostkę)

| Wpisujesz | Oznacza |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (do czterech miejsc po przecinku; więcej jest zaokrąglane) |
| (puste) | $0 |

Komunikat: „Wpisz kwotę, na przykład 12.50.” albo „Ta kwota jest zbyt duża.” Ujemne ceny nie są przyjmowane.

Kwoty pozycyjne (materiał, robocizna, sumy) są liczone co do grosza: ilość z naddatkiem × cena, zaokrąglane połówki od zera, dokładnie jak `ROUND(x, 2)` w arkuszu kalkulacyjnym.

## Procent naddatku

| Wpisujesz | Oznacza |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (puste) | 0% |

Do dwóch miejsc po przecinku, od 0% do 1000%. Komunikaty: „Wpisz procent, na przykład 10 lub 7.5.” albo „Naddatek powyżej 1000% jest niedozwolony.”

## Nazwy i jednostki

- Nazwy pozycji i składników: do 200 znaków.
- {{ui:Jednostka}} składnika: dowolny tekst do 20 znaków, na przykład `EA`, `sheets`, `CY`, `gal`. To tylko etykieta; TakeoffCraft jej nie przelicza.

## Formuły

Formuły zestawów kosztorysowych mają własne reguły: zob. [Język formuł](topic:formulas).
