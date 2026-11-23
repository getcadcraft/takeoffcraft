---
title: Çfarë ka të re në 0.7 (më herët)
summary: Vizatimet DWG dhe DXF hapen si fletë me shkallën e tyre, numërime dhe gjatësi të sakta nga vetë vizatimi, oferta e zgjedhur e nënkontraktorit si çmim i një pakete, ftesa për oferta me çmime të mbyllura, mjete asistenti për vizatimet, dhe USD nga pamja 3D e kontrollit.
keywords: çfarë ka të re 0.7, version më i hershëm, shënime versioni, regjistër ndryshimesh, ndryshime, 0.7, version, veçori të reja, dwg, dxf, vizatim, paraqitje, hapësirë modeli, shkallë vizatimi, numëro nga vizatimi, numërim cad, blloqe, blloqe dinamike, atribute, shtresa, xref, vizatim i lidhur, mat vizatimin, polivijë, vijëzim, pdf e shënuar, ofertë e zgjedhur, përdor ofertën, dërgo për oferta, ftesë oferte, oferta të mbyllura, hapja e ofertave, ofertë e vonshme, të dhëna nënkontraktorësh, csv, asistent, mcp, usd, usdz, njësi, lista e njësive, kompakte, panele, dialogë, portugalisht
from: 0e3a424f
---

Ky është ndryshimi në TakeoffCraft 0.7, krahasuar me 0.6. Vizatimet tani hapen ashtu siç janë, pa printim në PDF më parë, dhe një paketë oferte mund të dalë te nënkontraktorët dhe të kthehet e çmuar.

## Të reja

### Vizatimet DWG dhe DXF

- **Hapni një vizatim si fletë.** {{ui:Open plans}} te grupi {{ui:File}} ({{key:Mod+O}}, ose lëshoni skedarët) pranon vizatime DWG dhe DXF bashkë me PDF. Hapësira e modelit dhe çdo paraqitje bëhen fletë në listën {{ui:Sheets}}, dhe një llogaritje sasish mund të mbulojë vizatime dhe PDF bashkë. Asgjë nuk ngarkohet. Shihni [Hap një vizatim DWG ose DXF](topic:open-a-drawing).
- **Shkalla vjen nga vizatimi.** Një paraqitje nis me shkallën e viewport-it të saj më të madh, e emërtuar si paracaktim kur është një i tillë, për shembull 1/2" = 1'-0". Modeli nis në njësitë e vizatimit. Një vizatim pa njësi shfaq "No scale" derisa ta kalibroni. {{ui:Calibrate}}, {{ui:Check}} dhe {{ui:Preset}} ende kanë përparësi. Shihni [Shkalla](topic:open-a-drawing#the-scale).
- **Shtresat dhe vizatimet e lidhura.** {{ui:Layers}} në shiritin e fletës shfaq ose fsheh shtresat e vizatimit. Shtresat që skedari i ka fikur ose ngrirë nisin të fshehura dhe nuk numërohen përveç nëse zgjidhni ndryshe. Një vizatim i lidhur (xref) i hapur pranë pritësit të vet vizatohet dhe numërohet aty ku është futur; derisa të hapet, shiriti i statusit thotë çfarë mungon. Shihni [Shtresat](topic:open-a-drawing#layers).
- **PDF-ja e shënuar punon nga një vizatim.** {{ui:Export}} › {{ui:Marked PDF}} vizaton fillimisht fletët e shënuara të një vizatimi si PDF, kështu që kopja tregon shenjat dhe legjendën tuaj pa hap printimi. Vizatohet me ngjyrë të zezë ose me ngjyrat e vizatimit, pa tabela stilesh printimi. Shihni [PDF e shënuar](topic:export-estimate#a-marked-pdf).

### Numërime dhe gjatësi të sakta nga një vizatim

- **Numëroni atë që thotë vizatimi se ka.** {{ui:CAD count}} në shiritin e fletës numëron një bllok sipas emrit (përfshirë blloqet e futura, gjendjet e blloqeve dinamike dhe grupet e blloqeve), gjithçka të një lloji në një shtresë, ose një vlerë teksti ose atributi. Numëron atë që tregon fleta ose i tërë vizatimi një herë. Shtimi i shenjave është një hap zhbërjeje, dhe numërimi përsëri shton vetëm ato që janë të reja. {{ui:Auto count}} mbetet për PDF-të dhe për simbolet që nuk janë blloqe. Shihni [Numëro nga një vizatim](topic:count-from-a-drawing).
- **Matni nga vijat e vetë vizatimit.** {{ui:Measure drawing}} merr vijat, harqet, polivijat, rrethet, vijëzimet dhe solidët që klikoni ose zgjidhni me dritare, si shenja të një artikulli linear ose sipërfaqësor. Harqet, bulget dhe vrimat e një vijëzimi dalin të sakta; elipset dhe splinet matën me korda të holla, dhe shiriti e thotë këtë. Shihni [Mat nga një vizatim](topic:measure-from-a-drawing).

### Ofertat

- **Përdorni ofertën e një nënkontraktori si çmim të paketës.** Te {{ui:Export}} › {{ui:Bid packages and leveling…}}, zgjidhni {{ui:Use}} te një ofertë. Artikujt e paketës mbeten si sasi, një rresht **Chosen bid** mban çmimin, artikujt që oferta i lë jashtë mbeten me kostot tuaja, dhe shpenzimet e përgjithshme, fitimi dhe garancia zbatohen mbi të. Ndërrimi i ofertave është një hap zhbërjeje; fleta e punës dhe përmbledhja e ofertave e mbajnë. Shihni [Përdorni një ofertë si çmim të paketës](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Dërgoni një paketë për oferta.** {{ui:Send for bids…}} nën një paketë i dërgon çdo nënkontraktori një lidhje me një faqe që nuk kërkon llogari: ata shohin fushëveprimin dhe fletët si PDF, shkruajnë një çmim në çdo rresht ose e shënojnë si të pa përfshirë, shtojnë shënime dhe deri në tre skedarë, ose refuzojnë. {{ui:Get prices}} sjell në fletën e nivelimit ato që u kthyen, të shënuara **web**. Dërgimi është i hapur vetëm për llogaritë që ekipi CadCraft i ka aktivizuar ndërsa testohet (shihni më poshtë). Shihni [Dërgoni një paketë për oferta](topic:bid-invitations).
- **Të mbyllura deri në hapje.** Çmimet mund të mbeten të mbyllura deri në një orë hapjeje që vendosni: deri atëherë askush nuk e sheh një çmim, as ju. Në hapje çdo ofertë shfaqet menjëherë, dhe një ofertë që vjen pas afatit shënohet si e vonshme. Shihni [Ofertat e mbyllura dhe hapja](topic:bid-invitations#sealed-bids-and-the-opening).
- **Të dhënat e nënkontraktorëve.** Llogaria juaj në getcadcraft.com mban kontaktet, profesionet, përgjigjet e kualifikimit, si dhe datat e sigurimit dhe licencës të secilës kompani (të shënuara kur kanë kaluar ose janë brenda 30 ditësh), me ofertat e kaluara. Importojini dhe eksportojini si CSV, dhe zgjidhni kur dërgoni një paketë. Shihni [Në faqen e internetit](topic:bid-invitations#on-the-website).

### Asistentët AI

- **Asistentët mund të shtojnë te llogaritja.** Me **Edit** të shënuar, asistenti juaj mund të shtojë artikuj (`items_add`) dhe të masë vargje, sipërfaqe dhe numërime në një fletë (`marks_add`; gjatësi dhe sipërfaqe vetëm në një fletë me shkallë), çdo thirrje një hap zhbërjeje.
- **Mjete asistenti për vizatimet.** Në një DWG ose DXF të hapur, një asistent mund të listojë fletët e tij dhe çfarë mund të numërohet, të numërojë saktë, të shtojë shenjat e numërimit, dhe të masë nga gjeometria e vizatimit. Pa TakeoffCraft të hapur, serveri CadCraft MCP hap një vizatim si llogaritje të re dhe e ruan, dhe `cadcraft count` numëron nga rreshti i komandave. Shihni [Çfarë mund të kërkojë një asistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Pamja 3D e kontrollit si USD.** {{ui:USD package (.usdz)}} pranë {{ui:GLB}} te pamja 3D e kontrollit shkruan çdo mur, dysheme, pllakë, shtyllë numërimi dhe varg si objekt të vetin, i emërtuar sipas artikullit të tij dhe me sasinë e tij, në metra. Një asistent mund ta eksportojë edhe ai (`usd_export`). Shihni [Eksporto pamjen 3D të kontrollit si USD](topic:usd).

## Në çdo aplikacion

- **Njësitë.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ka një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e anketës amerikane është njësi e vetme). Fikni njësitë që s'i përdorni kurrë dhe ato largohen nga listat; vendosni yll te një njësi dhe punët e reja nisin me të. Një skedar mban gjithmonë njësinë e vet. Në TakeoffCraft listat {{ui:Unit}} të një artikulli ndjekin ndërrimet, një artikull i ri nis me njësinë e gjatësisë ose sipërfaqes me yll, katrorët e çative (SQ), akrët dhe hektarët janë njësi të reja sipërfaqeje, dhe një kuti gjatësie pranon shenjën e çdo njësie, si `3 yd`. Shihni [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një paraqitje më e dendur dhe panele që mblidhen.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} nxjerr më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqeni për ta lidhur ose lënë të lirë panelin, lëshojeni mbi shiritin e një pylli tjetër për të ndarë një kornizë si skeda, ngjiteni për ta rrëshqitur në skaj, ose fshihni dhe kthejeni nga skaji. Shihni [Rregulloni panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiqni një dialog nga shiriti i titullit jashtë rrugës së vizatimit; kthehet aty ku e lamë. Klikoni dy herë shiritin e titullit për ta vendosur përsëri në qendër. Shihni [Lëvizni një dialog](common:arrange-panels#move-a-dialog).
- **Receta për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tuaj (rregulloni një vizatim, nxirrni një grup planesh, kontrolloni vizatime, bëni pyetje modelit, totalizoni një llogaritje, provoni një variant pjese…), secila me mjetet që thërret dhe lejet që i duhen, dhe secila e rifilluar nga testet tona. Aplikacionet nuk përmbajnë AI. Shihni [Receta për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si draft që nuk është shqyrtuar ende nga një folës amtar. Temat e ndihmës janë në anglisht.
- **CadCraft Studio** thotë pse dështoi kontrolli i përditësimit (s'ka ende skedar për sistemin tuaj, s'ka rrjet, nënshkrim i gabuar), në vend që të thotë vetëm "Done", dhe nuk shfaq më përsëri një kartë Çfarë ka të re që keni mbyllur, derisa të ketë një version më të ri.

## Jo ende në këtë version

- **0.7 nuk është e nënshkruar me kod.** Nënshkrimi, dhe paketa e Microsoft Store, u zhvendosën në 0.8 sepse vërtetimi i certifikatës nuk ka ardhur ende. Kontrolloni SHA-256 pranë çdo skedari në getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidhni {{ui:More info}}, pastaj {{ui:Run anyway}}. Në Mac, herën e parë, klikoni me të djathtën te CadCraft Studio dhe zgjidhni {{ui:Open}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Tabelat e kërkesave për stilin e vizatimit dhe mjetet e vizatimit ende nuk ndahen; ndërrimi i vijave të kthyera nuk zbatohet ende.
- Vijat e këndit dhe pjerrësisë te {{ui:Units}} ruhen, por asnjë kuti nuk i lexon ende.
- **Ftesat për oferta janë të çaktivizuara për shumicën e llogarive.** Ndërsa veçoria testohet, posta te ofertuesit e jashtëm del vetëm nga llogaritë që ekipi CadCraft i ka aktivizuar. Faqet e ofertuesve funksionojnë për çdo ftesë të dërguar tashmë. Të tjerët: shkarkoni {{ui:Scope CSV}}, dërgojeni me email vetë, dhe shkruani ofertat.
- Një dritare CadCraft Studio nuk mund të dërgojë ende ftesa për oferta: thotë të përdorni TakeoffCraft në shfletues. Hapja e një llogaritjeje me kërkesa të dërguara, nivelimi dhe zgjedhja e një oferte funksionojnë në Studio.
- Shtesat, letrat e dhënies, një fletë fushëveprimi që çdo ofertues e nënshkruan, dhe kujtesat automatike përpara se të skadojë një datë sigurimi nuk janë ndërtuar. Një ofertë e zgjedhur nuk ri-çmon zonën e ofertës së një alternative.
- Vizatimet: tabelat e stilit të printimit dhe skedarët CTB nuk zbatohen, një DXF binar refuzohet (ruajeni si DXF ASCII ose DWG), vizatimet e lidhura gjenden vetëm mes skedarëve të hapur sipas emrit të skedarit, dhe PDF-të nënshtresë, imazhet dhe objektet OLE në një vizatim nuk vizatohen ose numërohen. Numërimet dhe shkallët janë kontrolluar në vizatime shembull, jo ende në vizatime nga një punë reale të hapura në programin që i ka krijuar.
- Një asistent mund të shtojë artikuj dhe shenja, por nuk mund t'i zhvendosë, ndryshojë ose fshijë shenjat që janë tashmë atje.

Gjithçka tjetër është te [Ende nuk është ndërtuar](topic:not-built-yet).
