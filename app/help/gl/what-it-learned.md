---
title: O que aprendeu das súas medicións
summary: TakeoffCraft garda os símbolos que confirmou con Contaxe automática, os seus grupos de condicións, os conxuntos que máis usa e os patróns que repite en cada páxina, todo dentro do ficheiro da propia medición. Véxao, use e elimíneo.
keywords: aprender, aprendido, aprendizaxe, asistente, lembrar, símbolos, modelos, igual que o último traballo, último traballo, grupo de condicións, condicións, reutilizar, conxuntos, máis usados, suxestións, repetir en cada páxina, cada páxina, cartela, patrón, limpar todo, esquecer, privacidade
from: 54d99e99
---

TakeoffCraft faise máis rápido canto máis medicións fai con el. Aprende **só do que acepta**:

- os símbolos que marcou con [Contaxe automática](topic:auto-count) e despois engadiu,
- os grupos de condicións que garda,
- os conxuntos que usa (unha vez por traballo),
- os patróns de marcas que repite en cada páxina.

É unha simple coincidencia de patróns nas súas propias follas, a mesma busca que fai Contaxe automática. Non é un modelo adestrado. Todo o que aprende consérvase **no ficheiro desta medición** (`.takeoff.json`), e non se envía a ningures. Para levalo ao seguinte traballo, use [Igual que o último traballo](topic:what-it-learned#same-as-last-job).

Escolla {{ui:Aprendido}} na barra de ferramentas (a lámpada, xunto a {{ui:Contaxe automática}}) para ver todo.

## Símbolos

Cando marca un símbolo con {{ui:Contaxe automática}} e escolle {{ui:Engadir}}, consérvase o símbolo marcado, co nivel de coincidencia que aceptou.

- En {{ui:Aprendido}}, escolla {{ui:Atopar nesta folla}} ou {{ui:Atopar en todas as follas}}. Ábrese a revisión habitual de Contaxe automática: prema nunha caixa para deixala fóra, mova o control deslizante e logo engádeas. Non se engade nada ata que o faga.
- Cando abre unha folla que aínda non ten ningún dos símbolos aprendidos, unha barra na parte superior ofrece {{ui:Atopar …}} para ese símbolo. {{ui:Agora non}} oculta a oferta para esa folla.
- Se a medición non ten ningunha partida con ese nome, ao engadir as marcas engádese tamén a partida (un paso de desfacer).
- Engadir de novo o símbolo da mesma partida conta para a que xa coñece; un símbolo de aspecto distinto consérvase como un segundo.
- Como Contaxe automática, atopa o símbolo en ángulo recto e en follas doutra escala.

## Grupos de condicións

Un grupo conserva as condicións dunha medición (partidas coas súas unidades, tarifas, desperdicio e conxuntos), sen marcas.

1. En {{ui:Aprendido}}, escolla {{ui:Gardar as condicións desta medición como grupo…}} e dálle un nome. Un grupo co mesmo nome substitúese.
2. Nunha medición que teña o grupo, {{ui:Engadir}} pon as condicións que aínda non ten. As condicións co mesmo nome e tipo déixanse como están. É un paso de desfacer.

## Igual que o último traballo

O ficheiro do último traballo garda o que aprendeu. Para iniciar un traballo novo a partir del:

1. Abra os planos novos e escolla {{ui:Aprendido}} › {{ui:Igual que o último traballo…}}.
2. Escolla o `.takeoff.json` do último traballo.
3. Marque o que traer: as súas condicións (só as que esta medición non ten) e o que aprendeu (símbolos, grupos, conxuntos, patróns). Logo {{ui:Traelas}}.

As súas condicións gárdanse tamén como un grupo co nome dese traballo. As súas marcas e cantidades quedan no seu propio ficheiro. Todo é un único paso de desfacer.

## Conxuntos que máis usa

Unha partida que ten un conxunto conta como usada unha vez por traballo cando ten unha cantidade e vostede garda a medición. Un traballo é o conxunto de planos ao que se lle tira a medición, así que gardar de novo a mesma medición non conta dúas veces. A lista baixo {{ui:Conxuntos que máis usa}} pon primeiro os que máis usa. Deixa fóra os que esta medición xa ten. {{ui:Engadir}} engade un tal como o usou por última vez, con todas as súas pezas.

## Repetir en cada páxina

Para marcas iguais en cada páxina dun conxunto, como un conto de cartela ou un detalle típico:

1. Seleccione as marcas nunha folla ([Seleccionar as marcas](topic:copy-paste#select-the-marks)).
2. En {{ui:Aprendido}}, escolla {{ui:Repetir as marcas seleccionadas en cada páxina…}}, dálle nome ao patrón e confirme.

Van a cada outra páxina aberta **do mesmo tamaño**, no mesmo lugar, nun só paso de desfacer. Lonxitudes e superficies só van en páxinas da mesma escala; as contas van en calquera páxina dese tamaño. Unha páxina que xa as ten sáltase. O patrón consérvase, así que as páxinas que abra despois reciben a oferta na barra, ou usan {{ui:Repetir en cada páxina}} na lista.

## Vela e elimínea

Todo o aprendido aparece listado en {{ui:Aprendido}}. A papeleira elimina unha cousa. {{ui:Limpar todo}} elimina todo o aprendido e deixa as súas partidas e marcas como están. Ambas as cousas poden desfacerse ata que peche a medición, e ambas gárdanse coa medición.

Para deixar de aprender nunha medición, desmarque {{ui:Aprender desta medición}}. Non se aprende nada novo, e o listado mantense ata que o elimine.

## Cousas boas de saber

- As versións anteriores de TakeoffCraft abren un ficheiro con cousas aprendidas con normalidade. Ignoran esa parte e a eliminan se gardan o ficheiro de novo.
- Un símbolo aprendido é unha pequena imaxe do que marcou, gardada no ficheiro (uns poucos kilobytes cada unha).
- Os símbolos aprendidos búscanse como os busca Contaxe automática, así que aplícanse os mesmos límites: [Contar automaticamente un símbolo](topic:auto-count).
