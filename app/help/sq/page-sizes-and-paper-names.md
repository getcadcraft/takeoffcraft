---
title: Madhësitë e faqeve dhe emrat e letrës
summary: Shihni madhësinë e çdo fletë në milimetra dhe inç dhe emrin e letrës së saj (seritë A, B dhe C, ANSI, ARCH), dhe gruponi një set të përzier sipas madhësisë për të gjetur fletët e çuditshme.
keywords: madhësia e faqes, madhësia e letrës, emri i letrës, a0, a1, a2, a3, a4, seria b, seria c, ansi, arch, arkitekturore, mm, inç, madhësi e personalizuar, sipas madhësisë, madhësi e çuditshme, set i përzier, shkallë, set planesh, mediabox, rrotullim
from: 9c061c07
---

Një shkallë ka kuptim vetëm në letrën e duhur. {{ui:TakeoffCraft}} lexon madhësinë e çdo fletë PDF dhe emërton letrën, që të shihni një fletë të printuar në madhësi tjetër përpara se t'i besoni një matjeje mbi të.

## Çfarë do të bëni

Shikoni madhësinë e fletës së hapur, pastaj gruponi tërë setin sipas madhësisë.

## Hapat

1. Hapni planet ({{ui:Open plans}}).
2. Shiriti i fletës mbi vizatim tregon emrin e letrës së fletës së hapur dhe madhësinë e saj, për shembull "A1 · 594 × 841 mm".
3. Çdo rresht i listës {{ui:Sheets}} ka një rresht madhësie nën emrin e fletës.
4. Zgjidhni {{ui:By size}} te kreu i {{ui:Sheets}}. Lista i mbledh fletët nën një titull për çdo madhësi, grupi më i madh i pari, dhe shënon një madhësi me vetëm disa fletë si të çuditshme.
5. Zgjidhni {{ui:By size}} përsëri për t'u kthyer te rendi i vetë setit.

Një fletë DWG ose DXF nuk ka letër, prandaj nuk shfaqet asnjë madhësi për të.

## Si zgjidhet emri

- Madhësia vjen nga kutia e faqes në PDF, me rrotullimin e aplikuar.
- Emrat janë seritë A dhe B (ISO 216), seria C (ISO 269), ANSI A deri E dhe ARCH A deri E.
- Një faqe brenda 2 mm nga një madhësi e emërtuar merr atë emër. Çdo faqe tjetër thotë personalizuar, me madhësinë e emërtuar më të afërt dhe sa larg është.

## Në preventiv

Libri i preventivit ka një fletëllogaritëse {{ui:Page sizes}} me numrin e çdo madhësie.

:::note
Vlerat ANSI dhe ARCH në inç u shkruan nga tabelat e botuara dhe nuk janë krahasuar me standardet e printuara.
:::
