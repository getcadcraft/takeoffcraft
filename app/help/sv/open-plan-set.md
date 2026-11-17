---
title: Starta en mängdavtagning och öppna en ritningssats
summary: Öppna en eller flera PDF-filer som en ritningssats, hitta dig fram bland bladen och flytta mellan dem.
keywords: öppna, ritningssats, flera pdf, flera filer, blad, ritningar, sidetiketter, bladlista, navigera, släpp, överlämning, öppna i ett annat program, markering
from: ed434468
---

En ritningssats består ofta av flera PDF-filer: arkitektur, konstruktion, installationer. TakeoffCraft öppnar dem sida vid sida som en enda lista med blad, och en mängdavtagning kan omfatta alla.

## Öppna PDF-filerna

1. Välj {{ui:Öppna ritningar}} i gruppen {{ui:Fil}}, eller tryck på {{key:Mod+O}}. (De andra menystilarna kallar det {{ui:Öppna PDF-filer…}}.)
2. Markera varje PDF i satsen i fildialogrutan. Håll ned {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} för att markera flera, eller {{key:Shift}} för att markera ett intervall.
3. Välj Öppna.
   Meddelandet ”Öppnar (name)…” visas medan varje fil läses. Sedan visas varje sida under {{ui:Blad}} och första sidan i första nya PDF:en öppnas.

Du kan också dra PDF-filerna från {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} och släppa dem var som helst på TakeoffCraft. En ram ”Släpp PDF-filer, DWG- eller DXF-ritningar, eller en .takeoff.json” visas medan du drar.

För att lägga till fler PDF-filer senare, gör samma sak igen. PDF-filer som redan är öppna hoppas över.

Startskärmen listar också PDF-filerna och mängdavtagningarna du öppnade nyligen, i webbläsare som låter en sida öppna en fil igen (Chrome och Edge). Klicka på en för att öppna den; webbläsaren kan be om tillstånd först. Se [Dina filer](common:your-files).

:::note
Inget laddas upp. Webbläsaren läser PDF-filerna på din dator, och de försvinner från TakeoffCraft när du stänger fliken eller väljer {{ui:Ny}}.
:::

## Ritningar bredvid PDF-filer

{{ui:Öppna ritningar}} tar även emot DWG- och DXF-ritningar, ensamma eller tillsammans med PDF-filer: varje ritnings modellrum och layouter blir blad i samma lista. Se [Öppna en DWG- eller DXF-ritning](topic:open-a-drawing), och sedan [Räkna från en ritning](topic:count-from-a-drawing).

## En PDF överlämnad från ett annat program

Ett annat program i paketet kan lämna över PDF-filen det har öppen: det öppnar TakeoffCraft i en ny flik, och PDF-filen öppnas där som om du hade släppt den. Statusfältet säger ”Öppnade (name), överlämnad från (app). Originalfilen är oförändrad.” Inget laddas upp; filen passerar webbläsarens egen lagring och försvinner från den när den har öppnats.

Om statusfältet säger att PDF-filen ”inte kom fram” väntade fliken för länge, eller så var PDF-filen redan öppen i en annan flik: öppna den med {{ui:Öppna ritningar}}.

Åt andra hållet, när MarkupCraft körs där du är och kan ta emot en fil, har bladfältet under ritningen en knapp {{ui:MarkupCraft}}: den öppnar PDF-filen för bladet på skärmen i MarkupCraft, i en ny flik, för granskning och markering.

## Hitta ett blad

- Rulla listan {{ui:Blad}} till vänster och klicka på ett blad.
- Skriv i **Sök blad** överst i listan för att filtrera på bladnummer, filnamn eller sidetikett. Räkningen bredvid {{ui:Blad}} visar ”3 av 40” medan ett filter är på.
- Tryck på {{key:PageDown}} för nästa blad och {{key:PageUp}} för föregående. De följer listan så som den är filtrerad.

:::mac
På ett Mac-tangentbord utan tangenterna Page Up och Page Down trycker du på fn med upp- eller nedpilen.
:::

## Så namnges bladen

- En sida vars PDF ger den en etikett, till exempel `A-101`, namnges efter den etiketten.
- En sida utan etikett (eller med en etikett som bara är sidnumret) namnges ”(filnamn), sida (n)”.
- När flera PDF-filer är öppna får namngivna blad också filnamnet: ”A-101 — Arkitektur”.

Bladnamn kan inte skrivas in för hand ännu.

## Titta runt på ett blad

- Rulla musens hjul för att zooma vid pekaren.
- Dra med vänster eller mittenknappen för att panorera. Med {{ui:Autoräkna}}, eller när du börjar på en märkes hörn, håll ned {{key:Space}} medan du drar, eller dra med mittenknappen.
- Tryck på {{key:F}} eller välj {{ui:Anpassa sida}} för att se hela bladet; {{key:W}} eller {{ui:Anpassa bredd}} anpassar dess bredd.
- Tryck på {{key:Plus}} eller {{key:=}} för att zooma in och {{key:Minus}} för att zooma ut, runt mitten av vyn.

Varje blad kommer ihåg sin egen zoom och position medan det är öppet.

## Nästa

Innan du kan mäta ett blad behöver det en skala: [Ange skalan](topic:set-the-scale).
