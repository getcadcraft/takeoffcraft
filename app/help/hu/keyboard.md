---
title: Billentyűzet és egér
summary: TakeoffCraft minden billentyűje, egérművelete, érintőpados és érintőképernyős művelete csoportosítva, a platformok közötti különbségekkel.
keywords: billentyűk, billentyűparancsok, gyorsbillentyűk, billentyűzet, egér, érintőpad, érintés, eltolás, nagyítás, görgő, jobb klikk, dupla kattintás, szóköz, Shift, másolás, kivágás, beillesztés, kettőzés, összes kijelölése
from: 6f2c441d
---

A betűbillentyűk akkor működnek, ha a mutató az oldal bármely pontján van, és nem ír mezőbe. Párbeszédpanel nyitott állapotában annak saját billentyűi érvényesek. A betűk a {{key:Shift}} billentyűvel vagy anélkül is működnek.

## Eszközök

| Billentyű | Eszköz |
|---|---|
| {{key:V}} | {{ui:Kijelölés}} |
| {{key:L}} | {{ui:Vonalas}} |
| {{key:A}} | {{ui:Terület}} |
| {{key:O}} | {{ui:Kör}} |
| {{key:B}} | {{ui:Helyiség}} (helyiség kitöltése egy kattintással) |
| {{key:R}} | {{ui:Ív}} be vagy ki (a Vonalas, a Terület és a Kivágás eszköznél) |
| {{key:E}} | {{ui:Levonás}} be vagy ki: a futás következő szakaszai ki lesznek rajzolva, de nem számítanak bele |
| Számjegy, `@` vagy `#` rajzolás közben | Megnyitja a {{ui:Beírás}} mezőt: adjon meg hosszt vagy koordinátákat, a {{key:Enter}} elhelyezi a pontot ([Vonalas futások mérése](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Kivágás}} (előbb jelöljön ki egy területet) |
| {{key:C}} | {{ui:Darabszám}} |
| {{key:S}} | {{ui:Automatikus darabszám}} |
| {{key:K}} | {{ui:Kalibrálás}} |
| {{key:D}} | {{ui:Ellenőrzés}} – a méretarány ellenőrzése |

## Rajzolás közben

| Billentyű vagy művelet | Mit csinál |
|---|---|
| Kattintás | Pont elhelyezése (pötty, a Darabszámmal). |
| {{key:P}} | Útvonal: egy PDF-vonal teljes összefüggő útvonalának, vagy a kattintás körüli körvonalnak a kiválasztása ([PDF vonalainak kiválasztása](topic:pick-the-lines)). |
| {{key:F3}} | A fogás a rajz vonalaihoz be vagy ki ([Fogás a rajz vonalaihoz](topic:snap-to-the-drawing)). |
| {{key:Shift}} nyomva tartva kattintáskor | A szakasz fogása az utolsó ponttól 0°, 45°, 90° vagy 135° irányba. Ívpontoknál és köröknél nem. |
| Dupla kattintás | Futás befejezése, vagy terület vagy kivágás lezárása. |
| {{key:Enter}} | Futás befejezése, vagy terület vagy kivágás lezárása. |
| Jobb klikk (mozgatás nélkül) | Futás befejezése, vagy terület vagy kivágás lezárása. |
| Kattintás az első pontra | Terület vagy kivágás lezárása (a harmadik ponttól). |
| {{key:Backspace}} vagy {{key:Delete}} | Az utolsó pont eltávolítása (előbb a függőben lévő ívpont). |
| {{key:Esc}} | A függőben lévő ívpont elvetése; majd a befejezetlen jelölés megszakítása; majd visszatérés a {{ui:Kijelölés}} eszközre. |

## Kijelölés és szerkesztés

| Billentyű vagy művelet | Mit csinál |
|---|---|
| Kattintás egy jelölésre (Kijelölés eszköz) | Kijelöli, és az elemét teszi aktuálissá. |
| {{key:Shift}} + kattintás egy jelölésre | Hozzáadja a kijelöléshez, vagy kiveszi belőle. |
| {{key:Mod+A}} | Kijelöl minden jelölést a megnyitott lapon. |
| Sarokfogantyú húzása | Az adott pont mozgatása ({{key:Shift}} 45°-os fogást ad). Egy kijelölt jelölésnél működik. |
| {{key:Delete}} vagy {{key:Backspace}} | A kijelölt jelölések törlése (ha nem rajzol). |
| {{key:Esc}} | A kijelölés megszüntetése: a kijelölés és az ellenőrző vonal törlése. |
| {{key:Mod+Z}} | Visszavonás. |
| {{key:Mod+Y}} vagy {{key:Mod+Shift+Z}} | Ismétlés. |

## Másolás és beillesztés

| Billentyű | Mit csinál |
|---|---|
| {{key:Mod+C}} | A kijelölt jelölések másolása, a tételeikkel együtt. |
| {{key:Mod+X}} | Kivágás: a kijelölt jelölések másolása, majd törlése. |
| {{key:Mod+V}} | Beillesztés: a másolat követi a mutatót; kattintson arra a helyre, ahová kerüljön. |
| {{key:Mod+Shift+V}} | Beillesztés helyben: ugyanarra a helyre az aktív lapon. |
| {{key:Mod+D}} | A kijelölt jelölések kettőzése: a másolat követi a mutatót; kattintson arra a helyre, ahová kerüljön. |
| {{key:Esc}} | Semmi lerakása: a mutatón lévő beillesztés vagy kettőzés megszakítása. |

A betűk önmagukban is eszközt választanak ({{key:C}} a {{ui:Darabszám}}, {{key:D}} az {{ui:Ellenőrzés}}, {{key:X}} a {{ui:Kivágás}}, {{key:V}} a {{ui:Kijelölés}}, {{key:A}} a {{ui:Terület}}); csak a {{key:Mod}} billentyűvel együtt másolnak és illesztenek be. Szövegmezőben ezek a billentyűk a szokásos módon másolnak és illesztenek be szöveget. Lásd: [Jelölések másolása, beillesztése és kettőzése](topic:copy-paste).

:::warning
A {{key:Backspace}} törli a kijelölt jelölést, ha nem rajzol. Ha ez véletlenül történne, a {{key:Mod+Z}} visszahozza.
:::

## Fájlok

| Billentyű | Mit csinál |
|---|---|
| {{key:Mod+O}} | {{ui:Tervek megnyitása}} |
| {{key:Mod+S}} | {{ui:Mennyiségkimutatás mentése}} |

Ez a két billentyű akkor is működik, ha mezőbe ír.

## Nézet és lapok

| Billentyű vagy művelet | Mit csinál |
|---|---|
| Egérgörgő | Nagyítás és kicsinyítés a mutatónál. |
| Húzás (bal, középső vagy jobb gombbal) | Eltolás. Az {{ui:Automatikus darabszám}} eszközzel a bal oldali húzás a keresőmezőt rajzolja. |
| {{key:Space}} nyomva tartva + húzás | Eltolás, bármely eszköznél. |
| {{key:F}} | {{ui:Oldal illesztése}} |
| {{key:W}} | {{ui:Szélesség illesztése}} |
| {{key:Plus}} vagy {{key:=}} | Nagyítás a nézet közepén. |
| {{key:Minus}} | Kicsinyítés a nézet közepén. |
| {{key:PageDown}} / {{key:PageUp}} | Következő vagy előző lap a lapok listájában. |
| {{key:Ctrl+Shift+F}} | Teljes képernyős módok váltogatása (Control minden platformon, Mac-en is). |
| {{key:F1}} | Ez a súgó megnyitása vagy bezárása, oldalsó panelként. |
| {{key:3}} | A lap 3D-s ellenőrző nézete be vagy ki. |

## 3D nézet

| Billentyű vagy művelet | Mit csinál |
|---|---|
| Húzás, vagy húzás a középső gombbal | Körbeforgatás. |
| {{key:Shift}} + húzás, vagy húzás a jobb gombbal | Eltolás. |
| Egérgörgő | Nagyítás a mutatónál. Érintőpadon a kétujjas húzás körbeforgat, a csippentés nagyít. |
| Kattintás | A mutató alatti jelölés kijelölése ({{key:Shift}} + kattintás hozzáad vagy kivesz). |
| {{key:F}} vagy {{key:W}} | Nagyítás a kiterjedésre. |
| {{key:3}} | Vissza a lapos lapra. |

Lásd: [A mennyiségkimutatás ellenőrzése 3D-ben](topic:check-in-3d).

## Automatikus darabszám

| Billentyű vagy művelet | Mit csinál |
|---|---|
| Húzás egy dobozt | A keresendő jelkép bekeretezése (ez indítja a keresést). |
| Kattintás egy találati dobozra | Elutasítás, vagy visszaállítás. |
| {{key:Esc}} | Futó keresés megszakítása, vagy az áttekintés elvetése. |

## Súgó

| Billentyű | Mit csinál |
|---|---|
| {{key:F1}} | A súgópanel megnyitása vagy bezárása (ugyanaz, mint az alkalmazássávon lévő {{ui:Súgó}} gomb). Minden eszközben működik, még szövegmezőbe íráskor is. |
| {{key:Esc}} | A súgópanel bezárása. A keresőmezőjében az első Esc törli a keresést. Ha a panel nyitva van, és a lapra kattintás után nyomja meg az Esc-et, előbb a panel záródik be; újabb megnyomásra a TakeoffCraftban megszakítja a műveletet. |

:::mac
A Mac billentyűzetek többségén a felső sor a fényerőt és a hangerőt szabályozza. Az F1-hez nyomja meg az fn billentyűt, vagy kapcsolja be a Rendszerbeállításokban, a Billentyűzet alatt, az „F1, F2 stb. billentyűk használata szabványos funkcióbillentyűként” beállítást.
:::

## Párbeszédpanelek és mezők

| Billentyű | Mit csinál |
|---|---|
| {{key:Enter}} | Mezőben: az érték alkalmazása. A kalibrálási párbeszédpanelben: {{ui:Méretarány beállítása}}. |
| {{key:Esc}} | Párbeszédpanel bezárása (mint a {{ui:Mégse}}); az {{ui:Új tétel}} űrlap bezárása. |
| {{key:Tab}} | Ugrás a következő mezőre. |

## Platformspecifikus megjegyzések

:::mac
- A {{key:Mod}} a Command billentyű: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Kivétel a teljes képernyő: Control+Shift+F.
- A jobb klikk érintőpadon kétujjas kattintás, ha a másodlagos kattintás be van kapcsolva a Rendszerbeállításokban, az Érintőpad alatt. A TakeoffCraft csak a másodlagos gombot olvassa; a Control-kattintás egyszerű kattintásnak számíthat, és pontot ad hozzá.
- Érintőpadon két ujjal görgetve a lap nagyít (nem görgetődik). Eltoláshoz nyomja meg és húzza, vagy tartsa nyomva a szóközt, és húzzon.
- A Page Up és a Page Down az fn billentyűvel és a fel- és le-nyilakkal érhető el azokon a billentyűzeteken, amelyeken nincs külön.
- A Backspace az a billentyű, amelyen a delete felirat van.
:::

:::windows
- A {{key:Mod}} a Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Laptop érintőpadján a kétujjas görgetés nagyítja a lapot. Eltoláshoz nyomja meg és húzza.
:::

:::linux
- A {{key:Mod}} a Ctrl. Néhány asztali környezet saját Ctrl+Alt vagy Super billentyűparancsokat használ; a TakeoffCraft egyiket sem használja.
- Érintőpadon a kétujjas görgetés nagyítja a lapot. Eltoláshoz nyomja meg és húzza.
:::

:::touch
A TakeoffCraft az érintést egyetlen mutatóként kezeli:

- A koppintás pontot helyez el, jelölést választ ki, vagy darabszám-pontot ad hozzá.
- Egyujjas húzás eltolja a lapot ({{ui:Automatikus darabszám}} alatt a keresőmezőt rajzolja).
- A csippentéssel való nagyítás még nem támogatott. Használja az {{ui:Oldal illesztése}} és a {{ui:Szélesség illesztése}} gombot, vagy billentyűzeten a {{key:Plus}} és a {{key:Minus}} billentyűt.
- Terület lezárásához koppintson az első pontjára. Futás befejezéséhez koppintson duplán ott, ahol a böngésző a dupla koppintást dupla kattintásnak veszi, vagy billentyűzeten nyomja meg az {{key:Enter}} billentyűt.
- Nincs élő hosszkijelzés, amíg nem koppint, mert nincs lebegő mutató.

Ma a billentyűzet és egér vagy érintőpad a jobb mód a mennyiségkimutatás készítéséhez.
:::

## A böngésző által fenntartott billentyűk

A böngészők néhány billentyűparancsot megtartanak maguknak, és az oldal ezeket nem használhatja: a fül bezárása ({{key:Mod+W}}), új fül vagy ablak ({{key:Mod+T}}, {{key:Mod+N}}) és a böngésző nagyítása ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Ezért nagyítja a TakeoffCraft a lapot a görgővel és a sima {{key:Plus}} és {{key:Minus}} billentyűkkel. Ha véletlenül megnyomja a {{key:Mod+Plus}} billentyűt, az egész oldal nagyobb lesz; a {{key:Mod+0}} visszaállítja. Lásd: [Billentyűk, egerek és érintőpadok](common:keys).

## A mozgatás helye

Nincs mozgatás parancs: jelöljön ki egy darabszám-pontot, és húzza, vagy jelöljön ki egy területet vagy vonalat, és húzza a sarokfogantyúit.
