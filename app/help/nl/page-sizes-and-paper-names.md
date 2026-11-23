---
title: Paginaformaten en papiernamen
summary: Bekijk het formaat van elk blad in millimeter en inch en de papiernaam (A-, B- en C-reeks, ANSI, ARCH), en groepeer een gemengde set op formaat om de afwijkende bladen te vinden.
keywords: paginaformaat, papierformaat, papiernaam, a0, a1, a2, a3, a4, b-reeks, c-reeks, ansi, arch, architectonisch, mm, inch, aangepast formaat, op formaat, afwijkend formaat, gemengde set, schaal, tekenset, mediabox, rotatie
from: 9c061c07
---

Een schaal betekent alleen iets op het juiste papier. {{ui:TakeoffCraft}} leest het formaat van elk PDF-blad en geeft het papier een naam, zodat u een blad dat op een ander formaat is afgedrukt, ziet voordat u een meting erop vertrouwt.

## Wat u gaat doen

Bekijk het formaat van het open blad, en groepeer daarna de hele set op formaat.

## Stappen

1. Open de tekeningen ({{ui:Open plans}}).
2. De bladbalk boven de tekening toont de papiernaam en het formaat van het open blad, bijvoorbeeld "A1 · 594 × 841 mm".
3. Elke rij in de lijst {{ui:Sheets}} heeft een regel met het formaat onder de bladnaam.
4. Kies {{ui:By size}} in de kop van {{ui:Sheets}}. De lijst verzamelt de bladen onder één kop per formaat, de grootste groep eerst, en markeert een formaat met maar enkele bladen als afwijkend.
5. Kies {{ui:By size}} nogmaals om terug te gaan naar de eigen volgorde van de set.

Een DWG- of DXF-blad heeft geen papier, dus voor dat blad wordt geen formaat getoond.

## Hoe de naam wordt gekozen

- Het formaat komt uit het kader van de pagina in de PDF, met de rotatie toegepast.
- De namen zijn de A- en B-reeks (ISO 216), de C-reeks (ISO 269), ANSI A tot E en ARCH A tot E.
- Een pagina binnen 2 mm van een benoemd formaat krijgt die naam. Elke andere pagina krijgt de aanduiding aangepast, met het dichtstbijzijnde benoemde formaat en hoe ver het ervan af zit.

## In de raming

Het ramingswerkboek heeft een werkblad {{ui:Page sizes}} met het aantal van elk formaat.

:::note
De inchwaarden voor ANSI en ARCH zijn overgenomen uit de gepubliceerde tabellen en zijn niet vergeleken met de gedrukte normen.
:::
