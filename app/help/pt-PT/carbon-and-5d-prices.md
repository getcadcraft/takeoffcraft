---
title: Carbono incorporado e tabela de preços 5D
summary: O carbono soma o carbono incorporado da medição a partir da quantidade de cada artigo e de uma tabela aberta de fatores, e envia as taxas da medição para o BimCraft como tabela de preços para custos 5D.
keywords: carbono, carbono incorporado, kgco2e, co2, fatores, a1-a3, transporte, desperdício, 5d, tabela de preços, custo, bimcraft, epd
from: f4bff3b8
---

{{ui:Carbono}} na barra de ferramentas soma o carbono incorporado do que mediu, e transforma as suas taxas numa tabela de preços que o modelo do edifício pode usar. É uma estimativa, não uma avaliação.

## Carbono incorporado

A quantidade de cada artigo, com o seu desperdício, é multiplicada por uma linha da tabela de fatores. Uma linha é associada pelas palavras do nome do artigo ("laje de betão" encontra uma linha com a palavra-chave betão). A tabela é a mesma tabela aberta que o BimCraft usa, por isso um ficheiro carregado aqui funciona também lá. **As linhas que vêm com o programa são valores iniciais: genéricos, não verificados e não provenientes de nenhuma base de dados.** A caixa de diálogo indica-o junto aos valores; substitua-os pela sua própria fonte antes de confiar num número.

1. Escolha {{ui:Carbono}}. Os artigos contados são listados com os seus quilogramas de CO2e; o total está acima.
2. Marque {{ui:A4 transporte}} ou {{ui:A5 desperdício em obra}} para contar também essas etapas, nas linhas que dão um valor para elas. A etapa de produto é sempre contada.
3. Para usar outra linha num artigo, ou nenhuma, use a lista na sua linha.
4. {{ui:Fatores de um ficheiro…}} carrega uma tabela de fatores (JSON ou CSV) feita a partir da sua própria fonte; as suas linhas substituem as linhas iniciais com o mesmo id. {{ui:Fatores (JSON)}} guarda os seus.

Um fator é por metro, metro quadrado, metro cúbico, artigo ou quilograma. Uma linha medida em pés ou pés quadrados é convertida. Um fator em quilogramas precisa de um volume (jardas cúbicas ou metros) e da densidade da linha. Um artigo cujo fator precisa de uma quantidade que não mede é listado em {{ui:Deixado de fora}} com o motivo, nunca estimado. O total corrente na barra de estado mostra o mesmo valor.

As suas linhas de fatores, as suas escolhas e as etapas que conta ficam guardadas no ficheiro da medição.

## Tabela de preços para custos 5D

{{ui:Preços 5D (JSON)}} e {{ui:Preços 5D (CSV)}} guardam as taxas da medição como uma tabela de preços: uma linha por artigo preçado, com a taxa de material e de mão de obra por unidade e o respetivo desperdício. Carregue-a no painel de custos do BimCraft (Carbono incorporado e custo 5D) para preçar as tarefas do modelo do edifício com as mesmas taxas que deram origem à proposta. Os artigos medidos numa unidade que a tabela não tem, e os artigos sem taxa, ficam de fora.

## Com o seu assistente

Se permitir assistentes nas Definições, eles podem ler o carbono (carbon_check). Carregar os fatores fica a seu cargo.

## Bom saber

Nada é enviado para lado nenhum. Os valores só são tão bons como os fatores que carregar.
