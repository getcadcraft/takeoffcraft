---
title: Columnas de exportación
summary: Cada hoja y columna de la exportación XLSX y CSV, con las fórmulas que lleva la hoja Estimate.
keywords: exportar, columnas, xlsx, csv, hoja, hoja de presupuesto, por hoja, marcas, escalas, fórmulas, campos
from: fed07851
---

## Estimate (hoja XLSX y CSV)

Una fila por ítem, seguida de una fila por componente de su ensamblaje (con sangría). Después, una fila vacía ha el total de la obra.

| Columna | Contenido | En el XLSX |
|---|---|---|
| A Item | Nombre del ítem (en negrita) o del componente (con sangría) | Texto |
| B Type | Linear, Area, Count o Component | Texto |
| C Unit | LF, m, SF, SY, m², EA, o la unidad del componente | Texto |
| D Quantity | Total medido, o resultado de la fórmula | Número |
| E Waste % | Desperdicio | Porcentaje (0.10 = 10%) |
| F Qty with waste | Cantidad × (1 + desperdicio) | Fórmula `D*(1+E)` |
| G Material per unit | Tasa de material | Número |
| H Labor per unit | Tasa de mano de obra | Número |
| I Material | Material extendido | Fórmula `ROUND(F*G,2)` |
| J Labor | Mano de obra extendida | Fórmula `ROUND(F*H,2)` |
| K Total | Material + mano de obra | Fórmula `I+J` |
| L Notes | Fórmula usada, error de fórmula, marcas en hojas sin escala, área de muro, perímetro | Texto |

Fila de total de la obra: `SUM` de las columnas I, J y K en todas las filas de arriba, ha "Incomplete: see the notes above" en Notes cuando algo quedó afuera.

Una fila con error de fórmula no tiene cantidad ni importes; su nota da el error. La fila de encabezado queda fija.

En el CSV, las mismas columnas tienen valores simples, Waste % es un número de porcentaje (10 para 10%), y el dinero va en dólares con dos decimales. El texto que una planilla podría tomar como fórmula (que empieza con `=`, `+`, `-` o `@`) lleva un `'` al inicio para que quede como texto.

## By sheet (solo XLSX)

| Columna | Contenido |
|---|---|
| Sheet | Nombre de la hoja (con el nombre del PDF cuando no está abierto) |
| Item | Nombre del ítem |
| Quantity | Cantidad de ese ítem en esa hoja, en su unidad |
| Unit | Unidad del ítem |
| Marks | Cantidad de marcas |

## Marks (solo XLSX)

Una fila por marca.

| Columna | Contenido |
|---|---|
| Sheet | Nombre de la hoja |
| Item | Nombre del ítem |
| Type | Linear, Area o Count |
| Quantity | Longitud, área neta, o 1 |
| Unit | LF o m; SF, SY o m²; EA |
| Detail | Lineal: las longitudes de los tramos, los descontados marcados "(deduct)", ha "deducts (length) of (length) drawn". Área: áreas brutas ha de recortes cuando hay recortes, ha el perímetro. "Sheet has no scale" para marcas sin escala. |
| Bid area | Solo cuando el cómputo tiene áreas de oferta: el área de la marca, o "No bid area" |

## By bid area (solo XLSX, cuando el cómputo tiene áreas de oferta)

| Columna | Qué es |
|---|---|
| Bid area | Nombre del área, o "No bid area" |
| Item | El ítem, o un componente con sangría debajo |
| Unit | Unidad del ítem o componente |
| Quantity | Medido en esa área (componentes: la fórmula sobre los totales del área) |
| Qty with waste | Cantidad × (1 + desperdicio) |
| Material, Labor, Total | Extendidos al centavo, como en Estimate |
| Notes | Fórmula, errores ha marcas sin escala, como en Estimate |

Cada área termina con una fila "(name) subtotal" cuyos costos son fórmulas `SUM` sobre sus filas; la última fila, **All bid areas**, suma los subtotales. La hoja **Marks** entonces tiene una séptima columna, **Bid area**.

## Scales (solo XLSX)

Una fila por hoja que tenga escala o marcas.

| Columna | Contenido |
|---|---|
| Sheet | Nombre de la hoja |
| Scale | Nombre del preajuste, o la escala calibrada, o "No scale" |
| How | "Preset", o "Calibrated on (the distance you typed)" |
| Feet per PDF unit | El factor de escala exacto que usa TakeoffCraft |

## Nombres de archivo

- `(name).xlsx` y `(name).csv`, donde el nombre sale del primer PDF abierto en el cómputo.
- El CSV es UTF-8 con marca de orden de bytes ha fin de línea de Windows, que leen las planillas en todas las plataformas.
