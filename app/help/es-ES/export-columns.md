---
title: Columnas de exportación
summary: Cada hoja de cálculo y cada columna de la exportación XLSX y del CSV, con las fórmulas que lleva la hoja Presupuesto.
keywords: exportar, columnas, xlsx, csv, hoja de cálculo, hoja de presupuesto, por plano, marcas, escalas, fórmulas, campos
from: fed07851
---

## Presupuesto (hoja XLSX y CSV)

Una fila por elemento, seguida de una fila por cada componente de su ensamblaje (con sangría). Después, una fila vacía y el total de la obra.

| Columna | Contenido | En el XLSX |
|---|---|---|
| A Elemento | Nombre del elemento (en negrita) o del componente (con sangría) | Texto |
| B Tipo | Lineal, Superficie, Recuento o Componente | Texto |
| C Unidad | LF, m, SF, SY, m², EA, o la unidad del componente | Texto |
| D Cantidad | Total medido, o resultado de la fórmula | Número |
| E Desperdicio % | Desperdicio | Porcentaje (0.10 = 10 %) |
| F Cant. con desperdicio | Cantidad × (1 + desperdicio) | Fórmula `D*(1+E)` |
| G Material por unidad | Precio de material | Número |
| H Mano de obra por unidad | Precio de mano de obra | Número |
| I Material | Material extendido | Fórmula `ROUND(F*G,2)` |
| J Mano de obra | Mano de obra extendida | Fórmula `ROUND(F*H,2)` |
| K Total | Material + mano de obra | Fórmula `I+J` |
| L Notas | Fórmula usada, error de fórmula, marcas en planos sin escala, área de muro, perímetro | Texto |

Fila del total de la obra: `SUM` de las columnas I, J y K sobre todas las filas anteriores, y "Incompleto: vea las notas anteriores" en Notas cuando falte algo.

Una fila con error de fórmula no tiene cantidad ni importes; su nota indica el error. La fila de encabezado queda fija.

En el CSV, las mismas columnas contienen valores simples; Desperdicio % es un número de porcentaje (10 para 10 %), y los importes van en dólares con dos decimales. El texto que una hoja de cálculo podría tomar por una fórmula (que empiece por `=`, `+`, `-` o `@`) recibe una `'` al principio para que siga siendo texto.

## Por plano (solo XLSX)

| Columna | Contenido |
|---|---|
| Plano | Nombre del plano (con el nombre del PDF cuando no está abierto) |
| Elemento | Nombre del elemento |
| Cantidad | Cantidad de ese elemento en ese plano, en su unidad |
| Unidad | Unidad del elemento |
| Marcas | Número de marcas |

## Marcas (solo XLSX)

Una fila por marca.

| Columna | Contenido |
|---|---|
| Plano | Nombre del plano |
| Elemento | Nombre del elemento |
| Tipo | Lineal, Superficie o Recuento |
| Cantidad | Longitud, superficie neta o 1 |
| Unidad | LF o m; SF, SY o m²; EA |
| Detalle | Lineal: las longitudes de los tramos, los descontados marcados "(descuento)", y "descuenta (longitud) de (longitud) dibujada". Superficie: áreas brutas y de huecos cuando hay huecos, y el perímetro. "El plano no tiene escala" para las marcas sin escala. |
| Área de oferta | Solo cuando la medición tiene áreas de oferta: el área de la marca, o "Sin área de oferta" |

## Por área de oferta (solo XLSX, cuando la medición tiene áreas de oferta)

| Columna | Contenido |
|---|---|
| Área de oferta | Nombre del área, o "Sin área de oferta" |
| Elemento | El elemento, o un componente con sangría bajo él |
| Unidad | La unidad del elemento o del componente |
| Cantidad | Medida en esa área (componentes: la fórmula sobre los totales del área) |
| Cant. con desperdicio | Cantidad × (1 + desperdicio) |
| Material, Mano de obra, Total | Extendidos al céntimo, como en Presupuesto |
| Notas | Fórmula, errores y marcas sin escala, como en Presupuesto |

Cada área termina con una fila "(nombre) subtotal" cuyos costes son fórmulas `SUM` sobre sus filas; la última fila, **Todas las áreas de oferta**, suma los subtotales. La hoja **Marcas** tiene entonces una séptima columna, **Área de oferta**.

## Escalas (solo XLSX)

Una fila por cada plano que tenga escala o marcas.

| Columna | Contenido |
|---|---|
| Plano | Nombre del plano |
| Escala | El nombre del ajuste predefinido, la escala calibrada, o "Sin escala" |
| Cómo | "Predefinida", o "Calibrada con (la distancia que escribió)" |
| Pies por unidad de PDF | El factor de escala exacto que usa TakeoffCraft |

## Nombres de archivo

- `(nombre).xlsx` y `(nombre).csv`, donde el nombre procede del primer PDF abierto en la medición.
- El CSV está en UTF-8, con marca de orden de bytes y saltos de línea de Windows, que leen los programas de hoja de cálculo en todas las plataformas.
