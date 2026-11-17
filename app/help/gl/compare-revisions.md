---
title: Comparar unha folla revisada e mover a medición
summary: Poña a folla antiga sobre a súa revisión, aliñe as dúas, vexa o que cambiou e mova a medición á nova folla coas marcas a comprobar sinaladas.
keywords: revisión, revisado, comparar, superposición, antigo, novo, cambios, adenda, boletín, nova emisión, mover medición, transferir, pasar, aliñar, sinalado, comprobar
from: 3a1d9fe0
---

Cando unha folla se emite de novo, non ten que volver medila. Abra o PDF antigo e o novo, compare as dúas follas e mova a medición. TakeoffCraft sinala cada marca onde o debuxo cambiou, para que as comprobe e conserve o resto.

## Comparar

1. Abra os dous PDF: o conxunto antigo e o revisado ({{ui:Abrir planos}}; poden estar nun ficheiro ou en varios).
2. Mostre a folla **nova**.
3. Escolla {{ui:Comparar}} na barra da folla, debaixo do debuxo.
4. Escolla a folla antiga na lista. TakeoffCraft suxire a folla co mesmo número do outro PDF, ou a mesma páxina. Escolla **Comparar**.

O debuxo antigo sitúase agora sobre o novo en vermello. Onde coinciden, as liñas vermellas quedan sobre as negras; onde difiren, ve só liñas vermellas (eliminadas) e só liñas negras (engadidas). Unha barra na parte inferior da folla contén os pasos seguintes; {{key:Esc}} ou {{ui:Pechar}} remata a comparación.

## Aliñar

As follas revisadas adoitan imprimirse un pouco desalineadas: movidas na páxina, ou a un tamaño lixeiramente distinto. Se o debuxo vermello non cae sobre o negro, escolla **Aliñar por dous puntos** e faga clic catro veces:

1. un punto do debuxo antigo (vermello), como o centro dun piar ou unha esquina do edificio,
2. o mesmo punto no debuxo novo (negro),
3. un segundo punto no debuxo vermello, lonxe do primeiro,
4. o mesmo punto no debuxo negro.

O debuxo vermello móvese, xírase e escálase sobre o negro. A barra de estado indica canto maior é o debuxo novo («tamaño × 1.000» cando é o mesmo). Achegue o zoom para as seleccións: canto máis preciso o clic, mellor o axuste.

## Buscar cambios

Escolla **Buscar cambios**. TakeoffCraft compara a tinta dos dous debuxos: a tinta só da folla antiga volve vermella, a tinta só da folla nova volve azul, e a barra de estado conta-as. As liñas que se moveron un pouco (un novo trazado) non se contan como cambios.

Tamén mira cada marca da folla antiga e conta as que están onde o debuxo cambiou:

- un tramo ou unha área cando o debuxo cambiou nun dos seus extremos ou esquinas, ou ao longo de polo menos aproximadamente unha sexta parte da súa lonxitude;
- unha contaxe cando algo cambiou xusto ao seu lado.

## Mover a medición

Escolla **Mover a medición aquí**. Cada marca da folla antiga pasa á nova, a través do aliñamento, nun só paso para desfacer. As que están xunto a un cambio sinálanse: debuxanse cun halo laranxa, e a barra da folla mostra «(n) por comprobar».

Se a nova folla non tiña escala, toma a escala da folla antiga (axustada cando os debuxos tiveron que escalarse para aliñarse). Se xa tiña unha escala diferente, TakeoffCraft pregunta primeiro: as marcas movidas miden-se á escala da nova folla.

## Comprobar as marcas sinaladas

1. Escolla «(n) por comprobar» na barra da folla. Vai á seguinte marca sinalada e selecciónaa; o seu panel indica o motivo da sinalización.
2. Corrixa a marca se o debuxo cambiou debaixo dela (arrastre as súas esquinas, engada ou elimine marcas, ou retírea de novo).
3. Escolla **Comprobado** no seu panel. A sinalización desaparece e a contaxe da barra da folla baixa.

As sinalizacións gárdanse coa medición, para que as poida comprobar máis tarde.

:::note
A comparación funciona tanto con PDF vectoriais como con escaneados, porque compara o que está debuxado. Un escaneado torto ou estirado pode aliñarse só de forma aproximada con dous puntos; comprobe entón máis marcas a ollo.
:::
