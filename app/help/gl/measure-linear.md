---
title: Medir tramos lineais
summary: Tomar muros, tubaxes, cortinas e outras lonxitudes como tramos, con segmentos rectos, arcos e o axuste de 45 graos con Shift.
keywords: lineal, lonxitude, tramo, polilínea, muros, lf, pés lineais, arco, curva, 45 graos, ortogonal, axuste, segmentos, polilonxitude, deducir, oco, porta, abertura, escribir, escrito, coordenadas, distancia, distancia directa, polar
from: c669deff
---

Un elemento lineal mide lonxitude. Cada tramo é unha cadea de puntos: segmentos rectos, e arcos onde activa o modo arco. Un elemento pode ter calquera número de tramos en calquera número de follas.

Antes de empezar: a folla necesita unha escala ([Definir a escala](topic:set-the-scale)) e precisa un elemento lineal ([Crear elementos de medición](topic:create-items)).

Nun PDF vectorial, os seus clics encaixan nas liñas propias do debuxo: extremos, puntos medios e cruces ([Axustar ás liñas do debuxo](topic:snap-to-the-drawing); {{key:F3}} desactívao).

## Debuxar un tramo

1. Faga clic no elemento lineal baixo {{ui:Items}}.
2. Escolla {{ui:Linear}} na barra de ferramentas, ou prema {{key:L}}.
3. Faga clic no inicio do tramo.
4. Faga clic en cada esquina ao longo del.
   A barra de estado mostra «Lonxitude» (o tramo ata o punteiro) e «segmento» (o segmento que debuxa), en pés e polgadas.
5. Remate o tramo: faga dobre clic no último punto, prema {{key:Enter}} ou faga clic dereito.
   O tramo debúxase coa cor do elemento e convértese na marca seleccionada. A lonxitude do elemento na lista de {{ui:Items}} e na táboa de {{ui:Quantities}} aumenta.

A ferramenta queda en {{ui:Linear}}, así que pode empezar o seguinte tramo de inmediato. Prema {{key:Esc}} para volver a {{ui:Select}}.

Mentres debuxa:

- {{key:Backspace}} (ou {{key:Delete}}) elimina o último punto.
- {{key:Esc}} descarta o tramo sen rematar.
- Arrastrar despraza a folla e a roda fai zoom, sen engadir puntos.

:::mac
Nun trackpad de Mac, o clic dereito é un clic con dous dedos (active o clic secundario en Configuración do sistema, en Trackpad). TakeoffCraft lee só o botón secundario, así que un clic con Control pode tomarse como clic simple e engadir un punto. Dobre clic ou {{key:Enter}} sempre rematan.
:::

:::touch
Nunha pantalla táctil, toque para colocar puntos, arrastre cun dedo para desprazar e faga pinza con dous para facer zoom. Remate cunha pulsación longa, cun dobre toque, ou con {{ui:Finish}} na barra baixo a folla ({{ui:Back}} quita o último punto). Vexa [Resolución de problemas](topic:troubleshooting#touch-screens).
:::

## Liñas rectas en pasos de 45°

Manteña {{key:Shift}} mentres coloca un punto. O segmento desde o último punto axústase á dirección de 0°, 45°, 90° ou 135° máis próxima, conservando a lonxitude que arrastrou ao longo dela. A barra de estado lembra: «Shift axusta a 45°».

En modo arco aplícase onde remata un arco: a corda do arco vai en pasos de 45° desde onde comeza. O punto que fai clic na curva nunca se axusta.

## Arcos e muros curvos

1. Mentres debuxa un tramo, coloque o punto onde empeza a curva.
2. Active o modo arco: escolla {{ui:Arc}} na barra de ferramentas ou prema {{key:R}}. O botón queda premido.
3. Faga clic en calquera punto da curva, máis ou menos no medio dela.
   A barra de estado engade «(arco: faga clic onde remata)» e a vista previa dobra pelo seu punto.
4. Faga clic onde remata a curva.
   O arco engádese. A súa lonxitude é a lonxitude exacta do arco, non unha serie de cordas curtas.
5. Faga clic noutro punto da seguinte curva e no seu final para seguir debuxando arcos, ou prema {{key:R}} de novo para volver aos segmentos rectos.

{{key:Backspace}} ou {{key:Esc}} primeiro descartan o punto pendente da curva; prema de novo para quitar puntos como de costume.

## Escribir lonxitudes e coordenadas

Despois do primeiro punto, pode escribir onde irá o seguinte en vez de facer clic. Escriba un díxito, `@` ou `#`: abrirase unha caixa {{ui:Type}} na barra de estado co que escribiu. Prema {{key:Enter}} para colocar o punto; a caixa queda aberta para o seguinte.

| Escribir | Onde vai o seguinte punto |
|---|---|
| `12'6"` | 12'-6" desde o último punto, cara ao punteiro (apunte o sentido, despois escriba a lonxitude) |
| `12'6"<45` | 12'-6" a 45°, contados en sentido antihorario desde a dereita da pantalla (`<90` é cara arriba, `<-90` cara abaixo) |
| `@6',-4'` | 6' á dereita e 4' abaixo desde o último punto |
| `6',4'` (ou `#6',4'`) | 6' á dereita e 4' arriba desde o primeiro punto deste tramo |

As lonxitudes escríbense como en todo TakeoffCraft ([Formatos de entrada](topic:entry-formats)): `12'-6 1/2"`, `12.5` (pés), `30"`, `3.2 m`. «Dereita» e «arriba» son como as ve na folla, tamén cando a páxina do PDF está xirada.

{{key:Enter}} nunha caixa baleira remata o tramo, igual que {{key:Enter}} na folla; {{key:Esc}} pecha a caixa e deixa o tramo en curso. Os puntos escritos seguen as mesmas regras que os clics: deduccións, arcos e pechar unha superficie funcionan todos. A mesma caixa funciona en {{ui:Area}} e {{ui:Cut-out}}; despois do centro dun círculo toma o raio.

## Deducir unha parte dun tramo

Un tramo de muro que pasa por unha porta ou por un escaparate pode debuxarse recto e aínda así contar só o muro: os segmentos que cruzan o oco son **deduccións**. Debúxanse con trazos discontinuos e finos, e non se contan.

Mentres debuxa:

1. Coloque o punto onde empeza o oco.
2. Escolla {{ui:Deduct}} na barra de ferramentas ou prema {{key:E}}. O botón queda premido e a barra de estado indica que os seguintes segmentos son deduccións.
3. Faga clic onde remata o oco. O segmento debúxase con trazos discontinuos; «Lonxitude» na barra de estado non o inclúe.
4. Prema {{key:E}} de novo e siga polo muro.

Despois de debuxar: seleccione o tramo. Baixo **Marca seleccionada**, cada segmento ten unha caixa de {{ui:Deduct}}: márquea para deducir ese segmento, desmárcea para volver a contalo. Cada cambio é un paso de desfacer.

Un tramo sempre conserva polo menos un segmento que conta. O panel mostra entón **Deduccións** (a lonxitude deducida) e **Debuxado** (o tramo completo); **Lonxitude**, a cantidade do elemento, a superficie do muro e os custos usan a lonxitude sen deduccións. A vista de comprobación 3D deixa un oco no muro, o PDF marcado debuxa as deduccións con trazos discontinuos, e a folla exportada **Marcas** enumera as deduccións.

Mover unha esquina conserva as deduccións. Engadir ou quitar puntos (debuxando de novo o tramo) comeza sen elas.

## Ver os detalles dun tramo

Escolla {{ui:Select}} ({{key:V}}) e faga clic no tramo. **Marca seleccionada** á dereita mostra:

- o elemento ao que pertence (escolla outro elemento lineal na lista para mover o tramo ata alí),
- a folla,
- **Lonxitude** en pés e polgadas e en LF,
- o número de **Segmentos**, e a **Superficie do muro** cando o elemento ten altura,
- a lonxitude de cada segmento, con «(arco)» detrás dos arcos, e a súa caixa de {{ui:Deduct}}.

Na folla, cada segmento do tramo seleccionado leva a súa lonxitude como etiqueta.

## Corrixir un tramo

- **Mover un punto**: seleccione o tramo e arrastre un dos seus manexadores cadrados de esquina. Manteña {{key:Shift}} para axustar o segmento movido a pasos de 45°. Un arco conserva o seu abultamento.
- **Dobrar un arco**: un tramo seleccionado mostra un manexador redondo no medio de cada arco. Arrástreo: o arco pasa polo lugar onde solta, así que dobra máis, menos ou para o outro lado. Se o arrastra ata a recta entre os seus extremos, convértese nun segmento recto. {{key:Mod+Z}} desfai («Dobrar arco»).
- **Eliminar un tramo**: selecciónao e prema {{key:Delete}}, escolla {{ui:Delete}} no menú {{ui:More}} da barra de ferramentas, ou {{ui:Delete mark}} no panel.
- **Desfacer**: {{key:Mod+Z}}; refacer con {{key:Mod+Y}}.

Non se pode inserir un punto no medio dun tramo por agora. Elimine o tramo e debúxeo de novo.

## Superficie do muro

Dé ao elemento lineal unha {{ui:Height}} (por exemplo `9'-0"`). Entón informa **Superficie do muro (A)** = lonxitude × altura, en SF (ou m² nun elemento métrico), e a superficie do muro vai á columna de notas da folla de cálculo exportada. Úsea nos conxuntos para taboleiro, pintura ou illamento: vexa [Conxuntos e fórmulas](topic:assemblies).
