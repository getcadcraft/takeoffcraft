---
title: Een opmeting starten en een tekenset openen
summary: Open een of meer pdf's als tekenset, vind uw weg door de bladen en wissel ertussen.
keywords: openen, tekenset, meerdere pdf's, meerdere bestanden, tekeningen, bladen, paginalabels, bladlijst, navigeren, slepen, overdracht, openen in een andere app, markup
from: ed434468
---

Een tekenset bestaat vaak uit meerdere pdf's: architectuur, constructie, werktuigbouwkunde. TakeoffCraft opent ze naast elkaar als één lijst van bladen, en één opmeting kan ze alle omvatten.

## De pdf's openen

1. Kies {{ui:Tekeningen openen}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+O}}. (De andere menustijlen noemen het {{ui:Pdf's openen…}}.)
2. Selecteer in het bestandsvenster elke pdf van de set. Houd {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} ingedrukt om er meerdere te kiezen, of {{key:Shift}} om een reeks te kiezen.
3. Kies Openen.
   Een bericht "(naam) openen…" verschijnt terwijl elk bestand wordt gelezen. Daarna verschijnt elke pagina onder {{ui:Bladen}}, en de eerste pagina van de eerste nieuwe pdf opent.

U kunt de pdf's ook slepen vanuit {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheer}} en overal op TakeoffCraft neerzetten. Een kader "Zet pdf's, DWG- of DXF-tekeningen of een .takeoff.json neer" verschijnt terwijl u sleept.

Om later meer pdf's toe te voegen, doet u hetzelfde opnieuw. Pdf's die al open zijn, worden overgeslagen.

Het startscherm toont ook de pdf's en opmetingen die u onlangs opende, in browsers die een pagina een bestand weer laten openen (Chrome en Edge). Klik erop om het te openen; de browser vraagt misschien eerst om toestemming. Zie [Uw bestanden](common:your-files).

:::note
Er wordt niets geüpload. De browser leest de pdf's op uw computer, en ze verdwijnen uit TakeoffCraft zodra u het tabblad sluit of {{ui:Nieuw}} kiest.
:::

## Tekeningen naast pdf's

{{ui:Tekeningen openen}} neemt ook DWG- en DXF-tekeningen, alleen of samen met pdf's: de modelruimte en indelingen van elke tekening worden bladen in dezelfde lijst. Zie [Een DWG- of DXF-tekening openen](topic:open-a-drawing), en daarna [Tellen vanuit een tekening](topic:count-from-a-drawing).

## Een pdf overgedragen vanuit een andere app

Een andere app uit de lineup kan de pdf overdragen die hij open heeft: hij opent TakeoffCraft in een nieuw tabblad en de pdf opent daar alsof u hem had neergezet. De statusbalk zegt "(naam) geopend, overgedragen vanuit (app). Het oorspronkelijke bestand is ongewijzigd." Er wordt niets geüpload; het bestand gaat via de eigen opslag van deze browser en is eruit verdwenen zodra het opent.

Als de statusbalk zegt dat de pdf "niet is aangekomen", heeft het tabblad te lang gewacht, of was de pdf al in een ander tabblad geopend: open hem dan met {{ui:Tekeningen openen}}.

Andersom, wanneer MarkupCraft draait waar u bent en een bestand kan overnemen, heeft de bladbalk onder de tekening een knop {{ui:MarkupCraft}}: die opent de pdf van het blad op het scherm in MarkupCraft, in een nieuw tabblad, om na te kijken en te markeren.

## Een blad vinden

- Scroll door de lijst {{ui:Bladen}} links en klik op een blad.
- Typ in **Bladen zoeken** bovenaan de lijst om te filteren op bladnummer, bestandsnaam of paginalabel. Het aantal naast {{ui:Bladen}} toont "3 van 40" zolang een filter aan staat.
- Druk op {{key:PageDown}} voor het volgende blad en {{key:PageUp}} voor het vorige. Ze volgen de lijst zoals die gefilterd is.

:::mac
Op een Mac-toetsenbord zonder Page Up- en Page Down-toetsen drukt u op fn met de pijl omhoog of omlaag.
:::

## Hoe bladen worden benoemd

- Een pagina waarvan de pdf een label geeft, zoals `A-101`, krijgt dat label als naam.
- Een pagina zonder label (of met een label dat alleen het paginanummer is) heet "(bestandsnaam), pagina (n)".
- Als meerdere pdf's open zijn, krijgen gelabelde bladen ook de bestandsnaam: "A-101 — Architectural".

Bladnamen kunnen nog niet met de hand worden ingevoerd.

## Rondkijken op een blad

- Draai het muiswiel om te zoomen op de aanwijzer.
- Sleep met de linker- of middelste knop om te verschuiven. Met {{ui:Automatisch tellen}}, of wanneer u begint op de hoek van een markering, houdt u {{key:Space}} ingedrukt terwijl u sleept, of sleept u met de middelste knop.
- Druk op {{key:F}} of kies {{ui:Pagina passend}} om het hele blad te zien; {{key:W}} of {{ui:Breedte passend}} past de breedte aan.
- Druk op {{key:Plus}} of {{key:=}} om in te zoomen en op {{key:Minus}} om uit te zoomen, rond het midden van het beeld.

Elk blad onthoudt zijn eigen zoom en positie zolang het open blijft.

## Volgende

Voordat u een blad kunt meten, heeft het een schaal nodig: [De schaal instellen](topic:set-the-scale).
