---
title: Szakági csomagok
summary: Ingyenes, szakágankénti összetevők hozzáadása az árkönyvtárához, eltávolításuk egy lépésben, és a saját könyvtár megosztása csomagként.
keywords: szakági csomag, csomag, összetevők, sablonok, kezdő tételek, elektromos, gipszkarton, vázszerkezet, festés, beton, padló, falazat, tetőfedés, burkolat, ácsmunka, vízvezeték, HVAC, szigetelés, tájépítés, teraszburkolat, főkivitelező, CSI, MasterFormat, CC0, hozzáadás, eltávolítás, megosztás
from: d3c036be
---

A **szakági csomag** egy szakma egy csoportjának kész tételkészlete: mindegyiknek megvan a mértékegysége, a magassága vagy mélysége, a hulladéka és az **összetevője**, vagyis azok az alkatrészek és képletek, amelyek a mért futóhosszt, területet vagy darabszámot anyaggá alakítják. Egy gipszkarton fal például a saját profiljait, bordáit, lapjait, csavarjait, ragasztószalagját és glettjét hozza magával.

A csomagok az [árkönyvtárához](topic:price-library) adódnak, onnan pedig bármelyik mennyiségkimutatáshoz hozzáadhatja a tételeiket.

## Csomag hozzáadása

1. Nyissa meg a {{ui:Items}} panel tetején lévő {{ui:Library}} lehetőséget, majd a {{ui:Trade packs…}} lehetőséget.
2. Válassza ki a {{ui:Units}} beállítást: angolszász (LF, SF), metrikus (m, m²) vagy mindkettő. Minden összetevő mindkét rendszerben elérhető.
3. Válassza a csomag melletti {{ui:Add}} gombot.

A csomag tételei megjelennek a könyvtárban, a csomag nevével megjelölve. Használatukhoz jelölje be őket a könyvtárban, és válassza a {{ui:Add to takeoff}} lehetőséget.

:::note
**A csomag nem tartalmaz árat.** A tételei a könyvtárban a „set your rate” (adja meg az egységárat) feliratot mutatják. Az egységárakat Ön adja meg: írja be a könyvtárban vagy a tételszerkesztőben, vagy importálja az árlistáját CSV-ként, és használja az {{ui:Update prices}} lehetőséget.
:::

Ha már van azonos nevű és típusú tétele a könyvtárban, a csomag nem írja felül az Öné. Egy csomag újbóli hozzáadása a saját tételeit az új verzióval helyettesíti.

## Csomag eltávolítása

A {{ui:Trade packs…}} ablakban válassza a hozzáadott csomag melletti {{ui:Remove}} gombot, majd még egyszer a megerősítéshez. A csomagból származó minden tétel egy lépésben távozik a könyvtárból. Az Ön által már a mennyiségkimutatáshoz adott tételek abban a mennyiségkimutatásban maradnak.

## Mit tartalmaz egy csomag

A csomag alatt a {{ui:Sources and details}} gombbal láthatja, miből származik minden összetevő: építési szabályzatokból, szabványokból és szakmai szövetségek telepítési útmutatóiból. A könyvtárban vigye az egérmutatót egy tétel fölé, hogy elolvassa a forrásait és feltételezéseit, például a bordatávolságot vagy a festék kiadósságát. Ellenőrizze ezeket a munkájához és a termékei adatlapjaihoz, és ahol eltérnek, módosítsa a képleteket (lásd [Összetevők és képletek](topic:assemblies)).

Minden csomag **Kezdő: még nem vizsgálta költségbecslő** jelölést kap, amíg a gyakorló költségbecslők át nem nézték.

Minden tételhez tartozik a CSI MasterFormat száma is, például `09 21 16`.

## Saját könyvtár megosztása csomagként

A könyvtárban a {{ui:Export as pack…}} gomb egy csomagfájlba (`.ccpack.json`) menti a könyvtárat, amelyet bárki hozzáadhat a {{ui:Open a pack file…}} lehetőséggel. Alapértelmezés szerint kihagyja az Ön által hozzáadott csomagokból származó tételeket, és nem tartalmaz egységárakat. Jelölje be a {{ui:Include my rates as sample rates}} lehetőséget, ha az egységárait is el szeretné küldeni: ezek a megadott régióval és dátummal címkézve érkeznek, és aki hozzáadja a csomagot, dönti el, használja-e őket.

A csomagfájlok egyszerű adatok, nem programok. A TakeoffCraft minden részüket ellenőrzi, mielőtt felhasználja, és kihagyja azt, amit nem tud beolvasni.
