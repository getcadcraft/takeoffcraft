---
title: Carbono incorporado y tabla de precios 5D
summary: Carbono suma el carbono incorporado de la medición a partir de la cantidad de cada partida y de una tabla abierta de factores, y envía las tarifas de la medición a BimCraft como tabla de precios para costes 5D.
keywords: carbono, carbono incorporado, kgco2e, CO2, factores, A1-A3, transporte, desperdicio, 5D, tabla de precios, coste, bimcraft, DAP
from: f4bff3b8
---

{{ui:Carbono}} en la barra de herramientas suma el carbono incorporado de lo que ha medido, y convierte sus tarifas en una tabla de precios que el modelo del edificio puede usar. Es una estimación, no una evaluación.

## Carbono incorporado

La cantidad de cada partida, con su desperdicio, se multiplica por una fila de la tabla de factores. Una fila se empareja con las palabras del nombre de la partida ("losa de hormigón" encuentra una fila con la palabra clave hormigón). La tabla es la misma tabla abierta que usa BimCraft, así que un archivo que cargue aquí funciona allí. **Las filas que vienen con el programa son valores de partida: genéricos, no comprobados y no procedentes de ninguna base de datos.** El cuadro de diálogo lo indica junto a las cifras; sustitúyalas por su propia fuente antes de fiarse de una cifra.

1. Elija {{ui:Carbono}}. Las partidas contadas aparecen con sus kilogramos de CO2e; el total está arriba.
2. Marque {{ui:A4 transporte}} o {{ui:A5 residuos de obra}} para contar también esas etapas, en las filas que den una cifra para ellas. La etapa de producto siempre se cuenta.
3. Para usar otra fila en una partida, o ninguna, use la lista de su línea.
4. {{ui:Factores desde un archivo…}} carga una tabla de factores (JSON o CSV) hecha con su propia fuente; sus filas sustituyen a las filas de partida con el mismo id. {{ui:Factores (JSON)}} guarda la suya.

Un factor es por metro, metro cuadrado, metro cúbico, partida o kilogramo. Una línea medida en pies o en pies cuadrados se convierte. Un factor por kilogramo necesita un volumen (yardas cúbicas o metros) y la densidad de la fila. Una partida cuyo factor necesita una cantidad que no mide aparece bajo {{ui:Dejado fuera}} con el motivo; nunca se adivina. El total acumulado en la barra de estado muestra la misma cifra.

Sus filas de factores, sus elecciones y las etapas que cuenta se guardan en el archivo de la medición.

## Una tabla de precios para costes 5D

{{ui:Precios 5D (JSON)}} y {{ui:Precios 5D (CSV)}} guardan las tarifas de la medición como tabla de precios: una fila por partida valorada, con su tarifa de material y de mano de obra por unidad y su desperdicio. Cárguela en el panel de costes de BimCraft (Carbono incorporado y coste 5D) para valorar las tareas del modelo del edificio con las mismas tarifas que dieron la oferta. Las partidas medidas en una unidad que la tabla no tiene, y las partidas sin tarifa, se dejan fuera.

## Con su asistente

Si permite asistentes en {{ui:Ajustes}}, pueden leer el carbono (carbon_check). Cargar factores le corresponde a usted.

## Conviene saber

Nada se envía a ningún sitio. Las cifras solo valen lo que valgan los factores que cargue.
