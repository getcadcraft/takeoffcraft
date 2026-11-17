---
title: Lo que aprendió de sus cuantificaciones
summary: TakeoffCraft guarda los símbolos que confirmó con Conteo automático, sus conjuntos de condiciones, los conjuntos de partidas que más usa y los patrones que repite en cada página, todo dentro del propio archivo de la cuantificación. Véalo, úselo, bórrelo.
keywords: aprender, aprendido, aprendizaje, asistente, recordar, símbolos, plantillas, igual que el trabajo anterior, trabajo anterior, conjunto de condiciones, condiciones, reutilizar, conjuntos, más usados, sugerencias, repetir en cada página, cada página, cajetín, patrón, borrar todo, olvidar, privacidad
from: 54d99e99
---

TakeoffCraft se vuelve más rápido mientras más cuantificaciones haga con él. Aprende **solo de lo que usted acepta**:

- los símbolos que encerró con [Conteo automático](topic:auto-count) y luego agregó,
- los conjuntos de condiciones que guarda,
- los conjuntos de partidas que usa (una vez por trabajo),
- los patrones de marcas que repite en cada página.

Es una comparación simple sobre sus propias hojas, la misma búsqueda que ejecuta Conteo automático. No es un modelo entrenado. Todo lo que aprende se guarda **en el archivo de esta cuantificación** (`.takeoff.json`), y no se envía a ningún lugar. Para llevarlo al siguiente trabajo, use [Igual que el trabajo anterior](topic:what-it-learned#same-as-last-job).

Elija {{ui:Aprendido}} en la barra de herramientas (el foco, junto a {{ui:Conteo automático}}) para verlo todo.

## Símbolos

Cuando encierra un símbolo con {{ui:Conteo automático}} y elige {{ui:Agregar}}, se guarda el símbolo que encerró, con el nivel de coincidencia que aceptó.

- En {{ui:Aprendido}}, elija {{ui:Buscar en esta hoja}} o {{ui:Buscar en todas las hojas}}. Se abre la revisión habitual de Conteo automático: haga clic en un recuadro para excluirlo, mueva el control deslizante y luego agréguelos. No se agrega nada hasta que usted lo haga.
- Cuando abre una hoja que aún no tiene ninguno de los símbolos aprendidos, una barra arriba ofrece {{ui:Buscar …}} para ese símbolo. {{ui:Ahora no}} lo oculta para esa hoja.
- Si la cuantificación no tiene una partida con ese nombre, al agregar las marcas también se agrega la partida (un paso de deshacer).
- Agregar de nuevo el símbolo de la misma partida se suma a la que ya conoce; un símbolo con apariencia distinta se guarda como un segundo.
- Como Conteo automático, encuentra el símbolo en ángulos rectos y en hojas a otra escala.

## Conjuntos de condiciones

Un conjunto guarda las condiciones de una cuantificación (partidas con sus unidades, tarifas, desperdicio y conjuntos de partidas), sin marcas.

1. En {{ui:Aprendido}}, elija {{ui:Guardar las condiciones de esta cuantificación como conjunto…}} y dele un nombre. Un conjunto con el mismo nombre se reemplaza.
2. En una cuantificación que tenga el conjunto, {{ui:Agregar}} pone las condiciones que aún no tiene. Las condiciones con el mismo nombre y tipo no se modifican. Es un paso de deshacer.

## Igual que el trabajo anterior

El archivo del trabajo anterior guarda lo que aprendió. Para empezar un trabajo nuevo a partir de él:

1. Abra los planos nuevos y elija {{ui:Aprendido}} › {{ui:Igual que el trabajo anterior…}}.
2. Seleccione el `.takeoff.json` del trabajo anterior.
3. Marque lo que va a traer: sus condiciones (solo las que esta cuantificación no tiene), y lo que aprendió (símbolos, conjuntos de condiciones, conjuntos de partidas y patrones). Después elija {{ui:Traerlos}}.

Sus condiciones también se guardan como un conjunto con el nombre de ese trabajo. Sus marcas y cantidades permanecen en su propio archivo. Todo es un solo paso de deshacer.

## Conjuntos de partidas que más usa

Una partida que tiene un conjunto cuenta como usada una vez por trabajo cuando tiene una cantidad y usted guarda la cuantificación. Un trabajo es el conjunto de archivos de planos del que se cuantifica, así que volver a guardar la misma cuantificación no cuenta dos veces. La lista bajo {{ui:Conjuntos que más usa}} pone primero los que más usa. Omite los que esta cuantificación ya tiene. {{ui:Agregar}} pone uno como lo usó por última vez, con todas sus partes.

## Repetir en cada página

Para marcas que son iguales en cada página de un juego, como un conteo de cajetín o un detalle típico:

1. Seleccione las marcas de una hoja ([Seleccionar las marcas](topic:copy-paste#select-the-marks)).
2. En {{ui:Aprendido}}, elija {{ui:Repetir las marcas seleccionadas en cada página…}}, nombre el patrón y confirme.

Se colocan en cada otra página abierta **del mismo tamaño**, en el mismo lugar, en un solo paso de deshacer. Las longitudes y áreas solo van en páginas con la misma escala; los conteos van en cualquier página de ese tamaño. Una página que ya las tiene se omite. El patrón se guarda, así que las páginas que abra después reciben la oferta en la barra, o puede usar {{ui:Repetir en cada página}} en la lista.

## Véalo, bórrelo

Todo lo aprendido aparece en {{ui:Aprendido}}. La papelera borra una cosa. {{ui:Borrar todo}} borra todo lo aprendido y deja sus partidas y marcas intactas. Ambas acciones se pueden deshacer hasta que cierre la cuantificación, y ambas se guardan con la cuantificación.

Para dejar de aprender en una cuantificación, desactive {{ui:Aprender de esta cuantificación}}. No se aprende nada nuevo, y lo que aparece en la lista se mantiene hasta que lo borre.

## Conviene saber

- Las versiones anteriores de TakeoffCraft abren un archivo con cosas aprendidas normalmente. Ignoran esa parte, y la descartan si vuelven a guardar el archivo.
- Un símbolo aprendido es una imagen pequeña de lo que encerró, guardada en el archivo (unos pocos kilobytes cada una).
- Los símbolos aprendidos se buscan como los de Conteo automático, así que aplican los mismos límites: [Contar automáticamente un símbolo](topic:auto-count).
