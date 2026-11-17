---
title: Preajustes de escala
summary: Cada preajuste de la lista Preajuste (arquitectónica, de ingeniería y métrica) y lo que supone sobre el PDF.
keywords: escala, preajustes, escala arquitectónica, escala de ingeniería, escala métrica, relación, 1/4 pulgada, 1/8 pulgada, 1:100, tamaño real
from: 31ac0000
---

La lista {{ui:Preajuste}} del grupo {{ui:Escala}} tiene 32 escalas en tres grupos. Un preajuste fija exactamente la escala de la hoja abierta.

Cada preajuste supone que la página del PDF tiene el tamaño de papel real del dibujo: una pulgada en la página del PDF equivale a una pulgada de papel (las páginas PDF miden 72 puntos por pulgada). Si el PDF se ha redimensionado, use {{ui:Calibrar}}. Use {{ui:Comprobar}} después de fijar cualquier escala. Véase [Definir la escala](topic:set-the-scale).

## Arquitectónica

| Preajuste | Una pulgada de papel equivale a |
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

| Preajuste | Una pulgada de papel equivale a |
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

Una relación métrica significa que una unidad en el papel equivale a esa cantidad de unidades en la realidad: a `1:100`, 10 mm en la página son 1 m.

## Escalas calibradas

Una escala calibrada aparece como "Calibrada 1" = 4.002' en 24'-6"" en la barra bajo la hoja: pies reales por pulgada de papel, y la distancia que escribió. Cuando está dentro del 0.5% de un preajuste, la barra añade "(coincide con 1/4" = 1'-0")" y la lista de hojas muestra el nombre del preajuste.

## PDF poco habituales

Algunos PDF declaran una unidad de página mayor (una «unidad de usuario»); TakeoffCraft la tiene en cuenta para los preajustes y para la escala mostrada. Las páginas giradas en el PDF se miden igual que las verticales.
