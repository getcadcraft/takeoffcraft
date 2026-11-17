---
title: Revisar a medición en 3D
summary: Vexa os muros, as losas e os contaxes da folla aberta levantados sobre o debuxo, xire ao seu redor e prema un para seleccionar a súa marca.
keywords: png, imaxe, figura, captura, apilar, plantas, niveis, alzado, glb, gltf, exportar 3D, grosor do muro, altura base, abertura, dintel de porta, 3D, tres D, revisar, vista, muros, altura do muro, losa, profundidade, volume, orbitar, modelo, selección, isométrica, perspectiva
from: fb16b4f7
---

A vista 3D é unha comprobación, non un segundo debuxo: levanta a medición da folla na pantalla sobre a propia folla, así que un muro que falta, unha losa duplicada ou un contaxe perdido vense de un vistazo.

Antes de empezar: a folla precisa unha escala ([Establecer a escala](topic:set-the-scale)). As alturas e profundidades necesitan pés reais, así que nunha folla sen escala {{ui:3D}} o indica e queda na folla plana.

## Abrir a vista 3D

1. Mostre a folla que quere revisar.
2. Escolla {{ui:3D}} na barra que mostra o nome e a escala da folla, ou prema {{key:3}}.
   A primeira vez, a vista 3D tarda un momento en cargarse. A folla debúxase no chan, e a medición érguese sobre ela na cor de cada elemento.
3. Para volver, escolla {{ui:3D}} de novo, {{ui:Volver á folla}}, ou prema {{key:3}}. Escoller unha ferramenta de debuxo (Lineal, Superficie, Contaxe e demais) tamén volve, xa que as marcas se debuxan na folla plana.

A vista mostra a folla na pantalla; cambie de folla na lista de follas, ou con {{key:PageDown}} e {{key:PageUp}}, e a vista 3D segue. Para ver varias plantas á vez, apílelas (máis abaixo).

## O que ve

| Marca | En 3D |
|---|---|
| Liña lineal, elemento cunha altura | Un muro desa altura ao longo do tramo. Os tramos curvos seguen a curva. |
| Liña lineal, elemento sen altura | Unha liña na folla. Dé ao elemento unha altura en **Elemento** para erguela. |
| Superficie, elemento cunha profundidade | Unha losa desa profundidade, cos seus recortes abertos. |
| Superficie, elemento sen profundidade | Unha placa fina de 2" para que se vexa igual. |
| Contaxe | Un pequeno poste en cada punto contado. |

A altura é o campo {{ui:Altura}} dun elemento lineal, e a profundidade o campo {{ui:Profundidade}} dun elemento de superficie, baixo **Elemento** (consulte [Crear elementos de medición](topic:create-items)). Cámbiea, e a vista 3D actualízase ao momento. A nota baixo o nome da folla di o que contén, por exemplo "Esta folla en 3D: 2 muros, 1 losa, 3 contaxes", e cantos tramos ou superficies non teñen altura ou profundidade. Os clics pasan por ela ata a vista.

As cifras non cambian en 3D: a superficie dun muro é a súa lonxitude exacta multiplicada pola súa altura, e o volume dunha losa é a súa superficie neta (contorno menos recortes, curvas exactas) multiplicada pola súa profundidade. As curvas só se debuxan como pequenas rectas na pantalla.

## Mirar ao redor

| Acción | Que fai |
|---|---|
| Arrastrar, ou arrastrar co botón central | Orbitar ao redor da medición. |
| {{key:Shift}} + arrastrar, ou arrastrar co botón dereito | Desprazar. |
| Rodela do rato | Achegar e afastar no punteiro. |
| Pasar dous dedos no trackpad | Orbitar ({{key:Shift}} desprazaa). Un pinzamento achega. |
| {{ui:Iso}}, {{ui:Superior}}, {{ui:Fronte}}, {{ui:Atrás}}, {{ui:Esquerda}}, {{ui:Dereita}}, {{ui:Inferior}} | Vistas estándar, enmarcadas na medición. A vista 3D ábrese en {{ui:Iso}}. |
| {{ui:Perspectiva}} | Perspectiva activada ou desactivada (paralela cando está desactivada). |
| {{ui:Zoom á folla completa}} ou {{key:F}} | A folla completa. |
| {{ui:Folla}} | Mostrar ou ocultar o debuxo no chan. |
| O cubo de vista, arriba á dereita | Prema unha cara, unha aresta ou unha esquina para mirar desde alí; arrástrelo para orbitar; arrastre o seu anel de brúxula para xirar; o botón da casa volve a {{ui:Iso}}. |

O recuncho mostra un cubo de vista, unha pequena icona dos eixes X, Y, Z, ou nada: escolla en {{ui:Configuración}}, na lapela TakeoffCraft, baixo **Indicador de esquina** ([Configuración de TakeoffCraft](topic:settings)). A folla plana non ten indicador de esquina.

:::touch
Un dedo orbita; dous dedos pinzan para achegar e móvense para desprazar. Un toque selecciona.
:::

## Muros con grosor, base e aberturas

Un elemento lineal con altura érguese como unha tira fina. Para vela como un muro real, dálle a súa forma en **En 3D** nos seus axustes:

- **Grosor do muro** (8", 0,2 m): o muro convértese nun sólido, centrado na liña que debuxou, con esquinas a inglete.
- **Altura base**: o muro comeza a esa distancia por enriba do chan (un soffit, unha liña de armarios altos). Os elementos de superficie tamén a teñen: un teito a 9'-0".
- **Dintel de abertura**: un segmento descontado (unha porta, [Descontar unha parte dun tramo](topic:measure-linear#deduct-a-part-of-a-run)) mantén o muro por enriba desa altura, así que unha porta vese como porta. Sen isto, un segmento descontado deixa un oco ata o alto.

Estes axustes só dan forma á vista 3D: as cantidades (lonxitude, superficie do muro, custos) quedan como estaban.

## Apilar as plantas

1. Abra os PDF de todas as plantas.
2. Na vista 3D, escolla {{ui:Niveis…}} e escriba a altura de cada planta, como `0` para a planta baixa e `12'` para a seguinte. Un campo en branco deixa unha folla fóra.
3. Escolla {{ui:Apilar}}. Cada folla con nivel mostra a súa medición á súa altura; a folla na pantalla queda baixo a súa propia planta, e as demais aparecen delineadas. A nota di cantas plantas están apiladas.

As follas aliñan segundo o seu lugar na páxina, así que isto funciona para plantas trazadas igual (mesmo tamaño e posición de folla). Unha folla con nivel pero sen escala quédase fóra, e a nota dío. Escolla {{ui:Apilar}} de novo para unha folla de cada vez. Os niveis gárdanse coa medición.

## Gardar a vista 3D como imaxe

Escolla {{ui:PNG}} na barra 3D para unha imaxe da vista tal como está na pantalla (`… 3D.png`); {{key:Shift}} + clic en {{ui:PNG}} faino o dobre de grande (`… 3D@2x.png`), para imprimir.

## Gardar a vista 3D como modelo

Escolla {{ui:GLB}} na barra 3D. Obtén un ficheiro `.glb` (glTF, binario) do que mostra a vista (a planta na pantalla, ou todas as plantas apiladas), que outros programas 3D abren: un obxecto por cada marca, co nome do seu elemento, na cor do elemento, en metros e con Y cara arriba. A propia folla e os contornos non están incluídos.

## Seleccionar unha marca desde 3D

Prema un muro, unha losa, unha placa ou un poste. A súa marca convértese na marca seleccionada, exactamente como se a tivese premido na folla: aparece baixo **Marca seleccionada**, o seu elemento pasa a ser o actual, e a barra de estado dá a súa lonxitude e altura, ou a súa superficie, profundidade e metros cúbicos. {{key:Shift}} + clic engade marcas á selección ou as quita. {{key:Delete}} elimina as marcas seleccionadas e {{key:Mod+Z}} as devolve; {{key:Esc}} non selecciona ningunha. De volta na folla, as mesmas marcas seguen seleccionadas.

:::tip
O debuxo segue o tema: en Modelo, a folla no chan escurécese como a vista plana.
:::
