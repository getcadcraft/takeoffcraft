---
title: Beleške, oblaci i isticanja
summary: Obeležite pitanja i izmene na listovima beleškama, revizionim oblacima i isticanjima, pratite svaku kao otvorenu, odgovorenu ili zatvorenu i šaljite ih u označenom PDF-u.
keywords: označavanje, oznake, beleška, komentar, pitanje, rfi, oblak, revizioni oblak, isticanje, status, otvoreno, odgovoreno, zatvoreno, pregled, spisak oznaka
from: 2b395c13
---

Označavanja služe za ono što treba da zapamtite ili pitate dok merite: „potvrditi tip osnove“, revizioni oblak oko promenjenog zida, istaknuta beleška na planu. Stoje na listu sa statusom, navedena su na jednom mestu i štampaju se u označenom PDF-u. **Nikad se ne broje**: nema količine, nema troška.

## Dodavanje

Otvorite {{ui:Označavanje}} na traci iznad lista i izaberite:

| Označavanje | Kako |
|---|---|
| {{ui:Beleška}} | Kliknite gde ide, upišite belešku i izaberite {{ui:Dodaj}}. Prikazuje se kao okrugla pribadača sa prvim redom pored nje. |
| {{ui:Oblak}} | Kliknite jedan ugao, pa suprotni, i upišite belešku (ili je ostavite praznu). Revizioni oblak sa talasastim ivicama ide oko okvira. |
| {{ui:Isticanje}} | Kliknite dva ugla: providan žuti okvir, sa beleškom ako želite. |

{{key:Esc}} posle prvog ugla otkazuje. Alatka ostaje uključena za sledeći; {{key:V}} vraća na {{ui:Izaberi}}.

## Status i uređivanje

Kliknite označavanje alatkom {{ui:Izaberi}} da ga izaberete. Desni panel prikazuje **Označavanje**: njegovu vrstu i list, njegov **Status** (Otvoreno, Odgovoreno ili Zatvoreno) i njegov tekst, koji možete promeniti. {{key:Delete}} (ili {{ui:Izbriši}}) ga uklanja; {{key:Mod+Z}} ga vraća.

Pribadača beleške je narandžasta dok je otvorena, plava kada je odgovoreno i siva kada je zatvorena; zatvoreni oblak postaje siv.

## Spisak

**Označavanja** u desnom panelu navodi svako označavanje predmera sa njegovim statusom i kaže koliko je još otvorenih. Štiklirajte **Samo otvorena** da vidite šta još treba rešiti. Kliknite red da odete na njegov list i izaberete ga.

## Podelite ih

- {{ui:PDF sa oznakama}} ih crta na stranicama: isticanja, oblake i pribadače, svako sa okvirom koji daje status velikim slovima (OTVORENO, ODGOVORENO, ZATVORENO) i svoj tekst. Strana sa označavanjima bez oznaka predmera je takođe uključena.
- {{ui:XLSX}} dodaje radni list **Označavanja**: list, vrstu, status i tekst, po jedan red.
- Čuvaju se u `.takeoff.json` i u [PDF-u sa predmerom unutra](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
