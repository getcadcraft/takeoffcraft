---
title: Carbono incorporado e unha táboa de prezos 5D
summary: Carbono suma o carbono incorporado da medición a partir da cantidade de cada elemento e dunha táboa de factores aberta, e envía as tarifas da medición a BimCraft como táboa de prezos para custos 5D.
keywords: carbono, carbono incorporado, kgco2e, CO2, factores, A1-A3, transporte, merma, 5D, táboa de prezos, custo, BimCraft, DAP
from: f4bff3b8
---

{{ui:Carbon}} na barra de ferramentas suma o carbono incorporado do que medeu, e convirte as súas tarifas nunha táboa de prezos que o modelo do edificio pode usar. É un estimado, non unha avaliación.

## Carbono incorporado

A cantidade de cada elemento, coa súa merma, multiplícase por unha fila da táboa de factores. Unha fila coincide coas palabras do nome do elemento ("losa de formigón" atopa unha fila coa palabra clave formigón). A táboa é a mesma táboa aberta que usa BimCraft, así que un ficheiro que carga aquí tamén funciona alí. **As filas que chegan co programa son valores de partida: xenéricos, sen verificar e non proceden de ningunha base de datos.** O diálogo di isto xunto ás cifras; substitúaas pola súa propia fonte antes de fiarse dun número.

1. Escolla {{ui:Carbon}}. Os elementos contados aparecen cos seus quilogramos de CO2e; o total está arriba.
2. Marque {{ui:A4 transporte}} ou {{ui:A5 residuos de obra}} para contar tamén esas etapas, nas filas que dan unha cifra para elas. A etapa de produto cóntase sempre.
3. Para usar outra fila para un elemento, ou ningunha, use a lista da súa liña.
4. {{ui:Factores dun ficheiro…}} carga unha táboa de factores (JSON ou CSV) feita coa súa propia fonte; as súas filas substitúen as filas de partida co mesmo id. {{ui:Factores (JSON)}} garda as súas.

Un factor é por metro, metro cadrado, metro cúbico, elemento ou quilogramo. Unha liña medida en pés ou pés cadrados convértese. Un factor en quilogramos necesita un volume (iardas cúbicas ou metros) e a densidade da fila. Un elemento cun factor que precisa unha cantidade que non mide aparece en {{ui:Deixado fóra}} co motivo, sen estimar nada. O total acumulado na barra de estado mostra a mesma cifra.

As súas filas de factores, as súas opcións e as etapas que conta gárdanse no ficheiro da medición.

## Unha táboa de prezos para custos 5D

{{ui:Prezos 5D (JSON)}} e {{ui:Prezos 5D (CSV)}} gardan as tarifas da medición como táboa de prezos: unha fila por cada elemento con prezo, coa súa tarifa de material e de man de obra por unidade e a súa merma. Cárguea no panel de custos de BimCraft (Carbono incorporado e custo 5D) para prezar as tarefas do modelo do edificio coas mesmas tarifas que xeraron a oferta. Os elementos medidos nunha unidade que a táboa non ten, e os elementos sen tarifa, quedan fóra.

## Co seu asistente

Se permite asistentes en {{ui:Configuración}}, poden ler o carbono (carbon_check). Cargar os factores é tarefa súa.

## Bo saber

Non se envía nada a ningures. As cifras só valen o que valen os factores que carga.
