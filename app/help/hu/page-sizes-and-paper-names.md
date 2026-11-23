---
title: Lapméretek és papírnevek
summary: Minden lap méretét milliméterben és hüvelykben, valamint papírnevét (A, B és C sorozat, ANSI, ARCH) láthatja, és egy vegyes készletet méret szerint csoportosíthat a szokatlan lapok megtalálásához.
keywords: lapméret, papírméret, papírnév, a0, a1, a2, a3, a4, b sorozat, c sorozat, ansi, arch, építészeti, mm, hüvelyk, egyedi méret, méret szerint, szokatlan méret, vegyes készlet, méretarány, tervkészlet, mediabox, forgatás
from: 9c061c07
---

A méretarány csak a megfelelő papíron jelent valamit. A {{ui:TakeoffCraft}} beolvassa minden PDF-lap méretét, és megnevezi a papírt, így mielőtt megbízna egy mérésben, láthatja, ha egy lapot más méretben nyomtattak ki.

## Amit csinálni fog

Nézze meg a megnyitott lap méretét, majd csoportosítsa a teljes készletet méret szerint.

## Lépések

1. Nyissa meg a terveket ({{ui:Open plans}}).
2. A rajz fölötti lapsáv megmutatja a megnyitott lap papírnevét és méretét, például „A1 · 594 × 841 mm”.
3. A {{ui:Sheets}} lista minden sorában a lap neve alatt van egy méretsor.
4. Válassza a {{ui:Sheets}} fejlécében a {{ui:By size}} lehetőséget. A lista méretenként egy címszó alá gyűjti a lapokat, a legnagyobb csoporttal kezdve, és a csak néhány lapot tartalmazó méretet szokatlanként jelöli.
5. Ha ismét a {{ui:By size}} lehetőséget választja, visszatér a készlet eredeti sorrendjéhez.

A DWG- vagy DXF-lapnak nincs papírja, ezért ahhoz nem jelenik meg méret.

## Hogyan választódik ki a név

- A méret a PDF-oldal dobozából származik, az alkalmazott forgatással együtt.
- A nevek az A és B sorozat (ISO 216), a C sorozat (ISO 269), az ANSI A–E és az ARCH A–E.
- A megnevezett mérettől 2 mm-en belüli oldal azt a nevet kapja. Minden más oldal „egyedi” megjelölést kap, a legközelebbi megnevezett mérettel és az eltéréssel.

## A becslésben

A becslési munkafüzetben van egy {{ui:Page sizes}} munkalap, minden méret darabszámával.

:::note
Az ANSI- és ARCH-hüvelykértékeket a közzétett táblázatokból gépeltük be, és nem hasonlítottuk össze a nyomtatott szabványokkal.
:::
