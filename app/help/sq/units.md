---
title: Njësitë
summary: Njësitë në të cilat mund të raportojë një artikull, njësitë që përdorin variablat e formulave, dhe si përzihen imperialet me metrikën.
keywords: njësi, lf, sf, sy, sq, jardë katrore, katrorë çatie, akra, hektarë, metra, metra katrorë, ea, secili, metrike, imperiale, konvertim, njësi parazgjedhje
from: b7bf0528
---

## Njësitë e artikullit

| Lloji i artikullit | Njësia | Emri |
|---|---|---|
| Lineare | LF | këmbë linjare (parazgjedhur) |
| Lineare | m | metra |
| Sipërfaqe | SF | këmbë katrore (parazgjedhur) |
| Sipërfaqe | SY | jardë katrore |
| Sipërfaqe | SQ | katrorë çatie (100 këmbë katrore) |
| Sipërfaqe | ac | akra |
| Sipërfaqe | m² | metra katrorë |
| Sipërfaqe | ha | hektarë |
| Numërim | EA | secili |

Ndryshojeni me {{ui:Njësia}} te redaktuesi i artikullit në çdo kohë, edhe pas matjes; sasia konvertohet menjëherë.

Lista {{ui:Njësia}} shfaq njësitë e aktivizuara në {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}}, dhe gjithmonë njësinë e vetë artikullit. Një artikull i ri nis në njësinë e gjatësisë ose të sipërfaqes me yll atje, kur është një nga njësitë e artikullit; përndryshe në LF ose SF. Shih [Njësitë, vlerat e shtypura dhe listat e njësive](common:unit-lists).

## Njësitë e variablave të formulës

| Njësia e artikullit | L, P, H | A |
|---|---|---|
| LF | këmbë | këmbë katrore (sipërfaqe muri) |
| m | metra | metra katrorë (sipërfaqe muri) |
| SF | këmbë | këmbë katrore |
| SY | këmbë | jardë katrore |
| SQ | këmbë | katrorë |
| ac | këmbë | akra |
| m² | metra | metra katrorë |
| ha | metra | hektarë |

Për artikujt SY, `A` është në jardë katrore ndërsa `P` dhe `H` mbeten në këmbë. Një vëllim nga një artikull SY është `A * 9 * H / 27` jardë kub; përdorimi i SF për dyshemetë është më i thjeshtë.

## Ku njësitë janë fikse

Disa lexime përdorin gjithmonë këmbë:

- lexuesi i drejtpërdrejtë në shiritin e gjendjes gjatë vizatimit (këmbë-inç, SF),
- **Shenja e zgjedhur** (këmbë-inç, LF dhe SF),
- rezultati i kontrollit (këmbë-inç, me këmbë dhjetore dhe metra),
- gjatësitë e segmenteve dhe perimetrat në fletën Marks të fletëllogaritësit (këmbë-inç).

Totalet e artikujve, tabela {{ui:Sasitë}}, formulat dhe fleta Estimate përdorin njësinë e vetë artikullit.

## Shkallët dhe njësitë janë të ndara

Shkalla e një fletë thotë sa e madhe është vizatimi; njësia e një artikulli thotë si ta raportojë atë. Një vizatim metrik në `1:100` mund të matet në LF, dhe një vizatim imperial në m². Kalibrimi pranon çdo njësi: `24'-6"`, `7.5 m`, `7500 mm`.

## Saktësia

TakeoffCraft mat saktësisht nga pikat që klikoni, duke përfshirë gjatësitë e vërteta të harkut dhe sipërfaqet, dhe nuk i rrumbullakos sasitë. Shfaqja rrumbullakos gjatësitë në 1/16 inç dhe dhjetoret në dy shifra. Shuma e parave rrumbullakoset vetëm te shumat e zgjeruara, në cent.
