---
title: Prijsbibliotheek
summary: Bewaar uw posten, tarieven en assemblages in een bibliotheek, importeer die uit een CSV of een eerdere raming, voeg posten eruit toe aan elke opmeting en werk de prijzen van een opmeting er vanuit bij.
keywords: bibliotheek, vakpakketten, prijslijst, prijsboek, kostendatabase, csv importeren, tarieven, assemblages, hergebruik, sjabloonposten, prijzen bijwerken, opnieuw prijzen
from: 37356c68
---

De **prijsbibliotheek** bewaart posten die u opdracht na opdracht gebruikt: hun type, eenheid, hoogte, verlies, materiaal- en arbeidstarieven, en hun assemblage. Ze wordt in deze browser bewaard, los van een opmeting, zodat elke opmeting die u hier opent haar kan gebruiken.

Open haar met {{ui:Bibliotheek}} bovenaan het paneel {{ui:Posten}}.

## De bibliotheek vullen

- {{ui:CSV importeren…}} leest een spreadsheet die als CSV is opgeslagen (zie de kolommen hieronder). Posten waarvan naam en type al in de bibliotheek staan, worden vervangen; de rest wordt toegevoegd. Regels die het niet kan lezen, worden overgeslagen, en het meldt welke en waarom.
- {{ui:Posten van deze opmeting toevoegen}} kopieert elke post van de geopende opmeting naar de bibliotheek, met hun tarieven en assemblage (niet hun markeringen).
- De raming-CSV die TakeoffCraft exporteert ([De raming exporteren](topic:export-estimate)) wordt zoals die is geïmporteerd: de prijzen van de vorige opdracht zaaien de volgende.

- {{ui:Vakpakketten…}} voegt gratis assemblages voor een vakgebied toe, zoals droogbouw, elektra of beton, zonder prijzen. Zie [Vakpakketten](topic:trade-packs).

{{ui:CSV exporteren}} slaat de bibliotheek op als CSV, om een kopie te bewaren, om haar in een spreadsheet te bewerken of om haar aan een collega te geven. {{ui:Wissen}} leegt haar (twee keer klikken).

:::note
De bibliotheek staat in de opslag van deze browser. Een andere browser, een andere computer of een privévenster heeft een eigen (of geen). Exporteer haar om haar te verplaatsen.
:::

## Gebruik in een opmeting

- Vink posten aan (typ in {{ui:Zoeken in de bibliotheek}} om de lijst te beperken) en kies {{ui:Aan opmeting toevoegen}}. Ze worden met hun assemblages in één stap toegevoegd, die {{key:Mod+Z}} ongedaan maakt. Een naam die al in de opmeting staat, krijgt een nummer, zoals `Tapijt (2)`.
- {{ui:Prijzen bijwerken}} geeft de posten van de opmeting het verlies en de tarieven van de bibliotheek, voor elke post waarvan naam en type overeenkomen met een bibliotheekpost, en hetzelfde voor assemblagecomponenten met dezelfde naam. Hoogten, eenheden en formules blijven zoals ze zijn. Eén {{key:Mod+Z}} zet alle oude prijzen terug.

## De CSV-kolommen

De eerste regel noemt de kolommen, in elke volgorde; andere kolommen worden genegeerd.

| Kolom | Wat erin komt |
|---|---|
| Item (of Name) | De naam van de post. Verplicht. |
| Type | Linear, Area of Count (LF, SF en EA werken ook). Leeg gelaten, bepaalt de eenheid het type. |
| Unit | LF of m; SF, SY of m²; EA. Leeg: de gebruikelijke eenheid van het type. |
| Waste % | `10` of `10%`. |
| Material per unit, Labor per unit | Tarieven zoals `2.10` of `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, of `2.7` voor metrische eenheden. |
| Component, Formula | Een regel met een componentnaam (of het Type `Component`) hoort bij de assemblage van de post erboven. Zijn eenheid, verlies en tarieven zijn eigen; zijn formule gebruikt de letters van de post, zie [Assemblages en formules](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Komma's, puntkomma's of tabs tussen kolommen werken allemaal.
