---
title: Mérés a rajzból
summary: Hosszúságok és területek felvétele a rajz saját vonalaiból, íveiből, polivonalaiból és kitöltéseiből kiválasztással, pontos ívekkel és lyukakkal, a kézi, kattintásos követés helyett.
keywords: rajz mérése, geometria, polivonal, ív, kör, kitöltés, kidudorodás, pontos hossz, pontos terület, kiválasztás, ablak, követés, CAD, vonalas, terület
from: fd734246
---

A {{ui:Rajz mérése}} a DWG- vagy DXF-lap lapsávján a rajz saját objektumait jelölésekként veszi át, így nem kell kattintásokkal követni őket. Egy polivonal hossza, egy ív hossza, egy kör területe és egy kitöltés területe a lyukaival együtt pontosan jön ki, a mennyiségkimutatás minden jelölésénél használt számítással.

## Objektumok felvétele vonalas vagy területtételként

1. Hozzon létre vagy kattintson egy **vonalas** vagy **területi** tételre a {{ui:Tételek}} alatt. A lapnak méretarány kell.
2. Válassza a {{ui:Rajz mérése}} lehetőséget.
3. Kattintson a lapon lévő objektumokra a kiválasztásukhoz, vagy húzzon köréjük ablakot: minden, ami teljesen benne van, kiválasztódik. A {{key:Shift}} billentyűvel az ablak hozzáadódik a kijeléshez; a kiválasztott objektumra újra kattintva kiveszi. A sáv mutatja az összesítést: „6 futás: 108'-9 1/8" összesen.”
4. Válassza a hozzáadó gombot, amely megnevezi a számot és a tételt, például a {{ui:6 hozzáadása ide: Edge}} gombot (vagy nyomja meg az {{key:Enter}} billentyűt). Minden objektum a tétel egy jelöléseként kerül be, egyetlen visszavonási lépésben. Az {{key:Esc}} törli, amit kiválasztott.

## Mit vesz fel az egyes tételtípus

- Egy **vonalas** tétel hosszúság szerint veszi fel a vonalakat, íveket, polivonalakat, köröket és spline-okat. A zárt alakzat a kerülete szerint számít. A kitöltés kimarad: területe van, hossza nincs, és a sáv ezt megmondja.
- Egy **területi** tétel a zárt alakzatokat veszi fel: a zárt polivonalakat, köröket, 2D testeket, és a lyukakkal együtt a kitöltéseket. A nyitott futások kimaradnak, és a sáv ezt megmondja.

## Pontos és szinte pontos

A vonalak, az ívek (bármilyen kidudorodással), a kidudorodásos polivonalak és a körök pontosak: a hossz és a terület az ív sugarából és ívhosszából számolódik, nem a rajz képéből. Az ellipszisek, a spline-ok és azok a kitöltések, amelyek határa élekből áll, egy fokos vagy annál finomabb húrokkal mérődnek; ez az ellipszisek esetében a század százalékon, a többi esetben a tized százalékon belüli pontosságot ad. A sáv megmondja, hány olyan görbe van a kiválasztottak között, amely ebbe a fajtába tartozik.

## Honnan veszi

- **Modell**: a modelltérben lévő objektumok. **Egy elrendezés**: a saját vonalai, és a nézetablakon belüli modellobjektumok, azok a nézetablakon keresztül léptékezve. Az az objektum, amely átlép egy nézetablak szélén, nem ajánlódik fel (levágva nyomtatódna); az, amelyet két nézetablak is mutat, egyszer kerül be.
- Csak azokat a rétegeket, amelyeket a lap mutat. A blokkok számolódnak, nem mérődnek: lásd [Számlálás rajzból](topic:count-from-a-drawing). A 3D polivonalak, hálók, testek és régiók nem ajánlódnak fel.
