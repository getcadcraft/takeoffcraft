---
title: Crear ítems de cómputo
summary: Emoñe linear, área ha conteo ítems ha emoĩ sus unidad, altura térã profundidad, desperdicio ha tarifas de material y mano de obra.
keywords: cuadrilla, tasa de producción, tamaño de cuadrilla, salario, horas, horas-hombre, horas-trabajador, días-cuadrilla, horas de mano de obra, ítem, nuevo ítem, condición, multicondición, también medir, varios tipos, ambiente, lineal, área, conteo, unidad, altura, profundidad, desperdicio, material, mano de obra, tarifa, color, costo
from: 7fa5effc
---

Peteĩ **ítem** ha'e peteĩ mba'e ojemedíva ha ojepreciáva: peteĩ tipo muro, peteĩ piso terminado, peteĩ cielorraso, peteĩ puerta, peteĩ artefacto de iluminación. Opa marca ejejapóva oiko peteĩ ítem-pe. Ambue programa-kuéra kóva condiciones-ndi heni.

Ítem peteĩteĩ oguereko peteĩ tipo (ha ikatu avei oguereko ambue clase marca, ehecha [Un ítem, varias clases de marcas](topic:create-items#one-item-several-kinds-of-marks)):

| Tipo | Ejejapo | Informa | Unidades |
|---|---|---|---|
| Lineal | Tape conectado puntos | Longitud, cantidad de tramos, ha área de muro cuando oguereko altura | LF térã m |
| Área | Contorno cerrado, ha recortes | Área, perímetro, cantidad de áreas | SF, SY, SQ, ac, ha térã m² |
| Conteo | Peteĩ clic peteĩ mba'e rehe | Cuántos | EA |
| Cantidad escrita | Ndaha'éi mba'e: ejecribi cantidad | Número ejecribi (térã peteĩ CivilCraft-gui ojeguerahágui) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha térã m² |

## Cantidades escritas (sin dibujo)

Presupuesto-pe oĩ mba'e ndaha'éi ojedibujava: movilización, permisos, contingencia, subcontrato a suma global, corte y relleno CivilCraft-pe ojejapo. Hacelas **Cantidad escrita**:

1. Eje'o {{ui:Nuevo ítem}}, ecribi peteĩ nombre, eiporu {{ui:Cantidad escrita (sin plano)}} ha eje'o {{ui:Agregar}}.
2. Ítem editor-pe eiporu {{ui:Unidad}} (LS suma global-pe) ha ecribi {{ui:Cantidad}}: `1`, `2.5` térã `1,250`.
3. Desperdicio ha tarifas emoĩ opa ambue ítem-icha guare. Peteĩ conjunto-pe fórmula ojeporu `Q`, cantidad, ehiporu peteĩ ejemplo `ceil(Q / 12)` camión carga-kuéra.

Cantidad escrita ndoiporúi marca ha nunca ndohasái presupuesto ndaiko'ẽ. Cómputo-pe oĩ {{ui:Área de oferta}}, editor-pe oĩ avei {{ui:Área de oferta}}: upéi cantidad oñemoĩ upe área-pe, sus alternativas ha totales-pe, marca oikóramo upépe. Ambue aplicación-gui ojeguerahágui cantidad oñeha'ã mávape, ehecha [Movimiento de tierra y cotas puntuales](topic:earthwork#cut-and-fill-from-civilcraft).

## Hacer un ítem

1. Panel {{ui:Ítems}}-pe derecha-pe, eje'o {{ui:Nuevo ítem}}.
2. Ecribi peteĩ nombre, ejemplo `Pared interior tipo A` térã `Baldosa de alfombra`.
3. Eje'o tipo: {{ui:Lineal (longitud)}}, {{ui:Área}} térã {{ui:Conteo}}.
4. Eje'o {{ui:Agregar}} (térã eapreta {{key:Enter}}).
   Ítem oñemoĩ lista-pe ijy color-nguéva, oñemoĩ ítem eiporúva dibuja-pe, ha editor oñepyrũ lista guýpe. Barra de estado ohechauka mávapa herramienta eiporu upe rire.

Eapreta {{key:Esc}} formulario-pe ojeheja hag̃ua ítem ndaha'éi oñemoĩvo.

:::tip
Medición herramienta primero eiporu ramo, TakeoffCraft eiporu tipo ojeporúva ramo hopápe ítem, térã oñepyrũ {{ui:Nuevo ítem}} formulario upe tipo jepe ojeporúva.
:::

## Elegir el ítem con el que dibujás

Eje'o peteĩ ítem lista-pe. Oñemoĩ ítem marca pyahu oiko ryepýpe, ha hoja opavavépe ohechauka marca-kuéra, ambuégui oikókuri. Hoja ojehechágui marca ndoguerekoi, TakeoffCraft oho hoja oguerekóva. Eje'o jey ítem ohechaukáva jeporu; oikoseha ítem ojejapóva.

Eiporu {{ui:Seleccionar}} herramienta marca rehe eje'o ramo, upe marca ítem oiko ojeporúva.

## Configurar el ítem

Ítem editor (**Ítem: (nombre)**) oguereko kóva campos. Peteĩteĩ oñeguarda eheja rire campo térã eapreta {{key:Enter}}, ha peteĩteĩ cambio oñeikyhyje ojeitápe.

| Campo | Ojejapo |
|---|---|
| {{ui:Nombre}} | Ohechauka lista-pe, tabla-kuéra-pe ha exportación-pe. |
| {{ui:Tipo}} | Lineal, Área térã Conteo. Marca oguerekóramo cerrado (“Un ítem con marcas mantiene su tipo”). |
| {{ui:Color}} | Marca-kuéra color pantalla-pe ha PDF marcado-pe. |
| {{ui:Unidad}} | Cantidad ohechauka mávape: LF térã m lineal-pe; SF, SY, SQ, ac, ha térã m² área-pe; EA conteo-pe. |
| {{ui:Medir también}} | Ambue clase marca ítem oguerekóva, peteĩteĩ unidad-nguéva. Ehecha peteĩ rehe. |
| {{ui:Altura}} (lineal) | Peteĩ altura muro. Ítem upéicha ohecha avei área muro (longitud × altura). Tramo BimCraft modelo-gui ojeguerahágui oguereko puerta ha ventana: upéva peteĩ jey oñemboguejy, ha ítem ohechauka área bruta, aberturas ha neta. BimCraft proyecto-gui medición método ojeporúva ndaha'éi cuantitativo-pe verificado, ohecha upe método-pe (nota-pe ohechauka, origen ha ndoverificáiva cuantitativo profesional-gui); método ndaikatúi TakeoffCraft-pe mudar. Ladrillo térã bloque mortero-pe tipo muro-gui oguejy mbohapy: pedido unidades ha mortero volumen. |
| {{ui:Profundidad}} (área) | Profundidad térã espesor, conjunto fórmula-pe ojeporúva (ejemplo hormigón volumen). |
| {{ui:Desperdicio %}} | Cantidad-pe ojeño'ã preciopa mboyve: 10 ohechauka cantidad × 1.10. |
| {{ui:Material $/LF}} | Material costo unidad-pe. Etiqueta ohéi unidad-pe: $/SF, $/EA ha ambue. |
| {{ui:Mano de obra $/LF}} | Mano de obra costo unidad-pe. |
| {{ui:Número CSI}} | Hi'ary CSI MasterFormat, ejemplo `09 21 16` (térã división `09` rõ). Libro-pe "Por división" hoja costo-kuéra oñemboguejy upéi. Ítem [paquetes de oficio](topic:trade-packs)-gui oguereko jau. |

Altura ha profundidad oguereko pie ha pulgada (`9'-0"`, `8' 6"`) térã decimal pie (`9`) imperial unidad-pe, ha metro (`2.7`, `2700 mm`) métrico-pe. Tarifa oguereko monto `12.50` térã `$1,250`, hasta cuatro decimal. Ehecha [Entrada de longitud, tarifa y porcentaje](topic:entry-formats).

Campo-kuéra raẽ, **Medido** ohechauka totales ítem fórmula-kuéra ikatúva ojeporu, letra-nguéva: Longitud (L), Tramos (N), Área de muro (A) lineal-pe; Área (A), Perímetro (P), Áreas (N) área-pe; Conteo (N) conteo-pe.

## Un ítem, varias clases de marcas

Mba'e oñemedi ojeporúva mbohapy ruta: peteĩ ambiente oguereko piso (área), zócalo ojuehe muro-pe (longitud) ha puerta (conteo). Mbohapy ítem ndaha'éi, peteĩ hacé:

1. Hacé ítem tipo principal-nguéva, peteĩ ítem área `Ambiente 101`.
2. {{ui:Medir también}} editor-pe, eje'o {{ui:Lineal}}, {{ui:Conteo}} térã ambo. Peteĩteĩ oguereko unidad hendápe.
3. Eiporu herramienta oikóva ítem tipo-pe: `Ambiente 101` ha'eháicha corriente, {{ui:Área}} oñemboguejy piso, {{ui:Lineal}} zócalo ha {{ui:Conteo}} puerta-kuéra. TakeoffCraft ndojerokýi ambue ítem.

Ítem-kuéra lista-pe ohechauka cantidad opavave (`50.00 SF + 2 EA`). Cantidades tabla-pe ítem fila-pe oguereko cantidad principal, ha peteĩteĩ clase ambue oguereko fila hendápe, ejemplo **Ambiente 101 (conteo)**, desperdicio ha material ha mano de obra tarifa-nguéva. Exportación, hoja-pe tabla ha PDF marcado leyenda-pe oñemboguejy upéicha avei.

Tipo principal campo-kuéra ojeporu hetaiterei: altura térã profundidad, pendiente, back-outs ha 3D forma tipo principal marca-kuérape. Ítem área-pe mbohapy tramo ojejapo zócalo-pe pláno-pe ojemedi, ha 3D-pe ohechauka plano. Fórmula conjunto ojeporu tipo principal totales.

Clase ojehepyme ojeporaháme ítem ndoguerekói jey marcas-kuéra; ojejapo ojeheja térã ohenda ambue ítem **Marca seleccionada** rupi ojeheja mboyve. Marcas ojeikoharã ítem ojeporúva ojeikotevẽ clase ojeporúva.

Ojehe'ỹ: **Conjunto** oguereko componentes tal como tablas o estructuras, peteĩteĩ fórmula ha tarifa. Ehecha [Conjuntos y fórmulas](topic:assemblies).

Ipahápe: {{ui:Subir}} ha {{ui:Bajar}} ojeheja ítem lista ha exportación rehe, ha {{ui:Eliminar ítem}} oguereko opa marca (ejepreguntáva, ejeikyhyjeta).

Área ítem oguereko avei **Pendiente** (techo plano pendiente-pe medido: [Techos y pendientes](topic:roofs-and-slopes)) ha **Descuento de área** (marcas ambue ítem áreas-gui oñeikytava: [Medir áreas](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Lineal ítem-kuéra oguereko **Inclinación** (Nivel, Rake, Hip o Valley) ha, rake ha hip-pe, **Pendiente**.

## Tarifas en la tabla

Ejecribi avei {{ui:Desperdicio %}}, material ha mano de obra tarifa **Cantidades** tabla ryepý-pe ({{ui:Por ítem}}). Upe mismo ajuste editor-pe.

## Cómo funciona el precio

Ítem peteĩteĩ ha conjunto componente peteĩteĩ-pe:

1. **Con desperdicio** = cantidad × (1 + desperdicio %).
2. **Material** = con desperdicio × material por unidad, redondeado al centavo.
3. **Mano de obra** = con desperdicio × mano de obra por unidad, redondeado al centavo.
4. **Total** = material + mano de obra.

{{ui:Total de la obra}} opavave ítem ha opavave componente oñemboguejy. Ítem oguereko ijy tarifa ha conjunto peteĩ jave; ambue ojeguerahágui, upévare ítem tarifa 0 ha'e ko'ẽ, componente oguerekóramo costo.

## Mano de obra por cuadrilla

Tarifa por unidad mba'erã, ítem mano de obra ikatu oúva cuadrilla-gui: mba'épa ojejapo peteĩ hora-pe, mboy persona, ha peteĩteĩ mboy ganancia. {{ui:Mano de obra por cuadrilla}} editor-pe, eje'o {{ui:Calcular mano de obra por cuadrilla}} ha emoĩ:

| Campo | Ejemplo |
|---|---|
| {{ui:Producción}} | `20` LF peteĩ hora-pe (ítem unidad-pe) opavave cuadrilla-pe |
| {{ui:Tamaño de la cuadrilla}} | `2` persona |
| {{ui:Salario $/hora cada uno}} | `45` |

TakeoffCraft ohesa cantidad desperdicio-gui:

- **horas-cuadrilla** = cantidad ÷ producción (110 LF ÷ 20 = 5.5),
- **horas-trabajador** = horas-cuadrilla × tamaño cuadrilla (11),
- **días-cuadrilla** = horas-cuadrilla ÷ 8 (0.69),
- **mano de obra** = horas-trabajador × salario ($495.00).

Editor-pe ohechauka resultado ha tarifa ojehupýva ($4.50/LF). Ítem propio tarifa mano de obra upéi solo lectura, editor-pe ha tabla-pe avei. {{ui:Cantidades}} tabla encabezado-pe oñemoĩ trabajo horas-trabajador ha días-cuadrilla. Exportación-kuéra anota cada cuadrilla horas, ha libro-pe mano de obra celda ha'e fórmula cuadrilla-gui (`ROUND(F2/20*2*45,2)`). Ojekáfe casilla ejevolvéva tarifa por unidad-pe.

## Ítems métricos

Eiporu m (lineal) térã m² (área) unidad-pe. Cantidades, alturas ha fórmula valores upéi metro-pe. Hoja escala ikatu ha'e opa preset térã calibración; unidades ha escalas ndoguerekóiva peteĩ-pe.

## Siguiente

- [Medir tramos lineales](topic:measure-linear)
- [Medir áreas con recortes](topic:measure-areas)
- [Contar a mano](topic:count-by-hand)
