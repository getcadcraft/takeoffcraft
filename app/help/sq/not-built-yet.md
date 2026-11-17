---
title: Çfarë nuk është ndërtuar ende
summary: Veçoritë e llogaritjes së sasive që ky version nuk i ka, dhe çfarë të bësh në vend të tyre sot.
keywords: kufizime, mungon, akoma jo, plan zhvillimi, planifikuar, zgjidhje e përkohshme, për vijë, cloud, desktop
from: 94ff90d0
---

TakeoffCraft është në zhvillim. Kjo listë tregon çfarë nuk bën ky version aktual, dhe si ta kryesh punën edhe kështu.

## Matja

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Futja e një pike në mes të një vargu ose konturi | Fshi shenjën dhe vizatoje përsëri. |
| Përzgjedhja me kuti (dritare) | {{key:Shift}} + kliko çdo shenjë, ose {{key:Mod+A}} për çdo shenjë në fletë. Shih [Kopjo, ngjit dhe dyfisho shenjat](topic:copy-paste). |
| Rrotullimi, pasqyrimi ose ndryshimi i shkallës së një kopjeje të ngjitur | Ngjit në një fletë me të njëjtën shkallë dhe të njëjtën orientim; vizato pjesën tjetër me dorë. |
| Leximi i shkallës nga një fletë e skanuar, ose nga një shirit grafik shkallësh | Zgjidh të gatshmen, ose kalibro sipas gjatësisë së shiritit. |
| Më shumë se një shkallë për fletë (zona detajesh, planimetri të zmadhuara) | Mat pjesën me shkallën e fletës, dhe llogarit detajin në fletën e vet të zmadhuar nëse grupi e ka. |

## Artikujt dhe çmimet

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Formula montimi që përdorin llojet e tjera të shenjave të një artikulli (dyert e një artikulli dhome, në formulat e katit të saj) | Formulat përdorin totalet e llojit kryesor; vlerëso llojet e tjera në rreshtat e veta. |
| Formula montimi të llogaritura vijë për vijë | Formulat përdorin totalet e artikullit; përdor `N` për shtesat e çdo vije. |
| Formula që përdorin sasitë e një artikulli tjetër | Përsërit matjen te ai artikull, ose llogarite në eksportin e fletëllogaritësit. |
| Ekipe për përbërësit e montimit, ose një ditë pune tjetër nga 8 orë | Jepi ekipin artikullit; lexo ditët-ekip për një ditë pune tjetër si orët-ekip ÷ dita jote. |
| Shënime të tjera përveç shënimeve, reve dhe theksimeve (shigjeta, përmasa, vula), ose përgjigje te një shënim | Shkruaje në tekstin e shënimit; ndrysho statusin e tij ndërsa zgjidhet. |
| Një bibliotekë çmimesh e ndarë nga një ekip, ose e mbajtur me llogarinë tënde | Biblioteka mbahet në këtë shfletues: eksportoje si CSV dhe importoje në kompjuterin tjetër. |
| Paketat tregtare të rishikuara nga vlerësues profesionistë | Çdo paketë është një fillim: kontrollo supozimet e saj me punën dhe produktet e tua para se të vlerësosh me të. Shih [Paketat tregtare](topic:trade-packs). |
| Çmimet në paketat tregtare | Paketat sjellin vetëm montime: vendos normat e tua, ose importo listën e çmimeve si CSV. |
| Riemërtimi i llogaritjes | Emri vjen nga PDF-ja e parë; riemërto skedarët e shkarkuar. |
| Emërtimi i fletëve me dorë | Fletët emërtohen sipas etiketave të faqeve të PDF-së; kërko sipas emrit të skedarit dhe faqes. |

## Vizatimet (DWG dhe DXF)

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Tabela të stilit të printimit, caktime lapsash dhe skedarë CTB në fletët e një vizatimi | Një vizatim vizatohet i zi, ose me ngjyrat e tij të errësuara për letër; trashësitë e vijave vijnë nga vizatimi. |
| Hapja e një DXF binar, ose e një DWG më të vjetër se AutoCAD 2000 | Ruaje si DXF ASCII ose si DWG më të ri. |
| Gjetja e një vizatimi të lidhur (xref) sipas dosjes ku ndodhet | Hap edhe skedarin e vizatimit të lidhur, bashkë me atë kryesor: gjendet sipas emrit të skedarit midis skedarëve të hapur. |
| Matja e polivijëve 3D, rrjetave, solidëve dhe rajoneve | Numëroji sipas shtresës dhe llojit, ose mat pamjen në plan me veglat Linear dhe Sipërfaqe. |
| Tekst në një PDF të shënuar nga një vizatim në shkrime jo latine | Karakteret për të cilat Helvetica nuk ka glif shtypen si "?" në PDF-në e shënuar; vizatimi në ekran nuk preket. |
| Dorëzimi i një vizatimi në një aplikacion tjetër nga shiriti i fletës | Hap të njëjtin skedar në atë aplikacion. |
| Një vizatim që mban brenda llogaritjen, ashtu si e bën {{ui:PDF me llogaritjen brenda}} për PDF-të | {{ui:Ruaj llogaritjen}}: `.takeoff.json` rihapet në të njëjtin vizatim, dhe gjendet sipas përmbajtjes. |
| Nënvizime PDF, imazhe dhe objekte OLE të vendosura në një vizatim | Imazhet shfaqen vetëm si kornizë. Hap vetë PDF-në nënvizim si fletë. |

## Numërimi automatik

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Gjetja e simboleve në një fletë pa shkallë të vizatuar në madhësi tjetër | Jepi fletës shkallën e saj, ose kërkoje me një kuti të vizatuar aty. |
| Gjetja e simboleve të pasqyruara | Numëroji ato me dorë, ose kërko përsëri me një kuti rreth një simboli të pasqyruar. |

## Skedarët dhe ndarja

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Një PDF që shfaq shenjat dhe mban llogaritjen | {{ui:Marked PDF}} për njerëzit që duhet t'i shohin shenjat; {{ui:PDF me llogaritjen brenda}} për ta rihapur në TakeoffCraft. |
| Një CSV e sasive sipas fletës ose e shenjave | Përdor {{ui:XLSX}}: fletët e tij By sheet dhe Marks i kanë ato. |
| Ruajtja në cloud | Nuk është e disponueshme ende. Ruaj skedarët e projektit në kompjuterin tënd dhe bëj kopje rezervë. |
| Një aplikacion desktop i veçantë për TakeoffCraft | Nga versioni 0.5, aplikacioni desktop është CadCraft Studio, me të tetë aplikacionet në një instalim. TakeoffCraft funksionon edhe në shfletues. |

## Ekrani dhe hyrja

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Menyja me klikim të djathtë (ose me shtypje të gjatë) | Përdor shiritin e veglave, panelet dhe tastet. Një shtypje e gjatë mbyll një varg ose kontur. |
| Rrotullimi i pamjes | Faqet e rrotulluara në PDF shfaqen tashmë drejt. |

## Pamja 3D

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Vizatimi ose ndryshimi i shenjave në 3D | Kthehu te fleta ({{key:3}}) për të vizatuar; përzgjedhja dhe fshirja punojnë edhe në 3D. |
| Rreshtimi i kateve të mbivendosura, të vizatuara në vende të ndryshme të faqeve | Mbivendos katet e vizatuara njësoj; kontrollo të tjerët një fletë për herë. |
| Numërimi i shtyllave të dimensionuara si objekti që numërohet | Çdo shtyllë në një fletë është e njëjtë në madhësi; shënon vendin e një numërimi, jo çfarë është. |

## Ofertimi

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Shtesa në një paketë që u dërgua më parë, letra dhënie pune, një fletë fushëveprimi që çdo ofertues e nënshkruan | Dërgo një paketë të re, dhe shkruaj vetë dhënien e punës. [Dërgo një paketë për oferta](topic:bid-invitations) mbulon atë që është ndërtuar. |
| Dërgimi i ftesave për oferta nga çdo llogari: ndërsa testohet, postimi për ofertues të jashtëm është i çaktivizuar, përveç llogarive që ekipi CadCraft i ka aktivizuar | Shkarko {{ui:Fushëveprimi CSV}}, dërgoje me email vetë dhe shkruaj ofertat. |
| Dërgimi i paketave të ofertave nga një dritare Studio | Dërgo nga TakeoffCraft në shfletues. |
| Rillogaritja e zonës së ofertës së një alternative me një ofertë të zgjedhur | Alternativat dhe nëntotalet e zonave të ofertës përdorin çmimet e tua; rregullo alternativën me dorë. |
| Kujtesa automatike para se të skadojë data e sigurimit ose e licencës së nënkontraktorit | Data shënohet te faqja Nënkontraktorët kur kalon ose është brenda 30 ditësh; kontrolloje kur fton. |

## Panelet

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Lëvizja e tabelës {{ui:Sasitë}} | Vetëm panelet {{ui:Fletët}} dhe {{ui:Artikujt}} lëvizen. Shih [Rregullo panelet](common:arrange-panels). |

## Fletëllogaritësit

Libri i punës XLSX është kontrolluar në LibreOffice Calc, që rillogariti çdo total deri te centi, njësoj si TakeoffCraft. Nuk është hapur ende në Excel. Nëse një program fletëllogaritës shfaq diçka të papritur, eksporti CSV mban të njëjtin vlerësim si vlera të thjeshta.
