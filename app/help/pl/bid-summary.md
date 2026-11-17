---
title: Podsumowanie oferty i oferta
summary: Dodaj obciążenie robocizny, podatek od sprzedaży, koszty ogólne, zysk i zabezpieczenie do kosztorysu, wpisz zakres objęty i wyłączony oraz pobierz PDF oferty do wysłania.
keywords: oferta, obciążenie robocizny, obciążenie, płace, propozycja, wycena, koszty ogólne, zysk, narzut, marża, podatek od sprzedaży, zabezpieczenie, zakres objęty, zakres wyłączony, warunki, podpis, klient, cena
from: 3208a561
---

Kosztorys wycenia to, co przedmiarowałeś. **Podsumowanie oferty** zamienia go w cenę: dodaje podatek od sprzedaży, koszty ogólne, zysk i zabezpieczenie oraz tworzy **PDF oferty** z twoim zakresem objętym i wyłączonym.

Otwórz je z {{ui:Eksport}} › {{ui:Podsumowanie oferty i oferta…}}. Wszystko w nim jest zapisane razem z przedmiarem, a każdą zmianę można cofnąć.

## Narzuty

Wpisz procent w dowolnym z pięciu pól (pozostałe zostaw na 0). Liczone są w tej kolejności, każdy od tego, co jest powyżej:

| Linia | Liczone jako |
|---|---|
| Materiał, Robocizna | Sumy kosztorysu (oferta podstawowa, gdy przedmiar ma [warianty](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Obciążenie robocizny | % obciążenia × robocizna: podatki od wynagrodzeń, ubezpieczenia i świadczenia od płac twoich ekip. |
| **Koszt** | Materiał + robocizna + obciążenie robocizny. |
| Podatek od sprzedaży na materiał | % podatku × materiał. |
| Koszty ogólne | % kosztów ogólnych × (koszt + podatek). |
| Zysk | % zysku × (koszt + podatek + koszty ogólne). |
| Zabezpieczenie | % zabezpieczenia × wszystko powyżej. |
| **Oferta** | Suma linii. |

Każda linia jest zaokrąglana do grosza. Skoroszyt pokazuje te same linie pod sumą arkusza Kosztorys, jako żywe formuły. Podsumowanie aktualizuje się podczas pisania: {{key:Enter}} zatwierdza procent. Każdy wariant pokazuje się z tymi samymi narzutami na własnym koszcie, dzięki czemu właściciel widzi, co naprawdę zmienia jego wybór.

## Oferta

Wypełnij to, co ma mówić oferta:

- **Projekt** (nazwa przedmiaru, gdy pole jest puste), **Do** (klient) i **Od** (twoja firma).
- **Zakres objęty** i **Zakres wyłączony**: po jednej pozycji w wierszu; myślnik lub punktor na początku wiersza jest w porządku.
- **Warunki**: swobodny tekst, na przykład „Ważne przez 30 dni.”
- **Wymień pozycje i ilości**: zakres pozycja po pozycji, z ilościami i bez cen. Odznacz, aby uzyskać ofertę ryczałtową.

Wybierz {{ui:Oferta w PDF}}. PDF (`<takeoff> - proposal.pdf`) zawiera datę, blok cen z każdym narzutem i ofertą, warianty, zakres, zakres objęty i wyłączony, warunki oraz linie do podpisu i daty. Jeśli niektórych ilości nie dało się zmierzyć (arkusz bez skali), mówi o tym pod ceną.

## W eksportach

Gdy przedmiar ma podsumowanie oferty, CSV kończy się nim, a skoroszyt dostaje arkusz **Podsumowanie oferty** z każdą linią, jej procentem i kwotą. Zobacz [Eksport kosztorysu](topic:export-estimate).
