---
title: Trazer uma tabela de etiquetas como quantitativos
summary: Uma tabela de etiquetas exportada do modelo do edifício (CSV) vira quantidades tipadas no levantamento, uma por etiqueta, para que as contagens e áreas do modelo fiquem ao lado do que você mediu.
keywords: etiquetas, tabela de etiquetas, modelo do edifício, bimcraft, ifc, quantitativos, csv, tabela, importação, quantidade tipada
from: a60c19b6
---

{{ui:Tags}} na barra de ferramentas importa uma tabela de etiquetas que o BimCraft salvou como arquivo CSV. Cada etiqueta distinta vira uma quantidade tipada, do mesmo tipo em que viram o corte e o aterro do CivilCraft.

1. No BimCraft, crie a tabela de etiquetas desejada e salve-a como CSV.
2. Escolha {{ui:Tags}} e selecione o arquivo.
3. Indique qual coluna dá nome à linha ({{ui:Nomear a linha por}}, normalmente a etiqueta) e qual traz o número ({{ui:Quantidade de}}). Com {{ui:Contar as linhas}}, cada linha conta como uma.
4. Escolha a unidade. Um comprimento em milímetros vira metros com {{ui:Multiplicar por}} 0.001.
5. {{ui:Adicionar as quantidades}}.

As linhas com a mesma etiqueta são somadas. Uma célula que não é número fica de fora e é contada no resumo. Importar a mesma tabela de novo atualiza os quantitativos que você já tem, em vez de adicionar mais; os nomes, preços unitários e perdas continuam sendo seus.

## Bom saber

Uma quantidade tipada não é medida em uma folha, então não tem marcações. Nada é enviado para lugar nenhum; o arquivo é lido aqui.
