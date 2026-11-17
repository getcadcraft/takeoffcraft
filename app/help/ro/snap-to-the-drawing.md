---
title: Agățare la liniile desenului
summary: Punctele sar pe liniile vectoriale ale PDF-ului în timp ce măsurați sau calibrați: capete, mijloace, intersecții sau oriunde pe o linie, cu un marcaj care arată care este.
keywords: agățare, osnap, agățare la obiect, capăt, mijloc, intersecție, cel mai apropiat, vector, linii, desen, precis, exact, f3, magnet, colț
from: 41d29e9b
---

Majoritatea seturilor de planuri sunt PDF-uri vectoriale: pereții și muchiile lor sunt linii reale, nu pixeli. În timp ce măsurați, TakeoffCraft fixează clicurile pe aceste linii, astfel încât o rută pornește exact din colțul unui perete, iar o calibrare citește cota desenată de proiectant, nu pixelul pe care l-ați atins.

Agățarea este pornită la început. Activați și dezactivați cu {{ui:Agățare}} din bara de stare sau cu {{key:F3}}; setarea se păstrează în acest browser (este și în [Setări](topic:settings)).

## Pe ce se fixează

Când cursorul ajunge la circa 10 pixeli de o linie, un marcaj arată unde va cădea clicul, cu numele său:

| Marcaj | Nume | Unde |
|---|---|---|
| Pătrat | **Capăt** | Capătul unei linii sau un colț unde se întâlnesc linii. Cele două capete ale unei curbe contează; punctele de pe ea nu. |
| Triunghi | **Mijloc** | Mijlocul unei linii drepte. |
| Cruce | **Intersecție** | Unde două linii se intersectează sau unde una se termină pe alta. |
| Clepsidră | **Pe linie** | Cel mai apropiat punct de pe o linie, când niciun capăt, mijloc sau intersecție nu este aproape. |

Capătul, mijlocul sau intersecția cea mai apropiată câștigă. Doar când niciunul nu este aproape, punctul cade pe linia în sine. Măriți imaginea pentru a alege între puncte apropiate: cei 10 pixeli sunt pixeli de ecran, deci la un zoom mai mare acoperă mai puțin din foaie.

## Unde funcționează

Agățarea funcționează în {{ui:Liniar}}, {{ui:Arie}}, {{ui:Cerc}}, {{ui:Decupaj}}, {{ui:Calibrare}} și {{ui:Verificare}}, precum și când trageți colțul unui marcaj selectat. Plasează și puncte pe arce. {{ui:Numărare}}, {{ui:Numărare automată}} și lipirea nu sunt fixate.

Un punct fixat are prioritate față de agățarea la 45° a {{key:Shift}}: pentru a desena la 45° departe de linii, dezactivați mai întâi agățarea cu {{key:F3}}.

:::tip
Calibrați cu agățarea pornită. Dați clic aproape de cele două capete ale unei linii de cotă sau ale unui perete cunoscut: ambele puncte ajung exact pe desen, iar scara iese exactă (bara de stare numește atunci presetarea cu care se potrivește).
:::

## Foi la care nu se poate fixa

- **Foile scanate** sunt imagini fără linii de fixat. Bara de stare spune „Această foaie nu are linii la care să se fixeze (o pagină scanată este o imagine).” iar punctele merg acolo unde dați clic.
- **Desene foarte mari**: agățarea citește până la 400.000 de segmente de linie pe foaie. La o foaie cu mai multe, spune acest lucru și se fixează doar pe primele.
- **Textul** nu este fixat, decât dacă PDF-ul desenează literele ca linii (unele dispozitive de trasare o fac).

Liniile foii sunt citite prima dată când o deschideți, în fundal; o foaie mare poate dura o secundă până apar marcajele.
