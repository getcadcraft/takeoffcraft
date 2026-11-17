---
title: Saskaitīt visu komplektā
summary: Iezīmējiet simbolu legendu vienreiz, un TakeoffCraft saskaita katru tās simbolu katrā atvērtajā lapā vienā darbībā. Katrs skaits ir saite uz tā lapu, un jūs to pārskatāt, pirms kaut kas tiek pievienots.
keywords: skaitīt visu, legenda, simbolu legenda, viss komplekts, katra lapa, visas lapas, katras durvis, katra armatūra, ierīces, specifikācija, simboli, automātiski skaitīt, skaitīt visu, plānu komplekts, 200 lapas, atbilstības līmenis, līdzīgi
from: adc99744
---

{{ui:Skaitīt visu}} nolasa simbolu legendu un pēc tam saskaita katru tās simbolu katrā atvērtajā lapā. Tas ir {{ui:Automātiski skaitīt}} visai legendai vienlaikus. Tā ir vienkārša simbolu saskaņošana jūsu paša lapās, nevis apmācīts modelis, un nekas neatstāj jūsu datoru. Pārskatiet skaitus, pirms tos pievienojat: tas ir palīgs, nevis garantija.

## Saskaitiet legendu

1. Atveriet plānus. Jebkura lapa ar legendu noder: simboli ar to nosaukumiem blakus.
2. Rīkjoslā izvēlieties {{ui:Skaitīt visu}}.
3. Novelciet kasti ap legendu, simboliem un nosaukumiem. Virsraksts bez simbola blakus (SYMBOL LEGEND) tiek izlaists pats.
   Panelī katrs simbols rādīts ar attēlu un blakus drukāto nosaukumu. Nosaukums kļūst par vienuma nosaukumu, tāpēc, ja vēlaties, pārdēvējiet to šeit.
4. Noņemiet atzīmi no katra simbola, kuru nevēlaties skaitīt. Simbols, ko nevar meklēt (pārāk mazs vai tukšs), pasaka iemeslu.
5. Izvēlieties {{ui:Skaitīt uz N lapām}}. Josla rāda lapu, kuru meklē; {{ui:Atcelt}} aptur darbību. Lapa paliek lietojama.

Legendas paša simboli tās lapā netiek skaitīti. Lapa, kas zīmēta citā mērogā, tiek meklēta šajā mērogā, un simboli tiek atrasti pagriezti jebkurā taisnā leņķī.

## Pārskatiet skaitus

- Katram simbolam rādīts tā kopskaits un zem tā saite katrai lapai, kurā ir kādi („E-103: 4”). Noklikšķiniet uz tās, lai pārietu uz šo lapu. Atradumi iezīmēti ar vienuma krāsas kastēm.
- **Noklikšķiniet kasti**, lai izslēgtu šo atradumu. Tā kļūst punktēta un svītrota; noklikšķiniet vēlreiz, lai to atgrieztu.
- **Pārvietojiet atbilstības līmeni** (no 50% līdz 100%, sākot no jūsu iestatījumu līmeņa). Augstāks līmenis paturi tikai tuvus atbilstības gadījumus. Slīdnis tikai filtrē atrasto; nekas netiek meklēts no jauna.
- Divi līdzīgi simboli (divkāršā un četrkāršā kontaktligzda) var atbilst vienai un tai pašai vietai. Labākā atbilstība to paņem, un panelis parāda, cik vietās tas noticis, lai jūs varētu pārbaudīt.
- Lapa, kas ir pārāk liela, lai meklētu simbola izmērā, tiek izlaista, un panelis par to paziņo.

## Pievienojiet tos

Izvēlieties {{ui:Pievienot N atzīmes}}. Katrs simbols kļūst par skaitīšanas vienumu ar atzīmi katrā atradumā. Nosaukums, kas jau ir jūsu skaitīšanas vienums, tiek izmantots atkārtoti (nekas netiek dubultots, kur jau atzīmējāt ar roku). Viss palaidiens ir viens solis: {{key:Ctrl+Z}} atņem katru vienumu un atzīmi.

Tas, ko pieņemat, arī nonāk sadaļā {{ui:Iemācījies}}: simboli tiek iegaumēti apjomu aprēķina failā nākamajai reizei.

## Ar jūsu asistentu

Ja Iestatījumos atļaujat asistentus, tie var nolasīt legendu (legend_open), palaist skaitīšanu fonā (legend_count_start, pēc tam legend_count_status), nolasīt skaitus (legend_count_result) un tos pievienot (legend_count_add, kas vispirms var parādīt priekšskatījumu tam, ko tas pievienotu). Tā ir tā pati darbība, ko redzat panelī.

## Simboli jebkurā leņķī

Atzīmējiet {{ui:Simboli jebkurā leņķī}} pirms skaitīšanas, lai atrastu arī simbolus, kas zīmēti leņķī, kas nav taisns leņķis (slīpa sienas kontaktligzda, armatūra, pagriezta, lai sekotu jumtam). Meklēšana tad pagriež katru simbolu ik pēc 15 grādiem; apaļš simbols joprojām prasa vienu meklēšanu, un simbols, kas nav apaļš, var aizņemt līdz sešreiz ilgāk. Atstājiet to izslēgtu plāniem, kas zīmēti taisni.

## Noderīga informācija

- Tam nepieciešami simboli, kas zīmēti tāpat kā legendā. Legenda, kas zīmēta citā izmērā nekā lapas, ir pieņemama, kad lapu mērogi ir iestatīti; bez mērogiem simboli tiek meklēti legendas izmērā.
- Simbolu, kuram cauri zīmēta siena vai gara līnija, var palaist garām, jo tas vairs nelīdzinās legendas attēlam. Pirms uzticēšanās pārējiem pārbaudiet atradumus pirmajā lapā.
- Skenēts attēls bez teksta joprojām darbojas: simboli tiek atrasti pēc to rindām, un nosaukumus ierakstāt jūs.
