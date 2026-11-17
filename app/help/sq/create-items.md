---
title: Krijo artikuj llogaritjeje
summary: Krijo artikuj lineare, sipërfaqe dhe numërimi, dhe vendos njësinë, lartësinë ose thellësinë, humbjen dhe normat e materialit dhe të punës.
keywords: ekip, normë prodhimi, madhësi ekipi, rrogë, orë, orë-njeri, orë-punëtor, ditë-ekipi, orë pune, artikull, artikull i ri, kusht, shumë kushte, gjithashtu mat, disa lloje, dhomë, lineare, sipërfaqe, numërim, njësi, lartësi, thellësi, humbje, material, punë, normë, ngjyrë, kosto
from: 7fa5effc
---

Një **artikull** është diçka që e mat dhe e çmon: një lloj muri, një mbulesë dyshemeje, një tavan, një derë, një armaturë drite. Çdo shenjë që vizatoni i takon një artikulli. Programe të tjera i quajnë këto kushte.

Çdo artikull ka një lloj (dhe mund të marrë edhe lloje të tjera shenjash, shih [Një artikull, disa lloje shenjash](topic:create-items#one-item-several-kinds-of-marks)):

| Lloji | Vizaton | Raporton | Njësitë |
|---|---|---|---|
| Lineare | Vija të lidhura pikash | Gjatësi, numër vijash, dhe sipërfaqe muri kur ka lartësi | LF ose m |
| Sipërfaqe | Kontura të mbyllura, me heqje | Sipërfaqe, perimetër, numër sipërfaqesh | SF, SY, SQ, ac, ha ose m² |
| Numëro | Një klikim për çdo gjë | Sa janë | EA |
| Sasi e shtypur (pa vizatim) | Asgjë: ti shtyp sasinë | Numrin që shtype (ose një të sjellë nga CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ose m² |

## Sasi e shtypur (pa vizatim)

Disa gjëra në një parashikim nuk vizatohen kurrë: mobilizimi, lejet, një rezervë, një nënkontratë me shumë të plotë, prerja dhe mbushja që CivilCraft llogariti. Bëji **Sasi e shtypur**:

1. Zgjidh {{ui:Artikull i ri}}, shkruaj një emër, zgjidh {{ui:Sasi e shtypur (pa vizatim)}} dhe zgjidh {{ui:Shto}}.
2. Te redaktuesi i artikullit zgjidh {{ui:Njësia}} (LS për një shumë të plotë), dhe shkruaj {{ui:Sasia}}: `1`, `2.5` ose `1,250`.
3. Vendos humbjen dhe normat si për çdo artikull tjetër. Formulat e një montimi përdorin `Q`, sasinë, për shembull `ceil(Q / 12)` ngarkesa kamionësh.

Një sasi e shtypur nuk merr shenja dhe nuk e bën kurrë parashikimin të paplotë. Kur llogaritja ka {{ui:Zona e ofertimit}}, redaktuesi ka gjithashtu {{ui:Zona e ofertimit}}: sasia atëherë llogaritet në atë zonë, në alternativat dhe totalet e saj, ashtu si do ta bënte një shenjë atje. Sasitë e sjella nga një aplikacion tjetër tregojnë nga erdhën, shih [Punimet e tokës dhe kotat e pikave](topic:earthwork#cut-and-fill-from-civilcraft).

## Krijo një artikull

1. Te paneli {{ui:Artikujt}} në të djathtë, zgjidh {{ui:Artikull i ri}}.
2. Shkruaj një emër, si `Lloji A i murit të brendshëm` ose `Mbulesë qilimi`.
3. Zgjidh llojin: {{ui:Linear (gjatësi)}}, {{ui:Sipërfaqe}} ose {{ui:Numëro}}.
4. Zgjidh {{ui:Shto}} (ose shtyp {{key:Enter}}).
   Artikulli shfaqet në listë me ngjyrën e vet, bëhet artikulli me të cilin vizaton, dhe redaktuesi i tij hapet poshtë listës. Shiriti i statusit tregon cilin mjet të zgjedhësh më pas.

Shtyp {{key:Esc}} në formë për ta mbyllur pa shtuar artikull.

:::tip
Nëse zgjedh fillimisht një mjet matjeje, TakeoffCraft përdor artikullin e fundit të llojit të duhur, ose hap formën {{ui:Artikull i ri}} me atë lloj të zgjedhur paraprakisht.
:::

## Zgjidh artikullin me të cilin vizaton

Kliko një artikull në listë. Ai bëhet artikulli ku shkojnë shenjat e reja, dhe shenjat e tij theksohen në çdo fletë ndërsa të tjerët zbehen. Nëse fleta e hapur nuk ka asnjë nga shenjat e tij, TakeoffCraft kalon te një fletë që ka. Kliko artikullin përsëri për të ndaluar theksimin; mbetet artikulli me të cilin vizaton.

Klikimi i një shenje me mjetin {{ui:Përzgjidh}} e bën gjithashtu artikullin e saj artikullin aktual.

## Përgatit artikullin

Redaktuesi i artikullit (**Artikulli: (emri)**) ka këto fusha. Secila ruhet kur largohesh nga fusha ose shtyp {{key:Enter}}, dhe çdo ndryshim mund të zhbëhet.

| Fusha | Çfarë bën |
|---|---|
| {{ui:Emri}} | Shfaqet në listë, në tabela dhe në eksporte. |
| {{ui:Shkruaj}} | Lineare, Sipërfaqe ose Numëro. Kyçet pasi artikulli ka shenja ("Një artikull me shenja e mban llojin e vet"). |
| {{ui:Ngjyra}} | Ngjyra e shenjave të tij në ekran dhe në PDF-në e shënuar. |
| {{ui:Njësia}} | Në çfarë raportohet sasia: LF ose m për lineare; SF, SY, SQ, ac, ha ose m² për sipërfaqe; EA për numërim. |
| {{ui:Gjithashtu mat}} | Llojet e tjera të shenjave që merr artikulli, secila me njësinë e vet. Shih më poshtë. |
| {{ui:Lartësia}} (lineare) | Lartësia e murit. Artikulli atëherë raporton edhe sipërfaqen e murit (gjatësi × lartësi). Vijat që vijnë nga një model BimCraft mbartin dyert dhe dritaret e tyre: ato hiqen një herë, dhe artikulli thotë sipërfaqen bruto, hapjet dhe neton. Një llogaritje nga një projekt BimCraft që zgjodhi një metodë matjeje matet edhe këtu me atë metodë (shënimi e emëron, me burimin e saj, dhe thotë se nuk është kontrolluar nga një matës sasish); metoda nuk mund të ndryshohet në TakeoffCraft. Tullat ose blloqet dhe llaçi nga një lloj muri vijnë si dy komponentë: njësitë për t'u porositur dhe vëllimi i llaçit. |
| {{ui:Thellësia}} (sipërfaqe) | Një thellësi ose trashësi, e përdorur në formulat e montimit (për shembull vëllimi i betonit). |
| {{ui:Humbja %}} | Shtohet te sasia para çmimit: 10 do të thotë sasia × 1.10. |
| {{ui:Materiali $/LF}} | Kosto materiali për njësi. Etiketa ndjek njësinë: $/SF, $/EA e kështu me radhë. |
| {{ui:Puna $/LF}} | Kosto pune për njësi. |
| {{ui:Numri CSI}} | Numri i tij CSI MasterFormat, si `09 21 16` (ose vetëm divizioni, `09`). Fleta e punës "Sipas divizionit" i grupon kostot sipas tij. Artikujt nga [paketat e zanatit](topic:trade-packs) e kanë tashmë një. |

Lartësia dhe thellësia pranojnë këmbë dhe inç (`9'-0"`, `8' 6"`) ose këmbë dhjetore (`9`) për njësi imperiale, dhe metra (`2.7`, `2700 mm`) për njësi metrike. Normat pranojnë shuma si `12.50` ose `$1,250`, deri në katër dhjetore. Shih [Hyrja e gjatësisë, normës dhe përqindjes](topic:entry-formats).

Poshtë fushave, **Matur** tregon totalet që mund t'i përdorin formulat e artikullit, me shkronjat e tyre: Gjatësia (L), Vijat (N), Sipërfaqja e murit (A) për lineare; Sipërfaqja (A), Perimetri (P), Sipërfaqet (N) për sipërfaqe; Numri (N) për numërim.

## Një artikull, disa lloje shenjash

Disa gjëra matën më shumë se një mënyrë: një dhomë ka dysheme (sipërfaqe), një bazament përgjatë mureve të saj (gjatësi) dhe dyer (numërim). Në vend të tre artikujve, krijo një:

1. Krijo artikullin me llojin e tij kryesor, si artikull sipërfaqeje `Dhoma 101`.
2. Nën {{ui:Gjithashtu mat}} në redaktuesin e tij, shëno {{ui:Lineare}}, {{ui:Numëro}} ose të dyja. Secili merr një njësi pranë vetes.
3. Vizato me çdo mjet që lloji i tij e merr: me `Dhoma 101` aktual, {{ui:Sipërfaqe}} vizaton dyshemenë e tij, {{ui:Lineare}} bazamentin e tij dhe {{ui:Numëro}} dyert e tij. TakeoffCraft nuk kërkon një artikull tjetër.

Lista e artikujve shfaq çdo sasi (`50.00 SF + 2 EA`). Në tabelën e sasive, rreshti i artikullit ka sasinë e tij kryesore, dhe çdo lloj tjetër merr rreshtin e vet poshtë, si **Dhoma 101 (numëro)**, me humbjen dhe normat e veta të materialit dhe të punës. Eksportet, tabela për fletë dhe legjenda e PDF-së së shënuar i listojnë në të njëjtën mënyrë.

Llojit kryesor i mbeten fushat e veta: lartësia ose thellësia, pjerrësia, heqjet dhe forma 3D zbatohen vetëm për shenjat e tij. Një vijë baze e vizatuar për një artikull sipërfaqeje matet thjesht përgjatë planit, dhe shfaqet e sheshtë në 3D. Formulat e montimit përdorin totalet e llojit kryesor.

Një lloj mund të hiqet vetëm kur artikulli nuk ka shenja të tij; fshi ato, ose zhvendosi te një artikull tjetër nën **Shenja e zgjedhur**, më parë. Shenjat mund të kalojnë te çdo artikull që merr llojin e tyre.

Më poshtë është {{ui:Montimi}}: komponentë si kollonat ose dërrasat, secili me formulën dhe normat e veta. Shih [Montimet dhe formulat](topic:assemblies).

Në fund: {{ui:Lëviz lart}} dhe {{ui:Lëviz poshtë}} ndryshojnë vendin e artikullit në listë dhe në eksporte, dhe {{ui:Fshi artikullin}} e heq me të gjitha shenjat e tij (pasi pyet; mund ta zhbësh).

Artikujt e sipërfaqes kanë edhe **Pjerrësia** (plane çatie të matura në pjerrësi: [Çati dhe pjerrësi](topic:roofs-and-slopes)) dhe **Heqje** (shenjat e tyre heqin nga sipërfaqet e artikujve të tjerë: [Mat sipërfaqet](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Artikujt lineare kanë **Prirjen** (Nivel, Anësor, Qoshe ose Luginë) dhe, për anësorë dhe qoshe, **Pjerrësinë**.

## Normat në tabelë

Mund të shkruash edhe {{ui:Humbja %}}, normat e materialit dhe të punës direkt në tabelën {{ui:Sasitë}} poshtë ({{ui:Sipas artikullit}}). Është e njëjta cilësim si te redaktuesi.

## Si funksionon çmimi

Për çdo artikull dhe çdo komponent montimi:

1. **Me humbje** = sasia × (1 + humbja %).
2. **Materiali** = me humbje × materiali për njësi, rrumbullakuar në cent.
3. **Puna** = me humbje × puna për njësi, rrumbullakuar në cent.
4. **Totali** = materiali + puna.

{{ui:Totali i punës}} shton çdo artikull dhe çdo komponent. Një artikull mund të mbajë normat e veta dhe një montim njëkohësisht; të dyja numërohen, kështu lëre normat e artikullit 0 kur komponentët mbartin koston.

## Puna sipas ekipit

Në vend të një norme pune për njësi, puna e një artikulli mund të vijë nga një ekip: sa punon në orë, sa njerëz, dhe sa paguhet secili. Nën {{ui:Puna sipas ekipit}} te redaktuesi i artikullit, shëno {{ui:Çmo punën nga një ekip}} dhe plotëso:

| Fusha | Shembull |
|---|---|
| {{ui:Prodhimi}} | `20` LF në orë (në njësinë e artikullit) për të gjithë ekipin |
| {{ui:Madhësia e ekipit}} | `2` njerëz |
| {{ui:Paga $/orë secili}} | `45` |

TakeoffCraft llogarit, nga sasia me humbje:

- **orë-ekipi** = sasia ÷ prodhimi (110 LF ÷ 20 = 5.5),
- **orë-punëtori** = orë-ekipi × madhësia e ekipit (11),
- **ditë-ekipi** = orë-ekipi ÷ 8 (0.69),
- **puna** = orë-punëtori × paga ($495.00).

Redaktuesi tregon rezultatin dhe normën që rezulton ($4.50/LF). Norma e punës së vetë artikullit atëherë është vetëm për lexim, në redaktues dhe në tabelë. Kreu i tabelës {{ui:Sasitë}} shton orët-punëtor dhe ditët-ekip të të gjithë punës. Eksportet shënojnë orët e çdo ekipi, dhe në fletën e punës qeliza e punës është një formulë mbi ekipin (`ROUND(F2/20*2*45,2)`). Hiqe kutinë për t'u kthyer te një normë për njësi.

## Artikuj metrikë

Zgjidh m (lineare) ose m² (sipërfaqe) si njësi. Sasitë, lartësitë dhe vlerat e formulave atëherë janë në metra. Shkalla e fletës mund të jetë çdo parazgjedhje ose kalibrim; njësitë dhe shkallët janë të pavarura.

## Më pas

- [Mat vija lineare](topic:measure-linear)
- [Mat sipërfaqe me prerje](topic:measure-areas)
- [Numëro me dorë](topic:count-by-hand)
