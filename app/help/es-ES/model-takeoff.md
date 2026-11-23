---
title: Tomar cantidades de un modelo de edificio
summary: Abra el modelo IFC del arquitecto, véalo en 3D, elija muros, forjados, puertas y el resto por tipo, material, capa o tamaño, y traiga sus recuentos, longitudes, áreas y volúmenes a la cuantificación. Una copia más reciente del modelo actualiza las mismas cantidades.
keywords: modelo, mediciones desde modelo, vista 3D, hacer clic en una pieza, buscar la fila, material, capa, capas de muro, pladur, aislamiento, tamaños de puerta, tamaños de ventana, tabla de huecos, csv, 3d, bim, ifc, rvt, modelo de edificio, cantidades, muros, forjados, puertas, ventanas, pilares, habitaciones, por tipo, por planta, actualizar, modelo más reciente, anteproyecto
from: 8c4c12c9
---

No tiene que esperar al siguiente juego de planos. Cuando el arquitecto envíe el modelo del edificio, ábralo aquí y tome las cantidades directamente de él. El modelo se lee en su ordenador; no se envía nada a ningún sitio.

## Pasos

1. Elija {{ui:Modelo}} en la barra de herramientas y seleccione el archivo `.ifc` del modelo, o ábralo con {{ui:Abrir PDF}} como cualquier otro archivo.
2. {{ui:Mediciones desde modelo}} se abre con una fila por categoría y tipo: muros por tipo de muro, forjados por tipo de forjado, puertas por tipo de puerta, y así sucesivamente. Cada fila muestra su recuento y en qué se mide esa categoría.
3. Configure {{ui:Agrupar por}} en {{ui:Categoría}} para un total rápido, o en {{ui:Categoría, tipo y planta}} para desglosar cada tipo por planta.
4. Desmarque las filas que no quiera. {{ui:Buscar}} reduce la lista. Desmarcar una fila también oculta sus piezas en la imagen 3D.
5. Dé al modelo un {{ui:Nombre del modelo}} que mantendrá durante toda la obra, por ejemplo el nombre del proyecto.
6. Elija {{ui:Añadir a las mediciones}}. Cada cantidad pasa a ser una cantidad con tipo en la lista de elementos. Asígnele nombre, precio y ensamblajes como a cualquier otro elemento.

## Ver el modelo en 3D

{{ui:Mostrar el modelo en 3D}} dibuja el modelo encima de la tabla, con un color para cada fila (el cuadrado de color junto al nombre de la fila). Arrastre para girarlo, mantenga pulsado {{key:Shift}} y arrastre para desplazarlo, use la rueda para hacer zoom, y elija {{ui:Ajustar}} o {{ui:Restablecer}} para volver.

- **Haga clic en una pieza** de la imagen y su fila se selecciona en la tabla, con todas las piezas de esa fila iluminadas y el resto en tono pálido. Haga clic de nuevo en la misma pieza y, si está en varias filas (un muro en sus capas), se selecciona la fila siguiente.
- **Haga clic en una fila** de la tabla para iluminar sus piezas. Vuelva a hacer clic, o haga clic en un espacio vacío de la imagen, para quitar la selección.
- Las habitaciones no se dibujan, porque el volumen de una habitación taparía el edificio.
- Un modelo muy grande conserva solo una caja para algunas piezas, para que quepa en memoria; el panel indica cuántas. Los números no cambian.

Si este ordenador no puede dibujar en 3D, la tabla funciona como antes.

## Agrupar por material, capa o tamaño

{{ui:Agrupar por}} tiene tres opciones más:

- {{ui:Categoría y material}}: un muro, forjado o cubierta formado por capas da a cada material de capa su propia fila, de modo que el pladur, los montantes y el aislamiento se puedan valorar por separado. Una parte del edificio con un solo material recibe la fila de ese material, y una parte sin ninguno se guarda en una fila llamada «Sin material con nombre».
- {{ui:Categoría y capa}}: lo mismo, con el espesor de la capa en la fila («Aislamiento, 100 mm»).
- {{ui:Categoría, tipo y tamaño de puerta o ventana}}: las puertas y ventanas se separan por su ancho y alto (por ejemplo 3'-0" × 6'-8" o 914 × 2.032 mm).

Para una capa, el área es la cara propia del muro (o el área en planta o de superficie del forjado o la cubierta), y el volumen es esa área por el espesor de la capa. La nota de la fila indica cuántos números proceden de una capa. Las capas de un muro suman el volumen que el modelo indica para él.

## Guardar las filas o los huecos como CSV

{{ui:Guardar filas como CSV}} guarda las filas que ha marcado, con las unidades en cada encabezado, para una hoja de cálculo. {{ui:Guardar tabla de huecos como CSV}} (solo cuando el modelo tiene puertas o ventanas) guarda cada puerta y ventana por tipo, planta y tamaño con su recuento.

## Qué se mide

| Categoría | Cantidades |
|---|---|
| Muros | recuento, longitud, área de muro (una cara, descontando los huecos), volumen |
| Forjados, losas, techos y otros revestimientos | recuento, área en planta, volumen |
| Cubiertas | recuento, área en planta, superficie de cubierta, volumen |
| Zapatas | recuento, área en planta, volumen |
| Pilares, vigas y elementos | recuento, longitud a lo largo del elemento, volumen |
| Barandillas, tuberías, conductos y canalizaciones de cables | recuento, longitud |
| Escaleras | recuento, volumen |
| Habitaciones | recuento, superficie, volumen |
| Puertas, ventanas y todo lo demás | recuento |

Cuando el autor del modelo indica una cantidad en el archivo, se usa ese número. En caso contrario, el número se mide a partir de la forma del elemento. Cada cantidad guarda una nota que indica cuál de los dos casos es y cuántos elementos dieron un número.

:::note
La longitud de un muro medida a partir de su forma va de extremo a extremo, por lo que dos muros que se solapan en una esquina incluyen ambos la esquina. Un volumen necesita una forma cerrada: un elemento cuya forma no es cerrada se cuenta pero no da volumen. Un elemento de muro curvo o con esquinas se mide como la mitad de todas sus caras verticales, y su nota lo indica.
:::

## Cuando llega un modelo más reciente

Abra el archivo más reciente y escriba el mismo {{ui:Nombre del modelo}}. Antes de añadir nada, el panel indica cuántas cantidades son nuevas, cuántas han cambiado y de qué valor a qué valor, y cuáles de la copia anterior ya no están en el modelo. Elija {{ui:Añadir a las mediciones}}: las cantidades cambiadas toman sus nuevos números, y sus nombres, tarifas, desperdicio y ensamblajes se mantienen. Las cantidades que han desaparecido del modelo conservan sus números antiguos; elimínelas usted mismo si el proyecto las ha quitado.

Los nombres de tipo y de planta son la forma en que se reconoce una cantidad. Si el arquitecto renombra un tipo de muro, llega como una cantidad nueva y la antigua aparece como desaparecida.

## Archivos que se leen

Archivos IFC (IFC2x3, IFC4 e IFC4.3). Un archivo IFC con carreteras, vías o puentes sigue trayendo directamente sus cantidades de infraestructura, como antes.

TakeoffCraft no lee archivos `.rvt` en esta versión. Si el arquitecto trabaja en Revit, pídale una exportación IFC del modelo (Archivo, Exportar, IFC) y ábrala.

Un modelo puede traer hasta 500 cantidades a la vez. Si hay más, desmarque filas o agrupe por categoría.
