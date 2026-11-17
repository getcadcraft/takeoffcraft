---
title: De opmeting in 3D controleren
summary: Bekijk de muren, vloeren en tellingen van het open blad rechtop op de tekening, draai eromheen, en klik op er één om de markering ervan te selecteren.
keywords: png, afbeelding, plaatje, schermafbeelding, stapelen, verdiepingen, niveaus, aanzicht, glb, gltf, 3d exporteren, muurdikte, basishoogte, opening, bovenkant opening, 3d, drie d, controleren, weergave, muren, wandhoogte, vloer, diepte, volume, draaien, model, selecteren, isometrisch, perspectief
from: fb16b4f7
---

De 3D-weergave is een controle, geen tweede tekening: ze zet de opmeting van het blad op het scherm rechtop op het blad zelf, zodat een ontbrekende wand, een dubbele vloer of een losse telling in één oogopslag zichtbaar is.

Voordat u begint: het blad heeft een schaal nodig ([Schaal instellen](topic:set-the-scale)). Hoogten en diepten hebben echte voeten nodig, dus bij een blad zonder schaal zegt {{ui:3D}} dat en blijft het op het platte blad.

## De 3D-weergave openen

1. Toon het blad dat u wilt controleren.
2. Kies {{ui:3D}} op de balk die de naam en schaal van het blad toont, of druk op {{key:3}}.
   De eerste keer duurt het even voordat de 3D-weergave is geladen. Het blad wordt op de grond getekend, en de opmeting staat erop in de kleur van elke post.
3. Om terug te gaan, kies {{ui:3D}} opnieuw, {{ui:Terug naar het blad}}, of druk op {{key:3}}. Een tekenhulpmiddel kiezen (Lineair, Oppervlak, Tellen enzovoort) gaat ook terug, omdat markeringen op het platte blad worden getekend.

Het toont het blad op het scherm; wissel van blad in de bladenlijst, of met {{key:PageDown}} en {{key:PageUp}}, en de 3D-weergave volgt. Om meerdere verdiepingen tegelijk te zien, stapelt u ze (hieronder).

## Wat u ziet

| Markering | In 3D |
|---|---|
| Lineaire loop, post met een hoogte | Een wand van die hoogte langs de loop. Gebogen lopen volgen de kromme. |
| Lineaire loop, post zonder hoogte | Een lijn op het blad. Geef de post een hoogte onder **Post** om hem rechtop te zetten. |
| Oppervlak, post met een diepte | Een vloer van die diepte, met de uitsparingen open. |
| Oppervlak, post zonder diepte | Een dunne plaat van 2", zodat hij toch zichtbaar is. |
| Aantal | Een kleine paal op elk geteld punt. |

De hoogte is het veld {{ui:Hoogte}} van een lineaire post, en de diepte het veld {{ui:Diepte}} van een oppervlaktepost, onder **Post** (zie [Opmeetposten aanmaken](topic:create-items)). Wijzigt u die, dan werkt de 3D-weergave meteen bij. De notitie onder de bladnaam zegt wat het blad bevat, bijvoorbeeld "Dit blad in 3D: 2 wanden, 1 vloer, 3 tellingen", en hoeveel lopen of oppervlakken geen hoogte of diepte hebben. Klikken gaan door de notitie heen naar de weergave.

De getallen veranderen niet in 3D: het oppervlak van een wand is de exacte lengte maal de hoogte, en het volume van een vloer is het netto-oppervlak (buitenlijn min uitsparingen, bogen exact) maal de diepte. Bogen worden alleen op het scherm als korte rechte stukken getekend.

## Rondkijken

| Actie | Wat het doet |
|---|---|
| Slepen, of slepen met de middelste knop | Draait om de opmeting heen. |
| {{key:Shift}} + slepen, of slepen met de rechterknop | Verschuiven. |
| Muiswiel | Zoomen in en uit bij de aanwijzer. |
| Tweevingerswipe op een trackpad | Draaien ({{key:Shift}} verschuift). Knijpen zoomt. |
| {{ui:Iso}}, {{ui:Boven}}, {{ui:Voor}}, {{ui:Achter}}, {{ui:Links}}, {{ui:Rechts}}, {{ui:Onder}} | Standaardweergaven, ingekaderd op de opmeting. De 3D-weergave opent in {{ui:Iso}}. |
| {{ui:Perspectief}} | Perspectief aan of uit (parallel als het uit is). |
| {{ui:Alles tonen}} of {{key:F}} | Het hele blad. |
| {{ui:Blad}} | Toon of verberg de tekening op de grond. |
| De kijkkubus, rechtsboven | Klik op een vlak, rand of hoek om vanaf daar te kijken; sleep hem om te draaien; sleep zijn kompasring om te draaien; de huisknop gaat terug naar {{ui:Iso}}. |

De hoek toont een kijkkubus, een klein X-, Y-, Z-assenpictogram, of niets: kies dit in {{ui:Instellingen}}, op het tabblad TakeoffCraft, onder **Hoekindicator** ([Instellingen van TakeoffCraft](topic:settings)). Het platte blad heeft geen hoekindicator.

:::touch
Met één vinger draait u; met twee vingers knijpt u om te zoomen en beweegt u om te verschuiven. Een tik selecteert.
:::

## Wanden met een dikte, een basis en openingen

Een lineaire post met een hoogte staat als een dunne strook. Om hem als echte wand te zien, geeft u de post zijn vorm onder **In 3D** in zijn instellingen:

- **Muurdikte** (8", 0.2 m): de wand wordt een volume, gecentreerd op de lijn die u hebt getekend, met verstek aan de hoeken.
- **Basishoogte**: de wand begint zo ver boven de vloer (een plafondlijst, een bovenkastrij). Oppervlakteposten hebben die ook: een plafond op 9'-0".
- **Bovenkant opening**: een afgetrokken segment (een deur, [Een deel van een loop aftrekken](topic:measure-linear#deduct-a-part-of-a-run)) houdt de wand boven die hoogte, zodat een deur als deur zichtbaar is. Zonder dit laat een afgetrokken segment een gat tot aan de bovenkant.

Deze bepalen alleen de vorm in de 3D-weergave: de hoeveelheden (lengte, wandoppervlak, kosten) blijven zoals ze waren.

## De verdiepingen stapelen

1. Open de pdf's van elke verdieping.
2. Kies in de 3D-weergave {{ui:Niveaus…}} en typ de hoogte van elke verdieping, zoals `0` voor de begane grond en `12'` voor de volgende. Een leeg veld laat een blad weg.
3. Kies {{ui:Stapelen}}. Elk blad met een niveau toont zijn opmeting op zijn hoogte; het blad op het scherm ligt onder de eigen verdieping, de andere zijn omtrokken. De notitie zegt hoeveel verdiepingen zijn gestapeld.

Bladen lijnen uit op hun plaats op de pagina, dus dit werkt voor plattegronden die op dezelfde manier zijn geplot (hetzelfde bladformaat en dezelfde positie). Een blad met een niveau maar zonder schaal wordt weggelaten, en de notitie zegt dat. Kies {{ui:Stapelen}} opnieuw voor één blad tegelijk. De niveaus worden met de opmeting opgeslagen.

## De 3D-weergave opslaan als afbeelding

Kies {{ui:PNG}} op de 3D-balk voor een afbeelding van de weergave zoals die op het scherm staat (`… 3D.png`); {{key:Shift}} + klikken op {{ui:PNG}} maakt hem twee keer zo groot (`… 3D@2x.png`), voor afdrukken.

## De 3D-weergave opslaan als model

Kies {{ui:GLB}} op de 3D-balk. U krijgt een `.glb`-bestand (glTF, binair) van wat de weergave toont — de verdieping op het scherm, of elke gestapelde verdieping — dat andere 3D-programma's openen: één object per markering, genoemd naar zijn post, in de kleur van de post, in meters met Y omhoog. Het blad zelf en de omtrekken zitten er niet in.

## Een markering selecteren vanuit 3D

Klik op een wand, vloer, plaat of paal. Zijn markering wordt de geselecteerde markering, precies alsof u er op het blad op had geklikt: hij verschijnt onder **Geselecteerde markering**, zijn post wordt de actieve post, en de statusbalk geeft zijn lengte en hoogte, of zijn oppervlakte, diepte en kubieke yards. {{key:Shift}} + klikken voegt markeringen aan de selectie toe of haalt ze eruit. {{key:Delete}} verwijdert de geselecteerde markeringen en {{key:Mod+Z}} haalt ze terug; {{key:Esc}} selecteert niets. Terug op het blad blijven dezelfde markeringen geselecteerd.

:::tip
De tekening volgt het thema: in Model wordt het blad op de grond donker, zoals de platte weergave.
:::
