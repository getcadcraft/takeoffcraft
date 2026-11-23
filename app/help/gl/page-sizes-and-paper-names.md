---
title: Tamaños de páxina e nomes de papel
summary: Vexa o tamaño de cada folla en milímetros e polgadas e o seu nome de papel (series A, B e C, ANSI, ARCH), e agrupe un conxunto mixto por tamaño para atopar as follas raras.
keywords: tamaño de páxina, tamaño de papel, nome de papel, a0, a1, a2, a3, a4, serie b, serie c, ansi, arch, arquitectónico, mm, polgadas, tamaño personalizado, por tamaño, tamaño raro, conxunto mixto, escala, conxunto de planos, mediabox, rotación
from: 9c061c07
---

Unha escala só ten sentido no papel correcto. {{ui:TakeoffCraft}} le o tamaño de cada folla PDF e nomea o papel, para que poida ver unha folla impresa a outro tamaño antes de fiarse dunha medida nela.

## Que vai facer

Mire o tamaño da folla aberta e despois agrupe todo o conxunto por tamaño.

## Pasos

1. Abra os planos ({{ui:Abrir planos}}).
2. A barra de follas sobre o debuxo amosa o nome de papel e o tamaño da folla aberta, por exemplo "A1 · 594 × 841 mm".
3. Cada fila da lista {{ui:Follas}} ten unha liña de tamaño debaixo do nome da folla.
4. Escolla {{ui:Por tamaño}} no encabezado de {{ui:Follas}}. A lista reúne as follas baixo un encabezado por tamaño, co grupo máis grande primeiro, e marca como raro un tamaño con só algunhas follas.
5. Escolla {{ui:Por tamaño}} de novo para volver á orde propia do conxunto.

Unha folla DWG ou DXF non ten papel, así que non se amosa tamaño para ela.

## Como se escolle o nome

- O tamaño sae da caixa da páxina no PDF, aplicando a súa rotación.
- Os nomes son as series A e B (ISO 216), a serie C (ISO 269), ANSI A a E e ARCH A a E.
- Unha páxina a menos de 2 mm dun tamaño con nome toma ese nome. Calquera outra páxina indica personalizado, co tamaño con nome máis próximo e canto se afasta.

## No orzamento

O libro de orzamento ten unha folla de cálculo {{ui:Tamaños de páxina}} co conteo de cada tamaño.

:::note
Os valores en polgadas de ANSI e ARCH introducíronse a partir das táboas publicadas e non se compararon coas normas impresas.
:::
