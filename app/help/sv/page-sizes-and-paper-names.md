---
title: Pappersstorlekar och pappersnamn
summary: Se varje bladstorlek i millimeter och tum och dess pappersnamn (serierna A, B och C, ANSI, ARCH), och gruppera en blandad uppsättning efter storlek för att hitta de avvikande bladen.
keywords: pappersstorlek, sidstorlek, pappersnamn, a0, a1, a2, a3, a4, b-serien, c-serien, ansi, arch, arkitektur, mm, tum, egen storlek, efter storlek, avvikande storlek, blandat set, skala, ritningsset, mediabox, rotation
from: 9c061c07
---

En skala betyder bara något på rätt papper. {{ui:TakeoffCraft}} läser varje PDF-bladets storlek och namnger pappret, så att du kan se ett blad som skrivits ut i en annan storlek innan du litar på en mätning på det.

## Det du gör

Titta på storleken för det öppna bladet, gruppera sedan hela setet efter storlek.

## Steg

1. Öppna ritningarna ({{ui:Open plans}}).
2. Bladfältet ovanför ritningen visar det öppna bladets pappersnamn och storlek, till exempel "A1 · 594 × 841 mm".
3. Varje rad i listan {{ui:Sheets}} har en storleksrad under bladnamnet.
4. Välj {{ui:By size}} i rubriken för {{ui:Sheets}}. Listan samlar bladen under en rubrik per storlek, med den största gruppen först, och markerar en storlek med bara några få blad som avvikande.
5. Välj {{ui:By size}} igen för att gå tillbaka till setets egen ordning.

Ett DWG- eller DXF-blad har inget papper, så ingen storlek visas för det.

## Så väljs namnet

- Storleken kommer från sidans ruta i PDF-filen med dess rotation tillämpad.
- Namnen är serierna A och B (ISO 216), serien C (ISO 269), ANSI A till E och ARCH A till E.
- En sida inom 2 mm från en namngiven storlek får det namnet. Varje annan sida säger custom, med närmaste namngivna storlek och hur långt ifrån den är.

## I kalkylen

Kalkylarbetsboken har ett kalkylblad {{ui:Page sizes}} med antalet för varje storlek.

:::note
Tum-värdena för ANSI och ARCH skrevs av från de publicerade tabellerna och har inte jämförts med de tryckta standarderna.
:::
