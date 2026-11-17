---
title: Bilješke, oblaci i isticanja
summary: Označite pitanja i izmjene na listovima bilješkama, revizijskim oblacima i isticanjima, pratite svaku kao otvorenu, odgovorenu ili zatvorenu te ih pošaljite u označenom PDF-u.
keywords: markup, oznake, bilješka, komentar, pitanje, rfi, oblak, revizijski oblak, isticanje, status, otvoreno, odgovoreno, zatvoreno, pregled, popis oznaka
from: 2b395c13
---

Markupi služe za ono što trebate zapamtiti ili pitati dok predmjerite: „potvrdite vrstu baze“, revizijski oblak oko promijenjenog zida, istaknuta bilješka na nacrtu. Oni stoje na listu sa statusom, popisani su na jednom mjestu i ispisuju se u označenom PDF-u. Nikad se ne broje: nema količine, nema troška.

## Dodajte jedan

Otvorite {{ui:Markup}} na traci iznad lista i odaberite:

| Markup | Kako |
|---|---|
| {{ui:Bilješka}} | Kliknite gdje ide, upišite bilješku i odaberite {{ui:Dodaj}}. Prikazuje se kao okrugla igla s prvim retkom uz nju. |
| {{ui:Oblak}} | Kliknite jedan kut, zatim suprotni, i upišite bilješku (ili ostavite praznu). Oko okvira ide nazubljeni revizijski oblak. |
| {{ui:Isticanje}} | Kliknite dva kuta: prozirni žuti okvir, s bilješkom ako želite. |

{{key:Esc}} nakon prvog kuta odustaje. Alat ostaje uključen za sljedeći; {{key:V}} vraća na {{ui:Odaberi}}.

## Status i uređivanje

Kliknite markup alatom {{ui:Odaberi}} da ga odaberete. Desna ploča prikazuje **Markup**: njegovu vrstu i list, njegov **Status** — Otvoreno, Odgovoreno ili Zatvoreno — i njegov tekst, koji možete promijeniti. {{key:Delete}} (ili {{ui:Izbriši}}) ga uklanja; {{key:Mod+Z}} ga vraća.

Igla bilješke je narančasta dok je otvorena, plava kad je odgovoreno i siva kad je zatvorena; zatvoreni oblak postaje siv.

## Popis

**Oznake** na desnoj ploči popisuju svaki markup predmjera sa statusom i kažu koliko je još otvorenih. Označite **Samo otvoreno** da vidite što još treba riješiti. Kliknite redak da odete na njegov list i odaberete ga.

## Podijelite ih

- {{ui:Označeni PDF}} crta ih na stranicama: isticanja, oblake i igle, svaki s okvirom koji daje status velikim slovima (OTVORENO, ODGOVORENO, ZATVORENO) i njegov tekst. Uključena je i stranica s markupima bez oznaka predmjera.
- {{ui:XLSX}} dodaje radni list **Oznake**: list, vrsta, status i tekst, po jedan redak za svaki.
- Spremljeni su u `.takeoff.json` i u [PDF-u s predmjerom unutra](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
