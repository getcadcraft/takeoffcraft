---
title: Jordarbeten och höjdkotor
summary: Markera höjdkotor på en platsplan, skicka dem till CivilCraft för ytan samt schakt och fyllning, och ta enkla schaktmängder här.
keywords: jordarbeten, schakt, urschakt, fyllning, schakt och fyllning, planering, höjdkota, höjder, topografi, yta, triangulering, civilcraft, punkter, pnezd, ledningsschakt
from: a898e508
---

TakeoffCraft mäter det som är ritat på ett blad. Jordarbeten kräver en markyta, så den delas med CivilCraft, som bygger ytor av punkter, planerar dem och räknar ut schakt, fyllning och transport.

## Enkel urschakt här

För en grundgrop med ett enda djup räcker en areapost med ett **djup**: volymen är area × djup. Generalentreprenörens [branschpaket](topic:trade-packs) har en post för massschakt (fast volym, lös volym och lastbilslass) och en post för ledningsschakt (schakt, bäddning och återfyllnad efter längd och djup).

## Höjdkotor för CivilCraft

1. Ange skalan för platsbladet.
2. Gör en **Räkna**-post, till exempel "Befintlig mark", och klicka på varje höjdkota på bladet.
3. Markera en punkt och skriv dess {{ui:Höjd}} i panelen Vald markering: `102.5`, `102'-6"` eller `31.24 m`. Negativa höjder och nollhöjd är tillåtna.
4. Öppna menyn {{ui:Exportera}} och välj {{ui:Höjdkotor}}. Du får en punktfil (`.csv`) med Point, Northing, Easting, Elevation och Description, en rad per markerad punkt på det öppna bladet.
5. Öppna filen i CivilCraft (se [Importera punkter](app:civilcraft/import-points)). Den bygger ytan av punkterna ([Bygg en yta](app:civilcraft/build-surface)); därifrån jämför du ytor och får schakt och fyllning ([Volymer](app:civilcraft/volumes)).

Northing och Easting är bladets egna koordinater i fot, mätta från sidans hörn i dess skala: avstånd och volymer mellan punkterna stämmer, men det är inte platsens mätkoordinater. Flytta dem till platsens koordinater i CivilCraft när du behöver det.

:::note
Punkter från olika blad delar inte koordinater, så exporten tar bara med det öppna bladet. Höjder sparas med mängdavtagningen och följer med vid kopiering och inklistring.
:::

## Schakt och fyllning från CivilCraft

CivilCraft:s jordarbeten kommer tillbaka som två poster som du kan prissätta:

1. I CivilCraft planerar du dina plattor och korridorer och väljer {{ui:Skicka till TakeoffCraft}} under **Jordarbeten** ([Jordarbetsvolymer](app:civilcraft/volumes)). Då sparas en mängdfil (`.quantities.json`).
2. I TakeoffCraft öppnar du den med {{ui:Öppna avtagning}}, eller släpper den i appen. Din mängdavtagning förblir öppen: filen lägger till **Jordarbeten: schakt** och **Jordarbeten: fyllning** som [typade mängder](topic:create-items#typed-quantities-no-drawing) i kubikyard (CY) för ett projekt i fot, eller kubikmeter (m³) för ett projekt i meter. Det är ett steg: {{key:Mod+Z}} ångrar det.
3. Byt namn på dem och ange spill, priser och kalkylsammansättningar efter behov.

När designen ändras skickar du igen från CivilCraft och öppnar den nya filen: samma två poster får de nya mängderna. Deras namn, priser, spill och kalkylsammansättningar behålls som du ställt in. Om projektets enhet har ändrats visar statusfältet det; kontrollera priserna. En fil från ett annat CivilCraft-projekt lägger till sina egna två poster.

Mängderna är fasta volymer, så som CivilCraft mätte dem (rutnätsmetoden): ingen krympning eller svällning. Lägg till det som spill, eller med en formel som `Q * 1.25` för lös volym. Postredigeraren visar varifrån var och en kommer och när; kolumnen Anteckningar i kalkylen säger det också.

:::note
Mängdfilen är vanlig JSON (`"format": "cadcraft-quantities"`), så ett skript eller ett annat program kan skriva en också: ett appnamn, ett projekt och poster med en nyckel, ett namn, en enhet och en mängd.
:::
