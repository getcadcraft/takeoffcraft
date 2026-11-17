---
title: Mat nga një vizatim
summary: Merr gjatësi dhe sipërfaqe nga vijat, harqet, polivijat dhe vijëzimet e vetë vizatimit duke i zgjedhur, me harqe dhe vrima të sakta, në vend që të gjurmosh me klikime.
keywords: mat vizatimin, gjeometri, polivijë, hark, rreth, vijëzim, bulge, gjatësi e saktë, sipërfaqe e saktë, zgjedh, dritare, gjurmo, nga cad, lineare, sipërfaqe
from: fd734246
---

{{ui:Mat vizatimin}} në shiritin e fletës së një fletë DWG ose DXF merr objektet e vetë vizatimit si shenja, kështu nuk i gjurmon me klikime. Gjatësia e një polivije, gjatësia e një harku, sipërfaqja e një rrethi dhe sipërfaqja e një vijëzimi me vrimat e tij dalin të sakta, nga e njëjta aritmetikë që përdor llogaritja për çdo shenjë.

## Merr objekte si artikull linear ose sipërfaqeje

1. Bëj ose kliko një artikull **linear** ose **sipërfaqe** nën {{ui:Artikujt}}. Fleta duhet të ketë një shkallë.
2. Zgjidh {{ui:Mat vizatimin}}.
3. Kliko objektet në fletë për t'i zgjedhur, ose tërhiq një dritare rreth tyre: çdo gjë tërësisht brenda saj zgjidhet. {{key:Shift}} shton një dritare në atë që është zgjedhur; kliko përsëri një objekt të zgjedhur për ta hequr. Shiriti tregon totalin: "6 vija: 108'-9 1/8" gjithsej."
4. Zgjidh butonin e shtimit, që emëron numrin dhe artikullin, si {{ui:Shto 6 te Edge}} (ose shtyp {{key:Enter}}). Çdo objekt bëhet një shenjë e artikullit, në një hap të vetëm zhbërjeje. {{key:Esc}} pastron atë që ke zgjedhur.

## Çfarë merr secili lloj artikulli

- Një artikull **linear** merr vija, harqe, polivija, rrethe dhe spline sipas gjatësisë. Një formë e mbyllur numërohet sipas perimetrit të saj. Një vijëzim lihet jashtë: ka sipërfaqe, jo gjatësi, dhe shiriti e thotë këtë.
- Një artikull **sipërfaqe** merr forma të mbyllura: polivija të mbyllura, rrethe, solide 2D dhe vijëzime me vrimat e tyre. Vijat e hapura lihen jashtë, dhe shiriti e thotë këtë.

## Të sakta, dhe pothuajse të sakta

Vijat, harqet (çdo bulge) dhe polivijat me bulge dhe rrethet janë të sakta: gjatësitë dhe sipërfaqet përdorin rrezen dhe këndin e harkut, jo një imazh të tij. Elipset, spline-t dhe vijëzimet, kufiri i të cilave është i bërë nga segmente, maten me korda prej një shkalle ose më të imta, që është brenda një të qindtës të përqindjes për elipset dhe një të dhjetës për të tjerat; shiriti thotë sa nga ato që zgjodhe janë kurba të këtij lloji.

## Nga ku merr

- **Model**: objektet në hapësirën e modelit. **Një paraqitje**: vijat e veta, dhe objektet e modelit brenda një viewport-i, të shkallëzuara përmes tij. Një objekt që kalon skajin e një viewport-i nuk ofrohet (do të printohej i prerë); një objekt që dy viewport-et e shfaqin të dyja merret një herë.
- Vetëm shtresat që shfaq fleta. Blloqet numërohen, nuk maten: shih [Numëro nga një vizatim](topic:count-from-a-drawing). Polivijat 3D, rrjetat, solidet dhe rajonet nuk ofrohen.
