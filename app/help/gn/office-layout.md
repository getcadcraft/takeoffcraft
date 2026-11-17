---
title: "El diseño de oficina: agrupación, subtotales, título y encabezados según sus Políticas predeterminadas"
summary: Active el complemento Políticas predeterminadas y haga que el presupuesto, las cantidades por hoja, las exportaciones y lo que lee un asistente usen el diseño de planilla de su oficina, el mismo que usan las planillas de BimCraft.
keywords: norma de oficina, diseño de oficina, políticas predeterminadas, complemento, diseño de planilla, agrupar por tipo, agrupar por hoja, subtotal, totales, título, encabezados, mayúsculas, diseño de presupuesto, diseño de exportación, configuración
from: cfd2f30a
---

## Lo que va a hacer

Haga que TakeoffCraft arme sus tablas como las emite su oficina, sin configurarlo en cada cómputo. El diseño se fija una sola vez, en Políticas predeterminadas, y vale para todas las aplicaciones de esta computadora: lo que usted configure en BimCraft o en CadCraft es lo que usa TakeoffCraft, y al revés.

## Pasos

1. Abra **Configuración › Complementos** y active **Políticas predeterminadas**. Está desactivado hasta que lo haga; si está desactivado, o si no hay nada configurado, TakeoffCraft funciona exactamente igual que antes.
2. Abra **Configuración › Global › Políticas predeterminadas** y busque **Diseño de planilla (la norma de oficina)**:

| Política | Qué hace en TakeoffCraft |
|---|---|
| Agrupar planillas por | **Tipo** agrupa el presupuesto por tipo de ítem (Lineal, Área, Conteo, Cantidad tipificada). **Nivel** agrupa las cantidades por hoja según su hoja. **Ambiente** y **Sin agrupar** dejan ambas sin agrupar |
| Totales en planillas | **Un subtotal bajo cada grupo y un total** agrega un subtotal bajo cada grupo. El total de la obra siempre queda |
| Título de la planilla | Una línea sobre la tabla, por ejemplo `{schedule}: diseño de oficina` |
| Encabezados de columna | Como están escritos, EN MAYÚSCULAS o Con Mayúsculas |

3. Cierre Configuración. Las tablas se ajustan de inmediato.

## Qué toma el diseño

- **Cantidades › Por ítem** y **Por hoja**: los encabezados de grupo, un subtotal bajo cada grupo, el título y el formato de los encabezados. Una línea bajo el título indica qué partes fijó la norma de su oficina. Las filas son las mismas: usted sigue escribiendo tarifas y desperdicio en ellas, y haciendo clic en las cifras para seleccionar sus marcas. Un componente o una segunda condición queda bajo su ítem.
- **El presupuesto exportado** (CSV y XLSX): los mismos grupos y subtotales. En el libro, un subtotal es una fórmula `SUBTOTAL` sobre su grupo, y el total de la obra también lo es, así que nada se cuenta dos veces.
- **Lo que lee un asistente**: `takeoff_estimate` y `takeoff_quantities` (por hoja) agregan un bloque `layout` con los grupos, las filas y los subtotales, e indican qué partes fijó la oficina.

## Qué conserva lo suyo

- **Cantidades › Por área** indica su propia agrupación (por área de oferta) y la mantiene.
- El **total de la obra**, los recargos del resumen de oferta y las alternativas no se reagrupan.
- Una agrupación para la que la tabla no tiene columna se omite: el presupuesto no tiene nivel, y las cantidades por hoja no tienen tipo.

## Bueno saberlo

- Las políticas se guardan en este navegador para todas las aplicaciones de CadCraft y viajan en el archivo de Políticas predeterminadas (**Guardar en un archivo** / **Cargar desde un archivo** en el mismo lugar), así que una oficina comparte un solo archivo.
- Un presupuesto exportado como CSV con grupos es para leer. Para volver a traerlo como biblioteca de precios, expórtelo sin ninguna agrupación.
- El lado de BimCraft de esta misma norma: planillas, configuraciones y exportaciones. TakeoffCraft todavía no tiene políticas propias, así que no hay sección Políticas predeterminadas en Configuración › TakeoffCraft.
