---
title: Tage og hældninger
summary: Giv et areal dets hældning for at måle tagfladen fra planen, og mål gavlkanter, valme og render langs deres skråning.
keywords: tag, hældning, skråning, hældningsfaktor, stigning, forløb, 6:12, gavlkant, valm, render, gavl, tagdækning, kvadrater, skråt areal, sand længde, planareal
from: 38225b60
---

En tagplan viser hver tagflade fladt, set oppefra. Selve taget er større: en flade med 6:12 har ca. 12 % mere overflade end sin plan, og dens skrå kanter er længere, end de ser ud. Giv posten dens hældning, så måler TakeoffCraft langs skråningen.

## Indtast en hældning

En hældning er stigningen pr. 12 i forløb, som på tagplanens hældningssymboler. Skriv den som `6:12`, `6/12` eller bare `6`; et andet forløb virker også (`4:10` er 4.8:12). En vinkel virker med gradtegn: `26.57°`. Tom eller `0` er fladt.

## Tagarealer

1. Opret en arealpost til tagdækningen, eller åbn den du har.
2. Skriv **Hældning**, for eksempel `6:12`, i dens indstillinger.
3. Tegn hver tagflade op på planen med {{ui:Areal}}, som normalt.

Hver flade tæller sit planareal gange hældningsfaktoren: √(1 + (stigning ÷ 12)²), 1.118 ved 6:12 og 1.414 ved 12:12. Vælg en flade for at se dens **Areal** (på skråningen), dens **Planareal** og **Hældningsfaktor**.

Flader med en anden hældning: vælg fladen og skriv dens egen **Hældning** i dens panel. Lad den stå tom for at bruge postens. 3D-kontrolvisningen, kalkulationsenhederne (`A` er det skrå areal), priserne og eksporten bruger alle det skrå areal. Fradragsarealer på en hældet flade, som tagvinduer, trækkes fra i samme hældning.

Omkredsen (`P`) forbliver planomkredsen. Mål udhæng, gavlkanter, valme og render som forløb (nedenfor).

## Gavlkanter, valme og render

1. Opret en lineær post, for eksempel »Gavlkant« eller »Valme«.
2. Sæt dens **Skråning** til **Gavlkant** (en skrå kant, som ved en gavl) eller **Valm eller render** (linjen hvor to flader mødes), og skriv **Hældningen** for tagfladerne.
3. Tegn forløbene på planen med {{ui:Lineær}}.

En gavlkant tæller sin planlængde gange hældningsfaktoren. En valm eller render løber i 45° over planen mellem to flader med samme hældning, så dens sande længde er planlængden gange √(1 + (stigning ÷ 12)² ÷ 2): 1.061 ved 6:12, 1.225 ved 12:12.

Ét forløb kan blande dem. Vælg det: hvert segment i dets panel har en skråliste — **Postens** (postens indstilling), **Niveau**, **Gavlkant** eller **Valm eller render** — og dets længde langs skråningen. Et forløbs egen **Hældning** i panelet erstatter postens for alle dets segmenter. Panelet viser også **Planlængde**, og etiketterne på arket viser længderne langs skråningen.

Fradrag virker stadig: et fratrukket segment tæller ingenting, uanset skråning.

:::note
Valmer og render forudsætter at begge flader har samme hældning. For flader med forskellig hældning, mål valmen efter sin sande længde et andet sted, eller tegn den som en gavlkant med en tilsvarende hældning.
:::
