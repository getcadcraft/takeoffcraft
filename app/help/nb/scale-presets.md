---
title: Målestokkforvalg
summary: Alle forvalgene i listen Forvalg – arkitekt, ingeniør og metrisk – og hva hvert enkelt forutsetter om PDF-en.
keywords: målestokk, forvalg, arkitektonisk målestokk, ingeniørmålestokk, metrisk målestokk, forhold, 1/4 tomme, 1/8 tomme, 1:100, fullskala
from: 31ac0000
---

{{ui:Forvalg}}-listen i gruppen {{ui:Målestokk}} har 32 målestokker i tre grupper. Et forvalg setter målestokken for det åpne arket nøyaktig.

Hvert forvalg forutsetter at PDF-sidestørrelsen er tegningens reelle papirstørrelse: én tomme på PDF-siden er én tomme papir (PDF-sider måler 72 punkt per tomme). Hvis PDF-en er endret i størrelse, bruk {{ui:Kalibrer}}. Bruk {{ui:Kontroller}} etter å ha satt en hvilken som helst målestokk. Se [Sett målestokken](topic:set-the-scale).

## Arkitekt

| Forvalg | Én tomme papir er |
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

| Forvalg | Én tomme papir er |
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

Et metrisk forhold betyr at én enhet på papiret er så mange enheter i virkeligheten: ved `1:100` er 10 mm på siden 1 m.

## Kalibrerte målestokker

En kalibrert målestokk vises som «Kalibrert 1" = 4.002' på 24'-6""» i linjen under arket: reelle fot per papirtomme, og avstanden du skrev inn. Når den er innenfor 0.5 % av et forvalg, legger linjen til «(samsvarer med 1/4" = 1'-0")», og arkelisten viser navnet på forvalget.

## Uvanlige PDF-er

Noen PDF-er oppgir en større sideenhet («brukerenhet»); TakeoffCraft tar den med i betraktning for forvalg og for målestokken som vises. Sider som er rotert i PDF-en, måles på samme måte som rette sider.
