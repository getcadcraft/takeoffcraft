---
title: Ler as cantidades e o orzamento
summary: Use a táboa de Cantidades por elemento e por folla, o total da obra, o resaltado e o aviso de Incompleto.
keywords: cantidades, totais, por elemento, por folla, total da obra, orzamento, resumo, informe, resaltar, incompleto, custos
from: 069d41f1
---

A táboa {{ui:Quantities}} situada na parte inferior da xanela é o seu orzamento en tempo real. Cambia no momento en que debuxa, elimina, cambia a escala ou edita unha tarifa. As cantidades nunca se gardan; mídense de novo a partir das marcas cada vez, así que non se poden desfasar.

## Por elemento

Escolla {{ui:By item}} (o predeterminado). Cada elemento ten unha fila, e cada un dos seus compoñentes de conxunto ten unha fila debaixo.

| Columna | Significado |
|---|---|
| Elemento | Nome, coa cor do elemento. "+(n) sen escala" indica que algunhas marcas están en follas sen escala. |
| Cantidade | O total medido na unidade do elemento (compoñentes: o resultado da fórmula). |
| Unidade | LF, m, SF, SY, m², EA, ou a unidade do compoñente. |
| Desperdicio % | Escríbese aquí ou no editor do elemento. |
| Con desperdicio | Cantidade × (1 + desperdicio). |
| Material/unidade, Man de obra/unidade | Tarifas; pódense escribir aquí. |
| Material, Man de obra | Con desperdicio × tarifa, redondeado ao céntimo. |
| Total | Material + man de obra. |

A última fila, **Total da obra**, suma as columnas de material, man de obra e total. O mesmo total aparece á dereita do encabezado da táboa.

Escriba nunha cela de desperdicio ou de tarifa e prema {{key:Enter}} ou faga clic fóra para aplicalo. Un valor que TakeoffCraft non pode ler ponse con contorno vermello, e a barra de estado indica o motivo, por exemplo «Escriba unha cantidade como 12.50.»

Faga clic na fila dun elemento para resaltar as súas marcas en todas as follas e saltar a unha folla que as teña (igual que facendo clic debaixo de {{ui:Items}}).

## Por folla

Escolla {{ui:By sheet}} para ver a cantidade de cada elemento en cada folla, co número de marcas. Faga clic nunha fila para abrir esa folla co elemento resaltado. Use esta opción para comprobar que todas as follas foron medidas, ou para repartir as cantidades por planta ou por zona de traballo.

## Por zona

Cando a medición ten zonas de oferta, {{ui:By area}} lista os elementos de cada zona e un subtotal. Vexa [Zonas de oferta](topic:bid-areas).

## O aviso de Incompleto

Cando algo queda fóra dos totais, o encabezado mostra un aviso, por exemplo:

«Incompleto: 1 erro de fórmula, 6 marcas en follas sen escala (non están nos totais)»

- **Erros de fórmula**: a fórmula dun compoñente de conxunto non se pode calcular. A súa fila di «Erro de fórmula: …». Vexa [Conxuntos e fórmulas](topic:assemblies#when-a-formula-is-wrong).
- **Marcas en follas sen escala**: dea a esas follas unha escala. Vexa [Definir a escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

As mesmas notas pasan á folla de cálculo exportada, así que un orzamento incompleto nunca parece completo.

## Resaltar un elemento

Faga clic nun elemento debaixo de {{ui:Items}} ou na táboa. As súas marcas quedan a plena intensidade en todas as follas e o resto esvaécese. A lista de follas mostra «(n) resaltadas» en cada folla coas súas marcas. Faga clic de novo no elemento para deixar de resaltalo.

## Totais dos elementos no panel lateral

Cada elemento da lista {{ui:Items}} tamén mostra a súa cantidade. O bloque **Medido** do editor de elementos mostra os valores que usan as súas fórmulas: lonxitude, tramos e superficie de muro; superficie, perímetro e número de áreas; ou contaxe.

## Marcas en PDF que non están abertos

Unha medición pode incluír marcas en PDF que non abriu nesta ocasión. Seguen contando en todos os totais, e a lista de follas indica eses PDF. Vexa [Gardar e reabrir unha medición](topic:save-and-reopen).

## Máis espazo

O botón de frecha á dereita do encabezado de {{ui:Quantities}} oculta a táboa para que a folla teña máis espazo. Prema de novo para recuperala.
