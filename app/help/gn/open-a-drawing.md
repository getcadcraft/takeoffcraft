---
title: Abrir un plano DWG o DXF
summary: Abra un archivo de plano como hojas (espacio modelo y cada presentación), comience con la escala que indica el plano, muestre u oculte sus capas e incorpore planos vinculados.
keywords: dwg, dxf, cad, plano, abrir un plano, presentaciones, espacio modelo, espacio papel, hojas, unidades, insunits, escala de vista, xref, plano vinculado, capas, congeladas, sin pdf, trazar, sin trazar
from: d8c3f504
---

TakeoffCraft abre un plano DWG o DXF igual que un PDF: no hace falta trazarlo antes a PDF. Contar desde el propio plano es exacto, porque el plano conoce qué es cada objeto. Vea [Contar desde un plano](topic:count-from-a-drawing).

## Abrir el plano

1. Elija {{ui:Open plans}} en el grupo {{ui:File}}, o presione {{key:Mod+O}}.
2. Seleccione el archivo DWG o DXF. Puede seleccionar varios, y PDF junto con ellos.
3. Elija Abrir.

También puede arrastrar archivos de plano y soltarlos sobre TakeoffCraft, como con los PDF. Nada se sube: el navegador lee el archivo en su computadora.

TakeoffCraft lee DWG desde AutoCAD 2000 hasta 2018, y DXF ASCII desde R12 hasta 2018. Rechaza un DXF binario (guárdelo como ASCII, o como DWG) y un archivo que no es ninguno de los dos, e indica el motivo. Un archivo dañado se abre con lo que se pudo leer, y un aviso lo dice; sus conteos pueden quedar incompletos.

## Hojas

- **Modelo** es el espacio modelo del plano.
- **Cada presentación** (pestaña de espacio papel) es una hoja, con el nombre de su pestaña, en el orden de las pestañas. Una presentación muestra el modelo a través de sus viewports, tal como se traza.

El zoom, el desplazamiento, el ajuste a las líneas propias del plano, las marcas, las notas, {{ui:Calibrate}} y el resto funcionan como en un PDF. Las hojas de un plano se guardan en el cómputo por el nombre del archivo y una huella de su contenido, como un PDF: si vuelve a abrir el mismo archivo, las marcas están en sus hojas.

## La escala

Una hoja empieza con la escala que indica el plano:

- **Una presentación** toma la escala de su viewport más grande. Una escala como 1/2" = 1'-0" se nombra como la predeterminada que es; cualquier otra se muestra como "Del viewport del plano: 1" = 2.5'". Si una presentación tiene viewports a otras escalas, el más grande fija la escala de la hoja: verifique los demás con {{ui:Check}}.
- **Modelo** toma las unidades del plano (pulgadas, milímetros, pies…) como escala: "Unidades del plano (pulgadas)".
- **Un plano sin unidades** (el plano nunca indicó si una unidad es una pulgada o un milímetro) no tiene escala: la hoja dice "Sin escala", y medir en ella se rechaza, igual que en un PDF sin escala. Contar no necesita escala. Asígnele una con {{ui:Calibrate}}.

{{ui:Calibrate}}, {{ui:Check}} y la lista {{ui:Preset}} cambian una escala en cualquier momento, y tienen prioridad sobre la del plano. La lista predeterminada está desactivada en Modelo, que no tiene tamaño de papel.

## Capas

{{ui:Layers}} en la barra de hojas enumera las capas del plano con cuántos objetos tiene cada una en esta hoja. Las capas que el archivo apagó o congeló empiezan ocultas. Desmarque una capa para ocultarla, o marque una oculta para mostrarla: la hoja se vuelve a dibujar, y lo oculto queda fuera de los conteos y de los objetos que se ofrecen a {{ui:Measure drawing}}, salvo que pida contar también las capas ocultas. {{ui:Show all}} muestra todas las capas; {{ui:Back to the file's layers}} deshace sus cambios. Las selecciones de capas pertenecen a esta sesión, no al archivo del cómputo.

## Planos vinculados (xrefs)

Un plano que vincula otros planos los muestra donde están insertados. TakeoffCraft encuentra un plano vinculado entre los **archivos abiertos**, por su nombre de archivo: abra el plano principal y el plano vinculado juntos (o uno después del otro). Hasta entonces, la barra de estado dice cuántos planos vinculados no se encontraron, qué falta dibujar, y los conteos lo indican.

## Límites

- Los objetos que TakeoffCraft no puede leer o colocar (objetos proxy, clases desconocidas) se listan en la ventana de conteo por tipo; nunca se descartan sin aviso.
- Los planos muy grandes se dibujan por partes, y los conteos se detienen en un tope, lo que se indica. Abra en su lugar un trazado PDF de un plano así.
- Un plano se dibuja en negro y en sus propios colores, oscurecidos para papel blanco. Las tablas de estilo de trazado y las asignaciones de plumas no se aplican.
