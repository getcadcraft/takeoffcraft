---
title: A TakeoffCraft beállításai
summary: Hüvelykek megjelenítése 1/16, 1/8 vagy 1/4 pontossággal, minden új tétel kezdő hulladékszázaléka, az Automatikus darabszám csúszkájának kezdőpontja, illesztés a rajz vonalaihoz vagy 45°-ra Shift nélkül, az, hogy milyen széles ajtónyílást zár le a Helyiségkitöltés, és a 3D-nézet sarokjelzőjének kiválasztása.
keywords: beállítások, preferenciák, opciók, pontosság, törtek, hüvelyk, kerekítés, hulladék, alapértelmezett hulladék, automatikus darabszám, küszöb, egyezés, csúszka, illesztés, 45, szög, shift, nézetkocka, tengelyikon, sarokjelző, 3d
from: bca3f0ed
---

Nyissa meg a {{ui:Beállítások}} menüt az alkalmazássávban lévő fogaskerékkel, vagy a {{key:Mod+,}} billentyűvel. Az első lap, a {{ui:TakeoffCraft}}, ennek az alkalmazásnak a beállításait tartalmazza; a {{ui:Általános}} lap azokat, amelyeket minden CadCraft-alkalmazás közösen használ (téma, panelek, eszköztár). A TakeoffCraft beállításai csak ebben az alkalmazásban léteznek: itt módosíthatja őket, és a böngésző megjegyzi azokat. Az {{ui:A TakeoffCraft beállításainak visszaállítása}} az indulási értékekre állítja őket.

## Láb és hüvelyk

Hosszúságok megjelenítése a legközelebbi **1/16"** (kezdőérték), **1/8"** vagy **1/4"** pontossággal. Ez változtatja meg, hogyan olvashatók a hosszúságok a lapon, a paneleken, a mennyiségeknél és az állapotsorban.

Csak a megjelenítés kerekített. A mennyiségek, költségek és az exportok a pontos hosszakból készülnek, az exportok pedig mindig 1/16"-es pontossággal jelenítik meg.

## Kezdő hulladék

Az a hulladékszázalék, amellyel minden új tétel indul: 0% (kezdőérték), 2%, 3%, 5%, 7,5%, 10%, 15% vagy 20%. Minden tételnél továbbra is beírhat másik hulladékot a tételszerkesztőben, vagy közvetlenül a mennyiségi táblázatban. A már meglévő tételek megtartják a saját hulladékukat.

## Automatikus darabszám: a csúszka kezdőpontja

Az {{ui:Egyezés}} csúszka helyzete egy [Automatikus darabszám](topic:auto-count) keresés befejezésekor, 50%-tól 95%-ig; a kezdőérték 75%. Az alacsonyabb érték több hasonló elemet kínál elutasításra; a magasabb kevesebbet. Minden áttekintés közben továbbra is mozgathatja a csúszkát.

## Illesztés a rajz saját vonalaihoz

Kezdetben be van kapcsolva. Mérés vagy kalibrálás közben a PDF egyik vonalának közelében lévő pont a vonal végpontjára, felezőpontjára, metszéspontjára vagy a legközelebbi pontjára ugrik. Az {{key:F3}} billentyű és az állapotsor {{ui:Fogás}} gombja is be- és kikapcsolja. Több: [Illesztés a rajz vonalaihoz](topic:snap-to-the-drawing).

## Helyiségkitöltés: milyen széles nyílást zár le

Az {{ui:A helyiségkitöltés ennyi nyílást zár le}} megadja, mekkora ajtónyílást vagy rést tekint a {{ui:Helyiség}} eszköz zártnak: 3'-0"-tól 8'-0"-ig, kezdetben 4'-0". Ha szélesebbre állítja, mint a legszélesebb ajtó, a helyiség átnyúlhat a következőbe; ha keskenyebbre, egy ajtónál nyitva marad. Lásd: [Helyiség kitöltése egy kattintással](topic:measure-areas#fill-a-room-with-one-click).

## Illesztés 45°-ra Shift nélkül

Kezdetben ki van kapcsolva. Ha be van kapcsolva, a vonalak, körvonalak, kivágások és húzott sarkok a legutóbbi ponttól 0°, 45°, 90° vagy 135°-ban haladnak a {{key:Shift}} billentyű nyomva tartása nélkül; a Shift lenyomásával bármilyen szögben kattinthat. Az állapotsor ekkor ezt írja: „45°-ra illeszt; a Shift szabaddá teszi a szöget.” Az ív görbéjén kattintott pont és a körök sosem illeszkednek; az ív végpontja igen.

## Darabszámjelölő mérete

A darabszámpontok mérete: {{ui:Extra kicsi}}, {{ui:Kicsi}}, {{ui:Közepes}} (kezdőérték: az a méret, amilyen a pontok mindig is volt) vagy {{ui:Nagy}}. A méret minden nagyításnál megmarad a képernyőn, a megjelölt PDF pedig minden pontot ugyanakkora méretben rajzol a papíron, a lap méretétől függetlenül, így a 100%-os PDF ugyanúgy néz ki, mint a képernyő. Több: [Kézi darabszámolás](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Sarokjelző

Csak a [3D-s ellenőrző nézethez](topic:check-in-3d): {{ui:Nézetkocka}} (kezdetben: kocka a jobb felső sarokban, amelyre kattintva, húzva forgathat), {{ui:Tengelyikon}} (kis X, Y, Z jelölő a jobb alsó sarokban) vagy {{ui:Nincs}}. Azonnal változik, és a böngésző megjegyzi. A sík lapon soha nincs ilyen.

## Útvonaleszköz: a legnagyobb összekötendő hézag

Az {{ui:Útvonaleszköz: a legnagyobb összekötendő hézag}} azt adja meg, mennyire lehet két vonalvég egymástól, hogy még egy útvonalnak számítson, PDF-pontban (0,05–60; kezdetben 1,5). A rajz vonalai gyakran egy hajszállal nem érnek össze. Nagyobb érték többet köt össze; kisebb érték a vonalakat külön tartja. A {{key:[}} és a {{key:]}} billentyűk a kiválasztás közben módosítják, és ez a mező követi. Lásd: [A vonalak kiválasztása](topic:pick-the-lines).
