---
title: Rozmiary arkuszy i nazwy papieru
summary: Zobacz rozmiar każdego arkusza w milimetrach i calach oraz jego nazwę papieru (serie A, B i C, ANSI, ARCH) i pogrupuj mieszany zestaw według rozmiaru, aby znaleźć nietypowe arkusze.
keywords: rozmiar strony, rozmiar papieru, nazwa papieru, a0, a1, a2, a3, a4, seria b, seria c, ansi, arch, architektoniczny, mm, cale, rozmiar niestandardowy, według rozmiaru, nietypowy rozmiar, mieszany zestaw, skala, komplet rysunków, mediabox, obrót
from: 9c061c07
---

Skala ma znaczenie tylko na właściwym papierze. {{ui:TakeoffCraft}} odczytuje rozmiar każdego arkusza PDF i nazywa papier, abyś zobaczył arkusz wydrukowany w innym rozmiarze, zanim zaufasz pomiarowi na nim.

## Co zrobisz

Sprawdź rozmiar otwartego arkusza, a potem pogrupuj cały zestaw według rozmiaru.

## Kroki

1. Otwórz rysunki ({{ui:Otwórz PDF}}).
2. Pasek arkusza nad rysunkiem pokazuje nazwę papieru otwartego arkusza i jego rozmiar, na przykład „A1 · 594 × 841 mm”.
3. Każdy wiersz listy {{ui:Arkusze}} ma linię rozmiaru pod nazwą arkusza.
4. Wybierz {{ui:Według rozmiaru}} w nagłówku {{ui:Arkusze}}. Lista grupuje arkusze pod jednym nagłówkiem na rozmiar, największa grupa pierwsza, i oznacza rozmiar z tylko kilkoma arkuszami jako wyjątek.
5. Wybierz {{ui:Według rozmiaru}} ponownie, aby wrócić do kolejności zestawu.

Arkusz DWG lub DXF nie ma papieru, więc dla niego nie pokazuje się rozmiar.

## Jak wybierana jest nazwa

- Rozmiar pochodzi z prostokąta strony w PDF z uwzględnionym obrotem.
- Nazwy to serie A i B (ISO 216), seria C (ISO 269), ANSI od A do E oraz ARCH od A do E.
- Strona w odległości 2 mm od nazwanego rozmiaru przyjmuje tę nazwę. Każda inna strona jest opisana jako niestandardowa, z podaniem najbliższego nazwanego rozmiaru i tego, o ile się różni.

## W kosztorysie

Skoroszyt kosztorysu ma arkusz {{ui:Rozmiary arkuszy}} z liczbą arkuszy każdego rozmiaru.

:::note
Wartości w calach dla ANSI i ARCH zostały wpisane z opublikowanych tabel i nie zostały porównane z drukowanymi normami.
:::
