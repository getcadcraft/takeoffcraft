---
title: Anbudsområden
summary: Märk märken efter byggnad, våning eller etapp, mät upp ett område i taget och läs av mängder och kostnader för varje område.
keywords: tilläggsalternativ, avdragsalternativ, grundanbud, alternativ, anbudsområde, område, byggnad, våning, nivå, etapp, zon, alternativ, uppdelning, dela upp, typisk våning, delsumma, per område
from: 64f3d41c
---

Ett anbudsområde är en del av jobbet som du prissätter för sig: en byggnad, en våning, en etapp, en flygel. Varje märke kan ligga i ett anbudsområde. Mängderna och kalkylen kan sedan läsas för varje område, med en delsumma för varje, medan jobbets summa förblir summan av allt.

## Skapa ett anbudsområde

1. Överst i panelen {{ui:Poster}} öppnar du listan {{ui:Anbudsområde}}.
2. Välj **Nytt anbudsområde…**, skriv ett namn som ”Byggnad A” eller ”Nivå 2”, och välj **Skapa**.
   Det nya området blir det aktuella. Statusfältet säger ”Nya märken läggs i (namn). Märken i andra anbudsområden tonas ned.”

## Mät upp i ett område

Medan ett anbudsområde är valt i listan läggs varje nytt märke i det: linjer, areor, cirklar, räkningar, märkena {{ui:Autoräkna}} lägger till och det du klistrar in. Märken i andra anbudsområden, och märken i inget, tonas ned på bladet, så att du ser vad som hör till var.

Välj **Inget anbudsområde** i listan för att mäta upp utan något; då tonas inget ned.

:::tip
Typiska våningar: mät upp Nivå 2, markera dess märken ({{key:Mod+A}} på bladet), kopiera dem, välj Nivå 3 i listan och klistra in. Kopiorna läggs i Nivå 3. När våningarna är likadana och du inte behöver skilja dem åt, räknar en [typisk grupp](topic:typical-groups) i stället en våning flera gånger.
:::

## Flytta märken till ett annat område

Markera ett märke eller flera ({{key:Shift}} + klick, eller {{key:Mod+A}}). Under **Valt märke** (eller **Valda märken**) väljer du området i fältet {{ui:Anbudsområde}}. Statusfältet säger ”3 märken flyttade till Nivå 2.” Det är ett enda ångra-steg.

## Byt namn, ordna om eller ta bort

Välj **Hantera anbudsområden…** i listan. Skriv över ett namn för att byta namn, använd pilarna för att ändra ordningen (tabellerna och arbetsboken följer den), eller ta bort ett med papperskorgen. Att ta bort ett anbudsområde behåller dess märken: de hamnar då i inget anbudsområde. {{key:Mod+Z}} ångrar varje ändring.

## Läs mängderna per område

I tabellen {{ui:Mängder}} väljer du {{ui:Per område}} (den visas när mätningen har ett anbudsområde). Varje område listar posterna det innehåller, med deras mängd, enhet och summa, sedan en delsummerad rad. Märken i inget anbudsområde kommer sist, som **Inget anbudsområde**. Klicka på en postrad för att markera posten och göra det området till det aktuella.

Sammansättningar räknas ut för varje område utifrån områdets egna summor. En formel som avrundar uppåt, till exempel `ceil(L / 4)`, kan därför ge lite mer i områdena tillsammans än för hela jobbet, precis som det skulle bli på ett anbud som prissatts område för område.

## Alternativ: grundanbud plus tillägg och avdrag

Ett anbudsområde kan vara ett **alternativ**: arbete som ägaren kan lägga till i anbudet, eller ta bort ur det. I **Hantera anbudsområden…** har varje område en lista bredvid sitt namn:

| Val | Vad det gör |
|---|---|
| {{ui:Grundanbud}} | Ingår i anbudet, som vanligt. |
| {{ui:Tilläggsalternativ}} | Prissätts för sig och **utesluts från grundanbudet**: en mattuppgradering, ett extra tak. |
| {{ui:Avdragsalternativ}} | Ingår i grundanbudet, och erbjuds som ett avdrag: ”ta bort taket”. |

Mät upp ett alternativs arbete i dess anbudsområde, som vilket annat område som helst. När mätningen har ett alternativ:

- Rubriken i tabellen {{ui:Mängder}} säger **Grundanbud** i stället för {{ui:Jobbets summa}}: hela mätningen utan tilläggsalternativen.
- {{ui:Per område}} slutar med grundanbudet och en rad per alternativ: **+$300.00** för ett tillägg, **−$1,050.00** för ett avdrag.
- Ett alternativ prissätter bara de poster som har märken i sig, med deras sammansättningar, så att en sammansättningsdel av en annan post inte smyger med.

I exporterna slutar CSV-filen med grundanbudet och alternativen, och arbetsboken får ett kalkylblad **Alternativ**: grundanbudet, varje alternativs poster och dess förändring, samt grundanbudet utan alla tilläggsalternativ.

## I exporten

{{ui:XLSX}} lägger till ett kalkylblad **Per anbudsområde**: varje områdes poster och komponenter med mängd, mängd med spill, material, arbete och summa, en delsumma per område (en `SUM`-formel) och **Alla anbudsområden** sist. Kalkylbladet **Märken** får en kolumn **Anbudsområde**. En mätning utan anbudsområden exporteras som förut. Se [Exportkolumner](topic:export-columns).

Anbudsområdena sparas i projektfilen tillsammans med märkena.
