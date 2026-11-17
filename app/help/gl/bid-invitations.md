---
title: Enviar un paquete para ofertas
summary: Envíe por correo un paquete de oferta a subcontratistas, deixe que escriban prezos nunha páxina que non precisa conta, manteña os prezos selados ata a hora de apertura e incórporeos á folla de nivelación.
keywords: enviar para ofertas, convite, convite de oferta, licitador, subcontratista, convidar, correo, solicitude de prezo, ofertas seladas, apertura de ofertas, día de ofertas, oferta tardía, data límite, recordatorio, rexistros de subcontratistas, seguro, cualificación, csv, conectar, PDF das follas
from: fb314b2c
---

{{ui:Export}} › {{ui:Paquetes de oferta e nivelación…}} › {{ui:Enviar para ofertas…}} envía un paquete ás persoas que escolla. O sitio web envíalles a cada unha un enlace por correo; abren unha páxina, ven o alcance e escriben un prezo para cada liña. Vostede ve os prezos na folla de nivelación, listos para comparar ([Paquetes de oferta e nivelación de ofertas](topic:bid-leveling)).

:::note
O envío **aínda non está aberto a todos.** Mentres a función se proba, funciona para as contas que activou o equipo de CadCraft; se a súa non o está, o diálogo dío. A páxina do licitador funciona para todos os convites enviados.
:::

## Antes de enviar

- Precisa unha conta de CadCraft cun enderezo de correo verificado. TakeoffCraft no navegador pídelle que se **conecte**: abrirase unha pestana en getcadcraft.com, prema Conectar, e esa pestana recibe un inicio de sesión que funciona durante 30 días, só para paquetes de oferta, ata que peche a pestana de TakeoffCraft. Pode quitalo en calquera momento na súa páxina de seguridade. Unha xanela de Studio aínda non pode enviar.
- Dé a cada elemento un número CSI: un paquete é os elementos dunha división CSI ([Crear elementos de medición](topic:create-items)).
- Escale as follas nas que están as marcas do paquete, para que as cantidades que ven os licitadores estean medidas.

## Enviar un paquete

1. Escolla {{ui:Enviar para ofertas…}} baixo o paquete.
2. Complete o título, o proxecto e unha mensaxe opcional, e a **data límite** na súa propia zona horaria.
3. Deixe marcado **Manter os prezos selados** para ocultar todos os prezos ata a **hora de apertura** (non antes da data límite), ou desmárqueo para ver os prezos a medida que chegan.
4. Deixe marcada a caixa das follas para enviar un PDF das follas que conteñen as marcas do paquete, coas marcas debuxadas. Os seus prezos nunca se envían: só nomes de elementos, números CSI, cantidades, unidades e nomes de follas.
5. Escriba as persoas que convidar, unha por liña, como `Nome <nome@empresa.com>` ou só o enderezo, ou marque persoas dos seus rexistros de subcontratistas. Ata 60 de cada vez, 100 por paquete.
6. Escolla {{ui:Enviar convites}}. Cada persoa recibe un correo simple co seu nome e enderezo de correo, a data límite e o enlace; as respostas lle chegan a vostede.

O diálogo indica cantos se enviaron e nomea quen se saltou: xa convidado a este paquete, pediu non recibir convites de oferta, enderezo non válido, ou superou un límite de envío.

## O que ve o licitador

Unha páxina nun enlace privado longo, sen inicio de sesión. Mostra quen o convidou, a data límite, se os prezos están selados, a súa mensaxe e o PDF das follas, e logo cada liña coa súa cantidade. Para cada liña escribe un prezo ou marca **Non incluído**, e pode engadir unha nota; engade notas para todo o paquete e ata 3 ficheiros (unha oferta, unha carta de alcance, un certificado). Pode gardar de novo e cambiar os seus prezos ata a apertura, ou **declinar**, cunha caixa para pedir que CadCraft non lle envíe máis convites de oferta.

## Ofertas seladas e apertura

Antes da hora de apertura **ninguén** ve un prezo, unha nota nin un ficheiro: nin vostede, nin en TakeoffCraft, nin na súa páxina de Paquetes de oferta. Vostede ve quen foi convidado e se respondeu. Á hora de apertura cada oferta aparece á vez. Unha oferta gardada despois da data límite acéptase e márcase **tardía**; a nivelación aínda a inclúe, e a tardanza é unha marca, non unha resolución. Despois da apertura un licitador non pode cambiar un prezo. Sen selado, unha oferta é definitiva cando vence.

## Obter os prezos

{{ui:Obter prezos}} consulta o sitio web e engade cada resposta ao paquete como oferta, marcada **web**. TakeoffCraft tamén consulta en silencio cada vez que abre o diálogo mentres está conectado. Unha oferta cuxo licitador gardou unha nova versión actualízase no seu lugar; unha oferta que vostede editou queda como a deixou ata que lle envíen unha nova versión. Cada descarga é un paso que {{key:Mod+Z}} desfai. As liñas deixadas fóra chegan como o alcance que a oferta deixa fóra, así que a nivelación as cubre ao seu propio custo.

## No sitio web

A súa conta ten dúas páxinas máis cando pode enviar: **Paquetes de oferta** lista o que enviou, quen respondeu, as ofertas tardías e os ficheiros, e permite enviar un recordatorio (un enlace novo; o anterior deixa de funcionar), pechar, reabrir ou cancelar un paquete. **Subcontratistas** garda un rexistro de cada empresa: contactos, oficios, respostas de cualificación (anos no negocio, capacidade de fianza, EMR, rexistro de seguridade, sindicado ou non sindicado, referencias), datas de caducidade de licenzas e seguros, marcadas cando xa pasaron ou faltan 30 días ou menos, e as súas ofertas anteriores. Importe e exporte os rexistros como CSV: unha fila por contacto, coas columnas que mostra a exportación. Unha empresa que xa existe actualízase, nunca se repite.

## Quen ve que, e durante canto

Os prezos, notas e ficheiros dun licitador vanlle a vostede e ao equipo de CadCraft, que xestiona a páxina. Consérvanse 24 meses despois da data límite, e os ficheiros 180 días; logo elimínanse. O enderezo de correo do licitador é o que vostede introduciu, e úsase só para enviar o convite e o recordatorio correspondente. Un enderezo recibe como máximo 3 convites ao día de todos xuntos, e vostede pode enviar ata 200 ao día.

## Aínda non construído

Non están construídos os addenda, as cartas de adxudicación, unha folla de alcance asinada por cada licitador, nin os recordatorios automáticos antes de que caduque unha data de seguro. Consulte [Aínda non construído](topic:not-built-yet).
