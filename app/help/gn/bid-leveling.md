---
title: Paquetes de oferta y nivelación de ofertas
summary: Dividí el presupuesto en paquetes por rubro, enviá el alcance de cada paquete a subcontratistas, compará las ofertas que llegan sobre el mismo alcance, y usá la oferta elegida como precio del paquete.
keywords: nivelación de ofertas, nivelación, paquete de oferta, subcontratista, oferta de subcontrato, alcance, tapón, rubro, división CSI, comparar ofertas, oferta más baja, cuadro de ofertas, oferente, adjudicación, oferta elegida, usar una oferta, precio de subcontrato
from: 856b3088
---

Un contratista general envía el alcance de cada rubro a subcontratistas y compara lo que vuelve. TakeoffCraft hace ambas cosas desde el cómputo: abrí {{ui:Exportar}} › {{ui:Paquetes de oferta y nivelación…}}.

## Paquetes

Hay un paquete por cada división CSI que usan tus ítems (los dos primeros dígitos del {{ui:Número CSI}} de un ítem, ver [Crear ítems de cómputo](topic:create-items)). Los ítems sin número forman un paquete propio. Cada paquete muestra sus ítems, en cuántos planos están sus marcas, y nuestro propio costo (material y mano de obra antes de recargos, a partir de la oferta base).

Elegí {{ui:CSV del alcance}} para descargar lo que se envía a un subcontratista: cada ítem con su número CSI, cantidad, unidad y los planos donde está. No tiene precios. Para proveedores de materiales, la hoja de cálculo tiene la solicitud de cotización con la lista de partes (ver [Exportar el presupuesto](topic:export-estimate)).

## Cargar las ofertas

1. En la fila vacía debajo del paquete, escribí el nombre del oferente y el monto de la oferta, y elegí {{ui:Agregar la oferta}}.
2. Si una oferta deja parte del alcance afuera, abrí su lista {{ui:Dejado afuera}} y marcá esos ítems.
3. Para corregir un nombre o un monto, escribí encima en la tabla; el botón × quita una oferta.

Cada cambio es un paso que {{key:Mod+Z}} deshace, y las ofertas se guardan con el cómputo.

## Cómo se nivelan las ofertas

Las ofertas rara vez cubren el mismo alcance. La nivelación completa cada ítem excluido con un **tapón** a nuestro propio costo, así cada oferta se compara sobre todo el paquete:

**Nivelada = la oferta + los tapones**

La oferta nivelada más baja se marca **Más baja**; en caso de empate, la que se cargó primero. **Contra nuestro costo** es la oferta nivelada menos nuestro propio costo del paquete: negativo significa por debajo. Una oferta que parece la más baja puede perder una vez que se cuenta su alcance faltante.

El libro de cálculo recibe una hoja **Nivelación de ofertas** con cada paquete que tiene ofertas: nuestro presupuesto, cada oferta, sus tapones, el total nivelado y la diferencia, como fórmulas activas, y lo que cada oferta dejó afuera.

## Usar una oferta como precio del paquete

Elegí {{ui:Usar}} en una oferta y pasa a ser el precio de todo el paquete en tu presupuesto: la tarificación propia del paquete (los ítems, sus condiciones secundarias y partes de conjunto) sale del total de la obra, los ítems quedan como cantidades con tus propias tasas como referencia, y una línea, **Oferta elegida**, lleva el monto de la oferta. Los ítems que la oferta deja afuera quedan a tu propio costo, que es lo que la nivelación ya contó como tapón. Elegí otra oferta, o elegí la misma de nuevo para quitarla; cada uno es un paso que {{key:Mod+Z}} deshace.

En el resumen de oferta, las ofertas de subcontratistas son una línea dentro del costo: los gastos generales, la ganancia y la fianza se agregan encima de ellas como cualquier otro costo; el impuesto de venta (solo sobre material) y la carga de mano de obra (sobre la mano de obra) no. La hoja Presupuesto del libro de cálculo lleva la oferta elegida como fila propia, y el bloque de recargos la suma, con fórmulas activas. La lista de materiales no incluye el material de un paquete adjudicado, porque lo provee el subcontratista.

Un paquete dentro de un área de oferta de una alternativa no se vuelve a tarificar: las alternativas y los subtotales de área siguen usando tus propios precios.

## Ofertas que llegan por correo

No tenés que escribir las ofertas a mano. {{ui:Emondo oferta haguã…}} debajo de un paquete envía a cada subcontratista un enlace a una página donde escribe un precio por cada línea; {{ui:Eipapa precio}} trae lo que enviaron a esta tabla. Ver [Enviar un paquete para ofertas](topic:bid-invitations).

:::note
Cargar una oferta a mano sigue funcionando, y una oferta cargada a mano y otra del sitio quedan una al lado de la otra. Las ofertas que llegaron desde el sitio se marcan **web** (o **web, tardía** si llegaron después de la fecha límite); su precio cambia solo cuando el oferente envía una nueva versión, así que tus propias ediciones quedan hasta entonces.
:::
