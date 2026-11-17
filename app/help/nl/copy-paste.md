---
title: Markeringen kopiëren, plakken en dupliceren
summary: Kopieer markeringen met hun posten, plak ze waar u klikt of op dezelfde plek op een ander blad, dupliceer, knip, verwijder en selecteer alles, elk met één stap ongedaan te maken.
keywords: kopiëren, plakken, knippen, dupliceren, plakken op dezelfde plaats, klembord, alles selecteren, niets selecteren, meerdere markeringen, typische verdieping, herhalen, zelfde plan, ander blad, post kopiëren, post dupliceren
from: e20e9024
---

De groep {{ui:Bewerken}} van de werkbalk bevat {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}} en {{ui:Plakken}}. Het menu {{ui:Meer}} heeft de rest, elk met zijn sneltoets: {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Op dezelfde plaats plakken}}, {{ui:Dupliceren}}, {{ui:Verwijderen}}, {{ui:Alles selecteren}} en {{ui:Niets selecteren}}. Elk daarvan is met {{key:Mod+Z}} in één stap ongedaan te maken.

## De markeringen selecteren

1. Kies {{ui:Selecteren}} ({{key:V}}) en klik op een markering.
2. Houd {{key:Shift}} ingedrukt en klik op meer markeringen om ze toe te voegen. {{key:Shift}} + klik op een geselecteerde markering haalt die er weer uit.
3. Of druk op {{key:Mod+A}} ({{ui:Alles selecteren}}) om elke markering op het open blad te selecteren.

Met meerdere geselecteerde markeringen toont het rechterpaneel **Geselecteerde markeringen**: hoeveel van elke post, met {{ui:Kopiëren}}, {{ui:Dupliceren}}, {{ui:Knippen}} en {{ui:Markeringen verwijderen}}. Hoekgrepen verschijnen alleen wanneer één markering is geselecteerd. {{key:Esc}} ({{ui:Niets selecteren}}) wist de selectie.

## Kopiëren en plakken waar u klikt

1. Selecteer de markeringen en druk op {{key:Mod+C}} ({{ui:Kopiëren}}). De markeringen worden gekopieerd met hun posten, inclusief de samenstelling, het verlies en de kosten van elke post.
2. Ga naar het blad waarop u ze wilt hebben (dat mag hetzelfde blad zijn).
3. Druk op {{key:Mod+V}} ({{ui:Plakken}}). Een gestippelde kopie volgt de aanwijzer.
4. Klik waar het moet komen. Het midden van de gekopieerde markeringen komt op de aanwijzer.

{{key:Esc}} annuleert en voegt niets toe. De geplakte markeringen worden daarna geselecteerd, dus {{key:Delete}} of {{key:Mod+Z}} verwijdert ze weer.

In dezelfde opmeting komen geplakte markeringen op **dezelfde posten**, dus hun hoeveelheden tellen op bij die posten. In een andere opmeting (een ander tabblad, of na {{ui:Nieuw}}) wordt een post met dezelfde naam en hetzelfde type gebruikt; anders wordt de post toegevoegd met zijn samenstelling. Als de naam al in gebruik is door een post van een ander type, heet de toegevoegde post "(naam) (kopie)".

Geplakte markeringen gaan in het biedgebied dat bovenaan het paneel {{ui:Posten}} is gekozen (of in geen). Zie [Biedgebieden](topic:bid-areas).

## Op dezelfde plaats plakken

{{key:Mod+Shift+V}} ({{ui:Op dezelfde plaats plakken}}) zet de kopie op precies dezelfde plek op het open blad, op basis van de positie op de pagina. Gebruik dat voor een typische verdieping: meet niveau 2 op, kopieer, open niveau 3, plak op dezelfde plaats.

Op dezelfde plaats plakken vereist een blad van **dezelfde grootte** als het blad waarvan u kopieerde. Op een blad van een andere grootte zegt TakeoffCraft dat en plakt het niets; gebruik dan {{ui:Plakken}} en klik. Op het blad waarvan u kopieerde, komt de kopie bovenop de originelen.

## De schaal moet overeenkomen

Lengten en oppervlakten hangen af van de schaal van het blad. Een traject dat 10' meet bij 1/4" = 1'-0" zou 20' meten op een blad van 1/8" = 1'-0". Daarom plakt TakeoffCraft trajecten en vlakken alleen op een blad met **dezelfde schaal** als het blad waarvan ze komen, en zegt het duidelijk wanneer dat niet zo is:

- Het open blad heeft nog geen schaal: geef het eerst een schaal ([Schaal instellen](topic:set-the-scale)), en plak daarna.
- Het open blad heeft een andere schaal: het bericht noemt beide schalen. Plak op een blad met dezelfde schaal.
- Tellingen hebben geen schaal nodig: gekopieerde tellingen plakken overal.

## Dupliceren

{{key:Mod+D}} ({{ui:Dupliceren}}) kopieert de geselecteerde markeringen en zet de kopie meteen op de aanwijzer; klik waar het moet komen. Er wordt niets toegevoegd tot u klikt, en {{key:Esc}} laat niets achter. Dupliceren verandert niet wat {{ui:Plakken}} plakt.

## Knippen en verwijderen

- {{key:Mod+X}} ({{ui:Knippen}}) kopieert de geselecteerde markeringen en verwijdert ze. Plak ze waar ze horen, of maak het knippen ongedaan.
- {{key:Delete}} of {{key:Backspace}} ({{ui:Verwijderen}}) verwijdert de geselecteerde markeringen zonder ze te kopiëren.

## Een post kopiëren

De postbewerker (onder **Posten**) eindigt met:

- {{ui:Post kopiëren}}: kopieert de post met zijn samenstelling, verlies en kosten, zonder markeringen. {{ui:Plakken}} voegt daarna een kopie ervan toe aan deze opmeting, of aan een andere.
- {{ui:Post dupliceren}}: voegt meteen een kopie toe, genaamd "(naam) (kopie)".

:::tip
De kopie blijft op deze computer: ze wordt bewaard in dit tabblad en in de opslag van de browser, zodat een ander TakeoffCraft-tabblad haar kan plakken. Er wordt niets geüpload, en het systeemklembord wordt niet gebruikt, dus u kunt markeringen niet in andere programma's plakken.
:::

:::note
Een kopie komt van één blad tegelijk. Markeringen worden geplakt zoals ze zijn: een kopie draaien of spiegelen is nog niet mogelijk.
:::
