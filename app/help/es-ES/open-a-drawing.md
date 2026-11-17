---
title: Abrir un dibujo DWG o DXF
summary: Abra un archivo de dibujo como hojas (espacio modelo y cada presentación), empiece con la escala que indica el dibujo, muestre u oculte sus capas e incorpore dibujos vinculados.
keywords: dwg, dxf, cad, dibujo, abrir un dibujo, presentaciones, espacio modelo, espacio papel, hojas, unidades, insunits, escala de la ventana gráfica, xref, dibujo vinculado, capas, inmovilizadas, sin pdf, trazar, sin trazar
from: d8c3f504
---

TakeoffCraft abre un dibujo DWG o DXF igual que abre un PDF: no tiene que trazarlo antes a PDF. El recuento desde el propio dibujo es exacto, porque el dibujo sabe qué es cada objeto. Consulte [Contar desde un dibujo](topic:count-from-a-drawing).

## Abrir el dibujo

1. Elija {{ui:Abrir PDF}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}.
2. Seleccione el archivo DWG o DXF. Puede seleccionar varios, y también PDF junto con ellos.
3. Elija Abrir.

También puede soltar archivos de dibujo sobre TakeoffCraft, como los PDF. No se sube nada: el navegador lee el archivo en su ordenador.

TakeoffCraft lee DWG desde AutoCAD 2000 hasta 2018 y DXF ASCII desde R12 hasta 2018. Rechaza un DXF binario (guárdelo como ASCII, o como DWG) y cualquier archivo que no sea ninguno de los dos, e indica el motivo. Un archivo dañado se abre con lo que se pudo leer, y un mensaje lo indica; sus recuentos pueden estar incompletos.

## Hojas

- **Modelo** es el espacio modelo del dibujo.
- **Cada presentación** (pestaña de espacio papel) es una hoja, con el nombre de su pestaña, en el orden de las pestañas. Una presentación muestra el modelo a través de sus ventanas gráficas, tal como se traza.

El zoom, el desplazamiento, el ajuste a las líneas propias del dibujo, las marcas, las notas, {{ui:Calibrar}} y lo demás funcionan como en un PDF. Las hojas de un dibujo se guardan en la medición por el nombre del archivo y una huella de su contenido, como un PDF: si vuelve a abrir el mismo archivo, las marcas están en sus hojas.

## La escala

Una hoja empieza con la escala que indica el dibujo:

- **Una presentación** toma la escala de su ventana gráfica más grande. Una escala como 1/2" = 1'-0" se nombra como el preajuste que es; cualquier otra se muestra como "Desde la ventana gráfica del dibujo: 1" = 2.5'". Si una presentación tiene ventanas gráficas a otras escalas, la más grande fija la escala de la hoja: compruebe las demás con {{ui:Comprobar}}.
- **Modelo** toma las unidades del dibujo (pulgadas, milímetros, pies…) como escala: "Unidades del dibujo (pulgadas)".
- **Un dibujo sin unidades** (el dibujo nunca indicó si una unidad es una pulgada o un milímetro) no tiene escala: la hoja dice "Sin escala", y no se permite medir en ella, como en un PDF sin escala. Contar no necesita escala. Asígnele una con {{ui:Calibrar}}.

{{ui:Calibrar}}, {{ui:Comprobar}} y la lista de {{ui:Preajuste}} cambian una escala en cualquier momento, y tienen prioridad sobre la del dibujo. La lista de preajustes está desactivada en Modelo, que no tiene tamaño de papel.

## Capas

{{ui:Capas}} en la barra de hojas enumera las capas del dibujo, con cuántos objetos tiene cada una en esta hoja. Las capas que el archivo desactivó o inmovilizó empiezan ocultas. Desmarque una capa para ocultarla, o marque una oculta para mostrarla: la hoja se vuelve a dibujar, y lo oculto queda fuera de los recuentos y de los objetos ofrecidos a {{ui:Medir dibujo}}, salvo que pida contar también las capas ocultas. {{ui:Mostrar todas}} muestra todas las capas; {{ui:Volver a las capas del archivo}} deshace sus cambios. Las elecciones de capas pertenecen a esta sesión, no al archivo de la medición.

## Dibujos vinculados (xref)

Un dibujo que vincula otros dibujos los muestra donde están insertados. TakeoffCraft encuentra un dibujo vinculado entre los **archivos abiertos**, por su nombre de archivo: abra el dibujo principal y el vinculado juntos (o uno tras otro). Hasta entonces, la barra de estado indica cuántos dibujos vinculados no se encontraron y qué les falta por dibujar, y los recuentos lo indican.

## Límites

- Los objetos que TakeoffCraft no puede leer ni colocar (objetos proxy, clases desconocidas) se listan en la ventana de recuento por tipo; nunca se descartan sin avisar.
- Los dibujos muy grandes se dibujan en parte, y los recuentos se detienen en un límite, lo que se indica. Abra en su lugar un PDF trazado de ese dibujo.
- Un dibujo se dibuja en negro y en sus propios colores, oscurecidos para papel blanco. Las tablas de estilos de trazado y las asignaciones de plumas no se aplican.
