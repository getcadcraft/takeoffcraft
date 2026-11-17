---
title: Načtení tabulky štítků jako množství
summary: Tabulka štítků exportovaná z modelu budovy (CSV) se stane typovanými množstvími ve výkazu výměr, jedno pro každý štítek, takže počty a plochy z modelu jsou vedle toho, co jste změřili.
keywords: štítky, tabulka štítků, model budovy, bimcraft, ifc, množství, csv, tabulka, import, typované množství
from: a60c19b6
---

{{ui:Štítky}} na panelu nástrojů načte tabulku štítků, kterou BimCraft uložil jako soubor CSV. Každý různý štítek se stane typovaným množstvím, stejného druhu, jakým se stanou výkop a násyp z CivilCraftu.

1. V BimCraftu vytvořte požadovanou tabulku štítků a uložte ji jako CSV.
2. Zvolte {{ui:Štítky}} a vyberte soubor.
3. Určete, podle kterého sloupce se pojmenuje řádek ({{ui:Pojmenovat řádek podle}}, obvykle štítek), a který obsahuje číslo ({{ui:Množství z}}). S {{ui:Počítat řádky}} se každý řádek počítá jako jeden.
4. Zvolte jednotku. Délka v milimetrech se převede na metry pomocí {{ui:Násobit}} 0.001.
5. {{ui:Přidat množství}}.

Řádky se stejným štítkem se sečtou. Buňka, která není číslo, se vynechá a uvede se v souhrnu. Opětovné načtení stejné tabulky aktualizuje množství, která už máte, místo aby přidávalo další; jejich názvy, sazby a odpad zůstanou vaše.

## Dobré vědět

Typované množství se neměří na listu, takže nemá značky. Nic se nikam neodesílá; soubor se zde načítá.
