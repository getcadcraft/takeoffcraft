---
title: Novedades de la 0.9 (anteriores)
summary: Lee longitudes en metros, centímetros o milímetros, áreas métricas en m2 con área de muro, escalas predefinidas 1:75 y 1:150, unidades de peso y temperatura, Arco con diez métodos, y cursores en vivo, Seguir y una lista de personas.
keywords: novedades 0.9, versión anterior, novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, mostrar longitudes como, metros, centímetros, milímetros, métrico, seguir global, unidades, unidades de visualización, m2, metros cuadrados, área de muro, escalas predefinidas, 1:75, 1:150, peso, kilogramos, kg, tonelada, t, lb, temperatura, celsius, fahrenheit, arco, métodos de arco, arco de 3 puntos, radio, en vivo, cursores, seguir, lista de personas, clase, información emergente, disposición, novedades, notas de la versión, cambios, 0.8, 0.8.1, versión, nuevas funciones, contar todo, leyenda, leyenda de símbolos, conjunto completo, memoria de precios, trabajos anteriores, último trabajo, precio típico, proveedor, existencias, plazo de entrega, pedido pendiente, lista de pedido, falta de stock, panel de problemas, asistente, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg
from: f4322ba2
---

Esto es lo que ha cambiado en TakeoffCraft 0.9, respecto a la 0.8.1. Es una versión pequeña para esta aplicación: las longitudes ahora se pueden leer en metros, centímetros o milímetros, las áreas y las escalas siguen bien el trabajo métrico, y Arco tiene diez formas de dibujar. Las sesiones en vivo también muestran quién está dónde.

## Novedades

### Leer longitudes en metros, centímetros o milímetros

- **Mostrar longitudes como.** {{ui:Ajustes}} › {{ui:Medición}} tiene {{ui:Mostrar longitudes en}} con {{ui:Seguir Global}}, {{ui:Pies y pulgadas}}, m, cm y mm. {{ui:Seguir Global}} usa la unidad de longitud métrica que marcó con una estrella en {{ui:Ajustes}} › {{ui:Global}} › {{ui:Unidades}}, y pies y pulgadas si no hay ninguna marcada. Cambia cómo se leen las longitudes en la hoja, en la barra de estado y en los paneles, incluidas las alturas, la profundidad, el espesor y las plantas. Un número sin unidad escrito en un campo de altura se lee en la unidad que se muestra.
- **Solo visualización.** Las cantidades, los costes y las exportaciones se calculan a partir de las longitudes exactas. La opción de 1/16, 1/8 y 1/4 de pulgada aparece solo para pies y pulgadas. Vea [Mostrar longitudes en metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Un elemento de {{ui:Cantidad escrita (sin dibujo)}} ahora puede estar en lb, TON, kg o t, y tener precio por unidad.
- **Temperatura.** Cada elemento tiene un campo opcional {{ui:Temperatura}} en el editor de elementos, escrito en grados C o F. {{ui:Mostrar temperaturas como}} en {{ui:Ajustes}} › {{ui:Medición}} ofrece {{ui:Seguir Global}}, °C o °F.

### Áreas y escalas para trabajo métrico

- **Áreas en m2 en el dibujo.** Un área medida con un elemento métrico indica m2 en la etiqueta del dibujo y en el panel de marcas, además de en la tabla, en lugar de SF. La regla es m2 cuando el elemento tiene precio en métrico o las longitudes se muestran en m, cm o mm, y SF en los demás casos.
- **Área de muro.** Un elemento lineal con altura también muestra su área de muro (longitud por altura) en la lista de elementos y como fila de nota debajo de la tabla de cantidades por elemento.
- **Escalas predefinidas 1:75 y 1:150.** Están en la lista {{ui:Preajuste}} del grupo {{ui:Escala}}, que ahora tiene 32 escalas. Vea [Escalas predefinidas](topic:scale-presets).

### Arco con diez métodos

- Mientras {{ui:Arco}} esté activo (botón de la barra de herramientas o {{key:R}}), aparece un cuadro {{ui:Método de arco}} en la barra de la hoja: 3 puntos, Inicio, Centro, Fin; Inicio, Centro, Ángulo; Inicio, Centro, Longitud; Inicio, Fin, Ángulo; Inicio, Fin, Dirección; Inicio, Fin, Radio; Centro, Inicio, Fin; Centro, Inicio, Ángulo; y Centro, Inicio, Longitud. El ángulo, la longitud, el radio y la dirección se pueden indicar con el ratón o escribir. Funciona en tramos lineales, áreas y recortes. Los archivos guardados antes de la 0.9 se abren igual. Vea [Dibujar arcos con diez métodos](topic:draw-arcs-ten-methods).

### Trabajar en equipo

- **Ver los cursores de los demás.** En una sesión en vivo, el puntero de cada persona se muestra en la hoja con su nombre y color, con un recuadro discontinuo alrededor de las marcas que ha seleccionado. Las personas que están en otra hoja aparecen con el nombre de esa hoja. Vea [Trabajar en vivo con otros](topic:work-live).
- **Seguir a una persona, y la lista de personas.** El botón {{ui:Personas}} de una sesión en vivo muestra a cada persona con la herramienta que usa, la hoja en la que está y la última vez que editó. {{ui:Seguir}} mueve su vista junto con la suya, y el anfitrión puede usar {{ui:Pedir a todos que me sigan}}. Vea [Seguir a un compañero en una sesión en vivo](topic:follow-a-teammate).

## En todas las aplicaciones

- **Información emergente y consejo de inicio.** El texto al pasar el ratón es una información emergente de Bootstrap, y el consejo de inicio se puede cerrar.
- **Pestañas con desplazamiento.** La barra de pestañas de un panel que no cabe se desplaza en lugar de cortarse.
- **Títulos de pestañas.** La pestaña del navegador muestra `<documento> - TakeoffCraft | CadCraft`.
- **Disposición.** La lista de disposiciones en {{ui:Ajustes}} es un desplegable que muestra la disposición elegida.
- **Idioma.** El idioma que elija ahora llega también a las palabras que la propia página muestra, como Nuevo, {{ui:Abierta}} y Guardar. Los idiomas distintos del inglés son borradores automáticos hasta que un hablante nativo los haya revisado.

## Límites conocidos

- La visualización de longitudes, las unidades de peso y temperatura y las nuevas escalas predefinidas se comprobaron con pruebas y en la página. No se ha comprobado a mano cada panel con cada unidad.
- La lista de personas no ha sido revisada a mano con una clase real de profesor y alumnos.
- Los idiomas distintos del inglés son borradores automáticos.
- Los instaladores de Windows no están firmados digitalmente (Más información, y después Ejecutar de todos modos). La imagen de disco de macOS no está notarizada (clic derecho y después {{ui:Abierta}}).

## Anteriores: 0.8 y 0.8.1

Esto es lo que ha cambiado en TakeoffCraft 0.8 (publicada el 2026-11-01) y 0.8.1 (2026-11-02), respecto a la 0.7. Ahora se puede contar una leyenda de símbolos en todo el conjunto a la vez, una nueva cuantificación puede empezar con los precios de sus trabajos anteriores, y la cuantificación se puede comprobar con las existencias de un proveedor. La 0.8.1 es una versión de correcciones.

### Novedades

**Contar todo en el conjunto**

- **Enmarque la leyenda una vez.** {{ui:Contar todo}} en la barra de herramientas lee una leyenda de símbolos: arrastre un recuadro alrededor de los símbolos y de los nombres impresos junto a ellos. Cada símbolo aparece en la lista con su imagen y su nombre, y el nombre pasa a ser el nombre del elemento. Desmarque lo que no quiera y después elija {{ui:Contar en N hojas}}. Una barra indica la hoja que se está buscando, {{ui:Cancelar}} detiene la ejecución y la página sigue utilizable.
- **Todas las hojas en una sola ejecución.** Cada símbolo se cuenta en cada hoja abierta. Una hoja dibujada a otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto. Los propios símbolos de la leyenda no se cuentan en su hoja.
- **Revisar antes de añadir nada.** Cada total tiene un enlace por hoja («E-103: 4») que lleva a esa hoja. Haga clic en un recuadro de un hallazgo para excluirlo, y vuelva a hacer clic para incluirlo de nuevo. El nivel de coincidencia (del 50 % al 100 %) solo filtra lo encontrado; no se vuelve a buscar.
- **Un solo paso de deshacer.** {{ui:Añadir N marcas}} crea un elemento de recuento por símbolo con una marca en cada hallazgo. Si un nombre ya es un elemento de recuento suyo, se reutiliza. {{key:Ctrl+Z}} quita todos los elementos y marcas. Lo que acepte también alimenta {{ui:Aprendido}}.
- **Símbolos en cualquier ángulo.** Marque {{ui:Símbolos en cualquier ángulo}} antes de contar para encontrar también símbolos girados en un ángulo que no sea recto. La búsqueda entonces gira cada símbolo cada 15 grados, y un símbolo que no es redondo puede tardar hasta seis veces más.
- **Qué es.** Coincidencia sencilla de símbolos en sus propias hojas, sin modelo entrenado, y nada sale de su ordenador. En un conjunto inventado de 200 hojas tardó 9,4 segundos de principio a fin en Chrome en un equipo de sobremesa rápido; los conjuntos de planos reales serán más lentos. Vea [Contar todo en el conjunto](topic:count-everything).

**Memoria de precios de sus propios trabajos**

- **TakeoffCraft recuerda sus tarifas.** Al guardar una cuantificación, cada elemento con precio que se usa se recuerda por nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Se guardan los últimos 12 trabajos de cada nombre. Se conserva en este ordenador junto a la Biblioteca de precios, nunca dentro de un archivo de cuantificación, y no se envía nada a ningún sitio.
- **Empezar una cuantificación nueva a partir de ella.** {{ui:Precios}} en la barra de herramientas muestra, para cada elemento, las tarifas del último trabajo, las tarifas típicas y el rango. {{ui:Usar el último}} o {{ui:Usar el habitual}} asignan precio a un elemento, y {{ui:Aplicar precio a N partidas sin precio desde la memoria}} rellena cada elemento que aún no tiene precio. Cada uso es un paso de deshacer.
- **Trabajos anteriores.** {{ui:Aprender de una cuantificación anterior…}} recuerda los elementos con precio de una cuantificación guardada (.json).
- **Verla, cambiarla, olvidarla.** {{ui:Todo lo recordado}} lista cada nombre; el botón de la papelera olvida uno, y {{ui:Borrar todos los precios}} olvida todos. Desactive {{ui:Recordar mis precios al guardar una cuantificación}} para dejar de guardar. Un precio por unidad nunca se asigna a un elemento por pie. Vea [Memoria de precios de sus trabajos anteriores](topic:price-memory).

**Existencias del proveedor y plazos de entrega**

- **Comprobar con la lista de un proveedor.** {{ui:Suministro}} en la barra de herramientas acepta la lista de existencias de un proveedor ({{ui:Añadir un archivo de proveedor…}}), un CSV o una hoja de cálculo, y compara con ella lo que necesita la cuantificación, con el desperdicio incluido. Se guardan hasta cinco archivos. No se envía nada y nada pregunta a un proveedor: usted aporta el archivo.
- **Qué indica.** Los elementos con falta aparecen primero: «Faltan 120 EA», «Plazo de entrega 21 días», «En pedido pendiente», «La unidad difiere», «Sin cifra de stock» o «En stock». {{ui:Espera máxima deseada (días)}} empieza en 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} descarga los elementos con falta, con la cantidad que falta, el proveedor y el plazo de entrega.
- **Precios a la Biblioteca.** Si el archivo tiene precios, {{ui:Precios a la Biblioteca}} fija el precio de material de cada entrada de la Biblioteca con el mismo nombre y unidad. Vuelva a asignar precios desde la Biblioteca para llevarlos a la cuantificación.
- **En el panel de Problemas.** Una falta de stock es una advertencia y una espera larga es una nota, bajo «Existencias del proveedor». Puede aceptar una con un motivo, y el motivo se guarda en la cuantificación. Vea [Comprobar existencias del proveedor y plazos de entrega](topic:supplier-stock).

**Asistentes de IA**

- **Herramientas para los tres.** Con los asistentes permitidos en {{ui:Ajustes}}, un asistente puede leer una leyenda (`legend_open`), ejecutar el recuento (`legend_count_start`, después `legend_count_status` y `legend_count_result`) y añadirlo (`legend_count_add`, que puede mostrar una vista previa antes). Puede leer los precios recordados (`prices_list`) y asignar precios a elementos a partir de ellos (`prices_apply`, que puede mostrar una vista previa antes), y leer la comprobación con el proveedor (`supply_check`). Añadir un archivo de proveedor sigue siendo tarea suya. Vea [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

**En todas las aplicaciones**

- **Idiomas.** Cincuenta y cuatro idiomas en total; diez son nuevos (lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili y uzbeko). Los idiomas distintos del inglés son borradores automáticos hasta que un hablante nativo los haya revisado.
- **Dispositivos de entrada.** {{ui:Ajustes}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un panel táctil, los botones laterales del ratón, un lápiz, un ratón 3D, un mando de juego o un controlador MIDI, para todas las aplicaciones o solo para una. Vea [Usar un panel táctil, un ratón 3D o un mando](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece {{ui:Ajustar}} (el inicio), {{ui:2 filas}} y {{ui:1 fila}}; los grupos que no caben se desplazan lateralmente. Vea [Organizar los paneles](common:arrange-panels).
- **Panel de Problemas.** El panel compartido de advertencias y notas incluye ahora la comprobación de existencias del proveedor anterior, junto a las demás comprobaciones.
- **Complementos.** Los complementos siguen su lista de cuenta. Vea [Complementos y su lista de cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro: conecte su asistente una vez para las ocho aplicaciones. Studio no tiene IA propia.

### Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto. Está corregido en TakeoffCraft y en otras cuatro aplicaciones.
- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, Studio y sus ediciones empaquetadas solo estaban en inglés. No se ha probado en la versión de escritorio en todas las plataformas; díganos si el idioma no cambia.

### Todavía no incluido en esta versión

- **Sin firma de código.** Windows puede avisar, y en un Mac hace clic derecho y elija {{ui:Abierta}} la primera vez. Las versiones para tiendas (Microsoft Store, Google Play, App Store) están en pausa, y la versión para iPad y iPhone no se recompiló para la 0.8.1.
- **Actualizaciones de Studio.** El instalador de Windows y los paquetes de Linux comprueban una vez al día y preguntan antes. El zip portable solo informa, y macOS y el APK no se actualizan solos. El .dmg de macOS de la 0.8 sigue la versión.
- **Conecte su IA.** En esta versión no se prometen: la conexión con un clic dentro de Studio, el conector alojado para IA en el navegador, su propia clave de API dentro de Studio ni un paquete MCP publicado.
- **Contar todo.** Necesita símbolos dibujados de la misma forma que en la leyenda, y un símbolo con un muro o una línea larga que lo atraviese puede no encontrarse. Los símbolos reflejados no se encuentran, y una hoja sin escala dibujada a otro tamaño se busca al tamaño de la leyenda. Revise los hallazgos de la primera hoja antes de confiar en el resto.
- **Existencias del proveedor.** Las cifras de stock son tan actuales como el archivo que añada. La comprobación nunca pregunta a un proveedor.
- **Idiomas.** La barra de la aplicación en tamil se desborda.

Todo lo demás está en [No construido todavía](topic:not-built-yet). Para la versión anterior, vea [Novedades de la 0.7](topic:whats-new-0-7).
