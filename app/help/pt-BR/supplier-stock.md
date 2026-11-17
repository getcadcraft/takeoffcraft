---
title: Conferir o estoque e os prazos de entrega do fornecedor
summary: Adicione a lista de estoque de um fornecedor (CSV ou planilha) e o TakeoffCraft confere, com a perda, o que o levantamento precisa: se há estoque suficiente e quanto é a espera. Faltas e esperas longas aparecem no painel Problemas.
keywords: fornecedor, estoque, em estoque, prazo de entrega, disponibilidade, falta, pedido pendente, lista de pedido, csv, sku, vendedor, materiais, suprimento, problemas
from: f11160fb
---

{{ui:Supply}} na barra de ferramentas (o caminhão) confere o que o seu levantamento precisa com a lista de estoque de um fornecedor. As linhas do fornecedor que importam ficam guardadas no próprio arquivo do levantamento. Nada é enviado para lugar nenhum e nada consulta um fornecedor: você traz o arquivo.

## O arquivo

Um arquivo CSV com uma linha de cabeçalho. Ele precisa de uma coluna de nome ou SKU e uma coluna de estoque ou prazo de entrega. Estes cabeçalhos são reconhecidos (em qualquer ordem e qualquer caixa): Item, Name, Description ou Product; SKU, Part ou Item #; In stock, On hand, Available ou Quantity; Lead time ou Delivery days; Unit ou UOM; Price ou Cost; Supplier ou Vendor.

- O estoque pode ser um número (1,200), "In stock" ou "Out of stock".
- Um prazo de entrega pode ser "5 days", "2 weeks", "2-3 weeks" (usa-se o maior), "3 months", "same day" ou "backorder". Um número simples está na unidade do cabeçalho (dias, a menos que o cabeçalho diga weeks ou months).
- Arquivos do Excel não são lidos: salve a planilha como CSV antes.

## Conferir o levantamento

1. Escolha {{ui:Supply}}, depois {{ui:Adicionar um arquivo de fornecedor…}} e selecione o CSV. Você pode adicionar mais de um: até cinco arquivos, com 2,000 linhas mantidas no total, primeiro as que correspondem aos seus itens.
2. Cada item, segunda condição e parte de composição com quantidade é associado a uma linha pelo nome, ou pelo SKU no nome. Um nome parecido (um contido no outro) é usado quando não há um exato, e isso é informado.
3. Em {{ui:What the takeoff needs}}, os itens em falta vêm primeiro: "Faltam 120 EA", "Prazo de entrega 21 dias", "Pedido pendente", "Unidade diferente", "Sem número de estoque" ou "Em estoque". A necessidade inclui a perda. Uma unidade do fornecedor que não é a do orçamento (uma tonelada contra um pé) é informada e nunca comparada. Cada linha tem {{ui:Select the item}}, que leva ao item.
4. Defina {{ui:Longest wait wanted (days)}} (padrão 14). Um item que não está em estoque e espera mais do que isso é sinalizado, e o resumo informa a espera mais longa que importa.
5. {{ui:Order list (CSV)}} baixa os itens em falta, com a quantidade faltante, o fornecedor e o prazo de entrega. {{ui:Leave out}} tira uma necessidade da conferência (é uma etapa de desfazer).

## Planilhas e a Biblioteca de preços

A lista de um fornecedor também pode ser uma pasta de trabalho do Excel (.xlsx), além de um CSV: a primeira planilha é lida, com os mesmos nomes de coluna. Fórmulas nunca são executadas; é lido o valor que o arquivo contém.

Depois que um arquivo com preços for adicionado, {{ui:Preços na Biblioteca}} na caixa de diálogo define o preço do material de cada entrada da [Biblioteca](topic:price-library) que o arquivo traz: mesmo nome e uma unidade igual (ou não informada). Mão de obra, perda, altura e composições permanecem como estão, e a nota da entrada informa de qual arquivo veio o preço. Uma entrada em metros não recebe preço de uma lista em pés, e uma entrada sem nome correspondente fica como está; a barra de status informa quantas foram ignoradas por causa da unidade. Recalcule os preços pela Biblioteca para levar os novos preços a este levantamento.

## No painel Problemas

Uma falta é um aviso e uma espera longa é uma nota, no painel Problemas compartilhado ("Estoque do fornecedor"), de modo que ficam junto com todas as outras verificações. Você pode aceitar um deles informando um motivo, e a aceitação fica salva no levantamento.

## Com o seu assistente

Se você permitir assistentes em Configurações, eles podem ler a conferência (supply_check). Adicionar um arquivo de fornecedor cabe só a você.

## Bom saber

Os números de estoque só são tão atuais quanto o arquivo que você adiciona. Adicione o arquivo de novo para atualizá-lo: um arquivo com o mesmo nome substitui o anterior.
