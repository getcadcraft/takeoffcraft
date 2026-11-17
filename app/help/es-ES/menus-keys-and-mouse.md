---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que encaje con su forma de trabajar, asigne a cualquier comando su propia tecla, mueva comandos entre menús y defina lo que hacen la rueda y los botones del ratón.
keywords: estilo de menú, menús, barra de menús, cinta, pestañas de cinta, barra de herramientas, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, desplazar, exportar, importar, cambiar, familiar, mesa de medición, condiciones
from: f01f0d6d
---

Los comandos de TakeoffCraft son los mismos sea cual sea el camino para llegar a ellos. Un **estilo de menú** solo decide dónde aparecen en pantalla, cómo se llaman allí y qué teclas los ejecutan. Elíjalo en {{ui:Ajustes}} ({{key:Mod+,}}) › {{ui:Medición}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:Medición}} | La barra de herramientas propia de TakeoffCraft: Archivo, Exportar, Escala, Medición, Editar y Vista, con las teclas de herramienta de una sola letra. El inicio. |
| {{ui:Mesa de medición}} | Una barra de menús ({{ui:Archivo}}, {{ui:Editar}}, {{ui:Vista}}, {{ui:Escala}}, {{ui:Medición}}, {{ui:Partidas}}, {{ui:Anotación}}, {{ui:Exportar}}) sobre una fila de herramientas de medición, como disponen sus herramientas los programas de medición en pantalla. En la fila, las partidas se llaman condiciones. Las mismas teclas, más {{key:N}} para una partida nueva. Los presets de escala pasan a la barra de la hoja, junto a la escala de la hoja. |
| {{ui:Cinta de mediciones}} | Pestañas de cinta con nombres según el trabajo: {{ui:Medición}} (medir, dar forma, escala, desde el dibujo, condiciones), {{ui:Editar}}, {{ui:Vista}}, {{ui:Anotación}} y {{ui:Estimación}} (el libro, los PDF anotados, la oferta), con un menú {{ui:Archivo}} y una fila rápida para abrir, guardar, deshacer y rehacer. Las herramientas que usa a diario son grandes; sus vecinas, pequeñas y apiladas. Las mismas teclas; los presets de escala pasan a la barra de la hoja. |

Los tres estilos mantienen las teclas de TakeoffCraft: {{key:V}} seleccionar, {{key:L}} lineal, {{key:A}} área, {{key:O}} círculo, {{key:B}} sala, {{key:P}} trayectoria (elegir las líneas del PDF), {{key:X}} recorte, {{key:C}} recuento, {{key:S}} autorrecuento, {{key:K}} calibrar, {{key:D}} comprobar, {{key:R}} modo de arco, {{key:E}} modo de descuento, {{key:F}} y {{key:W}} para ajustar, {{key:3}} la vista de comprobación 3D, {{key:F3}} ajustar, y {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Las herramientas de la barra de la hoja (notas, nubes, resaltados, Comparar, 3D) esperan a que haya un PDF abierto; si se eligen antes, la línea de estado lo indica.

:::tip
Una tecla que pertenece a la disposición propia de TakeoffCraft, pero que su estilo asignó a otro comando, no hace nada, y la línea de estado indica adónde fue su comando («En Mis teclas, Recuento es Ctrl+Alt+C»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas conservan siempre su significado. Mientras dibuja un tramo o un contorno, o pega o revisa un autorrecuento, las letras y los números de una longitud escrita siguen siendo del dibujo.
:::

## Personalícelo

1. Elija el estilo más cercano a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Añadir una tecla}} y pulse la tecla, o dos teclas seguidas para una tecla de dos letras. Haga clic en una tecla para quitarla.
3. Con la barra de menús, {{ui:Dónde está}} mueve el comando a otro menú, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda y los botones que desplazan la hoja.
5. Póngale un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia («Mi mesa de medición»); el integrado nunca cambia. Una tecla asignada a dos comandos se muestra en rojo, y hay que corregirla antes de poder guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el inicio) o {{ui:Girar hacia arriba aleja}}, y a qué velocidad. Un pellizco en el panel táctil siempre amplía en el sentido en que se mueven sus dedos.
- **Desplazar la hoja con**: el botón central, el botón derecho, o ambos. Un arrastre con el botón izquierdo sobre papel vacío, y {{key:Space}} con un arrastre, siempre desplazan; un clic derecho sin arrastrar siempre termina un tramo o un contorno.
- **Arrastrar en las vistas 3D**: «Los de cada vista» mantiene los botones de la vista de comprobación 3D (izquierdo y central orbitan, derecho desplaza). O bien asigne el botón central y el derecho a orbitar, desplazar, ampliar o nada; {{key:Shift}} con el botón intercambia orbitar y desplazar. El botón izquierdo siempre orbita y elige.

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} añade uno, desde otro equipo o de un compañero. Un archivo importado solo puede apuntar a los comandos propios de TakeoffCraft: lo demás se deja fuera y se cuenta en la línea de estado. {{ui:Borrar este estilo}} elimina uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}} bajo las tarjetas de estilo hace que cada aplicación se abra en su estilo correspondiente (su propia barra de herramientas, una barra de menús o una cinta), con los cambios que hizo en cada aplicación. TakeoffCraft no tiene un estilo con línea de comandos: cuando se elige uno para todas las aplicaciones, TakeoffCraft mantiene su propia barra de herramientas.

La {{ui:Cinta de mediciones}} es también la cinta de la disposición {{ui:Cinta y explorador de proyectos}} ({{ui:Ajustes}} › {{ui:Global}} › {{ui:Disposición}}): consulte [La pantalla de TakeoffCraft](topic:workspace).
:::

Relacionado: [Teclado y ratón](topic:keyboard) · [Ajustes de TakeoffCraft](topic:settings) · [Si viene de otro software de medición](topic:coming-from)
