---
title: Pacotes de propostas e comparação de propostas
summary: Divida o orçamento em pacotes por especialidade, envie o âmbito de cada pacote a subempreiteiros, compare as propostas recebidas sobre o mesmo âmbito e use a proposta escolhida como preço do pacote.
keywords: comparação de propostas, comparação, pacote de propostas, subempreiteiro, proposta de subempreiteiro, âmbito, tampão, especialidade, divisão CSI, comparar propostas, proposta mais baixa, quadro de propostas, concorrente, adjudicação, proposta escolhida, usar uma proposta, preço de subcontrato
from: 856b3088
---

Um empreiteiro geral envia o âmbito de cada especialidade a subempreiteiros e compara o que lhe chega. O TakeoffCraft faz as duas coisas a partir da medição: abra {{ui:Exportar}} › {{ui:Pacotes de consulta e comparação de propostas…}}.

## Pacotes

Há um pacote para cada divisão CSI que os seus artigos usam (os dois primeiros dígitos do {{ui:Número CSI}} de um artigo, ver [Criar artigos de medição](topic:create-items)). Os artigos sem número formam um pacote próprio. Cada pacote mostra os seus artigos, em quantas folhas estão as respetivas marcas, e o nosso próprio custo (material e mão de obra antes das majorações, a partir da proposta base).

Escolha {{ui:CSV do âmbito}} para transferir o que enviar a um subempreiteiro: cada artigo com o número CSI, quantidade, unidade e as folhas onde está. Não tem preços. Para fornecedores de materiais, o pedido de cotação do livro de cálculo tem a lista de peças (ver [Exportar o orçamento](topic:export-estimate)).

## Introduzir as propostas

1. Na linha vazia por baixo do pacote, escreva o nome do concorrente e o valor da proposta, depois escolha {{ui:Adicionar a proposta}}.
2. Se uma proposta deixar parte do âmbito de fora, abra a sua lista {{ui:Deixado de fora}} e marque esses artigos.
3. Para corrigir um nome ou um valor, escreva por cima dele na tabela; o botão × remove uma proposta.

Cada alteração é um passo que {{key:Mod+Z}} anula, e as propostas são guardadas com a medição.

## Como as propostas são comparadas

As propostas raramente cobrem o mesmo âmbito. A comparação preenche cada artigo deixado de fora com um **tampão** ao nosso custo, para que cada proposta seja comparada sobre o pacote inteiro:

**Comparada = a proposta + os tampões**

A proposta comparada mais baixa é marcada **Mais baixa**; em caso de empate, a que foi introduzida primeiro. **Face ao nosso custo** é a proposta comparada menos o nosso custo do pacote: negativo significa abaixo dele. Uma proposta que parece a mais baixa pode perder quando se conta o âmbito em falta.

O livro de cálculo ganha uma folha **Comparação de propostas** com todos os pacotes que têm propostas: o nosso orçamento, cada proposta, os seus tampões, o total comparado e a diferença, como fórmulas ativas, e o que cada proposta deixou de fora.

## Usar uma proposta como preço do pacote

Escolha {{ui:Usar}} numa proposta e ela passa a ser o preço do pacote inteiro no seu orçamento: o preço próprio do pacote (os artigos, as suas condições secundárias e as partes de preço composto) sai do total da obra, os artigos ficam como quantidades com as suas próprias taxas para referência, e uma linha, **Proposta escolhida**, leva o valor da proposta. Os artigos que a proposta deixa de fora ficam ao seu próprio custo, que é o que a comparação já contava como tampão. Escolha outra proposta, ou escolha a mesma outra vez para a retirar; cada uma é um passo que {{key:Mod+Z}} anula.

No resumo da proposta, as propostas de subempreiteiros são uma linha dentro do custo: os encargos gerais, o lucro e a caução são somados por cima delas como qualquer outro custo; o imposto sobre vendas (apenas sobre o material) e os encargos sobre a mão de obra não. A folha Orçamento do livro de cálculo leva a proposta escolhida como linha própria, e o bloco de majorações soma-a, com fórmulas ativas. A lista de materiais deixa de fora o material de um pacote adjudicado, porque o subempreiteiro o fornece.

Um pacote dentro da área de uma variante da proposta não é preçado de novo: as variantes e os subtotais por área continuam a usar os seus próprios preços.

## Propostas que chegam por e-mail

Não é preciso escrever as propostas à mão. {{ui:Enviar para consulta…}} por baixo de um pacote envia a cada subempreiteiro uma ligação para uma página onde escrevem um preço para cada linha; {{ui:Obter preços}} traz para esta tabela o que enviaram. Veja [Enviar um pacote para propostas](topic:bid-invitations).

:::note
Escrever uma proposta à mão continua a funcionar, e uma proposta escrita à mão e uma proposta do site ficam lado a lado. As propostas que chegaram do site são marcadas **web** (ou **web, tardia** se chegaram depois da hora limite); o preço só muda quando o concorrente envia uma nova versão, por isso as suas próprias edições mantêm-se até lá.
:::
