---
title: Exportar o orçamento e um PDF marcado
summary: Baixe o orçamento como pasta de trabalho XLSX com fórmulas ativas ou como CSV, e cópias dos seus PDFs com o levantamento desenhado.
keywords: proposta, resumo da proposta, exportação, xlsx, planilha, pasta de trabalho, csv, pdf marcado, imprimir levantamento, relatório, compartilhar, enviar, legenda
from: 334f89c7
---

Exportações são downloads. Elas são feitas no seu computador a partir do levantamento e dos PDFs abertos; nada é enviado a lugar nenhum.

## O orçamento como planilha (XLSX)

1. Abra o menu {{ui:Exportar}} na barra de ferramentas e escolha {{ui:XLSX}}.
   Seu navegador baixa `(nome).xlsx`. A barra de status diz "Exportado (nome).xlsx (orçamento com fórmulas ativas, por folha, marcas, escalas)." e mostra um aviso quando o orçamento está incompleto.
2. Abra o arquivo no seu programa de planilhas.

A pasta de trabalho tem quatro planilhas, e os relatórios abaixo quando se aplicam:

| Planilha | O que contém |
|---|---|
| Orçamento | Uma linha por item e por componente: quantidade, perda, quantidade com perda, preços unitários, material, mão de obra, total, notas. O total da obra fica no fim. |
| Por folha | A quantidade de cada item em cada folha, com o número de marcas. |
| Marcas | Cada marca: folha, item, tipo, quantidade e detalhe (comprimentos dos segmentos, áreas brutas e de recortes, perímetro). |
| Escalas | Cada folha que tem escala ou marcas: sua escala, como foi definida (predefinida, ou calibrada em qual distância) e pés por unidade do PDF. |
| Resumo do levantamento | Quantidade, número CSI, marcas e folhas de cada item, sem preços. |
| {{ui:Lista de materiais}} | Cada peça da composição somada em todo o levantamento (a mesma peça usada por vários itens vira uma linha só), com perda e custo de material, e os itens que a usam. |
| Pedido de cotação | A lista de materiais para enviar a um fornecedor: quantidades com perda, uma coluna de preço unitário vazia, e extensões e um total que se preenchem conforme os preços são digitados. |
| Por divisão | Material, mão de obra e total por divisão CSI MasterFormat, quando os itens têm um {{ui:Número CSI}}. |

Com um [resumo da proposta](topic:bid-summary), a planilha Orçamento também termina com as suas margens (encargos sobre a mão de obra, impostos sobre vendas, despesas gerais, lucro, garantia e a proposta), como fórmulas ativas.

A planilha Orçamento mantém **fórmulas ativas**: quantidade com perda, os valores arredondados de material e de mão de obra, o total de cada linha e o total da obra. Programas de planilha recalculam essas fórmulas, então você pode alterar um preço unitário ou a perda na planilha e os totais acompanham. Os números que o TakeoffCraft calculou também ficam guardados nas células, e batem até o centavo.

A coluna de notas lista a fórmula de cada componente, erros de fórmula, marcas em folhas sem escala, área de parede e perímetro. Quando algo fica de fora, a linha de total da obra diz "Incompleto: veja as notas acima".

A pasta de trabalho foi verificada no LibreOffice Calc, que recalculou para os mesmos totais. Ela ainda não foi aberta no Excel. Os detalhes coluna por coluna estão em [Colunas de exportação](topic:export-columns).

## O orçamento como CSV

Abra o menu {{ui:Exportar}} e escolha {{ui:CSV}}. Você recebe `(nome).csv`: as mesmas linhas e colunas da planilha Orçamento, como valores simples (sem fórmulas), e o total da obra. Use-o para colar em outro sistema de orçamento ou de contabilidade.

O CSV tem apenas o orçamento; para quantidades por folha e a lista de marcas, use XLSX. {{ui:Lista de materiais}} no mesmo menu salva somente a lista de materiais como CSV, para pedidos.

## O orçamento no Google Sheets

Acima da tabela de Quantitativos, **Copiar para o Google Sheets** coloca o orçamento na sua área de transferência como texto separado por tabulações, com as mesmas linhas do CSV. Em uma planilha do Google, clique na célula A1 e cole. O TakeoffCraft não entra no Google e não envia nada para lá.

## Preços faltando e aprovação do orçamento

Uma linha com quantidade e sem preço unitário diz **Sem preço unitário** nas suas Notas, e a exportação conta essas linhas nos totais. Quando o orçamento foi aprovado, a exportação informa quem aprovou, quando e por qual total. Veja [Preços unitários faltando e aprovação do orçamento](topic:sign-off-the-estimate).

## Um PDF marcado

1. Abra os PDFs cujas marcas você quer desenhadas.
2. Abra o menu {{ui:Exportar}} e escolha {{ui:PDF marcado}}.
   "Gerando o PDF marcado…" aparece, depois seu navegador baixa um arquivo por PDF marcado, chamado `(nome do PDF) (takeoff).pdf`.

Na cópia:

- trechos são desenhados como linhas na cor do seu item,
- áreas são preenchidas levemente com um contorno sólido, e os recortes ficam abertos,
- contagens são pontos,
- cada página com marcas recebe uma pequena legenda no canto inferior esquerdo: a cor de cada item, seu nome e sua quantidade naquela página.

Seus PDFs originais não são alterados.

Notas:

- Somente PDFs abertos são gravados. Marcas em PDFs que não estão abertos permanecem nos totais, mas não são desenhadas; abra esses PDFs antes.
- Os nomes na legenda usam uma fonte padrão de PDF. Letras que ela não consegue exibir aparecem como "?".
- Um PDF com senha ou criptografado não pode ser copiado com marcas: "Este PDF tem senha ou é criptografado, então uma cópia marcada não pode ser gerada. O levantamento em si está bem; exporte a planilha."
- A primeira vez que {{ui:PDF marcado}} é usado em uma aba, ele carrega o gerador de PDF. Offline, ele só está disponível se a barra do aplicativo mostrar {{ui:Pronto para uso offline}}; veja [Trabalhando offline](common:offline).

:::chromium
Com vários PDFs marcados, Chrome e Edge podem perguntar uma vez se este site pode baixar vários arquivos. Escolha Permitir, ou você recebe apenas o primeiro arquivo.
:::

## Nada para exportar?

- {{ui:XLSX}} e {{ui:CSV}} precisam de pelo menos um item: "Nada para exportar ainda: crie um item e faça o levantamento dele."
- {{ui:PDF marcado}} precisa de marcas em um PDF aberto: "Ainda não há marcas nos PDFs abertos."

## Salve o levantamento também

Uma exportação é um relatório. Para continuar trabalhando no levantamento depois, escolha também {{ui:Salvar levantamento}}: veja [Salvar e reabrir um levantamento](topic:save-and-reopen).

Para adicionar despesas gerais, lucro, impostos e garantia e enviar uma proposta, veja [Resumo da proposta](topic:bid-summary).
