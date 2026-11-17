---
title: Cubertas e pendentes
summary: Dé a unha área a súa pendente para medir a superficie da cuberta desde o plano, e mida rafos, limatesas e vales ao longo da súa inclinación.
keywords: cuberta, pendente, inclinación, factor de inclinación, subida, percorrido, 6:12, rafo, limatesa, vale, testeiro, teito, cadrados, área inclinada, lonxitude real, área en planta
from: 38225b60
---

Un plano de cuberta mostra cada faldón plano, visto desde arriba. A cuberta en si é máis grande: un plano a 6:12 ten preto de 12 % máis superficie que a súa proxección, e os seus bordos inclinados son máis longos do que parecen. Dea ao elemento a súa pendente e TakeoffCraft mide ao longo da inclinación.

## Escribir unha pendente

A pendente é a subida por cada 12 de percorrido, como nos símbolos de pendente do plano de cuberta. Escríbaa como `6:12`, `6/12` ou só `6`; outro percorrido tamén serve (`4:10` equivale a 4.8:12). Un ángulo funciona co símbolo de grao: `26.57°`. En branco ou `0` é plana.

## Áreas de cuberta

1. Cree un elemento de área para a cuberta, ou abra o que xa ten.
2. Nos seus axustes, escriba a **Pendente**, como `6:12`.
3. Trace o contorno de cada faldón no plano con {{ui:Area}}, como de costume.

Cada faldón conta a súa área en planta polo factor de inclinación: √(1 + (subida ÷ 12)²), 1.118 a 6:12 e 1.414 a 12:12. Seleccione un faldón para ver a súa **Área** (sobre a inclinación), a súa **Área en planta** e o **Factor de inclinación**.

Faldóns con outra pendente: seleccione o faldón e escriba a súa propia **Pendente** no seu panel. Déixea en branco para usar a do elemento. A vista de comprobación 3D, os conxuntos (`A` é a área inclinada), os custos e a exportación usan todos a área inclinada. As deducións nun faldón inclinado, como as claraboias, descóntanse á mesma inclinación.

O perímetro (`P`) segue sendo o perímetro en planta. Mida os aleros, rafos, limatesas e vales como percorridos (abaixo).

## Rafos, limatesas e vales

1. Cree un elemento lineal, como «Bordo de rafo» ou «Limatesas».
2. Estableza a súa **Inclinación** en **Rafo** (un bordo inclinado, como o dun testeiro) ou en **Limatesa ou vale** (a liña onde se atopan dous faldóns), e escriba a **Pendente** dos faldóns.
3. Debuxe os percorridos no plano con {{ui:Linear}}.

Un rafo conta a súa lonxitude en planta polo factor de inclinación. Unha limatesa ou un vale vai a 45° no plano entre dous faldóns da mesma pendente, así que a súa lonxitude real é a súa lonxitude en planta por √(1 + (subida ÷ 12)² ÷ 2): 1.061 a 6:12, 1.225 a 12:12.

Un mesmo percorrido pode mesturalos. Seleccióneo: cada segmento no seu panel ten unha lista de inclinación — **Do elemento** (o axuste do elemento), **Nivel**, **Rafo** ou **Limatesa ou vale** — e a súa lonxitude ao longo da inclinación. A **Pendente** do propio percorrido no panel substitúe a do elemento para todos os seus segmentos. O panel tamén mostra a **Lonxitude en planta**, e as etiquetas da folla mostran as lonxitudes ao longo da inclinación.

As deducións seguen funcionando: un segmento deducido non conta nada, inclinado ou non.

:::note
Limatesas e vales supoñen que os dous faldóns teñen a mesma pendente. Para faldóns de pendentes distintas, mida a limatesa pola súa lonxitude real noutro lugar, ou debúxea como un rafo cunha pendente equivalente.
:::
