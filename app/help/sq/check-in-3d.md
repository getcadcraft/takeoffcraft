---
title: Kontrollo llogaritjen në 3D
summary: Shiko muret, soletat dhe numërimet e fletës së hapur të ngritura mbi vizatim, rrotullo rreth tyre, dhe kliko një për të zgjedhur shenjën e saj.
keywords: png, imazh, fotografi, pamje, grumbull, kate, nivele, fasadë, glb, gltf, eksporto 3d, trashësi muri, lartësi baze, hapje, kokë dere, 3d, tre d, kontroll, pamje, mure, lartësi muri, soletë, thellësi, vëllim, rrotullim, model, zgjedhje, izometrike, perspektivë
from: fb16b4f7
---

Pamja 3D është një kontroll, jo një vizatim i dytë: ajo e ngre llogaritjen e fletës mbi vetë fletën në ekran, kështu që një mur që mungon, një soletë e dyfishuar ose një numërim i shpërndarë shihet menjëherë.

Para se të fillosh: fleta ka nevojë për një shkallë ([Vendos shkallën](topic:set-the-scale)). Lartësitë dhe thellësitë kanë nevojë për këmbë reale, kështu që në një fletë pa shkallë {{ui:3D}} e thotë këtë dhe mbetet në fletën e sheshtë.

## Hap pamjen 3D

1. Shfaq fletën që dëshiron të kontrollosh.
2. Zgjidh {{ui:3D}} te shiriti që shfaq emrin dhe shkallën e fletës, ose shtyp {{key:3}}.
   Herën e parë, pamja 3D merr pak kohë për t'u ngarkuar. Fleta vizatohet në tokë, dhe llogaritja qëndron mbi të me ngjyrën e çdo artikulli.
3. Për t'u kthyer, zgjidh {{ui:3D}} përsëri, {{ui:Kthehu te fleta}}, ose shtyp {{key:3}}. Zgjedhja e një vegle vizatimi (Vijor, Sipërfaqe, Numërim dhe të tjera) gjithashtu kthen, sepse shenjat vizatohen në fletën e sheshtë.

Shfaq fletën në ekran; ndërro fletët në listën e fletëve, ose me {{key:PageDown}} dhe {{key:PageUp}}, dhe pamja 3D ndjek. Për të parë disa kate njëherësh, grumbulloji (më poshtë).

## Çfarë sheh

| Shenja | Në 3D |
|---|---|
| Segment vijor, artikull me lartësi | Një mur me atë lartësi përgjatë segmentit. Segmentet e lakuara ndjekin lakimin. |
| Segment vijor, artikull pa lartësi | Një vijë në fletë. Jepi artikullit një lartësi nën **Artikulli** për ta ngritur. |
| Sipërfaqe, artikull me thellësi | Një soletë me atë thellësi, me prerjet e saj të hapura. |
| Sipërfaqe, artikull pa thellësi | Një pllakë e hollë 2 inç, që të mbetet e dukshme. |
| Numërim | Një shtyllë e vogël mbi çdo pikë të numëruar. |

Lartësia është fusha {{ui:Lartësia}} e një artikulli vijor dhe thellësia është fusha {{ui:Thellësia}} e një artikulli sipërfaqe, nën **Artikulli** (shih [Krijo artikujt e llogaritjes](topic:create-items)). Ndrysho atë dhe pamja 3D përditësohet menjëherë. Shënimi nën emrin e fletës thotë çfarë mban fleta, për shembull "Kjo fletë në 3D: 2 mure, 1 soletë, 3 numërime", dhe sa segmente ose sipërfaqe nuk kanë lartësi ose thellësi. Klikimet kalojnë përmes tij te pamja.

Shifrat nuk ndryshojnë në 3D: sipërfaqja e murit është gjatësia e saktë herë lartësia, dhe vëllimi i soletës është sipërfaqja e saj neto (kontur minus prerje, lakimet të sakta) herë thellësia. Lakimet vizatohen si copa të shkurtra drejt vetëm në ekran.

## Shiko rreth

| Veprimi | Çfarë bën |
|---|---|
| Tërhiq, ose tërhiq me butonin e mesit | Rrotullo rreth llogaritjes. |
| {{key:Shift}} + tërheqje, ose tërhiq me butonin e djathtë | Lëviz. |
| Rrota e miut | Zmadho dhe zvogëlo te treguesi. |
| Lëvizje me dy gishta në trackpad | Rrotullo ({{key:Shift}} lëviz). Një pinch zmadhon. |
| {{ui:Iso}}, {{ui:Top}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}, {{ui:Bottom}} | Pamje standarde, të kornizuara mbi llogaritjen. Pamja 3D hapet në {{ui:Iso}}. |
| {{ui:Perspective}} | Perspektivë e ndezur ose e fikur (paralele kur është fikur). |
| {{ui:Zoom extents}} ose {{key:F}} | Fleta e plotë. |
| {{ui:Sheet}} | Shfaq ose fshih vizatimin në tokë. |
| Kubi i pamjes, lart djathtas | Kliko një faqe, skaj ose qoshe për të parë nga aty; tërhiqe për të rrotulluar; tërhiq unazën e busullës për ta kthyer; butoni shtëpi kthehet te {{ui:Iso}}. |

Këndi shfaq një kub pamjeje, një ikonë të vogël boshtesh X, Y, Z, ose asgjë: zgjidh në {{ui:Settings}}, te skeda TakeoffCraft, nën **Treguesi i qoshes** ([Cilësimet e TakeoffCraft](topic:settings)). Fleta e sheshtë nuk ka tregues qoshe.

:::touch
Një gisht rrotullon; dy gishta bëjnë pinch për zmadhim dhe lëvizin për të lëvizur. Një prekje zgjedh.
:::

## Mure me trashësi, bazë dhe hapje

Një segment vijor me lartësi qëndron si një shirit i hollë. Për ta parë si mur të vërtetë, jepi artikullit formën e tij nën **Në 3D** në cilësimet e tij:

- **Trashësia e murit** (8", 0.2 m): muri bëhet një solid, i qendërzuar mbi vijën që vizatove, me qoshe të prera me kënd.
- **Lartësia e bazës**: muri fillon kaq larg dyshemesë (një tavan i ulët, një rresht dollapësh të sipërm). Edhe artikujt e sipërfaqes e kanë këtë: një tavan në 9'-0".
- **Koka e hapjes**: një segment i zbritur (një derë, [Zbrit një pjesë të segmentit](topic:measure-linear#deduct-a-part-of-a-run)) e mban murin mbi atë lartësi, kështu që një derë shfaqet si derë. Pa të, një segment i zbritur lë një hendek deri lart.

Këto formojnë vetëm pamjen 3D: sasitë (gjatësia, sipërfaqja e murit, kostot) mbeten siç ishin.

## Grumbullo katet

1. Hap PDF-të e çdo kati.
2. Në pamjen 3D, zgjidh {{ui:Levels…}} dhe shkruaj kuotën e secilit kat, si `0` për katin përdhe dhe `12'` për tjetrin. Boshi e lë një fletë jashtë.
3. Zgjidh {{ui:Stack}}. Çdo fletë me nivel shfaq llogaritjen e saj në lartësinë e vet; fleta në ekran shtrihet nën katin e vet, të tjerat janë me kontur. Shënimi thotë sa kate janë në grumbull.

Fletët përputhen sipas vendit të tyre në faqe, kështu që kjo punon për planet e kateve të vizatuara njësoj (e njëjta madhësi dhe pozicion fletës). Një fletë me nivel por pa shkallë lihet jashtë, dhe shënimi e thotë këtë. Zgjidh {{ui:Stack}} përsëri për një fletë në çdo kohë. Nivelet ruhen bashkë me llogaritjen.

## Ruaj pamjen 3D si imazh

Zgjidh {{ui:PNG}} në shiritin 3D për një foto të pamjes siç duket në ekran (`… 3D.png`); {{key:Shift}} + klik në {{ui:PNG}} e bën dy herë më të madhe (`… 3D@2x.png`), për printim.

## Ruaj pamjen 3D si model

Zgjidh {{ui:GLB}} në shiritin 3D. Merr një skedar `.glb` (glTF, binar) të asaj që tregon pamja — katin në ekran, ose çdo kat të grumbulluar — që programet e tjera 3D e hapin: një objekt për çdo shenjë, i emërtuar sipas artikullit të saj, me ngjyrën e artikullit, në metra me Y lart. Vetë fleta dhe konturet nuk janë në të.

## Zgjidh një shenjë nga 3D

Kliko një mur, soletë, pllakë ose shtyllë. Shenja e saj bëhet shenja e zgjedhur, saktësisht si sikur ta kishe klikuar në fletë: shfaqet nën **Shenja e zgjedhur**, artikulli i saj bëhet aktual, dhe shiriti i gjendjes jep gjatësinë dhe lartësinë, ose sipërfaqen, thellësinë dhe jardët kub. {{key:Shift}} + klik shton shenja te përzgjedhja ose i heq prej saj. {{key:Delete}} fshin shenjat e zgjedhura dhe {{key:Mod+Z}} i kthen; {{key:Esc}} nuk zgjedh asnjë. Kthehu te fleta dhe të njëjtat shenja mbeten të zgjedhura.

:::tip
Vizatimi ndjek temën: në Model, fleta në tokë bëhet e errët si pamja e sheshtë.
:::
