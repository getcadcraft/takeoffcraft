---
title: Karboni i mbartur dhe një tabelë çmimesh 5D
summary: Karboni mbledh karbonin e mbartur të llogaritjes nga sasia e çdo artikulli dhe një tabelë të hapur faktorësh, dhe i dërgon normat e llogaritjes te BimCraft si tabelë çmimesh për kostot 5D.
keywords: karbon, karbon i mbartur, kgco2e, co2, faktorë, a1-a3, transport, humbje, 5d, tabelë çmimesh, kosto, bimcraft, epd
from: f4bff3b8
---

{{ui:Karboni}} në shiritin e veglave mbledh karbonin e mbartur të asaj që ke matur, dhe e kthen normat e tua në një tabelë çmimesh që modeli i ndërtesës mund ta përdorë. Është një vlerësim, jo një ekspertizë.

## Karboni i mbartur

Sasia e çdo artikulli, me humbjen e tij, shumëzohet me një rresht të tabelës së faktorëve. Një rresht përputhet me fjalët e emrit të artikullit ("beton pllakë" gjen një rresht me fjalën kyçe beton). Tabela është e njëjta tabelë e hapur që përdor BimCraft, kështu që një skedar që ngarkon këtu funksionon edhe atje. **Rreshtat që vijnë me programin janë vlera fillestare: të përgjithshme, të pakontrolluara dhe jo nga ndonjë bazë të dhënash.** Dialogu e thotë këtë pranë shifrave; zëvendësoi me burimin tënd para se të mbështetesh në një numër.

1. Zgjidh {{ui:Karboni}}. Artikujt e numëruar listohen me kilogramët e tyre të CO2e; totali është më sipër.
2. Shëno {{ui:A4 transport}} ose {{ui:A5 site waste}} për t'i numëruar edhe ato faza, për rreshtat që japin një shifër për to. Faza e prodhimit numërohet gjithmonë.
3. Për të përdorur një rresht tjetër për një artikull, ose asnjë, përdor listën në rreshtin e tij.
4. {{ui:Faktorët nga një skedar…}} ngarkon një tabelë faktorësh (JSON ose CSV) të bërë nga burimi yt; rreshtat e saj zëvendësojnë rreshtat fillestarë me të njëjtin id. {{ui:Faktorët (JSON)}} i ruan tuajat.

Një faktor është për metër, metër katror, metër kub, artikull ose kilogram. Një rresht i matur në këmbë ose këmbë katrore konvertohet. Një faktor në kilogram ka nevojë për një vëllim (jard kub ose metra) dhe densitetin e rreshtit. Një artikull, faktori i të cilit ka nevojë për një sasi që ai nuk e mat, listohet nën {{ui:Lënë jashtë}} me arsyen, pa u hamendësuar kurrë. Totali rrjedhës në shiritin e gjendjes tregon të njëjtën shifër.

Faktorët e tu, zgjedhjet e tua dhe fazat që numëron ruhen në skedarin e llogaritjes.

## Një tabelë çmimesh për kostot 5D

{{ui:5D prices (JSON)}} dhe {{ui:5D prices (CSV)}} ruajnë normat e llogaritjes si tabelë çmimesh: një rresht për çdo artikull të çmuar, me normën e tij të materialit dhe punës për njësi dhe humbjen e tij. Ngarkoje në panelin e kostos të BimCraft (Karboni i mbartur dhe kostoja 5D) për të çmuar detyrat e modelit të ndërtesës me të njëjtat norma që bënë ofertën. Artikujt e matur në një njësi që tabela nuk e ka, dhe artikujt pa normë, lihen jashtë.

## Me asistentin tënd

Nëse lejon asistentë në {{ui:Cilësimet}}, ata mund të lexojnë karbonin (carbon_check). Ngarkimi i faktorëve është gjë që bën ti.

## Të mirë për t'u ditur

Asgjë nuk dërgohet askund. Shifrat janë aq të mira sa faktorët që ngarkon.
