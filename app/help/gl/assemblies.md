---
title: Conxuntos e fórmulas
summary: Engada compoñentes a un elemento e deixe que as fórmulas convirtan a súa lonxitude, superficie ou cantidade en montantes, placas, follas de taboleiro, formigón e ferraxe, cun exemplo traballado dun muro.
keywords: conxunto, compoñentes, fórmula, montantes, pladur, follas, placas, formigón, iardas cúbicas, ferraxe, receita, típico, partes do elemento
from: 12891a21
---

O **conxunto** dun elemento é unha lista de compoñentes, cada un cunha fórmula de cantidade e as súas propias merma e tarifas. A fórmula usa os totais medidos do elemento, así que unha medición dun muro dá montantes, placas e taboleiro á vez, e actualízanse ao medir.

## Variables que pode usar

| Tipo de elemento | Variables |
|---|---|
| Lineal | `L` lonxitude, `H` altura, `A` superficie do muro (L × H), `N` número de tramos |
| Superficie | `A` superficie, `P` perímetro (contorno + recortes), `H` profundidade ou grosor, `N` número de superficies |
| Contaxe | `N` contaxe |

Os valores están nas unidades do propio elemento: pés e pés cadrados para os elementos LF e SF, metros e metros cadrados para os elementos m e m². Para un elemento SY, `A` está en iardas cadradas, mentres que `P` e `H` seguen en pés.

As fórmulas usan `+ - * /` (ou × ÷), parénteses, números e as funcións `ceil`, `floor`, `round`, `min`, `max` e `abs`. As regras completas están en [Linguaxe das fórmulas](topic:formulas).

## Exemplo traballado: un muro interior

Supoña que medeu **Muro interior tipo A** como elemento lineal: 4 tramos que suman 120 LF, con {{ui:Altura}} fixada en `9'-0"`. Os valores **Medidos** dan L = 120, N = 4, A = 1.080 (SF de muro, unha cara).

1. Seleccione o elemento en {{ui:Elementos}}.
2. En {{ui:Conxunto}}, escolla {{ui:Engadir compoñente}}.
   Aparece un compoñente chamado "Compoñente", coa fórmula `L` e o seu resultado debaixo.
3. Escriba `Montantes 16 in o.c.` en {{ui:Nome}} e `EA` en {{ui:Unidade}}.
4. En {{ui:Fórmula de cantidade}}, escriba `ceil(L * 12 / 16) + N`.
   O resultado actualízase ao escribir: "= 94 EA". Iso é un montante cada 16 polgadas ao longo de 120 pés (90), máis un extra para pechar cada un dos 4 tramos.
5. Escolla {{ui:Engadir compoñente}} de novo para as placas: nome `Placas, superior e inferior`, unidade `LF`, fórmula `L * 2`. Resultado: 240 LF.
6. Engada o taboleiro: nome `Placa de pladur 4x8, as dúas caras`, unidade `follas`, fórmula `ceil(A * 2 / 32)`. Resultado: 68 follas (2.160 SF de taboleiro ÷ 32 SF por folla = 67,5, redondeado cara arriba).
7. Complete a {{ui:Desperdicio %}}, {{ui:Material $}} e {{ui:Man de obra $}} de cada compoñente.
   Cada compoñente ten a súa propia fila debaixo do elemento en {{ui:Cantidades}}, con prezo como un elemento, e o {{ui:Total da obra}} inclúeo.

Se o custo do muro está todo nos compoñentes, deixe en 0 as tarifas de material e de man de obra do propio elemento, ou contarase dúas veces.

:::tip
A merma aplícase despois da fórmula e non se redondea: 68 follas cun 10 % de merma son 74,8 follas. Para pedir follas enteiras, meta a merma dentro da fórmula, como `ceil(A * 2 / 32 * 1.1)`, e deixe a merma do compoñente en 0.
:::

## Máis fórmulas

| Para | Elemento | Fórmula |
|---|---|---|
| Montantes a 24 in entre eixos | Lineal | `ceil(L / 2) + N` |
| Mantas de illamento, SF | Lineal con altura | `A` |
| Pintura, as dúas caras, galóns a 350 SF | Lineal con altura | `ceil(A * 2 / 350)` |
| Caixas de azulexo a 15 SF, 10 % extra | Superficie | `ceil(A * 1.1 / 15)` |
| Rodapé ou perfil de bordo, LF | Superficie | `P` |
| Formigón, iardas cúbicas | Superficie con profundidade | `A * H / 27` |
| Formigón redondeado cara arriba a un cuarto de iarda | Superficie con profundidade | `ceil(A * H / 27 * 4) / 4` |
| Bisagras, tres por porta | Contaxe | `N * 3` |
| Polo menos unha caixa, unha por cada 12 | Contaxe | `max(1, ceil(N / 12))` |

## Cando unha fórmula está mal

A liña debaixo da fórmula convértese nunha mensaxe de erro, por exemplo `"X" non é un valor medido aquí. Use L, H, A, N.` ou `Falta un ")".`. O compoñente entón non ten importes, a súa fila en {{ui:Cantidades}} mostra "Erro de fórmula: …", e a cabeceira di "Incompleto: 1 erro de fórmula (non está nos totais)". Corrixa a fórmula e os totais actualízanse.

Unha fórmula que divide por cero tamén é un erro ("A fórmula divide por cero."), por exemplo `A / H` nun elemento sen profundidade.

## Límites

- As fórmulas funcionan sobre os **totais** do elemento, non tramo a tramo. `ceil(L * 12 / 16) + N` engade un montante por tramo; aínda non hai redondeo por tramo.
- Unha fórmula só pode usar as variables do seu propio elemento, non as doutro.
- Ata 50 compoñentes por elemento, 500 caracteres por fórmula.

## Quitar un compoñente

Escolla {{ui:Quitar compoñente}} debaixo del. Pode desfacelo con {{key:Mod+Z}}.
