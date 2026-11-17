---
title: Tilbudsområder
summary: Mærk markeringer efter bygning, etage eller fase, tag mængder ind i ét område ad gangen, og læs mængder og omkostninger for hvert område.
keywords: tillægsalternativ, fradragsalternativ, grundtilbud, alternativer, tilbudsområde, område, bygning, etage, niveau, fase, zone, alternativ, opdeling, typisk etage, delsum, pr. område
from: 64f3d41c
---

Et tilbudsområde er en del af opgaven, du prissætter for sig selv: en bygning, en etage, en fase, en fløj. Hver markering kan ligge i ét tilbudsområde. Mængderne og kalkulationen kan så læses for hvert område med en delsum for hvert, mens jobtotalen forbliver summen af alt.

## Lav et tilbudsområde

1. Øverst i panelet {{ui:Poster}} åbner du listen {{ui:Tilbudsområde}}.
2. Vælg **Nyt tilbudsområde…**, skriv et navn som »Bygning A« eller »Niveau 2«, og vælg **Opret**.
   Det nye område bliver det aktuelle. Statuslinjen siger »Nye markeringer lægges i (navn). Markeringer i andre tilbudsområder er nedtonet.«

## Tag mængder ind i et område

Mens et tilbudsområde er valgt i listen, lægges hver ny markering i det: forløb, arealer, cirkler, tællinger, de markeringer {{ui:Auto-tælling}} tilføjer, og det du indsætter. Markeringer i andre tilbudsområder og markeringer uden område nedtones på arket, så du kan se, hvad der hører hvor.

Vælg **Intet tilbudsområde** i listen for at tage mængder uden; da nedtones intet.

:::tip
Typiske etager: tag Niveau 2's mængder, vælg markeringerne ({{key:Mod+A}} på arket), kopiér dem, vælg Niveau 3 i listen og indsæt. Kopierne lægges i Niveau 3. Når etagerne er ens, og du ikke har brug for dem adskilt, tæller en [typisk gruppe](topic:typical-groups) i stedet en etage flere gange.
:::

## Flyt markeringer til et andet område

Vælg én markering eller flere ({{key:Shift}} + klik, eller {{key:Mod+A}}). Under **Valgt markering** (eller **Valgte markeringer**) vælger du området i feltet {{ui:Tilbudsområde}}. Statuslinjen siger »3 markeringer flyttet til Niveau 2.« Det er ét fortrydelsestrin.

## Omdøb, omarrangér eller slet

Vælg **Administrér tilbudsområder…** i listen. Skriv over et navn for at omdøbe det, brug pilene til at ændre rækkefølgen (tabellerne og regnearket følger den), eller slet et med papirkurven. Sletning af et tilbudsområde beholder dets markeringer: de ligger så i intet tilbudsområde. {{key:Mod+Z}} fortryder hver ændring.

## Læs mængderne pr. område

I tabellen {{ui:Mængder}} vælger du {{ui:Pr. område}} (den vises, når mængdeudtrækket har et tilbudsområde). Hvert område lister de poster, det indeholder, med deres mængde, enhed og total, derefter en delsumsrække. Markeringer i intet tilbudsområde kommer til sidst som **Intet tilbudsområde**. Klik på en postrække for at fremhæve posten og gøre det område til det aktuelle.

Kalkulationsenheder beregnes for hvert område ud fra områdets egne totaler. En formel, der afrunder opad, fx `ceil(L / 4)`, kan så give lidt mere i områderne samlet end for hele jobbet, sådan som det ville være på et tilbud prissat område for område.

## Alternativer: grundtilbud plus tillæg og fradrag

Et tilbudsområde kan være et **alternativ**: arbejde, ejeren må lægge til tilbuddet, eller tage fra det. I **Administrér tilbudsområder…** har hvert område en liste ved siden af sit navn:

| Valg | Hvad det gør |
|---|---|
| {{ui:Grundtilbud}} | I tilbuddet, som sædvanligt. |
| {{ui:Tillægsalternativ}} | Prissat for sig selv og **udeladt af grundtilbuddet**: en tæppeopgradering, et ekstra overdække. |
| {{ui:Fradragsalternativ}} | I grundtilbuddet og tilbudt som et fradrag: »slet overdækningen«. |

Tag et alternativs arbejde ind i dets tilbudsområde som ethvert andet område. Når mængdeudtrækket har et alternativ:

- Overskriften på tabellen {{ui:Mængder}} siger **Grundtilbud** i stedet for Jobtotal: hele mængdeudtrækket uden tillægsalternativerne.
- {{ui:Pr. område}} slutter med grundtilbuddet og én række pr. alternativ: **+$300.00** for et tillæg, **−$1,050.00** for et fradrag.
- Et alternativ prissætter kun de poster, der har markeringer i det, med deres kalkulationsenheder, så en kalkulationsdel fra en anden post ikke snigende kommer med.

I eksporterne slutter CSV-filen med grundtilbuddet og alternativerne, og regnearket får et ark **Alternativer**: grundtilbuddet, hvert alternativs poster og dets ændring, samt grundtilbuddet uden alle tillægsalternativer.

## I eksporten

{{ui:XLSX}} tilføjer et ark **Pr. tilbudsområde**: hvert områdes poster og komponenter med mængde, mængde med spild, materiale, løn og total, en delsum pr. område (en `SUM`-formel) og **Alle tilbudsområder** til sidst. Arket **Markeringer** får en kolonne **Tilbudsområde**. Et mængdeudtræk uden tilbudsområder eksporteres som hidtil. Se [Eksportkolonner](topic:export-columns).

Tilbudsområderne gemmes i projektfilen sammen med markeringerne.
