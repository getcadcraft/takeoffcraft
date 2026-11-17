---
title: "Too IFC 4.3 failist kogused"
summary: "Ava IFC 4.3 fail tee, raudtee, silla või muldtööde kohta ja saa loendus klassi järgi koos pikkuste, pindalade ja mahtudega, mida fail ütleb, tüübitud kogustena."
keywords: ifc, ifc4x3, ifc 4.3, tee, raudtee, sild, kate, äärekivi, kiht, muldtööd, laager, rajatis, kogused, bim, tsiviil, tüübitud kogused
from: 6b08c2c4
---

IFC 4.3 fail võib sisaldada teid, raudteid, sildu, mererajatisi ja nende osi: katteid, kihte, äärekive, rööpaid, muldtöid, laagreid, vaiu ja muud. TakeoffCraft loeb need ja teeb neist tüübitud kogused, mida saab hinnastada.

## Faili avamine

1. Vali rühmas {{ui:Fail}} {{ui:Ava plaanid}} või vajuta {{key:Mod+O}}.
2. Vali IFC-fail (saad selle valida koos PDF-idega) või lohista see TakeoffCraftile.

Iga klassi ja ettemääratud tüübi kohta tehakse üks tüübitud kogus, näiteks „Kate (paindlik): loendus“, ja kui fail need ütleb, siis ka „pikkus“ meetrites, „pindala“ ruutmeetrites ja „maht“ kuupmeetrites. Kirje märkus ütleb, mitu elementi loeti ja mitmel polnud kogust. Sama nimega uuema faili avamine uuendab neid koguseid, selle asemel et lisada juurde.

## Mida see ei tee

- Loeb kogumikke (IfcElementQuantity), mida fail kannab. Ei mõõda 3D-kujusid, seega element ilma kogumikuta loetakse, aga ei lisa pikkust, pindala ega mahtu.
- Loetakse ainult IFC 4.3 infrastruktuuriklasse. Hoone fail (seinad, uksed, laed) ei muutu siin kogusteks; fail, mis pole IFC 4.3, ütleb seda ega too midagi sisse.
- Ühikud on faili enda omad, teisendatud meetriteks.
