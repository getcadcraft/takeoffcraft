---
title: Unidades
summary: As unidades em que um artigo pode reportar, as unidades usadas pelas variáveis das fórmulas e a forma como o imperial e o métrico se misturam.
keywords: unidades, lf, sf, sy, sq, jardas quadradas, quadrados de cobertura, acres, hectares, metros, metros quadrados, ea, cada, métrico, imperial, conversão, unidade predefinida
from: b7bf0528
---

## Unidades dos artigos

| Tipo de artigo | Unidade | Nome |
|---|---|---|
| Linear | LF | pés lineares (predefinida) |
| Linear | m | metros |
| Área | SF | pés quadrados (predefinida) |
| Área | SY | jardas quadradas |
| Área | SQ | quadrados de cobertura (100 pés quadrados) |
| Área | ac | acres |
| Área | m² | metros quadrados |
| Área | ha | hectares |
| Contagem | EA | cada |

Altere-a com {{ui:Unidade}} no editor de artigos a qualquer momento, mesmo depois de medir; a quantidade é convertida de imediato.

A lista {{ui:Unidade}} mostra as unidades ativadas em {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}}, e sempre a unidade própria do artigo. Um artigo novo começa na unidade de comprimento ou de área assinalada com asterisco, quando esta é uma das unidades do artigo; caso contrário, começa em LF ou SF. Veja [Unidades, valores escritos e as listas de unidades](common:unit-lists).

## Unidades das variáveis de fórmula

| Unidade do artigo | L, P, H | A |
|---|---|---|
| LF | pés | pés quadrados (área de parede) |
| m | metros | metros quadrados (área de parede) |
| SF | pés | pés quadrados |
| SY | pés | jardas quadradas |
| SQ | pés | quadrados |
| ac | pés | acres |
| m² | metros | metros quadrados |
| ha | metros | hectares |

Nos artigos SY, `A` está em jardas quadradas, enquanto `P` e `H` continuam em pés. Um volume de um artigo SY é `A * 9 * H / 27` jardas cúbicas; usar SF para lajes é mais simples.

## Onde as unidades são fixas

Algumas leituras usam sempre pés:

- a leitura em tempo real na barra de estado ao desenhar (pés e polegadas, SF),
- **Marca selecionada** (pés e polegadas, LF e SF),
- o resultado da verificação (pés e polegadas, com pés decimais e metros),
- os comprimentos dos segmentos e os perímetros na folha de cálculo, na folha Marcas (pés e polegadas).

Os totais dos artigos, a tabela {{ui:Quantidades}}, as fórmulas e a folha Orçamento usam a unidade própria do artigo.

## Escalas e unidades são independentes

A escala de uma folha indica o tamanho do desenho; a unidade de um artigo indica como o reportar. Um desenho métrico a `1:100` pode ser medido em LF, e um desenho imperial em m². A calibração aceita qualquer unidade: `24'-6"`, `7.5 m`, `7500 mm`.

## Precisão

O TakeoffCraft mede com exatidão a partir dos pontos onde clica, incluindo os comprimentos e áreas reais dos arcos, e não arredonda as quantidades. A apresentação arredonda os comprimentos a 1/16 de polegada e os decimais a duas casas. O dinheiro só é arredondado nos valores por linha, ao cêntimo.
