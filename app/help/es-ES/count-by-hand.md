---
title: Contar a mano
summary: Haga clic en cada puerta, luminaria o dispositivo para contarlo, revise sus recuentos y corrija los errores.
keywords: contar, cada uno, ud, luminarias, puertas, aparatos, dispositivos, símbolos, recuento con clic, recuento manual
from: 594f2980
---

Una partida de recuento cuenta cosas: puertas, luminarias, tomas, aparatos sanitarios. Cada clic sobre la hoja añade una marca de recuento. Contar no necesita escala.

## Contar

1. Cree o haga clic en una partida de recuento bajo {{ui:Partidas}} (tipo {{ui:Recuento}}).
2. Elija {{ui:Recuento}} en la barra de herramientas, o pulse {{key:C}}.
3. Haga clic en cada uno sobre la hoja.
   Cada clic pone un punto del color de la partida, y el recuento de la partida sube en uno.
4. Pase a la siguiente hoja ({{key:PageDown}}) y siga contando. La herramienta sigue en {{ui:Recuento}}.
5. Pulse {{key:Esc}} al terminar. TakeoffCraft vuelve a {{ui:Seleccionar}}.

Arrastrar sigue desplazando y la rueda sigue haciendo zoom mientras cuenta, así que puede moverse por la hoja sin añadir puntos.

:::tip
Haga clic en la partida de recuento para resaltar sus puntos en todas las hojas. La lista de hojas indica entonces cuántos hay en cada una, lo que le ayuda a encontrar las hojas que todavía no ha contado.
:::

## Corregir un recuento

- **Quitar un punto**: elija {{ui:Seleccionar}} ({{key:V}}), haga clic en el punto y pulse {{key:Delete}} o elija {{ui:Borrar marca}}. O pulse {{key:Mod+Z}} justo después de un clic equivocado.
- **Mover un punto**: selecciónelo y luego arrástrelo.
- **Contado en la partida equivocada**: seleccione el punto y elija la partida de recuento correcta en la lista **Partida** bajo **Marca seleccionada**.

## Tamaño de los puntos, en pantalla y en el PDF

Los puntos mantienen un tamaño en pantalla por mucho zoom que haga. Para cambiarlo, abra {{ui:Ajustes}}, la pestaña TakeoffCraft, y elija **Tamaño del marcador de recuento**: Muy pequeño, Pequeño, Mediano (el predeterminado) o Grande.

La exportación a PDF ({{ui:Exportar}} › el PDF anotado) dibuja cada punto con el mismo tamaño en papel, sea cual sea el tamaño de la hoja: un visor que muestre el PDF al 100 % ve los puntos tan grandes como en pantalla. Cuando los puntos de una hoja se tocarían, la exportación reduce los de esa hoja para que cada uno se pueda leer.

## Muchos símbolos idénticos

Para un símbolo que se repite muchas veces en una hoja, pruebe [Autorrecuento](topic:auto-count): enmarque uno, revise lo que encuentra y añádalos todos en un solo paso.

## Usar recuentos en fórmulas

La cantidad de una partida de recuento es **N**. Los componentes del conjunto pueden usarla, por ejemplo bisagras `N * 3` para puertas. Consulte [Conjuntos y fórmulas](topic:assemblies).
