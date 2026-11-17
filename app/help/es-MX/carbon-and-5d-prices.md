---
title: Carbono incorporado y una tabla de precios 5D
summary: Carbono suma el carbono incorporado de la cuantificación a partir de la cantidad de cada partida y de una tabla abierta de factores, y envía las tarifas de la cuantificación a BimCraft como tabla de precios para costos 5D.
keywords: carbono, carbono incorporado, kgCO2e, CO2, factores, A1-A3, transporte, desperdicio, 5D, tabla de precios, costo, BimCraft, DAP
from: f4bff3b8
---

{{ui:Carbono}} en la barra de herramientas suma el carbono incorporado de lo que ha medido, y convierte sus tarifas en una tabla de precios que el modelo de edificio puede usar. Es una estimación, no una evaluación.

## Carbono incorporado

La cantidad de cada partida, con su desperdicio, se multiplica por una fila de la tabla de factores. Una fila se empareja con las palabras del nombre de la partida ("losa de concreto" encuentra una fila con la palabra clave concreto). La tabla es la misma tabla abierta que usa BimCraft, así que un archivo que cargue aquí funciona allá. **Las filas que vienen con el programa son valores de inicio: genéricos, no verificados y no provienen de ninguna base de datos.** El cuadro de diálogo lo indica junto a las cifras; reemplácelas con su propia fuente antes de confiar en un número.

1. Elija {{ui:Carbono}}. Las partidas contadas se listan con sus kilogramos de CO2e; el total está arriba.
2. Marque {{ui:A4 transporte}} o {{ui:A5 desperdicio en obra}} para contar también esas etapas, para las filas que den una cifra para ellas. La etapa de producto siempre se cuenta.
3. Para usar otra fila en una partida, o ninguna, use la lista de su línea.
4. {{ui:Factores desde un archivo…}} carga una tabla de factores (JSON o CSV) hecha con su propia fuente; sus filas reemplazan las filas de inicio con el mismo id. {{ui:Factores (JSON)}} guarda la suya.

Un factor es por metro, metro cuadrado, metro cúbico, partida o kilogramo. Una línea medida en pies o pies cuadrados se convierte. Un factor por kilogramo necesita un volumen (yardas cúbicas o metros) y la densidad de la fila. Una partida cuyo factor necesita una cantidad que no mide aparece en {{ui:Deja fuera}} con la razón; nunca se adivina. El total acumulado en la barra de estado muestra la misma cifra.

Sus filas de factores, sus elecciones y las etapas que cuenta se guardan en el archivo de la cuantificación.

## Una tabla de precios para costos 5D

{{ui:Precios 5D (JSON)}} y {{ui:Precios 5D (CSV)}} guardan las tarifas de la cuantificación como tabla de precios: una fila por cada partida presupuestada, con su tarifa de material y de mano de obra por unidad y su desperdicio. Cárguela en el panel de costos de BimCraft (Carbono incorporado y costo 5D) para presupuestar las tareas del modelo de edificio con las mismas tarifas que armaron la propuesta. Las partidas medidas en una unidad que la tabla no tiene, y las partidas sin tarifa, se dejan fuera.

## Con su asistente

Si permite asistentes en Configuración, pueden leer el carbono (carbon_check). Cargar factores le corresponde a usted.

## Bueno saber

Nada se envía a ningún lado. Las cifras valen tanto como los factores que cargue.
