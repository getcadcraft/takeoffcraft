---
title: Comprobar el stock y los plazos de entrega del proveedor
summary: Añada el listado de stock de un proveedor (CSV u hoja de cálculo) y TakeoffCraft compara con él lo que necesita la cuantificación, con el desperdicio: si hay suficiente en stock y cuánto dura la espera. Las faltas y las esperas largas aparecen en el panel de Problemas.
keywords: proveedor, stock, en stock, plazo de entrega, disponibilidad, falta, pedido pendiente, lista de pedido, csv, sku, vendedor, materiales, suministro, problemas
from: f11160fb
---

{{ui:Suministro}} en la barra de herramientas (el camión) compara lo que necesita su cuantificación con el listado de stock de un proveedor. Las filas del proveedor que importan se guardan en el propio archivo de la cuantificación. No se envía nada a ningún sitio y no se consulta a ningún proveedor: usted aporta el archivo.

## El archivo

Un archivo CSV con una fila de encabezados. Necesita una columna de nombre o SKU y una columna de stock o de plazo de entrega. Se reconocen estos encabezados (en cualquier orden y sin distinguir mayúsculas): Item, Name, Description o Product; SKU, Part o Item #; In stock, On hand, Available o Quantity; Lead time o Delivery days; Unit o UOM; Price o Cost; Supplier o Vendor.

- El stock puede ser un número (1,200), «In stock» o «Out of stock».
- Un plazo de entrega puede ser «5 days», «2 weeks», «2-3 weeks» (se usa el más largo), «3 months», «same day» o «backorder». Un número simple está en la unidad del encabezado (días, salvo que el encabezado indique semanas o meses).
- No se leen los archivos de Excel: guarde antes la hoja como CSV.

## Comprobar la cuantificación

1. Elija {{ui:Suministro}}, después {{ui:Añadir un archivo de proveedor…}} y seleccione el CSV. Puede añadir más de uno: hasta cinco archivos, con 2,000 filas en total como máximo, conservando primero las que coinciden con sus partidas.
2. Cada partida, segunda condición y parte de ensamblaje con cantidad se asocia a una fila por nombre, o por SKU incluido en su nombre. Si no hay coincidencia exacta, se usa un nombre parecido (uno contenido en el otro), y se indica así.
3. En {{ui:Lo que necesita la cuantificación}}, las faltas aparecen primero: «Faltan 120 EA», «Plazo de entrega: 21 días», «En pedido pendiente», «La unidad difiere», «Sin cifra de stock» o «En stock». La necesidad incluye el desperdicio. Una unidad del proveedor distinta de la del presupuesto (una tonelada frente a un pie) se notifica y nunca se compara. Cada fila tiene {{ui:Seleccionar la partida}}, que lleva a la partida.
4. Indique {{ui:Espera máxima deseada (días)}} (por defecto, 14). Una partida que no está en stock y espera más que eso se marca, y el resumen indica la espera más larga que importa.
5. {{ui:Lista de pedido (CSV)}} descarga las partidas en falta con la cantidad que falta, el proveedor y el plazo de entrega. {{ui:Excluir}} quita una necesidad de la comprobación (es un paso deshacible).

## Archivos de hoja de cálculo y la biblioteca de precios

El listado de un proveedor puede ser un libro de Excel (.xlsx) además de un CSV: se lee la primera hoja, con los mismos nombres de columna. Las fórmulas nunca se ejecutan; se lee el valor que contiene el archivo.

Una vez añadido un archivo con precios, {{ui:Precios a la Biblioteca}} en el cuadro de diálogo fija el precio del material de cada entrada de la [Biblioteca](topic:price-library) que el archivo tiene precio: mismo nombre y una unidad igual (o sin indicar). La mano de obra, el desperdicio, la altura y los ensamblajes se mantienen, y la nota de la entrada indica de qué archivo procede el precio. Una entrada en metros no se valora con un listado en pies, y una sin nombre coincidente se deja como está; la línea de estado indica cuántas se han omitido por la unidad. Actualice los precios desde la Biblioteca para llevar los nuevos precios a esta cuantificación.

## En el panel de Problemas

Una falta es una advertencia y una espera larga es una nota, en el panel compartido de Problemas («Existencias del proveedor»), junto con el resto de comprobaciones. Puede aceptar una indicando un motivo, y la aceptación se guarda en la cuantificación.

## Con su asistente

Si permite asistentes en Ajustes, pueden leer la comprobación (supply_check). Añadir un archivo de proveedor lo hace usted.

## Conviene saber

Las cifras de stock solo son tan actuales como el archivo que añada. Vuelva a añadir el archivo para actualizarlo: un archivo con el mismo nombre sustituye al anterior.
