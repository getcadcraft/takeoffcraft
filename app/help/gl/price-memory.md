---
title: Memoria de prezos das súas obras anteriores
summary: TakeoffCraft lembra as tarifas que usou nas medicións anteriores, só neste ordenador, para que unha medición nova poida partir do que pagou a última vez. Véxaas, úseas, esquéceas.
keywords: memoria de prezos, prezos, lembrar prezos, último traballo, traballos anteriores, prezo típico, mediana, tarifas, sen prezo, volver a prezar, aprender dunha medición anterior, esquecer, biblioteca
from: 7279f1a1
---

{{ui:Prezos}} na barra de ferramentas (o símbolo do dólar) abre o que TakeoffCraft lembra sobre os prezos que usou. É unha lista simple: para cada nome de elemento, as tarifas dos seus últimos traballos. Gárdase neste navegador (en Studio, na súa propia vista web) xunto á Biblioteca de prezos, nunca dentro dun ficheiro de medición, e non se envía a ningures. Non é un modelo adestrado.

## Que se lembra

Ao gardar unha medición, cada elemento que ten prezo e se usa (ten unha marca, ou unha cantidade escrita superior a cero) lémbrase polo seu nome e tipo: tarifa de material, tarifa de man de obra, desperdicio e unidade. Un traballo son os ficheiros de planos dos que se mide, así que gardar de novo a mesma medición substitúe os seus propios prezos en lugar de engadir outro traballo. Consérvanse os últimos 12 traballos de cada nome.

Para comezar co seu traballo anterior, escolla {{ui:Aprender dunha medición anterior…}} e seleccione unha medición gardada (.json). Os seus elementos con prezo e usados lémbranse do mesmo xeito.

Os nomes coinciden cando coinciden as súas palabras, sexa cal sexa a maiúscula ou a puntuación ("2x4 Stud, 8 ft" e "2x4 stud 8 FT" son o mesmo). As mesmas palabras para outro tipo de elemento (un elemento lineal e un elemento de contaxe) non son o mesmo prezo.

## Usalo nunha medición nova

1. Cree os elementos da nova medición.
2. Escolla {{ui:Prezos}}. Baixo {{ui:Esta medición}} vexe cada elemento que ten un prezo lembrado, o que ten agora, as tarifas do último traballo, as tarifas típicas (o punto medio dos traballos lembrados) e o intervalo.
3. Escolla {{ui:Usar o último}} ou {{ui:Usar o típico}} nun elemento, ou {{ui:Pór prezo a N elementos sen prezo desde a memoria}} para encher cada elemento que aínda non ten prezo co do último traballo.

Cada uso é un paso: {{key:Ctrl+Z}} desfáino. Un elemento que só ten un nome parecido (un nome dentro doutro) di iso, e os botóns usan as tarifas dese nome parecido. Un prezo lembrado por unidade nunca se pon nun elemento por pé: o diálogo di que as unidades difiren e déixao quieto.

## Vexa, cambie, esquéceo

{{ui:Todo o lembrado}} lista cada nome coas súas tarifas e o número de traballos. O botón da papeleira esquece un nome; {{ui:Borrar todos os prezos}} esquece todos. Desactive {{ui:Lembrar os meus prezos ao gardar unha medición}} para deixar de lembralos; o que xa está gardado queda ata que o esquezca. As súas medicións e a Biblioteca de prezos nunca se tocan.

## Co seu asistente

Se permite asistentes en Configuración, poden ler o que está lembrado para os elementos da medición (prices_list) e prezar elementos desde alí (prices_apply, que pode previsualizar primeiro). É a mesma lista que o diálogo.
