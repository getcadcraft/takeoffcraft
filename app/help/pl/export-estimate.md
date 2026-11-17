---
title: Eksport kosztorysu i oznaczonego PDF
summary: Pobierz kosztorys jako skoroszyt XLSX z żywymi formułami albo jako CSV oraz kopie PDF z narysowanym przedmiarem.
keywords: propozycja, podsumowanie oferty, eksport, xlsx, arkusz kalkulacyjny, skoroszyt, csv, oznaczony pdf, drukowanie przedmiaru, raport, udostępnianie, wysyłanie, legenda
from: 334f89c7
---

Eksporty są pobieraniami. Powstają na tym komputerze z przedmiaru i otwartych plików PDF; nic nie jest nigdzie wysyłane.

## Kosztorys jako arkusz (XLSX)

1. Otwórz menu {{ui:Eksport}} na pasku narzędzi i wybierz {{ui:XLSX}}.
   Przeglądarka pobiera `(name).xlsx`. Pasek stanu pokazuje „Wyeksportowano (name).xlsx (kosztorys z żywymi formułami, według arkusza, znaczników, skal).” i dodaje ostrzeżenie, gdy kosztorys jest niepełny.
2. Otwórz go w arkuszu kalkulacyjnym.

Skoroszyt ma cztery arkusze oraz poniższe zestawienia, gdy mają zastosowanie:

| Arkusz | Zawartość |
|---|---|
| Kosztorys | Wiersz na pozycję i na składnik: ilość, naddatek, ilość z naddatkiem, ceny, materiał, robocizna, razem, uwagi. Suma całości na dole. |
| Według arkusza | Ilość każdej pozycji na każdym arkuszu wraz z liczbą znaczników. |
| Znaczniki | Każdy znacznik: arkusz, pozycja, typ, ilość i szczegóły (długości odcinków, pola brutto i wycięć, obwód). |
| Skale | Każdy arkusz z skalą lub znacznikami: jego skala, sposób ustawienia (ustawienie gotowe albo kalibracja na podanej odległości) i stopy na jednostkę PDF. |
| Podsumowanie przedmiaru | Ilość każdej pozycji, numer CSI, znaczniki i arkusze, bez cen. |
| Zestawienie materiałów | Każdy element zestawu kosztorysowego zsumowany w całym przedmiarze (ten sam element użyty w kilku pozycjach to jedna linia), z naddatkiem i kosztem materiału oraz pozycjami, które go używają. |
| Zapytanie ofertowe | Zestawienie materiałów do wysłania dostawcy: ilości z naddatkiem, pusta kolumna cen jednostkowych oraz wartości i suma, które wypełniają się w miarę wpisywania cen. |
| Według działów | Materiał, robocizna i razem według działu CSI MasterFormat, gdy pozycje mają {{ui:Numer CSI}}. |

Przy [podsumowaniu oferty](topic:bid-summary) arkusz Kosztorys kończy się również narzutami (obciążenia robocizny, podatek od sprzedaży, koszty ogólne, zysk, zabezpieczenie i oferta) jako żywe formuły.

Arkusz Kosztorys zachowuje **żywe formuły**: ilość z naddatkiem, zaokrąglone kwoty materiału i robocizny, sumę każdego wiersza oraz sumę całości. Programy arkuszowe przeliczają je, więc możesz zmienić cenę lub naddatek w arkuszu, a sumy pójdą za tym. Liczby obliczone przez TakeoffCraft są też zapisane w komórkach i zgadzają się co do grosza.

Kolumna uwag wymienia formułę każdego składnika, błędy formuł, znaczniki na arkuszach bez skali, pole ścian i obwód. Gdy coś zostało pominięte, wiersz sumy całości mówi „Niepełne: zob. uwagi powyżej”.

Skoroszyt sprawdzono w LibreOffice Calc, który przeliczył go do tych samych sum. Nie był jeszcze otwierany w Excelu. Szczegóły kolumna po kolumnie są w [Kolumny eksportu](topic:export-columns).

## Kosztorys jako CSV

Otwórz menu {{ui:Eksport}} i wybierz {{ui:CSV}}. Otrzymasz `(name).csv`: te same wiersze i kolumny co w arkuszu Kosztorys, jako zwykłe wartości (bez formuł), oraz sumę całości. Użyj go, by wkleić dane do innego systemu kosztorysowego lub księgowego.

CSV zawiera tylko kosztorys; ilości według arkusza i listę znaczników weź z XLSX. {{ui:Zestawienie materiałów}} w tym samym menu zapisuje samo zestawienie materiałów jako CSV, do zamówień.

## Kosztorys w Google Sheets

Nad tabelą Ilości **Kopiuj do Google Sheets** umieszcza kosztorys w schowku jako tekst rozdzielany tabulatorami, z tymi samymi wierszami co CSV. W arkuszu Google kliknij komórkę A1 i wklej. TakeoffCraft nie loguje się do Google i niczego tam nie wysyła.

## Brakujące ceny i zatwierdzenie

Wiersz z ilością bez ceny ma w uwagach **Brak ceny**, a eksport uwzględnia go w sumach. Gdy kosztorys został zatwierdzony, eksport podaje, kto go zatwierdził, kiedy i na jaką sumę. Zob. [Brakujące ceny i zatwierdzanie kosztorysu](topic:sign-off-the-estimate).

## Oznaczony PDF

1. Otwórz PDF-y, których znaczniki chcesz narysować.
2. Otwórz menu {{ui:Eksport}} i wybierz {{ui:PDF z oznaczeniami}}.
   Pojawia się „Zapisywanie oznaczonego PDF…”, a potem przeglądarka pobiera jeden plik na każdy oznaczony PDF, nazwany `(PDF name) (takeoff).pdf`.

W kopii:

- odcinki są rysowane jako linie w kolorze swojej pozycji,
- pola są lekko wypełnione z ciągłym obrysem, a wycięcia pozostawione puste,
- liczenia są kropkami,
- każda strona ze znacznikami dostaje małą legendę w lewym dolnym rogu: kolor, nazwę i ilość każdej pozycji na tej stronie.

Oryginalne pliki PDF nie są zmieniane.

Uwagi:

- Zapisywane są tylko otwarte PDF-y. Znaczniki na nieotwartych PDF-ach pozostają w sumach, ale nie są rysowane; najpierw otwórz te pliki.
- Nazwy w legendzie używają standardowej czcionki PDF. Litery, których nie da się pokazać, drukowane są jako „?”.
- Zaszyfrowanego PDF-a nie można skopiować ze znacznikami: „Ten PDF jest chroniony hasłem lub zaszyfrowany, więc kopii ze znacznikami nie da się zapisać. Sam przedmiar jest w porządku; wyeksportuj zamiast tego arkusz kalkulacyjny.”
- Pierwszy {{ui:PDF z oznaczeniami}} w karcie wczytuje moduł zapisu PDF. Offline jest on dostępny tylko wtedy, gdy pasek aplikacji pokazuje {{ui:Gotowe offline}}; zob. [Praca offline](common:offline).

:::chromium
Przy kilku oznaczonych PDF-ach Chrome i Edge mogą raz zapytać, czy ta strona może pobierać wiele plików. Wybierz Zezwól, inaczej otrzymasz tylko pierwszy plik.
:::

## Nic do wyeksportowania?

- {{ui:XLSX}} i {{ui:CSV}} wymagają co najmniej jednej pozycji: „Nic jeszcze nie ma do wyeksportowania: utwórz pozycję i zmierz ją.”
- {{ui:PDF z oznaczeniami}} wymaga znaczników na otwartym PDF-ie: „Na otwartych PDF-ach nie ma jeszcze znaczników.”

## Zapisz też przedmiar

Eksport to raport. Aby później dalej pracować nad przedmiarem, wybierz też {{ui:Zapisz przedmiar}}: zob. [Zapisywanie i ponowne otwieranie przedmiaru](topic:save-and-reopen).

Aby dodać koszty ogólne, zysk, podatek i zabezpieczenie oraz wysłać propozycję, zob. [Podsumowanie oferty i propozycja](topic:bid-summary).
