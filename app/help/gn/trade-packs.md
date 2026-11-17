---
title: Paquetes de oficios
summary: Agregá a tu biblioteca de precios conjuntos gratuitos para un oficio, quitalos en un solo paso y compartí tu propia biblioteca como paquete.
keywords: paquete de oficio, paquete, conjuntos, plantillas, ítems iniciales, electricidad, durlock, estructura, pintura, hormigón, pisos, mampostería, techado, revestimiento, carpintería, plomería, climatización, aislación, paisajismo, deck, contratista general, csi, masterformat, cc0, agregar, quitar, compartir
from: d3c036be
---

Un **paquete de oficio** es un conjunto de ítems listos para un oficio: cada uno con su unidad, su altura o profundidad, su desperdicio y su **conjunto**, las partes y fórmulas que convierten un tramo, superficie o conteo medido en materiales. Una tabiquería de durlock, por ejemplo, trae su solera, montantes, placas, tornillos, cinta y masilla.

Los paquetes se agregan a tu [biblioteca de precios](topic:price-library), y desde ahí agregás sus ítems a cualquier cómputo.

## Agregar un paquete

1. Abrí {{ui:Library}} arriba del panel {{ui:Items}}, luego {{ui:Trade packs…}}.
2. Elegí las {{ui:Units}}: imperial (LF, SF), métrico (m, m²) o ambos. Cada conjunto viene en los dos sistemas.
3. Elegí {{ui:Add}} junto a un paquete.

Los ítems del paquete aparecen en la biblioteca, marcados con el nombre del paquete. Para usarlos, marcalos en la biblioteca y elegí {{ui:Add to takeoff}}.

:::note
**Un paquete no trae precios.** Sus ítems muestran "set your rate" en la biblioteca. Las tarifas son tuyas: escribilas en la biblioteca o en el editor de ítems, o importá tu lista de precios como CSV y usá {{ui:Update prices}}.
:::

Si ya tenés en tu biblioteca un ítem con el mismo nombre y tipo, el paquete deja el tuyo como está. Volver a agregar un paquete reemplaza sus propios ítems por la versión nueva.

## Quitar un paquete

En {{ui:Trade packs…}}, elegí {{ui:Remove}} junto a un paquete que agregaste, y luego una vez más para confirmar. Todos los ítems que vinieron de él salen de la biblioteca en un solo paso. Los ítems que ya agregaste a un cómputo quedan en ese cómputo.

## Qué contiene un paquete

Elegí {{ui:Sources and details}} debajo de un paquete para ver de dónde se escribió cada conjunto: códigos de edificación, normas y guías de instalación de asociaciones del oficio. En la biblioteca, poné el puntero sobre un ítem para leer sus fuentes y sus supuestos, como la separación de montantes o el rendimiento de una pintura. Verificalos con tu obra y con las hojas de datos de tus productos, y cambiá las fórmulas donde difieran (ver [Conjuntos y fórmulas](topic:assemblies)).

Cada paquete está marcado **Inicial: aún no revisado por un computista** hasta que computistas en actividad lo revisen.

Cada ítem también lleva su número CSI MasterFormat, como `09 21 16`.

## Compartir tu biblioteca como paquete

{{ui:Export as pack…}} en la biblioteca la guarda como archivo de paquete (`.ccpack.json`) que cualquiera puede agregar con {{ui:Open a pack file…}}. Por defecto deja afuera los ítems que vinieron de paquetes que agregaste, y no lleva tarifas. Marcá {{ui:Include my rates as sample rates}} para enviar también tus tarifas: salen rotuladas con la región y la fecha que indiques, y quien agregue el paquete decide si las usa.

Los archivos de paquete son solo datos, nunca programas. TakeoffCraft verifica cada parte antes de usarla y deja afuera lo que no puede leer.
