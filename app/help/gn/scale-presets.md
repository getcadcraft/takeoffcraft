---
title: Escalas predeterminadas
summary: Cada predeterminada de la lista Predeterminada (arquitectónica, de ingeniería y métrica) y lo que supone sobre el PDF.
keywords: escala, predeterminadas, escala arquitectónica, escala de ingeniería, escala métrica, razón, 1/4 pulgada, 1/8 pulgada, 1:100, tamaño natural
from: 31ac0000
---

La lista {{ui:Predeterminada}} del grupo {{ui:Escala}} tiene 32 escalas en tres grupos. Una predeterminada fija la escala de la hoja abierta exactamente.

Cada predeterminada supone que la página del PDF es el tamaño de papel real del plano: una pulgada en la página del PDF es una pulgada de papel (las páginas PDF miden 72 puntos por pulgada). Si el PDF fue redimensionado, usá {{ui:Calibrar}}. Usá {{ui:Verificar}} después de fijar cualquier escala. Ver [Fijar la escala](topic:set-the-scale).

## Arquitectónica

| Predeterminada | Una pulgada de papel es |
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

## Ingeniería

| Predeterminada | Una pulgada de papel es |
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

Una razón métrica significa que una unidad en papel equivale a esa cantidad de unidades en la realidad: en `1:100`, 10 mm en la página son 1 m.

## Escalas calibradas

Una escala calibrada se muestra como "Calibrada 1" = 4.002' en 24'-6"" en la barra bajo la hoja: pies reales por pulgada de papel, y la distancia que escribiste. Cuando está dentro del 0.5% de una predeterminada, la barra agrega "(coincide con 1/4" = 1'-0")" y la lista de hojas muestra el nombre de la predeterminada.

## PDF poco comunes

Algunos PDF declaran una unidad de página mayor (una "unidad de usuario"); TakeoffCraft la tiene en cuenta para las predeterminadas y para la escala mostrada. Las páginas rotadas dentro del PDF se miden igual que las derechas.
