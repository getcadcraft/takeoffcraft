---
title: Consultar existencias del proveedor y tiempos de entrega
summary: Agregue la lista de existencias de un proveedor (CSV u hoja de cálculo) y TakeoffCraft compara con ella lo que necesita la cuantificación, con desperdicio: si hay suficiente en existencia y cuánto dura la espera. Los faltantes y las esperas largas aparecen en el panel de Problemas.
keywords: proveedor, existencias, en existencia, tiempo de entrega, disponibilidad, faltante, pedido pendiente, lista de pedido, csv, sku, vendedor, materiales, suministro, problemas
from: f11160fb
---

{{ui:Suministro}} en la barra de herramientas (el camión) compara lo que necesita su cuantificación con la lista de existencias de un proveedor. Las filas del proveedor que importan se guardan en el archivo propio de la cuantificación. No se envía nada a ningún lugar y nada consulta a un proveedor: usted trae el archivo.

## El archivo

Un archivo CSV con una fila de encabezados. Necesita una columna de nombre o SKU y una de existencias o de tiempo de entrega. Estos encabezados se reconocen (en cualquier orden y sin importar mayúsculas): Item, Name, Description o Product; SKU, Part o Item #; In stock, On hand, Available o Quantity; Lead time o Delivery days; Unit o UOM; Price o Cost; Supplier o Vendor.

- La existencia puede ser un número (1,200), "In stock" o "Out of stock".
- El tiempo de entrega puede ser "5 days", "2 weeks", "2-3 weeks" (se usa el mayor), "3 months", "same day" o "backorder". Un número simple está en la unidad del encabezado (días, salvo que el encabezado diga semanas o meses).
- No se leen los archivos de Excel: guarde primero la hoja como CSV.

## Comprobar la cuantificación

1. Elija {{ui:Suministro}}, luego {{ui:Agregar un archivo de proveedor…}} y seleccione el CSV. Puede agregar más de uno: hasta cinco archivos, con 2,000 filas en total, primero las que coincidan con sus partidas.
2. Cada partida, condición secundaria y componente de conjunto con cantidad se empareja con una fila por nombre, o por SKU en su nombre. Si no hay una coincidencia exacta, se usa un nombre parecido (uno contenido en el otro), y se indica.
3. Bajo {{ui:Lo que necesita la cuantificación}}, los faltantes aparecen primero: "Faltan 120 EA", "Tiempo de entrega 21 días", "Pedido pendiente", "La unidad es diferente", "Sin cifra de existencias" o "En existencia". La necesidad incluye el desperdicio. Una unidad del proveedor distinta a la del presupuesto (una tonelada contra un pie) se reporta y nunca se compara. Cada fila tiene {{ui:Seleccionar la partida}}, que lo lleva a la partida.
4. Defina {{ui:Espera máxima deseada (días)}} (predeterminado 14). Una partida que no está en existencia y espera más que eso se marca, y el resumen indica la espera más larga que importa.
5. {{ui:Lista de pedido (CSV)}} descarga las partidas faltantes con la cantidad que falta, el proveedor y el tiempo de entrega. {{ui:Omitir}} quita una necesidad de la comprobación (es un paso de deshacer).

## Archivos de hoja de cálculo y la biblioteca de precios

La lista de un proveedor también puede ser un libro de Excel (.xlsx), además de un CSV: se lee la primera hoja, con los mismos nombres de columna. Las fórmulas nunca se ejecutan; se lee el valor que contiene el archivo.

Una vez agregado un archivo con precios, {{ui:Precios a la biblioteca}} en el diálogo define el precio del material de cada entrada de la [Biblioteca](topic:price-library) que el archivo tenga con precio: mismo nombre y una unidad igual (o no indicada). La mano de obra, el desperdicio, la altura y los conjuntos se mantienen como están, y la nota de la entrada indica de qué archivo viene el precio. Una entrada en metros no se valora con una lista en pies, y una sin nombre coincidente no se modifica; la línea de estado indica cuántas se omitieron por la unidad. Vuelva a valorar desde la Biblioteca para llevar los nuevos precios a esta cuantificación.

## En el panel de Problemas

Un faltante es una advertencia y una espera larga es una nota, en el panel compartido de Problemas ("Existencias del proveedor"), así que aparecen junto con las demás comprobaciones. Puede aceptar una indicando un motivo, y la aceptación se guarda en la cuantificación.

## Con su asistente

Si permite asistentes en Configuración, pueden leer la comprobación (supply_check). Agregar un archivo de proveedor le corresponde a usted.

## Conviene saber

Las cifras de existencias son tan actuales como el archivo que agrega. Agregue el archivo de nuevo para actualizarlo: un archivo con el mismo nombre reemplaza al anterior.
