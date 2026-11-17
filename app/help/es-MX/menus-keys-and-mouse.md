---
title: Menús, teclas y ratón
summary: Elija un estilo de menús que coincida con su forma de trabajar, asigne su propia tecla a cualquier comando, mueva comandos entre menús y defina qué hacen la rueda y los botones del ratón.
keywords: estilo de menú, menús, barra de menús, cinta, pestañas de cinta, barra de herramientas, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, encuadre, exportar, importar, cambiar, familiar, mesa de cuantificación, condiciones
from: f01f0d6d
---

Los comandos de TakeoffCraft son los mismos sin importar por dónde los llegue. Un **estilo de menú** solo decide dónde aparecen en pantalla, cómo se llaman allí y qué teclas los ejecutan. Elíjalo en {{ui:Settings}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menus, keys and mouse}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:TakeoffCraft}} | La barra de herramientas propia de TakeoffCraft: Archivo, Exportar, Escala, Cuantificación, Edición y Vista, con las teclas de herramienta de una letra. El inicio. |
| {{ui:Takeoff desk}} | Una barra de menús ({{ui:File}}, {{ui:Edit}}, {{ui:View}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Items}}, {{ui:Markup}}, {{ui:Export}}) sobre una fila de herramientas de cuantificación, como las disponen los programas de cuantificación en pantalla. En la fila, las partidas se llaman condiciones. Las mismas teclas, más {{key:N}} para una partida nueva. Los preajustes de escala pasan a la barra de la hoja, junto a la escala de la hoja. |
| {{ui:Takeoff ribbon}} | Pestañas de cinta con nombres según el trabajo: {{ui:Takeoff}} (medir, dar forma, escala, desde el dibujo, condiciones), {{ui:Edit}}, {{ui:View}}, {{ui:Markup}} y {{ui:Estimate}} (el libro, los PDF marcados, la oferta), con un menú {{ui:File}} y una fila rápida para abrir, guardar, deshacer y rehacer. Las herramientas que usa todo el día son grandes, y sus vecinas, pequeñas y apiladas. Las mismas teclas; los preajustes de escala pasan a la barra de la hoja. |

Los tres estilos conservan las teclas de TakeoffCraft: {{key:V}} seleccionar, {{key:L}} lineal, {{key:A}} área, {{key:O}} círculo, {{key:B}} cuarto, {{key:P}} trayectoria (elegir las líneas del PDF), {{key:X}} recorte, {{key:C}} conteo, {{key:S}} conteo automático, {{key:K}} calibrar, {{key:D}} comprobar, {{key:R}} modo de arco, {{key:E}} modo de deducción, {{key:F}} y {{key:W}} para ajustar, {{key:3}} la vista de comprobación 3D, {{key:F3}} forzcursor, y {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Las herramientas de la barra de la hoja (notas, nubes, resaltados, Comparar, 3D) esperan hasta que se abre un PDF; si las elige antes, la línea de estado lo indica.

:::tip
Una tecla que pertenece al diseño propio de TakeoffCraft, pero que su estilo asignó a otro comando, no hace nada, y la línea de estado indica adónde fue su comando ("En Mis teclas, Conteo es Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su significado. Mientras dibuja un tramo o un contorno, pega o revisa un conteo automático, las letras y los números de una longitud escrita siguen siendo del dibujo.
:::

## Hágalo suyo

1. Elija el estilo más cercano a lo que quiere, y luego haga clic en {{ui:Customize…}}.
2. En {{ui:Keys and menus}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Add a key}} y pulse la tecla, o dos teclas seguidas para una tecla de dos letras. Haga clic en una tecla para quitarla.
3. Con la barra de menús, {{ui:Where it sits}} mueve el comando a otro menú, o a {{ui:Keys only}}.
4. En {{ui:Mouse}}, defina la rueda y los botones que encuadran la hoja.
5. Asígnele un nombre y haga clic en {{ui:Save}}.

Al guardar un estilo integrado se crea su propia copia ("Mi Mesa de cuantificación"); el integrado nunca cambia. Una tecla asignada a dos comandos se muestra en rojo y debe corregirse antes de guardar.

## Ratón

- **Rueda del ratón**: {{ui:Scroll up zooms in}} (el inicio) o {{ui:Scroll up zooms out}}, y qué tan rápido. Un pellizco en el panel táctil siempre hace zoom en la dirección en que se mueven sus dedos.
- **Encuadrar la hoja con**: el botón central, el botón derecho, o ambos. Un arrastre con el botón izquierdo sobre papel vacío y {{key:Space}} con un arrastre siempre encuadran; un clic derecho sin arrastrar siempre termina un tramo o un contorno.
- **Arrastre en las vistas 3D**: {{ui:Propios de cada vista}} mantiene los botones de la vista de comprobación 3D (izquierdo y central orbitan, derecho encuadra). O bien asigne los botones central y derecho a orbitar, encuadrar, hacer zoom o nada; {{key:Shift}} con el botón intercambia orbitar y encuadrar. El botón izquierdo siempre orbita y elige.

## Llévelo con usted

{{ui:Export}} guarda el estilo en uso como un archivo pequeño `.ccinput.json`; {{ui:Import…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a los comandos propios de TakeoffCraft: lo demás se omite y se cuenta en la línea de estado. {{ui:Delete this style}} elimina uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Use this style in every app}} bajo las tarjetas de estilo hace que cada app se abra en su estilo correspondiente (su propia barra de herramientas, una barra de menús o una cinta), con los cambios que hizo en cada app. TakeoffCraft no tiene un estilo con línea de comandos: cuando se elige uno para todas las apps, TakeoffCraft conserva su propia barra de herramientas.
:::

La {{ui:Takeoff ribbon}} también es la cinta del diseño {{ui:Ribbon and project browser}} ({{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}): vea [La pantalla de TakeoffCraft](topic:workspace).

Relacionado: [Teclado y ratón](topic:keyboard) · [Configuración de TakeoffCraft](topic:settings) · [Cómo llegar desde otro software de cuantificación](topic:coming-from)
