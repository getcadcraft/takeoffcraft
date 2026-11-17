---
title: Iniciar unha medición e abrir un conxunto de planos
summary: Abra un ou varios PDF como un conxunto de planos, oriéntese polas follas e pase entre elas.
keywords: abrir, conxunto de planos, varios PDF, varios ficheiros, follas, debuxos, etiquetas de páxina, lista de follas, navegar, soltar, entrega, abrir noutra aplicación, marcado
from: ed434468
---

Un conxunto de planos adoita ser varios PDF: arquitectónicos, estruturais, mecánicos. TakeoffCraft ábreos xuntos, lado a lado, como unha única lista de follas, e unha medición pode cubrilos todos.

## Abrir os PDF

1. Escolla {{ui:Abrir planos}} no grupo {{ui:Ficheiro}}, ou prema {{key:Mod+O}}. (Os outros estilos de menú chámanlle {{ui:Abrir PDF…}}.)
2. No diálogo de ficheiros, seleccione todos os PDF do conxunto. Manteña premido {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} para escoller varios, ou {{key:Shift}} para escoller un intervalo.
3. Escolla Abrir.
   Mentres se le cada ficheiro móstrase unha mensaxe "Abrindo (nome)…". Despois aparece cada páxina baixo {{ui:Follas}} e ábrese a primeira páxina do primeiro PDF novo.

Tamén pode arrastrar os PDF desde {{pick:mac=Finder|windows=Explorador de ficheiros|linux=o seu xestor de ficheiros}} e soltalos en calquera lugar de TakeoffCraft. Mentres arrastra aparece un marco "Solte PDF, debuxos DWG ou DXF, ou un .takeoff.json".

Para engadir máis PDF despois, faga o mesmo. Os PDF que xa están abertos sáltanse.

A pantalla de inicio tamén lista os PDF e as medicións que abriu recentemente, nos navegadores que permiten a unha páxina abrir de novo un ficheiro (Chrome e Edge). Prema un para abrilo; o navegador pode pedir primeiro permiso. Consulte [Os seus ficheiros](common:your-files).

:::note
Non se envía nada. O navegador le os PDF no seu ordenador, e desaparecen de TakeoffCraft cando pecha a pestana ou escolle {{ui:Novo}}.
:::

## Debuxos xunto aos PDF

{{ui:Abrir planos}} tamén admite debuxos DWG e DXF, soltos ou xunto con PDF: o espazo modelo e os layouts de cada debuxo convértense en follas na mesma lista. Consulte [Abrir un debuxo DWG ou DXF](topic:open-a-drawing), e despois [Contar desde un debuxo](topic:count-from-a-drawing).

## Un PDF entregado desde outra aplicación

Outra aplicación do conxunto pode entregarlle o PDF que ten aberto: abre TakeoffCraft nunha pestana nova e o PDF ábrese alí como se o tivese soltado. A barra de estado di "Aberto (nome), entregado desde (aplicación). O ficheiro orixinal non cambiou." Non se envía nada; o ficheiro pasa polo almacenamento deste navegador e sae del cando se abre.

Se a barra de estado di que o PDF "non chegou", a pestana esperou demasiado ou o PDF xa se abriu noutra pestana: ábrao con {{ui:Abrir planos}}.

Ao revés, cando MarkupCraft se executa onde vostede está e pode recibir un ficheiro, a barra de follas baixo o debuxo ten un botón {{ui:MarkupCraft}}: abre o PDF da folla na pantalla en MarkupCraft, nunha pestana nova, para revisalo e anotalo.

## Atopar unha folla

- Desprácese pola lista {{ui:Follas}} á esquerda e prema unha folla.
- Escriba en **Buscar follas**, na parte superior da lista, para filtrar por número de folla, nome de ficheiro ou etiqueta de páxina. O número ao lado de {{ui:Follas}} mostra "3 de 40" mentres hai un filtro activo.
- Prema {{key:PageDown}} para a seguinte folla e {{key:PageUp}} para a anterior. Séguen a lista tal como está filtrada.

:::mac
Nun teclado de Mac sen as teclas Page Up e Page Down, prema fn coa frecha arriba ou abaixo.
:::

## Como se nomean as follas

- Unha páxina que o PDF etiqueta, como `A-101`, recibe ese nome.
- Unha páxina sen etiqueta (ou cuxa etiqueta é só o seu número de páxina) nómease "(nome do ficheiro), páxina (n)".
- Con varios PDF abertos, as follas etiquetadas levan tamén o nome do ficheiro: "A-101 — Arquitectónico".

Os nomes das follas non se poden escribir a man por agora.

## Mirar arredor dunha folla

- Xire a roda do rato para facer zoom na posición do punteiro.
- Arrastre co botón esquerdo ou co central para desprazar. Con {{ui:Contaxe automática}}, ou cando comeza sobre a esquina dunha marca, manteña premida {{key:Space}} mentres arrastra, ou arrastre co botón central.
- Prema {{key:F}} ou escolla {{ui:Axustar páxina}} para ver a folla completa; {{key:W}} ou {{ui:Axustar ancho}} axusta ao seu ancho.
- Prema {{key:Plus}} ou {{key:=}} para ampliar e {{key:Minus}} para reducir, arredor do centro da vista.

Cada folla lembra o seu propio zoom e posición mentres siga aberta.

## Seguinte

Antes de medir unha folla, ten que ter escala: [Definir a escala](topic:set-the-scale).
