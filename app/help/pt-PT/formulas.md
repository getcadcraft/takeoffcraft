---
title: Linguagem de fórmulas
summary: As regras para as fórmulas de quantidade dos preços compostos: variáveis, operadores, funções, arredondamento e todas as mensagens de erro.
keywords: fórmula, expressão, sintaxe, funções, ceil, floor, round, min, max, abs, variáveis, operadores, cálculo
from: 4da14575
---

Os componentes de um preço composto obtêm a sua quantidade a partir de uma fórmula. Uma fórmula é uma pequena expressão aritmética sobre os valores medidos do artigo. Veja [Preços compostos e fórmulas](topic:assemblies) para exemplos resolvidos.

## Variáveis

| Tipo de artigo | Variável | Significado |
|---|---|---|
| Linear | `L` | Comprimento total |
| Linear | `H` | A altura do artigo |
| Linear | `A` | Área de parede, L × H, menos as aberturas dos troços que as têm (uma medição do BimCraft). Quando essa medição indica um método de medição, `A` é medida por ele: as aberturas não maiores que a dimensão mínima do método ficam incluídas, e fica excluído o que o método mede onde as paredes se encontram. A nota por baixo do artigo indica o método |
| Linear | `N` | Número de troços |
| Área | `A` | Área líquida total (contornos menos recortes) |
| Área | `P` | Perímetro total, incluindo as arestas dos recortes |
| Área | `H` | A profundidade ou espessura do artigo |
| Área | `N` | Número de áreas |
| Contagem | `N` | A contagem |

- As variáveis estão nas unidades do artigo: veja [Unidades](topic:units).
- Maiúsculas e minúsculas são iguais: `l` é `L`.
- Só funcionam as variáveis do tipo do próprio artigo. `P` num artigo linear dá `"P" não é um valor medido aqui. Use L, H, A, N.`
- Uma altura ou profundidade vazia é 0.

## Operadores

| Escreva | Significado |
|---|---|
| `+` | Somar |
| `-` ou `−` | Subtrair, ou um valor negativo |
| `*` ou `×` | Multiplicar |
| `/` ou `÷` | Dividir |
| `( )` | Agrupar |

A multiplicação e a divisão são feitas antes da adição e da subtração: `L * 2 + 4` é (L × 2) + 4. Use parênteses em caso de dúvida.

Os números podem ter decimais (`1.333`, `.5`) e expoentes (`1e3` = 1000). Os espaços são ignorados.

## Funções

| Função | Resultado | Exemplo |
|---|---|---|
| `ceil(x)` | Arredonda por excesso para um número inteiro | `ceil(67.5)` = 68 |
| `floor(x)` | Arredonda por defeito para um número inteiro | `floor(67.5)` = 67 |
| `round(x)` | Arredonda para o inteiro mais próximo, metade para longe de zero | `round(2.5)` = 3 |
| `round(x, d)` | Arredonda para d casas decimais (0 a 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | O menor valor | `min(N, 10)` |
| `max(a, b, …)` | O maior valor | `max(1, ceil(N / 12))` |
| `abs(x)` | O valor sem o sinal | `abs(-3)` = 3 |

`ceil` e `floor` ignoram pequenos erros de arredondamento do computador, por isso um valor que deve ser exatamente 1 nunca é arredondado para 2.

## Erros

Uma fórmula que não pode ser lida ou calculada mostra o seu erro por baixo do campo, e o componente fica excluído dos totais (o cabeçalho {{ui:Quantidades}} diz "Incompleto"). Mensagens:

| Mensagem | Correção |
|---|---|
| Escreva uma fórmula, por exemplo L ou ceil(L / 1.333) + 1. | A fórmula está vazia. |
| "X" não é um valor medido aqui. Use … | Use uma das variáveis indicadas. |
| "X" não é uma função aqui. Use ceil, floor, round, min, max, abs. | Use uma dessas funções. |
| "#" não é permitido numa fórmula. | Remova esse carácter (unidades, `%`, `$` e `=` não são permitidos). |
| Falta um ")" / Há um ")" sem o seu "(". | Equilibre os parênteses. |
| Falta um valor antes de ")". | Algo como `max(1, )`: preencha o valor. |
| A fórmula termina demasiado cedo. | Algo como `L *`: complete-a. |
| "…" inesperado. Falta um operador? | Dois valores lado a lado, como `2L`: escreva `2 * L`. |
| ceil() aceita 1 valor. | Dê à função o número certo de valores. |
| round(x, digits) precisa de um número inteiro de casas decimais de 0 a 10. | Use um número inteiro de casas decimais. |
| A fórmula divide por zero. | Normalmente H é 0: defina a altura ou a profundidade do artigo. |
| A fórmula não dá um número. | O resultado é demasiado grande para ser um número. |
| Essa fórmula é demasiado longa (no máximo 500 caracteres). | Encurte-a. |

## Seguro por conceção

Uma fórmula só pode fazer aritmética com as variáveis e funções acima. Não pode executar código nem ler outra coisa, por isso uma fórmula num ficheiro de projeto que alguém lhe envie é inofensiva.
