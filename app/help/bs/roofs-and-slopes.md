---
title: Krovovi i nagibi
summary: Daj površini njen nagib da izmjeriš krovnu površinu iz nacrta, a zabatne rubove, grebene i žlijebove mjeri duž njihovog nagiba.
keywords: krov, nagib, pad, faktor nagiba, uspon, trčanje, 6:12, zabatni rub, greben, žlijeb, zabat, krovni pokrov, kvadrati, kosa površina, prava dužina, tlocrtna površina
from: 38225b60
---

Krovni nacrt prikazuje svaku krovnu ravan ravno, gledano odozgo. Sam krov je veći: ravan pod 6:12 ima oko 12% više površine od svog nacrta, a njene kose ivice su duže nego što izgledaju. Daj stavci njen nagib i TakeoffCraft mjeri duž kosine.

## Upis nagiba

Nagib je uspon na svakih 12 jedinica trčanja, kao na simbolima nagiba krovnog nacrta. Upiši ga kao `6:12`, `6/12` ili samo `6`; radi i drugo trčanje (`4:10` je 4.8:12). Ugao radi sa znakom stepena: `26.57°`. Prazno ili `0` znači ravno.

## Krovne površine

1. Napravi stavku površine za krovni pokrov ili otvori onu koju imaš.
2. U njenim postavkama upiši **Nagib**, na primjer `6:12`.
3. Obrubi svaku krovnu ravan na nacrtu sa {{ui:Površina}}, kao i obično.

Svaka ravan se računa kao njena tlocrtna površina puta faktor nagiba: √(1 + (uspon ÷ 12)²), 1.118 za 6:12 i 1.414 za 12:12. Odaberi ravan da vidiš njenu **Površinu** (na kosini), **Tlocrtnu površinu** i **Faktor nagiba**.

Ravni s drugim nagibom: odaberi ravan i upiši njen vlastiti **Nagib** u njenom panelu. Ostavi prazno da koristi nagib stavke. 3D pregled za provjeru, sklopovi (`A` je kosa površina), troškovi i izvoz svi koriste kosu površinu. Odbici na nagnutoj ravni, kao svjetlarnici, odbijaju se pod istim nagibom.

Obim (`P`) ostaje tlocrtni obim. Strehe, zabatne rubove, grebene i žlijebove mjeri kao dionice (dolje).

## Zabatni rubovi, grebeni i žlijebovi

1. Napravi linijsku stavku, na primjer "Zabatni rub" ili "Grebeni".
2. Postavi njen **Nagib** na **Zabatni rub** (kosu ivicu, kao kod zabata) ili **Greben ili žlijeb** (liniju gdje se sastaju dvije ravni), i upiši **Nagib** krovnih ravni.
3. Nacrtaj dionice na nacrtu sa {{ui:Linijski}}.

Zabatni rub se računa kao njegova tlocrtna dužina puta faktor nagiba. Greben ili žlijeb ide pod 45° preko nacrta između dvije ravni istog nagiba, pa je njegova prava dužina tlocrtna dužina puta √(1 + (uspon ÷ 12)² ÷ 2): 1.061 za 6:12, 1.225 za 12:12.

Jedna dionica može miješati ove vrste. Odaberi je: svaki segment u njenom panelu ima listu nagiba — **Postavka stavke**, **Nivo**, **Zabatni rub** ili **Greben ili žlijeb** — i njegovu dužinu duž kosine. **Nagib** dionice u panelu zamjenjuje nagib stavke za sve njene segmente. Panel takođe prikazuje **Tlocrtnu dužinu**, a oznake na listu prikazuju dužine duž kosine.

Odbici i dalje rade: odbijeni segment ne računa ništa, bio kos ili ne.

:::note
Grebeni i žlijebovi pretpostavljaju da obje ravni imaju isti nagib. Za ravni različitih nagiba izmjeri greben po njegovoj pravoj dužini drugdje, ili ga nacrtaj kao zabatni rub s ekvivalentnim nagibom.
:::
