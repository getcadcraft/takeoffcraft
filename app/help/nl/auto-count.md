---
title: Een symbool automatisch tellen
summary: Omkader één symbool, laat TakeoffCraft de andere zoeken op dit blad of op alle geopende bladen, controleer de overeenkomsten met de schuif en voeg ze in één stap toe.
keywords: elke hoek, gedraaid, andere schaal, verschillende schaal, automatisch tellen, automatische telling, symboolzoeken, symbolen vinden, patroon, sjabloon, overeenkomst, detecteren, telhulpmiddel
from: fa68a6c1
---

{{ui:Automatisch tellen}} vindt elke kopie van een symbool nadat u er één hebt omkaderd. Daarna controleert u de overeenkomsten op het blad en voegt u de geaccepteerde toe als telmarkeringen. Het is een hulpmiddel, geen garantie: controleer altijd voordat u toevoegt.

## De symbolen vinden

1. Maak of klik een telpost aan onder {{ui:Posten}}.
2. Open een blad waarop het symbool voorkomt.
3. Kies {{ui:Automatisch tellen}} in de werkbalk, of druk op {{key:S}}.
   Bovenaan het blad verschijnt een strook: "Sleep een vak rond één symbool op dit blad."
4. Om alle geopende bladen te doorzoeken, en niet alleen dit blad, vinkt u {{ui:Alle geopende bladen doorzoeken}} aan.
5. Zoom in zodat het symbool goed zichtbaar is en sleep daarna een vak strak om één exemplaar ervan. Neem het hele symbool mee; leeg papier eromheen wordt weggesnoeid.
   De strook toont "Zoeken…" met een voortgangsbalk en een knop {{ui:Annuleren}}. De pagina blijft reageren: u kunt zoomen, verschuiven en tussen bladen wisselen. Een ander hulpmiddel kiezen, of {{key:Esc}}, annuleert het zoeken.
6. Als het klaar is, verschijnen de overeenkomsten op het blad als vakken in de kleur van de post, en de strook toont een samenvatting zoals "22 overeenkomsten, 19 om toe te voegen (3 al geteld). Klik op een vak om het af te wijzen of te herstellen."

In {{ui:Automatisch tellen}} tekent slepen op het blad een vak in plaats van verschuiven. Om te verschuiven houdt u {{key:Space}} ingedrukt en sleept u, of sleept u met de middelste muisknop.

## De overeenkomsten controleren

- **Klik op een vak** om het af te wijzen. Een afgewezen vak is gestreept en doorgekruist. Klik er nogmaals op om het te herstellen.
- **Verplaats de schuif {{ui:Overeenkomst}}** (50% tot 95%, startend bij 75%). Hoger toont alleen nauwe overeenkomsten; lager toont ruimere. De schuif filtert alleen wat is gevonden; hij zoekt niet opnieuw.
- **Al geteld**: overeenkomsten op een plek waar al een telmarkering van deze post staat, beginnen afgewezen, zodat u niets dubbel telt.
- **Andere bladen**: als u alle geopende bladen hebt doorzocht, wissel tussen bladen met de bladenlijst of {{key:PageDown}} en controleer elk blad. De samenvatting zegt hoeveel bladen overeenkomsten hebben.

## Ze toevoegen

Kies {{ui:Toevoegen}}. De knop zegt hoeveel het er zijn, bijvoorbeeld "Voeg 19 markeringen toe".
De telmarkeringen worden in het middelpunt van elk geaccepteerd vak toegevoegd: "19 telmarkeringen toegevoegd aan "Duplex stopcontact". Ctrl+Z verwijdert ze allemaal."

De hele reeks is één stap ongedaan maken, dus met één {{key:Mod+Z}} verwijdert u hem.

Om de controle te sluiten zonder iets toe te voegen, kiest u {{ui:Weggooien}} of drukt u op {{key:Esc}}. Een ander hulpmiddel kiezen gooit de controle ook weg.

## Wat het vindt, en wat het mist

TakeoffCraft vergelijkt de tekening, als pixels, met het symbool waar u een vak omheen hebt getekend.

- Het vindt het symbool gedraaid over 0°, 90°, 180° en 270°. Vink {{ui:Elke hoek (langzamer)}} aan op de strook van automatisch tellen voordat u het vak tekent om het ook onder elke hoek te vinden: het probeert elke 15°, en stelt daarna elke vondst bij tot op anderhalve graad nauwkeurig. Dat duurt ongeveer zes keer zo lang. Een gespiegeld symbool vindt het niet (tenzij het symbool gespiegeld hetzelfde eruitziet).
- Als {{ui:Alle geopende bladen doorzoeken}} is aangevinkt, wordt een blad op een andere schaal doorzocht op de grootte die het symbool daar heeft: een armatuur op schaal getekend op een plattegrond van 1/8" is half zo groot als op een plattegrond van 1/4", en wordt toch gevonden. Zo'n blad wordt ook doorzocht op de eigen grootte van het vak, voor labels en symbolen die op elk blad in één grootte zijn afgedrukt. Hiervoor is een schaal op beide bladen nodig; een blad zonder schaal wordt alleen op de grootte van het vak doorzocht.
- Heel gelijkende symbolen kunnen op elkaar lijken: een dubbel en een quad stopcontact, of twee armatuurlabels die in één letter verschillen. Verhoog de schuif tot alleen de juiste overblijven, en wijs de rest handmatig af.
- Een symbool dat door andere lijnen, arcering of tekst wordt doorkruist, scoort lager en heeft mogelijk een lagere schuifinstelling nodig.
- Heel kleine vakken worden geweigerd: "Dat vak is te klein. Teken het rond het hele symbool." Een leeg vak wordt ook geweigerd: "Dat vak is bijna leeg. Teken het rond een symbool."
- Een blad dat op de benodigde grootte voor dit symbool erg groot zou zijn, wordt overgeslagen, en de samenvatting zegt "1 blad was te groot om bij deze symboolgrootte te doorzoeken." Omkader een groter symbool, of tel dat blad handmatig.

Als er niets wordt gevonden, zegt de statusbalk "Geen overeenkomsten. Verlaag de schuif Overeenkomst, of teken het vak nauwer om het symbool."

## Snelheid en browsers

De zoekopdracht draait in een achtergrondproces, zodat de pagina reageert en u op elk moment kunt annuleren. Elk blad wordt eerst op de werkgrootte op de pagina zelf getekend, wat bij een zeer groot blad even kan haperen. Het werkt in de huidige versies van Chrome, Edge, Firefox en Safari. Het doorzoeken van veel bladen duurt langer; de voortgangsbalk schuift blad voor blad verder. Offline werkt automatisch tellen als de appbalk {{ui:Klaar voor offline gebruik}} toont: met {{ui:Opslaan voor offline gebruik}} blijft ook het achtergrondproces beschikbaar. Zie [Werken offline](common:offline).
