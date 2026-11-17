---
title: Uvoz količina iz IFC 4.3 datoteke
summary: Otvorite IFC 4.3 datoteku puta, željeznice, mosta ili zemljanih radova i dobijte brojanje po klasi, sa dužinama, površinama i zapreminama koje datoteka navodi, kao tipizirane količine.
keywords: ifc, ifc4x3, ifc 4.3, put, cesta, željeznica, most, kolovoz, sloj, ivičnjak, zemljani radovi, ležište, infrastruktura, količine, bim, građevina, tipizirane količine
from: 6b08c2c4
---

Datoteka IFC 4.3 može sadržavati ceste, željeznice, mostove, morske građevine i dijelove od kojih se one sastoje: kolovoze, slojeve, ivičnjake, šine, zemljane radove, ležišta, pilote i još mnogo toga. TakeoffCraft ih čita i pretvara u tipizirane količine koje možete cijeniti.

## Otvorite datoteku

1. Izaberite {{ui:Open plans}} u grupi {{ui:File}}, ili pritisnite {{key:Mod+O}}.
2. Izaberite IFC datoteku (možete je izabrati zajedno sa PDF-ovima), ili je prevucite na TakeoffCraft.

Za svaku klasu i predefinisani tip pravi se jedna tipizirana količina, na primjer "Kolovoz (fleksibilni): brojanje", i, kad ih datoteka navodi, "dužina" u m, "površina" u m² i "zapremina" u m³. Napomena uz svaku stavku kaže koliko je elemenata izbrojano, a koliko nije imalo nikakvu količinu. Otvaranje novije datoteke istog naziva ažurira te količine umjesto da dodaje nove.

## Šta ne radi

- Čita skupove količina (IfcElementQuantity) koje datoteka nosi. Ne mjeri 3D oblike, pa element bez skupa količina se broji, ali ne dodaje dužinu, površinu ni zapreminu.
- Čitaju se samo infrastrukturne klase IFC 4.3. Zgradarska datoteka (zidovi, vrata, međuspratne konstrukcije) se ovdje ne pretvara u količine; datoteka koja nije IFC 4.3 to kaže i ne uvozi ništa.
- Jedinice su jedinice same datoteke, pretvorene u metre.
