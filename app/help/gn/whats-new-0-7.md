---
title: Mba'e pyahu 0.7-pe (ymaguare)
summary: DWG ha DXF planos oñepyrũ hojakuéra-pe nde escala ha conteo exacto ha longitudes plano-gui, subcontratista oferta eiporavo'ỹva paquete precio-pe, ofertas invitación sellado precio-kuéra, asistente herramientas planos-pe, ha USD 3D check vista-gui.
keywords: novedades 0.7, versión anterior, notas de versión, changelog, cambios, 0.7, versión, nuevas funciones, dwg, dxf, plano, layouts, espacio modelo, escala de plano, conteo desde plano, conteo CAD, bloques, bloques dinámicos, atributos, capas, xref, plano vinculado, medir plano, polilínea, sombreado, PDF marcado, oferta elegida, usar oferta, enviar para ofertas, invitación de oferta, ofertas selladas, apertura de ofertas, oferta tardía, registros de subcontratistas, csv, asistente, mcp, usd, usdz, unidades, listas de unidades, compacto, paneles, diálogos, portugués
from: 0e3a424f
---

Ko'ã ojeguerekóva TakeoffCraft 0.7-pe, 0.6 rehe. Planos ojepyrũ jeikeháicha, PDF-pe ndaipóri ojerure'ỹ ojepyrũ mboyve, ha paquete ofertas ohóta subcontratista-kuérape ha ojeguejy precio-ndive.

## Pyahu

### Planos DWG ha DXF

- **Peteĩ plano hojakuéra-pe ojepyrũ.** {{ui:Abrir planos}} {{ui:Archivo}} grupo-pe ({{key:Mod+O}}, térã embotyryhapy) ojapo DWG ha DXF planos PDF-kuéra ryepýpe. Espacio modelo ha opa layout omoĩ hojakuéra {{ui:Hojas}} lista-pe, ha takeoff omoĩ planos ha PDF ojuehe. Ndaipóri ojeʼẽ. Ehechá [Abrir un plano DWG o DXF](topic:open-a-drawing).
- **Escala plano-gui oúva.** Layout oñepyrũ escala viewport tuichave-gui, preset-icha oñemboheraháramo, por ejemplo 1/2" = 1'-0". Modelo oñepyrũ plano unidades-pe. Plano unidades'ỹva omoĩ "Sin escala" peteĩ Calibrar ndojapóiva peve. {{ui:Calibrar}}, {{ui:Verificar}} ha {{ui:Predeterminada}} oikoetépe jepe. Ehechá [La escala](topic:open-a-drawing#the-scale).
- **Capas ha planos vinculados.** {{ui:Capas}} hoja bar-pe omoĩ térã omboguejy plano capas. Capas archivo-pe apagadas térã congeladas oñepyrũ ocultas ha ndojeconta, ndejeporavo'ỹramo. Plano vinculado (xref) abierto ojoaprái oninsertaha-pe ojedibuja ha ojeconta; ndaipórimo abierto, barra de estado omoĩ ndaipóri mba'e. Ehechá [Capas](topic:open-a-drawing#layers).
- **PDF marcado plano-gui.** {{ui:Exportar}} › {{ui:PDF marcado}} oñemboheraha planos hojas PDF-pe primero, ndaikatu'ỹ marcas ha leyenda. Ojedibuja negro térã plano colores-pe, sin tablas de estilo de impresión. Ehechá [PDF marcado](topic:export-estimate#a-marked-pdf).

### Conteos ha longitudes exactas plano-gui

- **Ohechauka mba'e plano-pe.** {{ui:Conteo CAD}} hoja bar-pe oconta bloque nombre-gui (bloques anidados, estados de bloques dinámicos ha arrays incluido), tipo peteĩ capa-pe, térã texto térã atributo valor. Oconta mba'e hoja-pe ohechaukáva térã plano entero peteĩ jey. Marcas omoñe'ẽ peteĩ tembiapo undo-pe, ha conteo jey ojuehe ojehupyty hína ndoikóva. {{ui:Conteo automático}} oiko PDF-kuérare ha símbolos bloque'ỹva. Ehechá [Conteo desde un plano](topic:count-from-a-drawing).
- **Medir desde las líneas del plano.** {{ui:Medir plano}} oikuaa línea, arco, polilínea, círculo, sombreado ha sólido ejeeha térã ejeventana, ítem linear térã área marca-kuéra-pe. Arcos, bulges ha sombreado-kuéra agujero-kuéra exacto; elipses ha splines fino trazo-pe ojemedi, barra omombe'u upéva. Ehechá [Medir desde un plano](topic:measure-from-a-drawing).

### Ofertas

- **Subcontratista oferta paquete precio-pe.** {{ui:Exportar}} › {{ui:Paquetes de oferta y nivelación…}}, eiporavo {{ui:Usar}} peteĩ oferta-pe. Paquete ítems oikoha cantidades-pe, peteĩ línea **Oferta elegida** oguereko precio, ítems oferta ndohaʼéiva oikoha nde costo-pe, ha gastos generales, ganancia y fianza oikoaprái. Oferta ojerovia peteĩ tembiapo undo-pe; planilla ha resumen oguereko. Ehechá [Usar una oferta como precio del paquete](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Paquete ofertas-pe ohóta.** {{ui:Enviar para ofertas…}} paquete-pe ohóta subcontratista-kuérape peteĩ enlace página-pe ndaikatúi cuenta: ohechá alcance ha hojakuéra PDF-pe, escribe precio cada línea-pe térã marca ndaikatúi, omoĩ nota ha hasta mbohapy archivo, térã ndohoóri. {{ui:Obtener precios}} oguejy oferta-kuéra planilla-pe, marcadas **web**. Ohóta ojeporúva añónte cuentas TakeoffCraft equipo-gui ojeguerekóva ojeprobáva (ehechá ambue). Ehechá [Enviar un paquete para ofertas](topic:bid-invitations).
- **Ofertas ojehecha'ỹva peve.** Precio ojehechahaguã oikoeve opening tiempo peve nde emoĩva: upe peve ndaipóri mba'eve ohechaha, nde jepe. Opening-pe oñemoñe'ẽ opa oferta peteĩ jey, ha oferta due tiempo rire oñemarka tarde. Ehechá [Ofertas selladas y la apertura](topic:bid-invitations#sealed-bids-and-the-opening).
- **Subcontratista registros.** Nde cuenta getcadcraft.com-pe oñongatu cada compañía contactos, rubros, calificación respuestas ha seguro ha licencia fecha (ojehechaukáva peteĩ jey ojehasa térã 30 ára ryepýpe), ha ijeprimero ofertas. Oñeʼẽ ha oñeʼẽ CSV-pe, ha eiporavo paquete ohóvo. Ehechá [En el sitio web](topic:bid-invitations#on-the-website).

### Asistente AI

- **Asistente oñemoĩ takeoff-pe.** {{ui:Editar}} marcado, nde asistente oñemoĩ ítems (`items_add`) ha omedi tape, área ha conteo hoja-pe (`marks_add`; longitud ha área escala hoja-pe añónte), peteĩ tembiapo undo jey.
- **Herramientas planos-pe.** DWG térã DXF abierto-pe asistente oikuaa hojakuéra ha mba'e ikatu oconta, oconta exacto, omoĩ conteo marcas ha omedi plano geometría-gui. TakeoffCraft oñepyrũ'ỹramo, CadCraft MCP servidor oñepyrũ plano peteĩ takeoff pyahu-pe ha oñongatu, ha `cadcraft count` oconta comando línea-gui. Ehechá [Mba'e asistente ikatu oikotevẽ](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **3D check vista USD-pe.** {{ui:Paquete USD (.usdz)}} {{ui:GLB}} ryepýpe 3D check vistapemby, ohechaukáva peteĩ peteĩ pared, losa, placa, conteo poste ha tramo objeto-pe, nombre ítem-gui ha cantidad metro-pe. Asistente avei oexporta (`usd_export`). Ehechá [Exportar la vista 3D check como USD](topic:usd).

## Opa aplicación-pe

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} oguereko peteĩ lista cada longitud, área, volumen, ángulo ha pendiente-pe, unidades definición-kuéra tamaño exacto-pe (pie de agrimensor de EE. UU. ijeheguáicha unidad). Ndeporúi unidad peteĩ ojeapaga ha lista ndaikatúi oguejy; estrella peteĩ unidad ha trabajo pyahu hasẽ upépe. Archivo oñongatu iñe'ẽ unidad. TakeoffCraft-pe ítem {{ui:Unidad}} lista ojeporúva switch-pe, ítem pyahu longitud térã área unidad-pe oñepyrũ, cuadrado de techado (SQ), acre ha hectárea área unidades pyahu, ha longitud caja-pe ojeporu ambue unidad marca, por ejemplo `3 yd`. Ehechá [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Diseño denso ha paneles ojeʼẽ.** {{ui:Configuración}} › {{ui:General}} › {{ui:Diseño densidad}} › {{ui:Compacta}} omoĩ heta pantalla-pe (pantalla táctil ha teléfono botón grande oguereko). Panel lateral peteĩ slim título bar-pe; ejegueru ojoaprái térã flotante, ejerregistra peteĩ ambue bar-pe pestaña-pe, pin ojekytĩ borde-pe, térã oculta ha omoĩ jey. Ehechá [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Diálogos oñemboguejy.** Ejegueru diálogo título bar-gui dibujo ndaikatúi jave; oguejy hína ojepyrũ tenonde. Doble clic título bar-pe centro-pe omoĩ jey. Ehechá [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Receta asistente AI-kuérape.** Diez pedido asistente-pe (ordenar dibujo, plotear conjunto, revisar planos, consultar modelo, totalizar takeoff, probar variante de pieza…), herramientas ojeporúva ha permisos oikotevẽva, ha ojetesteaha. Apps-pe AI'ỹ. Ehechá [Recetas para asistentes AI](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** pyahu {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}-pe. Ko ha **Português (Brasil)**, **Español (México)** ha **Bahasa Indonesia** oguereko opa aplicación ñe'ẽ, borrador ojehechaháicha, nativo ojeʼẽ'ỹ. Ayuda tópicos inglés-pe.
- **CadCraft Studio** omombe'u ha'éva update ojeprobaha'ỹ (archivo ndaipóri nde sistema-pe, red ndaipóri, firma vai), "Listo"-pe ndojeʼẽ, ha ndohechauka'ỹ Novedades tarjeta ojejoko peve, opáichagua pyahu versión oñemoĩ peve.

## Ndaipóri ko versión-pe

- **0.7 ndaipóri código-firma.** Firma ha Microsoft Store paquete 0.8-pe ojeho, certificado validación ndoúi. Ehechá SHA-256 getcadcraft.com/download-pe. Windows-pe SmartScreen instalador omboguejy, eiporavo {{ui:Más información}}, upéi {{ui:Ejecutar igual}}. Mac-pe, peteĩ jey, eiporavo derecha clic CadCraft Studio-pe ha {{ui:Abrir}}. CadCraft Studio ndaipóri tienda-pe, ha iPad térã iPhone build ndaipóri.
- Angulo ha pendiente listas {{ui:Unidades}}-pe oñongatu, pero ndaipóri caja ojeʼẽ.
- **Oferta invitaciones ojejoko heta cuenta-pe.** Ojeprobáva ramo, ohóva ofertantes-kuérape ojeporu añónte cuentas TakeoffCraft equipo-gui ojeguerekóva. Ofertante páginas ojeporu opa invitación oñemoĩva. Ambuekuéra: eñemboja {{ui:CSV del alcance}}, eñemoĩ nde mba'e ohóva, ha eñeʼẽ ofertas.
- CadCraft Studio ventana ndaikatúi oho ofertas invitación: omombe'u TakeoffCraft navegador-pe ojeporu. Takeoff oñepyrũ enviado pedido-kuéra, nivelación ha oferta elegida ojeporu Studio-pe.
- Adendas, cartas de adjudicación, alcance hoja ofertante-kuéra firma ha recordatorio automático seguro fecha ojeho'ỹ. Oferta elegida ndojejapo'ỹ alternativo oferta área.
- Planos: estilo de impresión tablas ha CTB archivo ndojeporúi, binario DXF ndoʼẽi (ejeʼẽ ASCII DXF térã DWG), vinculados planos ojejuhu añónte abierto archivo-kuéra-pe nombre rehe, PDF subyacentes, imágenes ha OLE objetos plano-pe ndojedibuja térã ndoconta. Conteos ha escalas ojehechaha muestra plano-pe, ndaha'éi trabajo real-pe programa ojapo-pe.
- Asistente ojeʼẽ ítems ha marcas, ha ndaikatúi omoambue, omboguejy térã omboja marcas oĩvape.

Opa ambue [Ndojapóiva jave](topic:not-built-yet) rehe.
