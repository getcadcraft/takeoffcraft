---
title: Escalas predefinidas
summary: Cada predefinição da lista Predefinida — arquitetónica, de engenharia e métrica — e o que cada uma assume sobre o PDF.
keywords: escala, predefinições, escala arquitetónica, escala de engenharia, escala métrica, razão, 1/4 polegada, 1/8 polegada, 1:100, tamanho real
from: 31ac0000
---

A lista {{ui:Preset}} no grupo {{ui:Scale}} tem 32 escalas em três grupos. Uma predefinição define a escala da folha aberta exatamente.

Cada predefinição assume que a página do PDF tem o tamanho real do papel do desenho: uma polegada na página do PDF é uma polegada de papel (as páginas PDF medem 72 pontos por polegada). Se o PDF foi redimensionado, use {{ui:Calibrate}}. Use {{ui:Check}} depois de definir qualquer escala. Ver [Definir a escala](topic:set-the-scale).

## Arquitetónica

| Predefinição | Uma polegada de papel equivale a |
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

## Engenharia

| Predefinição | Uma polegada de papel equivale a |
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

Uma razão métrica significa que uma unidade no papel equivale a tantas unidades na realidade: a `1:100`, 10 mm na página são 1 m.

## Escalas calibradas

Uma escala calibrada aparece como «Calibrada 1» = 4.002' em 24'-6"" na barra por baixo da folha: pés reais por polegada de papel, e a distância que escreveu. Quando está a menos de 0.5% de uma predefinição, a barra acrescenta «(corresponde a 1/4" = 1'-0")» e a lista de folhas mostra o nome da predefinição.

## PDF invulgares

Alguns PDF declaram uma unidade de página maior (uma «unidade de utilizador»); o TakeoffCraft tem-na em conta nas predefinições e na escala mostrada. As páginas rodadas no PDF são medidas da mesma forma que as páginas na vertical.
