---
title: Tomar cantidades dun modelo do edificio
summary: Abra o modelo IFC do arquitecto, véxao en 3D, escolla muros, chans, portas e o resto por tipo, material, capa ou tamaño, e leve os seus conteos, lonxitudes, áreas e volumes á medición. Unha copia máis nova do modelo actualiza as mesmas cantidades.
keywords: modelo, medición de modelo, vista 3D, facer clic nunha peza, buscar a fila, material, capa, capas de muro, pladur, illamento, tamaños de porta, tamaños de xanela, cadro de portas e xanelas, csv, 3d, bim, ifc, rvt, modelo do edificio, cantidades, muros, chans, portas, xanelas, piares, cuartos, por tipo, por nivel, actualizar, modelo máis novo, desenvolvemento do deseño
from: 8c4c12c9
---

Non ten que esperar pola seguinte serie de debuxos. Cando o arquitecto envíe o modelo do edificio, ábrao aquí e tome as cantidades directamente del. O modelo lese no seu computador; non se envía nada a ningures.

## Pasos

1. Escolla {{ui:Modelo}} na barra de ferramentas e seleccione o ficheiro `.ifc` do modelo, ou ábrao con {{ui:Abrir planos}} como calquera outro ficheiro.
2. {{ui:Medición de modelo}} ábrese cunha fila por categoría e tipo: muros por tipo de muro, chans por tipo de chan, portas por tipo de porta, e así por diante. Cada fila amosa o seu conteo e a unidade en que se mide esa categoría.
3. Estableza {{ui:Agrupar por}} en {{ui:Categoría}} para un total rápido, ou en {{ui:Categoría, tipo e nivel}} para separar cada tipo por piso.
4. Desmarque as filas que non quere. {{ui:Buscar}} reduce a lista. Desmarcar unha fila tamén oculta as súas pezas na imaxe 3D.
5. Dea ao modelo un {{ui:Nome do modelo}} que vai conservar durante todo o traballo, por exemplo o nome do proxecto.
6. Escolla {{ui:Engadir á medición}}. Cada cantidade convértese nunha cantidade tipificada na lista de elementos. Póñalle nome, prezo e asocie conxuntos como con calquera outro elemento.

## Ver o modelo en 3D

{{ui:Amosar o modelo en 3D}} debuxa o modelo por riba da táboa, cunha cor para cada fila (o cadriño de cor xunto ao nome da fila). Arrastre para xiralo, manteña {{key:Shift}} e arrastre para movelo, use a roda para facer zoom, e escolla {{ui:Axuste}} ou {{ui:Restablecer}} para volver.

- **Faga clic nunha peza** da imaxe e a súa fila selecciónase na táboa, coas pezas desa fila iluminadas e o resto pálidas. Faga clic de novo na mesma peza e, se está en varias filas (un muro nas súas capas), selecciónase a fila seguinte.
- **Faga clic nunha fila** da táboa para iluminar as súas pezas. Faga clic de novo, ou faga clic nun espazo baleiro da imaxe, para limpar.
- Os cuartos non se debuxan, porque o volume dun cuarto taparía o edificio.
- Un modelo moi grande garda só unha caixa para algunhas pezas, para que caiba na memoria; o panel indica cantas son. Os números non cambian.

Se este computador non pode debuxar en 3D, a táboa funciona como antes.

## Agrupar por material, capa ou tamaño

{{ui:Agrupar por}} ten tres opcións máis:

- {{ui:Categoría e material}}: un muro, chan ou cuberta construído en capas dá ao material de cada capa a súa propia fila, así que o pladur, os montantes e o illamento poden prezarse por separado. Unha parte do edificio cun só material recibe a fila dese material, e unha sen ningún material queda nunha fila chamada "Sen material indicado".
- {{ui:Categoría e capa}}: o mesmo, coa espesura da capa na fila ("Illamento, 100 mm").
- {{ui:Categoría, tipo e tamaño de porta ou xanela}}: portas e xanelas sepáranse por ancho e alto (por exemplo 3'-0" × 6'-8" ou 914 × 2.032 mm).

Para unha capa, a área é a cara propia do muro (ou a superficie en planta ou a superficie do chan ou da cuberta) e o volume é esa área pola espesura da capa. A nota da fila indica cantos números saíron dunha capa. As capas dun muro suman o volume que o modelo indica para ese muro.

## Gardar as filas ou as aberturas como CSV

{{ui:Gardar filas como CSV}} garda as filas que marcou, coas unidades en cada cabeceira, para unha folla de cálculo. {{ui:Gardar o cadro de portas e xanelas como CSV}} (só cando o modelo ten portas ou xanelas) garda cada porta e xanela por tipo, nivel e tamaño, co seu conteo.

## Que se mide

| Categoría | Cantidades |
|---|---|
| Muros | conteo, lonxitude, superficie de muro (unha cara, descontadas as aberturas), volume |
| Chans, laxes, teitos e outros revestimentos | conteo, área en planta, volume |
| Cubertas | conteo, área en planta, superficie da cuberta, volume |
| Cimentacións | conteo, área en planta, volume |
| Piares, vigas e outros membros | conteo, lonxitude ao longo do membro, volume |
| Pasamáns, tubaxes, condutos e tendidos de cable | conteo, lonxitude |
| Escaleiras | conteo, volume |
| Cuartos | conteo, área do chan, volume |
| Portas, xanelas e todo o demais | conteo |

Cando o autor do modelo indicou unha cantidade no ficheiro, úsase ese número. En caso contrario, o número mídese a partir da forma do elemento. Cada cantidade conserva unha nota que indica cal das dúas foi, e cantos elementos deron un número.

:::note
A lonxitude dun muro medida desde a súa forma vai de extremo a extremo, así que dous muros que se solapan nunha esquina contan ambos a esquina. Un volume necesita unha forma pechada: un elemento cuxa forma non está pechada contase, pero non dá volume. Un elemento de muro curvo ou con esquinas mídese como a metade de todas as súas caras verticais, e a súa nota así o indica.
:::

## Cando chega un modelo máis novo

Abra o ficheiro máis novo e escriba o mesmo {{ui:Nome do modelo}}. Antes de engadir nada, o panel indica cantas cantidades son novas, cantas cambiaron e de que valor a que valor, e cales cantidades da copia anterior xa non están no modelo. Escolla {{ui:Engadir á medición}}: as cantidades que cambiaron adoptan os seus novos números, e os seus nomes, tarifas, desperdicio e conxuntos mantéñense. As cantidades que xa non están no modelo conservan os seus números antigos; elimínaas vostede se o deseño as retirou.

Os nomes de tipo e nivel son como se recoñece unha cantidade. Se o arquitecto cambia o nome dun tipo de muro, chega como unha cantidade nova e a antiga aparece como retirada.

## Ficheiros que lee isto

Ficheiros IFC (IFC2x3, IFC4 e IFC4.3). Un ficheiro IFC con estradas, vías ou pontes segue traendo directamente as súas cantidades de infraestrutura, como antes.

TakeoffCraft non lee ficheiros `.rvt` nesta versión. Se o arquitecto traballa en Revit, pida unha exportación IFC do modelo (Ficheiro, Exportar, IFC) e ábrao.

Un modelo pode traer ata 500 cantidades de cada vez. Se hai máis, desmarque filas ou agrupe por categoría.
