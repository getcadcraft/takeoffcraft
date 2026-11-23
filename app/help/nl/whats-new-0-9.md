---
title: Wat is er nieuw in 0.9 (eerder)
summary: Lengten lezen in meter, centimeter of millimeter, metrische oppervlakten in m2 met wandoppervlak, schaalvoorinstellingen 1:75 en 1:150, gewichts- en temperatuureenheden, Boog met tien methoden, en live cursors, Volgen en een lijst met personen.
keywords: whats new 0.9, eerdere uitgave, wat is er nieuw, release notes, changelog, 0.9, lengten tonen als, meter, centimeter, millimeter, metrisch, volg algemeen, eenheden, weergave-eenheden, m2, vierkante meter, wandoppervlak, schaalvoorinstellingen, 1:75, 1:150, gewicht, kilogram, kg, ton, lb, temperatuur, celsius, fahrenheit, boog, boogmethoden, 3-puntsboog, straal, live, cursors, volgen, lijst met personen, klas, tooltips, indeling, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, alles tellen, legenda, symboollegenda, hele set, prijsgeheugen, eerdere klussen, laatste klus, typische prijs, leverancier, voorraad, levertijd, nabestelling, bestellijst, tekort, problemenpaneel, assistent, talen, invoerapparaten, werkbalkrijen, dwg
from: f4322ba2
---

Dit is wat er is veranderd in TakeoffCraft 0.9, vergeleken met 0.8.1. Het is een kleine uitgave voor deze app: lengten kunnen nu worden gelezen in meter, centimeter of millimeter, oppervlakten en schalen volgen goed het metrische werk, en Boog heeft tien manieren om te tekenen. Live-sessies tonen ook wie waar is.

## Nieuw

### Lengten lezen in meter, centimeter of millimeter

- **Lengten tonen als.** {{ui:Settings}} › {{ui:TakeoffCraft}} heeft {{ui:Show lengths as}} met {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm en mm. {{ui:Follow Global}} gebruikt de metrische lengte-eenheid die u in {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} met een ster hebt aangemerkt, en feet-inches als er geen is aangemerkt. Het verandert hoe lengten worden gelezen op de tekening, in de statusbalk en in de panelen, inclusief hoogten, diepte, dikte en de niveaus. Een kaal getal dat u in een hoogteveld typt, wordt gelezen in de getoonde eenheid.
- **Alleen weergave.** Hoeveelheden, kosten en exports worden berekend uit de exacte lengten. De keuze 1/16, 1/8 en 1/4 inch verschijnt alleen voor feet-inches. Zie [Lengten in meter tonen](topic:show-lengths-in-meters).
- **Gewichtseenheden.** Een post {{ui:Typed quantity (no drawing)}} kan nu in lb, TON, kg of t zijn en per eenheid worden geprijsd.
- **Temperatuur.** Elke post heeft een optioneel veld {{ui:Temperature}} in de postbewerker, ingevoerd in graden C of F. {{ui:Show temperatures as}} in {{ui:Settings}} › {{ui:TakeoffCraft}} biedt {{ui:Follow Global}}, °C of °F.

### Oppervlakten en schalen voor metrisch werk

- **Oppervlakten in m2 op de tekening.** Een oppervlakte die met een metrische post is gemeten, staat nu in m2 op het tekeningslabel en in het markeringspaneel, net als in de tabel, in plaats van SF. De regel is m2 wanneer de post metrisch wordt geprijsd of lengten in m, cm of mm worden getoond, en SF anders.
- **Wandoppervlak.** Een lineaire post met een hoogte toont ook zijn wandoppervlak (lengte maal hoogte) in de lijst Posten en als notitieregel onder de tabel met hoeveelheden per post.
- **Schaalvoorinstellingen 1:75 en 1:150.** Ze staan in de lijst {{ui:Preset}} in de groep {{ui:Scale}}, die nu 32 schalen heeft. Zie [Schaalvoorinstellingen](topic:scale-presets).

### Boog met tien methoden

- Terwijl {{ui:Arc}} aan staat (knop op de werkbalk of {{key:R}}), verschijnt een vak {{ui:Arc method}} in de bladbalk: 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle en Center, Start, Length. Hoek, lengte, straal en richting kunnen worden aangeklikt of getypt. Het werkt in lineaire reeksen, oppervlakten en uitsparingen. Bestanden die vóór 0.9 zijn opgeslagen, openen op dezelfde manier. Zie [Bogen tekenen met tien methoden](topic:draw-arcs-ten-methods).

### Samenwerken

- **Elkaars cursors zien.** In een Live-sessie is de aanwijzer van elke persoon zichtbaar op het blad, met naam en kleur, en een gestippeld kader rond de markeringen die die persoon heeft geselecteerd. Personen op een ander blad worden vermeld met de naam van dat blad. Zie [Samen live werken](topic:work-live).
- **Een persoon volgen, en de lijst met personen.** De knop {{ui:People}} in een Live-sessie toont elke persoon met de tool die die gebruikt, het blad waarop die staat en het moment van de laatste bewerking. {{ui:Follow}} verplaatst uw weergave mee met die van hen, en de host kan {{ui:Ask everyone to follow me}} gebruiken. Zie [Een teamgenoot volgen in een Live-sessie](topic:follow-a-teammate).

## In elke app

- **Tooltips en de starttip.** Zweeftekst is een Bootstrap-tooltip, en de starttip kan worden gesloten.
- **Schuifbare tabbalken.** Een tabbalk van een paneel die niet past, schuift in plaats van te worden afgesneden.
- **Tabbladtitels.** Het browsertabblad toont `<document> - TakeoffCraft | CadCraft`.
- **Indeling.** De lijst met indelingen in {{ui:Settings}} is een keuzelijst die de gekozen indeling toont.
- **Taal.** De taal die u kiest, geldt nu ook voor de woorden die de pagina zelf toont, zoals New, Open en Save. Andere talen dan Engels zijn concepten van machinevertaling totdat een moedertaalspreker ze heeft nagelezen.

## Eerlijke beperkingen

- Weergave van lengten, gewichts- en temperatuureenheden en de nieuwe voorinstellingen zijn gecontroleerd met tests en op de pagina. Elk paneel bij elke eenheid is niet met de hand nagekeken.
- De lijst met personen is niet met de hand getest met een echte klas van docent en leerlingen.
- Talen anders dan Engels zijn concepten van machinevertaling.
- Windows-installers zijn niet van een code-ondertekening voorzien (Meer informatie, dan Toch uitvoeren). De macOS-schijfkopie is niet genotariseerd (klik met de rechtermuisknop, dan Openen).

## Eerder: 0.8 en 0.8.1

Dit is wat er is veranderd in TakeoffCraft 0.8 (uitgebracht 2026-11-01) en 0.8.1 (2026-11-02), vergeleken met 0.7. Een symboollegenda kan nu in één keer over de hele set worden geteld, een nieuwe opmeting kan beginnen met de prijzen van uw eerdere klussen, en de opmeting kan worden gecontroleerd tegen de voorraad van een leverancier. 0.8.1 is een herstelversie.

### Nieuw

**Alles tellen in de set**

- **Het legenda één keer omkaderen.** {{ui:Count everything}} op de werkbalk leest een symboollegenda: sleep een kader om de symbolen en de namen die ernaast zijn afgedrukt. Elk symbool wordt vermeld met zijn afbeelding en naam, en de naam wordt de naam van de post. Vink af wat u niet wilt, en kies daarna {{ui:Tellen op N bladen}}. Een balk toont het blad dat wordt doorzocht, {{ui:Annuleren}} stopt de run, en de pagina blijft bruikbaar.
- **Elk blad in één run.** Elk symbool wordt op elk open blad geteld. Een blad dat op een andere schaal is getekend, wordt op die schaal doorzocht, en symbolen worden gevonden die over een rechte hoek zijn gedraaid. De eigen symbolen van het legenda worden op het legendablad niet geteld.
- **Nakijken voordat er iets wordt toegevoegd.** Elk totaal heeft per blad een link ("E-103: 4") die naar dat blad gaat. Klik op een kader bij een treffer om die uit te sluiten, en klik er opnieuw op om hem terug te zetten. Het overeenkomstniveau (50% tot 100%) filtert alleen wat is gevonden; er wordt niet opnieuw gezocht.
- **Eén stap ongedaan maken.** {{ui:Add N marks}} maakt per symbool een telpost met een markering op elke treffer. Een naam die al een telpost van u is, wordt hergebruikt. {{key:Ctrl+Z}} neemt alle posten en markeringen terug. Wat u accepteert, voedt ook {{ui:Learned}}.
- **Symbolen onder elke hoek.** Vink {{ui:Symbols at any angle}} aan voordat u gaat tellen om ook symbolen te vinden die onder een hoek zijn gedraaid die geen rechte hoek is. De zoekactie draait elk symbool dan elke 15 graden, en een symbool dat niet rond is, kan tot zes keer zo lang duren.
- **Wat het is.** Eenvoudige symboolherkenning op uw eigen bladen, zonder getraind model, en er verlaat niets uw computer. Bij een verzonnen set van 200 bladen duurde het 9,4 seconden van begin tot eind in Chrome op een snelle desktop; echte tekenseries zullen trager zijn. Zie [Alles tellen in de set](topic:count-everything).

**Prijsgeheugen uit uw eigen klussen**

- **TakeoffCraft onthoudt uw tarieven.** Wanneer u een opmeting opslaat, wordt elke geprijsde post die is gebruikt, onthouden op naam en type: materiaaltarief, arbeidstarief, verlies en eenheid. De laatste 12 klussen worden per naam bewaard. Het wordt op deze computer bewaard naast de prijsbibliotheek, nooit in een opmetingsbestand, en er wordt niets verstuurd.
- **Een nieuwe opmeting starten vanuit het geheugen.** {{ui:Prices}} op de werkbalk toont per post de tarieven van de laatste klus, de typische tarieven en de bandbreedte. {{ui:Use last}} of {{ui:Use typical}} prijst één post, en {{ui:Prijs N posten zonder prijs uit het geheugen}} vult elke post die nog geen prijs heeft. Elk gebruik is één stap ongedaan maken.
- **Eerder werk.** {{ui:Learn from a past takeoff…}} onthoudt de geprijsde posten van een opgeslagen opmeting (.json).
- **Zien, wijzigen, vergeten.** {{ui:Everything remembered}} toont elke naam; de prullenbakknop vergeet één naam, en {{ui:Clear all prices}} vergeet alles. Schakel {{ui:Remember my prices when I save a takeoff}} uit om te stoppen. Een prijs per stuk wordt nooit op een post per voet gezet. Zie [Prijsgeheugen uit uw eerdere klussen](topic:price-memory).

**Voorraad van leveranciers en levertijden**

- **Controleren tegen de lijst van een leverancier.** {{ui:Supply}} op de werkbalk neemt een voorraadlijst van een leverancier ({{ui:Add a supplier file…}}), een CSV of een spreadsheet, en controleert wat de opmeting nodig heeft, met verlies, daartegen. Er worden maximaal vijf bestanden bewaard. Er wordt niets verstuurd en niemand vraagt iets aan een leverancier: u brengt het bestand aan.
- **Wat het zegt.** Korte posten komen eerst: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" of "In stock". {{ui:Longest wait wanted (days)}} begint bij 14.
- **Bestellijst.** {{ui:Order list (CSV)}} downloadt de korte posten met het tekort, de leverancier en de levertijd.
- **Prijzen naar de bibliotheek.** Als het bestand prijzen bevat, stelt {{ui:Prices into the Library}} de materiaalprijs in van elke bibliotheekitem met dezelfde naam en eenheid. Herprijs vanuit de bibliotheek om ze in de opmeting te brengen.
- **In het Problemen-paneel.** Een tekort is een waarschuwing en een lange wachttijd is een opmerking, onder "Supplier stock". U kunt er een accepteren met een reden, en de reden wordt in de opmeting opgeslagen. Zie [Voorraad van leveranciers en levertijden controleren](topic:supplier-stock).

**AI-assistenten**

- **Hulpmiddelen voor alle drie.** Met assistenten toegestaan in {{ui:Settings}}, kan een assistent een legenda lezen (`legend_open`), de telling uitvoeren (`legend_count_start`, daarna `legend_count_status` en `legend_count_result`) en die toevoegen (`legend_count_add`, dat eerst een voorbeeld kan tonen). Het kan de onthouden prijzen lezen (`prices_list`) en posten daaruit prijzen geven (`prices_apply`, dat eerst een voorbeeld kan tonen), en de leveranciercontrole lezen (`supply_check`). Een leveranciersbestand toevoegen blijft aan u. Zie [TakeoffCraft gebruiken met AI-assistenten](topic:use-with-ai-assistants).

**In elke app**

- **Talen.** Vierenvijftig talen in totaal; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeks). Andere talen dan Engels zijn concepten van machinevertaling totdat een moedertaalspreker ze heeft nagelezen.
- **Invoerapparaten.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} bepaalt wat een trackpad, de zijknoppen van een muis, een pen, een 3D-muis, een gamecontroller of een MIDI-controller doet, voor elke app of voor één app. Zie [Een trackpad, 3D-muis of controller gebruiken](common:input-devices).
- **Werkbalkrijen.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} biedt {{ui:Wrap}} (de start), {{ui:2 rows}} en {{ui:1 row}}; groepen die niet passen, schuiven zijdelings. Zie [De panelen indelen](common:arrange-panels).
- **Problemen-paneel.** Het gedeelde paneel met waarschuwingen en opmerkingen toont nu ook de bovenstaande voorraadcontrole van leveranciers, naast de andere controles.
- **Add-ons.** Add-ons volgen uw accountlijst. Zie [Add-ons en uw accountlijst](common:addons-basics).
- **Uw AI koppelen.** CadCraft Studio is de hub: koppel uw assistent één keer voor alle acht apps. Studio heeft geen eigen AI.

### Opgelost in 0.8.1

- **Sectie met DWG-klassen.** De sectie met klassen van een DWG-bestand werd als het verkeerde type gelezen. Dit is opgelost in TakeoffCraft en in vier andere apps.
- **Studio kan de taal wijzigen terwijl het draait.** Voorheen waren Studio en de verpakte edities alleen in het Engels. Dit is niet getest in de desktopversie op elk platform; laat ons weten als de taal niet verandert.

### Nog niet in deze versie

- **Niet code-ondertekend.** Windows kan waarschuwen, en op een Mac klikt u de eerste keer met de rechtermuisknop en kiest u {{ui:Open}}. De winkelversies (Microsoft Store, Google Play, App Store) zijn on hold, en de iPad- en iPhone-versie is niet opnieuw gebouwd voor 0.8.1.
- **Studio-updates.** Het Windows-installatieprogramma en de Linux-pakketten controleren eens per dag en vragen eerst. Het draagbare zip-bestand laat alleen weten dat er een update is, en macOS en de APK werken zichzelf niet bij. Het macOS .dmg van 0.8 volgt de uitgave.
- **Uw AI koppelen.** Koppelen met één klik binnen Studio, de gehoste connector voor AI in de browser, uw eigen API-sleutel binnen Studio en een gepubliceerd MCP-pakket worden in deze versie niet beloofd.
- **Alles tellen.** Het vereist symbolen die op dezelfde manier zijn getekend als in het legenda, en een symbool met een wand of lange lijn erdoorheen kan worden gemist. Gespiegelde symbolen worden niet gevonden, en een blad zonder schaal dat op een andere grootte is getekend, wordt doorzocht op de grootte van het legenda. Controleer de treffers op het eerste blad voordat u de rest vertrouwt.
- **Voorraad van leveranciers.** Voorraadcijfers zijn alleen zo actueel als het bestand dat u toevoegt. De controle vraagt nooit iets aan een leverancier.
- **Talen.** De appbalk van Tamil loopt over.

Alles wat er verder is, staat in [Nog niet beschikbaar](topic:not-built-yet). Voor de uitgave vóór deze, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
