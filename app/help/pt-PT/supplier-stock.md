---
title: Verificar o stock e os prazos de entrega do fornecedor
summary: Adicione a lista de stock de um fornecedor (CSV ou folha de cálculo) e o TakeoffCraft verifica contra ela o que a medição precisa, com o desperdício: se há stock suficiente e quanto tempo dura a espera. As faltas e as esperas longas aparecem no painel Problemas.
keywords: fornecedor, stock, em stock, prazo de entrega, disponibilidade, falta, encomenda pendente, lista de encomenda, csv, sku, vendedor, materiais, fornecimento, problemas
from: f11160fb
---

{{ui:Fornecimento}} na barra de ferramentas (o camião) verifica o que a sua medição precisa contra a lista de stock de um fornecedor. As linhas do fornecedor que interessam ficam guardadas no próprio ficheiro da medição. Nada é enviado para lado nenhum e nenhum fornecedor é consultado: o ficheiro tem de ser fornecido.

## O ficheiro

Um ficheiro CSV com uma linha de cabeçalho. Precisa de uma coluna de nome ou SKU e de uma coluna de stock ou de prazo de entrega. Estes cabeçalhos são reconhecidos (qualquer ordem, qualquer capitalização): Item, Name, Description ou Product; SKU, Part ou Item #; In stock, On hand, Available ou Quantity; Lead time ou Delivery days; Unit ou UOM; Price ou Cost; Supplier ou Vendor.

- O stock pode ser um número (1,200), "In stock" ou "Out of stock".
- O prazo de entrega pode ser "5 days", "2 weeks", "2-3 weeks" (usa-se o mais longo), "3 months", "same day" ou "backorder". Um número simples está na unidade do cabeçalho (dias, salvo se o cabeçalho indicar semanas ou meses).
- Os ficheiros Excel não são lidos: guarde primeiro a folha de cálculo como CSV.

## Verificar a medição

1. Escolha {{ui:Fornecimento}} e, depois, {{ui:Adicionar um ficheiro de fornecedor…}} e selecione o CSV. Pode adicionar mais do que um: até cinco ficheiros, com 2,000 linhas guardadas no total, primeiro as que correspondem aos seus artigos.
2. Cada artigo, segunda condição e componente do preço composto com uma quantidade é associado a uma linha pelo nome, ou pelo SKU no nome. Usa-se um nome semelhante (um contido no outro) quando não existe um exato, e a aplicação indica-o.
3. Em {{ui:O que a medição precisa}}, os em falta aparecem primeiro: "Em falta 120 EA", "Prazo de entrega 21 dias", "Encomenda pendente", "A unidade difere", "Sem valor de stock" ou "Em stock". A necessidade inclui o desperdício. Uma unidade do fornecedor que não é a da estimativa (uma tonelada contra um pé) é indicada e nunca comparada. Cada linha tem {{ui:Selecionar o artigo}}, que leva ao artigo.
4. Defina {{ui:Espera máxima pretendida (dias)}} (predefinido 14). Um artigo que não está em stock e espera mais do que isso fica assinalado, e o resumo indica a espera mais longa que importa.
5. {{ui:Lista de encomenda (CSV)}} transfere os artigos em falta, com a quantidade em falta, o fornecedor e o prazo de entrega. {{ui:Excluir}} retira uma necessidade da verificação (é um passo de anulação).

## Folhas de cálculo e a biblioteca de preços

A lista de um fornecedor pode ser um livro Excel (.xlsx), além de um CSV: lê-se a primeira folha, com os mesmos nomes de colunas. As fórmulas nunca são executadas; lê-se o valor que o ficheiro contém.

Depois de adicionar um ficheiro com preços, {{ui:Preços para a biblioteca}} na caixa de diálogo define o preço do material de cada entrada da [Biblioteca](topic:price-library) que o ficheiro tem com preço: mesmo nome e uma unidade igual (ou não indicada). A mão de obra, o desperdício, a altura e as composições mantêm-se como estão, e a nota da entrada indica de que ficheiro vem o preço. Uma entrada em metros não recebe preço de uma lista em pés, e uma sem nome correspondente fica como está; a linha de estado indica quantas foram ignoradas por causa da unidade. Atualize os preços a partir da [Biblioteca](topic:price-library) para levar os novos preços para esta medição.

## No painel Problemas

Uma falta é um aviso e uma espera longa é uma nota, no painel Problemas partilhado ("Stock do fornecedor"), para ficarem junto com todas as outras verificações. Pode aceitar uma com um motivo, e a aceitação fica guardada na medição.

## Com o assistente

Se permitir assistentes em {{ui:Definições}}, podem ler a verificação (supply_check). Adicionar um ficheiro de fornecedor cabe ao próprio utilizador.

## Bom saber

Os valores de stock só estão tão atualizados como o ficheiro que adicionar. Adicione o ficheiro de novo para o atualizar: um ficheiro com o mesmo nome substitui o anterior.
