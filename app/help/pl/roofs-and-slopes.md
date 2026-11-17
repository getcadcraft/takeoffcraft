---
title: Dachy i nachylenia
summary: Nadaj obszarowi spadek, aby zmierzyć powierzchnię dachu z rzutu, oraz mierz krawędzie szczytowe, kalenice narożne i doliny wzdłuż ich nachylenia.
keywords: dach, spadek, nachylenie, współczynnik nachylenia, wzniesienie, bieg, 6:12, krawędź szczytowa, kalenica narożna, dolina, szczyt, pokrycie dachowe, kwadraty, pochylona powierzchnia, długość rzeczywista, pole rzutu
from: 38225b60
---

Rzut dachu pokazuje każdą płaszczyznę dachu płasko, widzianą z góry. Sam dach jest większy: płaszczyzna o spadku 6:12 ma około 12% więcej powierzchni niż jej rzut, a jej pochylone krawędzie są dłuższe, niż wyglądają. Nadaj pozycji spadek, a TakeoffCraft zmierzy wzdłuż nachylenia.

## Wpisywanie spadku

Spadek to wzniesienie na 12 jednostek biegu, tak jak na symbolach spadku w rzucie dachu. Wpisz go jako `6:12`, `6/12` albo samo `6`; działa też inny bieg (`4:10` to 4.8:12). Kąt działa ze znakiem stopnia: `26.57°`. Puste pole lub `0` oznacza dach płaski.

## Powierzchnie dachu

1. Utwórz pozycję powierzchniową dla pokrycia albo otwórz istniejącą.
2. W jej ustawieniach wpisz **Spadek**, np. `6:12`.
3. Obrysuj każdą płaszczyznę dachu na rzucie za pomocą {{ui:Area}}, jak zwykle.

Każda płaszczyzna liczy swoje pole rzutu razy współczynnik nachylenia: √(1 + (wzniesienie ÷ 12)²), czyli 1.118 dla 6:12 i 1.414 dla 12:12. Zaznacz płaszczyznę, aby zobaczyć jej **Pole** (na nachyleniu), **Pole rzutu** i **Współczynnik nachylenia**.

Płaszczyzny o innym spadku: zaznacz płaszczyznę i wpisz jej własny **Spadek** w jej panelu. Pozostaw pole puste, aby użyć spadku pozycji. Widok kontrolny 3D, zestawy kosztorysowe (`A` to pole na nachyleniu), koszty i eksport korzystają z pola na nachyleniu. Odliczenia na płaszczyźnie pochyłej, np. świetliki, są odejmowane pod tym samym nachyleniem.

Obwód (`P`) pozostaje obwodem rzutu. Okapy, krawędzie szczytowe, kalenice narożne i doliny mierz jako odcinki (poniżej).

## Krawędzie szczytowe, kalenice narożne i doliny

1. Utwórz pozycję liniową, np. „Krawędź szczytowa” albo „Kalenice”.
2. Ustaw jej **Nachylenie** na **Krawędź szczytowa** (pochylona krawędź, jak przy szczycie) lub **Kalenica narożna lub dolina** (linia, na której spotykają się dwie płaszczyzny), i wpisz **Spadek** płaszczyzn dachu.
3. Narysuj odcinki na rzucie za pomocą {{ui:Linear}}.

Krawędź szczytowa liczy swoją długość w rzucie razy współczynnik nachylenia. Kalenica narożna lub dolina biegnie pod kątem 45° przez rzut między dwiema płaszczyznami o tym samym spadku, więc jej rzeczywista długość to długość w rzucie razy √(1 + (wzniesienie ÷ 12)² ÷ 2): 1.061 dla 6:12, 1.225 dla 12:12.

Jeden odcinek może łączyć oba typy. Zaznacz go: każdy segment w jego panelu ma listę nachylenia — **Ustawienie pozycji**, **Poziom**, **Krawędź szczytowa** lub **Kalenica narożna lub dolina** — oraz swoją długość wzdłuż nachylenia. Własny **Spadek** odcinka w panelu zastępuje spadek pozycji dla wszystkich jego segmentów. Panel pokazuje też **Długość w rzucie**, a etykiety na arkuszu pokazują długości wzdłuż nachylenia.

Odliczenia nadal działają: odliczony segment nie liczy niczego, pochylony czy nie.

:::note
Kalenice narożne i doliny zakładają, że obie płaszczyzny mają ten sam spadek. Dla płaszczyzn o różnych spadkach zmierz kalenicę jej rzeczywistą długością w inny sposób albo narysuj ją jako krawędź szczytową o równoważnym spadku.
:::
