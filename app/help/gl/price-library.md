---
title: Biblioteca de prezos
summary: Garde os seus elementos, tarifas e conxuntos nunha biblioteca, impórtea desde un CSV ou un orzamento anterior, engada elementos dela a calquera medición e actualice os prezos dunha medición desde ela.
keywords: biblioteca, paquetes de oficios, lista de prezos, libro de prezos, base de datos de custos, importar csv, tarifas, conxuntos, reutilizar, elementos modelo, actualizar prezos, volver a prezar
from: 37356c68
---

A **biblioteca de prezos** garda os elementos que usa traballo tras traballo: o seu tipo, unidade, altura, desperdicio, tarifas de material e man de obra, e o seu conxunto. Gárdase neste navegador, á parte de calquera medición, así que cada medición que abra aquí pode usala.

Ábrase con {{ui:Biblioteca}} na parte superior do panel {{ui:Elementos}}.

## Encher a biblioteca

- {{ui:Importar CSV…}} le unha folla de cálculo gardada como CSV (vexa as columnas máis abaixo). Os elementos cuxo nome e tipo xa están na biblioteca substitúense; o resto engádense. As filas que non pode ler sáltanse, e indica cales e por que.
- {{ui:Engadir os elementos desta medición}} copia cada elemento da medición aberta á biblioteca, coas súas tarifas e o seu conxunto (non as súas marcas).
- O CSV de orzamento que exporta TakeoffCraft ([Exportar o orzamento](topic:export-estimate)) impórtase tal como é: os prezos do traballo anterior sementan o seguinte.

- {{ui:Paquetes de oficios…}} engade conxuntos gratuítos para un oficio, como pladur, electricidade ou formigón, sen prezos. Consulte [Paquetes de oficios](topic:trade-packs).

{{ui:Exportar CSV}} garda a biblioteca como CSV, para conservar unha copia, editala nunha folla de cálculo ou entregarlla a un compañeiro. {{ui:Baleirar}} vacíaa (prema dúas veces).

:::note
A biblioteca vive no almacenamento deste navegador. Outro navegador, outro ordenador ou unha xanela privada teñen a súa propia (ou ningunha). Expórteaa para movela.
:::

## Usala nunha medición

- Marque os elementos (escriba en {{ui:Buscar na biblioteca}} para reducir a lista) e escolla {{ui:Engadir á medición}}. Engádense cos seus conxuntos nun só paso que {{key:Mod+Z}} desfai. Un nome que xa está na medición recibe un número, como `Moqueta (2)`.
- {{ui:Actualizar prezos}} dá aos elementos da medición o desperdicio e as tarifas da biblioteca, para cada elemento cuxo nome e tipo coincidan cun elemento da biblioteca, e o mesmo para os compoñentes de conxunto co mesmo nome. Alturas, unidades e fórmulas quedan como están. Un {{key:Mod+Z}} repón todos os prezos antigos.

## As columnas do CSV

A primeira fila nomea as columnas, en calquera orde; as outras columnas ignóranse.

| Columna | Que vai nela |
|---|---|
| Item (or Name) | O nome do elemento. Obrigatorio. |
| Type | Linear, Area ou Count (LF, SF e EA tamén funcionan). Baleiro, decide a unidade. |
| Unit | LF ou m; SF, SY ou m²; EA. Baleiro: a unidade habitual do tipo. |
| Waste % | `10` ou `10%`. |
| Material per unit, Labor per unit | Tarifas como `2.10` ou `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, ou `2.7` para unidades métricas. |
| Component, Formula | Unha fila cun nome de Component (ou o Type `Component`) forma parte do conxunto do elemento de enriba. A súa Unit, Waste e tarifas son propias; a súa Formula usa as letras do elemento, consulte [Conxuntos e fórmulas](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

As comas, os punto e coma ou os tabuladores entre columnas funcionan todos.
