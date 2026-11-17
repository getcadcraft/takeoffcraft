---
title: Movimiento de tierras y cotas puntuales
summary: Marque cotas puntuales en un plano de la parcela, páselas a CivilCraft para la superficie y el desmonte y terraplén, y calcule aquí mediciones sencillas de excavación.
keywords: movimiento de tierras, excavación, desmonte, terraplén, desmonte y terraplén, nivelación, cota puntual, cotas, topografía, superficie, triangulación, civilcraft, puntos, pnezd, zanja
from: a898e508
---

TakeoffCraft mide lo que está dibujado en un plano. El movimiento de tierras necesita una superficie del terreno, por eso se comparte con CivilCraft, que construye superficies a partir de puntos, las nivela y calcula el desmonte, el terraplén y el transporte de tierras.

## Excavación sencilla aquí

Para una huella excavada a una sola profundidad, basta con un elemento de superficie con una **profundidad**: el volumen es superficie × profundidad. El [paquete de oficios](topic:trade-packs) del contratista general tiene un elemento de excavación en masa (volumen en banco, volumen suelto y cargas de camión) y un elemento de zanja de servicios (excavación, lecho de asiento y relleno según longitud y profundidad).

## Cotas puntuales para CivilCraft

1. Configure la escala del plano de la parcela.
2. Cree un elemento de tipo **Recuento**, por ejemplo "Terreno existente", y haga clic en cada cota puntual del plano.
3. Seleccione una marca y escriba su {{ui:Cota}} en el panel Marca seleccionada: `102.5`, `102'-6"` o `31.24 m`. Las cotas negativas y cero son válidas.
4. Abra el menú {{ui:Exportar}} y elija {{ui:Cotas puntuales}}. Obtendrá un archivo de puntos (`.csv`) con Point, Northing, Easting, Elevation y Description, una fila por cada punto marcado del plano abierto.
5. Abra ese archivo en CivilCraft (véase [Importar puntos](app:civilcraft/import-points)). Construye la superficie a partir de los puntos ([Crear una superficie](app:civilcraft/build-surface)); desde ahí compara superficies y calcula el desmonte y el terraplén ([Volúmenes](app:civilcraft/volumes)).

Las coordenadas norte y este son las propias del plano, medidas en pies desde la esquina de la página a su escala: las distancias y los volúmenes entre los puntos son correctos, pero no son las coordenadas topográficas de su parcela. Cámbielas a las coordenadas de la parcela en CivilCraft cuando lo necesite.

:::note
Los puntos de planos distintos no comparten coordenadas, así que la exportación solo toma el plano abierto. Las cotas se guardan con la medición y se conservan al copiar y pegar.
:::

## Desmonte y terraplén desde CivilCraft

El movimiento de tierras de CivilCraft llega como dos elementos que puede valorar:

1. En CivilCraft, nivele sus plataformas y corredores y elija {{ui:Enviar a TakeoffCraft}} en **Movimiento de tierras** ([Volúmenes de movimiento de tierras](app:civilcraft/volumes)). Guarda un archivo de cantidades (`.quantities.json`).
2. En TakeoffCraft, ábralo con {{ui:Abrir medición}}, o suéltelo sobre la aplicación. Su medición sigue abierta: el archivo añade **Earthwork: cut** y **Earthwork: fill** como [cantidades introducidas manualmente](topic:create-items#typed-quantities-no-drawing) en yardas cúbicas (CY) para un proyecto en pies, o en metros cúbicos (m³) para un proyecto en metros. Es un solo paso: {{key:Mod+Z}} lo deshace.
3. Renómbrelos, y ajuste el desperdicio, los precios y los ensamblajes como desee.

Cuando cambie el diseño, envíe de nuevo desde CivilCraft y abra el archivo nuevo: los mismos dos elementos reciben las nuevas cantidades. Sus nombres, precios, desperdicio y ensamblajes se mantienen tal como los haya dejado. Si cambió la unidad del proyecto, la barra de estado lo indica: revise los precios. Un archivo de otro proyecto de CivilCraft añade sus propios dos elementos.

Las cantidades son volúmenes en banco, tal como los midió CivilCraft (método de la malla): sin merma ni esponjamiento. Añádalos como desperdicio, o con una fórmula como `Q * 1.25` para obtener el volumen suelto. El editor de elementos muestra de dónde viene cada uno y cuándo; la columna de notas del presupuesto también lo indica.

:::note
El archivo de cantidades es JSON sin formato (`"format": "cadcraft-quantities"`), así que un script u otro programa también puede generar uno: un nombre de aplicación, un proyecto y elementos con una clave, un nombre, una unidad y una cantidad.
:::
