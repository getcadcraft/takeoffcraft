---
title: Paquetes por especialidad
summary: Agregue a su biblioteca de precios conjuntos gratuitos para una especialidad, quítelos en un solo paso y comparta su biblioteca como paquete.
keywords: paquete por especialidad, paquete, conjuntos, plantillas, partidas iniciales, eléctrico, tablaroca, entramado, pintura, concreto, pisos, albañilería, techado, recubrimiento, carpintería, plomería, hvac, aislamiento, paisajismo, entarimado, contratista general, csi, masterformat, cc0, agregar, quitar, compartir
from: d3c036be
---

Un **paquete por especialidad** es un conjunto de partidas listas para una especialidad: cada una con su unidad, su altura o profundidad, su desperdicio y su **conjunto**, las piezas y fórmulas que convierten un tramo, área o conteo medido en materiales. Un muro divisorio de tablaroca, por ejemplo, incluye su canal, postes, placas, tornillos, cinta y pasta.

Los paquetes se agregan a su [biblioteca de precios](topic:price-library), y desde ahí agrega sus partidas a cualquier cuantificación.

## Agregar un paquete

1. Abra {{ui:Biblioteca}} en la parte superior del panel {{ui:Partidas}}, luego {{ui:Paquetes por especialidad…}}.
2. Elija las {{ui:Unidades}}: imperial (LF, SF), métrico (m, m²) o ambos. Cada conjunto viene en ambos sistemas.
3. Elija {{ui:Agregar}} junto a un paquete.

Las partidas del paquete aparecen en la biblioteca, etiquetadas con el nombre del paquete. Para usarlas, marque las en la biblioteca y elija {{ui:Agregar a la cuantificación}}.

:::note
**Un paquete no trae precios.** Sus partidas muestran "defina su tarifa" en la biblioteca. Las tarifas son suyas: escríbalas en la biblioteca o en el editor de partidas, o importe su lista de precios como CSV y use {{ui:Actualizar precios}}.
:::

Si ya tiene en su biblioteca una partida con el mismo nombre y tipo, el paquete deja la suya como está. Agregar un paquete de nuevo reemplaza sus propias partidas por la versión nueva.

## Quitar un paquete

En {{ui:Paquetes por especialidad…}}, elija {{ui:Quitar}} junto a un paquete que agregó, y luego una vez más para confirmar. Toda partida que venga de él sale de la biblioteca en un solo paso. Las partidas que ya agregó a una cuantificación se quedan en esa cuantificación.

## Qué contiene un paquete

Elija {{ui:Fuentes y detalles}} bajo un paquete para ver de qué se escribió cada conjunto: códigos de construcción, normas y guías de instalación de asociaciones de la especialidad. En la biblioteca, mantenga el puntero sobre una partida para leer sus fuentes y sus supuestos, como la separación de postes o el rendimiento de una pintura. Compárelos con su obra y con las fichas técnicas de sus productos, y cambie las fórmulas donde difieran (vea [Conjuntos y fórmulas](topic:assemblies)).

Cada paquete lleva la marca **Inicial: aún no revisado por un presupuestador** hasta que presupuestadores en activo lo hayan revisado.

Cada partida también lleva su número CSI MasterFormat, como `09 21 16`.

## Comparta su biblioteca como paquete

{{ui:Exportar como paquete…}} en la biblioteca la guarda como archivo de paquete (`.ccpack.json`) que cualquiera puede agregar con {{ui:Abrir un archivo de paquete…}}. De forma predeterminada omite las partidas que vienen de paquetes que agregó, y no incluye tarifas. Marque {{ui:Incluir mis tarifas como tarifas de muestra}} para enviar también sus tarifas: salen etiquetadas con la región y la fecha que indique, y quien agregue el paquete elige si las usa.

Los archivos de paquete son datos simples, nunca programas. TakeoffCraft revisa cada parte de uno antes de usarlo y omite lo que no puede leer.
