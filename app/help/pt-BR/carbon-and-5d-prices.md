---
title: Carbono incorporado e uma tabela de preços 5D
summary: Carbono soma o carbono incorporado do levantamento a partir da quantidade de cada item e de uma tabela de fatores aberta, e envia as taxas do levantamento ao BimCraft como tabela de preços para custos 5D.
keywords: carbono, carbono incorporado, kgCO2e, CO2, fatores, A1-A3, transporte, perda, 5D, tabela de preços, custo, BimCraft, DAP
from: f4bff3b8
---

{{ui:Carbon}} na barra de ferramentas soma o carbono incorporado do que você mediu e transforma as suas taxas em uma tabela de preços que o modelo do edifício pode usar. É uma estimativa, não uma avaliação.

## Carbono incorporado

A quantidade de cada item, com a perda, é multiplicada por uma linha da tabela de fatores. Uma linha é encontrada pelas palavras do nome do item ("laje de concreto" encontra uma linha com a palavra-chave concreto). A tabela é a mesma tabela aberta que o BimCraft usa, então um arquivo que você carrega aqui funciona lá também. **As linhas que vêm com o programa são valores iniciais: genéricos, não verificados e não provenientes de nenhum banco de dados.** A caixa de diálogo informa isso ao lado dos números; substitua-os pela sua própria fonte antes de confiar em qualquer valor.

1. Escolha {{ui:Carbon}}. Os itens contados são listados com os quilogramas de CO2e; o total está acima.
2. Marque {{ui:A4 transport}} ou {{ui:A5 site waste}} para contar essas etapas também, nas linhas que informam um valor para elas. A etapa de produto é sempre contada.
3. Para usar outra linha em um item, ou nenhuma, use a lista na linha dele.
4. {{ui:Factors from a file…}} carrega uma tabela de fatores (JSON ou CSV) feita a partir da sua própria fonte; as linhas dela substituem as linhas iniciais com o mesmo id. {{ui:Factors (JSON)}} salva a sua.

Um fator é por metro, metro quadrado, metro cúbico, item ou quilograma. Uma linha medida em pés ou pés quadrados é convertida. Um fator em quilograma precisa de um volume (jardas cúbicas ou metros) e da densidade da linha. Um item cujo fator precisa de uma quantidade que ele não mede aparece em {{ui:Left out}} com o motivo, nunca é estimado. O total acumulado na barra de status mostra o mesmo valor.

As suas linhas de fatores, as suas escolhas e as etapas que você conta são salvas no arquivo do levantamento.

## Uma tabela de preços para custos 5D

{{ui:5D prices (JSON)}} e {{ui:5D prices (CSV)}} salvam as taxas do levantamento como uma tabela de preços: uma linha por item precificado, com a taxa de material e de mão de obra por unidade e a perda. Carregue-a no painel de custos do BimCraft (Carbono incorporado e custo 5D) para precificar as tarefas do modelo do edifício com as mesmas taxas que geraram a proposta. Itens medidos em uma unidade que a tabela não tem, e itens sem taxa, ficam de fora.

## Com o seu assistente

Se você permitir assistentes em Configurações, eles podem ler o carbono (carbon_check). Carregar fatores é tarefa sua.

## Bom saber

Nada é enviado a lugar nenhum. Os números valem apenas o que valem os fatores que você carregar.
