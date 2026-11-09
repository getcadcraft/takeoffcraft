---
title: Çfarë ka të re në 0.8 dhe 0.8.1
summary: Numëro një legjendë të plotë simbolesh në të gjitha fletët e hapura në një ekzekutim, vendos çmime sipas tarifave të punëve tuaja të kaluara, kontrollo llogaritjen me stokun dhe afatet e dorëzimit të furnizuesit, plus mjete të reja asistentësh për të tre, ndryshimet e përbashkëta të 0.8 dhe rregullimin 0.8.1 për skedarët DWG.
keywords: çfarë është e re, shënime të versionit, ndryshimet, ndryshime, 0.8, 0.8.1, version, veçori të reja, numëro gjithçka, legjendë, legjendë simbolesh, i gjithë grupi, kujtesa e çmimeve, punët e kaluara, puna e fundit, çmimi tipik, furnizues, stoku, koha e dorëzimit, porosi e vonuar, lista e porosisë, mungesë, paneli i problemeve, asistent, gjuhët, pajisjet hyrëse, rreshtat e shiritit të veglave, dwg
from: a04adef6
---

Ky është ndryshimi në TakeoffCraft 0.8 (lëshuar më 2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. Tani një legjendë simbolesh mund të numërohet në të gjithë grupin njëherësh, një llogaritje e re mund të fillojë nga çmimet e punëve tuaja të kaluara, dhe llogaritja mund të kontrollohet me stokun e furnizuesit. 0.8.1 është një version rregullimi.

## Të reja

### Numëro gjithçka në grup

- **Kufizo legjendën një herë.** {{ui:Numëro gjithçka}} në shiritin e veglave lexon një legjendë simbolesh: tërhiq një kuti rreth simboleve dhe emrave të shtypur pranë tyre. Çdo simbol listohet me figurën dhe emrin e vet, dhe emri bëhet emri i artikullit. Hiq shenjën te ajo që nuk dëshiron, pastaj zgjidh {{ui:Numëro në N fletë}}. Një shirit tregon fletën që kërkohet, {{ui:Anulo}} ndalon ekzekutimin, dhe faqja mbetet e përdorshme.
- **Çdo fletë në një ekzekutim.** Çdo simbol numërohet në çdo fletë të hapur. Një fletë e vizatuar në shkallë tjetër kërkohet në atë shkallë, dhe simbolet gjenden të rrotulluara në çdo kënd të drejtë. Simbolet e vetë legjendës nuk numërohen në fletën e saj.
- **Rishiko përpara se të shtohet diçka.** Çdo total ka një lidhje për fletë ("E-103: 4") që të çon te ajo fletë. Kliko një kuti te një gjetje për ta lënë jashtë, dhe kliko përsëri për ta kthyer. Niveli i përputhjes (50% deri 100%) vetëm filtron atë që u gjet; asgjë nuk kërkohet përsëri.
- **Një hap zhbërjeje.** {{ui:Shto N shenja}} krijon një artikull numërimi për çdo simbol, me një shenjë te çdo gjetje. Një emër që është tashmë artikull numërimi yt ripërdoret. {{key:Ctrl+Z}} heq të gjithë artikujt dhe shenjat. Ajo që pranon hyn gjithashtu në {{ui:Mësuar}}.
- **Simbole në çdo kënd.** Vendos shenjën te {{ui:Simbole në çdo kënd}} para numërimit për të gjetur gjithashtu simbolet të rrotulluara me një kënd që nuk është kënd i drejtë. Kërkimi atëherë rrotullon çdo simbol çdo 15 gradë, dhe një simbol që nuk është i rrumbullakët mund të marrë deri gjashtë herë më shumë kohë.
- **Çfarë është.** Përputhje e thjeshtë simbolesh në fletët tuaja, pa model të trajnuar, dhe asgjë nuk del nga kompjuteri juaj. Në një grup të trilluar prej 200 fletësh u desh 9.4 sekonda nga fillimi në fund, në Chrome në një desktop të shpejtë; grupet reale të planeve do të jenë më të ngadalta. Shih [Numëro gjithçka në grup](topic:count-everything).

### Kujtesa e çmimeve nga punët tuaja

- **TakeoffCraft mban mend tarifat tuaja.** Kur ruan një llogaritje, çdo artikull i çmuar që përdoret mbahet mend sipas emrit dhe llojit: tarifa e materialit, tarifa e punës, humbja dhe njësia. Mbahen 12 punët e fundit për çdo emër. Ruhet në këtë kompjuter, pranë Bibliotekës së çmimeve, kurrë brenda një skedari llogaritjeje, dhe asgjë nuk dërgohet askund.
- **Fillo një llogaritje të re prej saj.** {{ui:Çmimet}} në shiritin e veglave tregon, për çdo artikull, tarifat e punës së fundit, tarifat tipike dhe intervalin. {{ui:Përdor të fundit}} ose {{ui:Përdor tipiken}} vendos çmimin për një artikull, dhe {{ui:Vendos çmim për N artikuj pa çmim nga kujtesa}} plotëson çdo artikull që ende nuk ka çmim. Çdo përdorim është një hap zhbërjeje.
- **Puna e vjetër.** {{ui:Mëso nga një llogaritje e kaluar…}} mban mend artikujt e çmuar të një llogaritjeje të ruajtur (.json).
- **Shiko, ndrysho, harro.** {{ui:Gjithçka e mbajtur mend}} liston çdo emër; butoni i koshit harron një, dhe {{ui:Pastro të gjitha çmimet}} harron të gjitha. Fik {{ui:Mbaj mend çmimet e mia kur ruaj një llogaritje}} për ta ndalur. Një çmim për copë nuk vendoset kurrë te një artikull për metër. Shih [Kujtesa e çmimeve nga punët tuaja të kaluara](topic:price-memory).

### Stoku i furnizuesit dhe afatet e dorëzimit

- **Kontrollo me listën e furnizuesit.** {{ui:Furnizimi}} në shiritin e veglave merr listën e stokut të furnizuesit ({{ui:Shto një skedar furnizuesi…}}), një CSV ose një tabelë, dhe kontrollon se çfarë kërkon llogaritja, me humbjen, kundrejt saj. Mbahen deri në pesë skedarë. Asgjë nuk dërgohet dhe asnjë kërkesë nuk i bëhet furnizuesit: ti sjell skedarin.
- **Çfarë thotë.** Artikujt e shkurtër vijnë të parët: "Mungon 120 EA", "Koha e dorëzimit 21 ditë", "Në pritje", "Njësia ndryshon", "Pa shifër stoku" ose "Në stok". {{ui:Afati më i gjatë i pranueshëm (ditë)}} fillon nga 14.
- **Lista e porosisë.** {{ui:Lista e porosisë (CSV)}} shkarkon artikujt e shkurtër me sasinë që mungon, furnizuesin dhe kohën e dorëzimit.
- **Çmimet në Bibliotekë.** Nëse skedari ka çmime, {{ui:Çmimet në Bibliotekë}} vendos çmimin e materialit të çdo hyrjeje të Bibliotekës me të njëjtin emër dhe njësi. Ri-çmo nga Biblioteka për t'i sjellë ato në llogaritje.
- **Te paneli i problemeve.** Mungesa është një paralajmërim dhe pritja e gjatë është një shënim, nën "Stoku i furnizuesit". Mund ta pranosh një me arsye, dhe arsyeja ruhet në llogaritje. Shih [Kontrollo stokun e furnizuesit dhe afatet e dorëzimit](topic:supplier-stock).

### Asistentët AI

- **Mjete për të tre.** Me asistentët e lejuar te {{ui:Cilësimet}}, një asistent mund të lexojë një legjendë (`legend_open`), të nisë numërimin (`legend_count_start`, pastaj `legend_count_status` dhe `legend_count_result`) dhe ta shtojë (`legend_count_add`, që mund të shfaqë paraprakisht). Mund të lexojë çmimet e mbajtura mend (`prices_list`) dhe të vendosë çmime te artikujt prej tyre (`prices_apply`, që mund të shfaqë paraprakisht), dhe të lexojë kontrollin e furnizuesit (`supply_check`). Shtimi i një skedari furnizuesi mbetet detyrë jote. Shih [Përdor TakeoffCraft me asistentë AI](topic:use-with-ai-assistants).

### Në çdo aplikacion

- **Gjuhët.** Pesëdhjetë e katër gjuhë gjithsej; dhjetë janë të reja (Lituanisht, Letonisht, Boshnjakisht, Marathi, Telugu, Shqip, Afrikanisht, Filipinisht, Suahili dhe Uzbekisht). Gjuhët e tjera nga anglishtja janë drafte automatike, derisa një folës amtar t'i lexojë.
- **Pajisjet hyrëse.** {{ui:Cilësimet}} › {{ui:Globale}} › {{ui:Pajisjet hyrëse}} përcakton çfarë bën një trackpad, butonat anësorë të mausit, një stilolaps, një maus 3D, një kontrollues lojërash ose një kontrollues MIDI, për çdo aplikacion ose për një. Shih [Përdor trackpad, maus 3D ose kontrollues](common:input-devices).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ofron {{ui:Mbështjell}} (fillimi), {{ui:2 rreshta}} dhe {{ui:1 rresht}}; grupet që nuk futen lëvizin anash. Shih [Rregullo panelet](common:arrange-panels).
- **Paneli i problemeve.** Paneli i përbashkët i paralajmërimeve dhe shënimeve mban tani kontrollin e stokut të furnizuesit të lartpërmendur, pranë kontrolleve të tjera.
- **Shtojcat.** Shtojcat ndjekin listën e llogarisë tënde. Shih [Shtojcat dhe lista e llogarisë](common:addons-basics).
- **Lidh AI-në tënde.** CadCraft Studio është qendra: lidh asistentin një herë për të tetë aplikacionet. Studio nuk ka AI të vetë.

## Rregulluar në 0.8.1

- **Seksioni i klasave DWG.** Seksioni i klasave të një skedari DWG u lexua si lloj i gabuar. Kjo është rregulluar në TakeoffCraft dhe në katër aplikacione të tjera.
- **Studio mund të ndryshojë gjuhën ndërsa punon.** Më parë, Studio dhe versionet e saj të paketuara ishin vetëm në anglisht. Kjo nuk është testuar në versionin desktop në çdo platformë; na thuaj nëse gjuha nuk ndryshon.

## Ende jo në këtë version

- **Pa nënshkrim kodi.** Windows mund të paralajmërojë, dhe në Mac klikon me butonin e djathtë dhe zgjedh {{ui:Të hapur}} herën e parë. Versionet e dyqaneve (Microsoft Store, Google Play, App Store) janë në pritje, dhe versioni për iPad dhe iPhone nuk u ri-ndërtua për 0.8.1.
- **Përditësimet e Studio.** Instaluesi i Windows dhe paketat e Linux kontrollojnë një herë në ditë dhe pyesin së pari. Zipi portabël vetëm të tregon, dhe macOS dhe APK nuk përditësohen vetë. Skedari .dmg 0.8 për macOS ndjek lëshimin.
- **Lidh AI-në tënde.** Lidhja me një klik brenda Studio, lidhuesi i hostuar për AI në shfletues, çelësi yt API brenda Studio dhe një paketë MCP e publikuar nuk premtohen në këtë version.
- **Numëro gjithçka.** Kërkon simbole të vizatuara në të njëjtën mënyrë si në legjendë, dhe një simbol me mur ose vijë të gjatë mbi të mund t'i shpëtojë. Simbolet e pasqyruara nuk gjenden, dhe një fletë pa shkallë e vizatuar në madhësi tjetër kërkohet në madhësinë e legjendës. Kontrollo gjetjet në fletën e parë para se t'u besosh të tjerave.
- **Stoku i furnizuesit.** Shifrat e stokut janë aq të reja sa skedari që shton. Kontrolli nuk pyet kurrë një furnizues.
- **Gjuhët.** Shiriti i aplikacionit për Tamilisht del jashtë.

Çdo gjë tjetër është te [Ende nuk është ndërtuar](topic:not-built-yet). Për versionin para këtij, shih [Çfarë është e re në 0.7](topic:whats-new-0-7).
