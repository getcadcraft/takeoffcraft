---
title: Leer las cantidades y el presupuesto
summary: Use la tabla de cantidades por partida y por hoja, el total de la obra, el resaltado y la advertencia de Incompleto.
keywords: cantidades, totales, por partida, por hoja, total de la obra, presupuesto, resumen, informe, resaltado, incompleto, costos
from: 069d41f1
---

La tabla {{ui:Quantities}} en la parte inferior de la ventana es su presupuesto en vivo. Cambia en el momento en que dibuja, borra, cambia la escala o edita una tarifa. Las cantidades nunca se guardan; se vuelven a medir a partir de las marcas cada vez, así que no pueden quedar desactualizadas.

## Por partida

Elija {{ui:By item}} (la opción predeterminada). Cada partida tiene una fila, y cada componente de su conjunto tiene una fila debajo.

| Columna | Significado |
|---|---|
| Partida | Nombre, con el color de la partida. "+(n) sin escala" indica que algunas marcas están en hojas sin escala. |
| Cantidad | El total medido en la unidad de la partida (componentes: el resultado de la fórmula). |
| Unidad | LF, m, SF, SY, m², EA, o la unidad del componente. |
| Desperdicio % | Se escribe aquí o en el editor de partidas. |
| Con desperdicio | Cantidad × (1 + desperdicio). |
| Material/unidad, Mano de obra/unidad | Tarifas; puede escribirlas aquí. |
| Material, Mano de obra | Con desperdicio × tarifa, redondeado al centavo. |
| Total | Material + mano de obra. |

La última fila, **Total de la obra**, suma las columnas de material, mano de obra y total. El mismo total aparece a la derecha del encabezado de la tabla.

Escriba en una celda de desperdicio o de tarifa y pulse {{key:Enter}} o haga clic fuera de ella para aplicarlo. Un valor que TakeoffCraft no puede leer se marca con un contorno rojo, y la barra de estado indica el motivo, por ejemplo "Escriba una cantidad como 12.50."

Haga clic en la fila de una partida para resaltar sus marcas en todas las hojas y pasar a una hoja que las tenga (igual que al hacer clic en ella debajo de {{ui:Items}}).

## Por hoja

Elija {{ui:By sheet}} para ver la cantidad de cada partida en cada hoja, con el número de marcas. Haga clic en una fila para abrir esa hoja con la partida resaltada. Úselo para comprobar que se midieron todas las hojas, o para repartir las cantidades por piso o por área de trabajo.

## Por área

Cuando la cuantificación tiene áreas de licitación, {{ui:By area}} muestra las partidas de cada área y un subtotal. Vea [Áreas de licitación](topic:bid-areas).

## La advertencia de Incompleto

Cuando algo queda fuera de los totales, el encabezado muestra una advertencia, por ejemplo:

"Incompleto: 1 error de fórmula, 6 marcas en hojas sin escala (no incluidas en los totales)"

- **Errores de fórmula**: la fórmula de un componente de conjunto no se puede calcular. Su fila dice "Error de fórmula: …". Vea [Conjuntos y fórmulas](topic:assemblies#when-a-formula-is-wrong).
- **Marcas en hojas sin escala**: asigne una escala a esas hojas. Vea [Asignar la escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Las mismas notas van a la hoja de cálculo exportada, así que un presupuesto incompleto nunca parece completo.

## Resaltar una partida

Haga clic en una partida debajo de {{ui:Items}} o en la tabla. Sus marcas se mantienen con toda su intensidad en cada hoja, y el resto se atenúa. La lista de hojas muestra "(n) resaltadas" en cada hoja con marcas. Haga clic de nuevo en la partida para dejar de resaltarla.

## Totales de partidas en el panel lateral

Cada partida de la lista {{ui:Items}} también muestra su cantidad. El bloque **Medido** del editor de partidas muestra los valores que usan sus fórmulas: longitud, tramos y área de muro; área, perímetro y número de áreas; o conteo.

## Marcas en PDF que no están abiertos

Una cuantificación puede incluir marcas en PDF que no abrió esta vez. Siguen contando en todos los totales, y la lista de hojas indica los nombres de esos PDF. Vea [Guardar y reabrir una cuantificación](topic:save-and-reopen).

## Más espacio

El botón de flecha a la derecha del encabezado de {{ui:Quantities}} oculta la tabla para dar más espacio a la hoja. Haga clic de nuevo para volver a mostrar la tabla.
