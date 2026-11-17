---
title: Zgjidh vijat e PDF-së
summary: Kliko një vijë të një PDF vektoriale për të matur tërë shtegun e saj të lidhur, ose kliko brenda një konture të mbyllur për sipërfaqen e tij, me tolerancën e hendekut të shfaqur dhe një zhbërje për çdo segment.
keywords: shteg, zgjidh, vija, të lidhura, tërë varg, gjurmo, kontur, perimetër, hendek, tolerancë, urë, segmente, skedë, vektor, sipërfaqe nga vijat, p
from: c22526ae
---

Në një PDF vektoriale, muret dhe skajet janë vija të vërteta. {{ui:Shteg}} ({{key:P}}) i merr ato siç janë vizatuar: një klikim mbi një vijë mat çdo gjë të lidhur me të, nga skaji në skaj, kështu që nuk gjurmon një mur duke klikuar kthesat e tij. Fleta duhet të ketë shkallë. Një faqe e skanuar nuk ka vija për t'u zgjedhur; përdor [Linear](topic:measure-linear) ose [Sipërfaqe](topic:measure-areas) atje.

## Zgjidh një shteg ose kontur

1. Zgjidh {{ui:Shteg}}. Vija nën tregues kornizohet, dhe shtigjet e tjera që mund të ishte vizatuar hollë.
2. Kliko një vijë: i tërë shtegu i lidhur zgjidhet. Shiriti nën shiritin e veglave jep segmentet e tij, gjatësinë, tolerancën e hendekut dhe sa hendeqe u kaluan. Një shteg që kthehet te fillimi i vet është i mbyllur dhe raporton edhe perimetrin e vet.
3. Ose kliko brenda një konture të mbyllur, larg çdo vije: kontura rreth asaj pike zgjidhet si sipërfaqe. Më e vogla vjen e para; {{key:Tab}} provon konturin tjetër më të madh.
4. Shtyp {{key:Enter}} (ose kliko me butonin e djathtë, ose kliko dy herë) për të shtuar shenjat. Një shteg i zgjedhur bëhet shenjë e një artikulli **linear**, një kontur shenjë e një artikulli **sipërfaqe**: artikulli aktiv nëse ka atë lloj, përndryshe më i riu i atij lloji. Pa asnjë, formulari i artikullit të ri hapet dhe asgjë nuk shtohet derisa të shtypësh {{key:Enter}} përsëri. Gjithçka e zgjedhur shtohet në një hap zhbërjeje të vetëm.

## Toleranca e hendekut

Hartuesit lënë vrima të vogla aty ku vijat duhet të takohen. Dy vija bashkohen kur skajet e tyre janë më afër sesa **toleranca e hendekut**. Ajo fillon nga 1.5 pikë në fletë (shfaqur në këmbë dhe inç sipas shkallës së fletës), dhe një unazë me pika, aq e gjerë, ndjek treguesin dhe qëndron mbi çdo skaj të shtegut nën të. Çdo vrimë që u kalua rrethohet me portokalli në një shteg të zgjedhur, dhe shiriti i numëron ato.

{{key:]}} e zgjeron tolerancën, {{key:[}} e zvogëlon. Një shteg i zgjedhur bashkohet sërish menjëherë me tolerancën e re. Te një kryqëzim, shtegu vazhdon drejt, në drejtimin që përkul më pak, dhe e lë degën.

## Tastet

| Tasti ose veprimi | Çfarë bën |
|---|---|
| Klikim | Zgjidh shtegun nën tregues, ose konturin rreth tij. |
| {{key:Shift}} + klikim | Shton një shteg ose kontur tjetër në atë që është zgjedhur. |
| {{key:Tab}} | Provon shtegun tjetër nën tregues, ose konturin tjetër më të madh. |
| {{key:Backspace}} ose {{key:Mod+Z}} | Heq segmentin e fundit nga shtegu i fundit i zgjedhur, një segment për herë. Një shteg pa segmente të mbetura largohet. Pa asgjë të zgjedhur, {{key:Mod+Z}} është zhbërja e zakonshme. |
| {{key:[}} dhe {{key:]}} | Tolerancë hendeku më e ngushtë dhe më e gjerë. |
| {{key:Enter}} | Shton shenjat. |
| {{key:Esc}} | Heq ato që janë zgjedhur. |

## Mirë për t'uditur

- Një kurbë në vizatim është një zinxhir copash të shkurtra të drejta, kështu që gjatësia e saj është pak më e vogël se harku i vërtetë. Për një hark të saktë, mat vetë skedarin e vizatimit ([Mat nga një vizatim](topic:measure-from-a-drawing)).
- Një hendek i kaluar numërohet si një kërcim i drejtë përmes tij, kështu që perimetri i një konture të mbyllur e përfshin atë.
- Vetëm vizat dhe mbushjet në shtigjet e vetë faqes janë vija. Teksti i vizatuar si shkronja, dhe fotografitë, nuk janë.
