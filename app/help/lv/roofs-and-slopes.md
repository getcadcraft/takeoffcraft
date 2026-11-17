---
title: Jumti un slīpumi
summary: Piešķiriet platībai slīpumu, lai izmērītu jumta virsmu no plāna, un mēriet ragus, lenģerus un ielejas pa to slīpumu.
keywords: jumts, slīpums, nogāze, slīpuma koeficients, pacēlums, horizontālais attālums, 6:12, frontona mala, lenģeris, ieleja, fronts, jumta segums, kvadrāti, slīpa platība, patiesais garums, plāna laukums
from: 38225b60
---

Jumta plāns rāda katru jumta plakni plakanu, skatoties no augšas. Pats jumts ir lielāks: plakne ar slīpumu 6:12 ir par aptuveni 12% lielāku virsmu nekā tās plāns, un tās slīpās malas ir garākas, nekā šķiet. Piešķiriet vienumam slīpumu, un TakeoffCraft mērīs pa nogāzi.

## Slīpuma ievadīšana

Slīpums ir pacēlums uz katriem 12 horizontālā attāluma vienībām, kā norādīts jumta plāna slīpuma simboliem. Ievadiet to kā `6:12`, `6/12` vai tikai `6`; darbojas arī cits horizontālais attālums (`4:10` ir 4.8:12). Leņķi var ievadīt ar grādu zīmi: `26.57°`. Tukšs lauks vai `0` nozīmē plakanu jumtu.

## Jumta laukumi

1. Izveidojiet laukuma vienumu jumta segumam vai atveriet esošo.
2. Tā iestatījumos ievadiet **Slīpums**, piemēram, `6:12`.
3. Izvelciet katru jumta plakni plānā ar {{ui:Laukums}}, kā parasti.

Katrai plaknei tiek skaitīts tās plāna laukums, reizināts ar slīpuma koeficientu: √(1 + (pacēlums ÷ 12)²), 1.118 pie 6:12 un 1.414 pie 12:12. Izvēlieties plakni, lai redzētu tās **Laukumu** (pa nogāzi), **Plāna laukumu** un **Slīpuma koeficientu**.

Plaknes ar citu slīpumu: izvēlieties plakni un ievadiet tās savu **Slīpumu** tās panelī. Atstājiet to tukšu, lai izmantotu vienuma slīpumu. 3D pārbaudes skats, mezgli (`A` ir slīpais laukums), izmaksas un eksports visi izmanto slīpo laukumu. Atskaitījumi uz slīpas plaknes, piemēram, jumta logi, tiek atskaitīti ar to pašu slīpumu.

Perimetrs (`P`) paliek plāna perimetrs. Eņģeļus, ragus, lenģerus un ielejas mēriet kā posmus (zemāk).

## Frontona malas, lenģeri un ielejas

1. Izveidojiet lineāru vienumu, piemēram, "Frontona mala" vai "Lenģeri".
2. Iestatiet tā **Slīpumu** uz **Frontona mala** (slīpa mala, kā frontonam) vai **Lenģeris vai ieleja** (līnija, kur saiet divas plaknes), un ievadiet jumta plakņu **Slīpumu**.
3. Zīmējiet posmus plānā ar {{ui:Lineārs}}.

Frontona malas garums tiek skaitīts kā tās plāna garums, reizināts ar slīpuma koeficientu. Lenģeris vai ieleja iet 45° leņķī pāri plānam starp divām vienāda slīpuma plaknēm, tāpēc tās patiesais garums ir plāna garums, reizināts ar √(1 + (pacēlums ÷ 12)² ÷ 2): 1.061 pie 6:12, 1.225 pie 12:12.

Viens posms var apvienot abus veidus. Izvēlieties to: katram segmentam tā panelī ir slīpuma saraksts — **Vienuma** (vienuma iestatījums), **Līmenis**, **Frontona mala** vai **Lenģeris vai ieleja** — un tā garums pa nogāzi. Posma pašu **Slīpumu** panelī aizstāj vienuma slīpumu visiem tā segmentiem. Panelī rādīts arī **Plāna garums**, un uzlīmes lapā rāda garumus pa nogāzi.

Atskaitījumi joprojām darbojas: atskaitīts segments neskaita neko, neatkarīgi no slīpuma.

:::note
Lenģeri un ielejas pieņem, ka abām plaknēm ir viens un tas pats slīpums. Plaknēm ar dažādu slīpumu izmēriet lenģeri pēc tā patiesā garuma citur vai zīmējiet to kā frontona malu ar ekvivalentu slīpumu.
:::
