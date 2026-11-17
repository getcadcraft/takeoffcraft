---
title: Een opmeting opslaan en opnieuw openen
summary: Sla de opmeting op als projectbestand .takeoff.json, open die opnieuw met dezelfde PDF's, en wat er gebeurt als een PDF ontbreekt of is gewijzigd.
keywords: opmeting in pdf, insluiten, bijlage, opslaan, openen, opnieuw openen, project, takeoff.json, hervatten, doorgaan, herziene pdf, gewijzigde pdf, ontbrekende pdf, back-up, automatisch opslaan, herstellen, crash
from: bd5080a6
---

Een opmeting wordt opgeslagen als een klein projectbestand, `(naam).takeoff.json`. Het bevat uw posten, samenstellingen, tarieven, de schaal van elk blad en elke markering. Het bevat **niet** de PDF's; het vindt ze opnieuw aan de hand van hun inhoud.

## Opslaan

1. Kies {{ui:Opmeting opslaan}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+S}}.
   Uw browser downloadt `(naam).takeoff.json`. De statusbalk zegt "Opgeslagen (naam).takeoff.json. Het wordt opnieuw geopend bovenop dezelfde PDF's (ze worden herkend aan hun inhoud)."
2. Verplaats het bestand naast de PDF's van de opdracht, zodat die bij elkaar blijven.

Elke keer dat u opslaat, wordt een nieuw bestand gedownload. Uw browser geeft het tweede bestand misschien de naam `(naam) (1).takeoff.json`; bewaar het nieuwste.

De naam komt van de eerste PDF die u in deze opmeting hebt geopend.

:::note
Opmeting opslaan is nog steeds de enige manier om een opmeting als bestand te bewaren. Terwijl u werkt, bewaart TakeoffCraft ook een herstelkopie in deze browser (zie hieronder), en opslaan in de cloud is nog niet beschikbaar. Als u het tabblad sluit met niet-opgeslagen wijzigingen, vraagt de browser of u wilt vertrekken.
:::

## De opmeting in de PDF bewaren

{{ui:Exporteren}} › {{ui:Pdf met de opmeting erin}} downloadt een kopie van elke geopende PDF, genoemd zoals `Plans (with takeoff).pdf`, die de hele opmeting als bijlage bevat: posten, markeringen, schalen, biedgebieden, alles wat het `.takeoff.json` bevat. De pagina's blijven ongewijzigd, dus het ziet er uit en drukt af als het origineel, en andere pdf-programma's tonen de opmeting onder hun bijlagen.

Open die PDF in TakeoffCraft (op welke manier u PDF's ook opent) en het vraagt **Deze PDF heeft een opmeting erin**: kies {{ui:De opmeting openen}} om die terug te krijgen, of {{ui:Alleen de pdf}} om alleen de tekening te openen. De kopie staat voor de PDF waarvan hij is gemaakt, dus een `.takeoff.json` die vanuit een van beide is opgeslagen, opent op beide.

Bij meerdere PDF's bevat elke kopie de hele opmeting; open ze samen. Opnieuw opslaan vanuit een kopie vervangt de opmeting erin, het voegt geen tweede toe. Het `.takeoff.json` blijft het bestand om te bewaren: het is klein, en het is wat automatisch opslaan en de desktop-app schrijven.

## Als het tabblad of de browser stopt

Enkele seconden na elke wijziging bewaart TakeoffCraft een kopie van de opmeting in de eigen opslag van deze browser, samen met de PDF's als die samen 64 MB of minder zijn. Er wordt niets geüpload. Wanneer u de opmeting opslaat, een nieuwe begint of een ander project opent, verdwijnt de kopie.

Als het tabblad crasht, de browser of computer stopt, of u vertrekt met niet-opgeslagen wijzigingen, vraagt TakeoffCraft de volgende keer dat u het opent **Uw werk herstellen?** en toont de opmeting op naam. Kies **Herstellen** om hem terug te krijgen: de posten, markeringen en schalen keren terug, en de PDF's openen opnieuw als ze bewaard zijn. De statusbalk zegt "Hersteld (naam). Het is nog niet naar een bestand opgeslagen: Opmeting opslaan bewaart het." Als de PDF's te groot waren om te bewaren, open ze opnieuw; de markeringen verschijnen op hun bladen. Meer: [Uw werk herstellen](common:recover).

## Opnieuw openen

1. Open TakeoffCraft.
2. Sleep het `.takeoff.json`-bestand en de PDF's samen op de pagina. Of kies {{ui:Tekeningen openen}} voor de PDF's en {{ui:Opmeting openen}} voor het project, in willekeurige volgorde.
   De statusbalk zegt "Geopend (naam): 12 posten, 340 markeringen." Elk blad krijgt zijn schaal terug en de markeringen verschijnen op hun bladen.

De volgorde van de PDF's doet er niet toe, net zomin als hun bestandsnamen of mappen. TakeoffCraft herkent elke PDF aan een vingerafdruk van zijn inhoud.

Als u een project opent terwijl de huidige opmeting niet-opgeslagen wijzigingen heeft, vraagt TakeoffCraft eerst: **Annuleren**, **Wijzigingen verwerpen** of **Eerst opmeting opslaan**. Een project openen vervangt de huidige posten en markeringen; PDF's die al open zijn, blijven open.

## Als een PDF ontbreekt

Als u het project opent zonder alle PDF's, voegt de statusbalk toe: "Open de PDF's om de markeringen te zien (vermeld onder Bladen)." Onder de bladenlijst staat een opmerking:

"Deze opmeting omvat ook PDF's die niet open zijn. Hun hoeveelheden worden geteld; open ze om hun markeringen te zien en te bewerken:"

gevolgd door de bestandsnamen en groottes. Hun markeringen tellen nog steeds mee in elk totaal en elke export, met de schalen waarop ze zijn gemeten. Open die PDF's om de markeringen te zien en te bewerken.

## Als een PDF is gewijzigd

Een PDF die is herzien, of gewoon opnieuw is opgeslagen door een ander programma, heeft andere inhoud, dus voor TakeoffCraft is het een **ander bestand**, zelfs met dezelfde naam. In de opmerking onder de bladenlijst staat bij zo'n bestand: "er is een bestand met deze naam open, maar de inhoud verschilt".

- De markeringen blijven gekoppeld aan de oude versie. Ze blijven meetellen, op hun oude posities en schalen.
- De herziene PDF opent als nieuwe bladen zonder schaal en zonder markeringen.

Om de opmeting naar de herziening te verplaatsen, opent u beide PDF's en gebruikt u {{ui:Vergelijken}} op het nieuwe blad: [Een herzien blad vergelijken en de opmeting verplaatsen](topic:compare-revisions).

## Een beschadigd of vreemd bestand

TakeoffCraft controleert elk projectbestand voordat het het gebruikt. Berichten die u kunt zien:

- "(bestand) is geen TakeoffCraft-project (het is geen geldige JSON)."
- "Dit is geen TakeoffCraft-projectbestand."
- "Dit project is opgeslagen door een nieuwere TakeoffCraft. Open het daar."
- "3 markeringen waren beschadigd en zijn weggelaten." (de rest wordt geopend)

## Geschiedenis van ongedaan maken

De geschiedenis van ongedaan maken begint opnieuw wanneer u een project opent. Opslaan wist haar niet.
