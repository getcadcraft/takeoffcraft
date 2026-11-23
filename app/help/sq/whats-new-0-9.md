---
title: Çfarë të reja në 0.9 (më herët)
summary: Lexo gjatësitë në metra, centimetra ose milimetra, sipërfaqet metrike në m2 me sipërfaqen e murit, paravendosjet e shkallëve 1:75 dhe 1:150, njësitë e peshës dhe të temperaturës, Hark me dhjetë metoda, kursorë live, Ndiq dhe një listë personash.
keywords: çfarë të reja 0.9, version i mëparshëm, çfarë të reja, shënime versioni, ndryshimet, 0.9, shfaq gjatësitë si, metra, centimetra, milimetra, metrik, ndiq global, njësitë, njësitë e shfaqjes, m2, metra katrorë, sipërfaqja e murit, paravendosjet e shkallës, 1:75, 1:150, pesha, kilogramë, kg, tonë, ton, lb, temperatura, celsius, fahrenheit, hark, metodat e harkut, hark 3 pikësh, rreze, live, kursorë, ndiq, lista e personave, klasë, tooltip, paraqitja, shënime versioni, ndryshime, 0.8, 0.8.1, version, veçori të reja, numëro gjithçka, legjendë, legjendë simbolesh, i tërë seti, memoria e çmimeve, punët e kaluara, puna e fundit, çmim tipik, furnitor, stok, afati i furnizimit, porosi në pritje, lista e porosisë, mungesë, paneli i problemeve, asistentë, gjuhët, pajisjet hyrëse, rreshtat e shiritit të veglave, dwg
from: f4322ba2
---

Ky është ndryshimi në TakeoffCraft 0.9, krahasuar me 0.8.1. Është një version i vogël për këtë aplikacion: gjatësitë tani mund të lexohen në metra, centimetra ose milimetra, sipërfaqet dhe shkallët ndjekin siç duhet punën metrike, dhe Hark ka dhjetë mënyra vizatimi. Sesionet Live tregojnë gjithashtu kush është ku.

## E re

### Lexo gjatësitë në metra, centimetra ose milimetra

- **Shfaq gjatësitë si.** {{ui:Settings}} › {{ui:TakeoffCraft}} ka {{ui:Show lengths as}} me {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm dhe mm. {{ui:Follow Global}} përdor njësinë metrike të gjatësisë që keni shënuar me yll te {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, dhe këmbë-inç kur nuk është shënuar asnjë. Ajo ndryshon mënyrën si lexohen gjatësitë në fletë, në shiritin e statusit dhe në panele, duke përfshirë lartësitë, thellësinë, trashësinë dhe nivelet. Një numër i thjeshtë i shtypur në një fushë lartësie lexohet në njësinë që shfaqet.
- **Vetëm shfaqje.** Sasitë, kostot dhe eksportet llogariten nga gjatësitë e sakta. Zgjedhja 1/16, 1/8 dhe 1/4 inç shfaqet vetëm për këmbë-inç. Shih [Shfaq gjatësitë në metra](topic:show-lengths-in-meters).
- **Njësitë e peshës.** Një artikull me {{ui:Typed quantity (no drawing)}} mund të jetë tani në lb, TON, kg ose t, dhe të çmohet për njësi.
- **Temperatura.** Çdo artikull ka një fushë opsionale {{ui:Temperature}} në redaktuesin e artikujve, e shtypur në gradë C ose F. {{ui:Show temperatures as}} te {{ui:Settings}} › {{ui:TakeoffCraft}} ofron {{ui:Follow Global}}, °C ose °F.

### Sipërfaqet dhe shkallët për punë metrike

- **Sipërfaqet në m2 në vizatim.** Një sipërfaqe e matur me një artikull metrik tani shkruan m2 në etiketën e vizatimit dhe në panelin e shenjave, si dhe në tabelë, në vend të SF. Rregulli është m2 kur artikulli çmohet në metrikë ose gjatësitë shfaqen në m, cm ose mm, dhe SF përndryshe.
- **Sipërfaqja e murit.** Një artikull linear me lartësi shfaq gjithashtu sipërfaqen e murit (gjatësia shumëzuar me lartësinë) në listën e artikujve, dhe si rresht shënimi nën tabelën e sasive sipas artikullit.
- **Paravendosjet e shkallëve 1:75 dhe 1:150.** Ato janë në listën {{ui:Preset}} te grupi {{ui:Scale}}, që tani ka 32 shkallë. Shih [Paravendosjet e shkallës](topic:scale-presets).

### Hark me dhjetë metoda

- Ndërsa {{ui:Arc}} është i ndezur (buton në shirit veglash ose {{key:R}}), shfaqet një kuti {{ui:Arc method}} në shiritin e fletës: 3 pika, Fillim, Qendër, Fund, Fillim, Qendër, Kënd, Fillim, Qendër, Gjatësi, Fillim, Fund, Kënd, Fillim, Fund, Drejtim, Fillim, Fund, Rreze, Qendër, Fillim, Fund, Qendër, Fillim, Kënd dhe Qendër, Fillim, Gjatësi. Kënd, gjatësi, rreze dhe drejtim mund të klikohen ose të shtypen. Funksionon në vargje lineare, sipërfaqe dhe hapje. Skedarët e ruajtur para 0.9 hapen njëlloj. Shih [Vizato harqe me dhjetë metoda](topic:draw-arcs-ten-methods).

### Puna së bashku

- **Shihni kursorët e njëri-tjetrit.** Në një sesion Live, treguesi i secilit person shfaqet në fletë me emrin dhe ngjyrën e tij, me një kornizë me pika rreth shenjave që ka zgjedhur. Personat në një fletë tjetër renditen me emrin e asaj fletë. Shih [Puno live me të tjerët](topic:work-live).
- **Ndiq një person, dhe lista e personave.** Butoni {{ui:People}} në një sesion Live liston çdo person me mjetin që përdor, fletën ku është dhe kur ka bërë ndryshimin e fundit. {{ui:Follow}} e lëviz pamjen tuaj me të tijën, dhe organizuesi i sesionit mund të përdorë {{ui:Ask everyone to follow me}}. Shih [Ndiq një kolege në një sesion Live](topic:follow-a-teammate).

## Në çdo aplikacion

- **Tooltip-et dhe pika e fillimit.** Teksti kur kaloni mausin është një tooltip Bootstrap, dhe pika e fillimit mund të mbyllet.
- **Shiritat e skedave me lëvizje.** Shiriti i skedave të një paneli që nuk përshtatet lëvizet në vend që të priten.
- **Titujt e skedave.** Skeda e shfletuesit shfaq `<document> - TakeoffCraft | CadCraft`.
- **Paraqitja.** Lista e paraqitjes te {{ui:Settings}} është një listë rënëse që shfaq paraqitjen e zgjedhur.
- **Gjuha.** Gjuha që zgjidhni tani arrin te fjalët që vetë faqja shkruan, si E re, Hap dhe Ruaj. Gjuhët e tjera nga anglishtja janë përkthime automatike deri sa t'i lexojë një folës amtar.

## Kufizime të njohura

- Shfaqja e gjatësive, njësitë e peshës dhe të temperaturës dhe paravendosjet e reja u kontrolluan me teste dhe në faqe. Çdo panel në çdo njësi nuk është kontrolluar me dorë.
- Lista e personave nuk është kontrolluar me dorë me një klasë të vërtetë mësuesi dhe nxënësish.
- Gjuhët e tjera nga anglishtja janë përkthime automatike.
- Instaluesit për Windows nuk janë të nënshkruar me kod (Më shumë informacion, pastaj Ekzekuto gjithsesi). Imazhi i diskut për macOS nuk është noterizuar (klik me të djathtën, pastaj Hap).

Gjithçka tjetër është te [Nuk është ndërtuar ende](topic:not-built-yet). Për versionin para këtij, shih [Çfarë të reja në 0.7](topic:whats-new-0-7).

## Më herët: 0.8 dhe 0.8.1

Ky është ndryshimi në TakeoffCraft 0.8 (lëshuar më 2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. Një legjendë simbolesh tani mund të numërohet në tërë setin njëherësh, një llogaritje e re mund të fillojë nga çmimet e punëve tuaja të kaluara, dhe llogaritja mund të kontrollohet me stokun e një furnitori. 0.8.1 është një version rregullimesh.

### E re

**Numëro çdo gjë në set**

- **Kutizo legjendën një herë.** {{ui:Count everything}} në shirit veglash lexon një legjendë simbolesh: tërhiqni një kuti rreth simboleve dhe emrave të shtypur pranë tyre. Çdo simbol listohet me figurën dhe emrin e tij, dhe emri bëhet emri i artikullit. Hiqni shenjën nga ajo që nuk doni, pastaj zgjidhni {{ui:Count on N sheets}} (Numëro në N fletë). Një shirit tregon fletën që po kërkohet, {{ui:Cancel}} ndalon ekzekutimin dhe faqja mbetet e përdorshme.
- **Çdo fletë në një ekzekutim.** Çdo simbol numërohet në çdo fletë të hapur. Një fletë e vizatuar në një shkallë tjetër kërkohet në atë shkallë, dhe simbolet gjenden të kthyera në çdo kënd të drejtë. Simbolet e vetë legjendës nuk numërohen në fletën e saj.
- **Shqyrtoni para se të shtohet diçka.** Çdo total ka një lidhje për fletë ("E-103: 4") që të çon te ajo fletë. Klikoni një kuti te një gjetje për ta lënë jashtë, dhe klikoni përsëri për ta kthyer. Niveli i përputhjes (50% deri 100%) vetëm filtron atë që u gjet; asgjë nuk kërkohet përsëri.
- **Një hap zhbërjeje.** {{ui:Add N marks}} (Shto N shenja) krijon një artikull numërimi për çdo simbol, me një shenjë te çdo gjetje. Një emër që është tashmë artikull numërimi juaj ripërdoret. {{key:Ctrl+Z}} heq çdo artikull dhe shenjë. Ajo që pranoni hyn gjithashtu në {{ui:Learned}}.
- **Simbole në çdo kënd.** Zgjidhni {{ui:Symbols at any angle}} para numërimit për të gjetur gjithashtu simbole të kthyera me një kënd që nuk është kënd i drejtë. Kërkimi atëherë rrotullon çdo simbol çdo 15 gradë, dhe një simbol që nuk është rreth mund të marrë deri gjashtë herë më shumë kohë.
- **Çfarë është.** Përputhje e thjeshtë simbolesh në fletët tuaja, pa model të trajnuar, dhe asgjë nuk del nga kompjuteri juaj. Në një grup të trilluar prej 200 fletësh, zgjati 9.4 sekonda nga fillimi në fund në Chrome, në një desktop të shpejtë; grupet reale të planeve do të jenë më të ngadalta. Shih [Numëro çdo gjë në set](topic:count-everything).

**Memoria e çmimeve nga punët tuaja**

- **TakeoffCraft mban mend tarifat tuaja.** Kur ruani një llogaritje, çdo artikull i çmuar që përdoret mbahet mend me emrin dhe llojin e tij: tarifa e materialit, tarifa e punës, humbja dhe njësia. Për çdo emër mbahen 12 punët e fundit. Ajo mbahet në këtë kompjuter pranë Bibliotekës së çmimeve, kurrë brenda një skedari llogaritjeje, dhe asgjë nuk dërgohet askund.
- **Filloni një llogaritje të re prej saj.** {{ui:Prices}} në shirit veglash tregon, për çdo artikull, tarifat e punës së fundit, tarifat tipike dhe intervalin. {{ui:Use last}} ose {{ui:Use typical}} çmon një artikull, dhe {{ui:Price N unpriced items from memory}} plotëson çdo artikull që ende nuk ka çmim. Çdo përdorim është një hap zhbërjeje.
- **Punët e vjetra.** {{ui:Learn from a past takeoff…}} mban mend artikujt e çmuar të një llogaritjeje të ruajtur (.json).
- **Shiheni, ndryshojeni, harrojeni.** {{ui:Everything remembered}} liston çdo emër; butoni i koshit harron një, dhe {{ui:Clear all prices}} harron të gjitha. Fikeni {{ui:Remember my prices when I save a takeoff}} për ta ndalur. Një çmim për copë nuk vendoset kurrë te një artikull për këmbë. Shih [Memoria e çmimeve nga punët e kaluara](topic:price-memory).

**Stoku i furnitorit dhe afatet e furnizimit**

- **Kontrolloni sipas listës së furnitorit.** {{ui:Supply}} në shirit veglash merr listën e stokut të furnitorit ({{ui:Add a supplier file…}}), një CSV ose një fletëllogaritëse, dhe e krahason me atë që llogaritja kërkon, me humbjen. Mbahen deri pesë skedarë. Asgjë nuk dërgohet dhe asgjë nuk i kërkon furnitorit: ju sillni skedarin.
- **Çfarë thotë.** Artikujt e shkurtër vijnë të parët: "Mungon 120 EA", "Afati i furnizimit 21 ditë", "Në pritje të furnizimit", "Njësia ndryshon", "Nuk ka shifër stoku" ose "Në stok". {{ui:Longest wait wanted (days)}} fillon nga 14.
- **Lista e porosisë.** {{ui:Order list (CSV)}} shkarkon artikujt e mungesës me sasinë që mungon, furnitorin dhe afatin e furnizimit.
- **Çmimet në Bibliotekë.** Nëse skedari ka çmime, {{ui:Prices into the Library}} vendos çmimin e materialit të çdo hyrjeje të Bibliotekës me të njëjtin emër dhe njësi. Riçmoni nga Biblioteka për t'i sjellë ato në llogaritje.
- **Në panelin e problemeve.** Mungesa është paralajmërim dhe pritja e gjatë është shënim, nën "Stoku i furnitorit". Mund të pranoni një me arsye, dhe arsyeja ruhet në llogaritje. Shih [Kontrollo stokun e furnitorit dhe afatet e furnizimit](topic:supplier-stock).

**Asistentët e AI**

- **Mjete për të tre.** Me asistentët e lejuar te {{ui:Settings}}, një asistent mund të lexojë një legjendë (`legend_open`), të ekzekutojë numërimin (`legend_count_start`, pastaj `legend_count_status` dhe `legend_count_result`) dhe ta shtojë (`legend_count_add`, që mund të shikojë paraprakisht). Mund të lexojë çmimet e mbajtura në mend (`prices_list`) dhe të çmojë artikuj prej tyre (`prices_apply`, që mund të shikojë paraprakisht), dhe të lexojë kontrollin e furnitorit (`supply_check`). Shtimi i një skedari furnitori mbetet për ju. Shih [Përdorni TakeoffCraft me asistentë AI](topic:use-with-ai-assistants).

**Në çdo aplikacion**

- **Gjuhët.** Pesëdhjetë e katër gjuhë gjithsej; dhjetë janë të reja (Lituanisht, Letonisht, Boshnjakisht, Marathi, Telugu, Shqip, Afrikanisht, Filipinisht, Suahilisht dhe Uzbekisht). Gjuhët e tjera nga anglishtja janë përkthime automatike deri sa t'i lexojë një folës amtar.
- **Pajisjet hyrëse.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} cakton çfarë bën një trackpad, butonat anësorë të miut, një stilolaps, një maus 3D, një kontroller lojërash ose një kontroller MIDI, për çdo aplikacion ose për një. Shih [Përdorni trackpad, maus 3D ose kontroller](common:input-devices).
- **Rreshtat e shiritit të veglave.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofron {{ui:Wrap}} (fillimi), {{ui:2 rows}} dhe {{ui:1 row}}; grupet që nuk futen lëvizin anash. Shih [Rregulloni panelet](common:arrange-panels).
- **Paneli i problemeve.** Paneli i përbashkët i paralajmërimeve dhe shënimeve tani mban kontrollin e stokut të furnitorit të përmendur më lart, pranë kontrolleve të tjera.
- **Shtesat.** Shtesat ndjekin listën e llogarisë suaj. Shih [Shtesat dhe lista e llogarisë](common:addons-basics).
- **Lidhni AI-në tuaj.** CadCraft Studio është qendra: lidheni asistentin një herë për të tetë aplikacionet. Studio nuk ka AI të vetën.

### Të rregulluara në 0.8.1

- **Seksioni i klasave DWG.** Seksioni i klasave të një skedari DWG u lexua si lloj i gabuar. Kjo është rregulluar në TakeoffCraft, dhe në katër aplikacione të tjera.
- **Studio mund ta ndryshojë gjuhën ndërsa punon.** Më parë, Studio dhe edicionet e tij të paketuara ishin vetëm në anglisht. Kjo nuk është testuar në versionin desktop në çdo platformë; na tregoni nëse gjuha nuk ndryshon.

### Jo ende në këtë version

- **Jo e nënshkruar me kod.** Windows mund të paralajmërojë, dhe në Mac klikoni me të djathtën dhe zgjidhni {{ui:Open}} herën e parë. Versionet për dyqane (Microsoft Store, Google Play, App Store) janë në pritje, dhe versioni për iPad dhe iPhone nuk u rindërtua për 0.8.1.
- **Përditësimet e Studio.** Instaluesi për Windows dhe paketat për Linux kontrollojnë një herë në ditë dhe pyesin së pari. Zip-i portativ vetëm ju tregon, dhe macOS dhe APK nuk përditësohen vetë. .dmg i macOS 0.8 ndjek versionin.
- **Lidhni AI-në tuaj.** Lidhja me një klik brenda Studio, lidhësi i strehuar për AI në shfletues, çelësi juaj API brenda Studio dhe një paketë MCP e publikuar nuk premtohen në këtë version.
- **Numëro çdo gjë.** Kërkon simbole të vizatuara në të njëjtën mënyrë si në legjendë, dhe një simbol me mur ose vijë të gjatë që kalon nëpër të mund të humbasë. Simbolet e pasqyruara nuk gjenden, dhe një fletë pa shkallë që është vizatuar në madhësi tjetër kërkohet në madhësinë e legjendës. Kontrolloni gjetjet e fletës së parë para se t'u besoni pjesës tjetër.
- **Stoku i furnitorit.** Shifrat e stokut janë aq të përditësuara sa skedari që shtoni. Kontrolli nuk pyet kurrë furnitorin.
- **Gjuhët.** Shiriti i aplikacionit për tamilisht del jashtë.
