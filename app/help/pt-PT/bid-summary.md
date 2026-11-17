---
title: Resumo da proposta e proposta
summary: Acrescente encargos com mão de obra, imposto sobre vendas, encargos gerais, lucro e caução ao orçamento, escreva as inclusões e exclusões e transfira um PDF da proposta para enviar.
keywords: proposta, encargos com mão de obra, encargos, folha de salários, cotação, encargos gerais, lucro, majoração, margem, imposto sobre vendas, caução, inclusões, exclusões, condições, assinatura, cliente, preço
from: 3208a561
---

O orçamento preça o que mediu. O **resumo da proposta** transforma-o num preço: soma o imposto sobre vendas, os encargos gerais, o lucro e a caução, e cria um **PDF da proposta** com as suas inclusões e exclusões.

Abra-o a partir de {{ui:Exportar}} › {{ui:Resumo da proposta e proposta…}}. Tudo o que nele está fica guardado com a medição, e cada alteração pode ser anulada.

## As majorações

Escreva uma percentagem em qualquer das cinco (deixe as outras em 0). São calculadas por esta ordem, cada uma sobre o que está acima:

| Linha | Calculado como |
|---|---|
| Material, Mão de obra | Os totais do orçamento (a proposta base quando a medição tem [variantes](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Encargos com mão de obra | % de encargos × mão de obra: impostos sobre a folha de salários, seguros e benefícios sobre os salários das suas equipas. |
| **Custo** | Material + mão de obra + encargos com mão de obra. |
| Imposto sobre vendas no material | % de imposto × material. |
| Encargos gerais | % de encargos gerais × (custo + imposto). |
| Lucro | % de lucro × (custo + imposto + encargos gerais). |
| Caução | % de caução × tudo o que está acima. |
| **Proposta** | A soma das linhas. |

Cada linha é arredondada ao cêntimo. O livro de cálculo mostra as mesmas linhas por baixo do total da folha Orçamento, com fórmulas ativas. O resumo atualiza-se à medida que escreve: {{key:Enter}} aceita a percentagem. Cada variante é mostrada com as mesmas majorações sobre o seu próprio custo, para que o dono veja o que realmente muda ao acrescentá-la ou retirá-la.

## A proposta

Preencha o que a proposta deve dizer:

- **Projeto** (o nome da medição quando estiver vazio), **Para** (o cliente) e **De** (a sua empresa).
- **Inclusões** e **Exclusões**: uma por linha; um traço ou marcador no início é aceitável.
- **Condições**: texto livre, como "Válida por 30 dias."
- **Listar os artigos e quantidades**: o âmbito, artigo a artigo, com quantidades e sem preços. Desmarque-a para uma proposta por preço global.

Escolha {{ui:PDF da proposta}}. O PDF (`<takeoff> - proposal.pdf`) tem a data, o bloco de preços com cada majoração e a proposta, as variantes, o âmbito, as inclusões e exclusões, as condições, e linhas para assinar e datar. Se algumas quantidades não puderam ser medidas (uma folha sem escala), o PDF diz isso por baixo do preço.

## Nas exportações

Quando a medição tem um resumo da proposta, o CSV termina com ele, e o livro de cálculo ganha uma folha **Resumo da proposta**, com cada linha, a respetiva percentagem e o valor. Veja [Exportar o orçamento](topic:export-estimate).
