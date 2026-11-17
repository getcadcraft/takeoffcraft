---
title: Paquetes de licitación y nivelación de ofertas
summary: Divida el presupuesto en paquetes por oficio, envíe el alcance de cada paquete a subcontratistas, compare las ofertas que regresan sobre el mismo alcance y use la oferta elegida como precio del paquete.
keywords: nivelación de ofertas, nivelación, paquete de licitación, subcontratista, oferta de subcontratista, alcance, relleno, oficio, división CSI, comparar ofertas, oferta más baja, cuadro de ofertas, licitador, adjudicación, oferta elegida, usar una oferta, precio de subcontrato
from: 856b3088
---

Un contratista general envía el alcance de cada oficio a subcontratistas y compara lo que regresa. TakeoffCraft hace ambas cosas desde la cuantificación: abra {{ui:Exportar}} › {{ui:Paquetes de licitación y nivelación…}}.

## Paquetes

Hay un paquete por cada división CSI que usen sus partidas (los primeros dos dígitos del {{ui:Número CSI}} de una partida; vea [Crear partidas de cuantificación](topic:create-items)). Las partidas sin número forman un paquete propio. Cada paquete muestra sus partidas, en cuántas hojas están sus marcas, y nuestro propio costo (material y mano de obra antes de los recargos, de la propuesta base).

Elija {{ui:CSV del alcance}} para descargar lo que se envía a un subcontratista: cada partida con su número CSI, cantidad, unidad y las hojas en que está. No tiene precios. Para proveedores de materiales, la solicitud de cotización del libro tiene la lista de piezas (vea [Exportar el presupuesto](topic:export-estimate)).

## Capturar las ofertas

1. En la fila vacía bajo el paquete, escriba el nombre del licitador y el monto de la oferta, luego elija {{ui:Agregar la oferta}}.
2. Si una oferta deja parte del alcance fuera, abra su lista {{ui:Deja fuera}} y marque esas partidas.
3. Para corregir un nombre o un monto, escriba sobre él en la tabla; el botón × quita una oferta.

Cada cambio es un paso que {{key:Mod+Z}} deshace, y las ofertas se guardan con la cuantificación.

## Cómo se nivelan las ofertas

Las ofertas rara vez cubren el mismo alcance. La nivelación completa cada partida excluida con un **relleno** a nuestro costo propio, así que cada oferta se compara sobre el paquete completo:

**Nivelada = la oferta + los rellenos**

La oferta nivelada más baja se marca **Más baja**; en un empate, la que se capturó primero. **Contra nuestro costo** es la oferta nivelada menos nuestro propio costo del paquete: negativo significa que está por debajo. Una oferta que parece la más baja puede perder una vez que se cuenta su alcance faltante.

El libro obtiene una hoja **Nivelación de ofertas** con cada paquete que tiene ofertas: nuestro presupuesto, cada oferta, sus rellenos, el total nivelado y la diferencia, como fórmulas vivas, y lo que cada oferta dejó fuera.

## Usar una oferta como precio del paquete

Elija {{ui:Usar}} en una oferta y se convierte en el precio de todo el paquete en su presupuesto: el precio propio del paquete (las partidas, sus condiciones secundarias y piezas de conjunto) sale del total de la obra; las partidas se quedan como cantidades con sus tarifas propias como referencia, y una línea, **Oferta elegida**, lleva el monto de la oferta. Las partidas que la oferta deja fuera se quedan a su propio costo, que es lo que la nivelación ya contó como relleno. Elija otra oferta, o elija la misma otra vez para quitarla; cada una es un paso que {{key:Mod+Z}} deshace.

En el resumen de licitación, las subofertas son una línea dentro del costo: los indirectos, la utilidad y la fianza se suman sobre ellas como sobre cualquier otro costo; el impuesto sobre la venta (solo sobre material) y la carga social sobre la mano de obra no. La hoja Presupuesto del libro lleva la oferta elegida como su propia fila, y el bloque de recargos la suma, con fórmulas vivas. La lista de materiales omite el material de un paquete adjudicado, porque lo suministra el subcontratista.

Un paquete dentro del área de licitación de una alternativa no se vuelve a presupuestar: las alternativas y los subtotales de área siguen usando sus propios precios.

## Ofertas que regresan por correo

No tiene que escribir las ofertas a mano. {{ui:Enviar para licitación…}} bajo un paquete envía a cada subcontratista un enlace a una página donde escribe un precio por cada línea; {{ui:Obtener precios}} trae lo que enviaron a esta tabla. Vea [Enviar un paquete para licitación](topic:bid-invitations).

:::note
Capturar una oferta a mano sigue funcionando, y una oferta capturada a mano y una del sitio quedan una junto a la otra. Las ofertas que llegaron desde el sitio se marcan **web** (o **web, tardía** si llegaron después de la fecha límite); su precio cambia solo cuando el licitador envía una nueva versión, así que sus propias ediciones se mantienen hasta entonces.
:::
