---
title: Àrees de pressupost
summary: Etiqueteu les marques per edifici, planta o fase, mesureu dins d'una àrea cada vegada, i llegiu les quantitats i els costos de cada àrea.
keywords: variant a sumar, variant a restar, oferta base, variants, àrea de pressupost, àrea, edifici, planta, nivell, fase, zona, variant, desglossament, dividir, planta típica, subtotal, per àrea
from: 64f3d41c
---

Una àrea de pressupost és una part de l'obra que pressupostareu per separat: un edifici, una planta, una fase, una ala. Cada marca pot ser en una àrea de pressupost. Les quantitats i el pressupost es poden llegir per a cada àrea, amb un subtotal per a cada una, mentre que el total de l'obra continua sent la suma de tot.

## Crear una àrea de pressupost

1. A la part superior del tauler {{ui:Elements}}, obriu la llista {{ui:Àrea de pressupost}}.
2. Trieu **Àrea de pressupost nova…**, escriviu un nom com "Edifici A" o "Nivell 2", i trieu **Crea-la**.
   L'àrea nova passa a ser l'actual. La barra d'estat diu "Les marques noves van a (name). Les marques d'altres àrees de pressupost es veuen atenuades."

## Mesurar dins d'una àrea

Mentre hi hagi una àrea de pressupost triada a la llista, cada marca nova hi va: trams, àrees, cercles, recomptes, les marques que afegeix {{ui:Recompte automàtic}} i el que enganxeu. Les marques d'altres àrees i les que no en tenen es veuen atenuades al full, perquè pugueu veure a quin lloc pertany cadascuna.

Trieu **Sense àrea de pressupost** a la llista per mesurar sense cap àrea; aleshores no s'atenua res.

:::tip
Plantes típiques: mesureu el Nivell 2, seleccioneu-ne les marques ({{key:Mod+A}} al full), copieu-les, trieu Nivell 3 a la llista i enganxeu. Les còpies van al Nivell 3. Quan les plantes són iguals i no cal separar-les, un [grup típic](topic:typical-groups) en pot comptar una planta diverses vegades.
:::

## Moure marques a una altra àrea

Seleccioneu una marca o diverses ({{key:Shift}} + clic, o {{key:Mod+A}}). Sota **Marca seleccionada** (o **Marques seleccionades**), trieu l'àrea al camp {{ui:Àrea de pressupost}}. La barra d'estat diu "3 marques traslladades al Nivell 2." És un sol pas per desfer.

## Canviar el nom, reordenar o suprimir

Trieu **Gestiona les àrees de pressupost…** a la llista. Escriviu a sobre d'un nom per canviar-lo, useu les fletxes per canviar l'ordre (les taules i el llibre de càlcul el segueixen), o suprimiu-ne una amb la paperera. En suprimir una àrea de pressupost es conserven les seves marques: aleshores no estan en cap àrea de pressupost. {{key:Mod+Z}} desfà cada canvi.

## Llegir les quantitats per àrea

A la taula {{ui:Quantitats}}, trieu {{ui:Per àrea}} (apareix quan l'amidament té una àrea de pressupost). Cada àrea llista els elements que conté, amb la seva quantitat, unitat i total, i després una fila de subtotal. Les marques que no són en cap àrea de pressupost van les últimes, com a **Sense àrea de pressupost**. Feu clic en una fila d'element per ressaltar-lo i fer que aquella àrea sigui l'actual.

Els preus descomposts es calculen per a cada àrea a partir dels totals de la pròpia àrea. Una fórmula que arrodoneix a dalt, com `ceil(L / 4)`, pot donar una mica més en la suma de les àrees que en el conjunt de l'obra, com passaria en una oferta pressupostada àrea per àrea.

## Variants: oferta base més sumes i restes

Una àrea de pressupost pot ser una **variant**: feina que el propietari pot sumar a l'oferta, o treure'n. A **Gestiona les àrees de pressupost…**, cada àrea té una llista al costat del seu nom:

| Opció | Què fa |
|---|---|
| {{ui:Oferta base}} | A l'oferta, com de costum. |
| {{ui:Variant a sumar}} | Pressupostada per separat i **exclosa de l'oferta base**: una millora de moqueta, una marquesina addicional. |
| {{ui:Variant a restar}} | A l'oferta base, i ofertada com a deducció: "suprimeix la marquesina". |

Mesureu la feina d'una variant dins de la seva àrea de pressupost com qualsevol altra àrea. Quan l'amidament té una variant:

- La capçalera de la taula {{ui:Quantitats}} diu **Oferta base** en lloc de Total de l'obra: tot l'amidament sense les variants a sumar.
- {{ui:Per àrea}} acaba amb l'oferta base i una fila per cada variant: **+$300.00** per a una suma, **−$1,050.00** per a una resta.
- Una variant només valora els elements que tenen marques dins seu, amb els seus preus descomposts, de manera que una part del preu descompost d'un altre element no s'hi colà.

En les exportacions, el CSV acaba amb l'oferta base i les variants, i el llibre de càlcul rep un full **Variants**: l'oferta base, els elements de cada variant i el seu canvi, i l'oferta base amb totes les variants a sumar incloses.

## A l'exportació

{{ui:XLSX}} afegeix un full **Per àrea de pressupost**: els elements i components de cada àrea amb quantitat, quantitat amb pèrdua, material, mà d'obra i total, un subtotal per àrea (una fórmula `SUM`) i **Totes les àrees de pressupost** al final. El full **Marques** rep una columna **Àrea de pressupost**. Un amidament sense àrees de pressupost s'exporta com abans. Vegeu [Columnes d'exportació](topic:export-columns).

Les àrees de pressupost es desen al fitxer del projecte amb les marques.
