---
title: Solución de problemas
summary: Síntomas, causas y soluciones de los mensajes y sorpresas que puede encontrar en TakeoffCraft, citados tal como los muestra la aplicación.
keywords: problemas, errores, no funciona, solución, ayuda, rechazado, no mide, sin escala, marcas que faltan, error de exportación, sin conexión, táctil
from: cd319c9b
---

TakeoffCraft explica la mayoría de los rechazos en la barra de estado de la parte inferior de la ventana. Busque el mensaje a continuación.

## Abrir archivos

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| No se pudo cargar el lector de PDF. Recargue la página para intentarlo de nuevo. | El lector de PDF de la aplicación no se cargó, normalmente porque no tiene conexión y la aplicación nunca se guardó para uso sin conexión. | Vuelva a conectarse y recargue. Después elija {{ui:Guardar para uso sin conexión}} y espere a que aparezca {{ui:Listo sin conexión}}; véase [Trabajar sin conexión](common:offline). |
| (nombre) está protegido con contraseña. Abra una copia sin protección. | El PDF necesita una contraseña para abrirse. | Pida una copia sin protección o quite la contraseña en un programa de PDF de confianza. |
| No se pudo leer (nombre) como PDF (…) | El archivo está dañado o no es realmente un PDF. | Descárguelo de nuevo o vuelva a guardarlo desde el programa que lo creó. |
| (nombre) ya está abierto. | Ya está abierto el mismo PDF (mismo contenido). | No hay nada que hacer. |
| TakeoffCraft abre PDF y proyectos .takeoff.json. Omitido: … | Se descartaron otros tipos de archivo. | Convierta antes los planos a PDF. |
| No pasa nada al soltar archivos | Los archivos se soltaron fuera de la ventana del navegador, o el navegador abrió el PDF en una pestaña nueva. | Suéltelos sobre la propia página de TakeoffCraft; el recuadro «Suelte PDF o un .takeoff.json» indica cuándo funcionará. |
| Abrir un juego grande tarda un poco | Cada PDF se lee completo para identificarlo. | Espere a que desaparezca el mensaje «Abriendo (nombre)…». Las miniaturas se completan al desplazarse. |

## Medición

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Abra antes un PDF. | No hay ninguna hoja abierta. | Abra un PDF. |
| Esta hoja aún no tiene escala, así que no se puede medir. Elija antes un preajuste de escala o calíbrela (los recuentos funcionan sin ella). | Las herramientas lineal, área, círculo y recorte necesitan una escala. | [Establezca la escala](topic:set-the-scale). |
| Cree primero una partida lineal (asígnele nombre en Partidas) y después haga clic en la hoja. | No hay ninguna partida de ese tipo. | Rellene el formulario {{ui:Nueva partida}} que se abrió y elija {{ui:Añadir}}. |
| Elija antes una partida que cuantificar (panel de Partidas). | La partida actual se eliminó. | Haga clic en una partida bajo {{ui:Partidas}}. |
| Un tramo necesita al menos dos puntos. | Terminó tras un solo clic. | Haga clic en al menos dos puntos. |
| Un área necesita al menos tres puntos. | Hay muy pocas esquinas. | Haga clic en al menos tres esquinas. |
| El contorno se cruza consigo mismo, así que su área sería incorrecta. Dibújelo de nuevo sin cruces. | Una forma de ocho. | Dibújelo como dos áreas, o recorra el borde en orden. |
| Esos puntos no encierran ninguna área. | Todos los puntos están en una misma línea. | Haga clic en esquinas que encierren un espacio. |
| Seleccione primero una marca de área (herramienta Seleccionar), después elija Recorte y dibuje el hueco dentro. | {{ui:Recorte}} necesita un área seleccionada. | Pulse {{key:V}}, haga clic en el área y después pulse {{key:X}}. |
| Un recorte debe quedar completamente dentro del área. | El hueco cruza el contorno o se sale de él. | Dibuje el hueco dentro del área. |
| Los recortes no pueden superponerse entre sí. | Dos huecos se superponen. | Dibuje un hueco que rodee a ambos, o sepárelos. |
| … El punto se devolvió a su sitio. | Una esquina arrastrada haría que el contorno se cruzara o que un hueco quedara fuera. | Arrastre a un lugar que mantenga válida la forma. |
| Haga clic en un punto del borde del círculo, alejado de su centro. | El segundo clic estaba demasiado cerca del centro. | Haga clic más lejos. |
| Los clics desplazan la hoja en lugar de añadir puntos | El puntero se movió más de unos pocos píxeles mientras el botón estaba pulsado; eso cuenta como arrastre. | Haga clic sin moverse, sobre todo en un panel táctil. |
| Shift no ajusta | Está colocando un punto en un arco o dibujando un círculo. | El ajuste a 45° solo se aplica a segmentos rectos. |
| Los puntos saltan a una línea cercana | El ajuste a las líneas del plano está activado. | Amplíe la vista para hacer clic entre líneas, o pulse {{key:F3}} para desactivar el ajuste. |
| No aparece ningún marcador de ajuste | El ajuste está desactivado, la hoja es un escaneado, o la herramienta no ajusta (Recuento, Autorrecuento, pegar). | Pulse {{key:F3}}; en un escaneado no hay líneas a las que ajustarse. |
| La longitud es incorrecta | La escala es incorrecta (a menudo, un PDF redimensionado con un preajuste). | Use {{ui:Comprobar}} sobre una cota conocida y después {{ui:Calibrar}}. |

## Escala

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Elija dos puntos más separados. | Los puntos de calibración están casi superpuestos. | Calibre sobre una cota más larga. |
| Un mensaje en el cuadro de diálogo de calibrar, como «Esa distancia no se pudo leer» | La distancia está en un formato que TakeoffCraft no puede leer. | Véase [Introducción de longitudes, tarifas y porcentajes](topic:entry-formats). |
| Esta hoja aún no tiene escala, así que no hay nada que comprobar. Calíbrela o elija un preajuste. | {{ui:Comprobar}} en una hoja sin escala. | Establezca antes una escala. |
| La lista {{ui:Preajuste}} aparece atenuada | No hay ninguna hoja abierta. | Abra un PDF. |

## Cantidades y fórmulas

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Incompleto: … (no incluido en los totales) | Un error de fórmula, o marcas en hojas sin escala. | Véase [Leer cantidades y el presupuesto](topic:read-quantities#the-incomplete-warning). |
| +(n) sin escala junto a una partida | Algunas de sus marcas están en hojas sin escala. | Asigne una escala a esas hojas. |
| Error de fórmula: … | La fórmula no se puede calcular. | Véase [Lenguaje de fórmulas](topic:formulas#errors). |
| Esta partida tiene marcas, así que su tipo no puede cambiar. | El tipo queda bloqueado cuando hay marcas. | Cree una partida nueva del otro tipo y vuelva a dibujar las marcas con ella. |
| Una partida necesita un nombre. | El campo de nombre se vació. | Escriba un nombre. |
| Escriba un importe como 12.50. / Escriba un porcentaje como 10 o 7.5. | No se pudo leer una tarifa o un desperdicio. | Véase [Introducción de longitudes, tarifas y porcentajes](topic:entry-formats). |
| Un total parece duplicado | La partida tiene sus propias tarifas y componentes que llevan el mismo coste. | Ponga las tarifas propias de la partida a 0 cuando sus componentes lleven el coste. |
| Las marcas de esta partida están en PDF que no están abiertos. | Hizo clic en una partida cuyas marcas están todas en PDF que no ha abierto. | Abra esos PDF; sus nombres aparecen en {{ui:Hojas}}. |

## Autorrecuento

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Ese recuadro es demasiado pequeño. Dibújelo alrededor de todo el símbolo. | El recuadro es diminuto. | Amplíe la vista y encuadre todo el símbolo. |
| Ese recuadro está casi vacío. Dibújelo alrededor de un símbolo. | El recuadro solo contiene papel. | Encuadre el propio símbolo. |
| Sin coincidencias. Baje el deslizador de coincidencia o encuadre el símbolo más ajustado. | Ninguna puntuación fue suficientemente alta. | Encuadre el símbolo de forma ajustada, o arrastre el deslizador {{ui:Coincidencia}} hacia abajo. |
| Demasiadas coincidencias, incluidos símbolos erróneos | Los símbolos parecidos puntúan cerca del real. | Suba el deslizador {{ui:Coincidencia}} y haga clic en los recuadros erróneos para descartarlos. |
| Faltan coincidencias en otras hojas | Esas hojas dibujan el símbolo a otro tamaño, o con un ángulo que no es un múltiplo de 90°. | Busque en esas hojas con un recuadro dibujado allí, o cuente a mano. |
| (n) hojas eran demasiado grandes para buscar con este tamaño de símbolo. | La hoja sería demasiado grande al tamaño de trabajo. | Encuadre un símbolo más grande, o cuente esa hoja a mano. |
| La búsqueda falló: … | La búsqueda en segundo plano se detuvo. | Inténtelo de nuevo; recargue la página si se repite (guarde antes). Sin conexión, solo funciona cuando la barra de la aplicación muestra {{ui:Listo sin conexión}}. |
| Arrastrar dibuja un recuadro en lugar de desplazar | Así funciona {{ui:Autorrecuento}}. | Mantenga pulsado {{key:Space}} y arrastre, o arrastre con el botón central. |

## Guardar y exportar

| Mensaje o síntoma | Causa | Solución |
|---|---|---|
| Nada que exportar todavía: cree una partida y cuantifíquela. | No hay partidas. | Cree antes una partida. |
| Todavía no hay marcas en los PDF abiertos. | {{ui:PDF anotado}} no tiene nada que dibujar en los PDF abiertos. | Abra los PDF que tengan marcas. |
| Este PDF está protegido con contraseña o cifrado, así que no se puede escribir una copia anotada. … | El PDF está cifrado. | Exporte {{ui:XLSX}} en su lugar, o use una copia sin cifrar del PDF (entonces necesita su propia cuantificación, ya que es un archivo distinto). |
| No se pudo escribir el PDF anotado: … | Con frecuencia: sin conexión, y la aplicación no se guardó para uso sin conexión, así que falta el generador de PDF. | Conéctese y elija de nuevo {{ui:PDF anotado}}. Para evitarlo, elija {{ui:Guardar para uso sin conexión}} y espere a {{ui:Listo sin conexión}}. |
| Solo se descargó un PDF anotado | El navegador bloqueó varias descargas a la vez. | Permita las descargas múltiples para este sitio y vuelva a exportar. |
| (archivo) no es un proyecto de TakeoffCraft (no es JSON válido). / Este no es un archivo de proyecto de TakeoffCraft. | Archivo equivocado, o dañado. | Seleccione el archivo `.takeoff.json`. |
| Este proyecto lo guardó una versión más reciente de TakeoffCraft. Ábralo allí. | El archivo procede de una versión más nueva. | Ábralo en la versión más nueva. |
| (n) marcas se dañaron y se omitieron. | Parte del archivo estaba dañada o se editó a mano. | El resto se abrió. Vuelva a dibujar las marcas que faltan, o abra una copia anterior. |
| Faltan marcas al reabrir | Los PDF no están abiertos, o alguno ha cambiado. | Véase [Guardar y reabrir una cuantificación](topic:save-and-reopen#when-a-pdf-has-changed). |
| El navegador pregunta «¿Salir del sitio?» | Hay cambios sin guardar. | Quédese y guarde con {{key:Mod+S}}. |

## Teclas y ratón

| Síntoma | Causa | Solución |
|---|---|---|
| Las teclas de letras no hacen nada | El cursor está en un campo (búsqueda, editor de partidas, tabla). | Haga clic en la hoja, o pulse {{key:Tab}} para salir del campo. |
| La rueda hace zoom en lugar de desplazar | La rueda siempre amplía o reduce la hoja. | Arrastre para desplazar. |
| Toda la página se hizo más grande o más pequeña | Zoom del navegador ({{key:Mod+Plus}} o {{key:Mod+Minus}}). | Pulse {{key:Mod+0}}. Haga zoom en la hoja con la rueda o con {{key:Plus}} y {{key:Minus}} sin modificadores. |
| Una marca desapareció al pulsar Backspace | Backspace elimina la marca seleccionada cuando no está dibujando. | {{key:Mod+Z}} la devuelve. |
| El clic derecho no termina en un Mac | El clic con Control llega como un clic normal. | Use un clic con dos dedos con el clic secundario activado, o pulse {{key:Enter}}. |

## Pantallas táctiles

En una pantalla táctil:

- **Toque** coloca un punto (o selecciona una marca con {{ui:Seleccionar}}). Un dedo que arrastra desplaza.
- **Dos dedos** pellizcan para hacer zoom alrededor del punto que hay entre ellos, y desplazan cuando se mueven juntos. Apoyar un segundo dedo cancela lo que había iniciado el primero, así que un pellizco nunca deja un punto.
- **Termine** un tramo o un contorno con una **pulsación prolongada** (el clic derecho), un **doble toque**, o {{ui:Terminar}} en la barra de la parte inferior de la hoja. La misma barra tiene {{ui:Posterior}} (retira el último punto) y {{ui:Cancelar}}. Las áreas también se cierran al tocar el primer punto.
- Los dedos tienen áreas de toque más grandes: los puntos se ajustan, se cierran y se seleccionan desde más lejos, y los controladores de esquina son más grandes.

Escribir longitudes requiere un teclado; el teclado en pantalla funciona cuando el cuadro {{ui:Escribir}} tiene el foco.

En una tableta, un teclado y un ratón o panel táctil facilitan mucho la cuantificación.

## Trabajar sin conexión

| Botón o síntoma | Causa | Solución |
|---|---|---|
| {{ui:No se pudo guardar}} | Algunos archivos de la aplicación no se descargaron al guardar para uso sin conexión. | Compruebe su conexión y vuelva a elegir el botón. |
| {{ui:Sin conexión no disponible}} | Las ventanas privadas y algunos equipos administrados bloquean las copias sin conexión. | Use una ventana normal u otro navegador. |
| «Guardando…» nunca empieza | No tiene conexión; guardar necesita una conexión. | Guarde con conexión. |
| La aplicación es antigua tras una actualización | La copia sin conexión es de un día anterior. | Con conexión, elija {{ui:Listo sin conexión}} y después {{ui:Guardar de nuevo (obtener la versión más reciente)}}. |
| Quiere recuperar el espacio | La copia sin conexión ocupa unos 6 MB. | Elija {{ui:Listo sin conexión}} y después {{ui:Quitar la copia sin conexión}}. |

Véase [Trabajar sin conexión](common:offline).

## Sigue sin funcionar

Recargue la página si la aplicación deja de responder. Su cuantificación se pierde al recargar, salvo que la haya guardado; así que guarde primero con {{key:Mod+S}} si puede. Para dudas sobre el navegador, véase [Navegadores y equipos](common:browsers).
