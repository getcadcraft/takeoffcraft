---
title: Tamaños de página y nombres de papel
summary: Vea el tamaño de cada hoja en milímetros y pulgadas y su nombre de papel (series A, B y C, ANSI, ARCH), y agrupe un conjunto mixto por tamaño para encontrar las hojas atípicas.
keywords: tamaño de página, tamaño de papel, nombre de papel, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, arquitectónico, mm, pulgadas, tamaño personalizado, por tamaño, tamaño atípico, conjunto mixto, escala, conjunto de planos, mediabox, rotación
from: 9c061c07
---

Una escala solo significa algo en el papel correcto. {{ui:Medición}} lee el tamaño de cada hoja PDF y nombra el papel, para que pueda ver una hoja que se imprimió a otro tamaño antes de fiarse de una medición en ella.

## Qué hará

Mire el tamaño de la hoja abierta y después agrupe todo el conjunto por tamaño.

## Pasos

1. Abra los planos ({{ui:Abrir PDF}}).
2. La barra de hojas sobre el dibujo muestra el nombre de papel de la hoja abierta y su tamaño, por ejemplo «A1 · 594 × 841 mm».
3. Cada fila de la lista {{ui:Hojas}} tiene una línea de tamaño bajo el nombre de la hoja.
4. Elija {{ui:Por tamaño}} en el encabezado de {{ui:Hojas}}. La lista reúne las hojas bajo un encabezado por tamaño, con el grupo más grande primero, y marca como atípico un tamaño con solo unas pocas hojas.
5. Elija {{ui:Por tamaño}} de nuevo para volver al orden propio del conjunto.

Una hoja DWG o DXF no tiene papel, así que no se muestra ningún tamaño para ella.

## Cómo se elige el nombre

- El tamaño procede de la caja de la página en el PDF, con la rotación aplicada.
- Los nombres son las series A y B (ISO 216), la serie C (ISO 269), ANSI de A a E y ARCH de A a E.
- Una página a menos de 2 mm de un tamaño con nombre toma ese nombre. Cualquier otra página se indica como personalizada, con el tamaño con nombre más cercano y la diferencia.

## En la estimación

El libro de la estimación tiene una hoja de cálculo {{ui:Tamaños de página}} con el recuento de cada tamaño.

:::note
Los valores en pulgadas de ANSI y ARCH se introdujeron a mano a partir de las tablas publicadas y no se han comparado con las normas impresas.
:::
