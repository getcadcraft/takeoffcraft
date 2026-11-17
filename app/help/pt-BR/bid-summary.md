---
title: Resumo da proposta e proposta comercial
summary: Adicione encargos trabalhistas, imposto sobre vendas, despesas indiretas, lucro e fiança ao orçamento, escreva as inclusões e exclusões e baixe um PDF da proposta para enviar.
keywords: proposta, encargos trabalhistas, encargos, folha de pagamento, proposta comercial, orçamento, despesas indiretas, lucro, acréscimo, margem, imposto sobre vendas, fiança, inclusões, exclusões, condições, assinatura, cliente, preço
from: 3208a561
---

O orçamento precifica o que você levantou. O **resumo da proposta** o transforma em um preço: soma imposto sobre vendas, despesas indiretas, lucro e fiança, e gera um **PDF da proposta** com as suas inclusões e exclusões.

Abra-o em {{ui:Export}} › {{ui:Bid summary & proposal…}}. Tudo nele é salvo junto com o levantamento, e cada alteração pode ser desfeita.

## Os acréscimos

Digite um percentual em qualquer um dos cinco (deixe os outros em 0). Eles são calculados nesta ordem, cada um sobre o que está acima dele:

| Linha | Calculada como |
|---|---|
| Material, Mão de obra | Os totais do orçamento (a proposta base quando o levantamento tem [alternativas](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Encargos trabalhistas | % de encargos × mão de obra: encargos sobre a folha, seguros e benefícios sobre os salários das suas equipes. |
| **Custo** | Material + mão de obra + encargos trabalhistas. |
| Imposto sobre vendas do material | % de imposto × material. |
| Despesas indiretas | % de despesas indiretas × (custo + imposto). |
| Lucro | % de lucro × (custo + imposto + despesas indiretas). |
| Fiança | % de fiança × tudo o que está acima. |
| **Proposta** | A soma das linhas. |

Cada linha é arredondada para o centavo. A pasta de trabalho mostra as mesmas linhas abaixo do total da aba Orçamento, com fórmulas ativas. O resumo é atualizado enquanto você digita: {{key:Enter}} confirma um percentual. Cada alternativa é mostrada com os mesmos acréscimos sobre o próprio custo, para que o proprietário veja o que realmente muda ao aceitá-la.

## A proposta

Preencha o que a proposta deve dizer:

- **Projeto** (o nome do levantamento quando vazio), **Para** (o cliente) e **De** (a sua empresa).
- **Inclusões** e **Exclusões**: uma por linha; um traço ou marcador no início é aceito.
- **Condições**: texto livre, como "Válida por 30 dias."
- **Listar os itens e quantidades**: o escopo, item por item, com quantidades e sem preços. Desmarque para uma proposta por preço global.

Escolha {{ui:Proposal PDF}}. O PDF (`<levantamento> - proposal.pdf`) traz a data, o bloco de preços com cada acréscimo e a proposta, as alternativas, o escopo, as inclusões e exclusões, as condições e linhas para assinar e datar. Se alguns quantitativos não puderam ser medidos (uma folha sem escala), o PDF informa isso abaixo do preço.

## Na exportação

Assim que o levantamento tiver um resumo da proposta, o CSV termina com ele e a pasta de trabalho ganha uma aba **Resumo da proposta**, com cada linha, o percentual e o valor. Veja [Exportar o orçamento](topic:export-estimate).
