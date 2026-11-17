---
title: Paquetes de oferta e nivelación de ofertas
summary: Divida o orzamento en paquetes por oficio, envíe o alcance de cada paquete aos subcontratistas, compare as ofertas que volven sobre o mesmo alcance e use a oferta escollida como prezo do paquete.
keywords: nivelación de ofertas, nivelación, paquete de oferta, subcontratista, oferta de subcontrata, alcance, tapón, oficio, división CSI, comparar ofertas, oferta máis baixa, cadro de ofertas, licitador, adxudicación, oferta escollida, usar unha oferta, prezo de subcontrata
from: 856b3088
---

Un contratista xeral envía o alcance de cada oficio aos subcontratistas e compara o que volve. TakeoffCraft fai as dúas cousas desde a medición: abra {{ui:Export}} › {{ui:Paquetes de oferta e nivelación…}}.

## Paquetes

Hai un paquete por cada división CSI que usan os seus elementos (os dous primeiros díxitos do {{ui:Número CSI}} dun elemento; consulte [Crear elementos de medición](topic:create-items)). Os elementos sen número forman un paquete propio. Cada paquete mostra os seus elementos, en cantas follas están as súas marcas, e o noso custo propio (material e man de obra antes dos recargos, da oferta base).

Escolla {{ui:CSV do alcance}} para descargar o que se envía a un subcontratista: cada elemento co seu número CSI, cantidade, unidade e as follas nas que está. Non ten prezos. Para os subministradores de material, a solicitude de oferta do libro ten a lista de pezas (consulte [Exportar o orzamento](topic:export-estimate)).

## Introducir as ofertas

1. Na fila baleira baixo o paquete, escriba o nome do licitador e o importe da oferta, e escolla {{ui:Engadir a oferta}}.
2. Se unha oferta deixa parte do alcance fóra, abra a súa lista {{ui:Deixado fóra}} e marque eses elementos.
3. Para corrixir un nome ou un importe, escriba por riba na táboa; o botón × quita unha oferta.

Cada cambio é un paso que {{key:Mod+Z}} desfai, e as ofertas gárdanse coa medición.

## Como se nivelan as ofertas

As ofertas raramente cubren o mesmo alcance. A nivelación enche cada elemento deixado fóra cun **tapón** ao noso propio custo, para que cada oferta se compare sobre todo o paquete:

**Nivelada = a oferta + os tapóns**

A oferta nivelada máis baixa márcase **Baixa**; en empate, a primeira introducida. **Contra o noso custo** é a oferta nivelada menos o noso custo propio do paquete: negativo significa por debaixo. Unha oferta que parece a máis baixa pode perder cando se conta o alcance que lle falta.

O libro recibe unha folla **Nivelación de ofertas** con cada paquete que ten ofertas: o noso orzamento, cada oferta, os seus tapóns, o total nivelado e a diferenza, como fórmulas dinámicas, e o que deixou fóra cada oferta.

## Usar unha oferta como prezo do paquete

Escolla {{ui:Usar}} nunha oferta e convértese no prezo de todo o paquete no seu orzamento: o propio prezo do paquete (os elementos, as súas condicións secundarias e as pezas de conxunto) sae do total da obra, os elementos quedan como cantidades coas súas tarifas de referencia, e unha liña, **Oferta escollida**, leva o importe da oferta. Os elementos que a oferta deixa fóra quedan ao noso custo, que é o que a nivelación xa contou como tapón. Escolla outra oferta, ou escolla a mesma de novo para retirala; cada unha é un paso que {{key:Mod+Z}} desfai.

No resumo da oferta, as ofertas dos subcontratistas son unha liña dentro do custo: gastos xerais, beneficio industrial e fianza engádense enriba como calquera outro custo; o imposto de vendas (só sobre o material) e a carga salarial (sobre a man de obra) non. A folla Orzamento do libro leva a oferta escollida como fila propia, e o bloque de recargos súmaa, con fórmulas dinámicas. A lista de material deixa fóra o material dun paquete adxudicado, porque o subcontratista o subministra.

Un paquete dentro da zona de oferta dunha alternativa non se revaloriza: as alternativas e os subtotais de zona seguen usando os seus propios prezos.

## Ofertas que volven por correo

Non ten que escribir as ofertas á man. {{ui:Enviar para ofertas…}} baixo un paquete envía a cada subcontratista un enlace a unha páxina onde escriben un prezo para cada liña; {{ui:Obter prezos}} trae o que enviaron a esta táboa. Consulte [Enviar un paquete para ofertas](topic:bid-invitations).

:::note
Escribir unha oferta á man segue funcionando, e unha oferta escrita á man e unha do sitio quedan unha ao lado da outra. As ofertas que chegaron do sitio márcanse **web** (ou **web, tardía** cando chegaron despois da data límite); o seu prezo só cambia cando o licitador envía unha nova versión, así que as súas edicións propias quedan ata entón.
:::
