---
title: TakeoffCraft-indstillinger
summary: Vis tommer til 1/16, 1/8 eller 1/4, start nye poster med en spildprocent, vælg hvor skyderen for Auto-tælling starter, fang til tegningens linjer eller til 45° uden at holde Shift, angiv hvor bred en døråbning Rumudfyldning lukker, og vælg 3D-visningens hjørneindikator.
keywords: indstillinger, præferencer, valgmuligheder, præcision, brøker, tommer, afrunding, spild, standardspild, auto-tælling, tærskel, match, skyder, fang, 45, vinkel, shift, viewcube, akseikon, hjørneindikator, 3d
from: bca3f0ed
---

Åbn {{ui:Indstillinger}} med tandhjulet i appbjælken eller {{key:Mod+,}}. Den første fane, {{ui:TakeoffCraft}}, indeholder indstillingerne, der hører til denne app; {{ui:Generelt}} indeholder dem, alle CadCraft-apps deler (tema, paneler, værktøjslinje). TakeoffCraft-indstillingerne findes kun i appen: du ændrer dem her, og denne browser husker dem. {{ui:Nulstil TakeoffCraft-indstillinger}} sætter dem tilbage til start.

## Fod og tommer

Vis længder til nærmeste **1/16"** (standard), **1/8"** eller **1/4"**. Det ændrer hvordan længder læses på arket, i panelerne, i mængderne og i statuslinjen.

Kun visningen afrundes. Mængder, priser og eksporterne beregnes ud fra de præcise længder, og eksporterne viser altid 1/16".

## Spild at starte med

Spildprocenten hver ny post starter med: 0% (standard), 2%, 3%, 5%, 7.5%, 10%, 15% eller 20%. Du kan stadig skrive et andet spild for hver post, i postredigeringen eller direkte i mængdetabellen. Poster du allerede har, beholder deres eget spild.

## Auto-tælling: hvor match-skyderen starter

Hvor {{ui:Match}}-skyderen står når en søgning med [Auto-tælling](topic:auto-count) er færdig, fra 50% til 95%; 75% er standard. Lavere giver flere ligner for dig at afvise; højere giver færre. Du kan stadig flytte skyderen under hver gennemgang.

## Fang til tegningens egne linjer

Tændt fra start. Mens du måler eller kalibrerer, springer et punkt nær en linje i PDF'en til dens endepunkt, midtpunkt, et skæringspunkt eller det nærmeste punkt på den. {{key:F3}} og {{ui:Fang}} i statuslinjen tænder og slukker den også. Mere: [Fang til tegningens linjer](topic:snap-to-the-drawing).

## Rumudfyldning: hvor bred en åbning den lukker

{{ui:Rumudfyldning lukker åbninger op til}} angiver hvor bred en døråbning eller et mellemrum værktøjet {{ui:Rum}} behandler som lukket: 3'-0" til 8'-0", 4'-0" som standard. Bredere end din bredeste dør lader et rum løbe ind i det næste; smallere end en dør lader rummet stå åbent. Se [Udfyld et rum med ét klik](topic:measure-areas#fill-a-room-with-one-click).

## Fang til 45° uden at holde Shift

Fra som standard. Når den er tændt, går forløb, konturer, udsparinger og trukne hjørner i 0°, 45°, 90° eller 135° fra det sidste punkt uden at holde {{key:Shift}}; hold {{key:Shift}} for at klikke i en vilkårlig vinkel. Statuslinjen viser så »Fanger til 45°; Shift frigør vinklen«. Punktet du klikker på en buekurve, og cirkler fanges aldrig; en buens ende gør.

## Størrelse på tællemarkør

Hvor store tællepunkterne er: {{ui:Ekstra lille}}, {{ui:Lille}}, {{ui:Mellem}} (standard: den størrelse punkterne altid havde) eller {{ui:Stor}}. Størrelsen holdes på skærmen ved alle zoomniveauer, og den markerede PDF tegner hvert punkt i samme størrelse på papir, uanset arkstørrelse, så PDF'en ved 100% ser ud som skærmen. Mere: [Tæl manuelt](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Hjørneindikator

Kun for [3D-kontrolvisningen](topic:check-in-3d): {{ui:ViewCube}} (standard: en terning øverst til højre, der kan klikkes, trækkes og drejes), {{ui:Akseikon}} (en lille X-, Y-, Z-markør nederst til højre) eller {{ui:Ingen}}. Den ændres med det samme og gemmes i denne browser. Det flade ark viser aldrig en.

## Stiværktøj: det største mellemrum det forbinder

{{ui:Stiværktøj: største mellemrum der forbindes}} er hvor langt fra hinanden to linjeender kan være og stadig tælle som én sti, i PDF-punkter (0.05 til 60; 1.5 som standard). En tegnings linjer stopper ofte en hårsbredde fra hinanden. Større forbinder mere; mindre holder linjer adskilt. {{key:[}} og {{key:]}} ændrer den, mens du vælger, og dette felt følger med. Se [Vælg linjerne](topic:pick-the-lines).
