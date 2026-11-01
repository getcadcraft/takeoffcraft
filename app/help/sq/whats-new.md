---
title: Çfarë ka të re në 0.7
summary: Vizatimet DWG dhe DXF hapen si fletë me shkallën e tyre, numërime dhe gjatësi të sakta nga vetë vizatimi, oferta e zgjedhur e nënkontraktorit si çmim i paketës, ftesa për oferta me çmime të mbyllura, mjete asistenti për vizatimet, dhe USD nga pamja e kontrollit 3D.
keywords: çfarë ka të re, shënime lançimi, ndryshime, changelog, 0.7, versioni, veçori të reja, dwg, dxf, vizatim, paraqitje, hapësira e modelit, shkalla e vizatimit, numëro nga vizatimi, numërim CAD, blloqe, blloqe dinamike, atribute, shtresa, xref, vizatim i lidhur, mat vizatimin, polivijë, vijëzim, pdf i shënuar, ofertë e zgjedhur, përdor një ofertë, dërgo për oferta, ftesë oferte, hapja e ofertave, ofertë e vonuar, të dhënat e nënkontraktorëve, csv, asistent, mcp, usd, usdz, njësitë, lista e njësive, kompakte, panele, dialoge, portugeze
from: ad4f0df1
---

Kjo është ajo që ndryshoi në TakeoffCraft 0.7, krahasuar me 0.6. Vizatimet hapen tani ashtu siç janë, pa printuar së pari në PDF, dhe një paketë oferte mund të dërgohet te nënkontraktorët dhe të kthehet e çmuar.

## Të reja

### Vizatimet DWG dhe DXF

- **Hap një vizatim si fletë.** {{ui:Open plans}} te grupi {{ui:File}} ({{key:Mod+O}}, ose lësho skedarët) pranon vizatime DWG dhe DXF krah PDF-ve. Hapësira e modelit dhe çdo paraqitje bëhen fletë në listën {{ui:Sheets}}, dhe një llogaritje mund të mbulojë vizatime dhe PDF-të bashkë. Asgjë nuk ngarkohet. Shih [Hap një vizatim DWG ose DXF](topic:open-a-drawing).
- **Shkalla vjen nga vizatimi.** Një paraqitje fillon me shkallën e dritares së saj më të madhe të shikimit, e emëruar si e gatshme kur është e tillë, si 1/2" = 1'-0". Modeli fillon në njësitë e vizatimit. Një vizatim pa njësi shfaq "Pa shkallë" derisa ta kalibrosh. {{ui:Calibrate}}, {{ui:Check}} dhe {{ui:Preset}} mbeten përparësi. Shih [Shkalla](topic:open-a-drawing#the-scale).
- **Shtresat dhe vizatimet e lidhura.** {{ui:Layers}} te shiriti i fletës shfaq ose fsheh shtresat e vizatimit. Shtresat që skedari i ka çaktivizuar ose ngrirë fillojnë të fshehura dhe nuk numërohen përveç nëse zgjedh ndryshe. Një vizatim i lidhur (xref) i hapur krah vizatimit mëmë vizatohet dhe numërohet aty ku është futur; derisa të hapet, shiriti i statusit thotë çfarë mungon. Shih [Shtresat](topic:open-a-drawing#layers).
- **PDF-i i shënuar funksionon nga një vizatim.** {{ui:Export}} › {{ui:Marked PDF}} vizaton së pari fletët e shënuara të një vizatimi si PDF, kështu që kopja tregon shenjat dhe legjendën e tua pa asnjë hap printimi. Vizatohet me të zeza ose me ngjyrat e vizatimit, pa tabela stilesh printimi. Shih [Një PDF i shënuar](topic:export-estimate#a-marked-pdf).

### Numërime dhe gjatësi të sakta nga një vizatim

- **Numëro atë që thotë vizatimi se ka.** {{ui:CAD count}} te shiriti i fletës numëron një bllok sipas emrit (përfshirë blloqet e futura, gjendjet e blloqeve dinamike dhe grupet e blloqeve), gjithçka të një lloji në një shtresë, ose një vlerë teksti ose atributi. Numëron atë që shfaq fleta, ose tërë vizatimin një herë. Shtimi i shenjave është një hap zhbërjeje, dhe numërimi përsëri shton vetëm atë që është e re. {{ui:Auto count}} mbetet për PDF-të dhe për simbole që nuk janë blloqe. Shih [Numëro nga një vizatim](topic:count-from-a-drawing).
- **Mat nga vijat e vetë vizatimit.** {{ui:Measure drawing}} i merr si shenja të një artikulli linear ose sipërfaqësor vijat, harqet, polivijat, rrethet, vijëzimet dhe solidet që kliko ose zgjedh me kuadër. Harqet, lakimet dhe vrimat e një vijëzimi dalin të sakta; elipset dhe splinet maten me korda të holla, dhe shiriti e thotë këtë. Shih [Mat nga një vizatim](topic:measure-from-a-drawing).

### Ofertat

- **Përdor ofertën e një nënkontraktori si çmim të paketës.** Te {{ui:Export}} › {{ui:Bid packages and leveling…}}, zgjidh {{ui:Use}} te një ofertë. Artikujt e paketës mbeten si sasi, një rresht **Oferta e zgjedhur** mban çmimin, artikujt që oferta i lë jashtë mbeten me koston tënde, dhe shpenzimet e përgjithshme, fitimi dhe garancia zbatohen mbi të. Ndërrimi i ofertës është një hap zhbërjeje; libri i punës dhe përmbledhja e ofertave e mbajnë. Shih [Përdor një ofertë si çmim të paketës](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Dërgo një paketë për oferta.** {{ui:Send for bids…}} nën një paketë i dërgon me email çdo nënkontraktori një lidhje me një faqe që nuk kërkon llogari: shohin fushëveprimin dhe fletët si PDF, shkruajnë një çmim në çdo rresht ose e shënojnë si të pa përfshirë, shtojnë shënime dhe deri në tre skedarë, ose refuzojnë. {{ui:Get prices}} sjell në fletën e nivelimit atë që u kthye, e shënuar **web**. Dërgimi është i hapur vetëm për llogaritë që ekipi i CadCraft i ka aktivizuar ndërsa testohet (shih më poshtë). Shih [Dërgo një paketë për oferta](topic:bid-invitations).
- **Të mbyllura deri në hapje.** Çmimet mund të mbeten të mbyllura deri në një orë hapjeje që ti cakton: deri atëherë askush nuk e sheh një çmim, as ti. Në hapje çdo ofertë shfaqet menjëherë, dhe një ofertë që vjen pas afatit shënohet e vonuar. Shih [Ofertat e mbyllura dhe hapja](topic:bid-invitations#sealed-bids-and-the-opening).
- **Të dhënat e nënkontraktorëve.** Llogaria jote në getcadcraft.com mban kontaktet e çdo kompanie, profesionet, përgjigjet e kualifikimit, dhe datat e sigurimit dhe licencës (shënohen kur kanë kaluar ose brenda 30 ditëve), me ofertat e tyre të kaluara. Importoji dhe eksportoji si CSV, dhe zgjidhi kur dërgon një paketë. Shih [Në faqen e internetit](topic:bid-invitations#on-the-website).

### Asistentët me AI

- **Asistentët mund të shtojnë në llogaritje.** Me **Redakto** të zgjedhur, asistenti yt mund të shtojë artikuj (`items_add`) dhe të masë vija, sipërfaqe dhe numërime në një fletë (`marks_add`; gjatësi dhe sipërfaqe vetëm në një fletë me shkallë), çdo thirrje është një hap zhbërjeje.
- **Mjete asistenti për vizatimet.** Te një DWG ose DXF i hapur, një asistent mund të listojë fletët e tij dhe çfarë mund të numërohet, të numërojë saktësisht, të shtojë shenjat e numërimit, dhe të masë nga gjeometria e vizatimit. Pa TakeoffCraft të hapur, serveri CadCraft MCP hap një vizatim si llogaritje të re dhe e ruan, dhe `cadcraft count` numëron nga rreshti i komandave. Shih [Çfarë mund të kërkojë një asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Pamja 3D e kontrollit si USD.** {{ui:USD package (.usdz)}} krah {{ui:GLB}} te pamja 3D e kontrollit shkruan çdo mur, soletë, pllakë, shtyllë numërimi dhe vijë si objekt të vetin, të emëruar sipas artikullit dhe me sasinë e tij, në metra. Një asistent mund ta eksportojë edhe ai (`usd_export`). Shih [Eksporto pamjen 3D të kontrollit si USD](topic:usd).

## Në çdo aplikacion

- **Njësitë.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ka nga një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e anketës së SHBA-së është njësi e vetë). Çaktivizo njësitë që nuk përdor kurrë dhe ato largohen nga listat e njësive; vendos yll te një dhe puna e re fillon me të. Një skedar gjithmonë mban njësinë e vet. Në TakeoffCraft listat {{ui:Unit}} të një artikulli ndjekin çaktivizimet, një artikull i ri fillon me njësinë e gjatësisë ose sipërfaqes me yll, katrorët e çatisë (SQ), akrat dhe hektarët janë njësi të reja sipërfaqeje, dhe një kuti gjatësie pranon shenjën e çdo njësie, si `3 yd`. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një paraqitje më e dendur dhe panele që mblidhen.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} nxjerr më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit të hollë titulli: tërhiqe për ta lidhur ose lëvizur panelin, lësho në shiritin e një paneli tjetër për të ndarë një kornizë si skeda, fiksoje për ta shtyrë në skaj, ose fshihe dhe ktheje nga skaji. Shih [Rregullo panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiq një dialog nga shiriti i titullit për ta nxjerrë nga rruga e vizatimit; kthehet aty ku e le. Kliko dy herë shiritin e titullit për ta qendërzuar sërish. Shih [Lëviz një dialog](common:arrange-panels#move-a-dialog).
- **Receta për asistentët me AI.** Dhjetë kërkesa të punuara për asistentin tënd (pastro një vizatim, printo një grup, kontrollo vizatimet, bëj pyetje modelit, mblidh totalin e një llogaritjeje, provo një variant pjese…), secila me veglat që thërret dhe lejet që kërkon, dhe secila e riluajtur nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Receta për asistentët me AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si drafte që ende nuk i ka rishikuar një folës amtar. Temat e ndihmës janë në anglisht.
- **CadCraft Studio** tregon pse kontrolli i përditësimit dështoi (nuk ka ende skedar për sistemin tënd, pa rrjet, nënshkrim i gabuar) në vend që të thotë vetëm "U krye", dhe pushon së sjelluri një kartë Çfarë ka të re që ke mbyllur derisa të ketë një version më të ri.

## Ende jo në këtë version

- **0.7 nuk është nënshkruar me kod.** Nënshkrimi dhe paketa e Microsoft Store kaluan në 0.8, sepse validimi i certifikatës nuk ka ardhur ende. Kontrollo SHA-256 pranë çdo skedari në getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:More info}}, pastaj {{ui:Run anyway}}. Në Mac, herën e parë, kliko me të djathtën CadCraft Studio dhe zgjidh {{ui:Open}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Listat e këndit dhe pjerrësisë te {{ui:Units}} ruhen, por asnjë kuti nuk i lexon ende.
- **Ftesat për oferta janë të fikura për shumicën e llogarive.** Ndërsa veçoria testohet, emailet te ofertuesit jashtë dërgohen vetëm nga llogaritë që ekipi i CadCraft i ka aktivizuar. Faqet e ofertuesve funksionojnë për çdo ftesë që është dërguar tashmë. Të tjerët: shkarko {{ui:Scope CSV}}, dërgoje vetë me email dhe shkruaj ofertat.
- Një dritare e CadCraft Studio ende nuk mund të dërgojë ftesa për oferta: thotë të përdoret TakeoffCraft në shfletues. Hapja e një llogaritjeje me kërkesa të dërguara, nivelimi dhe zgjedhja e një oferte funksionojnë në Studio.
- Shtesat, letrat e dhënies së punës, një fletë fushëveprimi që çdo ofertues e nënshkruan, dhe kujtesat automatike përpara se të skadojë një datë sigurimi nuk janë ndërtuar. Një ofertë e zgjedhur nuk e ri-çmon zonën e ofertës së një alternative.
- Vizatimet: tabelat e stilit të printimit dhe skedarët CTB nuk zbatohen, një DXF binar refuzohet (ruaje si DXF ASCII ose DWG), vizatimet e lidhura gjenden vetëm mes skedarëve të hapur sipas emrit të skedarit, dhe PDF-të nënshtresë, imazhet dhe objektet OLE në një vizatim nuk vizatohen dhe nuk numërohen. Numërimet dhe shkallët janë kontrolluar në vizatime shembull, jo ende në vizatime nga një punë reale të hapura në programin që i krijoi.
- Një asistent mund të shtojë artikuj dhe shenja, por nuk mund të zhvendosë, ndryshojë ose fshijë shenja që janë tashmë aty.

Çdo gjë tjetër është te [Ende nuk është ndërtuar](topic:not-built-yet).
