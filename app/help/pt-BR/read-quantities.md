---
title: Ler os quantitativos e o orçamento
summary: Use a tabela de Quantitativos por item e por folha, o total da obra, o destaque e o aviso de Incompleto.
keywords: quantitativos, totais, por item, por folha, total da obra, orçamento, resumo, relatório, destaque, incompleto, custos
from: 069d41f1
---

A tabela {{ui:Quantitativos}} na parte inferior da janela é o seu orçamento em tempo real. Ela muda no momento em que você desenha, exclui, muda a escala ou edita um preço unitário. Os quantitativos nunca são armazenados; eles são medidos de novo a partir das marcações toda vez, então não podem ficar desatualizados.

## Por item

Escolha {{ui:Por item}} (o padrão). Cada item tem uma linha, e cada um dos seus componentes de composição tem uma linha abaixo dele.

| Coluna | Significado |
|---|---|
| Item | Nome, com a cor do item. "+(n) sem escala" indica que algumas marcações estão em folhas sem escala. |
| Quantidade | O total medido na unidade do item (componentes: o resultado da fórmula). |
| Unidade | LF, m, SF, SY, m², EA, ou a unidade do componente. |
| Perda % | Digitada aqui ou no editor do item. |
| Com perda | Quantidade × (1 + perda). |
| Material/unidade, Mão de obra/unidade | Preços unitários; você pode digitá-los aqui. |
| Material, Mão de obra | Com perda × preço unitário, arredondado ao centavo. |
| Total | Material + mão de obra. |

A última linha, **Total da obra**, soma as colunas de material, mão de obra e total. O mesmo total aparece à direita do cabeçalho da tabela.

Digite em uma célula de perda ou de preço unitário e pressione {{key:Enter}} ou clique fora dela para aplicar. Um valor que o TakeoffCraft não consegue ler fica com contorno vermelho, e a barra de status informa o motivo, por exemplo "Digite um valor como 12.50."

Clique na linha de um item para destacar as suas marcações em todas as folhas e ir para uma folha que as tenha (igual a clicar nele em {{ui:Itens}}).

## Por folha

Escolha {{ui:Por folha}} para ver o quantitativo de cada item em cada folha, com o número de marcações. Clique em uma linha para abrir essa folha com o item destacado. Use isso para conferir se todas as folhas foram levantadas, ou para separar os quantitativos por pavimento ou área de trabalho.

## Por área

Quando o levantamento tem áreas da proposta, {{ui:Por área}} lista os itens de cada área e um subtotal. Veja [Áreas da proposta](topic:bid-areas).

## O aviso de Incompleto

Quando algo fica fora dos totais, o cabeçalho mostra um aviso, por exemplo:

"Incompleto: 1 erro de fórmula, 6 marcações em folhas sem escala (fora dos totais)"

- **Erros de fórmula**: a fórmula de um componente de composição não pode ser calculada. A linha dele diz "Erro de fórmula: …". Veja [Composições e fórmulas](topic:assemblies#when-a-formula-is-wrong).
- **Marcações em folhas sem escala**: dê uma escala a essas folhas. Veja [Definir a escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

As mesmas observações vão para a planilha exportada, então um orçamento incompleto nunca parece completo.

## Destacar um item

Clique em um item em {{ui:Itens}} ou na tabela. As suas marcações continuam em plena intensidade em todas as folhas, e o restante fica esmaecido. A lista de folhas mostra "(n) destacadas" em cada folha com marcações. Clique no item de novo para parar de destacar.

## Totais dos itens no painel lateral

Cada item na lista {{ui:Itens}} também mostra o seu quantitativo. O bloco **Medido** do editor do item mostra os valores que as suas fórmulas usam: comprimento, trechos e área de parede; área, perímetro e número de áreas; ou contagem.

## Marcações em PDFs que não estão abertos

Um levantamento pode incluir marcações em PDFs que você não abriu desta vez. Elas continuam contando em todos os totais; a lista de folhas informa o nome desses PDFs. Veja [Salvar e reabrir um levantamento](topic:save-and-reopen).

## Mais espaço

A seta à direita do cabeçalho de {{ui:Quantitativos}} oculta a tabela para dar mais espaço à folha. Clique nela de novo para trazer a tabela de volta.
