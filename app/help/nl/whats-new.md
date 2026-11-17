---
title: Wat is er nieuw in 0.9
summary: Lengten lezen in meter, centimeter of millimeter, metrische oppervlakten in m2 met wandoppervlakte, schaalvoorinstellingen 1:75 en 1:150, gewichts- en temperatuureenheden, Boog met tien methoden, en live cursors, Volgen en een lijst met personen.
keywords: wat is er nieuw, uitgavenotities, wijzigingenlogboek, 0.9, lengten tonen als, meters, centimeters, millimeters, metrisch, volg algemeen, eenheden, weergave-eenheden, m2, vierkante meters, wandoppervlakte, schaalvoorinstellingen, 1:75, 1:150, gewicht, kilogram, kg, ton, t, lb, temperatuur, celsius, fahrenheit, boog, boogmethoden, 3-punts boog, straal, live, cursors, volgen, lijst met personen, klas, infoteksten, indeling, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, alles tellen, legenda, symboollegenda, hele set, prijsgeheugen, vorige klussen, laatste klus, typische prijs, leverancier, voorraad, levertijd, nalevering, bestellijst, tekort, probleempaneel, assistent, talen, invoerapparaten, werkbalkrijen, dwg
from: 6182b998
---

Dit is wat er in TakeoffCraft 0.9 is veranderd, vergeleken met 0.8.1. Het is een kleine uitgave voor deze app: lengten kunnen nu worden gelezen in meter, centimeter of millimeter, oppervlakten en schalen volgen het metrische werk goed, en Boog heeft tien manieren om te tekenen. Live-sessies tonen ook wie waar is.

## Nieuw

### Lengten lezen in meter, centimeter of millimeter

- **Lengten tonen als.** {{ui:Instellingen}} › {{ui:TakeoffCraft}} heeft {{ui:Lengten tonen als}} met {{ui:Volg Algemeen}}, {{ui:Feet-inches}}, m, cm en mm. {{ui:Volg Algemeen}} gebruikt de metrische lengte-eenheid die u met een ster markeerde in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}}, en feet-inches wanneer er geen met een ster is gemarkeerd. Het verandert hoe lengten op het blad, in de statusbalk en in de panelen worden gelezen, ook hoogten, diepte, dikte en de niveaus. Een kaal getal dat in een hoogtevak wordt getypt, wordt gelezen in de getoonde eenheid.
- **Alleen weergave.** Hoeveelheden, kosten en exports worden berekend uit de exacte lengten. De keuze uit 1/16, 1/8 en 1/4 inch verschijnt alleen bij feet-inches. Zie [Lengten tonen in meter](topic:show-lengths-in-meters).
- **Gewichtseenheden.** Een post {{ui:Getypte hoeveelheid (geen tekening)}} kan nu in lb, TON, kg of t zijn, en per eenheid worden geprijsd.
- **Temperatuur.** Elke post heeft een optioneel veld {{ui:Temperatuur}} in de postbewerker, getypt in graden C of F. {{ui:Temperaturen tonen als}} in {{ui:Instellingen}} › {{ui:TakeoffCraft}} biedt {{ui:Volg Algemeen}}, °C of °F.

### Oppervlakten en schalen voor metrisch werk

- **Oppervlakten in m2 op de tekening.** Een oppervlakte die met een metrische post is gemeten, zegt nu m2 op het label op de tekening en het markeringenpaneel, evenals in de tabel, in plaats van SF. De regel is m2 wanneer de post metrisch wordt geprijsd of lengten in m, cm of mm worden getoond, en anders SF.
- **Wandoppervlakte.** Een lineaire post met een hoogte toont ook zijn wandoppervlakte (lengte maal hoogte) in de lijst Posten en als opmerkingenrij onder de tabel met hoeveelheden per post.
- **Schaalvoorinstellingen 1:75 en 1:150.** Ze staan in de lijst {{ui:Voorinstelling}} in de groep {{ui:Schaal}}, die nu 32 schalen heeft. Zie [Schaalvoorinstellingen](topic:scale-presets).

### Boog met tien methoden

- Terwijl {{ui:Boog}} aan staat (werkbalkknop of {{key:R}}), verschijnt een vak {{ui:Boogmethode}} in de bladbalk: 3-punts, Begin, Middelpunt, Eind, Begin, Middelpunt, Hoek, Begin, Middelpunt, Lengte, Begin, Eind, Hoek, Begin, Eind, Richting, Begin, Eind, Straal, Middelpunt, Begin, Eind, Middelpunt, Begin, Hoek en Middelpunt, Begin, Lengte. Hoek, lengte, straal en richting kunnen worden aangeklikt of getypt. Het werkt bij lineaire lopende meters, oppervlakten en uitsparingen. Bestanden die vóór 0.9 zijn opgeslagen, openen gelijk. Zie [Bogen tekenen met tien methoden](topic:draw-arcs-ten-methods).

## Samenwerken

- **Elkaars cursors zien.** In een Live-sessie is de aanwijzer van elke persoon op het blad te zien met zijn of haar naam en kleur, met een gestreept kader om de markeringen die die heeft geselecteerd. Personen op een ander blad worden vermeld met de naam van dat blad. Zie [Samen live werken met anderen](topic:work-live).
- **Iemand volgen, en de lijst met personen.** De knop {{ui:Personen}} in een Live-sessie toont elke persoon met het gereedschap dat die gebruikt, het blad waarop die staat en wanneer die voor het laatst heeft bewerkt. {{ui:Volgen}} verplaatst uw weergave mee met die van hem of haar, en de host kan {{ui:Iedereen vragen mij te volgen}} gebruiken. Zie [Een teamgenoot volgen in een Live-sessie](topic:follow-a-teammate).

## In elke app

- **Infoteksten en de starttip.** Tekst bij aanwijzen is een Bootstrap-infotekst, en de starttip kan worden gesloten.
- **Scrollende tabbalken.** Een tabbalk van een paneel die niet past, scrolt in plaats van afgesneden te worden.
- **Tabbladtitels.** Het browsertabblad leest `<document> - TakeoffCraft | CadCraft`.
- **Indeling.** De lijst met indelingen in {{ui:Instellingen}} is een keuzelijst die de gekozen indeling toont.
- **Taal.** De taal die u kiest, bereikt nu ook de woorden die de pagina zelf afdrukt, zoals Nieuw, Openen en Opslaan. Talen anders dan Engels zijn machineconcepten tot een moedertaalspreker ze heeft gelezen.

## Eerlijke grenzen

- De weergave van lengten, de gewichts- en temperatuureenheden en de nieuwe voorinstellingen zijn gecontroleerd met tests en op de pagina. Niet elk paneel bij elke eenheid is met de hand gecontroleerd.
- De lijst met personen is niet met de hand gecontroleerd met een echte klas van docent en leerlingen.
- Talen anders dan Engels zijn machineconcepten.
- Windows-installatieprogramma's zijn niet ondertekend met een code (Meer informatie, dan Toch uitvoeren). Het macOS-schijfbeeld is niet genotariseerd (rechtermuisknop, dan Openen).

## Eerder: 0.8 en 0.8.1

Dit is wat er in TakeoffCraft 0.8 (uitgebracht op 2026-11-01) en 0.8.1 (2026-11-02) is veranderd, vergeleken met 0.7. Een symboollegenda kan nu in één keer over de hele set worden geteld, een nieuwe opmeting kan starten vanuit de prijzen van uw vorige klussen, en de opmeting kan worden gecontroleerd tegen de voorraad van een leverancier. 0.8.1 is een herstelversie.

### Nieuw

**Tel alles in de set**

- **Omkader de legenda één keer.** {{ui:Alles tellen}} op de werkbalk leest een symboollegenda: sleep een kader om de symbolen en de namen die ernaast staan. Elk symbool wordt vermeld met zijn beeld en naam, en de naam wordt de naam van de post. Vink uit wat u niet wilt, kies daarna {{ui:Tellen op N bladen}}. Een balk toont het blad dat wordt doorzocht, {{ui:Annuleren}} stopt de uitvoering, en de pagina blijft bruikbaar.
- **Elk blad in één uitvoering.** Elk symbool wordt geteld op elk geopend blad. Een blad dat op een andere schaal is getekend, wordt op die schaal doorzocht, en symbolen worden gevonden die onder een rechte hoek zijn gedraaid. De symbolen van de legenda zelf worden niet geteld op het eigen blad.
- **Controleren voordat er iets wordt toegevoegd.** Elk totaal heeft per blad een link ("E-103: 4") die naar dat blad gaat. Klik op een kader bij een vondst om die uit te sluiten, en klik er nogmaals op om hem terug te zetten. Het overeenkomstniveau (50% tot 100%) filtert alleen wat is gevonden; er wordt niets opnieuw gezocht.
- **Eén stap ongedaan maken.** {{ui:N markeringen toevoegen}} maakt per symbool een telpost met een markering bij elke vondst. Een naam die al een telpost van u is, wordt hergebruikt. {{key:Ctrl+Z}} draait alle posten en markeringen terug. Wat u accepteert, voedt ook {{ui:Geleerd}}.
- **Symbolen onder elke hoek.** Vink {{ui:Symbolen onder elke hoek}} aan voordat u telt, om ook symbolen te vinden die onder een andere hoek dan een rechte hoek zijn gedraaid. De zoekactie draait elk symbool dan elke 15 graden, en een symbool dat niet rond is, kan tot zes keer zo lang duren.
- **Wat het is.** Gewone symboolvergelijking op uw eigen bladen, zonder getraind model, en niets verlaat uw computer. Op een verzonnen set van 200 bladen duurde het 9.4 seconden van begin tot eind in Chrome op een snelle desktop; echte tekensets zullen trager zijn. Zie [Tel alles in de set](topic:count-everything).

**Prijsgeheugen uit uw eigen klussen**

- **TakeoffCraft onthoudt uw tarieven.** Wanneer u een opmeting opslaat, wordt elke geprijsde post die is gebruikt, onthouden op naam en type: materiaaltarief, arbeidstarief, verlies en eenheid. De laatste 12 klussen worden per naam bewaard. Het wordt op deze computer bewaard naast de bibliotheek met prijzen, nooit in een opmetingsbestand, en er wordt niets ergens naartoe gestuurd.
- **Begin een nieuwe opmeting ermee.** {{ui:Prijzen}} op de werkbalk toont voor elke post de tarieven van de laatste klus, de gebruikelijke tarieven en de spreiding. {{ui:Laatste gebruiken}} of {{ui:Gebruikelijke gebruiken}} prijst één post, en {{ui:Prijs N posten zonder prijs uit het geheugen}} vult elke post die nog geen prijs heeft. Elk gebruik is één stap ongedaan maken.
- **Eerder werk.** {{ui:Leren van een eerdere opmeting…}} onthoudt de geprijsde posten van een opgeslagen opmeting (.json).
- **Bekijken, wijzigen, vergeten.** {{ui:Alles wat is onthouden}} toont elke naam; de prullenbakknop vergeet er één, en {{ui:Alle prijzen wissen}} vergeet alles. Schakel {{ui:Mijn prijzen onthouden wanneer ik een opmeting opsla}} uit om te stoppen. Een prijs per stuk wordt nooit op een post per voet gezet. Zie [Prijsgeheugen uit uw vorige klussen](topic:price-memory).

**Voorraad van leveranciers en levertijden**

- **Controleren tegen de lijst van een leverancier.** {{ui:Levering}} op de werkbalk neemt de voorraadlijst van een leverancier ({{ui:Een leveranciersbestand toevoegen…}}), een CSV of een spreadsheet, en controleert daartegen wat de opmeting nodig heeft, met verlies erbij. Er worden tot vijf bestanden bewaard. Er wordt niets verzonden en niets vraagt iets aan een leverancier: u brengt het bestand mee.
- **Wat het zegt.** Posten met een tekort komen eerst: "120 EA tekort", "Levertijd 21 dagen", "Op nabestelling", "Eenheid verschilt", "Geen voorraadcijfer" of "Op voorraad". {{ui:Langste gewenste wachttijd (dagen)}} begint bij 14.
- **Bestellijst.** {{ui:Bestellijst (CSV)}} downloadt de posten met een tekort, met het tekort, de leverancier en de levertijd.
- **Prijzen naar de bibliotheek.** Als het bestand prijzen heeft, stelt {{ui:Prijzen naar de bibliotheek}} de materiaalprijs in van elk bibliotheekitem met dezelfde naam en eenheid. Herprijs vanuit de bibliotheek om ze in de opmeting te brengen.
- **In het probleempaneel.** Een tekort is een waarschuwing en een lange wachttijd is een opmerking, onder "Voorraad van leverancier". U kunt er een accepteren met een reden, en de reden wordt in de opmeting opgeslagen. Zie [Voorraad van leveranciers en levertijden controleren](topic:supplier-stock).

**AI-assistenten**

- **Tools voor alle drie.** Als assistenten zijn toegestaan in {{ui:Instellingen}}, kan een assistent een legenda lezen (`legend_open`), de telling uitvoeren (`legend_count_start`, daarna `legend_count_status` en `legend_count_result`) en die toevoegen (`legend_count_add`, die eerst een voorvertoning kan geven). Die kan de onthouden prijzen lezen (`prices_list`) en posten ermee prijzen (`prices_apply`, die eerst een voorvertoning kan geven), en de leverancierscontrole lezen (`supply_check`). Een leveranciersbestand toevoegen doet u zelf. Zie [TakeoffCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

**In elke app**

- **Talen.** Vierenvijftig talen in totaal; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeeks). Talen anders dan Engels zijn machineconcepten tot een moedertaalspreker ze heeft gelezen.
- **Invoerapparaten.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Invoerapparaten}} bepaalt wat een touchpad, de zijknoppen van een muis, een pen, een 3D-muis, een gamecontroller of een MIDI-controller doet, voor elke app of voor één. Zie [Een touchpad, 3D-muis of controller gebruiken](common:input-devices).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} biedt {{ui:Omslaan}} (de start), {{ui:2 rijen}} en {{ui:1 rij}}; groepen die niet passen, scrollen zijdelings. Zie [Panelen indelen](common:arrange-panels).
- **Probleempaneel.** Het gedeelde paneel met waarschuwingen en opmerkingen bevat nu de voorraadcontrole van leveranciers hierboven, naast de andere controles.
- **Add-ons.** Add-ons volgen uw accountlijst. Zie [Add-ons en uw accountlijst](common:addons-basics).
- **Verbind uw AI.** CadCraft Studio is de hub: verbind uw assistent één keer voor alle acht apps. Studio heeft geen eigen AI.

### Hersteld in 0.8.1

- **DWG-klassensectie.** De klassensectie van een DWG-bestand werd als het verkeerde type gelezen. Dit is hersteld in TakeoffCraft, en in vier andere apps.
- **Studio kan de taal wijzigen terwijl het draait.** Vroeger waren Studio en de verpakte versies alleen in het Engels. Dit is niet op elk platform getest in de desktopbuild; laat het ons weten als de taal niet verandert.

### Nog niet in deze versie

- **Niet ondertekend met een code.** Windows kan waarschuwen, en op een Mac klikt u de eerste keer met de rechtermuisknop en kiest u {{ui:Openen}}. De winkelbuilds (Microsoft Store, Google Play, App Store) liggen stil, en de iPad- en iPhone-build is niet opnieuw gebouwd voor 0.8.1.
- **Studio-updates.** Het Windows-installatieprogramma en de Linux-pakketten controleren één keer per dag en vragen eerst. De draagbare zip laat het alleen weten, en macOS en de APK werken zichzelf niet bij. De macOS-.dmg van 0.8 volgt de uitgave.
- **Verbind uw AI.** Verbinden met één klik in Studio, de gehoste connector voor AI in de browser, uw eigen API-sleutel in Studio en een gepubliceerd MCP-pakket worden in deze versie niet beloofd.
- **Alles tellen.** Het heeft symbolen nodig die op dezelfde manier zijn getekend als in de legenda, en een symbool met een wand of lange lijn erdoor kan worden gemist. Gespiegelde symbolen worden niet gevonden, en een blad zonder schaal dat op een andere grootte is getekend, wordt doorzocht op de grootte van de legenda. Controleer de vondsten op het eerste blad voordat u de rest vertrouwt.
- **Voorraad van leveranciers.** Voorraadcijfers zijn alleen zo actueel als het bestand dat u toevoegt. De controle vraagt nooit iets aan een leverancier.
- **Talen.** De appbalk van Tamil loopt over.

Al het overige staat in [Nog niet beschikbaar](topic:not-built-yet). Voor de uitgave ervoor, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
