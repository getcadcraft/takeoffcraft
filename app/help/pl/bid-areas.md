---
title: Obszary przetargowe
summary: Oznaczaj znaczniki według budynku, piętra lub etapu, przedmiarowuj do jednego obszaru naraz i odczytuj ilości oraz koszty dla każdego obszaru.
keywords: wariant dodatkowy, wariant odliczeniowy, oferta podstawowa, warianty, obszar przetargowy, obszar, budynek, piętro, poziom, etap, strefa, wariant, podział, typowe piętro, suma częściowa, wg obszaru
from: 64f3d41c
---

Obszar przetargowy to część zlecenia, którą wyceniasz osobno: budynek, piętro, etap, skrzydło. Każdy znacznik może należeć do jednego obszaru przetargowego. Ilości i kosztorys można wtedy odczytać dla każdego obszaru, z sumą częściową dla każdego, a suma całego zlecenia pozostaje sumą wszystkiego.

## Utwórz obszar przetargowy

1. Na górze panelu {{ui:Pozycje}} otwórz listę {{ui:Obszar przetargowy}}.
2. Wybierz **Nowy obszar przetargowy…**, wpisz nazwę, na przykład „Budynek A” lub „Poziom 2”, i wybierz **Utwórz**.
   Nowy obszar staje się bieżącym. Pasek stanu mówi: „Nowe znaczniki trafią do (nazwa). Znaczniki w innych obszarach przetargowych są przygaszone.”

## Przedmiarowanie do obszaru

Gdy obszar przetargowy jest wybrany na liście, każdy nowy znacznik trafia do niego: odcinki, pola, okręgi, liczenia, znaczniki dodane przez {{ui:Auto liczenie}} oraz to, co wkleisz. Znaczniki w innych obszarach przetargowych i te bez obszaru są przygaszone na arkuszu, abyś widział, co do czego należy.

Wybierz **Brak obszaru przetargowego** na liście, aby przedmiarować bez obszaru; wtedy nic nie jest przygaszane.

:::tip
Typowe piętra: przedmiaruj Poziom 2, zaznacz jego znaczniki ({{key:Mod+A}} na arkuszu), skopiuj je, wybierz Poziom 3 na liście i wklej. Kopie trafią do Poziomu 3. Gdy piętra są takie same i nie musisz ich rozdzielać, [grupa typowa](topic:typical-groups) policzy jedno piętro kilka razy.
:::

## Przenieś znaczniki do innego obszaru

Zaznacz jeden znacznik lub kilka ({{key:Shift}} + klik albo {{key:Mod+A}}). W sekcji **Wybrany znacznik** (lub **Wybrane znaczniki**) wybierz obszar w polu {{ui:Obszar przetargowy}}. Pasek stanu mówi: „3 znaczniki przeniesiono do Poziomu 2.” To jeden krok cofnięcia.

## Zmień nazwę, kolejność lub usuń

Wybierz **Zarządzaj obszarami przetargowymi…** na liście. Wpisz nową nazwę, aby ją zmienić, użyj strzałek, aby zmienić kolejność (tabele i skoroszyt będą jej przestrzegać), albo usuń obszar koszem. Usunięcie obszaru przetargowego zachowuje jego znaczniki: trafiają wtedy do żadnego obszaru. {{key:Mod+Z}} cofa każdą zmianę.

## Odczytaj ilości według obszaru

W tabeli {{ui:Ilości}} wybierz {{ui:Wg obszaru}} (pojawia się, gdy przedmiar ma obszar przetargowy). Każdy obszar wymienia pozycje, które zawiera, z ich ilością, jednostką i sumą, a potem wiersz sumy częściowej. Znaczniki bez obszaru są na końcu jako **Brak obszaru przetargowego**. Kliknij wiersz pozycji, aby ją wyróżnić i uczynić ten obszar bieżącym.

Zestawy są liczone dla każdego obszaru z jego własnych sum. Formuła zaokrąglająca w górę, na przykład `ceil(L / 4)`, może wtedy dać w sumie w obszarach trochę więcej niż dla całego zlecenia, tak jak przy ofercie wycenianej obszar po obszarze.

## Warianty: oferta podstawowa plus dodatki i odliczenia

Obszar przetargowy może być **wariantem**: pracą, którą właściciel może dodać do oferty lub z niej wyjąć. W **Zarządzaj obszarami przetargowymi…** każdy obszar ma listę obok nazwy:

| Wybór | Co robi |
|---|---|
| {{ui:Oferta podstawowa}} | W ofercie, jak zwykle. |
| {{ui:Wariant dodatkowy}} | Wyceniany osobno i **pomijany w ofercie podstawowej**: ulepszenie wykładziny, dodatkowy daszek. |
| {{ui:Wariant odliczeniowy}} | W ofercie podstawowej i oferowany jako odliczenie: „usuń daszek”. |

Przedmiarowuj pracę wariantu do jego obszaru przetargowego jak każdego innego obszaru. Gdy przedmiar ma wariant:

- Nagłówek tabeli {{ui:Ilości}} mówi **Oferta podstawowa** zamiast {{ui:Suma całej roboty}}: cały przedmiar bez wariantów dodatkowych.
- {{ui:Wg obszaru}} kończy się ofertą podstawową i jednym wierszem na wariant: **+$300.00** dla dodatku, **−$1,050.00** dla odliczenia.
- Wariant wycenia tylko pozycje, które mają w nim znaczniki, wraz z ich zestawami, tak aby część zestawu innej pozycji się nie wkradła.

W eksportach CSV kończy się ofertą podstawową i wariantami, a skoroszyt dostaje arkusz **Warianty**: ofertę podstawową, pozycje każdego wariantu i jego zmianę oraz ofertę podstawową z odjętymi wszystkimi wariantami dodatkowymi.

## W eksporcie

{{ui:XLSX}} dodaje arkusz **Wg obszaru przetargowego**: pozycje i składniki każdego obszaru z ilością, ilością z naddatkiem, materiałem, robocizną i sumą, sumę częściową dla każdego obszaru (formuła `SUM`) oraz **Wszystkie obszary przetargowe** na końcu. Arkusz **Znaczniki** dostaje kolumnę **Obszar przetargowy**. Przedmiar bez obszarów przetargowych eksportuje się jak dotychczas. Zobacz [Kolumny eksportu](topic:export-columns).

Obszary przetargowe są zapisywane w pliku projektu razem ze znacznikami.
