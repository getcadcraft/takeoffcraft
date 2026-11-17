---
title: Paquetes de oficio
summary: Añada a su biblioteca de precios ensamblajes gratuitos para un oficio, elimínelos en un solo paso y comparta su propia biblioteca como paquete.
keywords: paquete de oficio, paquete, ensamblajes, plantillas, partidas de inicio, electricidad, pladur, entramado, pintura, hormigón, pavimentos, albañilería, cubiertas, revestimiento exterior, carpintería, fontanería, hvac, aislamiento, paisajismo, tarima exterior, contratista general, csi, masterformat, cc0, añadir, quitar, compartir
from: d3c036be
---

Un **paquete de oficio** es un conjunto de partidas listas para usar de un mismo oficio: cada una con su unidad, su altura o profundidad, su desperdicio y su **ensamblaje**, es decir, las partes y fórmulas que convierten un tramo, área o recuento medido en materiales. Por ejemplo, un tabique de pladur incluye su canal, montantes, placas, tornillos, cinta y masilla.

Los paquetes se añaden a su [biblioteca de precios](topic:price-library) y desde allí añade sus partidas a cualquier cuantificación.

## Añadir un paquete

1. Abra {{ui:Biblioteca}} en la parte superior del panel {{ui:Partidas}} y después {{ui:Paquetes de oficio…}}.
2. Elija las {{ui:Unidades}}: imperial (LF, SF), métrico (m, m²) o ambas. Cada ensamblaje está disponible en ambos sistemas.
3. Elija {{ui:Añadir}} junto a un paquete.

Las partidas del paquete aparecen en la biblioteca, etiquetadas con el nombre del paquete. Para usarlas, márquelas en la biblioteca y elija {{ui:Añadir a la medición}}.

:::note
**Un paquete no trae precios.** Sus partidas muestran «defina su tarifa» en la biblioteca. Las tarifas son suyas: escríbalas en la biblioteca o en el editor de partidas, o importe su lista de precios como CSV y use {{ui:Actualizar precios}}.
:::

Si ya tiene en su biblioteca una partida con el mismo nombre y tipo, el paquete deja la suya tal cual. Si vuelve a añadir un paquete, sus propias partidas se sustituyen por la nueva versión.

## Quitar un paquete

En {{ui:Paquetes de oficio…}}, elija {{ui:Quitar}} junto a un paquete que haya añadido y, después, vuelva a elegirlo para confirmar. Todas las partidas que procedían de él salen de la biblioteca en un solo paso. Las partidas que ya haya añadido a una cuantificación permanecen en ella.

## Qué contiene un paquete

Elija {{ui:Fuentes y detalles}} bajo un paquete para ver de qué se redactó cada ensamblaje: códigos de construcción, normas y guías de instalación de las asociaciones del oficio. En la biblioteca, sitúe el puntero sobre una partida para leer sus fuentes y sus supuestos, como la separación de montantes o el rendimiento de una pintura. Compárelos con su obra y con las fichas técnicas de sus productos, y cambie las fórmulas donde difieran (véase [Ensamblajes y fórmulas](topic:assemblies)).

Todo paquete aparece marcado como **Inicial: aún no revisado por un estimador** hasta que lo revisen estimadores en activo.

Cada partida incluye además su número CSI MasterFormat, como `09 21 16`.

## Compartir su biblioteca como paquete

{{ui:Exportar como paquete…}} en la biblioteca la guarda como archivo de paquete (`.ccpack.json`), que cualquiera puede añadir con {{ui:Abrir un archivo de paquete…}}. Por defecto omite las partidas que procedan de paquetes que haya añadido, y no incluye tarifas. Marque {{ui:Incluir mis tarifas como tarifas de muestra}} para enviar también sus tarifas: se envían etiquetadas con la región y la fecha que indique, y quien añada el paquete decide si las usa.

Los archivos de paquete son datos simples, nunca programas. TakeoffCraft comprueba cada parte de uno antes de usarlo y omite todo lo que no puede leer.
