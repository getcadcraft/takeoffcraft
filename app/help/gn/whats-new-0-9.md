---
title: Mba'épa ojeporu 0.9 (ymaguare)
summary: Ohecha longitudes en metro, centímetro o milímetro, superficies métricas en m2 con área de muro, preajustes de escala 1:75 y 1:150, unidades de peso y temperatura, Arco con diez métodos, y cursores en vivo, Seguir y lista de personas.
keywords: novedades 0.9, versión anterior, novedades, notas de versión, registro de cambios, 0.9, mostrar longitudes como, metros, centímetros, milímetros, métrico, seguir global, unidades, unidades de visualización, m2, metros cuadrados, área de muro, preajustes de escala, 1:75, 1:150, peso, kilogramos, kg, tonelada, ton, lb, temperatura, celsius, fahrenheit, arco, métodos de arco, arco de 3 puntos, radio, en vivo, cursores, seguir, lista de personas, clase, descripciones emergentes, disposición, novedades, notas de versión, cambios, 0.8, 0.8.1, versión, nuevas funciones, contar todo, leyenda, leyenda de símbolos, conjunto completo, memoria de precios, trabajos pasados, último trabajo, precio típico, proveedor, stock, plazo de entrega, pedido pendiente, lista de pedido, faltante, panel de problemas, asistente, idiomas, dispositivos de entrada, filas de la barra, dwg
from: f4322ba2
---

Kóva ojejuhu mba'épa ojeporu TakeoffCraft 0.9-pe, 0.8.1 rehe. Ha'e peteĩ versión michĩ ko aplicación-pe: longitudes ikatu ohecha metro, centímetro térã milímetro, superficies métricas ojeporu porã, ha Arco oguereko diez tape. Sesión en vivo-pe ohechauka avei máva oĩ mávape.

## Ñemboyke

### Ohecha longitudes en metro, centímetro o milímetro

- **Mostrar longitudes como.** {{ui:Settings}} › {{ui:TakeoffCraft}} rupi oiko {{ui:Show lengths as}} con {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm ha mm. {{ui:Follow Global}} ojeporu unidad métrica de longitud oñemarka {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} rupi, ha pies-pulgadas ojeporu ndaipóri marcado. Ojemudáta mba'épa ohecha longitudes hoja ári, barra de estado-pe ha panel-kuéra-pe, altura, profundidad, espesor ha niveles-pe. Número ojehai campo de altura-pe ojehecha unidad ohechaukáva.
- **Solo ohecha.** Cantidades, costos ha exportaciones ojejapo longitudes exactas rupi. Opción 1/16, 1/8 ha 1/4 pulgada oiko solo pies-pulgadas-pe. Ehecha [Mostrar longitudes en metros](topic:show-lengths-in-meters).
- **Unidades de peso.** Ítem {{ui:Typed quantity (no drawing)}} ikatu oĩ en lb, TON, kg térã t, ha ikatu ojepreciáva unidad peteĩ-peteĩ.
- **Temperatura.** Ítem peteĩ-peteĩ oguereko campo opcional {{ui:Temperature}} editor de ítem-pe, ojehai grados C térã F. {{ui:Show temperatures as}} {{ui:Settings}} › {{ui:TakeoffCraft}} rupi oiko {{ui:Follow Global}}, °C térã °F.

### Áreas y escalas para trabajo métrico

- **Áreas en m2 en el plano.** Área ojemedi ítem métrico rupi ohechauka m2 etiqueta del plano ha panel de marcas-pe, ha tabla-pe avei, SF ndaha'éi. Regla: m2 ojehecha ítem métrico ojepreciáva térã longitudes ohechauka m, cm térã mm, ha SF ambue rupi.
- **Área de muro.** Ítem lineal oguereko altura ohechauka avei área de muro (longitud por altura) lista de Ítems-pe ha fila de nota-pe cantidades por ítem rupi.
- **Preajustes de escala 1:75 ha 1:150.** Oĩ lista {{ui:Preset}} grupo {{ui:Scale}} rupi, ohechakuaáva 32 escala. Ehecha [Preajustes de escala](topic:scale-presets).

### Arco con diez métodos

- Ha {{ui:Arc}} oñemboguejy (botón de barra térã {{key:R}}), caja {{ui:Arc method}} oikuaa barra de hoja-pe: 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle ha Center, Start, Length. Ángulo, longitud, radio ha dirección ikatu ojeklika térã ojehai. Ojeporu líneas, áreas ha recortes-pe. Archivos ojesalva 0.9 mboyve ojepeteĩ ko'ã rehegua. Ehecha [Dibujar arcos con diez métodos](topic:draw-arcs-ten-methods).

### Trabajo juntos

- **Ehecha ambue cursores.** Sesión en vivo-pe cada persona puntero ohechauka hoja ári, ita'ýra ha color ndive, ha caja punteada oikuaa marca ojeporáva. Oĩva ambue hojapype oñemoĩ lista-pe hoja rérape. Ehecha [Trabajar en vivo con otros](topic:work-live).
- **Seguir persona, ha lista de personas.** Botón {{ui:People}} sesión en vivo-pe oñemoĩ persona peteĩ-peteĩ, herramienta ojeporáva, hoja oĩva ha mboyve ojeeditáva. {{ui:Follow}} ohendu chupe ohechaháicha, ha anfitrión ikatu ojapo {{ui:Ask everyone to follow me}}. Ehecha [Seguir a un compañero en sesión en vivo](topic:follow-a-teammate).

## En todas las aplicaciones

- **Descripciones emergentes y consejo de inicio.** Texto al pasar mouse ha tooltip Bootstrap, ha consejo de inicio ikatu oñemboty.
- **Pestañas con desplazamiento.** Pestañas de panel ndojepe'áiva oñemboguejy ndaha'éi oñemoĩ.
- **Títulos de pestañas.** Pestaña navegador-pe oñemoĩ `<documento> - TakeoffCraft | CadCraft`.
- **Disposición.** Lista de disposición {{ui:Settings}} rupi ha desplegable ohechauka disposición ojeporáva.
- **Idioma.** Idioma ojeporáva oñemoĩ página ohechaukáva, peteĩ New, Open ha Save. Idioma ambue inglés rehe ha ko'ã borrador automático peẽ ojehecha hag̃ua ñandúva nativo.

## Límites honestos

- Longitud, peso, temperatura ha preajuste nuevo oñemoĩ prueba-pe ha página-pe. Panel opavave unidad opavave ndojeñemoĩ mano-pe.
- Lista de personas ndojehai mano-pe clase real de maestro ha estudiante-pe.
- Idioma ambue inglés rehe borrador automático.
- Instalador Windows ndoñemoĩ firma de código (Más información, después Ejecutar de todos modos). Imagen de disco macOS ndoñemoĩ notarización (clic derecho, después {{ui:Open}}).

## Ymaguare: 0.8 ha 0.8.1

Kóva ojejuhu mba'épa ojeporu TakeoffCraft 0.8-pe (ojeme'ẽ 2026-11-01) ha 0.8.1-pe (2026-11-02), 0.7 rehe. Leyenda de símbolo ikatu ohecha conjunto opavave peteĩ jey, ha cómputo nuevo ikatu oñepyrũ precio-kuéra trabajo pasados-gui, ha cómputo ikatu ojehechakuaa stock proveedor-pe. 0.8.1 ha peteĩ arreglo.

### Nuevo

**Contar todo en el conjunto**

- **Encerrar la leyenda una vez.** {{ui:Count everything}} barra-pe ojeku'e leyenda de símbolo: ejumína caja símbolo ha nombre ojehai ijyvate. Símbolo peteĩ-peteĩ oñemoĩ imagen ha nombre ndive, ha nombre oiko nombre de ítem. Ejepe'a ndoipotáva, eiporu upéi {{ui:Count on N sheets}}. Barra ohechauka hoja ojeheka, {{ui:Cancel}} omboty ojapo, ha página oikoséta ojeporu hag̃ua.
- **Hoja opavave peteĩ jey.** Símbolo peteĩ-peteĩ ojehecha hoja abierta opavave-pe. Hoja escala ambue-pe ojeheka chupe escala upe rupi, ha símbolo ojehecha jeipeva ángulo recto-pe. Leyenda ipópe símbolo ndojehecha hoja upépe.
- **Ojehecha antes oñemoĩ.** Total peteĩ-peteĩ oguereko enlace hoja-pe ("E-103: 4") ohechauka hoja upe. Klika caja ojehecha hag̃ua ndoipotáva, ha klika jey ojeporu hag̃ua. Nivel de coincidencia (50% a 100%) ojepe'a solo ojehechaukáva; ndojeheka jey.
- **Peteĩ paso deshacer.** {{ui:Add N marks}} ojapo ítem de conteo símbolo-pe marca opavave-pe. Nombre ya ítem de conteo nde rehegua oñeporu jey. {{key:Ctrl+Z}} omboguejy ítem ha marca opavave. Ndéve ojeporu oñeikuaa avei {{ui:Learned}}.
- **Símbolos en cualquier ángulo.** Ejumína {{ui:Symbols at any angle}} contar mboyve, ojehecha avei símbolo ojejeipáva ángulo ndaha'éi recto. Búsqueda ojejeipa símbolo 15 grado peteĩ-peteĩ, ha símbolo ndaha'éi redondo ikatu iporã seis jey mboyve.
- **Mba'épa ha'e.** Coincidencia simple de símbolo hoja nde rembiapo-pe, ndaipóri modelo entrenado, ha ndaha'éi ojeity nde computadora rehegua. Conjunto 200 hoja ojehai-pe, 9.4 segundo ojapo Chrome-pe desktop rápido-pe; plano real ikatu hasýve. Ehecha [Contar todo en el conjunto](topic:count-everything).

**Memoria de precios de trabajos propios**

- **TakeoffCraft ohechakuaa tasas nde.** Cómputo ojesalva mboyve, ítem precio-pe ojeporu oñemandu'a nombre ha tipo rupi: tasa material, tasa mano de obra, desperdicio ha unidad. Trabajo 12 mboyve oñeñongatu nombre peteĩ-peteĩ. Ojekeha computadora ko'ápe Biblioteca de precios rembe, ndaha'éi archivo de cómputo-pe, ha ndaha'éi oñemomba'eguasu.
- **Oñepyrũ cómputo nuevo upégui.** {{ui:Prices}} barra-pe ohechauka, ítem peteĩ-peteĩ-pe, tasa trabajo mboyve, tasa típica ha rango. {{ui:Use last}} térã {{ui:Use typical}} precio peteĩ ítem-pe, ha {{ui:Price N unpriced items from memory}} oñemoĩ opa ítem ndaiporiva precio-pe. Peteĩ-peteĩ uso peteĩ paso deshacer.
- **Trabajos anteriores.** {{ui:Learn from a past takeoff…}} oñemanduʼa ítem preciado cómputo ojesalva-gui (.json).
- **Ehecha, ejmúda, ejeipe'a.** {{ui:Everything remembered}} ohechauka nombre opavave; botón papelera peteĩ nombre ojepe'a, ha {{ui:Clear all prices}} opavave ojepe'a. Ejepe'a {{ui:Remember my prices when I save a takeoff}} ndoipotáva. Precio por unidad ndojepurumáiva ítem por pie-pe. Ehecha [Memoria de precios de trabajos pasados](topic:price-memory).

**Stock de proveedor y plazos de entrega**

- **Verificar contra lista de proveedor.** {{ui:Supply}} barra-pe ojapo lista de stock proveedor ({{ui:Add a supplier file…}}), CSV térã planilla, ha ohecha lo cómputo ohaiva, desperdicio ndive. Hasta cinco archivo ojesalva. Ndojeme'ẽi nada ha ndojeikói proveedor: nde ojapo archivo.
- **Mba'épa ohai.** Ítem ndaipóriva oñemoĩ mboyve: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" térã "In stock". {{ui:Longest wait wanted (days)}} oñepyrũ 14-pe.
- **Lista de pedido.** {{ui:Order list (CSV)}} omomby ítem ndaipóriva cantidad faltante, proveedor ha plazo de entrega ndive.
- **Precios a la Biblioteca.** Archivo precio oguereko ramo, {{ui:Prices into the Library}} oñemoĩ precio material peteĩ-peteĩ entrada Biblioteca-pe nombre ha unidad mbojoja. Reprecio Biblioteca rupi oñemoĩ cómputo-pe.
- **Panel de Problemas-pe.** Faltante ohaiva aviso ha espera pukukue nota, "Stock de proveedor" rehe. Ikatu eiporu peteĩ razón ndive, ha razón oñesalva cómputo-pe. Ehecha [Verificar stock de proveedor y plazos de entrega](topic:supplier-stock).

**Asistentes de IA**

- **Herramientas para opavave.** {{ui:Settings}} rupi asistente oñemoĩva, asistente ikatu ohecha leyenda (`legend_open`), omboty conteo (`legend_count_start`, upéi `legend_count_status` ha `legend_count_result`) ha omoĩ (`legend_count_add`, ojehecha mboyve). Ikatu ohecha tasas oñeñongatu (`prices_list`) ha poner precio ítem-pe upégui (`prices_apply`, ojehecha mboyve), ha ohecha verificación de proveedor (`supply_check`). Agregar archivo proveedor-pe nde rembiapo nomíva. Ehecha [Usar TakeoffCraft con asistentes de IA](topic:use-with-ai-assistants).

**En todas las aplicaciones**

- **Idiomas.** Cincuenta y cuatro idioma opavave; diez ovaʼekue (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili ha uzbeko). Idioma ambue inglés rehe borrador automático hasta peteĩ hablante nativo ojehai.
- **Dispositivos de entrada.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} omoĩ mba'épa ojapo trackpad, botón lateral de mouse, lápiz, mouse 3D, control de juego térã controlador MIDI, opavave aplicación-pe térã peteĩ-pe. Ehecha [Usar trackpad, mouse 3D o controlador](common:input-devices).
- **Filas de la barra.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} oikuaa {{ui:Wrap}} (inicio), {{ui:2 rows}} ha {{ui:1 row}}; grupo ndojepe'áiva oñemboguejy costado-pe. Ehecha [Ordenar los paneles](common:arrange-panels).
- **Panel de problemas.** Panel compartido de avisos y notas ahora oguereko verificación de stock proveedor ko'ãva, ambue verificación rembe.
- **Complementos.** Complementos oheka lista de cuenta nde rehegua. Ehecha [Complementos y lista de tu cuenta](common:addons-basics).
- **Conectá tu IA.** CadCraft Studio ojehechaukáva hub: econectá nde asistente peteĩ jey opa ocho aplicación-pe. Studio ndoguerekói IA propia.

### Arreglado en 0.8.1

- **Sección de clases DWG.** Sección de clases archivo DWG oñemoʼã tipo ndaha'éiva. Ojeregua TakeoffCraft-pe ha ambue cuatro aplicación-pe.
- **Studio ikatu ojemudá idioma ojeporúvo.** Ko'ẽmby Studio ha edición empaquetada solo inglés. Ndojehai opa plataforma escritorio-pe; ehai ndaha'éi idioma ojemudáiramo.

### Todavía no en esta versión

- **Sin firma de código.** Windows ikatu ohai aviso, Mac-pe clic derecho ha {{ui:Open}} peteĩ jey. Versiones de tienda (Microsoft Store, Google Play, App Store) oñemoĩ espera-pe, ha build iPad ha iPhone ndojeheka 0.8.1-pe.
- **Actualizaciones de Studio.** Instalador Windows ha paquetes Linux ojehechakuaa peteĩ ára ha oipota permiso. Zip portátil solo ohai, ha macOS ha APK ndoñembopyahu. Imagen macOS .dmg 0.8 ohendu versión.
- **Conectá tu IA.** Conexión peteĩ clic Studio-pe, conector alojado para IA navegador-pe, tu clave API Studio-pe ha paquete MCP publicado ndoñemoñemíri kóva versión-pe.
- **Contar todo.** Oñeporu símbolo ojejapo leyenda ndive, ha símbolo pared térã línea ipukúva ikatu oñeheja. Símbolo espejo ndojehecha, hoja escala ndaipóriva ojehecha tamaño leyenda rehegua. Ehecha hoja ojehecha-pe primer hoja antes ojerreko ambue.
- **Stock de proveedor.** Cifras stock ojehai archivo nde rehe añoite. Verificación ndojeporu proveedor.
- **Idiomas.** Barra de tamil ndojepe'a.

Ambue ehecha [Todavía no construido](topic:not-built-yet). Versión anterior ehecha [Novedades de 0.7](topic:whats-new-0-7).
