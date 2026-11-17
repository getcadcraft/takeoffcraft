---
title: Movimiento de suelo ha cotas de elevación
summary: Marcá cotas de elevación en un plano del sitio, enviálas a CivilCraft para la superficie y el corte y relleno, ha acá ojeporu cómputos simples de excavación.
keywords: movimiento de suelo, excavación, corte, relleno, corte y relleno, nivelación, cota de elevación, elevaciones, topografía, superficie, triangulación, civilcraft, puntos, pnezd, zanja
from: a898e508
---

TakeoffCraft ohechauka loque ojedibuja hoja-pe. Movimiento de suelo ohechakuaa superficie de terreno, upévare ojeporu CivilCraft-ndive, oguereko herramienta ojapóva superficie puntos-gui, ojenivelápa ha ohechakuaa corte, relleno ha traslado.

## Excavación simple ko'ápe

Huella ojekavaha hondura ún-pe, área ítem **profundidad**-ndive ha'e iporã: volumen ha'e área × profundidad. El [trade pack](topic:trade-packs) del contratista general oguereko ítem de excavación en masa (volumen en banco, volumen suelto ha cantidad de camiones) ha ítem de zanja de servicio (excavación, lecho ha relleno, longitud ha profundidad rehe).

## Cotas de elevación para CivilCraft

1. Omoĩ escala de la hoja del sitio.
2. Hacé un ítem **Cuenta**, por ejemplo "Terreno existente", ha pyhy cada cota de elevación hoja-pe.
3. Seleccioná una marca ha escribí su {{ui:Elevation}} en el panel de marca seleccionada: `102.5`, `102'-6"` o `31.24 m`. Las elevaciones negativas ha cero oñemoĩ porã.
4. Abrí el menú {{ui:Export}} ha elegí {{ui:Spot elevations}}. Ojehupyty archivo de puntos (`.csv`) con Point, Northing, Easting, Elevation ha Description, una fila por punto marcado de la hoja abierta.
5. Abrí ese archivo en CivilCraft (ver [Importar puntos](app:civilcraft/import-points)). Ojapo superficie puntos rehe ([Construir una superficie](app:civilcraft/build-surface)); upégui ojehechakuaa superficies ha omombe corte y relleno ([Volúmenes](app:civilcraft/volumes)).

Northing ha easting ha'e coordenadas propias de la hoja en pies, medidas desde la esquina de la página según su escala: distancias ha volúmenes entre puntos ha'e ojeguerojera, pero ndaha'éi coordenadas de relevamiento del sitio. Cambialas a coordenadas del sitio en CivilCraft cuando hag̃ua.

:::note
Puntos de hojas diferentes ndoguereko coordenadas comunes, upévare la exportación oguerohory hoja abierta añoite. Las elevaciones oñeñongatu cómputo-ndive ha oguejy copiar ha pegar rupi.
:::

## Corte y relleno desde CivilCraft

El movimiento de suelo de CivilCraft ohupytýta ita ítem ojapóva precio:

1. CivilCraft-pe, nivelá tus plataformas ha corredores, upéi elegí {{ui:Send to TakeoffCraft}} debajo de **Movimiento de suelo** ([Volúmenes de movimiento de suelo](app:civilcraft/volumes)). Ojapo archivo de cantidades (`.quantities.json`).
2. TakeoffCraft-pe, abrilo con {{ui:Open takeoff}}, térã sóltalo sobre la app. Tu cómputo sigue abierto: el archivo omoŷ **Movimiento de suelo: corte** ha **Movimiento de suelo: relleno** como [cantidades tipificadas](topic:create-items#typed-quantities-no-drawing) en yardas cúbicas (CY) para proyecto en pies, térã metros cúbicos (m³) para proyecto en metros. Ha'e un solo paso: {{key:Mod+Z}} oguejy.
3. Cambiá sus nombres, omoĩ desperdicio, tasas ha ensamblajes como quieras.

Cuando cambia el diseño, enviá de nuevo desde CivilCraft ha abrí el archivo nuevo: los mismos dos ítems reciben las cantidades nuevas. Sus nombres, tasas, desperdicio ha ensamblajes sigue como los dejaste. Si cambió la unidad del proyecto, la barra de estado lo avisa: revisá las tasas. Un archivo de otro proyecto de CivilCraft agrega sus propios dos ítems.

Las cantidades son volúmenes en banco, como los midió CivilCraft (método de grilla): sin contracción ni expansión. Agregalas como desperdicio, térã con una fórmula como `Q * 1.25` para volumen suelto. El editor de ítems muestra de dónde vino cada una y cuándo; la columna de notas del presupuesto también lo dice.

:::note
El archivo de cantidades es JSON simple (`"format": "cadcraft-quantities"`), así que un script u otro programa también puede escribir uno: nombre de la app, un proyecto, ha ítems con clave, nombre, unidad y cantidad.
:::
