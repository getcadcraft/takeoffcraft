---
title: De lijnen van de pdf selecteren
summary: Klik op een lijn van een vector-pdf om het hele aaneengesloten pad te meten, of klik binnen een gesloten omlijning voor de oppervlakte, met de spleettolerantie zichtbaar en één keer ongedaan maken per segment.
keywords: pad, selecteren, lijnwerk, lijnen, aaneengesloten, hele traject, overtrekken, omlijning, omtrek, spleet, tolerantie, overbruggen, segmenten, Tab, vector, oppervlakte uit lijnen, P
from: c22526ae
---

Op een vector-pdf zijn de muren en randen echte lijnen. {{ui:Pad}} ({{key:P}}) neemt ze zoals ze getekend zijn: één klik op een lijn meet alles wat eraan vastzit, van begin tot eind, zodat u een muur niet hoeft over te trekken door zijn hoeken aan te klikken. Het blad heeft een schaal nodig. Een gescande pagina heeft geen lijnen om te selecteren; gebruik daar [Lineair](topic:measure-linear) of [Oppervlakte](topic:measure-areas).

## Een pad of omlijning selecteren

1. Kies {{ui:Pad}}. De lijn onder de aanwijzer wordt omlijnd, en de andere paden die het zou kunnen zijn, worden dun getekend.
2. Klik op een lijn: het hele aaneengesloten pad wordt geselecteerd. De balk onder de werkbalk geeft de segmenten, de lengte, de spleettolerantie en hoeveel spleten zijn overbrugd. Een pad dat naar zijn begin terugkeert, is gesloten en meldt ook zijn omtrek.
3. Of klik binnen een gesloten omlijning, weg van elke lijn: de omlijning rond dat punt wordt als oppervlakte geselecteerd. De kleinste komt eerst; {{key:Tab}} probeert de volgende grotere.
4. Druk op {{key:Enter}} (of klik met de rechtermuisknop, of dubbelklik) om de markeringen toe te voegen. Een geselecteerd pad wordt een markering van een **lineaire** post, een omlijning een markering van een **oppervlakte**-post: de actieve post als die dat type heeft, anders de nieuwste van dat type. Zonder zo'n post opent het formulier voor een nieuwe post, en er wordt niets toegevoegd tot u opnieuw op {{key:Enter}} drukt. Alles wat is geselecteerd, wordt in één stap toegevoegd en in één stap ongedaan gemaakt.

## De spleettolerantie

Tekenaars laten kleine gaten achter waar lijnen samen zouden moeten komen. Twee lijnen worden verbonden wanneer hun uiteinden dichter bij elkaar liggen dan de **spleettolerantie**. Die begint op 1.5 punt op het blad (getoond in voet en inch op de schaal van het blad), en een gestippelde ring van die breedte volgt de aanwijzer en zit op elk uiteinde van het pad eronder. Elk overbrugd gat wordt op een geselecteerd pad oranje omcirkeld, en de balk telt ze.

{{key:]}} maakt de tolerantie breder, {{key:[}} smaller. Een geselecteerd pad wordt meteen opnieuw verbonden bij de nieuwe tolerantie. Bij een kruising gaat het pad rechtdoor, in de richting die het minst afbuigt, en verlaat het de zijtak.

## Toetsen

| Toets of actie | Wat het doet |
|---|---|
| Klik | Selecteer het pad onder de aanwijzer, of de omlijning eromheen. |
| {{key:Shift}} + klik | Voeg nog een pad of omlijning toe aan de selectie. |
| {{key:Tab}} | Probeer het volgende pad onder de aanwijzer, of de volgende grotere omlijning. |
| {{key:Backspace}} of {{key:Mod+Z}} | Haal het laatste segment van het laatst geselecteerde pad af, één segment tegelijk. Een pad zonder segmenten verdwijnt. Zonder selectie is {{key:Mod+Z}} het gewone ongedaan maken. |
| {{key:[}} en {{key:]}} | Smallere en bredere spleettolerantie. |
| {{key:Enter}} | Voeg de markeringen toe. |
| {{key:Esc}} | Hef de selectie op. |

## Goed om te weten

- Een kromme in de tekening is een keten van korte rechte stukjes, dus de lengte ligt iets onder de echte boog. Voor een exacte boog meet u het eigen bestand van een tekening ([Meten vanuit een tekening](topic:measure-from-a-drawing)).
- Een overbrugd gat telt als een rechte sprong eroverheen, dus de omtrek van een gesloten omlijning bevat het.
- Alleen lijnen en vullingen uit de eigen paden van de pagina zijn lijnen. Tekst die als letters is getekend, en afbeeldingen, zijn dat niet.
