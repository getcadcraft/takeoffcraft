---
title: Novedades de la versión 0.9 (anteriores)
summary: Lea longitudes en metros, centímetros o milímetros, áreas métricas en m2 con área de muro, predefinidas de escala 1:75 y 1:150, unidades de peso y temperatura, Arco con diez métodos, y cursores en vivo, Seguir y una lista de personas.
keywords: novedades 0.9, versión anterior, novedades, notas de la versión, registro de cambios, 0.9, mostrar longitudes en, metros, centímetros, milímetros, métrico, seguir configuración global, unidades, unidades de visualización, m2, metros cuadrados, área de muro, predefinidas de escala, 1:75, 1:150, peso, kilogramos, kg, tonelada, t, lb, temperatura, Celsius, Fahrenheit, arco, métodos de arco, arco de 3 puntos, radio, en vivo, cursores, seguir, lista de personas, clase, información emergente, presentación, novedades, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, contar todo, leyenda, leyenda de símbolos, juego completo, memoria de precios, trabajos anteriores, último trabajo, precio típico, proveedor, existencias, plazo de entrega, pedido pendiente, lista de pedido, faltante, panel de problemas, asistente, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg
from: f4322ba2
---

Esto es lo que cambió en TakeoffCraft 0.9, comparado con la 0.8.1. Es una versión pequeña para esta aplicación: ahora las longitudes se pueden leer en metros, centímetros o milímetros, las áreas y escalas siguen correctamente el trabajo métrico, y Arco tiene diez formas de dibujar. Las sesiones en vivo también muestran dónde está cada persona.

## Novedades

### Leer longitudes en metros, centímetros o milímetros

- **Mostrar longitudes en.** {{ui:Configuración}} › {{ui:TakeoffCraft}} tiene {{ui:Mostrar longitudes en}} con {{ui:Seguir configuración global}}, {{ui:Pies y pulgadas}}, m, cm y mm. {{ui:Seguir configuración global}} usa la unidad métrica de longitud que marcó como favorita en {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}, y pies y pulgadas cuando no hay ninguna marcada. Cambia cómo se leen las longitudes en la hoja, en la barra de estado y en los paneles, incluidas las alturas, la profundidad, el espesor y los niveles. Un número sin unidad escrito en un campo de altura se lee en la unidad que se muestra.
- **Solo visualización.** Las cantidades, costos y exportaciones se calculan con las longitudes exactas. La opción de 1/16, 1/8 y 1/4 de pulgada aparece solo para pies y pulgadas. Vea [Mostrar longitudes en metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Una partida de {{ui:Cantidad escrita (sin dibujo)}} ahora puede estar en lb, TON, kg o t, y tener precio por unidad.
- **Temperatura.** Cada partida tiene un campo opcional {{ui:Temperatura}} en el editor de partidas, escrito en grados C o F. {{ui:Mostrar temperaturas como}} en {{ui:Configuración}} › {{ui:TakeoffCraft}} ofrece {{ui:Seguir configuración global}}, °C o °F.

### Áreas y escalas para trabajo métrico

- **Áreas en m2 en el dibujo.** Un área medida con una partida métrica ahora dice m2 en la etiqueta del dibujo y en el panel de marcas, además de en la tabla, en lugar de SF. La regla es m2 cuando la partida tiene precio en métrico o las longitudes se muestran en m, cm o mm, y SF en los demás casos.
- **Área de muro.** Una partida lineal con altura también muestra su área de muro (longitud por altura) en la lista de partidas y como fila de nota debajo de la tabla de cantidades por partida.
- **Predefinidas de escala 1:75 y 1:150.** Están en la lista {{ui:Predefinida}} del grupo {{ui:Escala}}, que ahora tiene 32 escalas. Vea [Predefinidas de escala](topic:scale-presets).

### Arco con diez métodos

- Mientras {{ui:Arco}} está activo (botón de la barra de herramientas o {{key:R}}), aparece un cuadro {{ui:Método de arco}} en la barra de hojas: 3 puntos, Inicio, Centro, Fin, Inicio, Centro, Ángulo, Inicio, Centro, Longitud, Inicio, Fin, Ángulo, Inicio, Fin, Dirección, Inicio, Fin, Radio, Centro, Inicio, Fin, Centro, Inicio, Ángulo y Centro, Inicio, Longitud. El ángulo, la longitud, el radio y la dirección pueden elegirse con un clic o escribirse. Funciona en tramos lineales, áreas y recortes. Los archivos guardados antes de la 0.9 se abren igual. Vea [Dibujar arcos con diez métodos](topic:draw-arcs-ten-methods).

### Trabajar en equipo

- **Vea los cursores de los demás.** En una sesión en vivo, el puntero de cada persona se muestra en la hoja con su nombre y color, con un recuadro punteado alrededor de las marcas que seleccionó. Las personas que están en otra hoja aparecen en la lista con el nombre de esa hoja. Vea [Trabajar en vivo con otros](topic:work-live).
- **Seguir a una persona, y la lista de personas.** El botón {{ui:Personas}} en una sesión en vivo enumera a cada persona con la herramienta que usa, la hoja en la que está y cuándo editó por última vez. {{ui:Seguir}} mueve su vista junto con la de ella, y el anfitrión puede usar {{ui:Pedir a todos que me sigan}}. Vea [Seguir a un compañero en una sesión en vivo](topic:follow-a-teammate).

## En todas las aplicaciones

- **Información emergente y consejo de inicio.** El texto que aparece al pasar el cursor es una información emergente de Bootstrap, y el consejo de inicio se puede cerrar.
- **Pestañas con desplazamiento.** La barra de pestañas de un panel que no cabe se desplaza en lugar de cortarse.
- **Títulos de pestaña.** La pestaña del navegador muestra `<documento> - TakeoffCraft | CadCraft`.
- **Presentación.** La lista de presentaciones en {{ui:Configuración}} es una lista desplegable que muestra la presentación elegida.
- **Idioma.** El idioma que elija ahora llega también a las palabras que la página imprime por sí misma, como Nuevo, Abrir y Guardar. Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los haya revisado.

## Límites reconocidos

- La visualización de longitudes, las unidades de peso y temperatura y las nuevas predefinidas se revisaron con pruebas y en la página. No se ha revisado a mano cada panel con cada unidad.
- La lista de personas no ha tenido una revisión manual con un grupo real de maestro y alumnos.
- Los idiomas distintos del inglés son borradores de máquina.
- Los instaladores de Windows no tienen firma de código (Más información, luego Ejecutar de todas formas). La imagen de disco de macOS no está notarizada (clic derecho y luego Abrir).

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en TakeoffCraft 0.8 (publicada el 2026-11-01) y 0.8.1 (2026-11-02), comparado con la 0.7. Ahora se puede contar una leyenda de símbolos en todo el juego de planos a la vez, una cuantificación nueva puede empezar con los precios de sus trabajos anteriores, y la cuantificación se puede comparar con las existencias de un proveedor. La 0.8.1 es una versión de correcciones.

### Novedades

**Contar todo en el juego de planos**

- **Encierre la leyenda una vez.** {{ui:Contar todo}} en la barra de herramientas lee una leyenda de símbolos: arrastre un recuadro alrededor de los símbolos y de los nombres impresos junto a ellos. Cada símbolo aparece con su imagen y su nombre, y el nombre pasa a ser el nombre de la partida. Desmarque lo que no quiera y luego elija {{ui:Contar en N hojas}}. Una barra muestra la hoja que se está buscando, {{ui:Cancelar}} detiene la ejecución y la página sigue disponible.
- **Todas las hojas en una ejecución.** Cada símbolo se cuenta en cada hoja abierta. Una hoja dibujada a otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto. Los símbolos propios de la leyenda no se cuentan en su hoja.
- **Revise antes de agregar nada.** Cada total tiene un vínculo por hoja ("E-103: 4") que lleva a esa hoja. Haga clic en un recuadro de un hallazgo para dejarlo fuera, y haga clic de nuevo para volver a incluirlo. El nivel de coincidencia (50% a 100%) solo filtra lo encontrado; no se vuelve a buscar nada.
- **Un solo paso para deshacer.** {{ui:Agregar N marcas}} crea una partida de conteo por símbolo con una marca en cada hallazgo. Un nombre que ya es una partida de conteo suya se reutiliza. {{key:Ctrl+Z}} quita todas las partidas y marcas. Lo que acepte también alimenta {{ui:Aprendido}}.
- **Símbolos en cualquier ángulo.** Marque {{ui:Símbolos en cualquier ángulo}} antes de contar para encontrar también los símbolos girados en un ángulo que no es recto. La búsqueda entonces gira cada símbolo cada 15 grados, y un símbolo que no es redondo puede tardar hasta seis veces más.
- **Qué es.** Coincidencia simple de símbolos en sus propias hojas, sin modelo entrenado, y nada sale de su computadora. En un juego inventado de 200 hojas tardó 9.4 segundos de principio a fin en Chrome, en una computadora de escritorio rápida; los juegos de planos reales serán más lentos. Vea [Contar todo en el juego de planos](topic:count-everything).

**Memoria de precios de sus trabajos**

- **TakeoffCraft recuerda sus tarifas.** Al guardar una cuantificación, cada partida con precio que se usa se recuerda por nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Se conservan los últimos 12 trabajos por cada nombre. Se guarda en esta computadora junto a la biblioteca de precios, nunca dentro de un archivo de cuantificación, y no se envía nada a ningún lugar.
- **Empiece una cuantificación nueva a partir de ella.** {{ui:Precios}} en la barra de herramientas muestra, para cada partida, las tarifas del último trabajo, las tarifas típicas y el intervalo. {{ui:Usar el último}} o {{ui:Usar el típico}} asigna precio a una partida, y {{ui:Asignar precio a N partidas sin precio desde la memoria}} llena cada partida que todavía no tiene precio. Cada uso es un paso para deshacer.
- **Trabajos anteriores.** {{ui:Aprender de una cuantificación anterior…}} recuerda las partidas con precio de una cuantificación guardada (.json).
- **Verla, cambiarla, olvidarla.** {{ui:Todo lo recordado}} enumera cada nombre; el botón de papelera olvida uno, y {{ui:Borrar todos los precios}} olvida todos. Desactive {{ui:Recordar mis precios cuando guarde una cuantificación}} para dejar de guardarlos. Un precio por pieza nunca se asigna a una partida por pie. Vea [Memoria de precios de sus trabajos anteriores](topic:price-memory).

**Existencias del proveedor y plazos de entrega**

- **Compare con la lista de un proveedor.** {{ui:Suministro}} en la barra de herramientas toma la lista de existencias de un proveedor ({{ui:Agregar un archivo de proveedor…}}), un CSV o una hoja de cálculo, y compara con ella lo que necesita la cuantificación, con el desperdicio incluido. Se guardan hasta cinco archivos. No se envía nada y nada consulta a un proveedor: usted trae el archivo.
- **Qué dice.** Las partidas faltantes aparecen primero: "Faltan 120 EA", "Plazo de entrega 21 días", "En pedido pendiente", "Unidad distinta", "Sin cifra de existencias" o "En existencia". {{ui:Espera máxima deseada (días)}} empieza en 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} descarga las partidas faltantes con la cantidad que falta, el proveedor y el plazo de entrega.
- **Precios a la biblioteca.** Si el archivo tiene precios, {{ui:Precios a la biblioteca}} asigna el precio de material de cada elemento de la biblioteca con el mismo nombre y unidad. Vuelva a asignar precios desde la biblioteca para pasarlos a la cuantificación.
- **En el panel de problemas.** Una falta es una advertencia y una espera larga es una nota, bajo "Existencias del proveedor". Puede aceptar una con un motivo, y el motivo se guarda en la cuantificación. Vea [Revisar existencias del proveedor y plazos de entrega](topic:supplier-stock).

**Asistentes de IA**

- **Herramientas para los tres.** Con los asistentes permitidos en {{ui:Configuración}}, un asistente puede leer una leyenda (`legend_open`), ejecutar el conteo (`legend_count_start`, luego `legend_count_status` y `legend_count_result`) y agregarlo (`legend_count_add`, que puede mostrar primero una vista previa). Puede leer los precios recordados (`prices_list`) y asignar precios a partidas a partir de ellos (`prices_apply`, que puede mostrar primero una vista previa), y leer la verificación del proveedor (`supply_check`). Agregar un archivo de proveedor sigue siendo tarea suya. Vea [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

**En todas las aplicaciones**

- **Idiomas.** Cincuenta y cuatro idiomas en total; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko). Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los revise.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un panel táctil, los botones laterales de un ratón, un lápiz, un ratón 3D, un control de juego o un controlador MIDI, para todas las aplicaciones o para una sola. Vea [Usar un panel táctil, ratón 3D o controlador](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece {{ui:Repartir}} (el inicio), {{ui:2 filas}} y {{ui:1 fila}}; los grupos que no caben se desplazan hacia el lado. Vea [Organizar los paneles](common:arrange-panels).
- **Panel de problemas.** El panel compartido de advertencias y notas ahora incluye la verificación de existencias del proveedor de arriba, junto a las otras verificaciones.
- **Complementos.** Los complementos siguen su lista de cuenta. Vea [Complementos y su lista de cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro: conecte su asistente una vez para las ocho aplicaciones. Studio no tiene IA propia.

### Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto. Esto está corregido en TakeoffCraft y en otras cuatro aplicaciones.
- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, Studio y sus ediciones empaquetadas solo estaban en inglés. Esto no se ha probado en la versión de escritorio en todas las plataformas; avísenos si el idioma no cambia.

### Aún no en esta versión

- **Sin firma de código.** Windows puede mostrar una advertencia, y en una Mac haga clic derecho y elija {{ui:Abierta}} la primera vez. Las versiones para tiendas (Microsoft Store, Google Play, App Store) están en pausa, y la versión para iPad e iPhone no se recompiló para la 0.8.1.
- **Actualizaciones de Studio.** El instalador de Windows y los paquetes de Linux revisan una vez al día y preguntan antes de actualizar. El zip portátil solo informa, y macOS y el APK no se actualizan solos. El .dmg de macOS de la 0.8 sigue a la versión.
- **Conecte su IA.** La conexión con un clic dentro de Studio, el conector alojado para IA en el navegador, su propia clave de API dentro de Studio y un paquete MCP publicado no están prometidos en esta versión.
- **Contar todo.** Necesita símbolos dibujados igual que en la leyenda, y un símbolo con un muro o una línea larga que lo atraviese puede pasarse por alto. No se encuentran símbolos reflejados, y una hoja sin escala dibujada a otro tamaño se busca al tamaño de la leyenda. Revise los hallazgos de la primera hoja antes de confiar en el resto.
- **Existencias del proveedor.** Las cifras de existencias son tan actuales como el archivo que usted agrega. La verificación nunca consulta a un proveedor.
- **Idiomas.** La barra de la aplicación en tamil se desborda.

Todo lo demás está en [Lo que aún no está disponible](topic:not-built-yet). Para la versión anterior a esta, vea [Novedades en la 0.7](topic:whats-new-0-7).
