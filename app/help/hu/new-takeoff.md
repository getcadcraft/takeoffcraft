---
title: Új mennyiségkimutatás indítása
summary: Minden törlése, és egy üres mennyiségkimutatás indítása az oldal újratöltése nélkül, az előtt biztonságba helyezve a munkát.
keywords: új, új mennyiségkimutatás, ürítés, visszaállítás, újrakezdés, üres, PDF-ek bezárása, következő munka
from: 16d392a4
---

Az {{ui:Új}} bezár minden PDF-et, és egy üres mennyiségkimutatást indít ugyanazon az oldalon.

1. Mentse el az aktuális mennyiségkimutatást, ha meg szeretné tartani: {{ui:Mennyiségkimutatás mentése}} vagy {{key:Mod+S}}.
2. Válassza a **Fájl** csoportban az {{ui:Új}} lehetőséget.
3. Ha vannak nem mentett módosítások, a TakeoffCraft megkérdezi: **Nem mentett mennyiségkimutatás**. Válassza az {{ui:Előbb a mennyiségkimutatás mentése}} lehetőséget (letölti a projektet, majd üríti), a {{ui:Módosítások elvetése}} lehetőséget, vagy a {{ui:Mégse}} lehetőséget.
   Az ablak visszatér az üres állapotába: nincs PDF, nincs tétel, nincs jelölés, nincs méretarány. Az állapotsor ezt írja: „Új mennyiségkimutatás. A kezdéshez nyisson meg PDF-eket.”

Ami törlődik:

- minden megnyitott PDF, a lapjai és a bélyegképei,
- tételek, összetevők, jelölések és méretarányok,
- minden lap nagyítása és helyzete,
- a visszavonási előzmény (az {{ui:Új}} nem vonható vissza),
- az ív mód, és minden automatikus darabszám-keresés vagy áttekintés.

A lemezen lévő fájljai érintetlenek maradnak. A korábbi mennyiségkimutatás visszaállításához nyissa meg a `.takeoff.json` fájlját és a PDF-eket: lásd [Mennyiségkimutatás mentése és újranyitása](topic:save-and-reopen).

:::note
Minden új mennyiségkimutatás tétel nélkül indul. A tételek átviteléhez először másolja őket: a **Tételek** alatt a {{ui:Tétel másolása}} lehetőséggel (vagy jelölések másolásával, amelyek a tételeiket is viszik), majd az új mennyiségkimutatásban a {{ui:Beillesztés}} lehetőséggel. Lásd: [Jelölések másolása, beillesztése és kettőzése](topic:copy-paste). Az minden munkánál használt tételeket tartsa az [árlistájában](topic:price-library), és onnan adja hozzá őket, vagy adjon hozzá egy [szakági csomagot](topic:trade-packs).
:::
