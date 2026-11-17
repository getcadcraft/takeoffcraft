---
title: Introdução de comprimentos, preços e percentagens
summary: O que pode introduzir para distâncias, alturas, preços e percentagens de desperdício, com exemplos e as mensagens para entradas que o TakeoffCraft não consegue ler.
keywords: introdução, formato, pés polegadas, frações, pés decimais, métrico, metros, milímetros, preço, dinheiro, dólares, percentagem, desperdício, digitação
from: 215bbf4d
---

## Comprimentos

Usado por **Distância real** em {{ui:Calibrar}}, e por {{ui:Altura}} e {{ui:Profundidade}} no editor de artigos.

| O que introduz | Significa |
|---|---|
| `24'-0"` | 24 pés |
| `24'-6 1/2"` | 24 pés e 6½ polegadas |
| `12' 6 1/2"` | 12 pés e 6½ polegadas (um espaço em vez do traço) |
| `12'-6-1/2"` | 12 pés e 6½ polegadas (traços entre as partes) |
| `24'` | 24 pés |
| `30"` | 30 polegadas |
| `6 1/2"` | 6½ polegadas |
| `3/4"` | ¾ de polegada |
| `24 ft 6 in` | 24 pés e 6 polegadas (também `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 na unidade predefinida (ver abaixo) |
| `24.5'` | 24.5 pés |
| `7.5 m` | 7.5 metros |
| `750 cm` | 750 centímetros |
| `7500 mm` | 7,500 milímetros |

- Um número simples está em **pés** para a calibração e para artigos em LF, SF ou SY, e em **metros** para artigos em m ou m².
- As aspas curvas e as marcas de primo do processador de texto (′ ″ ’ ”) funcionam como `'` e `"`. Dois apóstrofos `''` contam como `"`.
- As vírgulas são ignoradas: `1,200 mm` é 1200 mm.
- As frações precisam de números inteiros dos dois lados: `6 1/2"` funciona, `6.5 1/2"` não.
- Distâncias nulas e negativas são recusadas.

Mensagens:

- "Introduza uma distância, por exemplo 24'-0" ou 7.5 m." (o campo está vazio)
- "Introduza uma distância maior do que zero."
- "Use pés e polegadas (24'-6 1/2"), pés decimais, m, cm ou mm." (uma unidade desconhecida)
- "Não foi possível ler essa distância. Experimente 24'-6 1/2" ou 24.5."

Para limpar a altura ou a profundidade de um artigo, esvazie o campo.

### Aritmética

Todos os campos de comprimento, e a caixa de introdução enquanto desenha, aceitam também um cálculo com `+`, `-`, `*`, `/` e parênteses:
`4+7/16` (4.4375 in na unidade predefinida), `12'6" + 3/4"`, `(24'-0")/3` (8 pés), `2*450mm`.

- Um traço escrito num comprimento faz parte dele: `24'-6"` são 24 pés e 6 polegadas e `6-1/2` é 6½. Coloque espaços à volta de um traço para subtrair: `24' - 6"` é 23'-6".
- Um número simples multiplica ou divide um comprimento como número; somado a um comprimento, está na unidade predefinida.
- As funções `abs`, `round`, `ceil` e `floor` também funcionam. Um cálculo que não possa ser lido é recusado, indicando onde está o erro.

## Como os comprimentos são apresentados

Os comprimentos mostram-se em pés, polegadas e dezasseis avos: `12'-6 1/2"`, `0'-0 3/4"`. Os valores são arredondados à 1/16 de polegada mais próxima para apresentação; as quantidades em si não são arredondadas. Os valores decimais mostram-se com duas casas decimais e separadores de milhares, como `1,234.50 LF`.

## Preços (material e mão de obra por unidade)

| O que introduz | Significa |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (até quatro casas decimais; as restantes são arredondadas) |
| (vazio) | $0 |

Mensagem: "Introduza um montante, por exemplo 12.50." ou "Esse montante é demasiado grande." Não são aceites preços negativos.

Os montantes (material, mão de obra, totais) são calculados até ao cêntimo: quantidade com desperdício × preço, arredondado metade para longe de zero, exatamente como `ROUND(x, 2)` numa folha de cálculo.

## Percentagem de desperdício

| O que introduz | Significa |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (vazio) | 0% |

Até duas casas decimais, de 0% a 1000%. Mensagens: "Introduza uma percentagem, por exemplo 10 ou 7.5." ou "Não é permitido um desperdício acima de 1000%."

## Nomes e unidades

- Nomes de artigos e componentes: até 200 caracteres.
- A {{ui:Unidade}} de um componente: qualquer texto até 20 caracteres, como `EA`, `sheets`, `CY`, `gal`. É apenas uma etiqueta; o TakeoffCraft não a converte.

## Fórmulas

As fórmulas de preço composto têm regras próprias: veja [Linguagem de fórmulas](topic:formulas).
