---
title: Policz wszystko w zestawie
summary: Zaznacz raz legendę symboli, a TakeoffCraft policzy każdy symbol z niej na każdym otwartym arkuszu w jednym przebiegu. Każde liczenie jest linkiem do swojego arkusza, a przed dodaniem czegokolwiek go sprawdzasz.
keywords: policz wszystko, legenda, legenda symboli, cały zestaw, każdy arkusz, wszystkie arkusze, wszystkie drzwi, każde wyposażenie, urządzenia, zestawienie, symbole, auto liczenie, policz wszystkie, zestaw planów, 200 arkuszy, poziom dopasowania, podobne
from: adc99744
---

{{ui:Policz wszystko}} czyta legendę symboli, a następnie liczy każdy symbol z niej na każdym otwartym arkuszu. To {{ui:Auto liczenie}} dla całej legendy naraz. Jest to zwykłe dopasowywanie symboli na twoich arkuszach, a nie wytrenowany model, i nic nie opuszcza twojego komputera. Przejrzyj liczenia, zanim je dodasz: to pomocnik, a nie gwarancja.

## Liczenie legendy

1. Otwórz plany. Wystarczy legenda na dowolnym arkuszu: symbole z obok wypisanymi nazwami.
2. Wybierz {{ui:Policz wszystko}} na pasku narzędzi.
3. Przeciągnij prostokąt wokół legendy, symboli i nazw. Tytuł bez symbolu obok (SYMBOL LEGEND) jest pomijany sam.
   Panel wypisuje każdy symbol z jego obrazkiem i nazwą wydrukowaną obok. Nazwa staje się nazwą pozycji, więc w razie potrzeby zmień ją tutaj.
4. Odznacz symbole, których nie chcesz liczyć. Symbol, którego nie da się przeszukać (zbyt mały lub pusty), ma podany powód.
5. Wybierz {{ui:Policz na N arkuszach}}. Pasek pokazuje przeszukiwany arkusz; {{ui:Anuluj}} zatrzymuje przebieg. Strona pozostaje używalna.

Symbole samej legendy nie są liczone na jej arkuszu. Arkusz narysowany w innej skali jest przeszukiwany w tej skali, a symbole są szukane obrócone o dowolny kąt prosty.

## Przeglądanie liczeń

- Każdy symbol pokazuje swoją sumę, a pod nią link dla każdego arkusza, na którym coś jest („E-103: 4”). Kliknij go, aby przejść do tego arkusza. Znaleziska są obramowane w kolorze pozycji.
- **Kliknij ramkę**, aby wykluczyć dane znalezisko. Jest wtedy przerywana i przekreślona; kliknij ponownie, aby je przywrócić.
- **Przesuń poziom dopasowania** (od 50% do 100%, zaczynając od poziomu z Ustawień). Wyższy zostawia tylko bliskie dopasowania. Suwak tylko filtruje to, co znaleziono; nic nie jest szukane ponownie.
- Dwa podobne symbole (np. gniazdo podwójne i poczwórne) mogą pasować do tego samego miejsca. Lepsze dopasowanie je przejmuje, a panel podaje, na ilu miejscach tak się stało, abyś mógł je sprawdzić.
- Arkusz zbyt duży, by przeszukać go w rozmiarze symbolu, jest pomijany, a panel to mówi.

## Dodawanie

Wybierz {{ui:Dodaj N oznaczeń}}. Każdy symbol staje się pozycją liczoną z oznaczeniem przy każdym znalezisku. Nazwa, która już jest twoją pozycją liczoną, zostaje użyta ponownie (nic nie jest dublowane tam, gdzie już zaznaczyłeś ręcznie). Cały przebieg to jeden krok: {{key:Ctrl+Z}} cofa wszystkie pozycje i oznaczenia.

Co zaakceptujesz, trafia też do {{ui:Wyuczone}}: symbole są zapamiętywane w pliku przedmiaru na następny raz.

## Z twoim asystentem

Jeśli w Ustawieniach zezwolisz na asystentów, mogą oni czytać legendę (legend_open), uruchamiać liczenie w tle (legend_count_start, a potem legend_count_status), czytać wyniki (legend_count_result) i je dodawać (legend_count_add, który może najpierw pokazać podgląd tego, co by dodał). To ten sam przebieg, który widzisz w panelu.

## Symbole pod dowolnym kątem

Zaznacz {{ui:Symbole pod dowolnym kątem}} przed liczeniem, aby znaleźć też symbole narysowane pod kątem innym niż prosty (ukośna wtyczka w ścianie, oprawa obrócona zgodnie z dachem). Wyszukiwanie obraca wtedy każdy symbol co 15 stopni; symbol okrągły nadal wymaga jednego przeszukania, a symbol nieokrągły może zabrać do sześciu razy więcej czasu. Zostaw to wyłączone dla planów rysowanych w kątach prostych.

## Dobrze wiedzieć

- Potrzebuje symboli narysowanych tak samo jak w legendzie. Legenda narysowana w innym rozmiarze niż arkusze jest w porządku, gdy skale arkuszy są ustawione; bez skal symbole są szukane w rozmiarze legendy.
- Symbol, przez który przechodzi ściana lub długa linia, może zostać pominięty, bo nie wygląda już jak obrazek z legendy. Sprawdź znaleziska na pierwszym arkuszu, zanim zaufasz reszcie.
- Skan bez tekstu nadal działa: symbole są znajdowane po rzędach, a nazwy wpisujesz ręcznie.
