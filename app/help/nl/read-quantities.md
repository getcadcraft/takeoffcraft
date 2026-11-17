---
title: Hoeveelheden en de raming lezen
summary: Gebruik de tabel Hoeveelheden per post en per blad, het totaal van de opdracht, markering en de waarschuwing Onvolledig.
keywords: hoeveelheden, totalen, per post, per blad, totaal van de opdracht, raming, samenvatting, rapport, markering, onvolledig, kosten
from: 069d41f1
---

De tabel {{ui:Hoeveelheden}} onderaan het venster is uw actuele raming. Die verandert op het moment dat u tekent, verwijdert, opnieuw schaalt of een tarief wijzigt. Hoeveelheden worden nooit opgeslagen; ze worden elke keer opnieuw gemeten aan de hand van de markeringen, zodat ze niet kunnen verouderen.

## Per post

Kies {{ui:Per post}} (de standaard). Elke post heeft een rij, en elk van de samenstellingscomponenten heeft er een onder zich.

| Kolom | Betekenis |
|---|---|
| Post | Naam, met de kleur van de post. "+(n) zonder schaal" betekent dat sommige markeringen op bladen zonder schaal staan. |
| Hoeveelheid | De gemeten totaalwaarde in de eenheid van de post (componenten: het resultaat van de formule). |
| Eenheid | LF, m, SF, SY, m², EA, of de eenheid van de component. |
| Verlies % | Hier of in de postbewerker ingetypt. |
| Met verlies | Hoeveelheid × (1 + verlies). |
| Materiaal/eenheid, Arbeid/eenheid | Tarieven; u kunt ze hier intypen. |
| Materiaal, Arbeid | Met verlies × tarief, afgerond op de cent. |
| Totaal | Materiaal + arbeid. |

De laatste rij, **Totaal van de opdracht**, telt de kolommen materiaal, arbeid en totaal op. Hetzelfde totaal staat rechts in de koptekst van de tabel.

Typ in een verlies- of tariefcel en druk op {{key:Enter}} of klik ergens anders om het toe te passen. Een waarde die TakeoffCraft niet kan lezen, wordt rood omlijnd en de statusbalk zegt waarom, bijvoorbeeld "Typ een bedrag zoals 12.50."

Klik op de rij van een post om de markeringen op elk blad te accentueren en naar een blad te springen dat ze heeft (hetzelfde als klikken onder {{ui:Posten}}).

## Per blad

Kies {{ui:Per blad}} om de hoeveelheid van elke post per blad te zien, met het aantal markeringen. Klik op een rij om dat blad te openen met de post geaccentueerd. Gebruik dit om te controleren of elk blad is opgemeten, of om hoeveelheden te splitsen per verdieping of werkgebied.

## Per gebied

Wanneer de opmeting biedgebieden heeft, toont {{ui:Per gebied}} per gebied de posten en een subtotaal. Zie [Biedgebieden](topic:bid-areas).

## De waarschuwing Onvolledig

Wanneer iets niet in de totalen is opgenomen, toont de koptekst een waarschuwing, bijvoorbeeld:

"Onvolledig: 1 formulefout, 6 markeringen op bladen zonder schaal (niet in de totalen)"

- **Formulefouten**: de formule van een samenstellingscomponent kan niet worden berekend. De rij zegt "Formulefout: …". Zie [Samenstellingen en formules](topic:assemblies#when-a-formula-is-wrong).
- **Markeringen op bladen zonder schaal**: geef die bladen een schaal. Zie [De schaal instellen](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Dezelfde notities komen in de geëxporteerde spreadsheet, zodat een onvolledige raming nooit compleet lijkt.

## Een post accentueren

Klik op een post onder {{ui:Posten}} of in de tabel. De markeringen blijven op elk blad volledig zichtbaar en de rest vervaagt. De bladenlijst toont "(n) geaccentueerd" bij elk blad met markeringen. Klik nogmaals op de post om het accentueren te stoppen.

## Posttotalen in het zijpaneel

Elke post in de lijst {{ui:Posten}} toont ook zijn hoeveelheid. Het blok **Gemeten** in de postbewerker toont de waarden die de formules gebruiken: lengte, lopende meters en wandoppervlak; oppervlakte, omtrek en aantal gebieden; of aantal.

## Markeringen op PDF's die niet open zijn

Een opmeting kan markeringen bevatten op PDF's die u deze keer niet hebt geopend. Die tellen nog steeds mee in elk totaal; de bladenlijst noemt die PDF's. Zie [Een opmeting opslaan en opnieuw openen](topic:save-and-reopen).

## Meer ruimte

De pijlknop rechts in de koptekst van {{ui:Hoeveelheden}} verbergt de tabel zodat het blad meer ruimte krijgt. Kies hem nogmaals om de tabel terug te brengen.
