---
title: Leer las cantidades y el presupuesto
summary: Use la tabla Cantidades por partida y por hoja, el total de la obra, el resaltado y el aviso de Incompleto.
keywords: cantidades, totales, por partida, por hoja, total de la obra, presupuesto, resumen, informe, resaltar, incompleto, costes
from: 069d41f1
---

La tabla {{ui:Cantidades}} situada en la parte inferior de la ventana es su presupuesto en tiempo real. Cambia en el momento en que dibuja, borra, cambia la escala o edita una tarifa. Las cantidades nunca se guardan; se vuelven a medir a partir de las marcas cada vez, así que no pueden quedar desfasadas.

## Por partida

Elija {{ui:Por partida}} (la opción predeterminada). Cada partida tiene una fila, y cada uno de sus componentes de conjunto tiene una fila debajo.

| Columna | Significado |
|---|---|
| Partida | Nombre, con el color de la partida. "+(n) sin escala" indica que algunas marcas están en hojas sin escala. |
| Cantidad | El total medido en la unidad de la partida (componentes: el resultado de la fórmula). |
| Unidad | LF, m, SF, SY, m², EA, o la unidad del componente. |
| Desperdicio % | Se escribe aquí o en el editor de partidas. |
| Con desperdicio | Cantidad × (1 + desperdicio). |
| Material/unidad, Mano de obra/unidad | Tarifas; puede escribirlas aquí. |
| Material, Mano de obra | Con desperdicio × tarifa, redondeado al céntimo. |
| Total | Material + mano de obra. |

La última fila, **Total de la obra**, suma las columnas de material, mano de obra y total. El mismo total aparece a la derecha del encabezado de la tabla.

Escriba en una celda de desperdicio o de tarifa y pulse {{key:Enter}} o haga clic fuera para aplicarlo. Un valor que TakeoffCraft no puede leer aparece con contorno rojo y la barra de estado indica el motivo, por ejemplo "Escriba una cantidad como 12.50."

Haga clic en la fila de una partida para resaltar sus marcas en todas las hojas y saltar a una hoja que las tenga (igual que al hacer clic en ella bajo {{ui:Partidas}}).

## Por hoja

Elija {{ui:Por hoja}} para ver la cantidad de cada partida en cada hoja, con el número de marcas. Haga clic en una fila para abrir esa hoja con la partida resaltada. Úselo para comprobar que se ha medido cada hoja, o para repartir las cantidades por planta o por área de trabajo.

## Por área

Cuando la medición tiene áreas de licitación, {{ui:Por área}} muestra las partidas de cada área y un subtotal. Consulte [Áreas de licitación](topic:bid-areas).

## El aviso de Incompleto

Cuando algo queda fuera de los totales, el encabezado muestra un aviso, por ejemplo:

"Incompleto: 1 error de fórmula, 6 marcas en hojas sin escala (no incluidas en los totales)"

- **Errores de fórmula**: la fórmula de un componente de conjunto no se puede calcular. Su fila dice "Error de fórmula: …". Consulte [Conjuntos y fórmulas](topic:assemblies#when-a-formula-is-wrong).
- **Marcas en hojas sin escala**: asigne una escala a esas hojas. Consulte [Definir la escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Las mismas notas se incluyen en la hoja de cálculo exportada, así que un presupuesto incompleto nunca parece completo.

## Resaltar una partida

Haga clic en una partida bajo {{ui:Partidas}} o en la tabla. Sus marcas se mantienen a plena intensidad en todas las hojas y el resto se atenúa. La lista de hojas muestra "(n) resaltadas" en cada hoja con sus marcas. Haga clic de nuevo en la partida para dejar de resaltarla.

## Totales de partidas en el panel lateral

Cada partida de la lista {{ui:Partidas}} también muestra su cantidad. El bloque **Medido** del editor de partidas muestra los valores que usan sus fórmulas: longitud, tramos y superficie de muro; superficie, perímetro y número de áreas; o recuento.

## Marcas en PDF que no están abiertos

Una medición puede incluir marcas en PDF que no ha abierto en esta ocasión. Siguen contando en todos los totales; la lista de hojas indica el nombre de esos PDF. Consulte [Guardar y reabrir una medición](topic:save-and-reopen).

## Más espacio

El botón de flecha situado a la derecha del encabezado de {{ui:Cantidades}} oculta la tabla para dar más espacio a la hoja. Púlselo de nuevo para volver a mostrar la tabla.
