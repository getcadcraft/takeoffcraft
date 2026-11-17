---
title: Megjegyzések, felhők és kiemelések
summary: Kérdések és változások jelölése a lapokon megjegyzésekkel, revíziófelhőkkel és kiemelésekkel; mindegyiket nyitott, megválaszolt vagy lezárt állapotban követheti, és a jelölt PDF-ben küldheti el.
keywords: jelölés, jelölések, megjegyzés, kérdés, RFI, felhő, revíziófelhő, kiemelés, állapot, nyitott, megválaszolt, lezárt, átnézés, jelölési lista
from: 2b395c13
---

A jelölések arra valók, amit a mennyiségkimutatás készítése közben meg kell jegyezni vagy meg kell kérdezni: „erősítse meg az alaptípust”, egy módosított fal körüli revíziófelhő, egy kiemelt megjegyzés az alaprajzon. Állapotukkal együtt a lapon állnak, egy helyen vannak felsorolva, és a jelölt PDF-ben nyomtatódnak ki. **Soha nem számítanak bele**: sem mennyiség, sem költség nem tartozik hozzájuk.

## Új hozzáadása

Nyissa meg a {{ui:Jelölés}} menüt a lap fölötti sávban, és válassza ki:

| Jelölés | Hogyan |
|---|---|
| {{ui:Megjegyzés}} | Kattintson arra a helyre, ahová kerüljön, írja be a megjegyzést, és válassza a {{ui:Hozzáadás}} lehetőséget. Kerek tűként jelenik meg, mellette az első sorával. |
| {{ui:Felhő}} | Kattintson az egyik sarokra, majd a szemközti sarokra, és írjon megjegyzést (vagy hagyja üresen). Hullámos revíziófelhő veszi körül a dobozt. |
| {{ui:Kiemelés}} | Kattintson két sarokra: áttetsző sárga doboz jön létre, megjegyzéssel, ha szeretné. |

Az {{key:Esc}} az első sarok után megszakítja. Az eszköz a következőnél is bekapcsolva marad; a {{key:V}} visszavált a {{ui:Kijelölés}} eszközre.

## Állapot és szerkesztés

Kattintson egy jelölésre a {{ui:Kijelölés}} eszközzel, hogy kijelölje. A jobb oldali panel a **Jelölés** részt mutatja: a fajtáját és a lapját, az **Állapotát** – Nyitott, Megválaszolt vagy Lezárt –, és a szövegét, amelyet módosíthat. A {{key:Delete}} (vagy a {{ui:Törlés}}) eltávolítja; a {{key:Mod+Z}} visszahozza.

Egy megjegyzés tűje nyitott állapotban narancssárga, megválaszolva kék, lezárva szürke; a lezárt felhő szürkére vált.

## A lista

A jobb oldali panel **Jelölések** része a mennyiségkimutatás minden jelölését felsorolja az állapotával, és megmondja, hány van még nyitva. Jelölje be a **Csak nyitottak** jelölőnégyzetet, hogy lássa, mi van még hátra. Kattintson egy sorra, hogy a lapjára lépjen, és kijelölje.

## Megosztás

- A {{ui:Jelölt PDF}} rárajzolja a lapokra: a kiemeléseket, felhőket és tűket, mindegyiket dobozzal, amely nagybetűkkel mutatja az állapotot (NYITOTT, MEGVÁLASZOLVA, LEZÁRVA) és a szövegét. Bekerül az a lap is, amelyen csak jelölés van, mennyiségi jel nélkül.
- Az {{ui:XLSX}} egy **Jelölések** munkalapot ad hozzá: lap, fajta, állapot és szöveg, soronként egy jelölés.
- A jelölések a `.takeoff.json` fájlba és a [mennyiségkimutatást tartalmazó PDF-be](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf) mentődnek.
