---
title: Contar todo o conxunto
summary: Enmarque unha vez a lenda de símbolos e TakeoffCraft conta cada símbolo dela en cada folla aberta nunha soa pasada. Cada contaxe é unha ligazón á súa folla, e revisa antes de engadir nada.
keywords: contar todo, lenda, lenda de símbolos, conxunto completo, cada folla, todas as follas, cada porta, cada accesorio, dispositivos, cadro, símbolos, contaxe automática, contar todo, conxunto de planos, 200 follas, nivel de coincidencia, parecidos
from: adc99744
---

{{ui:Contar todo}} le unha lenda de símbolos e despois conta cada símbolo dela en cada folla aberta. É {{ui:Contaxe automática}} para unha lenda completa dunha vez. É coincidencia simple de símbolos nas súas propias follas, non un modelo adestrado, e nada sae do seu ordenador. Revise as contaxes antes de engadilas: é unha axuda, non unha garantía.

## Contar unha lenda

1. Abra os planos. Vale unha lenda en calquera folla: os símbolos cos seus nomes ao lado.
2. Escolla {{ui:Contar todo}} na barra de ferramentas.
3. Arrastre un marco arredor da lenda, dos símbolos e dos nomes. Un título sen símbolo ao lado (SYMBOL LEGEND) déixase fóra por si só.
   O panel lista cada símbolo coa súa imaxe e o nome impreso ao lado. O nome convértese en nome do elemento, así que cámbieo aquí se quere.
4. Desmarque os símbolos que non quere contar. Un símbolo que non se pode buscar (demasiado pequeno, ou en branco) indica o motivo.
5. Escolla {{ui:Contar en N follas}}. Unha barra mostra a folla que se está buscando; {{ui:Cancelar}} detén a pasada. A páxina segue dispoñible.

Os propios símbolos da lenda non se contan na súa folla. Unha folla debuxada a outra escala búscase a esa escala, e os símbolos atópanse xirados en calquera ángulo recto.

## Revisar as contaxes

- Cada símbolo mostra o seu total e, debaixo, unha ligazón por cada folla que ten algún («E-103: 4»). Faga clic nunha para ir a esa folla. Os achados enmárcanse na cor do elemento.
- **Faga clic nun marco** para deixar fóra ese achado. Pasa a trazos e cruzado; faga clic de novo para devolvelo.
- **Mover o nivel de coincidencia** (do 50% ao 100%, comezando no nivel da súa Configuración). Un nivel máis alto só mantén as coincidencias próximas. A barra só filtra o que se atopou; non se volve buscar.
- Dous símbolos que se parecen (unha toma dobre e unha cuádrupla) poden coincidir no mesmo lugar. A mellor coincidencia queda con el, e o panel indica en cantos lugares pasou, para que os poida comprobar.
- Unha folla demasiado grande para buscar ao tamaño do símbolo sáltase, e o panel dío.

## Engadilas

Escolla {{ui:Engadir N marcas}}. Cada símbolo convértese nun elemento de contaxe cunha marca en cada achado. Un nome que xa é un elemento de contaxe seu reutilízase (non se duplica nada onde xa marcou a man). A pasada completa é un só paso: {{key:Ctrl+Z}} retira todos os elementos e marcas.

O que acepta tamén alimenta {{ui:Aprendido}}: os símbolos recórdanse no ficheiro da medición para a próxima vez.

## Co seu asistente

Se permite asistentes en Configuración, poden ler unha lenda (legend_open), executar a contaxe en segundo plano (legend_count_start, despois legend_count_status), ler as contaxes (legend_count_result) e engadilas (legend_count_add, que pode primeiro previsualizar o que engadiría). É a mesma pasada que ve no panel.

## Símbolos en calquera ángulo

Marque {{ui:Símbolos en calquera ángulo}} antes de contar para atopar tamén símbolos debuxados a un ángulo que non é recto (un taco diagonal dun muro, un accesorio xirado para seguir un tellado). A busca xira entón cada símbolo cada 15 graos; un símbolo redondo aínda precisa unha busca, e un que non é redondo pode tardar até seis veces máis. Déixeo desmarcado para planos debuxados cadrados.

## Bo saber

- Precisa símbolos debuxados do mesmo xeito que na lenda. Unha lenda debuxada a un tamaño distinto das follas vale cando se fixan as escalas das follas; sen escalas, os símbolos búscanse ao tamaño da lenda.
- Un símbolo cun muro ou unha liña longa debuxada directamente por el pode pasar desapercibido, porque xa non parece a imaxe da lenda. Comprobe os achados da primeira folla antes de confiar no resto.
- Unha exploración sen texto tamén funciona: os símbolos atópanse polas súas filas, e vostede escribe os nomes.
