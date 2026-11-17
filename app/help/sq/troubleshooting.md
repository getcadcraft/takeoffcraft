---
title: Zgjidhja e problemeve
summary: Simptomat, shkaqet dhe zgjidhjet për mesazhet dhe befasitë që mund të hasni në TakeoffCraft, të cituara ashtu si i shfaq programi.
keywords: probleme, gabime, nuk funksionon, zgjidhje, ndihmë, refuzuar, nuk mat, pa shkallë, shenja që mungojnë, eksporti dështoi, jashtë linje, prekje
from: cd319c9b
---

TakeoffCraft shpjegon shumicën e refuzimeve në shiritin e gjendjes në fund të dritares. Gjeni mesazhin më poshtë.

## Hapja e skedarëve

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| Lexuesi i PDF-ve nuk u ngarkua. Rifreskoni faqen për të provuar përsëri. | Lexuesi PDF i programit nuk u ngarkua, zakonisht sepse jeni jashtë linje dhe programi nuk u ruajt kurrë për përdorim jashtë linje. | Lidhuni përsëri dhe rifreskoni. Pastaj zgjidhni {{ui:Ruaje për jashtë linje}} dhe prisni {{ui:Gati jashtë linje}}; shih [Puna jashtë linje](common:offline). |
| (emri) është i mbrojtur me fjalëkalim. Hapni një kopje pa mbrojtje. | PDF-ja kërkon fjalëkalim për t'u hapur. | Kërkoni një kopje pa mbrojtje, ose hiqni fjalëkalimin në një program PDF të besuar. |
| (emri) nuk mund të lexohet si PDF (…) | Skedari është i dëmtuar ose nuk është me të vërtetë një PDF. | Shkarkojeni përsëri, ose ruajeni përsëri nga programi që e krijoi. |
| (emri) është tashmë i hapur. | I njëjti PDF (me të njëjtin përmbajtje) është i hapur. | Nuk ka çfarë të bëni. |
| TakeoffCraft hap PDF-të dhe projektet .takeoff.json. Kapërcyer: … | Llojet e tjera të skedarëve u hoqën. | Konvertoni vizatimet në PDF së pari. |
| Nuk ndodh asgjë kur lëshoj skedarë | Skedarët u lëshuan jashtë dritares së shfletuesit, ose shfletuesi hapi PDF-në në një skedë të re. | Lëshojeni mbi vetë faqen e TakeoffCraft; kornizën "Lësho PDF ose një .takeoff.json" e shfaq kur do të funksionojë. |
| Hapja e një grupi të madh zgjat | Çdo PDF lexohet tërësisht për ta identifikuar. | Prisni që mesazhi "Duke hapur (emri)…" të pastrohet. Miniaturat plotësohen kur lëvizni. |

## Matja

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| Hapni një PDF së pari. | Nuk është hapur asnjë fletë. | Hapni një PDF. |
| Kjo fletë nuk ka ende shkallë, kështu që nuk mund të matet. Zgjidhni një shkallë të gatshme ose kalibroni së pari (numërimi funksionon edhe pa të). | Veglat lineare, të sipërfaqes, të rrethit dhe të prerjes kërkojnë një shkallë. | [Vendosni shkallën](topic:set-the-scale). |
| Bëni fillimisht një artikull linear (emërtojeni te Artikujt), pastaj klikoni mbi fletë. | Nuk ka asnjë artikull të atij lloji. | Plotësoni formularin {{ui:Artikull i ri}} që u hap, dhe zgjidhni {{ui:Shto}}. |
| Zgjidhni fillimisht një artikull për ta matur (paneli Artikujt). | Artikulli aktual u fshi. | Klikoni një artikull nën {{ui:Artikujt}}. |
| Një segment ka nevojë për të paktën dy pika. | E përfunduat pas një klikimi. | Klikoni të paktën dy pika. |
| Një sipërfaqe ka nevojë për të paktën tre pika. | Pak cepa. | Klikoni të paktën tre cepa. |
| Kontura kryqëzohet me vetveten, kështu që sipërfaqja e saj do të ishte e gabuar. Vizatojeni përsëri pa kryqëzim. | Një formë si numri tetë. | Vizatojeni si dy sipërfaqe, ose ecni rreth skajit radhazi. |
| Ato pika nuk rrethojnë asnjë sipërfaqe. | Të gjitha pikat janë në një vijë. | Klikoni cepa që rrethojnë një hapësirë. |
| Zgjidhni fillimisht një shenjë sipërfaqeje (vegla Përzgjedhje), pastaj zgjidhni Prerje dhe vizatoni vrimën brenda saj. | {{ui:Prerje}} kërkon një sipërfaqe të zgjedhur. | Shtypni {{key:V}}, klikoni sipërfaqen, pastaj {{key:X}}. |
| Një prerje duhet të ndodhet plotësisht brenda sipërfaqes. | Vrima kryqëzon ose del jashtë konturës. | Vizatoni vrimën brenda sipërfaqes. |
| Prerjet nuk mund të mbivendosen me njëra-tjetrën. | Dy vrima mbivendosen. | Vizatoni një vrimë rreth të dyjave, ose mbajini larg. |
| … Pika u vendos përsëri. | Një cep i tërhequr do ta bënte konturën të kryqëzohej me vetveten ose do të shtynte një vrimë jashtë. | Tërhiqeni në një vend që e mban formën të vlefshme. |
| Klikoni një pikë në skajin e rrethit, larg qendrës së tij. | Klikimi i dytë ishte shumë afër qendrës. | Klikoni më larg. |
| Klikimet lëvizin fletën në vend që të shtojnë pika | Treguesi u zhvendos më shumë se disa piksela ndërsa butoni ishte i shtypur; kjo llogaritet si tërheqje. | Klikoni pa lëvizur, sidomos në një trackpad. |
| Shift nuk kap | Po vendosni një pikë në hark, ose po vizatoni një rreth. | Kapja 45° zbatohet vetëm për segmente të drejta. |
| Pikat hidhen mbi një vijë aty pranë | Kapja te vijat e vizatimit është e ndezur. | Zmadhoni për të klikuar mes vijave, ose shtypni {{key:F3}} për ta fikur kapjen. |
| Nuk shfaqet asnjë shenjë kapjeje | Kapja është e fikur, fleta është skanim, ose vegla nuk kap (Numëro, Numërim automatik, ngjitja). | Shtypni {{key:F3}}; në një skanim nuk ka vija për t'u kapur. |
| Gjatësia është e gabuar | Shkalla është e gabuar (shpesh një PDF e ndryshuar në madhësi me një të gatshme). | Përdorni {{ui:Kontrollo}} mbi një përmasë të njohur, pastaj {{ui:Kalibro}}. |

## Shkalla

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| Zgjidhni dy pika më larg njëra-tjetrës. | Pikat e kalibrimit janë pothuajse njëra mbi tjetrën. | Kalibroni mbi një përmasë më të gjatë. |
| Një mesazh në dialogun e kalibrimit, si "Ajo distancë nuk mund të lexohej" | Distanca është në një formë që TakeoffCraft nuk e lexon. | Shih [Hyrja e gjatësisë, normës dhe përqindjes](topic:entry-formats). |
| Kjo fletë nuk ka ende shkallë, kështu që nuk ka çfarë të kontrollohet. Kalibrojeni, ose zgjidhni një të gatshme. | {{ui:Kontrollo}} mbi një fletë pa shkallë. | Vendosni fillimisht një shkallë. |
| Lista {{ui:Të gatshme}} është e shuar | Nuk është hapur asnjë fletë. | Hapni një PDF. |

## Sasitë dhe formulat

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| I paplotë: … (nuk është në totale) | Një gabim formule, ose shenja mbi fletë pa shkallë. | Shih [Lexoni sasitë dhe vlerësimin](topic:read-quantities#the-incomplete-warning). |
| +(n) pa shkallë pranë një artikulli | Disa nga shenjat e tij janë në fletë pa shkallë. | Vendosni një shkallë për ato fletë. |
| Gabim formule: … | Formula nuk mund të llogaritet. | Shih [Gjuha e formulave](topic:formulas#errors). |
| Ky artikull ka shenja, prandaj lloji i tij nuk mund të ndryshojë. | Lloji kyçet pasi ka shenja. | Bëni një artikull të ri të llojit tjetër dhe vizatoni përsëri shenjat me të. |
| Një artikull ka nevojë për një emër. | Fusha e emrit u zbraz. | Shkruani një emër. |
| Shkruani një shumë si 12.50. / Shkruani një përqindje si 10 ose 7.5. | Një normë ose humbje nuk u lexua. | Shih [Hyrja e gjatësisë, normës dhe përqindjes](topic:entry-formats). |
| Një totali duket i dyfishuar | Artikulli ka normat dhe përbërësit e vet që mbartin të njëjtin kosto. | Vendosni normat e vetë artikullit në 0 kur përbërësit mbartin koston. |
| Shenjat e këtij artikulli janë në PDF-të që nuk janë të hapura. | Klikuat një artikull, shenjat e të cilit janë të gjitha në PDF-të që nuk keni hapur. | Hapni ato PDF-të; emrat e tyre renditen nën {{ui:Fletët}}. |

## Numërimi automatik

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| Ai kuadrat është shumë i vogël. Vizatojeni rreth gjithë simbolit. | Kuadrati është i vogël. | Zmadhoni dhe rrethoni gjithë simbolin. |
| Ai kuadrat është pothuajse bosh. Vizatojeni rreth një simboli. | Kuadrati përmban vetëm letër. | Rrethoni vetë simbolin. |
| Asnjë përputhje. Ulni rrëshqitësin {{ui:Përputhja}}, ose rrethoni simbolin më ngushtë. | Asgjë nuk pikoi mjaft lart. | Rrethoni simbolin ngushtë, ose tërhiqeni rrëshqitësin {{ui:Përputhja}} më poshtë. |
| Shumë përputhje, përfshirë simbole të gabuara | Simbolet e ngjashëm pikojnë afër atij të vërtetë. | Ngrini rrëshqitësin {{ui:Përputhja}} dhe klikoni kuadratet e gabuara për t'i refuzuar. |
| Përputhje që mungojnë në fletë të tjera | Ato fletë e vizatojnë simbolin në një madhësi tjetër, ose me një kënd që nuk është një hap 90°. | Kërkoni në ato fletë me një kuadrat të vizatuar atje, ose numëroni me dorë. |
| (n) fletë ishin shumë të mëdha për t'u kërkuar me këtë madhësi simboli. | Fleta do të ishte shumë e madhe në madhësinë e punës. | Rrethoni një simbol më të madh, ose numëroni atë fletë me dorë. |
| Kërkimi dështoi: … | Kërkimi në sfond u ndal. | Provoni përsëri; rifreskoni faqen nëse përsëritet (ruajeni së pari). Jashtë linje, funksionon vetëm kur shiriti i programit shfaq {{ui:Gati jashtë linje}}. |
| Tërheqja vizaton një kuadrat në vend që të lëvizë fletën | Kështu funksionon {{ui:Numërim automatik}}. | Mbani {{key:Space}} dhe tërhiqni, ose tërhiqni me butonin e mesit. |

## Ruajtja dhe eksportimi

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| Asgjë për të eksportuar ende: bëni një artikull dhe matni me të. | Nuk ka artikuj. | Bëni fillimisht një artikull. |
| Ende nuk ka shenja në PDF-të e hapura. | {{ui:PDF e shënuar}} nuk ka çfarë të vizatojë në PDF-të e hapura. | Hapni PDF-të që kanë shenja. |
| Ky PDF është i mbrojtur me fjalëkalim ose i enkriptuar, kështu që nuk mund të shkruhet një kopje e shënuar. … | PDF-ja është e enkriptuar. | Eksportoni {{ui:XLSX}} në vend të kësaj, ose përdorni një kopje pa enkriptim të PDF-së (atëherë ka nevojë për llogaritjen e vet, sepse është një skedar tjetër). |
| PDF-ja e shënuar nuk mund të shkruhej: … | Shpesh: jashtë linje, dhe programi nuk u ruajt për përdorim jashtë linje, kështu që mungon shkruesi PDF. | Lidhuni me internetin dhe zgjidhni {{ui:PDF e shënuar}} përsëri. Për ta shmangur, zgjidhni {{ui:Ruaje për jashtë linje}} dhe prisni {{ui:Gati jashtë linje}}. |
| U shkarkua vetëm një PDF e shënuar | Shfletuesi bllokoi disa shkarkime njëherësh. | Lejoni shkarkime të shumta për këtë sit, dhe eksportoni përsëri. |
| (skedari) nuk është një projekt TakeoffCraft (nuk është JSON i vlefshëm). / Ky nuk është një skedar projekti TakeoffCraft. | Skedar i gabuar, ose i dëmtuar. | Zgjidhni skedarin `.takeoff.json`. |
| Ky projekt u ruajt nga një TakeoffCraft më i ri. Hapeni atje. | Skedari vjen nga një version më i ri. | Hapeni në versionin më të ri. |
| (n) shenja u dëmtuan dhe u hoqën. | Një pjesë e skedarit u dëmtua ose u ndryshua me dorë. | Pjesa tjetër u hap. Vizatoni përsëri shenjat që mungojnë, ose hapni një kopje më të vjetër. |
| Shenjat mungojnë pas rihapjes | PDF-të nuk janë hapur, ose një prej tyre ndryshoi. | Shih [Ruajtja dhe rihapja e një llogaritjeje](topic:save-and-reopen#when-a-pdf-has-changed). |
| Shfletuesi pyet "Të largohem nga sit?" | Ka ndryshime të pa ruajtura. | Qëndroni, dhe ruajeni me {{key:Mod+S}}. |

## Tastierat dhe miu

| Simptoma | Shkaku | Zgjidhja |
|---|---|---|
| Tastet e shkronjave nuk bëjnë asgjë | Kursori është në një fushë (kërkim, redaktues artikulli, tabelë). | Klikoni mbi fletë, ose shtypni {{key:Tab}} për të dalë nga fusha. |
| Rrota zmadhon në vend që të lëvizë | Rrota zmadhon gjithmonë fletën. | Tërhiqni për të lëvizur. |
| Gjithë faqja u bë më e madhe ose më e vogël | Zmadhimi i shfletuesit ({{key:Mod+Plus}} ose {{key:Mod+Minus}}). | Shtypni {{key:Mod+0}}. Zmadhoni fletën me rrotën ose me {{key:Plus}} dhe {{key:Minus}} të thjeshtë. |
| Një shenjë u zhduk kur shtypët Backspace | Backspace fshin shenjën e zgjedhur kur nuk po vizatoni. | {{key:Mod+Z}} e kthen. |
| Klikimi i djathtë nuk mbaron në Mac | Klikimi me Control arrin si klikim normal. | Përdorni një klikim me dy gishta me klikimin dytësor të ndezur, ose shtypni {{key:Enter}}. |

## Ekranet me prekje

Në një ekran me prekje:

- **Prekja** vendos një pikë (ose zgjedh një shenjë me {{ui:Përzgjidh}}). Tërheqja me një gisht lëviz fletën.
- **Dy gishtat** shtrëngojnë për të zmadhuar rreth pikës ndërmjet tyre, dhe lëvizin fletën kur lëvizin bashkë. Vendosja e gishtit të dytë anulon atë që filloi gishti i parë, kështu që një shtrëngim nuk lë kurrë një pikë.
- **Përfundoni** një segment ose kontur me një **shtypje të gjatë** (klikimi i djathtë), një **prekje të dyfishtë**, ose {{ui:Përfundo}} në shiritin në fund të fletës. I njëjti shirit ka {{ui:Prapa}} (merr pikën e fundit mbrapsht) dhe {{ui:Anulo}}. Sipërfaqet mbyllen edhe duke prekur pikën e parë.
- Gishtat kanë objektiva më të mëdhenj: pikat kapen, mbyllen dhe zgjidhen nga më larg, dhe dorezat e cepave janë më të mëdha.

Shkrimi i gjatësive kërkon tastierë; tastiera në ekran funksionon kur kutia {{ui:Shkruaj}} është e fokusuar.

Në një tablet, një tastierë dhe një mi ose trackpad e bëjnë llogaritjen shumë më të lehtë.

## Puna jashtë linje

| Butoni ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| {{ui:Nuk u ruajt}} | Disa skedarë të programit nuk u shkarkuan gjatë ruajtjes për përdorim jashtë linje. | Kontrolloni lidhjen tuaj dhe zgjidhni butonin përsëri. |
| {{ui:Modaliteti jashtë linje nuk është i disponueshëm}} | Dritaret private dhe disa kompjuterë të menaxhuar bllokojnë kopjet jashtë linje. | Përdorni një dritare normale, ose një shfletues tjetër. |
| "Duke ruajtur…" nuk fillon kurrë | Jeni jashtë linje; ruajtja kërkon lidhje. | Ruajeni kur jeni online. |
| Programi është i vjetër pas një përditësimi | Kopja jashtë linje është nga një ditë më herët. | Online, zgjidhni {{ui:Gati jashtë linje}}, pastaj {{ui:Ruaje përsëri (merr versionin më të ri)}}. |
| Ju duhet hapësira përsëri | Kopja jashtë linje është rreth 6 MB. | Zgjidhni {{ui:Gati jashtë linje}}, pastaj {{ui:Hiq kopjen jashtë linje}}. |

Shih [Puna jashtë linje](common:offline).

## Akoma i bllokuar

Rifreskoni faqen nëse programi ndalon së reaguari. Llogaritja juaj humbet kur rifreskoni, përveç nëse e keni ruajtur, kështu që ruajeni së pari me {{key:Mod+S}} nëse mundeni. Për pyetje mbi shfletuesin shih [Shfletuesit dhe kompjuterët](common:browsers).
