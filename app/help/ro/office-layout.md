---
title: "Aspectul de birou: grupare, subtotaluri, titlu și antete din Default Policies"
summary: Activați suplimentul Default Policies, iar devizul, cantitățile pe foaie, exporturile și ce citește un asistent preiau aspectul tabelelor de birou, același pe care îl preiau și tabelele BimCraft.
keywords: standard de birou, aspect de birou, default policies, supliment, aspect tabel, grupare după tip, grupare după foaie, subtotal, totaluri, titlu, antete, majuscule, aspect deviz, aspect export, setări
from: cfd2f30a
---

## Ce veți face

Faceți ca TakeoffCraft să așeze tabelele așa cum le emite biroul dvs., fără a le configura în fiecare antemăsurătoare. Aspectul se stabilește o singură dată, în Default Policies, și este valabil pentru fiecare aplicație de pe acest computer: ce setați în BimCraft sau în CadCraft este folosit și de TakeoffCraft, și invers.

## Pași

1. Deschideți **Setări › Suplimente** și activați **Default Policies**. Este dezactivat până la activare; cu el dezactivat sau fără nimic setat, TakeoffCraft rămâne exact cum era.
2. Deschideți **Setări › Global › Default Policies** și găsiți **Schedule layout (the office standard)**:

| Politică | Ce face în TakeoffCraft |
|---|---|
| Group schedules by | **Type** grupează devizul după tipul articolului (Linear, Area, Count, Typed quantity). **Level** grupează cantitățile pe foaie după foaia lor. **Room** și **No grouping** lasă ambele negrupate |
| Totals in schedules | **A subtotal under each group and a total** adaugă un subtotal sub fiecare grup. Totalul lucrării rămâne mereu |
| Schedule title | O linie deasupra tabelului, de exemplu `{schedule}: office layout` |
| Column headings | Așa cum sunt scrise, ÎN MAJUSCULE sau Cu Majuscule |

3. Închideți Setările. Tabelele se actualizează imediat.

## Ce preia aspectul

- **Cantități › Pe articol** și **Pe foaie**: titlurile grupurilor, un subtotal sub fiecare grup, titlul și forma majusculelor din antete. O linie sub titlu spune ce părți a stabilit standardul biroului. Rândurile sunt aceleași: încă scrieți tarife și pierderi în ele și faceți clic pe cifre pentru a selecta marcajele lor. O componentă sau o a doua condiție rămâne sub articolul ei.
- **Devizul exportat** (CSV și XLSX): aceleași grupuri și subtotaluri. În registrul de calcul, un subtotal este o formulă `SUBTOTAL` peste grupul său, iar totalul lucrării este și el una, astfel încât nimic nu este numărat de două ori.
- **Ce citește un asistent**: `takeoff_estimate` și `takeoff_quantities` (pe foaie) adaugă un bloc `layout` cu grupurile, rândurile și subtotalurile și arată ce părți a stabilit biroul.

## Ce își păstrează propriul aspect

- **Cantități › Pe zonă** își stabilește propria grupare (după zona de ofertă) și o păstrează.
- **Totalul lucrării**, adaosurile din rezumatul ofertei și variantele nu sunt regrupate.
- O grupare pentru care tabelul nu are coloană este lăsată deoparte: devizul nu are nivel, iar cantitățile pe foaie nu au tip.

## De reținut

- Politicile sunt păstrate în acest browser pentru fiecare aplicație CadCraft și circulă în fișierul Default Policies (**Salvare într-un fișier** / **Încărcare dintr-un fișier**, în același loc), astfel încât un birou împarte un singur fișier.
- Un deviz exportat ca CSV cu grupuri este pentru citire. Pentru a aduce un deviz înapoi ca bibliotecă de prețuri, exportați-l fără nicio grupare.
- Partea BimCraft a aceluiași standard: tabele, configurări și exporturi. TakeoffCraft nu are încă politici proprii, deci nu există secțiunea Default Policies sub Setări › TakeoffCraft.
