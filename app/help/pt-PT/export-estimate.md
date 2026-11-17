---
title: Exportar o orçamento e um PDF marcado
summary: Transfira o orçamento como livro XLSX com fórmulas ativas ou como CSV, e cópias dos seus PDF com a medição desenhada.
keywords: proposta, resumo da proposta, exportação, xlsx, folha de cálculo, livro, csv, pdf marcado, imprimir medição, relatório, partilhar, enviar, legenda
from: 334f89c7
---

As exportações são transferências. São feitas no seu computador a partir da medição e dos PDF abertos; nada é enviado para lado nenhum.

## O orçamento como folha de cálculo (XLSX)

1. Abra o menu {{ui:Exportar}} na barra de ferramentas e escolha {{ui:XLSX}}.
   O navegador transfere `(name).xlsx`. A barra de estado indica "Exportado (name).xlsx (orçamento com fórmulas ativas, por folha, marcas, escalas)." e acrescenta um aviso quando o orçamento está incompleto.
2. Abra-o na sua aplicação de folha de cálculo.

O livro tem quatro folhas, e os relatórios abaixo quando se aplicam:

| Folha | Conteúdo |
|---|---|
| Orçamento | Uma linha por artigo e por componente: quantidade, desperdício, quantidade com desperdício, preços, material, mão de obra, total, notas. O total da obra no fim. |
| Por folha | A quantidade de cada artigo em cada folha, com o número de marcas. |
| Marcas | Cada marca: folha, artigo, tipo, quantidade e detalhe (comprimentos dos segmentos, áreas brutas e de recortes, perímetro). |
| Escalas | Cada folha que tem escala ou marcas: a sua escala, a forma como foi definida (predefinição, ou calibrada em qual distância) e pés por unidade do PDF. |
| Resumo da medição | A quantidade de cada artigo, número CSI, marcas e folhas, sem preços. |
| Lista de materiais | Cada peça de preço composto somada em toda a medição (a mesma peça usada por vários artigos é uma linha), com desperdício e custo de material, e os artigos que a usam. |
| Pedido de cotação | A lista de materiais a enviar a um fornecedor: quantidades com desperdício, uma coluna de preço unitário vazia, e valores e total que se preenchem à medida que os preços forem introduzidos. |
| Por divisão | Material, mão de obra e total por divisão CSI MasterFormat, quando os artigos têm um {{ui:Número CSI}}. |

Com um [resumo da proposta](topic:bid-summary), a folha Orçamento termina também com as suas margens (encargos de mão de obra, IVA, despesas gerais, lucro, caução e a proposta), como fórmulas ativas.

A folha Orçamento mantém **fórmulas ativas**: quantidade com desperdício, os valores arredondados de material e mão de obra, o total de cada linha e o total da obra. As folhas de cálculo recalculam-nas, por isso pode alterar um preço ou o desperdício na folha de cálculo e os totais acompanham. Os números calculados pelo TakeoffCraft também ficam guardados nas células, e coincidem até ao cêntimo.

A coluna de notas indica a fórmula de cada componente, os erros de fórmula, as marcas em folhas sem escala, a área de parede e o perímetro. Quando algo fica de fora, a linha do total da obra indica "Incompleto: veja as notas acima".

O livro foi verificado no LibreOffice Calc, que o recalculou com os mesmos totais. Ainda não foi aberto no Excel. Os pormenores coluna a coluna estão em [Colunas de exportação](topic:export-columns).

## O orçamento como CSV

Abra o menu {{ui:Exportar}} e escolha {{ui:CSV}}. Obtém-se `(name).csv`: as mesmas linhas e colunas da folha Orçamento, como valores simples (sem fórmulas), e o total da obra. Use-o para colar noutro sistema de orçamentação ou de contabilidade.

O CSV contém apenas o orçamento; para quantidades por folha e a lista de marcas, use XLSX. {{ui:Lista de materiais}} no mesmo menu guarda só a lista de materiais como CSV, para encomendas.

## O orçamento no Google Sheets

Acima da tabela Quantidades, **Copiar para o Google Sheets** coloca o orçamento na área de transferência como texto separado por tabulações, com as mesmas linhas do CSV. Numa folha do Google Sheets, clique na célula A1 e cole. O TakeoffCraft não inicia sessão no Google nem envia nada para lá.

## Preços em falta e aprovação

Uma linha com quantidade e sem preço indica **Sem preço** nas suas Notas, e a exportação conta-as nos totais. Quando o orçamento foi aprovado, a exportação indica quem o aprovou, quando e por que total. Veja [Preços em falta e aprovação do orçamento](topic:sign-off-the-estimate).

## Um PDF marcado

1. Abra os PDF cujas marcas deseja desenhar.
2. Abra o menu {{ui:Exportar}} e escolha {{ui:PDF marcado}}.
   ""A escrever o PDF marcado…" aparece e, depois, o navegador transfere um ficheiro por cada PDF marcado, com o nome `(PDF name) (takeoff).pdf`.

Na cópia:

- os troços são desenhados como linhas na cor do respetivo artigo,
- as áreas são preenchidas levemente com um contorno contínuo, e os recortes ficam abertos,
- as contagens são pontos,
- cada página com marcas recebe uma pequena legenda no canto inferior esquerdo: a cor, o nome e a quantidade de cada artigo nessa página.

Os PDF originais não são alterados.

Notas:

- Só são escritos os PDF que estão abertos. As marcas em PDF que não estão abertos ficam nos totais mas não são desenhadas; abra primeiro esses PDF.
- Os nomes na legenda usam um tipo de letra PDF padrão. As letras que não consegue mostrar são impressas como "?".
- Um PDF cifrado não pode ser copiado com marcas: "Este PDF está protegido por palavra-passe ou cifrado, por isso não é possível escrever uma cópia marcada. A própria medição está bem; exporte a folha de cálculo."
- O primeiro {{ui:PDF marcado}} num separador carrega o escritor de PDF. Sem ligação, só está disponível se a barra da aplicação mostrar {{ui:Pronto para offline}}; veja [Trabalhar offline](common:offline).

:::chromium
Com vários PDF marcados, o Chrome e o Edge podem perguntar uma vez se este site pode transferir vários ficheiros. Escolha Permitir, senão só obtém o primeiro ficheiro.
:::

## Nada para exportar?

- {{ui:XLSX}} e {{ui:CSV}} precisam de pelo menos um artigo: "Ainda não há nada para exportar: crie um artigo e meça-o."
- {{ui:PDF marcado}} precisa de marcas num PDF aberto: "Ainda não há marcas nos PDF abertos."

## Guarde também a medição

Uma exportação é um relatório. Para continuar a trabalhar na medição mais tarde, escolha também {{ui:Guardar medição}}: veja [Guardar e reabrir uma medição](topic:save-and-reopen).

Para acrescentar despesas gerais, lucro, IVA e caução e enviar uma proposta, veja [Resumo da proposta e proposta](topic:bid-summary).
