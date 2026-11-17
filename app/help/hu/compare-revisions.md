---
title: Átdolgozott lap összehasonlítása és a mennyiségkimutatás áthelyezése
summary: Fedje a régi lapot az átdolgozottra, igazítsa egymásra, nézze meg, mi változott, és helyezze át a mennyiségkimutatást az új lapra, a megjelölt, ellenőrzendő jelölésekkel.
keywords: átdolgozás, átdolgozott, összehasonlítás, átfedés, régi, új, változások, kiegészítés, közlemény, újrakiadás, mennyiségkimutatás áthelyezése, átvitel, átvezetés, igazítás, megjelölt, ellenőrzés
from: 3a1d9fe0
---

Ha egy lapot újra kiadnak, nem kell újra felmérnie. Nyissa meg a régi és az új PDF-et, hasonlítsa össze a két lapot, és vigye át a mennyiségkimutatást. A TakeoffCraft minden olyan jelölést megjelöl, ahol a rajz változott, így ezeket ellenőrizheti, a többit pedig megtartja.

## Összehasonlítás

1. Nyissa meg mindkét PDF-et: a régi és az átdolgozott készletet ({{ui:Tervek megnyitása}}; lehetnek egy fájlban vagy többben).
2. Jelenítse meg az **új** lapot.
3. Válassza a {{ui:Összehasonlítás}} lehetőséget a rajz alatti lapsávon.
4. Válassza ki a régi lapot a listából. A TakeoffCraft a másik PDF-ben a azonos számú lapot, vagy ugyanazt az oldalt javasolja. Válassza az **Összehasonlítás** gombot.

A régi rajz most pirosan fekszik az új fölött. Ahol a két rajz megegyezik, a piros vonalak a feketék alatt vannak; ahol eltérnek, csak piros vonalakat lát (eltávolítva), és csak fekete vonalakat (hozzáadva). A lap alján lévő sáv tartalmazza az alábbi lépéseket; az {{key:Esc}} vagy a {{ui:Bezárás}} befejezi az összehasonlítást.

## Igazítás

Az átdolgozott lapokat gyakran kissé eltolva nyomtatják: a lapon elmozdulnak, vagy kicsit más méretűek. Ha a piros rajz nem fekszik a fekete fölé, válassza az **Igazítás két pont alapján** lehetőséget, és négyszer kattintson:

1. egy pont a régi (piros) rajzon, például egy oszlop közepe vagy egy épületsarok,
2. ugyanez a pont az új (fekete) rajzon,
3. egy második pont a piros rajzon, az elsőtől messze,
4. ugyanez a pont a fekete rajzon.

A piros rajz a fekete fölé mozdul, elfordul és méretezi magát. Az állapotsor megmondja, mennyivel nagyobb az új rajz („size × 1.000”, ha ugyanakkora). Nagyítson rá a kattintásokhoz: minél pontosabban kattint, annál jobb az illeszkedés.

## Változások keresése

Válassza a **Változások keresése** lehetőséget. A TakeoffCraft összehasonlítja a két rajz tintáját: a csak a régi lapon lévő tinta pirosra vált, a csak az új lapon lévő kékre, az állapotsor pedig megszámolja őket. A minimálisan (egy hajszálnyit) eltolt vonalak (újranyomtatás) nem számítanak változásnak.

Azt is megnézi minden régi lapon lévő jelölést, és megszámolja azokat, amelyek ott vannak, ahol a rajz változott:

- egy szakasz vagy terület, ha a rajz megváltozott az egyik végénél vagy sarkánál, vagy legalább hosszának körülbelül egyhatodán;
- egy darabszám, ha valami megváltozott közvetlenül mellette.

## Mennyiségkimutatás áthelyezése

Válassza a **Mennyiségkimutatás áthelyezése ide** lehetőséget. A régi lap minden jelölése az igazításon keresztül átkerül az új lapra, egyetlen visszavonási lépésben. Azok, amelyek egy változás mellett vannak, meg vannak jelölve: narancssárga körvonallal rajzolódnak, a lapsáv pedig „(n) ellenőrzendő” szöveget mutat.

Ha az új lapnak nem volt méretaránya, átveszi a régi lap méretarányát (módosítva, ha a rajzokat az igazításhoz méretezni kellett). Ha már volt eltérő méretaránya, a TakeoffCraft előbb kérdez: az áthelyezett jelöléseket az új lap méretarányával mérjük.

## A megjelölt jelölések ellenőrzése

1. Válassza a lapsávon a „(n) ellenőrzendő” lehetőséget. A rendszer a következő megjelölt jelölésre nagyít, és kijelöli azt; a panelje megmondja, miért van megjelölve.
2. Javítsa a jelölést, ha a rajz megváltozott alatta (húzza a sarkait, adjon hozzá vagy töröljön jelöléseket, vagy vegye le újra).
3. Válassza az **Ellenőrizve** lehetőséget a panelen. A megjelölés eltűnik, a lapsávon lévő szám pedig csökken.

A megjelölések a mennyiségkimutatással együtt mentődnek, így később is ellenőrizheti őket.

:::note
Az összehasonlítás vektoros PDF-eknél és szkenneléseknél egyaránt működik, mert azt hasonlítja össze, ami rajzolva van. A ferdén vagy nyújtva szkennelt lap csak nagyjából illeszkedhet két ponttal; ilyenkor több jelölést nézzen át szemmel.
:::
