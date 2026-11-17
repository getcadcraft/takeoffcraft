---
title: Uvezi količine iz IFC 4.3 datoteke
summary: Otvori IFC 4.3 datoteku puta, železnice, mosta ili zemljanih radova i dobij broj po klasi, sa dužinama, površinama i zapreminama koje datoteka navodi, kao tipizovane količine.
keywords: ifc, ifc4x3, ifc 4.3, put, železnica, most, kolovoz, ivičnjak, sloj, zemljani radovi, ležište, infrastruktura, količine, bim, građevinski, tipizovane količine
from: 6b08c2c4
---

IFC 4.3 datoteka može sadržati puteve, železnice, mostove, morske radove i delove od kojih su napravljeni: kolovozne konstrukcije, slojeve, ivičnjake, šine, zemljane radove, ležišta, pilote i još mnogo toga. TakeoffCraft ih čita i pretvara u tipizovane količine koje možeš da cenuš.

## Otvori datoteku

1. Izaberi {{ui:Otvori planove}} u grupi {{ui:Datoteka}} ili pritisni {{key:Mod+O}}.
2. Izaberi IFC datoteku (možeš je izabrati zajedno sa PDF-ovima), ili je prevuci na TakeoffCraft.

Za svaku klasu i unapred definisan tip pravi se jedna tipizovana količina, na primer „Kolovoz (fleksibilni): brojanje", i, kada ih datoteka navodi, „dužina" u m, „površina" u m² i „zapremina" u m³. Beleška uz svaku stavku kaže koliko je elemenata prebrojano i koliko nije imalo količinu. Otvaranje novije datoteke istog naziva ažurira te količine umesto da dodaje nove.

## Šta ne radi

- Čita skupove količina (IfcElementQuantity) koje datoteka sadrži. Ne meri 3D oblike, pa element bez skupa količina bude prebrojan, ali ne dodaje dužinu, površinu ni zapreminu.
- Čitaju se samo infrastrukturne klase IFC 4.3. Zgradarska datoteka (zidovi, vrata, međuspratne konstrukcije) se ovde ne pretvara u količine; datoteka koja nije IFC 4.3 to kaže i ništa ne uvozi.
- Jedinice su one iz datoteke, pretvorene u metre.
