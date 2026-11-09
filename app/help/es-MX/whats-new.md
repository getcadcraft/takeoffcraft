---
title: Novedades en 0.8 y 0.8.1
summary: Cuente una leyenda completa de símbolos en todas las hojas abiertas en una sola ejecución, asigne precios según las tarifas de sus cuantificaciones anteriores, compare la cuantificación con las existencias y los tiempos de entrega de un proveedor, y use nuevas herramientas de asistente para las tres, además de los cambios comunes de 0.8 y la corrección de 0.8.1 para archivos DWG.
keywords: novedades, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, contar todo, leyenda, leyenda de símbolos, juego completo, memoria de precios, cuantificaciones anteriores, última cuantificación, precio típico, proveedor, existencias, tiempo de entrega, pedido pendiente, lista de pedido, faltante, panel de problemas, asistente, idiomas, dispositivos de entrada, filas de la barra de herramientas, dwg
from: a04adef6
---

Estos son los cambios de TakeoffCraft 0.8 (publicada el 2026-11-01) y 0.8.1 (2026-11-02), comparados con 0.7. Ahora una leyenda de símbolos se puede contar en todo el juego de una vez, una cuantificación nueva puede empezar con los precios de sus trabajos anteriores, y la cuantificación se puede comparar con las existencias de un proveedor. 0.8.1 es una versión de corrección.

## Novedades

### Contar todo en el juego

- **Enmarque la leyenda una vez.** {{ui:Contar todo}} en la barra de herramientas lee una leyenda de símbolos: arrastre un recuadro alrededor de los símbolos y de los nombres impresos junto a ellos. Cada símbolo aparece en la lista con su imagen y su nombre, y el nombre pasa a ser el nombre de la partida. Desmarque lo que no quiera y luego elija {{ui:Contar en N hojas}}. Una barra muestra la hoja que se está buscando, {{ui:Cancelar}} detiene la ejecución, y la página sigue disponible.
- **Todas las hojas en una sola ejecución.** Cada símbolo se cuenta en cada hoja abierta. Una hoja dibujada a otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto. Los símbolos propios de la leyenda no se cuentan en su hoja.
- **Revise antes de agregar nada.** Cada total tiene un enlace por hoja ("E-103: 4") que lleva a esa hoja. Haga clic en un recuadro de un hallazgo para excluirlo, y haga clic otra vez para volver a incluirlo. El nivel de coincidencia (50% a 100%) solo filtra lo encontrado; no se vuelve a buscar.
- **Un solo paso de deshacer.** {{ui:Agregar N marcas}} crea una partida de conteo por símbolo, con una marca en cada hallazgo. Si un nombre ya es una partida de conteo suya, se reutiliza. {{key:Ctrl+Z}} quita todas las partidas y marcas. Lo que acepte también alimenta {{ui:Aprendido}}.
- **Símbolos en cualquier ángulo.** Marque {{ui:Símbolos en cualquier ángulo}} antes de contar para encontrar también los símbolos girados en un ángulo que no sea recto. La búsqueda gira cada símbolo cada 15 grados, y un símbolo que no sea redondo puede tardar hasta seis veces más.
- **Qué es.** Coincidencia simple de símbolos en sus propias hojas, sin modelo entrenado, y nada sale de su computadora. En un juego ficticio de 200 hojas tardó 9.4 segundos de principio a fin en Chrome, en un escritorio rápido; los juegos de planos reales serán más lentos. Vea [Contar todo en el juego](topic:count-everything).

### Memoria de precios de sus cuantificaciones anteriores

- **TakeoffCraft recuerda sus tarifas.** Al guardar una cuantificación, cada partida con precio que se usa se recuerda por nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Se conservan las últimas 12 cuantificaciones de cada nombre. Se guarda en esta computadora junto a la biblioteca de precios, nunca dentro de un archivo de cuantificación, y no se envía a ningún lado.
- **Empiece una cuantificación nueva a partir de ella.** {{ui:Precios}} en la barra de herramientas muestra, para cada partida, las tarifas de la última cuantificación, las tarifas típicas y el rango. {{ui:Usar el último}} o {{ui:Usar el típico}} asigna precio a una partida, y {{ui:Asignar precio a N partidas sin precio desde la memoria}} llena cada partida que todavía no tiene precio. Cada uso es un paso de deshacer.
- **Trabajos anteriores.** {{ui:Aprender de una cuantificación anterior…}} recuerda las partidas con precio de una cuantificación guardada (.json).
- **Véala, cámbiela, olvídela.** {{ui:Todo lo recordado}} lista cada nombre; el botón de papelera olvida uno, y {{ui:Borrar todos los precios}} olvida todos. Desactive {{ui:Recordar mis precios cuando guarde una cuantificación}} para detenerla. Un precio por pieza nunca se asigna a una partida por pie. Vea [Memoria de precios de sus trabajos anteriores](topic:price-memory).

### Existencias del proveedor y tiempos de entrega

- **Compare con la lista de un proveedor.** {{ui:Suministro}} en la barra de herramientas toma la lista de existencias de un proveedor ({{ui:Agregar un archivo de proveedor…}}), un CSV o una hoja de cálculo, y compara con ella lo que necesita la cuantificación, con desperdicio incluido. Se guardan hasta cinco archivos. No se envía nada y nada consulta a un proveedor: usted aporta el archivo.
- **Qué indica.** Los faltantes aparecen primero: "Faltan 120 EA", "Tiempo de entrega 21 días", "Pedido pendiente", "Unidad distinta", "Sin cifra de existencias" o "En existencias". {{ui:Espera máxima deseada (días)}} empieza en 14.
- **Lista de pedido.** {{ui:Lista de pedido (CSV)}} descarga los artículos faltantes con la cantidad que falta, el proveedor y el tiempo de entrega.
- **Precios a la biblioteca.** Si el archivo tiene precios, {{ui:Precios a la biblioteca}} asigna el precio de material de cada entrada de la biblioteca con el mismo nombre y unidad. Vuelva a asignar precios desde la biblioteca para pasarlos a la cuantificación.
- **En el panel de problemas.** Un faltante es una advertencia y una espera larga es una nota, bajo "Existencias del proveedor". Puede aceptar una con un motivo, y el motivo se guarda en la cuantificación. Vea [Revisar existencias del proveedor y tiempos de entrega](topic:supplier-stock).

### Asistentes de IA

- **Herramientas para las tres.** Con los asistentes permitidos en {{ui:Configuración}}, un asistente puede leer una leyenda (`legend_open`), ejecutar el conteo (`legend_count_start`, luego `legend_count_status` y `legend_count_result`) y agregarlo (`legend_count_add`, que puede mostrar una vista previa antes). Puede leer los precios recordados (`prices_list`) y asignar precios a partidas desde ellos (`prices_apply`, que puede mostrar una vista previa antes), y leer la revisión de existencias (`supply_check`). Agregar un archivo de proveedor sigue siendo tarea suya. Vea [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

### En todas las apps

- **Idiomas.** Cincuenta y cuatro idiomas en total; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko). Los idiomas distintos del inglés son borradores de máquina hasta que un hablante nativo los haya revisado.
- **Dispositivos de entrada.** {{ui:Configuración}} › {{ui:Global}} › {{ui:Dispositivos de entrada}} define qué hacen un trackpad, los botones laterales de un ratón, un lápiz, un ratón 3D, un control de juego o un controlador MIDI, para todas las apps o para una sola. Vea [Use un trackpad, un ratón 3D o un control](common:input-devices).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} ofrece {{ui:Repartir}} (el inicio), {{ui:2 filas}} y {{ui:1 fila}}; los grupos que no caben se desplazan a los lados. Vea [Organice los paneles](common:arrange-panels).
- **Panel de problemas.** El panel compartido de advertencias y notas ahora incluye la revisión de existencias del proveedor descrita arriba, junto a las otras revisiones.
- **Complementos.** Los complementos siguen su lista de cuenta. Vea [Complementos y su lista de cuenta](common:addons-basics).
- **Conecte su IA.** CadCraft Studio es el centro: conecte su asistente una vez para las ocho apps. Studio no tiene IA propia.

## Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía como un tipo incorrecto. Esto está corregido en TakeoffCraft y en otras cuatro apps.
- **Studio puede cambiar de idioma mientras se ejecuta.** Antes, Studio y sus ediciones empaquetadas solo estaban en inglés. Esto no se ha probado en la versión de escritorio en todas las plataformas; avísenos si el idioma no cambia.

## Todavía no en esta versión

- **Sin firma de código.** Windows puede advertirlo, y en Mac haga clic derecho y elija {{ui:Abierta}} la primera vez. Las versiones para tiendas (Microsoft Store, Google Play, App Store) están en pausa, y la versión para iPad e iPhone no se recompiló para 0.8.1.
- **Actualizaciones de Studio.** El instalador de Windows y los paquetes de Linux revisan una vez al día y preguntan antes. El zip portátil solo avisa, y macOS y el APK no se actualizan solos. El .dmg de macOS de 0.8 sigue la versión.
- **Conecte su IA.** La conexión de un clic dentro de Studio, el conector alojado para IA en el navegador, su propia clave de API dentro de Studio y un paquete MCP publicado no están prometidos en esta versión.
- **Contar todo.** Necesita símbolos dibujados igual que en la leyenda, y un símbolo con un muro o con una línea larga que lo atraviese puede pasar desapercibido. Los símbolos reflejados no se encuentran, y una hoja sin escala dibujada a otro tamaño se busca al tamaño de la leyenda. Revise los hallazgos de la primera hoja antes de confiar en el resto.
- **Existencias del proveedor.** Las cifras de existencias son tan actuales como el archivo que agregue. La revisión nunca consulta a un proveedor.
- **Idiomas.** La barra de la aplicación en tamil se desborda.

Lo demás está en [Aún no disponible](topic:not-built-yet). Para la versión anterior, vea [Novedades en 0.7](topic:whats-new-0-7).
