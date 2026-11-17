---
title: Målestok-forudindstillinger
summary: Alle forudindstillinger på listen Forudindstilling – arkitektonisk, ingeniør og metrisk – og hvad hver enkelt forudsætter om PDF'en.
keywords: målestok, forudindstillinger, arkitektonisk målestok, ingeniørmålestok, metrisk målestok, forhold, 1/4 tomme, 1/8 tomme, 1:100, fuld størrelse
from: 31ac0000
---

Listen {{ui:Forudindstilling}} i gruppen {{ui:Målestok}} har 32 målestokke i tre grupper. En forudindstilling sætter det åbne arks målestok præcis.

Hver forudindstilling forudsætter at PDF-siden har tegningens rigtige papirstørrelse: én tomme på PDF-siden er én tomme papir (PDF-sider måler 72 punkter pr. tomme). Hvis PDF'en er blevet ændret i størrelse, brug {{ui:Kalibrér}}. Brug {{ui:Kontrollér}} efter at have angivet en målestok. Se [Angiv målestokken](topic:set-the-scale).

## Arkitektonisk

| Forudindstilling | Én tomme papir er |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Ingeniør

| Forudindstilling | Én tomme papir er |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrisk

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Et metrisk forhold betyder at én enhed på papir er så mange enheder i virkeligheden: ved `1:100` er 10 mm på siden 1 m.

## Kalibrerede målestokke

En kalibreret målestok vises som »Kalibreret 1" = 4.002' på 24'-6"« i linjen under arket: virkelige fod pr. papirtomme, og den afstand du skrev. Når den ligger inden for 0.5 % af en forudindstilling, tilføjer linjen »(svarer til 1/4" = 1'-0")«, og arkelisten viser forudindstillingens navn.

## Usædvanlige PDF'er

Nogle PDF'er angiver en større sideenhed (en »brugerenhed«); TakeoffCraft tager højde for den ved forudindstillinger og for den viste målestok. Sider der er roteret i PDF'en, måles på samme måde som stående sider.
