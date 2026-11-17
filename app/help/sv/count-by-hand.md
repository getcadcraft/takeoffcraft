---
title: Räkna för hand
summary: Klicka på varje dörr, armatur eller apparat för att räkna den, kontrollera dina räkningar och rätta misstag.
keywords: räkna, varje, ea, armaturer, dörrar, apparater, symboler, streck, klickräkning, manuell räkning
from: 594f2980
---

En räkningspost räknar saker: dörrar, belysningsarmaturer, uttag, VVS-armaturer. Varje klick på bladet lägger till en räkningsmarkering. Räkning behöver ingen skala.

## Räkna

1. Skapa eller klicka på en räkningspost under {{ui:Poster}} (typen {{ui:Räkna}}).
2. Välj {{ui:Räkna}} i verktygsfältet, eller tryck {{key:C}}.
3. Klicka på varje en på bladet.
   Varje klick lägger en pricka i postens färg, och postens antal ökar med ett.
4. Gå till nästa blad ({{key:PageDown}}) och fortsätt räkna. Verktyget står kvar på {{ui:Räkna}}.
5. Tryck {{key:Esc}} när du är klar. TakeoffCraft återgår till {{ui:Markera}}.

Dra fortfarande panorerar och hjulet zoomar medan du räknar, så att du kan flytta dig runt bladet utan att lägga till prickar.

:::tip
Klicka på räkningsposten för att markera dess prickar på varje blad. Bladlistan visar då hur många som finns på varje blad, vilket hjälper dig att hitta de blad du inte räknat ännu.
:::

## Rätta en räkning

- **Ta bort en pricka**: välj {{ui:Markera}} ({{key:V}}), klicka på prickan och tryck {{key:Delete}} eller välj {{ui:Ta bort markering}}. Eller tryck {{key:Mod+Z}} direkt efter ett felklick.
- **Flytta en pricka**: markera den och dra den.
- **Räknad under fel post**: markera prickan och välj rätt räkningspost i listan **Post** under **Vald markering**.

## Pricksstorlek, på skärmen och i PDF:en

Prickarna behåller samma storlek på skärmen hur mycket du än zoomar. För att ändra den öppnar du {{ui:Inställningar}}, fliken TakeoffCraft, och väljer **Storlek på räkningsmarkör**: Extra liten, Liten, Medium (standard) eller Stor.

PDF-exporten ({{ui:Exportera}} › den markerade PDF:en) ritar varje pricka i samma storlek på papper, oavsett bladets storlek: en visare som visar PDF:en i 100 % ser prickarna lika stora som de är på skärmen. Där prickarna på ett blad ändå skulle röra vid varandra gör exporten prickarna på just det bladet mindre, så att var och en kan läsas.

## Många identiska symboler

För en symbol som upprepas många gånger på ett blad, prova [Autoräkna](topic:auto-count): rama in en, granska vad den hittar och lägg till alla i ett steg.

## Använda räkningar i formler

En räkningspostens kvantitet är **N**. Sammansättningens komponenter kan använda den, till exempel gångjärn `N * 3` för dörrar. Se [Sammansättningar och formler](topic:assemblies).
