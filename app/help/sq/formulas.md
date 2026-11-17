---
title: Gjuha e formulave
summary: Rregullat për formulat e sasisë së montimeve - variablat, operatorët, funksionet, rrumbullakimi dhe çdo mesazh gabimi.
keywords: formulë, shprehje, sintaksë, funksione, ceil, floor, round, min, max, abs, variabla, operatorë, llogaritje
from: 4da14575
---

Komponentët e montimit marrin sasinë nga një formulë. Një formulë është një shprehje e vogël aritmetike mbi vlerat e matura të artikullit. Shih [Montimet dhe formulat](topic:assemblies) për shembuj të zgjidhur.

## Variablat

| Lloji i artikullit | Variabla | Kuptimi |
|---|---|---|
| Lineare | `L` | Gjatësia totale |
| Lineare | `H` | Lartësia e artikullit |
| Lineare | `A` | Sipërfaqja e murit, L × H, minus hapjet e vijave që i mbajnë (llogaritje nga BimCraft). Kur ajo llogaritje emëron një metodë matjeje, `A` matet prej saj: hapjet jo më të mëdha se madhësia më e vogël e metodës mbeten brenda, dhe ajo që metoda heq aty ku takohen muret lihet jashtë. Shënimi nën artikull e emëron metodën |
| Lineare | `N` | Numri i vijave |
| Sipërfaqe | `A` | Sipërfaqja totale neto (konturet minus prerjet) |
| Sipërfaqe | `P` | Perimetri total, duke përfshirë skajet e prerjeve |
| Sipërfaqe | `H` | Thellësia ose trashësia e artikullit |
| Sipërfaqe | `N` | Numri i sipërfaqeve |
| Numërim | `N` | Numërimi |

- Variablat janë në njësitë e artikullit: shih [Njësitë](topic:units).
- Shkronjat e mëdha dhe të vogla janë të njëjta: `l` është `L`.
- Funksionojnë vetëm variablat e tipit të artikullit: `P` te një artikull linear jep `"P" nuk është vlerë e matur këtu. Përdor L, H, A, N.`
- Një lartësi ose thellësi e zbrazët është 0.

## Operatorët

| Shkruan | Kuptimi |
|---|---|
| `+` | Mbledh |
| `-` ose `−` | Zbret, ose një vlerë negative |
| `*` ose `×` | Shumëzon |
| `/` ose `÷` | Pjesëton |
| `( )` | Grupon |

Shumëzimi dhe pjesëtimi bëhen para mbledhjes dhe zbritjes: `L * 2 + 4` është (L × 2) + 4. Përdor kllapa kur dyshon.

Numrat mund të kenë decimale (`1.333`, `.5`) dhe eksponentë (`1e3` = 1000). Hapësirat injorohen.

## Funksionet

| Funksioni | Rezultati | Shembull |
|---|---|---|
| `ceil(x)` | Rrumbullakos lart në numër të plotë | `ceil(67.5)` = 68 |
| `floor(x)` | Rrumbullakos poshtë në numër të plotë | `floor(67.5)` = 67 |
| `round(x)` | Rrumbullakos në numrin e plotë më të afërt, gjysmat larg zeros | `round(2.5)` = 3 |
| `round(x, d)` | Rrumbullakos në d decimale (0 deri 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Vlera më e vogël | `min(N, 10)` |
| `max(a, b, …)` | Vlera më e madhe | `max(1, ceil(N / 12))` |
| `abs(x)` | Vlera pa shenjën e saj | `abs(-3)` = 3 |

`ceil` dhe `floor` injorojnë zhurmën e vogël të rrumbullakimit të kompjuterit, kështu që një vlerë që duhet të jetë saktësisht 1 nuk rrumbullakoset kurrë lart në 2.

## Gabimet

Një formulë që nuk lexohet ose nuk llogaritet shfaq gabimin e saj nën fushë, dhe përbërësi lihet jashtë totaleve (titulli {{ui:Sasitë}} thotë "Jo e plotë"). Mesazhet:

| Mesazhi | Rregullimi |
|---|---|
| Shkruaj një formulë, si L ose ceil(L / 1.333) + 1. | Formula është e zbrazët. |
| "X" nuk është vlerë e matur këtu. Përdor … | Përdor një nga variablat e listuara. |
| "X" nuk është funksion këtu. Përdor ceil, floor, round, min, max, abs. | Përdor një nga ato funksione. |
| "#" nuk lejohet në një formulë. | Hiq atë karakter (njësitë, `%`, `$` dhe `=` nuk lejohen). |
| Mungon një ")". / Ka një ")" pa "(" të vet. | Balanco kllapat. |
| Mungon një vlerë para ")". | Diçka si `max(1, )`: plotëso vlerën. |
| Formula mbaron shumë herët. | Diçka si `L *`: përfundoje. |
| Papritur "…". A mungon një operator? | Dy vlera njëra pas tjetrës, si `2L`: shkruaj `2 * L`. |
| ceil() merr 1 vlerë. | Jepi funksionit numrin e duhur të vlerave. |
| round(x, digits) ka nevojë për shifra të plota nga 0 deri 10. | Përdor një numër të plotë decimalesh. |
| Formula pjesëton me zero. | Zakonisht H është 0: vendos lartësinë ose thellësinë e artikullit. |
| Formula nuk jep një numër. | Rezultati është shumë i madh për t'u bërë numër. |
| Ajo formulë është shumë e gjatë (500 karaktere maksimum). | Shkurtoje. |

## I sigurt nga dizajni

Një formulë mund të bëjë vetëm aritmetikë me variablat dhe funksionet e mësipërme. Nuk mund të ekzekutojë kod ose të lexojë asgjë tjetër, kështu që një formulë në një skedar projekti që të dërgon dikush është e padëmshme.
