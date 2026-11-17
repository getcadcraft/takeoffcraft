---
title: Colunas de exportação
summary: Todas as folhas e colunas da exportação XLSX e do CSV, com as fórmulas que a folha Orçamento contém.
keywords: exportação, colunas, xlsx, csv, folha de cálculo, folha de orçamento, por folha, marcas, escalas, fórmulas, campos
from: fed07851
---

## Orçamento (folha XLSX e CSV)

Uma linha por artigo, seguida de uma linha por componente do seu preço composto (com recuo). Depois, uma linha vazia e o total da obra.

| Coluna | Conteúdo | No XLSX |
|---|---|---|
| A Artigo | Nome do artigo (a negrito) ou nome do componente (com recuo) | Texto |
| B Tipo | Linear, Área, Contagem ou Componente | Texto |
| C Unidade | LF, m, SF, SY, m², EA, ou a unidade do componente | Texto |
| D Quantidade | Total medido, ou resultado da fórmula | Número |
| E Desperdício % | Desperdício | Percentagem (0.10 = 10%) |
| F Quantidade com desperdício | Quantidade × (1 + desperdício) | Fórmula `D*(1+E)` |
| G Material por unidade | Preço do material | Número |
| H Mão de obra por unidade | Preço da mão de obra | Número |
| I Material | Valor do material | Fórmula `ROUND(F*G,2)` |
| J Mão de obra | Valor da mão de obra | Fórmula `ROUND(F*H,2)` |
| K Total | Material + mão de obra | Fórmula `I+J` |
| L Notas | Fórmula usada, erro de fórmula, marcas em folhas sem escala, área de parede, perímetro | Texto |

Linha do total da obra: `SUM` das colunas I, J e K em todas as linhas acima, e "Incompleto: veja as notas acima" em Notas quando algo tiver sido omitido.

Uma linha com erro de fórmula não tem quantidade nem valores; a nota indica o erro. A linha de cabeçalho fica fixa.

No CSV, as mesmas colunas contêm valores simples, o Desperdício % é um número de percentagem (10 para 10%), e os valores monetários estão em dólares com duas casas decimais. O texto que uma folha de cálculo possa tomar por fórmula (a começar por `=`, `+`, `-` ou `@`) recebe um `'` no início para continuar a ser texto.

## Por folha (apenas XLSX)

| Coluna | Conteúdo |
|---|---|
| Folha | Nome da folha (com o nome do PDF quando não está aberto) |
| Artigo | Nome do artigo |
| Quantidade | A quantidade desse artigo nessa folha, na sua unidade |
| Unidade | A unidade do artigo |
| Marcas | Número de marcas |

## Marcas (apenas XLSX)

Uma linha por marca.

| Coluna | Conteúdo |
|---|---|
| Folha | Nome da folha |
| Artigo | Nome do artigo |
| Tipo | Linear, Área ou Contagem |
| Quantidade | Comprimento, área líquida, ou 1 |
| Unidade | LF ou m; SF, SY ou m²; EA |
| Detalhe | Linear: os comprimentos dos segmentos, os deduzidos marcados "(deduzir)", e "deduz (comprimento) de (comprimento) desenhado". Área: áreas brutas e de recortes quando há recortes, e o perímetro. "Folha sem escala" para marcas sem escala. |
| Área de proposta | Só quando a medição tem áreas de proposta: a área da marca, ou "Sem área de proposta" |

## Por área de proposta (apenas XLSX, quando a medição tem áreas de proposta)

| Coluna | O que é |
|---|---|
| Área de proposta | O nome da área, ou "Sem área de proposta" |
| Artigo | O artigo, ou um componente com recuo por baixo dele |
| Unidade | A unidade do artigo ou do componente |
| Quantidade | Medida nessa área (componentes: a fórmula sobre os totais da área) |
| Quantidade com desperdício | Quantidade × (1 + desperdício) |
| Material, Mão de obra, Total | Calculados até ao cêntimo, como no Orçamento |
| Notas | Fórmula, erros e marcas sem escala, como no Orçamento |

Cada área termina com uma linha "subtotal (nome)" cujos custos são fórmulas `SUM` sobre as suas linhas; a última linha, **Todas as áreas de proposta**, soma os subtotais. A folha **Marcas** tem então uma sétima coluna, **Área de proposta**.

## Escalas (apenas XLSX)

Uma linha por folha que tenha escala ou marcas.

| Coluna | Conteúdo |
|---|---|
| Folha | Nome da folha |
| Escala | O nome da predefinição, ou a escala calibrada, ou "Sem escala" |
| Como | "Predefinição", ou "Calibrada em (a distância que introduziu)" |
| Pés por unidade do PDF | O fator de escala exato que o TakeoffCraft usa |

## Nomes de ficheiros

- `(name).xlsx` e `(name).csv`, em que o nome vem do primeiro PDF aberto na medição.
- O CSV é UTF-8 com marca de ordem dos bytes e finais de linha do Windows, que as folhas de cálculo lêem em todas as plataformas.
