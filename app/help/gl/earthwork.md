---
title: Movemento de terras e cotas puntuais
summary: Marque cotas puntuais nunha planta de situación, envíeas a CivilCraft para a superficie e o desmonte e terraplén, e obteña aquí medicións sinxelas de escavación.
keywords: movemento de terras, escavación, desmonte, terraplén, desmonte e terraplén, nivelación, cota puntual, cotas, topografía, superficie, triangulación, civilcraft, puntos, pnezd, gabia
from: a898e508
---

TakeoffCraft mide o que está debuxado nunha folla. O movemento de terras necesita unha superficie do terreo, polo que se comparte con CivilCraft, que constrúe superficies a partir de puntos, nivela o terreo e calcula o desmonte, o terraplén e o transporte.

## Escavación sinxela aquí

Para unha pegada escavada a unha soa profundidade, abonda cun elemento de superficie con unha **profundidade**: o volume é superficie × profundidade. O [paquete de oficios xerais](topic:trade-packs) ten un elemento de escavación en masa (volume en banco, volume solto e cargas de camión) e un elemento de gabia de servizo (escavación, cama e recheo segundo a lonxitude e a profundidade).

## Cotas puntuais para CivilCraft

1. Defina a escala da folla do terreo.
2. Cree un elemento de tipo **Contar**, por exemplo "Terreo existente", e prema en cada cota puntual da folla.
3. Seleccione unha marca e escriba a súa {{ui:Cota}} no panel da marca seleccionada: `102.5`, `102'-6"` ou `31.24 m`. As cotas negativas e a cero son válidas.
4. Abra o menú {{ui:Exportar}} e escolla {{ui:Cotas puntuais}}. Obterá un ficheiro de puntos (`.csv`) con Point, Northing, Easting, Elevation e Description, unha fila por cada punto marcado da folla aberta.
5. Abra ese ficheiro en CivilCraft (consulte [Importar puntos](app:civilcraft/import-points)). Construirá a superficie a partir dos puntos ([Construír unha superficie](app:civilcraft/build-surface)); desde aí compara superficies e calcula o desmonte e o terraplén ([Volumes](app:civilcraft/volumes)).

Northing e easting son as coordenadas propias da folla, en pés, medidas desde a esquina da páxina segundo a súa escala: as distancias e os volumes entre os puntos son correctos, pero non son as coordenadas topográficas do seu terreo. Cando as necesite, móvaas ás coordenadas do terreo en CivilCraft.

:::note
Os puntos de follas distintas non comparten coordenadas, polo que a exportación toma só a folla aberta. As cotas gárdanse coa medición e pasan ao copiar e pegar.
:::

## Desmonte e terraplén desde CivilCraft

O movemento de terras de CivilCraft volve como dous elementos que pode valorar:

1. En CivilCraft, nivele as súas plataformas e corredores e escolla {{ui:Enviar a TakeoffCraft}} en **Movemento de terras** ([Volumes de movemento de terras](app:civilcraft/volumes)). Gárdase un ficheiro de cantidades (`.quantities.json`).
2. En TakeoffCraft, ábrao con {{ui:Abrir medición}}, ou solteo na aplicación. A súa medición queda aberta: o ficheiro engade **Movemento de terras: desmonte** e **Movemento de terras: terraplén** como [cantidades tipadas](topic:create-items#typed-quantities-no-drawing), en iardas cúbicas (CY) para un proxecto en pés, ou en metros cúbicos (m³) para un proxecto en metros. É un só paso: {{key:Mod+Z}} desfáo.
3. Cámbielles o nome, e estableza as perdas, as tarifas e os conxuntos como prefira.

Cando cambie o deseño, envíe de novo desde CivilCraft e abra o ficheiro novo: os mesmos dous elementos reciben as cantidades novas. Os seus nomes, tarifas, perdas e conxuntos mantéñense como os estableceu. Se cambiou a unidade do proxecto, a barra de estado móstrao: revise as tarifas. Un ficheiro doutro proxecto de CivilCraft engade os seus propios dous elementos.

As cantidades son volumes en banco, tal como os mediu CivilCraft (método de cuadrícula): sen contracción nin expansión. Engádaas como perda, ou cunha fórmula como `Q * 1.25` para o volume solto. O editor de elementos mostra de onde vén cada unha e cando, e a columna de notas do orzamento tamén o indica.

:::note
O ficheiro de cantidades é JSON simple (`"format": "cadcraft-quantities"`), polo que un script ou outro programa tamén pode escribir un: un nome de aplicación, un proxecto e elementos cunha clave, un nome, unha unidade e unha cantidade.
:::
