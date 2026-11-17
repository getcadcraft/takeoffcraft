---
title: Wat het leerde van uw opmetingen
summary: TakeoffCraft bewaart de symbolen die u bevestigde met Automatisch tellen, uw conditiesets, de samenstellingen die u het meest gebruikt en patronen die u op elke pagina herhaalt, allemaal binnen het eigen bestand van de opmeting. Bekijk ze, gebruik ze, verwijder ze.
keywords: leren, geleerd, leren van, assistent, onthouden, symbolen, sjablonen, zoals vorige klus, vorige klus, conditieset, condities, hergebruiken, samenstellingen, meest gebruikt, suggesties, op elke pagina herhalen, elke pagina, titelblok, patroon, alles wissen, vergeten, privacy
from: 54d99e99
---

TakeoffCraft wordt sneller naarmate u er meer opmetingen mee doet. Het leert **alleen van wat u accepteert**:

- de symbolen die u met [Automatisch tellen](topic:auto-count) omkaderde en vervolgens toevoegde,
- de conditiesets die u opslaat,
- de samenstellingen die u gebruikt (eenmaal per klus),
- de patronen van markeringen die u op elke pagina herhaalt.

Het is eenvoudige patroonvergelijking op uw eigen bladen, dezelfde zoekactie die Automatisch tellen uitvoert. Het is geen getraind model. Alles wat het leert, wordt bewaard **in het bestand van deze opmeting** (`.takeoff.json`), en er wordt niets ergens naartoe gestuurd. Om het mee te nemen naar de volgende klus, gebruikt u [Zoals de vorige klus](topic:what-it-learned#same-as-last-job).

Kies {{ui:Geleerd}} op de werkbalk (de gloeilamp, naast {{ui:Automatisch tellen}}) om alles te zien.

## Symbolen

Wanneer u een symbool omkadert met {{ui:Automatisch tellen}} en {{ui:Toevoegen}} kiest, wordt het omkaderde symbool bewaard, met het overeenkomstniveau dat u accepteerde.

- In {{ui:Geleerd}} kiest u {{ui:Zoeken op dit blad}} of {{ui:Zoeken op elk blad}}. De gebruikelijke controle van Automatisch tellen opent: klik op een kader om het uit te sluiten, verschuif de schuifregelaar en voeg ze daarna toe. Er wordt niets toegevoegd tot u dat doet.
- Wanneer u een blad opent waarop nog geen van de geleerde symbolen staat, biedt een balk bovenaan {{ui:Zoeken …}} daarvoor aan. {{ui:Nu niet}} verbergt die voor dat blad.
- Als de opmeting geen post met die naam heeft, voegt het toevoegen van de markeringen ook de post toe (één stap ongedaan maken).
- Het opnieuw toevoegen van het symbool van dezelfde post telt mee voor het bekende; een symbool dat er anders uitziet, wordt als tweede bewaard.
- Net als Automatisch tellen vindt het het symbool onder rechte hoeken en op bladen met een andere schaal.

## Conditiesets

Een set bewaart de condities van een opmeting (posten met hun eenheden, tarieven, verlies en samenstellingen), zonder markeringen.

1. In {{ui:Geleerd}} kiest u {{ui:De condities van deze opmeting als set opslaan…}} en geeft u er een naam aan. Een set met dezelfde naam wordt vervangen.
2. In een opmeting die de set heeft, voegt {{ui:Toevoegen}} de condities toe die er nog niet zijn. Condities met dezelfde naam en hetzelfde type blijven ongemoeid. Het is één stap ongedaan maken.

## Zoals de vorige klus

Het bestand van uw vorige klus bevat wat het heeft geleerd. Om een nieuwe klus ervan te starten:

1. Open de nieuwe tekeningen, kies daarna {{ui:Geleerd}} › {{ui:Zoals de vorige klus…}}.
2. Kies het `.takeoff.json` van de vorige klus.
3. Vink aan wat u wilt binnenhalen: de condities (alleen die deze opmeting nog niet heeft), en wat het heeft geleerd (symbolen, sets, samenstellingen, patronen). Klik daarna op {{ui:Binnenhalen}}.

De condities worden ook bewaard als set, genoemd naar die klus. De markeringen en hoeveelheden blijven in het eigen bestand. Het geheel is één stap ongedaan maken.

## Samenstellingen die u het meest gebruikt

Een post met een samenstelling telt als gebruikt, eenmaal per klus, wanneer die een hoeveelheid heeft en u de opmeting opslaat. Een klus is de set tekeningbestanden waaruit de opmeting is gemaakt, dus opnieuw opslaan van dezelfde opmeting telt niet dubbel. De lijst onder {{ui:Samenstellingen die u het meest gebruikt}} zet de meest gebruikte bovenaan. Samenstellingen die deze opmeting al heeft, laat hij weg. {{ui:Toevoegen}} voegt er één toe zoals u hem het laatst gebruikte, met al zijn onderdelen.

## Op elke pagina herhalen

Voor markeringen die op elke pagina van een set gelijk zijn, zoals een telling van het titelblok of een gebruikelijk detail:

1. Selecteer de markeringen op één blad ([De markeringen selecteren](topic:copy-paste#select-the-marks)).
2. In {{ui:Geleerd}} kiest u {{ui:De geselecteerde markeringen op elke pagina herhalen…}}, geeft het patroon een naam en bevestigt.

Ze gaan op elke andere geopende pagina **van dezelfde grootte**, op dezelfde plaats, en dat is één stap ongedaan te maken. Lengten en oppervlakten komen alleen op pagina's met dezelfde schaal; tellingen komen op elke pagina van die grootte. Een pagina die ze al heeft, wordt overgeslagen. Het patroon blijft bewaard, dus pagina's die u later opent, krijgen het aanbod in de balk, of u gebruikt {{ui:Op elke pagina herhalen}} in de lijst.

## Bekijken, verwijderen

Alles wat is geleerd, staat in {{ui:Geleerd}}. De prullenbakknop verwijdert één ding. {{ui:Alles wissen}} verwijdert alles wat is geleerd en laat uw posten en markeringen met rust. Beide zijn ongedaan te maken tot u de opmeting sluit, en beide worden met de opmeting opgeslagen.

Om in één opmeting te stoppen met leren, schakel {{ui:Leren van deze opmeting}} uit. Er wordt niets nieuws geleerd, en wat in de lijst staat, blijft staan tot u het verwijdert.

## Goed om te weten

- Oudere versies van TakeoffCraft openen een bestand met geleerde zaken normaal. Ze negeren dat deel en laten het weg als ze het bestand opnieuw opslaan.
- Een geleerd symbool is een klein beeld van wat u omkaderde, bewaard in het bestand (elk enkele kilobytes).
- Geleerde symbolen worden gezocht zoals Automatisch tellen zoekt, dus dezelfde grenzen gelden: [Een symbool automatisch tellen](topic:auto-count).
