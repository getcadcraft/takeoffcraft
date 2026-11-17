---
title: "La memoria de precios de sus trabajos anteriores"
summary: "TakeoffCraft recuerda las tarifas que usó en cuantificaciones anteriores, solo en esta computadora, para que una cuantificación nueva pueda partir de lo que pagó la última vez. Véalo, úselo, olvídelo."
keywords: "memoria de precios, precios, recordar precios, último trabajo, trabajos anteriores, precio típico, mediana, tarifas, sin precio, repreciar, aprender de una cuantificación anterior, olvidar, biblioteca"
from: 7279f1a1
---

{{ui:Precios}} en la barra de herramientas (el signo de pesos) abre lo que TakeoffCraft recuerda de los precios que usó. Es una lista simple: por cada nombre de partida, las tarifas de sus últimos trabajos. Se guarda en este navegador (en Studio, en su propia vista web), junto a la Biblioteca de precios, nunca dentro de un archivo de cuantificación, y no se envía nada a ningún lado. No es un modelo entrenado.

## Qué se recuerda

Al guardar una cuantificación, cada partida que tiene precio y se usa (tiene una marca, o una cantidad tipificada mayor que cero) se recuerda por su nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Un trabajo son los planos de los que se toma, así que guardar la misma cuantificación otra vez reemplaza sus propios precios en lugar de agregar otro trabajo. Se guardan los últimos 12 trabajos por cada nombre.

Para empezar con su trabajo anterior, elija {{ui:Aprender de una cuantificación anterior…}} y seleccione una cuantificación guardada (.json). Sus partidas con precio y uso se recuerdan del mismo modo.

Los nombres coinciden cuando sus palabras coinciden, sin importar mayúsculas o puntuación ("Poste 2x4, 8 ft" y "poste 2x4 8 FT" son lo mismo). Las mismas palabras para otro tipo de partida (una partida lineal y una de conteo) no son el mismo precio.

## Usarla en una cuantificación nueva

1. Cree las partidas de la nueva cuantificación.
2. Elija {{ui:Precios}}. Bajo {{ui:Esta cuantificación}} ve cada partida que tiene un precio recordado, lo que tiene ahora, las tarifas del último trabajo, las tarifas típicas (la mediana de los trabajos recordados) y el rango.
3. Elija {{ui:Usar el último}} o {{ui:Usar el típico}} en una partida, o {{ui:Price N unpriced items from memory}} para asignar a cada partida sin precio las tarifas del último trabajo.

Cada uso es un paso: {{key:Ctrl+Z}} lo deshace. Una partida que solo tiene un nombre parecido (un nombre contenido en otro) lo indica, y los botones usan las tarifas del nombre parecido. Un precio recordado por pieza nunca se pone en una partida por pie: el cuadro de diálogo indica que las unidades no coinciden y deja la partida sin cambios.

## Véalo, cámbielo, olvídelo

{{ui:Todo lo recordado}} enumera cada nombre con sus tarifas y el número de trabajos. El botón de papelera olvida un nombre; {{ui:Borrar todos los precios}} los olvida todos. Desactive {{ui:Recordar mis precios cuando guarde una cuantificación}} para dejar de recordar; lo que ya está guardado permanece hasta que lo olvide. Sus cuantificaciones y la Biblioteca de precios nunca se tocan.

## Con su asistente

Si permite asistentes en Configuración, pueden leer lo recordado para las partidas de la cuantificación (prices_list) y asignar precios desde ahí (prices_apply, que puede previsualizar antes). Es la misma lista que el cuadro de diálogo.
