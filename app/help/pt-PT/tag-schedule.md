---
title: Importar um mapa de etiquetas como quantidades
summary: Um mapa de etiquetas exportado do modelo do edifício (CSV) torna-se quantidades tipificadas na medição, uma por etiqueta, para que as contagens e áreas do modelo fiquem ao lado do que mediu.
keywords: etiquetas, mapa de etiquetas, modelo do edifício, bimcraft, ifc, quantidades, csv, mapa, importar, quantidade tipificada
from: a60c19b6
---

{{ui:Etiquetas}} na barra de ferramentas importa um mapa de etiquetas que o BimCraft guardou como ficheiro CSV. Cada etiqueta distinta torna-se uma quantidade tipificada, do mesmo tipo a que se convertem a escavação e o aterro do CivilCraft.

1. No BimCraft, crie o mapa de etiquetas pretendido e guarde-o como CSV.
2. Escolha {{ui:Etiquetas}} e selecione o ficheiro.
3. Indique a coluna que dá nome à linha ({{ui:Dar nome à linha por}}, normalmente a etiqueta) e a que contém o número ({{ui:Quantidade de}}). Com {{ui:Contar as linhas}}, cada linha conta como uma.
4. Escolha a unidade. Um comprimento em milímetros passa a metros com {{ui:Multiplicar por}} 0.001.
5. {{ui:Adicionar as quantidades}}.

As linhas com a mesma etiqueta são somadas. Uma célula que não seja um número fica de fora e é contada no resumo. Importar o mesmo mapa outra vez atualiza as quantidades que já existem, em vez de acrescentar mais; os respetivos nomes, preços e desperdício mantêm-se como estão.

## Bom saber

Uma quantidade tipificada não é medida numa folha, por isso não tem marcas. Nada é enviado para lado nenhum; o ficheiro é lido aqui.
