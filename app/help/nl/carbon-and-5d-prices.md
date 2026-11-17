---
title: Ingebedde koolstof en een 5D-prijstabel
summary: Koolstof telt de ingebedde koolstof van de opmeting op uit de hoeveelheid van elke post en een open factorentabel, en stuurt de tarieven van de opmeting naar BimCraft als prijstabel voor 5D-kosten.
keywords: koolstof, ingebedde koolstof, kgco2e, co2, factoren, a1-a3, transport, verlies, 5d, prijstabel, kosten, bimcraft, epd
from: f4bff3b8
---

{{ui:Koolstof}} op de werkbalk telt de ingebedde koolstof op van wat u hebt opgemeten, en zet uw tarieven om in een prijstabel die het gebouwmodel kan gebruiken. Het is een raming, geen beoordeling.

## Ingebedde koolstof

De hoeveelheid van elke post, met het verlies, wordt vermenigvuldigd met een rij van de factorentabel. Een rij wordt gevonden op de woorden van de postnaam ("concrete slab" vindt een rij met het trefwoord concrete). De tabel is dezelfde open tabel die BimCraft gebruikt, dus een bestand dat u hier laadt, werkt daar ook. **De rijen die bij het programma horen, zijn startwaarden: generiek, niet gecontroleerd en niet uit een database.** Het dialoogvenster zegt dat naast de cijfers; vervang ze door uw eigen bron voordat u op een getal vertrouwt.

1. Kies {{ui:Koolstof}}. De geteld posten worden getoond met hun kilogrammen CO2e; het totaal staat erboven.
2. Vink {{ui:A4 transport}} of {{ui:A5 bouwafval}} aan om die fasen ook mee te tellen, voor de rijen die er een cijfer voor geven. De productfase wordt altijd meegeteld.
3. Wilt u voor een post een andere rij gebruiken, of geen, gebruik dan de lijst op de regel ervan.
4. {{ui:Factoren uit een bestand…}} laadt een factorentabel (JSON of CSV) gemaakt van uw eigen bron; de rijen vervangen de startrijen met hetzelfde id. {{ui:Factoren (JSON)}} slaat de uwe op.

Een factor is per meter, vierkante meter, kubieke meter, post of kilogram. Een post gemeten in voet of vierkante voet wordt omgerekend. Een factor per kilogram heeft een volume (kubieke yards of meters) en de dichtheid van de rij nodig. Een post waarvan de factor een hoeveelheid nodig heeft die hij niet meet, wordt onder {{ui:Weggelaten}} vermeld met de reden, en nooit geraden. Het lopende totaal in de statusbalk toont hetzelfde cijfer.

Uw factorrijen, uw keuzes en de fasen die u meetelt, worden in het bestand van de opmeting opgeslagen.

## Een prijstabel voor 5D-kosten

{{ui:5D-prijzen (JSON)}} en {{ui:5D-prijzen (CSV)}} slaan de tarieven van de opmeting op als prijstabel: één rij per geprijsde post, met het materiaal- en arbeidstarief per eenheid en het verlies. Laad die in het kostenpaneel van BimCraft (Ingebedde koolstof en 5D-kosten) om de taken van het gebouwmodel te prijzen met dezelfde tarieven die de inschrijving hebben gemaakt. Posten die zijn gemeten in een eenheid die de tabel niet heeft, en posten zonder tarief, worden weggelaten.

## Met uw assistent

Als u assistenten toestaat in {{ui:Instellingen}}, kunnen zij de koolstof lezen (carbon_check). Het laden van factoren doet u zelf.

## Goed om te weten

Er wordt niets ergens naartoe verzonden. De cijfers zijn niet beter dan de factoren die u laadt.
