---
title: Tak og skråninger
summary: Gi et område takvinkel for å måle takflaten fra planen, og mål gavlkanter, valmgrater og renner langs skråningen.
keywords: tak, takvinkel, skråning, skråningsfaktor, stigning, løp, 6:12, gavlkant, valmgrat, renne, gavl, takbelegg, kvadrat, skrått areal, planareal, sann lengde
from: 38225b60
---

En takplan viser hver takflate flatt, sett ovenfra. Taket selv er større: en flate på 6:12 har omtrent 12 % mer overflate enn planen, og de skrå kantene er lengre enn de ser ut. Gi posten takvinkelen, så måler TakeoffCraft langs skråningen.

## Skriv inn en takvinkel

En takvinkel er stigning per 12 løp, slik som på takplanens takvinkelsymboler. Skriv den som `6:12`, `6/12` eller bare `6`; et annet løp fungerer også (`4:10` er 4.8:12). En vinkel fungerer med gradtegn: `26.57°`. Tomt eller `0` betyr flatt tak.

## Takflater

1. Lag en arealpost for takbelegget, eller åpne den du har.
2. I innstillingene skriver du inn **Takvinkel**, for eksempel `6:12`.
3. Tegn hver takflate på planen med {{ui:Areal}}, som vanlig.

Hver flate teller planarealet ganget med skråningsfaktoren: √(1 + (stigning ÷ 12)²), 1.118 ved 6:12 og 1.414 ved 12:12. Velg en flate for å se **Areal** (på skrått underlag), **Planareal** og **Skråningsfaktor**.

Flater med en annen takvinkel: velg flaten og skriv inn dens egen **Takvinkel** i panelet. La den stå tom for å bruke postens. 3D-kontrollvisningen, de sammensatte postene (`A` er det skrå arealet), kostnadene og eksporten bruker alle det skrå arealet. Fradrag på en skrå flate, for eksempel takvinduer, trekkes fra i samme skråning.

Omkretsen (`P`) forblir planomkretsen. Mål takskjegg, gavlkanter, valmgrater og renner som løp (se under).

## Gavlkanter, valmgrater og renner

1. Lag en lineær post, for eksempel «Gavlkant» eller «Valmgrater».
2. Sett **Skråning** til **Gavlkant** (en skrå kant, som på en gavl) eller **Valmgrat eller renne** (linjen der to flater møtes), og skriv inn **Takvinkel** for takflatene.
3. Tegn løpene på planen med {{ui:Linjær}}.

En gavlkant teller planlengden ganget med skråningsfaktoren. En valmgrat eller renne går i 45° over planen mellom to flater med samme takvinkel, så den sanne lengden er planlengden ganget med √(1 + (stigning ÷ 12)² ÷ 2): 1.061 ved 6:12 og 1.225 ved 12:12.

Ett løp kan blande dem. Velg det: hvert segment i panelet har en liste over skråning — **Postens** (postens innstilling), **Nivå**, **Gavlkant** eller **Valmgrat eller renne** — og lengden langs skråningen. Løpets egen **Takvinkel** i panelet erstatter postens for alle segmentene. Panelet viser også **Planlengde**, og etikettene på arket viser lengdene langs skråningen.

Fradrag virker fortsatt: et fratrukket segment teller ikke noe, skrått eller ikke.

:::note
Valmgrater og renner forutsetter at begge flatene har samme takvinkel. For flater med ulik takvinkel må du måle valmgraten etter sann lengde et annet sted, eller tegne den som en gavlkant med tilsvarende takvinkel.
:::
