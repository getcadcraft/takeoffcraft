---
title: Notities, wolken en markeringen
summary: Markeer vragen en wijzigingen op de bladen met notities, revisiewolken en markeringen, volg elk als open, beantwoord of gesloten, en verstuur ze in de gemarkeerde PDF.
keywords: markup, markups, notitie, opmerking, vraag, rfi, wolk, revisiewolk, markering, status, open, beantwoord, gesloten, beoordeling, lijst met markups
from: 2b395c13
---

Markups zijn voor wat u moet onthouden of vragen tijdens het opmeten: "bevestig het basistype", een revisiewolk rond een gewijzigde wand, een gemarkeerde notitie op het plan. Ze staan op het blad met een status, worden op één plek vermeld en worden afgedrukt in de gemarkeerde PDF. Ze worden **nooit geteld**: geen hoeveelheid, geen kosten.

## Er een toevoegen

Open {{ui:Markup}} op de balk boven het blad en kies:

| Markup | Hoe |
|---|---|
| {{ui:Notitie}} | Klik waar hij moet komen, typ de notitie, kies {{ui:Toevoegen}}. Hij verschijnt als een ronde speld met de eerste regel ernaast. |
| {{ui:Wolk}} | Klik op één hoek, dan op de tegenoverliggende, en typ een notitie (of laat hem leeg). Er komt een gegolfde revisiewolk rond het vak. |
| {{ui:Markeren}} | Klik op twee hoeken: een doorzichtig geel vak, met een notitie als u wilt. |

{{key:Esc}} na de eerste hoek annuleert. Het hulpmiddel blijft aan voor de volgende; {{key:V}} gaat terug naar {{ui:Selecteren}}.

## Status en bewerken

Klik met {{ui:Selecteren}} op een markup om hem te selecteren. Het rechterpaneel toont **Markup**: het soort en het blad, de **Status** (Open, Beantwoord of Gesloten) en de tekst, die u kunt wijzigen. {{key:Delete}} (of {{ui:Verwijderen}}) verwijdert hem; {{key:Mod+Z}} haalt hem terug.

De speld van een notitie is oranje zolang hij open is, blauw zodra hij beantwoord is en grijs wanneer hij gesloten is; een gesloten wolk wordt grijs.

## De lijst

**Markups** in het rechterpaneel toont elke markup van de opmeting met zijn status, en zegt hoeveel er nog open staan. Vink **Alleen open** aan om te zien wat nog af moet. Klik op een rij om naar het blad te gaan en hem te selecteren.

## Ze delen

- {{ui:Gemarkeerde pdf}} tekent ze op de pagina's: markeringen, wolken en spelden, elk met een vak dat de status in hoofdletters geeft (OPEN, BEANTWOORD, GESLOTEN) en de tekst. Een pagina met markups maar zonder opmetingsmarkeringen wordt ook opgenomen.
- {{ui:XLSX}} voegt een werkblad **Markups** toe: blad, soort, status en tekst, één rij per markup.
- Ze worden opgeslagen in het `.takeoff.json`-bestand en in een [PDF met de opmeting erin](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
