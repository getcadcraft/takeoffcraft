---
title: Áreas da proposta
summary: Marque as medições por prédio, pavimento ou fase, levante o quantitativo em uma área de cada vez e veja os quantitativos e custos de cada área.
keywords: alternativa de acréscimo, alternativa de dedução, proposta base, alternativas, área da proposta, área, prédio, pavimento, nível, fase, zona, alternativa, detalhamento, divisão, pavimento típico, subtotal, por área
from: 64f3d41c
---

Uma área da proposta é uma parte da obra que você orça separadamente: um prédio, um pavimento, uma fase, uma ala. Cada marca pode estar em uma área da proposta. Os quantitativos e o orçamento podem então ser lidos para cada área, com um subtotal de cada uma, enquanto o total da obra continua sendo a soma de tudo.

## Criar uma área da proposta

1. No topo do painel {{ui:Items}}, abra a lista {{ui:Bid area}}.
2. Escolha **Nova área da proposta…**, digite um nome como "Prédio A" ou "Nível 2", e escolha **Criar**.
   A nova área passa a ser a atual. A barra de status diz "Novas marcas vão para (nome). Marcas em outras áreas da proposta ficam esmaecidas."

## Levantar um quantitativo em uma área

Enquanto uma área da proposta estiver escolhida na lista, toda nova marca vai para ela: trechos, áreas, círculos, contagens, as marcas que {{ui:Auto count}} adiciona e o que você colar. As marcas de outras áreas da proposta, e as marcas sem área, ficam esmaecidas na folha para que você veja o que pertence a cada lugar.

Escolha **Nenhuma área da proposta** na lista para levantar sem uma área; nada fica esmaecido nesse caso.

:::tip
Pavimentos típicos: levante o Nível 2, selecione as marcas dele ({{key:Mod+A}} na folha), copie-as, escolha Nível 3 na lista e cole. As cópias vão para o Nível 3. Quando os pavimentos são iguais e você não precisa separá-los, um [grupo típico](topic:typical-groups) conta um pavimento várias vezes.
:::

## Mover marcas para outra área

Selecione uma marca ou várias ({{key:Shift}} + clique, ou {{key:Mod+A}}). Em **Marca selecionada** (ou **Marcas selecionadas**), escolha a área no campo {{ui:Bid area}}. A barra de status diz "3 marcas movidas para o Nível 2." É uma única etapa de desfazer.

## Renomear, reordenar ou excluir

Escolha **Gerenciar áreas da proposta…** na lista. Digite sobre um nome para renomeá-lo, use as setas para mudar a ordem (as tabelas e a planilha a seguem) ou exclua uma com a lixeira. Excluir uma área da proposta mantém as marcas dela: elas passam a ficar sem área da proposta. {{key:Mod+Z}} desfaz cada alteração.

## Ler os quantitativos por área

Na tabela {{ui:Quantities}}, escolha {{ui:By area}} (ele aparece quando o levantamento tem uma área da proposta). Cada área lista os itens que contém, com quantidade, unidade e total, seguidos de uma linha de subtotal. As marcas sem área da proposta aparecem por último, como **Sem área da proposta**. Clique em uma linha de item para destacá-lo e tornar aquela área a atual.

As composições são calculadas para cada área a partir dos totais próprios dessa área. Uma fórmula que arredonda para cima, como `ceil(L / 4)`, pode então dar um pouco mais nas áreas somadas do que para a obra inteira, como aconteceria numa proposta orçada área por área.

## Alternativas: proposta base mais acréscimos e deduções

Uma área da proposta pode ser uma **alternativa**: um serviço que o proprietário pode acrescentar à proposta ou retirar dela. Em **Gerenciar áreas da proposta…**, cada área tem uma lista ao lado do nome:

| Escolha | O que faz |
|---|---|
| {{ui:Base bid}} | Na proposta, como de costume. |
| {{ui:Add alternate}} | Orçada à parte e **deixada de fora da proposta base**: um upgrade de carpete, um toldo extra. |
| {{ui:Deduct alternate}} | Na proposta base, e oferecida como dedução: "remover o toldo". |

Levante o serviço de uma alternativa na área da proposta dela como qualquer outra área. Quando o levantamento tiver uma alternativa:

- O cabeçalho da tabela {{ui:Quantities}} diz **Proposta base** em vez de Total da obra: o levantamento inteiro sem as alternativas de acréscimo.
- {{ui:By area}} termina com a proposta base e uma linha por alternativa: **+$300.00** para um acréscimo, **−$1,050.00** para uma dedução.
- Uma alternativa orça apenas os itens que têm marcas nela, com as composições deles, para que uma parte de composição de outro item não entre por engano.

Nas exportações, o CSV termina com a proposta base e as alternativas, e a planilha ganha uma aba **Alternativas**: a proposta base, os itens de cada alternativa e a variação dela, e a proposta base com todas as alternativas de acréscimo retiradas.

## Na exportação

{{ui:XLSX}} adiciona uma aba **Por área da proposta**: os itens e componentes de cada área com quantidade, quantidade com perda, material, mão de obra e total, um subtotal por área (uma fórmula `SUM`) e **Todas as áreas da proposta** no final. A aba **Marcas** ganha uma coluna **Área da proposta**. Um levantamento sem áreas da proposta é exportado como antes. Veja [Colunas de exportação](topic:export-columns).

As áreas da proposta são salvas no arquivo do projeto junto com as marcas.
