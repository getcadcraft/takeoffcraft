---
title: Tomar cantidades de un modelo de edificio
summary: Abra el modelo IFC del arquitecto, véalo en 3D, elija muros, losas, puertas y el resto por tipo, material, capa o tamaño, y pase sus conteos, longitudes, áreas y volúmenes a la cuantificación. Una copia más nueva del modelo actualiza las mismas cantidades.
keywords: modelo, cuantificación del modelo, vista 3D, hacer clic en una pieza, buscar la fila, material, capa, capas de muro, tablaroca, aislamiento, tamaños de puerta, tamaños de ventana, cuadro de vanos, csv, 3d, bim, ifc, rvt, modelo de edificio, cantidades, muros, losas, puertas, ventanas, columnas, espacios, por tipo, por nivel, actualizar, modelo más reciente, desarrollo del diseño
from: 8c4c12c9
---

No tiene que esperar al siguiente juego de planos. Cuando el arquitecto envíe el modelo del edificio, ábralo aquí y tome las cantidades directamente de él. El modelo se lee en su computadora; no se envía nada a ningún lugar.

## Pasos

1. Elija {{ui:Modelo}} en la barra de herramientas y seleccione el archivo `.ifc` del modelo, o ábralo con {{ui:Abrir planos}} como cualquier otro archivo.
2. {{ui:Cuantificación del modelo}} se abre con una fila por categoría y tipo: muros por tipo de muro, losas por tipo de losa, puertas por tipo de puerta, y así sucesivamente. Cada fila muestra su conteo y en qué unidad se mide esa categoría.
3. Ponga {{ui:Agrupar por}} en {{ui:Categoría}} para un total rápido, o en {{ui:Categoría, tipo y nivel}} para separar cada tipo por piso.
4. Desmarque las filas que no quiera. {{ui:Buscar}} reduce la lista. Desmarcar una fila también oculta sus piezas en la imagen 3D.
5. Dé al modelo un {{ui:Nombre del modelo}} que conservará durante todo el trabajo, por ejemplo el nombre del proyecto.
6. Elija {{ui:Agregar a la cuantificación}}. Cada cantidad se convierte en una cantidad escrita en la lista de partidas. Asígnele nombre, precio y conjuntos como a cualquier otra partida.

## Ver el modelo en 3D

{{ui:Mostrar el modelo en 3D}} dibuja el modelo encima de la tabla, con un color por cada fila (el cuadro de color junto al nombre de la fila). Arrastre para girarlo, mantenga presionada {{key:Shift}} y arrastre para desplazarlo, use la rueda para hacer zoom, y elija {{ui:Ajustar}} o {{ui:Restablecer}} para volver.

- **Haga clic en una pieza** de la imagen y su fila se selecciona en la tabla, con todas las piezas de esa fila iluminadas y el resto pálido. Haga clic de nuevo en la misma pieza y, si está en varias filas (un muro en sus capas), se selecciona la siguiente fila.
- **Haga clic en una fila** de la tabla para iluminar sus piezas. Haga clic otra vez, o haga clic en un espacio vacío de la imagen, para quitar la selección.
- Los espacios no se dibujan, porque el volumen de un espacio taparía el edificio.
- Un modelo muy grande conserva solo una caja para algunas piezas, para que quepa en memoria; el panel dice cuántas. Los números no cambian.

Si esta computadora no puede dibujar en 3D, la tabla funciona como antes.

## Agrupar por material, capa o tamaño

{{ui:Agrupar por}} tiene tres opciones más:

- {{ui:Categoría y material (capas del muro por separado)}}: un muro, losa o techo formado por capas da a cada material de capa su propia fila, para que el tablaroca, los postes y el aislamiento puedan tener precios por separado. Una parte del edificio con un solo material toma la fila de ese material, y una parte sin material se guarda en una fila llamada "Sin material con nombre".
- {{ui:Categoría y capa (con su espesor)}}: lo mismo, con el espesor de la capa en la fila ("Aislamiento, 100 mm").
- {{ui:Categoría, tipo y tamaño de puerta o ventana}}: puertas y ventanas se separan por su ancho y alto (por ejemplo 3'-0" × 6'-8" o 914 × 2,032 mm).

Para una capa, el área es la cara propia del muro (o el área en planta o de superficie de la losa o del techo) y el volumen es esa área por el espesor de la capa. La nota de la fila dice cuántos números salieron de una capa. Las capas de un mismo muro suman el volumen que el modelo declara para él.

## Guardar las filas o los vanos como CSV

{{ui:Guardar filas como CSV}} guarda las filas que marcó, con las unidades en cada encabezado, para una hoja de cálculo. {{ui:Guardar cuadro de vanos como CSV}} (solo cuando el modelo tiene puertas o ventanas) guarda cada puerta y ventana por tipo, nivel y tamaño, con su conteo.

## Qué se mide

| Categoría | Cantidades |
|---|---|
| Muros | conteo, longitud, área de muro (una cara, con los vanos descontados), volumen |
| Pisos, losas, plafones y otros recubrimientos | conteo, área en planta, volumen |
| Techos | conteo, área en planta, superficie del techo, volumen |
| Cimentaciones | conteo, área en planta, volumen |
| Columnas, vigas y miembros | conteo, longitud a lo largo del miembro, volumen |
| Barandales, tuberías, ductos y tendidos de cable | conteo, longitud |
| Escaleras | conteo, volumen |
| Espacios | conteo, área de piso, volumen |
| Puertas, ventanas y todo lo demás | conteo |

Cuando el autor del modelo declaró una cantidad en el archivo, se usa ese número. Si no, el número se mide a partir de la forma del elemento. Cada cantidad guarda una nota que dice cuál de los dos casos fue, y cuántos elementos dieron un número.

:::note
La longitud de un muro medida desde su forma va de extremo a extremo, así que dos muros que se cruzan en una esquina incluyen ambos la esquina. Un volumen necesita una forma cerrada: un elemento cuya forma no está cerrada se cuenta y no da volumen. Un elemento de muro curvo o en esquina se mide como la mitad de todas sus caras verticales, y su nota lo indica.
:::

## Cuando llega un modelo más nuevo

Abra el archivo más nuevo y escriba el mismo {{ui:Nombre del modelo}}. Antes de agregar nada, el panel dice cuántas cantidades son nuevas, cuántas cambiaron y de qué valor a qué valor, y cuáles cantidades de la copia anterior ya no están en el modelo. Elija {{ui:Agregar a la cuantificación}}: las cantidades cambiadas toman sus nuevos números, y sus nombres, precios, desperdicio y conjuntos se conservan. Las cantidades que ya no están en el modelo conservan sus números anteriores; quítelas usted mismo si el diseño las eliminó.

Los nombres de tipo y de nivel son la forma en que se reconoce una cantidad. Si el arquitecto cambia el nombre de un tipo de muro, llega como una cantidad nueva y la anterior aparece como eliminada.

## Archivos que se leen

Archivos IFC (IFC2x3, IFC4 e IFC4.3). Un archivo IFC con carreteras, vías o puentes sigue trayendo sus cantidades de infraestructura directamente, como antes.

TakeoffCraft no lee archivos `.rvt` en esta versión. Si el arquitecto trabaja en Revit, pida una exportación IFC del modelo (Archivo, Exportar, IFC) y abra esa.

Un modelo puede traer hasta 500 cantidades a la vez. Si hay más, desmarque filas o agrupe por categoría.
