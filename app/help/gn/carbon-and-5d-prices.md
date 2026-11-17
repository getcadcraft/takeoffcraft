---
title: Carbono incorporado y una tabla de precios 5D
summary: Carbono suma el carbono incorporado del cómputo a partir de la cantidad de cada ítem y de una tabla abierta de factores, y envía las tasas del cómputo a BimCraft como tabla de precios para costos 5D.
keywords: carbono, carbono incorporado, kgCO2e, CO2, factores, A1-A3, transporte, desperdicio, 5D, tabla de precios, costo, BimCraft, DAP
from: f4bff3b8
---

{{ui:Carbono}} en la barra de herramientas suma el carbono incorporado de lo que medisteis y convierte tus tasas en una tabla de precios que el modelo del edificio puede usar. Es una estimación, no una evaluación.

## Carbono incorporado

La cantidad de cada ítem, con su desperdicio, se multiplica por una fila de la tabla de factores. Una fila se empareja con las palabras del nombre del ítem ("losa de hormigón" encuentra una fila con la palabra clave hormigón). La tabla es la misma tabla abierta que usa BimCraft, así que un archivo que cargues aquí sirve allí. **Las filas que vienen con el programa son valores de inicio: genéricos, sin verificar y no provienen de ninguna base de datos.** El cuadro de diálogo lo indica junto a las cifras; reemplazalas por tu propia fuente antes de confiar en un número.

1. Elegí {{ui:Carbono}}. Los ítems contados se listan con sus kilogramos de CO2e; el total está arriba.
2. Marcá {{ui:A4 transporte}} o {{ui:A5 desperdicio de obra}} para contar también esas etapas, en las filas que dan una cifra para ellas. La etapa de producto siempre se cuenta.
3. Para usar otra fila en un ítem, o ninguna, usá la lista de su línea.
4. {{ui:Factores desde un archivo…}} carga una tabla de factores (JSON o CSV) hecha con tu propia fuente; sus filas reemplazan las filas de inicio con el mismo id. {{ui:Factores (JSON)}} guarda la tuya.

Un factor es por metro, metro cuadrado, metro cúbico, ítem o kilogramo. Una línea medida en pies o pies cuadrados se convierte. Un factor por kilogramo necesita un volumen (yardas cúbicas o metros) y la densidad de la fila. Un ítem cuyo factor necesita una cantidad que no mide aparece en {{ui:Dejado afuera}} con el motivo, nunca se adivina. El total corriente en la barra de estado muestra la misma cifra.

Tus filas de factores, tus elecciones y las etapas que contás se guardan en el archivo del cómputo.

## Una tabla de precios para costos 5D

{{ui:Precios 5D (JSON)}} y {{ui:Precios 5D (CSV)}} guardan las tasas del cómputo como tabla de precios: una fila por ítem tarifado, con su tasa de material y de mano de obra por unidad y su desperdicio. Cárgala en el panel de costos de BimCraft (Carbono incorporado y costo 5D) para valorar las tareas del modelo del edificio con las mismas tasas que armaron la oferta. Los ítems medidos en una unidad que la tabla no tiene, y los ítems sin tasa, se dejan afuera.

## Con tu asistente

Si permitís asistentes en {{ui:Configuración}}, pueden leer el carbono (carbon_check). Cargar factores lo hacés vos.

## Para tener en cuenta

Nada se envía a ningún lado. Las cifras son tan buenas como los factores que cargues.
