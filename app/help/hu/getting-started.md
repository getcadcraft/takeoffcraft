---
title: Első lépések a TakeoffCrafttal
summary: Mit tud a TakeoffCraft, hol fut, és az első lemért és beárazott tétele egy PDF-tervkészletből.
keywords: indulás, első mennyiségkimutatás, gyors útmutató, bevezetés, költségvetés, mennyiségkimutatás, tervkészlet, pdf
from: 3b9da1fb
---

A TakeoffCraft tervkészleteket, PDF-eket és DWG- vagy DXF-rajzokat mér le, és a mérésekből beárazott költségvetést készít. Megnyitja a fájlokat (a rajz közvetlenül a blokkjaiból számol: lásd [DWG- vagy DXF-rajz megnyitása](topic:open-a-drawing)), minden rajzlaphoz méretarányt ad (a rajz hozza a sajátját), **tételeket** hoz létre (egy falfajta, egy padlóburkolat, egy szerelvény), és a rajzlapokon kattintva méri le őket. A mennyiségek, a költségek és a munka összege menet közben frissül. A költségvetést táblázatként exportálhatja, és a PDF-ek másolatát is, belerajzolt mennyiségkimutatással.

Ha más programokban már végzett mennyiségkimutatást, olvassa el következőnek a [Más mennyiségkimutató szoftverből érkezik](topic:coming-from) témakört. Néhány dolog itt másképp működik.

## Hol fut

A TakeoffCraft a webböngészőben fut. Nyissa meg a TakeoffCraftot, és a képernyő azonnal kész; nincs mit telepíteni.

- **A PDF-jei a számítógépén maradnak.** A böngésző nyitja meg őket, és sosem töltődnek fel. A mentés letöltés.
- Az aktuális Chrome, Edge, Firefox és Safari verziókban működik. Lásd [Böngészők és számítógépek](common:browsers).
- Internetkapcsolat nélkül is működik, ha az alkalmazássávban a {{ui:Mentés offline használatra}} gombot választja, és az ezt írja: {{ui:Offline használatra kész}}. Lásd [Offline munka](common:offline).
- A felhőbe mentés még nem érhető el. Asztali alkalmazásként a TakeoffCraft a CadCraft Studióban van, a másik hét alkalmazással együtt.

## Az első mennyiségkimutatás tíz lépésben

Ez a végigvezetés egy falfajtát mér le és ár ki. Néhány percet vesz igénybe bármelyik tervvel.

1. Válassza a {{ui:Tervek megnyitása}} gombot az eszköztár {{ui:Fájl}} csoportjában (vagy nyomja meg a {{key:Mod+O}} billentyűt), jelöljön ki egy vagy több PDF-et, és válassza a Megnyitás lehetőséget. A PDF-eket az oldal bármelyik pontjára is ejtheti.
   A rajzlapok balra jelennek meg, és az első rajzlap megnyílik középen.
2. Keresse meg a rajzlap nyomtatott méretarányát a rajzfejben vagy egy rajzcím alatt.
3. Nyissa meg az {{ui:Előbeállítás}} listát a {{ui:Méretarány}} csoportban, és válassza ki azt a méretarányt, például `1/4" = 1'-0"`.
   A rajzlap alatti sáv most ezt írja: „Méretarány 1/4" = 1'-0"”.
4. Válassza az {{ui:Ellenőrzés}} gombot (vagy nyomja meg a {{key:D}} billentyűt), és kattintson a rajzra nyomtatott egyik méret két végére.
   Az állapotsor bal alsó részén lévő kijelzésnek egyeznie kell a nyomtatott mérettel. Ha nem, lásd [A méretarány beállítása](topic:set-the-scale).
5. A jobb oldali {{ui:Tételek}} panelen válassza az {{ui:Új tétel}} gombot, írjon be egy nevet, például `Interior wall type A`, hagyja a típust a {{ui:Vonalas (hossz)}} értéken, és válassza a {{ui:Hozzáadás}} gombot.
6. Válassza a {{ui:Vonalas}} eszközt az eszköztáron (vagy nyomja meg az {{key:L}} billentyűt).
7. Kattintson egy fal elejére, majd mindegyik sarkára. Kattintson duplán, nyomja meg az {{key:Enter}} billentyűt vagy kattintson jobb gombbal a szakasz befejezéséhez.
   A szakasz a tétel színével rajzolódik, és a hossza megjelenik a tétel mellett.
8. A {{ui:Tételek}} alatti tételszerkesztőben írja be a `9'-0"` értéket a {{ui:Magasság}} mezőbe, a `0.85` értéket az {{ui:Anyag $/LF}} mezőbe, és az `1.20` értéket a {{ui:Munkadíj $/LF}} mezőbe.
   Az alul lévő {{ui:Mennyiségek}} táblázat mutatja a hosszt, a kiterjesztett anyag- és munkadíjat, valamint a {{ui:Munka összesen}} értéket.
9. Válassza a {{ui:Mennyiségkimutatás mentése}} gombot (vagy nyomja meg a {{key:Mod+S}} billentyűt).
   A böngésző letölt egy `.takeoff.json` fájlt. Tartalmazza a tételeit, méretarányait és jelöléseit, és ugyanazokon a PDF-eken nyílik újra meg.
10. Nyissa meg az eszköztár {{ui:Exportálás}} menüjét, és válassza az {{ui:XLSX}} lehetőséget, hogy a költségvetést táblázatként letöltse.

:::tip
Nyomja meg az {{key:Esc}} billentyűt, hogy leállítson bármit, amit éppen csinál, és visszatérjen a {{ui:Kijelölés}} eszközre. A {{key:Mod+Z}} bármelyik módosítást visszavonja.
:::

## Mit olvasson következőnek

- [A TakeoffCraft képernyője](topic:workspace) megnevezi az ablak minden részét.
- [Mennyiségkimutatás indítása és tervkészlet megnyitása](topic:open-plan-set) több PDF-fel és a rajzlaplistával foglalkozik.
- [Mennyiségkimutatási tételek létrehozása](topic:create-items) elmagyarázza a típusokat, mértékegységeket, hulladékot és egységárakat.
- [Összetett tételek és képletek](topic:assemblies) egy mérésből szegeket, gipszkartonlapokat és egyebet készít.
- [Billentyűzet és egér](topic:keyboard) felsorol minden billentyűt.
