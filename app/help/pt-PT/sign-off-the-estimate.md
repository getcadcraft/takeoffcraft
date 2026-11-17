---
title: Preços em falta e validação do orçamento
summary: Ver quais as linhas do orçamento com quantidade e sem preço unitário, validar o orçamento com o seu nome para que o ficheiro registe quem, quando e qual total, e clicar num valor para selecionar as marcas de onde vem.
keywords: orçamento, validação, validar, validado, aprovação, preço em falta, sem preço unitário, preço unitário, total, orçamentista, registo, auditoria, selecionar marcas, valor, rastrear
from: 9acf71ef
---

## O que vai fazer

Verifique que todas as linhas do orçamento têm preço e depois coloque o seu nome nele. O ficheiro da medição regista quem validou, quando e para que total.

## Linhas sem preço unitário

Em **Quantidades › Por artigo**, uma linha que tem uma quantidade e nenhum preço unitário de material ou de mão de obra fica com **Sem preço unitário**, e a barra por cima da tabela diz quantas são. Essa linha não acrescenta nada ao total. Um artigo sem preço próprio não é assinalado quando um dos seus componentes tem preço: um preço composto é valorizado através das suas partes. O orçamento exportado escreve **Sem preço unitário** na coluna Notas de cada linha desse tipo e conta-as.

## Validar o orçamento

1. Clique em **Validar o orçamento** acima da tabela de Quantidades.
2. A caixa de diálogo indica o total que está a validar e lista as linhas sem preço unitário. Escreva o seu nome e, se quiser, a sua função.
3. Clique em **Validar**. A barra passa a dizer «Validado por … em …» com o total. Guarde a medição para a manter no ficheiro.

A validação diz respeito aos valores que validou. Qualquer alteração posterior a uma quantidade, a um preço unitário ou a uma linha apaga-a, e o TakeoffCraft avisa. Anular repõe o orçamento que validou, e a respetiva validação com ele. Mudar o nome de uma linha não é uma alteração de valor. **Remover a validação** elimina-a.

Um ficheiro de medição que foi editado fora do TakeoffCraft depois de validado abre-se sem a validação, com uma nota a dizê-lo. O orçamento exportado (CSV e XLSX) indica a validação por baixo dos totais.

Só uma pessoa valida. Um assistente de IA pode consultar se o orçamento está validado e quais os preços em falta; não tem forma de o validar.

## Clicar num valor para ver de onde vem

Clique numa quantidade ou num montante de uma linha para selecionar as marcas a partir das quais foi medido. Quando estão noutra folha, essa folha abre-se. Clique num valor da linha **Total da obra** para selecionar todas as marcas da folha. Uma quantidade escrita não tem marcas.

## Bom saber

- A validação regista um nome tal como foi escrito. É um registo no ficheiro, não uma assinatura eletrónica.
- Com pacotes de especialidade adjudicados a subempreiteiros ou alternativas na medição, o total validado é a proposta base mostrada como **Total da obra**.
