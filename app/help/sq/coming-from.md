---
title: Ardhja nga programe të tjera llogaritjesh
summary: Si përshtaten zakonet e programeve të veçanta të llogaritjes dhe të mjeteve të shënimit PDF me TakeoffCraft, dhe dallimet që ngatërrojnë njerëzit.
keywords: kalim, migrim, kushte, pjesë, mjete matjeje, listë shënimesh, lidhja me sasinë, zakone llogaritjeje, dallime, krahaso
from: 12004ce5
---

Nëse e ke bërë llogaritjen me PlanSwift ose me mjetet e matjes në Bluebeam Revu, pjesa më e madhe e TakeoffCraft do të të duket e njohur: një grup planimetrish, një shkallë për çdo fletë, gjërat që mat dhe një total të çmuar. Mënyra si lidhen pjesët me njëra-tjetrën është e ndryshme në disa vende, dhe ato vende janë më poshtë.

Nëse e njeh PlanSwift ose On-Screen Takeoff, zgjidh stilin e menusë {{ui:Tavolina e llogaritjes}} te {{ui:Cilësimet}} › {{ui:TakeoffCraft}} › {{ui:Menutë, tastet dhe miu}}: një shirit menush me Skedar, Redakto, Pamje, Shkallë, Llogaritje sasish, Artikujt, Shënime dhe Eksporto mbi një rresht veglash llogaritjeje, me paracaktimet e shkallës te shiriti i fletës. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).

## Zakonet e përshtatura

| Je i mësuar me | Në TakeoffCraft |
|---|---|
| Hapjen e një pune ose projekti që ruan planimetritë (PlanSwift) | Hap PDF-et dhe skedarin `.takeoff.json` të projektit njëri pranë tjetrit. Projekti ruan vetëm llogaritjen; PDF-et mbeten skedarët e tu. |
| Një listë shënimesh me shënime, re dhe theksime (Bluebeam) | {{ui:Shënime}} te shiriti i fletës: shënime, re dhe theksime me një gjendje (Hapur, Përgjigjur, Mbyllur), të listuara te **Shënimet** dhe të vizatuara në PDF-në e shënuar. Shih [Shënime, re dhe theksime](topic:markups). |
| Matjet e ruajtura si shënime brenda PDF-it (Bluebeam) | Llogaritja jeton te skedari `.takeoff.json`. {{ui:PDF e shënuar}} shkruan një kopje me llogaritjen e vizatuar brenda, për ndarje; {{ui:PDF me llogaritjen brenda}} shkruan një kopje që mban llogaritjen, për ta hapur sërish në TakeoffCraft. |
| Artikujt e llogaritjes (PlanSwift), mjete matjeje të personalizuara të ruajtura në Tool Chest (Bluebeam) | **Artikujt** te {{ui:Artikujt}}: emri, tipi, ngjyra, njësia, lartësia ose thellësia, humbja, normat. |
| Pjesë dhe montime me formula (PlanSwift) | {{ui:Montimi}} i artikullit: përbërës me një formulë që përdor `L H A N P`. |
| Vendosja e shkallës së faqes, ose kalibrimi (të dyja) | Lista {{ui:Të gatshme}} ose {{ui:Kalibro}} te grupi {{ui:Shkallë}}, për çdo fletë. {{ui:Kontrollo}} mat një përmasë të njohur. |
| Aplikimi i një shkalle për një interval faqesh | Jo ende: vendos çdo fletë veç e veç. |
| Viewports me shkallë të ndryshme në një fletë (Bluebeam) | Jo ende: një shkallë për fletë. |
| Mjetet e polilinjës dhe të sipërfaqes (Bluebeam), llogaritja lineare dhe e sipërfaqes (PlanSwift) | {{ui:Lineare}} ({{key:L}}) dhe {{ui:Sipërfaqe}} ({{key:A}}). |
| Mbajtja e Shift për vija të drejta | {{key:Shift}} kap në hapa prej 45°, e njëjta ide. |
| Kapja te vijat e vizatimit | Aktive si parazgjedhje: skajet, mesët, kryqëzimet dhe pika më e afërt në një vijë, me {{key:F3}} për ta fikur, si në programet CAD. |
| Mjeti i numërimit (të dyja) | {{ui:Numëro}} ({{key:C}}). |
| Kërkimi vizual i simboleve (Bluebeam) | {{ui:Numërim automatik}} ({{key:S}}): kutit një simbol, shqyrto, shto. |
| Prerje ose zbritje në sipërfaqe | {{ui:Prerje}} ({{key:X}}) mbi një sipërfaqe të zgjedhur, dhe prerje rrethore. |
| Zbritje në vija lineare | Vizato vijën drejt e dhe shtyp {{key:E}} ({{ui:Zbrit}}) për hapjen. Shih [Matja e vijave lineare](topic:measure-linear). |
| Segmente harku në një polivijë | {{ui:Hark}} ({{key:R}}): kliko një pikë në kurbë, pastaj fundin e saj. |
| Lista e shënimeve me kolona sasish (Bluebeam) | Tabela {{ui:Sasitë}}, {{ui:Sipas artikullit}} ose {{ui:Sipas fletës}}. |
| Rrjeti i vlerësimit me çmime (PlanSwift) | E njëjta tabelë: humbja, materiali dhe puna për njësi, totalet e zgjeruara, {{ui:Totali i punës}}. |
| Eksportimi në Excel | {{ui:XLSX}} me formula të gjalla, ose {{ui:CSV}}. |
| Esc për të ndaluar një mjet | {{key:Esc}} anulon dhe kthehet te {{ui:Përzgjidh}}. |
| Klikimi me të djathtën për të përfunduar | Klikimi me të djathtën përfundon një vijë ose mbyll një sipërfaqe edhe këtu. Nuk ka menu me klikim të djathtë. |

## Dallimet që ngatërrojnë njerëzit

**Llogaritja nuk ndodhet brenda PDF-it tënd.** Asgjë që bën nuk ndryshon PDF-et e tua. Ruaje skedarin `.takeoff.json` dhe mbaje bashkë me vizatimet. Dërgimi i PDF-it të shënuar te dikush nuk i dërgon një llogaritje të redaktueshme: dërgo skedarin e projektit dhe PDF-et origjinale, ose një [PDF me llogaritjen brenda](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF-et përputhen sipas përmbajtjes, jo sipas emrit.** Një fletë e rishikuar e ruajtur mbi emrin e vjetër të skedarit është për TakeoffCraft një skedar i ri, pa shkallë dhe pa shenja. Shenjat e vjetra mbeten te versioni i vjetër dhe vazhdojnë të numërojnë. Shih [Ruaj dhe rihap një llogaritje](topic:save-and-reopen#when-a-pdf-has-changed).

**Shenjat pa shkallë lihen jashtë, jo të numëruara si zero.** Nëse një fletë nuk ka shkallë, vijat dhe sipërfaqet e saj nuk numërohen, dhe tabela shkruan "E paplotë". Në shumë programe do të shihje thjesht 0. Shih [Vendos shkallën](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Nuk ka hamendësim të madhësisë së faqes.** Paracaktimet supozojnë se PDF-ja është printuar në madhësi të plotë. Një PDF me gjysmë madhësie ose "fit to page" kërkon {{ui:Kalibro}}. Përdor gjithmonë {{ui:Kontrollo}}.

**Një artikull, një tip kryesor, më shumë nëse kërkon.** Një artikull është lineare, sipërfaqe ose numërim, dhe tipi i tij mbyllet pasi ka shenja. Një kusht që jep si sipërfaqe ashtu edhe perimetrin e saj është një artikull sipërfaqe: perimetri i tij është ndryshorja `P`. Një mur me gjatësi dhe sipërfaqe është një artikull linear me lartësi. Për një artikull me shumë kushte, si një dhomë me dysheme, bazë dhe dyer, shëno llojet e tjera te **Mat gjithashtu**: secili çmohet në rreshtin e vet. Shih [Një artikull, disa lloje shenjash](topic:create-items#one-item-several-kinds-of-marks).

**Formulat llogariten mbi totalet.** Formulat e montimit përdorin totalet e artikullit në të gjitha fletët, jo çdo vijë veç e veç. `N` (numri i vijave ose sipërfaqeve) është aty për shtesa për vijë, si një stendë shtesë për çdo mur.

**Perimetri përfshin prerjet.** Perimetri `P` i një sipërfaqeje shton skajet e vrimave të saj. Shih [Mat sipërfaqet me prerje](topic:measure-areas#read-the-area).

**Tërheqja lëviz pamjen.** Tërheqja me butonin e majtë mbi fletë lëviz pamjen, në çdo mjet përveç {{ui:Numërim automatik}}. Nuk të duhet kurrë të kalosh në një mjet lëvizjeje. Rrota e miut zmadhon; nuk lëviz faqen.

**Një kopje rikuperimi, jo në re.** TakeoffCraft mban një kopje të punës tënde në këtë shfletues dhe e ofron përsëri pas një rënieje ([Nëse skeda ose shfletuesi ndalon](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), por llogaritja është jote për ta ruajtur: {{key:Mod+S}}. Ruajtja në re nuk është e disponueshme ende.

**Gjithçka është në shfletues.** Nuk ka nevojë për instalim, dhe planimetritë nuk ngarkohen kurrë. Për një aplikacion desktop, TakeoffCraft vjen në CadCraft Studio, me shtatë aplikacionet e tjera.

## Ende jo këtu

Zonat e shkallës për fletë nuk janë ndërtuar ende. Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet) për listën e plotë dhe çfarë të bësh në vend të saj.
