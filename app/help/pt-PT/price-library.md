---
title: Biblioteca de preços
summary: Mantenha os seus artigos, preços e preços compostos numa biblioteca, importe-a a partir de um CSV ou de um orçamento anterior, acrescente artigos dela a qualquer medição e atualize os preços de uma medição a partir dela.
keywords: biblioteca, pacotes da especialidade, lista de preços, catálogo de preços, base de custos, importar csv, preços unitários, preços compostos, reutilizar, artigos modelo, atualizar preços, recalcular
from: 37356c68
---

A **biblioteca de preços** guarda os artigos que usa obra após obra: o seu tipo, unidade, altura, desperdício, preços de material e de mão de obra, e o seu preço composto. Fica guardada neste navegador, à parte de qualquer medição, por isso cada medição que abrir aqui pode usá-la.

Abra-a com {{ui:Biblioteca}} no topo do painel {{ui:Artigos}}.

## Encher a biblioteca

- {{ui:Importar CSV…}} lê uma folha de cálculo guardada como CSV (ver as colunas abaixo). Os artigos cujo nome e tipo já estão na biblioteca são substituídos; os restantes são acrescentados. As linhas que não consegue ler são ignoradas, e indica quais e porquê.
- {{ui:Adicionar os artigos desta medição}} copia para a biblioteca cada artigo da medição aberta, com os seus preços e o seu preço composto (não as suas marcas).
- O CSV do orçamento que o TakeoffCraft exporta ([Exportar o orçamento](topic:export-estimate)) importa-se tal como está: os preços do último trabalho servem de base ao seguinte.

- {{ui:Pacotes da especialidade…}} acrescenta preços compostos gratuitos para uma especialidade, como gesso cartonado, eletricidade ou betão, sem preços. Ver [Pacotes da especialidade](topic:trade-packs).

{{ui:Exportar CSV}} guarda a biblioteca como CSV, para manter uma cópia, editá-la numa folha de cálculo ou entregá-la a um colega. {{ui:Limpar}} esvazia-a (clique duas vezes).

:::note
A biblioteca fica no armazenamento deste navegador. Outro navegador, outro computador ou uma janela privada têm a sua própria (ou nenhuma). Exporte-a para a mover.
:::

## Usar numa medição

- Marque os artigos (escreva em {{ui:Procurar na biblioteca}} para restringir a lista) e escolha {{ui:Adicionar à medição}}. São acrescentados com os seus preços compostos num só passo que {{key:Mod+Z}} anula. Um nome que já existe na medição recebe um número, como `Carpete (2)`.
- {{ui:Atualizar preços}} dá aos artigos da medição o desperdício e os preços da biblioteca, para cada artigo cujo nome e tipo coincidem com um artigo da biblioteca, e o mesmo para os componentes do preço composto com o mesmo nome. Alturas, unidades e fórmulas mantêm-se. Um {{key:Mod+Z}} repõe todos os preços antigos.

## As colunas do CSV

A primeira linha dá nome às colunas, por qualquer ordem; as outras colunas são ignoradas.

| Coluna | O que vai nela |
|---|---|
| Item (ou Name) | O nome do artigo. Obrigatório. |
| Type | Linear, Area ou Count (LF, SF e EA também funcionam). Se ficar vazio, a unidade decide. |
| Unit | LF ou m; SF, SY ou m²; EA. Vazio: a unidade habitual do tipo. |
| Waste % | `10` ou `10%`. |
| Material per unit, Labor per unit | Preços como `2.10` ou `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, ou `2.7` para unidades métricas. |
| Component, Formula | Uma linha com um nome em Component (ou o tipo `Component`) faz parte do preço composto do artigo acima. As suas unidades, desperdício e preços são próprios; a sua fórmula usa as letras do artigo, ver [Preços compostos e fórmulas](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Vírgulas, pontos e vírgulas ou tabulações entre colunas funcionam todas.
