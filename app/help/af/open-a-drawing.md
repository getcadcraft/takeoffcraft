---
title: Maak 'n DWG- of DXF-tekening oop
summary: Maak 'n tekeninglêer oop as blaaie (modelruimte en elke uitleg), begin met die skaal wat die tekening gee, wys of verberg sy lae, en bring gekoppelde tekeninge in.
keywords: dwg, dxf, cad, tekening, tekening oopmaak, uitlegte, modelruimte, papierruimte, blaaie, eenhede, insunits, aansigskaal, xref, gekoppelde tekening, lae, bevrore, geen pdf, plot, sonder plot
from: d8c3f504
---

TakeoffCraft maak 'n DWG- of DXF-tekening oop soos dit 'n PDF oopmaak: jy hoef dit nie eers na PDF te plot nie. Tel uit die tekening self is presies, omdat die tekening weet wat elke voorwerp is. Sien [Tel uit 'n tekening](topic:count-from-a-drawing).

## Maak die tekening oop

1. Kies {{ui:Maak planne oop}} in die {{ui:Lêer}}-groep, of druk {{key:Mod+O}}.
2. Kies die DWG- of DXF-lêer. Jy kan verskeie kies, en PDF's saam met hulle.
3. Kies Maak oop.

Jy kan ook tekeninglêers op TakeoffCraft laat val, soos PDF's. Niks word opgelaai nie: die blaaier lees die lêer op jou rekenaar.

TakeoffCraft lees DWG van AutoCAD 2000 tot 2018 en ASCII DXF van R12 tot 2018. Dit weier 'n binêre DXF (stoor dit as ASCII, of as 'n DWG) en 'n lêer wat geen van albei is nie, en sê waarom. 'n Beskadigde lêer maak oop met wat gelees kon word, en 'n boodskap sê so; die tellings daarvan is dalk onvolledig.

## Blaaie

- **Model** is die tekening se modelruimte.
- **Elke uitleg** (papierruimte-oortjie) is 'n blad, genoem volgens sy oortjie, in oortjie-volgorde. 'n Uitleg wys die model deur sy aansigvensters, soos dit plot.

Zoem, pan, vasvang aan die tekening se eie lyne, merke, notas, {{ui:Kalibreer}} en die res werk soos op 'n PDF. 'n Tekening se blaaie word in die hoeveelheidsopname gestoor volgens die lêer se naam en 'n vingerafdruk van sy inhoud, soos 'n PDF: maak dieselfde lêer weer oop en die merke is op sy blaaie.

## Die skaal

'n Blad begin met die skaal wat die tekening gee:

- **'n Uitleg** neem die skaal van sy grootste aansigvenster. 'n Skaal soos 1/2" = 1'-0" word genoem as die voorinstelling wat dit is; enige ander word gewys as "Van die tekening se aansigvenster: 1" = 2.5'". As 'n uitleg aansigvensters op ander skale het, bepaal die grootste die blad se skaal: kontroleer die ander met {{ui:Kontroleer}}.
- **Model** neem die tekening se eenhede (duim, millimeter, voet…) as sy skaal, "Tekeningeenhede (duim)".
- **'n Tekening sonder eenhede** (die tekening het nooit gesê of 'n eenheid 'n duim of 'n millimeter is nie) het geen skaal nie: die blad sê "Geen skaal", en meting daarop word geweier, soos op 'n PDF sonder skaal. Tel het geen skaal nodig nie. Gee dit een met {{ui:Kalibreer}}.

{{ui:Kalibreer}}, {{ui:Kontroleer}} en die {{ui:Voorinstelling}}-lys verander 'n skaal op enige tyd en wen van die tekening s'n. Die voorinstellinglys is af op Model, wat geen papiergrootte het nie.

## Lae

{{ui:Lae}} op die bladbalk lys die tekening se lae met hoeveel voorwerpe elk op hierdie blad het. Lae wat die lêer afgeskakel of bevries het, begin verborge. Ontkies 'n laag om dit te verberg, of merk 'n verborge een om dit te wys: die blad teken weer, en wat verborge is, word uit tellings en uit die voorwerpe wat aan {{ui:Meet tekening}} aangebied word, weggelaat, tensy jy ook verborge lae wil tel. {{ui:Wys alles}} wys elke laag; {{ui:Terug na die lêer se lae}} keer jou veranderinge om. Laagkeuses behoort aan hierdie sessie, nie aan die hoeveelheidsopname-lêer nie.

## Gekoppelde tekeninge (xrefs)

'n Tekening wat ander tekeninge skakel, wys hulle waar hulle ingevoeg is. TakeoffCraft vind 'n gekoppelde tekening onder die **oop lêers**, volgens sy lêernaam: maak die gasheertekening en sy gekoppelde tekening saam oop (of een ná die ander). Tot dan sê die statusbalk hoeveel gekoppelde tekeninge nie gevind is nie, wat hulle teken ontbreek, en tellings sê so.

## Beperkings

- Voorwerpe wat TakeoffCraft nie kan lees of plaas nie (proxy-voorwerpe, onbekende klasse) word volgens soort in die telvenster gelys; hulle word nooit sonder 'n woord laat val nie.
- Baie groot tekeninge word gedeeltelik geteken, en tellings hou by 'n limiet op, wat so sê. Maak eerder 'n PDF-plot van so 'n tekening oop.
- 'n Tekening word in swart en in sy eie kleure geteken, donkerder gemaak vir wit papier. Plotstyltabelle en pen-toekennings word nie toegepas nie.
