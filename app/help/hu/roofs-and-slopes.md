---
title: Tetők és lejtések
summary: Adjon meg egy területnek hajlást, hogy a tetőfelületet az alaprajzról mérhesse, és az oromeleket, gerinceket és völgyeket a lejtés mentén mérje.
keywords: tető, hajlás, lejtés, lejtési tényező, emelkedés, futás, 6:12, oromél, gerinc, völgy, oromfal, tetőfedés, négyzetek, lejtős terület, valódi hossz, alaprajzi terület
from: 38225b60
---

A tetőalaprajz minden tetősíkot laposan mutat, felülnézetből. A tető maga nagyobb: a 6:12 hajlású sík felülete körülbelül 12%-kal nagyobb, mint az alaprajzi felülete, és a lejtős élei hosszabbak, mint amilyennek látszanak. Adja meg a tételnek a hajlását, és a TakeoffCraft a lejtés mentén mér.

## Hajlás megadása

A hajlás a 12 egységnyi futásra jutó emelkedés, ahogy a tetőalaprajz hajlásjelein is szerepel. Írja be `6:12`, `6/12` vagy csak `6` alakban; más futás is működik (`4:10` azt jelenti, hogy 4,8:12). Szög fokjellel is megadható: `26.57°`. Üres vagy `0` érték sík tetőt jelent.

## Tetőterületek

1. Hozzon létre egy területi tételt a tetőfedéshez, vagy nyissa meg a meglévőt.
2. A beállításai között írja be a **Hajlás** mezőbe, például `6:12`-t.
3. Rajzolja körül a tetősíkokat az alaprajzon a {{ui:Terület}} eszközzel, a szokásos módon.

Minden sík az alaprajzi területét szorozza a lejtési tényezővel: √(1 + (emelkedés ÷ 12)²), ami 6:12-nél 1,118, 12:12-nél 1,414. Jelöljön ki egy síkot, és látni fogja a **Terület** (a lejtőn), az **Alaprajzi terület** és a **Lejtési tényező** értékét.

Más hajlású síkok: jelölje ki a síkot, és írja be a saját **Hajlás** értékét a panelen. Ha üresen hagyja, a tétel értékét használja. A 3D-s ellenőrző nézet, az összetevők (az `A` a lejtős terület), az egységárak és az exportálás mind a lejtős területet használják. A ferde síkon lévő levonások, például a tetőablakok, ugyanabban a lejtésben vonódnak le.

A kerület (`P`) az alaprajzi kerület marad. Az ereszeket, oromeleket, gerinceket és völgyeket futásként mérje (lent).

## Oromélek, gerincek és völgyek

1. Hozzon létre egy vonalas tételt, például „Oromél” vagy „Gerincek” néven.
2. Állítsa a **Lejtés** értékét **Oromél** (lejtős szél, mint egy oromfalnál) vagy **Gerinc vagy völgy** (az a vonal, ahol két sík találkozik) értékre, és írja be a tetősíkok **Hajlás** értékét.
3. Rajzolja meg a futásokat az alaprajzon a {{ui:Vonalas}} eszközzel.

Az oromél az alaprajzi hosszát szorozza a lejtési tényezővel. A gerinc vagy völgy 45°-ban fut az alaprajzon két azonos hajlású sík között, ezért valódi hossza az alaprajzi hossza × √(1 + (emelkedés ÷ 12)² ÷ 2): 6:12-nél 1,061, 12:12-nél 1,225.

Egy futás vegyesen is tartalmazhat ilyeneket. Jelölje ki: a panelen minden szakasznak van lejtéslistája — **A tétel** (a tétel beállítása), **Vízszintes**, **Oromél** vagy **Gerinc vagy völgy** — és a lejtés menti hossza. A futás saját **Hajlás** értéke a panelen felülírja a tétel értékét az összes szakaszra. A panel az **Alaprajzi hosszt** is mutatja, a rajzon pedig a lejtés menti hosszak láthatók.

A levonások továbbra is működnek: a levont szakasz sem lejtősen, sem síkban nem számít bele.

:::note
A gerinceknél és völgyeknél azt feltételezzük, hogy mindkét sík azonos hajlású. Eltérő hajlású síkok esetén mérje a gerincet a valódi hosszával máshol, vagy rajzolja oromélként egyenértékű hajlással.
:::
