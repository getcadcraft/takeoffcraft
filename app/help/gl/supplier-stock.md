---
title: Comprobar o stock e os prazos de entrega do provedor
summary: Engade a lista de stock dun provedor (CSV ou folla de cálculo) e TakeoffCraft comproba contra ela o que precisa a medición, con desperdicio: se hai suficiente en stock e canto dura a espera. As faltas e as esperas longas aparecen no panel Problemas.
keywords: provedor, stock, en stock, prazo de entrega, dispoñibilidade, falta, pedido pendente, lista de pedido, csv, sku, vendedor, materiais, subministro, problemas
from: f11160fb
---

{{ui:Subministro}} na barra de ferramentas (o camión) comproba o que precisa a túa medición contra a lista de stock dun provedor. As filas do provedor que importan gárdanse no ficheiro propio da medición. Non se envía nada a ningún lado e ninguén consulta ao provedor: ti achegas o ficheiro.

## O ficheiro

Un ficheiro CSV cunha fila de cabeceiras. Necesita unha columna de nome ou SKU e unha columna de stock ou prazo de entrega. Recoñécense estas cabeceiras (en calquera orde e sen distinguir maiúsculas): Item, Name, Description ou Product; SKU, Part ou Item #; In stock, On hand, Available ou Quantity; Lead time ou Delivery days; Unit ou UOM; Price ou Cost; Supplier ou Vendor.

- O stock pode ser un número (1,200), "In stock" ou "Out of stock".
- Un prazo de entrega pode ser "5 days", "2 weeks", "2-3 weeks" (úsase o máis longo), "3 months", "same day" ou "backorder". Un número simple está na unidade da cabeceira (días, salvo que a cabeceira indique semanas ou meses).
- Non se len os ficheiros de Excel: garda antes a folla como CSV.

## Comprobar a medición

1. Escolle {{ui:Subministro}}, despois {{ui:Engadir un ficheiro do provedor…}} e selecciona o CSV. Podes engadir máis dun: ata cinco ficheiros, con 2.000 filas gardadas en total, primeiro as que coinciden cos teus elementos.
2. Cada elemento, segunda condición e peza de conxunto cunha cantidade cóntrase cunha fila polo nome, ou polo SKU no seu nome. Úsase un nome parecido (un dentro do outro) cando non hai un exacto, e indícao.
3. Baixo {{ui:O que precisa a medición}}, aparecen primeiro os que faltan: "Faltan 120 EA", "Prazo de entrega 21 days", "En pedido pendente", "A unidade difire", "Sen cifra de stock" ou "En stock". A necesidade inclúe o desperdicio. Unha unidade do provedor que non é a da estimación (unha tonelada fronte a un pé) redíxese e nunca se compara. Cada fila ten {{ui:Seleccionar o elemento}}, que salta ao elemento.
4. Define {{ui:Prazo máximo desexado (días)}} (por defecto 14). Un elemento que non está en stock e espera máis que iso márcase, e o resumo indica a espera máis longa que importa.
5. {{ui:Lista de pedido (CSV)}} descarga os elementos en falta, coa cantidade que falta, o provedor e o prazo de entrega. {{ui:Deixar fóra}} retira unha necesidade da comprobación (é un paso de Desfacer).

## Ficheiros de folla de cálculo e a Biblioteca de prezos

A lista dun provedor pode ser un libro de Excel (.xlsx) igual que un CSV: lese a primeira folla, cos mesmos nomes de columna. As fórmulas nunca se executan; lese o valor que garda o ficheiro.

Unha vez engadido un ficheiro con prezos, {{ui:Prezos á Biblioteca}} no diálogo fixa o prezo do material de cada entrada da [Biblioteca](topic:price-library) que o ficheiro prezo: mesmo nome e unidade igual (ou non indicada). A man de obra, o desperdicio, a altura e os conxuntos quedan como están, e a nota da entrada indica de que ficheiro procede o prezo. Unha entrada en metros non se prezo cunha lista en pés, e unha entrada sen nome coincidente déixase como está; a liña de estado indica cantas se saltaron pola unidade. Actualiza os prezos desde a Biblioteca para levar os novos prezos a esta medición.

## No panel Problemas

Unha falta é un aviso e unha espera longa é unha nota, no panel compartido Problemas («Stock do provedor»), así que aparecen xunto ao resto das comprobacións. Podes aceptar unha cun motivo, e a aceptación gárdase na medición.

## Co teu asistente

Se permites asistentes en Configuración, poden ler a comprobación (supply_check). Engadir un ficheiro do provedor é algo que só ti podes facer.

## Bo que saber

As cifras de stock só son tan actuais como o ficheiro que engades. Engade o ficheiro de novo para actualizalo: un ficheiro co mesmo nome substitúe o anterior.
