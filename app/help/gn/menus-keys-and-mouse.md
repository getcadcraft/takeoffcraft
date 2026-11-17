---
title: Menús, teclas y mouse
summary: Elegí un estilo de menú que coincida con tu forma de trabajar, dale a cualquier comando tu propia tecla, mové comandos entre menús, y configurá qué hacen la rueda y los botones del mouse.
keywords: estilo de menú, menús, barra de menús, cinta, pestañas de cinta, barra de herramientas, atajos de teclado, teclas rápidas, teclas, personalizar, reasignar, mouse, rueda, invertir, dirección del zoom, botón central, botón derecho, desplazar, exportar, importar, cambiar, familiar, escritorio de cómputo, condiciones
from: f01f0d6d
---

Los comandos de TakeoffCraft son los mismos sea cual sea la forma de llegar a ellos. Un **estilo de menú** solo decide dónde están en la pantalla, cómo se llaman allí y qué teclas los ejecutan. Elegí uno en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menús, teclas y mouse}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtenés |
|---|---|
| {{ui:TakeoffCraft}} | La barra de herramientas propia de TakeoffCraft: Archivo, Exportar, Escala, Cómputo, Editar y Vista, con las teclas de una letra para las herramientas. El inicio. |
| {{ui:Escritorio de cómputo}} | Una barra de menús ({{ui:Archivo}}, {{ui:Editar}}, {{ui:Vista}}, {{ui:Escala}}, {{ui:Cómputo}}, {{ui:Ítems}}, {{ui:Anotación}}, {{ui:Exportar}}) sobre una fila de herramientas de cómputo, como lo disponen los programas de cómputo en pantalla. Los ítems se llaman condiciones en la fila. Las mismas teclas, más {{key:N}} para un ítem nuevo. Los preajustes de escala pasan a la barra de la hoja, junto a la escala de la hoja. |
| {{ui:Cinta de cómputo}} | Pestañas de cinta con nombres según el trabajo: {{ui:Cómputo}} (medir, dar forma, escala, desde el plano, condiciones), {{ui:Editar}}, {{ui:Vista}}, {{ui:Anotación}} y {{ui:Presupuesto}} (la planilla, los PDF marcados, la oferta), con un menú {{ui:Archivo}} y una fila rápida para abrir, guardar, deshacer y rehacer. Las herramientas que usás todo el día son grandes, y sus vecinas, pequeñas y apiladas. Las mismas teclas; los preajustes de escala pasan a la barra de la hoja. |

Los tres estilos mantienen las teclas de TakeoffCraft: {{key:V}} seleccionar, {{key:L}} lineal, {{key:A}} área, {{key:O}} círculo, {{key:B}} ambiente, {{key:P}} trayecto (elegir las líneas del PDF), {{key:X}} recorte, {{key:C}} contar, {{key:S}} conteo automático, {{key:K}} calibrar, {{key:D}} verificar, {{key:R}} modo arco, {{key:E}} modo descontar, {{key:F}} y {{key:W}} para ajustar, {{key:3}} la vista 3D de verificación, {{key:F3}} ajuste, y {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Las herramientas de la barra de la hoja (notas, nubes, resaltados, Comparar, 3D) esperan hasta que haya un PDF abierto; si se eligen antes, la línea de estado lo indica.

:::tip
Una tecla que pertenece al diseño propio de TakeoffCraft pero que tu estilo asignó a otro comando no hace nada, y la línea de estado indica adónde fue a parar su comando ("En Mis teclas, Contar es Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su función. Mientras dibujás un tramo o un contorno, pegás o revisás un conteo automático, las letras y los números de una longitud escrita quedan con el dibujo.
:::

## Hacerlo tuyo

1. Elegí el estilo más cercano a lo que querés, y después hacé clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, buscá un comando (el cuadro de búsqueda ayuda). Hacé clic en {{ui:Emoĩ clave}} y presioná la tecla, o dos teclas seguidas para una tecla de dos letras. Hacé clic en una tecla para quitarla.
3. Con la barra de menús, {{ui:Dónde está}} mueve el comando a otro menú, o a {{ui:Solo teclas}}.
4. En {{ui:Mouse}}, configurá la rueda y los botones que desplazan la hoja.
5. Ponele un nombre y hacé clic en {{ui:Guardar}}.

Guardar un estilo integrado crea tu propia copia ("Mi escritorio de cómputo"); el integrado nunca cambia. Una tecla asignada a dos comandos se muestra en rojo y hay que corregirla antes de poder guardar.

## Mouse

- **Rueda del mouse**: {{ui:Subir la rueda acerca}} (el inicio) o {{ui:Subir la rueda aleja}}, y qué tan rápido. Un pellizco en el trackpad siempre hace zoom en la dirección en que se mueven tus dedos.
- **Desplazar la hoja con**: el botón central, el botón derecho, o ambos. Un arrastre con el izquierdo sobre el papel vacío y {{key:Space}} con un arrastre siempre desplazan; un clic derecho sin arrastrar siempre termina un tramo o un contorno.
- **Arrastrar en las vistas 3D**: {{ui:Propio de cada vista}} mantiene los botones de la vista 3D de verificación (izquierdo y central orbitan, el derecho desplaza). O configurá el botón central y el derecho para orbitar, desplazar, hacer zoom o nada; {{key:Shift}} con el botón intercambia orbitar y desplazar. El botón izquierdo siempre orbita y elige.

## Llevarlo con vos

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a los comandos propios de TakeoffCraft: lo demás se deja afuera y se cuenta en la línea de estado. {{ui:Eliminar este estilo}} quita uno de los tuyos.

:::note
Estas configuraciones quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}} debajo de las tarjetas de estilo hace que cada app se abra en su estilo correspondiente (su propia barra de herramientas, una barra de menús o una cinta), con los cambios que hayas hecho en cada una. TakeoffCraft no tiene un estilo con línea de comandos: cuando se elige uno para todas las apps, TakeoffCraft mantiene su propia barra de herramientas.

La {{ui:Cinta de cómputo}} es también la cinta del diseño {{ui:Cinta y explorador de proyecto}} ({{ui:Configuración}} › {{ui:Global}} › {{ui:Diseño}}): ver [La pantalla de TakeoffCraft](topic:workspace).
:::

Relacionado: [Teclado y mouse](topic:keyboard) · [Configuración de TakeoffCraft](topic:settings) · [Venís de otro software de cómputo](topic:coming-from)
