---
title: Ustawianie skali
summary: Nadaj każdemu arkuszowi skalę gotową lub przez kalibrację na znanym wymiarze, sprawdź ją i zrozum, dlaczego arkusze bez skali są pomijane w sumach.
keywords: wykryj skalę, odczytaj skalę, skala z tekstu, wszystkie arkusze, skala, kalibruj, gotowa skala, sprawdź skalę, weryfikuj, znany wymiar, bez skali, brak skali, proporcja, ustaw skalę
from: 8f0148e6
---

Każdy arkusz ma własną skalę. Ustawiasz ją albo pozwalasz TakeoffCraft odczytać ją z tekstu arkuszy (poniżej) i ją sprawdzasz. Dopóki arkusz jej nie ma, {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} i {{ui:Cut-out}} odmawiają pomiaru na nim. {{ui:Count}} i {{ui:Auto count}} działają bez skali.

Lista arkuszy pokazuje skalę każdego arkusza albo **Brak skali**. Pasek pod otwartym arkuszem mówi to samo.

## Użyj gotowej skali (gdy PDF jest wydrukowany w pełnym rozmiarze)

1. Otwórz arkusz.
2. Otwórz listę {{ui:Preset}} w grupie {{ui:Scale}}.
3. Wybierz skalę wydrukowaną na rysunku, np. `1/8" = 1'-0"` w grupie Architektoniczne.
   Pasek stanu pisze „Skala dla tego arkusza: 1/8" = 1'-0".”
4. Sprawdź ją (poniżej).

Gotowa skala zakłada, że PDF ma rzeczywisty rozmiar papieru, na który rysunek był wykonany. Jeśli ktoś zrobił PDF z opcją „dopasuj do strony” albo jest to zestaw w połowie rozmiaru, gotowa skala jest błędna. Zamiast tego skalibruj.

Pełna lista: [Gotowe skale](topic:scale-presets).

## Odczytaj skale z tekstu arkuszy

Większość rysunków podaje swoją skalę: `SCALE: 1/4" = 1'-0"` w tabliczce rysunkowej, `1:100` pod widokiem. TakeoffCraft może ją odczytać i ustawić każdy arkusz naraz.

1. Otwórz listę {{ui:Preset}} i wybierz „Z tekstu arkuszy…” (na górze).
2. Lista pokazuje każdy arkusz: jego obecną skalę i to, co mówi jego tekst — **Podaje 1/4" = 1'-0"**, **Brak skali w tekście** albo **Podaje: nie w skali (NTS)**.
3. Arkusze bez skali, które ją podają, są zaznaczone. Zaznacz lub odznacz dowolne, a następnie wybierz {{ui:Set the ticked scales}}. Jedno {{key:Mod+Z}} cofa je wszystkie.
4. Sprawdź jeden wymiar na każdym arkuszu za pomocą {{ui:Check}} (poniżej): gotowa skala jest poprawna tylko wtedy, gdy PDF jest wydrukowany w pełnym rozmiarze.

Odczytuje zapisy architektoniczne (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inżynierskie (`1" = 20'`) i metryczne (`1:50`), które pasują do [gotowej skali](topic:scale-presets). Gdy arkusz podaje więcej niż jedną skalę (rzut z powiększonymi detalami), bierze tę, którą podaje najczęściej; zapis po słowie SCALE liczy się podwójnie. Pozostałe są pokazane na czerwono, abyś je sprawdził. Skan arkusza nie ma tekstu: ustaw jego skalę ręcznie.

## Kalibracja na znanym wymiarze

Użyj tego, gdy nie ma wydrukowanej skali, której ufasz, zestaw został przeskalowany albo arkusz mówi „nie w skali”, ale ma wymiary.

1. Otwórz arkusz i przybliż długi wymiar, który znasz, np. odstęp osi siatki albo ogólny wymiar budynku. Im dłuższy, tym dokładniejszy wynik.
2. Wybierz {{ui:Calibrate}} w grupie {{ui:Scale}} albo naciśnij {{key:K}}.
3. Kliknij jeden koniec wymiaru. Przybliż każdy koniec dla precyzji; możesz przybliżać i przesuwać widok między kliknięciami.
4. Kliknij drugi koniec. Przytrzymaj {{key:Shift}}, aby linia pozostała pod kątem 0°, 45° lub 90°.
   Otwiera się okno dialogowe **Skalibruj ten arkusz**.
5. Wpisz rzeczywistą odległość w polu **Rzeczywista odległość**, np. `24'-6 1/2"`, `24.5` (dziesiętne stopy), `30"` lub `7.5 m`. Zobacz [Wpisywanie długości, stawki i procentów](topic:entry-formats).
6. Wybierz {{ui:Set the scale}}.
   Pasek stanu pokazuje skalę jako „1" = (n)'”, a gdy mieści się w 0.5% gotowej skali, podaje, która, np. „co odpowiada 1/4" = 1'-0" (wybierz tę gotową skalę, aby uzyskać dokładną skalę)”.
   TakeoffCraft wraca do narzędzia {{ui:Select}}.

Gdy kalibracja odpowiada gotowej skali, wybór tej skali daje dokładną skalę zamiast takiej, która zależy od miejsca kliknięcia.

## Sprawdź skalę

Zawsze sprawdź nową skalę na drugim wymiarze.

1. Wybierz {{ui:Check}} w grupie {{ui:Scale}} albo naciśnij {{key:D}}.
2. Kliknij oba końce wymiaru wydrukowanego na rysunku.
   Pasek stanu pokazuje „Sprawdź: 12'-6"” z tą samą długością w dziesiętnych stopach i metrach, a linia sprawdzenia pozostaje na arkuszu wraz ze swoją długością.
3. Porównaj ją z wymiarem wydrukowanym. Jeśli się nie zgadza, skalibruj na dłuższym wymiarze.

Naciśnij {{key:Esc}}, aby usunąć linię sprawdzenia.

## Zmiana skali

Wybierz inną gotową skalę albo skalibruj ponownie. Jeśli arkusz ma już pomiary, TakeoffCraft zapyta **Zmienić skalę tego arkusza?** i poda, ile pomiarów zostanie zmierzonych ponownie. Wybierz {{ui:Change the scale}}. Każdy odcinek i obszar na arkuszu zostanie zmierzony ponownie w nowej skali. Możesz to cofnąć przez {{key:Mod+Z}}.

## Dlaczego arkusze bez skali nie są liczone jako zero

Oznaczenie na arkuszu bez skali nie ma rzeczywistej długości ani pola. TakeoffCraft nigdy nie liczy go jako zera, bo po cichu zaniżyłoby to kosztorys. Zamiast tego:

- pomija te oznaczenia w sumach,
- pokazuje „+(n) bez skali” obok pozycji w {{ui:Quantities}},
- pokazuje „Niekompletne: (n) oznaczeń na arkuszach bez skali (nie są w sumach)” w nagłówku tabeli,
- wpisuje liczbę do kolumny uwag w eksporcie arkusza kalkulacyjnego.

Może się to zdarzyć, gdy otworzysz projekt, którego skale nigdy nie zostały ustawione. Nadaj arkuszowi skalę, a oznaczenia zostaną policzone od razu. Oznaczenia liczenia są zawsze liczone; nie potrzebują skali.

## Wskazówki

- Ustaw skalę na każdym arkuszu, który będziesz mierzyć, zanim zaczniesz. Przejrzyj listę arkuszy w poszukiwaniu **Brak skali**, aby znaleźć pozostałe (pole wyszukiwania patrzy na nazwy arkuszy, nie na skale).
- Detale i powiększone rzuty na tym samym arkuszu często używają innej skali. TakeoffCraft ma jedną skalę na arkusz; zobacz [Czego jeszcze nie ma](topic:not-built-yet).
- Rysunki metryczne: wybierz metryczną gotową skalę, np. `1:100`, albo skalibruj metryczną odległością, np. `6000 mm`.
