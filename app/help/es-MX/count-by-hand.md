---
title: Contar a mano
summary: Haga clic en cada puerta, accesorio o dispositivo para contarlo, revise sus conteos y corrija los errores.
keywords: contar, cada uno, ea, accesorios, puertas, dispositivos, símbolos, recuento, conteo con clic, conteo manual
from: 594f2980
---

Una partida de conteo cuenta objetos: puertas, luminarias, contactos, muebles sanitarios. Cada clic sobre la hoja agrega una marca de conteo. Contar no necesita escala.

## Contar

1. Cree o haga clic en una partida de conteo en {{ui:Partidas}} (tipo {{ui:Conteo}}).
2. Elija {{ui:Conteo}} en la barra de herramientas, o pulse {{key:C}}.
3. Haga clic en cada uno sobre la hoja.
   Cada clic pone un punto del color de la partida, y el conteo de la partida sube en uno.
4. Pase a la siguiente hoja ({{key:PageDown}}) y siga contando. La herramienta sigue en {{ui:Conteo}}.
5. Pulse {{key:Esc}} cuando termine. TakeoffCraft regresa a {{ui:Seleccionar}}.

Arrastrar sigue encuadrando y la rueda sigue haciendo zoom mientras cuenta, así que puede moverse por la hoja sin agregar puntos.

:::tip
Haga clic en la partida de conteo para resaltar sus puntos en todas las hojas. La lista de hojas muestra entonces cuántos hay en cada una, lo que ayuda a encontrar las hojas que todavía no ha contado.
:::

## Corregir un conteo

- **Quitar un punto**: elija {{ui:Seleccionar}} ({{key:V}}), haga clic en el punto y pulse {{key:Delete}} o elija {{ui:Eliminar marca}}. O pulse {{key:Mod+Z}} justo después de un clic equivocado.
- **Mover un punto**: selecciónelo y luego arrástrelo.
- **Contado en la partida equivocada**: seleccione el punto y elija la partida de conteo correcta en la lista **Partida**, bajo **Marca seleccionada**.

## Tamaño del punto, en pantalla y en el PDF

Los puntos conservan el mismo tamaño en pantalla sin importar el zoom. Para cambiarlo, abra {{ui:Configuración}}, la pestaña TakeoffCraft, y elija **Tamaño del marcador de conteo**: Extra pequeño, Pequeño, Mediano (el predeterminado) o Grande.

La exportación a PDF ({{ui:Exportar}} › el PDF marcado) dibuja cada punto con el mismo tamaño en papel, sea cual sea el tamaño de la hoja: un visor que muestra el PDF al 100 % muestra los puntos tan grandes como en pantalla. Cuando los puntos de una hoja se tocarían entre sí, la exportación reduce el tamaño de los puntos de esa hoja para que cada uno pueda leerse.

## Muchos símbolos idénticos

Para un símbolo que se repite muchas veces en una hoja, pruebe [Conteo automático](topic:auto-count): enmarque uno, revise lo que encuentra y agréguelos todos en un paso.

## Usar conteos en fórmulas

La cantidad de una partida de conteo es **N**. Los componentes de un conjunto pueden usarla; por ejemplo, bisagras `N * 3` para puertas. Consulte [Conjuntos y fórmulas](topic:assemblies).
