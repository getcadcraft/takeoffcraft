---
title: Leer cantidades y el presupuesto
summary: Usar la tabla de Cantidades por ítem y por hoja, el total de la obra, el resaltado y la advertencia Incompleto.
keywords: cantidades, totales, por ítem, por hoja, total de la obra, presupuesto, resumen, informe, resaltar, incompleto, costos
from: 069d41f1
---

La tabla {{ui:Cantidades}} que está al pie de la ventana es tu presupuesto en vivo. Cambia en el momento en que dibujás, eliminás, reescalás o editás una tarifa. Las cantidades nunca se guardan: se vuelven a medir desde las marcas cada vez, así que no pueden quedar desactualizadas.

## Por ítem

Elegí {{ui:Por ítem}} (el predeterminado). Cada ítem tiene una fila, y cada componente de su conjunto tiene una fila debajo.

| Columna | Significado |
|---|---|
| Ítem | Nombre, con el color del ítem. "+(n) sin escala" significa que algunas marcas están en hojas sin escala. |
| Cantidad | El total medido en la unidad del ítem (componentes: el resultado de la fórmula). |
| Unidad | LF, m, SF, SY, m², EA, o la unidad del componente. |
| Desperdicio % | Escrito aquí o en el editor del ítem. |
| Con desperdicio | Cantidad × (1 + desperdicio). |
| Material/unidad, Mano de obra/unidad | Tarifas; podés escribirlas aquí. |
| Material, Mano de obra | Con desperdicio × tarifa, redondeado al centavo. |
| Total | Material + mano de obra. |

La última fila, **Total de la obra**, suma las columnas de material, mano de obra y total. El mismo total aparece a la derecha del encabezado de la tabla.

Escribí en una celda de desperdicio o de tarifa y presioná {{key:Enter}} o hacé clic afuera para aplicarlo. Un valor que TakeoffCraft no puede leer se marca con contorno rojo y la barra de estado dice por qué, por ejemplo "Escribí un monto como 12.50."

Hacé clic en la fila de un ítem para resaltar sus marcas en todas las hojas y saltar a una hoja que las tenga (igual que al hacer clic debajo de {{ui:Ítems}}).

## Por hoja

Elegí {{ui:Por hoja}} para ver la cantidad de cada ítem en cada hoja, con la cantidad de marcas. Hacé clic en una fila para abrir esa hoja con el ítem resaltado. Usalo para verificar que todas las hojas fueron medidas, o para dividir las cantidades por piso o área de trabajo.

## Por área

Cuando el cómputo tiene áreas de oferta, {{ui:Por área}} lista los ítems de cada área y un subtotal. Ver [Áreas de oferta](topic:bid-areas).

## La advertencia Incompleto

Cuando algo queda fuera de los totales, el encabezado muestra una advertencia, por ejemplo:

"Incompleto: 1 error de fórmula, 6 marcas en hojas sin escala (fuera de los totales)"

- **Errores de fórmula**: la fórmula de un componente del conjunto no puede calcularse. Su fila dice "Error de fórmula: …". Ver [Conjuntos y fórmulas](topic:assemblies#when-a-formula-is-wrong).
- **Marcas en hojas sin escala**: dales escala a esas hojas. Ver [Fijar la escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Las mismas notas van a la planilla exportada, así que un presupuesto incompleto nunca parece completo.

## Resaltar un ítem

Hacé clic en un ítem debajo de {{ui:Ítems}} o en la tabla. Sus marcas quedan a plena intensidad en todas las hojas y el resto se desvanece. La lista de hojas muestra "(n) resaltadas" en cada hoja con marcas. Volvé a hacer clic en el ítem para dejar de resaltar.

## Totales de ítems en el panel lateral

Cada ítem de la lista {{ui:Ítems}} también muestra su cantidad. El bloque **Medido** del editor de ítems muestra los valores que usan sus fórmulas: longitud, tramos y superficie de muro; superficie, perímetro y cantidad de áreas; o conteo.

## Marcas en PDF que no están abiertos

Un cómputo puede incluir marcas en PDF que no abriste en esta sesión. Igual cuentan en todos los totales; la lista de hojas indica el nombre de esos PDF. Ver [Guardar y reabrir un cómputo](topic:save-and-reopen).

## Más espacio

El botón con flecha a la derecha del encabezado de {{ui:Cantidades}} oculta la tabla para que la hoja tenga más espacio. Volvé a presionarlo para mostrar la tabla otra vez.
