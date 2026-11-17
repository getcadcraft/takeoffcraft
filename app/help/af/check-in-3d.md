---
title: Kontroleer die hoeveelheidsopname in 3D
summary: Sien die oop blad se mure, plate en tellings wat op die tekening staan, wentel daarom, en klik op een om sy merk te kies.
keywords: png, beeld, prent, skermkiekie, stapel, verdiepings, vlakke, aansig, glb, gltf, uitvoer 3d, muurdikte, basishoogte, opening, deurkop, 3d, drie d, kontroleer, aansig, mure, muurhoogte, blad, diepte, volume, wentel, model, kies, isometries, perspektief
from: fb16b4f7
---

Die 3D-aansig is 'n kontrole, nie 'n tweede tekening nie: dit staan die hoeveelheidsopname van die blad op die skerm op bo-op die blad self, so 'n ontbrekende muur, 'n dubbele blad of 'n verdwaalde telling wys met een kyk.

Voor jy begin: die blad moet 'n skaal hê ([Stel die skaal](topic:set-the-scale)). Hoogtes en dieptes benodig werklike voet, so op 'n blad sonder skaal sê {{ui:3D}} dit en bly op die plat blad.

## Maak die 3D-aansig oop

1. Wys die blad wat jy wil kontroleer.
2. Kies {{ui:3D}} op die balk wat die blad se naam en skaal wys, of druk {{key:3}}.
   Die eerste keer neem die 3D-aansig 'n oomblik om te laai. Die blad word op die grond geteken, en die hoeveelheidsopname staan daarop in elke item se kleur.
3. Om terug te gaan, kies {{ui:3D}} weer, {{ui:Terug na die blad}}, of druk {{key:3}}. Om 'n tekenhulpmiddel te kies (Lineêr, Oppervlakte, Telling en so meer) gaan ook terug, aangesien merke op die plat blad geteken word.

Dit wys die blad op die skerm; verander blaaie in die bladlys, of met {{key:PageDown}} en {{key:PageUp}}, en die 3D-aansig volg. Om verskeie verdiepings op 'n slag te sien, stapel hulle (hieronder).

## Wat jy sien

| Merk | In 3D |
|---|---|
| Lineêre loop, item met 'n hoogte | 'n Muur van daardie hoogte langs die loop. Geboë lope volg die kromming. |
| Lineêre loop, item sonder hoogte | 'n Lyn op die blad. Gee die item 'n hoogte onder **Item** om dit op te staan. |
| Oppervlakte, item met 'n diepte | 'n Blad van daardie diepte, met die uitsnydings oop. |
| Oppervlakte, item sonder diepte | 'n Dun 2"-plaat, sodat dit steeds wys. |
| Telling | 'n Klein paal op elke getelde punt. |

Die hoogte is 'n lineêre item se {{ui:Hoogte}}-veld en die diepte 'n oppervlakte-item se {{ui:Diepte}}-veld, onder **Item** (sien [Skep hoeveelheidsopname-items](topic:create-items)). Verander dit, en die 3D-aansig werk dadelik op. Die nota onder die bladnaam sê wat die blad hou, byvoorbeeld "Hierdie blad in 3D: 2 mure, 1 blad, 3 tellings", en hoeveel lope of oppervlaktes geen hoogte of diepte het nie. Klikke gaan deur daarheen na die aansig.

Die getalle verander nie in 3D nie: 'n muur se oppervlakte is sy presiese lengte maal sy hoogte, en 'n blad se volume is sy netto oppervlakte (buitelyn minus uitsnydings, kurwes presies) maal sy diepte. Kurwes word net op die skerm as kort reguit stukkies geteken.

## Kyk rond

| Handeling | Wat dit doen |
|---|---|
| Sleep, of sleep met die middelknoppie | Wentel om die hoeveelheidsopname. |
| {{key:Shift}} + sleep, of sleep met die regterknoppie | Pan. |
| Muiswiel | Zoem in en uit by die wyser. |
| Tweevinger-swiep op 'n raakpaneel | Wentel ({{key:Shift}} pan). 'n Knyp zoem. |
| {{ui:Iso}}, {{ui:Bo}}, {{ui:Voor}}, {{ui:Agter}}, {{ui:Links}}, {{ui:Regs}}, {{ui:Onder}} | Standaardaansigte, geraam op die hoeveelheidsopname. Die 3D-aansig open in {{ui:Iso}}. |
| {{ui:Perspektief}} | Perspektief aan of af (parallel wanneer af). |
| {{ui:Zoem na omvang}} of {{key:F}} | Die hele blad. |
| {{ui:Blad}} | Wys of verberg die tekening op die grond. |
| Die aansigkubus, regs bo | Klik op 'n vlak, rand of hoek om van daar te kyk; sleep dit om te wentel; sleep sy kompasring om te draai; die huisknoppie gaan terug na {{ui:Iso}}. |

Die hoek wys 'n aansigkubus, 'n klein X-, Y-, Z-asikoon, of niks: kies in {{ui:Instellings}}, op die TakeoffCraft-oortjie, onder **Hoekaanwyser** ([TakeoffCraft-instellings](topic:settings)). Die plat blad het geen hoekaanwyser nie.

:::touch
Een vinger wentel; twee vingers knyp om te zoem en beweeg om te pan. 'n Tik kies.
:::

## Mure met 'n dikte, 'n basis en openings

'n Lineêre item met 'n hoogte staan as 'n dun strook. Om dit as 'n werklike muur te sien, gee die item sy vorm onder **In 3D** in sy instellings:

- **Muurdikte** (8", 0.2 m): die muur word 'n soliede liggaam, gesentreer op die lyn wat jy geteken het, met gemiterde hoeke.
- **Basishoogte**: die muur begin so ver bo die vloer ('n sagteplafon, 'n boonste kabinetloop). Oppervlakte-items het dit ook: 'n plafon op 9'-0".
- **Openingkop**: 'n afgetrekte segment ('n deur, [Trek 'n deel van 'n loop af](topic:measure-linear#deduct-a-part-of-a-run)) hou die muur bo daardie hoogte, sodat 'n deur as 'n deur wys. Sonder dit laat 'n afgetrekte segment 'n gaping tot bo.

Hierdie vorm net die 3D-aansig: die hoeveelhede (lengte, muuroppervlakte, koste) bly soos dit was.

## Stapel die verdiepings

1. Maak die PDF's van elke verdieping oop.
2. In die 3D-aansig, kies {{ui:Vlakke…}} en tik elke verdieping se hoogte, soos `0` vir die grondvloer en `12'` vir die volgende. Leeg laat 'n blad uit.
3. Kies {{ui:Stapel}}. Elke blad met 'n vlak wys sy hoeveelheidsopname op sy hoogte; die blad op die skerm lê onder sy eie verdieping, die ander is omlyn. Die nota sê hoeveel verdiepings gestapel is.

Blaaie lyn op volgens hul plek op die bladsy, so dit werk vir vloerplanne wat eenders geplot is (dieselfde bladgrootte en -posisie). 'n Blad met 'n vlak maar sonder skaal word uitgelaat, en die nota sê so. Kies {{ui:Stapel}} weer vir een blad op 'n slag. Die vlakke word saam met die hoeveelheidsopname gestoor.

## Stoor die 3D-aansig as 'n prent

Kies {{ui:PNG}} op die 3D-balk vir 'n prent van die aansig soos dit op die skerm is (`… 3D.png`); {{key:Shift}} + klik op {{ui:PNG}} maak dit twee keer so groot (`… 3D@2x.png`), vir druk.

## Stoor die 3D-aansig as 'n model

Kies {{ui:GLB}} op die 3D-balk. Jy kry 'n `.glb`-lêer (glTF, binêr) van wat die aansig wys — die vloer op die skerm, of elke gestapelde verdieping — wat ander 3D-programme oopmaak: een voorwerp per merk, genoem na sy item, in die item se kleur, in meter met Y op. Die blad self en die omlynings is nie daarin nie.

## Kies 'n merk uit 3D

Klik op 'n muur, blad, plaat of paal. Sy merk word die gekose merk, presies asof jy dit op die blad geklik het: dit wys onder **Gekose merk**, sy item word die huidige een, en die statusbalk gee sy lengte en hoogte, of sy oppervlakte, diepte en kubieke yards. {{key:Shift}} + klik voeg merke by die seleksie of haal hulle uit. {{key:Delete}} skrap die gekose merke en {{key:Mod+Z}} bring hulle terug; {{key:Esc}} kies niks. Terug op die blad bly dieselfde merke gekies.

:::tip
Die tekening volg die tema: in Model word die blad op die grond donker soos die plat aansig.
:::
