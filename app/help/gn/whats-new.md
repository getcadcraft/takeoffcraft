---
title: Novedades en 0.8 ha 0.8.1
summary: Contar un juego completo de leyenda de símbolos en todas las hojas abiertas en una corrida, poner precio a ítems según tarifas de trabajos pasados, verificar el cómputo contra stock y plazos de entrega de un proveedor, y nuevas herramientas de asistente para las tres, más los cambios compartidos de 0.8 y la corrección 0.8.1 para archivos DWG.
keywords: novedades, qué hay de nuevo, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, contar todo, leyenda, leyenda de símbolos, conjunto completo, memoria de precios, trabajos pasados, último trabajo, precio típico, proveedor, stock, plazo de entrega, pedido pendiente, lista de pedido, faltante, panel de problemas, asistente, idiomas, dispositivos de entrada, filas de la barra, dwg
from: a04adef6
---

Esto cambió en TakeoffCraft 0.8 (publicado 2026-11-01) y 0.8.1 (2026-11-02), comparado con 0.7. Una leyenda de símbolos ahora puede contarse en todo el conjunto a la vez, un cómputo nuevo puede empezar con los precios de tus trabajos pasados, y el cómputo puede verificarse contra stock de un proveedor. 0.8.1 es una versión de corrección.

## Nuevo

### Contar todo en el conjunto

- **Encuadra la leyenda una vez.** {{ui:Count everything}} en la barra lee una leyenda de símbolos: arrastra un recuadro alrededor de los símbolos y de los nombres impresos junto a ellos. Cada símbolo se lista con su imagen y su nombre, y el nombre pasa a ser el nombre del ítem. Desmarca lo que no quieras, luego eliminá {{ui:Count on N sheets}}. Una barra muestra la hoja que se busca, {{ui:Cancel}} detiene la corrida, y la página sigue usable.
- **Todas las hojas en una corrida.** Cada símbolo se cuenta en cada hoja abierta. Una hoja dibujada a otra escala se busca a esa escala, y los símbolos se encuentran girados en cualquier ángulo recto. Los propios símbolos de la leyenda no se cuentan en su hoja.
- **Revisa antes de agregar nada.** Cada total tiene un enlace por hoja ("E-103: 4") que lleva a esa hoja. Haz clic en un recuadro para dejarlo fuera, y clic otra vez para volverlo. El nivel de coincidencia (50% a 100%) solo filtra lo encontrado; no se busca de nuevo.
- **Un paso de deshacer.** {{ui:Add N marks}} crea un ítem de conteo por símbolo con una marca en cada hallazgo. Un nombre que ya sea un ítem de conteo tuyo se reutiliza. {{key:Ctrl+Z}} quita todos los ítems y marcas. Lo que aceptes también alimenta {{ui:Learned}}.
- **Símbolos en cualquier ángulo.** Marca {{ui:Symbols at any angle}} antes de contar para encontrar también símbolos girados en un ángulo que no sea recto. La búsqueda entonces gira cada símbolo cada 15 grados, y un símbolo que no sea redondo puede tardar hasta seis veces más.
- **Qué es.** Coincidencia simple de símbolos en tus propias hojas, sin modelo entrenado, y nada sale de tu computadora. En un conjunto de 200 hojas inventado tomó 9,4 segundos de principio a fin en Chrome en una computadora de escritorio rápida; los conjuntos de planos reales serán más lentos. Ver [Contar todo en el conjunto](topic:count-everything).

### Memoria de precios de tus propios trabajos

- **TakeoffCraft recuerda tus tarifas.** Cuando guardas un cómputo, cada ítem con precio que se usa se recuerda por nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Se guardan los últimos 12 trabajos por nombre. Se mantiene en esta computadora junto a la Biblioteca de precios, nunca dentro de un archivo de cómputo, y nada se envía a ningún lado.
- **Empieza un cómputo nuevo desde ella.** {{ui:Prices}} en la barra muestra, para cada ítem, las tarifas del último trabajo, las tarifas típicas y el rango. {{ui:Use last}} o {{ui:Use typical}} ponen precio a un ítem, y {{ui:Price N unpriced items from memory}} completa cada ítem que todavía no tiene precio. Cada uso es un paso de deshacer.
- **Trabajos anteriores.** {{ui:Learn from a past takeoff…}} recuerda los ítems con precio de un cómputo guardado (.json).
- **Mírala, cámbiala, olvídala.** {{ui:Everything remembered}} lista cada nombre; el botón de papelera olvida uno, y {{ui:Clear all prices}} olvida todos. Desactiva {{ui:Remember my prices when I save a takeoff}} para dejar de guardar. Un precio por unidad nunca se pone en un ítem por pie. Ver [Memoria de precios de tus trabajos pasados](topic:price-memory).

### Existencias del proveedor y plazos de entrega

- **Verifica contra la lista de un proveedor.** {{ui:Supply}} en la barra toma una lista de existencias de un proveedor ({{ui:Add a supplier file…}}), un CSV o una planilla, y verifica lo que necesita el cómputo, con desperdicio, contra ella. Se guardan hasta cinco archivos. Nada se envía y nada le pregunta a un proveedor: tú traes el archivo.
- **Qué dice.** Los ítems faltantes aparecen primero: "Faltan 120 EA", "Plazo de entrega 21 días", "En pedido pendiente", "La unidad difiere", "Sin cifra de existencias" o "En existencia". {{ui:Longest wait wanted (days)}} empieza en 14.
- **Lista de pedido.** {{ui:Order list (CSV)}} descarga los ítems faltantes con la cantidad que falta, el proveedor y el plazo de entrega.
- **Precios en la Biblioteca.** Si el archivo tiene precios, {{ui:Prices into the Library}} define el precio de material de cada entrada de la Biblioteca con el mismo nombre y unidad. Vuelve a poner precio desde la Biblioteca para llevarlos al cómputo.
- **En el panel de Problemas.** Un faltante es un aviso y una espera larga es una nota, bajo "Existencias del proveedor". Puedes aceptar uno con un motivo, y el motivo se guarda en el cómputo. Ver [Verificar existencias del proveedor y plazos de entrega](topic:supplier-stock).

### Asistentes de IA

- **Herramientas para las tres.** Con asistentes permitidos en {{ui:Settings}}, un asistente puede leer una leyenda (`legend_open`), ejecutar el conteo (`legend_count_start`, luego `legend_count_status` y `legend_count_result`) y agregarlo (`legend_count_add`, que puede previsualizar antes). Puede leer los precios recordados (`prices_list`) y poner precio a ítems desde ellos (`prices_apply`, que puede previsualizar antes), y leer la verificación de proveedor (`supply_check`). Agregar un archivo de proveedor sigue siendo algo que haces tú. Ver [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

### En todas las aplicaciones

- **Idiomas.** Cincuenta y cuatro idiomas en total; diez son nuevos (lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili y uzbeko). Los idiomas distintos del inglés son borradores automáticos hasta que un hablante nativo los haya leído.
- **Dispositivos de entrada.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} define qué hacen un trackpad, los botones laterales de un ratón, un lápiz, un ratón 3D, un control de juego o un controlador MIDI, para todas las aplicaciones o para una. Ver [Usar un trackpad, ratón 3D o controlador](common:input-devices).
- **Filas de la barra.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofrece {{ui:Wrap}} (el inicio), {{ui:2 rows}} y {{ui:1 row}}; los grupos que no caben se desplazan de lado. Ver [Organizar los paneles](common:arrange-panels).
- **Panel de problemas.** El panel compartido de avisos y notas ahora incluye la verificación de existencias del proveedor descrita arriba, junto a las otras verificaciones.
- **Complementos.** Los complementos siguen tu lista de cuenta. Ver [Complementos y tu lista de cuenta](common:addons-basics).
- **Conecta tu IA.** CadCraft Studio es el centro: conecta tu asistente una vez para las ocho aplicaciones. Studio no tiene IA propia.

## Corregido en 0.8.1

- **Sección de clases de DWG.** La sección de clases de un archivo DWG se leía como un tipo equivocado. Esto está corregido en TakeoffCraft y en otras cuatro aplicaciones.
- **Studio puede cambiar de idioma mientras corre.** Antes, Studio y sus ediciones empaquetadas eran solo en inglés. Esto no se probó en la versión de escritorio en todas las plataformas; avísanos si el idioma no cambia.

## Todavía no en esta versión

- **Sin firma de código.** Windows puede avisar, y en un Mac haces clic derecho y eliges {{ui:Open}} la primera vez. Las versiones de tiendas (Microsoft Store, Google Play, App Store) están en espera, y la versión de iPad e iPhone no se recompiló para 0.8.1.
- **Actualizaciones de Studio.** El instalador de Windows y los paquetes de Linux verifican una vez al día y preguntan antes. El zip portátil solo avisa, y macOS y el APK no se actualizan solos. El .dmg de macOS 0.8 sigue a la versión.
- **Conecta tu IA.** Conexión con un clic dentro de Studio, el conector alojado para IA en el navegador, tu propia clave de API dentro de Studio y un paquete MCP publicado no están prometidos en esta versión.
- **Contar todo.** Necesita símbolos dibujados igual que en la leyenda, y un símbolo con un muro o una línea larga encima puede no encontrarse. Los símbolos espejados no se encuentran, y una hoja sin escala dibujada a otro tamaño se busca al tamaño de la leyenda. Revisa los hallazgos de la primera hoja antes de confiar en el resto.
- **Existencias del proveedor.** Las cifras de stock son tan actuales como el archivo que agregas. La verificación nunca le pregunta a un proveedor.
- **Idiomas.** La barra de la aplicación en tamil se desborda.

Todo lo demás está en [Todavía no construido](topic:not-built-yet). Para la versión anterior, ver [Novedades en 0.7](topic:whats-new-0-7).
