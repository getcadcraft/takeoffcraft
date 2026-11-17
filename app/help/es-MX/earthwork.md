---
title: Movimiento de tierras y cotas de nivel
summary: Marque cotas de nivel en un plano de sitio, entréguelas a CivilCraft para la superficie y el corte y relleno, y obtenga aquí cantidades sencillas de excavación.
keywords: movimiento de tierras, excavación, corte, relleno, corte y relleno, nivelación, cota de nivel, elevaciones, topografía, superficie, triangulación, civilcraft, puntos, pnezd, zanja
from: a898e508
---

TakeoffCraft mide lo que está dibujado en una hoja. El movimiento de tierras necesita una superficie del terreno, por lo que se comparte con CivilCraft, que construye superficies a partir de puntos, las nivela y calcula el corte, el relleno y el acarreo.

## Excavación simple aquí

Para una huella excavada a una sola profundidad, basta con una partida de área con **profundidad**: el volumen es área × profundidad. El [paquete de oficio](topic:trade-packs) del contratista general incluye una partida de excavación a granel (volumen en banco, volumen suelto y cargas de camión) y una partida de zanja de servicios (excavación, cama y relleno por longitud y profundidad).

## Cotas de nivel para CivilCraft

1. Defina la escala de la hoja del sitio.
2. Cree una partida de **Conteo**, por ejemplo "Terreno existente", y haga clic en cada cota de nivel de la hoja.
3. Seleccione una marca y escriba su {{ui:Elevación}} en el panel de la marca seleccionada: `102.5`, `102'-6"` o `31.24 m`. Las elevaciones negativas y cero son válidas.
4. Abra el menú {{ui:Exportar}} y elija {{ui:Cotas de nivel}}. Obtiene un archivo de puntos (`.csv`) con Point, Northing, Easting, Elevation y Description, una fila por cada punto marcado de la hoja abierta.
5. Abra ese archivo en CivilCraft (vea [Importar puntos](app:civilcraft/import-points)). CivilCraft construye la superficie a partir de los puntos ([Crear una superficie](app:civilcraft/build-surface)); desde ahí compara superficies y calcula el corte y el relleno ([Volúmenes](app:civilcraft/volumes)).

Northing y Easting son las coordenadas propias de la hoja, en pies, medidas desde la esquina de la página según su escala: las distancias y los volúmenes entre los puntos son correctos, pero no son las coordenadas de levantamiento de su sitio. Cuando lo necesite, traslade los puntos a las coordenadas del sitio en CivilCraft.

:::note
Los puntos de hojas distintas no comparten coordenadas, por lo que la exportación toma solo la hoja abierta. Las elevaciones se guardan con la cuantificación y se conservan al copiar y pegar.
:::

## Corte y relleno desde CivilCraft

El movimiento de tierras de CivilCraft regresa como dos partidas a las que puede asignar precio:

1. En CivilCraft, nivele sus plataformas y corredores, y luego elija {{ui:Enviar a TakeoffCraft}} en **Movimiento de tierras** ([Volúmenes de movimiento de tierras](app:civilcraft/volumes)). Se guarda un archivo de cantidades (`.quantities.json`).
2. En TakeoffCraft, ábralo con {{ui:Abrir cuantificación}}, o suéltelo sobre la app. Su cuantificación sigue abierta: el archivo agrega **Movimiento de tierras: corte** y **Movimiento de tierras: relleno** como [cantidades escritas](topic:create-items#typed-quantities-no-drawing) en yardas cúbicas (CY) para un proyecto en pies, o en metros cúbicos (m³) para un proyecto en metros. Es un solo paso: {{key:Mod+Z}} lo deshace.
3. Cámbieles el nombre, y defina el desperdicio, las tarifas y los conjuntos como desee.

Cuando cambie el diseño, envíe de nuevo desde CivilCraft y abra el archivo nuevo: las mismas dos partidas recibirán las nuevas cantidades. Sus nombres, tarifas, desperdicio y conjuntos se conservan como los haya definido. Si cambió la unidad del proyecto, la barra de estado lo indica: revise las tarifas. Un archivo de otro proyecto de CivilCraft agrega sus propias dos partidas.

Las cantidades son volúmenes en banco, tal como los midió CivilCraft (método de cuadrícula): sin contracción ni expansión. Agréguelas como desperdicio, o con una fórmula como `Q * 1.25` para el volumen suelto. El editor de partidas muestra de dónde vino cada una y cuándo; la columna de notas del presupuesto también lo indica.

:::note
El archivo de cantidades es JSON simple (`"format": "cadcraft-quantities"`), así que un script u otro programa también puede escribir uno: un nombre de app, un proyecto y partidas con una clave, un nombre, una unidad y una cantidad.
:::
