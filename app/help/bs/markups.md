---
title: Bilješke, oblaci i isticanja
summary: Označite pitanja i izmjene na listovima bilješkama, revizionim oblacima i isticanjima, pratite svaku kao otvorenu, odgovorenu ili zatvorenu i šaljite ih u označenom PDF-u.
keywords: označavanje, označavanja, bilješka, komentar, pitanje, rfi, oblak, revizioni oblak, isticanje, status, otvoreno, odgovoreno, zatvoreno, pregled, spisak označavanja
from: 2b395c13
---

Označavanja služe za ono što treba da zapamtite ili pitate dok radite predmjer: „potvrdite vrstu podloge“, revizioni oblak oko promijenjenog zida, istaknuta bilješka na planu. Stoje na listu sa statusom, navedena su na jednom mjestu i ispisuju se u označenom PDF-u. Ona se **nikada ne broje**: nema količine, nema troška.

## Dodavanje

Otvorite {{ui:Označavanje}} na traci iznad lista i odaberite:

| Vrsta | Kako |
|---|---|
| {{ui:Bilješka}} | Kliknite gdje ide, upišite bilješku, odaberite {{ui:Dodaj}}. Prikazuje se kao okrugla igla sa prvim redom pored nje. |
| {{ui:Oblak}} | Kliknite jedan ugao, zatim suprotni, i upišite bilješku (ili je ostavite praznu). Nazubljeni revizioni oblak ide oko okvira. |
| {{ui:Isticanje}} | Kliknite dva ugla: prozirni žuti okvir, sa bilješkom ako želite. |

{{key:Esc}} nakon prvog ugla poništava. Alat ostaje uključen za sljedeći; {{key:V}} vraća na {{ui:Odaberi}}.

## Status i uređivanje

Kliknite označavanje alatom {{ui:Odaberi}} da ga odaberete. Desni panel prikazuje **Označavanje**: njegovu vrstu i list, njegov **Status** — Otvoreno, Odgovoreno ili Zatvoreno — i tekst, koji možete promijeniti. {{key:Delete}} (ili {{ui:Izbriši}}) ga uklanja; {{key:Mod+Z}} ga vraća.

Igla bilješke je narandžasta dok je otvorena, plava kad je odgovoreno i siva kad je zatvorena; zatvoreni oblak postaje siv.

## Spisak

**Označavanja** u desnom panelu navode svako označavanje predmjera sa njegovim statusom i pokazuju koliko je još otvoreno. Označite **Samo otvorena** da vidite šta je ostalo za riješiti. Kliknite red da idete na njegov list i da ga odaberete.

## Dijelite ih

- {{ui:Označeni PDF}} ih crta na stranicama: isticanja, oblake i igle, svaku sa okvirom koji navodi njen status velikim slovima (OTVORENO, ODGOVORENO, ZATVORENO) i njen tekst. Stranica sa označavanjima, a bez oznaka predmjera, također je uključena.
- {{ui:XLSX}} dodaje radni list **Označavanja**: list, vrstu, status i tekst, po jedan red za svako.
- Čuvaju se u `.takeoff.json` i u [PDF-u sa predmjerom unutra](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
