---
title: Paquetes de licitación y nivelación de ofertas
summary: Divida el presupuesto en paquetes por oficio, envíe el alcance de cada paquete a los subcontratistas, compare las ofertas que llegan sobre el mismo alcance y use la oferta elegida como precio del paquete.
keywords: nivelación de ofertas, nivelación, paquete de licitación, subcontratista, oferta de subcontrato, alcance, cobertura, oficio, división CSI, comparar ofertas, oferta más baja, cuadro de ofertas, licitador, adjudicar, oferta elegida, usar una oferta, precio de subcontrato
from: 856b3088
---

Un contratista general envía el alcance de cada oficio a los subcontratistas y compara lo que le llega. TakeoffCraft hace ambas cosas a partir de la medición: abra {{ui:Exportar}} › {{ui:Paquetes de oferta y nivelación…}}.

## Paquetes

Hay un paquete por cada división CSI que usan sus partidas (los dos primeros dígitos del {{ui:Número CSI}} de una partida; consulte [Crear partidas de medición](topic:create-items)). Las partidas sin número forman un paquete propio. Cada paquete muestra sus partidas, en cuántas hojas están sus marcas y nuestro propio coste (material y mano de obra antes de los márgenes, a partir de la oferta base).

Elija {{ui:CSV del alcance}} para descargar lo que se envía a un subcontratista: cada partida con su número CSI, cantidad, unidad y las hojas en las que está. No tiene precios. Para proveedores de material, la solicitud de presupuesto del libro tiene la lista de piezas (consulte [Exportar el presupuesto](topic:export-estimate)).

## Introducir las ofertas

1. En la fila vacía bajo el paquete, escriba el nombre del licitador y el importe de la oferta, y elija {{ui:Añadir la oferta}}.
2. Si una oferta deja parte del alcance fuera, abra su lista {{ui:Dejado fuera}} y marque esas partidas.
3. Para corregir un nombre o un importe, escriba encima en la tabla; el botón × elimina una oferta.

Cada cambio es un paso que {{key:Mod+Z}} deshace, y las ofertas se guardan con la medición.

## Cómo se nivelan las ofertas

Las ofertas rara vez cubren el mismo alcance. La nivelación completa cada partida dejada fuera con una **cobertura** a nuestro propio coste, para que cada oferta se compare sobre el paquete completo:

**Nivelada = la oferta + las coberturas**

La oferta nivelada más baja se marca **Más baja**; en caso de empate, la que se introdujo primero. **Frente a nuestro coste** es la oferta nivelada menos nuestro propio coste del paquete: negativo significa por debajo. Una oferta que parece la más baja puede perder una vez contado el alcance que le falta.

El libro tiene una hoja **Nivelación de ofertas** con cada paquete que tiene ofertas: nuestro presupuesto, cada oferta, sus coberturas, el total nivelado y la diferencia, como fórmulas activas, y lo que deja fuera cada oferta.

## Usar una oferta como precio del paquete

Elija {{ui:Usar}} en una oferta y pasa a ser el precio de todo el paquete en su presupuesto: el precio propio del paquete (las partidas, sus condiciones y las partes de conjunto) sale del total de la obra, las partidas quedan como cantidades con sus propias tarifas de referencia, y una línea, **Oferta elegida**, lleva el importe de la oferta. Las partidas que la oferta deja fuera se quedan a su propio coste, que es lo que la nivelación ya contó como cobertura. Elija otra oferta, o vuelva a elegir la misma para retirarla; cada una es un paso que {{key:Mod+Z}} deshace.

En el resumen de oferta, las ofertas de subcontrato son una línea dentro del coste: los gastos generales, el beneficio y la fianza se suman encima como a cualquier otro coste, pero no se les aplica el impuesto de venta (solo sobre material) ni la carga de mano de obra (sobre la mano de obra). La hoja Presupuesto del libro lleva la oferta elegida como fila propia, y el bloque de márgenes la suma, con fórmulas activas. La lista de material no incluye el material de un paquete adjudicado, porque lo suministra el subcontratista.

Un paquete dentro del área de licitación de una alternativa no se vuelve a valorar: las alternativas y los subtotales de área siguen usando sus propios precios.

## Ofertas que llegan por correo

No tiene que escribir las ofertas a mano. {{ui:Enviar a licitación…}} bajo un paquete envía a cada subcontratista un enlace a una página donde escribe un precio para cada línea; {{ui:Obtener precios}} trae a esta tabla lo que enviaron. Consulte [Enviar un paquete para licitar](topic:bid-invitations).

:::note
Introducir una oferta a mano sigue funcionando, y una oferta escrita a mano y otra del sitio conviven una junto a otra. Las ofertas que llegaron desde el sitio se marcan **web** (o **web, tardía** si llegaron después de la hora límite); su precio solo cambia cuando el licitador envía una nueva versión, así que sus propias ediciones se mantienen hasta entonces.
:::
