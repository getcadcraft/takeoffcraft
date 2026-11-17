---
title: "Paraqitja e zyrës: grupimi, nëntotalet, titulli dhe titujt nga Politikat e tua të parazgjedhura"
summary: Aktivizo shtojcën Politikat e parazgjedhura dhe vlerësimi, sasitë sipas fletës, eksportet dhe ajo që lexon një asistent marrin paraqitjen e tabelës së zyrës tënde, të njëjtën që marrin tabelat e BimCraft.
keywords: standardi i zyrës, paraqitja e zyrës, politikat e parazgjedhura, shtojcë, paraqitja e tabelës, grupo sipas llojit, grupo sipas fletës, nëntotal, totale, titull, tituj, shkronja të mëdha, paraqitja e vlerësimit, paraqitja e eksportit, cilësimet
from: cfd2f30a
---

## Çfarë do të bësh

Bëj që TakeoffCraft t'i paraqesë tabelat e veta ashtu siç i lëshon zyra jote, pa e konfiguruar në çdo llogaritje. Paraqitja caktohet një herë, te Politikat e parazgjedhura, dhe vlen për çdo aplikacion në këtë kompjuter: ajo që cakton në BimCraft ose CadCraft përdoret edhe nga TakeoffCraft, dhe e kundërta.

## Hapat

1. Hap **Cilësimet › Shtojcat** dhe aktivizo **Politikat e parazgjedhura**. Është e fikur derisa ta aktivizosh; me të fikur, ose pa asgjë të caktuar, TakeoffCraft është saktësisht si më parë.
2. Hap **Cilësimet › Globale › Politikat e parazgjedhura** dhe gjej **Paraqitja e tabelave (standardi i zyrës)**:

| Politika | Çfarë bën në TakeoffCraft |
|---|---|
| Grupo tabelat sipas | **Lloji** grupon vlerësimin sipas llojit të artikullit (Linear, Area, Count, Sasi e tipizuar). **Niveli** i grupon sasitë sipas fletës së tyre. **Dhoma** dhe **Pa grupim** lënë të dyja pa grupim |
| Totalet në tabela | **Një nëntotal nën çdo grup dhe një total** shton një nëntotal nën çdo grup. Totali i punës mbetet gjithmonë |
| Titulli i tabelës | Një rresht mbi tabelë, për shembull `{schedule}: paraqitja e zyrës` |
| Titujt e kolonave | Siç shkruhen, NË SHKRONJA TË MËDHA ose Me Shkronja Të Mëdha |

3. Mbyll Cilësimet. Tabelat ndryshojnë menjëherë.

## Çfarë merr paraqitjen

- **Sasitë › Sipas artikullit** dhe **Sipas fletës**: titujt e grupeve, një nëntotal nën çdo grup, titulli dhe shkronjat e titujve. Një rresht nën titull thotë cilat pjesë i ka caktuar standardi i zyrës. Rreshtat janë të njëjtët: ende shkruan norma dhe humbje në to, dhe klikon shifrat për të përzgjedhur shenjat e tyre. Një përbërës ose një kusht i dytë qëndron nën artikullin e vet.
- **Vlerësimi i eksportuar** (CSV dhe XLSX): të njëjtët grupe dhe nëntotale. Në librin e punës, një nëntotal është një formulë `SUBTOTAL` mbi grupin e vet, dhe totali i punës është gjithashtu një e tillë, që asgjë të mos numërohet dy herë.
- **Ajo që lexon një asistent**: `takeoff_estimate` dhe `takeoff_quantities` (sipas fletës) shtojnë një bllok `layout` me grupet, rreshtat dhe nëntotalet, dhe thonë cilat pjesë caktoi zyra.

## Çfarë mban vetë

- **Sasitë › Sipas zonës** përcakton grupimin e vet (sipas zonës së ofertës) dhe e mban.
- **Totali i punës**, shënimet e përmbledhjes së ofertës dhe alternativat nuk rigrupohen.
- Një grupim që tabela nuk ka kolonë për të lihet jashtë: vlerësimi nuk ka nivel, sasitë sipas fletës nuk kanë lloj.

## Të mirë për t'uditur

- Politikat mbahen në këtë shfletues për çdo aplikacion CadCraft dhe udhëtojnë në skedarin e Politikave të parazgjedhura (**Ruaj në një skedar** / **Ngarko nga një skedar** në të njëjtin vend), kështu që një zyrë ndan një skedar.
- Një vlerësim i eksportuar si CSV me grupe është për lexim. Për ta kthyer si bibliotekë çmimesh, eksportoje pa grupim.
- Pjesa e BimCraft të së njëjtës standard: tabelat, konfigurimet dhe eksportet. TakeoffCraft nuk ka ende politika të veta, prandaj nuk ka seksion Politikat e parazgjedhura nën Cilësimet › TakeoffCraft.
