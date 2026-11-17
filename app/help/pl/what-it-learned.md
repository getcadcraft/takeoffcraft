---
title: Czego program nauczył się z Twoich przedmiarów
summary: TakeoffCraft zachowuje symbole potwierdzone przez Auto liczenie, zestawy warunków, najczęściej używane zestawy kosztorysowe i wzorce powtarzanych znaczników na każdej stronie, wszystko w pliku samego przedmiaru. Zobacz je, użyj ich, usuń.
keywords: ucz się, wyuczone, uczenie, asystent, pamiętaj, symbole, szablony, jak w ostatniej pracy, ostatnia praca, zestaw warunków, warunki, ponowne użycie, zestawy kosztorysowe, najczęściej używane, sugestie, powtórz na każdej stronie, każda strona, tabliczka rysunkowa, wzorzec, wyczyść wszystko, zapomnij, prywatność
from: 54d99e99
---

TakeoffCraft staje się szybszy, im więcej przedmiarów w nim wykonasz. Uczy się **tylko z tego, co zaakceptujesz**:

- symbole, które zaznaczyłeś w [Auto liczenie](topic:auto-count) i potem dodałeś,
- zestawy warunków, które zapiszesz,
- zestawy kosztorysowe, których używasz (raz na pracę),
- wzorce znaczników, które powtarzasz na każdej stronie.

To proste dopasowywanie na Twoich własnych arkuszach, to samo wyszukiwanie, które uruchamia Auto liczenie. Nie jest to wytrenowany model. Wszystko, czego się nauczy, jest zapisane **w pliku tego przedmiaru** (`.takeoff.json`) i nigdzie nie jest wysyłane. Aby przenieść to do następnej pracy, użyj [Jak w ostatniej pracy](topic:what-it-learned#same-as-last-job).

Wybierz {{ui:Wyuczone}} na pasku narzędzi (żarówka, obok {{ui:Auto liczenie}}), aby zobaczyć wszystko.

## Symbole

Gdy zaznaczysz symbol za pomocą {{ui:Auto liczenie}} i wybierzesz {{ui:Dodaj}}, zaznaczony symbol zostaje zapamiętany wraz z poziomem dopasowania, który zaakceptowałeś.

- W {{ui:Wyuczone}} wybierz {{ui:Znajdź na tym arkuszu}} albo {{ui:Znajdź na każdym arkuszu}}. Otwiera się zwykły przegląd Auto liczenia: wybierz ramkę, aby ją pominąć, przesuń suwak, a potem dodaj. Nic nie zostanie dodane, dopóki tego nie zrobisz.
- Gdy otworzysz arkusz, na którym nie ma jeszcze żadnego z wyuczonych symboli, u góry pojawi się pasek z propozycją {{ui:Znajdź …}} dla niego. {{ui:Nie teraz}} ukrywa go dla tego arkusza.
- Jeśli przedmiar nie ma pozycji o tej nazwie, dodanie znaczników dodaje też pozycję (jeden krok cofnięcia).
- Ponowne dodanie symbolu tej samej pozycji liczy się do tej, którą program już zna; symbol wyglądający inaczej zostaje zapisany jako drugi.
- Jak Auto liczenie, znajduje symbol obrócony o kąty proste i na arkuszach w innej skali.

## Zestawy warunków

Zestaw zachowuje warunki przedmiaru (pozycje z ich jednostkami, stawkami, naddatkiem i zestawami kosztorysowymi), bez znaczników.

1. W {{ui:Wyuczone}} wybierz {{ui:Zapisz warunki tego przedmiaru jako zestaw…}} i nadaj nazwę. Zestaw o tej samej nazwie zostanie zastąpiony.
2. W przedmiarze, który ma dany zestaw, {{ui:Dodaj}} wstawia warunki, których jeszcze nie ma. Warunki o tej samej nazwie i typie pozostają bez zmian. To jeden krok cofnięcia.

## Jak w ostatniej pracy

Plik ostatniej pracy zawiera to, czego się nauczył. Aby zacząć nową pracę od tego:

1. Otwórz nowe pliki PDF i wybierz {{ui:Wyuczone}} › {{ui:Jak w ostatniej pracy…}}.
2. Wskaż `.takeoff.json` ostatniej pracy.
3. Zaznacz, co wprowadzić: jej warunki (tylko te, których ten przedmiar nie ma) oraz to, czego się nauczyła (symbole, zestawy, zestawy kosztorysowe, wzorce). Następnie wybierz {{ui:Wprowadź je}}.

Jej warunki są też zapisane jako zestaw o nazwie tej pracy. Jej znaczniki i ilości zostają w jej własnym pliku. Całość to jeden krok cofnięcia.

## Zestawy kosztorysowe, których używasz najczęściej

Pozycja, która ma zestaw kosztorysowy, liczy się jako użyta raz na pracę, gdy ma ilość i zapisujesz przedmiar. Praca to zbiór plików planów, z których zdejmowany jest przedmiar, więc ponowne zapisanie tego samego przedmiaru nie liczy się dwa razy. Lista pod {{ui:Najczęściej używane zestawy kosztorysowe}} stawia na początku te, których używasz najczęściej. Pomija te, które ten przedmiar już ma. {{ui:Dodaj}} wstawia jeden z nich tak, jak ostatnio go użyłeś, ze wszystkimi częściami.

## Powtórz na każdej stronie

Dla znaczników, które są takie same na każdej stronie zestawu, jak liczba tabliczek rysunkowych albo typowy detal:

1. Zaznacz znaczniki na jednym arkuszu ([Zaznacz znaczniki](topic:copy-paste#select-the-marks)).
2. W {{ui:Wyuczone}} wybierz {{ui:Powtórz zaznaczone znaczniki na każdej stronie…}}, nazwij wzorzec i potwierdź.

Trafią na każdą inną otwartą stronę **tego samego rozmiaru**, w tym samym miejscu, w jednym kroku cofnięcia. Długości i pola trafiają tylko na strony o tej samej skali; liczby trafiają na każdą stronę tego rozmiaru. Strona, która już je ma, jest pomijana. Wzorzec zostaje zapisany, więc strony otwarte później dostaną propozycję na pasku albo użyjesz {{ui:Powtórz na każdej stronie}} z listy.

## Zobacz, usuń

Wszystko, czego się nauczono, jest wypisane w {{ui:Wyuczone}}. Kosz usuwa jedną rzecz. {{ui:Wyczyść wszystko}} usuwa wszystko, czego się nauczono, i nie rusza pozycji ani znaczników. Obie operacje można cofnąć aż do zamknięcia przedmiaru, a obie są zapisywane razem z przedmiarem.

Aby przestać się uczyć w jednym przedmiarze, odznacz {{ui:Ucz się z tego przedmiaru}}. Nic nowego nie zostanie zapamiętane, a to, co jest na liście, zostaje, dopóki go nie usuniesz.

## Warto wiedzieć

- Starsze wersje TakeoffCraft otwierają plik z wyuczonymi rzeczami normalnie. Ignorują tę część i odrzucają ją, jeśli zapiszą plik ponownie.
- Wyuczony symbol to mały obrazek tego, co zaznaczyłeś, zapisany w pliku (po kilka kilobajtów każdy).
- Wyuczone symbole są wyszukiwane jak w Auto liczeniu, więc obowiązują te same ograniczenia: [Auto liczenie symbolu](topic:auto-count).
