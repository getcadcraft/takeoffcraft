---
title: "La disposición de la oficina: agrupación, subtotales, título y encabezados según sus Políticas predeterminadas"
summary: Active el complemento Políticas predeterminadas y la estimación, las cantidades por hoja, las exportaciones y lo que lee un asistente adoptan la disposición de tablas de su oficina, la misma que usan las tablas de BimCraft.
keywords: estándar de oficina, disposición de la oficina, políticas predeterminadas, complemento, disposición de tablas, agrupar por tipo, agrupar por hoja, subtotal, totales, título, encabezados, mayúsculas, disposición de la estimación, disposición de la exportación, configuración
from: cfd2f30a
---

## Qué va a hacer

Haga que TakeoffCraft disponga sus tablas como las emite su oficina, sin configurarlo en cada medición. La disposición se fija una vez, en Políticas predeterminadas, y vale para todas las aplicaciones de este ordenador: lo que configure en BimCraft o en CadCraft es lo que usa TakeoffCraft, y viceversa.

## Pasos

1. Abra **Configuración › Complementos** y active **Políticas predeterminadas**. Está desactivado hasta que lo active; con él desactivado, o sin nada configurado, TakeoffCraft funciona exactamente igual que antes.
2. Abra **Configuración › Global › Políticas predeterminadas** y busque **Disposición de tablas (el estándar de la oficina)**:

| Política | Qué hace en TakeoffCraft |
|---|---|
| Agrupar tablas por | **Tipo** agrupa la estimación por tipo de partida (Lineal, Área, Recuento, Cantidad tipificada). **Nivel** agrupa las cantidades por hoja según su nivel. **Habitación** y **Sin agrupar** no agrupan ninguna de las dos |
| Totales en las tablas | **Un subtotal bajo cada grupo y un total** añade un subtotal bajo cada grupo. El total de la obra siempre se mantiene |
| Título de la tabla | Una línea sobre la tabla, por ejemplo `{schedule}: office layout` |
| Encabezados de columna | Tal como están escritos, EN MAYÚSCULAS o Con Mayúsculas Iniciales |

3. Cierre Configuración. Las tablas se actualizan de inmediato.

## Qué aplica la disposición

- **Cantidades › Por partida** y **Por hoja**: encabezados de grupo, un subtotal bajo cada grupo, el título y el formato de los encabezados. Una línea bajo el título indica qué partes fijó el estándar de su oficina. Las filas son las mismas: sigue escribiendo tarifas y desperdicio en ellas, y haciendo clic en las cifras para seleccionar sus marcas. Un componente o una segunda condición se mantiene bajo su partida.
- **La estimación exportada** (CSV y XLSX): los mismos grupos y subtotales. En el libro, un subtotal es una fórmula `SUBTOTAL` sobre su grupo, y el total de la obra también lo es, así que nada se cuenta dos veces.
- **Lo que lee un asistente**: `takeoff_estimate` y `takeoff_quantities` (por hoja) añaden un bloque `layout` con los grupos, las filas y los subtotales, e indican qué partes fijó la oficina.

## Lo que conserva su propia disposición

- **Cantidades › Por área** define su propia agrupación (por área de oferta) y la mantiene.
- El **total de la obra**, los recargos del resumen de ofertas y las alternativas no se reagrupan.
- Una agrupación para la que la tabla no tiene columna se omite: la estimación no tiene nivel, y las cantidades por hoja no tienen tipo.

## Conviene saber

- Las políticas se guardan en este navegador para todas las aplicaciones de CadCraft y viajan en el archivo de Políticas predeterminadas (**Guardar en un archivo** / **Cargar desde un archivo** en el mismo lugar), así que una oficina comparte un solo archivo.
- Una estimación exportada como CSV con grupos está pensada para leerse. Para volver a importarla como biblioteca de precios, expórtela sin ninguna agrupación.
- La parte de BimCraft de este mismo estándar: tablas, configuraciones y exportaciones. TakeoffCraft todavía no tiene políticas propias, así que no hay sección Políticas predeterminadas en Configuración › TakeoffCraft.
