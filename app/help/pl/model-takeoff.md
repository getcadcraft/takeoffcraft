---
title: Przedmiar z modelu budynku
summary: Otwórz model IFC od architekta, zobacz go w 3D, wybierz ściany, stropy, drzwi i resztę według typu, materiału, warstwy lub rozmiaru i przenieś ich liczby, długości, pola i objętości do przedmiaru. Nowsza kopia modelu aktualizuje te same ilości.
keywords: model, przedmiar z modelu, widok 3D, kliknij element, znajdź wiersz, materiał, warstwa, warstwy ściany, płyta gipsowo-kartonowa, izolacja, rozmiary drzwi, rozmiary okien, zestawienie otworów, csv, 3d, bim, ifc, rvt, model budynku, ilości, ściany, stropy, drzwi, okna, słupy, pomieszczenia, według typu, według poziomu, aktualizacja, nowszy model, projekt wykonawczy
from: 8c4c12c9
---

Nie musisz czekać na następny komplet rysunków. Gdy architekt wyśle model budynku, otwórz go tutaj i weź ilości prosto z niego. Model jest odczytywany na Twoim komputerze; nic nie jest nigdzie wysyłane.

## Kroki

1. Wybierz {{ui:Model}} na pasku narzędzi i wskaż plik modelu `.ifc` albo otwórz go przyciskiem {{ui:Otwórz PDF}}, tak jak każdy inny plik.
2. {{ui:Przedmiar z modelu}} otwiera się z jednym wierszem na kategorię i typ: ściany według typu ściany, stropy według typu stropu, drzwi według typu drzwi i tak dalej. Każdy wiersz pokazuje swoją liczbę i to, w czym mierzona jest dana kategoria.
3. Ustaw {{ui:Grupuj według}} na {{ui:Kategoria}}, aby szybko zobaczyć sumę, albo na {{ui:Kategoria, typ i poziom}}, aby podzielić każdy typ na kondygnacje.
4. Odznacz wiersze, których nie chcesz. {{ui:Znajdź}} zawęża listę. Odznaczenie wiersza ukrywa też jego elementy na obrazie 3D.
5. Nadaj modelowi {{ui:Nazwa modelu}}, którą zachowasz przez cały projekt, na przykład nazwę projektu.
6. Wybierz {{ui:Dodaj do przedmiaru}}. Każda ilość staje się ilością wpisaną na liście pozycji. Nazwij ją, wyceń i przypisz zestawy jak każdą inną pozycję.

## Zobacz model w 3D

{{ui:Pokaż model w 3D}} rysuje model nad tabelą, jednym kolorem dla każdego wiersza (kolorowy znacznik przy nazwie wiersza). Przeciągnij, aby obrócić, przytrzymaj {{key:Shift}} i przeciągnij, aby przesunąć, użyj kółka, aby powiększyć, i wybierz {{ui:Dopasuj}} lub {{ui:Resetuj}}, aby wrócić.

- **Kliknij element** na obrazie, a jego wiersz zostaje zaznaczony w tabeli, wszystkie elementy tego wiersza są podświetlone, a reszta blado. Kliknij ten sam element ponownie, a jeśli należy do kilku wierszy (ściana w swoich warstwach), zostanie zaznaczony następny wiersz.
- **Kliknij wiersz** w tabeli, aby podświetlić jego elementy. Kliknij go ponownie lub kliknij puste miejsce na obrazie, aby wyczyścić zaznaczenie.
- Pomieszczeń nie rysuje się, ponieważ objętość pomieszczenia zasłaniałaby budynek.
- Bardzo duży model zachowuje dla niektórych elementów tylko pudełko, aby zmieścić się w pamięci; panel podaje, ile ich jest. Liczby się nie zmieniają.

Jeśli ten komputer nie potrafi rysować 3D, tabela działa jak dotąd.

## Grupuj według materiału, warstwy lub rozmiaru

{{ui:Grupuj według}} ma trzy kolejne wybory:

- {{ui:Kategoria i materiał}}: ściana, strop lub dach zbudowany z warstw daje materiałowi każdej warstwy osobny wiersz, więc płytę gipsowo-kartonową, słupki i izolację można wyceniać osobno. Część budynku z jednym materiałem dostaje wiersz tego materiału, a część bez materiału trafia do wiersza o nazwie „No material named”.
- {{ui:Kategoria i warstwa}}: to samo, z grubością warstwy w wierszu („Insulation, 100 mm”).
- {{ui:Kategoria, typ i rozmiar drzwi lub okna}}: drzwi i okna są dzielone według szerokości i wysokości (na przykład 3'-0" × 6'-8" lub 914 × 2,032 mm).

Dla warstwy powierzchnią jest własna powierzchnia ściany (albo rzut lub powierzchnia stropu czy dachu), a objętością jest ta powierzchnia razy grubość warstwy. Uwaga w wierszu mówi, ile liczb pochodzi z warstwy. Warstwy jednej ściany sumują się do objętości, którą model podaje dla tej ściany.

## Zapisz wiersze lub zestawienie otworów jako CSV

{{ui:Zapisz wiersze jako CSV}} zapisuje zaznaczone wiersze z jednostkami w każdym nagłówku, do arkusza kalkulacyjnego. {{ui:Zapisz zestawienie otworów jako CSV}} (tylko gdy model ma drzwi lub okna) zapisuje każde drzwi i okno według typu, poziomu i rozmiaru wraz z liczbą.

## Co jest mierzone

| Kategoria | Ilości |
|---|---|
| Ściany | liczba, długość, powierzchnia ściany (jedna strona, z odjętymi otworami), objętość |
| Stropy, płyty, sufity i inne pokrycia | liczba, pole rzutu, objętość |
| Dachy | liczba, pole rzutu, powierzchnia dachu, objętość |
| Fundamenty | liczba, pole rzutu, objętość |
| Słupy, belki i inne elementy konstrukcyjne | liczba, długość wzdłuż elementu, objętość |
| Balustrady, rury, kanały i trasy kablowe | liczba, długość |
| Schody | liczba, objętość |
| Pomieszczenia | liczba, powierzchnia podłogi, objętość |
| Drzwi, okna i cała reszta | liczba |

Tam, gdzie autor modelu podał ilość w pliku, używana jest ta liczba. W przeciwnym razie liczba jest mierzona z kształtu elementu. Każda ilość zachowuje uwagę, która mówi, która z tych dwóch dróg została użyta, i ile elementów dało liczbę.

:::note
Długość ściany zmierzona z kształtu biegnie od końca do końca, więc dwie ściany nachodzące na siebie w rogu liczą oba ten narożnik. Objętość wymaga zamkniętego kształtu: element, którego kształt nie jest zamknięty, jest policzony i nie daje objętości. Zakrzywiony lub narożny element ściany mierzy się jako połowę wszystkich jego pionowych powierzchni, a jego uwaga o tym mówi.
:::

## Gdy nadejdzie nowszy model

Otwórz nowszy plik i wpisz tę samą {{ui:Nazwa modelu}}. Zanim cokolwiek dodasz, panel mówi, ile ilości jest nowych, ile się zmieniło i z czego na co, oraz które ilości z wcześniejszej kopii nie ma już w modelu. Wybierz {{ui:Dodaj do przedmiaru}}: zmienione ilości przyjmują nowe liczby, a Twoje nazwy, stawki, naddatki i zestawy zostają. Ilości, których nie ma już w modelu, zachowują stare liczby; usuń je samodzielnie, jeśli projekt je zlikwidował.

Typ i nazwy poziomów decydują o rozpoznaniu ilości. Jeśli architekt zmieni nazwę typu ściany, pojawi się ona jako nowa ilość, a stara zostanie wypisana jako zniknęła.

## Pliki, które to odczytuje

Pliki IFC (IFC2x3, IFC4 i IFC4.3). Plik IFC z drogami, torami lub mostami nadal wprowadza bezpośrednio swoje ilości infrastruktury, jak dotąd.

TakeoffCraft nie odczytuje plików `.rvt` w tym wydaniu. Jeśli architekt pracuje w Revit, poproś o eksport modelu do IFC (Plik, Eksportuj, IFC) i otwórz ten plik.

Jeden model może wprowadzić naraz do 500 ilości. Jeśli jest ich więcej, odznacz wiersze albo grupuj według kategorii.
