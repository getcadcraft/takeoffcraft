---
title: Përmbledhja e ofertës dhe propozimi
summary: Shto ngarkesën e punës, taksën e shitjes, shpenzimet e përgjithshme, fitimin dhe garancinë te preventivi, shkruaj përfshirjet dhe përjashtimet, dhe shkarko një PDF propozimi për ta dërguar.
keywords: ofertë, ngarkesë pune, ngarkesë, bordro, propozim, citim, shpenzime të përgjithshme, fitim, shtesë, marzh, taksë shitjesh, garanci, përfshirje, përjashtime, kushte, nënshkrim, klient, çmim
from: 3208a561
---

Preventivi i çmon atë që ke llogaritur. **Përmbledhja e ofertës** e kthen atë në një çmim: shton taksën e shitjes, shpenzimet e përgjithshme, fitimin dhe garancinë, dhe krijon një **PDF propozimi** me përfshirjet dhe përjashtimet e tua.

Hape nga {{ui:Eksporto}} › {{ui:Përmbledhja e ofertës & propozimi…}}. Gjithçka në të ruhet bashkë me llogaritjen, dhe çdo ndryshim mund të zhbëhet.

## Shtesat

Shkruaj një përqindje në çdo një nga pesë (lëri të tjerat në 0). Llogariten sipas këtij rendi, secila mbi atë që është mbi të:

| Rreshti | Llogaritet si |
|---|---|
| Material, Punë | Totalet e preventivit (oferta bazë kur llogaritja ka [alternativa](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Ngarkesa e punës | % e ngarkesës × punë: taksat e pagave, sigurimi dhe përfitimet mbi pagat e ekipeve të tua. |
| **Kosto** | Material + punë + ngarkesa e punës. |
| Taksa e shitjes mbi materialin | % e taksës × material. |
| Shpenzime të përgjithshme | % e shpenzimeve × (kosto + taksa). |
| Fitimi | % e fitimit × (kosto + taksa + shpenzime të përgjithshme). |
| Garancia | % e garancisë × gjithçka më sipër. |
| **Oferta** | Shuma e rreshtave. |

Çdo rresht rrumbullosët në centin më të afërt. Fleta e punës tregon të njëjtat rreshta nën totalin e fletës Preventivi, me formula të gjalla. Përmbledhja përditësohet ndërsa shkruan: {{key:Enter}} merr një përqindje. Çdo alternativë shfaqet me të njëjtat shtesa mbi koston e vet, që pronari të shohë se çfarë ndryshon vërtet marrja e saj.

## Propozimi

Plotëso atë që duhet të thotë propozimi:

- **Projekti** (emri i llogaritjes kur është bosh), **Për** (klienti) dhe **Nga** (kompania jote).
- **Përfshirjet** dhe **Përjashtimet**: një për rresht; një vizë ose pikë në fillim është në rregull.
- **Kushtet**: tekst i lirë, si "I vlefshëm për 30 ditë."
- **Listo artikujt dhe sasitë**: fushëveprimi, artikull pas artikulli, me sasi dhe pa çmime. Hiqe shenjën për një propozim me shumë të përgjithshme.

Zgjidh {{ui:PDF i propozimit}}. PDF-ja (`<takeoff> - proposal.pdf`) ka datën, blokun e çmimit me çdo shtesë dhe ofertën, alternativat, fushëveprimin, përfshirjet dhe përjashtimet, kushtet, dhe vija për nënshkrim dhe datë. Nëse disa sasi nuk mund të maten (një fletë pa shkallë), kjo thuhet nën çmim.

## Në eksportet

Pasi llogaritja ka një përmbledhje oferte, CSV përfundon me të dhe libri i punës merr një fletë **Përmbledhja e ofertës**, me çdo rresht, përqindjen e tij dhe shumën. Shih [Eksporto preventivin](topic:export-estimate).
