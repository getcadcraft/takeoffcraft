---
title: Odczytywanie ilości i kosztorysu
summary: Korzystaj z tabeli Ilości wg pozycji i wg arkusza, sumy całości, wyróżniania oraz ostrzeżenia Niekompletne.
keywords: ilości, sumy, wg pozycji, wg arkusza, suma całości, kosztorys, podsumowanie, raport, wyróżnianie, niekompletne, koszty
from: 069d41f1
---

Tabela {{ui:Quantities}} u dołu okna to Twój bieżący kosztorys. Zmienia się w chwili, gdy rysujesz, usuwasz, zmieniasz skalę lub edytujesz stawkę. Ilości nigdy nie są zapisywane; są mierzone ponownie z oznaczeń za każdym razem, więc nie mogą się zdezaktualizować.

## Wg pozycji

Wybierz {{ui:By item}} (ustawienie domyślne). Każda pozycja ma wiersz, a każdy jej komponent zestawu kosztorysowego ma wiersz pod nią.

| Kolumna | Znaczenie |
|---|---|
| Pozycja | Nazwa z kolorem pozycji. „+(n) bez skali” oznacza, że część oznaczeń leży na arkuszach bez skali. |
| Ilość | Zmierzona suma w jednostce pozycji (komponenty: wynik wzoru). |
| Jednostka | LF, m, SF, SY, m², EA lub jednostka komponentu. |
| Naddatek % | Wpisany tutaj lub w edytorze pozycji. |
| Z naddatkiem | Ilość × (1 + naddatek). |
| Stawka materiału/jedn., Stawka robocizny/jedn. | Stawki; możesz je wpisać tutaj. |
| Materiał, Robocizna | Z naddatkiem × stawka, zaokrąglone do grosza. |
| Razem | Materiał + robocizna. |

Ostatni wiersz, **Suma całości**, dodaje kolumny materiału, robocizny i razem. Ta sama suma pokazuje się po prawej stronie nagłówka tabeli.

Wpisz w komórkę naddatku lub stawki i naciśnij {{key:Enter}} albo kliknij poza nią, aby ją zastosować. Wartość, której TakeoffCraft nie potrafi odczytać, jest obramowana na czerwono, a pasek stanu podaje powód, np. „Wpisz kwotę, np. 12.50.”

Kliknij wiersz pozycji, aby zaznaczyć jej oznaczenia na każdym arkuszu i przejść do arkusza, który je ma (tak samo jak kliknięcie jej pod {{ui:Items}}).

## Wg arkusza

Wybierz {{ui:By sheet}}, aby zobaczyć ilość każdej pozycji na każdym arkuszu wraz z liczbą oznaczeń. Kliknij wiersz, aby otworzyć ten arkusz z wyróżnioną pozycją. Użyj tego, aby sprawdzić, czy wszystkie arkusze zostały przedmierzone, albo aby podzielić ilości według kondygnacji lub obszaru robót.

## Wg obszaru

Gdy przedmiar ma obszary oferty, {{ui:By area}} wyświetla pozycje każdego obszaru oraz sumę częściową. Zobacz [Obszary oferty](topic:bid-areas).

## Ostrzeżenie Niekompletne

Gdy coś nie zostało uwzględnione w sumach, nagłówek pokazuje ostrzeżenie, np.:

„Niekompletne: 1 błąd wzoru, 6 oznaczeń na arkuszach bez skali (nie są w sumach)”

- **Błędy wzorów**: wzoru komponentu zestawu nie da się obliczyć. Jego wiersz pisze „Błąd wzoru: …”. Zobacz [Zestawy kosztorysowe i wzory](topic:assemblies#when-a-formula-is-wrong).
- **Oznaczenia na arkuszach bez skali**: nadaj tym arkuszom skalę. Zobacz [Ustaw skalę](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Te same uwagi trafiają do wyeksportowanego arkusza kalkulacyjnego, więc niekompletny kosztorys nigdy nie wygląda na kompletny.

## Wyróżnianie pozycji

Kliknij pozycję pod {{ui:Items}} lub w tabeli. Jej oznaczenia pozostają w pełnej intensywności na każdym arkuszu, a reszta gaśnie. Lista arkuszy pokazuje przy każdym arkuszu z jej oznaczeniami „(n) wyróżnione”. Kliknij pozycję ponownie, aby przestać ją wyróżniać.

## Sumy pozycji w panelu bocznym

Każda pozycja na liście {{ui:Items}} też pokazuje swoją ilość. Blok **Zmierzone** w edytorze pozycji pokazuje wartości, których używają jej wzory: długość, odcinki i pole ściany; pole, obwód i liczbę obszarów; albo liczbę.

## Oznaczenia na nieotwartych PDF-ach

Przedmiar może obejmować oznaczenia na PDF-ach, których tym razem nie otworzyłeś. Nadal liczą się we wszystkich sumach; lista arkuszy podaje nazwy tych plików. Zobacz [Zapisywanie i ponowne otwieranie przedmiaru](topic:save-and-reopen).

## Więcej miejsca

Strzałka po prawej stronie nagłówka {{ui:Quantities}} ukrywa tabelę, aby arkusz miał więcej miejsca. Kliknij ją ponownie, aby przywrócić tabelę.
