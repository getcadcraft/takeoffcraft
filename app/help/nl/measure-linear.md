---
title: Lineaire reeksen meten
summary: Muren, leidingen, lijsten en andere lengtes nemen als reeksen, met rechte segmenten, bogen en de Shift-snap van 45 graden.
keywords: lineair, lengte, reeks, polylijn, muren, lf, lineaire feet, boog, kromme, 45 graden, ortho, snappen, segmenten, polylengte, aftrekken, opening, deur, gat, invoer, getypt, coördinaten, afstand, directe afstand, polair
from: c669deff
---

Een lineaire post meet lengte. Elke reeks is een keten van punten: rechte segmenten, en bogen waar u de boogmodus inschakelt. Een post kan een willekeurig aantal reeksen op een willekeurig aantal bladen hebben.

Vooraf: het blad heeft een schaal nodig ([De schaal instellen](topic:set-the-scale)) en u hebt een lineaire post nodig ([Opmeetposten aanmaken](topic:create-items)).

Op een vectoriële PDF snappen uw klikken naar de eigen lijnen van de tekening: uiteinden, middelpunten en kruisingen ([Snappen naar de lijnen van de tekening](topic:snap-to-the-drawing); {{key:F3}} schakelt het uit).

## Een reeks tekenen

1. Klik op de lineaire post onder {{ui:Posten}}.
2. Kies {{ui:Lineair}} in de werkbalk, of druk op {{key:L}}.
3. Klik op het begin van de reeks.
4. Klik op elke hoek langs de reeks.
   De statusbalk toont "Lengte" (de reeks tot nu toe, tot de aanwijzer) en "segment" (het segment dat u tekent), in feet en inches.
5. Beëindig de reeks: dubbelklik op het laatste punt, druk op {{key:Enter}}, of rechtsklik.
   De reeks wordt getekend in de kleur van de post en wordt de geselecteerde markering. De lengte van de post in de lijst {{ui:Posten}} en in de tabel {{ui:Hoeveelheden}} gaat omhoog.

Het hulpmiddel blijft op {{ui:Lineair}} staan, zodat u meteen de volgende reeks kunt beginnen. Druk op {{key:Esc}} om terug te gaan naar {{ui:Selecteren}}.

Tijdens het tekenen:

- {{key:Backspace}} (of {{key:Delete}}) verwijdert het laatste punt.
- {{key:Esc}} gooit de onafgemaakte reeks weg.
- Slepen verschuift het blad en het wiel zoomt, zonder punten toe te voegen.

:::mac
Op een Mac-trackpad is rechtsklik een tweevingerklik (zet secundaire klik aan in Systeeminstellingen, onder Trackpad). TakeoffCraft leest alleen de secundaire knop, dus een Control-klik kan als gewone klik worden gezien en een punt toevoegen. Dubbelklikken of {{key:Enter}} beëindigen altijd.
:::

:::touch
Op een touchscreen tikt u om punten te plaatsen, sleept u met één vinger om te verschuiven en knijpt u met twee vingers om te zoomen. Beëindig met een lange druk, een dubbeltik, of {{ui:Klaar}} in de balk onder het blad ({{ui:Achter}} neemt het laatste punt terug). Zie [Problemen oplossen](topic:troubleshooting#touch-screens).
:::

## Rechte lijnen in stappen van 45°

Houd {{key:Shift}} vast terwijl u een punt plaatst. Het segment vanaf het laatste punt snapt naar de dichtstbijzijnde richting van 0°, 45°, 90° of 135°, met de lengte die u langs die richting sleept. De statusbalk herinnert u eraan: "Shift snapt naar 45°".

In de boogmodus geldt dit voor waar een boog eindigt: de koorde van de boog ligt in stappen van 45° vanaf het begin. Het punt dat u op de kromme klikt, wordt nooit gesnapt.

## Bogen en gebogen muren

1. Plaats, terwijl u een reeks tekent, het punt waar de kromme begint.
2. Schakel de boogmodus in: kies {{ui:Boog}} in de werkbalk of druk op {{key:R}}. De knop blijft ingedrukt.
3. Klik op een willekeurig punt op de kromme, ergens in het midden ervan.
   De statusbalk voegt "(boog: klik waar hij eindigt)" toe, en het voorbeeld buigt door uw punt.
4. Klik waar de kromme eindigt.
   De boog wordt toegevoegd. Zijn lengte is de exacte boogLengte, niet een reeks korte koorden.
5. Klik op een ander punt op de volgende kromme en het einde ervan om door te gaan met bogen, of druk nogmaals op {{key:R}} om terug te gaan naar rechte segmenten.

{{key:Backspace}} of {{key:Esc}} laten eerst het wachtende punt op de kromme vallen; druk nogmaals om punten te verwijderen zoals gewoonlijk.

## Lengtes en coördinaten typen

Na het eerste punt kunt u typen waar het volgende komt, in plaats van klikken. Typ een cijfer, `@` of `#`: er opent een vak {{ui:Invoer}} in de statusbalk met wat u typte. Druk op {{key:Enter}} om het punt te plaatsen; het vak blijft open voor het volgende.

| Invoer | Het volgende punt gaat |
|---|---|
| `12'6"` | 12'-6" vanaf het laatste punt, richting de aanwijzer (wijs de richting aan, typ dan de lengte) |
| `12'6"<45` | 12'-6" onder 45°, geteld tegen de klok in vanaf de rechterkant van het scherm (`<90` is omhoog, `<-90` omlaag) |
| `@6',-4'` | 6' naar rechts en 4' naar beneden vanaf het laatste punt |
| `6',4'` (of `#6',4'`) | 6' naar rechts en 4' omhoog vanaf het eerste punt van deze reeks |

Lengtes typt u zoals overal in TakeoffCraft ([Invoerformaten](topic:entry-formats)): `12'-6 1/2"`, `12.5` (feet), `30"`, `3.2 m`. "Rechts" en "omhoog" zijn zoals u het blad ziet, ook wanneer de PDF-pagina is gedraaid.

{{key:Enter}} op een leeg vak beëindigt de reeks, net als {{key:Enter}} op het blad; {{key:Esc}} sluit het vak en houdt de reeks gaande. Getypte punten volgen dezelfde regels als klikken: aftrekken, bogen en het sluiten van een oppervlakte werken allemaal. Hetzelfde vak werkt in {{ui:Oppervlakte}} en {{ui:Uitsparing}}; na het middelpunt van een cirkel neemt het de straal.

## Een deel van een reeks aftrekken

Een wandreeks die langs een deur of een winkelfront loopt, kan recht doorgetekend worden en telt toch alleen de wand: de segmenten over de opening zijn **aftrekken**. Ze worden gestippeld en dun getekend, en niet geteld.

Tijdens het tekenen:

1. Plaats het punt waar de opening begint.
2. Kies {{ui:Aftrekken}} in de werkbalk of druk op {{key:E}}. De knop blijft ingedrukt en de statusbalk zegt dat de volgende segmenten aftrekken zijn.
3. Klik waar de opening eindigt. Het segment wordt gestippeld getekend; "Lengte" in de statusbalk laat het weg.
4. Druk nogmaals op {{key:E}} en ga verder langs de wand.

Na het tekenen: selecteer de reeks. Onder **Geselecteerde markering** heeft elk segment een vakje {{ui:Aftrekken}}: vink het aan om dat segment af te trekken, vink het uit om het weer te tellen. Elke wijziging is één stap ongedaan maken.

Een reeks houdt altijd minstens één segment dat telt. Het paneel toont dan **Aftrekken** (de afgetrokken lengte) en **Getekend** (de hele reeks); **Lengte**, de hoeveelheid van de post, de wandoppervlakte en de kosten gebruiken allemaal de lengte zonder de aftrekken. De 3D-controleweergave laat een gat in de wand, de gemarkeerde PDF tekent de aftrekken gestippeld, en het geëxporteerde blad **Markeringen** somt ze op.

Het verplaatsen van een hoek behoudt de aftrekken. Punten toevoegen of verwijderen (door de reeks opnieuw te tekenen) begint er zonder.

## De details van een reeks bekijken

Kies {{ui:Selecteren}} ({{key:V}}) en klik op de reeks. **Geselecteerde markering** rechts toont:

- de post waartoe hij behoort (kies een andere lineaire post in de lijst om de reeks daarheen te verplaatsen),
- het blad,
- **Lengte** in feet en inches en in LF,
- het aantal **Segmenten**, en de **Wandoppervlakte** wanneer de post een hoogte heeft,
- de lengte van elk segment, met "(boog)" na bogen, en het vakje {{ui:Aftrekken}}.

Op het blad is elk segment van de geselecteerde reeks gelabeld met zijn lengte.

## Een reeks corrigeren

- **Een punt verplaatsen**: selecteer de reeks en sleep een van de vierkante hoekhandvatten. Houd {{key:Shift}} vast om het verplaatste segment naar stappen van 45° te snappen. Een boog behoudt zijn bolling.
- **Een boog buigen**: een geselecteerde reeks toont een rond handvat in het midden van elke boog. Sleep het: de boog gaat door het punt waar u loslaat, zodat hij meer, minder of de andere kant op buigt. Gesleept op de rechte lijn tussen zijn uiteinden, wordt het een recht segment. {{key:Mod+Z}} maakt het ongedaan ("Boog buigen").
- **Een reeks verwijderen**: selecteer hem en druk op {{key:Delete}}, kies {{ui:Verwijderen}} in het menu {{ui:Meer}} van de werkbalk, of {{ui:Markering verwijderen}} in het paneel.
- **Ongedaan maken**: {{key:Mod+Z}}; opnieuw met {{key:Mod+Y}}.

U kunt nog geen punt midden in een reeks invoegen. Verwijder de reeks en teken hem opnieuw.

## Wandoppervlakte

Geef de lineaire post een {{ui:Hoogte}} (bijvoorbeeld `9'-0"`). Hij rapporteert dan **Wandoppervlakte (A)** = lengte × hoogte, in SF (of m² voor een metrische post), en de wandoppervlakte gaat naar de kolom opmerkingen van de spreadsheet-export. Gebruik die in samenstellingen voor beplating, verf of isolatie: zie [Samenstellingen en formules](topic:assemblies).
