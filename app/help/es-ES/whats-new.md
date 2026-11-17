---
title: Novedades de la versión 0.9
summary: Lea las longitudes en metros, centímetros o milímetros, áreas métricas en m2 con área de muro, preajustes de escala 1:75 y 1:150, unidades de peso y temperatura, Arco con diez métodos, y cursores en directo, Seguir y una lista de personas.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, mostrar longitudes como, metros, centímetros, milímetros, métrico, seguir global, unidades, unidades de visualización, m2, metros cuadrados, área de muro, preajustes de escala, 1:75, 1:150, peso, kilogramos, kg, tonelada, ton, lb, temperatura, celsius, fahrenheit, arco, métodos de arco, arco de 3 puntos, radio, en directo, cursores, seguir, lista de personas, clase, descripciones emergentes, disposición, cambios, 0.8, 0.8.1, versión, nuevas funciones, contar todo, leyenda, leyenda de símbolos, conjunto completo, memoria de precios, trabajos anteriores, último trabajo, precio típico, proveedor, existencias, plazo de entrega, pedido pendiente, lista de pedido, escasez, panel de problemas, asistente, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg
from: 6182b998
---

Esto es lo que cambió en TakeoffCraft 0.9, en comparación con la 0.8.1. Es una versión pequeña para esta aplicación: las longitudes ahora se pueden leer en metros, centímetros o milímetros, las áreas y escalas siguen bien el trabajo métrico, y Arco tiene diez maneras de dibujar. Las sesiones en directo también muestran dónde está cada uno.

## Nuevo

### Leer longitudes en metros, centímetros o milímetros

- **Mostrar longitudes como.** {{ui:Ajustes}} › {{ui:Medición}} tiene {{ui:Mostrar longitudes en}} con {{ui:Seguir Global}}, {{ui:Pies y pulgadas}}, m, cm y mm. {{ui:Seguir Global}} usa la unidad métrica de longitud que marcó con una estrella en {{ui:Ajustes}} › {{ui:Global}} › {{ui:Unidades}}, y pies y pulgadas cuando no hay ninguna marcada. Cambia cómo se leen las longitudes en la hoja, en la barra de estado y en los paneles, incluidas las alturas, profundidades, espesores y niveles. Un número sin unidad escrito en un campo de altura se lee en la unidad que se muestra.
- **Solo visualización.** Las cantidades, costes y exportaciones se calculan con las longitudes exactas. La elección de 1/16, 1/8 y 1/4 de pulgada aparece solo en pies y pulgadas. Véase [Mostrar longitudes en metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Una partida de {{ui:Cantidad escrita (sin dibujo)}} puede estar ahora en lb, TON, kg o t, y tener precio por unidad.
- **Temperatura.** Cada partida tiene un campo opcional {{ui:Temperatura}} en el editor de partidas, escrito en grados C o F. {{ui:Mostrar temperaturas como}} en {{ui:Ajustes}} › {{ui:Medición}} ofrece {{ui:Seguir Global}}, °C o °F.

### Áreas y escalas para trabajo métrico

- **Áreas en m2 en el dibujo.** Un área medida con una partida métrica ahora dice m2 en la etiqueta del dibujo y en el panel de marcas, además de en la tabla, en lugar de SF. La regla es m2 cuando la partida tiene precio en métrico o las longitudes se muestran en m, cm o mm, y SF en otro caso.
- **Área de muro.** Una partida lineal con altura también muestra su área de muro (longitud por altura) en la lista de Partidas y como fila de nota bajo la tabla de cantidades por partida.
- **Preajustes de escala 1:75 y 1:150.** Están en la lista {{ui:Preajuste}} del grupo {{ui:Escala}}, que ahora tiene 32 escalas. Véase [Preajustes de escala](topic:scale-presets).

### Arco con diez métodos

- Mientras {{ui:Arco}} está activo (botón de la barra de herramientas o {{key:R}}), aparece un cuadro {{ui:Método de arco}} en la barra de hojas: 3 puntos, Inicio, Centro, Fin, Inicio, Centro, Ángulo, Inicio, Centro, Longitud, Inicio, Fin, Ángulo, Inicio, Fin, Dirección, Inicio, Fin, Radio, Centro, Inicio, Fin, Centro, Inicio, Ángulo y Centro, Inicio, Longitud. Ángulo, longitud, radio y dirección se pueden hacer clic o escribir. Funciona en tramos lineales, áreas y recortes. Los archivos guardados antes de la 0.9 se abren igual. Véase [Dibujar arcos con diez métodos](topic:draw-arcs-ten-methods).

### Trabajo en conjunto

- **Vea los cursores de los demás.** En una sesión en directo, el puntero de cada persona aparece en la hoja con su nombre y su color, con un recuadro discontinuo alrededor de las marcas que seleccionó. Las personas que están en otra hoja aparecen listadas con el nombre de esa hoja. Véase [Trabajar en directo con otros](topic:work-live).
- **Seguir a una persona, y la lista de personas.** El botón {{ui:Personas}} en una sesión en directo lista a cada persona con la herramienta que usa, la hoja en la que está y cuándo editó por última vez. {{ui:Seguir}} mueve su vista con la de la otra persona, y el anfitrión puede usar {{ui:Pedir a todos que me sigan}}. Véase [Seguir a un compañero en una sesión en directo](topic:follow-a-teammate).

## En todas las aplicaciones

- **Descripciones emergentes e inicio.** El texto que aparece al pasar el ratón es una descripción emergente de Bootstrap, y el consejo de inicio se puede cerrar.
- **Pestañas con desplazamiento.** La barra de pestañas de un panel que no cabe se desplaza en lugar de cortarse.
- **Títulos de pestaña.** La pestaña del navegador muestra `<documento> - TakeoffCraft | CadCraft`.
- **Disposición.** La lista de disposiciones en {{ui:Ajustes}} es un desplegable que muestra la disposición elegida.
- **Idioma.** El idioma que elija ahora llega también a las palabras que la propia página imprime, como Nuevo, Abrir y Guardar. Los idiomas distintos del inglés son borradores automáticos hasta que un hablante nativo los revise.

## Límites reconocidos

- La visualización de longitudes, las unidades de peso y temperatura y los nuevos preajustes se comprobaron con pruebas y en la página. No se ha comprobado a mano cada panel con cada unidad.
- La lista de personas no ha tenido una revisión manual con una clase real de profesores y alumnos.
- Los idiomas distintos del inglés son borradores automáticos.
- Los instaladores de Windows no están firmados digitalmente (Más información, luego Ejecutar de todos modos). La imagen de disco de macOS no está notarizada (clic con el botón derecho, luego Abrir).

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en TakeoffCraft 0.8 (publicada el 01/11/2026) y 0.8.1 (02/11/2026), en comparación con la 0.7. Una leyenda de símbolos ahora se puede contar en todo el conjunto a la vez, una cuantificación nueva puede empezar con los precios de sus trabajos anteriores, y la cuantificación puede comprobarse contra las existencias de un proveedor. La 0.8.1 es una versión de correcciones.

### Nuevo

**Contar todo el conjunto**

- **Encierre la leyenda una vez.** {{ui:Contar todo}} en la barra de herramientas lee una leyenda de símbolos: arrastre un recuadro alrededor de los símbolos y de los nombres impresos junto a ellos. Cada símbolo se lista con su imagen y su nombre, y el nombre pasa a ser el nombre de la partida. Desmarque lo que no quiera y elija {{ui:Contar en N hojas}}. Una barra muestra la hoja que se busca, {{ui:Cancelar}} detiene la ejecución, y la página sigue usable.
- **Todas las hojas en una sola ejecución.** Cada símbolo se cuenta en cada hoja abierta. Una hoja dibujada a otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto. Los propios símbolos de la leyenda no se cuentan en su hoja.
- **Revisión antes de añadir nada.** Cada total tiene un enlace por hoja («E-103: 4») que lleva a esa hoja. Haga clic en un recuadro de un hallazgo para dejarlo fuera, y vuelva a hacer clic para recuperarlo. El nivel de coincidencia (del 50 % al 100 %) solo filtra lo encontrado; no se vuelve a buscar.
- **Un paso de deshacer.** {{ui:Añadir N marcas}} crea una partida de recuento por símbolo con una marca en cada hallazgo. Un nombre que ya es una partida de recuento suya se reutiliza. {{key:Ctrl+Z}} devuelve todas las partidas y marcas. Lo que acepta también alimenta {{ui:Aprendido}}.
- **Símbolos en cualquier ángulo.** Marque {{ui:Símbolos en cualquier ángulo}} antes de contar para encontrar también los símbolos girados en un ángulo que no es recto. La búsqueda gira cada símbolo cada 15 grados, y un símbolo que no es redondo puede tardar hasta seis veces más.
- **Qué es.** Coincidencia simple de símbolos en sus propias hojas, sin modelo entrenado, y nada sale de su ordenador. En un conjunto ficticio de 200 hojas tardó 9,4 segundos de principio a fin en Chrome en un escritorio rápido; los conjuntos de planos reales irán más lentos. Véase [Contar todo el conjunto](topic:count-everything).

**Memoria de precios de sus propios trabajos**

- **TakeoffCraft recuerda sus tarifas.** Al guardar una cuantificación, cada partida con precio que se usa se recuerda por nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Se guardan los últimos 12 trabajos por cada nombre. Se guarda en este ordenador junto al precio de la Biblioteca, nunca dentro de un archivo de cuantificación, y no se envía a ningún sitio.
- **Empiece una cuantificación nueva a partir de ella.** {{ui:Precios}} en la barra de herramientas muestra, para cada partida, las tarifas del último trabajo, las tarifas típicas y el rango. {{ui:Usar el último}} o {{ui:Usar el habitual}} ponen precio a una partida, y {{ui:Poner precio a N partidas sin precio desde la memoria}} rellena cada partida que aún no tiene precio. Cada uso es un paso de deshacer.
- **Trabajos anteriores.** {{ui:Aprender de una cuantificación anterior…}} recuerda las partidas con precio de una cuantificación guardada (.json).
- **Véalo, cámbielo, olvídelo.** {{ui:Todo lo recordado}} lista cada nombre; el botón de papelera olvida uno, y {{ui:Borrar todos los precios}} olvida todos. Desmarque {{ui:Recordar mis precios al guardar una cuantificación}} para dejarlo. Un precio por unidad nunca se pone en una partida por pie. Véase [Memoria de precios de sus trabajos anteriores](topic:price-memory).

**Existencias del proveedor y plazos de entrega**

- **Compruebe contra la lista de un proveedor.** {{ui:Suministro}} en la barra de herramientas toma la lista de existencias de un proveedor ({{ui:Añadir un archivo de proveedor…}}), un CSV o una hoja de cálculo, y comprueba lo que necesita la cuantificación, con desperdicio, frente a ella. Se guardan hasta cinco archivos. No se envía nada y nada pregunta al proveedor: usted aporta el archivo.
- **Lo que indica.** Las partidas escasas aparecen primero: «Faltan 120 EA», «Plazo de entrega 21 días», «En pedido pendiente», «La unidad difiere», «Sin cifra de existencias» o «En existencias». {{ui:Espera máxima deseada (días)}} empieza en 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} descarga las partidas escasas con la cantidad que falta, el proveedor y el plazo de entrega.
- **Precios a la Biblioteca.** Si el archivo tiene precios, {{ui:Precios a la Biblioteca}} fija el precio de material de cada entrada de la Biblioteca con el mismo nombre y unidad. Vuelva a poner precio desde la Biblioteca para llevarlos a la cuantificación.
- **En el panel de problemas.** Una escasez es una advertencia y una espera larga es una nota, bajo «Existencias del proveedor». Puede aceptar una con un motivo, y el motivo se guarda en la cuantificación. Véase [Comprobar existencias del proveedor y plazos de entrega](topic:supplier-stock).

**Asistentes de IA**

- **Herramientas para los tres.** Con los asistentes permitidos en {{ui:Ajustes}}, un asistente puede leer una leyenda (`legend_open`), ejecutar el recuento (`legend_count_start`, después `legend_count_status` y `legend_count_result`) y añadirlo (`legend_count_add`, que puede previsualizar antes). Puede leer los precios recordados (`prices_list`) y poner precio a las partidas con ellos (`prices_apply`, que puede previsualizar antes), y leer la comprobación de proveedor (`supply_check`). Añadir un archivo de proveedor sigue siendo tarea suya. Véase [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

**En todas las aplicaciones**

- **Idiomas.** Cincuenta y cuatro idiomas en total; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko). Los idiomas distintos del inglés son borradores automáticos hasta que un hablante nativo los revise.
- **Dispositivos de entrada.** {{ui:Ajustes}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un panel táctil, los botones laterales de un ratón, un lápiz, un ratón 3D, un mando de juego o un controlador MIDI, para todas las aplicaciones o para una. Véase [Usar un panel táctil, un ratón 3D o un mando](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece {{ui:Ajustar}} (el inicio), {{ui:2 filas}} y {{ui:1 fila}}; los grupos que no caben se desplazan a los lados. Véase [Organizar los paneles](common:arrange-panels).
- **Panel de problemas.** El panel compartido de advertencias y notas incluye ahora la comprobación de existencias del proveedor descrita antes, junto a las otras comprobaciones.
- **Complementos.** Los complementos siguen su lista de cuenta. Véase [Complementos y su lista de cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro: conecte su asistente una vez para las ocho aplicaciones. Studio no tiene IA propia.

### Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto. Está corregido en TakeoffCraft y en otras cuatro aplicaciones.
- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, Studio y sus ediciones empaquetadas solo estaban en inglés. Esto no se ha probado en la versión de escritorio en todas las plataformas; díganos si el idioma no cambia.

### Aún no en esta versión

- **No firmada digitalmente.** Windows puede avisar, y en un Mac debe hacer clic con el botón derecho y elegir {{ui:Abrir}} la primera vez. Las versiones para tienda (Microsoft Store, Google Play, App Store) están en espera, y la versión para iPad y iPhone no se recompiló para la 0.8.1.
- **Actualizaciones de Studio.** El instalador de Windows y los paquetes de Linux comprueban una vez al día y preguntan antes. El zip portátil solo informa, y macOS y el APK no se actualizan solos. El .dmg de macOS de la 0.8 sigue la versión.
- **Conecte su IA.** No se prometen en esta versión: la conexión con un clic dentro de Studio, el conector alojado para IA en el navegador, su propia clave de API dentro de Studio ni un paquete MCP publicado.
- **Contar todo.** Necesita símbolos dibujados de la misma forma que en la leyenda, y un símbolo con un muro o una línea larga que lo atraviese puede no encontrarse. No se encuentran los símbolos reflejados, y una hoja sin escala dibujada a otro tamaño se busca al tamaño de la leyenda. Compruebe los hallazgos de la primera hoja antes de fiarse del resto.
- **Existencias del proveedor.** Las cifras de existencias son tan actuales como el archivo que añada. La comprobación nunca pregunta a un proveedor.
- **Idiomas.** La barra de la aplicación en tamil se desborda.

Todo lo demás está en [Aún no construido](topic:not-built-yet). Para la versión anterior, véase [Novedades de la versión 0.7](topic:whats-new-0-7).
