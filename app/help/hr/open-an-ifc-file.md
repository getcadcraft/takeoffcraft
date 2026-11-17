---
title: "Uzimanje količina iz IFC 4.3 datoteke"
summary: "Otvorite IFC 4.3 datoteku ceste, pruge, mosta ili zemljanih radova i dobijete brojanje po klasi, s duljinama, površinama i volumenima koje datoteka navodi, kao tipizirane količine."
keywords: "ifc, ifc4x3, ifc 4.3, cesta, pruga, most, kolnik, rubnjak, sloj, zemljani radovi, ležaj, infrastruktura, količine, bim, civil, tipizirane količine"
from: 6b08c2c4
---

IFC 4.3 datoteka može sadržavati ceste, pruge, mostove, pomorske radove i dijelove od kojih su sastavljeni: kolničke konstrukcije, slojeve, rubnjake, tračnice, zemljane radove, ležajeve, pilote i još mnogo toga. TakeoffCraft ih čita i pretvara u tipizirane količine koje možete cijeniti.

## Otvorite datoteku

1. Odaberite {{ui:Otvori nacrte}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Odaberite IFC datoteku (možete je odabrati uz PDF-ove) ili je ispustite na TakeoffCraft.

Za svaku klasu i predefinirani tip stvara se jedna tipizirana količina, na primjer „Kolnik (fleksibilni): brojanje“ i, kad ih datoteka navodi, „duljina“ u m, „površina“ u m² i „volumen“ u m³. Napomena uz svaku stavku kaže koliko je elemenata prebrojeno i koliko ih nema navedenu količinu. Otvaranje novije datoteke istog naziva ažurira te količine umjesto dodavanja novih.

## Što ne radi

- Čita skupove količina (IfcElementQuantity) koje datoteka sadrži. Ne mjeri 3D oblike, pa se element bez skupa količina broji, ali ne dodaje duljinu, površinu ni volumen.
- Čitaju se samo infrastrukturne klase IFC 4.3. Zgradarska datoteka (zidovi, vrata, ploče) ovdje se ne pretvara u količine; datoteka koja nije IFC 4.3 to kaže i ništa ne unosi.
- Jedinice su jedinice datoteke, pretvorene u metre.
