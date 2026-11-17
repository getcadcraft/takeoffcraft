---
title: Mat sipërfaqet me hapje
summary: Konturo dyshemetë, tavanet dhe soletat, pritu vrima nga to, shto kurba, rrethe dhe hapje rrethore, dhe lexo sipërfaqen dhe perimetrin.
keywords: mbushje dhome, mbushje e rrjedhshme, mbushje me bojë, klikim brenda një dhome, sipërfaqe automatike, back-out, kolonë, shaft, zbritje nga disa artikuj, sipërfaqe, poligon, kontur, këmbë katrore, sf, hapje, vrimë, zbrit, rreth, hark, perimetër, dysheme, tavan, soletë
from: 34648db7
---

Një artikull sipërfaqeje mat sipërfaqen e mbyllur. Çdo kontur mund të ketë vrima të prera prej tij (një shaft, një kolonë, një vazo), dhe buzët e tij mund të jenë të drejta ose të lakuara.

Para se të fillosh: fleta duhet të ketë një shkallë ([Vendos shkallën](topic:set-the-scale)) dhe duhet të kesh një artikull sipërfaqeje ([Krijo artikujt e llogaritjes](topic:create-items)).

## Konturo një sipërfaqe

1. Kliko artikullin e sipërfaqes nën {{ui:Artikujt}}.
2. Zgjidh {{ui:Sipërfaqe}} në shirit, ose shtyp {{key:A}}.
3. Kliko çdo cep të dhomës ose soletës radhazi. Mbaj {{key:Shift}} për buzët 0°, 45° dhe 90°.
   Nga pika e tretë e tutje, kontura mbushet dhe shiriti i statusit shfaq "Sipërfaqe" dhe "perimetri". Një unazë e vogël shfaqet rreth pikës së parë.
4. Mbyll konturin: kliko pikën e parë (brenda unazës së saj), shtyp {{key:Enter}}, bëj klikim të dyfishtë, ose klikim të djathtë.
   Sipërfaqja mbushet lehtë me ngjyrën e artikullit, etiketohet me këmbët e saj katrore dhe bëhet shenja e zgjedhur.

{{key:Backspace}} heq cepin e fundit; {{key:Esc}} e hedh konturin tutje.

Një kontur që kryqëzohet me veten refuzohet: "Kontura kryqëzohet me veten, kështu që sipërfaqja do të ishte e gabuar. Vizatoje përsëri pa kryqëzim." Vizato një figurë si tetë si dy sipërfaqe.

## Kurbat

Gjatë konturimit, ndiz mënyrën e harkut ({{ui:Hark}} ose {{key:R}}). Pas një cepi, kliko një pikë përgjatë kurbës, pastaj ku mbaron kurba. Për të mbyllur konturin me një kurbë, bëj klikimin e fundit në pikën e parë. Sipërfaqja dhe perimetri përdorin kurbën e saktë. Shtyp {{key:R}} përsëri për buza të drejta. Për të ndryshuar një kurbë më vonë, zgjidh sipërfaqen dhe tërhiq dorezën rrethore në mes të harkut. Shih [Matja e gjatësive lineare](topic:measure-linear#arcs-and-curved-walls).

## Një rreth

1. Me një artikull sipërfaqeje, zgjidh {{ui:Rreth}} ose shtyp {{key:O}}.
2. Kliko qendrën.
3. Kliko çdo pikë në buzë.
   Ndërsa lëviz, shiriti i statusit shfaq rrezen dhe sipërfaqen. Rrethi shtohet si shenjë sipërfaqeje me sipërfaqe dhe perimetër të saktë.

## Mbush një dhomë me një klikim

Kur dhomat janë vizatuar si mure të mbyllura, {{ui:Dhoma}} ({{key:B}}) heq një dysheme me një klikim:

1. Zgjidh një artikull sipërfaqeje (për shembull një finiturë dyshemeje) dhe jepi fletës shkallën e saj.
2. Zgjidh {{ui:Dhoma}} në grupin {{ui:Llogaritja}}, ose shtyp {{key:B}}.
3. Kliko brenda një dhome, në dyshemenë e hapur (jo mbi një vijë ose etiketë).

TakeoffCraft lexon vijat e fletës, gjen hapësirën rreth klikimit dhe e konturon përgjatë faqeve të brendshme të mureve, si sipërfaqe të artikullit aktual. Hapjet e dyerve deri në **4'-0"** trajtohen si të mbyllura, kështu që kontura kalon drejt përtej derës; **Cilësimet › TakeoffCraft › Mbushja e dhomës mbyll hapjet deri në** e ndryshon atë gjerësi (3'-0" deri 8'-0"). Emrat e dhomave, mobiljet dhe pajisjet brenda dhomës nuk bëjnë vrima.

Refuzon, duke thënë arsyen, kur:

- klikimi është mbi një vijë ("Kjo është mbi një vijë");
- hapësira nuk është e mbyllur: një hapje më e gjerë se cilësimi lejon që ajo të dalë deri në skajin e fletës. Ngri cilësimin, ose konturo atë dhomë me dorë me {{ui:Sipërfaqe}};
- hapësira është shumë e vogël (një simbol, jo një dhomë).

Kur një derë është më e gjerë se cilësimi, mbushja hyn në dhomën tjetër dhe konturon të dyja bashkë: zhbëj ({{key:Mod+Z}}), ngri cilësimin dhe kliko përsëri. Kontrollo konturin si çdo sipërfaqe: tërhiq cepat e tij për ta rregulluar. Një fletë e skanuar punon njëlloj, por vijat e saj duhet të jenë mjaft të errëta; vijat gri të hollë mund të mos ndalojnë mbushjen.

## Pritu një vrimë nga një sipërfaqe

1. Zgjidh {{ui:Përzgjidh}} ({{key:V}}) dhe kliko sipërfaqen. Ajo shfaq doreza katrore në cepat e saj.
2. Zgjidh {{ui:Prerje}} në shirit (ose shtyp {{key:X}}), ose {{ui:Shto një hapje}} nën **Shenjën e zgjedhur**.
3. Kliko cepat e vrimës, brenda sipërfaqes. Mënyra e harkut funksionon edhe këtu.
4. Mbylle si një sipërfaqe: kliko pikën e parë, shtyp {{key:Enter}}, bëj klikim të dyfishtë ose klikim të djathtë.
   Vrima mbetet e pambushur, dhe shiriti i statusit thotë "Hapja u shtua. Vizato një tjetër, ose shtyp Esc."
5. Vizato më shumë vrima në të njëjtën sipërfaqe, ose shtyp {{key:Esc}}.

Për një vrimë rrethore, zgjidh {{ui:Shto një hapje rrethore}} nën **Shenjën e zgjedhur**, kliko qendrën, pastaj një pikë në buzën e saj.

Një hapje duhet të jetë plotësisht brenda sipërfaqes dhe të mos mbivendoset me një hapje tjetër. Përndryshe TakeoffCraft e refuzon: "Një hapje duhet të jetë plotësisht brenda sipërfaqes." ose "Hapjet nuk mund të mbivendosen me njëra-tjetrën."

Për të hequr vrimën e fundit, zgjidh {{ui:Hiq hapjen e fundit}}.

## Zbritje prapa: kolona, shaftet dhe hapje të prera nga disa artikuj

Një hapje i takon një shenje sipërfaqeje. Një **zbritje prapa** (back-out) vizatohet një herë dhe del nga çdo sipërfaqe me të cilën mbivendoset, për artikujt që zgjedh: vizato kolonat një herë dhe ato hiqen nga finitura e dyshemesë, tavani dhe soleta njëkohësisht.

1. Krijo një artikull sipërfaqeje për to, si "Kolona".
2. Te cilësimet e artikullit, shëno **Zbritje prapa: shenjat e tij marrin sipërfaqen e tyre nga artikuj të tjerë**. Shfaqet një listë e artikujve të tjerë të sipërfaqes, të gjithë të shënuar: hiq shënimin te ata që zbritjet prapa nuk duhet t'i prekin (për shembull bojën e mureve).
3. Llogarit kolonat me {{ui:Sipërfaqe}} ose {{ui:Rreth}}, si zakonisht. Çdo një vizatohet me vija të ndërprera.

Çdo shenjë sipërfaqeje e një artikulli të zgjedhur në të njëjtën fletë humbet pjesën që mbulon një zbritje prapa: e gjithë zbritja kur ndodhet brenda, vetëm pjesa e mbivendosur kur kalon skajin, dhe asgjë brenda një hapjeje. Paneli i sipërfaqes së zgjedhur shfaq **Zbritjet prapa** dhe sipërfaqen që mbetet. Sasia e artikullit, formulat e montimit, kostot, pamja 3D e kontrollit dhe eksportimi përdorin sipërfaqen që mbetet; shënimet e preventivit thonë sa morën zbritjet prapa. Vetë artikulli i zbritjes numëron sipërfaqen e tij (lëri kostot në zero nëse nuk e çmon).

Një zbritje prapa duhet të jetë **konveks**: një drejtkëndësh, një rreth ose çdo kontur pa kënd të brendshëm. TakeoffCraft refuzon ta vizatosh një të tillë; vizato një shaft në formë L si dy zbritje prapa. Zbritjet prapa nuk mund të kenë hapje, dhe dy zbritje prapa që mbivendosen me njëra-tjetrën numërohen të dyja.

Perimetri (`P`) nuk ndryshon: zbritjet prapa heqin vetëm sipërfaqe.

## Lexo sipërfaqen

Zgjidh sipërfaqen. **Shenja e zgjedhur** shfaq:

| Rreshti | Kuptimi |
|---|---|
| Sipërfaqe | Sipërfaqja neto: kontura minus hapjet. Kjo është ajo që numëron artikulli. |
| Kontura | Sipërfaqja bruto brenda konturit (shfaqet kur ka hapje). |
| Hapjet | Sa vrima, dhe sipërfaqja e tyre totale. |
| Perimetri | Gjatësia e buzës së konturit, **plus** buzët e çdo hapjeje ("me hapje"). |

Perimetri përfshin qëllimisht buzët e hapjeve, për gjëra si kofrazhet ose baza që kalojnë edhe rreth një vrime. Nëse të duhet vetëm buza e jashtme, mbaj vrimat jashtë atij artikulli ose mat buzën e jashtme si vijë lineare.

{{ui:Njësia}} e artikullit përcakton si raportohet totali: SF, SY ose m². Paneli **Shenja e zgjedhur** dhe shiriti i statusit tregojnë gjithmonë këmbë katrore.

## Rregullo një sipërfaqe

- **Zhvendos një cep**: zgjidh sipërfaqen dhe tërhiq një dorezë cepi (hapjet kanë doreza gjithashtu). Nëse forma e re kryqëzohet me veten ose shtyn një hapje jashtë, cepi kthehet: "Pika u kthye."
- **Zhvendos te një artikull tjetër**: zgjidh një artikull tjetër sipërfaqeje te lista **Artikulli** nën **Shenja e zgjedhur**.
- **Fshi**: {{key:Delete}}, {{ui:Fshi}} në shiritin te menuja {{ui:Më shumë}}, ose {{ui:Fshi shenjën}}.

## Thellësia për vëllime

Jepi artikullit të sipërfaqes një {{ui:Thellësia}} (për shembull `0'-4"` për një soletë) dhe përdor `A * H / 27` në një komponent montimi për të marrë jardë kubikë. Shih [Montimet dhe formulat](topic:assemblies).
