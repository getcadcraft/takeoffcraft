---
title: Biedgebieden
summary: Ken markeringen toe aan een gebouw, verdieping of fase, meet per biedgebied op en lees hoeveelheden en kosten per gebied af.
keywords: meerwerkalternatief, minderwerkalternatief, basisinschrijving, alternatieven, biedgebied, gebied, gebouw, verdieping, niveau, fase, zone, alternatief, uitsplitsing, splitsen, typische verdieping, subtotaal, per gebied
from: 64f3d41c
---

Een biedgebied is een deel van de opdracht dat u apart prijst: een gebouw, een verdieping, een fase, een vleugel. Elke markering kan in één biedgebied staan. De hoeveelheden en de raming kunnen dan per gebied worden afgelezen, met een subtotaal per gebied, terwijl het totaal van de opdracht de som van alles blijft.

## Een biedgebied maken

1. Open bovenaan het paneel {{ui:Posten}} de lijst {{ui:Biedgebied}}.
2. Kies **Nieuw biedgebied…**, typ een naam zoals "Gebouw A" of "Niveau 2", en kies **Maken**.
   Het nieuwe gebied wordt het actieve gebied. De statusbalk zegt: "Nieuwe markeringen komen in (naam). Markeringen in andere biedgebieden worden gedimd."

## Opmeten in een gebied

Zolang een biedgebied in de lijst is gekozen, komt elke nieuwe markering erin: lopen, oppervlakken, cirkels, tellingen, de markeringen die {{ui:Automatisch tellen}} toevoegt, en wat u plakt. Markeringen in andere biedgebieden en markeringen in geen gebied worden op het blad gedimd, zodat u kunt zien wat waar hoort.

Kies **Geen biedgebied** in de lijst om zonder gebied op te meten; dan wordt niets gedimd.

:::tip
Typische verdiepingen: meet Niveau 2 op, selecteer de markeringen ({{key:Mod+A}} op het blad), kopieer ze, kies Niveau 3 in de lijst en plak. De kopieën komen in Niveau 3. Als de verdiepingen gelijk zijn en u ze niet apart nodig hebt, telt een [typische groep](topic:typical-groups) in plaats daarvan één verdieping meerdere keren.
:::

## Markeringen naar een ander gebied verplaatsen

Selecteer één markering of meerdere ({{key:Shift}} + klikken, of {{key:Mod+A}}). Kies onder **Geselecteerde markering** (of **Geselecteerde markeringen**) het gebied in het veld {{ui:Biedgebied}}. De statusbalk zegt: "3 markeringen verplaatst naar Niveau 2." Dit is één stap ongedaan maken.

## Hernoemen, volgorde wijzigen of verwijderen

Kies **Biedgebieden beheren…** in de lijst. Typ over een naam om hem te hernoemen, gebruik de pijltjes om de volgorde te wijzigen (de tabellen en de werkmap volgen die), of verwijder er één met de prullenbak. Een biedgebied verwijderen behoudt de markeringen: die staan daarna in geen biedgebied. {{key:Mod+Z}} maakt elke wijziging ongedaan.

## De hoeveelheden per gebied aflezen

Kies in de tabel {{ui:Hoeveelheden}} de optie {{ui:Per gebied}} (die verschijnt zodra de opmeting een biedgebied heeft). Elk gebied toont de posten die erin vallen, met hoeveelheid, eenheid en totaal, gevolgd door een subtotaalrij. Markeringen in geen biedgebied staan als laatste, als **Geen biedgebied**. Klik op een postrij om de post te markeren en dat gebied het actieve gebied te maken.

Samenstellingen worden per gebied berekend op basis van de eigen totalen van dat gebied. Een formule die naar boven afrondt, zoals `ceil(L / 4)`, kan dan in de gebieden samen iets meer opleveren dan voor de hele opdracht, zoals ook zou gebeuren bij een inschrijving die gebied voor gebied is geprijsd.

## Alternatieven: basisinschrijving plus meerwerk en minderwerk

Een biedgebied kan een **alternatief** zijn: werk dat de opdrachtgever aan de inschrijving kan toevoegen, of eruit kan halen. In **Biedgebieden beheren…** heeft elk gebied naast zijn naam een lijst:

| Keuze | Wat het doet |
|---|---|
| {{ui:Basisinschrijving}} | Onderdeel van de inschrijving, zoals gebruikelijk. |
| {{ui:Meerwerkalternatief}} | Apart geprijsd en **niet opgenomen in de basisinschrijving**: een vloerbedekking-upgrade, een extra luifel. |
| {{ui:Minderwerkalternatief}} | In de basisinschrijving, en aangeboden als aftrek: "verwijder de luifel". |

Meet het werk van een alternatief op in zijn biedgebied, net als elk ander gebied. Zodra de opmeting een alternatief heeft:

- De kop van de tabel {{ui:Hoeveelheden}} zegt **Basisinschrijving** in plaats van Totaal van de opdracht: de hele opmeting zonder de meerwerkalternatieven.
- {{ui:Per gebied}} eindigt met de basisinschrijving en één rij per alternatief: **+$300.00** voor meerwerk, **−$1,050.00** voor minderwerk.
- Een alternatief prijst alleen de posten die er markeringen in hebben, met hun samenstellingen, zodat een samenstellingsonderdeel van een andere post er niet ongemerkt in sluipt.

In de exports eindigt het CSV-bestand met de basisinschrijving en de alternatieven, en de werkmap krijgt een werkblad **Alternatieven**: de basisinschrijving, de posten en wijziging van elk alternatief, en de basisinschrijving met elk meerwerkalternatief erbij opgeteld.

## In de export

{{ui:XLSX}} voegt een werkblad **Per biedgebied** toe: de posten en onderdelen van elk gebied met hoeveelheid, hoeveelheid met verlies, materiaal, arbeid en totaal, een subtotaal per gebied (een `SUM`-formule) en aan het eind **Alle biedgebieden**. Het werkblad **Markeringen** krijgt een kolom **Biedgebied**. Een opmeting zonder biedgebieden wordt geëxporteerd zoals voorheen. Zie [Exportkolommen](topic:export-columns).

De biedgebieden worden met de markeringen in het projectbestand opgeslagen.
