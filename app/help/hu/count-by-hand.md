---
title: Darabszámolás kézzel
summary: Kattintson minden ajtóra, berendezési tárgyra vagy eszközre a megszámláláshoz, ellenőrizze a számokat, és javítsa a hibákat.
keywords: darabszám, mindegyik, ea, berendezések, ajtók, eszközök, szimbólumok, számlálás, kattintásos számlálás, kézi számlálás
from: 594f2980
---

A darabszámú tétel dolgokat számol: ajtókat, lámpatesteket, csatlakozókat, vízvezeték-szerelvényeket. A lapon minden kattintás egy darabszám-jelölést ad hozzá. A számoláshoz nincs szükség méretarányra.

## Számolás

1. Hozzon létre vagy kattintson egy darabszámú tételre a {{ui:Tételek}} alatt ({{ui:Darabszám}} típus).
2. Válassza a {{ui:Darabszám}} lehetőséget az eszköztáron, vagy nyomja meg a {{key:C}} billentyűt.
3. Kattintson minden egyes elemre a lapon.
   Minden kattintás a tétel színével pontot tesz, a tétel darabszáma pedig eggyel nő.
4. Lépjen a következő lapra ({{key:PageDown}}), és folytassa a számolást. Az eszköz a {{ui:Darabszám}} maradt.
5. Nyomja meg az {{key:Esc}} billentyűt, ha végzett. A TakeoffCraft visszalép a {{ui:Kijelölés}} eszközre.

A húzás továbbra is mozgatja a lapot, és a görgő is nagyít számolás közben, így körbe tud járni a lapon anélkül, hogy pontokat adna hozzá.

:::tip
Kattintson a darabszámú tételre, hogy kiemelje a pontjait minden lapon. A lapok listája ekkor megmutatja, hány van az egyes lapokon, ami segít megtalálni a még nem számolt lapokat.
:::

## Darabszám javítása

- **Pont eltávolítása**: válassza a {{ui:Kijelölés}} ({{key:V}}) eszközt, kattintson a pontra, és nyomja meg a {{key:Delete}} billentyűt, vagy válassza a {{ui:Jelölés törlése}} lehetőséget. Vagy közvetlenül a rossz kattintás után nyomja meg a {{key:Mod+Z}} billentyűt.
- **Pont áthelyezése**: jelölje ki, majd húzza.
- **Rossz tételhez számolva**: jelölje ki a pontot, és a **Kijelölt jelölés** alatt válassza ki a megfelelő darabszámú tételt a **Tétel** listából.

## Pontméret a képernyőn és a PDF-ben

A pontok a képernyőn mindig egyforma méretűek, bármennyire nagyít. A méret módosításához nyissa meg a {{ui:Beállítások}} menüt, a TakeoffCraft lapot, és válassza a **Darabszámjelölő mérete** lehetőséget: Extra kicsi, Kicsi, Közepes (az alapértelmezett) vagy Nagy.

A PDF-export ({{ui:Exportálás}} › a jelölt PDF) minden pontot ugyanakkora méretben rajzol papíron, bármekkora is a lap: a 100%-ban megjelenített PDF ugyanolyan nagynak mutatja a pontokat, mint a képernyőn. Ahol a pontok egy lapon összeérnének, az export arra a lapra kisebbre méretezi a pontokat, hogy mindegyik olvasható maradjon.

## Sok azonos szimbólum

Olyan szimbólumhoz, amely sokszor ismétlődik a lapon, próbálja ki az [Automatikus darabszám](topic:auto-count) funkciót: jelöljön be egyet, nézze át, mit talált, és adja hozzá mindet egy lépésben.

## Darabszámok használata képletekben

A darabszámú tétel mennyisége **N**. Az összetett tétel összetevői felhasználhatják, például az ajtózsanérok ajtónként `N * 3`. Lásd: [Összetett tételek és képletek](topic:assemblies).
