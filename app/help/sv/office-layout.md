---
title: "Kontorslayouten: gruppering, delsummor, rubrik och kolumnrubriker från dina standardregler"
summary: "Slå på tillägget Standardregler så att kalkylen, mängderna per blad, exporterna och det en assistent läser får kontorets tabelluppläggning, samma som BimCraft:s tabeller använder."
keywords: kontorsstandard, kontorslayout, standardregler, tillägg, tabelluppläggning, gruppera efter typ, gruppera efter blad, delsumma, summor, rubrik, rubriker, versaler, kalkyllayout, exportlayout, inställningar
from: cfd2f30a
---

## Vad du gör

Låt TakeoffCraft lägga upp sina tabeller på det sätt ditt kontor utfärdar dem, utan att ställa in det i varje mängdavtagning. Layouten ställs in en gång, under Standardregler, och gäller för alla program på den här datorn: det du anger i BimCraft eller CadCraft är vad TakeoffCraft använder, och tvärtom.

## Steg

1. Öppna **Inställningar › Tillägg** och slå på **Standardregler**. Den är av tills du gör det; när den är av, eller när inget är inställt, fungerar TakeoffCraft precis som förut.
2. Öppna **Inställningar › Globalt › Standardregler** och hitta **Tabelluppläggning (kontorsstandarden)**:

| Regel | Vad den gör i TakeoffCraft |
|---|---|
| Gruppera tabeller efter | **Typ** grupperar kalkylen efter postens typ (Linjär, Area, Räkna, Typad mängd). **Nivå** grupperar mängderna per blad efter deras blad. **Rum** och **Ingen gruppering** lämnar båda ogrupperade |
| Summor i tabeller | **En delsumma under varje grupp och en total** lägger till en delsumma under varje grupp. Projektets totalsumma finns alltid kvar |
| Tabellrubrik | En rad över tabellen, till exempel `{schedule}: kontorslayout` |
| Kolumnrubriker | Som skrivna, I VERSALER eller Med Versaler |

3. Stäng Inställningar. Tabellerna följer direkt.

## Vad som använder layouten

- **Mängder › Per post** och **Per blad**: grupprubriker, en delsumma under varje grupp, rubriken och rubrikernas skiftläge. En rad under rubriken anger vilka delar din kontorsstandard ställde in. Raderna är desamma: du skriver fortfarande in á-priser och spill i dem och klickar på siffror för att markera deras märken. En komponent eller ett andra villkor ligger kvar under sin post.
- **Den exporterade kalkylen** (CSV och XLSX): samma grupper och delsummor. I arbetsboken är en delsumma en `SUBTOTAL`-formel över sin grupp, och projektets totalsumma är också en, så ingenting räknas två gånger.
- **Vad en assistent läser**: `takeoff_estimate` och `takeoff_quantities` (per blad) lägger till ett `layout`-block med grupperna, raderna och delsummorna, och anger vilka delar kontoret ställt in.

## Vad som behåller sin egen

- **Mängder › Per område** anger sin egen gruppering (efter anbudsområde) och behåller den.
- **Projektets totalsumma**, markeringarna i anbudssammanfattningen och alternativen grupperas inte om.
- En gruppering som tabellen inte har någon kolumn för utelämnas: kalkylen har ingen nivå, mängderna per blad har ingen typ.

## Bra att veta

- Standardreglerna sparas i den här webbläsaren för alla CadCraft-program och följer med i standardreglerfilen (**Spara till en fil** och **Läs in från en fil** på samma ställe), så ett kontor delar en fil.
- En kalkyl som exporteras som CSV med grupper i är till för läsning. För att föra tillbaka en kalkyl som prisbibliotek, exportera den utan någon gruppering.
- BimCraft har motsvarande standard för tabeller, uppsättningar och exporter. TakeoffCraft har inga egna regler ännu, så det finns ingen avdelning Standardregler under Inställningar › TakeoffCraft.
