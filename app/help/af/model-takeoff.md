---
title: Neem hoeveelhede van 'n gebougemodel af
summary: Maak die argitek se IFC-model oop, sien dit in 3D, kies mure, vloere, deure en die res volgens tipe, materiaal, laag of grootte, en bring hul tellings, lengtes, oppervlaktes en volumes in die hoeveelheidsopname. 'n Nuwer afskrif van die model werk dieselfde hoeveelhede op.
keywords: model, modelhoeveelheidsopname, 3D-aansig, klik op 'n onderdeel, vind die ry, materiaal, laag, muurlae, gipskarton, isolasie, deurgroottes, venstergroottes, openingstabel, csv, 3d, bim, ifc, rvt, gebougemodel, hoeveelhede, mure, vloere, deure, vensters, kolomme, vertrekke, volgens tipe, volgens vlak, opdateer, nuwer model, ontwerpontwikkeling
from: 8c4c12c9
---

Jy hoef nie op die volgende tekenstel te wag nie. Wanneer die argitek die gebougemodel stuur, maak dit hier oop en neem die hoeveelhede direk daaruit. Die model word op jou rekenaar gelees; niks word iewers gestuur nie.

## Stappe

1. Kies {{ui:Model}} op die werkbalk en kies die model se `.ifc`-lêer, of maak dit oop met {{ui:Maak planne oop}} soos enige ander lêer.
2. {{ui:Modelhoeveelheidsopname}} maak oop met een ry per kategorie en tipe: mure volgens muurtipe, vloere volgens vloertipe, deure volgens deurtipe, en so meer. Elke ry wys sy telling en waarin daardie kategorie gemeet word.
3. Stel {{ui:Groepeer volgens}} op {{ui:Kategorie}} vir 'n vinnige totaal, of op {{ui:Kategorie, tipe en vlak}} om elke tipe volgens verdieping te verdeel.
4. Ontmerk die rye wat jy nie wil hê nie. {{ui:Soek}} vernou die lys. Om 'n ry te ontmerk, verberg ook sy onderdele in die 3D-prent.
5. Gee die model 'n {{ui:Modelnaam}} wat jy die hele werk sal hou, byvoorbeeld die projek se naam.
6. Kies {{ui:Voeg by die hoeveelheidsopname}}. Elke hoeveelheid word 'n getipte hoeveelheid in die itemlys. Noem dit, prys dit en heg samestellings soos by enige ander item.

## Sien die model in 3D

{{ui:Wys die model in 3D}} teken die model bo die tabel, een kleur vir elke ry (die kleurblokkie langs die ry se naam). Sleep om dit te draai, hou {{key:Shift}} vas en sleep om dit te skuif, gebruik die wiel om te zoem, en kies {{ui:Pas aan}} of {{ui:Stel terug}} om terug te kom.

- **Klik op 'n onderdeel** in die prent en sy ry word in die tabel gekies, met al die onderdele van daardie ry verlig en die res bleek. Klik weer op dieselfde onderdeel en, as dit in verskeie rye sit ('n muur in sy lae), word die volgende ry gekies.
- **Klik op 'n ry** in die tabel om sy onderdele te verlig. Klik weer, of klik op leë ruimte in die prent, om dit te wis.
- Kamers word nie geteken nie, omdat 'n kamer se volume die gebou sou verberg.
- 'n Baie groot model hou vir sommige onderdele net 'n boks sodat dit in die geheue pas; die paneel sê hoeveel. Die getalle verander nie.

As hierdie rekenaar nie 3D kan teken nie, werk die tabel soos voorheen.

## Groepeer volgens materiaal, laag of grootte

{{ui:Groepeer volgens}} het drie verdere keuses:

- {{ui:Kategorie en materiaal}}: 'n muur, vloer of dak wat uit lae gebou is, gee elke laag se materiaal sy eie ry, sodat gipskarton, stutte en isolasie apart geprys kan word. 'n Deel van die gebou met een materiaal kry daardie materiaal se ry, en een sonder enige kry 'n ry genaamd "No material named".
- {{ui:Kategorie en laag}}: dieselfde, met die laag se dikte in die ry ("Isolasie, 100 mm").
- {{ui:Kategorie, tipe en deur- of vensztergrootte}}: deure en vensters word volgens hul breedte en hoogte verdeel (byvoorbeeld 3'-0" × 6'-8" of 914 × 2,032 mm).

Vir 'n laag is die oppervlakte die muur se eie vlak (of die vloer- of dakplan- of oppervlakte) en die volume is daardie oppervlakte maal die laag se dikte. Die ry se notas sê hoeveel getalle uit 'n laag gekom het. Die lae van een muur tel op tot die volume wat die model vir hom verklaar.

## Stoor die rye of die openings as CSV

{{ui:Stoor rye as CSV}} stoor die rye wat jy gemerk het, met die eenhede in elke kopskrif, vir 'n sigblad. {{ui:Stoor openingstabel as CSV}} (slegs wanneer die model deure of vensters het) stoor elke deur en venster volgens tipe, vlak en grootte met sy telling.

## Wat gemeet word

| Kategorie | Hoeveelhede |
|---|---|
| Mure | telling, lengte, muuroppervlakte (een vlak, openings uitgehaal), volume |
| Vloere, plate, plafonne en ander bedekkings | telling, planoppervlakte, volume |
| Dakke | telling, planoppervlakte, dakoppervlakte, volume |
| Fondamente | telling, planoppervlakte, volume |
| Kolomme, balke en lede | telling, lengte langs die lid, volume |
| Leuninge, pype, lugkanale en kabelloop | telling, lengte |
| Trappe | telling, volume |
| Kamers | telling, vloeroppervlakte, volume |
| Deure, vensters en alles anders | telling |

Waar die model se skrywer 'n hoeveelheid in die lêer verklaar het, word daardie getal gebruik. Andersins word die getal uit die element se vorm gemeet. Elke hoeveelheid behou 'n notas wat sê watter, en hoeveel elemente 'n getal gegee het.

:::note
'n Muur se lengte wat uit sy vorm gemeet word, loop van end tot end, so twee mure wat op 'n hoek oorvleuel, tel albei die hoek in. 'n Volume benodig 'n geslote vorm: 'n element waarvan die vorm nie gesluit is nie, word getel en gee geen volume nie. 'n Geboë of hoekige muurelement word gemeet as die helfte van al sy regop vlakke, en sy notas sê so.
:::

## Wanneer 'n nuwer model aankom

Maak die nuwer lêer oop en tik dieselfde {{ui:Modelnaam}}. Voordat jy iets byvoeg, sê die paneel hoeveel hoeveelhede nuut is, hoeveel verander het en van wat na wat, en watter hoeveelhede uit die vorige afskrif nie meer in die model is nie. Kies {{ui:Voeg by die hoeveelheidsopname}}: die veranderde hoeveelhede kry hul nuwe getalle, en jou name, tariewe, afval en samestellings bly. Hoeveelhede wat uit die model verdwyn het, behou hul ou getalle; verwyder hulle self as die ontwerp hulle laat val het.

Tipe- en vlaknamme is hoe 'n hoeveelheid herken word. As die argitek 'n muurtipe hernoem, kom dit as 'n nuwe hoeveelheid aan en die ou een word as weg gelys.

## Lêers wat dit lees

IFC-lêers (IFC2x3, IFC4 en IFC4.3). 'n IFC-lêer met paaie, spoorlyne of brue bring steeds sy infrastruktuurhoeveelhede direk in, soos voorheen.

TakeoffCraft lees nie `.rvt`-lêers in hierdie vrystelling nie. As die argitek in Revit werk, vra vir 'n IFC-uitvoer van die model (File, Export, IFC) en open dit.

Een model kan tot 500 hoeveelhede op een slag invoer. As daar meer is, ontmerk rye of groepeer volgens kategorie.
