---
title: Hibaelhárítás
summary: A TakeoffCraftban előforduló üzenetek és meglepetések tünetei, okai és megoldásai, úgy idézve, ahogy az alkalmazás megjeleníti őket.
keywords: problémák, hibák, nem működik, javítás, súgó, elutasítva, nem mér, nincs léptéke, hiányzó jelek, exportálás sikertelen, offline, érintés
from: cd319c9b
---

A TakeoffCraft a legtöbb elutasítást az ablak alján lévő státuszsorban magyarázza el. Keresse meg az alábbi üzenetet.

## Fájlok megnyitása

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| A PDF-olvasó nem töltődött be. Próbálja újra az oldal újratöltésével. | Az alkalmazás PDF-olvasója nem töltődött be, általában azért, mert offline van, és az alkalmazást nem mentette offline használatra. | Csatlakozzon, majd töltse újra az oldalt. Ezután válassza a {{ui:Save for offline}} lehetőséget, és várja meg az {{ui:Offline ready}} állapotot; lásd [Offline munka](common:offline). |
| (name) jelszóval védett. Nyisson meg egy jelszó nélküli példányt. | A PDF megnyitásához jelszó kell. | Kérjen jelszó nélküli példányt, vagy távolítsa el a jelszót egy megbízható PDF-programban. |
| (name) nem olvasható PDF-ként (…) | A fájl sérült, vagy nem valódi PDF. | Töltse le újra, vagy mentse újra abból a programból, amely készítette. |
| (name) már meg van nyitva. | Ugyanaz a PDF (azonos tartalommal) már meg van nyitva. | Nincs teendő. |
| A TakeoffCraft PDF-eket és .takeoff.json projekteket nyit meg. Kihagyva: … | A többi fájltípust eldobtuk. | Alakítsa előbb PDF-fé a rajzokat. |
| Fájlok húzásakor nem történik semmi | A fájlokat a böngészőablakon kívül húzta, vagy a böngésző új lapon nyitotta meg a PDF-et. | Húzza a TakeoffCraft oldalra; a „PDF-ek vagy .takeoff.json húzása ide” keret mutatja, mikor fog működni. |
| Nagy készlet megnyitása sokáig tart | Minden PDF-et teljes egészében beolvas az egyedi azonosító készítéséhez. | Várja meg, amíg a „(name) megnyitása…” üzenet eltűnik. A bélyegképek görgetéskor töltődnek fel. |

## Mérés

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| Előbb nyisson meg egy PDF-et. | Nincs megnyitott lap. | Nyisson meg egy PDF-et. |
| Ennek a lapnak még nincs léptéke, ezért nem mérhető. Válasszon előbeállított léptéket, vagy előbb kalibráljon (a darabszámlálás léptékszám nélkül is működik). | A vonalas, terület-, kör- és kivágás-eszközöknek léptékre van szükségük. | [Állítsa be a léptéket](topic:set-the-scale). |
| Előbb hozzon létre egy vonalas tételt (nevezze el a Tételek alatt), majd kattintson a lapra. | Nincs ilyen típusú tétel. | Töltse ki a megnyíló {{ui:New item}} űrlapot, és válassza az {{ui:Add}} lehetőséget. |
| Előbb válasszon egy tételt a mennyiségkimutatáshoz (Tételek panel). | Az aktuális tételt törölték. | Kattintson egy tételre a {{ui:Items}} alatt. |
| Egy szakaszhoz legalább két pont kell. | Egy kattintás után fejezte be. | Kattintson legalább két pontra. |
| Egy területhez legalább három pont kell. | Túl kevés sarok. | Kattintson legalább három sarokra. |
| A körvonal keresztezi önmagát, így a területe hibás lenne. Rajzolja újra keresztezés nélkül. | Nyolcas alakzat. | Rajzolja két területként, vagy járja be a szélét sorrendben. |
| Ezek a pontok nem zárnak be területet. | Minden pont egy vonalon van. | Kattintson olyan sarkokra, amelyek teret zárnak be. |
| Előbb jelöljön ki egy területjelet (Kijelölés eszköz), majd válassza a {{ui:Cut-out}} lehetőséget, és rajzolja meg benne a lyukat. | A {{ui:Cut-out}} kijelölt területet igényel. | Nyomja meg a {{key:V}} billentyűt, kattintson a területre, majd nyomja meg a {{key:X}} billentyűt. |
| A kivágásnak teljesen a területen belül kell lennie. | A lyuk keresztezi vagy elhagyja a körvonalat. | Rajzolja a lyukat a területen belülre. |
| A kivágások nem fedhetik egymást. | Két lyuk átfedésben van. | Rajzoljon egy lyukat mindkettő köré, vagy tartsa őket külön. |
| … A pont visszakerült. | Egy húzott sarok keresztezné a körvonalat, vagy egy lyukat kitolna a területről. | Húzza olyan helyre, amely érvényes alakot tart meg. |
| Kattintson a kör szélén egy pontra, a középponttól távol. | A második kattintás túl közel volt a középponthoz. | Kattintson távolabb. |
| A kattintások eltolják a lapot ahelyett, hogy pontot adnának hozzá | A mutató néhány képpontnál jobban elmozdult, miközben a gomb le volt nyomva; ez húzásnak számít. | Kattintson mozgatás nélkül, különösen érintőpadon. |
| A {{key:Shift}} nem fog | Ívpontot helyez el, vagy kört rajzol. | A 45°-os fogás csak az egyenes szakaszokra vonatkozik. |
| A pontok egy közeli vonalra ugranak | A rajz vonalaihoz fogás be van kapcsolva. | Nagyítson rá, hogy a vonalak közé kattinthasson, vagy nyomja meg az {{key:F3}} billentyűt a fogás kikapcsolásához. |
| Nem jelenik meg fogásjelző | A fogás ki van kapcsolva, a lap beszkennelt, vagy az eszköz nem fog (Darabszám, Automatikus darabszám, beillesztés). | Nyomja meg az {{key:F3}} billentyűt; beszkennelt lapon nincsenek fogható vonalak. |
| A hossz hibás | A lépték hibás (gyakran átméretezett PDF előbeállítással). | Használja az {{ui:Check}} lehetőséget egy ismert méreten, majd az {{ui:Calibrate}} lehetőséget. |

## Lépték

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| Válasszon két, egymástól távolabbi pontot. | A kalibrációs pontok szinte egymáson vannak. | Kalibráljon hosszabb méreten. |
| A kalibráló párbeszédpanelben üzenet, például „Ezt a távolságot nem lehetett beolvasni” | A távolság olyan formában van, amelyet a TakeoffCraft nem tud beolvasni. | Lásd [Hossz, egységár és százalék megadása](topic:entry-formats). |
| Ennek a lapnak még nincs léptéke, így nincs mit ellenőrizni. Kalibrálja, vagy válasszon előbeállítást. | Az {{ui:Check}} léptéktelen lapon. | Állítson be előbb léptéket. |
| Az {{ui:Preset}} lista szürke | Nincs megnyitott lap. | Nyisson meg egy PDF-et. |

## Mennyiségek és képletek

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| Hiányos: … (nincs a végösszegben) | Képlethiba, vagy jelek léptéktelen lapokon. | Lásd [Mennyiségek és a költségbecslés olvasása](topic:read-quantities#the-incomplete-warning). |
| +(n) léptéktelen a tétel mellett | Néhány jele léptéktelen lapokon van. | Adjon ezeknek a lapoknak léptéket. |
| Képlethiba: … | A képletet nem lehet kiszámítani. | Lásd [Képletnyelv](topic:formulas#errors). |
| Ennek a tételnek vannak jelei, ezért típusa nem módosítható. | A típus a jelek megléte után zárolódik. | Készítsen új, másik típusú tételt, és rajzolja újra vele a jeleket. |
| A tételnek nevet kell adni. | A névmezőt kiürítették. | Írjon be nevet. |
| Írjon be összeget, például 12.50. / Írjon be százalékot, például 10 vagy 7.5. | Az egységárat vagy a hulladékot nem lehetett beolvasni. | Lásd [Hossz, egységár és százalék megadása](topic:entry-formats). |
| Egy végösszeg duplázódni látszik | A tételnek saját egységárai és összetevői vannak, amelyek ugyanazt a költséget hordozzák. | Állítsa a tétel saját egységárait 0-ra, ha az összetevők hordozzák a költséget. |
| Ennek a tételnek a jelei olyan PDF-eken vannak, amelyek nincsenek megnyitva. | Olyan tételre kattintott, amelynek minden jele nem megnyitott PDF-eken van. | Nyissa meg ezeket a PDF-eket; neveik a {{ui:Sheets}} alatt vannak felsorolva. |

## Automatikus darabszám

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| Ez a keret túl kicsi. Rajzolja a teljes jel köré. | A keret apró. | Nagyítson rá, és keretezze be az egész jelet. |
| Ez a keret szinte üres. Rajzolja egy jel köré. | A keret csak papírt tartalmaz. | Keretezze be magát a jelet. |
| Nincs találat. Húzza lejjebb az {{ui:Match}} csúszkát, vagy keretezze szorosabban a jelet. | Semmi sem ért el elég magas pontszámot. | Keretezze szorosan a jelet, vagy húzza lejjebb a {{ui:Match}} csúszkát. |
| Túl sok találat, köztük hibás jelek | A hasonló jelek pontszáma közel van a valódihoz. | Húzza feljebb a {{ui:Match}} csúszkát, és kattintson a hibás keretekre az elutasításhoz. |
| Hiányzó találatok más lapokon | Ezeken a lapokon a jel más méretben vagy 90°-os lépésen kívül eső szögben van rajzolva. | Keressen ezekben a lapokon úgy, hogy ott rajzol egy keretet, vagy számolja meg kézzel. |
| (n) lap túl nagy volt a keresés ezen a jelméreten. | A lap a munkaméretnél túl nagy lenne. | Keretezzen nagyobb jelet, vagy számolja meg azt a lapot kézzel. |
| A keresés sikertelen: … | A háttérkeresés leállt. | Próbálja újra; ha megismétlődik, töltse újra az oldalt (előbb mentsen). Offline csak akkor működik, ha az alkalmazássáv megjeleníti az {{ui:Offline ready}} állapotot. |
| Húzás keretet rajzol ahelyett, hogy eltolná | Így működik az {{ui:Auto count}}. | Tartsa lenyomva a {{key:Space}} billentyűt és húzzon, vagy húzzon a középső gombbal. |

## Mentés és exportálás

| Üzenet vagy tünet | Ok | Megoldás |
|---|---|---|
| Még nincs mit exportálni: hozzon létre egy tételt, és mennyiségezze fel. | Nincsenek tételek. | Hozzon létre először egy tételt. |
| A megnyitott PDF-eken még nincs jel. | A {{ui:Marked PDF}} nem tud mit rárajzolni a megnyitott PDF-ekre. | Nyissa meg a jelekkel rendelkező PDF-eket. |
| Ez a PDF jelszóval védett vagy titkosított, ezért jelölt példány nem írható. … | A PDF titkosított. | Exportálja inkább az {{ui:XLSX}} formátumot, vagy használja a PDF titkosítatlan példányát (ennek saját mennyiségkimutatása kell legyen, mert más fájl). |
| A jelölt PDF nem írható: … | Gyakran: offline van, és az alkalmazást nem mentette offline használatra, így hiányzik a PDF-író. | Kapcsolódjon az internetre, és válassza újra a {{ui:Marked PDF}} lehetőséget. Ennek elkerülésére válassza a {{ui:Save for offline}} lehetőséget, és várja meg az {{ui:Offline ready}} állapotot. |
| Csak egy jelölt PDF töltődött le | A böngésző több letöltést egyszerre blokkolt. | Engedélyezze a több letöltést ennek a webhelynek, és exportáljon újra. |
| (file) nem TakeoffCraft-projekt (nem érvényes JSON). / Ez nem TakeoffCraft-projektfájl. | Rossz fájl, vagy sérült. | Válassza a `.takeoff.json` fájlt. |
| Ezt a projektet újabb TakeoffCraft mentette. Nyissa meg ott. | A fájl újabb verzióból származik. | Nyissa meg az újabb verzióban. |
| (n) jel sérült, és kimaradt. | A fájl egy része sérült, vagy kézzel szerkesztették. | A többi megnyílt. Rajzolja újra a hiányzó jeleket, vagy nyisson meg egy régebbi példányt. |
| Újranyitás után hiányoznak a jelek | A PDF-ek nincsenek megnyitva, vagy valamelyikük megváltozott. | Lásd [Mennyiségkimutatás mentése és újranyitása](topic:save-and-reopen#when-a-pdf-has-changed). |
| A böngésző rákérdez: „Elhagyja az oldalt?” | Vannak nem mentett módosítások. | Maradjon, és mentsen a {{key:Mod+S}} billentyűvel. |

## Billentyűk és egér

| Tünet | Ok | Megoldás |
|---|---|---|
| A betűbillentyűk nem tesznek semmit | A kurzor egy mezőben van (keresés, tételszerkesztő, táblázat). | Kattintson a lapra, vagy nyomja meg a {{key:Tab}} billentyűt a mezőből kilépéshez. |
| A görgő nagyít görgetés helyett | A görgő mindig nagyítja a lapot. | Húzással mozgassa a lapot. |
| Az egész oldal nagyobb vagy kisebb lett | A böngészőnagyítás ({{key:Mod+Plus}} vagy {{key:Mod+Minus}}). | Nyomja meg a {{key:Mod+0}} billentyűt. A lapot a görgővel vagy a sima {{key:Plus}} és {{key:Minus}} billentyűkkel nagyítsa. |
| Egy jel eltűnt a Backspace megnyomásakor | A Backspace törli a kijelölt jelet, ha nem rajzol. | A {{key:Mod+Z}} visszahozza. |
| Mac-en a jobb klikk nem fejezi be | A Control-kattintás normál kattintásként érkezik. | Használjon kétujjas kattintást a másodlagos kattintás bekapcsolásával, vagy nyomja meg az {{key:Enter}} billentyűt. |

## Érintőképernyők

Érintőképernyőn:

- **Koppintás** pontot helyez el (vagy jelet választ ki a {{ui:Select}} eszközzel). Egy ujjal húzva eltol.
- **Két ujj** csippentéssel nagyít a köztük lévő pont körül, és együtt mozgatva eltol. Ha a második ujjat leteszi, az első által kezdett művelet megszakad, így csippentés soha nem hagy pontot.
- **Befejezés** szakaszt vagy körvonalat hosszú nyomással (a jobb klikk megfelelője), dupla koppintással vagy a lap alján lévő sávban lévő {{ui:Finish}} gombbal. Ugyanebben a sávban van a {{ui:Back}} (az utolsó pont visszavétele) és a {{ui:Cancel}}. A területek az első pontra koppintással is záródnak.
- Az ujjaknak nagyobb célterület jut: a pontok messzebbről fogódnak, záródnak és választódnak ki, a sarokfogantyúk pedig nagyobbak.

A hosszúságok beírásához billentyűzet kell; a képernyős billentyűzet akkor működik, ha a {{ui:Type}} mező fókuszban van.

Tableten a billentyűzet és egér vagy érintőpad sokkal könnyebbé teszi a mennyiségkimutatást.

## Offline munka

| Gomb vagy tünet | Ok | Megoldás |
|---|---|---|
| {{ui:Could not save}} | Az alkalmazás néhány fájlja nem töltődött le az offline használatra mentés közben. | Ellenőrizze a kapcsolatot, és válassza újra a gombot. |
| {{ui:Offline not available}} | A privát ablakok és néhány felügyelt számítógép blokkolja az offline másolatokat. | Használjon normál ablakot, vagy másik böngészőt. |
| A „Mentés…” sosem indul | Offline van; a mentéshez kapcsolat kell. | Mentsen online állapotban. |
| Frissítés után az alkalmazás régi | Az offline másolat egy korábbi napról való. | Online állapotban válassza az {{ui:Offline ready}}, majd a {{ui:Save again (get the newest version)}} lehetőséget. |
| Vissza szeretné a helyet | Az offline másolat körülbelül 6 MB. | Válassza az {{ui:Offline ready}}, majd a {{ui:Remove the offline copy}} lehetőséget. |

Lásd [Offline munka](common:offline).

## Még mindig elakadt

Töltse újra az oldalt, ha az alkalmazás nem reagál. Újratöltéskor a mennyiségkimutatása elvész, hacsak nem mentette, ezért ha lehet, előbb mentsen a {{key:Mod+S}} billentyűvel. Böngészőkérdésekhez lásd [Böngészők és számítógépek](common:browsers).
