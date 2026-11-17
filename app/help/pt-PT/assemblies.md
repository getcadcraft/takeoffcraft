---
title: Preços compostos e fórmulas
summary: Adicione componentes a um artigo e deixe as fórmulas transformar o seu comprimento, área ou contagem em montantes, travessas, placas de gesso cartonado, betão e ferragens, com um exemplo de parede resolvido.
keywords: preço composto, componentes, fórmula, montantes, gesso cartonado, placas, betão, jardas cúbicas, ferragens, receita, típico, partes do artigo
from: 12891a21
---

O **preço composto** de um artigo é uma lista de componentes, cada um com uma fórmula de quantidade e com o seu próprio desperdício e taxas. A fórmula usa os totais medidos do artigo, por isso uma única medição de uma parede dá-lhe montantes, travessas e placas ao mesmo tempo, e os valores atualizam-se à medida que mede.

## Variáveis disponíveis

| Tipo de artigo | Variáveis |
|---|---|
| Linear | `L` comprimento, `H` altura, `A` área da parede (L × H), `N` número de percursos |
| Área | `A` área, `P` perímetro (contorno + recortes), `H` profundidade ou espessura, `N` número de áreas |
| Contagem | `N` contagem |

Os valores estão nas unidades do próprio artigo: pés e pés quadrados para artigos em LF e SF, metros e metros quadrados para artigos em m e m². Num artigo em SY, `A` está em jardas quadradas, enquanto `P` e `H` continuam em pés.

As fórmulas usam `+ - * /` (ou × ÷), parênteses, números e as funções `ceil`, `floor`, `round`, `min`, `max` e `abs`. As regras completas estão em [Linguagem das fórmulas](topic:formulas).

## Exemplo resolvido: uma parede interior

Suponhamos que mediu **Parede interior tipo A** como um artigo linear: 4 percursos que totalizam 120 LF, com {{ui:Altura}} definida em `9'-0"`. Os seus valores **Medidos** são L = 120, N = 4, A = 1,080 (SF de parede, uma face).

1. Selecione o artigo em {{ui:Artigos}}.
2. Em {{ui:Preço composto}}, escolha {{ui:Adicionar componente}}.
   Aparece um componente chamado "Componente", com a fórmula `L` e o resultado por baixo.
3. Escreva `Studs 16 in o.c.` em {{ui:Nome}} e `EA` em {{ui:Unidade}}.
4. Em {{ui:Fórmula da quantidade}}, escreva `ceil(L * 12 / 16) + N`.
   O resultado atualiza-se à medida que escreve: "= 94 EA". Isto corresponde a um montante a cada 16 polegadas ao longo de 120 pés (90), mais um extra para fechar cada um dos 4 percursos.
5. Escolha {{ui:Adicionar componente}} outra vez para as travessas: nome `Plates, top and bottom`, unidade `LF`, fórmula `L * 2`. Resultado: 240 LF.
6. Acrescente a placa: nome `Gypsum board 4x8, both sides`, unidade `sheets`, fórmula `ceil(A * 2 / 32)`. Resultado: 68 sheets (2,160 SF de placa ÷ 32 SF por placa = 67.5, arredondado para cima).
7. Preencha o {{ui:Desperdício %}}, o {{ui:Material $}} e a {{ui:Mão de obra $}} de cada componente.
   Cada componente tem a sua linha, por baixo do artigo, em {{ui:Quantidades}}, com preço como um artigo, e o {{ui:Total da obra}} inclui-os.

Se o custo da parede estiver todo nos componentes, deixe as taxas de material e mão de obra do próprio artigo em 0; caso contrário, fica contado duas vezes.

:::tip
O desperdício é aplicado depois da fórmula e não é arredondado: 68 sheets com 10% de desperdício são 74.8 sheets. Para encomendar placas inteiras, coloque o desperdício dentro da fórmula, como `ceil(A * 2 / 32 * 1.1)`, e deixe o desperdício do componente em 0.
:::

## Mais fórmulas

| O quê | Artigo | Fórmula |
|---|---|---|
| Montantes a 24 in entre eixos | Linear | `ceil(L / 2) + N` |
| Mantas de isolamento, SF | Linear com altura | `A` |
| Tinta, nas duas faces, galões a 350 SF | Linear com altura | `ceil(A * 2 / 350)` |
| Caixas de azulejo a 15 SF, mais 10% | Área | `ceil(A * 1.1 / 15)` |
| Rodapé ou guarnição de bordo, LF | Área | `P` |
| Betão, jardas cúbicas | Área com profundidade | `A * H / 27` |
| Betão arredondado para cima a um quarto de jarda cúbica | Área com profundidade | `ceil(A * H / 27 * 4) / 4` |
| Dobradiças, três por porta | Contagem | `N * 3` |
| Pelo menos uma caixa, uma por cada 12 | Contagem | `max(1, ceil(N / 12))` |

## Quando uma fórmula está errada

A linha por baixo da fórmula passa a mostrar uma mensagem de erro, por exemplo `"X" não é um valor medido aqui. Use L, H, A, N.` ou `Falta ")".` O componente fica então sem valores, a sua linha em {{ui:Quantidades}} mostra "Erro na fórmula: …", e o cabeçalho diz "Incompleto: 1 erro de fórmula (fora dos totais)". Corrija a fórmula e os totais atualizam-se.

Uma fórmula que divide por zero é também um erro ("A fórmula divide por zero."), por exemplo `A / H` num artigo sem profundidade.

## Limites

- As fórmulas são aplicadas aos **totais** do artigo, e não percurso a percurso. `ceil(L * 12 / 16) + N` acrescenta um montante por cada percurso; ainda não existe arredondamento por percurso.
- Uma fórmula só pode usar as variáveis do seu próprio artigo, não as de outro artigo.
- Até 50 componentes por artigo, 500 caracteres por fórmula.

## Remover um componente

Escolha {{ui:Remover componente}} por baixo dele. Pode anulá-lo com {{key:Mod+Z}}.
