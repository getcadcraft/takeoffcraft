---
title: Numëro gjithçka në grup
summary: Kutit një herë legjendën e simboleve dhe TakeoffCraft numëron çdo simbol të saj në çdo fletë të hapur në një ekzekutim. Çdo numërim është një lidhje me fletën e vet, dhe shqyrton para se të shtohet diçka.
keywords: numëro gjithçka, legjendë, legjendë simbolesh, grup i plotë, çdo fletë, të gjitha fletët, çdo derë, çdo pajisje, instalime, pajisje, tabelë, simbole, numërim automatik, numëro të gjitha, grup planimetrish, 200 fletë, nivel përputhjeje, të ngjashme
from: adc99744
---

{{ui:Numëro gjithçka}} lexon një legjendë simbolesh dhe më pas numëron çdo simbol të saj në çdo fletë të hapur. Është {{ui:Numërim automatik}} për një legjendë të tërë njëherësh. Është thjesht përputhje simbolesh në fletët e tua, jo një model i trajnuar, dhe asgjë nuk del nga kompjuteri yt. Shqyrto numërimet përpara se t'i shtosh: është një ndihmës, jo një garanci.

## Numëro një legjendë

1. Hap planimetritë. Një legjendë në çdo fletë është e mjaftueshme: simbolet me emrat pranë.
2. Zgjidh {{ui:Numëro gjithçka}} te shiriti i veglave.
3. Tërhiq një kuti rreth legjendës, simboleve dhe emrave. Një titull pa simbol pranë (SYMBOL LEGEND) lihet jashtë vetë.
   Paneli liston çdo simbol me figurën e tij dhe emrin e shtypur pranë. Emri bëhet emri i artikullit, kështu që riemërtoje këtu nëse dëshiron.
4. Hiq zgjedhjen e çdo simboli që nuk do të numërohet. Një simbol që nuk mund të kërkohet (shumë i vogël, ose bosh) thotë pse.
5. Zgjidh {{ui:Numëro në N fletë}}. Një shirit tregon fletën që kërkohet; {{ui:Anulo}} ndalon ekzekutimin. Fleta mbetet e përdorshme.

Simbolet e vetë legjendës nuk numërohen në fletën e saj. Një fletë e vizatuar me një shkallë tjetër kërkohet me atë shkallë, dhe simbolet gjenden të rrotulluara në çdo kënd të drejtë.

## Shqyrto numërimet

- Çdo simbol shfaq totalin e tij dhe, nën të, një lidhje për çdo fletë që ka ndonjë ("E-103: 4"). Kliko një për të shkuar te ajo fletë. Gjetjet janë të kutizuara me ngjyrën e artikullit.
- **Kliko një kuti** për ta lënë jashtë atë gjetje. Ajo bëhet me vija të ndërprera dhe e kryqëzuar; kliko sërish për ta kthyer.
- **Lëviz nivelin e përputhjes** (nga 50% deri në 100%, duke nisur nga niveli yt te Cilësimet). Më i lartë mban vetëm përputhjet e afërta. Rrëshqitësi vetëm filtron atë që u gjet; asgjë nuk kërkohet sërish.
- Dy simbole që duken të ngjashëm (një prizë dupleks dhe një kuadruple) mund të përputhen me të njëjtin vend. Përputhja më e mirë e merr dhe paneli thotë në sa vende ndodhi kjo, që t'i kontrollosh.
- Një fletë shumë e madhe për të kërkuar me madhësinë e simbolit kalohet dhe paneli e thotë këtë.

## Shtoji ato

Zgjidh {{ui:Shto N shenja}}. Çdo simbol bëhet një artikull numërimi me një shenjë mbi çdo gjetje. Një emër që është tashmë artikull numërimi yt ripërdoret (asgjë nuk dyfishohet aty ku ke shënuar tashmë me dorë). Ekzekutimi i tërë është një hap: {{key:Ctrl+Z}} i heq çdo artikull dhe shenjë.

Çfarë pranon të shtohet furnizon edhe {{ui:Mësuar}}: simbolet mbahen mend në skedarin e llogaritjes për herën tjetër.

## Me asistentin tënd

Nëse lejon asistentët te Cilësimet, ata mund të lexojnë një legjendë (legend_open), ta ekzekutojnë numërimin në sfond (legend_count_start, pastaj legend_count_status), të lexojnë numërimet (legend_count_result) dhe t'i shtojnë (legend_count_add, që mund të shikojë fillimisht çfarë do të shtonte). Është i njëjti ekzekutim që sheh në panel.

## Simbole në çdo kënd

Zgjidh {{ui:Simbole në çdo kënd}} përpara se të numërosh për të gjetur edhe simbole të vizatuara me kënd që nuk është kënd i drejtë (një prizë diagonale muri, një armaturë e rrotulluar për të ndjekur një çati). Kërkimi atëherë rrotullon çdo simbol çdo 15 gradë; një simbol rrethor ka ende nevojë për një kërkim, dhe një simbol që nuk është rrethor mund të marrë deri në gjashtë herë më shumë kohë. Lëre të fikur për planimetritë e vizatuara drejt.

## Gjëra të dobishme

- Kërkon simbole të vizatuara në të njëjtën mënyrë si në legjendë. Një legjendë e vizatuar në madhësi tjetër nga fletët është në rregull kur shkallët e fletëve janë vendosur; pa shkallë, simbolet kërkohen me madhësinë e legjendës.
- Një simbol me një mur ose një vijë të gjatë të vizatuar drejt përmes tij mund të mos gjendet, sepse nuk duket më si figura e legjendës. Kontrollo gjetjet në fletën e parë përpara se t'i besosh pjesës tjetër.
- Një skanim pa tekst funksionon edhe ai: simbolet gjenden sipas rreshtave të tyre, dhe ti shkruan emrat.
