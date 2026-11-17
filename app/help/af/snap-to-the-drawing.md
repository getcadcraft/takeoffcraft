---
title: Vasvang aan die tekening se lyne
summary: Punte spring op die PDF se eie lynwerk terwyl jy meet of kalibreer: eindpunte, middelpunte, kruisings of enige plek op 'n lyn, met 'n merker wat wys watter een.
keywords: vasvang, osnap, voorwerpvasvang, eindpunt, middelpunt, snypunt, naaste, vektor, lynwerk, lyne, presies, eksak, f3, magneet, hoek
from: 41d29e9b
---

Die meeste planstelle is vektor-PDF's: hul mure en rande is werklike lyne, nie pixels nie. Terwyl jy meet, vasvang TakeoffCraft jou kliks na daardie lyne, sodat 'n lopie presies by 'n muur se hoek begin en 'n kalibrasie die maat lees wat die tekenaar geteken het, nie die pixel wat jy getref het nie.

Vasvang is aan wanneer jy begin. Skakel dit af en aan met {{ui:Vasvang}} in die statusbalk of {{key:F3}}; die instelling word in hierdie blaaier bewaar (dit is ook onder [Instellings](topic:settings)).

## Waarop dit vasvang

Wanneer die wyser binne ongeveer 10 skermpixels van 'n lyn kom, wys 'n merker waar die klik sal land, met sy naam:

| Merker | Naam | Waar |
|---|---|---|
| Vierkant | **Eindpunt** | Die einde van 'n lyn, of 'n hoek waar lyne ontmoet. Die twee eindes van 'n kromme tel; die punte langs dit nie. |
| Driehoek | **Middelpunt** | Die middel van 'n reguit lyn. |
| Kruis | **Snypunt** | Waar twee lyne kruis, of waar een op 'n ander eindig. |
| Sandloper | **Op die lyn** | Die naaste punt op 'n lyn, wanneer geen eindpunt, middelpunt of kruising naby is nie. |

Die naaste eindpunt, middelpunt of kruising wen. Eers wanneer geen naby is nie, val die punt op die lyn self. Zoem in om te kies tussen punte wat naby mekaar lê: die 10 pixels is skermpixels, so dit dek minder van die blad by 'n hoër zoem.

## Waar dit werk

Vasvang werk in {{ui:Lineêr}}, {{ui:Oppervlakte}}, {{ui:Sirkel}}, {{ui:Uitsnyding}}, {{ui:Kalibreer}} en {{ui:Kontroleer}}, en wanneer jy 'n gekose merker se hoek sleep. Dit plaas ook boogpunte. {{ui:Tel}}, {{ui:Outo-tel}} en plak word nie vasgevang nie.

'n Vasgevangde punt wen bo die 45°-vasvang van {{key:Shift}}: om onder 45° weg van die lyne te teken, skakel eers Vasvang af met {{key:F3}}.

:::tip
Kalibreer met Vasvang aan. Klik naby die twee eindes van 'n maatlyn of 'n muur wat jy ken: albei punte land presies op die tekening, en die skaal kom eksak uit (die statusbalk noem dan die voorinstelling waarmee dit ooreenstem).
:::

## Blaaie waarop dit nie kan vasvang nie

- **Geskandeerde blaaie** is prente sonder lyne om aan vas te vang. Die statusbalk sê "Hierdie blad het geen lyne om aan vas te vang nie (’n geskandeerde blad is ’n prent)." en punte gaan waar jy klik.
- **Baie groot tekeninge**: vasvang lees tot 400,000 lynsegmente per blad. By 'n blad met meer, sê dit so en vang slegs na die eerste een vas.
- **Teks** word nie vasgevang nie, tensy die PDF sy letters as lyne teken (sommige plotters doen dit).

Die blad se lyne word die eerste keer gelees wanneer jy dit oopmaak, op die agtergrond; 'n groot blad kan 'n sekonde neem voordat die merkers verskyn.
