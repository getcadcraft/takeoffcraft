---
title: Waxa cusub ee 0.9
summary: Akhri dherarka mitir, sentimitir ama millimitir, aagga metric-ka oo m2 ah oo leh aagga darbiga, diyaarka miisaanka 1:75 iyo 1:150, unitiyada miisaanka iyo heerkulka, Qaanso oo leh toban habood, iyo live cursors, Raac iyo liiska dadka.
keywords: waxa cusub, what's new, sheekada isbeddelada, changelog, 0.9, muuji dherarka sida, mitir, sentimitir, millimitir, metric, raac guud, unitiyo, unitiyada muuqaalka, m2, mitir laba jibbaaran, aagga darbiga, diyaarka miisaanka, 1:75, 1:150, miisaan, kiilo, kg, tonne, ton, lb, heerkul, celsius, fahrenheit, qaanso, habka qaansada, radius, live, cursors, raac, liiska dadka, class, tooltips, qaabeyn, isbeddel, 0.8, 0.8.1, nooca, astaamo cusub, tirinta oo dhan, legend, calaamada legend, set oo dhan, xusuusta qiimaha, shaqooyinka hore, shaqadii ugu dambaysay, qiimaha typical, bixiye, kaydka, waqtiga sugitaanka, backorder, liiska dalabka, yaraanta, panelka dhibaatooyinka, kaaliye, luuqadaha, aaladaha gelinta, safafka qalabka, dwg
from: 6182b998
---

Waxaa kaga wada hadlaynaa waxa isbeddelay TakeoffCraft 0.9, marka la barbardhigo 0.8.1. Waa sii deyn yar oo app-kan: dherarka hadda waa la akhriyi karaa mitir, sentimitir ama millimitir, aagga iyo miisaankuna si sax ah ayay u raacaan metric-ka, Qaanso waxay leedahay toban siyaabood oo loo rinjiyeeyo. Fadhiyada toosan waxay sidoo kale muujiyaan qofka halka uu joogo.

## Cusub

### Akhri dherarka mitir, sentimitir ama millimitir

- **Muuji dherarka sida.** {{ui:Dejinta}} › {{ui:TakeoffCraft}} wuxuu leeyahay {{ui:Muuji dherarka sida}} oo leh {{ui:Raac Guud}}, {{ui:Fut-inji}}, m, cm iyo mm. {{ui:Raac Guud}} wuxuu isticmaalaa unitiga dherarka metric-ka ee aad calaamadisay {{ui:Dejinta}} › {{ui:Caalami}} › {{ui:Unit-yada}}, iyo fut-inji marka mid aan la calaamadin. Waxa uu beddelaa sida dherarku u akhriyo xaashiga, safka xaaladda iyo panelada, oo ay ku jiraan dhererka, qotada, dhumucda iyo heerarka. Lambar aan unit lahayn oo lagu qoro sanduuqa dhererka waxaa loo akhrinayaa unitiga la muujiyay.
- **Muuqaal kaliya.** Qadarrada, kharashyada iyo dhoofinta waxaa laga xisaabiyaa dherarka saxda ah. Doorashada 1/16, 1/8 iyo 1/4 inch waxay muuqataa kaliya fut-inji. Eeg [Muuji dherarka mitir](topic:show-lengths-in-meters).
- **Unitiyada miisaanka.** Walax {{ui:Qadar gacanta lagu qoray (naqshadaa la'aan)}} waxay hadda ku jiri kartaa lb, TON, kg ama t, waxaana lagu qiimayn karaa unit kasta.
- **Heerkulka.** Walax kasta waxay leedahay goob ikhtiyaari ah oo {{ui:Heerkulka}} ah oo ku jirta tafatiraha walaxda, oo lagu qoro digrii C ama F. {{ui:Muuji heerkulka sida}} ee {{ui:Dejinta}} › {{ui:TakeoffCraft}} wuxuu bixiyaa {{ui:Raac Guud}}, °C ama °F.

### Aagga iyo miisaanka shaqada metric-ka

- **Aagga m2 naqshadda.** Aag la cabbiray walax metric ah hadda waxay ku qortaa m2 calaamadda naqshadda iyo panelka calaamadaha sidoo kale, halkii SF; wuxuu u dhowdahay waxa ku qoran shaxanka. Xeerku waa m2 marka walaxda lagu qiimeeyo metric ama dherarka lagu muujiyo m, cm ama mm, iyo SF haddii kale.
- **Aagga darbiga.** Walax xariiq ah oo leh dhererka ayaa sidoo kale muujinaysa aagga darbiga (dherer x joog) liiska Walaxaha iyo safka qoraalka hoosta shaxanka qadarka walax walax.
- **Diyaarka miisaanka 1:75 iyo 1:150.** Waxay ku jiraan liiska {{ui:Diyaar}} ee kooxda {{ui:Miisaan}}, oo hadda leedahay 32 miisaan. Eeg [Diyaarka miisaanka](topic:scale-presets).

### Qaanso oo leh toban habood

- Inta {{ui:Qaanso}} la shido (badhanka qalabka sare ama {{key:R}}), sanduuq {{ui:Habka qaansada}} wuxuu soo baxaa safka xaashiga: Saddex-Barbar, Bilow, Dhexe, Dhammaad, Bilow, Dhexe, Xagal, Bilow, Dhexe, Dherer, Bilow, Dhammaad, Xagal, Bilow, Dhammaad, Jihada, Bilow, Dhammaad, Radius, Dhexe, Bilow, Dhammaad, Dhexe, Bilow, Xagal iyo Dhexe, Bilow, Dherer. Xagal, dherer, radius iyo jihada waxa la riixi karaa ama lagu qori karaa. Waxay ku shaqeysaa safafka toosan, aagga iyo jarista. Faylasha la kaydiyay ka hor 0.9 isla sidaas ayay furmaan. Eeg [Qaansooyin toban habood](topic:draw-arcs-ten-methods).

### Wada shaqaynta

- **Arag cursors-ka kale.** Fadhiga Live, mid kasta oo ka mid ah wuxuu muujiyaa dhibcihiisa xaashiga oo leh magacyadiisa iyo midabkiisa, iyo sanduuq jajab ah oo ku wareegsan calaamadaha uu xulay. Dadka xaashi kale joogaa waxa lagu liistaa magaca xaashigaas. Eeg [Wada shaqee Live](topic:work-live).
- **Raac qof, iyo liiska dadka.** Badhanka {{ui:Dadka}} ee fadhiga Live wuxuu liisayaa qof kasta qalabka uu isticmaalo, xaashiga uu joogo, iyo waqtiga ugu dambeeyay ee tafatiray. {{ui:Raac}} wuxuu dhaqaajiyaa aragtaadaas la socota, martiqaadaha ayaa isticmaali kara {{ui:Ku dalbo dhammaan inay i raacaan}}. Eeg [Raac saaxiibka fadhiga Live](topic:follow-a-teammate).

## In every app

- **Tooltips iyo tilmaamaha bilowga.** Qoraalka hover-ka waa Bootstrap tooltip, tilmaamaha bilowga waa la xidhi karaa.
- **Liisaska tab-ka ee soo-jeedinta.** Safka tab-ka panel-ka oo aan ku habboonayn wuu soo jeediyaa halkii uu ka jari lahaa.
- **Cinwaanka tab-ka.** Tab-ka browser-ka wuxuu akhrinayaa `<document> - TakeoffCraft | CadCraft`.
- **Qaabeyn.** Liiska qaabeynta ku jira {{ui:Dejinta}} waa drop-down wuxuuna muujinayaa qaabeynta la doortay.
- **Luuqad.** Luuqada aad doorato hadda waxay gaadhaa ereyada bogga laftiisa ku daabacan, sida New, Open iyo Save. Luuqadaha aan Ingiriisi ahayn waa qabyo ilaa dad ku hadla luuqadda ay akhriyaan.

## Xaddidaadaha runta ah

- Muujinta dherarka, unitiyada miisaanka iyo heerkulka iyo diyaarradii cusbaa waxa tijaabiyay tijaabooyin iyo bogga. Dhammaan panelada unit kasta looma hubin gacanta.
- Liiska dadka looma hubin gacanta fasal dhab ah oo macallimiin iyo arday.
- Luuqadaha aan Ingiriisi ahayn waa qabyo mashiinka.
- Installers-ka Windows lama saxeexin (More info, ka dibna Run anyway). Sawirka diskiga Mac lama bixin (midig-riix, ka dibna Open).

## Dib u eeg: 0.8 iyo 0.8.1

Waxaa kaga wada hadlaynaa waxa isbeddelay TakeoffCraft 0.8 (la sii daayay 2026-11-01) iyo 0.8.1 (2026-11-02), marka la barbardhigo 0.7. Legend-ka calaamadda waxa hadda la tiri karaa set oo dhan marka hal mar, shaqo cusub waxay ka bilaabi kartaa qiimaha shaqooyinkaaga hore, oo xisaabintana waxa lagu hubin karaa kaydka bixiyaha. 0.8.1 waa sii deyn sixitaan.

### Cusub

**Tiri wax kasta oo ku jira set-ka**

- **Sanduuq legend mar keliya.** {{ui:Tiri wax kasta}} ee qalabka sare wuxuu akhrinayaa legend calaamadeed: jiid sanduuq calaamadaha iyo magacyada lagu qoro dhinaciisa. Calaamad kasta waxa lagu liistaa sawirkeeda iyo magaciisa, magacuna wuxuu noqdaa magaca walaxda. Kuwa aadan doonin ka saar, ka dibna dooro {{ui:Tiri xaashiyada N}}. Safka wuxuu muujiyaa xaashiga la raadinayo, {{ui:Jooji}} wuxuu joojiyaa socodka, bogguna wuu sii shaqeynayaa.
- **Dhammaan xaashiyada hal socod.** Calaamad kasta waxa lagu tiraa xaashi kasta oo furan. Xaashi loo rinjiyeeyay miisaan kale waxa lagu raadiyaa miisaankaas, calaamadaha waxa laga helaa xagal kasta oo toosan. Calaamadaha legend-ka laftiisa lagama tiro xaashigiisa.
- **Eegis ka hor intaan wax lagu dhicin.** Tirada kasta waxay leedahay xiriir xaashi kasta ("E-103: 4") oo tagaya xaashigaas. Guji sanduuq si aad uga baxdo, ku guji mar kale si aad u soo celiso. Heerka isbarbardhigga (50% ilaa 100%) wuxuu kaliya shaandhaynayaa waxa la helay; ma jiro raadin dib loo sameeyo.
- **Hal tallaabo oo dib loo celin karo.** {{ui:Ku dar N calaamadood}} wuxuu sameeyaa walax tiro ah calaamad kasta, calaamad calaamad kasta oo la helay. Magaca walax tiro oo horeba kuu jirta waa dib loo isticmaalaa. {{key:Ctrl+Z}} wuxuu dib u qaadaa walaxda iyo calaamadaha oo dhan. Waxa aad aqbasho waxa kaloo lagu daraa {{ui:Waxa la baray}}.
- **Calaamadaha xagal kasta.** Calaamad {{ui:Astaamaha xagal kasta}} ka hor inta aadan tirin si aad u hesho calaamadaha loo rogay xagal aan toosan. Raadintu markaas wuxuu calaamad kasta u rogaa 15 darajo kasta, calaamad aan wareeg ahayn waxay qaadan kartaa ilaa lix jeer wakhti dheer.
- **Waxa ay tahay.** Isbarbardhig calaamadaha fudud oo ku salaysan xaashiyadaada, oo aan moodel tababarnayn, wax kastana kumbuyuutarkaaga ma ka baxo. Set ka 200 xaashi oo la sameeyay, wuxuu qaadday 9.4 ilbiriqsi dhammaantiis Chrome ee desktop degdeg ah; set-yada dhabta ah way ka daahaan doonaan. Eeg [Tiri wax kasta set-ka](topic:count-everything).

**Xusuusta qiimaha shaqooyinkaaga hore**

- **TakeoffCraft wuu xasuustaa qiimahaaga.** Marka aad xisaabinta kaydiso, walax kasta oo qiimaysan oo la isticmaalay waa la xasuustaa magac iyo nooc: qiimaha agabka, qiimaha shaqada, qashinka iyo unit-ka. 12 shaqo ugu dambeeya ayaa loo hayaa magac kasta. Waxay ku kaydsan tahay kombiyuutarkan dhinaca kaydka qiimaha Library, marna kuma jirto fayl xisaabin, waxna looma dirayo.
- **Bilow xisaabin cusub qiimaha ka soo qaad.** {{ui:Qiimayaasha}} qalabka sare wuxuu muujiyaa, walax kasta, qiimaha shaqada ugu dambeeya, qiimaha caadiga ah iyo kala duwanaanshaha. {{ui:Isticmaal kii ugu dambaysay}} ama {{ui:Isticmaal caadiga}} waxay qiimeeyaan hal walax, {{ui:Qiimee N walax aan qiimo lahayn xusuusta}} wuxuu buuxiyaa walax kasta oo aan qiimo lahayn. Isticmaal kasta waa hal tallaabo oo dib loo celin karo.
- **Shaqooyinka hore.** {{ui:Ka bar tirin hore…}} wuxuu xasuustaa walaxda qiimaysan ee xisaabin kaydsan (.json).
- **Eeg, beddel, illow.** {{ui:Wax walba oo xusuusan}} wuxuu liisayaa magac kasta; badhanka qashinka wuxuu illoobiyaa mid, {{ui:Nadiifi qiimaha oo dhan}} wuxuu illoobiyaa dhammaan. Demi {{ui:Xasuso qiimayaasha markaan tirin kaydiyo}} si aad joojiso. Qiimaha halkii unit-ka lagu qiimeeyo marna lagama dhigo walax lagu qiimeeyo dherer. Eeg [Xusuusta qiimaha shaqooyinkaaga hore](topic:price-memory).

**Kaydka bixiyaha iyo waqtiga sugitaanka**

- **Hubi liiska bixiyaha.** {{ui:Bixin}} qalabka sare wuxuu qaataa liiska kaydka bixiyaha ({{ui:Ku dar fayl bixiye…}}), CSV ama miiska xisaabta, wuxuuna hubiyaa waxa xisaabintu u baahan tahay, iyo qashinka, marka la barbardhigo. Ilaa shan fayl ayaa la kaydiyaa. Waxba lama dirayo, bixiyaha weydiinna ma jiro: adigu fayl keenta.
- **Waxa uu sheegayaa.** Walaxaha yaraanta marka hore ayay yimaadaan: "Yaraanta 120 EA", "Waqtiga sugitaanka 21 maalmood", "On backorder", "Unitigu way kala duwan yahay", "Ma jiro tirada kaydka" ama "Kaydka waa jiraa". {{ui:Waqtiga ugu dheer ee la doonayo (maalmo)}} wuxuu ka bilaabmaa 14.
- **Liiska dalabka.** {{ui:Liiska dalabka (CSV)}} wuxuu soo dejiyaa walaxaha yaraanta, tirada ay yaraatay, bixiyaha iyo waqtiga sugitaanka.
- **Qiimayaasha u gudba Library.** Haddii faylku leeyo qiimo, {{ui:Qiimayaasha Maktabadda}} wuxuu dejiyaa qiimaha agabka mid kasta oo Library ah oo magac iyo unit isku mid ah. Dib u qiimee Library si aad xisaabinta ugu soo celiso.
- **Panelka dhibaatooyinka.** Yaraanta waa digniin, waqtiga dheer waa qoraal, waxaana ku jira "Kaydka bixiyaha". Waad aqbali kartaa sabab, sababtaasna waa la kaydiyaa xisaabinta. Eeg [Hubi kaydka bixiyaha iyo waqtiga sugitaanka](topic:supplier-stock).

**Kaaliyayaasha AI**

- **Qalab dhammaantood.** Marka kaaliyayaasha la ogolaado {{ui:Dejinta}}, kaaliyuhu wuxuu akhrin karaa legend (`legend_open`), wuxuu socodsiin karaa tirinta (`legend_count_start`, ka dibna `legend_count_status` iyo `legend_count_result`) wuxuuna ku dari karaa (`legend_count_add`, oo hore u eegi karaa). Wuxuu akhrin karaa qiimaha la xasuusto (`prices_list`) wuxuuna walaxda ka qiimayn karaa (`prices_apply`, oo hore u eegi karaa), wuxuuna akhrin karaa hubinta bixiyaha (`supply_check`). Ku darista fayl bixiye waxa uu adigu sameynaysaa. Eeg [Isticmaal TakeoffCraft kaaliye AI ah](topic:use-with-ai-assistants).

**Dhammaan appsyada**

- **Luuqadaha.** Shan iyo konton luuqadood oo wadar ah; toban ayaa cusub (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili iyo Uzbek). Luuqadaha aan Ingiriisi ahayn waa qabyo mashiinka ilaa dad ku hadla luuqadda ay akhriyaan.
- **Aaladaha gelinta.** {{ui:Dejinta}} › {{ui:Caalami}} › {{ui:Aaladaha gelinta}} wuxuu dejiyaa waxa trackpad, badhanka dhinaca ee mouse, qalin, 3D mouse, controller-ka ciyaarta ama controller-ka MIDI ay sameeyaan, app kasta ama mid keliya. Eeg [Isticmaal trackpad, 3D mouse ama controller](common:input-devices).
- **Safafka qalabka.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Safafka qalabka}} wuxuu bixiyaa {{ui:Lafmeyso}} (bilowga), {{ui:2 safka}} iyo {{ui:1 safka}}; kooxaha aan ku habboonayn waxay u dhaqaaqaan dhinac. Eeg [Habee panelada](common:arrange-panels).
- **Panelka dhibaatooyinka.** Panelka wadaagga ah ee digniinta iyo qoraalada hadda wuxuu leeyahay hubinta kaydka bixiyaha oo sare, oo ku dhaaftay hubinta kale.
- **Add-ons.** Add-ons waxay raacaan liiska account-kaaga. Eeg [Add-ons iyo liiska account-kaaga](common:addons-basics).
- **Ku xidh AI-gaaga.** CadCraft Studio waa xarunta: ku xidh kaaliyahaaga mar keliya dhammaan siddeed appsyada. Studio ma lahan AI gaar ah.

### Waxa la sixay 0.8.1

- **Qaybta classes ee DWG.** Qaybta classes ee faylka DWG waxa loo akhriyay nooc khalad ah. Taas waa la sixay TakeoffCraft, iyo afar app oo kale.
- **Studio wuu beddeli karaa luuqadda isagoo socda.** Hore, Studio iyo nooceeda la xidhay waxay ahaayeen Ingiriisi kaliya. Tani looma tijaabin desktop-ka dhammaan platform-yada; sheeg haddii luuqadda aanay isbeddelin.

### Weli kuma jirto nooca tan

- **Lama saxeexin koodka.** Windows way digi karaa, Mac-ka markii ugu horeysay midig-riix oo dooro {{ui:Fur}}. Dukaamada store-ka (Microsoft Store, Google Play, App Store) waa la hakiyay, dhismaha iPad iyo iPhone looma dib u dhisin 0.8.1.
- **Cusboonaysiinta Studio.** Installer-ka Windows iyo xirmooyinka Linux maalin kasta ayay hubiyaan, oo marka hore way weydiiyaan. Zip-ka portable-ka kaliya ayuu sheegaa, macOS iyo APK-du isma cusboonaysiiyaan. .dmg-ka macOS ee 0.8 wuxuu raacayaa sii deynta.
- **Ku xidh AI-gaaga.** Ku xidhid hal-guji oo ka dhex jira Studio, connector-ka martiqaadka ah ee AI ee browser-ka, furaha API-gaaga oo ka dhex jira Studio, iyo xirmada MCP ee la daabacay lama ballan qaadayo nooca tan.
- **Tirinta wax kasta.** Waxay u baahan tahay calaamado loo rinjiyeeyay sida ay ku jirtaan legend-ka, calaamad ay ku jirto derbi ama xariiq dheer ayaa laga dhici karaa. Calaamadaha la rogay lama helo, xaashi aan miisaan lahayn oo lagu rinjiyeeyay cabbir kale waxa lagu raadiyaa cabbirka legend-ka. Hubi raadinta xaashiga koowaad ka hor intaadan kuwa kale isku halayn.
- **Kaydka bixiyaha.** Tirooyinka kaydka waxay la mid yihiin faylka aad ku darto oo keliya. Hubinta ma weydiiso bixiye.
- **Luuqadaha.** Tamil app bar-ka wuu dhacaa.

Waxa kale oo dhan waxaa laga akhrin karaa [Weli lama dhisin](topic:not-built-yet). Sii deynta ka horreysa, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).
