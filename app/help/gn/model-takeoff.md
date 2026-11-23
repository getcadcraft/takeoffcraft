---
title: Ejejapo cantidades modelo de edificio rupi
summary: Abrí modelo IFC del arquitecto, ehecha 3D-pe, eiporu muro, piso, puerta ha ambue tipo, material, capa térã tamaño rupi, ha eguahẽ conteo, longitud, superficie ha volumen cómputo-pe. Modelo ambue mboyve ojeporúva ko'ã cantidad ojeheka.
keywords: modelo, cómputo de modelo, vista 3D, clic pieza, buscar fila, material, capa, capas de muro, durlock, aislación, tamaño de puerta, tamaño de ventana, planilla de vanos, csv, 3d, bim, ifc, rvt, modelo de edificio, cantidades, muros, pisos, puertas, ventanas, columnas, ambientes, por tipo, por nivel, actualizar, modelo más nuevo, anteproyecto
from: 8c4c12c9
---

Ndaikatúi esperá próxima juego de planos. Arquitecto omondo modelo de edificio-pe, abrilo ko'ápe ha ejagarra cantidad tuichaite. Modelo ojelee nde computadora-pe; nada ndojeme'ẽi.

## Pasos

1. Eiporu {{ui:Model}} barra-pe ha eeleji modelo `.ifc` archivo, térã abrilo {{ui:Open plans}} rupi peteĩ archivo ambue háicha.
2. {{ui:Model takeoff}} oikuaa peteĩ fila categoría ha tipo peteĩ-peteĩ: muro tipo muro rupi, piso tipo piso rupi, puerta tipo puerta rupi, ha ambue. Fila peteĩ-peteĩ ohechauka cantidad ha mba'épa ojemedi categoría upe.
3. Emoĩ {{ui:Group by}} {{ui:Category}} rehe total pya'e ojehecha hag̃ua, térã {{ui:Category, type and level}} rehe tipo peteĩ-peteĩ nivel rupi ojehai hag̃ua.
4. Ejepe'a fila ndoipotáva. {{ui:Find}} ojepe'a lista. Fila ndejepe'ávo oñemo'ã avei imagen 3D-pe piezas.
5. Emoĩ modelo-pe {{ui:Model name}} ndéve ojeporu oñemohu'ã ha opa obra-pe, ejemplo proyecto rérape.
6. Eiporu {{ui:Add to the takeoff}}. Cantidad peteĩ-peteĩ oiko cantidad tipo lista de ítems-pe. Emoĩ nombre, emoĩ precio ha ojuhu conjunto ambue ítem háicha.

## Ehecha modelo 3D-pe

{{ui:Show the model in 3D}} ojapo modelo tabla ári, color peteĩ-peteĩ fila rehe (fila nombre yvate color rotyty). Ejapo ejesareko rire, eiporu {{key:Shift}} ha ejesareko rire ejemoĩ hag̃ua, eiporu rueda zoom hag̃ua, ha eeleji {{ui:Fit}} térã {{ui:Reset}} ojevolvé hag̃ua.

- **Clic pieza-pe** imagen-pe ha ohechakuaa fila tabla-pe, fila upe piezas opavave ohechauka ha ambue oñemonde. Clic jey mboyve pieza-pe, ha oĩ hendive fila arapýpe (muro capas-pe), fila upe ojehecha ambue.
- **Clic fila-pe** tabla-pe ojehecha ipieza. Clic jey térã imagen-pe espacio vacío-pe, ojepe'a.
- Ambiente ndojeminduvaʼerã, pórke volumen ohupytýta edificio.
- Modelo guasu ojeguarda caja ánte pieza-kuéra memoria-pe ojeikeva hag̃ua; panel omombe'u cuánto. Número ndojemudái.

Computadora ndaikatúi 3D ejapo rire, tabla ojapo upéicha ojeko ramo.

## Agrupar material, capa térã tamaño rupi

{{ui:Group by}} oguereko mboapy ambue ojeporáva:

- {{ui:Category and material}}: muro, piso térã techo capas-pe ojapo, capa peteĩ-peteĩ material ipoguýpe fila. Upéicha durlock, montante ha aislación ojevalora hag̃ua separado. Mbaꞌe material peteĩ oguereko fila upe material-pe, ha ndaipóri material oĩ fila "No material named"-pe.
- {{ui:Category and layer}}: upéicha, capa espesor fila-pe ("Insulation, 100 mm").
- {{ui:Category, type and door or window size}}: puerta ha ventana ojeseparáva ancho ha alto rupi (ejemplo 3'-0" × 6'-8" térã 914 × 2,032 mm).

Capa rehe, área oúva muro propia cara-gui (térã piso ha techo planta térã superficie) ha volumen oúva área ha capa espesor. Fila nota omombe'u mboy número oúva capa-gui. Muro peteĩ capa-kuéra oñemboguejy volumen modelo omombe'u chupe.

## Guardar filas térã vanos CSV-pe

{{ui:Save rows as CSV}} ojesalva fila ejepyhýva, unidad opavave encabezado-pe, planilla-pe. {{ui:Save openings schedule as CSV}} (modelo oguerekóramo puerta térã ventana) ojesalva puerta ha ventana opavave tipo, nivel ha tamaño rupi cantidad ndive.

## Mba'épa ojemedi

| Categoría | Cantidad |
|---|---|
| Muros | cantidad, longitud, área de muro (peteĩ cara, vanos ojepe'ava), volumen |
| Pisos, losas, cielorrasos ha ambue revestimiento | cantidad, área planta, volumen |
| Techos | cantidad, área planta, superficie techo, volumen |
| Zapatas | cantidad, área planta, volumen |
| Columnas, vigas ha miembros | cantidad, longitud miembro ryepýpe, volumen |
| Barandas, caño, conducto ha cable | cantidad, longitud |
| Escaleras | cantidad, volumen |
| Ambientes | cantidad, superficie piso, volumen |
| Puerta, ventana ha ambue | cantidad |

Modelo autor omombe'u cantidad archivo-pe, upe número ojeporu. Ndaipóri rire, número ojemedi elemento forma-gui. Cantidad peteĩ-peteĩ oguereko nota omombe'uva mba'éichapa, ha cuánto elemento ome'ẽ número.

:::note
Muro longitud forma-gui ojemedi punta-gui punta-gui, upévare muro mokõi esquina-pe ojoapy umi esquina. Volumen oikotevẽ forma cerrada: elemento forma ndoñemyla'ỹi ojehai ha ndohasái volumen. Muro curvo térã esquina elemento ojemedi cara vertical mitãde, ha nota omombe'u upéva.
:::

## Mba'e ojeguahẽ modelo ojeguerohoryvéramo

Eiporu archivo pyahu ha emoĩ {{ui:Model name}} ojoguáva. Ndaipóri ejapo mboyve, panel omombe'u cantidad pyahu, cantidad ojemuda ha mba'épa, ha cantidad ambue kuatiarogue ndojeguerekói modelo-pe. Eiporu {{ui:Add to the takeoff}}: cantidad ojemudáva oguereko número pyahu, ha nde nombre, tasa, desperdicio ha conjunto oñeñongatu. Cantidad ndojeguereko modelo-pe ohupi número ryme; ejepe'a nde pe'a, diseño ojepe'a rire.

Tipo ha nivel nombre ojeikuaa mba'épa cantidad. Arquitecto omoambue muro tipo, ojegueru cantidad pyahu ha ryme ha omombe'u ojepe'áva.

## Archivo ojehecha

Archivo IFC (IFC2x3, IFC4 ha IFC4.3). Archivo IFC camino, vía térã puente ndive ohupi infraestructura cantidad tuichaite, ojehecha-jey ramo.

TakeoffCraft ndohecháiva archivo `.rvt` ko versión-pe. Arquitecto Revit-pe oñemba'apo ramo, eipotá exportación IFC modelo (Archivo, Exportar, IFC) ha abrilo.

Modelo peteĩ jey oikuaa 500 cantidad peve. Oĩramo mborýve, ejepe'a fila térã ejagrupa categoría rupi.
