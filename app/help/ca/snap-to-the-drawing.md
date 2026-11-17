---
title: Ajusta a les línies del dibuix
summary: Els punts salten a les línies vectorials del propi PDF mentre mesures o calibres: extrems, punts mitjans, creuaments o qualsevol punt d'una línia, amb un marcador que indica quin és.
keywords: pas, referència a objectes, osnap, punt final, punt mitjà, intersecció, més proper, vector, línies, precís, exacte, F3, imant, cantonada
from: 41d29e9b
---

La majoria de jocs de plànols són PDF vectorials: els murs i les vores són línies reals, no píxels. Mentre mesures, TakeoffCraft ajusta els clics a aquestes línies, de manera que un recorregut comença exactament a la cantonada d'un mur i una calibració llegeix la cota que va dibuixar el delineant, no el píxel on has fet clic.

El pas està activat en començar. Activa'l i desactiva'l amb {{ui:Pas}} a la barra d'estat o amb {{key:F3}}; la configuració es manté en aquest navegador (també és a [Configuració](topic:settings)).

## A què ajusta

Quan el punter és a uns 10 píxels de pantalla d'una línia, un marcador indica on quedarà el clic, amb el seu nom:

| Marcador | Nom | On |
|---|---|---|
| Quadrat | **Final** | L'extrem d'una línia, o una cantonada on es troben línies. Els dos extrems d'una corba compten; els punts al llarg d'aquesta no. |
| Triangle | **Punt mitjà** | El centre d'una línia recta. |
| Creu | **Intersecció** | On es creuen dues línies, o on una acaba sobre una altra. |
| Rellotge de sorra | **Sobre la línia** | El punt més proper d'una línia, quan no hi ha cap extrem, punt mitjà ni creuament a prop. |

Guanya l'extrem, el punt mitjà o el creuament més proper. Només quan cap no és a prop, el punt va sobre la línia mateixa. Amplia la vista per triar entre punts molt junts: els 10 píxels són píxels de pantalla, de manera que amb més zoom cobreixen menys part del full.

## On funciona

El pas funciona a {{ui:Lineal}}, {{ui:Àrea}}, {{ui:Cercle}}, {{ui:Tall}}, {{ui:Calibra}} i {{ui:Comprova}}, i quan arrossegues la cantonada d'una marca seleccionada. També situa els punts dels arcs. {{ui:Recompte}}, {{ui:Recompte automàtic}} i enganxar no s'ajusten.

Un punt ajustat té prioritat sobre l'ajust de 45° de {{key:Shift}}: per dibuixar a 45° lluny de les línies, desactiva primer el pas amb {{key:F3}}.

:::tip
Calibra amb el pas activat. Fes clic a prop dels dos extrems d'una cota o d'un mur que coneguis: els dos punts quedaran exactament sobre el dibuix i l'escala sortirà exacta (la barra d'estat llavors indica la predefinida que hi coincideix).
:::

## On no es pot ajustar

- **Els fulls escanejats** són imatges sense línies a les quals ajustar-se. La barra d'estat diu "This sheet has no lines to snap to (a scanned page is a picture)." i els punts van on facis clic.
- **Dibuixos molt grans**: l'ajust llegeix fins a 400,000 segments de línia per full. En un full amb més, ho indica i només s'ajusta als primers.
- **El text** no es fa servir per ajustar, tret que el PDF dibuixi les lletres com a línies (alguns traçadors ho fan).

Les línies del full es llegeixen la primera vegada que l'obres, en segon pla; un full gran pot trigar un segon a mostrar els marcadors.
