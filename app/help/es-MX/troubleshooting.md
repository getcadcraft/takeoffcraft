---
title: Solución de problemas
summary: Síntomas, causas y soluciones de los mensajes y sorpresas que puede encontrar en TakeoffCraft, citados tal como los muestra la aplicación.
keywords: problemas, errores, no funciona, solución, ayuda, rechazado, no mide, sin escala, faltan marcas, falla al exportar, sin conexión, táctil
from: cd319c9b
---

TakeoffCraft explica la mayoría de los rechazos en la barra de estado inferior de la ventana. Busque el mensaje abajo.

## Abrir archivos

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| El lector de PDF no se pudo cargar. Recargue la página para intentarlo de nuevo. | El lector de PDF de la aplicación no se cargó, normalmente porque no tiene conexión y la aplicación nunca se guardó para uso sin conexión. | Vuelva a conectarse y recargue. Luego elija {{ui:Guardar para usar sin conexión}} y espere a {{ui:Lista sin conexión}}; vea [Trabajar sin conexión](common:offline). |
| (nombre) está protegido con contraseña. Abra una copia sin protección. | El PDF necesita una contraseña para abrirse. | Pida una copia sin protección, o quite la contraseña en un programa de PDF de su confianza. |
| (nombre) no se pudo leer como PDF (…) | El archivo está dañado o no es realmente un PDF. | Descárguelo de nuevo, o vuelva a guardarlo desde el programa que lo creó. |
| (nombre) ya está abierto. | El mismo PDF (mismo contenido) ya está abierto. | No hay nada que hacer. |
| TakeoffCraft abre PDFs y proyectos .takeoff.json. Omitidos: … | Se descartaron otros tipos de archivo. | Convierta primero los dibujos a PDF. |
| No pasa nada al soltar archivos | Los archivos se soltaron fuera de la ventana del navegador, o el navegador abrió el PDF en una pestaña nueva. | Suelte los archivos sobre la página de TakeoffCraft; el recuadro "Suelte PDFs o un .takeoff.json" indica cuándo funcionará. |
| Abrir un juego grande tarda un poco | Cada PDF se lee completo para identificarlo. | Espere a que desaparezca el mensaje "Abriendo (nombre)…". Las miniaturas se completan al desplazarse. |

## Medir

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Primero abra un PDF. | No hay ninguna hoja abierta. | Abra un PDF. |
| Esta hoja aún no tiene escala, así que no se puede medir. Elija una escala predefinida o calibre primero (los conteos funcionan sin escala). | Las herramientas lineal, área, círculo y recorte necesitan una escala. | [Establezca la escala](topic:set-the-scale). |
| Primero cree una partida lineal (asígnele nombre en Partidas), luego haga clic en la hoja. | No hay ninguna partida de ese tipo. | Complete el formulario {{ui:Nueva partida}} que se abrió y elija {{ui:Agregar}}. |
| Primero elija una partida para cuantificar (panel Partidas). | La partida actual se eliminó. | Haga clic en una partida bajo {{ui:Partidas}}. |
| Un tramo necesita al menos dos puntos. | Terminó después de un clic. | Haga clic en al menos dos puntos. |
| Un área necesita al menos tres puntos. | Muy pocas esquinas. | Haga clic en al menos tres esquinas. |
| El contorno se cruza consigo mismo, así que su área sería incorrecta. Dibújelo de nuevo sin cruzarlo. | Una forma de ocho. | Dibújelo como dos áreas, o recorra el borde en orden. |
| Esos puntos no encierran ningún área. | Todos los puntos están sobre una misma línea. | Haga clic en esquinas que encierren un espacio. |
| Primero seleccione una marca de área (herramienta {{ui:Seleccionar}}), luego elija {{ui:Recorte}} y dibuje el hueco dentro de ella. | {{ui:Recorte}} necesita un área seleccionada. | Pulse {{key:V}}, haga clic en el área y luego pulse {{key:X}}. |
| Un recorte debe quedar completamente dentro del área. | El hueco cruza o sale del contorno. | Dibuje el hueco dentro del área. |
| Los recortes no pueden superponerse entre sí. | Dos huecos se superponen. | Dibuje un hueco que abarque ambos, o sepárelos. |
| … El punto se devolvió a su lugar. | Una esquina arrastrada haría que el contorno se cruce a sí mismo o que un hueco quede fuera. | Arrastre a un lugar que mantenga válida la forma. |
| Haga clic en un punto del borde del círculo, lejos de su centro. | El segundo clic estuvo demasiado cerca del centro. | Haga clic más afuera. |
| Los clics desplazan la hoja en lugar de agregar puntos | El puntero se movió más de unos pocos píxeles con el botón presionado; eso cuenta como arrastre. | Haga clic sin mover el puntero, sobre todo en un trackpad. |
| {{key:Shift}} no ajusta | Está colocando un punto en un arco, o dibujando un círculo. | El ajuste de 45° se aplica solo a segmentos rectos. |
| Los puntos saltan a una línea cercana | El forzcursor a las líneas del dibujo está activado. | Haga zoom para hacer clic entre líneas, o pulse {{key:F3}} para desactivar el {{ui:Forzcursor}}. |
| No aparece ninguna marca de forzcursor | El forzcursor está desactivado, la hoja es un escaneo o la herramienta no ajusta ({{ui:Conteo}}, {{ui:Conteo automático}}, pegar). | Pulse {{key:F3}}; en un escaneo no hay líneas a las que ajustarse. |
| La longitud es incorrecta | La escala es incorrecta (suele ser un PDF redimensionado con una escala predefinida). | Use {{ui:Comprobar}} sobre una cota conocida, luego {{ui:Calibrar}}. |

## Escala

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Elija dos puntos más separados. | Los puntos de calibración están casi encimados. | Calibre con una cota más larga. |
| Un mensaje en el diálogo de calibrar, como "No se pudo leer esa distancia" | La distancia está en un formato que TakeoffCraft no puede leer. | Vea [Entrada de longitud, tarifa y porcentaje](topic:entry-formats). |
| Esta hoja aún no tiene escala, así que no hay nada que comprobar. Calíbrela, o elija una predefinida. | {{ui:Comprobar}} en una hoja sin escala. | Defina primero una escala. |
| La lista {{ui:Predefinida}} aparece atenuada | No hay ninguna hoja abierta. | Abra un PDF. |

## Cantidades y fórmulas

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Incompleto: … (no incluido en los totales) | Un error de fórmula, o marcas en hojas sin escala. | Vea [Leer cantidades y el presupuesto](topic:read-quantities#the-incomplete-warning). |
| +(n) sin escala junto a una partida | Algunas de sus marcas están en hojas sin escala. | Asigne una escala a esas hojas. |
| Error de fórmula: … | No se puede calcular la fórmula. | Vea [Lenguaje de fórmulas](topic:formulas#errors). |
| Esta partida tiene marcas, así que su tipo no puede cambiar. | El tipo se bloquea cuando hay marcas. | Cree una partida nueva del otro tipo y vuelva a dibujar las marcas con ella. |
| Una partida necesita un nombre. | El campo de nombre se vació. | Escriba un nombre. |
| Escriba un importe como 12.50. / Escriba un porcentaje como 10 o 7.5. | No se pudo leer una tarifa o el desperdicio. | Vea [Entrada de longitud, tarifa y porcentaje](topic:entry-formats). |
| Un total parece duplicado | La partida tiene sus propias tarifas y componentes que llevan el mismo costo. | Defina en 0 las tarifas propias de la partida cuando sus componentes llevan el costo. |
| Las marcas de esta partida están en PDFs que no están abiertos. | Hizo clic en una partida cuyas marcas están todas en PDFs que no ha abierto. | Abra esos PDFs; sus nombres aparecen en {{ui:Hojas}}. |

## Conteo automático

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Ese recuadro es demasiado pequeño. Dibújelo alrededor de todo el símbolo. | El recuadro es diminuto. | Haga zoom y encierre todo el símbolo en un recuadro. |
| Ese recuadro está casi vacío. Dibújelo alrededor de un símbolo. | El recuadro solo contiene papel. | Encierre en un recuadro el símbolo mismo. |
| Sin coincidencias. Baje el control deslizante de {{ui:Coincidencia}}, o encierre el símbolo más ajustado. | Ninguno alcanzó puntuación suficiente. | Encierre el símbolo más ajustado, o baje el control {{ui:Coincidencia}} arrastrándolo. |
| Demasiadas coincidencias, incluidos símbolos incorrectos | Los símbolos parecidos obtienen una puntuación cercana a la del real. | Suba el control {{ui:Coincidencia}} y haga clic en los recuadros incorrectos para rechazarlos. |
| Faltan coincidencias en otras hojas | Esas hojas dibujan el símbolo a otro tamaño, o en un ángulo que no es un paso de 90°. | Busque en esas hojas con un recuadro dibujado allí, o cuente a mano. |
| (n) hojas eran demasiado grandes para buscar con este tamaño de símbolo. | La hoja sería demasiado grande al tamaño de trabajo. | Encierre un símbolo más grande, o cuente esa hoja a mano. |
| La búsqueda falló: … | La búsqueda en segundo plano se detuvo. | Intente de nuevo; recargue la página si se repite (guarde primero). Sin conexión, solo funciona cuando la barra de la aplicación muestra {{ui:Lista sin conexión}}. |
| Arrastrar dibuja un recuadro en lugar de desplazar la vista | Así funciona {{ui:Conteo automático}}. | Mantenga presionada {{key:Space}} y arrastre, o arrastre con el botón central. |

## Guardar y exportar

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Aún no hay nada que exportar: cree una partida y cuantifíquela. | No hay partidas. | Cree primero una partida. |
| Aún no hay marcas en los PDFs abiertos. | {{ui:PDF marcado}} no tiene nada que dibujar en los PDFs abiertos. | Abra los PDFs que tienen marcas. |
| Este PDF está protegido con contraseña o cifrado, así que no se puede escribir una copia marcada. … | El PDF está cifrado. | Exporte {{ui:XLSX}} en su lugar, o use una copia sin cifrar del PDF (entonces necesita su propia cuantificación, ya que es otro archivo). |
| No se pudo escribir el PDF marcado: … | Con frecuencia: sin conexión, y la aplicación no se guardó para uso sin conexión, así que falta el escritor de PDF. | Conéctese y elija de nuevo {{ui:PDF marcado}}. Para evitarlo, elija {{ui:Guardar para usar sin conexión}} y espere a {{ui:Lista sin conexión}}. |
| Solo se descargó un PDF marcado | El navegador bloqueó varias descargas a la vez. | Permita descargas múltiples para este sitio y exporte de nuevo. |
| (archivo) no es un proyecto de TakeoffCraft (no es JSON válido). / Este no es un archivo de proyecto de TakeoffCraft. | Archivo incorrecto, o uno dañado. | Elija el archivo `.takeoff.json`. |
| Este proyecto se guardó con una versión más reciente de TakeoffCraft. Ábralo allí. | El archivo viene de una versión más reciente. | Ábralo en la versión más reciente. |
| (n) marcas estaban dañadas y se omitieron. | Parte del archivo se dañó o se editó a mano. | El resto se abrió. Vuelva a dibujar las marcas faltantes, o abra una copia anterior. |
| Faltan marcas al reabrir | Los PDFs no están abiertos, o alguno cambió. | Vea [Guardar y reabrir una cuantificación](topic:save-and-reopen#when-a-pdf-has-changed). |
| El navegador pregunta "¿Salir del sitio?" | Hay cambios sin guardar. | Permanezca en la página y guarde con {{key:Mod+S}}. |

## Teclas y ratón

| Síntoma | Causa | Solución |
|---|---|---|
| Las teclas de letras no hacen nada | El cursor está en un campo (búsqueda, editor de partidas, tabla). | Haga clic en la hoja, o pulse {{key:Tab}} para salir del campo. |
| La rueda hace zoom en lugar de desplazar | La rueda siempre hace zoom en la hoja. | Arrastre para encuadrar. |
| Toda la página se hizo más grande o más pequeña | Zoom del navegador ({{key:Mod+Plus}} o {{key:Mod+Minus}}). | Pulse {{key:Mod+0}}. Haga zoom en la hoja con la rueda o con {{key:Plus}} y {{key:Minus}} sin modificadores. |
| Una marca desapareció al pulsar Backspace | Backspace borra la marca seleccionada cuando no está dibujando. | {{key:Mod+Z}} la restaura. |
| El clic derecho no termina en un Mac | El clic con Control llega como un clic normal. | Use un clic con dos dedos con el clic secundario activado, o pulse {{key:Enter}}. |

## Pantallas táctiles

En una pantalla táctil:

- **Toque** coloca un punto (o selecciona una marca con {{ui:Seleccionar}}). Arrastrar con un dedo desplaza la vista.
- **Dos dedos** pellizcan para hacer zoom alrededor del punto entre ellos, y encuadran cuando se mueven juntos. Poner un segundo dedo cancela lo que inició el primero, así que un pellizco nunca deja un punto.
- **Termine** un tramo o un contorno con una **pulsación prolongada** (el clic derecho), un **doble toque**, o {{ui:Terminar}} en la barra inferior de la hoja. La misma barra tiene {{ui:Posterior}} (retira el último punto) y {{ui:Cancelar}}. Las áreas también se cierran al tocar el primer punto.
- Los dedos tienen objetivos más grandes: los puntos se ajustan, cierran y seleccionan desde más lejos, y los controles de esquina son más grandes.

Escribir longitudes requiere un teclado; el teclado en pantalla funciona cuando el campo {{ui:Escriba}} tiene el foco.

En una tableta, un teclado y un ratón o trackpad hacen mucho más fácil la cuantificación.

## Trabajar sin conexión

| Botón o síntoma | Causa | Solución |
|---|---|---|
| {{ui:Could not save}} | Algunos archivos de la aplicación no se descargaron al guardar para uso sin conexión. | Revise su conexión y elija el botón de nuevo. |
| {{ui:Offline not available}} | Las ventanas privadas y algunas computadoras administradas bloquean las copias sin conexión. | Use una ventana normal, u otro navegador. |
| "Guardando…" nunca comienza | No tiene conexión; guardar necesita una conexión. | Guarde con conexión. |
| La aplicación está desactualizada tras una actualización | La copia sin conexión es de un día anterior. | Con conexión, elija {{ui:Lista sin conexión}}, luego {{ui:Guardar de nuevo (obtener la versión más reciente)}}. |
| Quiere recuperar el espacio | La copia sin conexión ocupa unos 6 MB. | Elija {{ui:Lista sin conexión}}, luego {{ui:Quitar la copia sin conexión}}. |

Vea [Trabajar sin conexión](common:offline).

## Si sigue con problemas

Recargue la página si la aplicación deja de responder. Su cuantificación se pierde al recargar si no la guardó, así que guarde primero con {{key:Mod+S}} si puede. Para preguntas sobre el navegador, vea [Navegadores y computadoras](common:browsers).
