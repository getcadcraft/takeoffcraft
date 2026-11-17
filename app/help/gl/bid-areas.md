---
title: Zonas de oferta
summary: Etiquete as marcas por edificio, planta ou fase, meda nunha zona de cada vez e lea as cantidades e os custos de cada zona.
keywords: engadir alternativa, deducir alternativa, oferta base, alternativas, zona de oferta, zona, edificio, planta, nivel, fase, sector, alternativa, desglose, dividir, planta tipo, subtotal, por zona
from: 64f3d41c
---

Unha zona de oferta é unha parte da obra que se valora por separado: un edificio, unha planta, unha fase, unha ala. Cada marca pode estar nunha zona de oferta. As cantidades e o orzamento poden lerse entón para cada zona, con un subtotal para cada unha, mentres o total da obra segue sendo a suma de todo.

## Crear unha zona de oferta

1. Na parte superior do panel {{ui:Elementos}}, abra a lista {{ui:Zona de oferta}}.
2. Escolla **Nova zona de oferta…**, escriba un nome como "Edificio A" ou "Nivel 2", e escolla **Crear**.
   A nova zona pasa a ser a actual. A barra de estado di "As novas marcas van en (nome). As marcas doutras zonas de oferta aparecen atenuadas."

## Medir nunha zona

Mentres unha zona de oferta está escollida na lista, cada marca nova vai nela: liñas, superficies, círculos, contaxes, as marcas que engade {{ui:Auto count}} e o que pegue. As marcas doutras zonas, e as que non están en ningunha, aparecen atenuadas na folla para que vexa o que corresponde a cada sitio.

Escolla **Sen zona de oferta** na lista para medir sen ningunha; entón non se atenúa nada.

:::tip
Plantas tipo: meda o Nivel 2, seleccione as súas marcas ({{key:Mod+A}} na folla), copie e, na lista, escolla Nivel 3 e pegue. As copias van no Nivel 3. Cando as plantas son iguais e non precisa separalas, un [grupo tipo](topic:typical-groups) conta unha planta varias veces.
:::

## Mover marcas a outra zona

Seleccione unha marca ou varias (manteña premido {{key:Shift}} e prema, ou use {{key:Mod+A}}). Baixo **Marca seleccionada** (ou **Marcas seleccionadas**), escolla a zona no campo {{ui:Zona de oferta}}. A barra de estado di "3 marcas movidas ao Nivel 2." É un só paso de desfacer.

## Renomear, reordenar ou eliminar

Escolla **Xestionar zonas de oferta…** na lista. Escriba por riba dun nome para cambialo, use as frechas para cambiar a orde (as táboas e o libro seguen a orde), ou elimine unha coa papeleira. Ao eliminar unha zona de oferta, as súas marcas conservanse: quedan entón en ningunha zona de oferta. {{key:Mod+Z}} desfai cada cambio.

## Ler as cantidades por zona

Na táboa {{ui:Cantidades}}, escolla {{ui:Por zona}} (aparece cando a medición ten unha zona de oferta). Cada zona lista os elementos que contén, coa súa cantidade, unidade e total, e logo unha fila de subtotal. As marcas en ningunha zona van ao final, como **Sen zona de oferta**. Prema unha fila de elemento para resaltar o elemento e facer desa zona a actual.

Os conxuntos calcúlanse para cada zona a partir dos totais propios desa zona. Unha fórmula que redondea cara arriba, como `ceil(L / 4)`, pode dar un pouco máis nas zonas en conxunto que para toda a obra, como sucedería nunha oferta valorada zona por zona.

## Alternativas: oferta base máis engadidos e deducidos

Unha zona de oferta pode ser unha **alternativa**: traballo que o propietario pode engadir á oferta, ou quitar dela. En **Xestionar zonas de oferta…**, cada zona ten unha lista xunto ao seu nome:

| Opción | Que fai |
|---|---|
| {{ui:Oferta base}} | Na oferta, como de costume. |
| {{ui:Alternativa para engadir}} | Valorada por separado e **deixada fóra da oferta base**: unha mellora da moqueta, unha marquesina extra. |
| {{ui:Alternativa para deducir}} | Na oferta base, e ofrecida como dedución: "eliminar a marquesina". |

Meda o traballo dunha alternativa na súa zona de oferta como calquera outra zona. Cando a medición ten unha alternativa:

- A cabeceira da táboa {{ui:Cantidades}} di **Oferta base** en lugar de {{ui:Total da obra}}: toda a medición sen as alternativas de engadido.
- {{ui:Por zona}} remata coa oferta base e unha fila por alternativa: **+300,00 $** para un engadido, **−1.050,00 $** para un deducido.
- Unha alternativa valora só os elementos que teñen marcas nela, cos seus conxuntos, para que non se cole unha peza de conxunto doutro elemento.

Nas exportacións, o CSV remata coa oferta base e as alternativas, e o libro recibe unha folla **Alternativas**: a oferta base, os elementos de cada alternativa e o seu cambio, e a oferta base con todas as alternativas de engadido quitadas.

## Na exportación

{{ui:XLSX}} engade unha folla **Por zona de oferta**: os elementos e compoñentes de cada zona, con cantidade, cantidade con merma, material, man de obra e total, un subtotal por zona (unha fórmula `SUM`) e **Todas as zonas de oferta** ao final. A folla **Marcas** recibe unha columna **Zona de oferta**. Unha medición sen zonas de oferta exporta como antes. Consulte [Columnas da exportación](topic:export-columns).

As zonas de oferta gárdanse no ficheiro do proxecto, xunto coas marcas.
