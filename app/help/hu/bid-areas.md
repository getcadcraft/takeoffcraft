---
title: Ajánlati területek
summary: Címkézze meg a jeleket épület, szint vagy ütem szerint, egyszerre egy területre mérjen fel, és területenként olvassa le a mennyiségeket és a költségeket.
keywords: kiegészítő változat, levonásos változat, alapajánlat, kiegészítések, ajánlati terület, terület, épület, szint, emelet, fázis, zóna, változat, bontás, felosztás, tipikus szint, részösszeg, területenként
from: 64f3d41c
---

Az ajánlati terület a munka olyan része, amelyet külön árazhat: épület, szint, ütem vagy szárny. Minden jel egy ajánlati területen lehet. A mennyiségek és a költségvetés területenként olvasható, mindegyikhez részösszeggel, miközben a munka összesen továbbra is minden összeget tartalmaz.

## Ajánlati terület létrehozása

1. A {{ui:Tételek}} panel tetején nyissa meg az {{ui:Ajánlati terület}} listát.
2. Válassza az **Új ajánlati terület…** lehetőséget, írjon be egy nevet, például „A épület” vagy „2. szint”, majd válassza a **Létrehozás** gombot.
   Az új terület lesz az aktuális. Az állapotsor ezt írja: „Az új jelek ide kerülnek: (név). A többi ajánlati területen lévő jelek halványak.”

## Mérés egy területre

Amíg a listában ajánlati terület van kiválasztva, minden új jel oda kerül: szakaszok, területek, körök, darabszámok, az {{ui:Automatikus darabszám}} által hozzáadott jelek és a beillesztett elemek. A más ajánlati területen lévő jelek és a területhez nem tartozó jelek halványan jelennek meg a lapon, hogy lássa, mi hova tartozik.

Válassza a listában a **Nincs ajánlati terület** lehetőséget, ha terület nélkül szeretne mérni; ilyenkor semmi sem halványul.

:::tip
Tipikus szintek: mérje fel a 2. szintet, jelölje ki a jeleit (a {{key:Mod+A}} a lapon), másolja le őket, válassza a listában a 3. szintet, és illessze be. A másolatok a 3. szintre kerülnek. Ha a szintek azonosak, és nem kell őket külön kezelni, egy [tipikus csoport](topic:typical-groups) inkább többször is számolhatja ugyanazt a szintet.
:::

## Jelek áthelyezése másik területre

Jelöljön ki egy vagy több jelet ({{key:Shift}} + kattintás vagy {{key:Mod+A}}). A **Kijelölt jel** (vagy **Kijelölt jelek**) alatt válassza ki a területet a {{ui:Ajánlati terület}} mezőben. Az állapotsor ezt írja: „3 jel áthelyezve ide: 2. szint.” Ez egyetlen visszavonási lépés.

## Átnevezés, sorrend és törlés

Válassza a listában az **Ajánlati területek kezelése…** lehetőséget. Átnevezéshez írja felül a nevet, a sorrend módosításához használja a nyilakat (a táblázatok és a munkafüzet ezt követi), vagy a kukával törölhet egyet. Az ajánlati terület törlése megtartja a jeleit: ezek ekkor nincs ajánlati területen. A {{key:Mod+Z}} minden változtatást visszavon.

## A mennyiségek olvasása területenként

A {{ui:Mennyiségek}} táblázatban válassza a {{ui:Területenként}} lehetőséget (ez akkor jelenik meg, ha a mérésnek van ajánlati területe). Minden terület felsorolja a benne lévő tételeket a mennyiségükkel, egységükkel és összegükkel, majd egy részösszeg sort. Az ajánlati területen nem lévő jelek utoljára kerülnek, **Nincs ajánlati terület** néven. Kattintson egy tételsorra, hogy a tétel kiemelődjön, és az a terület legyen az aktuális.

Az összetett tételeket minden területre a terület saját összegeiből számítjuk ki. Egy felfelé kerekítő képlet, például a `ceil(L / 4)`, ezért a területek együtt valamivel többet adhatnak, mint az egész munka egyben, ahogy ez egy területenként árazott ajánlatnál is történne.

## Kiegészítő változatok: alapajánlat, kiegészítések és levonások

Az ajánlati terület lehet **változat**: olyan munka, amelyet a megrendelő hozzáadhat az ajánlathoz vagy kivehet belőle. Az **Ajánlati területek kezelése…** alatt minden területnek van egy listája a neve mellett:

| Választás | Mit jelent |
|---|---|
| {{ui:Alapajánlat}} | Az ajánlatban, a szokásos módon. |
| {{ui:Kiegészítő változat}} | Külön árazva, és **kimarad az alapajánlatból**: például szőnyegfrissítés, egy plusz előtető. |
| {{ui:Levonásos változat}} | Benne van az alapajánlatban, és levonásként ajánlják fel: „törölje az előtetőt”. |

A változat munkáját ugyanúgy mérje fel az ajánlati területébe, mint bármely más területet. Ha a mérésnek már van változata:

- A {{ui:Mennyiségek}} táblázat fejlécében a **Munka összesen** helyett **Alapajánlat** áll: a teljes mérés a kiegészítő változatok nélkül.
- A {{ui:Területenként}} nézet végén az alapajánlat és változatonként egy sor áll: **+$300.00** a kiegészítésnél, **−$1,050.00** a levonásnál.
- A változat csak azokat a tételeket árazza, amelyeknek van jele benne, az összetett tételeikkel együtt, így egy másik tétel összetett tételének része nem kerül bele véletlenül.

Az exportokban a CSV az alapajánlattal és a változatokkal végződik, a munkafüzetben pedig külön **Változatok** munkalap lesz: az alapajánlat, minden változat tételei és változása, valamint az alapajánlat minden kiegészítő változattal együtt.

## Az exportban

A {{ui:XLSX}} egy **Ajánlati területenként** munkalapot ad hozzá: minden terület tételeit és összetevőit a mennyiséggel, a hulladékkal együtt számolt mennyiséggel, anyaggal, munkadíjjal és összeggel, területenként egy részösszeggel (`SUM` képlet), a végén pedig **Összes ajánlati terület** sorral. A **Jelek** munkalap egy **Ajánlati terület** oszlopot kap. Ajánlati terület nélküli mérés a korábbi módon exportálódik. Lásd: [Exportoszlopok](topic:export-columns).

Az ajánlati területek a jelekkel együtt a projektfájlban mentődnek.
