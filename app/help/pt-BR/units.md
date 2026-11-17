---
title: Unidades
summary: As unidades em que um item pode informar, as unidades das variáveis de fórmula e como os sistemas imperial e métrico se misturam.
keywords: unidades, lf, sf, sy, sq, jardas quadradas, quadrados de cobertura, acres, hectares, metros, metros quadrados, ea, cada, métrico, imperial, conversão, unidade padrão
from: b7bf0528
---

## Unidades do item

| Tipo de item | Unidade | Nome |
|---|---|---|
| Linear | LF | pés lineares (padrão) |
| Linear | m | metros |
| Área | SF | pés quadrados (padrão) |
| Área | SY | jardas quadradas |
| Área | SQ | quadrados de cobertura (100 pés quadrados) |
| Área | ac | acres |
| Área | m² | metros quadrados |
| Área | ha | hectares |
| Contagem | EA | cada |

Altere-a com {{ui:Unidade}} no editor de itens a qualquer momento, mesmo depois de medir; a quantidade é convertida na hora.

A lista {{ui:Unidade}} mostra as unidades ativadas em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}}, e sempre a unidade própria do item. Um item novo começa na unidade de comprimento ou de área marcada ali com asterisco, quando ela for uma das unidades do item; caso contrário, começa em LF ou SF. Veja [Unidades, valores digitados e listas de unidades](common:unit-lists).

## Unidades das variáveis de fórmula

| Unidade do item | L, P, H | A |
|---|---|---|
| LF | pés | pés quadrados (área de parede) |
| m | metros | metros quadrados (área de parede) |
| SF | pés | pés quadrados |
| SY | pés | jardas quadradas |
| SQ | pés | squares |
| ac | pés | acres |
| m² | metros | metros quadrados |
| ha | metros | hectares |

Para itens em SY, `A` está em jardas quadradas, enquanto `P` e `H` continuam em pés. Um volume de um item em SY é `A * 9 * H / 27` jardas cúbicas; usar SF para lajes é mais simples.

## Onde as unidades são fixas

Algumas leituras sempre usam pés:

- a leitura ao vivo na barra de status enquanto desenha (pés e polegadas, SF),
- **Marcação selecionada** (pés e polegadas, LF e SF),
- o resultado da conferência (pés e polegadas, com pés decimais e metros),
- comprimentos de segmento e perímetros na aba Marcações da planilha (pés e polegadas).

Os totais dos itens, a tabela {{ui:Quantitativos}}, as fórmulas e a planilha Orçamento usam a unidade própria do item.

## Escalas e unidades são independentes

A escala de uma folha diz qual é o tamanho do desenho; a unidade de um item diz como informá-lo. Um desenho métrico em `1:100` pode ser levantado em LF, e um desenho imperial em m². Calibrar aceita qualquer unidade: `24'-6"`, `7.5 m`, `7500 mm`.

## Precisão

O TakeoffCraft mede com exatidão a partir dos pontos em que você clica, inclusive comprimentos e áreas reais de arcos, e não arredonda as quantidades. A exibição arredonda comprimentos para 1/16 de polegada e decimais para duas casas. Valores monetários são arredondados apenas nos valores totais de cada linha, até o centavo.
