---
title: Entrada de comprimento, preço unitário e percentual
summary: O que você pode digitar para distâncias, alturas, preços unitários em dinheiro e percentuais de perda, com exemplos e as mensagens para entradas que o TakeoffCraft não consegue ler.
keywords: entrada, formato, pés e polegadas, frações, pés decimais, métrico, metros, milímetros, preço unitário, dinheiro, dólares, percentual, perda, digitação
from: 215bbf4d
---

## Comprimentos

Usado por **Distância real** em {{ui:Calibrar}}, e por {{ui:Altura}} e {{ui:Profundidade}} no editor de itens.

| Você digita | Significa |
|---|---|
| `24'-0"` | 24 pés |
| `24'-6 1/2"` | 24 pés e 6½ polegadas |
| `12' 6 1/2"` | 12 pés e 6½ polegadas (um espaço no lugar do traço) |
| `12'-6-1/2"` | 12 pés e 6½ polegadas (traços entre as partes) |
| `24'` | 24 pés |
| `30"` | 30 polegadas |
| `6 1/2"` | 6½ polegadas |
| `3/4"` | ¾ de polegada |
| `24 ft 6 in` | 24 pés e 6 polegadas (também `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 na unidade padrão (veja abaixo) |
| `24.5'` | 24.5 pés |
| `7.5 m` | 7.5 metros |
| `750 cm` | 750 centímetros |
| `7500 mm` | 7,500 milímetros |

- Um número simples está em **pés** para calibração e para itens em LF, SF ou SY, e em **metros** para itens em m ou m².
- Aspas curvas e os sinais de primo dos processadores de texto (′ ″ ’ ”) funcionam como `'` e `"`. Duas apóstrofes `''` contam como `"`.
- Vírgulas são ignoradas: `1,200 mm` é 1200 mm.
- Frações precisam de números inteiros dos dois lados: `6 1/2"` funciona, `6.5 1/2"` não.
- Distâncias zero e negativas são recusadas.

Mensagens:

- "Digite uma distância, como 24'-0" ou 7.5 m." (o campo está vazio)
- "Digite uma distância maior que zero."
- "Use pés e polegadas (24'-6 1/2"), pés decimais, m, cm ou mm." (unidade desconhecida)
- "Não foi possível ler essa distância. Tente 24'-6 1/2" ou 24.5."

Para apagar a altura ou a profundidade de um item, esvazie o campo.

### Aritmética

Todo campo de comprimento, e a caixa de digitação enquanto você desenha, também aceita um cálculo com `+`, `-`, `*`, `/` e parênteses:
`4+7/16` (4.4375 na unidade padrão), `12'6" + 3/4"`, `(24'-0")/3` (8 pés), `2*450mm`.

- Um traço escrito em um comprimento ainda faz parte dele: `24'-6"` são 24 pés e 6 polegadas, e `6-1/2` é 6½. Coloque espaços em volta do traço para subtrair: `24' - 6"` dá 23'-6".
- Um número simples multiplica ou divide um comprimento como número; somado a um comprimento, ele está na unidade padrão.
- `abs`, `round`, `ceil` e `floor` também funcionam. Um cálculo que não pode ser lido é recusado, com a indicação de onde deu errado.

## Como os comprimentos são exibidos

Comprimentos aparecem em pés, polegadas e dezesseis avos: `12'-6 1/2"`, `0'-0 3/4"`. Os valores são arredondados para o 1/16 de polegada mais próximo na exibição; as quantidades em si não são arredondadas. Valores decimais aparecem com duas casas decimais e separadores de milhar, como `1,234.50 LF`.

## Preços unitários (material e mão de obra por unidade)

| Você digita | Significa |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (até quatro casas decimais; as demais são arredondadas) |
| (vazio) | $0 |

Mensagem: "Digite um valor como 12.50." ou "Esse valor é alto demais." Preços negativos não são aceitos.

Valores estendidos (material, mão de obra, totais) são calculados até o centavo: quantidade com perda × preço, arredondado metade para longe de zero, exatamente como `ROUND(x, 2)` de uma planilha.

## Percentual de perda

| Você digita | Significa |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (vazio) | 0% |

Até duas casas decimais, de 0% a 1000%. Mensagens: "Digite um percentual como 10 ou 7.5." ou "Perda acima de 1000% não é permitida."

## Nomes e unidades

- Nomes de itens e de componentes: até 200 caracteres.
- A {{ui:Unidade}} de um componente: qualquer texto de até 20 caracteres, como `EA`, `sheets`, `CY`, `gal`. É apenas um rótulo; o TakeoffCraft não converte.

## Fórmulas

As fórmulas de composição têm regras próprias: veja [Linguagem de fórmulas](topic:formulas).
