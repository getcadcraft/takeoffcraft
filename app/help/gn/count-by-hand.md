---
title: Contar a mano
summary: Hacé clic en cada puerta, artefacto o dispositivo para contarlo, revisá los conteos y corregí errores.
keywords: contar, cada uno, ea, artefactos, puertas, dispositivos, símbolos, conteo a mano, clic para contar, conteo manual
from: 594f2980
---

Un ítem de conteo cuenta cosas: puertas, artefactos de luz, tomas, artefactos sanitarios. Cada clic en la hoja agrega una marca de conteo. Contar no necesita escala.

## Contar

1. Creá o hacé clic en un ítem de conteo bajo {{ui:Items}} (tipo {{ui:Count}}).
2. Elegí {{ui:Count}} en la barra de herramientas, o presioná {{key:C}}.
3. Hacé clic en cada uno en la hoja.
   Cada clic pone un punto del color del ítem, y el conteo del ítem sube en uno.
4. Pasá a la siguiente hoja ({{key:PageDown}}) y seguí contando. La herramienta sigue en {{ui:Count}}.
5. Presioná {{key:Esc}} cuando termines. TakeoffCraft vuelve a {{ui:Select}}.

Arrastrar sigue desplazando y la rueda sigue haciendo zoom mientras contás, así podés moverte por la hoja sin agregar puntos.

:::tip
Hacé clic en el ítem de conteo para resaltar sus puntos en todas las hojas. La lista de hojas muestra entonces cuántos hay en cada una, lo que ayuda a encontrar las hojas que todavía no contaste.
:::

## Corregir un conteo

- **Quitar un punto**: elegí {{ui:Select}} ({{key:V}}), hacé clic en el punto y presioná {{key:Delete}} o elegí {{ui:Delete mark}}. O presioná {{key:Mod+Z}} justo después de un clic equivocado.
- **Mover un punto**: seleccionalo y arrastralo.
- **Contado bajo el ítem equivocado**: seleccioná el punto y elegí el ítem correcto en la lista **Item** bajo **Selected mark**.

## Tamaño del punto, en pantalla y en el PDF

Los puntos mantienen un tamaño en pantalla sin importar cuánto hagas zoom. Para cambiarlo, abrí {{ui:Settings}}, la pestaña TakeoffCraft, y elegí **Count marker size**: Extra small, Small, Medium (el predeterminado) o Large.

La exportación a PDF ({{ui:Export}} › el PDF marcado) dibuja cada punto del mismo tamaño en papel, sea cual sea el tamaño de la hoja: un visor que muestra el PDF al 100% muestra los puntos tan grandes como en pantalla. Si en una hoja los puntos se tocarían, la exportación reduce el tamaño de esos puntos para que cada uno se pueda leer.

## Muchos símbolos idénticos

Para un símbolo que se repite muchas veces en una hoja, probá [Conteo automático](topic:auto-count): encuadrá uno, revisá lo que encuentra y agregalos todos de una vez.

## Usar conteos en fórmulas

La cantidad de un ítem de conteo es **N**. Los componentes de un conjunto pueden usarla, por ejemplo bisagras `N * 3` para puertas. Ehecha [Conjuntos y fórmulas](topic:assemblies).
