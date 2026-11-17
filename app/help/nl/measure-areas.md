---
title: Oppervlakten meten met uitsparingen
summary: Vloeren, plafonds en platen omlijnen, er gaten uit snijden, gebogen randen, cirkels en ronde uitsparingen toevoegen, en oppervlakte en omtrek aflezen.
keywords: ruimtevulling, flood fill, verfemmer, klikken in een ruimte, automatische oppervlakte, aftrek, kolom, schacht, aftrekken uit meerdere posten, oppervlakte, veelhoek, omlijning, vierkante feet, sf, uitsparing, gat, aftrekken, cirkel, rond, boog, omtrek, vloer, plafond, plaat
from: 34648db7
---

Een oppervlaktepost meet een ingesloten oppervlakte. Elke omlijning kan gaten hebben die eruit zijn gesneden (een schacht, een kolom, een plantenbak), en de randen ervan kunnen recht of gebogen zijn.

Vooraf: het blad heeft een schaal nodig ([De schaal instellen](topic:set-the-scale)) en u hebt een oppervlaktepost nodig ([Opmeetposten aanmaken](topic:create-items)).

## Een oppervlakte omlijnen

1. Klik op de oppervlaktepost onder {{ui:Posten}}.
2. Kies {{ui:Oppervlakte}} in de werkbalk, of druk op {{key:A}}.
3. Klik op elke hoek van de ruimte of plaat, de één na de ander. Houd {{key:Shift}} vast voor randen van 0°, 45° en 90°.
   Vanaf het derde punt vult de omlijning zich, en de statusbalk toont "Oppervlakte" en "omtrek". Er verschijnt een kleine ring rond het eerste punt.
4. Sluit de omlijning: klik op het eerste punt (binnen de ring), druk op {{key:Enter}}, dubbelklik, of rechtsklik.
   De oppervlakte wordt licht gevuld in de kleur van de post, is voorzien van een label in vierkante feet, en wordt de geselecteerde markering.

{{key:Backspace}} verwijdert de laatste hoek; {{key:Esc}} gooit de omlijning weg.

Een omlijning die zichzelf kruist, wordt geweigerd: "De omlijning kruist zichzelf, dus de oppervlakte zou onjuist zijn. Teken hem opnieuw zonder te kruisen." Teken een achtvormige figuur als twee oppervlakten.

## Gebogen randen

Schakel tijdens het omlijnen de boogmodus in ({{ui:Boog}} of {{key:R}}). Na een hoek klikt u op een punt langs de kromme, en daarna waar de kromme eindigt. Om de omlijning met een kromme te sluiten, maakt u die laatste klik op het eerste punt. De oppervlakte en de omtrek gebruiken de exacte kromme. Druk nogmaals op {{key:R}} voor rechte randen. Om een kromme later aan te passen, selecteert u de oppervlakte en sleept u het ronde handvat in het midden van de boog. Zie [Lineaire reeksen meten](topic:measure-linear#arcs-and-curved-walls).

## Een cirkel

1. Kies bij een oppervlaktepost {{ui:Cirkel}} of druk op {{key:O}}.
2. Klik op het middelpunt.
3. Klik op een willekeurig punt op de rand.
   Terwijl u beweegt, toont de statusbalk de straal en de oppervlakte. De cirkel wordt toegevoegd als oppervlaktemarkering met een exacte oppervlakte en omtrek.

## Een ruimte met één klik vullen

Wanneer de ruimten als gesloten wanden zijn getekend, neemt {{ui:Ruimte}} ({{key:B}}) een vloer in één klik op:

1. Kies een oppervlaktepost (bijvoorbeeld een vloerafwerking) en geef het blad zijn schaal.
2. Kies {{ui:Ruimte}} in de groep {{ui:Opmeting}}, of druk op {{key:B}}.
3. Klik in een ruimte, op de open vloer (niet op een lijn of een label).

TakeoffCraft leest de lijnen van het blad, zoekt de ruimte rond de klik en omlijnt die langs de binnenkant van de wanden, als een oppervlakte van de huidige post. Deuropeningen tot **4'-0"** worden als gesloten behandeld, zodat de omlijning recht over de doorgang loopt; **Instellingen › TakeoffCraft › Ruimtevulling sluit openingen tot** wijzigt die breedte (3'-0" tot 8'-0"). Ruimtenamen, meubilair en armaturen binnen de ruimte maken geen gaten.

Het weigert, met de reden erbij, wanneer:

- de klik op een lijn is ("Dat is op een lijn");
- de ruimte niet gesloten is: een opening die breder is dan de instelling laat de vulling doorlopen tot de rand van het blad. Verhoog de instelling, of omlijn die ruimte met de hand met {{ui:Oppervlakte}};
- de ruimte heel klein is (een symbool, geen ruimte).

Wanneer een deur breder is dan de instelling, loopt de vulling door in de volgende ruimte en omlijnt beide samen: maak dat ongedaan ({{key:Mod+Z}}), verhoog de instelling en klik opnieuw. Controleer de omlijning zoals elke oppervlakte: sleep de hoeken om hem te verbeteren. Een gescand blad werkt hetzelfde, maar de lijnen moeten donker genoeg zijn; zeer lichtgrijze lijnen stoppen de vulling mogelijk niet.

## Een gat uit een oppervlakte snijden

1. Kies {{ui:Selecteren}} ({{key:V}}) en klik op de oppervlakte. Er verschijnen vierkante handvatten op de hoeken.
2. Kies {{ui:Uitsparing}} in de werkbalk (of druk op {{key:X}}), of {{ui:Een uitsparing toevoegen}} onder **Geselecteerde markering**.
3. Klik op de hoeken van het gat, binnen de oppervlakte. De boogmodus werkt hier ook.
4. Sluit het zoals een oppervlakte: klik op het eerste punt, druk op {{key:Enter}}, dubbelklik of rechtsklik.
   Het gat blijft onopgevuld, en de statusbalk zegt "Uitsparing toegevoegd. Teken een andere, of druk op Esc."
5. Teken meer gaten in dezelfde oppervlakte, of druk op {{key:Esc}}.

Voor een rond gat kiest u {{ui:Een ronde uitsparing toevoegen}} onder **Geselecteerde markering**, klikt u op het middelpunt en daarna op een punt op de rand.

Een uitsparing moet volledig binnen de oppervlakte liggen en mag geen andere uitsparing overlappen. Anders weigert TakeoffCraft haar: "Een uitsparing moet volledig binnen de oppervlakte liggen." of "Uitsparingen mogen elkaar niet overlappen."

Om het laatste gat weer te verwijderen, kiest u {{ui:Laatste uitsparing verwijderen}}.

## Aftrekken: kolommen, schachten en openingen die van meerdere posten worden afgetrokken

Een uitsparing hoort bij één oppervlaktemarkering. Een **aftrek** wordt één keer getekend en komt uit elke oppervlakte die hij overlapt, voor de posten die u kiest: teken de kolommen één keer, en ze gaan tegelijk van de vloerafwerking, het plafond en de vloerplaat af.

1. Maak een oppervlaktepost voor ze, zoals "Kolommen".
2. Vink in de instellingen van die post **Aftrek: de markeringen halen hun oppervlakte uit andere posten** aan. Er verschijnt een lijst met uw andere oppervlaktoposten, allemaal aangevinkt: vink de posten uit die de aftrekken niet mogen raken (bijvoorbeeld verf op de wanden).
3. Meet de kolommen op met {{ui:Oppervlakte}} of {{ui:Cirkel}}, zoals gewoonlijk. Elk wordt gestippeld getekend.

Elke oppervlaktemarkering van een aangevinkte post op hetzelfde blad verliest het deel dat een aftrek bedekt: de hele aftrek wanneer die erbinnen ligt, alleen het overlappende deel wanneer die de rand kruist, en niets binnen een uitsparing. Het paneel van de geselecteerde oppervlakte toont **Aftrekken** en de overgebleven oppervlakte. De hoeveelheid van de post, de samenstellingsformules, de kosten, de 3D-controleweergave en de export gebruiken allemaal de overgebleven oppervlakte; de opmerkingen van de raming vermelden hoeveel de aftrekken hebben weggehaald. De aftrekpost zelf telt zijn eigen oppervlakte (laat zijn kosten op nul als u hem niet prijst).

Een aftrek moet **convex** zijn: een rechthoek, een cirkel of elke omlijning zonder inwaartse hoek. TakeoffCraft weigert er een te tekenen die dat niet is; teken een L-vormige schacht als twee aftrekken. Aftrekken kunnen geen uitsparingen hebben, en twee aftrekken die elkaar overlappen tellen beide mee.

De omtrek (`P`) verandert niet: aftrekken halen alleen oppervlakte weg.

## De oppervlakte aflezen

Selecteer de oppervlakte. **Geselecteerde markering** toont:

| Regel | Betekenis |
|---|---|
| Oppervlakte | De netto-oppervlakte: omlijning min uitsparingen. Dit telt de post. |
| Omlijning | De bruto-oppervlakte binnen de omlijning (getoond wanneer er uitsparingen zijn). |
| Uitsparingen | Hoeveel gaten, en hun totale oppervlakte. |
| Omtrek | De randlengte van de omlijning, **plus** de randen van elke uitsparing ("met uitsparingen"). |

De omtrek bevat de randen van uitsparingen met opzet, voor zaken als bekistingsranden of fundering die ook rond een gat lopen. Hebt u alleen de buitenrand nodig, houd dan gaten uit die post of meet de buitenrand als lineaire reeks.

De {{ui:Eenheid}} van de post bepaalt hoe het totaal wordt gerapporteerd: SF, SY of m². Het paneel **Geselecteerde markering** en de statusbalk tonen altijd vierkante feet.

## Een oppervlakte corrigeren

- **Een hoek verplaatsen**: selecteer de oppervlakte en sleep een hoekhandvat (gaten hebben ook handvatten). Als de nieuwe vorm zichzelf zou kruisen of een gat buiten de oppervlakte duwt, wordt de hoek teruggezet: "Het punt is teruggezet."
- **Naar een andere post verplaatsen**: kies een andere oppervlaktepost in de lijst **Post** onder **Geselecteerde markering**.
- **Verwijderen**: {{key:Delete}}, {{ui:Verwijderen}} in het menu {{ui:Meer}} van de werkbalk, of {{ui:Markering verwijderen}}.

## Diepte voor volumes

Geef de oppervlaktepost een {{ui:Diepte}} (bijvoorbeeld `0'-4"` voor een vloerplaat) en gebruik `A * H / 27` in een samenstellingsonderdeel om kubieke yards te krijgen. Zie [Samenstellingen en formules](topic:assemblies).
