---
title: Pobieranie ilości z pliku IFC 4.3
summary: Otwórz plik IFC 4.3 drogi, linii kolejowej, mostu lub robót ziemnych i uzyskaj liczbę wg klasy wraz z długościami, polami i objętościami podanymi w pliku, jako ilości wpisane.
keywords: ifc, ifc4x3, ifc 4.3, droga, kolej, most, nawierzchnia, krawężnik, warstwa, łożysko, roboty ziemne, infrastruktura, ilości, bim, cywilne, ilości wpisane
from: 6b08c2c4
---

Plik IFC 4.3 może zawierać drogi, linie kolejowe, mosty, roboty morskie i części, z których się składają: nawierzchnie, warstwy, krawężniki, szyny, roboty ziemne, łożyska, pale i więcej. TakeoffCraft czyta je i zamienia w ilości wpisane, które możesz wycenić.

## Otwórz plik

1. Wybierz {{ui:Otwórz PDF}} w grupie {{ui:Plik}} albo naciśnij {{key:Mod+O}}.
2. Wybierz plik IFC (możesz go wybrać razem z PDF-ami) albo upuść go na TakeoffCraft.

Dla każdej klasy i typu predefiniowanego powstaje jedna ilość wpisana, na przykład „Nawierzchnia (elastyczna): liczba”, a gdy plik je podaje, także „długość” w m, „pole” w m² i „objętość” w m³. Notatka przy każdej pozycji mówi, ile elementów policzono i ile nie podało ilości. Otwarcie nowszego pliku o tej samej nazwie aktualizuje te ilości zamiast dodawać kolejne.

## Czego nie robi

- Czyta zestawy ilości (IfcElementQuantity), które plik zawiera. Nie mierzy kształtów 3D, więc element bez zestawu ilości jest policzony, ale nie dodaje długości, pola ani objętości.
- Odczytywane są tylko klasy infrastrukturalne IFC 4.3. Plik budynku (ściany, drzwi, stropy) nie jest tu zamieniany na ilości; plik, który nie jest IFC 4.3, zgłasza to i niczego nie wczytuje.
- Jednostki są jednostkami pliku, przeliczonymi na metry.
