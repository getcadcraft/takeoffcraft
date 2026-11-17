---
title: Linguaxe de fórmulas
summary: As regras para as fórmulas de cantidade dos conxuntos: variables, operadores, funcións, redondeo e todas as mensaxes de erro.
keywords: fórmula, expresión, sintaxe, funcións, ceil, floor, round, min, max, abs, variables, operadores, cálculo
from: 4da14575
---

Os compoñentes dos conxuntos obteñen a súa cantidade dunha fórmula. Unha fórmula é unha pequena expresión aritmética sobre os valores medidos do elemento. Consulte [Conxuntos e fórmulas](topic:assemblies) para ver exemplos resoltos.

## Variables

| Tipo de elemento | Variable | Significado |
|---|---|---|
| Lineal | `L` | Lonxitude total |
| Lineal | `H` | A altura do elemento |
| Lineal | `A` | Superficie de parede, L × H, descontando os buratos dos tramos que os levan (unha medición de BimCraft). Cando esa medición indica un método de medición, `A` mídese con el: os buratos non maiores que o tamaño mínimo do método quedan dentro, e o que o método descontar onde se xuntan as paredes queda fóra. A nota debaixo do elemento indica o método |
| Lineal | `N` | Número de tramos |
| Superficie | `A` | Superficie neta total (contornos menos recortes) |
| Superficie | `P` | Perímetro total, incluídas as bordas dos recortes |
| Superficie | `H` | A profundidade ou o espesor do elemento |
| Superficie | `N` | Número de superficies |
| Contar | `N` | O número contado |

- As variables están nas unidades do elemento: consulte [Unidades](topic:units).
- Maiúsculas e minúsculas son iguais: `l` é `L`.
- Só funcionan as variables do tipo do propio elemento. `P` nun elemento lineal dá `"P" non é un valor medido aquí. Use L, H, A, N.`
- Unha altura ou profundidade baleira vale 0.

## Operadores

| Escriba | Significado |
|---|---|
| `+` | Sumar |
| `-` ou `−` | Restar, ou un valor negativo |
| `*` ou `×` | Multiplicar |
| `/` ou `÷` | Dividir |
| `( )` | Agrupar |

Multiplicar e dividir fanse antes que sumar e restar: `L * 2 + 4` é (L × 2) + 4. Use parénteses cando teña dúbidas.

Os números poden ter decimais (`1.333`, `.5`) e expoñentes (`1e3` = 1000). Os espazos ignóranse.

## Funcións

| Función | Resultado | Exemplo |
|---|---|---|
| `ceil(x)` | Redondea cara arriba ata un número enteiro | `ceil(67.5)` = 68 |
| `floor(x)` | Redondea cara abaixo ata un número enteiro | `floor(67.5)` = 67 |
| `round(x)` | Redondea ao enteiro máis próximo; os empates, cara a fóra desde cero | `round(2.5)` = 3 |
| `round(x, d)` | Redondea a d decimais (de 0 a 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | O valor menor | `min(N, 10)` |
| `max(a, b, …)` | O valor maior | `max(1, ceil(N / 12))` |
| `abs(x)` | O valor sen o seu signo | `abs(-3)` = 3 |

`ceil` e `floor` ignoran o ruído mínimo de redondeo do ordenador, así que un valor que debe ser exactamente 1 nunca se redondea a 2.

## Erros

Unha fórmula que non se pode ler nin calcular mostra o seu erro debaixo do campo, e o compoñente queda fóra dos totais (a cabeceira {{ui:Cantidades}} indica «Incompleto»). Mensaxes:

| Mensaxe | Solución |
|---|---|
| "Escriba unha fórmula, como L ou ceil(L / 1.333) + 1." | A fórmula está baleira. |
| "X" non é un valor medido aquí. Use … | Use unha das variables indicadas. |
| "X" non é unha función aquí. Use ceil, floor, round, min, max, abs. | Use unha desas funcións. |
| "#" non se permite nunha fórmula. | Elimine ese carácter (non se permiten unidades, `%`, `$` nin `=`). |
| Falta un ")". / Hai un ")" sen o seu "(". | Equilibre os parénteses. |
| Falta un valor antes de ")". | Algo como `max(1, )`: escriba o valor. |
| A fórmula remata demasiado pronto. | Algo como `L *`: complete a fórmula. |
| "…" inesperado. Falta un operador? | Dous valores xuntos, como `2L`: escriba `2 * L`. |
| ceil() admite 1 valor. | Dé á función o número correcto de valores. |
| round(x, digits) necesita cifras enteiras de 0 a 10. | Use un número enteiro de decimais. |
| A fórmula divide por cero. | Normalmente H é 0: estableza a altura ou a profundidade do elemento. |
| A fórmula non dá un número. | O resultado é demasiado grande para ser un número. |
| Esa fórmula é demasiado longa (500 caracteres como máximo). | Acórtea. |

## Seguro por deseño

Unha fórmula só pode facer aritmética coas variables e funcións anteriores. Non pode executar código nin ler outra cousa, así que unha fórmula nun ficheiro de proxecto que alguén lle envíe é inofensiva.
