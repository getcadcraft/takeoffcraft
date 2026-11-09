---
title: Wat is er nieuw in 0.8 en 0.8.1
summary: Tel een volledig symboollegenda over alle geopende bladen in één keer, prijs items op basis van de tarieven van uw eerdere klussen, controleer de opmeting tegen de voorraad en levertijden van een leverancier, en nieuwe assistenttools voor alle drie, plus de gedeelde wijzigingen van 0.8 en de oplossing in 0.8.1 voor DWG-bestanden.
keywords: wat is er nieuw, what's new, uitgavenotities, wijzigingslogboek, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, alles tellen, legenda, symboollegenda, hele set, prijsgeheugen, eerdere klussen, laatste klus, gebruikelijke prijs, leverancier, voorraad, levertijd, nabestelling, bestellijst, tekort, paneel Problemen, assistent, talen, invoerapparaten, werkbalkrijen, dwg
from: a04adef6
---

Dit is wat er is veranderd in TakeoffCraft 0.8 (uitgebracht 2026-11-01) en 0.8.1 (2026-11-02), vergeleken met 0.7. Een symboollegenda kan nu in één keer over de hele set worden geteld, een nieuwe opmeting kan beginnen met de prijzen van uw eerdere klussen, en de opmeting kan worden gecontroleerd tegen de voorraad van een leverancier. 0.8.1 is een herstelversie.

## Nieuw

### Alles tellen in de set

- **Omkader het legenda één keer.** {{ui:Alles tellen}} op de werkbalk leest een symboollegenda: sleep een kader om de symbolen en de namen die ernaast staan. Elk symbool wordt weergegeven met zijn afbeelding en naam, en de naam wordt de naam van het item. Vink uit wat u niet wilt, kies daarna {{ui:Tellen op N bladen}}. Een balk toont het blad dat wordt doorzocht, {{ui:Annuleren}} stopt de run en de pagina blijft bruikbaar.
- **Elk blad in één run.** Elk symbool wordt geteld op elk geopend blad. Een blad dat op een andere schaal is getekend, wordt op die schaal doorzocht, en symbolen worden gevonden in elke rechte hoek gedraaid. De symbolen van het legenda zelf worden op het eigen blad niet geteld.
- **Controleren voordat er iets wordt toegevoegd.** Elk totaal heeft per blad een link ("E-103: 4") die naar dat blad gaat. Klik op een kader bij een vondst om die uit te sluiten, en klik er opnieuw op om hem terug te zetten. Het overeenkomstniveau (50% tot 100%) filtert alleen wat is gevonden; er wordt niets opnieuw doorzocht.
- **Eén stap ongedaan maken.** {{ui:N markeringen toevoegen}} maakt per symbool een telitem met een markering op elke vondst. Een naam die al een telitem van u is, wordt hergebruikt. {{key:Ctrl+Z}} haalt alle items en markeringen weer weg. Wat u accepteert, voedt ook {{ui:Geleerd}}.
- **Symbolen onder elke hoek.** Vink {{ui:Symbolen onder elke hoek}} aan voordat u gaat tellen om ook symbolen te vinden die onder een hoek zijn gedraaid die geen rechte hoek is. De zoekactie draait elk symbool dan elke 15 graden, en een symbool dat niet rond is, kan tot zes keer zo lang duren.
- **Wat het is.** Eenvoudige symboolherkenning op uw eigen bladen, zonder getraind model, en er verlaat niets uw computer. Op een verzonnen set van 200 bladen duurde het 9.4 seconden van begin tot eind in Chrome op een snelle desktop; echte plansets zullen trager zijn. Zie [Alles tellen in de set](topic:count-everything).

### Prijsgeheugen uit uw eigen klussen

- **TakeoffCraft onthoudt uw tarieven.** Wanneer u een opmeting opslaat, wordt elk geprijsd item dat wordt gebruikt onthouden op naam en type: materiaaltarief, arbeidstarief, verlies en eenheid. De laatste 12 klussen worden per naam bewaard. Het wordt op deze computer bewaard naast de prijsbibliotheek, nooit in een opmeetbestand, en er wordt niets verstuurd.
- **Begin een nieuwe opmeting ermee.** {{ui:Prijzen}} op de werkbalk toont per item de tarieven van de laatste klus, de gebruikelijke tarieven en de bandbreedte. {{ui:Laatste gebruiken}} of {{ui:Gebruikelijke gebruiken}} prijst één item, en {{ui:Prijs N items zonder prijs uit het geheugen}} vult elk item dat nog geen prijs heeft. Elk gebruik is één stap ongedaan maken.
- **Oudere werk.** {{ui:Leren van een eerdere opmeting…}} onthoudt de geprijsde items van een opgeslagen opmeting (.json).
- **Bekijken, wijzigen, vergeten.** {{ui:Alles wat is onthouden}} toont elke naam; de prullenbakknop vergeet één naam, en {{ui:Alle prijzen wissen}} vergeet alles. Schakel {{ui:Mijn prijzen onthouden wanneer ik een opmeting opsla}} uit om te stoppen. Een prijs per stuk wordt nooit op een item per voet gezet. Zie [Prijsgeheugen uit uw eerdere klussen](topic:price-memory).

### Leveranciersvoorraad en levertijden

- **Controleer tegen de lijst van een leverancier.** {{ui:Levering}} op de werkbalk neemt de voorraadlijst van een leverancier ({{ui:Een leveranciersbestand toevoegen…}}), een CSV of een spreadsheet, en controleert daartegen wat de opmeting nodig heeft, met verlies erbij. Er worden maximaal vijf bestanden bewaard. Er wordt niets verstuurd en niets vraagt iets aan een leverancier: u brengt het bestand aan.
- **Wat het zegt.** Korte items komen eerst: "Tekort 120 EA", "Levertijd 21 dagen", "Op nabestelling", "Eenheid verschilt", "Geen voorraadcijfer" of "Op voorraad". {{ui:Langste gewenste wachttijd (dagen)}} begint bij 14.
- **Bestellijst.** {{ui:Bestellijst (CSV)}} downloadt de korte items met het tekort, de leverancier en de levertijd.
- **Prijzen naar de bibliotheek.** Als het bestand prijzen bevat, zet {{ui:Prijzen naar de bibliotheek}} de materiaalprijs van elk bibliotheekitem met dezelfde naam en eenheid. Herprijs vanuit de bibliotheek om ze in de opmeting te brengen.
- **In het paneel Problemen.** Een tekort is een waarschuwing en een lange wachttijd is een opmerking, onder "Leveranciersvoorraad". U kunt er één accepteren met een reden, en de reden wordt in de opmeting opgeslagen. Zie [Leveranciersvoorraad en levertijden controleren](topic:supplier-stock).

### AI-assistenten

- **Tools voor alle drie.** Met assistenten toegestaan in {{ui:Instellingen}}, kan een assistent een legenda lezen (`legend_open`), de telling uitvoeren (`legend_count_start`, daarna `legend_count_status` en `legend_count_result`) en die toevoegen (`legend_count_add`, dat eerst een voorbeeld kan tonen). Het kan de onthouden prijzen lezen (`prices_list`) en items daarmee prijzen (`prices_apply`, dat eerst een voorbeeld kan tonen), en de leveranciercontrole lezen (`supply_check`). Het toevoegen van een leveranciersbestand blijft aan u. Zie [TakeoffCraft gebruiken met AI-assistenten](topic:use-with-ai-assistants).

### In elke app

- **Talen.** Vierenvijftig talen in totaal; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili en Oezbeeks). Andere talen dan Engels zijn machinale concepten totdat een moedertaalspreker ze heeft nagelezen.
- **Invoerapparaten.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Invoerapparaten}} bepaalt wat een trackpad, de zijknoppen van een muis, een pen, een 3D-muis, een gamecontroller of een MIDI-controller doet, voor elke app of voor één app. Zie [Een trackpad, 3D-muis of controller gebruiken](common:input-devices).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} biedt {{ui:Omslaan}} (het begin), {{ui:2 rijen}} en {{ui:1 rij}}; groepen die niet passen scrollen opzij. Zie [De panelen indelen](common:arrange-panels).
- **Paneel Problemen.** Het gedeelde paneel met waarschuwingen en opmerkingen bevat nu de bovenstaande leveranciersvoorraadcontrole, naast de andere controles.
- **Add-ons.** Add-ons volgen uw accountlijst. Zie [Add-ons en uw accountlijst](common:addons-basics).
- **AI koppelen.** CadCraft Studio is de hub: koppel uw assistent één keer voor alle acht apps. Studio heeft zelf geen AI.

## Opgelost in 0.8.1

- **Sectie DWG-klassen.** De sectie met klassen van een DWG-bestand werd als het verkeerde type gelezen. Dit is opgelost in TakeoffCraft en in vier andere apps.
- **Studio kan de taal wijzigen terwijl het draait.** Voorheen was Studio en zijn verpakte edities alleen in het Engels. Dit is niet op elk platform getest in de desktopversie; laat ons weten als de taal niet verandert.

## Nog niet in deze versie

- **Niet code-ondertekend.** Windows kan waarschuwen, en op een Mac klikt u met de rechtermuisknop en kiest u de eerste keer {{ui:Open}}. De winkelversies (Microsoft Store, Google Play, App Store) zijn in de wacht gezet, en de iPad- en iPhone-versie is niet opnieuw gebouwd voor 0.8.1.
- **Studio-updates.** Het Windows-installatieprogramma en de Linux-pakketten controleren één keer per dag en vragen eerst. Het draagbare zip-bestand geeft alleen een melding, en macOS en de APK werken zichzelf niet bij. De macOS .dmg van 0.8 volgt de uitgave.
- **AI koppelen.** Eén-klik koppelen binnen Studio, de gehoste connector voor AI in de browser, uw eigen API-sleutel binnen Studio en een gepubliceerd MCP-pakket worden in deze versie niet beloofd.
- **Alles tellen.** Het vereist symbolen die op dezelfde manier zijn getekend als in het legenda, en een symbool met een muur of lange lijn erdoor kan worden gemist. Gespiegelde symbolen worden niet gevonden, en een blad zonder schaal dat op een ander formaat is getekend, wordt doorzocht op de grootte van het legenda. Controleer de vondsten op het eerste blad voordat u de rest vertrouwt.
- **Leveranciersvoorraad.** Voorraadcijfers zijn alleen zo actueel als het bestand dat u toevoegt. De controle vraagt een leverancier nooit iets.
- **Talen.** De app-balk van Tamil loopt over.

Al het overige staat in [Nog niet beschikbaar](topic:not-built-yet). Voor de vorige uitgave, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
