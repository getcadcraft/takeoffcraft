---
title: Linguagem de fórmulas
summary: As regras para fórmulas de quantidade de composições - variáveis, operadores, funções, arredondamento e todas as mensagens de erro.
keywords: fórmula, expressão, sintaxe, funções, ceil, floor, round, min, max, abs, variáveis, operadores, cálculo
from: 4da14575
---

Os componentes de composição obtêm sua quantidade a partir de uma fórmula. Uma fórmula é uma pequena expressão aritmética sobre os valores medidos do item. Veja [Composições e fórmulas](topic:assemblies) para exemplos resolvidos.

## Variáveis

| Tipo de item | Variável | Significado |
|---|---|---|
| Linear | `L` | Comprimento total |
| Linear | `H` | A altura do item |
| Linear | `A` | Área de parede, L × H, menos as aberturas das linhas que as têm (um levantamento do BimCraft). Quando esse levantamento indica um método de medição, `A` é medida por ele: aberturas não maiores que o menor tamanho do método permanecem, e o que o método descontar onde as paredes se encontram fica de fora. A nota sob o item indica o método |
| Linear | `N` | Número de trechos |
| Área | `A` | Área líquida total (contornos menos recortes) |
| Área | `P` | Perímetro total, incluindo as bordas dos recortes |
| Área | `H` | A profundidade ou espessura do item |
| Área | `N` | Número de áreas |
| Contagem | `N` | A contagem |

- As variáveis estão nas unidades do item: veja [Unidades](topic:units).
- Maiúsculas e minúsculas são iguais: `l` é `L`.
- Só funcionam as variáveis do tipo do próprio item. `P` em um item linear dá `"P" não é um valor medido aqui. Use L, H, A, N.`
- Uma altura ou profundidade vazia é 0.

## Operadores

| Escreva | Significado |
|---|---|
| `+` | Somar |
| `-` ou `−` | Subtrair, ou um valor negativo |
| `*` ou `×` | Multiplicar |
| `/` ou `÷` | Dividir |
| `( )` | Agrupar |

Multiplicação e divisão vêm antes de soma e subtração: `L * 2 + 4` é (L × 2) + 4. Use parênteses na dúvida.

Números podem ter decimais (`1.333`, `.5`) e expoentes (`1e3` = 1000). Espaços são ignorados.

## Funções

| Função | Resultado | Exemplo |
|---|---|---|
| `ceil(x)` | Arredonda para cima, até um número inteiro | `ceil(67.5)` = 68 |
| `floor(x)` | Arredonda para baixo, até um número inteiro | `floor(67.5)` = 67 |
| `round(x)` | Arredonda para o inteiro mais próximo, metades para longe de zero | `round(2.5)` = 3 |
| `round(x, d)` | Arredonda para d casas decimais (0 a 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | O menor valor | `min(N, 10)` |
| `max(a, b, …)` | O maior valor | `max(1, ceil(N / 12))` |
| `abs(x)` | O valor sem o sinal | `abs(-3)` = 3 |

`ceil` e `floor` ignoram pequenos ruídos de arredondamento do computador, então um valor que deveria ser exatamente 1 nunca é arredondado para 2.

## Erros

Uma fórmula que não pode ser lida ou calculada mostra o seu erro sob o campo, e o componente fica fora dos totais (o cabeçalho de {{ui:Quantitativos}} diz "Incompleto"). Mensagens:

| Mensagem | Correção |
|---|---|
| Digite uma fórmula, como L ou ceil(L / 1.333) + 1. | A fórmula está vazia. |
| "X" não é um valor medido aqui. Use … | Use uma das variáveis listadas. |
| "X" não é uma função aqui. Use ceil, floor, round, min, max, abs. | Use uma dessas funções. |
| "#" não é permitido em uma fórmula. | Remova esse caractere (unidades, `%`, `$` e `=` não são permitidos). |
| Falta um ")" / Há um ")" sem o seu "(". | Equilibre os parênteses. |
| Falta um valor antes de ")". | Algo como `max(1, )`: preencha o valor. |
| A fórmula termina cedo demais. | Algo como `L *`: complete-a. |
| "…" inesperado. Falta um operador? | Dois valores lado a lado, como `2L`: escreva `2 * L`. |
| ceil() recebe 1 valor. | Dê à função o número certo de valores. |
| round(x, digits) precisa de casas decimais inteiras de 0 a 10. | Use um número inteiro de casas decimais. |
| A fórmula divide por zero. | Geralmente H é 0: defina a altura ou a profundidade do item. |
| A fórmula não dá um número. | O resultado é grande demais para ser um número. |
| Essa fórmula é longa demais (no máximo 500 caracteres). | Encurte-a. |

## Seguro por design

Uma fórmula só pode fazer aritmética com as variáveis e funções acima. Ela não pode executar código nem ler qualquer outra coisa, então uma fórmula em um arquivo de projeto que alguém lhe envie é inofensiva.
