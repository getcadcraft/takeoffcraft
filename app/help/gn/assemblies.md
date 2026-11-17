---
title: Conjuntos ha fórmulas
summary: Emoĩ componentes peteĩ ítem-pe ha emoĩ fórmulas oikuaauka hag̃ua longitud, superficie térã cantidad montantes, soleras, placas, hormigón ha herrajes-pe, ejemplo muro trabajado rehegua.
keywords: conjunto, componentes, fórmula, montantes, placas de yeso, láminas, placas, hormigón, yardas cúbicas, herrajes, receta, típico, partes del ítem
from: 12891a21
---

Peteĩ ítem-pe **conjunto** ha'e lista de componentes; peteĩ-peteĩ oguereko **fórmula de cantidad** ha hembiapo desperdicio ha tasa. Fórmula ojapo ojeporu ítem-pe medidas totales, upévare peteĩ muro medición ombohasa montantes, soleras ha placas peteĩ jey, ha oñemoambue medida ojapo jave.

## Variables ojeporúva

| Tipo de ítem | Variables |
|---|---|
| Lineal | `L` longitud, `H` altura, `A` superficie de muro (L × H), `N` cantidad de tramos |
| Área | `A` superficie, `P` perímetro (contorno + aberturas), `H` profundidad térã espesor, `N` cantidad de áreas |
| Conteo | `N` cantidad |

Valores oĩ ítem-pe iñuenguéva: pie ha pie cuadrado ítem LF ha SF-pe, metro ha metro cuadrado ítem m ha m²-pe. Ítem SY-pe, `A` oĩ yarda cuadrada-pe ha `P` ha `H` oĩ pie-pe.

Fórmulas ojapo `+ - * /` (térã × ÷), paréntesis, número ha función `ceil`, `floor`, `round`, `min`, `max` ha `abs`. Regla hendaitéva oĩ [Lengua de fórmulas](topic:formulas).

## Ejemplo trabajado: muro interior

Ha'e peteĩ **Muro interior tipo A** ítem lineal-pe: 4 tramos, 120 LF ojoavýva, {{ui:Altura}} oñemoĩva `9'-0"`. Ichupe **Medido** valores ha'e L = 120, N = 4, A = 1,080 (SF muro, peteĩ cara).

1. Eiporavo ítem {{ui:Ítems}} rapykue.
2. {{ui:Conjunto}}-pe, ejepe {{ui:Agregar componente}}.
   Componente peteĩ "Componente" hérava oñehechauka, fórmula `L` ha ichupe resultado ipypýpe.
3. Emombe `Studs 16 in o.c.` {{ui:Nombre}}-pe ha `EA` {{ui:Unidad}}-pe.
4. {{ui:Fórmula de cantidad}}-pe, emombe `ceil(L * 12 / 16) + N`.
   Resultado oñemoambue emombe jave: "= 94 EA". Ha'e peteĩ montante 16 pulgada-pe 120 pie rehe (90), ha peteĩ jey ojejoaporãvo 4 tramo-kuéra.
5. Ejepe {{ui:Agregar componente}} jey soleras-pe: emombe `Plates, top and bottom` héra, unidad `LF`, fórmula `L * 2`. Resultado: 240 LF.
6. Emoĩ placa: hérava `Gypsum board 4x8, both sides`, unidad `sheets`, fórmula `ceil(A * 2 / 32)`. Resultado: 68 hojas (2,160 SF placa ÷ 32 SF hojápe = 67.5, ojapo ojegueraha).
7. Emombe peteĩ-peteĩ componente {{ui:Desperdicio %}}, {{ui:Material $}} ha {{ui:Mano de obra $}}.
   Peteĩ-peteĩ componente oguereko iñuenguéva {{ui:Cantidades}} ndive, ítem ojapo, ha {{ui:Total de la obra}} ohupytýta upe.

Muro costo opa componentes-pe oĩ jave, emboguére ítem-pe material ha mano de obra tasa 0-pe, ndaipórivo oñembohasa mbohapy jey.

:::tip
Desperdicio oñeapli fórmula rire ha ndojeñembyasyhápe: 68 hoja 10 % desperdicio-pe ha'e 74.8 hoja. Hoja opaite ojeipurúrõ, emoĩ desperdicio fórmula ryepýpe, koʼã ojapo `ceil(A * 2 / 32 * 1.1)`, ha componente desperdicio 0-pe jaeheja.
:::

## Ambue fórmulas

| Mba'épa | Ítem | Fórmula |
|---|---|---|
| Montantes 24 pulgada centro rehe | Lineal | `ceil(L / 2) + N` |
| Aislamiento SF | Lineal con altura | `A` |
| Pintura, mbohapy cara, galón 350 SF-pe | Lineal con altura | `ceil(A * 2 / 350)` |
| Azulejo caja 15 SF-pe, 10 % ambue | Área | `ceil(A * 1.1 / 15)` |
| Zócalo térã borde LF-pe | Área | `P` |
| Hormigón yarda cúbica | Área con profundidad | `A * H / 27` |
| Hormigón ojegueraha ¼ yarda-pe | Área con profundidad | `ceil(A * H / 27 * 4) / 4` |
| Bisagras, mbohapy puerta-pe | Conteo | `N * 3` |
| Peteĩ caja menos, peteĩ 12-pe | Conteo | `max(1, ceil(N / 12))` |

## Fórmula oiko vai rire

Fórmula mboriahu ojeporu line ojavy error mensaje-pe, por ejemplo `"X" ndaha'éi medida ko'ápe. Ojeporu L, H, A, N.` térã `A ")" omanyhẽ.` Upérõ componente ndoguereko cantidad, ha {{ui:Cantidades}}-pe ikatu ohechauka "Formula error: …", ha título-pe "Incomplete: 1 formula error (not in the totals)". Fórmula oñemoĩ porã, totales ohupytýta.

Fórmula oñemboja cero-pe ha'e error avei ("The formula divides by zero."), por ejemplo `A / H` ítem profundidad ndaiporavéiva.

## Límites

- Fórmulas oñeapli **totales** rehe, ndaha'éi tramo tramo. `ceil(L * 12 / 16) + N` oguerekóta peteĩ montante tramo-pe; ndaipórirõ ojegueraha tramo tramo.
- Fórmula ikatu ojeporu ítem ipopýpe variables, ndaha'éi ambue ítem-pe.
- Componentes 50 peve ítem-pe, fórmula 500 karaktér peve.

## Peteĩ componente mboguejy

Eiporavo {{ui:Quitar componente}} hendápe. {{key:Mod+Z}} ndive ikatu oheja.
