---
title: Biblioteca de preços
summary: Mantenha seus itens, taxas e composições em uma biblioteca, importe-a de um CSV ou de um orçamento anterior, adicione itens dela a qualquer levantamento e atualize os preços de um levantamento a partir dela.
keywords: biblioteca, pacotes de serviço, lista de preços, tabela de preços, banco de custos, importar csv, taxas, composições, reutilizar, itens modelo, atualizar preços, repreçar
from: 37356c68
---

A **biblioteca de preços** guarda os itens que você usa trabalho após trabalho: o tipo, a unidade, a altura, a perda, as taxas de material e de mão de obra, e a composição deles. Ela fica guardada neste navegador, separada de qualquer levantamento, para que todo levantamento aberto aqui possa usá-la.

Abra-a com {{ui:Library}} no topo do painel {{ui:Items}}.

## Preencher a biblioteca

- {{ui:Import CSV…}} lê uma planilha salva como CSV (veja as colunas abaixo). Itens cujo nome e tipo já estão na biblioteca são substituídos; os demais são adicionados. Linhas que não consegue ler são ignoradas, e ele informa quais são e por quê.
- {{ui:Adicionar os itens deste levantamento}} copia para a biblioteca cada item do levantamento aberto, com suas taxas e composição (mas não com suas marcas).
- O CSV de orçamento que o TakeoffCraft exporta ([Exportar o orçamento](topic:export-estimate)) é importado como está: os preços do último trabalho servem de base para o próximo.

- {{ui:Trade packs…}} adiciona composições gratuitas para uma especialidade, como drywall, elétrica ou concreto, sem preços. Veja [Pacotes de serviço](topic:trade-packs).

{{ui:Export CSV}} salva a biblioteca como CSV, para manter uma cópia, editá-la em uma planilha ou enviá-la a um colega. {{ui:Clear}} a esvazia (clique duas vezes).

:::note
A biblioteca fica no armazenamento deste navegador. Outro navegador, outro computador ou uma janela privativa tem a sua própria (ou nenhuma). Exporte-a para movê-la.
:::

## Usar em um levantamento

- Marque os itens (digite em {{ui:Find in the library}} para reduzir a lista) e escolha {{ui:Add to takeoff}}. Eles são adicionados com as composições em um único passo, que {{key:Mod+Z}} desfaz. Um nome que já existe no levantamento recebe um número, como `Carpete (2)`.
- {{ui:Update prices}} dá aos itens do levantamento a perda e as taxas da biblioteca, para cada item cujo nome e tipo coincidem com um item da biblioteca, e o mesmo para os componentes de composição de mesmo nome. Alturas, unidades e fórmulas permanecem como estão. Um único {{key:Mod+Z}} devolve todos os preços antigos.

## As colunas do CSV

A primeira linha dá nome às colunas, em qualquer ordem; outras colunas são ignoradas.

| Coluna | O que vai nela |
|---|---|
| Item (ou Name) | O nome do item. Obrigatório. |
| Type | Linear, Area ou Count (LF, SF e EA também funcionam). Vazio, a unidade decide. |
| Unit | LF ou m; SF, SY ou m²; EA. Vazio: a unidade usual do tipo. |
| Waste % | `10` ou `10%`. |
| Material per unit, Labor per unit | Taxas como `2.10` ou `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, ou `2.7` para unidades métricas. |
| Component, Formula | Uma linha com um nome em Component (ou o Type `Component`) faz parte da composição do item acima dela. Sua Unit, Waste e taxas são próprias; sua Formula usa as letras do item. Veja [Composições e fórmulas](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Vírgulas, ponto e vírgula ou tabulações entre as colunas funcionam, todos.
