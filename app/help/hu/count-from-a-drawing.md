---
title: Darabszámolás rajzból
summary: Blokkok, rétegen lévő objektumok vagy szöveg számolása közvetlenül DWG vagy DXF fájlból: pontosan, beágyazott blokkokkal, dinamikus blokk-változatokkal és blokktömbökkel, egy visszavonási lépésben.
keywords: darabszámolás rajzból, cad darabszám, blokkszámlálás, blokkok számolása, beszúrás, blokknév, beágyazott blokkok, dinamikus blokk, változat, minsert, tömb, réteg, entitástípus, körök, szöveg, attribútum, címke, rejtett rétegek, pontos darabszám, hogyan, ajtók, berendezések
from: 5060e24e
---

A {{ui:CAD darabszám}} a lapsávon (a másik menüstílusokban a **Darabszámolás a rajzból** parancs) azt számolja, amit a DWG vagy DXF szerint ott van. Ahol az {{ui:Automatikus darabszám}} egy szimbólum képét keresi, és lemaradhat egyről vagy hamisat talál, ez az objektumokat számolja: a `DOOR-36` nevű blokk minden beszúrása egy ajtó. Először nyissa meg a rajzot: [DWG vagy DXF rajz megnyitása](topic:open-a-drawing).

## Blokk számolása

1. Nyisson meg egy lapot a rajzból. A {{ui:CAD darabszám}} a lapsávon van.
2. Válassza ki. Az ablak listázza a blokkokat, és mindegyikből hány van. Keressen név szerint, majd válasszon egyet.
3. Nézze meg a lista alatti sort: „22 találat, 22 hozzáadandó.”
4. A {{ui:Hozzáadás ehhez}} alatt válasszon darabszám-tételt, vagy hagyja az {{ui:Új darabszámtétel}} lehetőséget, és adjon nevet.
5. Válassza a hozzáadás gombot, amely megnevezi a számot: {{ui:22 jelölés hozzáadása}}. A jelölések a blokk beszúrási pontjain jelennek meg, a tétel mennyisége pedig a darabszám.

Ez egy visszavonási lépés: a {{key:Mod+Z}} együtt veszi el a jelöléseket (és az új tételt). A becslés, a táblázat és a jelölt PDF a tételt úgy kezeli, mint bármely más darabszám-tételt.

### Mit számol

- **A blokknév minden beszúrása**, bármekkora a méretarány és a szög, modelltérben vagy papírtérben. A blokknevek nem érzékenyek a kis- és nagybetűkre.
- **Blokktömbök** (MINSERT): a tömb minden példánya egy.
- **Beágyazott blokkok.** Egy másik blokkba helyezett blokk minden mélységben számít. A lista azt írja: „6 más blokkon belül”; a {{ui:A más blokkok belsejében lévő blokkokat is számolja}} kikapcsolásával csak a rajzba közvetlenül beszúrt példányokat számolja.
- **Dinamikus blokkok.** Dinamikus blokk a saját nevén számol, nem a fájl által tartott névtelen másolatok (`*U12`) alatt. Állapotai külön vannak listázva („Egyszeres 12, Dupla 4”): válasszon egy állapotot, hogy csak azokat számolja, vagy az {{ui:Minden változat}} lehetőséget. Ha a fájl nem mondja meg, melyik állapotot mutatja egy példány, azok „(állapot ismeretlen)” néven szerepelnek.
- **Rétegszűrő.** Több rétegen lévő blokk esetén válasszon egyet a {{ui:Rétegen}} alatt.

### Mit nem

- **Rejtett rétegek.** A fájlban kikapcsolt vagy befagyasztott rétegen lévő objektum (vagy amelyet a {{ui:Rétegek}} alatt elrejtett) kimarad, és a sor megmondja, hány: „3 rejtett rétegen kihagyva”. A {{ui:Ezeket is számolja}} bejelölésével ezek is beletartoznak.
- **Nincs megnyitva a külső hivatkozású rajz.** Nem számolódik; az ablak ezt jelzi.
- **Pontosan egy másik fölé halmozott, azonos fajtájú objektumok** kettőként számolódnak (két objektum), az ablak ezt jelzi: általában rajzolási hiba, érdemes ránézni.

## Ez a lap mutatja, vagy a teljes rajz

- **Ez a lap mutatja** a lap által megjelenített objektumokat: elrendezésen a nézetablakaiban lévő modellobjektumokat (a nézetablakban befagyasztott réteg nem számolódik ott), plusz az elrendezés saját objektumait.
- **A teljes rajz, minden objektum egyszer** a modelltér egyszeri számolása, a **Modell** lapon lévő jelölésekkel, és nem számolja újra azt, amit több elrendezés is mutat.

Az elrendezésen látható és a Modell által mutatott objektumok számolása ugyanazt a számot adja; egy tételhez ne adja hozzá mindkettőt.

## Darabszám újraszámolása

Ugyanazt a blokkot újra számolva ugyanahhoz a tételhez csak az újat adja hozzá: „22 már számolva.” Minden jelölés egy objektumot jelent.

## Réteg és típus szerint

A {{ui:Réteg és típus szerint}} lehetőségnél válasszon egy réteget és egy objektumtípust (körök, polivonalak, sraffozások…): „minden kör az E-LITE rétegen”. A {{ui:Az blokkokban lévő objektumokat is számolja}} bejelölésével a blokkdefiníciókon belüliek is beletartoznak, minden helyen, ahová a blokk be van szúrva.

## Szöveg szerint

A {{ui:Szöveg szerint}} lehetőségnél írja be a szöveget, például `A3`, és adja meg, hogy pontosan az, tartalmazza, vagy egész szóként szerepel-e. A szöveges objektumok, a többsoros szöveg és a blokkattribútumok értékei mind számítanak (a `ITEM = A3` címkeattribútum megtalálható); egy attribútumra korlátozáshoz válassza az {{ui:Attribútumban}} lehetőséget. A leggyakoribb szövegek kattintható listában vannak.

## Mikor használja inkább az Automatikus darabszámot

Használja az {{ui:Automatikus darabszám}} funkciót PDF-ekhez és olyan szimbólumokhoz a rajzban, amelyek nem blokkok (lazán rajzoltak vagy szétbontottak). Blokkként rajzoltakat itt számolja.
