---
title: Pacotes de propostas e equalização de propostas
summary: Divida o orçamento em pacotes por especialidade, envie o escopo de cada pacote a subempreiteiros, compare as propostas que voltam sobre o mesmo escopo e use a proposta escolhida como preço do pacote.
keywords: equalização de propostas, equalização, pacote de propostas, subempreiteiro, proposta de subempreiteiro, escopo, complemento, especialidade, divisão CSI, comparar propostas, menor proposta, quadro de propostas, proponente, adjudicação, proposta escolhida, usar uma proposta, preço de subcontratação
from: 856b3088
---

Um empreiteiro geral envia o escopo de cada especialidade a subempreiteiros e compara o que volta. O TakeoffCraft faz as duas coisas a partir do levantamento: abra {{ui:Export}} › {{ui:Bid packages and leveling…}}.

## Pacotes

Há um pacote para cada divisão CSI que os seus itens usam (os dois primeiros dígitos do {{ui:CSI number}} de um item, veja [Criar itens do levantamento](topic:create-items)). Itens sem número formam um pacote próprio. Cada pacote mostra os seus itens, em quantas folhas estão as marcas deles e o nosso próprio custo (material e mão de obra antes dos acréscimos, a partir da proposta base).

Escolha {{ui:Scope CSV}} para baixar o que enviar a um subempreiteiro: cada item com o número CSI, quantidade, unidade e as folhas em que está. Ele não tem preços. Para fornecedores de material, a pasta de trabalho tem a lista de peças na solicitação de cotação (veja [Exportar o orçamento](topic:export-estimate)).

## Digitar as propostas

1. Na linha vazia abaixo do pacote, digite o nome do proponente e o valor da proposta, depois escolha {{ui:Add the bid}}.
2. Se uma proposta deixa parte do escopo de fora, abra a sua lista {{ui:Left out}} e marque esses itens.
3. Para corrigir um nome ou um valor, digite por cima na tabela; o botão × remove uma proposta.

Cada alteração é uma etapa que {{key:Mod+Z}} desfaz, e as propostas são salvas junto com o levantamento.

## Como as propostas são equalizadas

As propostas raramente cobrem o mesmo escopo. A equalização preenche cada item deixado de fora com um **complemento** pelo nosso próprio custo desse item, de modo que cada proposta seja comparada sobre o pacote inteiro:

**Equalizada = a proposta + os complementos**

A menor proposta equalizada é marcada como **Menor**; em caso de empate, vale a que foi digitada primeiro. **Contra o nosso custo** é a proposta equalizada menos o nosso próprio custo do pacote: negativo significa abaixo dele. Uma proposta que parece a menor pode perder quando o escopo que falta é contado.

A pasta de trabalho recebe uma aba **Equalização de propostas** com cada pacote que tem propostas: a nossa estimativa, cada proposta, os complementos dela, o total equalizado e a diferença, como fórmulas ativas, e o que cada proposta deixou de fora.

## Usar uma proposta como preço do pacote

Escolha {{ui:Use}} em uma proposta e ela se torna o preço de todo o pacote no seu orçamento: a precificação própria do pacote (os itens, as condições secundárias deles e as partes de composição) sai do total da obra, os itens permanecem como quantidades com as suas próprias taxas para referência, e uma linha, **Proposta escolhida**, traz o valor da proposta. Os itens que a proposta deixa de fora permanecem pelo seu próprio custo, que é o que a equalização já contou como complemento. Escolha outra proposta, ou escolha a mesma de novo para desfazer; cada uma é uma etapa que {{key:Mod+Z}} desfaz.

No resumo da proposta, as propostas de subempreiteiros são uma linha dentro do custo: despesas indiretas, lucro e fiança são somados sobre elas como sobre qualquer outro custo; o imposto sobre vendas (apenas sobre material) e os encargos trabalhistas (sobre mão de obra) não. A aba Orçamento da pasta de trabalho traz a proposta escolhida como linha própria, e o bloco de acréscimos a soma, com fórmulas ativas. A lista de materiais deixa de fora o material de um pacote adjudicado, porque o subempreiteiro o fornece.

Um pacote dentro da área da proposta de uma alternativa não é precificado de novo: alternativas e subtotais de áreas ainda usam os seus próprios preços.

## Propostas que voltam por e-mail

Você não precisa digitar as propostas. {{ui:Send for bids…}} abaixo de um pacote envia a cada subempreiteiro um link para uma página onde ele digita um preço para cada linha; {{ui:Get prices}} traz o que eles enviaram para esta tabela. Veja [Enviar um pacote para propostas](topic:bid-invitations).

:::note
Digitar uma proposta à mão continua funcionando, e uma proposta digitada à mão e uma vinda do site ficam lado a lado. As propostas que voltaram do site são marcadas como **web** (ou **web, atrasada** quando chegaram depois do prazo); o preço delas só muda quando o proponente envia uma nova versão, então as suas próprias edições permanecem até lá.
:::
