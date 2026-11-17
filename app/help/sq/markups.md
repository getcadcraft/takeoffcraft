---
title: Shënime, re dhe theksime
summary: Shëno pyetjet dhe ndryshimet në fletë me shënime, re revizioni dhe theksime; ndiq secilën si të hapur, të përgjigjur ose të mbyllur, dhe dërgoje në PDF-in e shënuar.
keywords: shënim, shënime, koment, pyetje, rfi, re, re revizioni, theksim, status, i hapur, i përgjigjur, i mbyllur, rishikim, listë shënimesh
from: 2b395c13
---

Shënimet janë për atë që duhet të mbash mend ose të pyesësh gjatë llogaritjes: "konfirmo llojin e bazës", një re revizioni rreth një muri të ndryshuar, një shënim i theksuar në plan. Ato qëndrojnë në fletë me një status, janë të listuara në një vend dhe dalin në PDF-in e shënuar. Nuk **numërohen kurrë**: pa sasi, pa kosto.

## Shto një

Hap {{ui:Shënime}} në shiritin mbi fletë dhe zgjidh:

| Shënimi | Si |
|---|---|
| {{ui:Shënim}} | Kliko ku shkon, shkruaj shënimin, zgjidh {{ui:Shto}}. Shfaqet si një pin rrethor me rreshtin e parë pranë. |
| {{ui:Re}} | Kliko një kënd, pastaj kundërkëndin, dhe shkruaj një shënim (ose lëre bosh). Një re revizioni me harqe shkon rreth kutisë. |
| {{ui:Theksim}} | Kliko dy kënde: një kuti e verdhë e tejdukshme, me një shënim nëse dëshiron. |

{{key:Esc}} pas këndit të parë anulon. Vegla mbetet e ndezur për tjetrin; {{key:V}} kthen te {{ui:Përzgjidh}}.

## Statusi dhe redaktimi

Kliko një shënim me {{ui:Përzgjidh}} për ta zgjedhur. Paneli djathtas shfaq **Shënimin**: llojin dhe fletën, **Statusin** — I hapur, I përgjigjur ose I mbyllur — dhe tekstin e tij, që mund ta ndryshosh. {{key:Delete}} (ose {{ui:Fshi}}) e heq; {{key:Mod+Z}} e kthen.

Pini i një shënimi është portokalli kur është i hapur, blu sapo të përgjigjesh dhe gri kur mbyllet; një re e mbyllur bëhet gri.

## Lista

**Shënimet** në panelin djathtas liston çdo shënim të llogaritjes me statusin e tij, dhe thotë sa janë ende të hapur. Shëno **Vetëm të hapurit** për të parë çfarë mbetet për t'u zgjidhur. Kliko një rresht për të shkuar te fleta e tij dhe për ta zgjedhur.

## Ndaje

- {{ui:PDF e shënuar}} i vizaton në faqe: theksimet, retë dhe pinat, secili me një kuti që jep statusin me shkronja të mëdha (I HAPUR, I PËRGJIGJUR, I MBYLLUR) dhe tekstin e tij. Një faqe me shënime por pa shenja llogaritjeje përfshihet gjithashtu.
- {{ui:XLSX}} shton një fletë pune **Shënimet**: fletë, lloj, status dhe tekst, një rresht për secilin.
- Ruhen në `.takeoff.json` dhe në një [PDF me llogaritjen brenda](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
