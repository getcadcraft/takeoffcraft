---
title: Colunas de exportação
summary: Cada planilha e coluna da exportação XLSX e do CSV, com as fórmulas que a planilha Orçamento contém.
keywords: exportação, colunas, xlsx, csv, planilha, orçamento, por folha, marcas, escalas, fórmulas, campos
from: fed07851
---

## Orçamento (planilha XLSX e CSV)

Uma linha por item, seguida de uma linha por componente da sua composição (recuado). Depois, uma linha vazia e o total da obra.

| Coluna | Conteúdo | No XLSX |
|---|---|---|
| A Item | Nome do item (em negrito) ou nome do componente (recuado) | Texto |
| B Tipo | Linear, Área, Contagem ou Componente | Texto |
| C Unidade | LF, m, SF, SY, m², EA, ou a unidade do componente | Texto |
| D Quantidade | Total medido, ou resultado da fórmula | Número |
| E Perda % | Perda | Percentual (0.10 = 10%) |
| F Qtd. com perda | Quantidade × (1 + perda) | Fórmula `D*(1+E)` |
| G Material por unidade | Preço unitário de material | Número |
| H Mão de obra por unidade | Preço unitário de mão de obra | Número |
| I Material | Material estendido | Fórmula `ROUND(F*G,2)` |
| J Mão de obra | Mão de obra estendida | Fórmula `ROUND(F*H,2)` |
| K Total | Material + mão de obra | Fórmula `I+J` |
| L Notas | Fórmula usada, erro de fórmula, marcas em folhas sem escala, área de parede, perímetro | Texto |

Linha de total da obra: `SUM` das colunas I, J e K de todas as linhas acima, e "Incompleto: veja as notas acima" em Notas quando algo ficou de fora.

Uma linha com erro de fórmula não tem quantidade nem valores; a nota dela informa o erro. A linha de cabeçalho fica congelada.

No CSV, as mesmas colunas trazem valores simples: Perda % é um número de percentual (10 para 10%), e os valores monetários estão em dólares com duas casas decimais. Textos que uma planilha poderia tomar por fórmula (começando com `=`, `+`, `-` ou `@`) recebem um `'` no início, para continuarem sendo texto.

## Por folha (somente XLSX)

| Coluna | Conteúdo |
|---|---|
| Folha | Nome da folha (com o nome do PDF quando ele não está aberto) |
| Item | Nome do item |
| Quantidade | A quantidade desse item na folha, na sua unidade |
| Unidade | A unidade do item |
| Marcas | Número de marcas |

## Marcas (somente XLSX)

Uma linha por marca.

| Coluna | Conteúdo |
|---|---|
| Folha | Nome da folha |
| Item | Nome do item |
| Tipo | Linear, Área ou Contagem |
| Quantidade | Comprimento, área líquida ou 1 |
| Unidade | LF ou m; SF, SY ou m²; EA |
| Detalhe | Linear: os comprimentos dos segmentos, os descontados marcados "(deduzido)", e "desconta (comprimento) de (comprimento) desenhado". Área: áreas brutas e de recortes quando há recortes, e o perímetro. "Folha sem escala" para marcas sem escala. |
| Área da proposta | Somente quando o levantamento tem áreas de proposta: a área da marca, ou "Sem área da proposta" |

## Por área da proposta (somente XLSX, quando o levantamento tem áreas de proposta)

| Coluna | O que é |
|---|---|
| Área da proposta | O nome da área, ou "Sem área da proposta" |
| Item | O item, ou um componente recuado sob ele |
| Unidade | A unidade do item ou do componente |
| Quantidade | Medida nessa área (componentes: a fórmula sobre os totais da área) |
| Qtd. com perda | Quantidade × (1 + perda) |
| Material, Mão de obra, Total | Estendidos até o centavo, como em Orçamento |
| Notas | Fórmula, erros e marcas sem escala, como em Orçamento |

Cada área termina com uma linha "(nome) subtotal", cujos custos são fórmulas `SUM` sobre as suas linhas; a última linha, **Todas as áreas da proposta**, soma os subtotais. A planilha **Marcas** então tem uma sétima coluna, **Área da proposta**.

## Escalas (somente XLSX)

Uma linha por folha que tem escala ou marcas.

| Coluna | Conteúdo |
|---|---|
| Folha | Nome da folha |
| Escala | O nome da predefinição, ou a escala calibrada, ou "Sem escala" |
| Como | "Predefinida", ou "Calibrada em (a distância que você digitou)" |
| Pés por unidade do PDF | O fator de escala exato que o TakeoffCraft usa |

## Nomes de arquivos

- `(nome).xlsx` e `(nome).csv`, onde o nome vem do primeiro PDF aberto no levantamento.
- O CSV é UTF-8 com marca de ordem de bytes e quebras de linha do Windows, que os programas de planilha de todas as plataformas leem.
