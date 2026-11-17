---
title: Verificar stock y plazos de entrega del proveedor
summary: Agregá la lista de stock de un proveedor (CSV o planilla) y TakeoffCraft verifica contra ella lo que necesita el cómputo, con desperdicio: si hay suficiente en stock y cuánto dura la espera. Faltantes y esperas largas aparecen en el panel Problemas.
keywords: proveedor, stock, en stock, plazo de entrega, disponibilidad, faltante, pedido pendiente, lista de pedido, csv, sku, vendedor, materiales, suministro, problemas
from: f11160fb
---

{{ui:Supply}} en la barra de herramientas (el camión) verifica lo que necesita tu cómputo contra la lista de stock de un proveedor. Las filas del proveedor que importan quedan en el propio archivo del cómputo. Nada se envía a ningún lado y nada consulta al proveedor: vos traés el archivo.

## El archivo

Un archivo CSV con fila de encabezado. Necesita una columna de nombre o SKU y una de stock o plazo de entrega. Se reconocen estos encabezados (en cualquier orden y sin distinguir mayúsculas): Item, Name, Description o Product; SKU, Part o Item #; In stock, On hand, Available o Quantity; Lead time o Delivery days; Unit o UOM; Price o Cost; Supplier o Vendor.

- El stock puede ser un número (1,200), "In stock" o "Out of stock".
- Un plazo puede ser "5 days", "2 weeks", "2-3 weeks" (se usa el mayor), "3 months", "same day" o "backorder". Un número simple va en la unidad del encabezado (días, salvo que el encabezado diga semanas o meses).
- Los archivos de Excel no se leen: guardá primero la hoja como CSV.

## Verificar el cómputo

1. Elegí {{ui:Supply}}, luego {{ui:Add a supplier file…}} y seleccioná el CSV. Podés agregar más de uno: hasta cinco archivos, 2.000 filas en total, primero las que coinciden con tus ítems.
2. Cada ítem, segunda condición y parte de conjunto con cantidad se empareja con una fila por nombre, o por SKU dentro del nombre. Si no hay coincidencia exacta se usa un nombre parecido (uno contenido en el otro), y se indica.
3. En {{ui:What the takeoff needs}}, primero aparecen los que faltan: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" o "In stock". La necesidad incluye el desperdicio. Una unidad del proveedor distinta a la del presupuesto (una tonelada contra un pie) se informa y nunca se compara. Cada fila tiene {{ui:Select the item}}, que lleva al ítem.
4. Configurá {{ui:Longest wait wanted (days)}} (predeterminado 14). Un ítem sin stock que espera más que eso se marca, y el resumen indica la espera más larga que importa.
5. {{ui:Order list (CSV)}} descarga los ítems faltantes con la cantidad que falta, el proveedor y el plazo. {{ui:Leave out}} saca una necesidad de la verificación (es un paso de deshacer).

## Planillas y la Biblioteca de precios

La lista de un proveedor puede ser un libro de Excel (.xlsx) además de un CSV: se lee la primera hoja, con los mismos nombres de columna. Las fórmulas nunca se ejecutan; se lee el valor que tiene el archivo.

Una vez agregado un archivo con precios, {{ui:Prices into the Library}} en el diálogo fija el precio de material de cada entrada de la [Biblioteca](topic:price-library) que el archivo tiene: mismo nombre, y una unidad igual (o no indicada). Mano de obra, desperdicio, altura y conjuntos quedan como están, y la nota de la entrada indica de qué archivo salió el precio. Una entrada en metros no se pone precio desde una lista en pies, y una sin nombre coincidente queda igual; la línea de estado indica cuántas se omitieron por unidad. Volvé a poner precio desde la Biblioteca para llevar los precios nuevos a este cómputo.

## En el panel Problemas

Un faltante es una advertencia y una espera larga es una nota, en el panel compartido de Problemas ("Supplier stock"), junto con las demás verificaciones. Podés aceptar una con un motivo, y la aceptación queda guardada en el cómputo.

## Con tu asistente

Si permitís asistentes en {{ui:Settings}}, pueden leer la verificación (supply_check). Agregar un archivo de proveedor lo hacés vos.

## Good to know

Los datos de stock son tan actuales como el archivo que agregás. Volvé a agregar el archivo para actualizarlo: un archivo con el mismo nombre reemplaza al anterior.
