---
title: Numëro me dorë
summary: Kliko çdo derë, pajisje ose element për ta numëruar, kontrollo numërimet dhe ndreq gabimet.
keywords: numëro, çdo, ea, armatura, dyer, pajisje, simbole, numërim me viza, numërim me klikim, numërim manual
from: 594f2980
---

Një artikull numërimi numëron gjëra: dyer, armatura ndriçimi, priza, pajisje hidrosanitare. Çdo klikim mbi fletë shton një shenjë numërimi. Numërimi nuk ka nevojë për shkallë.

## Numëro

1. Krijo ose kliko një artikull numërimi te {{ui:Artikujt}} (tipi {{ui:Numëro}}).
2. Zgjidh {{ui:Numëro}} te shiriti i veglave, ose shtyp {{key:C}}.
3. Kliko çdo element në fletë.
   Çdo klikim vendos një pikë në ngjyrën e artikullit, dhe numërimi i artikullit rritet me një.
4. Kalo te fleta tjetër ({{key:PageDown}}) dhe vazhdo të numërosh. Mjeti mbetet te {{ui:Numëro}}.
5. Shtyp {{key:Esc}} kur të mbarosh. TakeoffCraft kthehet te {{ui:Përzgjidh}}.

Tërheqja vazhdon të lëvizë pamjen dhe rrota vazhdon të zmadhojë ndërsa numëron, kështu mund të lëvizësh rreth fletës pa shtuar pika.

:::tip
Kliko artikullin e numërimit për të theksuar pikat e tij në çdo fletë. Lista e fletëve tregon atëherë sa janë në çdo fletë, që të ndihmon të gjesh fletët që nuk i ke numëruar ende.
:::

## Ndreq një numërim

- **Hiq një pikë**: zgjidh {{ui:Përzgjidh}} ({{key:V}}), kliko pikën, dhe shtyp {{key:Delete}} ose zgjidh {{ui:Fshi shenjën}}. Ose shtyp {{key:Mod+Z}} menjëherë pas një klikimi të gabuar.
- **Zhvendos një pikë**: zgjidhe, pastaj tërhiqe.
- **Numëruar te artikulli i gabuar**: zgjidh pikën dhe zgjidh artikullin e duhur të numërimit te lista **Artikulli** nën **Shenja e zgjedhur**.

## Madhësia e pikës, në ekran dhe në PDF

Pikat ruajnë një madhësi në ekran sado që zmadhon. Për ta ndryshuar, hap {{ui:Cilësimet}}, skedën TakeoffCraft, dhe zgjidh **Madhësia e shenjës së numërimit**: Shumë e vogël, E vogël, E mesme (parazgjedhja) ose E madhe.

Eksportimi PDF ({{ui:Eksporto}} › PDF e shënuar) vizaton çdo pikë me të njëjtën madhësi në letër, pavarësisht nga madhësia e fletës: një shikues që e shfaq PDF-në në 100% i shfaq pikat aq të mëdha sa janë në ekran. Aty ku pikat e një fletë do të prekeshin, eksportimi i bën pikat e asaj fletë më të vogla, që çdo pikë të lexohet.

## Simbole të shumta të njëjta

Për një simbol që përsëritet shumë herë në një fletë, provo [Numërim automatik](topic:auto-count): kutit një, shqyrto çfarë gjen, dhe shtoji të gjitha në një hap.

## Përdorimi i numërimeve në formula

Sasia e një artikulli numërimi është **N**. Përbërësit e montimit mund ta përdorin, për shembull menteshat `N * 3` për dyer. Shih [Montimet dhe formulat](topic:assemblies).
