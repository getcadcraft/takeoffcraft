---
title: Ler as quantidades e o orçamento
summary: Usar a tabela de Quantidades por artigo e por folha, o total da obra, o realce e o aviso de Incompleto.
keywords: quantidades, totais, por artigo, por folha, total da obra, orçamento, resumo, relatório, realce, incompleto, custos
from: 069d41f1
---

A tabela {{ui:Quantities}} na parte inferior da janela é o seu orçamento em tempo real. Muda no momento em que desenha, apaga, altera a escala ou edita um preço unitário. As quantidades nunca são guardadas; são medidas de novo a partir das marcas em cada momento, por isso não podem ficar desatualizadas.

## Por artigo

Escolha {{ui:By item}} (a predefinição). Cada artigo tem uma linha, e cada componente do seu preço composto tem uma linha por baixo.

| Coluna | Significado |
|---|---|
| Item | Nome, com a cor do artigo. "+(n) sem escala" significa que algumas marcas estão em folhas sem escala. |
| Quantity | Total medido na unidade do artigo (componentes: resultado da fórmula). |
| Unit | LF, m, SF, SY, m², EA, ou a unidade do componente. |
| Waste % | Escrito aqui ou no editor do artigo. |
| With waste | Quantidade × (1 + desperdício). |
| Material/unit, Labor/unit | Preços unitários; pode escrevê-los aqui. |
| Material, Labor | Com desperdício × preço, arredondado ao cêntimo. |
| Total | Material + mão de obra. |

A última linha, **Total da obra**, soma as colunas de material, mão de obra e total. O mesmo total aparece à direita do cabeçalho da tabela.

Escreva numa célula de desperdício ou de preço e prima {{key:Enter}} ou clique fora dela para aplicar. Um valor que o TakeoffCraft não consegue ler fica com contorno vermelho e a barra de estado diz porquê, por exemplo «Escreva um valor como 12.50.»

Clique na linha de um artigo para realçar as suas marcas em todas as folhas e saltar para uma folha que as tenha (o mesmo que clicar nele em {{ui:Items}}).

## Por folha

Escolha {{ui:By sheet}} para ver a quantidade de cada artigo em cada folha, com o número de marcas. Clique numa linha para abrir essa folha com o artigo realçado. Use-a para verificar se todas as folhas foram medidas, ou para dividir as quantidades por piso ou por área de trabalho.

## Por área

Quando a medição tem áreas de proposta, {{ui:By area}} lista os artigos de cada área e um subtotal. Ver [Áreas da proposta](topic:bid-areas).

## O aviso de Incompleto

Quando algo fica de fora dos totais, o cabeçalho mostra um aviso, por exemplo:

«Incompleto: 1 erro de fórmula, 6 marcas em folhas sem escala (fora dos totais)»

- **Erros de fórmula**: a fórmula de um componente de preço composto não pode ser calculada. A sua linha diz «Erro de fórmula: …». Ver [Preços compostos e fórmulas](topic:assemblies#when-a-formula-is-wrong).
- **Marcas em folhas sem escala**: atribua uma escala a essas folhas. Ver [Definir a escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

As mesmas notas vão para a folha de cálculo exportada, por isso um orçamento incompleto nunca parece completo.

## Realçar um artigo

Clique num artigo em {{ui:Items}} ou na tabela. As suas marcas mantêm a intensidade total em todas as folhas e o resto fica esbatido. A lista de folhas mostra «(n) realçadas» em cada folha com marcas. Clique novamente no artigo para deixar de o realçar.

## Totais dos artigos no painel lateral

Cada artigo na lista {{ui:Items}} também mostra a sua quantidade. O bloco **Medido** do editor do artigo mostra os valores que as suas fórmulas usam: comprimento, troços e área de parede; área, perímetro e número de áreas; ou contagem.

## Marcas em PDF que não estão abertos

Uma medição pode incluir marcas em PDF que não abriu desta vez. Continuam a contar em todos os totais; a lista de folhas indica esses PDF. Ver [Guardar e reabrir uma medição](topic:save-and-reopen).

## Mais espaço

O botão com seta à direita do cabeçalho de {{ui:Quantities}} oculta a tabela para a folha ter mais espaço. Clique nele novamente para voltar a mostrar a tabela.
