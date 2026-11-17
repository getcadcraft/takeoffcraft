---
title: Çfarë ka të re në 0.9
summary: Lexoni gjatësitë në metra, centimetra ose milimetra, sipërfaqet metrike në m2 me sipërfaqen e mureve, paracaktimet e shkallës 1:75 dhe 1:150, njësitë e peshës dhe temperaturës, Hark me dhjetë metoda, dhe kursorë të drejtpërdrejtë, Ndiq dhe një listë njerëzish.
keywords: çfarë ka të re, shënime versioni, regjistër ndryshimesh, 0.9, shfaq gjatësitë si, metra, centimetra, milimetra, metrike, ndiq globale, njësi, njësi shfaqjeje, m2, metra katrorë, sipërfaqe muri, paracaktime shkalle, 1:75, 1:150, peshë, kilogram, kg, tonë, ton, lb, temperaturë, celsius, fahrenheit, hark, metoda harku, hark me 3 pika, rreze, kursorë, drejtpërdrejt, ndiq, listë njerëzish, klasë, këshilla, paraqitje, ndryshime, 0.8, 0.8.1, version, veçori të reja, numëro gjithçka, legjendë, legjendë simbolesh, i tërë grupi, kujtesë çmimesh, punët e kaluara, puna e fundit, çmim tipik, furnitor, stok, koha e dërgesës, porosi e pritur, lista e porosisë, mungesë, paneli i problemeve, asistent, gjuhët, pajisjet hyrëse, rreshtat e shiritit të veglave, dwg
from: 6182b998
---

Ky është ndryshimi në TakeoffCraft 0.9, krahasuar me 0.8.1. Është një version i vogël për këtë aplikacion: gjatësitë mund të lexohen tani në metra, centimetra ose milimetra, sipërfaqet dhe shkallët ndjekin siç duhet punën metrike, dhe Hark ka dhjetë mënyra vizatimi. Seancat Live shfaqin edhe kush është ku.

## Të reja

### Lexoni gjatësitë në metra, centimetra ose milimetra

- **Shfaq gjatësitë si.** {{ui:Settings}} › {{ui:TakeoffCraft}} ka {{ui:Show lengths as}} me {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm dhe mm. {{ui:Follow Global}} përdor njësinë metrike të gjatësisë që keni vendosur me yll te {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, dhe këmbë-inç kur asnjë nuk është me yll. Ndryshon mënyrën si lexohen gjatësitë në fletë, në shiritin e statusit dhe në panele, duke përfshirë lartësitë, thellësinë, trashësinë dhe nivelet. Një numër i thjeshtë i shkruar në një fushë lartësie lexohet në njësinë që shfaqet.
- **Vetëm shfaqje.** Sasitë, kostot dhe eksportet llogariten nga gjatësitë e sakta. Zgjedhja 1/16, 1/8 dhe 1/4 inç shfaqet vetëm për këmbë-inç. Shihni [Shfaq gjatësitë në metra](topic:show-lengths-in-meters).
- **Njësitë e peshës.** Një artikull {{ui:Typed quantity (no drawing)}} mund të jetë tani në lb, TON, kg ose t, dhe të çmohet për njësi.
- **Temperatura.** Çdo artikull ka një fushë opsionale {{ui:Temperature}} në redaktuesin e artikullit, e shkruar në gradë C ose F. {{ui:Show temperatures as}} te {{ui:Settings}} › {{ui:TakeoffCraft}} ofron {{ui:Follow Global}}, °C ose °F.

### Sipërfaqet dhe shkallët për punë metrike

- **Sipërfaqet në m2 mbi vizatim.** Një sipërfaqe e matur me një artikull metrik tani shkruan m2 në etiketën e vizatimit dhe në panelin e shenjave, po ashtu si në tabelë, në vend të SF. Rregulli: m2 kur artikulli çmohet metrikisht ose gjatësitë shfaqen në m, cm ose mm, dhe SF përndryshe.
- **Sipërfaqja e murit.** Një artikull linear me lartësi shfaq gjithashtu sipërfaqen e murit (gjatësi herë lartësi) në listën e Artikujve dhe si rresht shënimi nën tabelën e sasive sipas artikullit.
- **Paracaktimet e shkallës 1:75 dhe 1:150.** Janë në listën {{ui:Preset}} te grupi {{ui:Scale}}, që tani ka 32 shkallë. Shihni [Paracaktimet e shkallës](topic:scale-presets).

### Hark me dhjetë metoda

- Ndërsa {{ui:Arc}} është i ndezur (buton në shirit ose {{key:R}}), një kuti {{ui:Arc method}} shfaqet në shiritin e fletës: 3 pika; Fillim, Qendër, Fund; Fillim, Qendër, Kënd; Fillim, Qendër, Gjatësi; Fillim, Fund, Kënd; Fillim, Fund, Drejtim; Fillim, Fund, Rreze; Qendër, Fillim, Fund; Qendër, Fillim, Kënd; dhe Qendër, Fillim, Gjatësi. Kënd, gjatësia, rrezja dhe drejtimi mund të klikohen ose të shkruhen. Funksionon në vargje lineare, sipërfaqe dhe vrima. Skedarët e ruajtur para 0.9 hapen njësoj. Shihni [Vizatoni harqe me dhjetë metoda](topic:draw-arcs-ten-methods).

### Bashkëpunimi

- **Shihni kursorët e njëri-tjetrit.** Në një seancë Live, treguesi i secilit shfaqet në fletë me emrin dhe ngjyrën e tij, me një kuti me vija të ndërprera rreth shenjave që ka përzgjedhur. Njerëzit në një fletë tjetër listohen me emrin e asaj fletë. Shihni [Punoni drejtpërdrejt me të tjerët](topic:work-live).
- **Ndiqni një person, dhe lista e njerëzve.** Butoni {{ui:People}} në një seancë Live liston çdo person me veglën që përdor, fletën ku është dhe kur përditësoi për herë të fundit. {{ui:Follow}} lëviz pamjen tuaj me të tijën, dhe pritësi mund të përdorë {{ui:Ask everyone to follow me}}. Shihni [Ndiqni një bashkëpunëtor në një seancë Live](topic:follow-a-teammate).

## Në çdo aplikacion

- **Këshilla me tekst dhe këshilla e nisjes.** Teksti që shfaqet kur kaloni mausin është një majë Bootstrap, dhe këshilla e nisjes mund të mbyllet.
- **Shirita skedash që lëvizin.** Shiriti i skedave të një paneli që nuk futet shkon anash në vend që të prritet.
- **Titujt e skedave.** Skeda e shfletuesit thotë `<document> - TakeoffCraft | CadCraft`.
- **Paraqitja.** Lista e paraqitjes te {{ui:Settings}} është një listë rënëse që shfaq paraqitjen e zgjedhur.
- **Gjuha.** Gjuha që zgjidhni tani arrin fjalët që vetë faqja shkruan, si I ri, Hap dhe Ruaj. Gjuhët e tjera nga anglishtja janë draft makine derisa një folës amtar t'i ketë lexuar.

## Kufij të ndershëm

- Shfaqja e gjatësive, njësitë e peshës dhe temperaturës dhe paracaktimet e reja u kontrolluan me teste dhe në faqe. Çdo panel me çdo njësi nuk është kontrolluar me dorë.
- Lista e njerëzve nuk ka pasur një kontroll me dorë me një klasë të vërtetë mësuesi dhe nxënësish.
- Gjuhët e tjera nga anglishtja janë draft makine.
- Instaluesit për Windows nuk janë të nënshkruar me kod (More info, pastaj Run anyway). Imazhi i diskut për macOS nuk është i noterizuar nga Apple (klikoni me të djathtën, pastaj Open).

## Më herët: 0.8 dhe 0.8.1

Ky është ndryshimi në TakeoffCraft 0.8 (publikuar më 2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. Një legjendë simbolesh mund të numërohet tani në të tërë grupin njëherësh, një llogaritje e re mund të nisë nga çmimet e punëve tuaja të kaluara, dhe llogaritja mund të kontrollohet me stokun e një furnitori. 0.8.1 është një version rregullimesh.

### Të reja

**Numëro gjithçka në grup**

- **Kutizoni legjendën një herë.** {{ui:Count everything}} në shirit lexon një legjendë simbolesh: tërhiqni një kuti rreth simboleve dhe emrave të shtypur pranë tyre. Çdo simbol listohet me foton dhe emrin e tij, dhe emri bëhet emri i artikullit. Hiqni shenjën nga ajo që nuk doni, pastaj zgjidhni {{ui:Count on N sheets}}. Një shirit tregon fletën që kërkohet, {{ui:Cancel}} ndalon ekzekutimin, dhe faqja mbetet e përdorshme.
- **Çdo fletë në një ekzekutim.** Çdo simbol numërohet në çdo fletë të hapur. Një fletë e vizatuar me shkallë tjetër kërkohet me atë shkallë, dhe simbolet gjenden të kthyera në çdo kënd të drejtë. Vetë simbolet e legjendës nuk numërohen në fletën e vet.
- **Rishikim para se të shtohet diçka.** Çdo total ka një lidhje për fletë ("E-103: 4") që të çon te ajo fletë. Klikoni një kuti te një gjetje për ta lënë jashtë, dhe klikoni përsëri për ta kthyer. Niveli i përputhjes (50% deri 100%) vetëm filtron atë që u gjet; asgjë nuk kërkohet përsëri.
- **Një hap zhbërjeje.** {{ui:Add N marks}} krijon një artikull numërimi për çdo simbol me një shenjë mbi çdo gjetje. Një emër që është tashmë artikull numërimi yt ripërdoret. {{key:Ctrl+Z}} kthen mbrapsht çdo artikull dhe shenjë. Ajo që pranoni hyn gjithashtu te {{ui:Learned}}.
- **Simbole në çdo kënd.** Shënoni {{ui:Symbols at any angle}} para numërimit për të gjetur gjithashtu simbole të kthyera me një kënd që nuk është kënd i drejtë. Kërkimi atëherë e rrotullon çdo simbol çdo 15 gradë, dhe një simbol që nuk është rrethor mund të zgjasë deri gjashtë herë më shumë.
- **Çfarë është.** Përputhje e thjeshtë simbolesh në fletët tuaja, pa model të trajnuar, dhe asgjë nuk del nga kompjuteri juaj. Në një grup të krijuar me 200 fletë, mori 9.4 sekonda nga fillimi në fund në Chrome në një desktop të shpejtë; grupet reale të planeve do të jenë më të ngadalta. Shihni [Numëro gjithçka në grup](topic:count-everything).

**Kujtesa e çmimeve nga punët tuaja**

- **TakeoffCraft mban mend tarifat tuaja.** Kur ruani një llogaritje sasish, çdo artikull i çmuar që përdoret mbahet mend sipas emrit dhe llojit: tarifa e materialit, tarifa e punës, humbja dhe njësia. Mbahen 12 punët e fundit për çdo emër. Ruhet në këtë kompjuter pranë bibliotekës së çmimeve, kurrë brenda një skedari llogaritjeje, dhe asgjë nuk dërgohet askund.
- **Nisni një llogaritje të re prej tij.** {{ui:Prices}} në shirit tregon, për çdo artikull, tarifat e punës së fundit, tarifat tipike dhe intervalin. {{ui:Use last}} ose {{ui:Use typical}} çmon një artikull, dhe {{ui:Price N unpriced items from memory}} plotëson çdo artikull që s'ka ende çmim. Çdo përdorim është një hap zhbërjeje.
- **Punët e vjetra.** {{ui:Learn from a past takeoff…}} mban mend artikujt e çmuar të një llogaritjeje të ruajtur (.json).
- **Shiheni, ndryshojeni, harrojeni.** {{ui:Everything remembered}} liston çdo emër; butoni i koshit harron një, dhe {{ui:Clear all prices}} i harron të gjitha. Fikni {{ui:Remember my prices when I save a takeoff}} për ta ndaluar. Një çmim për copë nuk vendoset kurrë te një artikull për këmbë. Shihni [Kujtesa e çmimeve nga punët e kaluara](topic:price-memory).

**Stoku i furnitorit dhe kohët e dërgesës**

- **Kontrolloni me listën e furnitorit.** {{ui:Supply}} në shirit merr një listë stoku furnitori ({{ui:Add a supplier file…}}), një CSV ose një tabelë, dhe kontrollon atë që llogaritja ka nevojë, me humbjen, kundrejt saj. Deri në pesë skedarë mbahen. Asgjë nuk dërgohet dhe asgjë nuk kërkon nga furnitori: ju sillni skedarin.
- **Çfarë thotë.** Artikujt e shkurtër vijnë të parët: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" ose "In stock". {{ui:Longest wait wanted (days)}} nis nga 14.
- **Lista e porosisë.** {{ui:Order list (CSV)}} shkarkon artikujt e shkurtër me sasinë që mungon, furnitorin dhe kohën e dërgesës.
- **Çmimet në bibliotekë.** Nëse skedari ka çmime, {{ui:Prices into the Library}} vendos çmimin e materialit të çdo hyrjeje në bibliotekë me të njëjtin emër dhe njësi. Ri-çmoni nga biblioteka për t'i sjellë në llogaritje.
- **Në panelin e problemeve.** Një mungesë është një paralajmërim dhe një afat i gjatë është një shënim, nën "Supplier stock". Mund të pranoni një me arsye, dhe arsyeja ruhet në llogaritje. Shihni [Kontrolloni stokun e furnitorit dhe kohët e dërgesës](topic:supplier-stock).

**Asistentët AI**

- **Mjete për të tre.** Me asistentët e lejuar te {{ui:Settings}}, një asistent mund të lexojë një legjendë (`legend_open`), të nisë numërimin (`legend_count_start`, pastaj `legend_count_status` dhe `legend_count_result`) dhe ta shtojë (`legend_count_add`, që mund të shikojë paraprakisht). Mund të lexojë çmimet e mbajtura mend (`prices_list`) dhe të çmojë artikuj prej tyre (`prices_apply`, që mund të shikojë paraprakisht), dhe të lexojë kontrollin e furnitorit (`supply_check`). Shtimi i një skedari furnitori mbetet puna juaj. Shihni [Përdorni TakeoffCraft me asistentë AI](topic:use-with-ai-assistants).

**Në çdo aplikacion**

- **Gjuhët.** Pesëdhjetë e katër gjuhë në total; dhjetë janë të reja (Lituanisht, Letonisht, Boshnjakisht, Marathi, Telugu, Shqip, Afrikanisht, Filipinisht, Suahili dhe Uzbekisht). Gjuhët e tjera nga anglishtja janë draft makine derisa një folës amtar t'i ketë lexuar.
- **Pajisjet hyrëse.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} cakton çfarë bën një trackpad, butonat anësorë të mausit, një stilolaps, një maus 3D, një kontrollues lojërash ose një kontrollues MIDI, për çdo aplikacion ose për një. Shihni [Përdorni trackpad, maus 3D ose kontrollues](common:input-devices).
- **Rreshtat e shiritit të veglave.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofron {{ui:Wrap}} (nisja), {{ui:2 rows}} dhe {{ui:1 row}}; grupet që s'futen lëvizin anash. Shihni [Rregulloni panelet](common:arrange-panels).
- **Paneli i problemeve.** Paneli i përbashkët i paralajmërimeve dhe shënimeve mban tani kontrollin e stokut të furnitorit të lartpërmendur, pranë kontrolleve të tjera.
- **Shtesat.** Shtesat ndjekin listën e llogarisë tuaj. Shihni [Shtesat dhe lista e llogarisë](common:addons-basics).
- **Lidhni AI-në tuaj.** CadCraft Studio është qendra: lidhni asistentin një herë për të tetë aplikacionet. Studio nuk ka AI të vetin.

### Ndrequr në 0.8.1

- **Seksioni i klasave DWG.** Seksioni i klasave të një skedari DWG u lexua si lloj i gabuar. Kjo është rregulluar në TakeoffCraft, dhe në katër aplikacione të tjera.
- **Studio mund ta ndryshojë gjuhën ndërsa punon.** Më parë, Studio dhe edicionet e tij të paketuara ishin vetëm në anglisht. Kjo nuk është testuar në versionin desktop në çdo platformë; na thoni nëse gjuha nuk ndryshon.

### Jo ende në këtë version

- **Nuk është e nënshkruar me kod.** Windows mund të paralajmërojë, dhe në Mac klikoni me të djathtën dhe zgjidhni {{ui:Open}} herën e parë. Dyqanet (Microsoft Store, Google Play, App Store) janë në pritje, dhe versioni për iPad dhe iPhone nuk u ri-ndërtua për 0.8.1.
- **Përditësimet e Studio.** Instaluesi i Windows dhe paketat e Linux kontrollojnë një herë në ditë dhe pyesin së pari. Zip portativ vetëm ju tregon, dhe macOS dhe APK nuk përditësohen vetë. Imazhi .dmg i macOS 0.8 ndjek publikimin.
- **Lidhni AI-në tuaj.** Lidhja me një klik brenda Studio, lidhësi i strehuar për AI në shfletues, çelësi juaj API brenda Studio dhe një paketë MCP e publikuar nuk premtohen në këtë version.
- **Numëro gjithçka.** Ka nevojë për simbole të vizatuara njësoj si në legjendë, dhe një simbol me mur ose vijë të gjatë që kalon nëpër të mund të humbasë. Simbolet e pasqyruara nuk gjenden, dhe një fletë pa shkallë e vizatuar në madhësi tjetër kërkohet në madhësinë e legjendës. Kontrolloni gjetjet në fletën e parë përpara se t'i besoni pjesës tjetër.
- **Stoku i furnitorit.** Shifrat e stokut janë aq të reja sa skedari që shtoni. Kontrolli kurrë nuk pyet një furnitor.
- **Gjuhët.** Shiriti i aplikacionit për tamilishten del jashtë kufijve.

Gjithçka tjetër është te [Ende nuk është ndërtuar](topic:not-built-yet). Për versionin para këtij, shihni [Çfarë ka të re në 0.7](topic:whats-new-0-7).
