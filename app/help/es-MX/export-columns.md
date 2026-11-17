---
title: Columnas de exportación
summary: Cada hoja de cálculo y columna de la exportación XLSX y del CSV, con las fórmulas que lleva la hoja Presupuesto.
keywords: exportar, columnas, xlsx, csv, hoja de cálculo, hoja de presupuesto, por hoja, marcas, escalas, fórmulas, campos
from: fed07851
---

## Presupuesto (hoja XLSX y CSV)

Una fila por partida, seguida de una fila por cada componente de su conjunto (con sangría). Luego una fila vacía y el total de la obra.

| Columna | Contenido | En el XLSX |
|---|---|---|
| A Partida | Nombre de la partida (en negritas) o nombre del componente (con sangría) | Texto |
| B Tipo | Lineal, Área, Conteo o Componente | Texto |
| C Unidad | LF, m, SF, SY, m², EA, o la unidad del componente | Texto |
| D Cantidad | Total medido, o resultado de la fórmula | Número |
| E % de desperdicio | Desperdicio | Porcentaje (0.10 = 10%) |
| F Cant. con desperdicio | Cantidad × (1 + desperdicio) | Fórmula `D*(1+E)` |
| G Material por unidad | Tarifa de material | Número |
| H Mano de obra por unidad | Tarifa de mano de obra | Número |
| I Material | Material extendido | Fórmula `ROUND(F*G,2)` |
| J Mano de obra | Mano de obra extendida | Fórmula `ROUND(F*H,2)` |
| K Total | Material + mano de obra | Fórmula `I+J` |
| L Notas | Fórmula usada, error de fórmula, marcas en hojas sin escala, área de muros, perímetro | Texto |

Fila de total de la obra: `SUM` de las columnas I, J y K de todas las filas anteriores, y "Incompleto: vea las notas de arriba" en Notas cuando se haya omitido algo.

Una fila con error de fórmula no tiene cantidad ni importes; su nota indica el error. La fila de encabezado queda fija.

En el CSV, las mismas columnas contienen valores simples; % de desperdicio es un número de porcentaje (10 para 10%), y el dinero está en dólares con dos decimales. El texto que una hoja de cálculo podría tomar por una fórmula (que empiece con `=`, `+`, `-` o `@`) recibe un `'` al inicio para que siga siendo texto.

## Por hoja (solo XLSX)

| Columna | Contenido |
|---|---|
| Hoja | Nombre de la hoja (con el nombre del PDF cuando no está abierto) |
| Partida | Nombre de la partida |
| Cantidad | Cantidad de esa partida en esa hoja, en su unidad |
| Unidad | Unidad de la partida |
| Marcas | Número de marcas |

## Marcas (solo XLSX)

Una fila por marca.

| Columna | Contenido |
|---|---|
| Hoja | Nombre de la hoja |
| Partida | Nombre de la partida |
| Tipo | Lineal, Área o Conteo |
| Cantidad | Longitud, área neta, o 1 |
| Unidad | LF o m; SF, SY o m²; EA |
| Detalle | Lineal: las longitudes de los tramos, los descontados marcados "(descuento)", y "deduce (longitud) de (longitud) dibujada". Área: áreas brutas y de recortes cuando hay recortes, y el perímetro. "La hoja no tiene escala" para las marcas sin escala. |
| Área de licitación | Solo cuando la cuantificación tiene áreas de licitación: el área de la marca, o "Sin área de licitación" |

## Por área de licitación (solo XLSX, cuando la cuantificación tiene áreas de licitación)

| Columna | Contenido |
|---|---|
| Área de licitación | El nombre del área, o "Sin área de licitación" |
| Partida | La partida, o un componente con sangría bajo ella |
| Unidad | Unidad de la partida o del componente |
| Cantidad | Medida en esa área (componentes: la fórmula sobre los totales del área) |
| Cant. con desperdicio | Cantidad × (1 + desperdicio) |
| Material, Mano de obra, Total | Extendidos al centavo, igual que en Presupuesto |
| Notas | Fórmula, errores y marcas sin escala, igual que en Presupuesto |

Cada área termina con una fila "subtotal (nombre)" cuyos costos son fórmulas `SUM` sobre sus filas; la última fila, **Todas las áreas de licitación**, suma los subtotales. La hoja **Marcas** tiene entonces una séptima columna, **Área de licitación**.

## Escalas (solo XLSX)

Una fila por cada hoja que tenga escala o marcas.

| Columna | Contenido |
|---|---|
| Hoja | Nombre de la hoja |
| Escala | El nombre del preajuste, la escala calibrada, o "Sin escala" |
| Cómo | "Preajuste", o "Calibrada con (la distancia que escribió)" |
| Pies por unidad de PDF | El factor de escala exacto que usa TakeoffCraft |

## Nombres de archivo

- `(name).xlsx` y `(name).csv`, donde el nombre proviene del primer PDF abierto en la cuantificación.
- El CSV está en UTF-8 con marca de orden de bytes y finales de línea de Windows, que los programas de hojas de cálculo leen en cualquier plataforma.
