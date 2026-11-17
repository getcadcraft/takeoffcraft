---
title: Kolumny eksportu
summary: Każdy arkusz i kolumna eksportu XLSX oraz CSV, wraz z formułami, które zawiera arkusz Kosztorys.
keywords: eksport, kolumny, xlsx, csv, arkusz, kosztorys, według arkusza, znaczniki, skale, formuły, pola
from: fed07851
---

## Kosztorys (arkusz XLSX i CSV)

Jeden wiersz na pozycję, po nim wiersz na każdy składnik jej zestawu (z wcięciem). Następnie pusty wiersz i suma całości.

| Kolumna | Zawartość | W XLSX |
|---|---|---|
| A Pozycja | Nazwa pozycji (pogrubiona) lub nazwa składnika (z wcięciem) | Tekst |
| B Typ | Linear, Area, Count lub Component | Tekst |
| C Jednostka | LF, m, SF, SY, m², EA lub jednostka składnika | Tekst |
| D Ilość | Zmierzona suma lub wynik formuły | Liczba |
| E Naddatek % | Naddatek | Procent (0.10 = 10%) |
| F Ilość z naddatkiem | Ilość × (1 + naddatek) | Formuła `D*(1+E)` |
| G Materiał za jednostkę | Cena materiału | Liczba |
| H Robocizna za jednostkę | Cena robocizny | Liczba |
| I Materiał | Kwota materiału | Formuła `ROUND(F*G,2)` |
| J Robocizna | Kwota robocizny | Formuła `ROUND(F*H,2)` |
| K Razem | Materiał + robocizna | Formuła `I+J` |
| L Uwagi | Użyta formuła, błąd formuły, znaczniki na arkuszach bez skali, pole ścian, obwód | Tekst |

Wiersz sumy całości: `SUM` kolumn I, J i K po wszystkich wierszach powyżej oraz „Niepełne: zob. uwagi powyżej” w kolumnie Uwagi, gdy coś zostało pominięte.

Wiersz z błędem formuły nie ma ilości ani kwot; jego uwaga podaje błąd. Wiersz nagłówka jest zablokowany.

W CSV te same kolumny zawierają zwykłe wartości, Naddatek % to liczba procent (10 dla 10%), a pieniądze są w dolarach z dwoma miejscami po przecinku. Tekst, który arkusz mógłby uznać za formułę (zaczynający się od `=`, `+`, `-` lub `@`), dostaje wiodący `'`, by pozostał tekstem.

## Według arkusza (tylko XLSX)

| Kolumna | Zawartość |
|---|---|
| Arkusz | Nazwa arkusza (z nazwą PDF, gdy nie jest otwarty) |
| Pozycja | Nazwa pozycji |
| Ilość | Ilość tej pozycji na tym arkuszu, w jej jednostce |
| Jednostka | Jednostka pozycji |
| Znaczniki | Liczba znaczników |

## Znaczniki (tylko XLSX)

Jeden wiersz na znacznik.

| Kolumna | Zawartość |
|---|---|
| Arkusz | Nazwa arkusza |
| Pozycja | Nazwa pozycji |
| Typ | Linear, Area lub Count |
| Ilość | Długość, pole netto lub 1 |
| Jednostka | LF lub m; SF, SY lub m²; EA |
| Szczegóły | Linear: długości odcinków, odliczone oznaczone „(odliczenie)” oraz „odlicza (length) z narysowanych (length)”. Area: pola brutto i wycięć, gdy są wycięcia, oraz obwód. „Arkusz nie ma skali” dla znaczników bez skali. |
| Obszar oferty | Tylko gdy przedmiar ma obszary oferty: obszar znacznika albo „Brak obszaru oferty” |

## Według obszaru oferty (tylko XLSX, gdy przedmiar ma obszary oferty)

| Kolumna | Zawartość |
|---|---|
| Obszar oferty | Nazwa obszaru albo „Brak obszaru oferty” |
| Pozycja | Pozycja albo wcięty pod nią składnik |
| Jednostka | Jednostka pozycji lub składnika |
| Ilość | Zmierzona na tym obszarze (składniki: formuła na sumach obszaru) |
| Ilość z naddatkiem | Ilość × (1 + naddatek) |
| Materiał, Robocizna, Razem | Liczone co do grosza, jak w arkuszu Kosztorys |
| Uwagi | Formuła, błędy i znaczniki bez skali, jak w arkuszu Kosztorys |

Każdy obszar kończy się wierszem „(nazwa) suma częściowa”, którego koszty są formułami `SUM` po jego wierszach; ostatni wiersz, **Wszystkie obszary oferty**, dodaje sumy częściowe. Arkusz **Znaczniki** ma wtedy siódmą kolumnę, **Obszar oferty**.

## Skale (tylko XLSX)

Jeden wiersz na arkusz, który ma skalę lub znaczniki.

| Kolumna | Zawartość |
|---|---|
| Arkusz | Nazwa arkusza |
| Skala | Nazwa ustawienia gotowego, skala skalibrowana albo „Brak skali” |
| Sposób | „Ustawienie gotowe” albo „Skalibrowano na (odległość, którą wpisano)” |
| Stopy na jednostkę PDF | Dokładny współczynnik skali używany przez TakeoffCraft |

## Nazwy plików

- `(name).xlsx` i `(name).csv`, gdzie nazwa pochodzi z pierwszego PDF-a otwartego w przedmiarze.
- CSV jest w UTF-8 ze znacznikiem BOM i końcami wierszy w stylu Windows, które odczytują programy arkuszowe na każdej platformie.
