---
title: TakeoffCraft használata AI-asszisztenssel
summary: Hagyja, hogy a saját AI-asszisztense vagy szkriptje olvassa a mennyiségkimutatás mennyiségeit és költségvetését, tételeket és jelöléseket adjon hozzá, darabszámot számoljon és mérjen DWG vagy DXF rajzon, és exportáljon: jogosultságok, csatlakozás a CadCraft Studio-n keresztül és a tevékenységnapló.
keywords: ai, asszisztens, ügynök, mcp, model context protocol, szkript, automatizálás, mennyiségek, költségvetés, jogosultságok, leválasztás, tevékenység
from: 7fa62ec6
---

## Mit fog megtanulni

Hogyan engedheti meg, hogy egy AI-asszisztens (vagy az Ön által írt szkript) dolgozzon a TakeoffCraft-tal, és hogyan döntheti el, mihez nyúlhat.

A TakeoffCraft **nem rendelkezik saját AI-val**, és semmit sem küld sehova. Az asszisztenst Ön hozza: bármely olyan programot, amely beszéli a Model Context Protocol (MCP) nyelvet. A TakeoffCraft csak eszközöket ad neki, Ön választja ki, melyeket.

## Bekapcsolás

1. Nyissa meg a {{ui:Beállítások}} menüt (a fogaskerék az alkalmazássávban, vagy {{key:Mod+,}}), és lépjen a {{ui:TakeoffCraft}} lapra.
2. Az {{ui:Asszisztensek}} alatt jelölje be a **AI-asszisztensek és szkriptek használhatják a TakeoffCraftot** lehetőséget. Addig ki van kapcsolva, amíg ezt nem teszi.
3. Válassza ki, mit tehet: az **Olvasás** kezdetben be van jelölve; a **Szerkesztés**, a **Mentés** vagy az **Exportálás** lehetőséget csak akkor jelölje be, ha szüksége van rájuk.

A bejelölt jogosultságokon kívül eső eszközök nem jelennek meg az asszisztens számára. Ha mégis kéri valamelyiket, a TakeoffCraft elutasítja, és ezt bejegyzi a tevékenységnaplóba. A kapcsoló kikapcsolásával egyszerre megszűnik minden kapcsolat; a {{ui:A TakeoffCraft beállításainak visszaállítása}} szintén kikapcsolja.

## Asszisztens csatlakoztatása

Az asszisztensek a számítógépén futó **CadCraft Studio**-n keresztül kapcsolódnak: a Studio egy kis kiszolgálót futtat, amelyet csak ez a számítógép érhet el, és amelyet minden indításkor újonnan generált token véd. A Studióban válassza az {{ui:Asszisztens csatlakoztatása}} lehetőséget, és másolja be a címet és a tokent az asszisztensbe (a Studio megmutatja a pontos beállításokat). A tokent soha ne ossza meg.

:::note
Egy böngészőlap nem tud kapcsolatot nyitni egy asszisztens számára: a böngészős alkalmazásokban a kapcsoló addig nem hat, amíg nem használja a számítógépén futó CadCraft Studio-t.
:::

## Ön irányít

- **Minden módosítás egy visszavonási lépés**, az asszisztens nevével megjelölve (például „Asszisztens: …”). A {{key:Mod+Z}} az asszisztens utolsó módosítását egészben visszavonja.
- **Tudja, ha van csatlakoztatott asszisztens.** Az alkalmazássáv egy gombja megnevezi az asszisztenst, amíg csatlakozik; kattintson rá, hogy lássa, mit tehet, vagy hogy a **Leválasztás** gombbal bontsa a kapcsolatot.
- **Tevékenység.** A {{ui:Beállítások}} › {{ui:TakeoffCraft}} › {{ui:Asszisztensek}} › {{ui:Tevékenység}} listáz minden hívást: mikor történt, melyik eszköz, és sikerült-e vagy elutasították. A {{ui:A napló mentése}} másolatot készít.

## Mit kérhet egy asszisztens

| Eszköz | Jogosultság | Mit csinál |
|---|---|---|
| `app_info`, `sheets_list` | Olvasás | A megnyitott mennyiségkimutatás, a PDF-jei és a lapjai, laponként a méretarány és a jelölések |
| `items_list` | Olvasás | A tételek a mértékegységeikkel, egységáraikkal és az összetett tételek képleteivel |
| `takeoff_quantities` | Olvasás | Mennyiségek tételenként vagy laponként; a méretarány nélküli lapok jelöléseit felsorolja, soha nem számolja nullának |
| `takeoff_estimate` | Olvasás | A TakeoffCraft által kiszámolt árazott költségvetés az összegeivel |
| `takeoff_export` | Exportálás | A TakeoffCraft saját CSV- vagy XLSX-exportja |
| `items_add` | Szerkesztés | Tételeket ad hozzá a mértékegységükkel, egységáraikkal és hulladékukkal |
| `marks_add` | Szerkesztés | Futóhosszakat, területeket és darabszámokat mér egy lapon. Hossz és terület csak méretarányos lapon, soha méretarány nélküli lapon |
| `cad_sheets`, `cad_catalog`, `cad_count` | Olvasás | Egy megnyitott DWG vagy DXF fájlon: a lapjai és azok méretarányai, az, ami megszámolható (blokkok, rétegek és típusok, szövegek), és a pontos darabszámok, ahogy a {{ui:CAD darabszám}} készíti ([Darabszámlálás rajzból](topic:count-from-a-drawing)) |
| `cad_count_add` | Szerkesztés | Megszámolja a rajzon belül, és minden talált objektumra darabszám-jelölést tesz egy lépésben; az újbóli számlálás csak az újakat adja hozzá |
| `cad_measure` | Szerkesztés | Egy lineáris vagy területi tételt mér a rajz saját vonalaiból, íveiből, polivonalaiból és sraffozásaiból, ahogy a {{ui:Rajz mérése}} teszi ([Mérés rajzról](topic:measure-from-a-drawing)); csak méretarányos lapon |
| `usd_export` | Exportálás | Egy méretarányos lap mért futóhosszait, területeit és darabszámait 3D-s ellenőrző modellként, USD-formátumban (`.usdz`, `.usda` vagy `.usdc`), ahogy a 3D-s ellenőrző nézet {{ui:USD csomag (.usdz)}} gombja írja ([A 3D-s ellenőrző nézet exportálása USD-ként](topic:usd)) |

A **Szerkesztés** bejelölésével az asszisztens tételeket és jelöléseket ad hozzá (minden hívás egy visszavonási lépés); a már meglévő jelöléseket nem tudja áthelyezni, megváltoztatni vagy törölni.

Ugyanezek a mennyiségek és a költségvetés elérhetők a TakeoffCraft megnyitása nélkül is: a CadCraft MCP-kiszolgáló megnyit egy `.takeoff.json` fájlt az Ön által megnevezett mappában (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), a `cadcraft info Job.takeoff.json` parancs pedig kiírja őket a parancssorba. Egy DWG vagy DXF fájlt is megnyit új mennyiségkimutatásként a lapjaival (a méretarányt a rajzból veszi, ahogy a TakeoffCraft is), ugyanazokkal a `cad_*` eszközökkel számol és mér rajta, tételeket ad hozzá, és menti a mennyiségkimutatást (`takeoff_save`). A `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` parancs parancssorból számol.

## Ha valami nem működik

- **Az asszisztens nem lát TakeoffCraft-eszközöket:** ellenőrizze, hogy a kapcsoló be van-e kapcsolva ebben az ablakban, és hogy az ablak nyitva van-e a Studióban.
- **„needs the export permission”:** jelölje be az **Exportálás** lehetőséget az {{ui:Asszisztensek}} alatt, majd kérje újra.
- **„401” vagy „token” hibák:** a token megváltozott (a Studio újraindult, vagy az {{ui:Új token}} gombot használták). Másolja be az új tokent az asszisztens beállításaiba.

## Lásd még

- [Receptek AI-asszisztensekhez](common:assistants-recipes): kidolgozott példák, mindegyik a hozzá tartozó eszközökkel.
