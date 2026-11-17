---
title: Ievietot marķējumu specifikāciju kā daudzumus
summary: Marķējumu specifikācija, kas eksportēta no ēkas modeļa (CSV), kļūst par tipizētiem daudzumiem apjomu aprēķinā, pa vienam katram marķējumam, tā ka modeļa skaiti un laukumi atrodas blakus tam, ko esat izmērījis.
keywords: marķējumi, marķējumu specifikācija, ēkas modelis, bimcraft, ifc, daudzumi, csv, specifikācija, imports, tipizēts daudzums
from: a60c19b6
---

{{ui:Marķējumi}} rīkjoslā ieved marķējumu specifikāciju, ko BimCraft saglabāja kā CSV failu. Katrs atšķirīgs marķējums kļūst par tipizētu daudzumu, tādu pašu veidu, kādu kļūst CivilCraft izrakums un uzbērums.

1. BimCraft izveidojiet vajadzīgo marķējumu specifikāciju un saglabājiet to kā CSV.
2. Izvēlieties {{ui:Marķējumi}} un izvēlieties failu.
3. Norādiet, pēc kuras kolonnas nosaukt rindu ({{ui:Nosaukt rindu pēc}}, parasti marķējums) un kurā ir skaitlis ({{ui:Daudzums no}}). Ar {{ui:Skaitīt rindas}} katra rinda skaitās kā viena.
4. Izvēlieties mērvienību. Garums milimetros kļūst par metriem ar {{ui:Reizināt ar}} 0.001.
5. {{ui:Pievienot daudzumus}}.

Rindas ar vienādu marķējumu tiek saskaitītas kopā. Šūna, kas nav skaitlis, tiek izlaista un saskaitīta kopsavilkumā. Ievietojot to pašu specifikāciju vēlreiz, jau esošie daudzumi tiek atjaunināti, nevis pievienoti; to nosaukumi, likmes un atkritumi paliek jūsu.

## Noderīgi zināt

Tipizēts daudzums netiek mērīts lapā, tāpēc tam nav atzīmju. Nekas nekur netiek nosūtīts; fails tiek nolasīts šeit.
