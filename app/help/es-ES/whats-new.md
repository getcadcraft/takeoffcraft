---
title: Novedades de la versión 0.8 y 0.8.1
summary: Contar una leyenda completa de símbolos en todas las hojas abiertas de una sola vez, asignar precios según las tarifas de trabajos anteriores, comprobar la cuantificación con el stock y los plazos de entrega de un proveedor, y nuevas herramientas de asistente para las tres, además de los cambios comunes de la 0.8 y la corrección de la 0.8.1 para archivos DWG.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, contar todo, leyenda, leyenda de símbolos, conjunto completo, memoria de precios, trabajos anteriores, último trabajo, precio habitual, proveedor, stock, plazo de entrega, pedido pendiente, lista de pedido, falta, panel de problemas, asistente, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg
from: a04adef6
---

Estos son los cambios de TakeoffCraft 0.8 (publicada el 2026-11-01) y 0.8.1 (2026-11-02), comparados con la 0.7. Ahora se puede contar una leyenda de símbolos en todo el conjunto de una vez, una cuantificación nueva puede empezar con los precios de trabajos anteriores, y la cuantificación puede comprobarse con el stock de un proveedor. La 0.8.1 es una versión de corrección.

## Nuevo

### Contar todo en el conjunto

- **Enmarque la leyenda una vez.** {{ui:Contar todo}} en la barra de herramientas lee una leyenda de símbolos: arrastre un recuadro alrededor de los símbolos y de los nombres impresos junto a ellos. Cada símbolo aparece en la lista con su imagen y su nombre, y el nombre pasa a ser el nombre del elemento. Desmarque lo que no quiera y elija {{ui:Contar en N hojas}}. Una barra muestra la hoja que se está buscando, {{ui:Cancelar}} detiene la ejecución y la página sigue disponible.
- **Todas las hojas en una sola ejecución.** Cada símbolo se cuenta en todas las hojas abiertas. Una hoja dibujada a otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto. Los propios símbolos de la leyenda no se cuentan en su hoja.
- **Revisar antes de añadir nada.** Cada total tiene un enlace por hoja ("E-103: 4") que lleva a esa hoja. Haga clic en un recuadro de un hallazgo para dejarlo fuera y vuelva a hacer clic para recuperarlo. El nivel de coincidencia (del 50% al 100%) solo filtra lo encontrado; no se vuelve a buscar nada.
- **Un solo paso de deshacer.** {{ui:Añadir N marcas}} crea un elemento de recuento por símbolo con una marca en cada hallazgo. Si un nombre ya es un elemento de recuento suyo, se reutiliza. {{key:Ctrl+Z}} quita todos los elementos y marcas. Lo que acepte también alimenta {{ui:Aprendido}}.
- **Símbolos en cualquier ángulo.** Marque {{ui:Símbolos en cualquier ángulo}} antes de contar para encontrar también los símbolos girados en un ángulo que no es recto. La búsqueda gira cada símbolo cada 15 grados, y un símbolo que no es redondo puede tardar hasta seis veces más.
- **Qué es.** Coincidencia sencilla de símbolos en sus propias hojas, sin modelo entrenado, y nada sale de su ordenador. En un conjunto ficticio de 200 hojas tardó 9.4 segundos de principio a fin en Chrome en un escritorio rápido; los conjuntos de planos reales serán más lentos. Véase [Contar todo en el conjunto](topic:count-everything).

### Memoria de precios de trabajos anteriores

- **TakeoffCraft recuerda sus tarifas.** Al guardar una cuantificación, cada elemento con precio que se utiliza se recuerda por nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Se conservan los últimos 12 trabajos de cada nombre. Se guarda en este ordenador junto a la Biblioteca de precios, nunca dentro de un archivo de cuantificación, y no se envía a ningún sitio.
- **Empiece una cuantificación nueva a partir de ella.** {{ui:Precios}} en la barra de herramientas muestra, para cada elemento, las tarifas del último trabajo, las tarifas habituales y el intervalo. {{ui:Usar el último}} o {{ui:Usar el habitual}} asigna precio a un elemento, y {{ui:Asignar precio a N elementos sin precio desde la memoria}} rellena cada elemento que todavía no tiene precio. Cada uso es un paso de deshacer.
- **Trabajos anteriores.** {{ui:Aprender de una cuantificación anterior…}} recuerda los elementos con precio de una cuantificación guardada (.json).
- **Véala, cámbiela, olvídela.** {{ui:Todo lo recordado}} lista cada nombre; el botón de la papelera olvida uno, y {{ui:Borrar todos los precios}} olvida todos. Desactive {{ui:Recordar mis precios al guardar una cuantificación}} para dejar de hacerlo. Un precio por unidad nunca se asigna a un elemento por pie. Véase [Memoria de precios de sus trabajos anteriores](topic:price-memory).

### Stock del proveedor y plazos de entrega

- **Compruebe con la lista de un proveedor.** {{ui:Suministro}} en la barra de herramientas toma la lista de stock de un proveedor ({{ui:Añadir un archivo de proveedor…}}), un CSV o una hoja de cálculo, y comprueba contra ella lo que necesita la cuantificación, incluido el desperdicio. Se guardan hasta cinco archivos. No se envía nada ni se pregunta a ningún proveedor: el archivo lo aporta usted.
- **Lo que indica.** Primero aparecen los artículos con falta: "Faltan 120 EA", "Plazo de entrega 21 días", "En pedido pendiente", "La unidad difiere", "Sin cifra de stock" o "En stock". {{ui:Espera máxima deseada (días)}} empieza en 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} descarga los artículos con falta, con la cantidad que falta, el proveedor y el plazo de entrega.
- **Precios a la Biblioteca.** Si el archivo tiene precios, {{ui:Precios a la Biblioteca}} asigna el precio de material de cada entrada de la Biblioteca con el mismo nombre y unidad. Vuelva a asignar precios desde la Biblioteca para llevarlos a la cuantificación.
- **En el panel de problemas.** Una falta es una advertencia y una espera larga es una nota, bajo "Stock del proveedor". Puede aceptar una con un motivo, y el motivo se guarda en la cuantificación. Véase [Comprobar el stock del proveedor y los plazos de entrega](topic:supplier-stock).

### Asistentes de IA

- **Herramientas para las tres.** Con los asistentes permitidos en {{ui:Ajustes}}, un asistente puede leer una leyenda (`legend_open`), ejecutar el recuento (`legend_count_start`, luego `legend_count_status` y `legend_count_result`) y añadirlo (`legend_count_add`, que puede previsualizar antes). Puede leer los precios recordados (`prices_list`) y asignar precios a elementos a partir de ellos (`prices_apply`, que puede previsualizar antes), y leer la comprobación de proveedor (`supply_check`). Añadir un archivo de proveedor sigue siendo tarea suya. Véase [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

### En todas las aplicaciones

- **Idiomas.** Cincuenta y cuatro idiomas en total; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko). Los idiomas distintos del inglés son borradores automáticos hasta que un hablante nativo los haya revisado.
- **Dispositivos de entrada.** {{ui:Ajustes}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un panel táctil, los botones laterales de un ratón, un lápiz, un ratón 3D, un mando de juegos o un controlador MIDI, para todas las aplicaciones o para una sola. Véase [Usar un panel táctil, un ratón 3D o un mando](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece {{ui:Ajustar}} (el inicio), {{ui:2 filas}} y {{ui:1 fila}}; los grupos que no caben se desplazan lateralmente. Véase [Organizar los paneles](common:arrange-panels).
- **Panel de problemas.** El panel compartido de advertencias y notas incluye ahora la comprobación de stock del proveedor descrita arriba, junto a las demás comprobaciones.
- **Complementos.** Los complementos siguen su lista de cuenta. Véase [Complementos y su lista de cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro: conecte su asistente una vez para las ocho aplicaciones. Studio no tiene IA propia.

## Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto. Está corregido en TakeoffCraft y en otras cuatro aplicaciones.
- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, Studio y sus ediciones empaquetadas solo estaban en inglés. Esto no se ha probado en la versión de escritorio en todas las plataformas; avísenos si el idioma no cambia.

## Todavía no incluido en esta versión

- **Sin firma de código.** Windows puede mostrar un aviso, y en un Mac haga clic con el botón derecho y elija {{ui:Abierta}} la primera vez. Las versiones de las tiendas (Microsoft Store, Google Play, App Store) están en espera, y la versión para iPad e iPhone no se recompiló para la 0.8.1.
- **Actualizaciones de Studio.** El instalador de Windows y los paquetes de Linux comprueban una vez al día y preguntan antes. El zip portátil solo informa, y macOS y el APK no se actualizan solos. El .dmg de macOS de la 0.8 sigue a la versión.
- **Conecte su IA.** No se prometen en esta versión: la conexión con un solo clic dentro de Studio, el conector alojado para IA en el navegador, su propia clave de API dentro de Studio ni un paquete MCP publicado.
- **Contar todo.** Necesita símbolos dibujados igual que en la leyenda, y un símbolo con un muro o una línea larga que lo atraviese puede pasarse por alto. No se encuentran los símbolos reflejados, y una hoja sin escala dibujada a otro tamaño se busca al tamaño de la leyenda. Revise los hallazgos de la primera hoja antes de confiar en el resto.
- **Stock del proveedor.** Las cifras de stock solo son tan actuales como el archivo que añada. La comprobación nunca pregunta a un proveedor.
- **Idiomas.** La barra de la aplicación en tamil se desborda.

Todo lo demás está en [Aún no disponible](topic:not-built-yet). Para la versión anterior, véase [Novedades de la versión 0.7](topic:whats-new-0-7).
