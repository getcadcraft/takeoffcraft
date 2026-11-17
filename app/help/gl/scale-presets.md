---
title: Predefinicións de escala
summary: Cada predefinición da lista Predefinida (arquitectónica, enxeñaría e métrica) e o que supón cada unha sobre o PDF.
keywords: escala, predefinicións, escala arquitectónica, escala de enxeñaría, escala métrica, razón, 1/4 de polgada, 1/8 de polgada, 1:100, tamaño real
from: 31ac0000
---

A lista {{ui:Preset}} do grupo {{ui:Scale}} ten 32 escalas en tres grupos. Unha predefinición fixa exactamente a escala da folla aberta.

Cada predefinición supón que a páxina do PDF é o tamaño real do papel do debuxo: unha polgada na páxina do PDF é unha polgada de papel (as páxinas PDF miden 72 puntos por polgada). Se o PDF se redimensionou, use {{ui:Calibrate}}. Use {{ui:Check}} despois de fixar calquera escala. Vexa [Definir a escala](topic:set-the-scale).

## Arquitectónica

| Predefinición | Unha polgada de papel é |
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

## Enxeñaría

| Predefinición | Unha polgada de papel é |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Métrica

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Unha razón métrica significa que unha unidade no papel equivale a tantas unidades na realidade: a `1:100`, 10 mm na páxina son 1 m.

## Escalas calibradas

Unha escala calibrada aparece na barra debaixo da folla como «Calibrada 1» = 4.002' sobre 24'-6"": pés reais por polgada de papel, e a distancia que escribiu. Cando está a menos de 0.5 % dunha predefinición, a barra engade «(coincide con 1/4" = 1'-0")» e a lista de follas mostra o nome da predefinición.

## PDF pouco habituais

Algúns PDF declaran unha unidade de páxina maior (unha «unidade de usuario»); TakeoffCraft téno en conta para as predefinicións e para a escala mostrada. As páxinas xiradas no PDF mídense igual que as verticais.
