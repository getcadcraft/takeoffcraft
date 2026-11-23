---
title: Waxa cusub ee 0.9 (hore)
summary: Akhri dherarka mitir, sentimitir ama millimitir, bal-ballaca m2 ee metric oo leh balaadhinta darbiga, cabbirrada miisaanka 1:75 iyo 1:150, unit-yada culeyska iyo heerkulka, Qaanso oo leh toban habood, iyo cursor-yada nool, Raac iyo liiska dadka.
keywords: waxa cusub 0.9, nooca hore, waxa cusub, what's new, sheekada siidaynta, changelog, 0.9, show lengths as, mitir, sentimitir, millimitir, metric, follow global, units, display units, m2, mitir laba jibbaaran, balaadhinta darbiga, cabbirrada miisaanka, 1:75, 1:150, culeyska, kilogram, kg, tonne, ton, lb, heerkulka, celsius, fahrenheit, arc, habooyinka qaansada, 3-point arc, radius, live, cursor-yada, raac, liiska dadka, class, tooltips, layout, waxa cusub, changelog, isbeddel, 0.8, 0.8.1, nooca, astaamaha cusub, tiri wax kasta, legend, calaamadda sharaxaadda, set-ka oo dhan, xusuusta qiimaha, shuqullada hore, shuqulkii ugu dambeeyay, qiimaha caadiga, bixiye, kaydka, waqtiga sugidda, backorder, liiska dalabka, yaraan, panelka dhibaatooyinka, caawiye, luuqadaha, aaladaha gelinta, safafka qalabka, dwg
from: f4322ba2
---

Tani waa waxa isbeddelay TakeoffCraft 0.9, marka la barbar dhigo 0.8.1. Waa sii deyn yar oo barnaamijkan: dherarka hadda waxaa laga akhrin karaa mitir, sentimitir ama millimitir, cabbirrada iyo miisaanada metric-ka si sax ah ayay u raacaan shuqullada, Qaanso waxa ay leedahay toban habood oo lagu sawiro. Kulamada tooska ah waxa kale oo ay muujiyaan qofka halka uu joogo.

## Cusub

### Akhri dherarka mitir, sentimitir ama millimitir

- **Muuji dherarka sida.** {{ui:Settings}} › {{ui:TakeoffCraft}} waxa ku jira {{ui:Show lengths as}} oo leh {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm iyo mm. {{ui:Follow Global}} wuxuu isticmaalaa unit-ka dherarka metric-ka ee aad ku calaamadisay {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, haddii aan wax la calaamadin tahayna feet-inches. Wuxuu beddelaa sida dherarku u akhriyo xaashida, status bar-ka iyo panelada, oo ay ku jiraan dherarka, qotada, dhumucda iyo heerarka. Lambar aan lahayn oo lagu qoro goobta dherarka waxaa loo akhriyaa unit-ka la muujiyay.
- **Muuqaal keliya.** Tirooyinka, kharashyada iyo dhoofinta waxaa laga xisaabiyaa dherarka saxda ah. Doorashada 1/16, 1/8 iyo 1/4 inch waxay soo muuqataa feet-inches oo keliya. Eeg [Muuji dherarka mitir](topic:show-lengths-in-meters).
- **Unit-yada culeyska.** Shay {{ui:Typed quantity (no drawing)}} hadda waxa uu noqon karaa lb, TON, kg ama t, oo lagu qiimayn karo unit kasta.
- **Heerkulka.** Shay kasta waxa ku jira goob ikhtiyaari ah oo {{ui:Temperature}} ah oo ku jirta tafatiraha shayga, oo lagu qoro darajooyinka C ama F. {{ui:Show temperatures as}} ee {{ui:Settings}} › {{ui:TakeoffCraft}} wuxuu bixiyaa {{ui:Follow Global}}, °C ama °F.

### Cabbirrada iyo miisaanada shuqullada metric-ka

- **Aagga m2 xaashida.** Aag lagu cabbiray shay metric ah hadda waxa uu ku qoran yahay m2 calaamadda xaashida iyo panelka calaamadaha, iyo sidoo kale miiska, halkii uu ka ahaan lahaa SF. Xeerku waa m2 haddii shayga qiimaha metric lagu qoro ama dherarka lagu muujiyo m, cm ama mm, iyo SF haddii kale.
- **Aagga darbiga.** Shay toosan oo leh dherer iyo joog ayaa sidoo kale muujinaya aagga darbiga (dherer × joog) liiska Shayada iyo safka qoraal ee hoosta miiska tirada sida shayga.
- **Cabbirrada miisaanka 1:75 iyo 1:150.** Waxay ku jiraan liiska {{ui:Preset}} ee kooxda {{ui:Scale}}, oo hadda leh 32 miisaan. Eeg [Cabbirrada miisaanka](topic:scale-presets).

### Qaanso oo leh toban habood

- Inta {{ui:Arc}} la shido (badhanka qalabka ama {{key:R}}), sanduuq {{ui:Arc method}} ayaa ka soo muuqda safka xaashida: 3-Barood, Bilow, Dhexe, Dhammaad, Bilow, Dhexe, Xagal, Bilow, Dhexe, Dherer, Bilow, Dhammaad, Xagal, Bilow, Dhammaad, Jihada, Bilow, Dhammaad, Gacan, Dhexe, Bilow, Dhammaad, Dhexe, Bilow, Xagal iyo Dhexe, Bilow, Dherer. Xagal, dherer, gacan iyo jihada waa la riixi karaa ama la qori karaa. Waxay ka shaqeysaa safafka xariiqda, aagagga iyo jarista. Faylasha la kaydiyay ka hor 0.9 si isku mid ah ayay u furmaan. Eeg [Qaanso oo leh toban habood](topic:draw-arcs-ten-methods).

### Wada shaqaynta

- **Ogow cursor-yada kale.** Kulan tooska ah ku jira, mooshinka qof kasta wuxuu ka muuqdaa xaashida magaciisa iyo midabkiisa, calaamadaha uu xulay waxaa lagu hareeyay sanduuq jajab ah. Dadka ku jira xaashi kale waxaa lagu liisanayaa magaca xaashidaas. Eeg [Shaqee tooska ah dadka kale](topic:work-live).
- **Raac qof, iyo liiska dadka.** Badhanka {{ui:People}} ee kulan tooska ah wuxuu liisanayaa qof kasta qalabka uu shaqeynayo, xaashida uu ku jiro iyo waqtigii ugu dambeeyay ee uu wax ka beddelay. {{ui:Follow}} wuxuu aragtidaada la socodsiiyaa kan kaaga, martiqaadaha ayaa isticmaali kara {{ui:Ask everyone to follow me}}. Eeg [Raac saaxiib kulan tooska ah](topic:follow-a-teammate).

## Dhammaan barnaamijyada

- **Tooltips iyo tilmaamaha bilowga.** Qoraalka hoose ee mooshinka waa tooltip Bootstrap, tilmaamaha bilowgana way xidhi kartaa.
- **Liisaska tab-ka ee la dhaadhiciyo.** Liiska tab-ka panelka oo aan ku habboonayn wuu dhaadhicaa halkii uu ka jari lahaa.
- **Cinwaanada tab-ka.** Tab-ka browser-ka wuxuu akhrinayaa `<document> - TakeoffCraft | CadCraft`.
- **Qaabka.** Liiska qaabka ku jira {{ui:Settings}} waa liis hoos u dhacda oo muujinaya qaabka la doortay.
- **Luuqadda.** Luuqadda aad doorato hadda waxay gaaraysaa erayada bogga qoro laftiisa, sida Cusub, Furan iyo Kaydi. Luuqadaha aan Ingiriisi ahayn waa qabyo otomaatig ah ilaa uu akhriyo qof af-hooyo ah.

## Xaddidaadaha runta ah

- Muuqaalka dherarka, unit-yada culeyska iyo heerkulka iyo cabbirrada cusub waxaa lagu hubiyay tijaabooyin iyo bogga. Dhammaan panelada unit kasta gacanta lagama hubin.
- Liiska dadka lama hubin gacanta iyadoo la isticmaalayo fasal dhab ah oo macallimiin iyo ardayd.
- Luuqadaha aan Ingiriisi ahayn waa qabyo otomaatig ah.
- Rakibayaasha Windows lama saxeexin code-ka (More info, kadibna Run anyway). Sawirka diskta macOS lama soo dhaqdhaqaajin (midig-guji, kadibna {{ui:Open}}).

## Hore: 0.8 iyo 0.8.1

Tani waa waxa isbeddelay TakeoffCraft 0.8 (la sii daayay 2026-11-01) iyo 0.8.1 (2026-11-02), marka la barbar dhigo 0.7. Hadda calaamadda sharaxaadda waxaa laga tiri karaa set-ka oo dhan hal mar, shuqul cusub waxaa laga bilaabi karaa qiimayaasha shuqullada hore, tirinta waxaa laga hubin karaa kaydka bixiyaha. 0.8.1 waa sii deyn hagaajin ah.

### Cusub

**Tiri wax kasta oo ku jira set-ka**

- **Sanduuq sharaxaadda hal mar.** {{ui:Count everything}} ee qalabka wuxuu akhrinayaa calaamadda sharaxaadda: sanduuq ku hareeyso calaamadaha iyo magacyada lagu qoray dhinacooda. Calaamad kasta waxaa lagu liisanayaa sawirkeeda iyo magaceeda, magacuna wuxuu noqonayaa magaca shayga. Ka saar wixii aanad doonayn, kadibna dooro {{ui:Count on N sheets}}. Bar muujinaya xaashida la baarayo ayaa soo muuqda, {{ui:Cancel}} wuxuu joojiyaa socodka, bogguna wuu sii shaqeynayaa.
- **Xaashida oo dhan hal socod.** Calaamad kasta waxaa lagu tiraa xaashida furan oo kasta. Xaashi lagu sawiray miisaan kale waxaa lagu baadhaa miisaankaas, calaamadaha waxaa laga heli karaa iyadoo la leexinayo xagal kasta oo xagal sax ah. Calaamadaha sharaxaadda naftooda xaashidooda lagama tirin.
- **Dib u eeg ka hor intaan wax lagu darin.** Wadar kasta waxa uu leeyahay xiriir xaashi kasta ("E-103: 4") oo u gudba xaashidaas. Guji sanduuq helitaan si aad uga saartid, mar kale guji si aad dib ugu celiso. Heerka isku mid ah (50% ilaa 100%) wuxuu kaliya shaandheeyaa waxa la helay; waxba dib looma baadho.
- **Hal tallaabo oo dib u celin.** {{ui:Ku dar N calaamad}} wuxuu sameeyaa shay tiro ah oo mid kasta calaamad ku leh helitaan kasta. Magac hore oo ah shay tiro oo aad leedahay ayaa dib loo isticmaalaa. {{key:Ctrl+Z}} wuxuu dib u celinayaa dhammaan shayada iyo calaamadaha. Waxa aad aqbasho waxaa sidoo kale lagu darayaa {{ui:Learned}}.
- **Calaamadaha xagal kasta.** Calaamadda {{ui:Symbols at any angle}} ka hor tirinta si aad u hesho calaamadaha laga leexiyay xagal aan xagal sax ahayn. Baadhistu markaas calaamad kasta waxay leexisaa 15 darajo kasta, calaamad aan wareeg ahayn waxay qaadan kartaa ilaa lix jeer wakhti dheer.
- **Waa maxay.** Isbarbardhigga calaamadaha caadiga ah ee xaashidaada, iyadoo aan lahayn model la tababaray, waxna kama baxo kombiyuutarkaaga. Set ka mid ah 200 xaashi oo la sameeyay wuxuu qaatay 9.4 ilbiriqsi oo Chrome ah desktop degdeg ah; set-yada dhabta ah way ka gaabiyaan. Eeg [Tiri wax kasta set-ka](topic:count-everything).

**Xusuusta qiimaha shuqullada hore**

- **TakeoffCraft wuu xasuustaa qiimayaashaada.** Markaad tirin kaydiso, shay kasta oo qiimo leh oo la isticmaalay waxaa lagu xasuustaa magac iyo nooc: qiimaha agabka, qiimaha shaqada, waste iyo unit. Shuqullada ugu dambeeya 12 ayaa magac kasta loo kaydiyaa. Waxaa lagu kaydiyaa kombiyuutarkan dhinaca maktabadda qiimaha, weligeedna kuma jirto faylka tirinta, mana loo diro meel kasta.
- **Shuqul cusub ka bilow.** {{ui:Prices}} ee qalabka wuxuu muujinayaa, shay kasta, qiimayaasha shuqulkii ugu dambeeyay, qiimayaasha caadiga ah iyo kala duwanaanshaha. {{ui:Use last}} ama {{ui:Use typical}} waxay qiimeysaa hal shay, {{ui:Ku qiimee N shay oo aan qiimo lahayn xasuusta ka qor}} wuxuu buuxiyaa shay kasta oo weli qiimo lahayn. Isticmaal kasta waa hal tallaabo oo dib u celin.
- **Shuqullada hore.** {{ui:Ka bar tirin hore…}} wuxuu xasuustaa shayada qiimaysan ee tirin kaydsan (.json).
- **Eeg, beddel, ilow.** {{ui:Wax walba oo xusuusan}} wuxuu liisanayaa magac kasta; badhanka qashinka wuxuu ilaawinayaa hal magac, {{ui:Clear all prices}} wuxuu ilaawinayaa dhammaan. Demi {{ui:Remember my prices when I save a takeoff}} si aad u joojiso. Qiimaha halkii "each" lama dhigo shay lagu qiyaaso halkii foot. Eeg [Xusuusta qiimaha shuqullada hore](topic:price-memory).

**Kaydka bixiyaha iyo waqtiga sugidda**

- **Hubi liiska bixiyaha.** {{ui:Supply}} ee qalabka wuxuu qaataa liiska kaydka bixiyaha ({{ui:Add a supplier file…}}), CSV ama spreadsheet, wuxuuna hubiyaa waxa tirintu u baahan tahay, oo leh waste, marka la barbar dhigo. Ilaa shan fayl ayaa la kaydiyaa. Waxba lama diro, mana weydiiso bixiye: adigu fayl keena.
- **Waxa uu sheegayo.** Shayada gaaban ayaa hore u yimaadda: "Ka yar 120 EA", "Waqtiga sugidda 21 maalmood", "Dalab dib u dhac ah", "Unit-ku way kala duwan", "Tiro kayd ma jiro" ama "Kayd ku jira". {{ui:Longest wait wanted (days)}} wuxuu bilaabmaa 14.
- **Liiska dalabka.** {{ui:Order list (CSV)}} wuxuu soo dejiyaa shayada gaaban iyo tirada ka yar, bixiyaha iyo waqtiga sugidda.
- **Qiimayaasha ku jira Maktabadda.** Haddii faylku leeyahay qiimayaal, {{ui:Prices into the Library}} wuxuu dejinayaa qiimaha agabka ee mid kasta oo Maktabadda ah oo magac iyo unit isku mid ah leh. Dib u qiimee Maktabadda si aad ugu soo qaaddo tirinta.
- **Panelka dhibaatooyinka.** Yaraanta waa digniin, sugidda dheer waa qoraal, waxaana lagu arkaa "Kaydka bixiyaha" hoosteeda. Mid waad aqbali kartaa sabab la siiyo, sababtaasna waxaa lagu kaydiyaa tirinta. Eeg [Hubi kaydka bixiyaha iyo waqtiga sugidda](topic:supplier-stock).

**Caawiyeyaasha AI**

- **Qalabka saddexda dhammaan.** Markaad ogolaatay caawiyayaasha {{ui:Settings}} gudihiisa, caawiye wuxuu akhrin karaa calaamadda sharaxaadda (`legend_open`), wuxuu socodsiin karaa tirinta (`legend_count_start`, kadibna `legend_count_status` iyo `legend_count_result`) wuxuuna ku daraa (`legend_count_add`, oo horta hore u muuqaali karaa). Wuxuu akhrin karaa qiimayaasha la xasuusto (`prices_list`) wuxuuna shayada ka qiimeyn karaa (`prices_apply`, oo horta hore u muuqaali karaa), wuxuuna akhrin karaa hubinta bixiyaha (`supply_check`). Ku darista faylka bixiyaha adiga ayaa leh. Eeg [Isticmaal TakeoffCraft caawiyayaasha AI](topic:use-with-ai-assistants).

**Dhammaan barnaamijyada**

- **Luuqadaha.** Shan iyo konton luuqadood oo dhan; toban ayaa cusub (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili iyo Uzbek). Luuqadaha aan Ingiriisi ahayn waa qabyo otomaatig ah ilaa uu akhriyo qof af-hooyo ah.
- **Aaladaha gelinta.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} wuxuu dejiyaa waxa trackpad, badhamada dhinaca mouse-ka, qalinka, mouse 3D, gacan-ku-hayn ciyaar ama kontoroolka MIDI uu sameeyo, barnaamij kasta ama mid keliya. Eeg [Isticmaal trackpad, mouse 3D ama kontoroolka](common:input-devices).
- **Safafka qalabka.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wuxuu bixiyaa {{ui:Wrap}} (bilowga), {{ui:2 rows}} iyo {{ui:1 row}}; kooxaha aan ku habboonayn way u dhaadhicaan dhinac. Eeg [Habee panelada](common:arrange-panels).
- **Panelka dhibaatooyinka.** Panelka la wadaago ee digniinta iyo qoraalada hadda wuxuu leeyahay hubinta kaydka bixiyaha ee kor ku xusan, dhinaca hubinnada kale.
- **Add-ons.** Add-ons waxay raacaan liiska akoonkaaga. Eeg [Add-ons iyo liiska akoonkaaga](common:addons-basics).
- **Ku xidh AI-gaaga.** CadCraft Studio waa xarunta: ku xidh caawiyahaaga mar keliya dhammaan siddeedda barnaamij. Studio ma lahan AI u gaar ah.

### Hagaaji 0.8.1

- **Qaybta classes ee DWG.** Qaybta classes ee faylka DWG waxaa lagu akhriyay nooc qaldan. Taas waa la hagaajiyay TakeoffCraft iyo afar barnaamij oo kale.
- **Studio wuxuu beddeli karaa luuqadda intuu shaqeynayo.** Hore Studio iyo nooca lagu rakibo wuxuu ahaa Ingiriisi oo keliya. Tan lama tijaabin desktop-ka dhammaan nidaamyada; noo sheeg haddii luuqaddu ku beddelmin.

### Weli nooca hadda kuma jirto

- **Lama saxeexin code-ka.** Windows waxay digi kartaa, Mac-ka midig-guji oo dooro {{ui:Open}} markii ugu horreysay. Dukaamada dhismaha (Microsoft Store, Google Play, App Store) waa la joojiyay, dhismaha iPad iyo iPhone lama dib-u-dhisin 0.8.1.
- **Cusboonaysiinta Studio.** Rakibaha Windows iyo xirmooyinka Linux mar maalinkiiba ayay hubiyaan, marka hore waxay weydiiyaan. Zip-ka sahlan wuxuu kaliya kuu sheegaa, macOS iyo APK iskuma cusboonaysiiyaan. macOS .dmg 0.8 wuu raacayaa sii deynta.
- **Ku xidh AI-gaaga.** Ku xidhka hal-riix gudaha Studio, connector-ka martida ee AI-ga browser-ka, furaha API-gaaga gudaha Studio iyo xirmada MCP ee la daabacay lama ballan qaadin nooca kan.
- **Tiri wax kasta.** Waxay u baahan tahay calaamado la sawiray sida ku jira sharaxaadda, calaamad leh darbi ama xariiq dheer oo ku dhex marta ayaa lumi karta. Calaamado muraayad ah lama helo, xaashi aan miisaan lahayn oo lagu sawiray cabbir kale waxaa lagu baadhaa cabbirka sharaxaadda. Hubi natiijooyinka xaashida koowaad ka hor intaadan kuwa kale isku kalsoonaan.
- **Kaydka bixiyaha.** Tirooyinka kaydka waxay sax yihiin sida faylka aad ku darto ee casriga ah. Hubintu weligeed ma weydiiso bixiye.
- **Luuqadaha.** Sadarka sare ee Tamil wuu dhaafaa.

Wax kale waxaa ku jira [Wali lama dhisin](topic:not-built-yet). Nooca ka horreeya, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).
