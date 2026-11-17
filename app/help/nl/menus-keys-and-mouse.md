---
title: Menu's, toetsen en muis
summary: Kies een menustijl die past bij hoe u al werkt, geef elke opdracht uw eigen toets, verplaats opdrachten tussen menu's, en stel in wat het wiel en de muisknoppen doen.
keywords: menustijl, menu's, menubalk, lint, linttabbladen, werkbalk, sneltoetsen, hotkeys, toetsen, aanpassen, opnieuw toewijzen, muis, wiel, omkeren, zoomrichting, middelste knop, rechter knop, verschuiven, exporteren, importeren, wisselen, vertrouwd, opmeetbureau, voorwaarden
from: f01f0d6d
---

De opdrachten van TakeoffCraft zijn hetzelfde, hoe u ze ook bereikt. Een **menustijl** bepaalt alleen waar ze op het scherm staan, hoe ze daar heten en welke toetsen ze uitvoeren. Kies er een in {{ui:Instellingen}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menu's, toetsen en muis}}; de wijziging is meteen actief, en deze browser onthoudt haar.

## De drie stijlen

| Stijl | Wat u krijgt |
|---|---|
| {{ui:TakeoffCraft}} | De eigen werkbalk van TakeoffCraft: Bestand, Exporteren, Schaal, Opmeting, Bewerken en Weergave, met de toetsen van één letter voor hulpmiddelen. Het begin. |
| {{ui:Opmeetbureau}} | Een menubalk ({{ui:Bestand}}, {{ui:Bewerken}}, {{ui:Weergave}}, {{ui:Schaal}}, {{ui:Opmeting}}, {{ui:Posten}}, {{ui:Markup}}, {{ui:Exporteren}}) boven één rij opmeethulpmiddelen, zoals opmeetprogramma's op het scherm die van hun kant indelen. Posten heten op de rij voorwaarden. Dezelfde toetsen, plus {{key:N}} voor een nieuwe post. De schaalvoorinstellingen verhuizen naar de bladbalk, naast de schaal van het blad. |
| {{ui:Opmetingslint}} | Linttabbladen genoemd naar het werk: {{ui:Opmeting}} (meten, vormen, schaal, uit de tekening, voorwaarden), {{ui:Bewerken}}, {{ui:Weergave}}, {{ui:Markup}} en {{ui:Raming}} (de werkmap, gemarkeerde PDF's, de inschrijving), met een menu {{ui:Bestand}} en een snelle rij voor openen, opslaan, ongedaan maken en opnieuw. De hulpmiddelen die u de hele dag gebruikt zijn groot, de naburige klein en gestapeld. Dezelfde toetsen; de schaalvoorinstellingen verhuizen naar de bladbalk. |

Alle drie de stijlen behouden de toetsen van TakeoffCraft: {{key:V}} selecteren, {{key:L}} lineair, {{key:A}} oppervlakte, {{key:O}} cirkel, {{key:B}} ruimte, {{key:P}} pad (kies de lijnen van de PDF), {{key:X}} uitsparing, {{key:C}} tellen, {{key:S}} automatisch tellen, {{key:K}} ijken, {{key:D}} controleren, {{key:R}} boogmodus, {{key:E}} aftrekmodus, {{key:F}} en {{key:W}} om te passen, {{key:3}} de 3D-controleweergave, {{key:F3}} snappen, en {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

De hulpmiddelen van de bladbalk (notities, wolken, markeringen, Vergelijken, 3D) wachten tot een PDF is geopend; wat u daarvoor kiest, zegt de statusregel.

:::tip
Een toets die bij de eigen indeling van TakeoffCraft hoort, maar die uw stijl aan een andere opdracht heeft gegeven, doet niets, en de statusregel zegt waar de opdracht naartoe is gegaan ("In Mijn toetsen staat Tellen op Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} en de pijltjestoetsen behouden altijd hun betekenis. Terwijl u een reeks of omlijning tekent, een automatische telling plakt of beoordeelt, blijven de letters en de cijfers van een getypte lengte bij de tekening.
:::

## Maak het eigen

1. Kies de stijl die het dichtst bij wat u wilt ligt, en klik op {{ui:Aanpassen…}}.
2. Zoek op {{ui:Toetsen en menu's}} een opdracht (het zoekvak helpt). Klik op {{ui:Een toets toevoegen}} en druk de toets in, of twee toetsen na elkaar voor een tweeletterige toets. Klik op een toets om hem te verwijderen.
3. Met de menubalk verplaatst {{ui:Waar het staat}} de opdracht naar een ander menu, of naar {{ui:Alleen toetsen}}.
4. Stel op {{ui:Muis}} het wiel en de knoppen in die het blad verschuiven.
5. Geef het een naam en klik op {{ui:Opslaan}}.

Een ingebouwde stijl opslaan maakt uw eigen kopie ("Mijn opmeetbureau"); de ingebouwde verandert nooit. Een toets die aan twee opdrachten is gegeven, wordt rood getoond en moet worden opgelost voordat u kunt opslaan.

## Muis

- **Muiswiel**: {{ui:Omhoog scrollen zoomt in}} (het begin) of {{ui:Omhoog scrollen zoomt uit}}, en hoe snel. Een knijpbeweging op een trackpad zoomt altijd de richting waarin uw vingers bewegen.
- **Het blad verschuiven met**: de middelste knop, de rechter knop, of beide. Slepen met links op leeg papier en {{key:Space}} met slepen verschuiven altijd; een rechtsklik zonder slepen beëindigt altijd een reeks of omlijning.
- **Slepen in de 3D-weergaven**: {{ui:Elke weergave eigen}} houdt de knoppen van de 3D-controleweergave (links en midden draaien, rechts verschuift). Of stel de middelste en rechter knop in op draaien, verschuiven, zoomen of niets; {{key:Shift}} met de knop wisselt draaien en verschuiven om. De linker knop draait en kiest altijd.

## Neem het mee

{{ui:Exporteren}} slaat de gebruikte stijl op als een klein `.ccinput.json`-bestand; {{ui:Importeren…}} voegt er een toe, van een andere computer of van een collega. Een geïmporteerd bestand kan alleen naar de eigen opdrachten van TakeoffCraft verwijzen: al het andere erin wordt weggelaten en in de statusregel geteld. {{ui:Deze stijl verwijderen}} verwijdert er een van uzelf.

:::note
Deze instellingen blijven in deze browser. {{ui:Deze stijl in elke app gebruiken}} onder de stijlkaarten zorgt dat elke app opent in de bijbehorende stijl (de eigen werkbalk, een menubalk of een lint), met de wijzigingen die u in elke app hebt gemaakt. TakeoffCraft heeft geen stijl met een opdrachtregel: wanneer die voor elke app is gekozen, houdt TakeoffCraft zijn eigen werkbalk.

Het {{ui:Opmetingslint}} is ook het lint van de indeling {{ui:Lint en projectbrowser}} ({{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Indeling}}): zie [Het scherm van TakeoffCraft](topic:workspace).
:::

Gerelateerd: [Toetsenbord en muis](topic:keyboard) · [Instellingen van TakeoffCraft](topic:settings) · [Overstappen van andere opmeetsoftware](topic:coming-from)
