---
title: Grupy typowe
summary: Zmierz typową jednostkę, pokój lub kondygnację raz i licz ją tyle razy, ile się powtarza, zmieniaj liczbę później i zobacz, które znaczniki są typowe.
keywords: typowe, grupa typowa, powtórzenie, liczba powtórzeń, mnożenie, razy, jednostka, pokój hotelowy, apartament, typowa kondygnacja, x24, kopie
from: 42c3a372
---

Budynek często się powtarza: 24 identyczne pokoje hotelowe, 6 typowych kondygnacji, 40 miejsc parkingowych z takim samym oznakowaniem. **Grupa typowa** pozwala zmierzyć jedną z nich i liczyć ją tyle razy, ile się powtarza, bez rysowania kopii.

## Utwórz grupę typową

1. Zmierz jedną jednostkę: jej ściany, podłogę, gniazda, dowolne pozycje.
2. Zaznacz jej znaczniki narzędziem {{ui:Zaznacz}}: kliknij jeden, a następnie {{key:Shift}} + kliknij pozostałe ([Zaznacz znaczniki](topic:copy-paste#select-the-marks)).
3. W sekcji **Wybrany znacznik** otwórz {{ui:Typowa}} i wybierz {{ui:Nowa typowa grupa…}}.
4. Nadaj jej nazwę (`Jednostka A`) i podaj, ile razy się powtarza (`24`), a następnie wybierz {{ui:Utwórz grupę}}.

Każda ilość tych znaczników liczy się teraz 24 razy: odcinek ściany 10 ft daje 240 ft, podłoga 80 SF to 1,920 SF, dwa gniazda to 48. Koszty idą za tym, a formuły zestawów widzą powtórzone sumy (`N` też liczy każdy odcinek 24 razy).

Na arkuszu przerywana ramka obejmuje znaczniki grupy wraz z jej nazwą i liczbą, na przykład **Jednostka A ×24**.

## Zmień później

Grupy są wymienione w sekcji **Grupy typowe** w prawym panelu:

- Zmień liczbę po **×**, aby zmienić, ile razy się liczy (od 1 do 10,000). Każda ilość się aktualizuje.
- Zmień nazwę w jej polu nazwy.
- Ikona pudełka zaznacza jej znaczniki (i pokazuje ich arkusz).
- Kosz usuwa grupę. Jej znaczniki zostają, liczone raz.

Aby dodać znaczniki do grupy albo je z niej usunąć, zaznacz je i wybierz grupę (lub {{ui:Nietypowe (×1)}}) w sekcji {{ui:Typowa}}.

## Warto wiedzieć

- Znaczniki grupy mogą leżeć na kilku arkuszach i należeć do dowolnych pozycji. Każdy znacznik może należeć co najwyżej do jednej grupy.
- Wklejone kopie nie należą do grupy: wklejona kopia typowej jednostki liczyłaby się znowu 24 razy. Użyj grupy do „tego samego N razy”, a kopiowania i wklejania do kopii, które rysujesz.
- Znaczniki są rysowane raz, więc widok 3D i oznaczony PDF pokazują jedną jednostkę; ilości, eksporty i tabela na arkusz liczą ją ×N. Arkusz **Marks** w eksporcie Excela mówi, które znaczniki są typowe i ile razy się liczą.
- Przy obszarach oferty znaczniki grupy liczą się ×N we własnym obszarze oferty.
