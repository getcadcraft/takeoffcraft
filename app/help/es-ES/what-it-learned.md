---
title: Lo que aprendió de sus cuantificaciones
summary: TakeoffCraft guarda los símbolos que confirmó con Autorrecuento, sus conjuntos de condiciones, los ensamblajes que más usa y los patrones que repite en todas las páginas, todo dentro del archivo propio de la cuantificación. Véalo, úselo, elimínelo.
keywords: aprender, aprendido, aprendizaje, asistente, recordar, símbolos, plantillas, igual que el último trabajo, último trabajo, conjunto de condiciones, condiciones, reutilizar, ensamblajes, más usados, sugerencias, repetir en todas las páginas, todas las páginas, cajetín, patrón, borrar todo, olvidar, privacidad
from: 54d99e99
---

TakeoffCraft mejora cuantas más cuantificaciones haga con él. Aprende **solo de lo que usted acepta**:

- los símbolos que encerró con [Autorrecuento](topic:auto-count) y luego añadió,
- los conjuntos de condiciones que guarda,
- los ensamblajes que usa (una vez por trabajo),
- los patrones de marcas que repite en todas las páginas.

Es una simple coincidencia sobre sus propias hojas, la misma búsqueda que ejecuta Autorrecuento. No es un modelo entrenado. Todo lo que aprende se guarda **en el archivo de esta cuantificación** (`.takeoff.json`), y no se envía a ningún sitio. Para llevarlo al siguiente trabajo, use [Igual que el último trabajo](topic:what-it-learned#same-as-last-job).

Elija {{ui:Aprendido}} en la barra de herramientas (la bombilla, junto a {{ui:Autorrecuento}}) para verlo todo.

## Símbolos

Al encerrar un símbolo con {{ui:Autorrecuento}} y elegir {{ui:Añadir}}, el símbolo que encerró se guarda, con el nivel de coincidencia que aceptó.

- En {{ui:Aprendido}}, elija {{ui:Buscar en esta hoja}} o {{ui:Buscar en todas las hojas}}. Se abre la revisión habitual de Autorrecuento: haga clic en un recuadro para dejarlo fuera, mueva el deslizador y luego añádalos. No se añade nada hasta que lo haga.
- Al abrir una hoja que aún no tiene ninguno de los símbolos aprendidos, una barra en la parte superior ofrece {{ui:Buscar …}} para ese símbolo. {{ui:Ahora no}} lo oculta para esa hoja.
- Si la cuantificación no tiene ninguna partida con ese nombre, al añadir las marcas también se añade la partida (un paso de deshacer).
- Añadir de nuevo el símbolo de la misma partida cuenta para el que ya conoce; un símbolo de aspecto distinto se guarda como un segundo.
- Como en Autorrecuento, encuentra el símbolo en ángulos rectos y en hojas a otra escala.

## Conjuntos de condiciones

Un conjunto guarda las condiciones de una cuantificación (partidas con sus unidades, tarifas, desperdicio y ensamblajes), sin marcas.

1. En {{ui:Aprendido}}, elija {{ui:Guardar las condiciones de esta medición como un conjunto…}} y dele un nombre. Un conjunto con el mismo nombre se reemplaza.
2. En una cuantificación que tenga el conjunto, {{ui:Añadir}} pone las condiciones que aún no tiene. Las condiciones con el mismo nombre y tipo se dejan como están. Es un paso de deshacer.

## Igual que el último trabajo

El archivo del último trabajo guarda lo que aprendió. Para empezar un trabajo nuevo a partir de él:

1. Abra los planos nuevos y elija {{ui:Aprendido}} › {{ui:Igual que el último trabajo…}}.
2. Seleccione el `.takeoff.json` del último trabajo.
3. Marque qué traer: sus condiciones (solo las que esta cuantificación no tiene) y lo que aprendió (símbolos, conjuntos, ensamblajes, patrones). Después, elija {{ui:Traerlos}}.

Sus condiciones también se guardan como un conjunto con el nombre de ese trabajo. Sus marcas y cantidades se quedan en su propio archivo. Todo ello es un único paso de deshacer.

## Ensamblajes que más usa

Una partida que tiene un ensamblaje cuenta como usada una vez por trabajo cuando tiene cantidad y guarda la cuantificación. Un trabajo es el conjunto de planos del que se mide, así que volver a guardar la misma cuantificación no cuenta dos veces. La lista bajo {{ui:Ensamblajes que más usa}} pone primero los que más usa. Omite los que esta cuantificación ya tiene. {{ui:Añadir}} pone uno tal como lo usó la última vez, con todas sus partes.

## Repetir en todas las páginas

Para marcas que son iguales en todas las páginas de un conjunto, como un recuento de cajetín o un detalle típico:

1. Seleccione las marcas de una hoja ([Seleccionar las marcas](topic:copy-paste#select-the-marks)).
2. En {{ui:Aprendido}}, elija {{ui:Repetir las marcas seleccionadas en todas las páginas…}}, nombre el patrón y confirme.

Se colocan en todas las demás páginas abiertas **del mismo tamaño**, en el mismo lugar, en un solo paso de deshacer. Longitudes y áreas solo van en páginas con la misma escala; los recuentos van en cualquier página de ese tamaño. Una página que ya las tiene se omite. El patrón se guarda, así que las páginas que abra más tarde recibirán la oferta en la barra, o podrá usar {{ui:Repetir en todas las páginas}} en la lista.

## Véalo, elimínelo

Todo lo aprendido aparece en {{ui:Aprendido}}. La papelera elimina una cosa. {{ui:Borrar todo}} elimina todo lo aprendido y deja sus partidas y marcas tal cual. Ambas acciones se pueden deshacer hasta que cierre la cuantificación, y ambas se guardan con ella.

Para dejar de aprender en una cuantificación, desmarque {{ui:Aprender de esta medición}}. Ya no se aprende nada nuevo, y lo que aparece en la lista se queda hasta que lo borre.

## Bueno saber

- Las versiones anteriores de TakeoffCraft abren un archivo con cosas aprendidas con normalidad. Ignoran esa parte y la descartan si guardan el archivo de nuevo.
- Un símbolo aprendido es una pequeña imagen de lo que encerró, guardada en el archivo (unos pocos kilobytes cada una).
- Los símbolos aprendidos se buscan como lo hace Autorrecuento, así que se aplican los mismos límites: [Contar un símbolo con Autorrecuento](topic:auto-count).
