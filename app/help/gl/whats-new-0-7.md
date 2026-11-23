---
title: Novidades da 0.7 (anteriores)
summary: Os debuxos DWG e DXF ábrense como follas coa súa propia escala, con contas e lonxitudes exactas do propio debuxo, o prezo da oferta de subcontratista escollida como prezo dun paquete, convites de oferta con prezos selados, ferramentas de asistente para debuxos e USD desde a vista de comprobación 3D.
keywords: novidades 0.7, versión anterior, notas de publicación, rexistro de cambios, cambios, 0.7, versión, novas funcións, dwg, dxf, debuxo, disposicións, espazo do modelo, escala do debuxo, contar desde o debuxo, contaxe CAD, bloques, bloques dinámicos, atributos, capas, xref, debuxo ligado, medir debuxo, polilínea, trama, PDF marcado, oferta escollida, usar unha oferta, enviar para ofertas, invitación a oferta, ofertas seladas, apertura de ofertas, oferta tardía, rexistros de subcontratistas, csv, asistente, mcp, usd, usdz, unidades, listas de unidades, compacta, paneis, diálogos, portugués
from: 0e3a424f
---

Isto é o que cambiou na TakeoffCraft 0.7, en comparación coa 0.6. Os debuxos ábrense agora tal como están, sen debuxar antes en PDF, e un paquete de oferta pode saír cara aos subcontratistas e volver con prezos.

## Novo

### Debuxos DWG e DXF

- **Abra un debuxo como follas.** {{ui:Abrir planos}} no grupo {{ui:Ficheiro}} ({{key:Mod+O}}, ou solte os ficheiros) admite debuxos DWG e DXF xunto aos PDF. O espazo do modelo e cada disposición convértense en follas na lista {{ui:Follas}}, e unha medición pode abranguer debuxos e PDF xuntos. Non se envía nada. Vexa [Abrir un debuxo DWG ou DXF](topic:open-a-drawing).
- **A escala vén do debuxo.** Unha disposición comeza na escala da súa ventá máis grande, co nome dun predefinido cando o é, por exemplo 1/2" = 1'-0". O modelo comeza nas unidades do debuxo. Un debuxo sen unidades indica "Sen escala" ata que o calibre. {{ui:Calibrar}}, {{ui:Comprobar}} e {{ui:Predefinida}} seguen tendo prioridade. Vexa [A escala](topic:open-a-drawing#the-scale).
- **Capas e debuxos ligados.** {{ui:Capas}} na barra de follas amosa ou oculta as capas do debuxo. As capas que o ficheiro apagou ou conxelou comezan ocultas e non se contan salvo que as escolla. Un debuxo ligado (xref) aberto xunto ao seu debuxo principal debúxase e cóntase onde está inserido; mentres non estea aberto, a barra de estado di o que falta. Vexa [Capas](topic:open-a-drawing#layers).
- **O PDF marcado funciona desde un debuxo.** {{ui:Exportar}} › {{ui:PDF marcado}} debuxa primeiro en PDF as follas marcadas dun debuxo, así que a copia mostra as súas marcas e a lenda sen un paso de debuxo. Debúxase en negro ou nas cores do debuxo, sen táboas de estilos de trazado. Vexa [Un PDF marcado](topic:export-estimate#a-marked-pdf).

### Contas e lonxitudes exactas dun debuxo

- **Conte o que o debuxo di que hai.** {{ui:Contaxe CAD}} na barra de follas conta un bloque polo nome (incluídos os bloques aniñados, os estados dos bloques dinámicos e as matrices de bloques), todo dun tipo nunha capa, ou un valor de texto ou atributo. Conta o que amosa a folla, ou o debuxo completo unha vez. Engadir as marcas é un paso de desfacer, e volver contar engade só o novo. {{ui:Contaxe automática}} segue para PDF e para símbolos que non son bloques. Vexa [Contar desde un debuxo](topic:count-from-a-drawing).
- **Medir desde as propias liñas do debuxo.** {{ui:Medir debuxo}} toma as liñas, arcos, polilíneas, círculos, tramas e sólidos que prema ou seleccione por recadro como marcas dunha partida lineal ou de superficie. Os arcos, os abultamentos e os buratos dunha trama saen exactos; as elipses e as splines miden en cordas finas, e a barra di que é así. Vexa [Medir desde un debuxo](topic:measure-from-a-drawing).

### Ofertas

- **Use a oferta dun subcontratista como prezo do paquete.** En {{ui:Exportar}} › {{ui:Paquetes de oferta e nivelación…}}, escolla {{ui:Usar}} nunha oferta. As partidas do paquete quedan como cantidades, unha liña **Oferta escollida** leva o prezo, as partidas que a oferta deixa fóra quedan ao seu propio custo, e a elas aplícanse os gastos xerais, o beneficio e a fianza. Cambiar de oferta é un paso de desfacer; o libro de traballo e o resumo de ofertas o levan. Vexa [Usar unha oferta como prezo do paquete](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Envíe un paquete para ofertas.** {{ui:Enviar para ofertas…}} baixo un paquete envía a cada subcontratista unha ligazón a unha páxina que non necesita conta: ven o alcance e as follas en PDF, escriben un prezo en cada liña ou a marcan como non incluída, engaden notas e até tres ficheiros, ou declinan. {{ui:Obter prezos}} trae o que volveu á folla de nivelación, marcado **web**. O envío só está aberto a contas que o equipo de CadCraft activou mentres se proba (vexa abaixo). Vexa [Enviar un paquete para ofertas](topic:bid-invitations).
- **Selado ata a apertura.** Os prezos poden manterse selados ata unha hora de apertura que vostede fixa: ata entón ninguén ve un prezo, nin vostede. Na apertura amósanse todas as ofertas á vez, e unha oferta que chega despois da data límite márcase como tardía. Vexa [Ofertas seladas e apertura](topic:bid-invitations#sealed-bids-and-the-opening).
- **Rexistros de subcontratistas.** A súa conta en getcadcraft.com garda os contactos, oficios, respostas de cualificación e datas de seguros e licenzas de cada empresa (marcadas unha vez pasadas ou a menos de 30 días), cos seus ofertas anteriores. Impórteos e expórteos como CSV, e escóllaos ao enviar un paquete. Vexa [Na web](topic:bid-invitations#on-the-website).

### Asistentes de IA

- **Os asistentes poden engadir á medición.** Con **Editar** marcado, o seu propio asistente pode engadir partidas (`items_add`) e medir tramos, superficies e contas nunha folla (`marks_add`; lonxitudes e superficies só nunha folla escalada), cada chamada un paso de desfacer.
- **Ferramentas de asistente para debuxos.** Nun DWG ou DXF aberto, un asistente pode listar as súas follas e o que se pode contar, contar con exactitude, engadir as marcas de conta e medir desde a xeometría do debuxo. Sen TakeoffCraft aberto, o servidor MCP de CadCraft abre un debuxo como nova medición e gárdaa, e `cadcraft count` conta desde a liña de comandos. Vexa [O que pode pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **A vista de comprobación 3D como USD.** {{ui:Paquete USD (.usdz)}} xunto a {{ui:GLB}} na vista de comprobación 3D escribe cada muro, laxe, placa, poste de contaxe e tramo como un obxecto propio, co nome da súa partida e coa súa cantidade, en metros. Un asistente tamén o pode exportar (`usd_export`). Vexa [Exportar a vista de comprobación 3D como USD](topic:usd).

## En todas as aplicacións

- **Unidades.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Unidades}} ten unha lista para lonxitude, superficie, volume, ángulo e pendente, cos tamaños exactos que dan as definicións das unidades (o pé de topógrafo dos Estados Unidos é unha unidade propia). Desactive as unidades que nunca usa e saen das listas; marque unha cunha estrela e o traballo novo comeza nela. Un ficheiro sempre conserva a súa propia unidade. En TakeoffCraft as listas {{ui:Unidade}} dunha partida seguen os interruptores, unha partida nova comeza na unidade de lonxitude ou superficie marcada con estrela, os cadros de cuberta (SQ), os acres e as hectáreas son novas unidades de superficie, e unha caixa de lonxitude acepta a marca de calquera unidade, como `3 yd`. Vexa [Unidades, valores escritos e as listas de unidades](common:unit-lists).
- **Disposición máis densa e paneis que se recollen.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Densidade da disposición}} › {{ui:Compacta}} cabe máis na pantalla (as pantallas táctiles e os teléfonos conservan os botóns grandes). Cada panel lateral ten unha barra de título estreita: arrástrea para acoplar ou flotar o panel, solte sobre a barra doutro panel para compartir un marco como lapelas, fíxeo para que deslice cara á beira, ou ocúltao e fágao volver desde a beira. Vexa [Dispor os paneis](common:arrange-panels#make-the-layout-denser).
- **Os diálogos móvense.** Arrastre un diálogo pola súa barra de título para sacalo do camiño do debuxo; volve ao lugar onde o deixou. Faga dobre clic na barra de título para centralo de novo. Vexa [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para asistentes de IA.** Dez peticións prácticas para o seu propio asistente (ordenar un debuxo, trazar un conxunto, comprobar debuxos, facer preguntas a un modelo, totalizar unha medición, probar unha variante de peza…), cada unha coas ferramentas que chama e os permisos que precisa, e cada unha repetida polas nosas probas. As aplicacións non conteñen IA. Vexa [Receitas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo en {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Idioma}}. Ese, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** teñen agora todas as palabras das aplicacións, como borradores aínda non revisados por un falante nativo. Os temas de axuda están en inglés.
- **CadCraft Studio** indica por que fallou unha comprobación de actualización (aínda non hai ficheiro para o seu sistema, sen rede, unha sinatura incorrecta) en lugar de só "Feito", e deixa de devolver unha tarxeta de Novidades que pechou ata que haxa unha versión máis nova.

## Aínda non nesta versión

- **A 0.7 non está asinada dixitalmente.** A sinatura e o paquete da Microsoft Store pasaron á 0.8 porque a validación do certificado aínda non chegou. Comprobe o SHA-256 xunto a cada ficheiro en getcadcraft.com/download. En Windows, se SmartScreen detén o instalador, escolla {{ui:Máis información}} e despois {{ui:Executar igualmente}}. Nun Mac, a primeira vez, prema co botón dereito en CadCraft Studio e escolla {{ui:Aberta}}. CadCraft Studio aínda non está nunha tenda de aplicacións, e aínda non hai versión para iPad nin iPhone.
- A lista de ángulos e pendentes en {{ui:Unidades}} gárdase, pero aínda non a lee ningunha caixa.
- **As ofertas por invitación están desactivadas para a maioría das contas.** Mentres se proba a función, o correo a licitadores externos só sae desde as contas que o equipo de CadCraft activou. As páxinas dos licitadores funcionan para todas as invitacións xa enviadas. Os demais: descargue o {{ui:CSV do alcance}}, envíeo vostede por correo e escriba as ofertas.
- Unha xanela de CadCraft Studio aínda non pode enviar invitacións de oferta: indica que use TakeoffCraft no navegador. Abrir unha medición con solicitudes enviadas, a nivelación e escoller unha oferta funcionan en Studio.
- Non están construídos aínda os adendos, as cartas de adxudicación, unha folla de alcance que cada licitador asine e os recordatorios automáticos antes de que caduque unha data de seguro. Unha oferta escollida non reprezza a área de oferta dunha alternativa.
- Debuxos: non se aplican as táboas de estilos de trazado nin os ficheiros CTB, rexéitase un DXF binario (gárdeo como DXF ASCII ou DWG), os debuxos ligados só se atopan entre os ficheiros abertos polo nome do ficheiro, e os PDF de fondo, as imaxes e os obxectos OLE dun debuxo non se debuxan nin se contan. As contas e as escalas comprobáronse en debuxos de mostra, aínda non en debuxos dunha obra real abertos no programa que os fixo.
- Un asistente pode engadir partidas e marcas pero non pode mover, cambiar nin eliminar as marcas que xa existen.

Todo o demais está en [Non construído aínda](topic:not-built-yet).
