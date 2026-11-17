---
title: Montimet dhe formulat
summary: Shto përbërës te një artikull dhe lëri formulat t'i kthejnë gjatësinë, sipërfaqen ose numrin e tij në profile, pllaka, fletë paneli, beton dhe pajisje, me një shembull të punuar muri.
keywords: montim, përbërës, formulë, profile, drywall, fletë, pllaka, beton, metra kub, pajisje, recetë, tipik, pjesë të artikullit
from: 12891a21
---

Montimi i një artikulli, **montim**, është listë përbërësish, secili me formulën e vet të sasisë dhe humbjen dhe normat e veta. Formula përdor totalet e matura të artikullit, kështu që një llogaritje e vetme e një muri jep profilet, pllakat dhe panelet njëkohësisht, dhe ato përditësohen ndërsa mat.

## Variablat që mund të përdorësh

| Lloji i artikullit | Variablat |
|---|---|
| Vijor | `L` gjatësi, `H` lartësi, `A` sipërfaqja e murit (L × H), `N` numri i segmenteve |
| Sipërfaqe | `A` sipërfaqja, `P` perimetri (kontur + prerje), `H` thellësia ose trashësia, `N` numri i sipërfaqeve |
| Numërim | `N` numërimi |

Vlerat janë në njësitë e vetë artikullit: këmbë dhe këmbë katrore për artikujt LF dhe SF, metra dhe metra katrorë për artikujt m dhe m². Për një artikull SY, `A` është në jard katror ndërsa `P` dhe `H` mbeten në këmbë.

Formulat përdorin `+ - * /` (ose × ÷), kllapa, numra dhe funksionet `ceil`, `floor`, `round`, `min`, `max` dhe `abs`. Rregullat e plota janë te [Gjuha e formulave](topic:formulas).

## Shembull i punuar: mur i brendshëm

Supozo se ke llogaritur **Mur i brendshëm tip A** si artikull vijor: 4 segmente me gjithsej 120 LF, me {{ui:Lartësia}} të vendosur në `9'-0"`. Vlerat e **Të matura** lexohen L = 120, N = 4, A = 1,080 (SF muri, një faqe).

1. Përzgjidh artikullin nën {{ui:Artikujt}}.
2. Te {{ui:Montimi}}, zgjidh {{ui:Shto përbërësin}}.
   Shfaqet një përbërës me emrin "Përbërës", me formulën `L` dhe rezultatin e saj poshtë.
3. Shkruaj `Studs 16 in o.c.` te {{ui:Emri}} dhe `EA` te {{ui:Njësia}}.
4. Te {{ui:Formula e sasisë}}, shkruaj `ceil(L * 12 / 16) + N`.
   Rezultati përditësohet ndërsa shkruan: "= 94 EA". Kjo është një profil çdo 16 inç përgjatë 120 këmbëve (90), plus një shtesë për të mbyllur secilin nga 4 segmentet.
5. Zgjidh përsëri {{ui:Shto përbërësin}} për pllakat: emri `Plates, top and bottom`, njësia `LF`, formula `L * 2`. Rezultati: 240 LF.
6. Shto panelin: emri `Gypsum board 4x8, both sides`, njësia `sheets`, formula `ceil(A * 2 / 32)`. Rezultati: 68 sheets (2,160 SF panel ÷ 32 SF për fletë = 67.5, rrumbullosur lart).
7. Plotëso {{ui:Humbja %}}, {{ui:Materiali $}} dhe {{ui:Puna $}} për çdo përbërës.
   Çdo përbërës merr rreshtin e vet nën artikull te {{ui:Sasitë}}, i çmuar si artikull, dhe {{ui:Totali i punës}} e përfshin.

Nëse kostoja e murit është e gjitha te përbërësit, lëri normat e materialit dhe punës të vetë artikullit në 0, përndryshe llogaritet dy herë.

:::tip
Humbja aplikohet pas formulës dhe nuk rrumbullosët: 68 fletë me 10% humbje janë 74.8 fletë. Për të porositur fletë të plota, vendose humbjen brenda formulës, si `ceil(A * 2 / 32 * 1.1)`, dhe lëre humbjen e përbërësit në 0.
:::

## Formula të tjera

| Çfarë | Artikulli | Formula |
|---|---|---|
| Profile me 24 inç qendër-me-qendër | Vijor | `ceil(L / 2) + N` |
| Izolim me batanije, SF | Vijor me lartësi | `A` |
| Bojë, të dyja anët, galona me 350 SF | Vijor me lartësi | `ceil(A * 2 / 350)` |
| Kuti pllakash me 15 SF, 10% shtesë | Sipërfaqe | `ceil(A * 1.1 / 15)` |
| Bazë ose skaj, LF | Sipërfaqe | `P` |
| Beton, jard kub | Sipërfaqe me thellësi | `A * H / 27` |
| Beton i rrumbullosur lart në çerek jardi | Sipërfaqe me thellësi | `ceil(A * H / 27 * 4) / 4` |
| Menteshat, tre për derë | Numërim | `N * 3` |
| Të paktën një kuti, një për 12 | Numërim | `max(1, ceil(N / 12))` |

## Kur një formulë është e gabuar

Rreshti nën formulë shndërrohet në mesazh gabimi, për shembull `"X" is not a measured value here. Use L, H, A, N.` ose `A ")" is missing.` Përbërësi atëherë nuk ka shuma, rreshti i tij te {{ui:Sasitë}} shfaq "Formula error: …", dhe titulli thotë "Incomplete: 1 formula error (not in the totals)". Rregullo formulën dhe totalet përditësohen.

Një formulë që pjesëton me zero është gjithashtu gabim ("The formula divides by zero."), për shembull `A / H` te një artikull pa thellësi.

## Kufizimet

- Formulat punojnë mbi **totalet** e artikullit, jo segment për segment. `ceil(L * 12 / 16) + N` shton një profil për segment; ende nuk ka rrumbullosje për segment.
- Një formulë mund të përdorë vetëm variablat e artikullit të vet, jo të një artikulli tjetër.
- Deri në 50 përbërës për artikull, 500 karaktere për formulë.

## Hiq një përbërës

Zgjidh {{ui:Hiq përbërësin}} nën të. Mund ta zhbësh me {{key:Mod+Z}}.
