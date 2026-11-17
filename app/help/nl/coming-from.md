---
title: Overstappen van andere takeoff-software
summary: Hoe de gewoonten van speciale opmeetprogramma's en PDF-markuptools overeenkomen met TakeoffCraft, en de verschillen waar mensen over struikelen.
keywords: overstappen, migreren, voorwaarden, onderdelen, meetgereedschappen, lijst markups, hoeveelheidskoppeling, opmeetgewoonten, verschillen, vergelijken
from: 12004ce5
---

Als u al opmeetwerk hebt gedaan in PlanSwift of met de meetgereedschappen in Bluebeam Revu, zal het meeste van TakeoffCraft u bekend voorkomen: een tekenset, een schaal per blad, dingen die u meet en een totaal met prijzen. De manier waarop de onderdelen samenhangen verschilt op een paar punten, en die punten staan hieronder.

Als u PlanSwift of On-Screen Takeoff kent, kies dan de menustijl {{ui:Opmeetbureau}} onder {{ui:Instellingen}} › {{ui:TakeoffCraft}} › {{ui:Menu's, toetsen en muis}}: een menubalk met Bestand, Bewerken, Beeld, Schaal, Takeoff, Posten, Markup en Exporteren, boven een rij met de opmeetgereedschappen, met de schaalvoorinstellingen op de bladbalk. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).

## Gewoonten in kaart gebracht

| Dat kent u van | In TakeoffCraft |
|---|---|
| Een opdracht of project openen dat de tekeningen opslaat (PlanSwift) | Open de PDF's en het `.takeoff.json`-project naast elkaar. Het project slaat alleen de opmeting op; de PDF's blijven uw eigen bestanden. |
| Een lijst met markups met notities, wolken en markeringen (Bluebeam) | {{ui:Markup}} op de bladbalk: notities, wolken en markeringen met een status (Open, Beantwoord, Gesloten), vermeld onder **Markups** en getekend in de gemarkeerde PDF. Zie [Notities, wolken en markeringen](topic:markups). |
| Metingen opgeslagen als markups in de PDF (Bluebeam) | De opmeting staat in het bestand `.takeoff.json`. {{ui:Gemarkeerde PDF}} schrijft een kopie met de opmeting erin getekend, om te delen; {{ui:Pdf met de opmeting erin}} schrijft een kopie die de opmeting bevat, om opnieuw in TakeoffCraft te openen. |
| Opmeetposten (PlanSwift), eigen meetgereedschappen opgeslagen in de Tool Chest (Bluebeam) | **Posten** onder {{ui:Posten}}: naam, type, kleur, eenheid, hoogte of diepte, verlies, tarieven. |
| Onderdelen en samenstellingen met formules (PlanSwift) | De {{ui:Samenstelling}} van de post: componenten met een formule die `L H A N P` gebruikt. |
| De schaal van de pagina instellen, of kalibreren (beide) | Lijst {{ui:Voorinstelling}} of {{ui:Ijken}} in de groep {{ui:Schaal}}, per blad. {{ui:Controleren}} meet een bekende maat. |
| Eén schaal toepassen op een paginabereik | Nog niet: stel elk blad apart in. |
| Viewports met verschillende schalen op één blad (Bluebeam) | Nog niet: één schaal per blad. |
| Polylengte- en oppervlaktegereedschappen (Bluebeam), lineaire en oppervlakteopmeting (PlanSwift) | {{ui:Lineair}} ({{key:L}}) en {{ui:Oppervlakte}} ({{key:A}}). |
| Shift ingedrukt houden voor rechte lijnen | {{key:Shift}} snapt naar stappen van 45°, hetzelfde idee. |
| Snappen naar de lijnen van de tekening | Standaard aan: uiteinden, middelpunten, snijpunten en het dichtstbijzijnde punt op een lijn, met {{key:F3}} om het uit te zetten, zoals in CAD-programma's. |
| Telgereedschap (beide) | {{ui:Tellen}} ({{key:C}}). |
| Visuele zoektocht naar symbolen (Bluebeam) | {{ui:Automatisch tellen}} ({{key:S}}): omkader één symbool, controleer, voeg toe. |
| Uitsparingen of aftrekkingen in oppervlakken | {{ui:Uitsparing}} ({{key:X}}) op een geselecteerd vlak, en ronde uitsparingen. |
| Aftrekkingen op lineaire trajecten | Teken het traject rechtdoor en druk op {{key:E}} ({{ui:Aftrekken}}) voor de opening. Zie [Lineaire trajecten meten](topic:measure-linear). |
| Boogsegmenten in een polylijn | {{ui:Boog}} ({{key:R}}): klik een punt op de kromme, en daarna het eindpunt. |
| De lijst Markups met hoeveelheidskolommen (Bluebeam) | De tabel {{ui:Hoeveelheden}}, {{ui:Per post}} of {{ui:Per blad}}. |
| Ramingsrooster met prijzen (PlanSwift) | Dezelfde tabel: verlies, materiaal en arbeid per eenheid, uitgerekende totalen, {{ui:Totaal van de opdracht}}. |
| Exporteren naar Excel | {{ui:XLSX}} met werkende formules, of {{ui:CSV}}. |
| Escape om een gereedschap te stoppen | {{key:Esc}} annuleert en keert terug naar {{ui:Selecteren}}. |
| Met de rechtermuisknop afronden | Klik met de rechtermuisknop om hier ook een traject af te ronden of een vlak te sluiten. Er is geen rechtermuisknopmenu. |

## Verschillen waar mensen over struikelen

**De opmeting staat niet in uw PDF.** Niets wat u doet, verandert uw PDF's. Sla het bestand `.takeoff.json` op en bewaar het bij de tekeningen. Iemand de gemarkeerde PDF sturen, stuurt hem geen bewerkbare opmeting: stuur het projectbestand en de originele PDF's, of een [PDF met de opmeting erin](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF's worden herkend aan hun inhoud, niet aan hun naam.** Een herziene tekening die over de oude bestandsnaam is opgeslagen, is voor TakeoffCraft een nieuw bestand, zonder schaal en zonder markeringen. Uw oude markeringen blijven bij de oude versie en blijven meetellen. Zie [Een opmeting opslaan en opnieuw openen](topic:save-and-reopen#when-a-pdf-has-changed).

**Markeringen zonder schaal worden weggelaten, niet als nul geteld.** Heeft een blad geen schaal, dan tellen de trajecten en vlakken ervan niet mee, en de tabel zegt "Onvolledig". In veel programma's ziet u gewoon 0. Zie [Schaal instellen](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Er wordt geen paginaformaat geraden.** Voorinstellingen gaan ervan uit dat de PDF op volledig formaat is afgedrukt. Een PDF op halve grootte of "passend op pagina" heeft {{ui:Ijken}} nodig. Gebruik altijd {{ui:Controleren}}.

**Eén post, één hoofdtype, meer als u het vraagt.** Een post is lineair, oppervlakte of telling, en het type wordt vergrendeld zodra er markeringen op staan. Een voorwaarde die zowel een oppervlakte als de omtrek ervan geeft, is een oppervlaktepost: de omtrek is de variabele `P`. Een wand met zowel lengte als oppervlakte is een lineaire post met een hoogte. Voor een post met meerdere voorwaarden, zoals een ruimte met vloer, plint en deuren, vinkt u de andere soorten aan onder {{ui:Ook meten}}: elk krijgt een eigen rij met prijs. Zie [Eén post, meerdere soorten markeringen](topic:create-items#one-item-several-kinds-of-marks).

**Formules werken op totalen.** Samenstellingsformules gebruiken de totalen van de post over alle bladen, niet elk traject apart. `N` (het aantal trajecten of vlakken) is er voor extra's per traject, zoals één extra stijl per wand.

**Omtrek omvat uitsparingen.** De `P` van een vlak telt de randen van de gaten erbij. Zie [Oppervlakten met uitsparingen meten](topic:measure-areas#read-the-area).

**Slepen verschuift.** Slepen met de linkermuisknop op het blad verschuift, in elk gereedschap behalve {{ui:Automatisch tellen}}. U hoeft nooit naar een verschuifgereedschap over te schakelen. Het wiel zoomt; het scrolt niet.

**Een herstelkopie, geen cloud.** TakeoffCraft bewaart een kopie van uw werk in deze browser en biedt die aan na een vastloper ([Als het tabblad of de browser stopt](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), maar de opmeting moet u zelf opslaan: {{key:Mod+S}}. Opslaan in de cloud is nog niet beschikbaar.

**Alles zit in de browser.** Er is niets te installeren, en de tekeningen worden nooit geüpload. Voor een desktopapp komt TakeoffCraft in CadCraft Studio, samen met de andere zeven apps.

## Nog niet beschikbaar

Schaalgebieden per blad zijn nog niet beschikbaar. Zie [Wat nog niet beschikbaar is](topic:not-built-yet) voor de volledige lijst en wat u in plaats daarvan kunt doen.
