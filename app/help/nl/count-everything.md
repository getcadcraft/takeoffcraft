---
title: Alles in de tekenset tellen
summary: Omkader één keer een symboollegenda en TakeoffCraft telt elk symbool erin op elk open blad in één run. Elke telling is een link naar zijn blad, en u controleert voordat er iets wordt toegevoegd.
keywords: alles tellen, legenda, symboollegenda, hele set, elk blad, alle bladen, elke deur, elk armatuur, apparaten, staat, symbolen, automatisch tellen, alles tellen, tekenset, 200 bladen, overeenkomstniveau, lijkt op
from: adc99744
---

{{ui:Alles tellen}} leest een symboollegenda en telt daarna elk symbool erin op elk open blad. Het is {{ui:Automatisch tellen}} voor een hele legenda in één keer. Het is gewone symboolherkenning op uw eigen bladen, geen getraind model, en niets verlaat uw computer. Controleer de tellingen voordat u ze toevoegt: het is een hulpmiddel, geen garantie.

## Een legenda tellen

1. Open de tekeningen. Een legenda op elk blad volstaat: de symbolen met hun namen ernaast.
2. Kies {{ui:Alles tellen}} in de werkbalk.
3. Sleep een kader rond de legenda, de symbolen en de namen. Een titel zonder symbool ernaast (SYMBOL LEGEND) wordt er vanzelf uit gelaten.
   Het paneel toont elk symbool met zijn afbeelding en de naam die ernaast staat. De naam wordt de naam van het item, dus hernoem hem hier als u wilt.
4. Vink elk symbool uit dat u niet wilt laten tellen. Een symbool dat niet kan worden doorzocht (te klein, of leeg) zegt waarom.
5. Kies {{ui:Tellen op N bladen}}. Een balk toont het blad dat wordt doorzocht; {{ui:Annuleren}} stopt de run. De pagina blijft bruikbaar.

De eigen symbolen van de legenda worden op hun blad niet geteld. Een blad dat op een andere schaal is getekend, wordt op die schaal doorzocht, en de symbolen worden gevonden wanneer ze in een rechte hoek zijn gedraaid.

## De tellingen controleren

- Elk symbool toont zijn totaal en, eronder, een link per blad dat er een heeft ("E-103: 4"). Klik er een aan om naar dat blad te gaan. De gevonden symbolen zijn omkaderd in de kleur van het item.
- **Klik op een kader** om die vondst uit te sluiten. Het wordt gestippeld en doorgehaald; klik er nogmaals op om het terug te zetten.
- **Verplaats het overeenkomstniveau** (50% tot 100%, beginnend bij uw niveau in Instellingen). Hoger houdt alleen de nauwe overeenkomsten. De schuif filtert alleen wat is gevonden; er wordt niet opnieuw gezocht.
- Twee symbolen die op elkaar lijken (een dubbele en een quad-stopcontact) kunnen op dezelfde plek passen. De betere overeenkomst krijgt de plek, en het paneel zegt op hoeveel plekken dat gebeurde, zodat u ze kunt controleren.
- Een blad dat te groot is om op de grootte van het symbool te doorzoeken, wordt overgeslagen, en het paneel zegt dat.

## Ze toevoegen

Kies {{ui:N markeringen toevoegen}}. Elk symbool wordt een telitem met een markering op elke vondst. Een naam die al een telitem van u is, wordt hergebruikt (er wordt niets dubbel toegevoegd waar u al met de hand hebt gemarkeerd). De hele run is één stap: {{key:Ctrl+Z}} neemt elk item en elke markering weer terug.

Wat u accepteert, voedt ook {{ui:Geleerd}}: de symbolen worden onthouden in het bestand van de opmeting voor de volgende keer.

## Met uw assistent

Als u assistenten in Instellingen toestaat, kunnen ze een legenda lezen (legend_open), de telling op de achtergrond uitvoeren (legend_count_start, daarna legend_count_status), de tellingen lezen (legend_count_result) en ze toevoegen (legend_count_add, dat eerst kan voorvertonen wat er zou worden toegevoegd). Het is dezelfde run die u in het paneel ziet.

## Symbolen onder elke hoek

Vink {{ui:Symbolen onder elke hoek}} aan voordat u gaat tellen, om ook symbolen te vinden die onder een andere hoek zijn getekend dan een rechte hoek (een schuine muurplug, een armatuur gedraaid om een dak te volgen). De zoektocht draait dan elk symbool om de 15 graden; een rond symbool heeft nog steeds één zoekbeurt nodig, en een niet-rond symbool kan tot zes keer zo lang duren. Laat het uit voor plannen die recht getekend zijn.

## Goed om te weten

- Het vereist symbolen die op dezelfde manier zijn getekend als in de legenda. Een legenda die op een andere grootte is getekend dan de bladen is prima wanneer de schalen van de bladen zijn ingesteld; zonder schalen worden de symbolen gezocht op de grootte van de legenda.
- Een symbool met een muur of een lange lijn er recht doorheen kan worden gemist, omdat het niet meer lijkt op de afbeelding in de legenda. Controleer de vondsten op het eerste blad voordat u de rest vertrouwt.
- Een scan zonder tekst werkt ook: de symbolen worden gevonden op hun rijen, en u typt de namen.
