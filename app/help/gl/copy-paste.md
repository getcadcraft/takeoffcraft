---
title: Copiar, pegar e duplicar marcas
summary: Copie marcas cos seus elementos, péguas onde faga clic ou no mesmo sitio noutra folla, duplíqueas, corte, elimine e seleccione todo, cada unha cun paso para desfacer.
keywords: copiar, pegar, cortar, duplicar, pegar no mesmo sitio, portapapeis, seleccionar todo, non seleccionar nada, varias marcas, planta tipo, repetir, mesmo plano, outra folla, copiar elemento, duplicar elemento
from: e20e9024
---

O grupo {{ui:Editar}} da barra de ferramentas contén {{ui:Desfacer}}, {{ui:Refacer}}, {{ui:Copiar}} e {{ui:Pegar}}. O seu menú {{ui:Máis}} ten o resto, cada un coa súa tecla: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar no mesmo sitio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} e {{ui:Non seleccionar nada}}. Cada un é un paso para desfacer con {{key:Mod+Z}}.

## Seleccionar as marcas

1. Escolla {{ui:Seleccionar}} ({{key:V}}) e faga clic nunha marca.
2. Manteña premida {{key:Shift}} e faga clic en máis marcas para engadilas. {{key:Shift}} + clic nunha marca seleccionada retírea de novo.
3. Ou prema {{key:Mod+A}} ({{ui:Seleccionar todo}}) para tomar todas as marcas da folla aberta.

Con varias marcas seleccionadas, o panel dereito mostra **Marcas seleccionadas**: cantas de cada elemento, con {{ui:Copiar}}, {{ui:Duplicar}}, {{ui:Cortar}} e {{ui:Eliminar marcas}}. As asas de esquina só se mostran cando hai unha marca seleccionada. {{key:Esc}} ({{ui:Non seleccionar nada}}) borra a selección.

## Copiar e pegar onde faga clic

1. Seleccione as marcas e prema {{key:Mod+C}} ({{ui:Copiar}}). As marcas cópianse cos seus elementos, incluídos o conxunto, o desperdicio e os custos de cada elemento.
2. Vaia á folla onde as quere (pode ser a mesma folla).
3. Prema {{key:Mod+V}} ({{ui:Pegar}}). Unha copia en trazos segue o punteiro.
4. Faga clic onde debe ir. O centro das marcas copiadas cae no punteiro.

{{key:Esc}} cancela e non engade nada. As marcas pegadas quedan seleccionadas despois, así que {{key:Delete}} ou {{key:Mod+Z}} as retiran de novo.

Na mesma medición, as marcas pegadas van aos **mesmos elementos**, así que as súas cantidades se suman a eses elementos. Noutra medición (outra lapela, ou despois de {{ui:Novo}}), úsase un elemento co mesmo nome e tipo; se non, o elemento engádese co seu conxunto. Se o nome está ocupado por un elemento doutro tipo, o elemento engadido chámase «(nome) (copia)».

As marcas pegadas van á zona de oferta escollida na parte superior do panel {{ui:Elementos}} (ou a ningunha). Consulte [Zonas de oferta](topic:bid-areas).

## Pegar no mesmo sitio

{{key:Mod+Shift+V}} ({{ui:Pegar no mesmo sitio}}) pon a copia exactamente no mesmo lugar da folla aberta, pola súa posición na páxina. Use-o para unha planta tipo: medir o nivel 2, copiar, abrir o nivel 3, pegar no mesmo sitio.

Pegar no mesmo sitio precisa unha folla do **mesmo tamaño** que a que copiou. Nunha folla de outro tamaño TakeoffCraft di iso e non pega nada; use {{ui:Pegar}} e faga clic. Na folla desde a que copiou, a copia cae enriba dos orixinais.

## A escala ten que coincidir

As lonxitudes e as áreas dependen da escala da folla. Un tramo que mide 10' a 1/4" = 1'-0" mediríase 20' nunha folla a 1/8" = 1'-0". Por iso TakeoffCraft pega tramos e áreas só nunha folla coa **mesma escala** que a folla de onde proceden, e di claramente cando non:

- A folla aberta aínda non ten escala: dálle unha primeiro ([Fixar a escala](topic:set-the-scale)), e logo pegue.
- A folla aberta ten outra escala: a mensaxe nomea as dúas escalas. Pegue nunha folla á mesma escala.
- As contaxes non precisan escala: as contaxes copiadas pégan en calquera lugar.

## Duplicar

{{key:Mod+D}} ({{ui:Duplicar}}) copia as marcas seleccionadas e pon a copia no punteiro de inmediato; faga clic onde debe ir. Non se engade nada ata que faga clic, e {{key:Esc}} non deixa nada. Duplicar non cambia o que {{ui:Pegar}} pega.

## Cortar e eliminar

- {{key:Mod+X}} ({{ui:Cortar}}) copia as marcas seleccionadas e elimínaas. Péguas onde corresponden, ou desfaga o corte.
- {{key:Delete}} ou {{key:Backspace}} ({{ui:Eliminar}}) elimina as marcas seleccionadas sen copialas.

## Copiar un elemento

O editor de elementos (en **Elementos**) remata con:

- {{ui:Copiar elemento}}: copia o elemento co seu conxunto, desperdicio e custos, sen marcas. {{ui:Pegar}} engade entón unha copia del a esta medición, ou a outra.
- {{ui:Duplicar elemento}}: engade unha copia de inmediato, co nome «(nome) (copia)».

:::tip
A copia queda neste ordenador: gárdase nesta lapela e no almacenamento do navegador, para que outra lapela de TakeoffCraft poida pegala. Non se envía nada, e non se usa o portapapeis do sistema, así que non pode pegar marcas noutros programas.
:::

:::note
Unha copia procede dunha folla de cada vez. As marcas pégan tal como están: aínda non hai xiro nin espello dunha copia.
:::
