---
title: Cenu bibliotēka
summary: Glabājiet savus vienumus, likmes un mezglus bibliotēkā, importējiet to no CSV vai iepriekšējas tāmes, pievienojiet vienumus no tās jebkuram apjoma aprēķinam un atjauniniet apjoma aprēķina cenas no tās.
keywords: bibliotēka, cenu bibliotēka, nozares pakotnes, cenrādis, cenu datubāze, importēt csv, likmes, mezgli, atkārtota izmantošana, veidnes vienumi, atjaunināt cenas, pārcenot
from: 37356c68
---

**Cenu bibliotēka** glabā vienumus, ko izmantojat darbu no darba: to veidu, mērvienību, augstumu, atkritumus, materiāla un darba likmes un to mezglu. Tā tiek glabāta šajā pārlūkprogrammā atsevišķi no jebkura apjoma aprēķina, tāpēc katrs šeit atvērtais apjoma aprēķins to var izmantot.

Atveriet to ar {{ui:Bibliotēka}} paneļa {{ui:Vienumi}} augšdaļā.

## Bibliotēkas aizpildīšana

- {{ui:Importēt CSV…}} nolasa izklājlapu, kas saglabāta kā CSV (skatiet kolonnas zemāk). Vienumi, kuru nosaukums un veids jau ir bibliotēkā, tiek aizstāti; pārējie tiek pievienoti. Rindas, ko tā nevar nolasīt, tiek izlaistas, un tā norāda, kuras un kāpēc.
- {{ui:Pievienot šī apjoma aprēķina vienumus}} nokopē katru atvērtā apjoma aprēķina vienumu bibliotēkā ar tā likmēm un mezglu (bet ne tā atzīmēm).
- Tāmes CSV, ko TakeoffCraft eksportē ([Eksportēt tāmi](topic:export-estimate)), tiek importēts tāds, kāds ir: pēdējā darba cenas kļūst par nākamā darba sākumpunktu.
- {{ui:Nozares pakotnes…}} pievieno bezmaksas mezglus kādai nozarei, piemēram, sausajai būvniecībai, elektrībai vai betonam, bez cenām. Skatiet [Nozares pakotnes](topic:trade-packs).

{{ui:Eksportēt CSV}} saglabā bibliotēku kā CSV, lai paturētu kopiju, rediģētu to izklājlapā vai nodotu kolēģim. {{ui:Notīrīt}} to iztukšo (noklikšķiniet divreiz).

:::note
Bibliotēka atrodas šīs pārlūkprogrammas krātuvē. Cita pārlūkprogramma, cits dators vai privātais logs tai ir savs (vai nav nevienas). Lai to pārvietotu, eksportējiet to.
:::

## Lietošana apjoma aprēķinā

- Atzīmējiet vienumus (rakstiet {{ui:Meklēt bibliotēkā}}, lai sašaurinātu sarakstu) un izvēlieties {{ui:Pievienot apjomu aprēķinam}}. Tie tiek pievienoti kopā ar saviem mezgliem vienā solī, ko {{key:Mod+Z}} atsauc. Nosaukums, kas apjoma aprēķinā jau ir, saņem numuru, piemēram, `Carpet (2)`.
- {{ui:Atjaunināt cenas}} apjoma aprēķina vienumiem piešķir bibliotēkas atkritumus un likmes katram vienumam, kura nosaukums un veids atbilst bibliotēkas vienumam, un tāpat mezglu sastāvdaļām ar tādu pašu nosaukumu. Augstumi, mērvienības un formulas paliek nemainītas. Viens {{key:Mod+Z}} atjauno visas vecās cenas.

## CSV kolonnas

Pirmajā rindā ir kolonnu nosaukumi jebkurā secībā; citas kolonnas tiek ignorētas.

| Kolonna | Kas tajā ierakstāms |
|---|---|
| Item (vai Name) | Vienuma nosaukums. Obligāts. |
| Type | Linear, Area vai Count (LF, SF un EA arī darbojas). Ja tukšs, lēmumu pieņem mērvienība. |
| Unit | LF vai m; SF, SY vai m²; EA. Tukšs: veida parastā mērvienība. |
| Waste % | `10` vai `10%`. |
| Material per unit, Labor per unit | Likmes, piemēram, `2.10` vai `$1,250`. |
| Height (vai Depth) | `9'-0"`, `9` vai `2.7` metriskām mērvienībām. |
| Component, Formula | Rinda ar komponentes nosaukumu (vai veidu `Component`) ir daļa no tā vienuma mezgla, kas atrodas virs tās. Tās mērvienība, atkritumi un likmes ir savas; formula izmanto vienuma burtus, skatiet [Mezgli un formulas](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Starpsienas tips A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Stīpas 16 in. c/c,ceil(L / 1.333) + N
VCT grīdas segums,Area,SF,5,1.85,1.10,,,
Divvietīgas rozetes,Count,EA,,3.50,45,,,
```

Komats, semikols vai tabulācija starp kolonnām — viss darbojas.
