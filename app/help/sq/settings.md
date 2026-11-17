---
title: Cilësimet e TakeoffCraft
summary: Shfaq inçët deri në 1/16, 1/8 ose 1/4, fillo artikujt e rinj me një përqindje humbjeje, zgjidh ku fillon rrëshqitësi i numërimit automatik, kap vijat e vizatimit ose 45° pa mbajtur Shift, vendos sa gjerë derë e mbyll Mbushja e dhomës, dhe zgjidh treguesin e këndit për pamjen 3D.
keywords: cilësime, preferenca, opsione, saktësi, thyesa, inç, rrumbullakim, humbje, humbje parazgjedhur, numërim automatik, prag, përputhje, rrëshqitës, kapje, 45, kënd, shift, kubi i pamjes, ikona e boshteve, tregues këndi, 3d
from: bca3f0ed
---

Hap {{ui:Cilësimet}} me rrotën te shiriti i aplikacionit ose {{key:Mod+,}}. Skeda e parë, {{ui:TakeoffCraft}}, mban cilësimet që i takojnë këtij aplikacioni; {{ui:Të përgjithshme}} mban ato që i ndajnë të gjitha aplikacionet CadCraft (tema, panelet, shiriti i veglave). Cilësimet e TakeoffCraft ekzistojnë vetëm në aplikacion: i ndryshon këtu, dhe ky shfletues i mban mend. {{ui:Rivendos cilësimet e TakeoffCraft}} i kthen ato në fillim.

## Këmbë dhe inç

Shfaq gjatësitë deri në **1/16"** më të afërt (fillimi), **1/8"** ose **1/4"**. Kjo ndryshon mënyrën si lexohen gjatësitë në fletë, në panele, në sasi dhe në shiritin e statusit.

Vetëm shfaqja rrumbullakoset. Sasitë, kostot dhe eksportet llogariten nga gjatësitë e sakta, dhe eksportet tregojnë gjithmonë 1/16".

## Humbja për të filluar

Përqindja e humbjes që fillon çdo artikull i ri: 0% (fillimi), 2%, 3%, 5%, 7.5%, 10%, 15% ose 20%. Mund ta shkruash akoma një humbje tjetër për çdo artikull, te redaktuesi i artikullit ose direkt në tabelën e sasive. Artikujt që ke tashmë mbajnë humbjen e tyre.

## Numërimi automatik: ku fillon rrëshqitësi i përputhjes

Ku qëndron rrëshqitësi {{ui:Përputhja}} kur mbaron një kërkim [Numërim automatik](topic:auto-count), nga 50% deri në 95%; 75% është fillimi. Më ulët ofron më shumë të ngjashme për t'i refuzuar; më lart ofron më pak. Mund ta lëvizësh akoma rrëshqitësin gjatë çdo rishikimi.

## Kap vijat e vetë vizatimit

Aktive në fillim. Ndërsa mat ose kalibron, një pikë afër një vije të PDF-së kërcen te fundi i saj, mesi i saj, një kryqëzim ose pika më e afërt mbi të. {{key:F3}} dhe {{ui:Kapje}} në shiritin e statusit e ndezin dhe fikin gjithashtu. Më shumë: [Kap vijat e vizatimit](topic:snap-to-the-drawing).

## Mbushja e dhomës: sa gjerë hapjeje mbyll

{{ui:Mbushja e dhomës mbyll hapjet deri në}} vendos sa gjerë një hapje dere ose boshllëk që mjeti {{ui:Dhoma}} e trajton si të mbyllur: 3'-0" deri 8'-0", 4'-0" në fillim. Më e gjerë se dera më e gjerë lejon një dhomë të kalojë në tjetrën; më e ngushtë se një derë e lë dhomën të hapur. Shih [Mbush një dhomë me një klikim](topic:measure-areas#fill-a-room-with-one-click).

## Kap në 45° pa mbajtur Shift

Joaktiv në fillim. Kur është aktiv, vijat, konturet, prerjet dhe qoshet e tërhequra shkojnë në 0°, 45°, 90° ose 135° nga pika e fundit pa mbajtur {{key:Shift}}; mbaj {{key:Shift}} për të klikuar në çdo kënd. Shiriti i statusit lexon atëherë "Kap në 45°; Shift liron këndin". Pika që klikon mbi kurbën e një harku dhe rrathët nuk kapen kurrë; skaji i harkut kapet.

## Madhësia e shënuesit të numërimit

Sa të mëdha janë pikat e numërimit: {{ui:Shumë e vogël}}, {{ui:E vogël}}, {{ui:E mesme}} (fillimi: madhësia që kishin pikat gjithmonë) ose {{ui:E madhe}}. Madhësia mbahet në ekran në çdo zmadhim, dhe PDF-ja e shënuar vizaton çdo pikë me të njëjtën madhësi në letër, pavarësisht madhësisë së fletës, kështu që PDF në 100% duket si ekrani. Më shumë: [Numërimi me dorë](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Tregues këndi

Vetëm për [pamjen e kontrollit 3D](topic:check-in-3d): {{ui:Kubi i pamjes}} (fillimi: një kub lart djathtas për ta klikuar, tërhequr dhe rrotulluar), {{ui:Ikona e boshteve}} (një shenjues i vogël X, Y, Z poshtë djathtas) ose {{ui:Asnjë}}. Ndryshon menjëherë dhe ruhet në këtë shfletues. Fleta e sheshtë nuk shfaq kurrë asnjë.

## Rruga e lidhjes: hendeku më i madh që bashkon

{{ui:Mjeti i rrugës: hendeku më i madh për t'u bashkuar}} është sa larg mund të jenë dy skaje vije dhe akoma të numërohen si një rrugë, në pika PDF (0.05 deri 60; 1.5 në fillim). Vijat e një vizatimi shpesh ndalen pak larg njëra-tjetrës. Më i madh bashkon më shumë; më i vogël i mban vijat të ndara. {{key:[}} dhe {{key:]}} e ndryshojnë ndërsa zgjedh, dhe kjo fushë ndjek. Shih [Zgjidh vijat](topic:pick-the-lines).
