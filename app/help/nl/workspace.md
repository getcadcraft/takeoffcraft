---
title: Het TakeoffCraft-scherm
summary: Een rondleiding door het venster op naam zoals op het scherm - de werkbalk, de bladenlijst, het blad, het paneel Posten, de tabel Hoeveelheden en de statusbalk.
keywords: scherm, indeling, indelingen, lint, projectbrowser, gereedschapskist, infobox, werkbalk, panelen, bladenlijst, postenpaneel, hoeveelheden, statusbalk, rondleiding, interface
from: ab1115e0
---

TakeoffCraft vult het browservenster onder de CadCraft-appbalk. Van boven naar beneden en van links naar rechts:

| Onderdeel | Waar | Waarvoor |
|---|---|---|
| Appbalk | Helemaal bovenaan | De naam van de app, de versie, {{ui:Over TakeoffCraft}}, {{ui:Help}} ({{key:F1}}), {{ui:Opslaan voor offline gebruik}}, {{ui:Instellingen}} ({{key:Mod+,}}), de knop {{ui:Volledig scherm}} en de themaschakelaar {{ui:Papier}} / {{ui:Model}}. |
| Werkbalk | Onder de appbalk | Elke opdracht, in groepen: {{ui:Bestand}}, {{ui:Exporteren}}, {{ui:Schaal}}, {{ui:Opmeting}}, {{ui:Bewerken}}, {{ui:Weergave}}. |
| Bladen | Links | Elke pagina van elke geopende pdf, met een miniatuur, de schaal en het aantal markeringen. |
| Het blad | Midden | De geopende pagina. Hier meet u. |
| Posten | Rechts | Uw opmetingsposten, de instellingen van de geselecteerde post en de geselecteerde markering. |
| Hoeveelheden | Onderaan | Hoeveelheden en kosten per post of per blad, en het totaal van de opdracht. |
| Statusbalk | Helemaal onderaan | De actuele meting, berichten, de tip over 45° en de zoom. |

## De werkbalk

Houd de aanwijzer boven een knop om te zien wat hij doet en welke toets erbij hoort.

| Groep | Knoppen |
|---|---|
| {{ui:Bestand}} | {{ui:Nieuw}} (lege opmeting), {{ui:Tekeningen openen}} ({{key:Mod+O}}), {{ui:Opmeting openen}} (een project `.takeoff.json`), {{ui:Opmeting opslaan}} ({{key:Mod+S}}) |
| {{ui:Exporteren}} | Eén menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Gemarkeerde pdf}} |
| {{ui:Schaal}} | {{ui:Ijken}} ({{key:K}}), {{ui:Controleren}} ({{key:D}}) en de lijst {{ui:Voorinstelling}} |
| {{ui:Opmeting}} | {{ui:Selecteren}} ({{key:V}}), {{ui:Lineair}} ({{key:L}}), {{ui:Oppervlakte}} ({{key:A}}), {{ui:Cirkel}} ({{key:O}}), {{ui:Boog}} ({{key:R}}, een aan/uit-schakelaar), {{ui:Aftrekken}} ({{key:E}}, een aan/uit-schakelaar), {{ui:Uitsparing}} ({{key:X}}), {{ui:Tellen}} ({{key:C}}), {{ui:Automatisch tellen}} ({{key:S}}) |
| {{ui:Bewerken}} | {{ui:Ongedaan maken}} ({{key:Mod+Z}}), {{ui:Opnieuw}} ({{key:Mod+Y}}), {{ui:Kopiëren}} ({{key:Mod+C}}), {{ui:Plakken}} ({{key:Mod+V}}) en {{ui:Meer}}: {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Op dezelfde plaats plakken}}, {{ui:Dupliceren}}, {{ui:Verwijderen}}, {{ui:Alles selecteren}}, {{ui:Niets selecteren}} |
| {{ui:Weergave}} | {{ui:Pagina passend}} ({{key:F}}), {{ui:Breedte passend}} ({{key:W}}) |

Het gereedschap dat u gebruikt, wordt ingedrukt getoond. De knoppen {{ui:Boog}} en {{ui:Aftrekken}} blijven ingedrukt zolang ze aan staan.

## Bladen (links)

- **Bladen zoeken** filtert de lijst op bladnaam, bestandsnaam of paginalabel.
- Elk blad toont een miniatuur (getekend terwijl u scrolt), zijn naam, en zijn schaal of **Geen schaal**.
- Rechts in elke rij staat hoeveel markeringen het blad heeft. Zolang een post is gemarkeerd, staat er in plaats daarvan hoeveel markeringen van die post op het blad staan.
- Klik op een blad om het te openen. {{key:PageDown}} en {{key:PageUp}} gaan naar het volgende en vorige blad in de lijst.
- Als een opmeting pdf-bestanden beslaat die niet open zijn, noemt een opmerking onder de lijst ze. Zie [Een opmeting opslaan en opnieuw openen](topic:save-and-reopen).

Bladnamen komen uit de pdf: een paginalabel als `A-101` wordt de bladnaam. Een pagina zonder label wordt genoemd naar zijn bestand en paginanummer, zoals "Plans, pagina 3". Als er meerdere pdf-bestanden open zijn, tonen bladen met een label ook de bestandsnaam.

## Het blad (midden)

- De balk onder het blad toont de bladnaam en de schaal, of "Nog geen schaal: kies een voorinstelling of ijk". De knoppen ervan: {{ui:MarkupCraft}} (als die app de pdf kan overnemen; zie [Een opmeting beginnen en een tekenset openen](topic:open-plan-set)), {{ui:Vergelijken}} (een oudere versie van het blad over dit blad: [Een herzien blad vergelijken](topic:compare-revisions)), "(n) te controleren" (gemarkeerde markeringen, als die er zijn) en {{ui:3D}} (de [3D-controleweergave](topic:check-in-3d)).
- Voordat er een pdf is geopend, toont het midden een korte gids in vijf stappen.
- Het wiel zoomt bij de aanwijzer. Sleep om te verschuiven. Zie [Toetsenbord en muis](topic:keyboard).
- Terwijl u {{ui:Automatisch tellen}} gebruikt, verschijnt bovenaan het blad een balk met de bediening ervan.

## Posten (rechts)

Bovenaan de lijst {{ui:Biedgebied}}: het gebouw, de verdieping of de fase waarin nieuwe markeringen komen ([Biedgebieden](topic:bid-areas)).

- {{ui:Nieuwe post}} opent een klein formulier: een naam, een soort ({{ui:Lineair (lengte)}}, {{ui:Oppervlakte}} of {{ui:Tellen}}) en {{ui:Toevoegen}}.
- De lijst toont van elke post de kleur, het soortpictogram, de naam en de hoeveelheid. Klik op een post om ermee te tekenen en zijn markeringen op elk blad te markeren. Klik er nogmaals op om het markeren te stoppen.
- Onder de lijst is **Post: (naam)** de posteditor: naam, soort, kleur, eenheid, hoogte of diepte, verlies, materiaal- en arbeidstarieven, de gemeten waarden en de {{ui:Samenstelling}}. Zie [Opmetingsposten maken](topic:create-items).
- **Geselecteerde markering** verschijnt als u een markering selecteert: bij welke post hij hoort, zijn blad, zijn metingen en knoppen als {{ui:Een uitsparing toevoegen}} en {{ui:Markering verwijderen}}. Met meerdere markeringen geselecteerd wordt het **Geselecteerde markeringen**: hoeveel van elke post, en {{ui:Kopiëren}}, {{ui:Dupliceren}}, {{ui:Knippen}} en {{ui:Markeringen verwijderen}}.
- De posteditor eindigt met {{ui:Post kopiëren}} en {{ui:Post dupliceren}}: een post met zijn samenstelling en kosten, zonder markeringen. Zie [Markeringen kopiëren, plakken en dupliceren](topic:copy-paste).

## Hoeveelheden (onderaan)

- {{ui:Per post}} toont elke post en de componenten van zijn samenstelling met hoeveelheid, verlies, tarieven en uitgebreide kosten. U kunt verlies en tarieven rechtstreeks in de tabel typen.
- {{ui:Per blad}} toont de hoeveelheid van elke post op elk blad.
- Een waarschuwing die begint met **Onvolledig:** verschijnt als er iets buiten de totalen is gelaten.
- Het {{ui:Totaal van de opdracht}} staat rechts in de kop.
- De pijlknop uiterst rechts verbergt of toont de tabel om het blad meer ruimte te geven.

Zie [Hoeveelheden en de raming lezen](topic:read-quantities).

## Statusbalk (onderaan)

Van links naar rechts: de actuele meting terwijl u tekent (lengte, oppervlakte, straal of een controleresultaat), het vak {{ui:Invoer}} terwijl u een lengte typt, berichten van TakeoffCraft, de herinnering "Shift klikt vast op 45°" (of "Klikt vast op 45°; Shift geeft de hoek weer vrij" als dat in de [Instellingen](topic:settings) aan staat), de knop {{ui:Snap}} (vastklikken op de lijnen van de tekening, aan als hij gemarkeerd is; {{key:F3}}) en het zoompercentage.

:::tip
Lees de statusbalk als er iets niet gebeurt. TakeoffCraft legt daar uit waarom een klik is geweigerd, bijvoorbeeld "Dit blad heeft nog geen schaal".
:::

## Andere indelingen

Alles hierboven is de indeling {{ui:CadCraft klassiek}}, het begin. {{ui:Instellingen}} ({{key:Mod+,}}) › {{ui:Algemeen}} › {{ui:Indeling}} biedt er nog twee; dezelfde gereedschappen en toetsen werken in alle drie, en als u weer {{ui:CadCraft klassiek}} kiest, staat elke bediening weer waar hij stond.

| Indeling | In TakeoffCraft |
|---|---|
| {{ui:Lint en projectbrowser}} | Het {{ui:Opmetingslint}} bovenaan ([Menu's, toetsen en muis](topic:menus-keys-and-mouse)), een balk voor het lopende gereedschap, een tabblad voor elk blad dat u opent (het Model en de indelingen van een tekening zijn ook bladen) met de schaalvoorinstellingen en {{ui:Pagina passend}} onder het blad. Het linkerpaneel bevat {{ui:Eigenschappen}} (de geselecteerde post, notitie of markering) boven de {{ui:Opmetingsbrowser}}: {{ui:Bladen}} (klik op een blad om het in een tabblad te openen), {{ui:Condities}} (klik op een conditie om ermee te tekenen) en {{ui:Raming}} (het totaal van elke post en het totaal van de opdracht); de miniaturen zijn het tweede tabblad ervan. |
| {{ui:Gereedschapskist en infobox}} | De werkbalk boven het blad, een infobox met het {{ui:Biedgebied}}, het lopende gereedschap of de selectie en de bladbalk, een kolom met de opmetingsgereedschappen links, een tabblad voor elk blad, en {{ui:Snap}} en de zoom onder het blad. |

Terwijl de [3D-controleweergave](topic:check-in-3d) open is, wijken de bladtabbladen en de balk onder het blad opzij; sluit de 3D-weergave om weer te meten. Op een telefoon draait altijd de telefooninrichting.

## Volledig scherm en thema's

De knop {{ui:Volledig scherm}} in de appbalk, of {{key:Ctrl+Shift+F}} (Control op elk platform, ook op een Mac), loopt door normaal, volledig scherm en volledig scherm met verborgen balken. Zijn de balken verborgen, beweeg dan de aanwijzer naar de bovenrand om ze weer te tonen.

{{ui:Papier}} is het lichte thema en {{ui:Model}} het donkere. In {{ui:Model}} wordt de tekening alleen op het scherm omgekeerd getoond (lichte lijnen op donker); exports worden nooit gewijzigd.
