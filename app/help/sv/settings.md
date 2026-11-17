---
title: Inställningar för TakeoffCraft
summary: Visa tum till 1/16, 1/8 eller 1/4, starta nya poster med en spillprocent, välj var reglaget Autoräkna startar, fäst vid ritningens linjer eller vid 45° utan att hålla Shift, ange hur brett en dörr Rumsfyllning stänger, och välj 3D-vyns hörnindikator.
keywords: inställningar, alternativ, precision, bråk, tum, avrundning, spill, standardspill, autoräkna, tröskel, träff, reglage, fångst, 45, vinkel, shift, ViewCube, axelikon, hörnindikator, 3d
from: bca3f0ed
---

Öppna {{ui:Inställningar}} med kugghjulet i appfältet eller {{key:Mod+,}}. Den första fliken, {{ui:TakeoffCraft}}, innehåller inställningarna som hör till den här appen; {{ui:Allmänt}} innehåller de som alla CadCraft-appar delar (tema, paneler, verktygsfält). TakeoffCraft-inställningarna finns bara i appen: du ändrar dem här, och den här webbläsaren kommer ihåg dem. {{ui:Återställ TakeoffCraft-inställningar}} återställer dem till startläget.

## Fot och tum

Visa längder till närmaste **1/16"** (startvärdet), **1/8"** eller **1/4"**. Det ändrar hur längder läses på bladet, i panelerna, i mängderna och i statusfältet.

Bara visningen avrundas. Mängder, kostnader och exporter beräknas från de exakta längderna, och exporterna visar alltid 1/16".

## Spill att börja med

Spillprocenten som varje ny post startar med: 0 % (startvärdet), 2 %, 3 %, 5 %, 7.5 %, 10 %, 15 % eller 20 %. Du kan fortfarande skriva ett annat spill för varje post, i postredigeraren eller direkt i mängdtabellen. Poster du redan har behåller sitt eget spill.

## Autoräkna: var träffreglaget startar

Var reglaget {{ui:Träff}} står när en sökning med [Autoräkna](topic:auto-count) är klar, från 50 % till 95 %; 75 % är startvärdet. Lägre ger fler liknande objekt för dig att avvisa; högre ger färre. Du kan fortfarande flytta reglaget under varje granskning.

## Fäst vid ritningens egna linjer

På från början. När du mäter eller kalibrerar hoppar en punkt nära en linje i PDF-filen till dess ände, dess mittpunkt, en skärning eller närmaste punkt på den. {{key:F3}} och {{ui:Fångst}} i statusfältet slår också av och på den. Mer: [Fäst vid ritningens linjer](topic:snap-to-the-drawing).

## Rumsfyllning: hur brett en öppning den stänger

{{ui:Rumsfyllning stänger öppningar upp till}} anger hur brett en dörröppning eller ett gap som verktyget {{ui:Rum}} behandlar som stängt är: 3'-0" till 8'-0", 4'-0" från början. Bredare än din bredaste dörr låter ett rum löpa in i nästa; smalare än en dörr lämnar rummet öppet. Se [Fyll ett rum med ett klick](topic:measure-areas#fill-a-room-with-one-click).

## Fäst vid 45° utan att hålla Shift

Av från början. När den är på tar linjer, konturer, urtag och dragna hörn 0°, 45°, 90° eller 135° från den senaste punkten utan att du håller {{key:Shift}}; håll {{key:Shift}} för att klicka i valfri vinkel. Statusfältet säger då "Fäster vid 45°; Shift frigör vinkeln". Punkten du klickar på en bågs kurva och cirklar fästs aldrig; en bågs ände fästs.

## Räknemarkörens storlek

Hur stora räkneprickarna är: {{ui:Extra liten}}, {{ui:Liten}}, {{ui:Mellan}} (startvärdet: den storlek prickarna alltid haft) eller {{ui:Stor}}. Storleken håller på skärmen vid varje zoomnivå, och den markerade PDF-filen ritar varje prick i samma storlek på papper, oavsett bladstorlek, så PDF-filen vid 100 % ser ut som skärmen. Mer: [Räkna för hand](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Hörnindikator

Endast för [3D-kontrollvyn](topic:check-in-3d): {{ui:ViewCube}} (startvärdet: en kub uppe till höger att klicka, dra och vrida på), {{ui:Axelikon}} (en liten X-, Y-, Z-markör nere till höger) eller {{ui:Ingen}}. Den ändras direkt och sparas i den här webbläsaren. Den platta ritningen visar aldrig någon.

## Sökvägsverktyg: den största glipan den förenar

{{ui:Sökvägsverktyg: största glipa att förena}} anger hur långt isär två linjeändar kan vara och ändå räknas som en sökväg, i PDF-punkter (0.05 till 60; 1.5 från början). En ritnings linjer slutar ofta en hårsmån från varandra. Större förenar mer; mindre håller linjerna isär. {{key:[}} och {{key:]}} ändrar den medan du väljer, och det här fältet följer med. Se [Välj linjerna](topic:pick-the-lines).
