---
title: Węgiel wbudowany i tabela cen 5D
summary: Węgiel sumuje węgiel wbudowany przedmiaru z ilości każdej pozycji i otwartej tabeli współczynników, a stawki przedmiaru wysyła do BimCraft jako tabelę cen dla kosztów 5D.
keywords: węgiel, węgiel wbudowany, kgCO2e, co2, współczynniki, A1-A3, transport, naddatek, 5d, tabela cen, koszt, bimcraft, EPD
from: f4bff3b8
---

{{ui:Węgiel}} na pasku narzędzi sumuje węgiel wbudowany tego, co zmierzyłeś, i zamienia twoje stawki w tabelę cen, której może użyć model budynku. To szacunek, a nie ocena.

## Węgiel wbudowany

Ilość każdej pozycji, z jej naddatkiem, mnożona jest przez wiersz tabeli współczynników. Wiersz dopasowuje się do słów z nazwy pozycji („płyta betonowa” znajduje wiersz ze słowem kluczowym beton). Tabela jest tą samą otwartą tabelą, której używa BimCraft, więc plik wczytany tutaj działa tam także. **Wiersze dostarczane z programem to wartości startowe: ogólne, niesprawdzone i niepochodzące z żadnej bazy danych.** Okno mówi to przy liczbach; zastąp je własnym źródłem, zanim zaufasz wynikowi.

1. Wybierz {{ui:Węgiel}}. Liczone pozycje wymienione są z ich kilogramami CO2e; suma jest powyżej.
2. Zaznacz {{ui:A4 transport}} lub {{ui:A5 odpady budowy}}, aby policzyć też te etapy, dla wierszy, które podają dla nich wartość. Etap produktu jest zawsze liczony.
3. Aby użyć innego wiersza dla pozycji albo żadnego, użyj listy w jej wierszu.
4. {{ui:Współczynniki z pliku…}} wczytuje tabelę współczynników (JSON lub CSV) z twojego źródła; jej wiersze zastępują wiersze startowe o tym samym id. {{ui:Współczynniki (JSON)}} zapisuje twoje.

Współczynnik dotyczy metra, metra kwadratowego, metra sześciennego, sztuki lub kilograma. Linia zmierzona w stopach lub stopach kwadratowych jest przeliczana. Współczynnik w kilogramach wymaga objętości (jardy sześcienne lub metry) i gęstości z wiersza. Pozycja, której współczynnik wymaga wielkości, której nie mierzy, jest wymieniona pod {{ui:Pominięte}} z przyczyną, nigdy nie zgadywana. Sumaryczny wynik w pasku stanu pokazuje tę samą liczbę.

Twoje wiersze współczynników, twoje wybory i etapy, które liczysz, są zapisane w pliku przedmiaru.

## Tabela cen dla kosztów 5D

{{ui:Ceny 5D (JSON)}} i {{ui:Ceny 5D (CSV)}} zapisują stawki przedmiaru jako tabelę cen: jeden wiersz na wycenioną pozycję, z jej stawką materiału i robocizny za jednostkę oraz jej naddatkiem. Wczytaj ją do panelu kosztów BimCraft (Węgiel wbudowany i koszt 5D), aby wycenić zadania modelu budynku tymi samymi stawkami, które stworzyły ofertę. Pozycje zmierzone w jednostce, której tabela nie ma, oraz pozycje bez stawki są pomijane.

## Z twoim asystentem

Jeśli zezwolisz na asystentów w Ustawieniach, mogą odczytać węgiel (carbon_check). Wczytywanie współczynników należy do ciebie.

## Warto wiedzieć

Nic nie jest nigdzie wysyłane. Wyniki są tylko tak dobre, jak wczytane współczynniki.
