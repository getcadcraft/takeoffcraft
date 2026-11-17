---
title: Eksporto preventivin dhe një PDF të shënuar
summary: Shkarko preventivin si fletore XLSX me formula aktive ose si CSV, dhe kopje të PDF-ve të tua me llogaritjen e vizatuar mbi to.
keywords: propozim, përmbledhje oferte, eksport, xlsx, fletëllogaritëse, fletore, csv, pdf e shënuar, printo llogaritjen, raport, ndaj, dërgo, legjendë
from: 334f89c7
---

Eksportet janë shkarkime. Bëhen në kompjuterin tënd nga llogaritja dhe PDF-të e hapura; asgjë nuk dërgohet askund.

## Preventivi si fletëllogaritëse (XLSX)

1. Hap menynë {{ui:Eksporto}} në shiritin e veglave dhe zgjidh {{ui:XLSX}}.
   Shfletuesi shkarkon `(name).xlsx`. Shiriti i gjendjes thotë "Eksportuar (name).xlsx (preventiv me formula aktive, sipas fletës, shenjave, shkallëve)." dhe shton një paralajmërim kur preventivi është i paplotë.
2. Hapeje në programin tënd të fletëllogaritjes.

Fletorja ka katër fleta pune, dhe raportet e mëposhtme kur zbatohen:

| Fleta e punës | Çfarë mban |
|---|---|
| Preventivi | Një rresht për çdo artikull dhe përbërës: sasia, humbja, sasia me humbje, tarifat, materiali, puna, totali dhe shënimet. Totali i punës në fund. |
| Sipas fletës | Sasia e çdo artikulli në çdo fletë, me numrin e shenjave. |
| Shenjat | Çdo shenjë: fleta, artikulli, lloji, sasia dhe detaji (gjatësitë e segmenteve, sipërfaqet bruto dhe të prera, perimetri). |
| Shkallët | Çdo fletë që ka shkallë ose shenja: shkalla e saj, si u vendos (paracaktuar, ose kalibruar mbi cilën distancë), dhe këmbë për njësi PDF. |
| Përmbledhja e llogaritjes | Sasia, numri CSI, shenjat dhe fletët e çdo artikulli, pa çmime. |
| Lista e materialeve | Çdo pjesë e montimit e mbledhur në të gjithë llogaritjen (e njëjta pjesë e përdorur nga disa artikuj është një rresht), me humbjen dhe koston e materialit, dhe artikujt që e përdorin. |
| Kërkesë oferte | Lista e materialeve për t'ia dërguar një furnitori: sasitë me humbje, një kolonë e zbrazët për çmimet për njësi, dhe zgjerimet dhe një total që plotësohen ndërsa shkruhen çmimet. |
| Sipas divizionit | Materiali, puna dhe totali sipas divizionit CSI MasterFormat, kur artikujt kanë një {{ui:Numri CSI}}. |

Me një [përmbledhje oferte](topic:bid-summary), fleta Preventivi mbaron edhe me shtesat e saj (kostoja e punës, taksa e shitjes, shpenzimet e përgjithshme, fitimi, garancia dhe oferta), si formula aktive.

Fleta Preventivi mban **formula aktive**: sasia me humbje, shumat e rrumbullakosura të materialit dhe të punës, totali i çdo rreshti dhe totali i punës. Programet e fletëllogaritjes i rillogaritin, kështu që mund të ndryshosh një tarifë ose humbje në fletëllogaritëse dhe totalet ndjekin. Numrat që llogariti TakeoffCraft ruhen edhe në qeliza, dhe përputhen deri në cent.

Kolona e shënimeve liston formulën e çdo përbërësi, gabimet e formulave, shenjat në fletët pa shkallë, sipërfaqen e murit dhe perimetrin. Kur diçka është lënë jashtë, rreshti i totalit të punës thotë "Jo e plotë: shih shënimet më sipër".

Fletorja është kontrolluar në LibreOffice Calc, i cili e rillogariti në të njëjtat totale. Nuk është hapur ende në Excel. Detajet kolonë për kolonë janë te [Kolonat e eksportit](topic:export-columns).

## Preventivi si CSV

Hap menynë {{ui:Eksporto}} dhe zgjidh {{ui:CSV}}. Merr `(name).csv`: të njëjtat rreshta dhe kolona si fleta Preventivi, si vlera të thjeshta (pa formula), dhe totalin e punës. Përdore për ta ngjitur në një sistem tjetër preventivimi ose kontabiliteti.

CSV ka vetëm preventivin; për sasitë sipas fletës dhe listën e shenjave, përdor XLSX. {{ui:Lista e materialeve}} në të njëjtin menu ruan vetëm listën e materialeve si CSV, për porosi.

## Preventivi në Google Sheets

Mbi tabelën {{ui:Sasitë}}, **Kopjo për Google Sheets** vendos preventivin në clipboard si tekst të ndarë me tab, me të njëjtat rreshta si CSV. Në një Google Sheet, kliko qelizën A1 dhe ngjit. TakeoffCraft nuk hyn në Google dhe nuk dërgon asgjë atje.

## Tarifat që mungojnë dhe nënshkrimi

Një rresht me sasi dhe pa tarifë thotë **Pa tarifë** te Shënimet e tij, dhe eksporti i numëron ato nën totalet. Kur preventivi është nënshkruar, eksporti emëron kush nënshkroi, kur dhe për çfarë totali. Shih [Tarifat që mungojnë dhe nënshkrimi i preventivit](topic:sign-off-the-estimate).

## Një PDF i shënuar

1. Hap PDF-të ku dëshiron t'i vizatohen shenjat.
2. Hap menynë {{ui:Eksporto}} dhe zgjidh {{ui:PDF e shënuar}}.
   Shfaqet "Po shkruhet PDF-ja e shënuar…", pastaj shfletuesi shkarkon një skedar për çdo PDF të shënuar, të emëruar `(emri i PDF) (takeoff).pdf`.

Në kopje:

- segmentet lineare vizatohen si vija me ngjyrën e artikullit të tyre,
- sipërfaqet mbushen lehtë me kontur të plotë, dhe prerjet mbeten të hapura,
- numërimet janë pika,
- çdo faqe me shenja merr një legjendë të vogël në këndin e poshtëm majtas: ngjyrën, emrin dhe sasinë e çdo artikulli në atë faqe.

PDF-të e tua origjinale nuk ndryshohen.

Shënime:

- Shkruhen vetëm PDF-të që janë të hapura. Shenjat në PDF-të që nuk janë të hapura mbeten në totale por nuk vizatohen; hap ato PDF-të së pari.
- Emrat te legjenda përdorin një font standard PDF. Shkronjat që nuk mund t'i shfaqë shtypen si "?".
- Një PDF i enkriptuar nuk mund të kopjohet me shenja: "Ky PDF është i mbrojtur me fjalëkalim ose i enkriptuar, ndaj nuk mund të shkruhet një kopje e shënuar. Vetë llogaritja është në rregull; eksporto fletëllogaritësen në vend të saj."
- {{ui:PDF e shënuar}} i parë në një skedë ngarkon shkruesin e PDF-ve. Jashtë linje, ai është aty vetëm nëse shiriti i aplikacionit shfaq {{ui:Gati jashtë linje}}; shih [Puna jashtë linje](common:offline).

:::chromium
Me disa PDF të shënuara, Chrome dhe Edge mund të pyesin një herë nëse ky sajt lejohet të shkarkojë disa skedarë. Zgjidh Lejo, përndryshe merr vetëm skedarin e parë.
:::

## Nuk ka asgjë për eksportuar?

- {{ui:XLSX}} dhe {{ui:CSV}} kanë nevojë për të paktën një artikull: "Nuk ka ende asgjë për eksportuar: krijo një artikull dhe llogarite."
- {{ui:PDF e shënuar}} kërkon shenja në një PDF të hapur: "Nuk ka ende shenja në PDF-të e hapura."

## Ruaj edhe llogaritjen

Një eksport është një raport. Për të vazhduar punën në llogaritje më vonë, zgjidh edhe {{ui:Ruaj llogaritjen}}: shih [Ruaj dhe rihap një llogaritje](topic:save-and-reopen).

Për të shtuar shpenzime të përgjithshme, fitim, taksë dhe garanci dhe për të dërguar një propozim, shih [Përmbledhja e ofertës dhe propozimi](topic:bid-summary).
