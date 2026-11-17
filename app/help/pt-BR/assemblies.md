---
title: Composições e fórmulas
summary: Adicione insumos a um item e deixe as fórmulas transformarem o comprimento, a área ou a contagem dele em montantes, guias, chapas de placa, concreto e ferragens, com um exemplo prático de parede.
keywords: composição, insumos, fórmula, montantes, drywall, chapas, guias, concreto, metros cúbicos, ferragens, receita, típico, partes do item
from: 12891a21
---

A **composição** de um item é uma lista de insumos, cada um com uma fórmula de quantidade e suas próprias taxas de perda e de preço. A fórmula usa os totais medidos do item, então um único levantamento de uma parede dá montantes, guias e placas ao mesmo tempo, e eles são atualizados conforme você mede.

## Variáveis que você pode usar

| Tipo de item | Variáveis |
|---|---|
| Linear | `L` comprimento, `H` altura, `A` área da parede (L × H), `N` número de trechos |
| Área | `A` área, `P` perímetro (contorno + vãos), `H` profundidade ou espessura, `N` número de áreas |
| Contagem | `N` contagem |

Os valores estão nas unidades do próprio item: pés e pés quadrados para itens LF e SF, metros e metros quadrados para itens m e m². Para um item SY, `A` está em jardas quadradas, enquanto `P` e `H` permanecem em pés.

As fórmulas usam `+ - * /` (ou × ÷), parênteses, números e as funções `ceil`, `floor`, `round`, `min`, `max` e `abs`. As regras completas estão em [Linguagem de fórmulas](topic:formulas).

## Exemplo prático: uma parede interna

Suponha que você tenha levantado **Parede interna tipo A** como item linear: 4 trechos totalizando 120 LF, com {{ui:Height}} definida como `9'-0"`. Seus valores **Medidos** são L = 120, N = 4, A = 1.080 (SF de parede, uma face).

1. Selecione o item em {{ui:Items}}.
2. Em {{ui:Assembly}}, escolha {{ui:Add component}}.
   Aparece um componente chamado "Componente", com a fórmula `L` e o resultado abaixo.
3. Digite `Studs 16 in o.c.` em {{ui:Name}} e `EA` em {{ui:Unit}}.
4. Em {{ui:Quantity formula}}, digite `ceil(L * 12 / 16) + N`.
   O resultado é atualizado enquanto você digita: "= 94 EA". Isso corresponde a um montante a cada 16 polegadas ao longo de 120 pés (90), mais um extra para fechar cada um dos 4 trechos.
5. Escolha {{ui:Add component}} novamente para as guias: nome `Plates, top and bottom`, unidade `LF`, fórmula `L * 2`. Resultado: 240 LF.
6. Adicione a placa: nome `Gypsum board 4x8, both sides`, unidade `sheets`, fórmula `ceil(A * 2 / 32)`. Resultado: 68 chapas (2.160 SF de placa ÷ 32 SF por chapa = 67,5, arredondado para cima).
7. Preencha {{ui:Waste %}}, {{ui:Material $}} e {{ui:Labor $}} de cada componente.
   Cada componente recebe sua própria linha abaixo do item em {{ui:Quantities}}, com preço como um item, e o {{ui:Job total}} o inclui.

Se o custo da parede está todo nos componentes, deixe as taxas de material e mão de obra do próprio item em 0, senão ele será contado duas vezes.

:::tip
A perda é aplicada depois da fórmula e não é arredondada: 68 chapas com 10% de perda são 74,8 chapas. Para pedir chapas inteiras, coloque a perda dentro da fórmula, como `ceil(A * 2 / 32 * 1.1)`, e deixe a perda do componente em 0.
:::

## Mais fórmulas

| O que | Item | Fórmula |
|---|---|---|
| Montantes a 24 in de centro a centro | Linear | `ceil(L / 2) + N` |
| Mantas de isolamento, SF | Linear com altura | `A` |
| Tinta, dos dois lados, galões a 350 SF | Linear com altura | `ceil(A * 2 / 350)` |
| Caixas de cerâmica a 15 SF, 10% extra | Área | `ceil(A * 1.1 / 15)` |
| Rodapé ou acabamento de borda, LF | Área | `P` |
| Concreto, jardas cúbicas | Área com profundidade | `A * H / 27` |
| Concreto arredondado para cima a um quarto de jarda | Área com profundidade | `ceil(A * H / 27 * 4) / 4` |
| Dobradiças, três por porta | Contagem | `N * 3` |
| Pelo menos uma caixa, uma a cada 12 | Contagem | `max(1, ceil(N / 12))` |

## Quando uma fórmula está errada

A linha abaixo da fórmula vira uma mensagem de erro, por exemplo `"X" is not a measured value here. Use L, H, A, N.` ou `A ")" is missing.` O componente então não tem valores, a linha dele em {{ui:Quantities}} mostra "Erro na fórmula: …", e o cabeçalho diz "Incompleto: 1 erro de fórmula (não incluído nos totais)". Corrija a fórmula e os totais são atualizados.

Uma fórmula que divide por zero também é erro ("The formula divides by zero."), por exemplo `A / H` em um item sem profundidade.

## Limites

- As fórmulas rodam sobre os **totais** do item, não trecho por trecho. `ceil(L * 12 / 16) + N` adiciona um montante por trecho; ainda não há arredondamento por trecho.
- Uma fórmula só pode usar as variáveis do próprio item, não as de outro item.
- Até 50 componentes por item, 500 caracteres por fórmula.

## Remover um componente

Escolha {{ui:Remove component}} abaixo dele. Você pode desfazer com {{key:Mod+Z}}.
