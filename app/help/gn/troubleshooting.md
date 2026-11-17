---
title: Solución de problemas
summary: Síntomas, causas y soluciones de los mensajes y sorpresas que podés encontrar en TakeoffCraft, citados tal como los muestra la aplicación.
keywords: problemas, errores, no funciona, solución, ayuda, rechazado, no mide, sin escala, marcas faltantes, falló la exportación, sin conexión, táctil
from: cd319c9b
---

TakeoffCraft explica la mayoría de los rechazos en la barra de estado de la parte inferior de la ventana. Buscá el mensaje abajo.

## Abrir archivos

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| El lector de PDF no pudo cargar. Recargá la página para intentar otra vez. | El lector de PDF de la aplicación no cargó, normalmente porque estás sin conexión y la aplicación nunca se guardó para uso sin conexión. | Reconectate y recargá. Luego elegí {{ui:Save for offline}} y esperá {{ui:Offline ready}}; ver [Uso sin conexión](common:offline). |
| (nombre) tiene contraseña. Abrí una copia sin protección. | El PDF necesita contraseña para abrirse. | Pedí una copia sin protección, o quitá la contraseña en un programa de PDF de confianza. |
| (nombre) no se pudo leer como PDF (…) | El archivo está dañado o no es realmente un PDF. | Descargalo otra vez, o volvé a guardarlo desde el programa que lo creó. |
| (nombre) ya está abierto. | El mismo PDF (mismo contenido) está abierto. | Nada que hacer. |
| TakeoffCraft abre PDF y proyectos .takeoff.json. Omitidos: … | Se descartaron otros tipos de archivo. | Convertí primero los planos a PDF. |
| No pasa nada cuando suelto archivos | Los archivos se soltaron fuera de la ventana del navegador, o el navegador abrió el PDF en una pestaña nueva. | Soltalos sobre la propia página de TakeoffCraft; el recuadro "Soltá PDF o un .takeoff.json" muestra cuándo va a funcionar. |
| Abrir un juego grande tarda | Cada PDF se lee completo para identificarlo. | Esperá a que desaparezca el mensaje "Abriendo (nombre)…". Las miniaturas se completan al desplazarte. |

## Medir

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Primero abrí un PDF. | No hay ninguna hoja abierta. | Abrí un PDF. |
| Esta hoja todavía no tiene escala, así que no se puede medir. Elegí una escala predeterminada o calibrá primero (los conteos funcionan sin escala). | Las herramientas Lineal, Área, Círculo y Recorte necesitan escala. | [Fijar la escala](topic:set-the-scale). |
| Primero creá un ítem lineal (ponele nombre en Ítems), luego hacé clic en la hoja. | No existe ningún ítem de ese tipo. | Completá el formulario {{ui:New item}} que se abrió, y elegí {{ui:Add}}. |
| Primero elegí un ítem para computar (panel Ítems). | El ítem actual fue eliminado. | Hacé clic en un ítem bajo {{ui:Items}}. |
| Un tramo necesita al menos dos puntos. | Terminaste después de un solo clic. | Hacé clic en al menos dos puntos. |
| Un área necesita al menos tres puntos. | Muy pocas esquinas. | Hacé clic en al menos tres esquinas. |
| El contorno se cruza a sí mismo, así que su área sería incorrecta. Dibujalo otra vez sin cruzarlo. | Una forma de ocho. | Dibujalo como dos áreas, o recorré el borde en orden. |
| Esos puntos no encierran ningún área. | Todos los puntos están sobre una misma línea. | Hacé clic en esquinas que encierren un espacio. |
| Primero seleccioná una marca de área (herramienta Seleccionar), luego elegí Recorte y dibujá el hueco dentro. | {{ui:Cut-out}} necesita un área seleccionada. | Presioná {{key:V}}, hacé clic en el área, y luego {{key:X}}. |
| Un recorte tiene que estar completamente dentro del área. | El hueco cruza o sale del contorno. | Dibujá el hueco dentro del área. |
| Los recortes no pueden superponerse entre sí. | Dos huecos se superponen. | Dibujá un hueco que abarque ambos, o separalos. |
| … El punto volvió a su lugar. | Una esquina arrastrada haría que el contorno se cruzara o que un hueco quedara fuera. | Arrastrala a un lugar que mantenga la forma válida. |
| Hacé clic en un punto del borde del círculo, lejos de su centro. | El segundo clic estuvo demasiado cerca del centro. | Hacé clic más afuera. |
| Los clics desplazan la hoja en lugar de agregar puntos | El puntero se movió más de unos pocos píxeles con el botón presionado; eso cuenta como arrastre. | Hacé clic sin moverte, sobre todo en un trackpad. |
| Shift no ajusta | Estás colocando un punto en un arco, o dibujando un círculo. | El ajuste de 45° aplica solo a segmentos rectos. |
| Los puntos saltan a una línea cercana | Snap a las líneas del plano está activado. | Hacé zoom para hacer clic entre líneas, o presioná {{key:F3}} para desactivar Snap. |
| No aparece ningún marcador de snap | Snap está desactivado, la hoja es un escaneo, o la herramienta no ajusta (Contar, Conteo automático, pegar). | Presioná {{key:F3}}; en un escaneo no hay líneas a las que ajustarse. |
| La longitud es incorrecta | La escala es incorrecta (suele pasar con un PDF redimensionado y un preset). | Usá {{ui:Check}} sobre una cota conocida, y luego {{ui:Calibrate}}. |

## Escala

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Elegí dos puntos más separados. | Los puntos de calibración están casi encima uno del otro. | Calibrá sobre una cota más larga. |
| Un mensaje en el diálogo de calibrar, como "That distance could not be read" | La distancia está escrita en un formato que TakeoffCraft no puede leer. | Ver [Formato de longitud, tarifa y porcentaje](topic:entry-formats). |
| Esta hoja todavía no tiene escala, así que no hay nada que verificar. Calibrala, o elegí un preset. | {{ui:Check}} sobre una hoja sin escala. | Fijá primero una escala. |
| La lista {{ui:Preset}} está deshabilitada | No hay ninguna hoja abierta. | Abrí un PDF. |

## Cantidades y fórmulas

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Incompleto: … (no está en los totales) | Un error de fórmula, o marcas en hojas sin escala. | Ver [Leer cantidades y el presupuesto](topic:read-quantities#the-incomplete-warning). |
| +(n) sin escala junto a un ítem | Algunas de sus marcas están en hojas sin escala. | Dales escala a esas hojas. |
| Error de fórmula: … | La fórmula no se puede calcular. | Ver [Lenguaje de fórmulas](topic:formulas#errors). |
| Este ítem tiene marcas, así que su tipo no puede cambiar. | El tipo queda bloqueado una vez que hay marcas. | Creá un ítem nuevo del otro tipo y volvé a dibujar las marcas con él. |
| Un ítem necesita un nombre. | Se vació el campo de nombre. | Escribí un nombre. |
| Escribí un importe como 12.50. / Escribí un porcentaje como 10 o 7.5. | No se pudo leer una tarifa o desperdicio. | Ver [Formato de longitud, tarifa y porcentaje](topic:entry-formats). |
| Un total parece duplicado | El ítem tiene tarifas propias y componentes que llevan el mismo costo. | Poné en 0 las tarifas propias del ítem cuando sus componentes llevan el costo. |
| Las marcas de este ítem están en PDF que no están abiertos. | Hiciste clic en un ítem cuyas marcas están todas en PDF que no abriste. | Abrí esos PDF; sus nombres figuran bajo {{ui:Sheets}}. |

## Conteo automático

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Ese recuadro es demasiado chico. Dibujalo alrededor de todo el símbolo. | El recuadro es diminuto. | Hacé zoom y encuadrá todo el símbolo. |
| Ese recuadro está casi vacío. Dibujalo alrededor de un símbolo. | El recuadro solo contiene papel. | Encuadrá el símbolo mismo. |
| Sin coincidencias. Bajá el control deslizante de {{ui:Match}}, o encuadrá el símbolo más ajustado. | Nada obtuvo puntaje suficiente. | Encuadrá el símbolo más ajustado, o arrastrá el control {{ui:Match}} más abajo. |
| Demasiadas coincidencias, incluidos símbolos equivocados | Los símbolos parecidos puntúan cerca del real. | Subí el control {{ui:Match}} y hacé clic en los recuadros equivocados para rechazarlos. |
| Faltan coincidencias en otras hojas | Esas hojas dibujan el símbolo en otro tamaño, o en un ángulo que no es un paso de 90°. | Buscá en esas hojas con un recuadro dibujado allí, o contá a mano. |
| (n) hojas eran demasiado grandes para buscar con este tamaño de símbolo. | La hoja sería demasiado grande al tamaño de trabajo. | Encuadrá un símbolo más grande, o contá esa hoja a mano. |
| La búsqueda falló: … | La búsqueda en segundo plano se detuvo. | Intentá otra vez; recargá la página si se repite (guardá antes). Sin conexión, funciona solo cuando la barra de la aplicación muestra {{ui:Offline ready}}. |
| Arrastrar dibuja un recuadro en lugar de desplazar | Así funciona {{ui:Auto count}}. | Mantené presionado {{key:Space}} y arrastrá, o arrastrá con el botón central. |

## Guardar y exportar

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Nada para exportar todavía: creá un ítem y computalo. | No hay ítems. | Creá primero un ítem. |
| Todavía no hay marcas en los PDF abiertos. | {{ui:Marked PDF}} no tiene nada que dibujar en los PDF abiertos. | Abrí los PDF que tienen marcas. |
| Este PDF tiene contraseña o está cifrado, así que no se puede escribir una copia marcada. … | El PDF está cifrado. | Exportá {{ui:XLSX}} en su lugar, o usá una copia sin cifrar del PDF (entonces necesita su propio cómputo, porque es otro archivo). |
| No se pudo escribir el PDF marcado: … | Suele ocurrir sin conexión, y la aplicación no se guardó para uso sin conexión, así que falta el escritor de PDF. | Conectate a internet y volvé a elegir {{ui:Marked PDF}}. Para evitarlo, elegí {{ui:Save for offline}} y esperá {{ui:Offline ready}}. |
| Solo se descargó un PDF marcado | El navegador bloqueó varias descargas a la vez. | Permití descargas múltiples para este sitio, y exportá otra vez. |
| (archivo) no es un proyecto de TakeoffCraft (no es JSON válido). / Este no es un archivo de proyecto de TakeoffCraft. | Archivo equivocado, o dañado. | Elegí el archivo `.takeoff.json`. |
| Este proyecto fue guardado por una versión más nueva de TakeoffCraft. Abrilo allí. | El archivo viene de una compilación más nueva. | Abrilo en la compilación más nueva. |
| (n) marcas estaban dañadas y se omitieron. | Parte del archivo se dañó o se editó a mano. | El resto se abrió. Volvé a dibujar las marcas faltantes, o abrí una copia anterior. |
| Marcas faltantes después de reabrir | Los PDF no están abiertos, o uno de ellos cambió. | Ver [Guardar y reabrir un cómputo](topic:save-and-reopen#when-a-pdf-has-changed). |
| El navegador pregunta "¿Salir del sitio?" | Hay cambios sin guardar. | Quedate, y guardá con {{key:Mod+S}}. |

## Teclas y mouse

| Síntoma | Causa | Solución |
|---|---|---|
| Las teclas de letras no hacen nada | El cursor está en un campo (búsqueda, editor de ítems, tabla). | Hacé clic en la hoja, o presioná {{key:Tab}} para salir del campo. |
| La rueda hace zoom en lugar de desplazar | La rueda siempre hace zoom sobre la hoja. | Arrastrá para desplazar. |
| Toda la página se agrandó o achicó | Zoom del navegador ({{key:Mod+Plus}} o {{key:Mod+Minus}}). | Presioná {{key:Mod+0}}. Hacé zoom en la hoja con la rueda o con {{key:Plus}} y {{key:Minus}} solos. |
| Una marca desapareció al presionar Backspace | Backspace borra la marca seleccionada cuando no estás dibujando. | {{key:Mod+Z}} la devuelve. |
| El clic derecho no termina en un Mac | El control-clic llega como un clic normal. | Usá un clic con dos dedos con clic secundario activado, o presioná {{key:Enter}}. |

## Pantallas táctiles

En una pantalla táctil:

- **Tocar** coloca un punto (o selecciona una marca con {{ui:Select}}). Arrastrar con un dedo desplaza.
- **Dos dedos** pellizcan para hacer zoom alrededor del punto entre ellos, y desplazan cuando se mueven juntos. Apoyar un segundo dedo cancela lo que empezó el primero, así un pellizco nunca deja un punto.
- **Terminar** un tramo o un contorno con una **pulsación larga** (el clic derecho), un **doble toque**, o {{ui:Finish}} en la barra de la parte inferior de la hoja. La misma barra tiene {{ui:Back}} (quitar el último punto) y {{ui:Cancel}}. Las áreas también se cierran tocando el primer punto.
- Los dedos tienen objetivos más grandes: los puntos se ajustan, cierran y eligen desde más lejos, y las asas de esquina son más grandes.

Escribir longitudes necesita teclado; el teclado en pantalla funciona cuando el recuadro {{ui:Type}} tiene el foco.

En una tableta, un teclado y un mouse o trackpad hacen el cómputo mucho más fácil.

## Uso sin conexión

| Botón o síntoma | Causa | Solución |
|---|---|---|
| {{ui:Could not save}} | Algunos archivos de la aplicación no se descargaron al guardar para uso sin conexión. | Revisá tu conexión y volvé a elegir el botón. |
| {{ui:Offline not available}} | Las ventanas privadas y algunas computadoras administradas bloquean las copias sin conexión. | Usá una ventana normal, u otro navegador. |
| "Guardando…" nunca empieza | Estás sin conexión; guardar necesita conexión. | Guardá con conexión. |
| La aplicación está vieja después de una actualización | La copia sin conexión es de un día anterior. | Con conexión, elegí {{ui:Offline ready}}, luego {{ui:Save again (get the newest version)}}. |
| Querés recuperar el espacio | La copia sin conexión ocupa unos 6 MB. | Elegí {{ui:Offline ready}}, luego {{ui:Remove the offline copy}}. |

Ver [Uso sin conexión](common:offline).

## Sigue sin funcionar

Recargá la página si la aplicación deja de responder. Tu cómputo se pierde al recargar salvo que lo hayas guardado, así que guardá primero con {{key:Mod+S}} si podés. Para preguntas sobre navegadores ver [Navegadores y computadoras](common:browsers).
