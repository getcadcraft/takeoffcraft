---
title: De schaal instellen
summary: Geef elk blad een schaal met een voorinstelling of door te ijken op een bekende maat, controleer die, en begrijp waarom bladen zonder schaal buiten de totalen blijven.
keywords: schaal detecteren, schaal lezen, schaal uit tekst, alle bladen, schaal, ijken, voorinstelling, schaal controleren, verifiëren, bekende maat, zonder schaal, geen schaal, verhouding, schaal instellen
from: 8f0148e6
---

Elk blad heeft zijn eigen schaal. U stelt die in, of laat TakeoffCraft die uit de tekst van de bladen lezen (hieronder), en controleert hem. Zolang een blad er geen heeft, weigeren {{ui:Lineair}}, {{ui:Oppervlakte}}, {{ui:Cirkel}} en {{ui:Uitsparing}} erop te meten. {{ui:Tellen}} en {{ui:Automatisch tellen}} werken zonder schaal.

De bladenlijst toont de schaal van elk blad, of **Geen schaal**. De balk onder het geopende blad zegt hetzelfde.

## Een voorinstelling gebruiken (wanneer de PDF op ware grootte is afgedrukt)

1. Open het blad.
2. Open de lijst {{ui:Voorinstelling}} in de groep {{ui:Schaal}}.
3. Kies de schaal die op de tekening staat, bijvoorbeeld `1/8" = 1'-0"` onder Architectonisch.
   De statusbalk zegt "Schaal voor dit blad: 1/8" = 1'-0"."
4. Controleer hem (hieronder).

Een voorinstelling gaat ervan uit dat de PDF het echte papierformaat is waarvoor de tekening is gemaakt. Als iemand de PDF met "passend maken op pagina" heeft gemaakt, of het is een set op halve grootte, is de voorinstelling fout. Ijk dan.

De volledige lijst staat in [Schaalvoorinstellingen](topic:scale-presets).

## De schalen lezen uit de tekst van de bladen

De meeste tekeningen vermelden hun schaal: `SCHAAL: 1/4" = 1'-0"` in het titelblok, `1:100` onder een aanzicht. TakeoffCraft kan die lezen en elk blad tegelijk instellen.

1. Open de lijst {{ui:Voorinstelling}} en kies {{ui:Uit de tekst van de bladen…}} (bovenaan).
2. De lijst toont elk blad: de huidige schaal, en wat de tekst zegt — **Zegt 1/4" = 1'-0"**, **Geen schaal in de tekst** of **Zegt niet op schaal** (NTS).
3. Bladen zonder schaal die er een vermelden, zijn aangevinkt. Vink aan of uit wat u wilt, en kies {{ui:De aangevinkte schalen instellen}}. Eén {{key:Mod+Z}} neemt ze allemaal terug.
4. Controleer één maat op elk blad met {{ui:Controleren}} (hieronder): een voorinstelling klopt alleen als de PDF op ware grootte is afgedrukt.

Het leest architectonische (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), engineering (`1" = 20'`) en metrische (`1:50`) notaties die overeenkomen met een [voorinstelling](topic:scale-presets). Als een blad meer dan één schaal vermeldt (een plattegrond met vergrote details), neemt het de schaal die het het vaakst noemt, en een schaal die na het woord SCHAAL staat telt dubbel; de andere worden in rood getoond zodat u ze kunt controleren. Een gescand blad heeft geen tekst: stel de schaal dan met de hand in.

## Ijken op een bekende maat

Gebruik dit wanneer er geen afgedrukte schaal is die u vertrouwt, de set is verkleind, of het blad zegt "niet op schaal" maar wel maten heeft.

1. Open het blad en zoom in op een lange maat die u kent, zoals de afstand tussen assen of een totale gebouwmaat. Hoe langer, hoe nauwkeuriger.
2. Kies {{ui:Ijken}} in de groep {{ui:Schaal}}, of druk op {{key:K}}.
3. Klik op één uiteinde van de maat. Zoom in op elk uiteinde voor precisie; u kunt zoomen en verschuiven tussen de klikken.
4. Klik op het andere uiteinde. Houd {{key:Shift}} ingedrukt om de lijn op 0°, 45° of 90° te houden.
   Het dialoogvenster **Dit blad ijken** opent.
5. Typ de werkelijke afstand bij **Werkelijke afstand**, bijvoorbeeld `24'-6 1/2"`, `24.5` (decimale voet), `30"` of `7.5 m`. Zie [Invoer van lengte, tarief en percentage](topic:entry-formats).
6. Kies {{ui:De schaal instellen}}.
   De statusbalk toont de schaal als "1" = (n)'", en als die binnen 0.5% van een voorinstelling ligt, zegt hij welke, bijvoorbeeld "wat overeenkomt met 1/4" = 1'-0" (kies die voorinstelling voor een exacte schaal)".
   TakeoffCraft gaat terug naar het gereedschap {{ui:Selecteren}}.

Wanneer de ijking overeenkomt met een voorinstelling, geeft die voorinstelling een exacte schaal in plaats van een die afhangt van waar u klikte.

## De schaal controleren

Controleer een nieuwe schaal altijd op een tweede maat.

1. Kies {{ui:Controleren}} in de groep {{ui:Schaal}}, of druk op {{key:D}}.
2. Klik op beide uiteinden van een maat die op de tekening staat.
   De statusbalk toont "Controle: 12'-6"" met dezelfde lengte in decimale voet en meter, en de controlelijn blijft op het blad staan met zijn lengte.
3. Vergelijk hem met de afgedrukte maat. Klopt die niet, ijk dan op een langere maat.

Druk op {{key:Esc}} om de controlelijn te wissen.

## Een schaal wijzigen

Kies een andere voorinstelling of ijk opnieuw. Als het blad al metingen heeft, vraagt TakeoffCraft **De schaal van dit blad wijzigen?** en zegt hoeveel metingen opnieuw worden gemeten. Kies {{ui:De schaal wijzigen}}. Elke lengte en oppervlakte op het blad wordt opnieuw gemeten op de nieuwe schaal. U kunt dit ongedaan maken met {{key:Mod+Z}}.

## Waarom bladen zonder schaal niet als nul tellen

Een markering op een blad zonder schaal heeft geen echte lengte of oppervlakte. TakeoffCraft telt die nooit als nul, wat uw raming stilletjes te laag zou maken. In plaats daarvan:

- laat het die markeringen weg uit de totalen,
- toont het "+(n) zonder schaal" naast de post in {{ui:Hoeveelheden}},
- toont het "Onvolledig: (n) markeringen op bladen zonder schaal (niet in de totalen)" in de koptekst van de tabel,
- schrijft het het aantal in de notitiekolom van de spreadsheet-export.

Dit kan gebeuren wanneer u een project opent waarvan de schalen nooit zijn ingesteld. Geef het blad een schaal en de markeringen worden meteen meegeteld. Telmarkeringen tellen altijd mee; ze hebben geen schaal nodig.

## Tips

- Stel de schaal in op elk blad dat u gaat meten, voordat u begint. Zoek in de bladenlijst naar **Geen schaal** om de overgebleven bladen te vinden (het zoekvak kijkt naar bladnamen, niet naar schalen).
- Details en vergrote plattegronden op hetzelfde blad gebruiken vaak een andere schaal. TakeoffCraft heeft één schaal per blad; zie [Wat nog niet beschikbaar is](topic:not-built-yet).
- Metrische tekeningen: kies een metrische voorinstelling zoals `1:100`, of ijk met een metrische afstand zoals `6000 mm`.
