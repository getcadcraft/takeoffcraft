---
title: Címkejegyzék betöltése mennyiségként
summary: Az épületmodellből exportált címkejegyzék (CSV) típusos mennyiségekké válik a mennyiségkimutatásban, címkénként egyre, így a modell darabszámai és területei a saját méréseivel együtt láthatók.
keywords: címkék, címkejegyzék, épületmodell, BimCraft, IFC, mennyiségek, csv, kimutatás, importálás, típusos mennyiség
from: a60c19b6
---

Az eszköztár {{ui:Tags}} gombja a BimCraftban CSV-fájlként mentett címkejegyzéket tölti be. Minden különböző címke egy típusos mennyiséggé válik, ugyanolyanná, mint a CivilCraft vágás és feltöltés mennyiségei.

1. A BimCraftban készítse el a kívánt címkejegyzéket, és mentse CSV-ként.
2. Válassza a {{ui:Tags}} lehetőséget, és válassza ki a fájlt.
3. Adja meg, melyik oszlop nevezze el a sort ({{ui:Name the line by}}, általában a címke), és melyik tartalmazza a számot ({{ui:Quantity from}}). A {{ui:Count the rows}} beállítással minden sor egynek számít.
4. Válassza ki a mértékegységet. A milliméterben megadott hosszúság méterré válik a {{ui:Multiply by}} 0.001 szorzóval.
5. {{ui:Add the quantities}}.

Az azonos címkéjű sorok összeadódnak. Az a cella, amely nem szám, kimarad, és az összegzésben szerepel. Ha ugyanazt a jegyzéket újra betölti, a meglévő mennyiségeket frissíti ahelyett, hogy újakat adna hozzá; nevük, egységáraik és hulladékuk az Önéi marad.

## Jó tudni

A típusos mennyiséget nem mérik a lapon, ezért nincsenek jelei. Semmit sem küld el sehová; a fájlt itt olvassuk be.
