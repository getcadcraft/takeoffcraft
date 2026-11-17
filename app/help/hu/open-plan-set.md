---
title: Mennyiségkimutatás indítása és tervkészlet megnyitása
summary: Nyisson meg egy vagy több PDF-et tervkészletként, tájékozódjon a lapok között, és lépkedjen közöttük.
keywords: megnyitás, tervkészlet, több pdf, több fájl, lapok, rajzok, oldalcímkék, lapjegyzék, navigálás, húzás, átadás, megnyitás másik alkalmazásban, jelölés
from: ed434468
---

Egy tervkészlet gyakran több PDF: építészeti, statikai, gépészeti. A TakeoffCraft egymás mellett, egyetlen lapjegyzékként nyitja meg őket, és egy mennyiségkimutatás mindegyiket lefedheti.

## PDF-ek megnyitása

1. Válassza a {{ui:Tervek megnyitása}} lehetőséget a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt. (Más menüstílusban ez a neve: {{ui:PDF-ek megnyitása…}}.)
2. A fájlválasztóban jelöljön ki minden PDF-et a készletből. Több kijelöléséhez tartsa lenyomva a {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} billentyűt, tartományhoz a {{key:Shift}} billentyűt.
3. Válassza a Megnyitás gombot.
   Amíg az egyes fájlok beolvasódnak, megjelenik a „(név) megnyitása…” üzenet. Ezután minden oldal megjelenik a {{ui:Lapok}} alatt, és az első új PDF első oldala megnyílik.

A PDF-eket a {{pick:mac=Finder|windows=File Explorer|linux=a fájlkezelőből}} is áthúzhatja, és bárhová ráejtheti a TakeoffCraftra. Húzás közben megjelenik a keret: „PDF-ek, DWG- vagy DXF-rajzok vagy .takeoff.json ejtése ide”.

További PDF-ek később ugyanígy adhatók hozzá. A már megnyitott PDF-eket kihagyja.

A kezdőképernyő is listázza azokat a PDF-eket és mennyiségkimutatásokat, amelyeket nemrég nyitott meg, azokban a böngészőkben, amelyek lehetővé teszik egy oldalnak, hogy újra megnyisson fájlt (Chrome és Edge). Kattintson rá a megnyitáshoz; a böngésző előbb engedélyt kérhet. Lásd: [Fájljai](common:your-files).

:::note
Semmi sem töltődik fel. A böngésző a PDF-eket a számítógépén olvassa be, és azok kikerülnek a TakeoffCraftból, amikor bezárja a lapot, vagy a {{ui:Új}} lehetőséget választja.
:::

## Rajzok a PDF-ek mellett

A {{ui:Tervek megnyitása}} DWG- és DXF-rajzokat is fogad, egyedül vagy PDF-ekkel együtt: minden rajz modelltere és elrendezései lapokká válnak ugyanabban a listában. Lásd: [DWG vagy DXF rajz megnyitása](topic:open-a-drawing), majd [Számolás rajzból](topic:count-from-a-drawing).

## PDF átadása másik alkalmazástól

A csomag egyik másik alkalmazása átadhatja az általa megnyitott PDF-et: új lapon megnyitja a TakeoffCraftot, és a PDF ott nyílik meg, mintha Ön húzta volna rá. Az állapotsor így szól: „Megnyitva: (név), átadva innen: (alkalmazás). Az eredeti fájl nem változott.” Semmi sem töltődik fel; a fájl a böngésző saját tárolóján halad át, és megnyitás után onnan törlődik.

Ha az állapotsor szerint a PDF „nem érkezett meg”, a lap túl sokáig várt, vagy a PDF már meg volt nyitva egy másik lapon: nyissa meg a {{ui:Tervek megnyitása}} lehetőséggel.

Fordítva: ha a MarkupCraft az Ön helyén fut, és el tud fogadni fájlt, a rajz alatti lapsávon van egy {{ui:MarkupCraft}} gomb: új lapon megnyitja a képernyőn lévő lap PDF-jét a MarkupCraftban, hogy átnézhesse és megjelölhesse.

## Lap keresése

- Görgessen a bal oldali {{ui:Lapok}} listában, és kattintson egy lapra.
- Gépeljen a lista tetején lévő **Lapok keresése** mezőbe, hogy szűrjön a lapszám, a fájlnév vagy az oldalcímke szerint. Szűrés közben a {{ui:Lapok}} mellett lévő szám „3 a 40-ből” alakban jelzi az eredményt.
- A következő lapra a {{key:PageDown}}, az előzőre a {{key:PageUp}} billentyű lép. Ezek a szűrt lista szerint lépnek.

:::mac
Ha a Mac billentyűzeten nincs Page Up és Page Down billentyű, nyomja meg az fn billentyűt a fel vagy le nyíllal.
:::

## Hogyan kapnak nevet a lapok

- Ha a PDF címkét ad egy oldalnak, például `A-101`, a lap ezen címke szerint kapja a nevét.
- Címke nélküli oldal (vagy olyan címke, amely csak az oldalszám) neve: „(fájlnév), oldal (n)”.
- Több megnyitott PDF esetén a címkézett lapok a fájlnevet is hordozzák: „A-101 — Architectural”.

A lapneveket egyelőre nem lehet kézzel beírni.

## Körbenézés a lapon

- Az egérgörgővel a mutató helyén nagyít.
- A bal vagy a középső gombbal húzva eltolhatja a lapot. Az {{ui:Automatikus darabszám}} használatakor, vagy ha egy jelölés sarkától indul, tartsa lenyomva a {{key:Space}} billentyűt húzás közben, vagy húzzon a középső gombbal.
- A teljes lap megtekintéséhez nyomja meg az {{key:F}} billentyűt, vagy válassza az {{ui:Oldal illesztése}} lehetőséget; a szélesség illesztéséhez a {{key:W}} billentyűt, vagy az {{ui:Szélesség illesztése}} lehetőséget.
- A nagyításhoz nyomja meg a {{key:Plus}} vagy a {{key:=}} billentyűt, a kicsinyítéshez a {{key:Minus}} billentyűt, a nézet közepe körül.

Minden lap megjegyzi a saját nagyítását és helyzetét, amíg nyitva van.

## Következő

Mielőtt egy lapon mérhetne, méretarány kell hozzá: [Méretarány beállítása](topic:set-the-scale).
