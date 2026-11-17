---
title: Tak och lutningar
summary: Ge en area dess taklutning för att mäta takytan från ritningen, och mät gavelkanter, valmlinjer och dallinjer längs deras lutning.
keywords: tak, taklutning, lutning, lutningsfaktor, stigning, sträcka, 6:12, gavelkant, valmlinje, dalgång, gavel, takbeläggning, takyta, sann längd, planarea
from: 38225b60
---

En takplan visar varje takplan platt, sett uppifrån. Själva taket är större: ett plan på 6:12 har cirka 12 % mer yta än sin planarea, och dess lutande kanter är längre än de ser ut. Ge posten dess taklutning så mäter TakeoffCraft längs lutningen.

## Skriva in en taklutning

En taklutning är stigningen per 12 enheter sträcka, som på takplanens lutningssymboler. Skriv den som `6:12`, `6/12` eller bara `6`; en annan sträcka fungerar också (`4:10` är 4.8:12). En vinkel fungerar med gradtecken: `26.57°`. Tomt fält eller `0` betyder platt.

## Takareor

1. Skapa en areapost för takbeläggningen, eller öppna den du har.
2. Skriv in **Taklutning** i dess inställningar, till exempel `6:12`.
3. Rita upp varje takplan på ritningen med {{ui:Area}}, som vanligt.

Varje plan räknas med sin planarea gånger lutningsfaktorn: √(1 + (stigning ÷ 12)²), 1.118 vid 6:12 och 1.414 vid 12:12. Markera ett plan för att se dess **Area** (längs lutningen), dess **Planarea** och **Lutningsfaktor**.

Plan med en annan lutning: markera planet och skriv in dess egen **Taklutning** i panelen. Lämna den tom för att använda postens. Kontrollvyn i 3D, kalkylsammansättningarna (`A` är den lutande arean), kostnaderna och exporten använder alla den lutande arean. Avdrag på ett lutande plan, till exempel takfönster, dras av med samma lutning.

Omkretsen (`P`) förblir planomkretsen. Mät takfot, gavelkanter, valmlinjer och dallinjer som sträckor (nedan).

## Gavelkanter, valmlinjer och dallinjer

1. Skapa en linjär post, till exempel "Gavelkant" eller "Valmlinjer".
2. Ställ in dess **Lutning** till **Gavelkant** (en lutande kant, som på en gavel) eller **Valm eller dal** (linjen där två plan möts), och skriv in **Taklutningen** för takplanen.
3. Rita sträckorna på ritningen med {{ui:Linjär}}.

En gavelkant räknas med sin planlängd gånger lutningsfaktorn. En valm- eller dallinje går i 45° över ritningen mellan två plan med samma lutning, så dess sanna längd är planlängden gånger √(1 + (stigning ÷ 12)² ÷ 2): 1.061 vid 6:12, 1.225 vid 12:12.

En sträcka kan blanda dem. Markera den: varje segment i dess panel har en lutningslista — **Postens** (postens inställning), **Vågrät**, **Gavelkant** eller **Valm eller dal** — och dess längd längs lutningen. En sträckas egen **Taklutning** i panelen ersätter postens för alla dess segment. Panelen visar också **Planlängd**, och etiketterna på bladet visar längderna längs lutningen.

Avdrag fungerar fortfarande: ett avdraget segment räknar inte alls, lutande eller inte.

:::note
Valmar och dalar förutsätter att båda planen har samma lutning. För plan med olika lutningar, mät valmlinjen med dess sanna längd på annat sätt, eller rita den som en gavelkant med motsvarande lutning.
:::
