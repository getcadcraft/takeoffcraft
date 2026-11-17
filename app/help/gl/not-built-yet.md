---
title: O que aínda non está construído
summary: Funcións de TakeoffCraft que esta versión non ten, e o que facer no seu lugar hoxe.
keywords: límites, ausente, aínda non, hoxe, previsto, solución alternativa, por tramo, nube, escritorio
from: 94ff90d0
---

TakeoffCraft está en desenvolvemento. Esta lista recolle o que a versión actual non fai, e como sacar o traballo adiante igualmente.

## Medir

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Inserir un punto no medio dun tramo ou contorno | Elimine a marca e debúxea de novo. |
| Selección por caixa (xanela) | {{key:Shift}} + clic en cada marca, ou {{key:Mod+A}} para todas as marcas da folla. Consulte [Copiar, pegar e duplicar marcas](topic:copy-paste). |
| Xirar, espellar ou cambiar a escala dunha copia pegada | Pegue nunha folla á mesma escala e coa mesma orientación; debuxe o resto a man. |
| Ler unha escala desde unha folla escaneada, ou desde unha barra gráfica de escala | Escolla a predefinida, ou calibre coa lonxitude da barra. |
| Máis dunha escala por folla (áreas de detalle, planos ampliados) | Mida a parte á escala da folla, e tome o detalle na súa propia folla ampliada se o conxunto a ten. |

## Elementos e prezos

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Fórmulas de conxunto que usan os outros tipos de marcas dun elemento (as portas dun elemento de cuarto nas fórmulas do seu piso) | As fórmulas usan os totais do tipo principal; poña prezo aos outros tipos nas súas propias filas. |
| Fórmulas de conxunto calculadas tramo a tramo | As fórmulas usan os totais do elemento; use `N` para os extras por tramo. |
| Fórmulas que usan as cantidades doutro elemento | Repita a medición nese elemento, ou calcúleo na exportación a folla de cálculo. |
| Equipos nos compoñentes de conxunto, ou unha xornada laboral distinta de 8 horas | Asigne o equipo ao elemento; para outra duración de xornada, lea os días-equipo como horas-equipo ÷ a súa xornada. |
| Anotacións distintas de notas, nubes e resaltados (frechas, cotas, selos), ou respostas nunha nota | Escríbao no texto da nota; cambie o seu estado segundo se resolva. |
| Unha biblioteca de prezos compartida por un equipo, ou gardada coa súa conta | A biblioteca gárdase neste navegador: expórtea como CSV e impórtea no outro ordenador. |
| Paquetes de oficios revisados por orzamentistas en activo | Cada paquete é un punto de partida: comprobe as súas hipóteses cos seus traballos e os seus produtos antes de prezar con el. Consulte [Paquetes de oficios](topic:trade-packs). |
| Prezos nos paquetes de oficios | Os paquetes achegan só conxuntos: estableza as súas propias tarifas, ou importe a súa lista de prezos como CSV. |
| Cambiar o nome da medición | O nome procede do primeiro PDF; cambie o nome dos ficheiros descargados. |
| Nomear as follas a man | As follas nómanse segundo as etiquetas de páxina do PDF; busque por nome de ficheiro e páxina. |

## Debuxos (DWG e DXF)

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Táboas de estilos de trazado, asignacións de plumas e ficheiros CTB nas follas dun debuxo | Un debuxo debúxase en negro, ou nas súas cores escurecidas para papel; os grosores de liña veñen do debuxo. |
| Abrir un DXF binario, ou un DWG anterior a AutoCAD 2000 | Gárdeo como DXF ASCII ou como DWG máis novo. |
| Atopar un debuxo ligado (xref) pola carpeta onde está | Abra tamén o ficheiro do debuxo ligado, xunto co principal: atópase polo nome do ficheiro entre os ficheiros abertos. |
| Medir polilíneas 3D, mallas, sólidos e rexións | Cóntaos por capa e tipo, ou mida a vista en planta coas ferramentas Lineal e Superficie. |
| Texto nun PDF marcado a partir dun debuxo en escrituras distintas da latina | Os caracteres que Helvetica non ten glifo para imprímense como "?" no PDF marcado; o debuxo na pantalla non se ve afectado. |
| Entregar un debuxo a outra aplicación desde a barra de follas | Abra o mesmo ficheiro nesa aplicación. |
| Un debuxo que leva a medición dentro, como fai {{ui:PDF coa medición dentro}} cos PDF | {{ui:Gardar medición}}: o `.takeoff.json` reábrese no mesmo debuxo, atopado polo seu contido. |
| Subfondos PDF de debuxo ou de contaxe, imaxes e obxectos OLE colocados nun debuxo | As imaxes móstranse só como marco. Abra o propio PDF do subfondo como folla. |

## Contaxe automática

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Atopar símbolos nunha folla sen escala debuxada a outro tamaño | Dea á folla a súa escala, ou busque nela cunha caixa debuxada alí. |
| Atopar símbolos espellados | Cóntoos a man, ou busque de novo cunha caixa ao redor dun espellado. |

## Ficheiros e compartición

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Un só PDF que mostra as marcas e leva a medición | {{ui:PDF marcado}} para que a xente vexa as marcas; {{ui:PDF coa medición dentro}} para reabrir en TakeoffCraft. |
| Un CSV de cantidades por folla ou das marcas | Use {{ui:XLSX}}: as súas follas By sheet e Marks teñenas. |
| Gardado na nube | Aínda non está dispoñible. Garde os ficheiros do proxecto no seu ordenador e fáguelles copia de seguridade. |
| Unha aplicación de escritorio de TakeoffCraft independente | Desde a 0.5 a aplicación de escritorio é CadCraft Studio, con as oito aplicacións nunha soa instalación. TakeoffCraft tamén funciona no navegador. |

## Pantalla e entrada

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Un menú de botón dereito (ou de premer longo) | Use a barra de ferramentas, os paneis e as teclas. Un premer longo remata un tramo ou un contorno. |
| Xirar a vista | As páxinas xiradas no PDF xa se ven de pé. |

## Vista 3D

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Debuxar ou editar marcas en 3D | Volva á folla ({{key:3}}) para debuxar; seleccionar e eliminar funcionan en 3D. |
| Aliñar pisos superpostos trazados en lugares distintos das súas páxinas | Superponha pisos trazados igual; comprobe os outros unha folla de cada vez. |
| Contar postes de tamaño semellante ao obxecto contado | Todos os postes dunha folla teñen o mesmo tamaño; marcan onde está unha contaxe, non o que é. |

## Ofertas

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Adendas a un paquete xa enviado, cartas de adxudicación, unha folla de alcance que cada ofertante asina | Envíe un paquete novo e redacte a adxudicación vostede. [Enviar un paquete para ofertar](topic:bid-invitations) cobre o que está construído. |
| Enviar invitacións a ofertar desde calquera conta: mentres se proba, o correo a ofertantes externos está desactivado salvo nas contas que o equipo de CadCraft activou | Descargue o {{ui:CSV do alcance}}, envíeo por correo vostede e escriba as ofertas. |
| Enviar paquetes para ofertar desde unha xanela de Studio | Envíe desde TakeoffCraft no navegador. |
| Volver prezar a área de oferta dunha alternativa cunha oferta escollida | As alternativas e os subtotais das áreas de oferta usan os seus propios prezos; axuste a alternativa a man. |
| Recordatorios automáticos antes de que caduque a data do seguro ou da licenza dun subcontratista | A data márcase na páxina de Subcontratistas cando xa pasou ou falta menos de 30 días; comprébea ao convidar. |

## Paneis

| Non construído aínda | Hoxe, no seu lugar |
|---|---|
| Mover a táboa de {{ui:Cantidades}} | Só se moven os paneis {{ui:Follas}} e {{ui:Elementos}}. Consulte [Organizar os paneis](common:arrange-panels). |

## Follas de cálculo

O libro XLSX comprobouse en LibreOffice Calc, que recalculou cada total ata o mesmo céntimo que TakeoffCraft. Aínda non se abriu en Excel. Se un programa de follas de cálculo mostra algo inesperado, a exportación CSV contén o mesmo orzamento como valores simples.
