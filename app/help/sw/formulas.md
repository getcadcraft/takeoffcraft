---
title: Lugha ya fomula
summary: Kanuni za fomula za viasi vya mkusanyiko - vigeu, waendeshaji, kazi, upigaji mviringo na kila ujumbe wa hitilafu.
keywords: fomula, usemi, sintaksia, kazi, ceil, floor, round, min, max, abs, vigeu, waendeshaji, hesabu
from: 4da14575
---

Vipengele vya mkusanyiko hupata kiasi chao kutoka kwenye fomula. Fomula ni usemi mdogo wa hesabu juu ya thamani zilizopimwa za kipengee. Tazama [Mikusanyiko na fomula](topic:assemblies) kwa mifano iliyofanyiwa kazi.

## Vigeu

| Aina ya kipengee | Kigeu | Maana |
|---|---|---|
| Linear | `L` | Urefu wote |
| Linear | `H` | Kimo cha kipengee |
| Linear | `A` | Eneo la ukuta, L × H, likitoa matundu ya sehemu zinazoyabeba (ukadiriaji kutoka BimCraft). Ukadiriaji huo ukitaja mbinu ya kupima, `A` hupimwa kwa mbinu hiyo: matundu yasiyozidi ukubwa mdogo wa mbinu hubaki ndani, na kile mbinu inachokiondoa pale kuta zinapokutana kinaachwa nje. Dokezo chini ya kipengee linataja mbinu hiyo |
| Linear | `N` | Idadi ya sehemu |
| Area | `A` | Eneo wavu wote (mipaka ukitoa mikato) |
| Area | `P` | Mzunguko wote, pamoja na kingo za mikato |
| Area | `H` | Kina au unene wa kipengee |
| Area | `N` | Idadi ya maeneo |
| Count | `N` | Hesabu |

- Vigeu viko kwenye vitengo vya kipengee: tazama [Vitengo](topic:units).
- Herufi kubwa na ndogo ni sawa: `l` ni `L`.
- Vigeu vya aina ya kipengee chenyewe pekee ndivyo vinavyofanya kazi. `P` kwenye kipengee cha linear inatoa `"P" si thamani iliyopimwa hapa. Tumia L, H, A, N.`
- Kimo au kina tupu ni 0.

## Waendeshaji

| Andika | Maana |
|---|---|
| `+` | Jumlisha |
| `-` au `−` | Toa, au thamani hasi |
| `*` au `×` | Zidisha |
| `/` au `÷` | Gawanya |
| `( )` | Panga kwa kundi |

Kuzidisha na kugawanya hutangulia kujumlisha na kutoa: `L * 2 + 4` ni (L × 2) + 4. Tumia mabano usipokuwa na uhakika.

Namba zinaweza kuwa na desimali (`1.333`, `.5`) na vielelezo (`1e3` = 1000). Nafasi hazizingatiwi.

## Kazi

| Kazi | Matokeo | Mfano |
|---|---|---|
| `ceil(x)` | Piga mviringo juu hadi nambari nzima | `ceil(67.5)` = 68 |
| `floor(x)` | Piga mviringo chini hadi nambari nzima | `floor(67.5)` = 67 |
| `round(x)` | Piga mviringo hadi nambari nzima iliyo karibu, nusu hupelekwa mbali na sifuri | `round(2.5)` = 3 |
| `round(x, d)` | Piga mviringo hadi desimali d (0 hadi 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Thamani ndogo zaidi | `min(N, 10)` |
| `max(a, b, …)` | Thamani kubwa zaidi | `max(1, ceil(N / 12))` |
| `abs(x)` | Thamani bila ishara yake | `abs(-3)` = 3 |

`ceil` na `floor` zinapuuza kelele ndogo za upigaji mviringo wa kompyuta, kwa hiyo thamani inayopaswa kuwa 1 kabisa haipigwi mviringo hadi 2 kamwe.

## Hitilafu

Fomula isiyoweza kusomwa au kukokotolewa inaonyesha hitilafu yake chini ya sehemu, na kipengele kinaachwa nje ya jumla (kichwa cha {{ui:Viasi}} kinasema "Haijakamilika"). Ujumbe:

| Ujumbe | Rekebisha |
|---|---|
| Andika fomula, kama L au ceil(L / 1.333) + 1. | Fomula ni tupu. |
| "X" si thamani iliyopimwa hapa. Tumia … | Tumia mojawapo ya vigeu vilivyoorodheshwa. |
| "X" si kazi hapa. Tumia ceil, floor, round, min, max, abs. | Tumia mojawapo ya kazi hizo. |
| "#" hairuhusiwi kwenye fomula. | Ondoa herufi hiyo (vitengo, `%`, `$` na `=` haviruhusiwi). |
| ")" inakosekana. / Kuna ")" bila "(" yake. | Sawazisha mabano. |
| Thamani inakosekana kabla ya ")". | Kama `max(1, )`: weka thamani. |
| Fomula inaishia mapema mno. | Kama `L *`: ikamilishe. |
| Isiyotarajiwa "…". Je, operesheni inakosekana? | Thamani mbili kando kwa kando, kama `2L`: andika `2 * L`. |
| ceil() inachukua thamani 1. | Mpe kazi idadi sahihi ya thamani. |
| round(x, digits) inahitaji desimali nzima kutoka 0 hadi 10. | Tumia idadi nzima ya desimali. |
| Fomula inagawanya kwa sifuri. | Mara nyingi H ni 0: weka kimo au kina cha kipengee. |
| Fomula haitoi nambari. | Matokeo ni makubwa mno kuwa nambari. |
| Fomula hii ni ndefu mno (herufi 500 zaidi hazikubaliwi). | Ifupishe. |

## Salama kwa muundo

Fomula inaweza tu kufanya hesabu kwa vigeu na kazi zilizo hapo juu. Haiwezi kuendesha msimbo wala kusoma kitu kingine, kwa hiyo fomula iliyo kwenye faili la mradi ambalo mtu anakutumia haina madhara.
