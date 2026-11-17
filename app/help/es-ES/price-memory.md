---
title: Memoria de precios de sus trabajos anteriores
summary: TakeoffCraft recuerda las tarifas que usó en mediciones anteriores, solo en este ordenador, para que una medición nueva pueda partir de lo que pagó la última vez. Véalo, úselo, olvídelo.
keywords: memoria de precios, precios, recordar precios, último trabajo, trabajos anteriores, precio habitual, mediana, tarifas, sin precio, repreciar, aprender de una medición anterior, olvidar, biblioteca
from: 7279f1a1
---

{{ui:Precios}} en la barra de herramientas (el signo de dólar) abre lo que TakeoffCraft recuerda de los precios que usó. Es una lista sencilla: para cada nombre de partida, las tarifas de sus últimos trabajos. Se guarda en este navegador (en Studio, en su propia vista web), junto a la Biblioteca de precios, nunca dentro de un archivo de medición, y no se envía nada a ninguna parte. No es un modelo entrenado.

## Qué se recuerda

Al guardar una medición, cada partida que tiene precio y se usa (tiene una marca, o una cantidad escrita mayor que cero) se recuerda con su nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Un trabajo son los planos de los que se mide, así que guardar de nuevo la misma medición sustituye sus propios precios en lugar de añadir otro trabajo. Se guardan los últimos 12 trabajos de cada nombre.

Para empezar con su trabajo anterior, elija {{ui:Aprender de una cuantificación anterior…}} y seleccione una medición guardada (.json). Sus partidas con precio y uso se recuerdan del mismo modo.

Los nombres coinciden cuando coinciden sus palabras, sin importar mayúsculas ni signos de puntuación ("2x4 Stud, 8 ft" y "2x4 stud 8 FT" son lo mismo). Las mismas palabras para otro tipo de partida (una partida lineal y una de recuento) no son el mismo precio.

## Usarla en una medición nueva

1. Cree las partidas de la nueva medición.
2. Elija {{ui:Precios}}. Bajo {{ui:Esta cuantificación}} ve cada partida que tiene un precio recordado, lo que tiene ahora, las tarifas del último trabajo, las tarifas habituales (el punto medio de los trabajos recordados) y el rango.
3. Elija {{ui:Usar el último}} o {{ui:Usar el habitual}} en una partida, o {{ui:Poner precio a N partidas sin precio desde la memoria}} para rellenar cada partida sin precio con el último trabajo.

Cada uso es un solo paso: {{key:Ctrl+Z}} lo deshace. Una partida que solo tiene un nombre parecido (un nombre dentro de otro) lo indica, y los botones usan las tarifas del nombre parecido. Un precio recordado por unidad nunca se aplica a una partida por pie: el cuadro lo indica y no lo toca.

## Verlo, cambiarlo, olvidarlo

{{ui:Todo lo recordado}} enumera cada nombre con sus tarifas y el número de trabajos. El botón de papelera olvida un nombre; {{ui:Borrar todos los precios}} los olvida todos. Desactive {{ui:Recordar mis precios al guardar una cuantificación}} para dejar de recordar; lo que ya está guardado se conserva hasta que lo olvide. Sus mediciones y la Biblioteca de precios nunca se tocan.

## Con su asistente

Si permite asistentes en Configuración, pueden leer lo recordado para las partidas de la medición (prices_list) y poner precios a partidas a partir de ello (prices_apply, que puede previsualizar antes). Es la misma lista que la del cuadro.
