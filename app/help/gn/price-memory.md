---
title: Memoria de precios de sus trabajos anteriores
summary: TakeoffCraft recuerda las tarifas que usó en cómputos anteriores, solo en esta computadora, para que un cómputo nuevo pueda empezar con lo que pagó la última vez. Véalo, úselo, olvídelo.
keywords: memoria de precios, precios, recordar precios, último trabajo, trabajos anteriores, precio típico, mediana, tarifas, sin precio, repreciar, aprender de un cómputo anterior, olvidar, biblioteca
from: 7279f1a1
---

{{ui:Prices}} en la barra de herramientas (el signo de dólar) abre lo que TakeoffCraft recuerda sobre los precios que usó. Es una lista simple: para cada nombre de ítem, las tarifas de sus últimos trabajos. Se guarda en este navegador (en Studio, en su propia vista web) junto a la Biblioteca de precios, nunca dentro de un archivo de cómputo, y nada se envía a ningún lado. No es un modelo entrenado.

## Qué se recuerda

Cuando guarda un cómputo, cada ítem que tiene precio y se usa (tiene una marca, o una cantidad tipificada mayor que cero) se recuerda bajo su nombre y tipo: tarifa de material, tarifa de mano de obra, desperdicio y unidad. Un trabajo son los archivos de planos de los que se toma el cómputo, así que guardar otra vez el mismo cómputo reemplaza sus propios precios en lugar de agregar otro trabajo. Se guardan los últimos 12 trabajos por cada nombre.

Para empezar con su trabajo anterior, elija {{ui:Learn from a past takeoff…}} y seleccione un cómputo guardado (.json). Sus ítems con precio y en uso se recuerdan de la misma forma.

Los nombres coinciden cuando sus palabras coinciden, sin importar mayúsculas o signos ("2x4 Stud, 8 ft" y "2x4 stud 8 FT" son lo mismo). Las mismas palabras para otro tipo de ítem (un ítem lineal y un ítem de conteo) no son el mismo precio.

## Usarla en un cómputo nuevo

1. Cree los ítems del cómputo nuevo.
2. Elija {{ui:Prices}}. Bajo {{ui:This takeoff}} ve cada ítem que tiene un precio recordado, lo que tiene ahora, las tarifas del último trabajo, las tarifas típicas (la mitad de los trabajos recordados) y el rango.
3. Elija {{ui:Use last}} o {{ui:Use typical}} en un ítem, o {{ui:Price N unpriced items from memory}} para completar cada ítem sin precio con el último trabajo.

Cada uso es un paso: {{key:Ctrl+Z}} lo deshace. Un ítem que solo tiene un nombre parecido (un nombre dentro de otro) lo indica, y los botones usan las tarifas del nombre parecido. Un precio recordado por unidad nunca se pone en un ítem por pie: el diálogo indica que las unidades difieren y lo deja como está.

## Véalo, cámbielo, olvídelo

{{ui:Everything remembered}} enumera cada nombre con sus tarifas y la cantidad de trabajos. El botón de papelera olvida un nombre; {{ui:Clear all prices}} los olvida todos. Desactive {{ui:Remember my prices when I save a takeoff}} para dejar de recordar; lo que ya está guardado se mantiene hasta que lo olvide. Sus cómputos y la Biblioteca de precios nunca se tocan.

## Con su asistente

Si permite asistentes en Configuración, pueden leer lo recordado para los ítems del cómputo (prices_list) y poner precio a los ítems a partir de ello (prices_apply, que puede previsualizar primero). Es la misma lista que el diálogo.
